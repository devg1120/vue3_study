<script setup>
let TITLE = "Test01: Handling User Input";
let DESC  = "Handling User Input";
let CODE  = `
<script>
<template>
`;
import { ref } from 'vue'
const message = ref('Hello World!')
function reverseMessage() {
  message.value = message.value.split('').reverse().join('')
}
function notify() {
  alert('navigation was prevented.')
}
</script>
 
<template>
  <p class="title">{{TITLE}}</p>
  <p >{{DESC}}</p>
  <hr><pre><code>{{CODE}}</code></pre></hr>

  <h1>{{ message }}</h1>
  <button @click="reverseMessage">Reverse Message</button>
  <button @click="message += '!'">Append "!"</button>
  <a href="https://vuejs.org" @click.prevent="notify">
    A link with e.preventDefault()
  </a>

</template>

<style>
button, a {
  display: block;
  margin-bottom: 1em;
}
</style>

<style scoped>
  p.title {
   font-weight: bold;
   background: #cce5ff ;
   padding-left: 5px;
  }
</style>

