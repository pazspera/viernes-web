<script setup lang="ts">

const { data: test } = await useAsyncData("test",
  () => queryCollection("test").first()
)

const { data: random } = await useAsyncData("random",
  () => queryCollection("random").first()
);

const { data: movies } = await useAsyncData("movies",
  () => queryCollection("movies").first()
)

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
  <h2>Pelis de viernes</h2>
  <p v-for="movie in movies?.movies ?? []" :key="movie.id">
    {{ movie.name }} ({{ movie.year }}) - Dirección: {{ movie.director }}
  </p>
</template>