<script setup lang="ts">

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

let toolbar_option1 =  [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  ['link', 'image'  ],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme

];

let toolbar_option2 =  [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  ['link', 'image', 'video', 'formula'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']
];

function get_fonts() {
   let el = document.getElementById("q-editor");
   let cssv = getComputedStyle(el,'').fontFamily;
   console.log(cssv);

}



</script>

<template>

<QuillEditor theme="bubble"  v-bind:id="editor_id" v-bind:toolbar="toolbar_sid" ></QuillEditor>
  <div class="quill_toolbar ql-toolber" v-bind:id="toolbar_id">
    <button class="ql-bold"></button>
    <button class="ql-italic"></button>
    <button class="ql-underline"></button>
    <button class="ql-strike"></button>

    <button class="ql-link"></button>
    <button class="ql-image"></button>

    <button class="ql-list" value="ordered"></button>
    <button class="ql-list" value="bullet"></button>
    <button class="ql-list" value="check"></button>

    <button class="ql-script" value="sub"></button>
    <button class="ql-script" value="super"></button>

    <button class="ql-indent" value="-1"></button>
    <button class="ql-indent" value="+1"></button>

  <select class="ql-color">
     <option value="#000000"></option>
     <option value="#e60000"></option>
     <option value="#ff9900"></option>
     <option value="#ffff00"></option>
     <option value="#008a00"></option>
     <option value="#0066cc"></option>
     <option value="#9933ff"></option>
     <option value="#ffffff"></option>
     <option value="#facccc"></option>
     <option value="#ffebcc"></option>
     <option value="#ffffcc"></option>
     <option value="#cce8cc"></option>
     <option value="#cce0f5"></option>
     <option value="#ebd6ff"></option>
     <option value="#bbbbbb"></option>
     <option value="#f06666"></option>
     <option value="#ffc266"></option>
     <option value="#ffff66"></option>
     <option value="#66b966"></option>
     <option value="#66a3e0"></option>
     <option value="#c285ff"></option>
     <option value="#888888"></option>
     <option value="#a10000"></option>
     <option value="#b26b00"></option>
     <option value="#b2b200"></option>
     <option value="#006100"></option>
     <option value="#0047b2"></option>
     <option value="#6b24b2"></option>
     <option value="#444444"></option>
     <option value="#5c0000"></option>
     <option value="#663d00"></option>
     <option value="#666600"></option>
     <option value="#003700"></option>
     <option value="#002966"></option>
     <option value="#3d1466"></option>
  </select>

  <select class="ql-background">
     <option value="#000000"></option>
     <option value="#e60000"></option>
     <option value="#ff9900"></option>
     <option value="#ffff00"></option>
     <option value="#008a00"></option>
     <option value="#0066cc"></option>
     <option value="#9933ff"></option>
     <option value="#ffffff"></option>
     <option value="#facccc"></option>
     <option value="#ffebcc"></option>
     <option value="#ffffcc"></option>
     <option value="#cce8cc"></option>
     <option value="#cce0f5"></option>
     <option value="#ebd6ff"></option>
     <option value="#bbbbbb"></option>
     <option value="#f06666"></option>
     <option value="#ffc266"></option>
     <option value="#ffff66"></option>
     <option value="#66b966"></option>
     <option value="#66a3e0"></option>
     <option value="#c285ff"></option>
     <option value="#888888"></option>
     <option value="#a10000"></option>
     <option value="#b26b00"></option>
     <option value="#b2b200"></option>
     <option value="#006100"></option>
     <option value="#0047b2"></option>
     <option value="#6b24b2"></option>
     <option value="#444444"></option>
     <option value="#5c0000"></option>
     <option value="#663d00"></option>
     <option value="#666600"></option>
     <option value="#003700"></option>
     <option value="#002966"></option>
     <option value="#3d1466"></option>
  </select>

<!--
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
-->
  <select class="ql-font">
    <option value="monospace"></option>
    <option value="sans-serif"></option>
    <option value="serif"></option>
  </select>

   <button id="custom-button" @click="get_html" >html</button>

  </div>

</template>
<style>
.ql-bubble .ql-tooltip{
   left:0px !important;
   /* background-color: red;*/
   border-radius: 6px;
}

#custom-button {
   color: #ffffff;
}

</style>
