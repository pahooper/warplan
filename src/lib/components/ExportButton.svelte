<script lang="ts">
  import { resolve } from '$app/paths';
  import { getBuildContext } from '$lib/state/build-context';
  import type { ComponentCategory } from '$lib/types';

  const build = getBuildContext();

  const categories: ComponentCategory[] = ['cpu', 'gpu', 'motherboard', 'ram', 'cooling', 'storage', 'case', 'psu'];

  let exportParams = $derived.by(() => {
    const params = new URLSearchParams();
    for (const cat of categories) {
      params.set(cat, build.selections[cat]);
    }
    if (build.activePreset) params.set('preset', build.activePreset);
    return params.toString();
  });
</script>

<a href="{resolve('/export/')}?{exportParams}" target="_blank" class="block text-center w-full tactical-card p-4 hover:bg-yellow-900 transition-all military-header text-yellow-500">
  📤 EXPORT BUILD
</a>
