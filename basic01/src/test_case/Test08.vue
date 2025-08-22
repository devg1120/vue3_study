<script setup>
let TITLE = "Test08: props, slot ";
let DESC  = "コンポーネント間でデータを渡す";
import AppHeader from "./components/AppHeader.vue";
import AppChild from "./components/AppChild.vue";

</script>
 
<template>
  <p class="title">{{TITLE}}</p>
  <p >{{DESC}}</p>
  <hr>
  <AppHeader textColor="red">header</AppHeader>
  <main>contents</main>
  <AppHeader textColor="yellow">
          TEXT
          <AppChild buttonColor="green" buttonName="OKOK"></AppChild>
  </AppHeader>
</template>

<style scoped>
  p.title {
   font-weight: bold;
   background: #cce5ff ;
   padding-left: 5px;
  }
</style>
