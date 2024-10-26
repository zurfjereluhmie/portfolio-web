<script setup>
const { locale, t } = useI18n();
const head = useLocaleHead({
	addDirAttribute: true,
	identifierAttribute: "id",
	addSeoAttributes: true,
});

const hreflang = computed(() => {
	return head.value.link.map((link) => {
		const { id, ...rest } = link;
		return rest;
	});
});

useHead({
	htmlAttrs: {
		lang: locale.value,
	},
	link: [
		{ rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
		{ rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
		{ rel: "icon", type: "image/png", sizes: "64x64", href: "/favicon-64x64.png" },
		...hreflang.value,
	],
	meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
});

useSeoMeta({
	ogImage: "/img/og_image.png",
	twitterImage: "/img/og_image.png",
});
</script>
<template>
	<!-- <div> -->
	<NuxtPage />
	<!-- </div> -->
</template>
<style scoped>
/* div {
	display: flex;
	flex-direction: column;
	align-items: center;
}

div > *:not(nav, #hero-container, footer) {
	width: 1536px;
} */
</style>
