<script setup></script>

<template>
	<TheNavBar currentPath="/portfolio" />
	<main>
		<div class="mt-6">
			<h1>Portfolio</h1>
			<div class="w-full flex justify-center">
				<div class="flex flex-row flex-wrap justify-center gap-6 max-w-[1200px]">
					<ContentList path="/portfolio" v-slot="{ list }">
						<AppCard
							v-for="project in list"
							:key="project._path"
							:title="project.title"
							:excerpt="project.description"
							:tags="project.tags"
							:image="project.image"
							:moreLink="project._path"
							:date="project.date"
						/>
					</ContentList>
				</div>
			</div>
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
