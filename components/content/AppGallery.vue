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
	imagesAlt: {
		type: Array,
		required: false,
	},
});

const showLightBox = ref(false);
const imagesIndex = ref(0);

const lightBoxImg = computed(() => {
	return props.imagesUrl.map((image) => `${props.baseUrl}/${image}`);
});

const displayLightBox = (index) => {
	imagesIndex.value = index;
	showLightBox.value = true;
};
</script>

<template>
	<div class="not-prose columns-1 sm:columns-2 md:columns-2">
		<NuxtImg
			v-for="(image, i) in imagesUrl"
			class="mb-4 size-full rounded-lg object-contain"
			:src="`${baseUrl}/${image}`"
			format="webp"
			loading="lazy"
			placeholder
			placeholder-class="animate-pulse"
			@click="displayLightBox(i)"
			:key="i"
			:alt="imagesAlt && imagesAlt.at(i) ? imagesAlt.at(i) : undefined"
		/>
	</div>
	<div class="not-prose" v-if="showLightBox">
		<AppLightBox :images="lightBoxImg" :alts="imagesAlt" :startIndex="imagesIndex" @close="showLightBox = false" />
	</div>
</template>

<style scoped>
:deep(img) {
	cursor: pointer;
}
</style>
