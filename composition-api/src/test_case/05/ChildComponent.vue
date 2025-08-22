<template>
  <div>
    <h2>Child Component</h2>
  </div>
  <div>
    <button @click="sendMessageToParent">Send Message to Parent</button>
  </div>
</template>


<script setup>
const emit = defineEmits(['sendMessage'])

const sendMessageToParent = () => {
  const newMessage = 'Hello from Child!';
  emit('sendMessage', newMessage);
};

</script>
