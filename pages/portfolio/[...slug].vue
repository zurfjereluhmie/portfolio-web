<script setup>
const route = useRoute();

const { data } = await useAsyncData(`content-${route.path}`, () =>
	queryContent().where({ _path: route.path }).findOne()
);

const cover = ref(data.value.image);
const toc = ref(data.value.body.toc);
</script>
<template>
	<header>
		<TheNavBar currentPath="/portfolio" />
	</header>
	<main>
		<div class="mt-6 px-6 flex flex-col items-center relative">
			<AppBreadcrumb :max-width="603.195" />
			<article class="prose">
				<div
					class="not-prose mb-8 grid w-full min-h-[140px] place-items-center overflow-x-scroll rounded-lg lg:overflow-visible"
				>
					<NuxtImg
						class="object-cover object-center w-full rounded-lg h-96"
						:src="`/img/${cover}`"
						:alt="`Cover image of the '${data.title}' article`"
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
	width: min(var(--max-width), 100vw);
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
	margin-top: 15vh;
}
</style>
