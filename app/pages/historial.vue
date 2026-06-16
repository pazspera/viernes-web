<script setup lang="ts">
import type { HistoryYear } from '~/types/history';


const years: HistoryYear[] = [
  {
    src: "/img/2020-brazil.jpg",
    alt: "Viernes del 2020",
    year: "2020",
    to: "/2020"
  },
  {
    src: "/img/2021-mulholland.jpg",
    alt: "Viernes del 2021",
    year: "2021",
    to: "/2021"
  },
  {
    src: "/img/2022-from-dusk.jpg",
    alt: "Viernes del 2022",
    year: "2022",
    to: "/2022"
  }
]

</script>

<template>
  <div>
    <section class="container mx-auto px-4">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12">
          <h1>Historial de películas</h1>
        </div>
        <YearCard v-for="year in years" :key="year.year" :history-year="year"></YearCard>
      </div>
    </section>
  </div>
</template>