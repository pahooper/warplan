<script lang="ts">
	import { setBuildContext } from '$lib/state/build-context';
	import { presets } from '$lib/data/presets';
	import Header from '$lib/components/Header.svelte';
	import IntelBriefing from '$lib/components/IntelBriefing.svelte';
	import PresetCards from '$lib/components/PresetCards.svelte';
	import CpuSelector from '$lib/components/CpuSelector.svelte';
	import GpuSelector from '$lib/components/GpuSelector.svelte';
	import ComponentSelector from '$lib/components/ComponentSelector.svelte';
	import CompactSelector from '$lib/components/CompactSelector.svelte';
	import CostSidebar from '$lib/components/CostSidebar.svelte';
	import CompatibilityPanel from '$lib/components/CompatibilityPanel.svelte';
	import CombatRating from '$lib/components/CombatRating.svelte';
	import BuildGuides from '$lib/components/BuildGuides.svelte';
	import ExportButton from '$lib/components/ExportButton.svelte';
	import ResetButton from '$lib/components/ResetButton.svelte';

	let build = $state({
		selections: { ...presets.overlord.selection },
		activePreset: 'overlord' as string | null
	});

	setBuildContext(build);
</script>

<div class="min-h-screen p-4 md:p-6">
	<div class="max-w-7xl mx-auto">
		<Header />
		<IntelBriefing />
		<PresetCards />

		<div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
			<!-- Component Selectors (3 cols) -->
			<div class="lg:col-span-3 space-y-4">
				<CpuSelector />
				<GpuSelector />

				<!-- Motherboard -->
				<ComponentSelector
					category="motherboard"
					title="🔧 MOTHERBOARD"
					sourceLinks={[
						{ label: 'PC Guide: Best for 9800X3D', url: 'https://www.pcguide.com/motherboard/guide/best-for-ryzen-7-9800x3d/' },
						{ label: "Tom's HW: Best Boards", url: 'https://www.tomshardware.com/best-picks/best-motherboards' }
					]}
				/>

				<!-- RAM -->
				<ComponentSelector
					category="ram"
					title="💾 RAM"
				/>

				<!-- Cooling -->
				<ComponentSelector
					category="cooling"
					title="❄️ COOLING SYSTEM"
					sourceLinks={[
						{ label: 'GN: Arctic LF III', url: 'https://gamersnexus.net/coolers/new-best-arctic-liquid-freezer-iii-360-280-cpu-cooler-review-benchmarks' },
						{ label: "Tom's HW: Best AIOs", url: 'https://www.tomshardware.com/best-picks/best-aio-coolers' },
						{ label: 'GN: PA120 SE', url: 'https://gamersnexus.net/coolers/champ-41-thermalright-peerless-assassin-cpu-cooler-review-benchmarks' }
					]}
				/>

				<!-- Storage/Case/PSU compact grid -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					<CompactSelector category="storage" title="💽 STORAGE" />
					<CompactSelector category="case" title="📦 CASE" />
					<CompactSelector category="psu" title="⚡ PSU" />
				</div>
			</div>

			<!-- Sidebar (1 col) -->
			<div class="space-y-4">
				<CostSidebar />
				<CompatibilityPanel />
				<CombatRating />
				<BuildGuides />
				<ExportButton />
				<ResetButton />
			</div>
		</div>

		<!-- Footer -->
		<div class="tactical-card p-4 mt-6 text-center text-xs text-gray-500">
			<div>Operation: Gaming Rig | Research compiled March 8, 2026 | All prices verified from multiple retailers</div>
			<div class="mt-1">Benchmark data: GamersNexus, Tom's Hardware, TechSpot, KitGuru | Prices: Amazon, Newegg, Micro Center, B&H Photo, Best Buy</div>
			<div class="mt-1">Made with love by Uncle Phil ❤️</div>
		</div>
	</div>
</div>
