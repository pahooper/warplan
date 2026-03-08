import type { BuildSelection } from '../types';

export interface PresetConfig {
  id: string;
  name: string;
  tier: string;
  description: string;
  tagline: string;
  warning?: string;
  highlight?: string;
  selection: BuildSelection;
}

export const presets: Record<string, PresetConfig> = {
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
  },
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
  },
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
};

export const presetOrder = ['vanguard', 'overlord', 'thunderbolt'] as const;
