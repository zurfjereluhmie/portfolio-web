<script setup>
const i18n = useI18n();
const { t } = useI18n();
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
	delayAnim: String,
});

const formattedDate = computed(() => {
	if (!props.date) return "";
	const date = new Date(props.date);
	return date.toLocaleDateString(i18n.locale.value, {
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

const animationStyle = computed(() => `enter 1s ${props.delayAnim} forwards`);
</script>

<template>
	<NuxtLink
		:to="moreLink"
		class="app-card cursor-pointer group shadow-sm rounded-lg w-96 hover:shadow-lg transition-shadow duration-300"
	>
		<div class="relative flex flex-col shadow-sm rounded-lg w-96">
			<div v-if="image" class="relative h-56 m-2.5 overflow-hidden rounded-md">
				<NuxtImg
					:src="`/img/${image}`"
					:alt="`${title} image`"
					format="webp"
					loading="lazy"
					placeholder
					placeholder-class="w-full h-full bg-slate-200"
					class="min-h-full transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
				/>
			</div>
			<div class="app-card-body p-4">
				<div class="text-sm mb-4">{{ commaSeparatedTags }}</div>
				<h2 class="mb-2 text-xl font-semibold">{{ title }}</h2>
				<p v-if="excerpt" class="excerpt leading-normal font-light text-base">
					{{ excerpt }}
				</p>
			</div>
			<div class="app-card-c2a px-4 pb-4 pt-0 mt-2">
				<button
					class="cursor-pointer border border-transparent flex items-center text-center text-sm bg-transparent p-0"
					type="button"
				>
					{{ t("content.readMore") }}

					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1.5">
						<path
							fill-rule="evenodd"
							d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
			<div class="app-card-date mx-3 pb-3 pt-2 px-1 ml-auto">
				<span class="text-xs">{{ formattedDate }}</span>
			</div>
		</div>
	</NuxtLink>
</template>

<style scoped>
.app-card {
	animation: v-bind(animationStyle);
}

.app-card > div {
	background-color: var(--white);
}

.app-card-body {
	color: var(--text-secondary);
}

.app-card-body h2 {
	color: var(--text-black);
}

.app-card-c2a * {
	color: var(--text-black);
}

.app-card-date {
	color: var(--text-secondary);
}

.read-more {
	all: revert;
	color: var(--color-accent);
	cursor: pointer;
}

.excerpt {
	height: 5rem;
}

button svg {
	transition: transform 0.1s ease-in-out;
}

button:hover svg {
	transform: translateX(0.25rem);
}
</style>
