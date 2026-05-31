<script setup lang="ts">
import type { Movie } from '~/types/movie';
defineOptions({ name: "CardMovie" });

const props = defineProps<{ movie: Movie }>();
</script>

<template>
  <div class="col-12 col-lg-6 relative">
    <img :src="props.movie.img_card" :alt="props.movie.img_card_alt" />
    <div class="bg-black text-white py-2 px-4">
      <CardHeading>
        <NuxtLink :to="`peliculas/${props.movie.link_page}`" class="after:absolute after:inset-0">
          {{ props.movie.name }} ({{ props.movie.year }})
        </NuxtLink>
      </CardHeading>
    </div>
  </div>
</template>

<style lang="css" scoped></style>