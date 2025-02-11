<template>
  <div>
    <NuxtLayout>
      <header>
        <ul>
         <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li> 
          <li>
            <NuxtLink to="/historial">Historial</NuxtLink>
           <ul>
            <li>
              <NuxtLink to="/historial/pelis-2020">2020</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/historial/pelis-2021">2021</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/historial/pelis-2022">2022</NuxtLink>
            </li>
           </ul> 
          </li> 
          <li>
            <NuxtLink to="/random">Random</NuxtLink>
          </li> 
        </ul>
      </header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';
import { onMounted } from 'vue';

onMounted(() => {
  import('bootstrap/dist/js/bootstrap.bundle.min.js');
});
</script>