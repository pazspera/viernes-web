<script setup lang="ts">
import type { RandomPoster } from '~/types/random';

defineOptions({ name: "RandomPoster" });

const props = defineProps<{ poster: RandomPoster }>();

const alt = computed(() => {
  return `Poster ${props.poster.name}`
})

</script>

<template>
  <div class="col-span-6 md:col-span-4">
    <NuxtLink :to="poster.imdb" target="_blank">
      <img :src="poster.src" :alt="alt" />
    </NuxtLink>
  </div>
</template>