# Phase 2 External Research: Implementation Patterns

**Date:** 2026-03-07
**Sources:** context7 (Svelte 5 docs), svelte.dev, tailwindcss.com, GitHub sveltejs/language-tools

---

## 1. Svelte 5 Context API — Typed Reactive Context

### Core API

```typescript
// setContext<T>(key: any, context: T): T
// getContext<T>(key: any): T
// hasContext(key: any): boolean
```

Both must be called during **component initialization** (top-level `<script>` block, not inside event handlers or timeouts).

### Reactive Context Pattern with $state

Pass a `$state` object into `setContext` — child components get a **reactive proxy** automatically. Mutations to the object's properties propagate to all consumers.

```svelte
<!-- +page.svelte (provider) -->
<script lang="ts">
  import { setContext } from 'svelte';
  import type { BuildSelection } from '$lib/types';

  let buildState = $state<{
    selections: BuildSelection;
    activePreset: string | null;
  }>({
    selections: { cpu: '', gpu: '', motherboard: '', ram: '', cooling: '', storage: '', case: '', psu: '' },
    activePreset: null
  });

  setContext('build', buildState);
</script>
```

```svelte
<!-- ChildComponent.svelte (consumer) -->
<script lang="ts">
  import { getContext } from 'svelte';

  // Type parameter ensures type safety
  const build = getContext<{
    selections: BuildSelection;
    activePreset: string | null;
  }>('build');

  // Mutations here propagate everywhere — it's the same proxy
  function selectComponent(category: string, id: string) {
    build.selections[category] = id;
    build.activePreset = null; // clear preset on manual change
  }
</script>
```

### Typed Context Helper Pattern (RECOMMENDED)

Avoid magic string keys with a dedicated module:

```typescript
// src/lib/state/build-context.ts
import { setContext, getContext } from 'svelte';
import type { BuildSelection, ComponentData } from '$lib/types';

// Unique symbol key — impossible to collide
const BUILD_KEY = Symbol('build');

export interface BuildState {
  selections: BuildSelection;
  activePreset: string | null;
}

export function setBuildContext(state: BuildState): BuildState {
  return setContext(BUILD_KEY, state);
}

export function getBuildContext(): BuildState {
  return getContext<BuildState>(BUILD_KEY);
}
```

**Key findings:**
- Symbol keys are idiomatic for avoiding collisions
- `setContext` returns the value passed in (useful for chaining)
- The `$state` proxy is what makes context reactive — without it, context is static
- Deep reactivity: `$state({...})` proxies nested objects recursively, so `selections.cpu = 'x'` triggers updates
- Do NOT destructure the context object — `let { selections } = getContext(...)` breaks reactivity (captures value at assignment time)

### $derived with Context

Child components can create derived values from context:

```svelte
<script lang="ts">
  const build = getBuildContext();
  // Reactive — recalculates when selections change
  let totalCost = $derived(calculateTotalCost(build.selections, componentData));
</script>
```

---

## 2. Callback Props Pattern (Events-as-Props)

Svelte 5 replaces `createEventDispatcher` with **callback props**. Components accept functions as props.

### TypeScript Interface

```typescript
import type { Snippet } from 'svelte';

interface Props {
  // Required callback
  onselect: (id: string) => void;
  // Optional callback
  onreset?: () => void;
  // Snippet prop (slot replacement)
  children?: Snippet;
}

let { onselect, onreset, children }: Props = $props();
```

### Parent-Child Wiring

```svelte
<!-- Parent -->
<ComponentSelector
  category="cpu"
  onselect={(id) => { build.selections.cpu = id; }}
/>

<!-- ComponentSelector.svelte -->
<script lang="ts">
  interface Props {
    category: string;
    onselect: (id: string) => void;
  }
  let { category, onselect }: Props = $props();
</script>

<button onclick={() => onselect(component.id)}>
  Select
</button>
```

**Key findings:**
- Convention: use `on` prefix for callback props (e.g., `onselect`, `onchange`)
- Callbacks are just regular props — no special syntax
- TypeScript catches missing required callbacks at compile time
- For this project: context mutations may be preferable to callback prop drilling for selection state, since all selectors need to write to the same build state

---

## 3. {@render} Snippet Pattern (Slot Replacement)

Svelte 5 replaces `<slot>` with `{@render}` and `{#snippet}`.

### Default Content (children)

```svelte
<!-- Card.svelte -->
<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title: string;
    children?: Snippet;
  }
  let { title, children }: Props = $props();
</script>

<div class="tactical-card">
  <h3>{title}</h3>
  {@render children?.()}
</div>
```

Usage:
```svelte
<Card title="CPU Selection">
  <p>Content goes here</p>
</Card>
```

### Named Snippets with Parameters

```svelte
<!-- ComponentSelector.svelte -->
<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    header: Snippet<[{ count: number }]>;
    children: Snippet;
  }
  let { header, children }: Props = $props();
</script>

{@render header({ count: items.length })}
{@render children()}
```

Usage:
```svelte
<ComponentSelector>
  {#snippet header({ count })}
    <h3>Options ({count})</h3>
  {/snippet}
  <p>Default content</p>
</ComponentSelector>
```

