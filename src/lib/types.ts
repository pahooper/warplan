// Warplan component type definitions
// Extracted from index.html gaming PC configurator

export interface SourceLink {
  label: string;
  url: string;
}

export interface BuyLink {
  store: string;
  url: string;
}

export type BenchmarkData = Record<string, number>;

export interface BaseComponent {
  id: string;
  name: string;
  price: number;
  notes: string;
  advice: string;
  recommended: boolean;
  sources: SourceLink[];
  buyLinks: BuyLink[];
  why?: string;
  whyNot?: string;
}

export interface CpuComponent extends BaseComponent {
  socket: 'LGA1700' | 'AM5';
  perf4k: number;
  tdp: number;
  owned: boolean;
  benchmarks: BenchmarkData;
}

export interface GpuComponent extends BaseComponent {
  vram: number;
  perf4k: number;
  tdp: number;
  benchmarks: BenchmarkData;
}

export interface MotherboardComponent extends BaseComponent {
  socket: 'LGA1700' | 'AM5';
}

export interface RamComponent extends BaseComponent {
  capacity: number;
}

export interface CoolingComponent extends BaseComponent {
  type: 'air' | 'aio';
}

export interface StorageComponent extends BaseComponent {}

export interface PsuComponent extends BaseComponent {
  wattage: number;
}

export interface CaseComponent extends BaseComponent {}

export interface ComponentData {
  cpu: CpuComponent[];
  gpu: GpuComponent[];
  motherboard: MotherboardComponent[];
  ram: RamComponent[];
  cooling: CoolingComponent[];
  storage: StorageComponent[];
  case: CaseComponent[];
  psu: PsuComponent[];
}

export type ComponentCategory = keyof ComponentData;

export type BuildSelection = { [K in ComponentCategory]: string };
