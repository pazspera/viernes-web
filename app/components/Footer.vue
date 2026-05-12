<script setup lang="ts"></script>

<template>
  <footer class="py-4">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-9">
          <p>Sitio desarrollado con
            <FontAwesomeIcon :icon="['fa', 'heart']" size="2xl" /> por <a href="https://github.com/pazspera">Paz
              Spera</a>.
          </p>
        </div>
        <div class="col-span-3">
          <FontAwesomeIcon :icon="['fab', 'discord']" size="lg" />
        </div>
      </div>
    </div>
  </footer>
</template>
