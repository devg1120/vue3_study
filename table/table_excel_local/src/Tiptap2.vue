<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'

type Props = {
  modelValue: string
}

type Emit = {
  (event: 'update:modelValue', value: Props['modelValue']): void
}

type TypographyOption = {
  label: string
  value: string
} & (
  | {
      nodeName: 'paragraph'
      nodeAttrs: {}
    }
  | {
      nodeName: 'heading'
      nodeAttrs: {
        level: 1 | 2 | 3 | 4 | 5 | 6
      }
    }
)

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const typographyOptions: TypographyOption[] = [
  { label: 'テキスト', value: 'p', nodeName: 'paragraph', nodeAttrs: {} },
  {
    label: '見出し1',
    value: 'h1',
    nodeName: 'heading',
    nodeAttrs: { level: 1 },
  },
  {
    label: '見出し2',
    value: 'h2',
    nodeName: 'heading',
    nodeAttrs: { level: 2 },
  },
  {
    label: '見出し3',
    value: 'h3',
    nodeName: 'heading',
    nodeAttrs: { level: 3 },
  },
  {
    label: '見出し4',
    value: 'h4',
    nodeName: 'heading',
    nodeAttrs: { level: 4 },
  },
  {
    label: '見出し5',
    value: 'h5',
    nodeName: 'heading',
    nodeAttrs: { level: 5 },
  },
  {
    label: '見出し6',
    value: 'h6',
    nodeName: 'heading',
    nodeAttrs: { level: 6 },
  },
]

const editor = new Editor({
  content: props.modelValue,
  extensions: [
    Image,
    Link.configure({
      openOnClick: false,
    }),
    StarterKit,
  ],
  editorProps: {
    attributes: {
      class: 'sandbox min-h-[200px] p-2 border border-base-40 text-sm focus:border-primary-60 focus:outline-none active:border-base-40 text-base-70 placeholder-shown:text-base-50 hover:border-base-60 hover:text-base-80',
    },
  },
})

const previewHtml = ref(false)

const innerValue = computed(() => {
  return editor.isEmpty ? '' : editor.getHTML()
})

const changeTypography = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  const typography = typographyOptions.find((e) => e.value === value)

  if (typography?.nodeName !== 'heading') {
    editor.chain().focus().clearNodes().run()
    return
  }

  editor.chain().focus().toggleHeading(typography.nodeAttrs).run()
}

const setLink = () => {
  const previousUrl = editor.getAttributes('link').href
  const url = window.prompt('URL', previousUrl)

  if (url === null) {
    return
  }

  if (url === '') {
    editor.chain().focus().extendMarkRange('link').unsetLink().run()

    return
  }

  editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
}

const addImage = () => {
  const url = window.prompt('URL')

  if (url) {
    editor.chain().focus().setImage({ src: url }).run()
  }
}

watch(innerValue, (v) => {
  emit('update:modelValue', v)
})

onBeforeUnmount(() => {
  editor.destroy()
})
</script>

<template>
  <div>
    <div
      v-if="editor"
      class="flex h-8 items-center rounded-t border-x border-t border-base-40 bg-base-20 px-2 text-sm"
    >
      <select
        :value="
          typographyOptions.find(({ nodeName, nodeAttrs }) =>
            editor.isActive(nodeName, nodeAttrs)
          )?.value
        "
        class="max-[180px] block h-6 cursor-pointer rounded border border-base-40 px-2 text-xs text-base-80 hover:border-base-60 focus:border-primary-60 focus:outline-none"
        @change="changeTypography"
      >
        <option
          v-for="{ value, label } in typographyOptions"
          :key="value"
          :value="value"
        >
          {{ label }}
        </option>
      </select>
      <hr class="mx-2 h-6 w-[1px] border-l border-base-50" />
      <button
        type="button"
        title="Bold"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{
          'text-primary-60': editor.isActive('bold'),
          'bg-base-20 text-base-40': !editor
            .can()
            .chain()
            .focus()
            .toggleBold()
            .run(),
        }"
        class="w-7 font-bold"
        @click="editor.chain().focus().toggleBold().run()"
      >
        B
      </button>
      <button
        type="button"
        title="Italic"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{
          'text-primary-60': editor.isActive('italic'),
          'bg-base-20 text-base-40': !editor
            .can()
            .chain()
            .focus()
            .toggleItalic()
            .run(),
        }"
        class="w-7 italic"
        @click="editor.chain().focus().toggleItalic().run()"
      >
        i
      </button>
      <hr class="mx-2 h-6 w-[1px] border-l border-base-50" />
      <button
        type="button"
        title="イメージ"
        button-style="tertiary"
        class="w-7 px-1"
        @click="addImage"
      >
        &#x1f5bc;
      </button>
      <button
        type="button"
        title="リンク"
        button-style="tertiary"
        class="w-7 text-xs font-semibold"
        @click="setLink"
      >
        &#128279;
      </button>
      <button
        type="button"
        title="分割線"
        button-style="tertiary"
        class="w-7"
        @click="editor.chain().focus().setHorizontalRule().run()"
      >
        &#x2501;
      </button>
      <button
        type="button"
        title="改行"
        button-style="tertiary"
        class="w-7"
        @click="editor.chain().focus().setHardBreak().run()"
      >
        &#x23CE;
      </button>
      <div class="grow"></div>
      <hr class="mx-2 h-6 w-[1px] border-l border-base-50" />
      <button
        type="button"
        title="Undo"
        button-style="tertiary"
        class="w-7 px-2"
        :class="{
          'bg-base-20 text-base-40': !editor.can().chain().focus().undo().run(),
        }"
        :disabled="!editor.can().chain().focus().undo().run()"
        @click="editor.chain().focus().undo().run()"
      >
        &lt;
      </button>
      <button
        type="button"
        title="Redo"
        class="w-7 px-2"
        :class="{
          'bg-base-20 text-base-40': !editor.can().chain().focus().redo().run(),
        }"
        :disabled="!editor.can().chain().focus().redo().run()"
        @click="editor.chain().focus().redo().run()"
      >
        &gt;
      </button>
      <hr class="mx-2 h-6 w-[1px] border-l border-base-50" />
      <button
        type="button"
        title="HTML表示"
        class="w-7 text-xs font-semibold"
        @click="previewHtml = !previewHtml"
      >
        &lt;/&gt;
      </button>
    </div>
    <EditorContent :editor="editor" />
    <div
      v-if="previewHtml"
      class="break-all border-x border-b border-base-40 p-2 text-sm text-base-70"
    >
      {{ innerValue }}
    </div>
    <div class="rounded-b border-x border-b border-base-40 bg-base-20 p-1" />
  </div>
</template>


