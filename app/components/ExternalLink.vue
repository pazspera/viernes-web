<script setup lang="ts">
import { computed } from 'vue';
import { uiClasses } from '~/constants/ui';

defineOptions({ name: "ExternalLink" });

const props = defineProps<{ href: string; target?: string }>();

const target = computed(() => props.target ?? '_blank');
const rel = computed(() => (target.value === '_blank' ? 'noopener noreferrer' : 'noopener'));
</script>

<template>
  <a :href="href" class="external-link link-line hover:text-primary-500" :class="uiClasses.links.focus" :target="target"
    :rel="rel">
    <slot />
  </a>
</template>

<style scoped>
.external-link {
  font-family: var(--font-text);
  font-weight: 400;
  line-height: 1.6;
}

.link-line {
  padding-bottom: 0.35rem;
  border-bottom-style: solid;
  border-bottom-width: 2.5px;
  width: fit-content;
  transition: all 0.25s ease-in-out;
  border-color: currentColor;
}

.link-line:hover {
  transition: all 0.25s ease-in-out;
  padding-bottom: 0.15rem;
  border-color: #E3170A;
}

@media (max-width: 600px) {
  .external-link {
    font-size: var(--font-size-sm);
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .external-link {
    font-size: var(--font-size-md);
  }
}

@media (min-width: 961px) and (max-width: 1280px) {
  .external-link {
    font-size: var(--font-size-md);
  }
}

@media (min-width: 1281px) and (max-width: 1920px) {
  .external-link {
    font-size: var(--font-size-lg);
  }
}

@media (min-width: 1921px) {
  .external-link {
    font-size: var(--font-size-lg);
  }
}
</style>