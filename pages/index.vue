<script setup lang="ts">
const { t } = useI18n();
const personalPresentationRef = ref<HTMLElement | null>(null);
const navBarRef = ref<HTMLElement | null>(null);
const mainRef = ref<HTMLElement | null>(null);

// Navbar animation
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

// Smooth scroll
onMounted(() => {
  mainRef.value = document.querySelector<HTMLElement>("main");
  const theHeroSection =
    mainRef.value!.querySelector<HTMLElement>("#hero-container")!;
  const thePersonalPresentation = mainRef.value!.querySelector<HTMLElement>(
    "#personnal-presentation",
  )!;
  const scrollUpsLimit = 5;
  let scrollUps = 0;

  const scrollDownToPersonalPresentation = (e: WheelEvent | MouseEvent) =>
    (e as WheelEvent).deltaY > 0 || (e as WheelEvent).deltaY == undefined
      ? thePersonalPresentation.scrollIntoView({ behavior: "smooth" })
      : null;
  const scrollDownToHeroSection = (e: WheelEvent) => {
    if (e.deltaY < 0) {
      scrollUps++;
    } else {
      scrollUps = 0;
    }
    if (scrollUps >= scrollUpsLimit) {
      theHeroSection.scrollIntoView({ behavior: "smooth" });
      scrollUps = 0;
    }
  };

  theHeroSection.addEventListener("wheel", (e) =>
    scrollDownToPersonalPresentation(e),
  );
  theHeroSection.addEventListener("click", (e) =>
    scrollDownToPersonalPresentation(e),
  );
  thePersonalPresentation.addEventListener("wheel", (e) =>
    scrollDownToHeroSection(e),
  );

  onUnmounted(() => {
    theHeroSection.removeEventListener("wheel", (e) =>
      scrollDownToPersonalPresentation(e),
    );
    theHeroSection.removeEventListener("click", (e) =>
      scrollDownToPersonalPresentation(e),
    );
    thePersonalPresentation.removeEventListener("wheel", (e) =>
      scrollDownToHeroSection(e),
    );
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
