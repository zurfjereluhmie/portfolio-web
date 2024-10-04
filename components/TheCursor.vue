<script setup>
const cursorBall = ref(null);
const cursorOutline = ref(null);

const handleCursorMove = (e) => {
	cursorBall.value.style.top = e.pageY + "px";
	cursorBall.value.style.left = e.pageX + "px";

	cursorOutline.value.style.top = e.pageY + "px";
	cursorOutline.value.style.left = e.pageX + "px";
};

const handleCursorMouseUp = (e) => {
	if (e.button === 0) {
		cursorOutline.value.classList.add("cursor-mousedown");
	}
};

const handleCursorMouseDown = (e) => {
	cursorOutline.value.classList.remove("cursor-mousedown");
};

onMounted(() => {
	cursorBall.value = document.querySelector(".cursor-ball");
	cursorOutline.value = document.querySelector(".cursor-outline");

	document.addEventListener("mousemove", handleCursorMove);
	document.addEventListener("mousedown", handleCursorMouseUp);
	document.addEventListener("mouseup", handleCursorMouseDown);
});

onUnmounted(() => {
	document.removeEventListener("mousemove", handleCursorMove);
	document.removeEventListener("mousedown", handleCursorMouseUp);
	document.removeEventListener("mouseup", handleCursorMouseDown);
});
</script>

<template>
	<div class="cursor-ball"></div>
	<div class="cursor-outline"></div>
</template>

<style scoped>
.cursor-ball {
	width: 8px;
	height: 8px;
	background-color: var(--color-black);
	border: 1px solid var(--color-white);
}

.cursor-outline {
	width: 3rem;
	height: 3rem;
	border: 1px solid var(--color-black);
	transition: all 0.2s ease;
}

.cursor-ball,
.cursor-outline {
	border-radius: 50%;
	position: absolute;
	z-index: 100;
	pointer-events: none;
	transform: translate(-50%, -50%);
}

.cursor-mousedown {
	width: 1.5rem;
	height: 1.5rem;
	border: 2px solid var(--color-black);
	background-color: var(--color-accent);
}
</style>
