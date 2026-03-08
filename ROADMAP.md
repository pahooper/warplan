# Roadmap: warplan (Svelte 5 Conversion)

> WWII-themed PC configurator — single HTML → SvelteKit 2 + Svelte 5 decomposition

## Current Milestone: v2 — SvelteKit Conversion

**Goal:** Decompose the working `index.html` into a typed, component-based SvelteKit 2 + Svelte 5 app with identical visual output
**Status:** in-progress
**Started:** 2026-03-08

## Anti-Features (Constant Constraints — All Phases)

These are NOT phase-bound. They apply to every line of code, every decision:

- **ANTI-1:** No server-side rendering — static adapter only
- **ANTI-2:** No database or CMS — data lives in TypeScript source files
- **ANTI-3:** No admin UI — updates happen in source files + rebuild
- **ANTI-4:** No external runtime dependencies beyond Svelte/SvelteKit

---

### Phase 1: Scaffold & Data Schema

- **Status:** pending
- **Requirements:** TS-10, DIFF-3
- **Description:** Initialize the SvelteKit 2 project with Svelte 5, Tailwind CSS 4, TypeScript strict mode, and the static adapter. Define all TypeScript interfaces (`Component`, `Preset`, `BenchmarkData`, `CompatibilityRule`, etc.) and create the typed data files (`components.ts`, `presets.ts`) by extracting data from the existing `index.html`. Set up lean `+layout.svelte` and `+page.svelte` shells. Configure fonts (Special Elite, Courier Prime) and Tailwind theme with military design tokens.
- **Success Criteria:**
  - [ ] `npm run dev` starts without errors; `/` renders a minimal shell page
  - [ ] `src/lib/types.ts` exports interfaces covering all 8 component categories with price, sources, buyLinks, notes, and advice fields
  - [ ] `src/lib/data/components.ts` contains all components from `index.html`, fully typed with zero `any` or `as` casts
  - [ ] `src/lib/data/presets.ts` defines Vanguard, Overlord, and Thunderbolt preset configs referencing component IDs
  - [ ] `tsc --noEmit` passes with strict mode enabled
- **Depends On:** none

---

### Phase 2: Component Build

- **Status:** pending
- **Requirements:** TS-1, TS-2, TS-3, TS-4, TS-5, TS-6, TS-8, TS-9, DIFF-4, DIFF-5
- **Description:** Build all Svelte 5 components that compose the main configurator dashboard. This is the bulk of the work — translating every section of `index.html` into dedicated components using runes (`$state`, `$derived`) for reactive build state. Includes: category sections with selectable components, live cost ticker, compatibility engine, preset selector with visual highlighting, GPU benchmark bars, buy/source links, market context warnings, and build guide links. Visual output must be pixel-comparable to the reference `index.html`.
- **Success Criteria:**
  - [ ] All 8 component categories render with correct data; selecting one component per category updates `$state` and live total cost
  - [ ] Loading a preset populates all selections and highlights the active preset; customizing any selection clears the preset highlight
  - [ ] Compatibility warnings appear for socket mismatches and undersized PSU scenarios (test at least 2 conflict cases)
  - [ ] GPU benchmark bars render with correct relative widths and labels; buy links and review source links are clickable and correct
  - [ ] RAM shortage/pricing context, GPU availability warnings, and third-party build guide links are visible with working source citations
- **Depends On:** Phase 1

---

### Phase 3: Export Route

- **Status:** pending
- **Requirements:** TS-7
- **Description:** Build the `/export` route with its own layout optimized for printing. Takes the current build selection and renders a WWII-themed "classified briefing" document — complete with operation name, component manifest, total cost, and compatibility status. Must be Ctrl+P / Cmd+P ready with print-specific CSS (no nav chrome, proper page breaks, clean margins).
- **Success Criteria:**
  - [ ] `/export` route renders the current build as a styled briefing document with all selected components, prices, and total cost
  - [ ] Print preview (Ctrl+P) shows a clean single-purpose document — no navigation elements, no scrollbars, proper margins
  - [ ] Briefing includes the operation codename if a preset was used, or "CUSTOM OPERATION" if no preset (matching reference HTML)
  - [ ] All component entries in the briefing show name, price, and key specs
- **Depends On:** Phase 2

---

### Phase 4: Build Config & Deploy Pipeline

- **Status:** pending
- **Requirements:** DIFF-1, DIFF-2
- **Description:** Finalize build configuration for static output via `@sveltejs/adapter-static`. Ensure `npm run build` produces a complete, self-contained static site deployable to GitHub Pages. Verify the developer workflow: edit TypeScript data files → rebuild → deploy. Add GitHub Actions workflow for automated deploy on push to main.
- **Success Criteria:**
  - [ ] `npm run build` completes without errors and outputs a static site to the `build/` directory
  - [ ] Serving the `build/` directory with any static file server renders the full configurator identically to `npm run dev`
  - [ ] Editing a component price in `components.ts` and rebuilding reflects the change in the output — no other steps required
  - [ ] GitHub Actions workflow file exists and deploys to GitHub Pages on push to `main`
- **Depends On:** Phase 3

---

## Progress Tracker

| Phase | Name | Requirements | Status | Depends On |
|-------|------|-------------|--------|------------|
| 1 | Scaffold & Data Schema | TS-10, DIFF-3 | pending | — |
| 2 | Component Build | TS-1..TS-6, TS-8, TS-9, DIFF-4, DIFF-5 | complete | Phase 1 |
| 3 | Export Route | TS-7 | pending | Phase 2 |
| 4 | Build Config & Deploy | DIFF-1, DIFF-2 | pending | Phase 3 |

### Requirement Coverage (No Orphans)

| Requirement | Phase | Category |
|-------------|-------|----------|
| TS-1 | 2 | Table Stake |
| TS-2 | 2 | Table Stake |
| TS-3 | 2 | Table Stake |
| TS-4 | 2 | Table Stake |
| TS-5 | 2 | Table Stake |
| TS-6 | 2 | Table Stake |
| TS-7 | 3 | Table Stake |
| TS-8 | 2 | Table Stake |
| TS-9 | 2 | Table Stake |
| TS-10 | 1 | Table Stake |
| DIFF-1 | 4 | Differentiator |
| DIFF-2 | 4 | Differentiator |
| DIFF-3 | 1 | Differentiator |
| DIFF-4 | 2 | Differentiator |
| DIFF-5 | 2 | Differentiator |
| ANTI-1 | all | Anti-Feature |
| ANTI-2 | all | Anti-Feature |
| ANTI-3 | all | Anti-Feature |
| ANTI-4 | all | Anti-Feature |
