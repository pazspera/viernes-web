<script setup lang="ts">
import { YEAR_TEMPLATES } from '~/constants/templates'
import type { GeneralHero } from '~/types/ui'

const route = useRoute()
const year = computed(() => parseInt(route.params.slug as string))
const template = computed(() => YEAR_TEMPLATES[year.value] ?? { title: `Viernes ${year.value}`, tagline: '' })

const heroYear: GeneralHero = computed(() => ({
  title: template.value.title,
  text: template.value.tagline,
  id: String(year.value),
  img_src: ''
}))

const { data } = await useAsyncData(`movies-${year}`, () =>
  queryCollection('movies').first()
)
const movies = computed(() => {
  if (!data.value?.movies) return []
  return data.value.movies.filter((m: { year: number }) => m.year === year.value)
})
</script>

<template>
  <div>
    <GeneralHero :hero="heroYear" />
    <main class="main-content" id="main-content">
      <CardGrid :movies="movies" />
    </main>
  </div>
</template>