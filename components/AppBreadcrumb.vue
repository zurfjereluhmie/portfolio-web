<script setup>
const props = defineProps({
	maxWidth: {
		type: String,
		default: null,
	},
});

const separator = ">";
const route = useRoute();
const i18n = useI18n();

// remove the locale from the path
const pathNoLocale = computed(() => {
	return route.fullPath.replace(`/${i18n.locale.value}`, "");
});

const breadcrumbs = computed(() => {
	return pathNoLocale.value.split("/");
});

const buildLink = ref([""]);
breadcrumbs.value.forEach((link, index) => {
	if (!index) return;
	buildLink.value.push(`${buildLink.value.at(index - 1)}/${link}`);
});

const isNotLast = (index) => index + 1 < breadcrumbs.value.length;
const firstLetterUpper = (string) => string.charAt(0).toUpperCase() + string.slice(1);
const removeHash = (string) => string.split("#").at(0);
const nameFormatter = (string) => {
	let s = removeHash(string);
	s = firstLetterUpper(s);
	return s;
};
</script>

<template>
	<nav
		aria-label="breadcrumb"
		class="w-full"
		:style="{
			maxWidth,
		}"
	>
		<ol class="flex w-full flex-wrap items-center rounded-md py-4 px-0">
			<template v-for="(link, index) in breadcrumbs">
				<li class="flex items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
					<template v-if="isNotLast(index)">
						<NuxtLink :to="localePath(buildLink.at(index) || '/')" class="cursor-pointer">{{
							nameFormatter(link) || "Home"
						}}</NuxtLink>
					</template>
					<template v-else>
						<a class="cursor-default" aria-current="page">{{ nameFormatter(link) || "Home" }}</a>
					</template>
					<span v-if="isNotLast(index)" class="pointer-events-none mx-2 text-slate-800">
						{{ separator }}
					</span>
				</li>
			</template>
		</ol>
	</nav>
</template>

<style scoped>
a:not([aria-current="page"]):hover {
	cursor: pointer;
	color: var(--color-black);
}

a[aria-current="page"] {
	cursor: default;
	color: var(--color-black);
}
</style>
