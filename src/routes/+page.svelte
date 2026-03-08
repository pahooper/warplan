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

				<!-- RAM with shortage alert -->
				<ComponentSelector
					category="ram"
					title="💾 RAM"
					alert={{
						type: 'market',
						content: '<strong class="text-yellow-300">⚠️ SHORTAGE ALERT:</strong> AI demand has consumed DRAM manufacturing. DDR5 prices are 300-400% above 2024 levels. 32GB kits that were $90 now cost $370+. No relief until late 2027.',
						sources: [
							{ label: 'Team Group Warning', url: 'https://www.tomshardware.com/pc-components/dram/the-ram-pricing-crisis-has-only-just-started-team-group-gm-warns-says-problem-will-get-worse-in-2026-as-dram-and-nand-prices-double-in-one-month' },
							{ label: 'XDA: Prices Tripled', url: 'https://www.xda-developers.com/ddr5-ram-prices-tripled-in-six-months-and-nobody-is-talking-about-when-theyll-come-back-down/' },
							{ label: 'TechRadar: Why So Expensive', url: 'https://www.techradar.com/pro/why-is-ram-so-expensive-right-now-its-more-complicated-than-you-think' }
						]
					}}
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
