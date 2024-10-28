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
					navBarRef.value.classList.add("animate-in");
					navBarRef.value.classList.remove("animate-out");
				} else {
					navBarRef.value.classList.remove("animate-in");
					navBarRef.value.classList.add("animate-out");
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
	background-color: var(--surface);
}

main > * {
	scroll-snap-align: center;
}

header * {
	opacity: 0;
}

header.animate-in * {
	animation: fadeIn 0.5s forwards;
}

header.animate-out * {
	top: -100%;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes fadeOut {
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
}
</style>