**Key findings:**
- `Snippet` type from `'svelte'` — generic parameter is a tuple of args
- `Snippet` with no type param = no arguments
- `Snippet<[string]>` = one string argument
- Always use `?.()` for optional snippets to avoid runtime errors
- For this project: `children` snippet is sufficient for most components. Named snippets useful if BenchmarkBars needs custom label rendering.

---

## 4. Tailwind CSS 4 @theme Integration

### Already Configured in Project

The project's `src/app.css` already has a working `@theme` block:

```css
@import 'tailwindcss';

@theme {
  --color-military-gold: #d4af37;
  --color-military-dark: #0f1419;
  --color-military-card: #1e3a4c;
  --color-tactical-border: #4a5568;
  --font-display: 'Special Elite', cursive;
  --font-body: 'Courier Prime', monospace;
}
```

This generates utility classes: `text-military-gold`, `bg-military-dark`, `border-tactical-border`, `font-display`, `font-body`.

### Key @theme Rules

| Namespace | Generated Utilities |
|-----------|-------------------|
| `--color-*` | `bg-`, `text-`, `border-`, `ring-`, `fill-`, `stroke-` |
| `--font-*` | `font-display`, `font-body` |
| `--spacing-*` | `p-`, `m-`, `w-`, `h-`, `gap-` |
| `--radius-*` | `rounded-` |
| `--shadow-*` | `shadow-` |
| `--animate-*` | `animate-` |

### Using Theme Variables in Custom CSS

```css
@layer components {
  .tactical-card {
    background: linear-gradient(135deg, var(--color-military-card) 0%, var(--color-military-dark) 100%);
    border: 2px solid var(--color-tactical-border);
  }
}
```

### Gotchas for Svelte + Tailwind CSS 4

1. **No `tailwind.config.js`** — Tailwind 4 uses CSS-native `@theme` blocks instead. The `@tailwindcss/vite` plugin handles scanning.

2. **`@import 'tailwindcss'` must be first** — Before any `@theme` or custom rules in app.css.

3. **Scoped styles interaction** — Svelte's `<style>` block scopes classes by default. Tailwind utility classes applied via `class=` attribute work fine because they're global (defined in app.css). Custom component styles in `<style>` blocks are scoped and won't conflict.

4. **`:global()` usage** — If a component needs to style children rendered by `{@render}`, use `:global()` selector in the component's `<style>` block, or prefer Tailwind utility classes on the elements directly.

5. **Dynamic classes** — Use template literals or conditional expressions, not `class:` directive for Tailwind classes:
   ```svelte
   <div class="tactical-card {isActive ? 'border-military-gold' : 'border-tactical-border'}">
   ```

6. **Vite plugin** — The project uses `@tailwindcss/vite` (v4.2.1), which is the correct Tailwind 4 integration. No PostCSS config needed.

7. **Arbitrary values** — Can reference theme variables: `bg-[var(--color-military-card)]` — but prefer the generated utility names when available.

---

## 5. svelte-check Configuration

### Current Setup

```json
// package.json
"check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json"
```

```json
// tsconfig.json
{
  "extends": "./.svelte-kit/tsconfig.json",
  "compilerOptions": {
    "strict": true,
    // ... other options
  }
}
```

### CLI Flags Reference

| Flag | Purpose |
|------|---------|
| `--tsconfig <path>` | Path to tsconfig.json (already set) |
| `--output human\|human-verbose\|machine\|machine-verbose` | Output format |
| `--watch` | Watch mode for dev |
| `--threshold warning\|error` | Minimum severity to report |
| `--fail-on-warnings` | Exit with error code on warnings (use for CI) |
| `--compiler-warnings <codes>` | Configure specific warnings: `css_unused_selector:ignore,a11y_missing_attribute:error` |
| `--diagnostic-sources js,svelte,css` | Filter which diagnostic sources to show |
| `--workspace <path>` | Workspace root |

### Recommended Check Script for This Project

```json
"check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --fail-on-warnings",
"check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch"
```

The `--fail-on-warnings` flag enforces the QG-1 requirement ("zero errors and zero warnings").

### TypeScript Strict Mode

Already enabled in tsconfig.json (`"strict": true`). This enables:
- `strictNullChecks` — catches nullable access
- `noImplicitAny` — all types must be explicit or inferable
- `strictFunctionTypes` — correct variance checking on callback props

### Common svelte-check Issues in Svelte 5

1. **`$state` type inference** — Explicitly type complex state: `let x = $state<MyType>(initial)` rather than relying on inference for objects.
2. **`$props()` requires interface** — Without an explicit interface, all props are `unknown`. Always define `interface Props { ... }`.
3. **Unused CSS warnings** — Classes defined in `app.css` but only used in components won't trigger unused CSS warnings since they're global. Component-scoped `<style>` blocks will warn on unused selectors.
4. **`$derived` return type** — Inferred from the expression. For complex derivations, the return type of the called function determines the type.

---

## 6. $props() TypeScript Patterns

### Full Pattern for Component Props

