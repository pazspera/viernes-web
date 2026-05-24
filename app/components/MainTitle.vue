<template>
  <h1 class="main-title">
    <slot />
  </h1>
</template>

<style scoped>
.main-title {
  font-family: var(--font-title);
  line-height: 1.15;
  margin-bottom: 0.5rem;
}

@media (max-width: 600px) {
  .main-title {
    font-size: var(--font-size-2xl);
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .main-title {
    font-size: var(--font-size-3xl);
  }
}

@media (min-width: 961px) and (max-width: 1280px) {
  .main-title {
    font-size: var(--font-size-4xl);
  }
}

@media (min-width: 1281px) and (max-width: 1920px) {
  .main-title {
    font-size: var(--font-size-5xl);
  }
}

@media (min-width: 1921px) {
  .main-title {
    font-size: var(--font-size-5xl);
  }
}
</style>