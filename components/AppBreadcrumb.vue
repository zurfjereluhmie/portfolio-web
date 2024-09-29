<script setup>
/**
 * WIP
 *
 * @warn This component is a work in progress.
 */
const props = defineProps({
	breadcrumbs: {
		type: Array<Objects<String, String>>,
		required: true,
	},
});
</script>

<template>
	<div aria-label="breadcrumb">
		<ol class="flex w-full flex-wrap items-center rounded-md bg-slate-50 px-4 py-2">
			<li
				v-for="(breadcrumb, index) in props.breadcrumbs"
				:key="index"
				class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800"
			>
				<span class="pointer-events-none mx-2"> / </span>
				<NuxtLink :to="breadcrumb.link">{{ breadcrumb.text }}</NuxtLink>
			</li>
		</ol>
	</div>
</template>

<style scoped></style>
