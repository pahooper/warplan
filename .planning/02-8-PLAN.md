# Task 8: Page Composition + Footer

<task type="auto">
  <name>Compose all components in +page.svelte with correct layout, add footer</name>
  <files>src/routes/+page.svelte</files>
  <depends>2, 3, 4, 5, 6, 7</depends>
  <must_haves>
    <truths>+page.svelte creates build state with $state, provides it via setBuildContext, and composes all child components in the exact layout from index.html. Page initializes with Overlord preset selected. The 4-column grid layout matches reference: 3 cols for selectors, 1 col for sidebar. Footer matches index.html with attribution and source list.</truths>
    <artifacts>src/routes/+page.svelte composes Header, IntelBriefing, PresetCards, CpuSelector, GpuSelector, ComponentSelector (×3), CompactSelector (×3), CostSidebar, CompatibilityPanel, CombatRating, BuildGuides, ExportButton, ResetButton</artifacts>
    <key_links>+page.svelte imports setBuildContext from $lib/state/build-context. +page.svelte imports all components from $lib/components/. +page.svelte creates the $state build object and provides it via setContext.</key_links>
  </must_haves>
  <action>
    Read PROJECT.md, .planning/phase2-CONTEXT.md, .planning/phase2-RESEARCH.md.
    Read src/lib/types.ts for BuildSelection type.
    Read src/lib/data/presets.ts for overlord default selections.
    Read src/lib/state/build-context.ts for setBuildContext.
    Read ALL component files created in Tasks 2-7 to understand their props interfaces.
    Read index.html lines 72-283 for the complete page layout structure.

    **Rewrite src/routes/+page.svelte:**

    Script section:
    - Import setBuildContext from '$lib/state/build-context'
    - Import all 14 components from '$lib/components/'
    - Import presets from '$lib/data/presets'
    - Create build state with $state:
      ```
      let build = $state({
        selections: { ...presets.overlord.selection },
        activePreset: 'overlord' as string | null
      });
      ```
    - Call setBuildContext(build)

    Template section (match index.html layout exactly):
    ```
    <div class="min-h-screen p-4 md:p-6">
      <div class="max-w-7xl mx-auto">
        <Header />
        <IntelBriefing />
        <PresetCards />

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <!-- Component Selectors (3 cols) -->
          <div class="lg:col-span-3 space-y-4">
            <CpuSelector />
            <GpuSelector />

            <!-- Motherboard -->
            <ComponentSelector
              category="motherboard"
              title="🔧 MOTHERBOARD"
              sourceLinks={[
                { label: 'PC Guide: Best for 9800X3D', url: 'https://www.pcguide.com/motherboard/guide/best-for-ryzen-7-9800x3d/' },
                { label: "Tom's HW: Best Boards", url: 'https://www.tomshardware.com/best-picks/best-motherboards' }
              ]}
            />

            <!-- RAM with shortage alert -->
            <ComponentSelector
              category="ram"
              title="💾 RAM"
            />

            <!-- Cooling -->
            <ComponentSelector
              category="cooling"
              title="❄️ COOLING SYSTEM"
              sourceLinks={[
                { label: 'GN: Arctic LF III', url: 'https://gamersnexus.net/coolers/new-best-arctic-liquid-freezer-iii-360-280-cpu-cooler-review-benchmarks' },
                { label: "Tom's HW: Best AIOs", url: 'https://www.tomshardware.com/best-picks/best-aio-coolers' },
                { label: 'GN: PA120 SE', url: 'https://gamersnexus.net/coolers/champ-41-thermalright-peerless-assassin-cpu-cooler-review-benchmarks' }
              ]}
            />

            <!-- Storage/Case/PSU compact grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <CompactSelector category="storage" title="💽 STORAGE" />
              <CompactSelector category="case" title="📦 CASE" />
              <CompactSelector category="psu" title="⚡ PSU" />
            </div>
          </div>

          <!-- Sidebar (1 col) -->
          <div class="space-y-4">
            <CostSidebar />
            <CompatibilityPanel />
            <CombatRating />
            <BuildGuides />
            <ExportButton />
            <ResetButton />
          </div>
        </div>

        <!-- Footer -->
        <div class="tactical-card p-4 mt-6 text-center text-xs text-gray-500">
          <div>Operation: Gaming Rig | Research compiled March 8, 2026 | All prices verified from multiple retailers</div>
          <div class="mt-1">Benchmark data: GamersNexus, Tom's Hardware, TechSpot, KitGuru | Prices: Amazon, Newegg, Micro Center, B&H Photo, Best Buy</div>
          <div class="mt-1">Made with love by Uncle Phil ❤️</div>
        </div>
      </div>
    </div>
    ```

    **IMPORTANT layout details from index.html:**
    - Body bg comes from app.css (gradient on body element) — don't override with Tailwind bg class
    - The instruction text "☝ Quick-select a preset above..." is rendered inside PresetCards, not in +page.svelte
    - mb-6 spacing between Header, IntelBriefing, and PresetCards sections — these are set inside those components or via wrapper divs

    **DO NOT:**
    - Put any business logic in +page.svelte (all logic is in context, compatibility module, or child components)
    - Add $effect
    - Destructure the build state

    After rewriting, run: bun run check && bun run build
  </action>
  <verify>cd /home/pnod/dev/projects/warplan && bun run check && bun run build</verify>
  <done>+page.svelte compiles with zero errors/warnings. bun run build produces static output. The page renders all components in the correct layout matching index.html structure.</done>
</task>
