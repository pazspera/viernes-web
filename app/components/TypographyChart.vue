<script setup lang="ts">
import BodyText from './BodyText.vue';
import CardHeading from './CardHeading.vue';
import ExternalLink from './ExternalLink.vue';
import MainTitle from './MainTitle.vue';
import SectionTitle from './SectionTitle.vue';
import NavigationLink from './NavigationLink.vue';

const components = [
  {
    component: "MainTitle",
    tag: "h1",
    description: "Título de las páginas de random, películas individuales e historial",
    preview: MainTitle
  },
  {
    component: "SectionTitle",
    tag: "h2",
    description: "Subtítulo dentro de una página. En películas, va en sinopsis, elenco, trailer. En historial, va en cada mes",
    preview: SectionTitle
  },
  {
    component: "CardHeading",
    tag: "h3",
    description: "Subtítulo solo en cards de películas",
    preview: CardHeading
  },
  {
    component: "BodyText",
    tag: "p",
    description: "Texto común",
    preview: BodyText
  },
  {
    component: "NavigationLink",
    tag: "NuxtLink",
    description: "Links para Navigation",
    preview: NavigationLink,
  },
  {
    component: "ExternalLink",
    tag: "a",
    description: "Link del footer",
    preview: ExternalLink,
    props: { href: "#" }
  },
]
</script>

<template>
  <table class="table-auto w-full">
    <div class="container mx-auto px-4">
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
        <tr class="table-row py-4" v-for="component in components" :key="component.component">
          <td class="table-cell" scope="row">{{ component.component }}</td>
          <td class="table-cell">{{ component.tag }}</td>
          <td class="table-cell">
            <component :is="component.preview" v-bind="component.props ?? {}">{{ component.component }}</component>
          </td>
          <td class="table-cell">{{ component.description }}</td>
        </tr>
      </tbody>
    </div>
  </table>
</template>