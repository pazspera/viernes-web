<script setup lang="ts">
import type { Actor } from '~/types/movie';

defineOptions({ name: "MovieCast" });

const props = defineProps<{ cast: Actor[], movieId: string }>();

const fullImgSrc = ((img: string) => {
  return `/img/pelicula/${props.movieId}/${props.movieId}_${img}`
})

</script>

<template>
  <section class="container mx-auto px-4">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-12">
        <SectionTitle>Elenco</SectionTitle>
      </div>
      <figure class="col-span-6 md:col-span-4" v-for="actor in props.cast" :key="actor.name">
        <img :src="fullImgSrc(actor.img)" />
        <figcaption>
          <BodyText>{{ actor.name }}</BodyText>
        </figcaption>
      </figure>
    </div>
  </section>
</template>