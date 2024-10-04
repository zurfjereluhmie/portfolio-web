<script setup>
const props = defineProps({
	startIndex: {
		type: Number,
		default: 0,
	},
	images: {
		type: Array,
		required: true,
	},
});

const emit = defineEmits(["close"]);
const lazy = "lazy";

const imagesIndex = ref(props.startIndex);

const close = () => emit("close");

const scroll = () => {
	console.log("scrolling");
};
</script>

<template>
	<div @scroll.prevent="scroll()" class="absolute top-0 left-0 w-screen h-screen">
		<div class="light-box">
			<div class="picture-container">
				<NuxtPicture :src="images[imagesIndex]" :alt="`Image ${imagesIndex + 1}`" :loading="lazy" />
			</div>
			<div class="controls">
				<button @click="imagesIndex = (imagesIndex - 1 + images.length) % images.length">Previous</button>
				<div class="miniatures hidden md:flex">
					<NuxtImg
						v-for="(image, i) in images"
						:key="i"
						:src="image"
						:alt="`Image ${i + 1}`"
						:loading="lazy"
						:class="{ active: i === imagesIndex }"
						class="h-10 w-10"
						@click="imagesIndex = i"
					/>
				</div>
				<button @click="imagesIndex = (imagesIndex + 1) % images.length">Next</button>
			</div>
		</div>
		<div class="bg" @click="close()" @scroll.prevent="scroll()"></div>
	</div>
</template>

<style scoped>
.bg {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 999;
}

.light-box {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1000;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
}

.picture-container picture {
	width: 100%;
	height: auto;
}

.picture-container img {
	max-width: 100%;
	max-height: 100%;
	object-fit: contain;
}

.controls {
	display: flex;
	gap: 1rem;
	align-items: center;
}

.miniatures {
	flex-wrap: wrap;
	justify-content: center;
	gap: 0.5rem;
}

.miniatures .active {
	border: 2px solid var(--color-accent);
}
</style>
