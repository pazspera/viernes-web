<script setup lang="ts">

const { data: test } = await useAsyncData("test",
  () => queryCollection("test").first()
)

const { data: random } = await useAsyncData("random",
  () => queryCollection("random").first()
);

</script>

<template>
  <h1>Página prueba</h1>
  <p v-for="movie in test?.movies ?? []" :key="movie.id">
    {{ movie.name }} ({{ movie.year }})
  </p>
  <h2>Test random</h2>
  <p v-for="movie in random?.movies ?? []" :key="movie.id">
    {{ movie.name }}
  </p>
</template>