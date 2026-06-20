<script setup lang="ts">
import ButtonPrimary from '~/components/ButtonPrimary.vue';


const route = useRoute();
const slug = String(route.params.slug ?? '');

const { data: moviesData } = await useAsyncData("movies",
  () => queryCollection("movies").first()
)

const moviesSorted = computed(() => (moviesData?.value?.movies ?? []).slice().sort((a, b) => a.id.localeCompare(b.id)));
const movie = computed(() => moviesSorted.value.find(m => m.id === slug));
// movies ordered by date_seen (oldest -> newest)
const moviesByDate = computed(() => (moviesData?.value?.movies ?? []).slice().sort((a, b) => new Date(a.date_seen).getTime() - new Date(b.date_seen).getTime()));
const currentIndex = computed(() => moviesByDate.value.findIndex(m => m.id === slug));
const previousMovie = computed(() => (currentIndex.value > 0 ? moviesByDate.value[currentIndex.value - 1] : null));
const nextMovie = computed(() => (currentIndex.value !== -1 && currentIndex.value < moviesByDate.value.length - 1 ? moviesByDate.value[currentIndex.value + 1] : null));

</script>

<template>
  <section class="main-content container mx-auto pt-4 pb-24">
    <div v-if="movie" class="mt-6">
      <MovieHero :movie="movie" />

      <MovieSynopsis :sinopsis="movie.sinopsis" />

      <MovieCast :cast="movie.cast" :movieId="movie.id" />

      <MovieTrailer :trailer="movie.trailer" :trailer-link="movie.trailer_link" />

      <MovieImageRow :img-row="movie.img_row" :movie-id="movie.id" />

      <!-- Navigation between movies (anterior / siguiente) -->
      <div class="mt-8">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-6">
            <ButtonPrimary v-if="previousMovie" :to="`/peliculas/${previousMovie.id}`"
              class="btn btn--previous btn__primary">Viernes Anterior</ButtonPrimary>
          </div>
          <div class="col-span-6 text-right">
            <ButtonPrimary v-if="nextMovie" :to="`/peliculas/${nextMovie.id}`" class="btn btn__primary">Viernes
              Siguiente
            </ButtonPrimary>
          </div>
        </div>
      </div>

    </div>

    <div v-else class="mt-8">
      <p class="text-slate-600">Película no encontrada para <strong>{{ slug }}</strong>.</p>
    </div>
  </section>
</template>
