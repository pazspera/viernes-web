<script setup lang="ts">
const propts = defineProps<{ to: any }>();

defineOptions({ name: "Logo" });
</script>

<template>
  <NuxtLink :to="to" class="logo hover:text-primary-500">
    <slot />
  </NuxtLink>
</template>

<style lang="css" scoped>
.logo {
  font-family: var(--font-logo);
  transition: all 0.5s ease-in-out;

}

.logo:hover {
  transition: all 0.5s ease-in-out;
}

@media (max-width: 600px) {
  .logo {
    font-size: var(--font-size-md);
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .logo {
    font-size: var(--font-size-lg);
  }
}

@media (min-width: 961px) and (max-width: 1280px) {
  .logo {
    font-size: var(--font-size-lg);
  }
}

@media (min-width: 1281px) and (max-width: 1920px) {
  .logo {
    font-size: var(--font-size-xl);
  }
}

@media (min-width: 1921px) {
  .logo {
    font-size: var(--font-size-xl);
  }
}
</style>