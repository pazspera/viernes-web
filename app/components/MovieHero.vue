<script setup lang="ts">
import type { Movie } from '~/types/movie';

defineOptions({ name: "MovieHero" });

const props = defineProps<{
  movie: Pick<Movie, 'id' | 'name' | 'year' | 'director' | 'duration' | 'pick' | 'pick_category' | 'sinopsis'>
}>();

const pickPrefix = computed(() => {
  const name = props.movie.pick;
  if (name === 'Pollo' || name === 'Loco') return 'Elección del ';
  return 'Elección de ';
});

const pickLink = computed(() => `/picks/${props.movie.pick_category.toLowerCase()}`);

/* Animations */



</script>

<template>
  <section class="hero-section">
    <div class="container mx-auto pt-4 pb-24">
      <div class="grid grid-cols-12">
        <div class="col-span-12">
          <div class="hero-section-img" :id="movie.id"
            :style="{ backgroundImage: `url(/img/hero/hero_${movie.id}.jpg)` }">
          </div>
        </div>
        <div class="col-span-8 lg:col-span-6">
          <div class="hero-section-text box-shadow-z1">
            <HeroMainTitle>{{ movie.name }} ({{ movie.year }})</HeroMainTitle>
            <HeroText>Dirección: {{ movie.director }}</HeroText>
            <HeroText>{{ movie.duration }}</HeroText>
            <p class="hero-text-final ">
              {{ pickPrefix }}<NuxtLink :to="pickLink" class="hero-pick-link">{{ movie.pick }}</NuxtLink>
            </p>
          </div>
        </div>
        <div class="col-span-8 md:col-span-5 lg:col-span-7">
          <div class="hero-section-text box-shadow-z1">
            <MovieSynopsis :sinopsis="movie.sinopsis" />
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>

  </section>
</template>

<style scoped>
.hero-section {
  min-height: 200dvh;
}

.hero-section-img {
  min-height: 70dvh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-section-text {
  background-color: var(--white);
  padding: 1.5rem 2rem;
  z-index: 10;
}

@media (min-width: 641px) and (max-width: 767px) {
  .hero-section-img {
    min-height: 80dvh;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .hero-section-img {
    min-height: 90dvh;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .hero-section-img {
    min-height: 110dvh;
  }
}
</style>
