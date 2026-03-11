<script setup lang="ts">
const props = defineProps<{
  title: string;
  excerpt?: string;
  tags?: string;
  image?: string;
  moreLink: string;
  date?: string;
  delayAnim?: string;
}>();

const tags = computed(() => {
  if (!props.tags) return [];
  return props.tags.split(",").map((tag) => tag.trim());
});

const commaSeparatedTags = computed(() => tags.value.join(", "));

const animationStyle = computed(() => `enter 1s ${props.delayAnim} forwards`);
</script>

<template>
  <NuxtLink
    :to="moreLink"
    class="app-card cursor-pointer group shadow-sm rounded-lg w-full hover:shadow-lg transition-shadow duration-300"
  >
    <div class="relative flex flex-row shadow-sm rounded-lg w-full">
      <div
        v-if="image"
        class="relative shrink-0 w-48 m-2.5 overflow-hidden rounded-md"
      >
        <NuxtImg
          :src="`/img/${image}`"
          :alt="`${title} image`"
          format="webp"
          loading="lazy"
          placeholder
          placeholder-class="w-full h-full bg-slate-200"
          class="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
        />
      </div>
      <div class="app-card-body flex-1 min-w-0 p-4">
        <div class="text-sm mb-4">{{ commaSeparatedTags }}</div>
        <h2 class="mb-2 text-xl font-semibold">{{ title }}</h2>
        <p v-if="excerpt" class="excerpt leading-normal font-light text-base">
          {{ excerpt }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.app-card {
  animation: v-bind(animationStyle);
}

.app-card > div {
  background-color: var(--surface-variant);
}

.app-card-body {
  color: var(--on-surface-variant-secondary);
}

.app-card-body h2 {
  color: var(--on-surface-variant);
}

.app-card-c2a * {
  color: var(--on-surface-variant);
}

.app-card-date {
  color: var(--on-surface-variant-secondary);
}

.read-more {
  all: revert;
  color: var(--primary);
  cursor: pointer;
}

.excerpt {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

button svg {
  transition: transform 0.1s ease-in-out;
}

button:hover svg {
  transform: translateX(0.25rem);
}
</style>
