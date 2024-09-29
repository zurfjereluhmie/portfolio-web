<template>
	<TheNavBar currentPath="/portfolio" />
	<main>
		<div class="mt-6 flex flex-col items-center">
			<article class="prose">
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
	width: var(--max-width);
}
</style>
