# Project Guide for Developers

## Overview
- Purpose: Static website documenting a Friday movie night cycle for the Discord server "La Casa del Craizy" with recent picks, yearly archives, and random suggestions.
- Stack:
  - HTML5, Vanilla JavaScript (no framework), Bootstrap 5 (CSS/JS), Custom Elements for header/footer.
  - Styling with SCSS using the 7-1 architecture (see Sass Guidelines). Compiled output under `css/`.
  - Data stored as JSON under `data/` and rendered dynamically in the browser.
- Entry point: `index.html` with hero, latest movies grid, and navigation.

## Key Directories and Files
- Root
  - `index.html`: Landing page. Injects header/footer custom elements and latest movies via `js/movieIndex.js`.
  - `README.md`: Short overview (Spanish). Notes Bootstrap 5 and SCSS 7-1 usage.
  - `AGENTS.md`: This guide.
  - `img_sizes.txt`: Canonical asset dimensions. See "Assets & Image Guidelines".
  - `notas.md`: Work-in-progress notes for linking logic in movie details.
- CSS / SCSS
  - `scss/`: Source styles in 7-1 pattern
    - `abstract/`: `_variables.scss`, `_mixins.scss`
    - `base/`: resets, typography
    - `components/`: buttons, cards, hero, posters, disclaimers
    - `layout/`: header, footer, grid, main, pelicula
    - `main.scss`: imports all partials; compiled to `css/main.css` and `css/main.min.css` (maps included)
  - `css/`: Compiled CSS (Bootstrap vendored, project CSS, and minified variants)
- JavaScript
  - `js/header.js`: Defines custom elements `header-component1/2/3` for different relative path depths.
  - `js/footer.js`: Defines `footer-component` custom element.
  - `js/movieIndex.js`: Renders latest 6 movies and hero on index from `data/info_movies.json`.
  - `js/movieCards.js`: Renders yearly archive cards based on `data/movies_{year}.json`. Year read from `#current_year` element class.
  - `js/picks.js`: Renders cards filtered by `pick_category` for picker pages. Picker read from `#current_pick` element class.
  - `js/movieRandom.js`: Random poster picker and full poster gallery using `data/random_movies.json`.
  - `js/movieDetails.js`: Movie detail page logic (file is large; see code for behavior). Refer to notes in `notas.md` regarding pick link routing.
- Data
  - `data/info_movies.json`: Flat array of movie entries used for index and picks pages.
  - `data/movies_2020.json`, `data/movies_2021.json`, `data/movies_2022.json`: Yearly arrays grouped by month with `movies` arrays.
  - `data/random_movies.json`: Poster entries with image path and IMDB links.
- Pages
  - `pages/*.html`: Category and yearly pages (historial, seleccion/random, yearly archives).
  - `pages/peliculas/*.html`: Individual movie pages.
- Images
  - `img/hero/*.jpg`: Hero background images (per page / movie).
  - `img/cards/*.jpg`: Card images used in grids.
  - `img/posters/*.jpg|.png`: Poster images for random picker/gallery.
  - `img/pelicula/**`: Per-movie assets (stills, cast, etc.).

## Data Model (inferred from code)
- Entries in `info_movies.json` (used by index and picks):
  - Required properties used by code:
    - `id` (used for hero container ID)
    - `name` (string)
    - `year` (number|string for display)
    - `img_card` (path string for card image)
    - `img_card_alt` (alt text)
    - `link_page` (HTML file name under `pages/peliculas/`)
    - `date_seen` (ISO date string; used for sorting on index)
    - `pick_category` (string; used to filter by picker in `picks.js`)
- Entries in yearly `movies_YYYY.json`:
  - Array of months like: `{ title: "Mes", movies: [ { name, year, img_card, img_card_alt, link_page, ... } ] }`
- Entries in `random_movies.json`:
  - `{ name, img, imdb }` (code expects these exact keys).

## Runtime Behavior & Conventions
- DOMContentLoaded
  - All rendering entry functions (`getIndex`, `getAll`, `getPickedMovies`, `getAllPosters`) attach on `DOMContentLoaded` to ensure the DOM is ready.
- Paths and relative navigation
  - Three header components exist to handle link paths from different depths:
    - `header-component1` for root (`index.html`).
    - `header-component2` for `pages/*`.
    - `header-component3` for `pages/peliculas/*`.
  - When adding new pages, ensure the correct header component tag is placed to maintain navigation links.
