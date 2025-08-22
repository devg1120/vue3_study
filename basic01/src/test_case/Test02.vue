<script setup>
 const message = "ようこそ <strong>太郎</strong>さん";
 const color1 = "red";
</script>
 
<template>
  <p class="title">Test02: v-bind </p>
  <p >属性内に変数を使う</p>
  <p v-html="message" v-bind:style="{ backgroundColor: color1, color: 'white' }"></p>
</template>

<style scoped>
  p.title {
   font-weight: bold;
   background: #cce5ff ;
   padding-left: 5px;
  }
</style>
