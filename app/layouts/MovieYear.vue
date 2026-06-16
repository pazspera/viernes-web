<script setup lang="ts">
import { YEAR_TEMPLATES, YEAR_IMAGES } from '~/constants/templates'

definePageMeta({ layout: false })

const route = useRoute()
const year = computed(() => parseInt(route.params.slug as string))
const template = computed(() => YEAR_TEMPLATES[year.value] ?? { title: `Viernes ${year.value}`, tagline: '' })
const heroImage = computed(() => YEAR_IMAGES[year.value] ?? '')

const { data } = await useAsyncData('movies', () =>
  queryCollection('movies').first()
)

const movies = computed(() => {
  if (!data.value?.movies) return []
  return data.value.movies.filter((m: { year: number }) => m.year === year.value)
})
</script>

<template>
  <div>
    <AppHeader />
    <section class="hero-grid">
      <div
        class="hero-grid__img"
        :id="`peliculas_${year}`"
        :style="{ backgroundImage: `url(${heroImage})` }"
      ></div>
      <div class="hero-grid__cartel hero-grid__cartel--cartel-corto">
        <h1 class="hero-grid__titulo">{{ template.title }}</h1>
        <p class="hero-grid__texto-final">{{ template.tagline }}</p>
      </div>
    </section>

    <main class="main-content" id="main-content">
      <CardGrid :movies="movies" />
    </main>

    <Footer />
  </div>
</template>