<script lang="ts">
  import { getBuildContext } from '$lib/state/build-context';
  import { presets, presetOrder } from '$lib/data/presets';
  import { components } from '$lib/data/components';
  import type { ComponentCategory } from '$lib/types';

  const build = getBuildContext();

  function calculatePresetPrice(presetId: string): number {
    const preset = presets[presetId];
    let total = 0;
    const categories = Object.keys(preset.selection) as ComponentCategory[];
    for (const cat of categories) {
      const compId = preset.selection[cat];
      const found = components[cat].find((c) => c.id === compId);
      if (found) total += found.price;
    }
    return total;
  }

  const presetPrices = $derived(
    Object.fromEntries(presetOrder.map((id) => [id, calculatePresetPrice(id)])) as Record<
      string,
      number
    >
  );

  function loadPreset(id: string): void {
    Object.entries(presets[id].selection).forEach(([k, v]) => {
      build.selections[k as ComponentCategory] = v;
    });
    build.activePreset = id;
  }
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
  {#each presetOrder as id}
    {@const preset = presets[id]}
    <button
      class="tactical-card p-6 hover:border-yellow-500 transition-all text-left"
      class:border-yellow-600={build.activePreset === id}
      onclick={() => loadPreset(id)}
    >
      <div class="inline-block bg-yellow-600 text-black px-3 py-1 text-xs font-bold mb-3">
        {preset.tier}
      </div>
      <div class="military-header text-xl mb-2">{preset.name}</div>
      <div class="text-2xl font-bold text-yellow-500 mb-2">
        ~${presetPrices[id].toLocaleString()}
      </div>
      <div class="text-sm text-gray-400">{preset.description}</div>
      <div class="text-xs text-gray-500 mt-2">{preset.tagline}</div>
      {#if preset.warning}
        <div class="text-xs text-red-400 mt-1">⚠ {preset.warning}</div>
      {/if}
      {#if preset.highlight}
        <div class="text-xs text-green-400 mt-2">⭐ {preset.highlight}</div>
      {/if}
    </button>
  {/each}
</div>

<div class="text-center mb-4">
  <div class="text-sm text-gray-400">
    ☝ Quick-select a preset above, then customize individual components below ☟
  </div>
</div>
