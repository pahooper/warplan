import type { BuildSelection, ComponentData } from '$lib/types';

export interface CompatibilityWarning {
  level: 'error' | 'warn' | 'ok';
  msg: string;
}

export interface CombatRating {
  rating: string;
  ratingColor: string;
  native4kFps: string;
  can160Hz: string;
  can160Color: string;
  cpuPerf: number;
  gpuPerf: number;
}

function findComponent<T extends { id: string }>(list: T[], id: string): T | undefined {
  return list.find((c) => c.id === id);
}

export function getCompatibilityWarnings(
  selections: BuildSelection,
  data: ComponentData
): CompatibilityWarning[] {
  const warnings: CompatibilityWarning[] = [];

  const cpu = findComponent(data.cpu, selections.cpu);
  const gpu = findComponent(data.gpu, selections.gpu);
  const mobo = findComponent(data.motherboard, selections.motherboard);
  const psu = findComponent(data.psu, selections.psu);
  const cooling = findComponent(data.cooling, selections.cooling);

  // Socket compatibility
  if (cpu && mobo) {
    if (cpu.socket !== mobo.socket) {
      warnings.push({
        level: 'error',
        msg: `Socket mismatch: ${cpu.name} (${cpu.socket}) is incompatible with ${mobo.name} (${mobo.socket})`
      });
    } else {
      warnings.push({
        level: 'ok',
        msg: `Socket match: ${cpu.name} and ${mobo.name} are both ${cpu.socket}`
      });
    }
  }

  // PSU adequacy
  if (cpu && gpu && psu) {
    const estimatedDraw = (cpu.tdp || 120) + (gpu.tdp || 300) + 100;
    if (estimatedDraw > psu.wattage * 0.85) {
      warnings.push({
        level: 'warn',
        msg: `PSU tight: Estimated ${estimatedDraw}W draw exceeds 85% of ${psu.wattage}W PSU capacity`
      });
    } else {
      warnings.push({
        level: 'ok',
        msg: `PSU adequate: ${psu.wattage}W provides sufficient headroom for ${estimatedDraw}W estimated draw`
      });
    }
  }

  // i9-14900K degradation risk (always an error when selected)
  if (cpu && cpu.id === 'i9-14900k') {
    warnings.push({
      level: 'error',
      msg: 'Intel i9-14900K has confirmed silicon degradation issues. Microcode fix prevents NEW damage but cannot reverse existing damage.'
    });
  }

  // Air cooler + i9-14900K warning
  if (cpu && cooling && cpu.id === 'i9-14900k' && cooling.type === 'air') {
    warnings.push({
      level: 'warn',
      msg: `Air cooler ${cooling.name} may not handle sustained i9-14900K 253W load. AIO recommended.`
    });
  }

  // RTX 5090 + PSU < 1000W
  if (gpu && psu && gpu.id === '5090' && psu.wattage < 1000) {
    warnings.push({
      level: 'error',
      msg: `RTX 5090 (575W TDP) requires a 1000W+ PSU. Selected ${psu.name} is only ${psu.wattage}W.`
    });
  }

  // RTX 5090 stock/pricing warning
  if (gpu && gpu.id === '5090') {
    warnings.push({
      level: 'warn',
      msg: 'RTX 5090 street price is 1.4-2x MSRP ($2,800-$4,100 vs $1,999 MSRP). Limited availability.'
    });
  }

  return warnings;
}

export function calculateCombatRating(cpuPerf4k: number, gpuPerf4k: number): CombatRating {
  const overallPerf = cpuPerf4k * 0.3 + gpuPerf4k * 0.7;

  let rating: string;
  let ratingColor: string;

  if (overallPerf > 93) {
    rating = 'EXCELLENT';
    ratingColor = '#48bb78';
  } else if (overallPerf > 85) {
    rating = 'STRONG';
    ratingColor = '#4299e1';
  } else if (overallPerf > 75) {
    rating = 'GOOD';
    ratingColor = '#ecc94b';
  } else {
    rating = 'ADEQUATE';
    ratingColor = '#ed8936';
  }

  const fpsLow = Math.round(gpuPerf4k * 0.65);
  const fpsHigh = Math.round(gpuPerf4k * 1.1);
  const native4kFps = `${fpsLow} - ${fpsHigh} fps`;

  let can160Hz: string;
  let can160Color: string;

  if (gpuPerf4k >= 90) {
    can160Hz = 'YES (with DLSS 4 MFG)';
    can160Color = '#48bb78';
  } else if (gpuPerf4k >= 80) {
    can160Hz = 'SOME TITLES (with DLSS)';
    can160Color = '#ecc94b';
  } else {
    can160Hz = 'UNLIKELY';
    can160Color = '#fc8181';
  }

  return {
    rating,
    ratingColor,
    native4kFps,
    can160Hz,
    can160Color,
    cpuPerf: cpuPerf4k,
    gpuPerf: gpuPerf4k
  };
}
