<script setup>
const i18n = useI18n();
const query = { path: `${i18n.locale.value}/portfolio`, sort: [{ date: -1 }] };

useSeoMeta({
	title: "Portfolio",
	description:
		"Explore Jérémie's portfolio of full-stack web projects, where creativity meets technical expertise. Discover innovative solutions, user-centered designs, and efficient back-end systems.",
	ogTitle: "Portfolio",
	ogDescription:
		"Explore Jérémie's portfolio of full-stack web projects, where creativity meets technical expertise. Discover innovative solutions, user-centered designs, and efficient back-end systems.",
	twitterTitle: "Portfolio",
	twitterDescription:
		"Explore Jérémie's portfolio of full-stack web projects, where creativity meets technical expertise. Discover innovative solutions, user-centered designs, and efficient back-end systems.",
});
</script>

<template>
	<header>
		<TheNavBar currentPath="/portfolio" />
	</header>
	<main>
		<div class="px-6">
			<h1>Portfolio</h1>
			<div class="w-full flex justify-center">
				<div class="flex flex-row flex-wrap justify-center gap-6 max-w-[1200px]">
					<ContentList :query v-slot="{ list }">
						<AppCard
							v-for="(project, i) in list"
							:key="project._path"
							:title="project.title"
							:excerpt="project.description"
							:tags="project.tags"
							:image="project.image"
							:moreLink="project._path"
							:date="project.date"
							:delay-anim="`${i * 100}ms`"
						/>
					</ContentList>
				</div>
			</div>
		</div>
	</main>
	<TheFooter />
</template>

<style scoped>
@import url("~/assets/css/normal-page.css");
</style>
