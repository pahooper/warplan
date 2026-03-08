# Gaming PC Build Research: 4K @ 160Hz AAA Gaming
## March 2026 Component Analysis

---

# CPU RESEARCH

---

## Intel Core i9-14900K (Currently Owned)

### Current Used Resale Value
- **eBay used listings:** $305-$340 depending on condition
- **eBay new/sealed listings:** $375-$400
- **New retail (Pangoly tracking):** $468.97 average, low of $370

### Retailer Links
- [eBay i9-14900K listings](https://www.ebay.com/sch/i.html?_nkw=i9+14900k&_sop=12)
- [Pangoly Price History](https://pangoly.com/en/price-history/intel-core-i9-14900k)

### 4K Gaming Performance
- At 4K, the i9-14900K is **GPU-limited in most titles**, meaning CPU differences compress significantly
- Still delivers strong frame rates at 4K, but loses to 9800X3D by ~18-30% at lower resolutions where CPU matters more
- In CPU-bound scenarios: 310 FPS in FFXIV at 1080p (vs 380 FPS for 9800X3D)

### Thermal Issues - CRITICAL CONCERN
- **Known degradation bug** in 13th/14th gen Intel CPUs causing irreversible silicon damage
- Intel confirmed voltage regulation bugs in Enhanced Thermal Velocity Boost (eTVB)
- Multiple microcode updates issued (0x129, 0x12B, 0x12F) but damage to already-affected chips is **permanent**
- Users report CPUs becoming unusable after 1-1.5 years of use
- Real-world power draw: 125W TDP but can spike to **253W+ under load**
- Requires beefy cooling solution (360mm AIO minimum recommended)

### Is It Still Competitive?
- For 4K gaming: **Yes, barely** -- GPU is the bottleneck at 4K, so CPU differences are minimal
- For longevity: **No** -- degradation risk makes this a ticking time bomb
- For efficiency: **No** -- draws 2x the power of AMD alternatives for similar/worse gaming performance

### Review/Benchmark URLs
- [TechSpot: 9800X3D vs 14900K detailed comparison](https://www.techspot.com/review/2931-amd-ryzen-9800x3d-vs-intel-core-14900k/)
- [GamersNexus: 9800X3D review with 14900K comparisons](https://gamersnexus.net/cpus/rip-intel-amd-ryzen-7-9800x3d-cpu-review-benchmarks-vs-7800x3d-285k-14900k-more)
- [Tom's Hardware: 9900X3D vs 14900K faceoff](https://www.tomshardware.com/pc-components/cpus/amd-ryzen-9-9900x3d-vs-intel-core-i9-14900k-faceoff)
- [XDA: i9-14900K degradation report](https://www.xda-developers.com/intel-core-i9-14900k-deteriorated/)

### Power Consumption
- TDP: 125W (but misleading)
- Real-world gaming: ~180-200W
- All-core load: **253W+**
- 26.4% less thermally efficient than 9800X3D

### Pros for 4K Gaming
- Already owned (no additional cost)
- Strong multi-threaded productivity performance (24 cores / 32 threads)
- At 4K, GPU-limited anyway so CPU difference is minimal

### Cons for 4K Gaming
- Known degradation/instability issues (potentially fatal long-term)
- Extremely high power consumption and heat output
- Requires expensive cooling
- Dead-end LGA 1700 platform (no upgrade path)
- Loses to 9800X3D by 18-30% in gaming benchmarks

---

## AMD Ryzen 7 9800X3D -- THE GAMING KING

### Current Retail Prices
- **Micro Center:** $449.99 ([link](https://www.microcenter.com/product/687907/amd-ryzen-7-9800x3d-granite-ridge-am5-470ghz-8-core-boxed-processor-heatsink-not-included))
- **Newegg:** ~$469.99 ([link](https://www.newegg.com/amd-ryzen-7-9000-series-ryzen-7-9800x3d-granite-ridge-zen-5-socket-am5-desktop-cpu-processor/p/N82E16819113877))
- **Amazon:** ~$461-$479 ([link](https://www.amazon.com/AMD-9800X3D-16-Thread-Desktop-Processor/dp/B0DKFMSMYK))
- **MSRP:** $479

### 4K Gaming Benchmarks vs i9-14900K
| Game (1080p) | 9800X3D | i9-14900K | Delta |
|---|---|---|---|
| FFXIV Dawntrail | 380 FPS | 310 FPS | +22.6% |
| F1 24 | ~250 FPS | ~220 FPS | +13.6% |
| Overall average (45 games) | -- | -- | **+24-30% for 9800X3D** |

At 4K, these gaps compress to ~5-10% due to GPU bottlenecking.

### Power Consumption
- TDP: 120W
- PPT (Package Power Tracking): 162W max
- Real-world gaming: ~90-120W
- **Dramatically more efficient than i9-14900K**

### Review/Benchmark URLs
- [GamersNexus: 9800X3D full review](https://gamersnexus.net/cpus/rip-intel-amd-ryzen-7-9800x3d-cpu-review-benchmarks-vs-7800x3d-285k-14900k-more)
- [TechSpot: 9800X3D vs i9-14900K](https://www.techspot.com/review/2931-amd-ryzen-9800x3d-vs-intel-core-14900k/)
- [Tom's Hardware: 9850X3D vs 14900K](https://www.tomshardware.com/pc-components/cpus/amd-ryzen-7-9850x3d-vs-intel-core-i9-14900k-faceoff)

### Pros for 4K Gaming
- **Undisputed best gaming CPU on the market** (even beats 9950X3D in some titles)
- 96MB 3D V-Cache dramatically improves game performance
- Excellent power efficiency (120W TDP)
- AM5 platform with long upgrade path (AMD committed through 2027+)
- Easy to cool with mid-range tower cooler
- Best price-to-gaming-performance ratio of any CPU

### Cons for 4K Gaming
- Only 8 cores / 16 threads (weaker in heavy productivity vs 14900K)
- At 4K specifically, the advantage over 14900K shrinks since GPU is the bottleneck
- Being superseded by 9850X3D (slightly faster, $499)

---

## AMD Ryzen 7 9850X3D (Refresh -- Launched Jan 29, 2026)

### Current Retail Price
- **MSRP:** $499
- Available at major retailers

### Key Differences vs 9800X3D
- Max boost: 5.6 GHz (vs 5.2 GHz on 9800X3D) -- 400 MHz higher
- ~7% performance uplift over 9800X3D
- Same 120W TDP, same 96MB L3 cache, same 8 cores/16 threads

### Review/Benchmark URLs
- [Tom's Hardware: 9850X3D vs 14900K faceoff](https://www.tomshardware.com/pc-components/cpus/amd-ryzen-7-9850x3d-vs-intel-core-i9-14900k-faceoff)
- [Tom's Guide: 9850X3D overview](https://www.tomsguide.com/computing/cpus/amds-new-ryzen-7-9850x3d-unveiled-heres-how-it-stacks-up)
- [Tweaktown: 9850X3D confirmation](https://www.tweaktown.com/news/109836/amd-confirms-ryzen-7-9850x3d-release-date-and-price/index.html)

### Verdict
Only worth it for new builds. The $50 premium over 9800X3D for ~7% gains is marginal. If building new, get this. If considering switching from 9800X3D, skip it.

---

## AMD Ryzen 9 9950X3D

### Current Retail Prices
- **Newegg:** ~$644-$676 (with promo codes as low as $644) ([link](https://www.newegg.com/amd-ryzen-9-9000-series-ryzen-9-9950x3d-granite-ridge-socket-am5-desktop-cpu-processor/p/N82E16819113884))
- **Amazon:** ~$669 ([CamelCamelCamel tracker](https://camelcamelcamel.com/product/B0DVZSG8D5))
- **MSRP:** $699

### 4K Gaming Performance
- **Virtually ties the 9800X3D in gaming** -- within 1-3% in most titles
- 37% faster than Intel Core Ultra 9 285K in 1080p gaming
- At 4K, differences between all top CPUs compress to ~10% due to GPU bottleneck
- 16 cores / 32 threads with 128MB L3 cache

### Key Gaming Benchmarks (1080p -- CPU-limited)
| Game | 9950X3D | 9800X3D |
|---|---|---|
| Baldur's Gate 3 | 155 FPS | 155 FPS |
| Cyberpunk 2077 | 219 FPS | 219 FPS |
| Dragon's Dogma 2 | 132 FPS | 128 FPS |
| FFXIV | 373 FPS | 380 FPS |
| Starfield | 171 FPS | 165 FPS |

### Review/Benchmark URLs
- [GamersNexus: 9950X3D full review](https://gamersnexus.net/cpus/amd-ryzen-9-9950x3d-cpu-review-benchmarks-vs-9800x3d-285k-9950x-more)
- [Tom's Hardware: 9950X3D review](https://www.tomshardware.com/pc-components/cpus/amd-ryzen-9-9950x3d-review)
- [Tom's Hardware: Gaming benchmarks page](https://www.tomshardware.com/pc-components/cpus/amd-ryzen-9-9950x3d-review/2)

### Power Consumption
- TDP: 170W
- Higher than 9800X3D but still far more efficient than i9-14900K

### Pros for 4K Gaming
- Ties 9800X3D in gaming while offering 2x the cores for productivity
- Best "do-everything" CPU if you need both gaming AND heavy productivity
- 128MB L3 3D V-Cache

### Cons for 4K Gaming
- **$200+ more than 9800X3D for identical gaming performance**
- Higher TDP (170W vs 120W)
- The premium is only justified if you do serious content creation/productivity
- For pure gaming, this is wasted money

---

## AMD Ryzen 9 9900X3D

### Current Retail Price
- **MSRP:** $599
- Launched March 2026

### Gaming Performance
- 28% faster than Intel 285K in 1080p gaming
- 18% faster than i9-14900K in gaming
- But **~8% SLOWER than the cheaper 9800X3D in gaming**
- 12 cores / 24 threads, 140MB total cache

### Review/Benchmark URLs
- [Tom's Hardware: 9900X3D review](https://www.tomshardware.com/pc-components/cpus/amd-ryzen-9-9900x3d-review)
- [KitGuru: 9900X3D review](https://www.kitguru.net/components/cpu/leo-waldock/amd-ryzen-9-9900x3d-review/all/1/)

### Verdict
**SKIP.** Awkward middle child -- $120 more than 9800X3D but slower in gaming, $100 less than 9950X3D but fewer cores. No compelling reason to buy this for any use case.

---

## Intel Core Ultra 9 285K (Arrow Lake)

### Gaming Performance -- DISAPPOINTING
- **Loses to the i9-14900K it replaces** in 12 out of 15 games tested
- Cyberpunk 2077: 15% slower than 14900K
- Counter-Strike 2: 18% slower than 14900K
- January 2026 microcode update improved gaming by 5-8%, still behind 14th gen
- Gets demolished by 9800X3D (27%+ slower)

### Review/Benchmark URLs
- [Tom's Hardware: 285K review](https://www.tomshardware.com/pc-components/cpus/intel-core-ultra-9-285k-cpu-review)
- [TechSpot: 285K review](https://www.techspot.com/review/2911-intel-core-ultra-9-285k/)
- [HotHardware: Arrow Lake review](https://hothardware.com/reviews/intel-core-ultra-200s-arrow-lake-cpu-review)

### Verdict
**DO NOT BUY for gaming.** Intel's Arrow Lake is a regression in gaming performance vs their own previous gen. Intel has no competitive gaming CPU right now.

---

## CPU RECOMMENDATION SUMMARY

| CPU | Price | Gaming Rank | Best For |
|---|---|---|---|
| **Ryzen 7 9800X3D** | $449-$479 | #1 (tied) | **Pure gaming -- BEST VALUE** |
| Ryzen 7 9850X3D | $499 | #1 (tied, ~7% faster) | New builds wanting latest |
| Ryzen 9 9950X3D | $644-$699 | #1 (tied) | Gaming + heavy productivity |
| Ryzen 9 9900X3D | $599 | #4 | Nothing (awkward positioning) |
| i9-14900K (owned) | $305-$340 resale | #5 | Selling it |
| Core Ultra 9 285K | ~$550 | #6 | Avoiding |

### Upgrade Path Analysis: Selling i9-14900K for 9800X3D

**Cost calculation:**
- Sell i9-14900K: +$305-$340 (used eBay)
- Buy 9800X3D: -$449 (Micro Center)
- Buy AM5 motherboard (B650/X670): -$150-$250
- Buy DDR5 RAM (if not already on DDR5): -$80-$120 (32GB kit)
- **Net cost: ~$340-$500 depending on current platform**

**What you gain:**
- 18-30% better gaming performance
- Dramatically lower power consumption and heat
- No degradation risk
- AM5 upgrade path for future CPUs
- Quieter system overall

**Verdict: YES, worth it** -- especially given the 14900K degradation risk. The sooner you sell, the more value you recover before prices drop further.

---

# GPU RESEARCH

---

## NVIDIA RTX 4070 Ti Super

### Current Prices
- **Amazon:** $1,179 (new -- heavily inflated due to 40-series discontinuation)
- **eBay (used):** ~$680
- **Original MSRP:** $799

### 4K Gaming Performance
- Capable of 4K gaming but struggles in the most demanding titles without DLSS
- 16GB GDDR6X on 256-bit bus (672 GB/s bandwidth)
- 8,448 CUDA cores
- Alan Wake 2 at 4K with ray tracing: playable (unlike 12GB 4070 Ti which was not)
- Generally delivers 60-80 FPS at 4K in demanding AAA titles

### Review/Benchmark URLs
- [Tom's Hardware: 4070 Ti Super review](https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-4070-ti-super-review)
- [GamersNexus: 4070 Ti Super review](https://gamersnexus.net/gpus/nvidia-geforce-rtx-4070-ti-super-gpu-review-benchmarks-power-efficiency-gaming)
- [TechSpot: 4070 Ti Super review](https://www.techspot.com/review/2793-nvidia-geforce-rtx-4070-ti-super/)

### Power Consumption
- TDP: 285W
- Real-world gaming: ~260-285W

### Pros for 4K Gaming
- 16GB VRAM (adequate for 4K textures in 2026)
- Good power efficiency for Ada Lovelace
- If found used at ~$680, decent value

### Cons for 4K Gaming
- **NOT a 4K/160Hz card** -- can't push 160 FPS at 4K in AAA titles
- New prices absurdly inflated ($1,179 for an $799 MSRP card)
- Outperformed significantly by RTX 5080 and above
- No DLSS 4 Multi Frame Generation support

### Verdict for 4K@160Hz
**Too weak.** This is a great 1440p card but can't deliver 160Hz at 4K in AAA games, even with DLSS. Skip for this build target.

---

## NVIDIA RTX 4080 Super

### Current Prices
- **Amazon (new):** $1,597 (massively inflated)
- **eBay (used):** ~$950
- **Original MSRP:** $999

### 4K Gaming Benchmarks (from GamersNexus)
| Game (4K) | RTX 4080 Super | RTX 5080 | RTX 5090 |
|---|---|---|---|
| FFXIV Dawntrail | ~97 FPS | 112 FPS | 182 FPS |
| Black Myth: Wukong | ~52 FPS | 58 FPS | 86 FPS |
| Dragon's Dogma 2 | ~78 FPS | 85 FPS | 133 FPS |
| Dying Light 2 | ~67 FPS | 81 FPS | 126 FPS |

### Review/Benchmark URLs
- [Tom's Hardware: 4080 Super review](https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-4080-super-review)
- [GamersNexus: 4080 Super review](https://gamersnexus.net/gpus/lame-cheaper-nvidia-rtx-4080-super-review-benchmark-comparison-value-discussion)
- [TechSpot: 4080 Super review](https://www.techspot.com/review/2797-nvidia-geforce-rtx-4080-super/)
- [PCWorld: 4080 Super review](https://www.pcworld.com/article/2222156/nvidia-geforce-rtx-4080-super-review.html)

### Power Consumption
- TDP: 320W

### Pros for 4K Gaming
- 16GB GDDR6X with 256-bit bus
- Solid 4K performance in most titles (60-100 FPS range)
- DLSS 3 Frame Generation support
- Good used pricing (~$950)

### Cons for 4K Gaming
- **Cannot hit 160Hz at 4K natively in AAA** -- tops out around 60-100 FPS
- New retail prices ($1,597) are insane -- do not buy new
- No DLSS 4 Multi Frame Generation
- Being superseded by RTX 5080

### Verdict for 4K@160Hz
**Marginal.** With DLSS 3 Frame Generation you can approach 120-160Hz in some titles, but native performance falls short of the 160Hz target. Only worth considering used at ~$950 if budget is tight.

---

## NVIDIA RTX 5080 -- BEST VALUE FOR 4K

### Current Prices (March 2026)
- **MSRP:** $999 (Founders Edition)
- **Amazon:** $1,399 (PNY Triple Fan variant)
- **Newegg:** $1,249-$1,699 (ZOTAC Solid Core $1,249 to ASUS TUF $1,699)
- **B&H Photo:** $1,364-$1,644
- **eBay (used):** ~$1,249

### Availability Status
- FE models sell out within 2-3 hours during weekly restocks
- AIB models available but at 25-70% markup over MSRP
- Stock improving but still constrained as of March 2026

### 4K Gaming Benchmarks (GamersNexus data)
| Game (4K) | RTX 5080 | vs 4080 Super | vs RTX 4090 |
|---|---|---|---|
| FFXIV Dawntrail | 112 FPS | +15% | -19% |
| Black Myth: Wukong | 58 FPS | +12% | -13% |
| Starfield | 71 FPS | +8% | -23% |
| Dragon's Dogma 2 | 85 FPS | +9% | -13% |
| Dying Light 2 | 81 FPS | +21% | -12% |
| Resident Evil 4 | 108 FPS | -- | -- |

**Overall: 9-21% faster than 4080 Super at 4K, but 12-23% slower than RTX 4090**

### With DLSS 4 Multi Frame Generation
- DLSS 4 MFG can generate up to 3 intermediate frames
- Cyberpunk 2077: 68 FPS native 4K transforms to **238 FPS with DLSS 4 Performance + MFG**
- This is the key differentiator for hitting 160Hz at 4K

### Review/Benchmark URLs
- [GamersNexus: RTX 5080 FE review](https://gamersnexus.net/gpus/nvidia-geforce-rtx-5080-founders-edition-review-benchmarks-vs-5090-7900-xtx-4080-more)
- [Tom's Hardware: RTX 5080 review](https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5080-review/4)
- [KitGuru: RTX 5080 review](https://www.kitguru.net/components/graphic-cards/dominic-moass/nvidia-rtx-5080-review-efficiency-gains-but-a-performance-letdown/all/1/)
- [RTX 5080 Price Tracker](https://bestvaluegpu.com/history/new-and-used-rtx-5080-price-history-and-specs/)

### Power Consumption
- TDP: 360W
- Real-world gaming (FFXIV 4K): ~298W
- Idle: 12.75W
- More efficient than RTX 5090

### Specifications
- 10,752 CUDA cores
- 16GB GDDR7, 256-bit bus
- Blackwell architecture
- 4th gen RT cores, 5th gen Tensor cores
- DLSS 4 with Multi Frame Generation

### Pros for 4K Gaming
- DLSS 4 MFG is a game-changer for hitting 160Hz at 4K
- Best price-to-performance in the Blackwell lineup
- 16GB GDDR7 is adequate for 4K in 2026
- Good power efficiency vs 5090
- Same $999 MSRP as the 4080 Super it replaces

### Cons for 4K Gaming
- **Street price is $1,249-$1,399**, not $999 MSRP
- 16GB VRAM may become limiting in 2-3 years at 4K ultra
- Only 9-21% faster than 4080 Super natively (underwhelming generational leap)
- Stock still constrained
- Some reports of defective units with missing ROPs

---

## NVIDIA RTX 5090

### Current Prices (March 2026)
- **MSRP:** $1,999 (Founders Edition)
- **Amazon:** $4,147 (ASUS ROG Astral OC)
- **eBay (used):** ~$3,799
- **Street price range:** $3,000-$4,500

### Availability Status
- **Extremely scarce.** FE units sell out in minutes during restocks
- AIB models available but at 100%+ markup over MSRP
- Supply not expected to normalize until mid-2026 at earliest

### 4K Gaming Benchmarks (GamersNexus data)
| Game (4K) | RTX 5090 | vs RTX 4090 | vs RTX 5080 |
|---|---|---|---|
| FFXIV Dawntrail | 182 FPS | +31% | +63% |
| Black Myth: Wukong | 86 FPS | +28% | +48% |
| Starfield | 108 FPS | +17% | +52% |
| Dragon's Dogma 2 | 133 FPS | +35% | +56% |
| Cyberpunk 2077 RT | 95 FPS | +50% | -- |
| Dying Light 2 | 124 FPS | +38% | +53% |
| Resident Evil 4 | 207 FPS | +37% | +92% |

**Average: 27-35% faster than RTX 4090, 30-69% faster than RTX 5080**

### With DLSS 4 MFG
- Cyberpunk 2077: Native 68 FPS -> 238 FPS with DLSS 4 Performance + MFG
- Can push well beyond 160Hz at 4K in many titles with MFG enabled

### Review/Benchmark URLs
- [GamersNexus: RTX 5090 FE review](https://gamersnexus.net/gpus/nvidia-geforce-rtx-5090-founders-edition-review-benchmarks-gaming-thermals-power)
- [Tom's Hardware: RTX 5090 coverage](https://www.tomshardware.com/tag/rtx-5090)
- [RTX 5090 Price Tracker](https://bestvaluegpu.com/history/new-and-used-rtx-5090-price-history-and-specs/)

### Power Consumption
- TDP: 575W
- Real-world gaming: 516W (FFXIV 4K), spikes to 569-590W (F1 24 4K RT)
- Idle: 46W (higher than 4090's 28-29W)
- **Requires 850W+ PSU minimum, 1000W recommended**

### Specifications
- 21,760 CUDA cores
- 32GB GDDR7, 512-bit bus
- Blackwell architecture
- DLSS 4 with Multi Frame Generation

### Pros for 4K Gaming
- **Absolute fastest GPU available -- nothing comes close**
- 32GB VRAM is future-proof for 4K gaming through 2028+
- Can achieve 100+ FPS at 4K natively in most AAA titles
- DLSS 4 MFG pushes well past 160Hz at 4K
- 27-50% faster than previous-gen RTX 4090

### Cons for 4K Gaming
- **Street price is $3,800-$4,500** -- more than 2x MSRP
- Insane power consumption (500-590W gaming)
- Requires expensive PSU upgrade (1000W+)
- Massive card, may not fit smaller cases
- Overkill for 4K/160Hz -- the 5080 with DLSS 4 MFG gets you there for 1/3 the price

### Overkill Assessment
**Yes, absolutely overkill at current pricing.** At MSRP ($1,999) it would be a strong enthusiast pick, but at $4,000+ it's indefensible for gaming. The RTX 5080 at $1,249-$1,399 with DLSS 4 MFG achieves the same 160Hz@4K target. The 5090 only makes sense if you also need the 32GB VRAM for AI/ML workloads or professional work.

---

## AMD Radeon RX 9070 XT

### Current Prices
- **MSRP:** $549-$599 (varies by model)
- Real-world pricing: ~$600-$650

### 4K Gaming Benchmarks (GamersNexus data)
| Game (4K) | RX 9070 XT | RTX 5070 Ti | RTX 5070 | RTX 4080 Super |
|---|---|---|---|---|
| Dragon's Dogma 2 | 70 FPS | ~74 FPS | 56 FPS | -- |
| FFXIV | 68 FPS | 97 FPS | 78 FPS | -- |
| Resident Evil 4 | 103 FPS | 107 FPS | 79 FPS | ~100 FPS |
| Black Myth: Wukong | ~57 FPS | 64 FPS | 50 FPS | ~55 FPS |
| Starfield | ~63 FPS | ~61 FPS | ~50 FPS | ~60 FPS |
| Cyberpunk 2077 | 53 FPS | 50 FPS | 41 FPS | ~48 FPS |

### Review/Benchmark URLs
- [GamersNexus: RX 9070 XT review](https://gamersnexus.net/gpus/amd-radeon-rx-9070-xt-gpu-review-benchmarks-vs-5070-ti-5070-7900-xt-sapphire-pulse)
- [Tom's Hardware: RX 9070 XT review](https://www.tomshardware.com/pc-components/gpus/amd-radeon-rx-9070-xt-review)
- [TechSpot: RX 9070 XT review](https://www.techspot.com/review/2961-amd-radeon-9070-xt/)
- [AMD Product Page](https://www.amd.com/en/products/graphics/desktops/radeon/9000-series/amd-radeon-rx-9070xt.html)

### Power Consumption
- TDP: ~300W
- Real-world: ~310W

### Pros for 4K Gaming
- Excellent value at $600 -- trades blows with $750 RTX 5070 Ti
- 16GB GDDR6 VRAM
- Great rasterization performance
- Beats RTX 5070 Ti in some titles (Cyberpunk, Starfield)

### Cons for 4K Gaming
- **NOT a 4K/160Hz card** -- 50-103 FPS range at 4K
- Weak ray tracing compared to NVIDIA (no DLSS 4 MFG equivalent)
- AMD's FSR is notably inferior to DLSS for frame generation
- No hardware-level frame generation comparable to DLSS 4 MFG
- Won't hit 160Hz at 4K even with FSR

### Verdict for 4K@160Hz
**Too weak for the target.** The RX 9070 XT is an exceptional 1440p card and great value, but it cannot deliver 160Hz at 4K in AAA games. FSR frame generation doesn't compensate enough. Skip for this build.

---

## NVIDIA RTX 5070 Ti (for reference)

### Current Prices
- **MSRP:** $749
- **Amazon:** ~$999
- **Street price:** $970+ (30% markup)

### 4K Performance
- Generally 60-97 FPS at 4K natively
- DLSS 4 MFG support helps significantly
- 16GB GDDR7

### Review/Benchmark URLs
- [GamersNexus: RTX 5070 Ti review](https://gamersnexus.net/gpus/do-not-buy-nvidia-rtx-5070-ti-gpu-absurdity-benchmarks-review)
- [Tom's Hardware: RTX 5070 Ti review](https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5070-ti-review-asus)

### Verdict for 4K@160Hz
**Marginal.** Native 4K performance is 60-97 FPS. With DLSS 4 MFG it could approach 160Hz in some titles, but it'll struggle in the heaviest games. The RTX 5080 is a much safer bet for the 160Hz target.

---

# GPU RECOMMENDATION SUMMARY

| GPU | Street Price | 4K Native FPS Range | Can Hit 160Hz@4K? | Verdict |
|---|---|---|---|---|
| RTX 4070 Ti Super | $680 used / $1,179 new | 50-80 FPS | No | Too weak |
| RTX 4080 Super | $950 used / $1,597 new | 60-100 FPS | With DLSS 3 FG, maybe | Budget option if used |
| RX 9070 XT | $600 | 50-103 FPS | No | Great value, wrong target |
| RTX 5070 Ti | $970+ | 60-97 FPS | With DLSS 4 MFG, some titles | Marginal |
| **RTX 5080** | **$1,249-$1,399** | **58-112 FPS** | **Yes, with DLSS 4 MFG** | **RECOMMENDED** |
| RTX 5090 | $3,800-$4,500 | 86-207 FPS | Yes, natively in many | Overkill at current price |

---

# FINAL BUILD RECOMMENDATION

## Best Value Build for 4K@160Hz

| Component | Pick | Price |
|---|---|---|
| **CPU** | AMD Ryzen 7 9800X3D | $449 (Micro Center) |
| **GPU** | NVIDIA RTX 5080 | $1,249-$1,399 |
| **Total key components** | -- | **~$1,700-$1,850** |

### Action Plan for the i9-14900K:
1. **Sell it NOW** on eBay -- expect $305-$340
2. Buy Ryzen 7 9800X3D ($449 at Micro Center) + AM5 motherboard + DDR5 RAM
3. Net switching cost: ~$340-$500
4. **Worth every penny** given degradation risk, efficiency gains, and gaming performance improvement

### Why RTX 5080 over 5090:
- DLSS 4 Multi Frame Generation closes the gap at 4K/160Hz
- $1,300 vs $4,000+ -- the 5090 is 3x the price for 30-60% more performance
- 16GB VRAM is sufficient for 4K gaming through 2027
- 298W vs 516W gaming power draw -- much more practical

### Why 9800X3D over 9950X3D:
- Identical gaming performance
- $200+ cheaper
- Lower power, easier to cool
- Only pick 9950X3D if you need 16 cores for content creation

---

*Research compiled March 7, 2026. Prices and availability are snapshots and will fluctuate.*
*All benchmark data sourced from GamersNexus, Tom's Hardware, TechSpot, and other cited publications.*
