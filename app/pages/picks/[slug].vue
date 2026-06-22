<script setup lang="ts">
import { computed } from 'vue'
import type { GeneralHero as GeneralHeroType } from '~/types/ui'
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

const hero = computed<GeneralHeroType | null>(() => {
  const key = pick.toLowerCase()
  const direct = (PICK_HERO as Record<string, GeneralHeroType>)[key]
  if (direct) return direct
  // find by id match
  const byId = Object.values(PICK_HERO as Record<string, GeneralHeroType>).find(h => h.id === pick)
  if (byId) return byId
  // try camelCase key (piden_pista -> pidenPista)
  const camel = key.replace(/_([a-z])/g, (_, c) => c.toUpperCase())
  const camelEntry = (PICK_HERO as Record<string, GeneralHeroType>)[camel]
  if (camelEntry) return camelEntry
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
