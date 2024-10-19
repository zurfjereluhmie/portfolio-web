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
const showCarousel = computed(() => props.images.length > 1);

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
		<div @click="close()" class="close">
			<button
				type="button"
				class="rounded-md py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-slate-700 active:shadow-none"
			>
				X
			</button>
		</div>
		<div class="light-box">
			<div class="picture-container">
				<figure>
					<NuxtImg
						:src="currentImage"
						:imgAttrs="{ alt: alts && alts.at(imagesIndex) ? alts.at(imagesIndex) : undefined }"
						:loading="lazy"
						format="webp"
					/>
					<figcaption v-if="alts && alts.at(imagesIndex)">
						{{ alts.at(imagesIndex) }}
					</figcaption>
				</figure>
			</div>
			<div class="controls" v-if="showCarousel">
				<button
					class="rounded-md py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-slate-700 active:shadow-none"
					type="button"
					@click="previousImage()"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M7.73804 11.47C7.59759 11.6106 7.5187 11.8012 7.5187 12C7.5187 12.1987 7.59759 12.3893 7.73804 12.53L15.238 20.03C15.3802 20.1625 15.5683 20.2346 15.7626 20.2311C15.9569 20.2277 16.1422 20.149 16.2797 20.0116C16.4171 19.8742 16.4958 19.6888 16.4992 19.4945C16.5026 19.3002 16.4305 19.1121 16.298 18.97L9.32804 12L16.298 5.02997C16.4305 4.88779 16.5026 4.69975 16.4992 4.50545C16.4958 4.31114 16.4171 4.12576 16.2797 3.98835C16.1422 3.85093 15.9569 3.77222 15.7626 3.76879C15.5683 3.76537 15.3802 3.83749 15.238 3.96997L7.73804 11.47Z"
						/>
					</svg>
				</button>
				<div class="miniatures hidden md:flex">
					<NuxtImg
						v-for="(image, i) in images"
						:key="i"
						:src="image"
						format="webp"
						:alt="alts && alts.at(i) ? alts.at(i) : undefined"
						:loading="lazy"
						:class="{ active: i === imagesIndex }"
						class="h-10 w-10 rounded-sm"
						@click="imagesIndex = i"
					/>
				</div>
				<button
					class="rounded-md py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-slate-700 active:shadow-none"
					type="button"
					@click="nextImage()"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4">
						<path
							fill-rule="evenodd"
							d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
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
	width: 100dvw;
	height: 100dvh;
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

	width: 80dvw;
	height: 80dvh;

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
	max-height: 80dvh;
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
	cursor: pointer;
}

.miniatures .active {
	border: 2px solid var(--color-accent);
}

:deep(figcaption) {
	font-size: 0.5rem;
	color: var(--color-white);
}

button {
	background-color: var(--color-white);
	color: var(--color-black);
	cursor: pointer;
}

button:hover {
	color: var(--color-white);
}

button svg {
	fill: var(--color-black);
}

button:hover svg {
	fill: var(--color-white);
}
</style>
