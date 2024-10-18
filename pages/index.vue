<script setup>
const { t } = useI18n();
const personalPresentationRef = ref(null);
const navBarRef = ref(null);

onMounted(() => {
	personalPresentationRef.value = document.querySelector("#personnal-presentation");
	navBarRef.value = document.querySelector("header");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.intersectionRatio > 0) {
					navBarRef.value.classList.add("animate");
				} else {
					navBarRef.value.classList.remove("animate");
				}
			});
		},
		{ threshold: 0 }
	);

	if (personalPresentationRef.value) observer.observe(personalPresentationRef.value);

	onUnmounted(() => {
		if (personalPresentationRef.value) observer.unobserve(personalPresentationRef.value);
	});
});

useSeoMeta({
	title: t("index.meta.title"),
	description: t("index.meta.description"),
	ogTitle: t("index.meta.title"),
	ogDescription: t("index.meta.description"),
	twitterTitle: t("index.meta.title"),
	twitterDescription: t("index.meta.description"),
});
</script>

<template>
	<header>
		<TheNavBar currentPath="/" />
	</header>
	<main>
		<TheHeroSection />
		<ThePersonalPresentation />
		<TheFooter />
	</main>
</template>

<style scoped>
main {
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
	height: 100dvh;
	background-color: var(--color-white);
}

main > * {
	scroll-snap-align: center;
}

header {
	position: fixed;
	top: -100%;
	left: 0;
	width: 100%;
	z-index: 999;
	opacity: 0;

	background-color: var(--color-white);
}

header.animate {
	animation: fadeIn 0.5s forwards;
}

@keyframes fadeIn {
	from {
		top: -100%;
		opacity: 0;
	}
	to {
		top: 0;
		opacity: 1;
	}
}
</style>
