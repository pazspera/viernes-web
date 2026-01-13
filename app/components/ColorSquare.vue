<script setup lang="ts">
defineProps<{
  name: string
  color: string
}>()
</script>

<template>
  <div class="flex flex-col items-center">
    <div
      class="h-24 w-24 border-stone-500 border-solid border-[1px]"
      :style="{ backgroundColor: color }"
    />
    <span class="text-sm">{{ name }}</span>
  </div>
</template>

<style scoped></style>
