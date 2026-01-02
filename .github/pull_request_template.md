# Pull Request

## Objetivo
- ¿Qué problema resuelve o qué valor agrega este PR?

## Tipo de cambio
- [ ] Feature
- [ ] Fix
- [ ] Chore (configuración/herramientas)
- [ ] Docs
- [ ] Refactor

## Ramas
- Origen (branch de trabajo): `<tipo>/<epic>/<tarea>` (en inglés, kebab-case)
  - Ejemplos: `feat/foundations-cicd/vitest-setup`, `chore/routing-layouts/seo-meta`
- Destino:
  - PR de subtarea → rama de épico: `epic/<epic>`
  - PR de épico → `main` (merge final)

## Issue vinculada
- Cierra: #<número-issue>
- Épico: #<número-epico> (si aplica)

## Criterios de aceptación (AC)
- [ ] AC1: ...
- [ ] AC2: ...
- [ ] AC3: ...

## Pruebas
- Unit/Component/Server: describir cobertura y casos relevantes
- ¿Se agregó/actualizó cobertura?: [ ] Sí / [ ] No
- Instrucciones locales: `npm run test`

## Checklist de calidad
- [ ] Lint pasa (`npm run lint`)
- [ ] Typecheck pasa (`tsc --noEmit` o `npm run typecheck`)
- [ ] Tests pasan y generan cobertura
- [ ] Build pasa (`npm run build`)
- [ ] No hay errores en consola

## Capturas/Video (si UI)
- Adjuntar evidencia visual de los cambios

## Riesgos y mitigación
- Riesgos: ...
- Plan de rollback: ...

## Notas de despliegue
- Variables de entorno: ...
- Migraciones/scripts: ...
