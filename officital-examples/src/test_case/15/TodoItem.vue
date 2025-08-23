<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggle', 'delete'])

const completed = ref(props.item.completed)
</script>

<template>
  <li class="todo-item">
    <input type="checkbox" v-model="completed" @change="emit('toggle', item)" />
    <span :class="{ completed }">{{ item.text }}</span>
    <button @click="emit('delete', item)">削除</button>
  </li>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.completed {
  text-decoration: line-through;
  color: #999;
}
</style>

