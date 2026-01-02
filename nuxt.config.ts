import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  // @ts-expect-error: Genera errores durante CI proque los tipos no se generan todavía cuando verifica el lint
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
