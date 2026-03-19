<script setup lang="ts">
const props = defineProps<{ to: any }>();

</script>
<template>
  <NuxtLink :to="to"
    class="text-white hover:text-primary-500 uppercase ps-3 tracking-wide text-sm md:text-base lg:text-lg 2xl:text-xl">
    <slot />
  </NuxtLink>
</template>