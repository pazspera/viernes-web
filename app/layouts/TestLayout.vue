<script setup lang="ts">
import ColorPalette from '../components/ColorPalette.vue'
</script>

<template>
  <div class="container mx-auto px-4 my-4">
    <NuxtRouteAnnouncer />
    <h1 class="text-pink-700">
      Inicio Viernes Nuxt
    </h1>
    <p class="">
      Soy un párrafo
    </p>
    <p class="font-mono">
      Y yo un logo
    </p>
    <ColorPalette />
    <slot />
  </div>
</template>
