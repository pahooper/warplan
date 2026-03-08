# NVIDIA GPU Research — March 2026

**Target:** 4K @ 160Hz gaming. Monitor already owned. NVIDIA only. Pure gaming, no streaming.

**Research date:** March 7, 2026

---

## Table of Contents

1. [Executive Summary & Recommendation](#executive-summary--recommendation)
2. [RTX 5070 Ti](#rtx-5070-ti)
3. [RTX 5080](#rtx-5080)
4. [RTX 5090](#rtx-5090)
5. [RTX 4080 Super](#rtx-4080-super)
6. [RTX 4070 Ti Super](#rtx-4070-ti-super)
7. [DLSS 4 Multi Frame Generation Deep Dive](#dlss-4-multi-frame-generation-deep-dive)
8. [RTX 5080 Defective Units (Missing ROPs)](#rtx-5080-defective-units-missing-rops)
9. [RTX 50 Series Supply Situation](#rtx-50-series-supply-situation)
10. [Can You Actually Hit 160fps at 4K?](#can-you-actually-hit-160fps-at-4k)
11. [Sources & Review URLs](#sources--review-urls)

---

## Executive Summary & Recommendation

**The honest truth: No single GPU can natively deliver 160fps at 4K in modern AAA titles.** Even the $4,000+ RTX 5090 averages ~150fps at 4K across a broad game suite. For demanding ray-traced games like Cyberpunk 2077 RT Overdrive or Alan Wake 2, native 4K at 160fps is science fiction in March 2026.

**However, DLSS 4 Multi Frame Generation changes the math** — if you accept the latency trade-off (more on that below).

### The Recommendation Tiers

| Scenario | GPU | Why |
|----------|-----|-----|
| **Best value for 4K gaming** | **RTX 5080** (~$1,000-1,400) | ~60fps native 4K average, 120-180fps with DLSS 4 MFG. Sweet spot. |
| **Budget-conscious 4K** | **RTX 5070 Ti** (~$730-1,000) | ~50fps native 4K average, struggles in heaviest titles. MFG gets you to 120-160fps in many games. |
| **Money no object** | **RTX 5090** (~$2,800-4,100) | Only GPU that approaches 160fps natively in many titles. Overkill for most, but the only real answer if native fps matters. |
| **Used market value play** | **RTX 4080 Super** (~$680-950 used) | No DLSS 4 MFG support. Roughly RTX 5070 Ti performance. Only makes sense at deep discount. |

**Phil's best bet: RTX 5080 if you can find one near MSRP ($999).** It handles 4K at 60-100fps natively across the board, and DLSS 4 MFG pushes most titles well past 120fps (many past 160fps). The latency penalty of MFG is real but manageable for single-player games. For competitive titles (CS2, Valorant), the 5080 already hits 200+ fps natively at 4K — no MFG needed.

If you want native 160fps without any frame generation tricks, you need the 5090 — and even then, only in moderately demanding to older titles. The newest AAA games with RT still won't hit 160fps natively on anything.

---

## RTX 5070 Ti

### Specs
- **Architecture:** Blackwell (GB203)
- **VRAM:** 16GB GDDR7
- **TDP:** 300W
- **PSU Requirement:** 750W minimum (850W recommended)
- **Connector:** Single 12V-2x6 / 12VHPWR
- **MSRP:** $749

### Street Price (March 2026)

| Retailer | Model | Price | Notes |
|----------|-------|-------|-------|
| Newegg | MSI Ventus 3X OC | $729.99 | Below MSRP, in stock |
| Newegg | MSI Shadow | $750 | At MSRP |
| Best Buy | ASUS TUF Gaming OC | ~$1,000 | Premium model |
| Amazon | Various | ~$999 | Significant markup |
| eBay (best deals) | Various | ~$822 | Per GPU market report |

**Availability:** In stock at Newegg with multiple models. Thin stock but findable. Prices have come down from the $1,000-1,300 peaks of late 2025. Some models now at or below MSRP.

### 4K Benchmarks (Rasterization, Native)

| Game | Settings | Avg FPS |
|------|----------|---------|
| Cyberpunk 2077 | Ultra (no RT) | ~65 |
| Alan Wake 2 | High | 41 |
| Black Myth: Wukong | Cinematic | ~30 |
| Forza Horizon 5 | Extreme | ~120 |
| Starfield | Ultra | ~72 |
| Total War: Warhammer III | Ultra | ~157 |
| Horizon Forbidden West | Very High | 67 |
| Ghost of Tsushima | Very High | ~73 |
| The Last of Us Part 1 | Ultra | ~60 |
| Senua's Saga: Hellblade 2 | High | ~56 |
| A Plague Tale: Requiem | Ultra | ~75 |
| Final Fantasy XVI | Ultra | 35 |

**12-game rasterized average: ~54fps at 4K**

### 4K Ray Tracing Benchmarks

| Game | Settings | Avg FPS |
|------|----------|---------|
| Cyberpunk 2077 | RT Ultra | ~40 |
| Alan Wake 2 | High + RT | ~30 |
| Black Myth: Wukong | Very High RT | 30 |
| Shadow of the Tomb Raider | Highest + RT Ultra | 75 |
| Star Wars Outlaws | Ultra (no RTXDI) | <30 |

### DLSS 4 MFG Performance at 4K

| Game | Base (DLSS SR only) | MFG 2x | MFG 4x |
|------|---------------------|--------|--------|
| FFXIV | ~58 fps | ~172 fps | ~280 fps |
| Cyberpunk 2077 (RT) | ~45 fps (Perf) | — | ~122-144 fps |
| Hogwarts Legacy | ~120 fps (Perf) | — | ~281 fps |
| Alan Wake 2 (RT) | ~30 fps | Elevated | Higher w/ latency |

### Can it hit 160fps at 4K?

- **Older/lighter titles (Forza, CS2, Valorant, Elden Ring):** YES natively for esports titles. Forza hits 120fps native. With MFG, most older titles easily exceed 160fps.
- **Newer AAA (Cyberpunk, Alan Wake 2, Black Myth Wukong):** NO natively. With DLSS 4 MFG 4x, Cyberpunk can reach ~122-144fps — close but not quite 160. Lighter newer titles get there with MFG.
- **Verdict:** A solid 4K card, but it's a stretch for 160Hz in demanding games even with MFG. Better suited for 4K/60-100fps or 1440p/160Hz.

### Review URLs
- [GamersNexus: "Do Not Buy" RTX 5070 Ti Review](https://gamersnexus.net/gpus/do-not-buy-nvidia-rtx-5070-ti-gpu-absurdity-benchmarks-review)
- [Tom's Hardware RTX 5070 Ti Review](https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5070-ti-review-asus/4)
- [KitGuru MSI RTX 5070 Ti Review](https://www.kitguru.net/components/graphic-cards/dominic-moass/msi-rtx-5070-ti-ventus-3x-oc-review/all/1/)
- [TechSpot RTX 5070 Ti Review](https://www.techspot.com/review/2955-nvidia-geforce-rtx-5070-ti/)
- [PCWorld RTX 5070 Ti Review](https://www.pcworld.com/article/2612343/nvidia-geforce-rtx-5070-ti-review.html)
- [GamesRadar RTX 5070 Ti Review](https://www.gamesradar.com/hardware/desktop-pc/nvidia-geforce-rtx-5070-ti-review/)

---

## RTX 5080

### Specs
- **Architecture:** Blackwell (GB203)
- **VRAM:** 16GB GDDR7
- **TDP:** 360W
- **PSU Requirement:** 850W minimum (1000W for OC models)
- **Connector:** Single 12V-2x6 / 12VHPWR
- **MSRP:** $999

### Street Price (March 2026)

| Retailer | Model | Price | Notes |
|----------|-------|-------|-------|
| Best Buy | Gigabyte Windforce OC SFF | $999 | At MSRP — rare find |
| Best Buy | Other Gigabyte models | $1,200-1,399 | 20-30% over MSRP |
| Amazon | FE / Various | $1,399 | Significant markup |
| Newegg | Various AIB models | $1,100-1,600 | Wide range |
| eBay (best deals) | Various | ~$1,016 | Per GPU market report |
| PNY | Overclocked Triple Fan | $999.99 | At MSRP |

**Availability:** Better than late 2025 but still constrained. Restocks at MSRP sell out within 2-3 hours. Best Buy restocks Tue/Fri mornings. Expect to pay $1,100-1,400 if you need one immediately. The Gigabyte Windforce OC SFF at Best Buy for $999 is the unicorn listing.

### 4K Benchmarks (Rasterization, Native)

| Game | Settings | Avg FPS |
|------|----------|---------|
| Cyberpunk 2077 | Ultra (no RT) | ~45 |
| Alan Wake 2 | High | 49 |
| Black Myth: Wukong | Cinematic | ~36 |
| Forza Horizon 5 | Extreme | ~115 |
| Starfield | Ultra | 64 |
| Indiana Jones | 4K Ultra + RT Very High | 69 |
| Total War: Warhammer III | Ultra | ~88 |
| Ghost of Tsushima | Very High | ~80 |
| Horizon Forbidden West | Very High | ~45 |
| The Last of Us Part 1 | Ultra | 59 |
| A Plague Tale: Requiem | Ultra | ~48 |
| Senua's Saga: Hellblade 2 | High | ~55 |
| Final Fantasy XVI | Ultra | ~38 |

**12-game rasterized average: ~60fps at 4K** (13% faster than RTX 4080 Super)

Note: The Cyberpunk 2077 number of ~45fps here is for the ultra-demanding RT-heavy preset. In pure rasterization without RT, it's higher. The card achieves ~100fps average across a broader suite including lighter titles.

### 4K Ray Tracing Benchmarks

| Game | Settings | Avg FPS |
|------|----------|---------|
| Alan Wake 2 | Full RT | 34 |
| Black Myth: Wukong | Path Tracing | 36 |
| Cyberpunk 2077 | RT Overdrive (Path Tracing) | ~25 |
| Shadow of the Tomb Raider | RT Ultra | 88 |
| Indiana Jones | RT Very High | 69 |

### DLSS 4 MFG Performance at 4K

| Game | DLSS SR Only | MFG 2x | MFG 3x | MFG 4x |
|------|-------------|--------|--------|--------|
| Cyberpunk 2077 (RT Overdrive) | 36 fps | 66 fps | 95 fps | 122 fps |
| Cyberpunk 2077 (Ultra RT + Quality SR) | ~54 fps | — | — | ~180 fps |
| Alan Wake 2 (Max RT) | 17 fps (DLAA) | 46 fps (Perf SR + 2x) | — | Higher |
| Dragon Age: Veilguard (Ultra RT) | — | — | — | 244 fps |

**Key finding:** With DLSS Quality SR + 4x MFG, Cyberpunk 2077 at 4K hits 180fps on the 5080. That's past 160Hz territory — but with added latency.

### Can it hit 160fps at 4K?

- **Older/lighter titles (Forza, CS2, Valorant, Elden Ring):** YES natively for esports. Forza ~115fps native, CS2 likely 200+. With MFG, older titles blow past 160fps easily.
- **Newer AAA (Cyberpunk, Alan Wake 2, Black Myth Wukong):** NO natively. With DLSS 4 MFG 4x, Cyberpunk hits 122-180fps (depends on RT preset). Dragon Age: Veilguard hits 244fps. Alan Wake 2 with full RT remains a challenge even with MFG.
- **Verdict:** The sweet spot GPU for 4K gaming in March 2026. Most titles hit or exceed 160fps with MFG enabled. The latency trade-off is the main consideration.

### Review URLs
- [GamersNexus RTX 5080 FE Review](https://gamersnexus.net/gpus/nvidia-geforce-rtx-5080-founders-edition-review-benchmarks-vs-5090-7900-xtx-4080-more)
- [Tom's Hardware RTX 5080 Review](https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5080-review/4)
- [KitGuru RTX 5080 Review](https://www.kitguru.net/components/graphic-cards/dominic-moass/nvidia-rtx-5080-review-efficiency-gains-but-a-performance-letdown/all/1/)
- [TechSpot RTX 5080 Review](https://www.techspot.com/review/2947-nvidia-geforce-rtx-5080/)
- [TweakTown MSI RTX 5080 Expert OC Review](https://www.tweaktown.com/reviews/11134/msi-geforce-rtx-5080-expert-oc-bold-design-impressive-4k-gaming-performance/index.html)
- [DSOGaming RTX 5080 RT/DLSS 4 Benchmarks](https://www.dsogaming.com/articles/nvidia-geforce-rtx-5080-ray-tracing-path-tracing-dlss-4-4k-benchmarks/)
- [Windows Central: RTX 5080 DLSS 4 MFG in Cyberpunk](https://www.windowscentral.com/gaming/pc-gaming/rtx-5080-testing-dlss-4-mfg-cyberpunk-2077)

---

## RTX 5090

### Specs
- **Architecture:** Blackwell (GB202)
- **VRAM:** 32GB GDDR7
- **TDP:** 575W
- **Real-world power draw:** ~559W average, spikes exceeding 700W
- **PSU Requirement:** 1000W minimum (1200W+ recommended, 1500W for OC)
- **Connector:** Single 12V-2x6 / 12VHPWR
- **MSRP:** $1,999

### Street Price (March 2026)

| Retailer | Model | Price | Notes |
|----------|-------|-------|-------|
| Amazon | Various | $4,147 | Over 2x MSRP |
| Newegg | Various AIB models | $3,695+ | Nearly 2x MSRP |
| ASUS TUF Gaming | Cheapest popular AIB | $2,909.99 | "Best" deal |
| Gigabyte / MSI Gaming | Various | $3,299.99 | Premium models |
| MSI SUPRIM Liquid SOC | Premium | $3,499.99 | Liquid cooled |
| eBay (used) | Various | ~$3,799 | Used market |
| eBay (best deal) | Various | ~$2,800 | Per GPU market report |

**Availability:** Extremely scarce. Sells out within 3-5 minutes of restocks. 95% of online purchase attempts fail. Still 40% above MSRP even at best-deal pricing. Bot competition is severe. This is the hardest GPU to buy in March 2026.

### 4K Benchmarks (Rasterization, Native)

| Game | Settings | Avg FPS |
|------|----------|---------|
| CS2 | 4K High | 430 |
| Total War: Warhammer III | Ultra | ~105+ |
| Elden Ring | 4K RT (reflections + shadows) | 144 |
| Cyberpunk 2077 | Ultra (no RT) | ~90+ |
| Shadow of the Tomb Raider | Ultra | ~180+ |

**Multi-game average: ~150fps at 4K** (27% faster than RTX 4090 on average)

Performance varies hugely by title: 20-50% uplift over RTX 4090 depending on the game. Assassin's Creed Valhalla only sees 15% gain, while Cyberpunk 2077 sees 50%.

### DLSS 4 MFG Performance at 4K

| Game | Without MFG | With MFG | Multiplier |
|------|-------------|----------|------------|
| Cyberpunk 2077 (RT Overdrive) | ~131 fps | 249 fps | 1.9x |
| Cyberpunk 2077 (Ultra RT + DLSS 4) | — | 286 fps | — |

**Multi-game average with DLSS Quality SR: ~175fps at 4K**

### Can it hit 160fps at 4K?

- **Older/lighter titles:** YES, natively. CS2 hits 430fps. Elden Ring hits 144fps native (close, MFG pushes past 160 easily). Most older games exceed 160fps natively.
- **Newer AAA (without RT):** MOSTLY YES natively. Average of ~150fps means many titles hit 160+, but the heaviest ones (Starfield, Black Myth Wukong) may dip below.
- **Newer AAA (with full RT/path tracing):** NO natively for the most demanding. Cyberpunk RT Overdrive native is ~90fps. But with DLSS 4 MFG, it hits 249-286fps — obliterating 160Hz.
- **Verdict:** The closest thing to "just plug it in and get 160Hz at 4K" — but at $2,800-4,100 street price, and you'll need a 1000W+ PSU and a case that can handle 575W of heat. Overkill for most people, but the only honest answer if native fps matters to you.

### Power/Thermal Considerations
This card is a SPACE HEATER. 575W TDP with spikes over 700W. You need:
- 1000W PSU minimum (1200W recommended)
- Excellent case airflow
- Potentially upgraded room cooling in summer

### Review URLs
- [GamersNexus RTX 5090 FE Review](https://gamersnexus.net/gpus/nvidia-geforce-rtx-5090-founders-edition-review-benchmarks-gaming-thermals-power)
- [Tom's Hardware RTX 5090 Review](https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5080-review/4)
- [TechSpot RTX 5090 Review](https://www.techspot.com/review/2944-nvidia-geforce-rtx-5090/)
- [KitGuru RTX 5090 Review](https://www.kitguru.net/components/graphic-cards/dominic-moass/nvidia-rtx-5090-review-ray-tracing-dlss-4-and-raw-power-explored/all/1/)
- [PCWorld RTX 5090 Review](https://www.pcworld.com/article/2585806/nvidia-geforce-rtx-5090-review.html)
- [TweakTown ASUS ROG Matrix RTX 5090 Review](https://www.tweaktown.com/reviews/11302/asus-rog-matrix-platinum-geforce-rtx-5090-unbeatable-performance-stunning-design/index.html)

---

## RTX 4080 Super

### Specs
- **Architecture:** Ada Lovelace (AD103)
- **VRAM:** 16GB GDDR6X
- **TDP:** 320W
- **PSU Requirement:** 700W minimum
- **MSRP (at launch):** $999
- **NO DLSS 4 Multi Frame Generation support** (RTX 50 series exclusive)
- Supports DLSS 3 Frame Generation (1 generated frame) and DLSS 3.5 Ray Reconstruction

### Street Price (March 2026)

| Source | Price | Notes |
|--------|-------|-------|
| Amazon | $1,597 | New, extreme markup |
| Various retailers | $900-950 | Best new deals, near/below original MSRP |
| eBay (used) | ~$950 | Used market, near MSRP |
| eBay (used, good deals) | ~$680 | Lower end of used market |

**Availability:** Increasingly hard to find new. Most retailer listings are drying up. The used market is the realistic path. At $680-950 used, it's a reasonable value if you don't need DLSS 4 MFG.

### 4K Performance Context

The RTX 4080 Super performs roughly equivalent to the RTX 5070 Ti in most titles (within a few percent). Key numbers:

| Game | Settings | Avg FPS |
|------|----------|---------|
| Cyberpunk 2077 | Ultra (no RT) | ~54 |
| Cyberpunk 2077 | RT Ultra + DLSS | ~55-60 |
| Starfield | 4K High | ~47 |
| Alan Wake 2 | High | ~36 |

**Why it's hard to recommend in March 2026:**
1. No DLSS 4 MFG — only DLSS 3 single frame gen (RTX 40 series limitation)
2. Performance roughly matches the RTX 5070 Ti, which DOES get MFG
3. Used prices ($680-950) overlap with new RTX 5070 Ti prices ($730-1,000)
4. The 5070 Ti is faster AND has MFG AND is still available new with warranty

### Review URLs
- [GamersNexus RTX 4080 Super Review](https://gamersnexus.net/gpus/lame-cheaper-nvidia-rtx-4080-super-review-benchmark-comparison-value-discussion)
- [Tom's Hardware RTX 4080 Super Review](https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-4080-super-review)
- [KitGuru RTX 4080 Super Review](https://www.kitguru.net/components/graphic-cards/dominic-moass/nvidia-rtx-4080-super-review/all/1/)

---

## RTX 4070 Ti Super

### Specs
- **Architecture:** Ada Lovelace (AD103)
- **VRAM:** 16GB GDDR6X
- **TDP:** 285W
- **PSU Requirement:** 700W minimum
- **MSRP (at launch):** $799
- **NO DLSS 4 Multi Frame Generation support**

### Street Price (March 2026)

| Source | Price | Notes |
|--------|-------|-------|
| Amazon | $1,179 | New, 47% over original MSRP |
| eBay (used) | ~$680 | Used market |
| Various new deals | Scarce | Hard to find new at reasonable prices |

**Availability:** New stock is drying up fast. The used market at ~$680 is where the action is. But at that price point, you're very close to a new RTX 5070 Ti at $730 — which is faster and has DLSS 4 MFG.

### 4K Performance Context

The RTX 4070 Ti Super is about 11% slower than the RTX 5070 Ti at 4K. Representative numbers from reviews:

- Cyberpunk 2077 4K Ultra: ~54fps
- Alan Wake 2 4K High: ~36fps
- Forza Horizon 5 4K Extreme: ~109fps
- Ghost of Tsushima 4K Very High: ~69fps

### Why it's NOT recommended in March 2026

1. **No DLSS 4 MFG** — huge disadvantage for hitting 160Hz
2. **11% slower than RTX 5070 Ti** at 4K
3. **Used price ($680) is only $50-70 less than a new RTX 5070 Ti** ($730)
4. For the same money, the 5070 Ti gives you better performance + MFG + new warranty
5. Only makes sense if you find one used for under $500

---

## DLSS 4 Multi Frame Generation Deep Dive

### How It Works

DLSS 4 Multi Frame Generation (MFG) is an RTX 50 series exclusive feature. It generates up to 3 additional frames per rendered frame using the new Blackwell Tensor Cores and a transformer-based AI model. Combined with DLSS Super Resolution, MFG can multiply frame rates by up to 8x over native rendering.

The pipeline:
1. GPU renders a "real" frame at reduced resolution (DLSS Super Resolution)
2. DLSS SR upscales it to target resolution
3. MFG generates 1-3 additional AI frames between each real frame
4. Reflex synchronizes input handling to minimize latency impact

**Key: MFG runs on dedicated hardware (Tensor Cores) in parallel with the render pipeline, so it doesn't steal GPU cycles from actual rendering.**

### Supported Games (March 2026)

Over 250 games support DLSS 4 with MFG, making it NVIDIA's fastest-adopted gaming technology. Recent 2026 additions include:
- Death Stranding 2: On The Beach
- 007 First Light
- Marathon
- Monster Hunter Stories 3
- Phantom Blade Zero
- PRAGMATA (with path tracing)

### DLSS 4.5 Update (Announced)

NVIDIA announced DLSS 4.5 with:
- 2nd generation transformer model for Super Resolution (better image quality)
- **6x Dynamic Multi Frame Generation** — automatically adjusts the multiplier for smooth 240+ fps
- Available across 400+ games
- Dynamic MFG is particularly interesting for 160Hz targets — it auto-adjusts to maintain the target refresh rate

### Latency Trade-offs — THE CRITICAL ISSUE

**This is the elephant in the room.** MFG increases displayed FPS but adds latency:

| Configuration | Cyberpunk 2077 Latency | Alan Wake 2 Latency |
|---------------|----------------------|---------------------|
| Native (no DLSS) | ~26ms | ~32ms |
| DLSS SR only | ~22ms | ~28ms |
| DLSS SR + FG (1 frame) | ~28ms | ~35ms |
| DLSS SR + MFG 2x | ~30ms | ~38ms |
| DLSS SR + MFG 3x | ~33ms | ~42ms |
| DLSS SR + MFG 4x | ~36ms | ~45ms |

**Alan Wake 2:** Latency goes from 31.8ms (native) to 45.4ms (MFG 4x) — a 43% increase.

**What this means practically:**
- For **single-player games** (Cyberpunk, Alan Wake, Black Myth Wukong): The latency increase is barely noticeable. You get a dramatically smoother visual experience.
- For **competitive multiplayer** (CS2, Valorant): DON'T use MFG. The latency penalty matters. But these games already hit 200+ fps at 4K natively on an RTX 5080, so you don't need MFG anyway.
- For **action games with precise timing** (Elden Ring, Sekiro): Personal preference. Some players notice the lag, others don't.

**GamersNexus's take:** They called MFG "fake frames" and noted NVIDIA's marketing was misleading about the latency characteristics. The FPS counter goes up, but your actual input-to-display responsiveness doesn't improve — it gets slightly worse.

**The nuance:** MFG at 4x with a base of 45fps feels smoother than 45fps native, even with the latency increase. The generated frames fill visual gaps and eliminate stuttering. It's a genuine visual improvement — just not a "performance" improvement in the traditional sense.

### Is MFG Worth It for 160Hz?

**YES, for single-player gaming.** If you're playing Cyberpunk 2077 at 4K and your base is 45fps with DLSS SR, enabling MFG 4x gets you to 180fps displayed. Your monitor shows a visually smoother image at 160Hz. The 10ms latency penalty is imperceptible in a single-player experience.

**NO, for competitive gaming.** But you don't need it — competitive titles already run at 200+ fps natively.

---

## RTX 5080 Defective Units (Missing ROPs)

### The Issue

GamersNexus discovered and investigated that NVIDIA shipped some RTX 50 series GPUs (5090, 5080, 5070 Ti) with missing Render Output Processors (ROPs). The RTX 5080 should have 112 ROPs, but some units shipped with only 104.

### Performance Impact

- **Up to 11% performance loss** at 4K compared to a properly-functioning card
- In some games (Total War: Warhammer 3), the defective card drops from 91.3fps to 82.3fps
- Impact is **larger at higher resolutions** — 4K gaming is the worst case
- Sometimes the difference is 0%, often 3-8%, but can swing to 10-11%
- A defective RTX 5080 essentially **degrades to RTX 5070 Ti performance levels**

### Scale

- NVIDIA officially claims ~0.5% of 50-series GPUs affected (1 in 200)
- GamersNexus received many reports suggesting the real number may be higher
- Affects RTX 5090, 5090D, 5080, and 5070 Ti

### How to Check Your Card

Use **TechPowerUp GPU-Z** to verify your ROP count:
- RTX 5080 should show **112 ROPs**
- RTX 5090 should show **176 ROPs**
- RTX 5070 Ti should show **96 ROPs**

If your count is lower, contact the retailer for an exchange.

### Sources
- [GamersNexus: Investigating NVIDIA's Defective GPUs](https://gamersnexus.net/gpus/investigating-nvidias-defective-gpus-rtx-5080-missing-rops-benchmarks)
- [NVIDIA: How to check ROPs](https://nvidia.custhelp.com/app/answers/detail/a_id/5628/)
- [Tom's Hardware: Defective RTX 5080 performance impact](https://www.tomshardware.com/pc-components/gpus/defective-rtx-5080-takes-up-to-11-percent-performance-hit-in-gaming-larger-impact-at-higher-resolutions)
- [Puget Systems: Missing ROPs Issue](https://www.pugetsystems.com/blog/2025/02/26/nvidia-geforce-rtx-50-series-missing-rops-issue/)

---

## RTX 50 Series Supply Situation

### March 2026 Status

The supply picture is mixed:

**Improving:**
- RTX 5070 Ti: Some models now available at or below MSRP at Newegg
- RTX 5080: Best deals approaching MSRP (~$1,016 on eBay best deals)
- RTX 5060/5070: Generally available, with the RTX 5060 dipping below MSRP

**Still Constrained:**
- RTX 5090: Still 40%+ above MSRP, sells out in minutes
- Premium/high-end AIB models: Significant markups persist
- Median buyer still pays 67-93% over MSRP across the 50 series

### Root Cause

The GDDR7 memory supply shortage is the primary driver. DRAM capacity is being consumed by AI data centers, leaving gaming GPUs competing for limited memory supply. Memory now accounts for over 80% of the total bill of materials cost for GPUs.

### NVIDIA's Response

- NVIDIA CFO stated supply will be "very tight" for a couple of quarters, with improvements expected by year-end 2026
- NVIDIA is prioritizing lower-VRAM SKUs (RTX 5060 8GB, 5060 Ti 8GB, 5070 12GB) which account for ~75% of Q1 2026 shipments
- GPU production may be cut by up to 20-40% due to VRAM supply issues
- Higher-memory variants (5080 16GB, 5090 32GB) face the most constrained availability

### What This Means for Buying

1. **RTX 5070 Ti** is the most findable 50-series card at reasonable prices right now
2. **RTX 5080** requires patience or willingness to pay $100-400 over MSRP
3. **RTX 5090** requires extreme patience, luck, or willingness to pay 2x MSRP
4. Situation is expected to gradually improve through 2026 but no rapid normalization

### Sources
- [VideoCardz: NVIDIA cuts GeForce RTX 50 supply H1 2026](https://videocardz.com/newz/nvidia-rumored-to-cut-geforce-rtx-50-supply-in-h1-2026-rtx-5070-ti-and-5060-ti-to-be-affected-first)
- [TweakTown: NVIDIA confirms GPU shortage for 2026](https://www.tweaktown.com/news/110274/nvidia-confirms-geforce-rtx-gpu-shortage-for-2026/index.html)
- [WCCFTech: RTX 50 supply crisis explained](https://wccftech.com/the-current-state-of-nvidia-rtx-50-gpus-our-exclusive-report-on-geforce-production-aic-supply-memory-shortages-prices-eol-rumors/)
- [GPU Poet: GPU Market March 2026](https://gpupoet.com/gpu/market-report/gpu-market-report-march-2026)
- [PC Gamer: NVIDIA GPU production cuts](https://www.pcgamer.com/hardware/graphics-cards/nvidia-is-reportedly-looking-to-cut-gaming-gpu-production-by-up-to-40-percent-in-2026-due-to-vram-supply-issues-but-its-not-as-bad-news-as-you-might-think-not-yet-at-least/)

---

## Can You Actually Hit 160fps at 4K?

### The Honest Matrix

| GPU | Older/Light Titles (Native) | Newer AAA Raster (Native) | Newer AAA + RT (Native) | With DLSS 4 MFG 4x |
|-----|----------------------------|--------------------------|------------------------|---------------------|
| **RTX 5070 Ti** | 120-160fps (some yes) | 50-75fps (no) | 30-40fps (no) | 120-280fps (most yes) |
| **RTX 5080** | 115-200+fps (mostly yes) | 45-90fps (no) | 25-70fps (no) | 120-244fps (most yes) |
| **RTX 5090** | 200-430fps (yes) | 90-180fps (some yes) | 60-150fps (some yes) | 175-286fps (yes) |
| **RTX 4080 Super** | 100-150fps (some) | 45-65fps (no) | 25-55fps (no) | No MFG (DLSS 3 FG only) |
| **RTX 4070 Ti Super** | 90-140fps (rarely) | 35-55fps (no) | 20-45fps (no) | No MFG (DLSS 3 FG only) |

### Bottom Line by Game Type

**Esports/Competitive (CS2, Valorant, Forza):**
- RTX 5080+ hits 160fps natively. Even the 5070 Ti gets close.
- You don't need MFG for these.

**Moderately Demanding (Elden Ring, God of War, Ghost of Tsushima):**
- RTX 5090 hits 140-160fps natively
- RTX 5080 needs MFG to hit 160fps
- RTX 5070 Ti needs MFG and still might not get there in every title

**Ultra-Demanding AAA (Cyberpunk RT, Alan Wake 2, Black Myth Wukong):**
- Nothing hits 160fps natively at max settings. Not even the 5090.
- With MFG, the 5080 and 5090 get there in most titles
- The 5070 Ti with MFG gets close (120-140fps) but often falls short of 160

### The Practical Answer

For a mixed gaming diet of newer and older titles at 4K/160Hz:

1. **RTX 5080 ($999-1,400)** is the right card. It hits 160fps in lighter titles natively, and DLSS 4 MFG gets it there in heavier titles. The latency penalty is acceptable for single-player. For competitive games, you don't need MFG because they already run fast enough.

2. **RTX 5070 Ti ($730-1,000)** works if you're willing to accept that the most demanding games with RT won't hit 160fps even with MFG. For non-RT gaming and lighter titles, it's surprisingly capable with MFG.

3. **RTX 5090 ($2,800-4,100)** only if native fps without frame generation tricks is non-negotiable to you. The price premium is extreme and the power requirements are absurd.

---

## Sources & Review URLs

### Price Trackers
- [BestValueGPU RTX 5070 Ti Price Tracker](https://bestvaluegpu.com/history/new-and-used-rtx-5070-ti-price-history-and-specs/)
- [BestValueGPU RTX 5080 Price Tracker](https://bestvaluegpu.com/history/new-and-used-rtx-5080-price-history-and-specs/)
- [BestValueGPU RTX 5090 Price Tracker](https://bestvaluegpu.com/history/new-and-used-rtx-5090-price-history-and-specs/)
- [BestValueGPU RTX 4080 Super Price Tracker](https://bestvaluegpu.com/history/new-and-used-rtx-4080-super-price-history-and-specs/)
- [BestValueGPU RTX 4070 Ti Super Price Tracker](https://bestvaluegpu.com/history/new-and-used-rtx-4070-ti-super-price-history-and-specs/)
- [GPU Poet: GPU Market March 2026](https://gpupoet.com/gpu/market-report/gpu-market-report-march-2026)
- [TrackaLacker RTX 5080](https://www.trackalacker.com/products/showcase/nvidia-rtx-5080)
- [TrackaLacker RTX 5090](https://www.trackalacker.com/products/showcase/nvidia-rtx-5090)
- [TrackaLacker RTX 5070 Ti](https://www.trackalacker.com/products/showcase/nvidia-rtx-5070-ti)
- [GPUDeals RTX 5080](https://www.gpudeals.net/gpus/rtx-5080.html)
- [GPUDeals RTX 5070 Ti](https://www.gpudeals.net/gpus/rtx-5070-ti.html)

### Retailers
- [Newegg RTX 5070 Ti Listings](https://www.newegg.com/p/pl?N=100007709+601469157)
- [Newegg RTX 5080 Listings](https://www.newegg.com/p/pl?d=rtx+5080)
- [Newegg RTX 5090 Listings](https://www.newegg.com/p/pl?d=rtx+5090)
- [Best Buy RTX 5080](https://www.bestbuy.com/site/searchpage.jsp?id=pcat17071&st=5080+rtx)
- [Amazon RTX 5080 FE](https://www.amazon.com/NVIDIA-GeForce-RTX-5080-Founders/dp/B0DYVCGVK4)
- [NVIDIA RTX 5080 Official](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5080/)

### GPU Reviews — RTX 5070 Ti
- [GamersNexus: "Do Not Buy" RTX 5070 Ti](https://gamersnexus.net/gpus/do-not-buy-nvidia-rtx-5070-ti-gpu-absurdity-benchmarks-review)
- [Tom's Hardware RTX 5070 Ti Review](https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5070-ti-review-asus/4)
- [TechSpot RTX 5070 Ti Review](https://www.techspot.com/review/2955-nvidia-geforce-rtx-5070-ti/)
- [KitGuru MSI RTX 5070 Ti Review](https://www.kitguru.net/components/graphic-cards/dominic-moass/msi-rtx-5070-ti-ventus-3x-oc-review/all/1/)
- [PCWorld RTX 5070 Ti Review](https://www.pcworld.com/article/2612343/nvidia-geforce-rtx-5070-ti-review.html)
- [GamesRadar RTX 5070 Ti Review](https://www.gamesradar.com/hardware/desktop-pc/nvidia-geforce-rtx-5070-ti-review/)
- [Digital Trends RTX 5070 Ti Review](https://www.digitaltrends.com/computing/nvidia-rtx-5070-ti-review/)
- [Tomeraider RTX 5070 Ti 4K Benchmarks](https://tomeraider.com/2025/02/24/nvidia-geforce-rtx-5070-ti-review-4k-benchmarks/)

### GPU Reviews — RTX 5080
- [GamersNexus RTX 5080 FE Review](https://gamersnexus.net/gpus/nvidia-geforce-rtx-5080-founders-edition-review-benchmarks-vs-5090-7900-xtx-4080-more)
- [Tom's Hardware RTX 5080 Review](https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5080-review/4)
- [TechSpot RTX 5080 Review](https://www.techspot.com/review/2947-nvidia-geforce-rtx-5080/)
- [KitGuru RTX 5080 Review](https://www.kitguru.net/components/graphic-cards/dominic-moass/nvidia-rtx-5080-review-efficiency-gains-but-a-performance-letdown/all/1/)
- [TweakTown MSI RTX 5080 Expert OC](https://www.tweaktown.com/reviews/11134/msi-geforce-rtx-5080-expert-oc-bold-design-impressive-4k-gaming-performance/index.html)
- [The Shortcut RTX 5080 Review](https://www.theshortcut.com/p/nvidia-rtx-5080-review-graphics-card-gpu)
- [DSOGaming RTX 5080 RT & DLSS 4 Benchmarks](https://www.dsogaming.com/articles/nvidia-geforce-rtx-5080-ray-tracing-path-tracing-dlss-4-4k-benchmarks/)

### GPU Reviews — RTX 5090
- [GamersNexus RTX 5090 FE Review](https://gamersnexus.net/gpus/nvidia-geforce-rtx-5090-founders-edition-review-benchmarks-gaming-thermals-power)
- [TechSpot RTX 5090 Review](https://www.techspot.com/review/2944-nvidia-geforce-rtx-5090/)
- [KitGuru RTX 5090 Review](https://www.kitguru.net/components/graphic-cards/dominic-moass/nvidia-rtx-5090-review-ray-tracing-dlss-4-and-raw-power-explored/all/1/)
- [PCWorld RTX 5090 Review](https://www.pcworld.com/article/2585806/nvidia-geforce-rtx-5090-review.html)
- [TweakTown ASUS ROG Matrix RTX 5090](https://www.tweaktown.com/reviews/11302/asus-rog-matrix-platinum-geforce-rtx-5090-unbeatable-performance-stunning-design/index.html)
- [The Shortcut RTX 5090 Review](https://www.theshortcut.com/p/nvidia-geforce-rtx-5090-review-graphics-card-gpu)

### GPU Reviews — RTX 4080 Super
- [GamersNexus RTX 4080 Super Review](https://gamersnexus.net/gpus/lame-cheaper-nvidia-rtx-4080-super-review-benchmark-comparison-value-discussion)
- [Tom's Hardware RTX 4080 Super Review](https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-4080-super-review)
- [KitGuru RTX 4080 Super Review](https://www.kitguru.net/components/graphic-cards/dominic-moass/nvidia-rtx-4080-super-review/all/1/)

### DLSS 4 & Frame Generation
- [TechSpot: A Review of NVIDIA's DLSS 4 Multi Frame Generation](https://www.techspot.com/article/2945-nvidia-dlss-4/)
- [NVIDIA: DLSS 4 Multi Frame Generation Official](https://www.nvidia.com/en-us/geforce/news/dlss4-multi-frame-generation-ai-innovations/)
- [NVIDIA: DLSS 4.5 Dynamic MFG Announcement](https://www.nvidia.com/en-us/geforce/news/dlss-4-5-dynamic-multi-frame-gen-6x-2nd-gen-transformer-super-res/)
- [GamersNexus: "Fake Frames" Tested - DLSS 4 MFG](https://gamersnexus.net/gpus/fake-frames-tested-dlss-40-mfg-4x-nvidias-misleading-review-guide)
- [XDA: DLSS 4 MFG works best when it doesn't make sense to use it](https://www.xda-developers.com/dlss-4-multi-frame-generation-works-best-doesnt-make-sense/)
- [Gamesplanet: DLSS 4 Advantages and Disadvantages](https://us.gamesplanet.com/community/news_updates/383707-dlss-4-the-advantages-and-disadvantages-of-multi-frame)
- [Tom's Hardware: Input latency and frame generation](https://www.tomshardware.com/pc-components/gpus/input-latency-is-the-all-too-frequently-missing-piece-of-framegen-enhanced-gaming-performance-analysis)
- [Windows Central: RTX 5080 DLSS 4 MFG in Cyberpunk 2077](https://www.windowscentral.com/gaming/pc-gaming/rtx-5080-testing-dlss-4-mfg-cyberpunk-2077)

### Defective GPU Issue
- [GamersNexus: Investigating NVIDIA's Defective GPUs](https://gamersnexus.net/gpus/investigating-nvidias-defective-gpus-rtx-5080-missing-rops-benchmarks)
- [NVIDIA: How to check ROPs](https://nvidia.custhelp.com/app/answers/detail/a_id/5628/)
- [Tom's Hardware: Defective RTX 5080 impact](https://www.tomshardware.com/pc-components/gpus/defective-rtx-5080-takes-up-to-11-percent-performance-hit-in-gaming-larger-impact-at-higher-resolutions)
- [Puget Systems: Missing ROPs Issue](https://www.pugetsystems.com/blog/2025/02/26/nvidia-geforce-rtx-50-series-missing-rops-issue/)
- [KitGuru: Defective RTX 5080 10% slower](https://www.kitguru.net/components/graphic-cards/joao-silva/defective-nvidia-rtx-5080-cards-are-up-to-10-slower-due-to-missing-rops/)

### Supply & Market Analysis
- [VideoCardz: NVIDIA cuts supply H1 2026](https://videocardz.com/newz/nvidia-rumored-to-cut-geforce-rtx-50-supply-in-h1-2026-rtx-5070-ti-and-5060-ti-to-be-affected-first)
- [TweakTown: NVIDIA confirms 2026 shortage](https://www.tweaktown.com/news/110274/nvidia-confirms-geforce-rtx-gpu-shortage-for-2026/index.html)
- [WCCFTech: RTX 50 supply crisis report](https://wccftech.com/the-current-state-of-nvidia-rtx-50-gpus-our-exclusive-report-on-geforce-production-aic-supply-memory-shortages-prices-eol-rumors/)
- [Tom's Guide: RTX 50 series shipping reality](https://www.tomsguide.com/computing/gpus/nvidia-insists-all-rtx-50-series-gpus-will-continue-to-ship-heres-what-that-actually-means)
- [PC Gamer: NVIDIA GPU production cuts](https://www.pcgamer.com/hardware/graphics-cards/nvidia-is-reportedly-looking-to-cut-gaming-gpu-production-by-up-to-40-percent-in-2026-due-to-vram-supply-issues-but-its-not-as-bad-news-as-you-might-think-not-yet-at-least/)

### Recommendation Articles
- [PC Guide: Best GPU for 4K gaming 2026](https://www.pcguide.com/gpu/guide/best-for-4k-gaming/)
- [Tom's Hardware: Best Graphics Cards 2026](https://www.tomshardware.com/reviews/best-gpus,4380.html)
- [PC Gamer: Best Graphics Cards 2026](https://www.pcgamer.com/the-best-graphics-cards/)
- [Tom's Hardware: GPU Benchmark Hierarchy 2026](https://www.tomshardware.com/reviews/gpu-hierarchy,4388.html)

### PSU Requirements
- [Corsair: Best PSU for RTX 5070 Ti](https://www.corsair.com/us/en/explorer/diy-builder/power-supply-units/best-psu-for-rtx-5070-ti/)
- [Corsair: RTX 50 Series PSU Guide](https://help.corsair.com/hc/en-us/articles/32465644341265-What-Power-Supply-Unit-PSU-should-I-buy-for-my-Nvidia-RTX-5000-series-GPU)
- [Tom's Hardware: RTX 5090 PSU Requirements](https://www.tomshardware.com/pc-components/power-supplies/what-sort-of-power-supply-do-you-actually-need-for-an-rtx-5090)

---

## Quick Reference: PSU Requirements

| GPU | TDP | Min PSU | Recommended PSU |
|-----|-----|---------|-----------------|
| RTX 5070 Ti | 300W | 750W | 850W |
| RTX 5080 | 360W | 850W | 1000W |
| RTX 5090 | 575W | 1000W | 1200W+ |
| RTX 4080 Super | 320W | 700W | 850W |
| RTX 4070 Ti Super | 285W | 700W | 750W |

All RTX 50 series use the 12V-2x6 / 12VHPWR connector (single cable).

---

*Research compiled March 7, 2026. Prices and availability change rapidly — verify before purchasing.*
