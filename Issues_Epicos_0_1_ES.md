# Issues para Epicos 0 y 1 (ES)

Este documento contiene títulos, descripciones y criterios de aceptación listos para copiar/pegar como issues en GitHub. Incluye subtareas recomendadas y notas de prueba.

---

## Épico 0: Fundaciones con CI/CD desde el Día 0
Objetivo: Arrancar el proyecto con un entorno moderno, estricto y con CI/CD y pruebas desde el primer commit.

### Issue (Epic): Fundaciones – Nuxt 4 + TS + Tailwind + Vitest + CI/CD
- Rama objetivo del épico: `epic/foundations-cicd`
- Convención de ramas (en inglés):
  - Feature: `feat/foundations-cicd/<slug-tarea>`
  - Chore: `chore/foundations-cicd/<slug-tarea>`
  - Fix: `fix/foundations-cicd/<slug-tarea>`
- Descripción:
  - Como desarrollador/a, quiero iniciar el proyecto con Nuxt 4, TypeScript estricto, Tailwind y Vitest, y contar con una pipeline de CI que ejecute lint, typecheck, test (con cobertura) y build en cada PR.
- Criterios de aceptación (DoD):
  - `npm run dev` sirve la app base.
  - `npm run test` ejecuta pruebas y genera cobertura.
  - CI en PR y main pasa lint, typecheck, test y build.
  - Template de PR activo y protecciones de rama configuradas.
- Notas:
  - Este épico incluye las issues hijas listadas abajo.

#### Tarea 1: Inicializar proyecto Nuxt 4 + TypeScript estricto + Vite
- Rama sugerida: `feat/foundations-cicd/nuxt-init`
- PR hacia: `epic/foundations-cicd`
- Descripción:
  - Crear el proyecto con `npx nuxi init`, configurar TS estricto en `tsconfig.json`, y agregar scripts básicos.
- Criterios de aceptación:
  - Estructura generada con `nuxt.config.ts`, `tsconfig.json` (strict) y `app.vue` mínimo.
  - `npm run dev` funciona.
  - `tsc --noEmit` pasa localmente y en CI.
- Notas de prueba:
  - Añadir un job de typecheck en CI.

#### Tarea 2: Configurar Vitest + Vue Test Utils (prueba de ejemplo + cobertura)
- Rama sugerida: `feat/foundations-cicd/vitest-setup`
- PR hacia: `epic/foundations-cicd`
- Descripción:
  - Instalar y configurar Vitest y Vue Test Utils; crear un componente de ejemplo y su prueba.
- Criterios de aceptación:
  - `npm run test` pasa y genera reporte de cobertura.
  - Componentes se montan correctamente en pruebas.
- Notas de prueba:
  - Asegurar collectCoverage y threshold inicial bajo (p. ej., líneas 50%).

#### Tarea 3: Pipeline de GitHub Actions (CI)
- Rama sugerida: `chore/foundations-cicd/ci-workflow`
- PR hacia: `epic/foundations-cicd`
- Descripción:
  - Crear `.github/workflows/ci.yml` con jobs de: install/cache, lint, typecheck, test (con cobertura) y build; ejecutar en PR y push a main.
- Criterios de aceptación:
  - CI se ejecuta automáticamente en PR y en main.
  - Artefactos de cobertura subidos (opcional) o visibles en logs.
- Notas de prueba:
  - Forzar una falla de prueba para validar que CI bloquea el merge; luego corregir.

#### Tarea 4: ESLint + Prettier (+ Husky + lint-staged)
- Rama sugerida: `chore/foundations-cicd/eslint-prettier`
- PR hacia: `epic/foundations-cicd`
- Descripción:
  - Configurar ESLint para Vue/TS, Prettier y ganchos de Husky `pre-commit` con `lint-staged`.
- Criterios de aceptación:
  - `npm run lint` pasa localmente y en CI.
  - Commits formatean/lintean archivos staged.
- Notas de prueba:
  - Introducir una infracción de lint para verificar el fallo del job; luego corregir.

#### Tarea 5: Tailwind + PostCSS
- Rama sugerida: `feat/foundations-cicd/tailwind-setup`
- PR hacia: `epic/foundations-cicd`
- Descripción:
  - Instalar y configurar Tailwind y PostCSS; definir paleta y tipografías base; verificar utilidades en un componente.
- Criterios de aceptación:
  - Tailwind se aplica correctamente (clase visible en DOM o snapshot).
  - Purge/content paths incluyen `pages`, `components`, `layouts`.
- Notas de prueba:
  - Agregar una prueba que aserte la presencia de una clase Tailwind renderizada.

#### Tarea 6: Template de PR + Protecciones de rama
- Rama sugerida: `chore/foundations-cicd/pr-template-branch-protection`
- PR hacia: `epic/foundations-cicd`
- Descripción:
  - Crear `.github/pull_request_template.md` y activar branch protection en `main` con checks requeridos.
- Criterios de aceptación:
  - El template aparece al abrir PR y pide: objetivo, screenshots, pruebas, AC.
  - `main` requiere CI verde para merge.
- Notas de prueba:
  - Abrir un PR de prueba; verificar checks requeridos.

