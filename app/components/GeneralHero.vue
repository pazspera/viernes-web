<script setup lang="ts">
import type { GeneralHero } from '~/types/ui';

defineOptions({ name: "MovieHero" });

const props = defineProps<{
  hero: GeneralHero
}>();

</script>

<template>
  <section class="hero-grid">
    <div
      class="hero-grid__img"
      :id="hero.id"
      :style="{ backgroundImage: `url(${hero.img_src ?? `/img/hero/hero_${hero.id}.jpg`})` }"
    >
    </div>
    <div class="hero-grid__cartel box-shadow-z1">
      <HeroMainTitle>{{ hero.title }}</HeroMainTitle>
      <HeroText>{{ hero.text }}</HeroText>
    </div>
  </section>
</template>

<style scoped>
@import '@/assets/css/components.css';
</style>
