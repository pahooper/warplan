# Task 2: TypeScript Data Schema + Component Data

<task type="auto">
  <name>Define TypeScript interfaces and extract all component data from index.html into typed modules</name>
  <files>src/lib/types.ts, src/lib/data/components.ts</files>
  <depends>1B</depends>
  <must_haves>
    <truths>
      - Every component from the existing index.html is represented in components.ts
      - All 8 categories exist: cpu, gpu, motherboard, ram, cooling, storage, case, psu
      - No `any` types, no `as` casts — fully typed
      - Every component has: id, name, price, notes, advice, sources (with label + url), buyLinks (with store + url)
      - CPU components additionally have: socket, perf4k, tdp, benchmarks, owned flag
      - GPU components additionally have: vram, perf4k, tdp, benchmarks
      - RAM components additionally have: capacity
      - Cooling components additionally have: type ('air' | 'aio')
      - PSU components additionally have: wattage
      - Components with a recommendation have: recommended flag and why/whyNot text
      - tsc --noEmit passes with strict mode
    </truths>
    <artifacts>
      - src/lib/types.ts exporting: SourceLink, BuyLink, BenchmarkData, BaseComponent, CpuComponent, GpuComponent, MotherboardComponent, RamComponent, CoolingComponent, StorageComponent, CaseComponent, PsuComponent, ComponentCategory, ComponentData
      - src/lib/data/components.ts exporting a typed ComponentData object with all 8 arrays
    </artifacts>
    <key_links>
      - components.ts imports types from ../types
      - ComponentData type maps category names to their specific component arrays
    </key_links>
  </must_haves>
  <action>
    1. Create src/lib/types.ts with these interfaces:

       interface SourceLink { label: string; url: string; }
       interface BuyLink { store: string; url: string; }
       type BenchmarkData = Record<string, number>;  // game name -> fps

       interface BaseComponent {
         id: string;
         name: string;
         price: number;
         notes: string;
         advice: string;
         recommended: boolean;
         sources: SourceLink[];
         buyLinks: BuyLink[];
         why?: string;      // why to pick this (for recommended items)
         whyNot?: string;   // why not to pick this (for non-recommended)
       }

       Then EXTEND BaseComponent for each category:

       interface CpuComponent extends BaseComponent {
         socket: 'LGA1700' | 'AM5';
         perf4k: number;      // 0-100 performance index
         tdp: number;
         owned: boolean;
         benchmarks: BenchmarkData;
       }

       interface GpuComponent extends BaseComponent {
         vram: number;
         perf4k: number;
         tdp: number;
         benchmarks: BenchmarkData;
       }

       interface MotherboardComponent extends BaseComponent {
         socket: 'LGA1700' | 'AM5';
       }

       interface RamComponent extends BaseComponent {
         capacity: number;   // GB
       }

       interface CoolingComponent extends BaseComponent {
         type: 'air' | 'aio';
       }

       interface StorageComponent extends BaseComponent {}
       interface PsuComponent extends BaseComponent {
         wattage: number;
       }
       interface CaseComponent extends BaseComponent {}

       Then a typed map:

       interface ComponentData {
         cpu: CpuComponent[];
         gpu: GpuComponent[];
         motherboard: MotherboardComponent[];
         ram: RamComponent[];
         cooling: CoolingComponent[];
         storage: StorageComponent[];
         case: CaseComponent[];
         psu: PsuComponent[];
       }

       type ComponentCategory = keyof ComponentData;

       Also export a BuildSelection type:
       type BuildSelection = { [K in ComponentCategory]: string };  // maps category -> component id

       Export everything.

    2. Create src/lib/data/components.ts:
       - Import types from '../types'
       - Read the existing index.html at /home/pnod/dev/projects/warplan/index.html
       - Extract ALL component data from the JavaScript `const components = { ... }` object
       - Convert to a typed `export const components: ComponentData = { ... }` object
       - Preserve ALL data exactly: ids, names, prices, notes, advice, why, whyNot, benchmarks, sources, buyLinks
       - HTML entities in notes/advice (like &#11088; &#9888;) should be converted to actual Unicode characters or kept as HTML strings (they'll be rendered with {@html})
       - Satisfy TypeScript strict mode — no `any`, no implicit types

    REFERENCE: The current index.html is at /home/pnod/dev/projects/warplan/index.html
    Read the `const components = { ... }` block (starts around line 285) to extract all data.

    DO NOT:
    - Invent data — copy EXACTLY from the existing index.html
    - Use `as any` or `as unknown` casts
    - Skip any components — every single one must be migrated
    - Change prices, URLs, or text content
  </action>
  <verify>cd /home/pnod/dev/projects/warplan && npx tsc --noEmit 2>&1 && node -e "const c = require('./src/lib/data/components.ts'); console.log('FAILED: cannot require TS')" 2>/dev/null; npx tsx -e "import { components } from './src/lib/data/components'; const cats = Object.keys(components); console.log('Categories:', cats.length, cats); const total = Object.values(components).reduce((s: number, a: any[]) => s + a.length, 0); console.log('Total components:', total);"</verify>
  <done>tsc --noEmit passes with zero errors, components.ts exports all 8 categories with every component from index.html, types.ts exports all interfaces</done>
</task>
