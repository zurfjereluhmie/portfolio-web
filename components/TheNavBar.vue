<script setup>
const props = defineProps(["currentPath"]);

const isActive = (path) => {
	return props.currentPath === path ? "active" : "";
};
</script>

<template>
	<nav>
		<ul>
			<li>
				<NuxtLink to="/" :aria-current="isActive('/') ? 'page' : null">Home</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/portfolio" :aria-current="isActive('/portfolio') ? 'page' : null">Portfolio</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/about" :aria-current="isActive('/about') ? 'page' : null">About</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
nav {
	width: 100%;
	padding: 1rem;
}

ul {
	display: flex;
	justify-content: center;
	list-style-type: none;
	margin: 0;
	padding: 0;
}

li a {
	margin: 0 1rem;
	color: var(--color-accent);
}

li a[aria-current="page"] {
	color: var(--color-black);
	background-image: linear-gradient(var(--color-black), var(--color-black));
}
</style>
