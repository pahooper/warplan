# Phase 1 Plan Check Report

**Date:** 2026-03-07
**Phase:** Phase 1 — Scaffold & Data Schema
**Plans checked:** phase1-1-PLAN.md, phase1-2-PLAN.md, phase1-3-PLAN.md
**Requirements assigned:** TS-10, DIFF-3

---

## Dimension Analysis

### 1. REQUIREMENT COVERAGE

**Phase 1 requirements per ROADMAP.md:** TS-10, DIFF-3

| Requirement | Description | Covered By | Status |
|-------------|-------------|------------|--------|
| TS-10 | +layout.svelte and +page.svelte are lean shells that compose dedicated Svelte components | Task 1 (creates lean +layout.svelte and +page.svelte) | COVERED |
| DIFF-3 | All component data is typed with strict TypeScript interfaces enforcing price, sources, buyLinks, notes, advice | Task 2 (types.ts + components.ts) | COVERED |

**Verdict:** All Phase 1 requirements are covered.

### 2. TASK COMPLETENESS

| Task | name | files | action | verify | done | must_haves | Status |
|------|------|-------|--------|--------|------|------------|--------|
| 1 | Yes | Yes | Yes (detailed 12 steps) | Yes (runnable) | Yes | Yes (truths, artifacts, key_links) | OK |
| 2 | Yes | Yes | Yes (detailed steps) | Yes (runnable) | Yes | Yes (truths, artifacts, key_links) | OK |
| 3 | Yes | Yes | Yes (detailed steps) | Yes (runnable) | Yes | Yes (truths, artifacts, key_links) | OK |

**Verdict:** All tasks have complete XML fields with substantive content.

### 3. DEPENDENCY CORRECTNESS

| Task | Depends On | Valid? | Logical? |
|------|-----------|--------|----------|
| 1 | (none) | Yes | Yes — scaffold must come first |
| 2 | 1 | Yes | Yes — needs project structure to create types/data |
| 3 | 2 | Yes | Yes — presets reference component IDs from task 2 |

No circular dependencies. Chain is linear: 1 → 2 → 3.

**Verdict:** Clean.

### 4. KEY LINKS (Wiring)

| Created File | Consumed By | Status |
|--------------|-------------|--------|
| package.json, svelte.config.js, vite.config.ts (Task 1) | SvelteKit build system | OK — framework wiring |
| src/app.css (Task 1) | +layout.svelte imports it (Task 1 key_links) | OK |
| src/app.html (Task 1) | SvelteKit framework | OK |
| src/routes/+layout.svelte (Task 1) | SvelteKit framework renders children | OK |
| src/routes/+layout.ts (Task 1) | SvelteKit prerender config | OK |
| src/routes/+page.svelte (Task 1) | SvelteKit renders as / route | OK |
| src/lib/types.ts (Task 2) | components.ts imports types (Task 2 key_links) | OK |
| src/lib/data/components.ts (Task 2) | presets.ts imports components (Task 3 key_links) | OK |
| src/lib/data/presets.ts (Task 3) | **Phase 2 components** | OK — expected to be consumed in Phase 2 |

**Verdict:** No orphan creations. All files have consumers.

### 5. SCOPE SANITY

| Task | File Count | Status |
|------|-----------|--------|
| 1 | 10 files | **BLOCKER** — 10 files is well above the 5-file limit |
| 2 | 2 files | OK |
| 3 | 1 file | OK |

**Task overlap check:** No two tasks duplicate work. Task 1 is scaffold, Task 2 is types+data, Task 3 is presets.

**Verdict:** Task 1 is a scope blocker at 10 files.

### 6. VERIFICATION CONCRETENESS

| Task | Verify Command | Runnable? | Status |
|------|---------------|-----------|--------|
| 1 | `cd ... && npm run build 2>&1 \| tail -5 && echo "BUILD OK" && npx tsc --noEmit 2>&1 \| tail -5` | Yes | OK |
| 2 | `cd ... && npx tsc --noEmit && npx tsx -e "import { components } ..."` | Yes | OK |
| 3 | `cd ... && npx tsc --noEmit && npx tsx -e "import { presets, presetOrder } ..."` | Yes | OK |

All verify steps are concrete, runnable shell commands.

**Verdict:** Clean.

### 7. CONTEXT COMPLIANCE

