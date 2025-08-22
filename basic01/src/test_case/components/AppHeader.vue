<script setup>
defineProps(["textColor"]);
</script>
 
<template>
  <header>
    <h1 :style="{ color: textColor }">
      <slot>slotデフォルト値</slot>
    </h1>
  </header>
</template>

