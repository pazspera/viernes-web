<script setup lang="ts">
import type { Movie } from '~/types/movie';

const props = defineProps<{ movies: Movie[] }>();

defineOptions({ name: "CardGrid" });
</script>

<template>
  <div class="container mx-auto px-0">
    <div class="grid grid-cols-12 gap-4">
      <CardMovie v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<style scoped></style>