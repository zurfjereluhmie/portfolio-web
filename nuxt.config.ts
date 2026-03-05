// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/seo",
    "@nuxtjs/i18n",
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@nuxt/eslint",
  ],
  css: [
    "~/assets/css/reset.css",
    "~/assets/css/main.css",
    "~/assets/css/prose.css",
  ],
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
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 3,
          depth: 3,
        },
      },
    },
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
  ogImage: {
    enabled: false,
  },
  sitemap: {
    enabled: false,
    credits: false,
  },
  robots: {
    enabled: true,
  },
  seo: {
    enabled: true,
  },
  schemaOrg: {
    enabled: true,
    identity: "Person",
  },
  linkChecker: {
    enabled: true,
    failOnError: false,
    report: {
      markdown: true,
    },
  },
});
