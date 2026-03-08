<script lang="ts">
	import { getBuildContext } from '$lib/state/build-context';
	import { components } from '$lib/data/components';
	import type { ComponentCategory } from '$lib/types';

	const build = getBuildContext();

	const categoryLabels: Record<ComponentCategory, string> = {
		cpu: 'CPU',
		gpu: 'GPU',
		motherboard: 'Mobo',
		ram: 'RAM',
		cooling: 'Cool',
		storage: 'SSD',
		case: 'Case',
		psu: 'PSU'
	};

	const categories: ComponentCategory[] = [
		'cpu',
		'gpu',
		'motherboard',
		'ram',
		'cooling',
		'storage',
		'case',
		'psu'
	];

	function getPrice(category: ComponentCategory, id: string): number {
		const list = components[category];
		const comp = list.find((c) => c.id === id);
		return comp ? comp.price : 0;
	}

	const totalCost = $derived(
		categories.reduce((sum, cat) => sum + getPrice(cat, build.selections[cat]), 0)
	);

	const costBreakdown = $derived(
		categories.map((cat) => `${categoryLabels[cat]}: $${getPrice(cat, build.selections[cat]).toLocaleString()}`)
	);

	const showResale = $derived(build.selections.cpu !== 'i9-14900k');

	const netCostAfterResale = $derived(totalCost - 320);
</script>

<div class="tactical-card p-5">
	<div class="military-header text-lg mb-3 text-yellow-500">&#128176; TOTAL COST</div>
	<div class="text-4xl font-bold mb-2 text-yellow-400">${totalCost.toLocaleString()}</div>
	<div class="text-xs text-gray-400 mb-3">
		{costBreakdown.slice(0, 3).join(' | ')}<br />
		{costBreakdown.slice(3).join(' | ')}
	</div>
	{#if showResale}
		<div class="text-xs text-gray-500">
			<div class="text-green-400">&#128176; Sell i9-14900K for ~$320 on eBay</div>
			<div class="text-green-300">Net cost after resale: ~${netCostAfterResale.toLocaleString()}</div>
		</div>
	{/if}
</div>
