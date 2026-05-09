# Plan de migración: Original Site → Nuxt 4 + Nuxt Content + Tailwind

## Stack objetivo

| Herramienta | Propósito |
|---|---|
| Nuxt 4 | File-based routing, SSR/SSG |
| @nuxt/content | Fuente de datos desde `content/` |
| Tailwind CSS | Estilos (ya configurado en el proyecto) |
| Vue 3 | Componentes, reactividad |

## Estructura de datos final

```
content/
  info_movies.json      # ÚNICA fuente de datos de películas
  random_movies.json    # Posters + links IMDB (propósito distinto, se mantiene separado)
```

- Sin duplicación de datos
- Sin archivos individuales por película (ni .md, ni .html, ni .json)
- `movies_2020.json`, `movies_2021.json`, `movies_2022.json` se eliminan — la agrupación por año/mes se deriva de `info_movies.json` por código

## Mapeo de rutas

| Ruta Nuxt | Página original | Descripción |
|---|---|---|
| `/` | `index.html` | Home: hero con última película + últimas 6 |
| `/peliculas/[slug]` | `pages/peliculas/*.html` | Detalle de película (ruta dinámica) |
| `/historial` | `pages/historial_peliculas.html` | Selector de años |
| `/[year]` | `pages/2020_peliculas.html` | Películas por año, agrupadas por mes |
| `/random` | `pages/seleccion_peliculas.html` | Selector aleatorio de posters |
| `/picks/[person]` | `pages/picks_paz.html` (+5 más) | Picks por persona |

## Consideraciones clave de implementación

| Concepto original | Equivalente en Nuxt |
|---|---|
| `fetch('data/info_movies.json')` | `queryContent('/info_movies').findOne()` envuelto en `useAsyncData` |
| `document.getElementById()` + template strings | Componentes Vue + `v-for`, `v-if`, `computed` |
| `addEventListener('DOMContentLoaded')` | `await useAsyncData` (data ready antes de render) |
| 3 headers distintos por profundidad de carpeta | 1 layout único con `<NuxtLink>` (rutas relativas automáticas) |
| CSS hero bg por ID (`#midsommar { background-image }`) | `<div :style="{ backgroundImage }">` dinámico |
| Trailer responsive con `matchMedia` | Componente Vue con media query o `useMediaQuery` |
| `array.findIndex()` para navegación prev/next | Misma lógica, con `computed` sobre el array en memoria |

## Lo que NO hay que hacer

- ❌ No crear archivos individuales por película
- ❌ No duplicar datos (eliminar `movies_202X.json`)
- ❌ No tocar `random_movies.json` (queda separado)
- ❌ No instalar Bootstrap — solo Tailwind
- ❌ No crear un backend ni API endpoints

---

## Etapas

### Etapa 0 — Setup

- Instalar `@nuxt/content`
- Copiar `info_movies.json` y `random_movies.json` a `content/`
- Copiar `img/` a `public/img/` preservando la estructura de subdirectorios
- Actualizar las rutas de imágenes en el JSON: pasar de rutas relativas con `../img/...` a rutas absolutas `/img/...`
- Verificar que `queryContent()` puede leer los archivos

### Etapa 1 — Layout y estilos base

- Crear `layouts/default.vue`:
  - **Header**: navbar con brand "VieRnes" (Major Mono Display), links a Historial y Opciones Aleatorias.
    - Recrear el diseño original (Bootstrap navbar → Tailwind: flexbox, padding, responsive collapse con menú hamburguesa)
  - **Footer**: créditos + icono Discord (FontAwesome o SVG inline)
- Migrar estilos globales del original a `assets/css/main.css` + Tailwind utilities:
  - Paleta de colores: `#131316` (negro), `#FFFFFC` (blanco), `#F5F5F5` (fondo), `#E3170A` (primary)
  - Tipografía: Karla (texto), Cardo (títulos), Major Mono Display (logo)
  - Botones: `.btn__primary` original → clases Tailwind personalizadas
  - Cards, hero grid, posters — todo a Tailwind

