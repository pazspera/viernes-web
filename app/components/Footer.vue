<script setup lang="ts"></script>

<template>
  <footer class="py-4 md:py-6 text-white bg-black">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-9 flex items-center">
          <BodyText>Sitio desarrollado con
            <FontAwesomeIcon :icon="['fa', 'heart']" size="lg" class="text-primary-500" /> por&nbsp;<ExternalLink
              href="https://github.com/pazspera" target="_blank" rel="noreferrer">Paz&nbsp;Spera</ExternalLink>
          </BodyText>
        </div>
        <div class="col-span-3 flex justify-end items-center">
          <ExternalLink href="https://discord.gg/sHEkMhF" target="_blank" rel="noreferrer">
            <FontAwesomeIcon :icon="['fab', 'discord']" size="lg" class="hover:text-primary-500 transition delay-150" />
          </ExternalLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>