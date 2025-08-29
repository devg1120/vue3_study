<script setup lang="ts">
import { ref, computed, useTemplateRef, onMounted } from 'vue'

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';


let S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let N = 8;
let ID = Array.from(crypto.getRandomValues(new Uint8Array(N))).map((n)=>S[n%S.length]).join('');
console.log(ID);

let editor_id = "q-editor-" + ID;
let editor_sid = "#" + editor_id;
let toolbar_id = "my-toolbar-" + ID;
let toolbar_sid = "#" + toolbar_id;


const qeditor  = useTemplateRef('qeditor')
//const qeditor  = ref();
let isFocus = ref(false);

const handleMouseEnter = () => {
  console.log('focus in', editor_id);
  isFocus.value = true;
  console.log(qeditor.value.getToolbar());
  let ele = qeditor.value.getToolbar();
  ele.style.display = "inline-block"
};
const handleMouseLeave = () => {
  console.log('focus out', editor_id);
  isFocus.value = false;
  let ele = qeditor.value.getToolbar();
  ele.style.display = "none"
};

//const classObject = computed(() => (  isFocus ? "toolbar-show" : "toolbar-hidden"));
const classObject = computed(() => {  
   if (isFocus.value) {
      return "toolbar-show" ;
   } else {
      return "toolbar-hidden";
   }
});

//let ref_main = ref()
/*
const qeditor  = useTemplateRef('qeditor')

onMounted(() => {
   qeditor.value.focus();
   //qeditor.value.parent.addEventListener('@mouseenter', handleMouseEnter);
   //qeditor.addEventListener('@mouseleave', handleMouseLeave);

})

*/

function toolbar_close() {
  let ele = qeditor.value.getToolbar();
  ele.style.display = "none"

}



</script>

<template>
<!--
  <QuillEditor :toolbar="toolbar_option1"  />
  d}
  <QuillEditor :toolbar="toolbar_option2"  />
-->
<!--
  <QuillEditor toolbar="full" />

  <QuillEditor id="q-editor" toolbar="#my-toolbar" ></QuillEditor>
  <div id="my-toolbar">

  <QuillEditor id="q-editor" toolbar={{sid}} ></QuillEditor>
  <div id={{id}}>

  <QuillEditor v-bind:id="editor-id" v-bind:toolbar="toolbar-sid" ></QuillEditor>
  <div v-bind:id="toolbar-id">
  <QuillEditor theme="snow"  v-bind:id="editor_id" v-bind:toolbar="toolbar_sid" ></QuillEditor>
-->
<!--
  <QuillEditor theme="bubble"   toolbar="full" />
<Teleport to="#app">
-->

<!--
  <QuillEditor theme="snow"  v-bind:id="editor_id" v-bind:toolbar="toolbar_sid" ></QuillEditor>
-->

  <div class="quill_toolbar" v-bind:id="toolbar_id">
    <button class="ql-bold"></button>
    <button class="ql-underline"></button>

    <button class="ql-link"></button>
    <button class="ql-image"></button>


    <button class="ql-list" value="bullet"></button>
    <button class="ql-list" value="check"></button>


    <button class="ql-indent" value="-1"></button>
    <button class="ql-indent" value="+1"></button>


  <select class="ql-color">
     <option value="#000000"></option>      
     <option selected></option>
     <option value="#808080"></option>     
     <option value="#DCDCDC"></option>    
     <option value="#FFFFFF"></option>    
     <option value="#0000FF"></option>    
     <option value="#2C7CFF"></option>    
     <option value="#008088"></option>    
     <option value="#30F9B2"></option>   
     <option value="#87CEFA"></option>  
     <option value="#00FFFF"></option>  
     <option value="#FFFF00"></option>  
     <option value="#FF0000"></option>  
     <option value="#FF00FF"></option>  
     <option value="#808000"></option>  
     <option value="#800080"></option>  
     <option value="orange"></option>  
  </select>


  <select class="ql-background">
     <option value="#000000"></option>   
     <option value="#808080"></option>   
     <option value="#DCDCDC"></option>   
     <option value="#FFFFFF"></option>   
     <option selected></option>
     <option value="#0000FF"></option>   
     <option value="#2C7CFF"></option>   
     <option value="#008088"></option>   
     <option value="#30F9B2"></option>   
     <option value="#87CEFA"></option>   
     <option value="#00FFFF"></option>   
     <option value="#FFFF00"></option>   
     <option value="#FF0000"></option>   
     <option value="#FF00FF"></option>   
     <option value="#808000"></option>   
     <option value="#800080"></option>   
     <option value="orange"></option>   
  </select>


   <button id="custom-button" @click="toolbar_close" >Close</button>

  </div>
  <!--
  <QuillEditor theme="snow" class="toolbar-show"  v-bind:id="editor_id" v-bind:toolbar="toolbar_sid" ></QuillEditor>
  <QuillEditor theme="snow" class="toolbar-hidden"  v-bind:id="editor_id" v-bind:toolbar="toolbar_sid" ></QuillEditor>
  <QuillEditor theme="snow" class="toolbar-show"  v-bind:id="editor_id" v-bind:toolbar="toolbar_sid" 
  <QuillEditor ref="qeditor" theme="snow"  :class="isFocus ? toolbar-show : toolbar-hidden" v-bind:id="editor_id" v-bind:toolbar="toolbar_sid" 
  <QuillEditor ref="qeditor" theme="snow"  :class="classObject" v-bind:id="editor_id" v-bind:toolbar="toolbar_sid" 
         @focus="handleMouseEnter" 
         @blur="handleMouseLeave" 
         @mouseenter="handleMouseEnter" 
         @mouseleave="handleMouseLeave" 
  -->
  <QuillEditor ref="qeditor" theme="snow"  :class="classObject" v-bind:id="editor_id" v-bind:toolbar="toolbar_sid" 
         @focus="handleMouseEnter" 

  ></QuillEditor>

</template>
<style >
/* toolbar_sid */
table td  .rte-editor {
   padding: 0;
   margin:0;
}

table td  .ql-snow.ql-container.toolbar-show {
   /* height: 70%;*/
   height: calc(100% - 21px);
   padding: 0;
   margin:0;
   border :0;
}
table td  .ql-snow.ql-container.toolbar-hidden {
   /* height: 70%;*/
   /*height: calc(100% - 21px);*/
   height: 105% ;
   padding: 0;
   margin:0;
   border :0;
}

/*
table td  .ql-snow.ql-toolbar-show {
 display:inline-block;
}
table td  .ql-snow.ql-toolbar-hidden {
 display:none;
}
*/

table td .ql-snow.ql-toolbar button, .ql-snow .ql-toolbar button {
 margin-left: 1;
 margin-right: 0;
 height: 22px;
 width:  20px;
 padding: 3px 5px;
}


table td .ql-snow.ql-toolbar {
  padding:0px;
  margin-left: -10px;
 display:none;
}

</style>
