<script setup lang="ts">
import { themeColors } from '~/constants/colors'

const colorPalette = [
  {
    name: 'Primary',
    class: 'bg-primary',
    color: themeColors.primary.DEFAULT,
  },
  {
    name: 'Secondary',
    class: 'bg-secondary',
    color: themeColors.secondary,
  },
  {
    name: 'Accent',
    class: 'bg-accent',
    color: themeColors.accent,
  },
  {
    name: 'Background',
    class: 'bg-background',
    color: themeColors.background,
  },
  {
    name: 'Surface',
    class: 'bg-surface',
    color: themeColors.surface,
  },
]
</script>

<template>
  <section>
    <h2>Color Palette</h2>
    <div class="flex gap-4">
      <ColorSquare
        v-for="color in colorPalette"
        :key="color.name"
        :name="color.name"
        :color="color.color"
      />
    </div>
  </section>
</template>
