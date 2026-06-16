<script setup lang="ts">
defineOptions({ name: "AppHeader" });

const isMobileMenuOpen = ref(false);
const route = useRoute();

const navLinks = [
  { to: "/historial", label: "Historial" },
  { to: "/random", label: "Random" },
];

watch(() => route.path, () => {
  isMobileMenuOpen.value = false;
});
</script>

<template>
  <header class="sticky top-0 z-50 bg-black">
    <nav class="container mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <Logo to="/" class="text-white text-lg md:text-xl xl:text-2xl">
          VieRnes
        </Logo>

        <ul class="hidden lg:flex lg:gap-6 lg:ml-auto">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink :to="link.to"
              class="uppercase font-bold tracking-[1.3px] text-white hover:text-primary-500 transition-colors duration-500"
              :class="{ 'text-primary-500': route.path === link.to }">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <button class="lg:hidden text-white p-2" @click="isMobileMenuOpen = !isMobileMenuOpen"
          :aria-expanded="isMobileMenuOpen" aria-label="Toggle navigation">
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <Transition name="menu">
        <div v-show="isMobileMenuOpen" class="lg:hidden overflow-hidden">
          <ul class="flex flex-col gap-4 pb-4">
            <li v-for="link in navLinks" :key="link.to">
              <NuxtLink :to="link.to"
                class="uppercase font-bold tracking-[1.3px] text-white hover:text-primary-500 transition-colors duration-500 block"
                :class="{ 'text-primary-500': route.path === link.to }" @click="isMobileMenuOpen = false">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  max-height: 200px;
  opacity: 1;
}

.menu-enter-from,
.menu-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
