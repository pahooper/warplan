# SvelteKit 2 + Svelte 5 + adapter-static: Research Findings

**Date:** 2026-03-07
**Purpose:** Technical research for building a static site deployed to GitHub Pages
**Stack:** SvelteKit 2, Svelte 5, Tailwind CSS v4, adapter-static, TypeScript

---

## 1. SvelteKit 2 + adapter-static Setup for GitHub Pages

### Installation

```bash
npx sv create my-project   # select Svelte 5, TypeScript
cd my-project
npm install @sveltejs/adapter-static
```

### svelte.config.js — GitHub Pages Configuration

```javascript
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',        // output directory for HTML
      assets: 'build',       // output directory for static assets
      fallback: '404.html',  // SPA fallback — GitHub Pages serves this for unknown routes
      precompress: false,     // gzip/brotli precompression (GitHub Pages doesn't use these)
      strict: true            // fail build if any pages aren't prerenderable
    }),
    paths: {
      // Empty in dev, repo name in production
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
    }
  }
};

export default config;
```

### Enable Prerendering Globally

In `src/routes/+layout.js` (or `.ts`):

```javascript
export const prerender = true;
```

This tells SvelteKit to prerender ALL pages at build time — required for adapter-static to work as a fully static site.

### GitHub Actions Deploy Workflow

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: 'main'

jobs:
  build_site:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm i

      - name: build
        env:
          BASE_PATH: '/${{ github.event.repository.name }}'
        run: npm run build

      - name: Upload Artifacts
        uses: actions/upload-pages-artifact@v3
        with:
          path: 'build/'

  deploy:
    needs: build_site
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 2. Svelte 5 Runes — Current API and Patterns

Svelte 5 replaces the old `$:` reactive declarations and `let` exports with **runes** — compiler directives that start with `$`.

### $state — Reactive State

```svelte
<script lang="ts">
  let count = $state(0);
  let user = $state({ name: 'Phil', score: 42 });

  // Deep reactivity: mutations are tracked automatically via Proxy
  function updateName() {
    user.name = 'Updated'; // This triggers reactivity — no reassignment needed
  }
</script>
```

**Key behaviors:**
- `$state` wraps values in a deep reactive Proxy
- Object/array mutations are tracked automatically (push, splice, property assignment)
- Primitives trigger on reassignment

### $state.raw — Opt-Out of Deep Reactivity

```svelte
<script lang="ts">
  // Only reassignment triggers reactivity, NOT mutation
  let items = $state.raw([1, 2, 3]);

  // This does NOT trigger updates:
  items.push(4);

  // This DOES trigger updates:
  items = [...items, 4];
</script>
```

**Use cases:** Large datasets, immutable data patterns, values from external libraries that shouldn't be proxied.

### $state.snapshot — Static Clone

```svelte
<script lang="ts">
  let data = $state({ nested: { value: 42 } });

  function logSnapshot() {
    // Get a non-reactive clone for logging, serialization, etc.
    const snap = $state.snapshot(data);
    console.log(snap); // plain object, no Proxy
  }
</script>
```

### $derived — Computed/Derived State

```svelte
<script lang="ts">
  let firstName = $state('John');
  let lastName = $state('Doe');

  // Simple expression
  let fullName = $derived(`${firstName} ${lastName}`);

  // Complex derivation with $derived.by()
  let expensiveResult = $derived.by(() => {
    // multi-statement computation
    const parts = [firstName, lastName].filter(Boolean);
    return parts.join(' ');
  });
</script>
```

**Rules:**
- `$derived` takes a single expression
- `$derived.by()` takes a function body for multi-line logic
- Derived values are lazy — only recomputed when read AND dependencies changed

### $effect — Side Effects

```svelte
<script lang="ts">
  let count = $state(0);

  $effect(() => {
    // Runs when count changes (dependencies auto-tracked)
    document.title = `Count: ${count}`;

    // Return a cleanup function (like React useEffect cleanup)
    return () => {
      console.log('cleaning up previous effect');
    };
  });
</script>
```

**Critical rules for $effect:**
1. **Do NOT use $effect to synchronize state** — use `$derived` instead
2. $effect runs **after** DOM updates
3. `$effect.pre()` runs **before** DOM updates (use sparingly, known consistency issues)
4. Effects are automatically cleaned up when the component is destroyed
5. Dependencies are tracked at runtime, not statically — only values read during the last execution are tracked
6. **Avoid setting $state inside $effect** — this often indicates you should use $derived instead

