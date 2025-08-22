<script setup>
  import { ref } from "vue";
  const myname = ref("");
</script>
 
<template>
  <p class="title">Test03: v-model </p>
  <p >type="text"のinputに使用し、データとフロント両方で値をバインド</p>
  <p>お名前は？: <input type="text" v-model="myname" /></p>
  <p v-html="myname"></p>
</template>

<style scoped>
  p.title {
   font-weight: bold;
   background: #cce5ff ;
   padding-left: 5px;
  }
</style>
