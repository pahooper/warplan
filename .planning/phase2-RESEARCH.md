# Phase 2 Research: Merged Findings

**Date:** 2026-03-08
**Sources:** Internal codebase analysis + External Svelte 5/Tailwind 4 docs

---

## Section 1: Codebase Context

### Existing Data Layer (Phase 1 — No Changes Needed)
- `src/lib/types.ts`: 14 types including BuildSelection, ComponentData, all component interfaces
- `src/lib/data/components.ts`: 25 components, 8 categories, all fields populated
- `src/lib/data/presets.ts`: 3 presets with validated component IDs
- `src/app.css`: All CSS classes already migrated from index.html

### Files Phase 2 Will Touch
- `src/routes/+page.svelte` — REWRITE from scaffold to full composition shell
- `src/lib/components/*.svelte` — 14 NEW components
- `src/lib/state/build-context.ts` — NEW context helpers
- `src/lib/compatibility.ts` — NEW pure logic module

### Reference Implementation Logic
The index.html contains these key functions that must become Svelte reactivity:
1. `renderComponentOption(comp, category, isCompact)` — full vs compact rendering
2. `updateSummary()` — cost, compatibility, combat rating
3. `selectComponent(category, id)` — updates state, clears preset
4. `loadPreset(preset)` — copies preset selections
5. `resetBuild()` — resets to Overlord defaults

## Section 2: Ecosystem Findings

### Svelte 5 Context API
- Use `$state` proxy with `setContext` — children get reactive references
- **CRITICAL:** Do NOT destructure context objects (breaks reactivity)
- Use Symbol keys via typed helper module (`build-context.ts`)
- `$derived` works only in .svelte files — each component computes its own derived values

### Svelte 5 Component Patterns
- `$props()` with explicit TypeScript interface (required for strict mode)
- Callback props replace `createEventDispatcher`: `onselect: (id: string) => void`
- `{@render children?.()}` replaces `<slot>`
- `class:selected={condition}` for conditional CSS classes

### Tailwind CSS 4
- `@theme` block generates utility classes: `text-military-gold`, `bg-military-dark`, etc.
- No tailwind.config.js needed — CSS-native configuration
- `@import 'tailwindcss'` must be first in app.css (already correct)

### State Architecture Decision
**Preferred pattern (avoids $effect):** Context holds raw state only. Each component creates its own `$derived` values from context. CostSidebar computes totalCost, CompatibilityPanel computes warnings, CombatRating computes rating.

**Alternative:** Use `$effect` in +page.svelte to sync derived values into context object. Less clean but centralizes computation.

**Decision:** Use the preferred pattern — no $effect, each component derives what it needs.

## Section 3: Risks and Pitfalls

| Risk | Mitigation |
|------|------------|
| `owned` field only on CPU | Optional chaining: `(comp as any).owned ?? false` or type guard |
| Benchmark key normalization | Utility function: `key.replace(/_/g, ' ').replace(/4k/g, '4K')` |
| Preset prices not in data | Calculate dynamically from component prices |
| Context destructuring breaks reactivity | Never destructure — always `ctx.selections.cpu` |
| $derived only works in .svelte | Each component computes own derived values |
| svelte-check strictness | Use `--fail-on-warnings` flag for QG-1 |

## Section 4: Recommended Approach

### Component Tree
```
+page.svelte (state + context + composition)
├─ Header.svelte
├─ IntelBriefing.svelte
├─ PresetCards.svelte
├─ Main Grid (3+1 cols)
│  ├─ Left (3 cols):
│  │  ├─ CpuSelector.svelte (custom, benchmarks)
│  │  ├─ GpuSelector.svelte (custom, benchmarks)
│  │  ├─ ComponentSelector.svelte × 3 (mobo, ram, cooling)
│  │  └─ CompactSelector.svelte × 3 (storage, case, psu) in 3-col grid
│  └─ Right (1 col sidebar):
│     ├─ CostSidebar.svelte
│     ├─ CompatibilityPanel.svelte
│     ├─ CombatRating.svelte
│     ├─ BuildGuides.svelte
│     ├─ ExportButton.svelte
│     └─ ResetButton.svelte
└─ Footer (inline in +page.svelte)
```

### Task Sizing Strategy
- **Wave 1 (no deps):** Context module + compatibility logic + BenchmarkBars
- **Wave 2 (depends on Wave 1):** Header, IntelBriefing, PresetCards, selectors
- **Wave 3 (depends on Wave 2):** Sidebar components, page composition, footer
