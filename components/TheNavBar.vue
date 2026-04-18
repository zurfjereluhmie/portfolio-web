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
  <div class="theme-toggle">
    <Moon
      v-if="colorMode.value === 'dark'"
      class="h-6"
      role="button"
      aria-label="Switch to light mode"
      tabindex="0"
      @click="colorMode.preference = 'light'"
    />
    <Sun
      v-else-if="colorMode.value === 'light'"
      class="h-6"
      role="button"
      aria-label="Switch to dark mode"
      tabindex="0"
      @click="colorMode.preference = 'dark'"
    />
  </div>
</template>

<style scoped>
nav {
  position: fixed;
  left: 1rem;
  top: 1rem;
  transform: none;
  background-color: var(--nav-background);
  padding: 1rem;
  z-index: 1000;
  @apply rounded-xl backdrop-blur-sm shadow-lg w-[calc(100%-6rem)] sm:w-auto sm:left-1/2 sm:transform sm:-translate-x-1/2;
}

@media (max-width: 319px) {
  nav {
    left: 1rem;
    width: calc(100% - 2rem);
  }

  .theme-toggle {
    display: none !important;
  }

  ul .theme-toggle {
    display: none;
  }
}

ul {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding: 0;
  @apply sm:justify-center;
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

.theme-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  left: auto;
  transform: none;
  background-color: var(--nav-background);

  height: calc(3.5rem);
  width: calc(3.5rem);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;

  @apply rounded-xl backdrop-blur-sm shadow-lg;
}

@media (min-width: 640px) {
  .theme-toggle {
    left: 50%;
    right: auto;
    transform: translateX(calc(-50% + 12rem));
  }
}
</style>
