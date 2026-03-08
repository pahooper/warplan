# Task 3: PresetCards Component

<task type="auto">
  <name>Create PresetCards component with dynamic pricing and preset loading</name>
  <files>src/lib/components/PresetCards.svelte</files>
  <depends>1</depends>
  <must_haves>
    <truths>PresetCards renders 3 preset buttons in a responsive grid matching index.html. Clicking a preset updates buildState.selections and sets activePreset. Active preset gets visual highlight (border-yellow-600). Preset prices calculated dynamically from component data.</truths>
    <artifacts>src/lib/components/PresetCards.svelte</artifacts>
    <key_links>PresetCards imports presets and presetOrder from $lib/data/presets. PresetCards imports components from $lib/data/components. PresetCards uses getBuildContext from $lib/state/build-context to read activePreset and mutate selections.</key_links>
  </must_haves>
  <action>
    Read PROJECT.md, .planning/phase2-CONTEXT.md, .planning/phase2-RESEARCH.md.
    Read src/lib/data/presets.ts for PresetConfig interface and preset data.
    Read src/lib/data/components.ts for component prices.
    Read src/lib/types.ts for types.
    Read src/lib/state/build-context.ts (created in Task 1) for context API.
    Read index.html lines 113-142 for exact preset card HTML structure.

    **Create src/lib/components/PresetCards.svelte:**
    - Import getBuildContext, presets, presetOrder, components
    - Get build context: const build = getBuildContext()
    - For each preset in presetOrder, calculate total price dynamically:
      Sum component prices by looking up each selection ID in the components data
    - Render 3-column grid (grid-cols-1 md:grid-cols-3 gap-4 mb-6)
    - Each preset is a button with .tactical-card p-6 hover:border-yellow-500 transition-all text-left
    - Active preset gets class: border-yellow-600 (use class:border-yellow-600={build.activePreset === preset.id})
    - Card content (match index.html exactly):
      - Tier badge: inline-block bg-yellow-600 text-black px-3 py-1 text-xs font-bold mb-3
      - Operation name: military-header text-xl mb-2
      - Price: text-2xl font-bold text-yellow-500 mb-2 (format as ~$X,XXX)
      - Description: text-sm text-gray-400
      - Tagline: text-xs text-gray-500 mt-2
      - Warning (if present): text-xs text-red-400 mt-1 with ⚠ prefix
      - Highlight (if present): text-xs text-green-400 mt-2 with ⭐ prefix
    - On click: copy preset.selection into build.selections (use Object.assign or spread into each key), set build.activePreset = preset.id
    - IMPORTANT: When updating selections, must assign each category individually to maintain reactivity: Object.entries(presets[id].selection).forEach(([k, v]) => { build.selections[k] = v; })
    - Below presets, add centered instruction text: "☝ Quick-select a preset above, then customize individual components below ☟" (text-sm text-gray-400)

    **Svelte 5 patterns:**
    - $props() with typed interface (no props needed — reads from context)
    - $derived for preset prices
    - No $effect
    - Do NOT destructure context (breaks reactivity)

    After creating, run: bun run check
  </action>
  <verify>cd /home/pnod/dev/projects/warplan && bun run check</verify>
  <done>PresetCards compiles with zero errors/warnings. Three preset buttons render with correct data and dynamic prices.</done>
</task>