- Card rendering
  - Cards are constructed with Bootstrap classes and project BEM-like modifiers: `card card-pelicula`, child elements `card-pelicula__contenido`, `card-pelicula__titulo`.
  - Card links use `stretched-link`.
- Hero rendering on index
  - Uses the most recent movie (by `date_seen`) to populate the hero container with classes `hero`, `hero__cartel`, `hero__leyenda`, `hero__titulo`.
- Fragments
  - Rendering uses `DocumentFragment` to minimize reflows before attaching to DOM.
- Accessibility
  - Provide meaningful `alt` text for all images (`img_card_alt`, poster `alt`).
  - External links include `target="_blank"` and `rel="noreferrer"` for posters.
- Error handling
  - Fetch wrappers throw with `status` and `statusText`; catch logs a friendly message. Consider user-facing error UI for production.

## Assets & Image Guidelines
- Standard sizes (see `img_sizes.txt`):
  - Card images: 517 × 280
  - Poster images: 350 × 520
  - Movie page images:
    - Main: 768 × 418
    - Cast: 200 × 200
- Keep consistent aspect ratios to prevent layout shifts.
- Prefer optimized images. Suggested tool: https://imagecompressor.com/

## SCSS Architecture & Styling Notes
- 7-1 SCSS structure is in place:
  - Use `_variables.scss` for colors, fonts, sizes, paddings.
  - Use `_mixins.scss` for reusable patterns (e.g., `background-image` mixin). The `pelicula-titulo` mixin is currently a placeholder.
- Compiled CSS is committed (no build step in repo). If you modify SCSS:
  - Recompile to `css/main.css` and `css/main.min.css` (maps exist). Keep both updated to avoid drift.
- Bootstrap overrides
  - Navbar (`_header.scss`) and card styles (`_card.scss`) override Bootstrap defaults; keep specificity and `!important` usage consistent with existing patterns.

## JavaScript Conventions
- Vanilla JS only; no bundler implied.
- Query DOM elements once and reuse references; batch DOM updates via `DocumentFragment` when rendering lists.
- Use dataset JSON fields consistently (see "Data Model").
- Keep relative paths correct when building links/images from different directory depths:
  - On index: images are `img/...`; pages use `../img/...` when needed.
  - Links to movie pages from `pages/*` use `peliculas/${movie.link_page}`; from index use `pages/peliculas/${movie.link_page}`.
- When adding new pick categories, ensure `pick_category` values in JSON match the IDs/classes expected in HTML (case-insensitive matching is used in `picks.js`).

## Adding Content
- Add a new movie to index and picks:
  - Append to `data/info_movies.json` with all required fields; set `date_seen` in ISO format so sorting works.
  - Add corresponding images under `img/cards/` and `img/hero/` with correct sizes and alt text.
  - Create `pages/peliculas/<movie>.html` and any per-movie assets under `img/pelicula/<movie>/`.
- Add a movie to a yearly archive:
  - Edit the appropriate `data/movies_YYYY.json` month entry; ensure `img_card` paths are relative to project root when consumed from `pages/*` (`../${movie.img_card}` is applied by code).
- Add posters to random picker:
  - Append entries to `data/random_movies.json` with `name`, `img`, and `imdb` link.

## Known TODOs / Open Notes
- From `notas.md`:
  - In `movieDetails`, when the pick is not one of the four main pickers nor "democracia", generate the link to `piden_pista.html`.
  - For now, let the default else go to no-link for "democracia".
  - Instead of using the pick name to generate the file, hardcode so it routes to "piden pista".
- Potential enhancements:
  - User-facing error messages for failed fetches.
  - Extract shared card/hero renderers to utility functions to reduce duplication across JS modules.
  - Consider adding a small build step (e.g., npm scripts + Sass) to automate SCSS compilation if you plan to iterate on styles frequently.

## Testing & Local Development Tips
- Serve via a static HTTP server to avoid CORS issues with `fetch`ing local JSON (e.g., `npx http-server .` or VSCode Live Server).
- Verify relative paths from each page depth, especially when adding new pages.
- Validate JSON (trailing commas and invalid encodings will break runtime fetch/parse).

## Release & Deployment
- This appears to be a static site suitable for GitHub Pages or any static host.
- Ensure compiled CSS and any new assets are committed.
- If using GitHub Pages, confirm `og:image` absolute URL is valid (index currently references `https://pazspera.github.io/viernes-web/img/thumb.jpg`).
