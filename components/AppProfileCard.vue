<script setup>
const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-72 pt-[.1px]">
		<div class="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
			<NuxtImg
				class="w-full h-full object-cover object-top"
				format="webp"
				:src="imageUrl"
				:alt="`Profile picture of ${name}`"
			/>
		</div>
		<div class="p-6 text-center">
			<h4 class="mb-1 text-xl font-semibold text-slate-800">{{ name }}</h4>
			<p class="text-sm font-semibold text-slate-500">{{ role }}</p>
			<div class="text-base text-slate-600 mt-4 font-light">
				<slot />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
