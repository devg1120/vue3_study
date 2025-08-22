<script setup>
let TITLE = "Test05: Composition API  emit";
let DESC  = "Composition API emit";

import ChildComponent from './05/ChildComponent.vue';

import { ref } from "vue";
const message = ref(''); 
const updateMessage = (newMessage) => {
  message.value += " ::" + newMessage;
};

let CODE = `
# script setup
   import ChildComponent from './05/ChildComponent.vue';
   import { ref } from "vue";
   const message = ref(''); 
   const updateMessage = (newMessage) => {
     message.value = newMessage;
   };

# template
  <div>
    <p>{{ message }}</p>
    <ChildComponent @sendMessage="updateMessage" />
  </div>

---------------------------------------------------------
ChildComponent.vue
# template 
  <div>
    <h2>Child Component</h2>
  </div>
  <div>
    <button @click="sendMessageToParent">Send Message to Parent</button>
  </div>

# script setup
 const emit = defineEmits(['sendMessage'])
 const sendMessageToParent = () => {
   const newMessage = 'Hello from Child!';
   emit('sendMessage', newMessage);
 };

`;
</script>
 
<template>
  <p class="title">{{TITLE}}</p>
  <p >{{DESC}}</p>
  <hr>
  <pre><code>{{CODE}}</code></pre>
  <hr>
  <div>
    <p>{{ message }}</p>
    <ChildComponent @sendMessage="updateMessage" />
  </div>

</template>

<style scoped>
  p.title {
   font-weight: bold;
   background: #cce5ff ;
   padding-left: 5px;
  }
</style>
