<script setup>
const i18n = useI18n();
const route = useRoute();
const url = useRequestURL();

const { data } = await useAsyncData(`content-${i18n.locale.value}-${route.path}`, () =>
	queryContent(route.path).findOne()
);

const cover = ref(data.value.image);
const toc = ref(data.value.body.toc);

useSeoMeta({
	title: data.value.title,
	description: data.value.description,
	ogTitle: data.value.title,
	ogDescription: data.value.description,
	ogImage: `${url.origin}/img/${cover.value}`,
	ogUrl: url.href,
	twitterTitle: data.value.title,
	twitterDescription: data.value.description,
	twitterImage: `${url.origin}/img/${cover.value}`,
	twitterCard: "summary",
});
</script>
<template>
	<header>
		<TheNavBar currentPath="/portfolio" />
	</header>
	<main>
		<div class="mt-6 px-6 flex flex-col items-center relative">
			<AppBreadcrumb max-width="65ch" />
			<article class="prose">
				<div class="not-prose mb-8 grid w-full min-h-[140px] place-items-center rounded-lg">
					<NuxtImg
						class="object-cover object-center w-full rounded-lg h-96"
						:src="`/img/${cover}`"
						:alt="`Cover image of the '${data.title}' project`"
					/>
				</div>
				<ContentRenderer :value="data" />
			</article>
			<aside class="toc hidden lg:block">
				<AppToc :toc />
			</aside>
		</div>
	</main>
	<TheFooter />
</template>

<style scoped>
main {
	display: flex;
	flex-direction: column;
	align-items: center;
}
main > div {
	width: min(var(--max-width), 100dvw);
}

aside.toc {
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	max-width: 200px;
}

aside.toc :deep(.toc-container) {
	position: sticky;
	top: 40px;
	margin-top: 15dvh;
}
</style>
