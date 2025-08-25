<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Table from './components/Table.vue'
import Table2 from './components/Table2.vue'


</script>

<template>
<div class="main">
<p>TEST 1</p>
<div class="container">
  <p class="desc"> Options API Table </p>
  <Table />
</div>
  <hr>

<p>TEST 2</p>
<div class="container">
  <p class="desc"> Composition  API Table </p>
  <Table2 />
</div>
  <hr>

<p>TEST 3</p>
<div class="container">
  <p class="desc"> Composition  API Table </p>
  <Table3 rows-per-page="5"/>
</div>

</div>
</template>

<style scoped>

.main {
}
.container {
  display: flex;
}

.desc {
  width:300px;
}

.vue3-easy-data-table {
  width: 600px;
}


p {text-align: left}

</style>
