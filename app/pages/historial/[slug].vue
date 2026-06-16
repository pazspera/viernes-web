<script setup lang="ts">
import { YEAR_TEMPLATES } from '~/constants/templates'
import type { GeneralHero } from '~/types/ui'
import type { Movie } from '~/types/movie'

const MONTH_NAMES: Record<number, string> = {
  1: 'Enero',
  2: 'Febrero',
  3: 'Marzo',
  4: 'Abril',
  5: 'Mayo',
  6: 'Junio',
  7: 'Julio',
  8: 'Agosto',
  9: 'Septiembre',
  10: 'Octubre',
  11: 'Noviembre',
  12: 'Diciembre',
}

const route = useRoute()
const year = computed(() => parseInt(route.params.slug as string))
const template = computed(() => YEAR_TEMPLATES[year.value] ?? { title: `Viernes ${year.value}`, tagline: '' })

const heroYear = computed(() => ({
  title: template.value.title,
  text: template.value.tagline,
  id: String(year.value),
  img_src: ''
}))

const { data } = await useAsyncData(`movies-${year}`, () =>
  queryCollection('movies').first()
)

const yearMovies = computed(() => {
  if (!data.value?.movies) return []
  return data.value.movies.filter((m: { date_seen: string }) =>
    new Date(m.date_seen).getFullYear() === year.value
  )
})

const moviesByMonth = computed(() => {
  const groups = new Map<number, Movie[]>()
  for (const movie of yearMovies.value) {
    const month = new Date(movie.date_seen).getMonth() + 1
    if (!groups.has(month)) groups.set(month, [])
    groups.get(month)!.push(movie)
  }
  return [...groups.entries()]
    .sort(([a], [b]) => a - b)
    .map(([month, movies]) => ({ month, name: MONTH_NAMES[month], movies }))
})
</script>

<template>
  <div>
    <main class="main-content container mx-auto pt-4 pb-24" id="main-content">
      <GeneralHero :hero="heroYear" />
      <section v-for="group in moviesByMonth" :key="group.month" class="container mx-auto px-4 mb-12">
        <SectionTitle class="ms-4">{{ group.name }}</SectionTitle>
        <CardGrid :movies="group.movies" />
      </section>
    </main>
  </div>
</template>
