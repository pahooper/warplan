# State: warplan (Svelte 5 Conversion)

**Last Updated:** 2026-03-08
**Current Phase:** 1
**Current Wave:** --
**Status:** initialized

## Position

Project re-initialized for Svelte 5 conversion on `svelte` branch. Requirements scoped, roadmap generated. Awaiting SvelteKit research agent results before planning Phase 1.

## Reference Implementation

The existing `index.html` on `master` branch is the reference. All visual output must match it exactly.

## Decisions

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-08 | SvelteKit 2 + adapter-static | Phil's choice — static site with file-based routing |
| 2026-03-08 | Same repo, svelte branch | Keep git history, easy comparison with HTML version |
| 2026-03-08 | Data in TS files, edit + rebuild | No admin UI needed — developer workflow |
| 2026-03-08 | Separate /export route | Phil wants dedicated printable page, not modal/popup |
| 2026-03-08 | Tailwind CSS 4 | Current version, clean integration with SvelteKit |

## Blockers

None.

## Notes

- Research agent running for latest Svelte 5 runes / SvelteKit 2 adapter-static / Tailwind 4 patterns
- Phil emphasized: lean +page.svelte and +layout.svelte, locked-down data schema, composable components
