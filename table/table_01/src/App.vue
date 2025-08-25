<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Table from './components/Table.vue'
import Table2 from './components/Table2.vue'
import Table3 from './components/Table3.vue'
import Table4 from './components/Table4.vue'
import Table5 from './components/Table5.vue'
import Table6 from './components/Table6.vue'
import Table7 from './components/Table7.vue'


</script>

<template>
<div class="main">
  
<p>TEST 1</p>
<div class="container">
  <p class="desc"> default </p>
  <Table />
</div>

<p>TEST 2</p>
<div class="container">
  <textarea readonly class="desc" name="mytext" rows="5" cols="30">
   options
       buttons-pagination
       alternating
       border-cell
  </textarea>
  <Table2 />
</div>


<p>TEST 3</p>
<div class="container">
  <textarea readonly class="desc" name="mytext" rows="5" cols="30">
     show-index
     rows-per-page = 5  
  </textarea>
  <Table3 />
</div>

<p>TEST 4</p>
<div class="container">
  <textarea readonly class="desc" name="mytext" rows="5" cols="30">
    Style customization
  </textarea>
  <Table4 />
</div>

<p>TEST 5</p>
<div class="container">
  <textarea readonly class="desc" name="mytext" rows="5" cols="30">
    Fixed columns
  </textarea>
  <Table5 />
</div>


<p>TEST 6</p>
<div class="container">
  <textarea readonly class="desc" name="mytext" rows="5" cols="30">
    Row click
  </textarea>
  <Table6 />
</div>

<div class="board">
  <p>row-clicked: </p>
  <div id="row-clicked"></div>
</div>

<p>TEST 7</p>
<div class="container">
  <textarea readonly class="desc" name="mytext" rows="5" cols="30">
    Class name customization
  </textarea>
  <Table7 />
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

.board {
  position: relative;
  left:30px;
}

p {text-align: left}

textarea {
  border: 0;
  background-color: #11ffee00;
  font-size: 15px;

}
</style>
