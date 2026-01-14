import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/test-utils/module",
  ],
  /* fonts: {
    families: [
      { name: 'Karla', weights: [ 300, 400, 700 ] },
      { name: 'Cardo', weights: [ 700 ] },
      { name: 'Major Mono Display', weights: [ 400, 700 ] },
    ]
  }, */
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cardo:wght@700&family=Karla:wght@300;400;700&family=Major+Mono+Display&family=Outfit:wght@400;700&display=swap",
        },
      ],
    },
  },
  css: ["@/assets/css/main.css"],
  compatibilityDate: "2025-07-15",
  // @ts-expect-error: Genera errores durante CI proque los tipos no se generan todavía cuando verifica el lint
  eslint: {
    config: {
      stylistic: true,
    },
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
});
