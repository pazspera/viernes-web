# Guía de Branching (nombres de branches en inglés)

Flujo preferido: GitHub Flow con ramas de integración por épico.

## Tipos de ramas
- main
  - Rama de producción. Protegida. CI requerido (lint, typecheck, test, build). Deploy automático.
- epic/*
  - Ramas de integración por épico. Ejemplos: `epic/foundations-cicd`, `epic/routing-layouts`.
  - Se usan para integrar las subtareas del épico y validar en una vista previa compartida (preview).
- feat/*
  - Ramas de feature por subtarea. Ejemplo: `feat/foundations-cicd/vitest-setup`.
- chore/*
  - Ramas para tareas de herramientas/config. Ejemplo: `chore/foundations-cicd/eslint`.
- fix/*
  - Ramas para corrección de bugs. Ejemplo: `fix/routing-layouts/navbar-focus`.
- hotfix/*
  - Correcciones críticas desde producción (ramificadas desde main). Ejemplo: `hotfix/ci-cache-bug`.
- legacy/* (opcional)
  - Para alojar el sitio estático anterior si es necesario. Ejemplo: `legacy/static-site`.

Notas
- Los nombres de las ramas deben ser en inglés (lowercase, kebab-case). Evitar espacios y caracteres especiales.
- Preferir "squash merge" para mantener un historial limpio en `main`.
- Mantener subtareas pequeñas (0.5–2 días) para acelerar revisiones.

## Pull Requests
- Subtarea → Épico: abrir PR desde `feat/* | chore/* | fix/*` hacia la rama `epic/*` correspondiente.
- Épico → Main: al completar y validar el épico, abrir PR desde `epic/*` hacia `main`.
- Requisitos: CI en verde y al menos una revisión. Usar la plantilla de PR (objetivo, AC, pruebas, screenshots).

## Estrategia de sincronización
- Rebase de las ramas de subtarea sobre su `epic/*` periódicamente (o merge si se prefiere simplicidad).
- Si `main` avanza (otros épicos se fusionan), hacer merge o rebase de `main` → `epic/*` para evitar desfases.

## Releases
- Al fusionar un épico en `main`, crear un tag (por ejemplo, `v0.1.0`) y redactar notas de release.
- Hotfix en producción:
  - Crear `hotfix/*` desde `main` → PR a `main` → tag patch → integrar a `epic/*` activos si corresponde.

## Hosting legado (GitHub Pages)
- Si necesitás mantener online el sitio anterior mientras reconstruís:
  1) Crear una rama `legacy/static-site` y copiar allí el contenido actual de producción.
  2) En Settings → Pages, configurar la fuente a `legacy/static-site` (root) o `/docs` si corresponde.
  3) Etiquetar el estado actual con un tag (por ejemplo, `legacy-2024-12`). Los tags son referencias inmutables; reemplazar el contenido de `main` no elimina el tag ni el release asociado.
  4) Proceder a reconstruir `main` para la nueva app en Nuxt. GitHub Pages seguirá sirviendo desde `legacy/static-site` hasta que decidas cambiarlo.
- Alternativa: usar una rama `gh-pages` en lugar de `legacy/static-site`.

## Ejemplo de mapa de ramas para el épico "Foundations CI/CD"
- `epic/foundations-cicd`
  - `feat/foundations-cicd/nuxt-init`
  - `chore/foundations-cicd/eslint-prettier`
  - `feat/foundations-cicd/vitest-setup`
  - `chore/foundations-cicd/ci-workflow`
  - `feat/foundations-cicd/tailwind-setup`
  - `chore/foundations-cicd/pr-template`
