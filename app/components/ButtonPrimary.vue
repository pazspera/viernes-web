<script setup lang="ts">
import type { NuxtLinkProps } from '#app';
const props = defineProps<NuxtLinkProps>();

defineOptions({ name: "ButtonPrimary" });
</script>

<template>
  <NuxtLink v-bind="props"
    class="button-primary bg-white text-black hover:bg-black hover:text-white border-black border">
    <ButtonLabel>
      <slot />
    </ButtonLabel>
  </NuxtLink>
</template>

<style lang="css" scoped>
.button-primary {
  transition: all 0.25s ease-in-out;
}

.button-primary:hover {
  transition: all 0.25s ease-in-out;
}

@media (max-width: 600px) {
  .button-primary {
    padding: 8px 16px;
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .button-primary {
    padding: 10px 20px;
  }
}

@media (min-width: 961px) and (max-width: 1280px) {
  .button-primary {
    padding: 12px 24px;
  }
}

@media (min-width: 1281px) and (max-width: 1920px) {
  .button-primary {
    padding: 14px 28px;
  }
}

@media (min-width: 1921px) {
  .button-primary {
    padding: 16px 32px;
  }
}
</style>