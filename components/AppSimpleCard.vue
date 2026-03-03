<script setup lang="ts">
const props = defineProps<{
  title?: string;
}>();
</script>

<template>
  <div id="simple-card">
    <div id="simple-card-header">
      <p class="big">{{ title }}</p>
    </div>
    <div id="simple-card-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
#simple-card {
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid var(--on-surface-tertiary);
}

#simple-card-header p {
  color: var(--on-surface);
  /* font-size: 2.25rem; */
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

#simple-card-content * {
  font-size: 1.2rem;
}
</style>
