# Task 1: Build Context + Compatibility Engine

<task type="auto">
  <name>Build context module and compatibility/combat-rating logic</name>
  <files>src/lib/state/build-context.ts, src/lib/compatibility.ts</files>
  <depends></depends>
  <must_haves>
    <truths>Context module provides typed setBuildContext/getBuildContext with Symbol key. Compatibility function returns correct warnings for socket mismatch, PSU undersized, air cooler + 14900K, 5090 needs 1000W+, degradation risk. Combat rating uses GPU-weighted formula matching index.html exactly.</truths>
    <artifacts>src/lib/state/build-context.ts exports setBuildContext and getBuildContext. src/lib/compatibility.ts exports getCompatibilityWarnings and calculateCombatRating.</artifacts>
    <key_links>build-context.ts imports types from $lib/types. compatibility.ts imports ComponentData and BuildSelection from $lib/types. Both modules will be consumed by +page.svelte and child components in later tasks.</key_links>
  </must_haves>
  <action>
    Read PROJECT.md for stack context. Read .planning/phase2-CONTEXT.md for locked decisions. Read .planning/phase2-RESEARCH.md and .planning/phase2-RESEARCH-EXTERNAL.md for implementation patterns.

    Read src/lib/types.ts to understand BuildSelection and component interfaces.
    Read src/lib/data/components.ts to understand component structure.

    **Create src/lib/state/build-context.ts:**
    - Define BuildState interface: { selections: BuildSelection; activePreset: string | null }
    - Use Symbol key (const BUILD_KEY = Symbol('build'))
    - Export setBuildContext(state: BuildState): BuildState
    - Export getBuildContext(): BuildState
    - Import setContext/getContext from 'svelte'

    **Create src/lib/compatibility.ts:**
    - Define CompatibilityWarning: { level: 'error' | 'warn' | 'ok'; msg: string }
    - Define CombatRating: { rating: string; ratingColor: string; native4kFps: string; can160Hz: string; can160Color: string; cpuPerf: number; gpuPerf: number }
    - Export getCompatibilityWarnings(selections: BuildSelection, data: ComponentData): CompatibilityWarning[]
      - Socket mismatch: cpu.socket !== mobo.socket → error
      - Socket match → ok
      - PSU tight: (cpu.tdp || 120) + (gpu.tdp || 300) + 100 > psu.wattage * 0.85 → warn
      - PSU adequate → ok
      - i9-14900K degradation → error (always when selected)
      - Air cooler + i9-14900K → warn
      - RTX 5090 + PSU < 1000W → error
      - RTX 5090 stock → warn
    - Export calculateCombatRating(cpuPerf4k: number, gpuPerf4k: number): CombatRating
      - overallPerf = cpuPerf * 0.3 + gpuPerf * 0.7
      - Rating thresholds: >93 EXCELLENT green, >85 STRONG blue, >75 GOOD yellow, else ADEQUATE orange
      - 4K Native: Math.round(gpuPerf * 0.65) - Math.round(gpuPerf * 1.1) fps
      - 160Hz: gpuPerf >= 90 "YES (with DLSS 4 MFG)" green, >= 80 "SOME TITLES (with DLSS)" yellow, else "UNLIKELY" red

    **DO NOT:**
    - Use $effect anywhere
    - Import component data directly — these are pure functions that receive data as arguments
    - Use 'any' type anywhere

    After creating both files, run: bunx tsc --noEmit
  </action>
  <verify>cd /home/pnod/dev/projects/warplan && bunx tsc --noEmit</verify>
  <done>Both files compile with zero errors. getCompatibilityWarnings returns correct warning types. calculateCombatRating returns correct rating structure.</done>
</task>
