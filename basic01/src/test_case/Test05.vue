<script setup>
let TITLE = "Test05: v-on ";
let DESC  = "イベントをハンドリング";
import { ref, computed } from "vue";

const number = ref(0);
const add = () => {
  number.value++;
};
const remove = () => {
  number.value--;
};

</script>
 
<template>
  <p class="title">{{TITLE}}</p>
  <p >{{DESC}}</p>
  <hr>
  <input type="text" v-model="number" />
  <button v-on:click="add()">足す</button>
  <button v-on:click="remove()">引く</button>

</template>

<style scoped>
  p.title {
   font-weight: bold;
   background: #cce5ff ;
   padding-left: 5px;
  }
</style>
