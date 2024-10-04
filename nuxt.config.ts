// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: ["@nuxt/content", "@nuxt/image", "@nuxtjs/tailwindcss"],
	css: ["~/assets/css/reset.css", "~/assets/css/main.css", "~/assets/css/prose.css"],
});
