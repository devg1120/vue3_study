<script setup lang="ts">
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'

interface Todo {
  text: string
  completed: boolean
}

const todos = ref<Todo[]>([])
const newTodoText = ref('')

const addTodo = () => {
  if (newTodoText.value) {
    todos.value.push({
      text: newTodoText.value,
      completed: false
    })
    newTodoText.value = ''
  }
}

const toggleTodo = (item: Todo) => {
  item.completed = !item.completed
}

const deleteTodo = (item: Todo) => {
  const index = todos.value.indexOf(item)
  if (index > -1) {
    todos.value.splice(index, 1)
  }
}

const editTodo = (item: Todo, newText: string) => {
  const index = todos.value.indexOf(item)
  if (index > -1) {
    todos.value[index].text = newText
  }
}
</script>

<template>
  <div class="todo-list">
    <h1>ToDo List</h1>
    <input type="text" v-model="newTodoText" @keyup.enter="addTodo" />
    <button @click="addTodo">追加</button>

    <ul>
      <TodoItem
        v-for="(item, index) in todos"
        :key="index"
        :item="item"
        @toggle="toggleTodo"
        @delete="deleteTodo"
        @edit="editTodo"
      />
    </ul>
  </div>
</template>

<style scoped>
.todo-list {
  padding: 20px;
}

.todo-list h1 {
  margin-bottom: 20px;
}
</style>

