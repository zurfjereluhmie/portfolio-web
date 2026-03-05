<script setup lang="ts">
const i18n = useI18n();
const { t } = useI18n();
const { data } = await useAsyncData(`${i18n.locale.value}/portfolio`, () => {
  return queryCollection("content")
    .where("path", "LIKE", `%${i18n.locale.value}/portfolio%`)
    .order("date", "DESC")
    .all();
});

useSeoMeta({
  title: t("portfolio.meta.title"),
  description: t("portfolio.meta.description"),
  ogTitle: t("portfolio.meta.title"),
  ogDescription: t("portfolio.meta.description"),
  twitterTitle: t("portfolio.meta.title"),
  twitterDescription: t("portfolio.meta.description"),
});
</script>

<template>
  <header>
    <TheNavBar current-path="/portfolio" />
  </header>
  <main>
    <div class="px-6">
      <h1>{{ t("portfolio.portfolio") }}</h1>
      <div class="w-full flex justify-center">
        <div
          class="flex flex-row flex-wrap justify-center gap-6 max-w-[1200px]"
        >
          <AppCard
            v-for="(project, i) in data"
            :key="project.path"
            :title="project.title"
            :excerpt="project.description"
            :tags="project.meta.tags"
            :image="project.meta.image"
            :more-link="project.path"
            :date="project.date"
            :delay-anim="`${i * 100}ms`"
          />
        </div>
      </div>
    </div>
  </main>
  <TheFooter />
</template>

<style scoped>
@import url("~/assets/css/normal-page.css");
</style>
