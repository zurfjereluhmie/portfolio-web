<script setup>
const props = defineProps({
	maxWidth: {
		type: Number,
		default: -Infinity,
	},
});

const separator = ">";
const route = useRoute();
const breadcrumbs = computed(() => {
	return route.fullPath.split("/");
});

const buildLink = ref([""]);
breadcrumbs.value.forEach((link, index) => {
	if (!index) return;
	buildLink.value.push(`${buildLink.value.at(index - 1)}/${link}`);
});

const isLast = (index) => index + 1 < breadcrumbs.value.length;
const firstLetterUpper = (string) => string.charAt(0).toUpperCase() + string.slice(1);
</script>

<template>
	<nav
		aria-label="breadcrumb"
		class="w-full"
		:style="{
			'max-width': maxWidth + 'px',
		}"
	>
		<ol class="flex w-full flex-wrap items-center rounded-md py-4 px-0">
			<template v-for="(link, index) in breadcrumbs">
				<li
					class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800"
				>
					<template v-if="isLast(index)">
						<NuxtLink :to="buildLink.at(index) || '/'">{{ firstLetterUpper(link) || "Home" }}</NuxtLink>
					</template>
					<template v-else>
						<span class="cursor-default">{{ firstLetterUpper(link) || "Home" }}</span>
					</template>
					<span v-if="isLast(index)" class="pointer-events-none mx-2 text-slate-800">
						{{ separator }}
					</span>
				</li>
			</template>
		</ol>
	</nav>
</template>

<style scoped>
a {
	cursor: pointer;
	color: var(--color-accent);
}

span {
	cursor: default;
	color: var(--color-black);
}
</style>
