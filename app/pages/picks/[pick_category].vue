<script setup lang="ts">
import { computed } from 'vue'
import CardGrid from '~/components/CardGrid.vue'

const route = useRoute()
const pick = String(route.params.pick_category ?? '')

const { data: moviesData } = await useAsyncData(`movies-pick-${pick}`, () => queryCollection('movies').first())

const filteredMovies = computed(() => {
  const arr = (moviesData.value?.movies ?? []) as Array<any>
  return arr.filter((m: any) => String(m.pick_category ?? m.pick ?? '').toLowerCase() === pick.toLowerCase())
})

const displayCategory = computed(() => pick ? pick.charAt(0).toUpperCase() + pick.slice(1) : '')
</script>

<template>
  <div class="container mx-auto py-8">
    <h1 class="text-2xl font-bold mb-4">Picks: {{ displayCategory }}</h1>

    <CardGrid :movies="filteredMovies" />

    <p v-if="(filteredMovies || []).length === 0" class="mt-6 text-gray-600">
      No hay películas para la categoría “{{ pick }}”.
    </p>
  </div>
</template>

<style scoped></style>