### $effect.pre — Pre-DOM-Update Effects

```svelte
<script lang="ts">
  let messages = $state<string[]>([]);

  $effect.pre(() => {
    // Runs before DOM update — useful for scroll position preservation
    // But use sparingly; known to be inconsistent in edge cases
  });
</script>
```

---

## 3. Tailwind CSS v4 Integration with SvelteKit 2

**IMPORTANT: Tailwind v4 is a major architectural shift.** No more `tailwind.config.js`, no PostCSS plugin, no `@tailwind` directives. Everything is CSS-native and Vite-first.

### Installation

```bash
npm install tailwindcss @tailwindcss/vite
```

### vite.config.ts

```typescript
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),   // MUST come before sveltekit()
    sveltekit(),
  ],
});
```

### src/app.css

```css
@import "tailwindcss";
```

That's it. No `@tailwind base; @tailwind components; @tailwind utilities;` — those are gone in v4.

### src/routes/+layout.svelte

```svelte
<script>
  import "../app.css";
  let { children } = $props();
</script>

{@render children()}
```

### Theme Customization (CSS-native, replaces tailwind.config.js)

```css
/* src/app.css */
@import "tailwindcss";

@theme {
  --color-brand: #3b82f6;
  --color-brand-dark: #1d4ed8;
  --font-display: "Inter", sans-serif;
  --breakpoint-3xl: 1920px;
}
```

### Using Tailwind in Svelte Component `<style>` Blocks

```svelte
<style lang="postcss">
  @reference "tailwindcss";

  :global(html) {
    background-color: theme(--color-gray-100);
  }
</style>
```

**Key v4 differences from v3:**
| Aspect | Tailwind v3 | Tailwind v4 |
|--------|------------|------------|
| Config | `tailwind.config.js` (JS) | `@theme` in CSS |
| Build tool | PostCSS plugin | Vite plugin (`@tailwindcss/vite`) |
| Import | `@tailwind base/components/utilities` | `@import "tailwindcss"` |
| Theme access in `<style>` | `theme('colors.gray.100')` | `theme(--color-gray-100)` |
| Additional config files | `postcss.config.js` required | Not needed |
| Style block reference | N/A | `@reference "tailwindcss"` |

---

## 4. Component Composition Patterns in Svelte 5

### Pattern 1: Children (Default Slot Replacement)

```svelte
<!-- Button.svelte -->
<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    variant?: 'primary' | 'secondary';
  }

  let { children, variant = 'primary' }: Props = $props();
</script>

<button class="btn btn-{variant}">
  {@render children()}
</button>
```

```svelte
<!-- Usage -->
<Button variant="primary">Click me</Button>
```

### Pattern 2: Optional Children with Fallback

```svelte
<!-- Card.svelte -->
<script lang="ts">
  import type { Snippet } from 'svelte';

  let { children }: { children?: Snippet } = $props();
</script>

<div class="card">
  {#if children}
    {@render children()}
  {:else}
    <p>Default card content</p>
  {/if}
</div>
```

### Pattern 3: Named Snippets as Props (Replaces Named Slots)

```svelte
<!-- Table.svelte -->
<script lang="ts" generics="T">
  import type { Snippet } from 'svelte';

  let { data, header, row }: {
    data: T[];
    children: Snippet;
    header: Snippet;
    row: Snippet<[T]>;
  } = $props();
</script>

<table>
  <thead>
    <tr>{@render header()}</tr>
  </thead>
  <tbody>
    {#each data as item}
      <tr>{@render row(item)}</tr>
    {/each}
  </tbody>
</table>
```

```svelte
<!-- Usage: snippets declared inside component tags -->
<Table data={fruits}>
  {#snippet header()}
    <th>Fruit</th>
    <th>Qty</th>
  {/snippet}

  {#snippet row(d)}
    <td>{d.name}</td>
    <td>{d.qty}</td>
  {/snippet}
</Table>
```

### Pattern 4: Callback Props for Events (Replaces createEventDispatcher)

```svelte
<!-- Pump.svelte -->
<script lang="ts">
  let { oninflate, ondeflate }: {
    oninflate: (power: number) => void;
    ondeflate: (power: number) => void;
  } = $props();

  let power = $state(5);
</script>

<button onclick={() => oninflate(power)}>inflate</button>
<button onclick={() => ondeflate(power)}>deflate</button>
```

