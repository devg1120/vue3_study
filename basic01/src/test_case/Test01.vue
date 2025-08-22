<script setup>
const message = "ようこそ <strong>太郎</strong>さん";
</script>
 
<template>
  <p class="title">Test01: v-text, v-html</p>
  <p v-text="message"></p>
  <p v-html="message"></p>
</template>

<style scoped>
  p.title {
   font-weight: bold;
   background: #cce5ff ;
   padding-left: 5px;
  }
</style>
