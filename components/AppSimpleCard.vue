<script setup>
const props = defineProps({
	title: String,
});
</script>

<template>
	<div id="simple-card">
		<div id="simple-card-header">
			<p>{{ title }}</p>
		</div>
		<div id="simple-card-content">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<style scoped>
#simple-card {
	padding: 1rem;
	border-radius: 0.75rem;
	border: 1px solid var(--Grey, #6e7f8d);
}

#simple-card-header p {
	color: var(--color-black);
	/* font-size: 2.25rem; */
	font-style: normal;
	font-weight: 600;
	line-height: normal;
}

#simple-card-content * {
	font-size: 1.2rem;
}
</style>
