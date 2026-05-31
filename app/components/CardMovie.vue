<script setup lang="ts">
import type { Movie } from '~/types/movie';
defineOptions({ name: "CardMovie" });

const props = defineProps<{ movie: Movie }>();
</script>

<template>
  <div class="card card-pelicula col-12 col-lg-6">
    <img :src="props.movie.img_card" :alt="props.movie.img_card_alt" class="card-img-top" />
    <div class="card-body card-pelicula__contenido">
      <h3 class="card-pelicula__titulo">
        <a :href="`peliculas/${props.movie.link_page}`" class="stretched-link">
          {{ props.movie.name }} ({{ props.movie.year }})
        </a>
      </h3>
    </div>
  </div>
</template>

<style lang="css" scoped></style>