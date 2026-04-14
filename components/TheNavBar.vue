<script setup lang="ts">
import { Sun, Moon } from "@lucide/vue";

const { t } = useI18n();
const localePath = useLocalePath();
const props = defineProps<{
  currentPath?: string;
}>();

const isActive = (path: string) => {
  return props.currentPath === path ? "active" : "";
};

const colorMode = useColorMode();
</script>

<template>
  <nav>
    <ul>
      <li>
        <NuxtLink
          :to="localePath('/')"
          :aria-current="isActive('/') ? 'page' : null"
          >{{ t("nav.home") }}</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          :to="localePath('/portfolio')"
          :aria-current="isActive('/portfolio') ? 'page' : null"
          >{{ t("nav.portfolio") }}</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          :to="localePath('/about')"
          :aria-current="isActive('/about') ? 'page' : null"
          >{{ t("nav.about") }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
  <div class="time-widget sm:hidden md:block">
    <Moon
      v-if="colorMode.value === 'dark'"
      class="h-6"
      role="button"
      aria-label="Switch to light mode"
      tabindex="0"
      @click="colorMode.value = 'light'"
    />
    <Sun
      v-else-if="colorMode.value === 'light'"
      class="h-6"
      role="button"
      aria-label="Switch to dark mode"
      tabindex="0"
      @click="colorMode.value = 'dark'"
    />
  </div>
</template>

<style scoped>
nav {
  position: fixed;
  left: 50%;
  top: 1rem;
  transform: translateX(-50%);
  background-color: var(--nav-background);
  padding: 1rem;
  z-index: 1000;
  @apply rounded-xl backdrop-blur-sm shadow-lg;
}

ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  align-content: center;
}

li a {
  margin: 0 1rem;
  color: var(--primary);
}

li a[aria-current="page"] {
  color: var(--on-surface) !important;
  background-image: linear-gradient(var(--on-surface), var(--on-surface));
}

.time-widget {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(calc(-50% + 12rem));
  background-color: var(--nav-background);

  height: calc(3.5rem);
  width: calc(3.5rem);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;

  @apply rounded-xl backdrop-blur-sm shadow-lg hidden sm:flex;
}
</style>
