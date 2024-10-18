// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: ["@nuxt/content", "@nuxt/image", "@nuxtjs/tailwindcss", "@nuxtjs/seo", "@nuxtjs/i18n"],
	css: ["~/assets/css/reset.css", "~/assets/css/main.css", "~/assets/css/prose.css"],
	i18n: {
		locales: [
			{ code: "en", language: "en-US", file: "en-US.json" },
			{ code: "fr", language: "fr-FR", file: "fr-FR.json" },
		],
		baseUrl: "https://jeremie-zurfluh.ch",
		defaultLocale: "en",
		strategy: "prefix_and_default",
		lazy: true,
		langDir: "locales/",
	},
	ogImage: {
		enabled: false,
	},
	app: {
		head: {
			templateParams: {
				separator: "|",
				// other common separators: '·', '—', '•'
			},
		},
	},
	site: {
		url: "https://jeremie-zurfluh.ch",
		name: "Jérémie Zurflüh",
	},
	linkChecker: {
		failOnError: false,
		report: {
			markdown: true,
		},
	},
	schemaOrg: {
		identity: "Person",
	},
});
