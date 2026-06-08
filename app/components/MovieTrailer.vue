<script setup lang="ts">
defineOptions({ name: "MovieTrailer" });

const props = defineProps<{ trailer: string, trailerLink: string }>();

const breakpoints = useBreakpoints({
  mobile: 0,
  table: 768,
  desktop: 1024,
});

const isDesktop = breakpoints.greaterOrEqual("desktop");
</script>

<template>

  <section class="container mx-auto px-4">
    <p v-if="!isDesktop">mobile y tablet</p>
    <p v-else>Desktop</p>
    <p>{{ trailer }}</p>
    <div class="grid grid-cols-12 gap-4 my-12">
      <div class="col-span-12">
        <SectionTitle>Trailer</SectionTitle>
      </div>
      <ClientOnly>
        <div v-if="!isDesktop" class="col-span-12">
          <ButtonPrimary :href="trailerLink" :target="'_blank'" :rel="'noopener noreferrer'">Ver trailer</ButtonPrimary>
        </div>
        <div v-else class="col-span-12 aspect-video w-full max-w-3xl [&_iframe]:w-full [&_iframe]:h-full"
          v-html="trailer" />
      </ClientOnly>
    </div>
  </section>
</template>