### Pattern 5: Event Forwarding via Callback Props

```svelte
<!-- WrappedButton.svelte -->
<script lang="ts">
  let { onclick, children }: {
    onclick?: (e: MouseEvent) => void;
    children: Snippet;
  } = $props();
</script>

<button {onclick}>
  {@render children()}
</button>
```

### Pattern 6: Snippet Defined at Top-Level, Exported (Svelte 5.5.0+)

```svelte
<script module>
  export { greeting };
</script>

{#snippet greeting(name)}
  <h1>Hello, {name}!</h1>
{/snippet}
```

---

## 5. Typing Component Props in Svelte 5 with TypeScript

### Inline Type Annotation

```svelte
<script lang="ts">
  let { adjective }: { adjective: string } = $props();
</script>
```

### Interface Pattern (Recommended)

```svelte
<script lang="ts">
  interface Props {
    title: string;
    count?: number;         // optional
    variant?: 'a' | 'b';   // union type with default below
  }

  let { title, count = 0, variant = 'a' }: Props = $props();
</script>
```

### With Snippets

```svelte
<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    data: string[];
    children: Snippet;
    row: Snippet<[string]>;
    footer?: Snippet;       // optional snippet
  }

  let { data, children, row, footer }: Props = $props();
</script>
```

### Generics

```svelte
<script lang="ts" generics="T">
  import type { Snippet } from 'svelte';

  interface Props {
    items: T[];
    renderItem: Snippet<[T]>;
  }

  let { items, renderItem }: Props = $props();
</script>

{#each items as item}
  {@render renderItem(item)}
{/each}
```

### Wrapper Components (Extending Native Elements)

Use `svelte/elements` for native element prop types:

```svelte
<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  interface Props extends HTMLButtonAttributes {
    variant?: 'primary' | 'secondary';
    children: Snippet;
  }

  let { variant = 'primary', children, ...rest }: Props = $props();
</script>

<button class="btn-{variant}" {...rest}>
  {@render children()}
</button>
```

### Rest Props / Spread

```svelte
<script lang="ts">
  let { class: className, ...rest }: { class?: string; [key: string]: any } = $props();
</script>

<div class={className} {...rest}></div>
```

---

## 6. Static Prerendering with Multiple Routes

### File-Based Routing Structure

```
src/routes/
  +layout.svelte        # root layout (imports app.css)
  +layout.js            # export const prerender = true (enables for all pages)
  +page.svelte          # / (home)
  about/
    +page.svelte        # /about
  blog/
    +page.svelte        # /blog (list)
    [slug]/
      +page.svelte      # /blog/my-post (dynamic)
      +page.js          # load function provides data + entries for prerendering
```

### Prerendering Dynamic Routes

For dynamic routes like `[slug]`, you must tell SvelteKit which pages to generate:

```typescript
// src/routes/blog/[slug]/+page.ts
import type { PageLoad } from './$types';

export const prerender = true;

// Tell adapter-static which slugs to build
export function entries() {
  return [
    { slug: 'first-post' },
    { slug: 'second-post' },
    { slug: 'third-post' }
  ];
}

export const load: PageLoad = async ({ params }) => {
  // Load post data based on params.slug
  const post = await getPost(params.slug);
  return { post };
};
```

### Per-Route Prerender Control

```typescript
// src/routes/api-page/+page.js
export const prerender = false; // skip this page (won't work with strict: true)

// src/routes/static-page/+page.js
export const prerender = true;  // explicitly prerender
```

### Layout-Level Configuration

Options cascade from layouts to child pages:

```typescript
// src/routes/+layout.js — applies to ALL routes
export const prerender = true;
export const ssr = true;
export const csr = true;
```

Individual pages can override:

```typescript
// src/routes/special/+page.js
export const prerender = false; // override layout default
```

---

## 7. Gotchas: adapter-static + GitHub Pages

### Base Path is Critical

GitHub Pages serves repos at `https://username.github.io/repo-name/`. Without setting `base`, all internal links and asset references break.

```javascript
// svelte.config.js
kit: {
  paths: {
    base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
  }
}
```

Then in the GitHub Action:
```yaml
env:
  BASE_PATH: '/${{ github.event.repository.name }}'
```

**In code**, always use the `base` import for links:

```svelte
<script>
  import { base } from '$app/paths';
</script>

<a href="{base}/about">About</a>
<img src="{base}/images/logo.png" alt="Logo" />
```

### 404 Handling

