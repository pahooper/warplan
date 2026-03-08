<script lang="ts">
	import { getBuildContext } from '$lib/state/build-context';
	import { components } from '$lib/data/components';
	import type { ComponentCategory } from '$lib/types';

	interface Props {
		category: ComponentCategory;
		title: string;
	}

	let { category, title }: Props = $props();

	const build = getBuildContext();

	const categoryComponents = $derived(components[category]);

	function selectComponent(id: string): void {
		build.selections[category] = id;
		build.activePreset = null;
	}
</script>

<div class="tactical-card p-4">
	<div class="military-header text-sm mb-3 text-yellow-500">{title}</div>
	<div class="space-y-2 text-xs">
		{#each categoryComponents as comp}
			<div
				class="component-option p-2 rounded"
				class:selected={build.selections[category] === comp.id}
				class:recommended={comp.recommended}
				role="button"
				tabindex="0"
				onclick={() => selectComponent(comp.id)}
				onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') selectComponent(comp.id); }}
			>
				<div class="font-bold text-xs">{comp.name}</div>
				<div class="text-yellow-400 font-bold text-xs">${comp.price}</div>
				{#if comp.notes}
					<div class="text-gray-500 text-xs">{comp.notes}</div>
				{/if}
				{#if comp.buyLinks.length > 0}
					<div>
						{#each comp.buyLinks as link}
							<a href={link.url} target="_blank" class="source-link">{link.store}</a>
							{' '}
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
