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
				<NuxtLink
					to="/"
					:class="{
						active: isActive('/'),
					}"
					>Home</NuxtLink
				>
			</li>
			<li>
				<NuxtLink
					to="/portfolio"
					:class="{
						active: isActive('/portfolio'),
					}"
					>Portfolio</NuxtLink
				>
			</li>
			<li>
				<NuxtLink
					to="/about"
					:class="{
						active: isActive('/about'),
					}"
					>About</NuxtLink
				>
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

li a:hover {
	color: var(--color-black);
	text-decoration: underline;
}

li a.active {
	color: var(--color-black);
}
</style>
