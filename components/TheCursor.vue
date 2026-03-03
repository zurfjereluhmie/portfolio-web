<script setup lang="ts">
const cursorBall = ref<HTMLElement | null>(null);
const cursorOutline = ref<HTMLElement | null>(null);

const handleCursorMove = (e: MouseEvent) => {
  if (!cursorBall.value || !cursorOutline.value) return;
  cursorBall.value.style.top = e.pageY + "px";
  cursorBall.value.style.left = e.pageX + "px";

  cursorOutline.value.style.top = e.pageY + "px";
  cursorOutline.value.style.left = e.pageX + "px";
};

const handleCursorMouseUp = (e: MouseEvent) => {
  if (!cursorOutline.value) return;
  if (e.button === 0) {
    cursorOutline.value.classList.add("cursor-mousedown");
  }
};

const handleCursorMouseDown = (_e: MouseEvent) => {
  if (!cursorOutline.value) return;
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
  background-color: var(--on-surface);
  border: 1px solid var(--surface);
}

.cursor-outline {
  width: 3rem;
  height: 3rem;
  border: 1px solid var(--on-surface);
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
  border: 2px solid var(--on-surface);
  background-color: var(--primary);
}
</style>
