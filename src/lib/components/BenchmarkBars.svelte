<script lang="ts">
	import type { BenchmarkData } from '$lib/types';

	interface Props {
		benchmarks: BenchmarkData;
	}

	let { benchmarks }: Props = $props();

	function normalizeKey(key: string): string {
		return key.replace(/_/g, ' ');
	}

	function getBarColor(pct: number): string {
		if (pct > 75) return '#10b981';
		if (pct > 50) return '#d4af37';
		return '#ef4444';
	}
</script>

<div class="grid grid-cols-2 gap-1">
	{#each Object.entries(benchmarks) as [key, fps]}
		{@const maxFps = key.includes('4k') ? 200 : 400}
		{@const pct = Math.min((fps / maxFps) * 100, 100)}
		<div>
			<div class="flex justify-between text-xs mb-0.5">
				<span class="text-gray-400">{normalizeKey(key)}</span>
				<span class="text-gray-300">{fps} FPS</span>
			</div>
			<div class="benchmark-bar">
				<div
					class="benchmark-fill"
					style="width: {pct}%; background-color: {getBarColor(pct)};"
				></div>
			</div>
		</div>
	{/each}
</div>
