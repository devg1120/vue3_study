<script setup>
let TITLE = "Test03: Composition API  computed";
let DESC  = "Composition API computed";

import { ref, computed } from "vue";

const count = ref(0);
const increment = () => count.value++;
const decrement = () => count.value--;
const doubleNumber = computed(() => count.value * 2);

let CODE = `
_script setup_
 import { ref, computed } from "vue";

 const count = ref(0);
 const increment = () => count.value++;
 const decrement = () => count.value--;
 const doubleNumber = computed(() => count.value * 2);
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
  <p> {{doubleNumber}}</p>
</template>

<style scoped>
  p.title {
   font-weight: bold;
   background: #cce5ff ;
   padding-left: 5px;
  }
</style>
