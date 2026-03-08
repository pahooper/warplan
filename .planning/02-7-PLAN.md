# Task 7: Simple Sidebar Components (BuildGuides, ExportButton, ResetButton)

<task type="auto">
  <name>Create BuildGuides, ExportButton, and ResetButton sidebar components</name>
  <files>src/lib/components/BuildGuides.svelte, src/lib/components/ExportButton.svelte, src/lib/components/ResetButton.svelte</files>
  <depends>1</depends>
  <must_haves>
    <truths>BuildGuides shows 5 external build guide links matching index.html. ExportButton is a placeholder linking to /export (Phase 3). ResetButton resets build to Overlord preset defaults.</truths>
    <artifacts>src/lib/components/BuildGuides.svelte, src/lib/components/ExportButton.svelte, src/lib/components/ResetButton.svelte</artifacts>
    <key_links>ResetButton uses getBuildContext to reset selections and presets data for Overlord defaults. All 3 are composed in +page.svelte sidebar in Task 8.</key_links>
  </must_haves>
  <action>
    Read PROJECT.md, .planning/phase2-CONTEXT.md, .planning/phase2-RESEARCH.md.
    Read src/lib/state/build-context.ts (Task 1) for context API.
    Read src/lib/data/presets.ts for Overlord preset data.
    Read index.html lines 256-274 for exact HTML structure.

    **Create src/lib/components/BuildGuides.svelte:**
    - Tactical-card p-5 container
    - Header: military-header text-sm mb-3 text-yellow-500, "📚 BUILD GUIDES"
    - 5 hardcoded links from index.html:
      - GN: $1917 Build (RAM Shortage Ed.) → gamersnexus.net URL
      - GeekaWhat: 4K Build 2026 → geekawhat.com URL
      - TechBuyersGuru: $2500 4K Build → techbuyersguru.com URL
      - Tom's HW: Best Builds 2026 → tomshardware.com URL
      - PCMR: Community Builds → pcmasterrace.org URL
    - Each: a.source-link.block with target="_blank"
    - space-y-1 text-xs for the link container

    **Create src/lib/components/ExportButton.svelte:**
    - a tag styled as block-level button
    - href="/export/" (Phase 3 will build that route)
    - w-full tactical-card p-4 hover:bg-yellow-900 transition-all military-header text-yellow-500
    - Display block, text-center
    - Text: "📤 EXPORT BUILD"

    **Create src/lib/components/ResetButton.svelte:**
    - Import getBuildContext from '$lib/state/build-context'
    - Import { presets } from '$lib/data/presets'
    - Get context: const build = getBuildContext()
    - button element
    - w-full tactical-card p-4 hover:bg-red-900 transition-all military-header text-red-400 text-sm
    - Text: "🔄 RESET"
    - onclick handler: copy overlord preset selections into build.selections (assign each key individually for reactivity), set build.activePreset = 'overlord'
    - Do NOT destructure context

    After creating all 3, run: bun run check
  </action>
  <verify>cd /home/pnod/dev/projects/warplan && bun run check</verify>
  <done>All 3 components compile with zero errors/warnings. BuildGuides has 5 working links. ExportButton links to /export/. ResetButton resets to Overlord defaults.</done>
</task>
