<script setup lang="ts">
defineOptions({ name: "CastText" });
</script>

<template>
  <p class="cast-text py-2">
    <slot />
  </p>
</template>

<style scoped>
.cast-text {
  font-family: var(--font-text);
  font-weight: 400;
  line-height: 1;
  text-align: center;
}

@media (max-width: 600px) {
  .cast-text {
    font-size: var(--font-size-xxs);
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .cast-text {
    font-size: var(--font-size-xs);
  }
}

@media (min-width: 961px) and (max-width: 1280px) {
  .cast-text {
    font-size: var(--font-size-xs);
  }
}

@media (min-width: 1281px) and (max-width: 1920px) {
  .cast-text {
    font-size: var(--font-size-md);
  }
}

@media (min-width: 1921px) {
  .cast-text {
    font-size: var(--font-size-md);
  }
}
</style>