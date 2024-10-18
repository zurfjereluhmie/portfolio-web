<script setup>
const { t } = useI18n();
const props = defineProps(["currentPath"]);

const isActive = (path) => {
	return props.currentPath === path ? "active" : "";
};
</script>

<template>
	<nav>
		<ul>
			<li>
				<NuxtLink :to="localePath('/')" :aria-current="isActive('/') ? 'page' : null">{{ t("nav.home") }}</NuxtLink>
			</li>
			<li>
				<NuxtLink :to="localePath('/portfolio')" :aria-current="isActive('/portfolio') ? 'page' : null">{{
					t("nav.portfolio")
				}}</NuxtLink>
			</li>
			<li>
				<NuxtLink :to="localePath('/about')" :aria-current="isActive('/about') ? 'page' : null">{{
					t("nav.about")
				}}</NuxtLink>
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
