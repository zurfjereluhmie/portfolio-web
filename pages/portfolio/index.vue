<script setup></script>

<template>
	<header>
		<TheNavBar currentPath="/portfolio" />
	</header>
	<main>
		<div>
			<AppBreadcrumb />
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
@import url("~/assets/css/normal-page.css");
</style>
