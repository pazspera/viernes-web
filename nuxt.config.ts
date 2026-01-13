import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  // @ts-expect-error: Genera errores durante CI proque los tipos no se generan todavía cuando verifica el lint
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
