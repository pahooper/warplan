# Task 5: Generic ComponentSelector + CompactSelector

<task type="auto">
  <name>Create generic ComponentSelector and CompactSelector for remaining categories</name>
  <files>src/lib/components/ComponentSelector.svelte, src/lib/components/CompactSelector.svelte</files>
  <depends>1, 2</depends>
  <must_haves>
    <truths>ComponentSelector is a reusable full-width selector for motherboard, RAM, and cooling categories. CompactSelector is a compact variant for storage, case, and PSU. Both update build context on selection. ComponentSelector shows full details (notes, advice, why/whyNot, buy links, source links). CompactSelector shows minimal details (name, price, notes, buy links only). RAM section includes the market-alert shortage warning.</truths>
    <artifacts>src/lib/components/ComponentSelector.svelte, src/lib/components/CompactSelector.svelte</artifacts>
    <key_links>Both import getBuildContext from $lib/state/build-context. Both import components from $lib/data/components. ComponentSelector optionally uses BenchmarkBars (for any category that has benchmarks). Both are composed by +page.svelte in Task 6.</key_links>
  </must_haves>
  <action>
    Read PROJECT.md, .planning/phase2-CONTEXT.md, .planning/phase2-RESEARCH.md.
    Read src/lib/types.ts — note ComponentCategory type and BaseComponent interface.
    Read src/lib/data/components.ts for all category data.
    Read src/lib/state/build-context.ts for context API.
    Read index.html lines 173-228 for motherboard/RAM/cooling/storage/case/PSU HTML structure.
    Read index.html lines 728-803 for renderComponentOption logic (full vs compact).

    **Create src/lib/components/ComponentSelector.svelte:**
    Props interface:
    - category: ComponentCategory (e.g., 'motherboard', 'ram', 'cooling')
    - title: string (e.g., "🔧 MOTHERBOARD")
    - sourceLinks?: Array<{ label: string; url: string }> (optional category-level source links)
    - alert?: { type: 'market' | 'intel'; content: string } (optional alert box, used for RAM shortage)

    Implementation:
    - Import getBuildContext, components from data, BenchmarkBars
    - Get context and look up components for the given category
    - Wrap in tactical-card p-6
    - Section header: military-header text-xl text-yellow-500 border-b-2 border-yellow-600 pb-2
    - Source links row if provided (text-xs text-gray-500 mb-4)
    - Alert box if provided:
      - For RAM: use .market-alert class with shortage warning text, source links
      - Render Snippet children for alert content (or use alert prop with HTML string)
    - For each component in category:
      - Same card structure as CpuSelector but generic (no CPU-specific badges)
      - div.component-option p-4 rounded with selected/recommended classes
      - onclick: build.selections[category] = comp.id; build.activePreset = null;
      - Full layout: name + badges (RECOMMENDED only), price, notes, advice, why/whyNot, buy links, source links
      - BenchmarkBars if comp.benchmarks exists (it won't for these categories, but handle gracefully)

    For RAM category specifically, the caller (+page.svelte) will pass the alert prop with the shortage warning. The alert content includes:
    - .market-alert container
    - Bold "⚠️ SHORTAGE ALERT:" in text-yellow-300
    - Text about DDR5 prices 300-400% above 2024 levels
    - Source links: Team Group Warning, XDA: Prices Tripled, TechRadar: Why So Expensive

    **Create src/lib/components/CompactSelector.svelte:**
    Props interface:
    - category: ComponentCategory
    - title: string (e.g., "💾 STORAGE")

    Implementation:
    - Import getBuildContext, components from data
    - Get context and look up components for the given category
    - Wrap in tactical-card p-4 (smaller padding than full-width)
    - Header: military-header text-sm mb-3 text-yellow-500
    - For each component in category:
      - div.component-option p-2 rounded (compact padding)
      - onclick: build.selections[category] = comp.id; build.activePreset = null;
      - Font-bold text-xs for name
      - text-yellow-400 font-bold text-xs for price
      - text-gray-500 text-xs for notes
      - Buy links inline (source-link class)
      - NO benchmarks, NO advice, NO why/whyNot

    **DO NOT:**
    - Use $effect
    - Destructure context
    - Create separate components for each category (mobo, ram, cooling) — reuse ComponentSelector with different props

    After creating both, run: bun run check
  </action>
  <verify>cd /home/pnod/dev/projects/warplan && bun run check</verify>
  <done>Both ComponentSelector and CompactSelector compile with zero errors/warnings. ComponentSelector renders full-width cards with all details. CompactSelector renders compact cards with minimal details.</done>
</task>
