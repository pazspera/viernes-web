<script setup lang="ts">
defineOptions({ name: "HeroText" });
</script>

<template>
  <p class="hero-text">
    <slot />
  </p>
</template>

<style lang="css" scoped>
.hero-text {
  font-family: var(--font-text);
  line-height: 1.05;
  margin-bottom: 0.25rem;
}

@media (max-width: 600px) {
  .hero-text {
    font-size: var(--font-size-lg);
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .hero-text {
    font-size: var(--font-size-lg);
  }
}

@media (min-width: 961px) and (max-width: 1280px) {
  .hero-text {
    font-size: var(--font-size-xl);
  }
}

@media (min-width: 1281px) and (max-width: 1920px) {
  .hero-text {
    font-size: var(--font-size-xl);
  }
}

@media (min-width: 1921px) {
  .hero-text {
    font-size: var(--font-size-xl);
  }
}
</style>