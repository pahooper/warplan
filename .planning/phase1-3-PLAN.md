# Task 3: Preset Configurations

<task type="auto">
  <name>Create typed preset configurations referencing component IDs</name>
  <files>src/lib/data/presets.ts</files>
  <depends>2</depends>
  <must_haves>
    <truths>
      - Three presets exist: vanguard, overlord, thunderbolt
      - Each preset maps all 8 component categories to a valid component ID
      - Every component ID referenced by a preset exists in components.ts
      - Preset metadata includes name, codename, description, price estimate, and tier badge
      - TypeScript compiles with no errors
    </truths>
    <artifacts>
      - src/lib/data/presets.ts exporting: PresetConfig interface, presets object with vanguard/overlord/thunderbolt
    </artifacts>
    <key_links>
      - presets.ts imports BuildSelection from ../types
      - presets.ts imports components from ./components (to validate IDs exist at type level)
      - Preset IDs match exactly what's in the existing index.html loadPreset() function
    </key_links>
  </must_haves>
  <action>
    1. Create src/lib/data/presets.ts:

       Import BuildSelection from '../types'.

       Define a PresetConfig interface:
       interface PresetConfig {
         id: string;              // 'vanguard' | 'overlord' | 'thunderbolt'
         name: string;            // 'Operation: Vanguard'
         tier: string;            // 'RECON' | 'ASSAULT' | 'TACTICAL'
         description: string;     // Short description
         tagline: string;         // e.g. "Budget 4K entry (DLSS 4 MFG for 160Hz)"
         warning?: string;        // e.g. "14900K degradation risk" for Vanguard
         highlight?: string;      // e.g. "RECOMMENDED - Best value for 4K@160Hz" for Overlord
         selection: BuildSelection;
       }

       Define the three presets with EXACT component IDs from the existing index.html:

       vanguard: {
         id: 'vanguard',
         name: 'Operation: Vanguard',
         tier: 'RECON',
         description: 'Keep i9-14900K | RTX 5070 Ti | Value Parts',
         tagline: 'Budget 4K entry (DLSS 4 MFG for 160Hz)',
         warning: '14900K degradation risk',
         selection: {
           cpu: 'i9-14900k',
           gpu: '5070ti',
           motherboard: 'z790-tomahawk',
           ram: 'ddr5-32gb-6000-cl36',
           cooling: 'pa-120-se-v2',
           storage: 'ssd-2tb-budget',
           case: 'corsair-4000d-rs',
           psu: 'rm850e'
         }
       }

       overlord: {
         id: 'overlord',
         name: 'Operation: Overlord',
         tier: 'ASSAULT',
         description: 'Sell 14900K, switch to 9800X3D | RTX 5080',
         tagline: 'Best value for 4K@160Hz',
         highlight: 'RECOMMENDED - Best value for 4K@160Hz',
         selection: {
           cpu: 'r7-9800x3d',
           gpu: '5080',
           motherboard: 'x870-tomahawk',
           ram: 'ddr5-32gb-6000-cl36',
           cooling: 'arctic-360-pro',
           storage: 'ssd-2tb-budget',
           case: 'corsair-4000d-rs',
           psu: 'rm850e'
         }
       }

       thunderbolt: {
         id: 'thunderbolt',
         name: 'Operation: Thunderbolt',
         tier: 'TACTICAL',
         description: '9950X3D | RTX 5090 | 64GB | Premium Everything',
         tagline: 'Flagship - no compromises (if you can find a 5090)',
         selection: {
           cpu: 'r9-9950x3d',
           gpu: '5090',
           motherboard: 'x870e-strix',
           ram: 'ddr5-64gb-6000',
           cooling: 'corsair-titan',
           storage: 'ssd-4tb',
           case: 'fractal-north',
           psu: 'dp13-1000'
         }
       }

       Export the presets as: export const presets: Record<string, PresetConfig>
       Also export: export const presetOrder = ['vanguard', 'overlord', 'thunderbolt'] as const;
       Also export the PresetConfig type.

    REFERENCE: Check the existing index.html loadPreset() function (around line 991) for exact component IDs.

    DO NOT:
    - Change any component IDs — they must match components.ts exactly
    - Add computed price totals — those will be derived in the UI layer
  </action>
  <verify>cd /home/pnod/dev/projects/warplan && npx tsc --noEmit 2>&1 && npx tsx -e "import { presets, presetOrder } from './src/lib/data/presets'; import { components } from './src/lib/data/components'; for (const pid of presetOrder) { const p = presets[pid]; for (const [cat, id] of Object.entries(p.selection)) { const found = (components as any)[cat]?.find((c: any) => c.id === id); if (!found) console.error('MISSING:', pid, cat, id); } } console.log('All preset IDs validated');"</verify>
  <done>tsc --noEmit passes, all 3 presets defined, every component ID in every preset resolves to an existing component in components.ts</done>
</task>
