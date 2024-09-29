<script setup></script>

<template>
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
</style>
