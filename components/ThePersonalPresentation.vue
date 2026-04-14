<script setup lang="ts">
const localePath = useLocalePath();
const i18n = useI18n();
const { t } = useI18n();

// ─── Tune how many items are shown on the home page ───────────────────────────
const PROJECTS_TO_SHOW = 3;
const CONTRIBUTIONS_TO_SHOW = 3;
// ─────────────────────────────────────────────────────────────────────────────

const { data: projects } = await useAsyncData(
  `${i18n.locale.value}/portfolio-preview`,
  () =>
    queryCollection("content")
      .where("path", "LIKE", `%${i18n.locale.value}/portfolio%`)
      .order("date", "DESC")
      .limit(PROJECTS_TO_SHOW)
      .all(),
);

const { data: githubData } = await useAsyncData("github-contributions", () =>
  queryCollection("github").first(),
);

const contributions = computed(
  () => githubData.value?.contributions?.slice(0, CONTRIBUTIONS_TO_SHOW) ?? [],
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

    <!-- Latest projects -->
    <div class="section-block">
      <div class="section-header">
        <h2>{{ t("index.latestProjects") }}</h2>
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
      <div class="projects-list">
        <AppCardHorizon
          v-for="project in projects"
          :key="project.path"
          :title="project.title"
          :excerpt="project.description"
          :tags="project.meta.tags"
          :image="project.meta.image"
          :more-link="project.path"
          :date="project.date"
        />
      </div>
    </div>

    <!-- Latest OSS contributions -->
    <div class="section-block">
      <div class="section-header">
        <h2>{{ t("index.latestContributions") }}</h2>
      </div>
      <div class="contributions-grid">
        <AppCardContribution
          v-for="contrib in contributions"
          :key="contrib.url"
          :name="contrib.name"
          :description="contrib.description"
          :language="contrib.language"
          :url="contrib.url"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
#personnal-presentation {
  scroll-snap-align: start;
  min-height: 100dvh;
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

#socials {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 2rem;
}

#socials > * {
  cursor: pointer;
}

.section-block {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
}

.section-block:last-child {
  padding-bottom: 4rem;
}

.section-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.section-header h2 {
  font-size: 2rem;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contributions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr));
  gap: 1.5rem;
}
</style>
