// @ts-nocheck
import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts'
  ],
  fonts: {
    families: [
      { name: 'Karla', weights: [ 300, 400, 700 ] },
      { name: 'Cardo', weights: [ 700 ] },
      { name: 'Major Mono Display', weights: [ 400, 700 ] },
    ]
  },
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  // @ts-expect-error: Genera errores durante CI proque los tipos no se generan todavía cuando verifica el lint
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
