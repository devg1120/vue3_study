<script setup>
let TITLE = "Test06: v-for ";
let DESC  = "配列に基づいて繰り返しレンダリング";
import { ref, computed } from "vue";

const todos = ref(["掃除", "洗濯", "買い物"]);

</script>
 
<template>
  <p class="title">{{TITLE}}</p>
  <p >{{DESC}}</p>
  <hr>
  <ul>
    <li v-for="(todo, i) in todos" :key="i">{{ i + 1 }}:{{ todo }}</li>
  </ul>
</template>

<style scoped>
  p.title {
   font-weight: bold;
   background: #cce5ff ;
   padding-left: 5px;
  }
</style>
