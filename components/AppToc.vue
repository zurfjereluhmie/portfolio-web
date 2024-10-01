<script setup>
const props = defineProps({
	toc: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<div class="toc-container">
		<p class="font-medium">Table of Contents</p>
		<ol class="list-none pl-0 mt-4">
			<li v-for="header in toc.links">
				<a :href="`#${header.id}`">{{ header.text }}</a>
			</li>
		</ol>
	</div>
</template>

<style scoped>
li:not(:last-child) {
	margin-bottom: 0.5rem;
}
</style>
