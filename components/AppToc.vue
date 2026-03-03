<script setup lang="ts">
interface TocLink {
  id: string;
  text: string;
  depth: number;
  children?: TocLink[];
}

interface Toc {
  title: string;
  depth: number;
  searchDepth: number;
  links: TocLink[];
}

const { t } = useI18n();
const props = defineProps<{
  toc: Toc;
}>();
</script>

<template>
  <div class="toc-container">
    <p class="font-medium">{{ t("content.toc") }}</p>
    <ol class="list-none pl-0 mt-4">
      <li v-for="header in toc.links">
        <a :href="`#${header.id}`">{{ header.text }}</a>
        <template v-if="header.children"
          ><ol class="list-none pl-3 mt-2">
            <li v-for="children in header.children">
              <a :href="`#${children.id}`">{{ children.text }}</a>
            </li>
          </ol></template
        >
      </li>
    </ol>
  </div>
</template>

<style scoped>
li:not(:last-child) {
  margin-bottom: 0.5rem;
}
</style>
