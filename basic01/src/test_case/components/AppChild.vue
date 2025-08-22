<script setup>
defineProps(["buttonColor", "buttonName"]);
</script>
 
<template>
    <button  :style="{ backgroundColor: buttonColor, color: 'white' }">{{buttonName}}</button>
</template>