**Locked decisions from research:**
- Tailwind v4 via `@tailwindcss/vite` (not PostCSS) → Task 1 respects this ✓
- `@import "tailwindcss"` not `@tailwind` directives → Task 1 respects this ✓
- adapter-static with `prerender = true` → Task 1 respects this ✓
- `tailwindcss()` plugin BEFORE `sveltekit()` → Task 1 respects this ✓
- `trailingSlash: 'always'` → Task 1 respects this ✓
- `.nojekyll` file → Task 1 includes this ✓
- Svelte 5 runes (`$props()`, `$state`, etc.) → Task 1 uses `$props()` in layout ✓

**Deferred items (Phase 2+):**
- No component UI built → Correct, +page.svelte is placeholder only ✓
- No state management for selections → Correct, BuildSelection type defined but not used ✓
- No compatibility engine → Correct ✓
- No export route → Correct ✓

**Anti-features:**
- ANTI-1 (no SSR, static only) → adapter-static configured ✓
- ANTI-2 (no DB/CMS) → data in TS files ✓
- ANTI-3 (no admin UI) → not built ✓
- ANTI-4 (no external runtime deps) → only Svelte/SvelteKit deps ✓

**Verdict:** Clean.

### 8. must_haves VERIFICATION

**Task 1:**
- truths: 6 items, all testable (dev server starts, TS strict, Tailwind classes work, adapter-static configured, fonts loaded) ✓
- artifacts: 9 items, all list specific file paths ✓
- key_links: 4 items, all describe concrete import/dependency connections ✓

**Task 2:**
- truths: 11 items, all testable (categories exist, no `any`, specific fields required per component type) ✓
- artifacts: 2 items with specific paths and export names ✓
- key_links: 2 items describing concrete import relationships ✓

**Task 3:**
- truths: 5 items, all testable (3 presets, 8 categories mapped, IDs validated) ✓
- artifacts: 1 item with specific path and export names ✓
- key_links: 3 items describing concrete import relationships and data lineage ✓

**Verdict:** Clean.

---

## Issues

```yaml
issues:
  - plan: "phase1-1-PLAN.md"
    dimension: "SCOPE_SANITY"
    severity: blocker
    description: "Task 1 touches 10 files (package.json, svelte.config.js, vite.config.ts, tsconfig.json, src/app.css, src/app.html, src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/+page.svelte, static/.nojekyll). Limit is 5 files max."
    fix_hint: "Split into two tasks: Task 1A (project init: package.json, svelte.config.js, vite.config.ts, tsconfig.json, static/.nojekyll) and Task 1B (app shell + styling: src/app.css, src/app.html, src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/+page.svelte). Task 1B depends on 1A."

  - plan: "phase1-2-PLAN.md"
    dimension: "VERIFICATION_CONCRETENESS"
    severity: warning
    description: "The verify command for Task 2 uses `any` cast in the tsx validation script (`const total = Object.values(components).reduce((s: number, a: any[]) => s + a.length, 0)`). This contradicts the task's own truth that zero `any` casts are allowed. The verify script itself should be cleanly typed or use a simpler length check."
    fix_hint: "Replace the reduce with a simpler check: `Object.entries(components).forEach(([k, v]) => console.log(k, v.length))` — no `any` needed."

  - plan: "phase1-2-PLAN.md"
    dimension: "SCOPE_SANITY"
    severity: warning
    description: "Task 2 creates types.ts AND the full components.ts data extraction from index.html. The data extraction is the single largest task in Phase 1 (manually transcribing every component from HTML). While only 2 files, the effort mass is heavily concentrated here — a soft monolith risk."
    fix_hint: "Acceptable as-is since file count is 2, but executor should be warned this task will take significantly longer than others. Consider adding an intermediate verify checkpoint (e.g., 'after first 4 categories, run tsc to catch issues early')."
```

---

## Final Verdict

```yaml
status: ISSUES_FOUND
blocker_count: 1
warning_count: 2
summary: "Task 1 exceeds 5-file scope limit (10 files) — must be split. Two warnings are minor (verify script uses `any`, Task 2 effort concentration)."
```

---

## Recommended Fix

Split Task 1 into two tasks:

**Task 1A: Project Initialization (5 files)**
- `package.json` — create with deps
- `svelte.config.js` — adapter-static config
- `vite.config.ts` — Tailwind + SvelteKit plugins
- `tsconfig.json` — strict mode
- `static/.nojekyll` — empty file

**Task 1B: App Shell + Styling (5 files)** — depends on 1A
- `src/app.css` — Tailwind import + military theme + component styles
- `src/app.html` — Google Fonts + SvelteKit template
- `src/routes/+layout.svelte` — CSS import + children render
- `src/routes/+layout.ts` — prerender = true
- `src/routes/+page.svelte` — placeholder content

After this split, the dependency chain becomes: 1A → 1B → 2 → 3, all tasks are under the file limit, and the phase plan is ready for execution.
