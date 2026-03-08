<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { components } from '$lib/data/components';
  import { presets } from '$lib/data/presets';
  import { calculateCombatRating } from '$lib/compatibility';
  import type { ComponentCategory, CpuComponent, GpuComponent } from '$lib/types';

  const categories: ComponentCategory[] = ['cpu', 'gpu', 'motherboard', 'ram', 'cooling', 'storage', 'case', 'psu'];
  const labels = ['PROCESSOR', 'GRAPHICS CARD', 'MOTHERBOARD', 'MEMORY', 'COOLING', 'STORAGE', 'CHASSIS', 'POWER SUPPLY'];

  let hasValidBuild = $derived(
    Boolean(page.url.searchParams.get('cpu') && page.url.searchParams.get('gpu'))
  );

  let resolvedItems = $derived.by(() => {
    return categories.map(cat => {
      const id = page.url.searchParams.get(cat) ?? '';
      return components[cat].find(c => c.id === id) ?? null;
    });
  });

  let cpu = $derived(resolvedItems[0] as CpuComponent | null);
  let gpu = $derived(resolvedItems[1] as GpuComponent | null);

  let totalCost = $derived(
    resolvedItems.reduce((sum, item) => sum + (item?.price ?? 0), 0)
  );

  let presetParam = $derived(page.url.searchParams.get('preset'));
  let presetName = $derived(
    presetParam && presets[presetParam]
      ? presets[presetParam].name.toUpperCase()
      : 'CUSTOM OPERATION'
  );

  let combat = $derived.by(() => {
    if (!cpu || !gpu) return null;
    return calculateCombatRating(cpu.perf4k, gpu.perf4k);
  });

  let gpuPerf = $derived(gpu?.perf4k ?? 85);

  let can160 = $derived(
    gpuPerf >= 90 ? 'YES — with DLSS 4 Multi Frame Generation'
    : gpuPerf >= 80 ? 'SOME TITLES — DLSS required'
    : 'UNLIKELY at Ultra settings'
  );

  let rating = $derived(
    gpuPerf >= 90 ? 'EXCELLENT' : gpuPerf >= 80 ? 'STRONG' : 'ADEQUATE'
  );

  let ratingColor = $derived(
    gpuPerf >= 90 ? '#4ade80' : '#d4af37'
  );

  let showResale = $derived(cpu && !cpu.owned);

  // Per-item owned flag — avoids repeated 'owned' in item checks in template
  let ownedFlags = $derived(resolvedItems.map(item =>
    item !== null && 'owned' in item && (item as CpuComponent).owned
  ));

  let dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  let benchmarkEntries = $derived.by(() => {
    if (!gpu?.benchmarks) return [];
    return Object.entries(gpu.benchmarks).map(([game, fps]) => {
      const maxFps = 200;
      const pct = Math.min((fps / maxFps) * 100, 100);
      const barColor = pct > 50 ? '#4ade80' : pct > 35 ? '#d4af37' : '#ef4444';
      const gameName = game.replace(/_/g, ' ').replace(/4k/g, '4K');
      return { gameName, fps, pct, barColor };
    });
  });
</script>

<svelte:head>
  <title>{presetName} — Build Orders</title>
</svelte:head>

