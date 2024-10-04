<script setup>
const year = new Date().getFullYear();
</script>

<template>
	<footer>
		<p>&copy; {{ year }} Jérémie Zurflüh</p>
	</footer>
</template>

<style scoped>
footer {
	width: 100%;
	background-color: var(--color-black);
	color: var(--color-white);
	text-align: center;
	padding: 1rem;
	margin-top: 4rem;
}

footer p {
	margin: 0;
	font-size: 1rem;
}
</style>
