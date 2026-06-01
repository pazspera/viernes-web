<script setup lang="ts">
import type { Movie } from '~/types/movie';

const props = defineProps<{ movies: Movie[] }>();

defineOptions({ name: "CardGrid" });
</script>

<template>
  <section>
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-12 gap-2">
        <CardMovie v-for="movie in movies" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>