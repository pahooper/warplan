<script lang="ts">
	import { getBuildContext } from '$lib/state/build-context';
	import { calculateCombatRating } from '$lib/compatibility';
	import { components } from '$lib/data/components';

	const build = getBuildContext();

	const cpuPerf = $derived(
		components.cpu.find((c) => c.id === build.selections.cpu)?.perf4k ?? 85
	);

	const gpuPerf = $derived(
		components.gpu.find((c) => c.id === build.selections.gpu)?.perf4k ?? 85
	);

	const rating = $derived(calculateCombatRating(cpuPerf, gpuPerf));
</script>

<div class="tactical-card p-5">
	<div class="military-header text-lg mb-3 text-yellow-500">&#128202; COMBAT RATING</div>
	<div class="space-y-2 text-sm">
		<div>
			4K Rating: <span class="font-bold" style="color: {rating.ratingColor}">{rating.rating}</span
			>
		</div>
		<div>
			4K Native: <span class="text-gray-300">{rating.native4kFps}</span>
		</div>
		<div>
			160Hz Target: <span class="font-bold" style="color: {rating.can160Color}"
				>{rating.can160Hz}</span
			>
		</div>
		<div class="text-xs text-gray-400 mt-2">AAA titles @ 4K High/Ultra settings</div>
		<div class="text-xs text-gray-500">
			CPU perf: {rating.cpuPerf}/100 | GPU perf: {rating.gpuPerf}/100
		</div>
	</div>
</div>
