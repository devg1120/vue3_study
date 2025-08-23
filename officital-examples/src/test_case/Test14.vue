<script setup>
let TITLE = "Test14: ";
let DESC  = "Sheet";
let CODE  = `
<script>
<template>
`;

/********************************/
import Cell from './14/Cell.vue'
import { cells } from './14/store.js'

const cols = cells.map((_, i) => String.fromCharCode(65 + i))
/********************************/
</script>
 
<template>
  <p class="title">{{TITLE}}</p>
  <p >{{DESC}}</p>
  <hr><pre><code>{{CODE}}</code></pre></hr>

<!-------------------------------->
  <table>
    <thead>
      <tr>
        <th></th>
        <th v-for="c in cols">{{ c }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in cells[0].length">
        <th>{{ i - 1 }}</th>
        <td v-for="(c, j) in cols">
          <Cell :r="i - 1" :c="j"></Cell>
        </td>
      </tr>
    </tbody>
  </table>
<!-------------------------------->

</template>

<style scoped>

table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}

th {
  background-color: #eee;
  color: #000000;
}

tr:first-of-type th {
  width: 100px;
}

tr:first-of-type th:first-of-type {
  width: 25px;
}

td {
  border: 1px solid #ccc;
  height: 1.5em;
  overflow: hidden;
}
</style>

<style scoped>
  p.title {
   font-weight: bold;
   background: #cce5ff ;
   padding-left: 5px;
  }
</style>

