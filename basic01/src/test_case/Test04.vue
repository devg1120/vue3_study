<script setup>
  import { ref, computed } from "vue";
   
  const message = computed(() => {
    return "ようこそ<strong>" + myname.value + "</strong>さん";
  });
  const myname = ref("");
</script>
 
<template>
  <p class="title">Test04: computed </p>
  <p >v-modelで双方向バインディングされた値を変数内で扱いたい場合 computed を利用 </p>
  <p>お名前は？: <input type="text" v-model="myname" /></p>
  <p v-html="message"></p>

 

</template>

<style scoped>
  p.title {
   font-weight: bold;
   background: #cce5ff ;
   padding-left: 5px;
  }
</style>
