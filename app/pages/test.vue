<script setup lang="ts">

const { data: testMovies } = await useAsyncData("test",
  () => queryCollection("test").all()
)
</script>

<template>
  <h1>Página prueba</h1>
  <pre>{{ testMovies }}</pre>
  <!-- <p v-for="movie in test" :key="movie.id">
    {{ movie.name }} ({{ movie.year }})
  </p> -->
</template>