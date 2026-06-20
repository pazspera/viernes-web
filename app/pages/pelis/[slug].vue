<script setup lang="ts">

const route = useRoute();
const slug = String(route.params.slug ?? '');

const { data: moviesData } = await useAsyncData("movies",
  () => queryCollection("movies").first()
)

const moviesSorted = computed(() => (moviesData?.value?.movies ?? []).slice().sort((a, b) => a.id.localeCompare(b.id)));
const movie = computed(() => moviesSorted.value.find(m => m.id === slug));

</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <NuxtLink to="/" class="text-sm text-slate-500">← Volver</NuxtLink>

    <div v-if="movie" class="mt-6">
      <MovieHero :movie="movie" />
      <MovieSynopsis :sinopsis="movie.sinopsis" />

      <MovieCast :cast="movie.cast" :movieId="movie.id" />

      <MovieTrailer :trailer="movie.trailer" :trailer-link="movie.trailer_link" />

      <MovieImageRow :img-row="movie.img_row" :movie-id="movie.id" />

    </div>

    <div v-else class="mt-8">
      <p class="text-slate-600">Película no encontrada para <strong>{{ slug }}</strong>.</p>
    </div>
  </div>
</template>
