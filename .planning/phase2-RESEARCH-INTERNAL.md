# Phase 2 Internal Research: Codebase Impact Analysis

**Date:** 2026-03-08

## Executive Summary

Phase 1 delivered a complete data layer (25 components, 8 categories, 3 presets, 14 types) and full CSS infrastructure. Phase 2 creates ~14 Svelte components + logic modules. No existing files need modification except `+page.svelte`. All CSS classes needed are already in `app.css`.

## Key Findings

### Data Layer (Complete, No Changes Needed)
- `src/lib/types.ts`: 14 types, BuildSelection, ComponentData, all component interfaces
- `src/lib/data/components.ts`: 25 components across 8 categories, fully typed
- `src/lib/data/presets.ts`: 3 presets (Vanguard/Overlord/Thunderbolt) with validated IDs

### CSS Infrastructure (Complete, No Changes Needed)
- All tactical-card, component-option, badge, benchmark, alert, source-link styles migrated
- Tailwind 4 @theme tokens defined for military colors and fonts

### Reference Logic to Replicate (from index.html)
1. `renderComponentOption()` → CpuSelector, GpuSelector, ComponentSelector, CompactSelector
2. `updateSummary()` → Reactive $derived in +page.svelte → CostSidebar, CompatibilityPanel, CombatRating
3. `selectComponent()` → Context mutation (clears preset)
4. `loadPreset()` → Copies preset selection, sets activePreset
5. `resetBuild()` → Resets to Overlord defaults
6. Compatibility checks: socket mismatch, PSU undersized, air cooler + 14900K, 5090 needs 1000W+

### Risks Identified
- `owned` field only on CPU — use optional chaining
- Benchmark key normalization (`_` → space, `4k` → `4K`)
- Preset prices need dynamic calculation (not hardcoded)
- Context objects must NOT be destructured (breaks Svelte 5 reactivity)
- $derived works in .svelte files only — each component computes own derived values from context
