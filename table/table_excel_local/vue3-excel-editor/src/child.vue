
<script setup lang="ts">
defineProps<{
	name: string;
}>();
</script>

<template>
	<section>
		<div>・{{ name }}</div>
		<slot>
			<p>デフォルト</p>
		</slot>
	</section>
</template>

