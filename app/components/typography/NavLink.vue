<script setup lang="ts">
const props = defineProps<{ to: any }>();

</script>
<template>
  <NuxtLink :to="to" class="!text-white hover:!text-primary-500 ps-3">
    <slot />
  </NuxtLink>
</template>