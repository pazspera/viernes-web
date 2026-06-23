import { onMounted, unref } from "vue";

export function useDocumentTitle(title: string | Ref<string>) {
  onMounted(() => {
    document.title = unref(title) ?? '';
  })
}