<script setup lang="ts">
defineOptions({ name: "MovieTrailer" });

const props = defineProps<{ trailer: string, trailerLink: string }>();

// for the trailer video, initially show an image
// if it's clicked, load the iframe
const showIframe = ref(false);
const iframeLoaded = ref(false);

// extracts youtube video id
const videoId = computed(() => {
  const match = props.trailer.match(/embed\/([^"?]+)/);
  return match ? match[1] : null;
});

// adds autoplay to iframe
const iframeSrc = computed(() =>
  `https://www.youtube.com/embed/${videoId.value}?autoplay=1`
);

const breakpoints = useBreakpoints({
  mobile: 0,
  table: 768,
  desktop: 1024,
});

const isDesktop = breakpoints.greaterOrEqual("desktop");
</script>

<template>

  <section class="container mx-auto px-4">
    <div class="grid grid-cols-12 gap-4 my-12">
      <div class="col-span-12">
        <SectionTitle>Trailer</SectionTitle>
      </div>
      <ClientOnly>
        <div v-if="!isDesktop" class="col-span-12">
          <ButtonPrimary :href="trailerLink" :target="'_blank'" :rel="'noopener noreferrer'">Ver trailer</ButtonPrimary>
        </div>

        <div v-else class="col-span-12">
          <div class="aspect-video w-full max-w-3xl relative cursor-pointer">

            <!-- youtube thumbnail with play button -->
            <template v-if="!iframeLoaded">
              <img :src="`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`"
                class="w-full h-full object-cover absolute inset-0" alt="Ver trailer" />
              <div class="absolute inset-0 flex items-center justify-center cursor-pointer" @click="showIframe = true">
                <div class="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl">
                  ▶
                </div>
              </div>
            </template>

            <!-- iframe -->
            <iframe v-if="showIframe" :src="iframeSrc" class="w-full h-full [&_iframe]:w-full [&_iframe]:h-full"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen @load="iframeLoaded = true" />
          </div>
        </div>
      </ClientOnly>
    </div>
  </section>
</template>