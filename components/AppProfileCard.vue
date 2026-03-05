<script setup lang="ts">
defineProps<{
  name: string;
  role: string;
  imageUrl: string;
}>();
</script>

<template>
  <div
    class="app-profile-card flex flex-col shadow-sm rounded-lg my-6 w-72 pt-[.1px]"
  >
    <div
      class="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center"
    >
      <NuxtImg
        class="w-full h-full object-cover object-top"
        format="webp"
        :src="imageUrl"
        :alt="`Profile picture of ${name}`"
      />
    </div>
    <div class="app-card-body p-6 text-center">
      <h4 class="mb-1 text-xl font-semibold">{{ name }}</h4>
      <p class="text-sm font-semibold">{{ role }}</p>
      <div class="text-base mt-4 font-light">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-profile-card {
  background-color: var(--surface-variant);
}

.app-card-body {
  color: var(--on-surface-variant-secondary);
}

.app-card-body h4 {
  color: var(--on-surface-variant);
}
</style>
