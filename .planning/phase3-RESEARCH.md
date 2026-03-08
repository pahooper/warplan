# Phase 3 Research: Export Route (Merged)

**Date:** 2026-03-08
**Requirement:** TS-7 — User can export their build as a printable WWII-themed briefing document at /export route

---

## Section 1: Codebase Context (Internal)

### Route Structure
- Root `+layout.svelte` is minimal: CSS import + `{@render children()}` — no app chrome
- `trailingSlash: 'always'` and `prerender: true` in `+layout.ts`
- `svelte.config.js` has `handleHttpError` guard for `/export` — remove once route exists
- Export route is just `src/routes/export/+page.svelte` — no layout reset needed

### Build State
- `BuildState { selections: BuildSelection; activePreset: string | null }` via context API
- `BuildSelection = { [K in ComponentCategory]: string }` — 8 category→ID mappings
- Context doesn't cross routes — URL params carry state to /export

### Data Access Patterns
- `components` from `$lib/data/components` — lookup by `components[category].find(c => c.id === id)`
- `presets` from `$lib/data/presets` — array of PresetConfig, match by ID
- `calculateCombatRating(cpuPerf4k, gpuPerf4k)` from `$lib/compatibility` — pure function
- CPU `owned: boolean` flag controls resale intelligence section visibility

### Key Fields for Briefing
- All components: `name`, `price`, `buyLinks[0].store`
- CPU: `owned`, `perf4k`, `socket`
- GPU: `perf4k`, `benchmarks` (Record<string, number>), `vram`
- Presets: `name` (e.g., "Operation: Vanguard"), `tier`

---

## Section 2: Ecosystem Findings (External)

### URL Params in SvelteKit 2 + Svelte 5
- Use `page` from `$app/state` (not `$app/stores`) — Svelte 5 idiomatic
- `$derived(page.url.searchParams.get('cpu') ?? '')` for reactive param reading
- `$derived.by()` for complex derivations (building full BuildSelection from params)
- All component IDs already URL-safe — no encoding needed

### Layout Strategy
- No separate layout needed — root layout is already bare
- Plain `src/routes/export/+page.svelte` inherits CSS and gets a clean slate

### Print CSS
- `@media print` blocks with `:global(body)` for body-level overrides
- `@page { size: letter; margin: 0.75in; }` for page control
- Tailwind `print:` variant available (`print:hidden`, `print:bg-white`)
- Backgrounds don't print by default — design for white in print mode

### Static + Search Params
- adapter-static prerenders `/export/` as static HTML shell
- Search params are purely client-side runtime — no build-time concern
- Must handle empty params during prerender (show fallback message)

---

## Section 3: Risks and Pitfalls

1. **Empty params at prerender time** — `page.url.searchParams` empty during SSR. Must guard with `hasValidBuild` check and show fallback.
2. **`:global()` needed for body print styles** — Svelte scopes `<style>` by default. Body-level print overrides require `:global(body)`.
3. **Print backgrounds** — Browsers strip backgrounds by default. The briefing design must work on white background in print. The reference HTML already handles this with a full `@media print` block.
4. **handleHttpError guard removal** — The `svelte.config.js` guard for `/export` should be removed once the route exists to avoid masking real errors.

---

## Section 4: Recommended Approach

### File Structure
```
src/routes/export/
  +page.svelte    ← main export/briefing page
```

### ExportButton Update Pattern
```svelte
<script lang="ts">
  import { getBuildContext } from '$lib/state/build-context';
  const build = getBuildContext();
  let exportUrl = $derived.by(() => {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(build.selections)) {
      params.set(key, value);
    }
    if (build.activePreset) params.set('preset', build.activePreset);
    return `/export/?${params.toString()}`;
  });
</script>
<a href={exportUrl} target="_blank" ...>📤 EXPORT BUILD</a>
```

### Export Page Pattern
```svelte
<script lang="ts">
  import { page } from '$app/state';
  import { components } from '$lib/data/components';
  import { presets } from '$lib/data/presets';
  import { calculateCombatRating } from '$lib/compatibility';
  import type { BuildSelection, ComponentCategory } from '$lib/types';

  const categories: ComponentCategory[] = ['cpu', 'gpu', 'motherboard', 'ram', 'cooling', 'storage', 'case', 'psu'];

  let selections = $derived.by(() => {
    const result: Record<string, string> = {};
    for (const cat of categories) {
      result[cat] = page.url.searchParams.get(cat) ?? '';
    }
    return result as BuildSelection;
  });

  let hasValidBuild = $derived(
    Boolean(page.url.searchParams.get('cpu') && page.url.searchParams.get('gpu'))
  );
</script>
```

### Reference HTML Structure (from index.html exportBuild function)
The briefing document has these sections:
1. **Header** — Stars, operation name, "Tactical Build Configuration", classified stamp
2. **Meta grid** — Operative (LANGLEY), Date, Objective (4K@160Hz), Theater
3. **Hardware Manifest** — 8 rows: category label, component name, store, price/OWNED
4. **Total Deployment Cost** — double gold border, large total
5. **Resale Intelligence** — conditional: only when CPU ≠ i9-14900k
6. **Combat Assessment** — 3-stat grid + GPU benchmark bars
7. **Footer** — "Uncle Phil ❤️", sources, prices, date
8. **Print Orders button** — fixed position, hidden in print
