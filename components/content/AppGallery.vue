<script setup lang="ts">
const props = defineProps<{
  baseUrl: string;
  imagesUrl: string[];
  imagesAlt?: string[];
}>();

const showLightBox = ref(false);
const imagesIndex = ref(0);

const lightBoxImg = computed(() => {
  return props.imagesUrl.map((image) => `${props.baseUrl}/${image}`);
});

const displayLightBox = (index: number) => {
  imagesIndex.value = index;
  showLightBox.value = true;
};
</script>

<template>
  <template v-if="imagesUrl.length === 1">
    <div class="not-prose">
      <NuxtImg
        v-for="(image, i) in imagesUrl"
        :key="i"
        class="mb-4 size-full rounded-lg object-contain"
        :src="`${baseUrl}/${image}`"
        format="webp"
        loading="lazy"
        placeholder
        placeholder-class="animate-pulse"
        :alt="imagesAlt && imagesAlt.at(i) ? imagesAlt.at(i) : undefined"
        @click="displayLightBox(i)"
      />
    </div>
  </template>
  <template v-else>
    <div class="not-prose columns-1 sm:columns-2 md:columns-2">
      <NuxtImg
        v-for="(image, i) in imagesUrl"
        :key="i"
        class="mb-4 size-full rounded-lg object-contain"
        :src="`${baseUrl}/${image}`"
        format="webp"
        loading="lazy"
        placeholder
        placeholder-class="animate-pulse"
        :alt="imagesAlt && imagesAlt.at(i) ? imagesAlt.at(i) : undefined"
        @click="displayLightBox(i)"
      />
    </div>
  </template>
  <div v-if="showLightBox" class="not-prose">
    <AppLightBox
      :images="lightBoxImg"
      :alts="imagesAlt"
      :start-index="imagesIndex"
      @close="showLightBox = false"
    />
  </div>
</template>

<style scoped>
div.not-prose > img {
  cursor: pointer;
}
</style>
