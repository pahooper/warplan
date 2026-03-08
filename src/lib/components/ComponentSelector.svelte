<script lang="ts">
	import { getBuildContext } from '$lib/state/build-context';
	import { components } from '$lib/data/components';
	import BenchmarkBars from './BenchmarkBars.svelte';
	import type { ComponentCategory, SourceLink, BaseComponent } from '$lib/types';

	interface AlertConfig {
		type: 'market' | 'intel';
		content: string;
		sources?: SourceLink[];
	}

	interface Props {
		category: ComponentCategory;
		title: string;
		sourceLinks?: SourceLink[];
		alert?: AlertConfig;
	}

	let { category, title, sourceLinks, alert }: Props = $props();

	const build = getBuildContext();

	const categoryComponents = $derived(components[category]);

	function selectComponent(id: string): void {
		build.selections[category] = id;
		build.activePreset = null;
	}

	function hasBenchmarks(comp: BaseComponent): comp is BaseComponent & { benchmarks: Record<string, number> } {
		return 'benchmarks' in comp && comp.benchmarks != null;
	}
</script>

<div class="tactical-card p-6">
	<div class="military-header text-xl mb-2 text-yellow-500 border-b-2 border-yellow-600 pb-2">
		{title}
	</div>

	{#if sourceLinks && sourceLinks.length > 0}
		<div class="text-xs text-gray-500 mb-4">
			Sources:
			{#each sourceLinks as link, i}
				{#if i > 0}
					{' | '}
				{/if}
				<a href={link.url} target="_blank" class="source-link">{link.label}</a>
			{/each}
		</div>
	{/if}

	{#if alert}
		<div class="market-alert text-xs mb-4">
			{@html alert.content}
			{#if alert.sources && alert.sources.length > 0}
				<div class="mt-1">
					{#each alert.sources as source}
						<a href={source.url} target="_blank" class="source-link">[{source.label}]</a>
						{' '}
					{/each}
				</div>
			{/if}
		</div>
	{/if}

	<div class="space-y-3">
		{#each categoryComponents as comp}
			<div
				class="component-option p-4 rounded"
				class:selected={build.selections[category] === comp.id}
				class:recommended={comp.recommended}
				role="button"
				tabindex="0"
				onclick={() => selectComponent(comp.id)}
				onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') selectComponent(comp.id); }}
			>
				<div class="flex justify-between items-start mb-2">
					<div class="flex-1">
						<div class="font-bold text-sm text-gray-200">{comp.name}</div>
						{#if comp.recommended}
							<div class="mt-1">
								<span class="value-badge">RECOMMENDED</span>
							</div>
						{/if}
					</div>
					<div class="text-right">
						<div class="font-bold text-yellow-400">${comp.price.toLocaleString()}</div>
					</div>
				</div>

				{#if comp.notes}
					<div class="text-xs text-gray-400 mb-1">{comp.notes}</div>
				{/if}

				{#if comp.advice}
					<div class="text-xs text-gray-500 italic mb-2">{comp.advice}</div>
				{/if}

				{#if comp.why}
					<div class="text-xs text-green-400 mb-2">
						<strong>WHY THIS:</strong>
						{comp.why}
					</div>
				{/if}

				{#if comp.whyNot}
					<div class="text-xs text-red-400 mb-2">
						<strong>WHY NOT:</strong>
						{comp.whyNot}
					</div>
				{/if}

				{#if hasBenchmarks(comp)}
					<div class="mt-2">
						<BenchmarkBars benchmarks={comp.benchmarks} />
					</div>
				{/if}

				{#if comp.buyLinks.length > 0}
					<div class="mt-2">
						<span class="text-xs text-gray-600">Buy: </span>
						{#each comp.buyLinks as link}
							<a href={link.url} target="_blank" class="source-link mr-2">[{link.store}]</a>
						{/each}
					</div>
				{/if}

				{#if comp.sources.length > 0}
					<div class="mt-1">
						<span class="text-xs text-gray-600">Reviews: </span>
						{#each comp.sources as source}
							<a href={source.url} target="_blank" class="source-link mr-2">[{source.label}]</a>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
