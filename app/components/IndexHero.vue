<script setup lang="ts">
import type { Movie } from '~/types/movie';

defineOptions({ name: "IndexHero" });

const { data: moviesData } = await useAsyncData("index-hero-last-movie",
  () => queryCollection("movies").first()
);

const lastMovie = computed<Movie | undefined>(() => {
  const movies = moviesData.value?.movies ?? [];
  if (movies.length === 0) return undefined;
  const sorted = [...movies].sort((a, b) =>
    new Date(b.date_seen).getTime() - new Date(a.date_seen).getTime()
  );
  return sorted[0];
});
</script>

<template>
  <section id="hero_index">
    <div v-if="lastMovie" :id="lastMovie.id" class="hero">
      <div class="hero__cartel">
        <p class="hero__leyenda">El viernes pasado vimos</p>
        <h3 class="hero__titulo">{{ lastMovie.name }} ({{ lastMovie.year }})</h3>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 70vh;
  padding: 2em 0;
  display: flex;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero__cartel {
  background-color: var(--white);
  position: absolute;
  top: 5%;
  right: 0;
  padding: 0.5rem 2.5rem 0.5em 1.5em;
  max-width: 390px;
}

.hero__leyenda {
  text-transform: uppercase;
  margin-bottom: 0.4rem;
  font-size: var(--font-size-lg);
}

.hero__titulo {
  font-size: var(--font-size-4xl);
}

@media (min-width: 1000px) {
  .hero {
    height: 90vh;
  }
}

@media (min-width: 1700px) {
  .hero__cartel {
    max-width: none;
  }
}
</style>
