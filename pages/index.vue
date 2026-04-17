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
  const main = document.querySelector<HTMLElement>("main");

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
    // root must be the scroll container, not the viewport
    { root: main, threshold: 0 },
  );

  if (personalPresentationRef.value)
    observer.observe(personalPresentationRef.value);

  onUnmounted(() => {
    if (personalPresentationRef.value)
      observer.unobserve(personalPresentationRef.value);
  });
});

// Smooth snap scroll: intercept wheel events only while the hero is the most
// visible section. Once the user has scrolled past it, native scroll takes over
// so they can freely reach the footer.
onMounted(() => {
  const main = document.querySelector<HTMLElement>("main");
  if (!main) return;

  let isSnapping = false;

  const onWheel = (e: WheelEvent) => {
    // Only handle vertical wheel
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

    const hero = main.querySelector<HTMLElement>("#hero-container");
    const presentation = main.querySelector<HTMLElement>(
      "#personnal-presentation",
    );
    if (!hero || !presentation) return;

    if (isSnapping) {
      e.preventDefault();
      return;
    }

    const mainRect = main.getBoundingClientRect();
    const heroRect = hero.getBoundingClientRect();
    const heroOverlap =
      Math.min(heroRect.bottom, mainRect.bottom) -
      Math.max(heroRect.top, mainRect.top);

    // Hero is not the dominant section — let native scroll handle it
    if (heroOverlap <= 0) return;

    if (e.deltaY > 0) {
      // Scrolling down while hero is visible → snap to presentation
      e.preventDefault();
      isSnapping = true;
      presentation.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        isSnapping = false;
      }, 700);
    } else if (e.deltaY < 0) {
      // Scrolling up while hero is still (partially) visible → snap back to hero top
      e.preventDefault();
      isSnapping = true;
      hero.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        isSnapping = false;
      }, 700);
    }
  };

  main.addEventListener("wheel", onWheel, { passive: false });

  onUnmounted(() => {
    main.removeEventListener("wheel", onWheel);
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
