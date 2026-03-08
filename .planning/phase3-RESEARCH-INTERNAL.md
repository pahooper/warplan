# Phase 3 Internal Research: Export Route

## 1. Route Structure

- `trailingSlash: 'always'` in `src/routes/+layout.ts` — export route must be `/export/`
- `prerender: true` globally — static shell gets prerendered, URL params are client-side runtime
- `svelte.config.js` has a `handleHttpError` guard for `/export` — can be removed once route exists
- Root `+layout.svelte` is minimal: CSS import + `{@render children()}` — no app chrome to hide

## 2. Build State

- `BuildState { selections: BuildSelection; activePreset: string | null }`
- `BuildSelection = { [K in ComponentCategory]: string }` — 8 category→ID mappings
- Context API: `setBuildContext()`/`getBuildContext()` with Symbol key
- **Context won't cross route boundaries** — URL params needed for /export

## 3. ExportButton.svelte

- Currently a plain `<a href="/export/">` link
- Needs update: build URL with search params from current selections + activePreset

## 4. Component Data

- `components` from `$lib/data/components` — 25 components across 8 categories
- Key fields for briefing: `name`, `price`, `buyLinks[0].store`, `owned` (CPU only), `perf4k` (CPU/GPU), `benchmarks` (GPU)
- Lookup pattern: `components[category].find(c => c.id === id)`

## 5. Presets

- `presets` array from `$lib/data/presets` — 3 entries with `id`, `name` (e.g., "Operation: Vanguard"), `tier`, `selection`
- Match preset by ID to get operation name for briefing header

## 6. Combat Rating (reusable)

- `calculateCombatRating(cpuPerf4k, gpuPerf4k): CombatRating`
- Returns: `rating`, `ratingColor`, `native4kFps`, `can160Hz`, `can160Color`, `cpuPerf`, `gpuPerf`
- Export page can call this directly — pure function, no context dependency

## 7. Styling

- Tailwind 4 @theme tokens: `--color-military-gold: #d4af37`, `--font-display: Special Elite`, `--font-body: Courier Prime`
- Existing classes: `.tactical-card`, `.military-header`, badge classes
- Export page will use scoped styles matching the reference HTML briefing

## 8. Resale Intelligence

- Only shown when selected CPU is NOT the owned one (`i9-14900k`)
- CPU has `owned: boolean` flag — check this to conditionally render resale section
- Net cost calculation: `total - 320` (estimated recovery after eBay fees)
