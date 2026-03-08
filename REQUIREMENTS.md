# Requirements: warplan (Svelte 5 Conversion)

## Table Stakes

- [ ] TS-1: User can view all PC components organized by category (CPU, GPU, Mobo, RAM, Cooling, Storage, Case, PSU)
- [ ] TS-2: User can select one component per category to build a custom configuration
- [ ] TS-3: User can see live total cost update as components are selected
- [ ] TS-4: User can see compatibility warnings when incompatible parts are selected (socket mismatch, PSU undersized)
- [ ] TS-5: User can load one of three preset builds (Vanguard, Overlord, Thunderbolt)
- [ ] TS-6: User can see the active preset visually highlighted, clearing when components are customized
- [ ] TS-7: User can export their build as a printable WWII-themed briefing document at /export route
- [ ] TS-8: User can see benchmark data per GPU with visual bars
- [ ] TS-9: User can click buy links and review source links for every component
- [ ] TS-10: +layout.svelte and +page.svelte are lean shells that compose dedicated Svelte components

## Differentiators

- [ ] DIFF-1: Developer can update component data by editing TypeScript data files and rebuilding
- [ ] DIFF-2: Developer can run `npm run build` to produce a fully static site deployable to GitHub Pages
- [ ] DIFF-3: All component data is typed with strict TypeScript interfaces enforcing price, sources, buyLinks, notes, advice
- [ ] DIFF-4: User can see current RAM shortage/pricing context and GPU availability warnings with sources
- [ ] DIFF-5: User can see links to third-party build guides that recommend similar configs

## Anti-Features

- ANTI-1: No server-side rendering — static adapter only
- ANTI-2: No database or CMS — data lives in TypeScript source files
- ANTI-3: No admin UI — updates happen in source files + rebuild
- ANTI-4: No external runtime dependencies beyond Svelte/SvelteKit

## Phase Traceability

| Requirement | Phase |
|-------------|-------|
| TS-10, DIFF-3 | Phase 1: Scaffold & Data Schema |
| TS-1 thru TS-6, TS-8, TS-9, DIFF-4, DIFF-5 | Phase 2: Component Build |
| TS-7 | Phase 3: Export Route |
| DIFF-1, DIFF-2 | Phase 4: Build & Deploy |