{#if !hasValidBuild}
  <div class="fallback">
    <div class="fallback-title">⚠ NO BUILD CONFIGURATION</div>
    <p>No build parameters detected. Return to the configurator to select components.</p>
    <a href={resolve('/')} class="fallback-link">← Return to Configurator</a>
  </div>
{:else}
  <div class="page">
    <div class="watermark">CLASSIFIED</div>

    <div class="header">
      <div class="stars">★ ★ ★</div>
      <div class="title">{presetName}</div>
      <div class="subtitle">Tactical Build Configuration</div>
      <div class="classified">CLASSIFIED — FOR LANGLEY'S EYES ONLY</div>
    </div>

    <div class="meta">
      <div class="meta-item">
        <div class="meta-label">Operative</div>
        <div class="meta-value">LANGLEY</div>
      </div>
      <div class="meta-item">
        <div class="meta-label">Date Issued</div>
        <div class="meta-value">{dateStr}</div>
      </div>
      <div class="meta-item">
        <div class="meta-label">Objective</div>
        <div class="meta-value">4K @ 160Hz AAA Gaming</div>
      </div>
      <div class="meta-item">
        <div class="meta-label">Theater</div>
        <div class="meta-value">Newer & Older Games</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">★ Hardware Manifest</div>
      {#each resolvedItems as item, i (categories[i])}
        {#if item}
          <div class="part-row">
            <div>
              <div class="part-category">{labels[i]}</div>
              <div class="part-name">{item.name}</div>
              <div class="part-store">{item.buyLinks?.[0]?.store ?? ''}</div>
            </div>
            <div class="part-price" class:part-owned={ownedFlags[i]}>
              {ownedFlags[i] ? 'OWNED' : `$${item.price.toLocaleString()}`}
            </div>
          </div>
        {/if}
      {/each}
    </div>

    <div class="total-section">
      <div class="total-label">TOTAL DEPLOYMENT COST</div>
      <div class="total-amount">${totalCost.toLocaleString()}</div>
    </div>

    {#if showResale}
      <div class="resale-section">
        <div class="resale-title">RESALE INTELLIGENCE</div>
        <div class="resale-content">
          <div>
            <div class="resale-text">Sell existing i9-14900K on eBay</div>
            <div class="resale-subtext">Estimated recovery: $305–$340 (~$278 after fees)</div>
          </div>
          <div class="resale-right">
            <div class="resale-net-label">NET COST</div>
            <div class="resale-net-amount">${(totalCost - 320).toLocaleString()}</div>
          </div>
        </div>
      </div>
    {/if}

    <div class="combat-section">
      <div class="section-title">★ Combat Assessment</div>
      <div class="combat-grid">
        <div class="combat-stat">
          <div class="combat-stat-label">4K Native</div>
          <div class="combat-stat-value" style="color:#e5e7eb;">~{Math.round(gpuPerf * 0.65)}–{Math.round(gpuPerf * 1.1)} fps</div>
        </div>
        <div class="combat-stat">
          <div class="combat-stat-label">160Hz Target</div>
          <div class="combat-stat-value" style="color:{ratingColor};">{rating}</div>
        </div>
        <div class="combat-stat">
          <div class="combat-stat-label">160Hz Capable</div>
          <div class="combat-stat-value combat-stat-small" style="color:{ratingColor};">{can160}</div>
        </div>
      </div>

      {#if benchmarkEntries.length > 0}
        <div class="benchmark-section">
          <div class="benchmark-label">GPU Benchmarks — 4K Ultra</div>
          {#each benchmarkEntries as bench (bench.gameName)}
            <div class="benchmark-row">
              <div class="benchmark-game">{bench.gameName}</div>
              <div class="benchmark-bar-container">
                <div class="benchmark-bar-fill" style="width:{bench.pct}%;background:{bench.barColor};"></div>
              </div>
              <div class="benchmark-fps">{bench.fps} fps</div>
            </div>
          {/each}
        </div>
      {/if}
    </div>

    <div class="footer">
      <div>Research compiled by Uncle Phil ❤️</div>
      <div class="footer-sources">Sources: GamersNexus • Tom's Hardware • TechSpot • KitGuru</div>
      <div>Prices: Amazon • Newegg • Best Buy • Micro Center</div>
      <div class="footer-date">March 2026 • All prices verified from multiple retailers</div>
    </div>
  </div>

  <button class="print-btn" onclick={() => window.print()}>★ PRINT ORDERS</button>
{/if}

<style>
  /* === Fallback === */
  .fallback {
    max-width: 600px;
    margin: 100px auto;
    text-align: center;
    font-family: 'Courier Prime', monospace;
    color: #d4d4d4;
  }
  .fallback-title {
    font-family: 'Special Elite', cursive;
    font-size: 24px;
    color: #d4af37;
    letter-spacing: 4px;
    margin-bottom: 16px;
  }
  .fallback-link {
    display: inline-block;
    margin-top: 20px;
    color: #60a5fa;
    text-decoration: none;
  }
  .fallback-link:hover {
    text-decoration: underline;
  }

  /* === Page Container === */
  .page {
    max-width: 800px;
    margin: 0 auto;
    background: linear-gradient(180deg, #0f1419 0%, #1a2332 100%);
    min-height: 100vh;
    position: relative;
    overflow: hidden;
  }
  .page::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: repeating-linear-gradient(
      0deg, transparent, transparent 2px,
      rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px
    );
    pointer-events: none;
  }

  /* === Watermark === */
  .watermark {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-30deg);
    font-family: 'Special Elite', cursive;
    font-size: 120px;
    color: rgba(212, 175, 55, 0.04);
    letter-spacing: 20px;
    white-space: nowrap;
    pointer-events: none;
  }

  /* === Header === */
  .header {
    border-bottom: 3px double #d4af37;
    padding: 32px 40px 24px;
    text-align: center;
    position: relative;
  }
  .stars { color: #d4af37; font-size: 28px; letter-spacing: 8px; }
  .title {
    font-family: 'Special Elite', cursive;
    font-size: 32px;
    color: #d4af37;
    letter-spacing: 6px;
    text-transform: uppercase;
    margin: 8px 0;
    text-shadow: 0 0 20px rgba(212,175,55,0.3);
  }
  .subtitle {
    font-size: 14px;
    color: #6b7280;
    letter-spacing: 4px;
    text-transform: uppercase;
  }
  .classified {
    display: inline-block;
    border: 2px solid #dc2626;
    color: #dc2626;
    padding: 2px 16px;
    font-family: 'Special Elite', cursive;
    font-size: 12px;
    letter-spacing: 4px;
    margin-top: 12px;
    transform: rotate(-2deg);
  }

  /* === Meta Grid === */
  .meta {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    padding: 16px 40px;
    border-bottom: 1px solid #374151;
    font-size: 13px;
  }
  .meta-item { padding: 6px 0; }
  .meta-label { color: #6b7280; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; }
  .meta-value { color: #e5e7eb; }

  /* === Sections === */
  .section {
    padding: 20px 40px;
  }
  .section-title {
    font-family: 'Special Elite', cursive;
    font-size: 16px;
    color: #d4af37;
    letter-spacing: 3px;
    text-transform: uppercase;
    border-bottom: 1px solid #374151;
    padding-bottom: 8px;
    margin-bottom: 16px;
  }

  /* === Parts === */
  .part-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px 0;
    border-bottom: 1px solid rgba(75, 85, 99, 0.3);
  }
  .part-row:last-child { border-bottom: none; }
  .part-category {
    font-size: 10px;
    color: #9ca3af;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 2px;
  }
  .part-name {
    font-size: 14px;
    color: #e5e7eb;
    font-weight: bold;
  }
  .part-store {
    font-size: 11px;
    color: #60a5fa;
    margin-top: 2px;
  }
  .part-price {
    font-size: 16px;
    font-weight: bold;
    color: #d4af37;
    white-space: nowrap;
  }
  .part-owned { color: #4ade80; }

  /* === Total === */
  .total-section {
    padding: 20px 40px;
    border-top: 3px double #d4af37;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .total-label {
    font-family: 'Special Elite', cursive;
    font-size: 18px;
    color: #d4af37;
    letter-spacing: 3px;
  }
  .total-amount {
    font-size: 36px;
    font-weight: bold;
    color: #d4af37;
    text-shadow: 0 0 20px rgba(212,175,55,0.3);
  }

  /* === Resale Intelligence === */
  .resale-section {
    background: #1a2e1a;
    border: 2px solid #2d5a2d;
    border-radius: 8px;
    padding: 16px;
    margin: 0 40px 20px;
  }
  .resale-title {
    font-family: 'Special Elite', cursive;
    font-size: 14px;
    color: #4ade80;
    letter-spacing: 2px;
    margin-bottom: 8px;
  }
  .resale-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .resale-text { color: #86efac; }
  .resale-subtext { color: #6b7280; font-size: 12px; }
  .resale-right { text-align: right; }
  .resale-net-label { color: #4ade80; font-size: 20px; font-weight: bold; }
  .resale-net-amount { color: #86efac; font-size: 24px; font-weight: bold; }

  /* === Combat Assessment === */
  .combat-section {
    padding: 20px 40px 12px;
  }
  .combat-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
  }
  .combat-stat {
    text-align: center;
    background: rgba(30, 58, 76, 0.4);
    border: 1px solid #374151;
    border-radius: 8px;
    padding: 12px;
  }
  .combat-stat-label { font-size: 10px; color: #9ca3af; letter-spacing: 2px; text-transform: uppercase; }
  .combat-stat-value { font-size: 20px; font-weight: bold; margin-top: 4px; }
  .combat-stat-small { font-size: 12px; }

  /* === Benchmarks === */
  .benchmark-section { margin-top: 12px; }
  .benchmark-label {
    font-size: 11px;
    color: #6b7280;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .benchmark-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 6px;
  }
  .benchmark-game {
    width: 120px;
    color: #9ca3af;
    font-size: 12px;
    text-transform: uppercase;
  }
  .benchmark-bar-container {
    flex: 1;
    height: 14px;
    background: #1f2937;
    border-radius: 3px;
    overflow: hidden;
  }
  .benchmark-bar-fill {
    height: 100%;
    border-radius: 3px;
  }
  .benchmark-fps {
    width: 60px;
    text-align: right;
    color: #e5e7eb;
    font-size: 13px;
    font-weight: bold;
  }

  /* === Footer === */
  .footer {
    padding: 20px 40px;
    border-top: 1px solid #374151;
    text-align: center;
    font-size: 11px;
    color: #6b7280;
  }
  .footer-sources { margin-top: 4px; }
  .footer-date { margin-top: 8px; color: #4b5563; }

  /* === Print Button === */
  .print-btn {
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: #d4af37;
    color: #0f1419;
    border: none;
    padding: 12px 32px;
    font-family: 'Special Elite', cursive;
    font-size: 16px;
    letter-spacing: 2px;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  }
  .print-btn:hover { background: #b8972e; }

  /* === Print Styles === */
  @media print {
    :global(body) { background: white; color: #1a1a1a; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .page { background: white !important; box-shadow: none; }
    .page::before { display: none; }
    .print-btn { display: none; }
    .watermark { color: rgba(212, 175, 55, 0.08); }
    /* Header */
    .header { border-bottom-color: #1a1a1a; }
    .stars { color: #8b6914; }
    .title { color: #1a1a1a; text-shadow: none; }
    .subtitle { color: #555; }
    .classified { border-color: #b91c1c; color: #b91c1c; }
    /* Meta */
    .meta { border-bottom-color: #ccc; }
    .meta-label { color: #555; }
    .meta-value { color: #1a1a1a; }
    /* Hardware manifest */
    .section-title { color: #1a1a1a; border-bottom-color: #ccc; }
    .part-category { color: #555; }
    .part-name { color: #1a1a1a; }
    .part-store { color: #2563eb; }
    .part-price { color: #8b6914; }
    .part-owned { color: #166534; }
    .part-row { border-bottom-color: #ddd; }
    /* Total */
    .total-section { border-top-color: #1a1a1a; }
    .total-label { color: #1a1a1a; }
    .total-amount { color: #8b6914; text-shadow: none; }
    /* Resale */
    .resale-section { background: #f0fdf4; border-color: #86efac; }
    .resale-title { color: #166534; }
    .resale-text { color: #166534; }
    .resale-subtext { color: #555; }
    .resale-net-label { color: #166534; }
    .resale-net-amount { color: #166534; }
    /* Combat */
    .combat-stat { background: #f3f4f6; border-color: #d1d5db; }
    .combat-stat-label { color: #555; }
    .combat-stat-value { color: #1a1a1a; }
    .combat-stat-small { color: #1a1a1a; }
    /* Benchmarks */
    .benchmark-label { color: #555; }
    .benchmark-game { color: #555; }
    .benchmark-bar-container { background: #e5e7eb; }
    .benchmark-fps { color: #1a1a1a; }
    /* Footer */
    .footer { border-top-color: #ccc; color: #555; }
    .footer-date { color: #777; }
  }

  @page { size: letter; margin: 0.5in; }
</style>