GitHub Pages only supports a single `404.html` at the root. Configure adapter-static:

```javascript
adapter({
  fallback: '404.html'
})
```

Create a custom 404 page:

```svelte
<!-- src/routes/+error.svelte -->
<script>
  import { page } from '$app/state';
</script>

<h1>{page.status}</h1>
<p>{page.error?.message ?? 'Page not found'}</p>
```

**Caveat:** GitHub Pages returns a 200 status for `404.html` served as SPA fallback. True 404 status codes only come from GitHub's own 404 handling (when no `404.html` exists or for completely unknown paths).

### No Server-Side Logic

adapter-static generates pure HTML/CSS/JS. These features do NOT work:
- `+page.server.js` / `+page.server.ts` (server-only load functions)
- `+server.js` API routes
- Form actions (`+page.server.js` `actions`)
- Any `$env/dynamic/private` usage
- `cookies`, `setHeaders` in load functions

Use `+page.js` / `+page.ts` for universal load functions only.

### strict Mode

With `strict: true` (default), the build fails if any page can't be prerendered. This is a safety net — it catches accidental use of server-only features. Set `strict: false` only if you intentionally have non-prerenderable pages (which won't be included in the static build).

### Trailing Slashes

GitHub Pages behavior with trailing slashes can cause issues. Configure explicitly:

```javascript
// svelte.config.js
kit: {
  trailingSlash: 'always' // or 'never' — pick one and be consistent
}
```

`'always'` generates `about/index.html` (works well with GitHub Pages).
`'never'` generates `about.html` (may cause issues with GH Pages directory handling).

**Recommendation:** Use `trailingSlash: 'always'` for GitHub Pages.

### .nojekyll File

GitHub Pages processes files through Jekyll by default, which ignores files/folders starting with `_`. SvelteKit outputs `_app/` for its assets. Add a `.nojekyll` file to the static directory:

```bash
touch static/.nojekyll
```

This file gets copied to `build/` and tells GitHub Pages to skip Jekyll processing.

### Asset References in CSS

If you reference images or fonts from CSS, use relative paths or the `base` path. Absolute paths (`/images/...`) will resolve to the domain root, NOT your repo's base path.

### SPA Mode vs Full Static

Two valid approaches:
1. **Full prerender** (`prerender = true` globally, no `fallback`) — every page is a real HTML file. Best for SEO, fastest initial load.
2. **SPA with fallback** (`fallback: '404.html'`) — prerender what you can, fall back to client-side routing for unknown routes. Useful for dynamic paths you can't enumerate at build time.

For a mostly-static site, prefer full prerender. Only add `fallback` if you need SPA behavior for some routes.

---

## Summary: Project Setup Checklist

1. `npx sv create` with Svelte 5 + TypeScript
2. `npm install @sveltejs/adapter-static tailwindcss @tailwindcss/vite`
3. Configure `svelte.config.js` with adapter-static + base path
4. Configure `vite.config.ts` with `tailwindcss()` plugin before `sveltekit()`
5. Create `src/app.css` with `@import "tailwindcss"`
6. Create `src/routes/+layout.svelte` importing `app.css`, rendering `children`
7. Create `src/routes/+layout.js` with `export const prerender = true`
8. Add `static/.nojekyll`
9. Set `trailingSlash: 'always'` in config
10. Use `{base}` from `$app/paths` for all internal links
11. Add GitHub Actions workflow for deploy

---

## Sources

- [SvelteKit adapter-static docs](https://svelte.dev/docs/kit/adapter-static)
- [SvelteKit configuration docs](https://svelte.dev/docs/kit/configuration)
- [SvelteKit page options / prerendering](https://svelte.dev/docs/kit/page-options)
- [Svelte 5 $state rune](https://svelte.dev/docs/svelte/$state)
- [Svelte 5 $derived rune](https://svelte.dev/docs/svelte/$derived)
- [Svelte 5 $effect rune](https://svelte.dev/docs/svelte/$effect)
- [Svelte 5 snippets](https://svelte.dev/docs/svelte/snippet)
- [Svelte 5 migration guide](https://svelte.dev/docs/svelte/v5-migration-guide)
- [Tailwind CSS v4 SvelteKit guide](https://tailwindcss.com/docs/guides/sveltekit)
- [Tailwind CSS v4 installation](https://tailwindcss.com/docs)
- [Svelte CLI Tailwind integration](https://svelte.dev/docs/cli/tailwind)
