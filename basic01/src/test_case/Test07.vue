<script setup>
let TITLE = "Test07: v--f, v-else ";
let DESC  = "条件で表示非表示を切り替え";
import { ref, computed } from "vue";

const trafficSignal = ref("blue");

</script>
 
<template>
  <p class="title">{{TITLE}}</p>
  <p >{{DESC}}</p>
  <hr>
  <p v-if="trafficSignal === 'blue'">GO!</p>
  <p v-else-if="trafficSignal === 'red'">STOP!</p>
  <button @click="trafficSignal = 'blue'">青信号</button>
  <button @click="trafficSignal = 'red'">赤信号</button>
</template>

<style scoped>
  p.title {
   font-weight: bold;
   background: #cce5ff ;
   padding-left: 5px;
  }
</style>
