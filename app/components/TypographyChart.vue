<script setup lang="ts">
import SectionTitle from './SectionTitle.vue';

const components = [
  /* {
    component: "MainTitle",
    tag: "h1",
    description: "Título de las páginas de random, películas individuales e historial",
    preview: h1
  }, */
  {
    component: "SectionTitle",
    tag: "h2",
    description: "Subtítulo dentro de una página. En películas, va en sinopsis, elenco, trailer. En historial, va en cada mes",
    preview: SectionTitle
  },
]
</script>

<template>
  <table class="table-auto w-full">
    <caption>
      Chart de componentes de tipografía
    </caption>
    <thead class="table-header-group">
      <tr class="table-row">
        <th class="table-cell" scope="col">Componente</th>
        <th class="table-cell" scope="col">Etiqueta</th>
        <th class="table-cell" scope="col">Preview</th>
        <th class="table-cell" scope="col">Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-row" v-for="component in components" :key="component.component">
        <td class="table-cell" scope="row">{{ component.component }}</td>
        <td class="table-cell">{{ component.tag }}</td>
        <td class="table-cell">
          <component :is="component.preview">{{ component.component }}</component>
        </td>
        <td class="table-cell">{{ component.description }}</td>
      </tr>
    </tbody>
  </table>
</template>