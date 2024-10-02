<script setup>
useHead({
	htmlAttrs: {
		lang: "en",
	},
	link: [
		{ rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
		{ rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
		{ rel: "icon", type: "image/png", sizes: "64x64", href: "/favicon-64x64.png" },
	],
});
useSeoMeta({
	title: "Jérémie Zurflüh - Personal Portfolio",
	description:
		"Explore the portfolio of a passionate full-stack web developer and mediamatics technician, currently studying media engineering at HEIG-VD.",
	ogTitle: "Jérémie Zurflüh - Personal Portfolio",
	ogDescription:
		"Full-stack web developer and mediamatics technician with a passion for creating dynamic, scalable applications and intuitive UI/UX designs. Currently pursuing media engineering studies at HEIG-VD, I blend technical expertise with a user-centered approach to deliver seamless digital experiences.",
	// ogImage: "[og:image]",
	// ogUrl: "[og:url]",
	// twitterTitle: "[twitter:title]",
	// twitterDescription: "[twitter:description]",
	// twitterImage: "[twitter:image]",
	// twitterCard: "summary",
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
