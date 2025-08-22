<template>
  <div>
    <h2>Child Component</h2>
  </div>
  <div>
    <p>{{ message }}</p>
  </div>
</template>


<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  message: String
});
</script>
