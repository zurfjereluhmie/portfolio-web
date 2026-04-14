<script setup lang="ts">
const props = defineProps<{
  name: string;
  description?: string;
  language?: string;
  url: string;
}>();

// GitHub canonical language colours (subset of common ones)
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Vue: "#41b883",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  Java: "#b07219",
  "C#": "#178600",
  "C++": "#f34b7d",
  C: "#555555",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  Nix: "#7e7eff",
};

const languageColor = computed(
  () => (props.language && LANGUAGE_COLORS[props.language]) || "#6e7f8d",
);
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="no-animation app-card cursor-pointer group shadow-sm rounded-lg w-full hover:shadow-lg transition-shadow duration-300"
  >
    <div
      class="card-inner relative flex flex-col shadow-sm rounded-lg w-full h-full p-5 gap-3"
    >
      <div v-if="language" class="language flex items-center gap-2">
        <span
          class="language-dot shrink-0 rounded-full"
          :style="{ backgroundColor: languageColor }"
          aria-hidden="true"
        />
        <span class="language-label text-sm">{{ language }}</span>
      </div>
      <h2 class="card-name font-semibold text-xl leading-snug">{{ name }}</h2>
      <p
        v-if="description"
        class="card-description font-light text-base leading-normal"
      >
        {{ description }}
      </p>
      <div class="card-cta flex items-center gap-1 mt-auto text-sm font-medium">
        <span>View on GitHub</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-3.5 h-3.5 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </a>
</template>

<style scoped>
.app-card {
  display: flex;
  /* no-animation skips the global a[href] rule which sets text-decoration: none,
     so we must set it explicitly here */
  text-decoration: none;
  background-image: none;
}

.card-inner {
  background-color: var(--surface-variant);
}

.language-dot {
  width: 12px;
  height: 12px;
}

.language-label {
  color: var(--on-surface-variant-secondary);
}

.card-name {
  color: var(--on-surface-variant);
}

.card-description {
  color: var(--on-surface-variant-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-cta {
  color: var(--primary);
}
</style>
