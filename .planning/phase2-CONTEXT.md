# Phase 2 Context: Component Build

**Date:** 2026-03-08
**Requirements:** TS-1, TS-2, TS-3, TS-4, TS-5, TS-6, TS-8, TS-9, DIFF-4, DIFF-5

## Domain Context
- Phase 1 delivered: SvelteKit scaffold, typed data layer (25 components, 8 categories, 3 presets)
- Reference implementation: `index.html` on `master` branch — visual output must match exactly
- Design language: WWII tactical/military briefing (Special Elite headers, Courier Prime body, military gold #d4af37)
- Package manager: bun (not npm)
- Quality gates: Every Svelte file must pass `bun run check` (svelte-check) with zero errors/warnings

## Decisions

### Component Decomposition
- **Approach:** Hybrid — generic ComponentSelector for simple categories + dedicated CpuSelector/GpuSelector for categories with benchmarks
- **Component tree:**
  - `+page.svelte` (lean shell, composes everything)
  - `Header.svelte` — top tactical card with mission info
  - `IntelBriefing.svelte` — critical intel (degradation risk, DDR5 shortage)
  - `PresetCards.svelte` — 3-column preset buttons (Vanguard/Overlord/Thunderbolt)
  - `CpuSelector.svelte` — custom, includes benchmarks + owned badge
  - `GpuSelector.svelte` — custom, includes benchmarks + DLSS 4 MFG caveats
  - `ComponentSelector.svelte` — generic, reused for mobo/RAM/cooling (full-width categories)
  - `CompactSelector.svelte` — compact variant for storage/case/PSU (3-column grid)
  - `BenchmarkBars.svelte` — reusable benchmark visualization (used by CPU + GPU selectors)
  - `CostSidebar.svelte` — total cost + breakdown
  - `CompatibilityPanel.svelte` — intel report / warnings
  - `CombatRating.svelte` — performance estimate
  - `BuildGuides.svelte` — third-party links
  - `ExportButton.svelte` + `ResetButton.svelte`
- **All components in `src/lib/components/`**

### State Management
- **Approach:** Svelte context API (setContext/getContext)
- **Implementation:** +page.svelte creates build state with $state rune, provides via setContext. Child components read via getContext. No prop drilling for selection state.
- **Pattern:** Create a `src/lib/state/build-context.ts` module that exports typed context helpers (setBuildContext, getBuildContext) to avoid magic string keys.

### Layout
- **Match index.html exactly:** CPU, GPU, Mobo, RAM, Cooling get full-width tactical cards. Storage, Case, PSU share a 3-column compact grid. 4-column layout: 3 cols for components, 1 col for sidebar.

### Compatibility Engine
- **Dedicated module:** `src/lib/compatibility.ts`
- **Pure function:** Takes BuildSelection + ComponentData, returns warnings array with level (error/warn/ok) and message
- **Checks to replicate from index.html:**
  - Socket mismatch (CPU socket ≠ mobo socket)
  - PSU undersized for GPU (5090 needs 1000W+)
  - Air cooler + i9-14900K warning (253W under sustained load)
  - RTX 5090 stock/pricing warning
- **Called reactively via $derived in the context**

### Combat Rating
- **Match index.html 1:1:**
  - `overallPerf = cpuPerf * 0.3 + gpuPerf * 0.7` (GPU-weighted)
  - Thresholds: >93 EXCELLENT (green), >85 STRONG (blue), >75 GOOD (yellow), else ADEQUATE (orange)
  - 4K Native FPS: `gpuPerf * 0.65` to `gpuPerf * 1.1`
  - 160Hz: gpuPerf ≥90 "YES (with DLSS 4 MFG)", ≥80 "SOME TITLES (with DLSS)", else "UNLIKELY"
  - Show raw CPU/GPU perf scores
- **Lives in compatibility module as a pure function**

### Compact Selector Detail Level
- **Match index.html:** Compact cards show name, price, notes, buy links. No benchmarks, no full advice text.

## Code Context
- Types: `src/lib/types.ts` (BuildSelection, ComponentData, all component interfaces)
- Data: `src/lib/data/components.ts` (25 components), `src/lib/data/presets.ts` (3 presets)
- Styles: `src/app.css` has all tactical-card, component-option, badge, benchmark styles already migrated
- Svelte 5 patterns: $state, $derived, $props(), {@render children()}, callback props, NO $effect unless truly unavoidable

## Specifics
- All HTML entities from index.html are already Unicode in the data files (⚠️, ⭐, 💎, etc.)
- Badge classes already in app.css: .warning-badge, .compatible-badge, .value-badge, .danger-badge, .info-badge
- Component selection uses .component-option, .component-option.selected, .component-option.recommended classes (already in app.css)
- Preset buttons use .tactical-card with dynamic border highlighting for active preset

## Deferred
- Export route (`/export`) — Phase 3 will handle this
- GitHub Pages deploy — Phase 4
- No need to wire ExportButton to actual export logic yet — just the button that will link to /export in Phase 3

## Constraints Discovered
- trailingSlash must be exported from +layout.ts (SvelteKit 2 pattern, not config-level)
- Tailwind 4 uses @theme block for design tokens, not tailwind.config.js
- HTML entities converted to Unicode in data files — Svelte renders them directly
