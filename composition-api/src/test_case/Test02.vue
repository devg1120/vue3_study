<script setup>
let TITLE = "Test02: Composition API";
let DESC  = "Composition API";

import { ref } from "vue";

const count = ref(0);
const increment = () => count.value++;
const decrement = () => count.value--;

let CODE = `
_script setup_
 import { ref } from "vue";

 const count = ref(0);
 const increment = () => count.value++;
 const decrement = () => count.value--;
_/script_
`;
</script>
 
<template>
  <p class="title">{{TITLE}}</p>
  <p >{{DESC}}</p>
  <hr>
  <pre><code>{{CODE}}</code></pre>
  <hr>
  <p> {{count}}</p>
   <button @click="increment()" style="cursor: pointer">+</button>
   <button @click="decrement()" style="cursor: pointer">-</button>
</template>

<style scoped>
  p.title {
   font-weight: bold;
   background: #cce5ff ;
   padding-left: 5px;
  }
</style>