### Etapa 2 — Página principal (`pages/index.vue`)

```vue
<script setup>
const { data: movies } = await useAsyncData('movies',
  () => queryContent('/info_movies').findOne()
)

const sortedByDate = computed(() =>
  [...movies.value].sort((a, b) => new Date(b.date_seen) - new Date(a.date_seen))
)

const lastMovie = computed(() => sortedByDate.value[0])
const last6Movies = computed(() => sortedByDate.value.slice(0, 6))
</script>
```

- **Hero section**: mostrar la última película vista con fondo `hero_{id}.jpg` y cartel con "El viernes pasado vimos: {nombre} ({año})"
- **Grilla de cards**: las últimas 6 películas con imagen (`img_card`), nombre, año. Cada card linkea a `/peliculas/{link_page sin .html}`

### Etapa 3 — Detalle de película (`pages/peliculas/[slug].vue`)

- `useRoute().params.slug` → buscar en el array: `movies.find(m => m.link_page === slug + '.html')`
- **Hero**: imagen de fondo `hero_{id}.jpg`, título, año, director, duración, pick con link a `/picks/{pick_category}`
- **Sinopsis**: texto con formato del original
- **Elenco**: fotos del cast con nombre
- **Trailer**: iframe embebido en desktop, botón link en mobile (como el `responsiveContent()` original)
- **Galería de imágenes** (`img_row`): `always_show` siempre visible, `hidden_first` solo en xxl
- **Navegación anterior/siguiente**: mismo approach que el original:
  - Array ordenado por `date_seen` descendente
  - `findIndex()` para ubicar la película actual
  - `array[idx+1]` = anterior, `array[idx-1]` = siguiente
  - Manejar bordes (primera/última película sin botón correspondiente)
- Disclaimer especial para `wayward_cloud`

### Etapa 4 — Historial (`pages/historial.vue`) + páginas por año (`pages/[year].vue`)

`historial.vue`:
- Cards verticales con año e imagen representativa
- Los años se extraen dinámicamente: `[...new Set(movies.value.map(m => m.year))].sort()`

`[year].vue`:
- Ruta dinámica que recibe el año (2020, 2021, 2022, ...)
- Filtra: `movies.filter(m => m.year === Number(route.params.year))`
- Agrupa por mes usando `Intl.DateTimeFormat('es-AR', { month: 'long' })` para generar los nombres en español (enero, febrero, etc.)
- Renderiza sección por mes con cards de películas

### Etapa 5 — Selector aleatorio (`pages/random.vue`)

- `useAsyncData('posters', () => queryContent('/random_movies').findOne())`
- Mostrar todas los posters ordenados alfabéticamente (grilla responsive)
- Botón "Elegir tres opciones":
  ```js
  function pickRandom() {
    const shuffled = [...posters.value].sort(() => Math.random() - 0.5)
    selectedPosters.value = shuffled.slice(0, 3)
    showRandom.value = true
  }
  ```
- Botón "Ver todas las opciones": toggle entre vista aleatoria y vista completa
- Cada poster linkea a IMDB (target blank, rel noreferrer)

### Etapa 6 — Picks por persona (`pages/picks/[person].vue`)

- Ruta dinámica mapea: `paz`, `pollo`, `loco`, `geor`, `democracia`, `piden_pista`
- Hero con imagen de fondo específica por persona
- Filtrar `info_movies.json` por `pick_category` (case-insensitive, como el regex original)
- Grilla de cards con las películas elegidas por esa persona

### Etapa 7 — Pulido y build

- Verificar que las 6 rutas funcionen:
  - `/`
  - `/peliculas/[slug]`
  - `/historial`
  - `/[year]`
  - `/random`
  - `/picks/[person]`
- Probar navegación prev/next en detalle de película
- Verificar responsive: mobile / tablet / desktop
- Limpiar `app/` de páginas placeholder viejas
- Build estático: `npx nuxi generate` → `dist/`
