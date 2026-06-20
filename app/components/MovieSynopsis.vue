<script setup lang="ts">
defineOptions({ name: "MovieSynopsis" });

const props = defineProps<{ sinopsis: string }>();
</script>

<template>
  <section class="container mx-auto">
    <div class="grid grid-cols-12 gap-4 my-12">
      <div class="col-span-12">
        <SectionTitle>Sinopsis</SectionTitle>
      </div>
      <div class="col-span-12 md:col-span-10 lg:col-span-8 xl:col-span-7 2xl:col-span-6">
        <BodyText class="synopsis-text">{{ sinopsis }}</BodyText>
      </div>
    </div>
  </section>
</template>

<style scoped>
.synopsis-text {
  line-height: 2;
}
</style>