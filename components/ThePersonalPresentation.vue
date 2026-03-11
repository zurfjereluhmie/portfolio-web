<script setup lang="ts">
const localePath = useLocalePath();
const i18n = useI18n();
const { t } = useI18n();

const { data } = await useAsyncData(
  `${i18n.locale.value}/portfolio-preview`,
  () => {
    return queryCollection("content")
      .where("path", "LIKE", `%${i18n.locale.value}/portfolio%`)
      .order("date", "DESC")
      .limit(3)
      .all();
  },
);
</script>

<template>
  <div id="personnal-presentation">
    <div id="personnal">
      <h1>
        {{ t("index.hello") }}
        <NuxtLink :to="localePath('/about')">{{
          t("index.imJeremie")
        }}</NuxtLink>
      </h1>
      <p class="big">
        {{ t("index.oneSentencePres") }}
        <a
          ref="noreferrer"
          href="https://heig-vd.ch/formation/bachelor/ingenierie-des-medias/"
          target="_blank"
          aria-label="HEIG-VD Media Engineering"
          >{{ t("index.at") }} HEIG-VD</a
        >
      </p>
      <div id="socials">
        <AppSocialButton
          href="https://www.linkedin.com/in/jeremie-zurfluh/"
          brand="linkedin"
        />
        <AppSocialButton
          href="https://github.com/zurfjereluhmie"
          brand="github"
        />
      </div>
    </div>
    <div id="portfolio-preview">
      <div class="flex flex-row justify-between items-center">
        <h2>{{ t("index.latestProjects") }}</h2>
        <div>
          <NuxtLink
            :to="localePath('/portfolio')"
            class="flex items-center rounded-md py-2 px-4 border border-transparent text-center text-sm shadow-sm"
          >
            {{ t("index.seeAll") }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4 ml-1.5"
            >
              <path
                fill-rule="evenodd"
                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
      <div id="projects-grid">
        <AppCardHorizon
          v-for="project in data"
          :key="project.path"
          :title="project.title"
          :excerpt="project.description"
          :tags="project.meta.tags"
          :image="project.meta.image"
          :more-link="project.path"
          :date="project.date"
        />
      </div>
      <div id="see-all"></div>
    </div>
  </div>
</template>

<style scoped>
#personnal-presentation {
  padding: 3rem;
  margin-top: 10rem;
  background-color: var(--surface);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}

#personnal {
  margin-top: 7rem;
  width: 100%;
  max-width: 1200px;
}

#personnal h1 {
  font-size: 3rem;
}

.job-title {
  font-size: 1.1rem;
  color: var(--on-surface-secondary, var(--on-surface));
  margin-top: 0.25rem;
  opacity: 0.75;
}

#socials {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 2rem;
}

#socials > * {
  cursor: pointer;
}

#portfolio-preview {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 4rem;
}

#portfolio-preview h2 {
  font-size: 2rem;
}

#projects-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

#see-all {
  display: flex;
  justify-content: center;
}

#see-all > a {
  color: var(--on-primary);
  background-color: var(--primary);
  width: fit-content;
}

#see-all > a svg {
  transition: transform 0.2s ease-in-out;
}

#see-all > a:hover svg {
  transform: translateX(0.25rem);
}
</style>
