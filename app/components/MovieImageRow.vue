<script setup lang="ts">
import type { MovieImage } from '~/types/movie';

defineOptions({ name: "MovieImgRow" });
const props = defineProps<{ imgRow: MovieImage[], movieId: string }>();

const fullImgSrc = (img: string) =>
  `/img/pelicula/${props.movieId}/${props.movieId}_${img}`;
</script>

<template>
  <section class="2xl:container 2xl:mx-auto 2xl:px-4">
    <div class="flex flex-wrap">
      <div v-for="image in props.imgRow" :key="image.img" :class="[
        'pelicula__img',
        image.class === 'always_show'
          ? 'w-full md:w-1/2 xl:w-1/3'
          : 'hidden xl:block xl:w-1/3'
      ]">
        <img :src="fullImgSrc(image.img)" :alt="image.alt" class="w-full" />
      </div>
    </div>
  </section>
</template>