# Task 2: Export Page — Briefing Document

<task type="auto">
  <name>Create /export route with WWII-themed printable briefing document</name>
  <files>src/routes/export/+page.svelte</files>
  <depends>1</depends>
  <must_haves>
    <truths>The /export route renders a WWII-themed classified briefing document showing all 8 selected components with names, prices, and key specs. The page reads build selections from URL search params. If no valid params are present, a fallback message is shown directing the user back to the configurator. The briefing shows the operation codename from the preset param, or "CUSTOM OPERATION" if no preset. Total deployment cost is calculated and displayed. Resale Intelligence section appears only when the selected CPU is not the owned i9-14900K. Combat Assessment shows 4K native FPS range, 160Hz rating, and 160Hz capability using calculateCombatRating. GPU benchmark bars are included. A "PRINT ORDERS" button is fixed-positioned and hidden during print. @media print styles produce a clean white-background document.</truths>
    <artifacts>src/routes/export/+page.svelte renders the complete briefing document matching the reference HTML structure.</artifacts>
    <key_links>Reads URL params via page from $app/state. Imports components from $lib/data/components. Imports presets from $lib/data/presets. Imports calculateCombatRating from $lib/compatibility. Uses $derived for reactive state from URL params.</key_links>
  </must_haves>
  <action>
    Read these files first to understand the full context:
    - .planning/phase3-RESEARCH.md (merged research with patterns and code examples)
    - src/lib/types.ts (all types)
    - src/lib/data/components.ts (component data structure)
    - src/lib/data/presets.ts (preset structure — need to find preset by ID)
    - src/lib/compatibility.ts (calculateCombatRating function signature and CombatRating type)
    - src/app.css (design tokens and existing styles)

    Also read the reference HTML for the exact briefing structure:
    - index.html lines 907-1256 (the exportBuild function that generates the briefing)

    Create src/routes/export/+page.svelte:

    SCRIPT SECTION:
    1. Import page from '$app/state'
    2. Import components from '$lib/data/components'
    3. Import presets from '$lib/data/presets'
    4. Import calculateCombatRating from '$lib/compatibility'
    5. Import types: BuildSelection, ComponentCategory, CpuComponent, GpuComponent
    6. Define categories array: ['cpu', 'gpu', 'motherboard', 'ram', 'cooling', 'storage', 'case', 'psu']
    7. Define labels array: ['PROCESSOR', 'GRAPHICS CARD', 'MOTHERBOARD', 'MEMORY', 'COOLING', 'STORAGE', 'CHASSIS', 'POWER SUPPLY']
    8. Derive selections from URL params using $derived.by()
    9. Derive hasValidBuild check (cpu AND gpu params present)
    10. Derive resolved components: map categories to component objects via components[cat].find(c => c.id === id)
    11. Derive total cost from resolved components
    12. Derive preset info: find preset matching URL param, get operation name or "CUSTOM OPERATION"
    13. Derive combat rating via calculateCombatRating(cpu.perf4k, gpu.perf4k)
    14. Derive whether to show resale section: cpu exists AND cpu.owned === false (i.e., not the 14900K)
    15. Derive GPU benchmark data for bars
    16. Format date: new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' })

    TEMPLATE SECTION — match the reference HTML structure exactly:
    1. Fallback: {#if !hasValidBuild} show "No build configuration" message with link back to /
    2. Main briefing wrapped in .page container with .watermark "CLASSIFIED"
    3. Header: stars (★ ★ ★), operation name, "Tactical Build Configuration", classified stamp
    4. Meta grid (2x2): Operative LANGLEY, Date, Objective "4K @ 160Hz AAA Gaming", Theater "Newer & Older Games"
    5. Hardware Manifest section: loop over 8 categories, show category label, component name, first store from buyLinks, price or "OWNED" (for owned CPUs)
    6. Total Deployment Cost: double gold border, large formatted total
    7. Resale Intelligence (conditional): green box, sell i9-14900K estimate, net cost = total - 320
    8. Combat Assessment: 3-stat grid (4K Native FPS, 160Hz Target rating, 160Hz Capable text) + GPU benchmark bars
    9. Footer: "Uncle Phil ❤️", sources list, prices list, date
    10. Print Orders button: fixed bottom-right, calls window.print()

    STYLE SECTION — use scoped <style> matching the reference:
    Translate the inline styles from the reference HTML into proper CSS classes. Key styles:
    - .page: max-width 800px, centered, dark gradient background, scan lines overlay
    - .watermark: rotated -30deg, large transparent gold text
    - .header: double gold border bottom, centered, Special Elite font
    - .classified: red border stamp, slightly rotated
    - .meta: 2-column grid
    - .section-title: Special Elite, gold, letter-spacing
    - .part-row: flex space-between with bottom border
    - .total-section: double gold border top, large gold amount
    - .combat-grid: 3-column grid
    - .print-btn: fixed position, gold background, Special Elite font
    - @media print: white background, adjusted colors, hide print button, clean output
    - Also include :global(body) print override for body background

    Do NOT:
    - Use Tailwind utility classes for the briefing content — use scoped CSS matching the reference
    - Import or use getBuildContext — the export page reads URL params, not context
    - Add any navigation back-button beyond the fallback message
    - Use $effect — everything should be $derived
    - Use $app/stores — use $app/state (Svelte 5 pattern)
  </action>
  <verify>bun run check &amp;&amp; bun run dev -- --open /export/?cpu=r7-9800x3d&amp;gpu=5080&amp;motherboard=x870-tomahawk&amp;ram=ddr5-32gb-6000-cl36&amp;cooling=arctic-360-pro&amp;storage=ssd-2tb-budget&amp;case=corsair-4000d-rs&amp;psu=rm850e&amp;preset=overlord — visually confirm: 8 component rows render with names and prices, total cost displays, combat assessment shows 3-stat grid with GPU benchmark bars, operation name shows "Operation: Overlord", footer shows "Uncle Phil". Then test without preset param and with cpu=i9-14900k to verify "CUSTOM OPERATION" heading and no resale section.</verify>
  <done>The /export route renders a complete WWII-themed briefing matching the reference HTML. Shows all components with prices, operation name (from preset or "CUSTOM OPERATION" fallback — matching reference index.html), combat assessment, GPU benchmarks, resale intelligence (when CPU is not owned i9-14900k), and print-ready output. svelte-check passes with zero errors.</done>
</task>
