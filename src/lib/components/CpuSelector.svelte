<script lang="ts">
	import { getBuildContext } from '$lib/state/build-context';
	import { components } from '$lib/data/components';
	import BenchmarkBars from './BenchmarkBars.svelte';

	const build = getBuildContext();
</script>

<div class="tactical-card p-6">
	<div class="military-header text-xl mb-2 text-yellow-500 border-b-2 border-yellow-600 pb-2">
		⚙️ CPU SELECTION
	</div>
	<div class="text-xs text-gray-500 mb-4">
		Sources: <a href="https://gamersnexus.net/cpus/rip-intel-amd-ryzen-7-9800x3d-cpu-review-benchmarks-vs-7800x3d-285k-14900k-more" target="_blank" class="source-link">GamersNexus</a> |
		<a href="https://www.techspot.com/review/2931-amd-ryzen-9800x3d-vs-intel-core-14900k/" target="_blank" class="source-link">TechSpot</a> |
		<a href="https://www.tomshardware.com/pc-components/cpus/amd-ryzen-7-9850x3d-vs-intel-core-i9-14900k-faceoff" target="_blank" class="source-link">Tom's Hardware</a>
	</div>
	<div class="space-y-3">
		{#each components.cpu as cpu}
			<div
				class="component-option p-4 rounded"
				class:selected={build.selections.cpu === cpu.id}
				class:recommended={cpu.recommended}
				onclick={() => { build.selections.cpu = cpu.id; build.activePreset = null; }}
				role="button"
				tabindex="0"
				onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { build.selections.cpu = cpu.id; build.activePreset = null; } }}
			>
				<div class="flex justify-between items-start mb-2">
					<div class="flex-1">
						<div class="font-bold text-sm" class:text-green-400={cpu.owned} class:text-gray-200={!cpu.owned}>
							{cpu.name}
						</div>
						<div class="mt-1">
							{#if cpu.recommended}<span class="value-badge">RECOMMENDED</span>{/if}
							{#if cpu.owned}<span class="compatible-badge">OWNED</span>{/if}
							{#if cpu.id === 'i9-14900k'}<span class="danger-badge">DEGRADATION RISK</span>{/if}
						</div>
					</div>
					<div class="text-right">
						{#if cpu.owned}
							<div class="font-bold text-green-400">OWNED</div>
						{:else}
							<div class="font-bold text-yellow-400">${cpu.price.toLocaleString()}</div>
						{/if}
						{#if cpu.tdp}
							<div class="text-xs text-gray-500">{cpu.tdp}W TDP</div>
						{/if}
					</div>
				</div>
				<div class="text-xs text-gray-400 mb-1">{cpu.notes}</div>
				<div class="text-xs text-gray-500 italic mb-2">{cpu.advice}</div>
				{#if cpu.why}
					<div class="text-xs text-green-400 mb-2"><strong>WHY THIS:</strong> {cpu.why}</div>
				{/if}
				{#if cpu.whyNot}
					<div class="text-xs text-red-400 mb-2"><strong>WHY NOT:</strong> {cpu.whyNot}</div>
				{/if}
				{#if cpu.benchmarks}
					<BenchmarkBars benchmarks={cpu.benchmarks} />
				{/if}
				<div class="mt-2">
					<span class="text-xs text-gray-600">Buy: </span>
					{#each cpu.buyLinks as link}
						<a href={link.url} target="_blank" class="source-link mr-2">[{link.store}]</a>
					{/each}
				</div>
				{#if cpu.sources.length > 0}
					<div class="mt-1">
						<span class="text-xs text-gray-600">Reviews: </span>
						{#each cpu.sources as source}
							<a href={source.url} target="_blank" class="source-link mr-2">[{source.label}]</a>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
