<script setup>
const props = defineProps({
	links: {
		type: Array,
		required: true,
	},
});

const cleanLinks = computed(() => {
	return props.links.map((link) => new URL(link));
});

const BASE_FAVICON_API = "https://www.google.com/s2/favicons?sz=32&domain_url=";
</script>

<template>
	<hr class="not-prose border-[0.1px] border-grey-200 my-3" />
	<div class="flex flex-row flex-wrap gap-4">
		<a
			v-for="link in cleanLinks"
			class="not-prose flex items-center gap-2"
			:href="link.href"
			rel="no-referrer"
			target="_blank"
		>
			<img :src="`${BASE_FAVICON_API}${link.origin}`" class="h-4 w-4" />

			{{ link.host }}
		</a>
	</div>
	<hr class="not-prose border-[0.1px] border-grey-200 my-3 mb-5" />
</template>

<style scoped></style>
