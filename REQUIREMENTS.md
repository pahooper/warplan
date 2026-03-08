# Requirements: warplan

## Table Stakes

- [ ] TS-1: User can see 3 preset build tiers (budget/recommended/premium) with current March 2026 pricing
- [ ] TS-2: User can click any component to visit a real purchase page with current price
- [ ] TS-3: User can read why each component is recommended, with linked benchmark/review sources
- [ ] TS-4: User can see evidence-based analysis of keeping i9-14900K vs switching to AMD X3D
- [ ] TS-5: User can see compatibility warnings (CPU/mobo socket, PSU sizing)
- [ ] TS-6: User can select individual components and see total build cost update
- [ ] TS-7: User can export selected build configuration
- [ ] TS-8: Site is deployed to Cloudflare Pages with a shareable link

## Differentiators

- [ ] DIFF-1: User can see product photos for each major component
- [ ] DIFF-2: User can read detailed "why this part" explanations sourced to reviews/benchmarks
- [ ] DIFF-3: User can see current RAM shortage/pricing context with sources
- [ ] DIFF-4: User can see GPU availability status (RTX 5080 stock, scalper pricing context)
- [ ] DIFF-5: User can see links to third-party build guides that recommend similar configurations

## Anti-Features

- ANTI-1: No live price APIs — all data researched and baked in
- ANTI-2: No backend — pure static HTML/CSS/JS
- ANTI-3: No user accounts or saved builds
- ANTI-4: No mobile app

## Phase Traceability

| Requirement | Phase |
|-------------|-------|
| TS-1 thru TS-5, DIFF-1 thru DIFF-5 | Phase 1: Research & Data |
| TS-6, TS-7 | Phase 2: Dashboard Build |
| TS-8 | Phase 3: Deploy |
