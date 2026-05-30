<script setup lang="ts">
defineOptions({ name: "ButtonLabel" });
</script>

<template>
  <span class="button-label">
    <slot />
  </span>
</template>

<style lang="css" scoped>
.button-label {
  font-family: var(--font-text);
  line-height: 1.15;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

@media (max-width: 600px) {
  .button-label {
    font-size: var(--font-size-sm);
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .button-label {
    font-size: var(--font-size-sm);
  }
}

@media (min-width: 961px) and (max-width: 1280px) {
  .button-label {
    font-size: var(--font-size-md);
  }
}

@media (min-width: 1281px) and (max-width: 1920px) {
  .button-label {
    font-size: var(--font-size-lg);
  }
}

@media (min-width: 1921px) {
  .button-label {
    font-size: var(--font-size-lg);
  }
}
</style>