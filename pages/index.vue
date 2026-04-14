<script setup lang="ts">
const { t } = useI18n();
const personalPresentationRef = ref<HTMLElement | null>(null);
const navBarRef = ref<HTMLElement | null>(null);

// Navbar animation: hidden on hero, fades in when personal presentation enters view
onMounted(() => {
  personalPresentationRef.value = document.querySelector<HTMLElement>(
    "#personnal-presentation",
  );
  navBarRef.value = document.querySelector<HTMLElement>("header");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          navBarRef.value!.classList.add("animate-in");
          navBarRef.value!.classList.remove("animate-out");
        } else {
          navBarRef.value!.classList.remove("animate-in");
          navBarRef.value!.classList.add("animate-out");
        }
      });
    },
    { threshold: 0 },
  );

  if (personalPresentationRef.value)
    observer.observe(personalPresentationRef.value);

  onUnmounted(() => {
    if (personalPresentationRef.value)
      observer.unobserve(personalPresentationRef.value);
  });
});

useSeoMeta({
  title: t("index.meta.title"),
  description: t("index.meta.description"),
  ogTitle: t("index.meta.title"),
  ogDescription: t("index.meta.description"),
  twitterTitle: t("index.meta.title"),
  twitterDescription: t("index.meta.description"),
});
</script>

<template>
  <a href="#personnal-presentation" class="sr-only">{{
    t("index.accessibility.skipToMainContent")
  }}</a>
  <header>
    <TheNavBar current-path="/" />
  </header>
  <main>
    <TheHeroSection />
    <ThePersonalPresentation />
    <TheFooter />
  </main>
</template>

<style scoped>
main {
  height: 100dvh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  background-color: var(--surface);
}

header * {
  opacity: 0;
}

header.animate-in * {
  animation: fadeIn 0.5s forwards;
}

header.animate-out * {
  animation: fadeOut 0.3s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
