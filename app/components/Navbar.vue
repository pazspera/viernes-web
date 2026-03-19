<script setup lang="ts">
/*
- crear links para versión mobile y desktop
- crear contenedor para links en mobile
*/

const isOpen = ref(false);

const toggleDrawer = () => {
  isOpen.value = !isOpen.value;
  console.log(isOpen.value);
}
</script>

<template>
  <header class="bg-black">
    <nav class="container mx-auto py-3 px-3 flex justify-between items-center">
      <Logo to="/">
        VieRnes
      </Logo>

      <button class="hamburger hamburger--squeeze" type="button" :class="{ 'is-active': isOpen }" @click="toggleDrawer">
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </button>

      <!-- desktop links -->
      <div class="hidden md:flex">
        <NavLink to="/historial">
          Historial
        </NavLink>
        <NavLink to="/random" class="ps-3">Random</NavLink>
      </div>
    </nav>
  </header>

  <!-- drawer mobile -->
  <div v-show="isOpen" class="flex w-full bg-black p-3">
    <div class="flex flex-col ">
      <NavLink to="/historial">
        Historial
      </NavLink>
      <NavLink to="/random" class="ps-3">Random</NavLink>
    </div>
  </div>
</template>