# Estructura de datos con Nuxt Content v3

## Principios

- Un solo archivo JSON por colección, sin dividir en archivos individuales.
- Cada JSON usa estructura `{ movies: [...] }` (objeto con propiedad que contiene el array).
- `type: 'data'` — NO `type: 'page'`. Esto evita que Nuxt Content intente crear rutas individuales por item y permite trabajar con el bloque completo de datos.
- Schema Zod debe reflejar exactamente la estructura del JSON: `z.object({ movies: z.array(z.object({...})) })`.

## Ejemplo concreto (colección `test`)

### `content/test.json`
```json
{
  "movies": [
    { "id": "poltergeist", "name": "Poltergeist", "year": 1982 },
    { "id": "shining", "name": "The Shining", "year": 1980 }
  ]
}
```

### `content.config.ts`
```ts
test: defineCollection({
  type: 'data',
  source: 'test.json',
  schema: z.object({
    movies: z.array(
      z.object({
        name: z.string(),
        id: z.string(),
        year: z.number(),
      })
    )
  })
}),
```

### En una página (ej. `test.vue`)
```ts
const { data: test } = await useAsyncData("test",
  () => queryCollection("test").first()
)
// test.value es { movies: [...] }
// test.value.movies es el array de películas
```

```vue
<p v-for="movie in test?.movies ?? []" :key="movie.id">
  {{ movie.name }} ({{ movie.year }})
</p>
```

## Reglas que NO deben repetirse

| Error anterior | Causa | Solución |
|---|---|---|
| `z.array(...)` como schema directo con `type: 'page'` | Nuxt Content no soporta arrays raíz en `page`. Lo envuelve en `{ body: [...] }` silenciosamente. | Usar `z.object({ movies: z.array(...) })` con `type: 'data'` |
| `queryCollection().all()` con `type: 'data'` y `{ movies: [...] }` | Devuelve `[{ movies: [...] }]` (array de un elemento). | Usar `.first()` para obtener el objeto directamente |
| `v-for="movie in test"` cuando test es `{ movies: [...] }` | Itera sobre las propiedades del objeto (solo `"movies"`), no sobre el array. | Usar `v-for="movie in test?.movies ?? []"` |
| `type: 'page'` para datos que no necesitan ruta propia | Crea documentos individuales y espera un schema por item. | Usar `type: 'data'` para colecciones de datos |

## Consultas

- Para obtener todo el contenido de una colección: `.first()` (devuelve el objeto completo).
- Para filtrar dentro del array: se hace en JS client-side (`computed`, `filter`, etc.), no en la query de Nuxt Content (a menos que se cambie a `type: 'page'` con items individuales, lo cual está descartado).
