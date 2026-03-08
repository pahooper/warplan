# Task 6: Reactive Sidebar Components (Cost, Compatibility, CombatRating)

<task type="auto">
  <name>Create CostSidebar, CompatibilityPanel, and CombatRating sidebar components</name>
  <files>src/lib/components/CostSidebar.svelte, src/lib/components/CompatibilityPanel.svelte, src/lib/components/CombatRating.svelte</files>
  <depends>1</depends>
  <must_haves>
    <truths>CostSidebar shows live total cost and per-category breakdown, plus resale note when CPU is not i9-14900K. CompatibilityPanel shows color-coded warnings from compatibility engine. CombatRating shows 4K rating, native FPS range, and 160Hz capability.</truths>
    <artifacts>src/lib/components/CostSidebar.svelte, src/lib/components/CompatibilityPanel.svelte, src/lib/components/CombatRating.svelte</artifacts>
    <key_links>CostSidebar uses getBuildContext and components data to compute totalCost via $derived. CompatibilityPanel uses getBuildContext and getCompatibilityWarnings from compatibility.ts. CombatRating uses getBuildContext and calculateCombatRating from compatibility.ts. All are composed in +page.svelte sidebar in Task 8.</key_links>
  </must_haves>
  <action>
    Read PROJECT.md, .planning/phase2-CONTEXT.md, .planning/phase2-RESEARCH.md.
    Read src/lib/types.ts, src/lib/data/components.ts, src/lib/data/presets.ts.
    Read src/lib/state/build-context.ts and src/lib/compatibility.ts (Task 1).
    Read index.html lines 232-274 for sidebar HTML structure.
    Read index.html lines 826-904 for updateSummary() JS logic.

    **Create src/lib/components/CostSidebar.svelte:**
    - Import getBuildContext, components data
    - Compute via $derived:
      - totalCost: sum of all selected component prices
      - costBreakdown: formatted per-category costs (CPU: $X | GPU: $Y | Mobo: $Z etc.)
      - showResale: build.selections.cpu !== 'i9-14900k'
    - Tactical-card p-5 container
    - Header: military-header text-lg mb-3 text-yellow-500, "💰 TOTAL COST"
    - Price: text-4xl font-bold text-yellow-400
    - Breakdown: text-xs text-gray-400 mb-3 (2 lines, pipe-separated)
    - Resale note (if showResale): text-green-400 "💰 Sell i9-14900K for ~$320 on eBay" + text-green-300 "Net cost after resale: ~$X"

    **Create src/lib/components/CompatibilityPanel.svelte:**
    - Import getBuildContext, getCompatibilityWarnings, components data
    - Compute warnings via $derived: getCompatibilityWarnings(build.selections, componentsData)
    - Tactical-card p-5 container
    - Header: military-header text-lg mb-3 text-yellow-500, "⚠️ INTEL REPORT"
    - For each warning: div.p-2.rounded with background color based on level:
      - error → bg-red-900/30 text-red-300
      - warn → bg-yellow-900/30 text-yellow-300
      - ok → bg-green-900/30 text-green-300
    - Render msg with {@html warning.msg} to support HTML entities in messages

    **Create src/lib/components/CombatRating.svelte:**
    - Import getBuildContext, calculateCombatRating, components data
    - Compute rating via $derived from CPU and GPU perf4k values
    - Tactical-card p-5 container
    - Header: military-header text-lg mb-3 text-yellow-500, "📊 COMBAT RATING"
    - Show: 4K Rating (colored by threshold), 4K Native FPS range, 160Hz Target (colored), CPU/GPU raw perf scores

    **DO NOT:**
    - Use $effect anywhere
    - Pass warnings/costs as props — each component computes its own $derived values from context
    - Destructure context objects

    After creating all 3, run: bun run check
  </action>
  <verify>cd /home/pnod/dev/projects/warplan && bun run check</verify>
  <done>All 3 sidebar components compile with zero errors/warnings. CostSidebar computes live total. CompatibilityPanel renders color-coded warnings. CombatRating shows correct performance estimates.</done>
</task>
