# Task 4: CPU + GPU Selector Components

<task type="auto">
  <name>Create CpuSelector and GpuSelector with benchmarks and full detail</name>
  <files>src/lib/components/CpuSelector.svelte, src/lib/components/GpuSelector.svelte</files>
  <depends>1, 2</depends>
  <must_haves>
    <truths>CpuSelector renders all 3 CPUs with full details, badges, benchmarks, buy/source links matching index.html. GpuSelector renders all 3 GPUs similarly. Clicking a component updates build context selections and clears activePreset. Selected component gets .selected class, recommended gets .recommended class.</truths>
    <artifacts>src/lib/components/CpuSelector.svelte, src/lib/components/GpuSelector.svelte</artifacts>
    <key_links>Both import getBuildContext from $lib/state/build-context. Both import components from $lib/data/components. Both import BenchmarkBars from ./BenchmarkBars.svelte (created in Task 2). Both are composed by +page.svelte in Task 6.</key_links>
  </must_haves>
  <action>
    Read PROJECT.md, .planning/phase2-CONTEXT.md, .planning/phase2-RESEARCH.md.
    Read src/lib/types.ts for CpuComponent, GpuComponent interfaces.
    Read src/lib/data/components.ts for actual component data.
    Read src/lib/state/build-context.ts for context API.
    Read src/lib/components/BenchmarkBars.svelte (created in Task 2) for props interface.
    Read index.html lines 148-171 for CPU/GPU section HTML and lines 728-791 for renderComponentOption logic.

    **Create src/lib/components/CpuSelector.svelte:**
    - Import getBuildContext, components, BenchmarkBars
    - Get context: const build = getBuildContext()
    - Wrap in tactical-card p-6
    - Section header: military-header text-xl text-yellow-500 border-b-2 border-yellow-600 pb-2, text "⚙️ CPU SELECTION"
    - Below header: category source links row (text-xs text-gray-500 mb-4) with GamersNexus, TechSpot, Tom's Hardware links from index.html
    - For each CPU in components.cpu:
      - div.component-option p-4 rounded with class:selected={build.selections.cpu === cpu.id} and class:recommended={cpu.recommended}
      - onclick: build.selections.cpu = cpu.id; build.activePreset = null;
      - Top row (flex justify-between items-start mb-2):
        - Left: name (font-bold text-sm, text-green-400 if owned, text-gray-200 otherwise), badges below (RECOMMENDED value-badge, OWNED compatible-badge, DEGRADATION RISK danger-badge for i9-14900k, CHECK FOR DEFECTIVE UNITS danger-badge for 5080)
        - Right: price (font-bold, text-green-400 if owned showing "OWNED", text-yellow-400 otherwise showing $price), TDP below if present (text-xs text-gray-500)
      - Notes: text-xs text-gray-400 mb-1
      - Advice: text-xs text-gray-500 italic mb-2
      - Why (if present): text-xs text-green-400 mb-2 with bold "WHY THIS:"
      - WhyNot (if present): text-xs text-red-400 mb-2 with bold "WHY NOT:"
      - BenchmarkBars component (if benchmarks present)
      - Buy links row: text-xs text-gray-600 "Buy: " + source-link for each buyLink
      - Review links row: text-xs text-gray-600 "Reviews: " + source-link for each source

    **Create src/lib/components/GpuSelector.svelte:**
    - Same structure as CpuSelector but for GPU data
    - Section header: "🎮 GPU SELECTION"
    - Category source links: GN: RTX 5080, GN: RTX 5090, Tom's HW: Best GPUs (from index.html)
    - For badges: RECOMMENDED value-badge, CHECK FOR DEFECTIVE UNITS danger-badge for 5080, STOCK CRISIS info-badge for 5090
    - Components don't have owned field — no owned badge or green text
    - Everything else identical to CpuSelector pattern

    **IMPORTANT Svelte 5 patterns:**
    - Do NOT destructure build context
    - Use class: directive for conditional CSS classes
    - onclick directly on elements (lowercase, Svelte 5 pattern)
    - All links target="_blank"

    After creating both, run: bun run check
  </action>
  <verify>cd /home/pnod/dev/projects/warplan && bun run check</verify>
  <done>Both CpuSelector and GpuSelector compile with zero errors/warnings. Each renders full component cards with benchmarks, badges, buy links, and source links.</done>
</task>
