<script setup lang="ts">
import type { HistoryYear } from '~/types/history';

defineOptions({ name: "YearCard" });

const props = defineProps<{ historyYear: HistoryYear }>();


</script>

<template>
  <div class="col-span-6 md:col-span-4">
    <div v-if="props.historyYear.year">
      <CardHeading>{{ props.historyYear.year }}</CardHeading>
    </div>
    <NuxtLink :to="props.historyYear.to" target="_blank">
      <img :src="props.historyYear.src" :alt="props.historyYear.alt" />
    </NuxtLink>
  </div>
</template>