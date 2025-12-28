# Nuxt 4 Migration & Learning Plan

This plan stages the rebuild of the "Viernes" site using Nuxt 4, TypeScript, Vite, Tailwind, and Vitest. It is organized into epics that progressively build skills and functionality. Suitable for Kanban tracking.

## Epic 0: Fundaciones con CI/CD desde el Día 0
- Objetivo: Arrancar el proyecto con un entorno moderno, estricto y con CI/CD y pruebas desde el primer commit.
- Tareas (orden CI-first):
  1. Inicializar proyecto Nuxt 4 + TypeScript estricto + Vite (estructura mínima lista para CI).
  2. Configurar Vitest + Vue Test Utils con una prueba de ejemplo y reporte de cobertura.
  3. Configurar GitHub Actions (CI) para ejecutar: instalación/cache, lint, typecheck, test (con cobertura) y build en PR y main.
  4. Configurar ESLint + Prettier (+ Stylelint opcional), husky + lint-staged (ganchos de pre-commit/pre-push).
  5. Configurar Tailwind CSS y PostCSS; definir paleta y tipografía.
  6. PR template y protecciones de rama (checks requeridos, revisiones, squash only opcional).
  7. Configurar VSCode/entorno: Volar/TS, alias, auto-imports.
- Resultados de aprendizaje:
  - Entender la estructura de Nuxt 4, integración con Vite y ergonomía de TS estricto.
  - Ejecutar pruebas y cobertura en local y CI; entender gates mínimos.
  - Flujo de commits con lint/format automáticos.
- Criterios de término (DoD):
  - `npm run dev` sirve la app base.
  - `npm run test` ejecuta pruebas y genera cobertura.
  - CI en PR y main pasa lint, typecheck, test y build.
  - Template de PR activo y protecciones de rama configuradas.

- Objective: Set up a modern, strict, and ergonomic development environment.
- Tasks:
  - Initialize Nuxt 4 project (`npx nuxi init`) with TypeScript strict mode and Vite.
  - Configure Tailwind CSS and PostCSS; define color palette and typography.
  - Add ESLint + Prettier (+ Stylelint optional) with TypeScript/Vue rules; set pre-commit hooks with lint-staged + husky.
  - Set up Vitest with Vue Test Utils; create a working sample test.
  - Configure path aliases, auto-imports, and Volar/TypeScript tooling in VSCode.
- Learning outcomes:
  - Understand Nuxt 4 structure, Vite integration, and TS strict ergonomics.
  - Comfort with Tailwind setup and basic config.
  - Run tests, lints, and formatters confidently.
- Definition of done:
  - `npm run dev` serves the app.
  - `npm run test` runs a sample component test.
  - Lint/format runs clean.

## Epic 1: Routing, Layouts, and Global UI Shell
- Objective: Build the site skeleton: app layout, header/footer, pages routing.
- Tasks:
  - Create default layout (app header/footer) using Tailwind and Nuxt `layouts/`.
  - Migrate header/footer to Vue components (use slots, `NuxtLink`).
  - Implement pages: index, historial, seleccion, yearly archives, movie detail route.
  - Configure SEO/Meta with `useHead` (or `@nuxtjs/seo`), favicon, Open Graph.
  - Responsive navbar with Tailwind; optional dark theme support.
- Learning outcomes:
  - Nuxt file-based routing, layouts, and head management.
  - Tailwind utility-first workflow for global UI.
- Definition of done:
  - All main routes render with the shared layout and basic styling.

## Epic 2: Data Model and TypeScript Typings
- Objective: Strongly type data and build composables for data access.
- Tasks:
  - Define TS interfaces for: `InfoMovie`, `YearlyMovie`, `YearBlock`, `RandomPoster`.
  - Create composables (e.g., `useMovies`, `usePosters`) that fetch and normalize.
  - Add Zod/Valibot for runtime validation and type inference.
  - Unit tests for composables with mocked data.
- Learning outcomes:
  - TS typing and inference; defensive parsing/validation.
  - Composables as reusable typed logic.
- Definition of done:
  - Composables return typed, validated data; tests cover happy/edge paths.

## Epic 3: Server Routes and Data Fetching (Nuxt/Nitro)
- Objective: Move data access behind server endpoints for flexibility and future CMS integration.
- Tasks:
  - Create server/api endpoints: `/api/movies/info`, `/api/movies/:year`, `/api/posters`.
  - Use `useFetch` for SSR-friendly data access.
  - Add caching (cached handlers) or route rules as needed.
  - Tests for server handlers and composables.
