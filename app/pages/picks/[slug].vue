<script setup lang="ts">
import { computed } from 'vue'
import CardGrid from '~/components/CardGrid.vue'
import GeneralHero from '~/components/GeneralHero.vue'
import { PICK_HERO } from '~/constants/picks'

const route = useRoute()
const pick = String(route.params.pick_category ?? '')

const { data: moviesData } = await useAsyncData(`movies-pick-${pick}`, () => queryCollection('movies').first())

const filteredMovies = computed(() => {
  const arr = (moviesData.value?.movies ?? []) as Array<any>
  return arr.filter((m: any) => String(m.pick_category ?? m.pick ?? '').toLowerCase() === pick.toLowerCase())
})

const displayCategory = computed(() => pick ? pick.charAt(0).toUpperCase() + pick.slice(1) : '')

const hero = computed(() => {
  const key = pick.toLowerCase()
  if (PICK_HERO[key]) return PICK_HERO[key]
  // find by id match
  for (const k in PICK_HERO) {
    if (PICK_HERO[k].id === pick) return PICK_HERO[k]
  }
  // try camelCase key (piden_pista -> pidenPista)
  const camel = key.replace(/_([a-z])/g, (_, c) => c.toUpperCase())
  if (PICK_HERO[camel]) return PICK_HERO[camel]
  return null
})
</script>

<template>
  <div class="main-content container mx-auto pt-4 pb-24">
    <GeneralHero v-if="hero" :hero="hero" />

    <CardGrid :movies="filteredMovies" />

    <p v-if="(filteredMovies || []).length === 0" class="mt-6 text-gray-600">
      No hay películas para la categoría “{{ pick }}”.
    </p>
  </div>
</template>

<style scoped></style>
