<template>
  <header class="bg-black">
    <nav class="container mx-auto py-3 flex justify-between">
      <NuxtLink to="/"
        class="font-logo text-white hover:text-primary-500 transition-all hover:transition-all ease-in-out duration-100">
        VieRnes
      </NuxtLink>
      <div>
        <NavLink to="/historial">
          Historial
        </NavLink>
        <NavLink to="/random" class="ps-3">Random</NavLink>
      </div>
    </nav>
  </header>
</template>