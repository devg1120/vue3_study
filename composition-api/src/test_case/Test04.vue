<script setup>
let TITLE = "Test04: Composition API  props / dynamic props";
let DESC  = "Composition API props / dynamic props";

import ChildComponent from './04/ChildComponent.vue';
import { ref, computed } from "vue";
const dynamicMessage = ref('This can change!');
const change = () => dynamicMessage.value += " ::Change!!!";

let CODE = `
# script setup
 import ChildComponent from './04/ChildComponent.vue';
 import { ref, computed } from "vue";
 const dynamicMessage = ref('This can change!');
 const change = () => dynamicMessage.value = "Change!!!";

# template
  <ChildComponent message="Hello from parent!"/>
  <ChildComponent :message="dynamicMessage" />
  <button @click="change()" style="cursor: pointer">change</button>

-------------------------------------------------------------------
ChildComponent.vue
# template
  <div>
    <h2>Child Component</h2>
  </div>
  <div>
    <p>{{ message }}</p>
  </div>

# script setup
import { defineProps } from 'vue';
const props = defineProps({
  message: String
});

`;
</script>
 
<template>
  <p class="title">{{TITLE}}</p>
  <p >{{DESC}}</p>
  <hr>
  <pre><code>{{CODE}}</code></pre>
  <hr>
  <ChildComponent message="Hello from parent!"/>
  <ChildComponent :message="dynamicMessage" />
  <button @click="change()" style="cursor: pointer">change</button>

</template>

<style scoped>
  p.title {
   font-weight: bold;
   background: #cce5ff ;
   padding-left: 5px;
  }
</style>
