# warplan — Svelte 5 Conversion

## Vision

WWII strategy game-themed gaming PC configurator for Langley. Static site with researched, sourced component data. Originally a single HTML file — converting to composable SvelteKit architecture for maintainability and data-driven updates.

**Target:** 4K @ 160Hz AAA single-player gaming.

## Tech Stack

- **Framework:** SvelteKit 2 + Svelte 5 (runes)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript (strict)
- **Build:** Vite
- **Adapter:** @sveltejs/adapter-static
- **Deployment:** GitHub Pages (static)
- **Package Manager:** bun

## Architecture Principles

- **Lean pages:** +layout.svelte and +page.svelte are thin shells that compose components
- **Component composition:** Each UI section is a dedicated Svelte component
- **Typed data layer:** All component data in TypeScript modules with strict interfaces
- **No runtime dependencies:** Zero JS framework beyond Svelte — no UI libraries, no state managers
- **Static output:** `npm run build` produces a complete static site

## Design Language

WWII tactical/military briefing aesthetic:
- Dark backgrounds, military gold (#d4af37) accents
- "Operation" naming for build tiers (Vanguard / Overlord / Thunderbolt)
- Classified document styling, "FOR LANGLEY'S EYES ONLY"
- Special Elite (headers) + Courier Prime (body) fonts

## Routes

- `/` — Main configurator dashboard
- `/export` — Printable build briefing (separate route, own layout)

## Data Flow

- Component data: `src/lib/data/components.ts`
- Preset configs: `src/lib/data/presets.ts`
- Types: `src/lib/types.ts`
- Build state: Svelte 5 `$state` runes in page-level reactive state
- No stores needed — props down, events up

## Quality Gates

- Every Svelte file must pass `bun run check` (`svelte-check`) with zero errors/warnings before committing
- Every Svelte file must be run through Svelte MCP autofix before committing

## Constraints

- Must be a 100% visual recreation of the current index.html
- NVIDIA GPUs only
- All prices as of March 2026
- Every component must cite review/benchmark sources
- Every component must link to real purchase pages
- Export route must be printable (Cmd+P / Ctrl+P ready)

## Out of Scope

- Live price tracking or APIs
- User accounts or saved builds
- Backend or database
- Mobile app
- Admin UI — updates happen in source TypeScript files
