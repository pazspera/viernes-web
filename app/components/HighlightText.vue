<script setup lang="ts">
defineOptions({ name: "HighlightText" });
</script>

<template>
  <p class="highlight-text">
    <slot />
  </p>
</template>

<style scoped>
.highlight-text {
  font-family: var(--font-text);
  line-height: 1.15;
  font-weight: 300;
  margin-bottom: 0.5rem;
}

@media (max-width: 600px) {
  .highlight-text {
    font-size: var(--font-size-lg);
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .highlight-text {
    font-size: var(--font-size-xl);
  }
}

@media (min-width: 961px) and (max-width: 1280px) {
  .highlight-text {
    font-size: var(--font-size-2xl);
  }
}

@media (min-width: 1281px) and (max-width: 1920px) {
  .highlight-text {
    font-size: var(--font-size-3xl);
  }
}

@media (min-width: 1921px) {
  .highlight-text {
    font-size: var(--font-size-4xl);
  }
}
</style>