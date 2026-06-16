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
    <div
      class="hero-grid__img"
      :id="movie.id"
      :style="{ backgroundImage: `url(/img/hero/hero_${movie.id}.jpg)` }"
    ></div>
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
.hero-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 15vh) auto auto;
}

.hero-grid__img {
  grid-column: 1 / 13;
  grid-row: 1 / 5;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-grid__cartel {
  background-color: var(--white);
  padding: 1.5rem 2rem;
  z-index: 10;
  grid-row: 4 / 6;
  grid-column: 2 / 12;
}

.hero-pick-link {
  text-decoration: none;
  color: var(--primary-500);
  transition: all 0.5s ease-in-out;
}

.hero-pick-link:hover {
  color: var(--primary-500);
  font-weight: 900;
}

.hero-text-final {
  font-family: var(--font-text);
  margin-bottom: 0.5rem;
  line-height: 1.05;
  margin-bottom: 0.25rem;
  font-size: var(--font-size-lg);
}

@media (min-width: 576px) {
  .hero-grid__cartel {
    grid-column: 4 / 12;
  }
}

@media (min-width: 768px) {
  .hero-grid {
    grid-template-rows: repeat(3, 18vh) auto auto;
  }

  .hero-grid__img {
    grid-row: 1 / 5;
  }

  .hero-grid__cartel {
    grid-column: 7 / 12;
    grid-row: 4 / 6;
  }
}

@media (min-width: 992px) {
  .hero-grid {
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat(4, 18vh) auto auto;
  }

  .hero-grid__img {
    grid-column: 1 / 15;
    grid-row: 1 / 6;
  }

  .hero-grid__cartel {
    grid-column: 8 / 13;
    grid-row: 5 / 7;
  }
}

@media (min-width: 1200px) {
  .hero-grid {
    grid-template-columns: repeat(14, 1fr);
  }

  .hero-grid__img {
    grid-column: 1 / 15;
  }

  .hero-grid__cartel {
    grid-column: 8 / 13;
  }
}

@media (min-width: 1400px) {
  .hero-grid {
    grid-template-columns: repeat(20, 1fr);
  }

  .hero-grid__img {
    grid-column: 1 / 21;
  }

  .hero-grid__cartel {
    grid-column: 10 / 17;
  }
}

@media (min-width: 1800px) {
  .hero-grid__cartel {
    grid-column: 10 / 15;
  }
}

@media (min-width: 2000px) {
  .hero-grid__cartel {
    grid-column: 10 / 14;
  }
}

@media (min-width: 2700px) {
  .hero-grid__cartel {
    grid-column: 10 / 13;
  }
}
</style>