<!-- Tarea de Kanban movida fuera del Épico 0: se gestionará ahora previo al inicio del trabajo para habilitar el tablero desde el día 0. -->
- Descripción:
  - Crear proyecto Kanban con columnas Backlog, Ready, In Progress, Review, Done; automatización por estado/labels.
- Criterios de aceptación:
  - Epico y tareas agregadas al tablero; movimiento automático verificado.
- Notas de prueba:
  - Cambiar estado/label y verificar transición de tarjeta.

#### Tarea 8: Documentación base (CONTRIBUTING/DEVELOPMENT)
- Descripción:
  - Añadir `CONTRIBUTING.md` y `DEVELOPMENT.md` con setup local, scripts, convenciones de código y comportamiento de CI.
- Criterios de aceptación:
  - Un contribuidor nuevo puede levantar el proyecto y ejecutar pruebas siguiendo la doc.
- Notas de prueba:
  - Testear guía de inicio en una máquina limpia o contenedor.

---

## Épico 1: Ruteo, Layouts y Shell de UI Global
Objetivo: Construir el esqueleto del sitio: layout base, header/footer, ruteo de páginas, con pruebas y CI activos.

### Issue (Epic): Ruteo + Layouts – Base de navegación y SEO
- Rama objetivo del épico: `epic/routing-layouts`
- Convención de ramas (en inglés):
  - Feature: `feat/routing-layouts/<slug-tarea>`
  - Chore: `chore/routing-layouts/<slug-tarea>`
  - Fix: `fix/routing-layouts/<slug-tarea>`
- Descripción:
  - Como usuario, quiero navegar por páginas principales con un header/footer consistentes, para acceder a índice, historial, selección y archivos por año.
- Criterios de aceptación (DoD):
  - Rutas principales renderizan con el layout compartido y estilos básicos.
  - Metadatos/SEO configurados con `useHead` (título, descripción, OG básico).
  - Pruebas de render mínimo por página; CI verde.
- Notas:
  - Este épico incluye las issues hijas listadas abajo.

#### Tarea 1: Layout por defecto y componentes de Header/Footer
- Rama sugerida: `feat/routing-layouts/default-layout`
- PR hacia: `epic/routing-layouts`
- Descripción:
  - Crear `layouts/default.vue` y componentes `AppHeader`/`AppFooter` con Tailwind.
- Criterios de aceptación:
  - Layout aplicado a todas las rutas; navegación con `NuxtLink` funciona.
  - Responsivo básico (mobile/desktop) y accesible (roles/ARIA y foco).
- Notas de prueba:
  - Prueba de snapshot/render para layout y header; verificación de links principales.

#### Tarea 2: Rutas base (index, historial, seleccion)
- Rama sugerida: `feat/routing-layouts/base-routes`
- PR hacia: `epic/routing-layouts`
- Descripción:
  - Implementar páginas `/`, `/historial`, `/seleccion` con contenido placeholder inicial.
- Criterios de aceptación:
  - Navegación entre páginas funciona; no hay errores de consola.
  - Pruebas de render mínimo por ruta.
- Notas de prueba:
  - Montar cada página y asertar título/h1 esperado.

#### Tarea 3: Archivos por año `[year].vue`
- Rama sugerida: `feat/routing-layouts/year-archives`
- PR hacia: `epic/routing-layouts`
- Descripción:
  - Crear ruta dinámica para archivos por año, con lectura del parámetro y validación básica.
- Criterios de aceptación:
  - `/2020`, `/2021`, `/2022` renderizan estructura básica.
  - Validación de parámetro de año (p. ej., numérico de 4 dígitos) con respuesta de 404 si no es válido.
- Notas de prueba:
  - Pruebas para rutas válidas e inválidas (404).

#### Tarea 4: Página de detalle `[slug].vue`
- Rama sugerida: `feat/routing-layouts/movie-detail`
- PR hacia: `epic/routing-layouts`
- Descripción:
  - Crear ruta dinámica para detalle de película (estructura base + hero placeholder).
- Criterios de aceptación:
  - Render básico con el slug en pantalla; sin errores de consola.
- Notas de prueba:
  - Montar página con un slug simulado y asertar render.

#### Tarea 5: SEO/Meta inicial
- Rama sugerida: `chore/routing-layouts/seo-meta`
- PR hacia: `epic/routing-layouts`
- Descripción:
  - Configurar `useHead` en layout/páginas para título, descripción y OG por defecto.
- Criterios de aceptación:
  - Metas visibles en HTML; sin duplicidades ni errores.
- Notas de prueba:
  - Testear que `head` contiene título/description esperados.

#### Tarea 6: Navbar responsiva y accesible
- Rama sugerida: `feat/routing-layouts/responsive-navbar`
- PR hacia: `epic/routing-layouts`
- Descripción:
  - Implementar navbar con Tailwind (hamburguesa móvil, foco, contraste suficiente).
- Criterios de aceptación:
  - Funciona en mobile/desktop; navegación por teclado.
- Notas de prueba:
  - Pruebas de interacción mínima (toggle) o snapshot de estados.
