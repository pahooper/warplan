# Task 2: BenchmarkBars + Header + IntelBriefing Components

<task type="auto">
  <name>Create BenchmarkBars, Header, and IntelBriefing components</name>
  <files>src/lib/components/BenchmarkBars.svelte, src/lib/components/Header.svelte, src/lib/components/IntelBriefing.svelte</files>
  <depends>1</depends>
  <must_haves>
    <truths>BenchmarkBars renders colored bars with correct widths based on FPS values. Header matches index.html tactical card layout with mission info, 4-col meta grid. IntelBriefing shows degradation risk and DDR5 shortage with source links.</truths>
    <artifacts>src/lib/components/BenchmarkBars.svelte, src/lib/components/Header.svelte, src/lib/components/IntelBriefing.svelte</artifacts>
    <key_links>BenchmarkBars accepts benchmarks prop (BenchmarkData from types.ts). Header and IntelBriefing are standalone presentational components used by +page.svelte in Task 6.</key_links>
  </must_haves>
  <action>
    Read PROJECT.md, .planning/phase2-CONTEXT.md, .planning/phase2-RESEARCH.md.
    Read src/lib/types.ts for BenchmarkData type.
    Read src/app.css for existing CSS classes.
    Read the reference index.html on master branch (lines 72-110) for exact Header and IntelBriefing HTML structure.

    **Create src/lib/components/BenchmarkBars.svelte:**
    - Props: benchmarks: BenchmarkData (Record<string, number>)
    - Render a 2-column grid (grid-cols-2 gap-1) of benchmark entries
    - For each entry: normalize key (replace _ with space), show FPS value
    - Bar width calculation: maxFps = key.includes('4k') ? 200 : 400; pct = Math.min((fps / maxFps) * 100, 100)
    - Bar color: pct > 75 → #10b981 (green), pct > 50 → #d4af37 (gold), else #ef4444 (red)
    - Use .benchmark-bar and .benchmark-fill classes from app.css
    - Inline style for dynamic width and background color

    **Create src/lib/components/Header.svelte:**
    - Match index.html lines 75-86 exactly
    - Tactical card with centered military header: "★ TACTICAL BUILD CONFIGURATOR ★"
    - Subtitle: "Mission: 4K @ 160Hz Gaming Dominance"
    - Classified text: "CLASSIFIED - FOR LANGLEY'S EYES ONLY"
    - 4-col grid (grid-cols-2 md:grid-cols-4) with CURRENT INTEL, MONITOR, THEATER, STREAMING meta
    - Footer text: "Research compiled March 8, 2026 | All prices verified from multiple retailers"
    - All values hardcoded (this is static content)
    - Use text-yellow-500 for the header (index.html uses text-yellow-500, matches #d4af37 closely)

    **Create src/lib/components/IntelBriefing.svelte:**
    - Match index.html lines 89-110 exactly
    - .intel-briefing class container
    - Military header: "⚠️ CRITICAL INTELLIGENCE BRIEFING" in text-red-400
    - 2-column grid (grid-cols-1 md:grid-cols-2):
      - Left: i9-14900K DEGRADATION RISK (text-red-300 heading, gray-300 body, source links)
      - Right: DDR5 SHORTAGE CRISIS (text-yellow-300 heading, gray-300 body, source links)
    - All source URLs hardcoded from index.html
    - Use .source-link class for links, target="_blank"

    **Svelte 5 patterns:**
    - Use $props() with typed interface
    - Use lang="ts" on script blocks
    - No stores, no $effect

    After creating all three, run: bun run check
  </action>
  <verify>cd /home/pnod/dev/projects/warplan && bun run check</verify>
  <done>All three components compile with zero errors/warnings via svelte-check. BenchmarkBars renders dynamic bars. Header and IntelBriefing match index.html structure.</done>
</task>
