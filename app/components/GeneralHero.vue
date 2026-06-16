<script setup lang="ts">
import type { Movie } from '~/types/movie';

defineOptions({ name: "MovieHero" });

const props = defineProps<{
  movie: Pick<Movie, 'id' | 'name' | 'year' | 'director' | 'duration' | 'pick' | 'pick_category'>
}>();

const pickPrefix = computed(() => {
  const name = props.movie.pick;
  if (name === 'Pollo' || name === 'Loco') return 'Elección del ';
  return 'Elección de ';
});

const pickLink = computed(() => `/picks_${props.movie.pick_category.toLowerCase()}`);
</script>

<template>
  <section class="hero-grid">
    <div class="hero-grid__img" :id="movie.id" :style="{ backgroundImage: `url(/img/hero/hero_${movie.id}.jpg)` }">
    </div>
    <div class="hero-grid__cartel">
      <HeroMainTitle>{{ movie.name }} ({{ movie.year }})</HeroMainTitle>
      <HeroText>Dirección: {{ movie.director }}</HeroText>
      <HeroText>{{ movie.duration }}</HeroText>
      <p class="hero-text-final">
        {{ pickPrefix }}<NuxtLink :to="pickLink" class="hero-pick-link">{{ movie.pick }}</NuxtLink>
      </p>
    </div>
  </section>
</template>

<style scoped>
@import '@/assets/css/components.css';
</style>
