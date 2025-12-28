# Development Subagents for Nuxt Migration

These subagents are specialized assistants to accelerate development, enforce quality, and support learning goals (Nuxt 4, TS, Tailwind, Vitest). Each subagent includes purpose, scope, inputs/outputs, and typical tasks.

## Subagent: Project Bootstrapper
- Purpose: Initialize and configure the project stack consistently.
- Scope:
  - Create Nuxt 4 + TS + Vite project.
  - Install Tailwind, ESLint, Prettier, Husky, lint-staged, Vitest, Vue Test Utils.
  - Generate baseline configs (nuxt.config.ts, tailwind.config.ts, postcss.config.cjs, .eslintrc.cjs, .prettierrc, tsconfig.json, vitest.config.ts).
- Inputs: Repository name, package manager, desired strictness, module choices.
- Outputs: Working dev environment with scripts and a sample component + test.
- Typical tasks: Scaffold project, wire Tailwind, add test and lint scripts, verify dev server.

## Subagent: Type & Data Modeler
- Purpose: Define and validate domain models with TypeScript + Zod/Valibot.
- Scope:
  - Create interfaces/types for `InfoMovie`, `YearlyMovie`, `YearBlock`, `RandomPoster`.
  - Build parsers and validators for JSON inputs.
  - Ensure type-safe composables and server handlers.
- Inputs: JSON schemas or samples, desired strictness and fallback policies.
- Outputs: `types/*.ts`, `schemas/*.ts`, typed composables and tests.
- Typical tasks: Derive types, write validators, refactor code to use them, add tests.

## Subagent: Composables & Data Access
- Purpose: Build reusable, typed composables and SSR-friendly data fetching.
- Scope:
  - Implement `useMovies`, `usePosters`, and helpers.
  - Integrate `useFetch` with server/api endpoints; add caching rules.
- Inputs: API endpoint contracts or local JSON sources.
- Outputs: `composables/*.ts` + unit tests.
- Typical tasks: Compose filters (last 6 movies, picks by category), sorting, normalization.

## Subagent: UI & Tailwind System
- Purpose: Develop accessible, reusable UI components and Tailwind design tokens.
- Scope:
  - Card, Hero, Button, Grid components with responsive behavior.
  - Tailwind theme extensions and @apply utilities where justified.
  - Accessibility: focus, semantics, color contrast.
- Inputs: Figma/wireframes (optional), brand colors/typography, component requirements.
- Outputs: `components/*.vue`, `app.css`, Tailwind config, stories (optional).
- Typical tasks: Build components, refactor utilities, add ARIA/keyboard support.

## Subagent: Page Integrator
- Purpose: Implement pages and route logic with the built components and composables.
- Scope:
  - Index, historial, seleccion, yearly archives `[year].vue`, movie detail `[slug].vue`.
  - Head/meta config; NuxtLink wiring; route params and validation.
- Inputs: Page specs and acceptance criteria.
- Outputs: `pages/*.vue`, updated layout, routing tests (optional).
- Typical tasks: Assemble components, wire data, implement per-page features.

## Subagent: Testing & Quality
- Purpose: Establish testing strategy and ensure code quality gates.
- Scope:
  - Vitest unit tests, component tests (Vue Test Utils), server handler tests.
  - Coverage thresholds; CI integration.
  - (Optional) Playwright for basic e2e.
- Inputs: Components, composables, server handlers; acceptance criteria.
- Outputs: `tests/unit|components|server`, coverage reports, CI workflows.
- Typical tasks: Write tests for props/events/rendering, composable logic, API routes.

## Subagent: Performance, SEO & A11y
- Purpose: Optimize UX and discoverability.
- Scope:
  - Nuxt Image integration; route prefetch; Tailwind purge.
  - Sitemap/robots/JSON-LD; meta tags.
  - Accessibility checks and fixes.
- Inputs: Perf budgets, SEO targets, accessibility guidelines.
- Outputs: Config updates, audits, fixes, documentation.
- Typical tasks: Lighthouse audits, Axe fixes, structured data implementation.

## Subagent: Content & Asset Pipeline
- Purpose: Make content updates safe and consistent.
- Scope:
  - Decide data source (JSON, @nuxt/content, or headless CMS).
  - Asset naming and sizing rules; schema validation pre-commit.
- Inputs: Current content and desired workflows.
- Outputs: Contribution guide, validation scripts, content adapters.
- Typical tasks: Write scripts to validate JSON; document how to add movies/posters.

## Subagent: CI/CD & DevOps
- Purpose: Automate quality and deployments.
- Scope:
  - GitHub Actions workflows for lint/typecheck/test/build/deploy.
  - Deploy to Vercel/Netlify/GitHub Pages; PR previews.
- Inputs: Hosting choice, environment variables.
- Outputs: `.github/workflows/*.yml`, deployment configuration.
- Typical tasks: Create pipelines, cache dependencies, set preview URLs in PRs.

## Subagent: Stretch Goals & Architecture
- Purpose: Guide optional enhancements and longer-term architecture.
- Scope:
  - Pinia state (favorites/filters), i18n, theming, Storybook, analytics.
- Inputs: Product goals and priorities.
- Outputs: RFCs, backlog items, implementation guides.
- Typical tasks: Draft proposals, create tasks, mentor implementation.

---

### How to Use These Subagents in Kanban
- Add subagent tasks under the corresponding epic swimlane.
- Each task should list: purpose, acceptance criteria, test notes, and links to PRs.
- Prefer small, shippable tasks (0.5–2 days) to maximize feedback while learning.
