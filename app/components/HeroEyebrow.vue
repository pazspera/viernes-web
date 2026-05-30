<script setup lang="ts">
defineOptions({ name: "HeroEyebrow" });
</script>

<template>
  <p class="hero-eyebrow">
    <slot />
  </p>
</template>

<style lang="css" scoped>
.hero-eyebrow {
  font-family: var(--font-text);
  line-height: 1.15;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

@media (max-width: 600px) {
  .hero-eyebrow {
    font-size: var(--font-size-sm);
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .hero-eyebrow {
    font-size: var(--font-size-sm);
  }
}

@media (min-width: 961px) and (max-width: 1280px) {
  .hero-eyebrow {
    font-size: var(--font-size-md);
  }
}

@media (min-width: 1281px) and (max-width: 1920px) {
  .hero-eyebrow {
    font-size: var(--font-size-md);
  }
}

@media (min-width: 1921px) {
  .hero-eyebrow {
    font-size: var(--font-size-md);
  }
}
</style>