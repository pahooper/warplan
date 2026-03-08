<script lang="ts">
	import { getBuildContext } from '$lib/state/build-context';
	import { components } from '$lib/data/components';
	import BenchmarkBars from './BenchmarkBars.svelte';

	const build = getBuildContext();
</script>

<div class="tactical-card p-6">
	<div class="military-header text-xl mb-2 text-yellow-500 border-b-2 border-yellow-600 pb-2">
		🎮 GPU SELECTION
	</div>
	<div class="text-xs text-gray-500 mb-4">
		Sources: <a href="https://gamersnexus.net/gpus/nvidia-geforce-rtx-5080-founders-edition-review-benchmarks-vs-5090-7900-xtx-4080-more" target="_blank" class="source-link">GN: RTX 5080</a> |
		<a href="https://gamersnexus.net/gpus/nvidia-geforce-rtx-5090-founders-edition-review-benchmarks-gaming-thermals-power" target="_blank" class="source-link">GN: RTX 5090</a> |
		<a href="https://www.tomshardware.com/reviews/best-gpus,4380.html" target="_blank" class="source-link">Tom's HW: Best GPUs</a>
	</div>
	<div class="space-y-3">
		{#each components.gpu as gpu}
			<div
				class="component-option p-4 rounded"
				class:selected={build.selections.gpu === gpu.id}
				class:recommended={gpu.recommended}
				onclick={() => { build.selections.gpu = gpu.id; build.activePreset = null; }}
				role="button"
				tabindex="0"
				onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { build.selections.gpu = gpu.id; build.activePreset = null; } }}
			>
				<div class="flex justify-between items-start mb-2">
					<div class="flex-1">
						<div class="font-bold text-sm text-gray-200">
							{gpu.name}
						</div>
						<div class="mt-1">
							{#if gpu.recommended}<span class="value-badge">RECOMMENDED</span>{/if}
							{#if gpu.id === '5080'}<span class="danger-badge">CHECK FOR DEFECTIVE UNITS</span>{/if}
							{#if gpu.id === '5090'}<span class="info-badge">STOCK CRISIS</span>{/if}
						</div>
					</div>
					<div class="text-right">
						<div class="font-bold text-yellow-400">${gpu.price.toLocaleString()}</div>
						{#if gpu.tdp}
							<div class="text-xs text-gray-500">{gpu.tdp}W TDP</div>
						{/if}
					</div>
				</div>
				<div class="text-xs text-gray-400 mb-1">{gpu.notes}</div>
				<div class="text-xs text-gray-500 italic mb-2">{gpu.advice}</div>
				{#if gpu.why}
					<div class="text-xs text-green-400 mb-2"><strong>WHY THIS:</strong> {gpu.why}</div>
				{/if}
				{#if gpu.whyNot}
					<div class="text-xs text-red-400 mb-2"><strong>WHY NOT:</strong> {gpu.whyNot}</div>
				{/if}
				{#if gpu.benchmarks}
					<BenchmarkBars benchmarks={gpu.benchmarks} />
				{/if}
				<div class="mt-2">
					<span class="text-xs text-gray-600">Buy: </span>
					{#each gpu.buyLinks as link}
						<a href={link.url} target="_blank" class="source-link mr-2">[{link.store}]</a>
					{/each}
				</div>
				{#if gpu.sources.length > 0}
					<div class="mt-1">
						<span class="text-xs text-gray-600">Reviews: </span>
						{#each gpu.sources as source}
							<a href={source.url} target="_blank" class="source-link mr-2">[{source.label}]</a>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
