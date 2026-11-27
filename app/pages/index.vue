<script setup lang="ts">
import { DOCUMENT_TITLE } from '~/constants/ui';
import BodyText from '~/components/BodyText.vue';

useDocumentTitle(DOCUMENT_TITLE.HOME)

</script>

<template>
  <main>
    <IndexHero />
    <div class="container mx-auto px-4 pt-4 pb-24">
      <section class="my-10 grid grid-cols-12 gap-4">
        <div class="col-span-12 lg:col-span-7">
          <BodyText class="pb-4">
            <strong>Es viernes y hay película en La casa del Craizy.</strong> Abrimos Discord y entramos a la salita de
            cine. Allí nos esperan tres opciones, tres potenciales viernes y una votación. Si bien esto no es y nunca
            fue
            una democracia, el consenso popular decidirá cuál va a ser la comedia de esta semana.
          </BodyText>
          <BodyText class="pb-4">
            Lo que comenzó como juntadas virtuales de pandemia ahora ya tiene una existencia propia. Películas que se
            sumergen en el inconsciente, un laberinto de espejos en plano secuencia. Historias que sacuden el cerebro y
            sí, tal vez ocasionalmente lo dañen un poco pero ese es el encanto de las comedias de los viernes.
          </BodyText>
          <BodyText class="pb-4">
            Bienvenides a los Viernes, <strong>nuestra pequeña distopía cinematográfica de pandemia.</strong> Les
            esperamos en la salita, en cualquier momento el Craizy pasa el primer trailer y ya podemos empezar.
          </BodyText>
        </div>
      </section>
    </div>
  </main>
</template>
