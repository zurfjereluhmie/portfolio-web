<script setup>
const error = useError();
</script>
<template>
	<div class="h-screen w-screen overflow-hidden">
		<div class="flex flex-col items-center justify-center h-full w-full gap-5">
			<template v-if="error.statusCode === 404">
				<h1>Page not found</h1>
				<p>Sorry, the page you are looking for does not exist.</p>
			</template>
			<template v-else>
				<h1>Oups !</h1>
				<p>Something went wrong.</p>
			</template>
			<NuxtLink :to="localePath('/')"
				><button
					class="cursor-pointer rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
					type="button"
				>
					Go back home
				</button></NuxtLink
			>
		</div>
	</div>
</template>
<style scoped>
h1 {
	color: var(--color-black);
	font-size: 3rem;
}
</style>
