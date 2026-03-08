# Phase 3 Research: /export Route — External Findings

**Date:** 2026-03-08
**Researcher:** GSD Phase Researcher
**Status:** COMPLETE

---

## 1. SvelteKit URL Search Params

**Confidence: HIGH**

### How to Read Search Params

In SvelteKit, `$page` is available from `$app/stores`. In Svelte 5 with runes, you import and use it like this:

```svelte
<script lang="ts">
  import { page } from '$app/state';

  // page.url is reactive in Svelte 5 via $app/state
  // Access search params directly:
  let cpu = $derived(page.url.searchParams.get('cpu') ?? '');
  let gpu = $derived(page.url.searchParams.get('gpu') ?? '');
</script>
```

**Alternative (store-based, Svelte 4 style — still works in 5):**
```svelte
<script lang="ts">
  import { page } from '$app/stores';

  // $page.url.searchParams.get('cpu')
  // Works but is the legacy store pattern
</script>
```

### Key Pattern for This Project

The `BuildSelection` type has keys: `cpu`, `gpu`, `motherboard`, `ram`, `cooling`, `storage`, `case`, `psu`. The export URL would look like:

```
/export/?cpu=r7-9800x3d&gpu=5080&motherboard=x870-tomahawk&ram=ddr5-32gb-6000-cl36&cooling=arctic-360-pro&storage=ssd-2tb-budget&case=corsair-4000d-rs&psu=rm850e
```

### Gotchas
- **`searchParams.get()` returns `string | null`** — always provide fallback with `?? ''`
- **Component IDs must be URL-safe** — the existing IDs (e.g., `r7-9800x3d`, `5070ti`) are already URL-safe, no encoding needed
- **No server-side concern** — with adapter-static, there's no server `load` function processing these params. They're purely client-side

---

## 2. Separate Layout for /export

**Confidence: HIGH**

### Recommended Approach: Route Group with `+page@.svelte`

Since the root `+layout.svelte` is minimal (just imports CSS and renders children), there are two viable approaches:

#### Option A: `+page@.svelte` Layout Reset (RECOMMENDED)

Create `src/routes/export/+page@.svelte` — the `@` with no segment name means "reset to root layout (the one at `src/routes/+layout.svelte`)".

Since the root layout already just does `{@render children()}` with CSS import, this effectively gives the export page a clean slate while still getting `app.css`.

```
src/routes/
├ +layout.svelte          ← root: imports app.css, renders children
├ +layout.ts              ← trailingSlash: 'always', prerender: true
├ +page.svelte            ← main configurator
└ export/
  ├ +page@.svelte         ← resets to root layout (skips any intermediate layouts)
  └ +layout.ts            ← can override prerender settings if needed
```

This is the simplest approach because the root layout is already minimal.

#### Option B: Route Group `(export)/`

```
src/routes/
├ (app)/
│ ├ +layout.svelte        ← app layout (nav, sidebar, etc.)
│ └ +page.svelte          ← main configurator
├ (export)/
│ ├ +layout.svelte        ← minimal export layout
│ └ export/
│   └ +page.svelte
└ +layout.svelte           ← root layout
```

**This is overkill for this project.** Route groups are useful when you have many routes with different layouts. Here we have exactly 2 routes. Option A is cleaner.

#### Option C: Just use `export/+page.svelte` (no reset needed)

Since the root `+layout.svelte` is already minimal (`{@render children()}` + CSS import), a plain `src/routes/export/+page.svelte` already gets a clean layout. The root layout provides CSS — which the export page needs anyway.

**This is actually the simplest correct answer.** No `@` reset needed because there's nothing to reset away from. The root layout is already bare.

### Verdict

**Use Option C** — plain `src/routes/export/+page.svelte`. The root layout only imports CSS and renders children. There's no nav/sidebar in the layout to escape from (that's all in `+page.svelte` of the main route). The export page inherits CSS and renders its own content. Done.

If a shared app layout is added later, refactor to Option A at that point.

### `+layout.ts` Inheritance

The `export/` route will inherit `trailingSlash: 'always'` and `prerender: true` from the root `+layout.ts`. This is correct — the export page should be prerendered (as a static shell) and use trailing slashes.

---

## 3. @media print CSS

**Confidence: HIGH**

### Best Practices for Print Stylesheets

#### Core `@media print` Block

