# Branching Guide (English branch names)

Preferred workflow: GitHub Flow with Epic integration branches.

## Branch Types
- main
  - Production branch. Protected. CI required (lint, typecheck, test, build). Auto-deploy.
- epic/*
  - Integration branches per epic. Example: `epic/foundations-cicd`, `epic/routing-layouts`.
  - Used to integrate feature tasks for that epic and validate in a shared preview.
- feat/*
  - Feature branches per subtask. Example: `feat/foundations-cicd/vitest-setup`.
- chore/*
  - Tooling/config tasks. Example: `chore/foundations-cicd/eslint`.
- fix/*
  - Bugfix tasks. Example: `fix/routing-layouts/navbar-focus`.
- hotfix/*
  - Critical fix from production (branched from main). Example: `hotfix/ci-cache-bug`.
- legacy/* (optional)
  - For hosting previous static site if needed. Example: `legacy/static-site`.

Notes
- Branch names must be in English (lowercase, hyphen-separated). Avoid spaces and special characters.
- Prefer squash merge for a clean main history.
- Keep subtasks small (0.5–2 days) to expedite reviews.

## Pull Requests
- Feature → Epic: Open PRs from `feat/*|chore/*|fix/*` into the corresponding `epic/*` branch.
- Epic → Main: Once the epic is complete and validated, open a final PR `epic/*` into `main`.
- Require CI green and at least one review. Use PR template (goals, acceptance criteria, tests, screenshots).

## Sync Strategy
- Rebase feature branches on their `epic/*` regularly (or merge if you prefer simplicity).
- If `main` advances (other epics merged), periodically merge or rebase `main` into `epic/*` to avoid drift.

## Releases
- On merging an epic to `main`, create a tag (e.g., `v0.1.0`) and write release notes.
- For production hotfixes:
  - Branch `hotfix/*` from `main` → PR to `main` → tag a patch version → merge back into active `epic/*` if relevant.

## Legacy Hosting (GitHub Pages)
- If you need the old static site online while rebuilding:
  1) Create a branch `legacy/static-site` and copy the current production content there.
  2) In repository Settings → Pages, set the source to `legacy/static-site` (root) or a `/docs` folder if used.
  3) Tag the current `main` as a legacy release (e.g., `legacy-2024-12`). Tags are immutable references; deleting or changing `main` does not remove the tag.
  4) Proceed to rebuild `main` for the new Nuxt app. Pages will keep serving from `legacy/static-site` until you switch it back.
- Alternative: Use a separate `gh-pages` branch instead of `legacy/static-site`.

## Example Branch Map for Epic "Foundations CI/CD"
- epic/foundations-cicd
  - feat/foundations-cicd/nuxt-init
  - chore/foundations-cicd/eslint-prettier
  - feat/foundations-cicd/vitest-setup
  - chore/foundations-cicd/ci-workflow
  - feat/foundations-cicd/tailwind-setup
  - chore/foundations-cicd/pr-template
