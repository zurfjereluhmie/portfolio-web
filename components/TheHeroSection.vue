<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div id="hero-container">
    <div id="name">
      <p>Jérémie <span>Zurflüh</span></p>
    </div>
    <div id="pro-infos">
      <p>{{ t("index.education") }}</p>
      <p>{{ t("index.job") }}</p>
    </div>
    <a
      href="#personnal-presentation"
      id="scroll-indicator"
      class="no-animation"
      aria-label="Scroll to main content"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-7 h-7"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </a>
  </div>
</template>

<style scoped>
#hero-container {
  position: relative;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--hero-bg);
  background-size: cover;
}

#name {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15dvh;
}

#name p {
  color: var(--on-surface);
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  /* Animation */
  opacity: 0;
  animation: enter 1s 0.5s forwards;
}

#name span {
  font-weight: 600;
}

#pro-infos {
  margin-left: 3rem;
  margin-bottom: 3rem;

  /* Animation */
  opacity: 0;
  animation: enter 1s 1.5s forwards;
}

#pro-infos *:first-child {
  color: var(--on-surface);
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

#pro-infos *:last-child {
  color: var(--on-surface);
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

#scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: var(--on-surface);

  /* Fade in after pro-infos, then bounce forever */
  opacity: 0;
  animation:
    enter 1s 2.5s forwards,
    bounce 2s 3.5s ease-in-out infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(8px);
  }
}

h1 {
  text-align: center;
  mix-blend-mode: darken;
}

h1::before {
  content: "";
  display: block;
  width: 100px;
  height: 2px;
  background-color: var(--on-surface);
  margin: 0 auto;
  margin-top: 1rem;
}
</style>
