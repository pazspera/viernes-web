<template>
  <h3 class="card-heading">
    <slot />
  </h3>
</template>

<style scoped>
.card-heading {
  font-family: var(--font-title);
  line-height: 1.6;
}

@media (max-width: 600px) {
  .card-heading {
    font-size: var(--font-size-lg);
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .card-heading {
    font-size: var(--font-size-xl);
  }
}

@media (min-width: 961px) and (max-width: 1280px) {
  .card-heading {
    font-size: var(--font-size-2xl);
  }
}

@media (min-width: 1281px) and (max-width: 1920px) {
  .card-heading {
    font-size: var(--font-size-2xl);
  }
}

@media (min-width: 1921px) {
  .card-heading {
    font-size: var(--font-size-2xl);
  }
}
</style>