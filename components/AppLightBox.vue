<script setup>
import { useKeyboard } from "~/composables/keyboard";

const props = defineProps({
	startIndex: {
		type: Number,
		default: 0,
	},
	images: {
		type: Array,
		required: true,
	},
	alts: {
		type: Array,
		required: false,
	},
});

const emit = defineEmits(["close"]);
const lazy = "lazy";

const imagesIndex = ref(props.startIndex);
const currentImage = computed(() => props.images[imagesIndex.value]);

const nextImage = () => (imagesIndex.value = (imagesIndex.value + 1) % props.images.length);
const previousImage = () => (imagesIndex.value = (imagesIndex.value - 1 + props.images.length) % props.images.length);
const close = () => emit("close");

const { keyboard } = useKeyboard();

keyboard.onKey("escape", close);

keyboard.onKey("arrowleft", previousImage);
keyboard.onKey("arrowup", previousImage);

keyboard.onKey("arrowright", nextImage);
keyboard.onKey("arrowdown", nextImage);

onMounted(() => {
	document.body.style.overflow = "hidden";
});

onUnmounted(() => {
	document.body.style.overflow = "";
});
</script>

<template>
	<div @scroll.prevent="scroll()" class="absolute top-0 left-0 w-screen h-screen">
		<div @click="close()" class="close">X</div>
		<div class="light-box">
			<div class="picture-container">
				<figure>
					<NuxtPicture
						:src="currentImage"
						:imgAttrs="{ alt: alts && alts.at(imagesIndex) ? alts.at(imagesIndex) : undefined }"
						:loading="lazy"
					/>
					<figcaption v-if="alts && alts.at(imagesIndex)">
						{{ alts.at(imagesIndex) }}
					</figcaption>
				</figure>
			</div>
			<div class="controls">
				<button @click="previousImage()">Previous</button>
				<div class="miniatures hidden md:flex">
					<NuxtImg
						v-for="(image, i) in images"
						:key="i"
						:src="image"
						:alt="alts && alts.at(i) ? alts.at(i) : undefined"
						:loading="lazy"
						:class="{ active: i === imagesIndex }"
						class="h-10 w-10 rounded-sm"
						@click="imagesIndex = i"
					/>
				</div>
				<button @click="nextImage()">Next</button>
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

.close {
	position: fixed;
	top: 2rem;
	right: 2rem;
	z-index: 1001;
	cursor: pointer;
	color: var(--color-white);
}

.light-box {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1000;

	width: 80vw;
	height: 80vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
}

.picture-container :deep(picture) {
	width: 100%;
	height: auto;
}

.picture-container :deep(img) {
	max-width: 100%;
	max-height: 100%;
	object-fit: contain;
	@apply rounded-md;
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

:deep(figcaption) {
	font-size: 0.5rem;
	color: var(--color-white);
}
</style>
