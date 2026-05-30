<script setup lang="ts">
const props = defineProps<{ to: any }>();

defineOptions({ name: "NavigationLink" });
</script>

<template>
  <NuxtLink :to="to" class="navigation-link hover:text-primary-500">
    <slot />
  </NuxtLink>
</template>

<style scoped>
.navigation-link {
  font-family: var(--font-text);
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  transition: all 0.25s ease-in-out;
}

.navigation-link:hover {
  transition: all 0.25s ease-in-out;
}

@media (max-width: 600px) {
  .navigation-link {
    font-size: var(--font-size-sm);
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .navigation-link {
    font-size: var(--font-size-md);
  }
}

@media (min-width: 961px) and (max-width: 1280px) {
  .navigation-link {
    font-size: var(--font-size-md);
  }
}

@media (min-width: 1281px) and (max-width: 1920px) {
  .navigation-link {
    font-size: var(--font-size-md);
  }
}

@media (min-width: 1921px) {
  .navigation-link {
    font-size: var(--font-size-lg);
  }
}
</style>