<script setup lang="ts">
import type { HistoryYear } from '~/types/history';
import type { GeneralHero } from '~/types/ui';


const years: HistoryYear[] = [
  {
    src: "/img/2020-brazil.jpg",
    alt: "Viernes del 2020",
    year: "2020",
    to: "/historial/2020"
  },
  {
    src: "/img/2021-mulholland.jpg",
    alt: "Viernes del 2021",
    year: "2021",
    to: "/historial/2021"
  },
  {
    src: "/img/2022-from-dusk.jpg",
    alt: "Viernes del 2022",
    year: "2022",
    to: "/historial/2022"
  }
]

const HystoryHero: GeneralHero = {
  title: "Historial de películas",
  text: "Todos los viernes todos.",
  img_src: "/img/hero/hero_historial_peliculas.jpg",
  id: "historial_peliculas"
}

</script>

<template>
  <div>
    <section class="container mx-auto pt-4 pb-24">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 pb-12">
          <GeneralHero :hero="HystoryHero" />
        </div>
        <YearCard v-for="year in years" :key="year.year" :history-year="year"></YearCard>
      </div>
    </section>
  </div>
</template>