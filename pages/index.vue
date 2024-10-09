<script setup>
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
</script>

<template>
	<header>
		<TheNavBar />
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
	height: 100vh;
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
