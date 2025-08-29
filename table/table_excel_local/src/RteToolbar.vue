<script setup lang="ts">



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



</script>

<template>
  <div id="my-toolbar">
    <!-- Add buttons as you would before -->
    <button class="ql-bold"></button>
    <button class="ql-italic"></button>
    <button class="ql-underline"></button>
    <button class="ql-strike"></button>

    <button class="ql-link"></button>
    <button class="ql-image"></button>

    <button class="ql-header" value="1"></button>
    <button class="ql-header" value="2"></button>

    <button class="ql-list" value="ordered"></button>
    <button class="ql-list" value="bullet"></button>
    <button class="ql-list" value="check"></button>

    <button class="ql-script" value="sub"></button>
    <button class="ql-script" value="super"></button>

    <button class="ql-indent" value="-1"></button>
    <button class="ql-indent" value="+1"></button>

  <select class="ql-size">
    <option value="small"></option>
    <option selected></option>
    <option value="large"></option>
    <option value="huge"></option>
  </select>

  <select class="ql-color">
     <option value="#000000"></option>      <!-- black     #000000  -->
     <option selected></option>
     <option value="#808080"></option>      <!-- gray      #808080  -->
     <option value="#DCDCDC"></option>      <!-- silver    #C0C0C0  -->
     <option value="#FFFFFF"></option>      <!-- white     #FFFFFF  -->
     <option value="#0000FF"></option>      <!-- blue      #0000FF  -->
     <option value="#2C7CFF"></option>      <!-- navy      #000080  -->
     <option value="#008088"></option>      <!-- teal      #008080  -->
     <option value="#30F9B2"></option>      <!-- green     #008000  -->
     <option value="#87CEFA"></option>      <!-- lime      #00FF00  -->
     <option value="#00FFFF"></option>      <!-- aqua      #00FFFF  -->
     <option value="#FFFF00"></option>      <!-- yellow    #FFFF00  -->
     <option value="#FF0000"></option>      <!-- red       #FF0000  -->
     <option value="#FF00FF"></option>      <!-- fuchsia   #FF00FF  -->
     <option value="#808000"></option>      <!-- olive     #808000  -->
     <option value="#800080"></option>      <!-- purple    #800080  -->
     <option value="orange"></option>      <!-- maroon    #800000  -->
  </select>


  <select class="ql-background">
     <option value="#000000"></option>      <!-- black     #000000  -->
     <option value="#808080"></option>      <!-- gray      #808080  -->
     <option value="#DCDCDC"></option>      <!-- silver    #C0C0C0  -->
     <option value="#FFFFFF"></option>      <!-- white     #FFFFFF  -->
     <option selected></option>
     <option value="#0000FF"></option>      <!-- blue      #0000FF  -->
     <option value="#2C7CFF"></option>      <!-- navy      #000080  -->
     <option value="#008088"></option>      <!-- teal      #008080  -->
     <option value="#30F9B2"></option>      <!-- green     #008000  -->
     <option value="#87CEFA"></option>      <!-- lime      #00FF00  -->
     <option value="#00FFFF"></option>      <!-- aqua      #00FFFF  -->
     <option value="#FFFF00"></option>      <!-- yellow    #FFFF00  -->
     <option value="#FF0000"></option>      <!-- red       #FF0000  -->
     <option value="#FF00FF"></option>      <!-- fuchsia   #FF00FF  -->
     <option value="#808000"></option>      <!-- olive     #808000  -->
     <option value="#800080"></option>      <!-- purple    #800080  -->
     <option value="orange"></option>      <!-- maroon    #800000  -->
  </select>

  <select class="ql-font">
    <option value="monospace"></option>
    <option value="sans-serif"></option>
    <option value="serif"></option>
  </select>

   <button id="custom-button" @click="get_fonts" >Fonts</button>

  </div>

</template>
<style>

.ql-snow .ql-picker.ql-expanded .ql-picker-options {
  z-index: 20;
}


</style>
