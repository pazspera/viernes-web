import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  // @ts-expect-error
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