- Learning outcomes:
  - Nitro server routes, SSR-aware data fetching, caching basics.
- Definition of done:
  - Pages rely on server routes; tests cover endpoints.

## Epic 4: UI Components and Tailwind Design System
- Objective: Build accessible, reusable UI components; migrate Bootstrap styles to Tailwind.
- Tasks:
  - Card components (grid and vertical variants).
  - Hero section component with background and overlay text.
  - Button components with Tailwind variants and focus styles.
  - Tailwind theme extensions in `tailwind.config` and selective `@apply` utilities.
  - Keyboard navigation, focus rings, and contrast audit.
- Learning outcomes:
  - Tailwind component patterns and accessible UI.
- Definition of done:
  - Core components are isolated, responsive, accessible; used across pages.

## Epic 5: Page Implementations and Feature Parity
- Objective: Re-implement core features from the original site with TS/Tailwind.
- Tasks:
  - Index: last 6 movies grid and dynamic hero based on latest `date_seen`.
  - Yearly archives: year from route; month sections and cards.
  - Picks pages: filter by `pick_category` (case-insensitive).
  - Selección (random posters): list all posters and "random 3" with dedupe.
  - Movie details: render hero and content; implement pick link routing per `notas.md`.
- Learning outcomes:
  - Page-level data composition and UI logic in Vue + TS.
- Definition of done:
  - Feature parity achieved with typed logic and Tailwind styles.

## Epic 6: Testing Strategy and Coverage
- Objective: Establish strong testing habits with Vitest.
- Tasks:
  - Unit tests for components (props, rendering, events).
  - Unit/integration tests for composables and server routes.
  - Snapshot tests for cards/hero where appropriate.
  - Coverage thresholds and CI reporting.
  - Optional: add Playwright for basic e2e.
- Learning outcomes:
  - Testing Vue + Nuxt + server routes in TS.
- Definition of done:
  - Main flows covered; coverage thresholds met; green CI.

## Epic 7: Performance, SEO, and Accessibility
- Objective: Optimize UX and discoverability.
- Tasks:
  - Nuxt Image or <img> best practices; set explicit sizes to avoid CLS.
  - Tailwind JIT and purge configuration; remove unused CSS.
  - Prefetch critical routes; static/ISR with route rules if relevant.
  - Sitemap, robots, and structured data (JSON-LD) for movies.
  - Accessibility audit with Axe; fix issues.
- Learning outcomes:
  - Performance and SEO techniques in a Nuxt app.
- Definition of done:
  - Lighthouse ≥90 for Performance/SEO/Accessibility on key pages.

## Epic 8: Content & Asset Pipeline
- Objective: Make content updates easy and consistent.
- Tasks:
  - Decide data source: keep JSON, adopt `@nuxt/content`, or plan for headless CMS.
  - Normalize image paths, sizes, and alt text; enforce via schema validation.
  - Pre-commit script to validate JSON schema.
- Learning outcomes:
  - Sustainable content workflows and validation discipline.
- Definition of done:
  - Clear, documented process to add/validate new content.

## Epic 9: CI/CD and Deployment
- Objective: Automate testing, linting, and deploys.
- Tasks:
  - GitHub Actions: lint, type-check, test, build on PRs and main.
  - Deploy to Netlify/Vercel/GitHub Pages (choose static/SSR strategy).
  - PR previews and runtime config via Nuxt runtime.
- Learning outcomes:
  - Ship safely with automation.
- Definition of done:
  - Auto-deploy on main; PR previews; CI badges.

## Epic 10: Enhancements and Stretch Goals (Optional)
- Tasks:
  - Pinia for state (favorites, filters).
  - i18n with `@nuxtjs/i18n` (ES/EN).
  - Theming (dark/light) with Tailwind + `app.config.ts`.
  - Storybook for components.
  - Analytics with Plausible.
- Learning outcomes:
  - Advanced Nuxt ecosystem and scalable patterns.
- Definition of done:
  - Selected enhancements integrated with tests and docs.

## Kanban Workflow
- Columns: Backlog → Ready → In Progress → Review → Done.
- WIP limits: 1–2 in progress to keep focus while learning.
- Definition of Ready: clear acceptance criteria, test notes.
- Definition of Done: code, tests, docs updated; CI passing; deployed if applicable.
