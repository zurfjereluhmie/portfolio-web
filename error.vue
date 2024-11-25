<script setup>
const error = useError();
const localePath = useLocalePath();
</script>
<template>
	<main class="h-screen w-screen overflow-hidden">
		<div class="flex flex-col items-center justify-center h-full w-full gap-5">
			<template v-if="error.statusCode === 404">
				<h1>Page not found</h1>
				<p>Sorry, the page you are looking for does not exist.</p>
			</template>
			<template v-else>
				<h1>Oups !</h1>
				<p>Something went wrong.</p>
			</template>
			<NuxtLink :to="localePath('/')" class="no-animation"
				><button
					class="cursor-pointer rounded-md py-2 px-4 border border-transparent text-center text-sm transition-all shadow-md hover:shadow-lg"
					type="button"
				>
					Go back home
				</button></NuxtLink
			>
		</div>
	</main>
</template>
<style scoped>
h1 {
	color: var(--on-surface);
	font-size: 3rem;
}

button {
	background-color: var(--primary);
	color: var(--on-primary);
}
</style>
