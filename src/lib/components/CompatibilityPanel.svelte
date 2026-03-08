<script lang="ts">
	import { getBuildContext } from '$lib/state/build-context';
	import { getCompatibilityWarnings } from '$lib/compatibility';
	import { components } from '$lib/data/components';

	const build = getBuildContext();

	const warnings = $derived(getCompatibilityWarnings(build.selections, components));
</script>

<div class="tactical-card p-5">
	<div class="military-header text-lg mb-3 text-yellow-500">&#9888;&#65039; INTEL REPORT</div>
	<div class="space-y-2 text-xs">
		{#each warnings as warning}
			{#if warning.level === 'error'}
				<div class="p-2 rounded bg-red-900/30 text-red-300">
					{@html warning.msg}
				</div>
			{:else if warning.level === 'warn'}
				<div class="p-2 rounded bg-yellow-900/30 text-yellow-300">
					{@html warning.msg}
				</div>
			{:else}
				<div class="p-2 rounded bg-green-900/30 text-green-300">
					{@html warning.msg}
				</div>
			{/if}
		{/each}
	</div>
</div>
