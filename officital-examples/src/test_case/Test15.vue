<script setup>
let TITLE = "Test15: ";
let DESC  = "ToDo";
let CODE  = `
<script>
<template>
`;

/********************************/
import TodoList from './15/TodoList.vue'

/********************************/
</script>
 
<template>
  <p class="title">{{TITLE}}</p>
  <p >{{DESC}}</p>
  <hr><pre><code>{{CODE}}</code></pre></hr>

<!-------------------------------->
  <div id="app">
    <TodoList />
  </div>
<!-------------------------------->

</template>


<style scoped>
  p.title {
   font-weight: bold;
   background: #cce5ff ;
   padding-left: 5px;
  }
</style>