Add to `app.css` or a dedicated section in the export page's `<style>` block:

```css
@media print {
  /* White background, dark text */
  body {
    background: white !important;
    color: black !important;
    font-family: 'Courier Prime', monospace;
  }

  /* Hide interactive/non-print elements */
  .no-print {
    display: none !important;
  }

  /* Remove shadows and decorative borders */
  * {
    box-shadow: none !important;
    text-shadow: none !important;
  }

  /* Ensure links are visible */
  a {
    color: black !important;
    text-decoration: underline;
  }

  /* Prevent page breaks inside components */
  .print-avoid-break {
    break-inside: avoid;
  }
}
```

#### `@page` Directive

Controls print margins and page size:

```css
@page {
  size: letter;          /* or A4 */
  margin: 0.75in;        /* comfortable margins */
}

/* First page can have different margins */
@page :first {
  margin-top: 0.5in;
}
```

#### Svelte Component-Level Print Styles

In the export `+page.svelte`, use a scoped `<style>`:

```svelte
<style>
  @media print {
    /* Scoped to this component */
    .export-container {
      background: white;
      color: black;
    }
  }
</style>
```

### Approach for This Project

Since the export page has a completely different visual treatment for print vs. screen:

1. **Screen view:** Show a "Print this page" button, preview of the briefing in military theme
2. **Print view:** White background, clean typography, no buttons, no decorative elements

```svelte
<!-- Export page -->
<button class="no-print" onclick={() => window.print()}>🖨️ Print Briefing</button>

<div class="briefing">
  <!-- Content renders in both screen and print -->
</div>

<style>
  @media print {
    :global(body) {
      background: white !important;
    }
  }
</style>
```

### Gotchas
- **`:global()` needed** for body styles in scoped Svelte `<style>` blocks
- **`!important` often necessary** in print styles to override inline styles and utility classes
- **Tailwind's `print:` variant** — Tailwind CSS 4 supports `print:hidden`, `print:bg-white`, etc. as utility classes. These work great for element-level control:
  ```html
  <button class="print:hidden">Print</button>
  <div class="bg-military-dark print:bg-white">...</div>
  ```
- **Background colors don't print by default** — browsers strip backgrounds unless user enables "Background graphics". Design for white background in print

---

## 4. Prerendering + Client-Side Search Params

**Confidence: HIGH**

### How adapter-static Handles This

With `prerender: true` and `adapter-static`:

1. **At build time:** SvelteKit generates a static HTML file at `build/export/index.html`
2. **At runtime:** The SvelteKit client-side router hydrates the page
3. **Search params are client-side only** — they're in the URL fragment after `?`, which the browser processes locally

### Why This Works

- The static HTML is a shell. The JS bundle hydrates it.
- `page.url.searchParams` is populated by the browser's `window.location` at runtime
- No server is needed to read `?cpu=r7-9800x3d&gpu=5080`
- This is the exact same pattern as any SPA reading URL params

### Key Config

The project already has `fallback: '404.html'` in the adapter config. This means:
- Known routes (`/`, `/export/`) get prerendered as static HTML
- Unknown routes fall back to 404

Since `/export/` is a real route with a `+page.svelte`, it WILL be prerendered as `build/export/index.html`. The search params are irrelevant to prerendering — they're runtime-only.

### The `prerender` Gotcha That Doesn't Apply

SvelteKit has a concept where `prerender` with `entries` can crawl links to discover pages. Search params create infinite combinations, which could be a problem IF prerendering tried to enumerate them. But it doesn't — SvelteKit only prerenders distinct route paths, not query string variations. `/export/` gets one prerendered page regardless of what params users pass.

### Verification

The existing `svelte.config.js` already has a handler for `/export`:
```js
handleHttpError: ({ path, message }) => {
  if (path.startsWith('/export')) {
    console.warn(`[prerender] Ignoring missing route: ${path}`);
    return;
  }
  throw new Error(message);
}
```
This can be removed once the route exists — it was a placeholder to prevent build errors.

---

## 5. Svelte 5 `$derived` from URL Params

**Confidence: HIGH**

### Pattern: Reactive Derived State from URL

Using `$app/state` (Svelte 5 / SvelteKit 2 module-level reactive page state):

