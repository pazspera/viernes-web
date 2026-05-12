<script setup lang="ts"></script>

<template>
  <footer class="py-4 text-white bg-black">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-9 flex items-center">
          <p>Sitio desarrollado con
            <FontAwesomeIcon :icon="['fa', 'heart']" size="lg" class="text-primary-500" /> por <a
              href="https://github.com/pazspera" target="_blank" rel="noreferrer">Paz Spera</a>
          </p>
        </div>
        <div class="col-span-3 flex justify-end items-center">
          <a href="https://discord.gg/sHEkMhF" target="_blank" rel="noreferrer">
            <FontAwesomeIcon :icon="['fab', 'discord']" size="lg"
              class="hover:text-primary-500 focus:text-primary-500 transition delay-150" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
