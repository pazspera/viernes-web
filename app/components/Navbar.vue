<script>
/*
- crear links para versión mobile y desktop
- crear contenedor para links en mobile
*/
</script>

<template>
  <header class="bg-black">
    <nav class="container mx-auto py-3 px-3 flex flex-col md:flex-row justify-between items-center">
      <Logo to="/">
        VieRnes
      </Logo>

      <!-- desktop links -->
      <div class="hidden md:flex">
        <NavLink to="/historial">
          Historial
        </NavLink>
        <NavLink to="/random" class="ps-3">Random</NavLink>
      </div>

      <!-- drawer mobile -->
      <div class="flex w-full bg-black">
        <div class="flex flex-col p-4">
          <NavLink to="/historial">
            Historial
          </NavLink>
          <NavLink to="/random" class="ps-3">Random</NavLink>
        </div>
      </div>
    </nav>
  </header>
</template>