```svelte
<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { CpuComponent } from '$lib/types';

  interface Props {
    // Data props
    components: CpuComponent[];
    selectedId: string;
    // Callback props
    onselect: (id: string) => void;
    // Optional props with defaults
    showBenchmarks?: boolean;
    // Snippet props
    children?: Snippet;
    // Rest props for HTML attributes
    [key: string]: unknown;
  }

  let {
    components,
    selectedId,
    onselect,
    showBenchmarks = true,
    children,
    ...restProps
  }: Props = $props();
</script>
```

### Default Values

```typescript
// Defaults are assigned via destructuring, not a separate mechanism
let { count = 0, label = 'default' }: Props = $props();
```

### Bindable Props

If a parent needs two-way binding:
```typescript
import { type Bindable } from 'svelte';

interface Props {
  value: Bindable<string>;
}
```

**For this project:** Two-way binding is NOT needed. Context mutations handle state changes.

---

## 7. Implementation Recommendations for Phase 2

### State Architecture

```
+page.svelte
  ├── Creates $state({ selections, activePreset })
  ├── setContext with typed helper (build-context.ts)
  ├── Composes all child components
  └── Children call getBuildContext() to read/write state

$derived values (in components or context module):
  ├── totalCost — sum of selected component prices
  ├── compatibilityWarnings — from compatibility.ts pure function
  └── combatRating — from combat-rating pure function
```

### File Structure

```
src/lib/
  state/
    build-context.ts          # setBuildContext / getBuildContext typed helpers
  compatibility.ts            # Pure function: (selections, data) => Warning[]
  combat-rating.ts            # Pure function: (cpuPerf, gpuPerf) => Rating
  components/
    Header.svelte
    IntelBriefing.svelte
    PresetCards.svelte
    CpuSelector.svelte
    GpuSelector.svelte
    ComponentSelector.svelte  # Generic full-width selector
    CompactSelector.svelte    # 3-column compact variant
    BenchmarkBars.svelte
    CostSidebar.svelte
    CompatibilityPanel.svelte
    CombatRating.svelte
    BuildGuides.svelte
    ExportButton.svelte
    ResetButton.svelte
```

### Pattern Decision Matrix

| Decision | Pattern | Rationale |
|----------|---------|-----------|
| State sharing | Context + $state proxy | Avoids prop drilling across 14 components |
| Component selection | Context mutation in child | Children call `getBuildContext().selections.cpu = id` directly |
| Preset loading | Callback prop from +page.svelte | Preset logic lives in page, not children |
| Compatibility | $derived in +page.svelte | Reactive, recalculates on any selection change |
| Events | Callback props where needed | TypeScript-friendly, explicit contracts |
| Slots | {@render children?.()} | Svelte 5 pattern, typed via Snippet |
| Styling | Tailwind utilities + app.css classes | Military theme classes already in app.css |

### Potential Gotcha: Context + $derived Placement

`$derived` values that depend on context state should be computed **in the component that needs them**, not stored in the context object itself. Reason: `$derived` is a compile-time rune — it works inside `<script>` blocks, not in plain .ts modules.

**Workaround for shared derived values:** Define them in +page.svelte and either:
1. Add them to the context object (they'll be reactive since the context is a $state proxy), OR
2. Pass them as props to specific components

Option 1 is cleaner for this project since many components need totalCost and compatibility data.

```svelte
<!-- +page.svelte -->
<script lang="ts">
  let buildState = $state({
    selections: { /* ... */ },
    activePreset: null as string | null,
    // These are computed but stored in the reactive proxy
  });

  // Update derived values reactively
  // NOTE: This is one of the rare valid uses of $effect —
  // syncing derived data into a context object that can't use $derived directly
  $effect(() => {
    buildState.totalCost = calculateTotalCost(buildState.selections, componentData);
    buildState.warnings = checkCompatibility(buildState.selections, componentData);
    buildState.rating = calculateRating(buildState.selections, componentData);
  });

  setContext('build', buildState);
</script>
```

**Alternative (preferred, avoids $effect):** Make the context object contain the raw state, and let each component compute its own derived values from context. CostSidebar computes totalCost, CompatibilityPanel computes warnings, CombatRating computes rating. This keeps $effect out entirely.

---

## Sources

- [Svelte 5 Context API](https://svelte.dev/docs/svelte/context) — setContext/getContext patterns
- [Svelte 5 $state Rune](https://svelte.dev/docs/svelte/$state) — deep reactivity, proxy behavior
- [Svelte 5 TypeScript](https://svelte.dev/docs/svelte/typescript) — $props interface, Snippet typing
- [Svelte 5 Migration Guide](https://svelte.dev/docs/svelte/v5-migration-guide) — callback props, snippet patterns
- [SvelteKit Static Adapter](https://svelte.dev/docs/kit/adapter-static) — configuration
- [Tailwind CSS 4 @theme](https://tailwindcss.com/docs/theme) — design tokens, namespace conventions
- [svelte-check CLI](https://svelte.dev/docs/cli/sv-check) — flags, threshold, fail-on-warnings
- [sveltejs/language-tools](https://github.com/sveltejs/language-tools/blob/master/packages/svelte-check/README.md) — svelte-check README
