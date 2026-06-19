<script setup lang="ts">
import type { Actor } from '~/types/movie';

defineOptions({ name: "MovieCast" });

const props = defineProps<{ cast: Actor[], movieId: string }>();

const fullImgSrc = ((img: string) => {
  return `/img/pelicula/${props.movieId}/${props.movieId}_${img}`
})

</script>

<template>
  <section class="container mx-auto">
    <div class="grid grid-cols-12 gap-4 my-12">
      <div class="col-span-12">
        <SectionTitle>Elenco</SectionTitle>
      </div>
      <div class="col-span-12 gap-4">
        <div class="flex gap-4">
          <div v-for="actor in props.cast" :key="actor.name">
            <img :src="fullImgSrc(actor.img)" class="size-40" />
            <CastText>{{ actor.name }}</CastText>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>