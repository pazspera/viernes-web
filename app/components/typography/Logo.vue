<script setup lang="ts">
const props = defineProps<{ to: any }>();
</script>

<template>
  <NuxtLink :to="to" class="font-logo text-white hover:text-primary-500 text-base md:text-xl lg:text-2xl 2xl:text-3xl">
    <slot />
  </NuxtLink>
</template>