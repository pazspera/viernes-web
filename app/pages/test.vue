<script setup lang="ts">

const { data: test } = await useAsyncData("test",
  () => queryCollection("test").first()
)
</script>

<template>
  <h1>Página prueba</h1>
  <p v-for="movie in test?.movies ?? []" :key="movie.id">
    {{ movie.name }} ({{ movie.year }})
  </p>
</template>