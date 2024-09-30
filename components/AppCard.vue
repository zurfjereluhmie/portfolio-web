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
	<NuxtLink
		:to="moreLink"
		class="cursor-pointer group shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300"
	>
		<div class="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96">
			<div v-if="image" class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
				<img
					:src="`/img/${image}`"
					:alt="`${title} image`"
					class="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
				/>
			</div>
			<div class="p-4">
				<div class="text-sm text-slate-500 mb-4">{{ commaSeparatedTags }}</div>
				<h6 class="mb-2 text-slate-800 text-xl font-semibold">{{ title }}</h6>
				<p v-if="excerpt" class="text-slate-600 leading-normal font-light text-base">
					{{ excerpt }}
				</p>
			</div>
			<div class="px-4 pb-4 pt-0 mt-2">
				<button
					class="border border-transparent flex items-center text-center text-sm bg-transparent p-0"
					type="button"
				>
					Read More

					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1.5">
						<path
							fill-rule="evenodd"
							d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
			<div class="mx-3 border-t border-slate-700 pb-3 pt-2 px-1 ml-auto">
				<span class="text-sm text-slate-500 font-medium">{{ formattedDate }}</span>
			</div>
		</div>
	</NuxtLink>
</template>

<style scoped>
.read-more {
	all: revert;
	color: var(--color-accent);
	cursor: pointer;
}
</style>
