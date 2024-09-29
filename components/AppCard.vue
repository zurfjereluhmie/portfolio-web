<script setup>
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	excerpt: String,
	tags: String,
	image: String,
	moreLink: {
		type: String,
		required: true,
	},
	date: String,
});

const formattedDate = computed(() => {
	if (!props.date) return "";
	const date = new Date(props.date);
	return date.toLocaleDateString("en-CH", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
});

const tags = computed(() => {
	if (!props.tags) return [];
	return props.tags.split(",").map((tag) => tag.trim());
});

const commaSeparatedTags = computed(() => tags.value.join(", "));
</script>

<template>
	<div class="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96">
		<div v-if="image" class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
			<img :src="`/img/${image}`" :alt="`${title} image`" />
		</div>
		<div class="p-4">
			<div class="text-sm text-slate-500 mb-4">{{ commaSeparatedTags }}</div>
			<h6 class="mb-2 text-slate-800 text-xl font-semibold">{{ title }}</h6>
			<p v-if="excerpt" class="text-slate-600 leading-normal font-light text-base">
				{{ excerpt }}
			</p>
		</div>
		<div class="px-4 pb-4 pt-0 mt-2">
			<NuxtLink :to="moreLink" class="text-slate-800 font-semibold text-sm hover:underline flex items-center">
				Read More
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="ml-2 h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
				</svg>
			</NuxtLink>
		</div>
		<div class="mx-3 border-t border-slate-700 pb-3 pt-2 px-1 ml-auto">
			<span class="text-sm text-slate-500 font-medium">{{ formattedDate }}</span>
		</div>
	</div>
</template>

<style scoped></style>
