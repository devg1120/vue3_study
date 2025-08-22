<script setup>
let TITLE = "Test09: todo app ";
let DESC  = "ToDo App";
import { ref } from "vue";

const todos = ref([]);
const newTodo = ref("");

const addTodo = () => {
  todos.value.push(newTodo.value);
  newTodo.value = "";
};

const removeTodo = (index) => {
  todos.value.splice(index, 1);
};

</script>
 
<template>
  <p class="title">{{TITLE}}</p>
  <p >{{DESC}}</p>
  <hr>
  <input type="text" v-model="newTodo" />
  <button @click="addTodo()">追加</button>
  <ul v-if="todos.length > 0">
    <li v-for="(todo, i) in todos" :key="i">
      {{ todo }}
      <button @click="removeTodo(i)" style="cursor: pointer">x</button>
    </li>
  </ul>
  <p v-else>ToDoを追加してください</p>
</template>

<style scoped>
  p.title {
   font-weight: bold;
   background: #cce5ff ;
   padding-left: 5px;
  }
</style>
