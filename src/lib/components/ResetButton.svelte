<script lang="ts">
  import { getBuildContext } from '$lib/state/build-context';
  import { presets } from '$lib/data/presets';

  const build = getBuildContext();

  function handleReset() {
    const overlord = presets.overlord.selection;
    build.selections.cpu = overlord.cpu;
    build.selections.gpu = overlord.gpu;
    build.selections.motherboard = overlord.motherboard;
    build.selections.ram = overlord.ram;
    build.selections.cooling = overlord.cooling;
    build.selections.storage = overlord.storage;
    build.selections.case = overlord.case;
    build.selections.psu = overlord.psu;
    build.activePreset = 'overlord';
  }
</script>

<button onclick={handleReset} class="w-full tactical-card p-4 hover:bg-red-900 transition-all military-header text-red-400 text-sm">
  🔄 RESET
</button>
