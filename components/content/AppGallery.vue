<script setup>
const props = defineProps({
	baseUrl: {
		type: String,
		required: true,
	},
	imagesUrl: {
		type: Array,
		required: true,
	},
});
</script>

<template>
	<div class="gap-4 not-prose columns-2 sm:columns-3 md:columns-3">
		<NuxtImg
			v-for="(image, i) in imagesUrl"
			class="mb-4 size-full rounded-lg object-contain"
			:src="`${baseUrl}/${image}`"
			format="webp"
			loading="lazy"
			placeholder
			placeholder-class="animate-pulse"
		/>
	</div>
</template>

<style scoped></style>
