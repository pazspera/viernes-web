<script setup lang="ts">
import { useDocumentTitle } from "../composables/useDocumentTitle";
import { DOCUMENT_TITLE } from "~/constants/ui";

useDocumentTitle(DOCUMENT_TITLE.HISTORIAL);
definePageMeta({ layout: false })
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>