```svelte
<script lang="ts">
  import { page } from '$app/state';
  import { components } from '$lib/data/components';
  import type { BuildSelection, ComponentCategory } from '$lib/types';

  // Derive individual selections from URL params
  const categories: ComponentCategory[] = ['cpu', 'gpu', 'motherboard', 'ram', 'cooling', 'storage', 'case', 'psu'];

  // Derive full build selection from URL params
  let selections = $derived.by(() => {
    const result: Partial<BuildSelection> = {};
    for (const cat of categories) {
      const val = page.url.searchParams.get(cat);
      if (val) result[cat] = val;
    }
    return result as BuildSelection;
  });

  // Derive resolved component objects
  let resolvedComponents = $derived.by(() => {
    return Object.entries(selections).map(([category, id]) => {
      const catData = components[category as ComponentCategory];
      const component = catData?.options.find(o => o.id === id);
      return { category, id, component };
    });
  });

  // Derive total cost
  let totalCost = $derived(
    resolvedComponents.reduce((sum, c) => sum + (c.component?.price ?? 0), 0)
  );
</script>
```

### Why `$app/state` over `$app/stores`

In SvelteKit 2 + Svelte 5, `$app/state` provides the `page` object as a reactive fine-grained state object (using runes under the hood). It's the preferred approach over the legacy `$app/stores` which uses Svelte stores with `$` prefix auto-subscription.

```svelte
<!-- PREFERRED (Svelte 5 / SvelteKit 2) -->
<script>
  import { page } from '$app/state';
  let foo = $derived(page.url.searchParams.get('foo'));
</script>

<!-- LEGACY (still works, but not idiomatic) -->
<script>
  import { page } from '$app/stores';
  $: foo = $page.url.searchParams.get('foo');
</script>
```

### Reactivity on Navigation

When the URL changes (e.g., user clicks browser back, or programmatic `goto('?cpu=different')`), `page.url` updates and all `$derived` values recompute automatically. No manual subscription needed.

### Gotcha: SSR/Prerender vs Client

During prerendering, `page.url.searchParams` will be empty (no query string at build time). The component must handle this gracefully:

```svelte
<script lang="ts">
  import { page } from '$app/state';
  import { browser } from '$app/environment';

  let cpu = $derived(page.url.searchParams.get('cpu') ?? '');

  // Guard for missing params
  let hasValidBuild = $derived(
    Boolean(page.url.searchParams.get('cpu') && page.url.searchParams.get('gpu'))
  );
</script>

{#if !hasValidBuild}
  <p>No build configuration found. Return to the configurator to generate an export link.</p>
{:else}
  <!-- render briefing -->
{/if}
```

The `browser` import can also be used to conditionally render client-only content, but `$derived` with null checks is cleaner here.

---

## Summary & Recommendations

| Topic | Approach | Confidence |
|-------|----------|------------|
| Read URL params | `page` from `$app/state` + `$derived` | HIGH |
| Separate layout | Not needed — root layout is already minimal | HIGH |
| Print CSS | `@media print` in `<style>` + Tailwind `print:` variants + `@page` | HIGH |
| Static + params | Works out of the box — params are client-side runtime | HIGH |
| Derived from params | `$derived.by()` to parse all params into `BuildSelection` | HIGH |

### Implementation File Structure

```
src/routes/export/
├ +page.svelte            ← main export/print page
└ +page.ts                ← (optional) page-level options if needed
```

No layout reset needed. No route groups needed. The root layout already provides CSS-only wrapping.

### URL Encoding Strategy

The `BuildSelection` keys map directly to URL params:
```
/export/?cpu=r7-9800x3d&gpu=5080&motherboard=x870-tomahawk&ram=ddr5-32gb-6000-cl36&cooling=arctic-360-pro&storage=ssd-2tb-budget&case=corsair-4000d-rs&psu=rm850e
```

All existing component IDs are URL-safe (lowercase, hyphens, numbers). No encoding/decoding needed beyond standard `URLSearchParams` handling.

### ExportButton Update

The existing `ExportButton.svelte` (currently a static link to `/export/`) should be updated to generate the URL with search params from the current build state:

```svelte
<script lang="ts">
  import { getBuildContext } from '$lib/state/build-context';
  const build = getBuildContext();

  let exportUrl = $derived.by(() => {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(build.selections)) {
      params.set(key, value);
    }
    return `/export/?${params.toString()}`;
  });
</script>

<a href={exportUrl} target="_blank" class="...">
  📤 EXPORT BUILD
</a>
```
