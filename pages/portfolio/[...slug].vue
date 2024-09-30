<template>
	<header>
		<TheNavBar currentPath="/portfolio" />
	</header>
	<main>
		<div class="mt-6 flex flex-col items-center">
			<AppBreadcrumb :max-width="603.195" />
			<article class="prose mx-2">
				<ContentDoc />
			</article>
		</div>
	</main>
</template>

<style scoped>
main {
	display: flex;
	flex-direction: column;
	align-items: center;
}
main > div {
	width: min(var(--max-width), 100vw);
}
</style>
