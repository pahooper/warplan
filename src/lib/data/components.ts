import type { ComponentData } from '../types';

export const components: ComponentData = {
  cpu: [
    {
      id: 'i9-14900k',
      name: 'Intel i9-14900K',
      price: 0,
      socket: 'LGA1700',
      recommended: false,
      owned: true,
      perf4k: 82,
      tdp: 253,
      notes: '\u26A0\uFE0F DEGRADATION RISK - Intel confirmed voltage bugs causing permanent silicon damage. Microcode fixes (0x129, 0x12B, 0x12F) PREVENT new damage but can\'t REVERSE existing damage. Intel extended warranty by 2 years for 13th/14th gen. Root cause: turbo boost on favored cores spiking to 1.65V. Reports of continued degradation even post-fix. Game server providers have moved to AMD due to stability concerns.',
      advice: 'AT 4K: Only 1-5% behind 9800X3D because GPU is the bottleneck. Keeping it is valid IF your chip shows no instability. BUT: degradation risk is real, resale dropping fast \u2014 eBay sold ~$340-370 used (tightening range). After fees (~13%) expect ~$296-322 net used. Platform is a dead end. \u26A0\uFE0F\u26A0\uFE0F SELL NOW: Arrow Lake Refresh 270K Plus ($299 MSRP, ~$329-357 street, 17-19% above MSRP due to demand) is the new viable alternative for buyers. \u26A0\uFE0F Intel confirmed 10-15% CPU price hikes effective April 2026 \u2014 new Intel chips getting pricier, which may slow used 14900K\'s decline slightly. 250K Plus at $199 MSRP (~$220 street) also available. No 290K Plus coming (Intel confirmed scrapped). Window to get $350+ is nearly closed \u2014 expect $280-340 range over Q2 2026. Run stability benchmarks + screenshot results before listing (buyers are wary).',
      whyNot: 'Dead-end LGA1700 platform, 253W power draw, degradation risk. At 4K the perf gap is small (1-5%), but resale value declines every month and damage is irreversible.',
      benchmarks: { ffxiv: 310, baldurs: 105, starfield: 135, cyberpunk: 175 },
      sources: [
        { label: 'XDA: Degradation Report', url: 'https://www.xda-developers.com/intel-core-i9-14900k-deteriorated/' },
        { label: 'TechSpot: vs 9800X3D', url: 'https://www.techspot.com/review/2931-amd-ryzen-9800x3d-vs-intel-core-14900k/' }
      ],
      buyLinks: [
        { store: 'eBay (sell yours)', url: 'https://www.ebay.com/sch/i.html?_nkw=i9+14900k&_sop=12' }
      ]
    },
    {
      id: 'r7-9800x3d',
      name: 'AMD Ryzen 7 9800X3D',
      price: 420,
      socket: 'AM5',
      recommended: true,
      owned: false,
      perf4k: 95,
      tdp: 120,
      notes: '\u2B50 UNDISPUTED GAMING KING - 96MB 3D V-Cache, 30% faster than 14900K in gaming, runs cool at 120W. Amazon ~$420 (all-time low! $60 off MSRP), Micro Center $399 in-store ($379.99 w/ Insider card!), Newegg ~$464 + free MSI MAG Coreliquid 240mm AIO cooler + free Crimson Desert game!, Best Buy ~$449-479. Free Crimson Desert game ($69.99 value, launched Mar 19! Bundle thru Apr 25 \u2014 19 days left! Redeem by May 23). 9850X3D ($499 MSRP, ~$489-519) only 3-7% faster \u2014 9800X3D remains the value king. Arrow Lake Refresh (270K Plus $299 MSRP, ~$329-357 street) launched Mar 26 to rave reviews but X3D still dominates gaming by 10-20%. AMD responding with price cuts \u2014 PCGamesN: "AMD CPU price cuts have already begun." \u26A0\uFE0F Intel/AMD confirmed 10-15% CPU price hikes effective now (AI supply crunch) \u2014 retail X3D prices have actually dropped below MSRP despite channel hikes. Buy before retail catches up.',
      advice: 'BEST VALUE: ~$420 at Amazon (all-time low! $60 off MSRP) or $399 at Micro Center in-store ($379.99 w/ Insider card!) + free Crimson Desert ($69.99 value, now playable! Bundle ends Apr 25 \u2014 19 days!) = ~$350 effective cost online, ~$310 at MC w/ card. Newegg ~$464 + free 240mm AIO cooler + Crimson Desert! After selling 14900K (~$340-370 on eBay used, net ~$296-322), net switch cost is ~$28-124 + mobo. AM5 platform lasts through 2027+ (Zen 6 "Medusa" desktop delayed to 2027, AM5 confirmed). Arrow Lake Refresh 270K Plus ($299 MSRP, ~$329-357 street) reviews stellar but X3D still dominates gaming by 10-20%. \u26A0\uFE0F 10-15% CPU price hikes already in effect \u2014 current $420 is pre-retail-pass-through. Buy now.',
      why: 'Every major reviewer (GN, Tom\'s HW, TechSpot, PC Gamer) agrees: this is THE gaming CPU. 96MB 3D V-Cache gives it an insurmountable gaming advantage.',
      benchmarks: { ffxiv: 380, baldurs: 160, starfield: 169, cyberpunk: 219 },
      sources: [
        { label: 'GamersNexus: Full Review', url: 'https://gamersnexus.net/cpus/rip-intel-amd-ryzen-7-9800x3d-cpu-review-benchmarks-vs-7800x3d-285k-14900k-more' },
        { label: 'Tom\'s HW: "Devastating Performance"', url: 'https://www.tomshardware.com/pc-components/cpus/amd-ryzen-7-9800x3d-review-devastating-gaming-performance' },
        { label: 'PC Gamer: Best Gaming CPU', url: 'https://www.pcgamer.com/best-cpu-for-gaming/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$420 ($60 off MSRP) + free Crimson Desert (thru Apr 25)', url: 'https://www.amazon.com/AMD-9800X3D-16-Thread-Desktop-Processor/dp/B0DKFMSMYK' },
        { store: 'Micro Center $399 in-store ($379.99 w/ card)', url: 'https://www.microcenter.com/product/687907/amd-ryzen-7-9800x3d-granite-ridge-am5-470ghz-8-core-boxed-processor-heatsink-not-included' },
        { store: 'Newegg ~$464 + free 240mm AIO cooler!', url: 'https://www.newegg.com/amd-ryzen-7-9000-series-ryzen-7-9800x3d-granite-ridge-zen-5-socket-am5-120w-desktop-cpu-processor/p/N82E16819113877' },
        { store: 'Best Buy $479 (OOS standalone)', url: 'https://www.bestbuy.com/product/amd-ryzen-7-9800x3d-8-core-16-thread-4-7-ghz-5-2-ghz-max-boost-socket-am5-120w-unlocked-desktop-processor-silver/JXKQHH5XSR' }
      ]
    },
    {
      id: 'r9-9950x3d',
      name: 'AMD Ryzen 9 9950X3D',
      price: 675,
      socket: 'AM5',
      recommended: false,
      owned: false,
      perf4k: 96,
      tdp: 170,
      notes: '16 cores / 128MB cache - Ties 9800X3D in gaming but adds massive productivity power. Full overclocking support (first for X3D Ryzen 9). Micro Center $599 in-store (clearing stock ahead of 9950X3D2 \u2014 unconfirmed if still current). Amazon ~$675 (Pangoly tracker). Newegg $699 (confirmed, sold by Newegg direct, limit 1) + free Crimson Desert ($69.99 value, thru Apr 25, redeem by May 23). Best Buy ~$699. VideoCardz reported a dip to $666 on Amazon. \u26A0\uFE0F 9950X3D2 "Dual Edition" (208MB cache, dual V-Cache, 16c/32t, 4.3/5.6 GHz, 200W TDP) confirmed Apr 22 launch \u2014 16 days away! 5-10% uplift per AMD, MSRP not yet announced (speculated $799-999). Will push 9950X3D prices down further.',
      advice: 'OVERKILL: Only 0.4% faster than 9800X3D in gaming for $255+ more ($675 vs $420). No streaming planned, so the extra cores are wasted. MC $599 in-store if still available (clearing for 9950X3D2). Amazon ~$675 online. Newegg $699 + free Crimson Desert game (confirmed). \u26A0\uFE0F WAIT: 9950X3D2 "Dual Edition" (208MB cache!) drops Apr 22 \u2014 just 16 days away, will push this chip\'s price down further. The 9800X3D at $420 ($399 MC) + the same free game is the smarter buy for pure gaming.',
      whyNot: 'Within 1-3% of 9800X3D in gaming. No streaming = no use for 16 cores. The $179-255 premium buys nothing for your use case.',
      benchmarks: { ffxiv: 373, baldurs: 155, starfield: 171, cyberpunk: 219 },
      sources: [
        { label: 'GamersNexus: 9950X3D Review', url: 'https://gamersnexus.net/cpus/amd-ryzen-9-9950x3d-cpu-review-benchmarks-vs-9800x3d-285k-9950x-more' },
        { label: 'Tom\'s HW: 9950X3D Review', url: 'https://www.tomshardware.com/pc-components/cpus/amd-ryzen-9-9950x3d-review' }
      ],
      buyLinks: [
        { store: 'Micro Center $599 in-store (if available)', url: 'https://www.microcenter.com/product/691349/amd-ryzen-9-9950x3d-granite-ridge-am5-430ghz-16-core-boxed-processor-heatsink-not-included' },
        { store: 'Amazon ~$675', url: 'https://www.amazon.com/dp/B0DVZSG8D5' },
        { store: 'Newegg $699 (confirmed + free Crimson Desert!)', url: 'https://www.newegg.com/amd-ryzen-9-9000-series-ryzen-9-9950x3d-granite-ridge-socket-am5-desktop-cpu-processor/p/N82E16819113884' }
      ]
    }
  ],
  gpu: [
    {
      id: '5070ti',
      name: 'NVIDIA RTX 5070 Ti 16GB',
      price: 749,
      vram: 16,
      recommended: false,
      perf4k: 72,
      tdp: 300,
      notes: '\u26A0\uFE0F QUASI-EOL \u2014 ASUS told retailers production ended, then denied it; NVIDIA says "not EOL" but GDDR7 shortage has effectively halted restocking. NVIDIA cutting gaming GPU production 30-40% in H1 2026 \u2014 5070 Ti is FIRST target for cuts. 50 SUPER lineup indefinitely delayed (confirmed CES 2026) \u2014 no new NVIDIA gaming GPUs in 2026; RTX 60-series pushed to 2028 (Tom\'s HW). Street prices: Newegg ~$999 (MSI Ventus 3X OC / Zotac Solid OC, floor). Amazon $1,009-1,099 (ASUS PRIME OC ~$1,009, TUF OC $1,069, Gigabyte Gaming OC $1,099). Micro Center ~$899-1,009 (varies by location). Best Buy ~$1,069-1,299. Price trend declining in April vs March (bestvaluegpu.com) \u2014 peaked at $1,220 in mid-2025. ~54fps avg native 4K, DLSS 4.5 Dynamic MFG 6x now live (driver 595.79+, released Mar 31) \u2014 auto-targets 160Hz, 6x mode for path-traced titles. \u26A0\uFE0F RTX 5060 Ti 16GB launches Apr 16 ($429 MSRP) \u2014 10 days away! Lower-tier but may further drain GDDR7 supply. Resident Evil Requiem bundled with qualifying purchases (thru Apr 13 — 7 days left!). Stock depleting \u2014 new units may not be replenished.',
      advice: '\u26A0\uFE0F QUASI-EOL BUT PRICES SOFTENING: Newegg floor still $999 (MSI Ventus 3X OC / Zotac Solid OC). Amazon ASUS PRIME OC ~$1,009. At $999-1,009, the gap to the 5080 ($1,249) is $240-250 for 15-18% more perf \u2014 5080 still better value. But if under $999 at MC, this is a real deal for 4K with DLSS 4.5 Dynamic MFG 6x. At $1,069+, stretch to the 5080. Supply is not recovering \u2014 do not wait on this one.',
      whyNot: 'Native 4K performance averages ~54fps. Needs DLSS 4 MFG to hit 160Hz, and not all games support it yet. 16GB VRAM may limit future 4K titles. The 5080 at ~$1,249 is 15-18% faster \u2014 ~$250 more for a meaningful jump. Only buy if $1,249+ for the 5080 is out of range.',
      benchmarks: { cyberpunk_4k: 48, starfield_4k: 61, baldurs_4k: 64, ffxiv_4k: 97 },
      sources: [
        { label: 'GN: 5070 Ti Review', url: 'https://gamersnexus.net/gpus/do-not-buy-nvidia-rtx-5070-ti-gpu-absurdity-benchmarks-review' },
        { label: 'Tom\'s HW: 5070 Ti Review', url: 'https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5070-ti-review-asus' },
        { label: 'TechSpot: 5070 Ti Effectively Dead', url: 'https://www.techspot.com/news/110943-rtx-5070-ti-effectively-dead-gpu-market-worse.html' },
        { label: 'Tweaktown: Production Ended', url: 'https://www.tweaktown.com/news/109716/nvidia-has-reportedly-ended-geforce-rtx-5070-ti-production-and-its-now-end-of-life/index.html' },
        { label: 'NotebookCheck: 5070 Ti Supply Crisis', url: 'https://www.notebookcheck.net/Asus-confirms-RTX-5070-Ti-is-now-discontinued-as-Nvidia-effectively-kills-Blackwell-16-GB-midrange-RTX-5060-Ti-16-GB-next-on-the-chopping-block.1204994.0.html' }
      ],
      buyLinks: [
        { store: 'Newegg ~$999 (MSI Ventus 3X OC / Zotac Solid OC, floor!)', url: 'https://www.newegg.com/p/pl?d=rtx+5070+ti' },
        { store: 'Amazon ~$1,009 (ASUS PRIME OC) / ~$1,069 (TUF OC)', url: 'https://www.amazon.com/s?k=rtx+5070+ti' },
        { store: 'Micro Center ~$899-1,009 (varies by location)', url: 'https://www.microcenter.com/search/search_results.aspx?Ntt=rtx+5070+ti' },
        { store: 'Best Buy ~$1,069-1,299', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=rtx+5070+ti' }
      ]
    },
    {
      id: '5080',
      name: 'NVIDIA RTX 5080 16GB',
      price: 1249,
      vram: 16,
      recommended: true,
      perf4k: 90,
      tdp: 360,
      notes: '\u2B50 SWEET SPOT FOR 4K@160Hz - DLSS 4 MFG turns 68fps native into 238fps in Cyberpunk. \u26A0\uFE0F $999 MSRP models NO LONGER AVAILABLE \u2014 street prices holding above MSRP. Amazon ~$1,249 (Zotac Solid Core OC, cheapest online). Micro Center ~$1,150-1,250 in-store (varies by model, improved from $1,290!). Newegg ~$1,349 (MSI Shadow 3X OC, floor) to $1,399+ (MSI Ventus 3X). Best Buy ~$1,260+. eBay used ~$1,199 (below Amazon new!). \u26A0\uFE0F GDDR7 shortage + NVIDIA 30-40% production cuts, but 5080 is NVIDIA\'s PRIORITY 16GB card \u2014 better supply outlook than 5070 Ti. \u2B50 DLSS 5 announced at GTC 2026 (Fall 2026, RTX 50 exclusive) \u2014 neural rendering breakthrough, photoreal lighting via AI, massive future upgrade. DLSS 4.5 Dynamic MFG 6x live now (driver 595.79+, Mar 31). 250+ MFG-compatible games. Prices peaked at $1,500 in Aug 2025 and trending down \u2014 Amazon $1,249 Zotac remains the online floor.',
      advice: 'RECOMMENDED: Best realistic path to 160Hz@4K. \u26A0\uFE0F $999 MSRP gone forever. Best deal: Amazon ~$1,249 (Zotac Solid Core OC). Micro Center improved to ~$1,150-1,250 in-store (down from $1,290!). Newegg floor $1,349 (MSI Shadow 3X OC) \u2014 Amazon is clearly the better online option. eBay used ~$1,199 \u2014 viable if comfortable buying used. 5070 Ti softened to $999 at Newegg \u2014 gap is now $250 for 15-18% more perf, 5080 still wins. \u2B50 DLSS 5 coming Fall 2026 (RTX 50 exclusive, neural rendering) \u2014 buying the 5080 now means you get DLSS 5 support when it lands. NVIDIA prioritizing 5080 production. SUPER refresh indefinitely delayed (confirmed CES 2026). Clear buy.',
      why: 'DLSS 4 MFG generates up to 3 extra frames per real frame. Cyberpunk goes from 68fps native to 238fps. Best value path to 160Hz@4K, 15-18% faster than the 5070 Ti. DLSS 4.5 Dynamic MFG 6x now live (Mar 31, driver 595.79+), auto-adjusts to your 160Hz monitor. DLSS 5 (Fall 2026, RTX 50 exclusive) \u2014 neural rendering, photoreal AI lighting \u2014 locked to this card. NVIDIA prioritizing 5080 production over 5070 Ti \u2014 best supply outlook in the Blackwell lineup.',
      benchmarks: { cyberpunk_4k: 68, starfield_4k: 71, baldurs_4k: 85, ffxiv_4k: 112 },
      sources: [
        { label: 'GN: RTX 5080 Review', url: 'https://gamersnexus.net/gpus/nvidia-geforce-rtx-5080-founders-edition-review-benchmarks-vs-5090-7900-xtx-4080-more' },
        { label: 'Tom\'s HW: 5080 Review', url: 'https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5080-review/4' },
        { label: 'TechSpot: 5080 Review', url: 'https://www.techspot.com/review/2947-nvidia-geforce-rtx-5080/' },
        { label: 'JayzTwoCents: "OC Monster"', url: 'https://www.pcguide.com/news/rtx-5080-dubbed-overclocking-monster-by-jayztwocents-its-like-a-whole-nother-tier-with-oc/' },
        { label: 'NVIDIA: DLSS 4.5 Announcement', url: 'https://www.nvidia.com/en-us/geforce/news/dlss-4-5-dynamic-multi-frame-gen-6x-2nd-gen-transformer-super-res/' },
        { label: 'NVIDIA: DLSS 5 Announcement (GTC 2026)', url: 'https://nvidianews.nvidia.com/news/nvidia-dlss-5-delivers-ai-powered-breakthrough-in-visual-fidelity-for-games' }
      ],
      buyLinks: [
        { store: 'Amazon ~$1,249 (Zotac Solid Core OC, best!)', url: 'https://www.amazon.com/s?k=rtx+5080' },
        { store: 'Micro Center ~$1,150-1,250 (varies, improved!)', url: 'https://www.microcenter.com/search/search_results.aspx?Ntt=rtx+5080' },
        { store: 'Newegg ~$1,349 (MSI Shadow 3X OC, floor)', url: 'https://www.newegg.com/p/pl?d=rtx+5080' },
        { store: 'Best Buy ~$1,260+', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=rtx+5080' }
      ]
    },
    {
      id: '5090',
      name: 'NVIDIA RTX 5090 32GB',
      price: 3899,
      vram: 32,
      recommended: false,
      perf4k: 99,
      tdp: 575,
      notes: '\uD83D\uDC8E ABSOLUTE FASTEST GPU - 30-69% faster than 5080. 32GB GDDR7. \u26A0\uFE0F Street prices vary wildly by retailer. \u2B50 Micro Center ~$2,910 in-store (ASUS TUF Gaming OC \u2014 60-80% in-store success rate). Online: Newegg $3,799-3,899 (MSI Gaming Trio OC $3,799, Gigabyte Gaming OC $3,899, MSI Suprim Liquid $3,499, ASUS ROG Astral OC $3,509). Amazon ~$3,799. B&H ~$3,999 (PNY Triple Fan). Best Buy FE $1,999 sells out in 3-5 min (restocks Tue/Fri 9-11am EST). eBay used ~$2,862 avg (stabilized, down from $4,000 avg earlier). GDDR7 shortage structural \u2014 NVIDIA confirmed supply constraints through fiscal 2027. SUPER refresh indefinitely delayed (confirmed CES 2026) \u2014 RTX 60-series pushed to 2028. DLSS 4.5 Dynamic MFG 6x live (driver 595.79+). \u2B50 DLSS 5 announced GTC 2026 \u2014 Fall 2026 launch, RTX 50 EXCLUSIVE: neural rendering, photoreal AI lighting \u2014 5090 is the premier DLSS 5 card. \u26A0\uFE0F $5,000 price ceiling rumored by end of 2026 if GDDR7 shortage worsens (TrendForce).',
      advice: 'OVERKILL: ~150fps native 4K avg. Micro Center ~$2,910 in-store (ASUS TUF OC, 60-80% in-store availability) is the only reasonable deal. Newegg floor is $3,799 (MSI Gaming Trio OC), Gigabyte Gaming OC $3,899. Online still ~1.90-1.95x MSRP. The 5080 with DLSS 4 MFG hits the same 160Hz target at $1,249. Best Buy FE $1,999 restocks Tue/Fri 9-11am EST but sells out in 3-5 min. \u2B50 If DLSS 5 (Fall 2026, RTX 50 exclusive neural rendering) is a priority, the 5090 is the showcase card for it \u2014 but the 5080 also supports DLSS 5. eBay used stabilized at ~$2,862 avg \u2014 could be a smarter angle than paying $3,799+ new. \u26A0\uFE0F Price could climb toward $5,000 later in 2026 (TrendForce).',
      whyNot: 'Online street price is $3,799-3,899 (1.90-1.95x MSRP). 575W TDP needs 1000W PSU. The 5080 with DLSS 4 MFG reaches the same 160Hz@4K target at ~$1,249. Both cards support DLSS 5.',
      benchmarks: { cyberpunk_4k: 150, starfield_4k: 108, baldurs_4k: 133, ffxiv_4k: 182 },
      sources: [
        { label: 'GN: RTX 5090 Review', url: 'https://gamersnexus.net/gpus/nvidia-geforce-rtx-5090-founders-edition-review-benchmarks-gaming-thermals-power' },
        { label: 'DSO: 20-Game 4K Benchmark', url: 'https://www.dsogaming.com/articles/nvidia-rtx-5090-vs-rtx-4090-native-4k-gaming-benchmarks/' },
        { label: 'Tom\'s HW: 5090 Coverage', url: 'https://www.tomshardware.com/tag/rtx-5090' },
        { label: 'NVIDIA: DLSS 5 Announcement (GTC 2026)', url: 'https://nvidianews.nvidia.com/news/nvidia-dlss-5-delivers-ai-powered-breakthrough-in-visual-fidelity-for-games' },
        { label: 'WCCFTech: DLSS 5 Neural Rendering', url: 'https://wccftech.com/nvidia-dlss-5-game-changing-visuals/' }
      ],
      buyLinks: [
        { store: 'Micro Center ~$2,910 (ASUS TUF OC, best!)', url: 'https://www.microcenter.com/search/search_results.aspx?Ntt=rtx+5090' },
        { store: 'Newegg ~$3,799 (MSI Gaming Trio OC, floor)', url: 'https://www.newegg.com/p/pl?d=rtx+5090' },
        { store: 'Amazon ~$3,799', url: 'https://www.amazon.com/s?k=rtx+5090' },
        { store: 'Best Buy FE $1,999 (restocks Tue/Fri 9-11am EST, sells out in 3-5 min)', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=rtx+5090' }
      ]
    }
  ],
  motherboard: [
    {
      id: 'z790-tomahawk',
      name: 'MSI MAG Z790 Tomahawk MAX WiFi',
      price: 212,
      socket: 'LGA1700',
      recommended: false,
      notes: 'Solid Z790 for Intel - 16+1+1 VRM with 90A stages, WiFi 7, handles even LN2 overclocking. Amazon ~$212 (Pangoly-tracked). Newegg ~$242 (3P, down from $254). Best Buy ~$304. LGA1700 platform is EOL with Arrow Lake (LGA1851) as current gen \u2014 prices trending down as demand fades. \u26A0\uFE0F 32% Taiwan tariff effective Apr 2, 2026 \u2014 may push prices up; some Newegg 3P sellers (shipping from HK) already pricing around tariffs.',
      advice: 'FOR i9-14900K: Now ~$212 at Amazon (new low!) \u2014 $28 less than X870 Tomahawk ($240). Cheapest board in the config, but still dead-end LGA1700. Only buy if you\'re definitely keeping the 14900K. The X870 Tomahawk at $240 has a platform future through 2027+ \u2014 $28 more for a multi-gen upgrade path is the smarter spend.',
      sources: [
        { label: 'PC Gamer Review', url: 'https://www.pcgamer.com/msi-mag-z790-tomahawk-max-wifi-motherboard-review/' },
        { label: 'OC3D Review', url: 'https://overclock3d.net/reviews/cpu_mainboard/msi-mag-z790-tomahawk-max-review/4/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$212 (new low!)', url: 'https://www.amazon.com/MSI-MAG-Z790-Tomahawk-WiFi/dp/B0CJSL89T2' },
        { store: 'Newegg ~$242 (3P)', url: 'https://www.newegg.com/msi-mag-z790-tomahawk-max-wifi-atx-intel-z790-lga-1700/p/N82E16813144633' },
        { store: 'Best Buy ~$304', url: 'https://www.bestbuy.com/product/msi-mag-z790-tomahawk-max-wifi-socket-lga-1700-intel-z790-atx-ddr5-wi-fi-7-motherboard-black/J3P7TXY677' },
        { store: 'Micro Center', url: 'https://www.microcenter.com/product/661313/msi-z790-mag-tomahawk-wifi-intel-lga-1700-atx-motherboard' }
      ]
    },
    {
      id: 'x870-tomahawk',
      name: 'MSI MAG X870 Tomahawk WiFi',
      price: 240,
      socket: 'AM5',
      recommended: true,
      notes: '\u2B50 SWEET SPOT AM5 - WiFi 7, 5GbE, PCIe 5.0 M.2, 8-layer server-grade PCB. The 9800X3D doesn\'t need more. Amazon ~$240, MSI Store $239.99, Newegg $239.99 ("Lowest in 30 Days"), Best Buy ~$254. \u26A0\uFE0F 32% Taiwan tariff effective Apr 2, 2026 \u2014 Newegg\'s "Lowest in 30 Days" tag may signal pre-tariff sell-through pricing. Buy before tariff pass-through hits retail.',
      advice: 'RECOMMENDED: ~$240 at Amazon, MSI Store $239.99, or Newegg $239.99 (all three tied for best!). AM5 with WiFi 7 + 5GbE + upgrade path through 2027+ (Zen 6 "Medusa" desktop delayed to 2027, AM5 confirmed). The 9800X3D doesn\'t need a $500 board. Now $28 more than Z790 Tomahawk ($212 Amazon) but the X870 has a platform future. Clear choice.',
      sources: [
        { label: 'The FPS Review', url: 'https://www.thefpsreview.com/2025/02/04/msi-mag-x870-tomahawk-wifi-motherboard-review/' },
        { label: 'KitGuru Review', url: 'https://www.kitguru.net/components/motherboard/leo-waldock/msi-mag-x870-tomahawk-review/' }
      ],
      buyLinks: [
        { store: 'MSI Store $239.99 (tied for best!)', url: 'https://us-store.msi.com/MAG-X870-TOMAHAWK-WIFI' },
        { store: 'Amazon ~$240 (tied for best!)', url: 'https://www.amazon.com/MSI-Tomahawk-Motherboard-Processors-Bluetooth/dp/B0DG3HK897' },
        { store: 'Newegg $239.99 (tied for best! 20% off $299.99)', url: 'https://www.newegg.com/msi-mag-x870-tomahawk-wifi-atx-motherboard-amd-x870-am5/p/N82E16813144667' },
        { store: 'Best Buy ~$254', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=msi+x870+tomahawk' }
      ]
    },
    {
      id: 'b650-tomahawk',
      name: 'MSI MAG B650 Tomahawk WiFi',
      price: 176,
      socket: 'AM5',
      recommended: false,
      notes: 'Budget AM5 - 14+2+1 VRM is plenty for 9800X3D. PCWorld: "leaves very little on the table". \u26A0\uFE0F Amazon ~$211 (up from $197 \u2014 tariff-driven increase). Micro Center ~$176 in-store. Best Buy ~$220. \u26A0\uFE0F 32% Taiwan tariff effective Apr 2 \u2014 prices may continue rising.',
      advice: 'VALUE ERODING: Amazon ~$211 (was $197 \u2014 jumped $14 from tariffs). Now only $29 less than X870 Tomahawk ($240). At a $29 gap, the X870\'s WiFi 7 + 5GbE + PCIe 5.0 M.2 + platform future are clearly worth the difference. B650 only makes sense at Micro Center in-store (~$176, $64 gap). Online, just buy the X870.',
      sources: [
        { label: 'PCWorld Review', url: 'https://www.pcworld.com/article/1522279/msi-mag-b650-tomahawk-wifi-motherboard-review.html' },
        { label: 'HWCooling Review', url: 'https://www.hwcooling.net/en/msi-mag-b650-tomahawk-wifi-the-cheapest-of-the-decent-ones-review/' }
      ],
      buyLinks: [
        { store: 'Micro Center $176 in-store', url: 'https://www.microcenter.com/product/659662/msi-b650-mag-tomahawk-wifi-amd-am5-atx-motherboard' },
        { store: 'Amazon ~$211 (up from $197!)', url: 'https://www.amazon.com/MSI-B650-Tomahawk-Motherboard-Processors/dp/B0BHCCNSRH' },
        { store: 'Best Buy ~$220', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=msi+b650+tomahawk' }
      ]
    },
    {
      id: 'x870e-strix',
      name: 'ASUS ROG Strix X870E-E Gaming WiFi',
      price: 362,
      socket: 'AM5',
      recommended: false,
      notes: 'Premium AM5 - 5x M.2 (3x PCIe 5.0), WiFi 7, 5GbE, USB4. Best-in-class. \uD83D\uDC8E Amazon ~$362 (price stabilized). Newegg $394.99 (17% off $477, down from $409.99 \u2014 new low!). Best Buy ~$435 (Newegg marketplace). ASUS eShop $500 MSRP. \u26A0\uFE0F Price stabilized from $699 spike in Feb 2026. \u2B50 ASUS $30 Steam code promo confirmed active thru July 1, 2026 (eShop only, register by July 12, limited to 1,000 redemptions).',
      advice: 'PREMIUM: ~$362 at Amazon (28% off $500 MSRP!). Newegg dropped to $394.99 (was $409.99). $30 ASUS Steam code available but only via ASUS eShop ($500) = ~$470 effective vs ~$362 Amazon. Buy from Amazon. Still $122 more than X870 Tomahawk ($240) for USB4, 5x M.2, premium VRMs. Hard to justify for a 9800X3D gaming build, but a solid price for this board.',
      sources: [
        { label: 'Tom\'s HW Review (4/5)', url: 'https://www.tomshardware.com/pc-components/motherboards/asus-rog-strix-x870e-e-gaming-wifi-review' },
        { label: 'PC Guide Review', url: 'https://www.pcguide.com/motherboard/review/asus-rog-strix-x870e-e-gaming-wifi/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$362-400 (best!)', url: 'https://www.amazon.com/dp/B0DGFKN5HV' },
        { store: 'Newegg $394.99 (17% off $477, new low!)', url: 'https://www.newegg.com/asus-rog-strix-x870e-e-gaming-wifi-atx-motherboard-amd-x870e-am5/p/N82E16813119682' },
        { store: 'ASUS eShop $500 + $30 Steam code (thru July 1)', url: 'https://shop.asus.com/us/90mb1ib0-mvaay0-rog-strix-x870e-e-gaming-wifi.html' }
      ]
    }
  ],
  ram: [
    {
      id: 'ddr5-32gb-6000-cl36',
      name: '32GB DDR5-6000 CL36 (G.Skill Flare X5)',
      price: 359,
      capacity: 32,
      recommended: true,
      notes: '\u2B50 BEST VALUE - AMD EXPO certified. DDR5-6000 is the AM5 sweet spot (1:1 Infinity Fabric). Amazon ~$359 (best flat price!). Newegg $449.99 direct. Code SSF5478 \u2014 \u26A0\uFE0F UNVERIFIED for April (was TechRadar verified, may have expired \u2014 verify at checkout before relying on it). \u26A0\uFE0F DDR5 retail pullback continuing in April (first drop in 8 months started late March, -7.2% MoM Germany, -1.7% US per TrendForce). Contract prices stable \u2014 retail softening may be temporary. Still ~4.7x pre-crisis ($76). Shortage expected through Q4 2027 (WCCFTech/IDC). Micron exited consumer RAM \u2014 only Samsung & SK Hynix remain.',
      advice: '32GB is all you need for gaming (AAA uses ~20GB max). CL36 vs CL30 is ~1-2% gaming difference. Amazon ~$359 is the best flat price. Code SSF5478 at Newegg \u2014 unverified for April, may have expired (verify at checkout). DDR5 market softening but contract prices unchanged \u2014 don\'t expect a crash. Buy now before H2 2026 tariff hikes hit.',
      sources: [
        { label: 'PC Gamer: Best RAM 2026', url: 'https://www.pcgamer.com/best-ram-for-gaming/' },
        { label: 'TrendForce: DDR5 Retail Pullback Mar 2026', url: 'https://www.trendforce.com/news/2026/03/31/news-ddr5-retail-prices-pullback-amid-market-correction-but-industry-players-cite-stable-contract-trends/' },
        { label: 'PC Gamer: DDR5 Prices Drop (Mar 30)', url: 'https://www.pcgamer.com/hardware/memory/yes-some-ddr5-ram-prices-have-dropped-recently-but-i-wouldnt-pop-the-champagne-just-yet/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$359 (best flat price!)', url: 'https://www.amazon.com/G-Skill-288-Pin-CL36-36-36-96-Channel-F5-6000J3636F16GX2-FX5/dp/B0BFGB2D2Z' },
        { store: 'Newegg $449.99 (~$380 w/ code SSF5478, verify at checkout)', url: 'https://www.newegg.com/g-skill-flare-x5-32gb-ddr5-6000-cas-latency-cl36-desktop-memory-black/p/N82E16820374419' },
        { store: 'Walmart ~$410', url: 'https://www.walmart.com/search?q=g.skill+flare+x5+ddr5+6000' }
      ]
    },
    {
      id: 'ddr5-32gb-6000-cl30',
      name: '32GB DDR5-6000 CL30 (Kingston FURY Beast)',
      price: 474,
      capacity: 32,
      recommended: false,
      notes: 'Tighter CL30 timings for ~1-2% more gaming perf. AMD EXPO + Intel XMP 3.0 certified. Amazon ~$474 (best!). Newegg $624.99 direct (3P from ~$527) \u2014 Newegg jumped significantly from $519. Best Buy ~$480. \u26A0\uFE0F DDR5 retail softening slightly in March (first drop in 8 months) but contract prices unchanged \u2014 caution on expecting big drops.',
      advice: 'PREMIUM TIMINGS: CL30 is technically optimal but now ~$115+ more than CL36 ($474 vs $359) for 1-2% real-world difference. Amazon ~$474 is the only sane CL30 price right now \u2014 Newegg direct is $624.99 (avoid). The CL30 premium is barely justified at $474; at $500+ it definitely isn\'t. Stick with Flare X5 CL36 at $359 Amazon.',
      sources: [
        { label: 'PC Gamer: Best RAM 2026', url: 'https://www.pcgamer.com/best-ram-for-gaming/' },
        { label: 'TechRadar: Best DDR5', url: 'https://www.techradar.com/computing/best-ddr5-ram' }
      ],
      buyLinks: [
        { store: 'Amazon ~$474 (best!)', url: 'https://www.amazon.com/Kingston-2x16GB-6000MT-Desktop-KF560C30BBEAK2-32/dp/B0CYM58GFS' },
        { store: 'Newegg ~$527 (3P Top Rated) / $624.99 direct', url: 'https://www.newegg.com/kingston-technology-corp-fury-beast-32gb-ddr5-6000-cas-latency-cl30-memory-black/p/N82E16820242861' },
        { store: 'Best Buy ~$480', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=kingston+fury+beast+ddr5+6000+cl30' }
      ]
    },
    {
      id: 'ddr5-64gb-6000',
      name: '64GB DDR5-6000 (G.Skill Trident Z5 Neo)',
      price: 880,
      capacity: 64,
      recommended: false,
      notes: '\u26A0\uFE0F\u26A0\uFE0F SEVERE SHORTAGE (slight easing) - 64GB DDR5 ~$880 at Amazon, Newegg ~$950 (crept up from $920 range). Pangoly peak was $1,045 in mid-Feb 2026. TrendForce Mar 31: "retail pullback amid market correction, but industry players cite stable contract trends." Tom\'s HW: "64GB of DDR5 now costs more than an entire PS5." Pre-crisis this kit was $193 \u2014 current price is ~4.5-4.9x. Structural shortage from AI data center demand expected through Q4 2027 (WCCFTech/IDC).',
      advice: 'OVERKILL FOR GAMING: Games use ~20GB max. You\'re paying ~$521-561 extra over 32GB ($880-919 vs $359) for capacity you\'ll never touch in games. Price eased slightly from peak ($1,045) to $880-920 range. The TurboQuant retail pullback is likely temporary \u2014 contract prices are stable and the structural AI demand hasn\'t changed. Buy 32GB now and upgrade later if/when prices normalize.',
      sources: [
        { label: 'Tom\'s HW: "More than a PS5"', url: 'https://www.tomshardware.com/pc-components/ddr5/64gb-of-ddr5-memory-now-costs-more-than-an-entire-ps5-even-after-a-discount-trident-z5-neo-kit-jumps-to-usd600-due-to-dram-shortage-and-its-expected-to-get-worse-into-2026' },
        { label: 'TrendForce: DDR5 Retail Pullback Mar 2026', url: 'https://www.trendforce.com/news/2026/03/31/news-ddr5-retail-prices-pullback-amid-market-correction-but-industry-players-cite-stable-contract-trends/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$880 (best!)', url: 'https://www.amazon.com/s?k=g.skill+trident+z5+neo+64gb+ddr5+6000' },
        { store: 'Newegg ~$950 (crept up from $920)', url: 'https://www.newegg.com/g-skill-trident-z5-neo-rgb-series-64gb-ddr5-6000-cas-latency-cl30-desktop-memory-black/p/N82E16820374445' }
      ]
    }
  ],
  cooling: [
    {
      id: 'pa-120-se-v2',
      name: 'Thermalright Peerless Assassin 120 SE V2',
      price: 33,
      type: 'air',
      recommended: false,
      notes: 'Updated V2 of GN\'s "The Champ" air cooler. Amazon ~$33 (prior SE model sale price \u2014 V2 may be higher). Newegg SE V2 non-ARGB ~$45 (sale from $50, "lowest in 30 days"). Dual-tower, 6 heatpipes, AGHP Gen 5.0, rated to 265W TDP. Supports LGA 1851/1700 and AM5.',
      advice: 'BUDGET: At ~$33, an absurd deal for 9800X3D (120W). Competes with $80-100 towers at a third of the price. NOT enough for i9-14900K under sustained 253W load.',
      sources: [
        { label: 'GN: PA120 SE Review', url: 'https://gamersnexus.net/coolers/champ-41-thermalright-peerless-assassin-cpu-cooler-review-benchmarks' },
        { label: 'Tom\'s HW Review', url: 'https://www.tomshardware.com/reviews/thermalright-peerless-assassin-120-se' }
      ],
      buyLinks: [
        { store: 'Amazon ~$33', url: 'https://www.amazon.com/Thermalright-Peerless-Assassin-120-Cooler/dp/B0DP23NF7T' }
      ]
    },
    {
      id: 'arctic-360-pro',
      name: 'Arctic Liquid Freezer III Pro 360',
      price: 89,
      type: 'aio',
      recommended: true,
      notes: '\u2B50 GN "The New Best" AIO - 2C cooler than standard on AMD, 10C on Intel. Integrated VRM fan. Nothing else comes close. Amazon ~$89 (Non-RGB black, all-time low! was $105), ARGB ~$94. Tom\'s HW: "Best AIO for 9950X3D and Intel too." Tech4Gamers: "Cooler To Beat In 2026."',
      advice: 'RECOMMENDED: ~$89 on Amazon for the non-RGB black variant of the best AIO ever tested (all-time low! was $105). ARGB variant ~$94 if you want lighting. Handles both 14900K and 9800X3D with ease. $102 cheaper than the Corsair Titan ($191) for better thermals.',
      sources: [
        { label: 'GN: "The New Best"', url: 'https://gamersnexus.net/coolers/new-best-arctic-liquid-freezer-iii-360-280-cpu-cooler-review-benchmarks' },
        { label: 'Tom\'s HW: Pro Review', url: 'https://www.tomshardware.com/pc-components/liquid-cooling/arctic-liquid-freezer-iii-pro-review' },
        { label: 'Tech4Gamers: "Cooler To Beat"', url: 'https://tech4gamers.com/arctic-liquid-freezer-iii-pro-360-a-rgb-review/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$89 (Non-RGB Black, lowest ever!)', url: 'https://www.amazon.com/Parent-ARCTIC-Liquid-Freezer-III/dp/B0F2TRHJX3' },
        { store: 'PCPartPicker', url: 'https://pcpartpicker.com/product/v2kqqs/arctic-liquid-freezer-iii-pro-360-77-cfm-liquid-cpu-cooler-acfre00180a' }
      ]
    },
    {
      id: 'corsair-titan',
      name: 'Corsair iCUE Link Titan 360 RX RGB',
      price: 191,
      type: 'aio',
      recommended: false,
      notes: 'Premium AIO - Corsair FlowDrive pump, hot-swap caps, iCUE ecosystem integration. LCD variant available at ~$250+. Amazon ~$191 (best!), Newegg $199.99. Price volatile in 2026 \u2014 ranged $140-322.',
      advice: 'LUXURY: ~$191 at Amazon for similar performance to the $89 Arctic (2.1x the price). Newegg $199.99. Buy for the iCUE ecosystem and looks, not for thermals.',
      sources: [
        { label: 'PC Gamer Review', url: 'https://www.pcgamer.com/hardware/cooling/corsair-icue-link-titan-360-rx-lcd-review/' },
        { label: 'XDA Review', url: 'https://www.xda-developers.com/corsair-icue-link-titan-360-rx-rgb-review/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$191 (best!)', url: 'https://www.amazon.com/CORSAIR-iCUE-Titan-Liquid-Cooler/dp/B0D6BFBLTK' },
        { store: 'Newegg $199.99', url: 'https://www.newegg.com/p/0EZ-00MD-00003' }
      ]
    }
  ],
  storage: [
    {
      id: 'ssd-2tb-budget',
      name: '2TB Crucial P310',
      price: 214,
      recommended: true,
      notes: '\u2B50 BEST VALUE SSD - Gen4 speeds at nearly half the 990 Pro price. Gaming load times are identical. \u26A0\uFE0F NAND CRISIS DEEPENING: Amazon ~$214, Best Buy ~$260, Newegg ~$290. Prices volatile \u2014 spiked to $400 in Feb 2026. Was $94 in mid-2025. NAND costs up 246% per Kingston, all 2026 production sold out (Phison CEO). Tom\'s HW: "pricing apocalypse through 2027." TrendForce Apr 2026: AI/HDD shortage still stoking NAND surge, no supply relief until late 2027. PC OEMs downgrading SSD specs to manage costs. Buy ASAP \u2014 prices only going up.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: P310 Review', url: 'https://www.tomshardware.com/reviews/crucial-p310-ssd-review' }
      ],
      buyLinks: [
        { store: 'Amazon ~$214 (best!)', url: 'https://www.amazon.com/Crucial-P310-2280-PCIe-Gen4/dp/B0DC8RVRBZ' },
        { store: 'Best Buy ~$260', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=crucial+p310+2tb' },
        { store: 'Newegg ~$300', url: 'https://www.newegg.com/crucial-2tb-p310-nvme/p/N82E16820156413' }
      ]
    },
    {
      id: 'ssd-2tb',
      name: '2TB Samsung 990 Pro',
      price: 400,
      recommended: false,
      notes: 'Best Gen4 SSD. 7,450 MB/s read. Was $133 \u2014 NAND shortage has tripled the price. Pangoly tracker: ~$400 current (Amazon 1P). Samsung.com $499.99. Newegg ~$493 (3P Amigos). \u2B50 Micro Center ~$280 in-store (huge savings if nearby!). \u26A0\uFE0F Pangoly spike to $844 on Mar 31 (3P surge event). Still ~3x the $133 mid-2025 low. Volatile \u2014 check at purchase time.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: 990 Pro Review', url: 'https://www.tomshardware.com/reviews/samsung-990-pro-ssd-review' }
      ],
      buyLinks: [
        { store: 'Micro Center ~$280 in-store (best!)', url: 'https://www.microcenter.com/product/661028/samsung-990-pro-2tb-ssd' },
        { store: 'Amazon ~$400 (1P)', url: 'https://www.amazon.com/SAMSUNG-Internal-Expansion-MZ-V9P2T0B-AM/dp/B0BHJJ9Y77' },
        { store: 'Newegg ~$493 (3P)', url: 'https://www.newegg.com/samsung-2tb-990-pro-nvme-2-0/p/N82E16820147861' },
        { store: 'Best Buy ~$440', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=samsung+990+pro+2tb' }
      ]
    },
    {
      id: 'ssd-4tb',
      name: '4TB Samsung 990 Pro',
      price: 940,
      recommended: false,
      notes: 'Single-sided 4TB. Premium for capacity. \u26A0\uFE0F MASSIVE PRICE SPIKE: Amazon ~$940 (1P, confirmed Apr 4 \u2014 up from $700 last week!). Newegg ~$889-995 (3P, volatile). 30-day avg $725 per pricehistory.app \u2014 current price is well above avg. Hit $1,600 in Feb 2026. Was $250 in Nov 2023. Now ~3.8x the mid-2025 low. NAND crisis worsening \u2014 contract prices surged ~38% in Q1 2026, no relief until late 2027.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: 990 Pro Review', url: 'https://www.tomshardware.com/reviews/samsung-990-pro-ssd-review' }
      ],
      buyLinks: [
        { store: 'Amazon ~$940 (1P, spiked from $700!)', url: 'https://www.amazon.com/s?k=samsung+990+pro+4tb' },
        { store: 'Newegg ~$889 (3P BioStar) / $995 (other 3P)', url: 'https://www.newegg.com/samsung-4tb-990-pro-nvme-2-0/p/N82E16820147879' }
      ]
    }
  ],
  case: [
    {
      id: 'corsair-4000d-rs',
      name: 'Corsair Frame 4000D RS',
      price: 100,
      recommended: true,
      notes: '\u2B50 Includes 3 fans! Great airflow, clean cable management, InfiniRail fan mounting. GN: "Corsair Remembered How to Make a Case." Amazon ~$90-100 (has dipped to $73 on sale — set price alerts!). Corsair $100. ARGB variant ~$125.',
      advice: '',
      sources: [
        { label: 'GN: "Corsair Remembered How to Make a Case"', url: 'https://gamersnexus.net/cases/corsair-remembered-how-make-case-frame-4000d-rs-argb-review' },
        { label: 'Tom\'s HW: "Lightweight, Effective"', url: 'https://www.tomshardware.com/pc-components/pc-cases/corsair-frame-4000d-case-review' }
      ],
      buyLinks: [
        { store: 'Corsair $100', url: 'https://www.corsair.com/us/en/p/pc-cases/cc-9011335-ww/4000d-rs-airflow-mid-tower-atx-pc-case-black-cc-9011335-ww' },
        { store: 'Amazon ~$100', url: 'https://www.amazon.com/s?k=corsair+frame+4000d+rs' }
      ]
    },
    {
      id: 'lancool-216',
      name: 'Lian Li Lancool 216',
      price: 103,
      recommended: false,
      notes: 'Proven airflow champ. 160mm fans, 392mm GPU clearance. Newegg ~$103, Best Buy ~$103. \u26A0\uFE0F Amazon spiked to ~$167 (supply issue) \u2014 avoid Amazon, buy from Newegg or Best Buy.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW Review', url: 'https://www.tomshardware.com/reviews/lian-li-lancool-216-review' }
      ],
      buyLinks: [
        { store: 'Newegg ~$103', url: 'https://www.newegg.com/lian-li-atx-mid-tower-steel-tempered-glass-cases-black-lancool-216rx/p/2AM-000Z-000A8' },
        { store: 'Best Buy ~$103', url: 'https://www.bestbuy.com/product/lian-li-lancool-216rx-black-steel-tempered-glass-atx-mid-tower-with-2x-16cm-argb-fans-black/J39TC2KZJ9' },
        { store: 'Amazon ~$167 (\u26A0\uFE0F inflated!)', url: 'https://www.amazon.com/LANCOOL-Computer-All-Around-Pre-Installed-Innovative/dp/B0BN3SY5XW' }
      ]
    },
    {
      id: 'fractal-north',
      name: 'Fractal Design North',
      price: 155,
      recommended: false,
      notes: 'Stunning wood+mesh design. Great airflow despite aesthetic focus. Newegg ~$155, Amazon ~$171 (crept up from $155!). \u2B50 B&H ~$119 (best! per Tom\'s HW). Was $124 during Amazon Big Spring sale in March. \u26A0\uFE0F Tariff risk: Section 301 tariffs on Chinese electronics delayed until Nov 10, 2026 \u2014 prices stable for now but expect hikes in H2.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW Review', url: 'https://www.tomshardware.com/reviews/fractal-design-north' }
      ],
      buyLinks: [
        { store: 'Newegg ~$155', url: 'https://www.newegg.com/fractal-design-atx-mid-tower-steel-case-charcoal-black-fd-c-nor1c-01/p/N82E16811352203' },
        { store: 'B&H ~$119 (best!)', url: 'https://www.bhphotovideo.com/c/search?q=fractal+design+north' },
        { store: 'Amazon ~$171 (crept up!)', url: 'https://www.amazon.com/s?k=fractal+design+north+case' }
      ]
    }
  ],
  psu: [
    {
      id: 'rm850e',
      name: 'Corsair RM850e (ATX 3.1)',
      price: 125,
      wattage: 850,
      recommended: false,
      notes: 'ATX 3.1 (2025 refresh), native 12V-2x6, PCIe 5.1, 7yr warranty. Best Buy ~$125, Amazon ~$125, Newegg ~$145 (code BUSF536 for additional savings!, limited offer). Good for 9800X3D + 5080. \u26A0\uFE0F Tariff risk: PSUs manufactured in China face potential 20%+ price hikes in H2 2026 per IDC/PCWorld.',
      advice: '',
      sources: [
        { label: 'Best Buy', url: 'https://www.bestbuy.com/product/corsair-rme-series-rm850e-80-plus-gold-fully-modular-low-noise-atx-3-1-and-pcie-5-1-power-supply-black/J39QHT23VT' }
      ],
      buyLinks: [
        { store: 'Newegg ~$145 (code BUSF536!)', url: 'https://www.newegg.com/corsair-rmx-series-atx-3-1-compatible-850-w-cybenetics-gold-power-supply-black-rm850e/p/N82E16817139336' },
        { store: 'Amazon ~$125', url: 'https://www.amazon.com/CORSAIR-RM850e-Modular-Low-Noise-12V-2x6/dp/B0DPR86ZC8' }
      ]
    },
    {
      id: 'rm1000e',
      name: 'Corsair RM1000e (ATX 3.1)',
      price: 170,
      wattage: 1000,
      recommended: false,
      notes: 'ATX 3.1, 1000W Gold, compact 140mm. Headroom for any GPU. Amazon ~$170 (best!), Best Buy ~$175, B&H ~$175, Newegg ~$180 (code BUSF537 for additional savings!, limited offer).',
      advice: '',
      sources: [
        { label: 'Tom\'s HW', url: 'https://www.tomshardware.com/pc-components/power-supplies/corsair-rm1000e-atx-3-1-power-supply-review' }
      ],
      buyLinks: [
        { store: 'Amazon ~$170 (best!)', url: 'https://www.amazon.com/CORSAIR-RM1000e-Modular-Low-Noise-12V-2x6/dp/B0DPR5RZ1T' },
        { store: 'Best Buy ~$175', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=corsair+rm1000e' },
        { store: 'B&H ~$175', url: 'https://www.bhphotovideo.com/c/search?q=corsair+rm1000e' },
        { store: 'Newegg ~$180 (code BUSF537!)', url: 'https://www.newegg.com/corsair-rmx-series-atx-3-1-compatible-1000-w-cybenetics-gold-power-supply-black-rm1000e/p/N82E16817139337' }
      ]
    },
    {
      id: 'dp13-1000',
      name: 'be quiet! Dark Power 13 1000W Titanium',
      price: 235,
      wattage: 1000,
      recommended: false,
      notes: 'Titanium efficiency (95.2%), virtually silent, 10yr warranty. Newegg ~$235 (28% off $330 MSRP, lowest in 30 days!), Amazon ~$237-249, Best Buy ~$259. ATX 3.0 compliant (not 3.1 like Corsair units). Newegg is the clear buy here.',
      advice: '',
      sources: [
        { label: 'be quiet! Official', url: 'https://www.bequiet.com/en/powersupply/4046' }
      ],
      buyLinks: [
        { store: 'Newegg ~$235 (best! 28% off)', url: 'https://www.newegg.com/be-quiet-atx-3-0-compatible-1000-w-80-plus-titanium-certified-power-supplies-black/p/1HU-004H-000R8' },
        { store: 'Amazon ~$249', url: 'https://www.amazon.com/quiet-Titanium-Efficiency-Modular-Supply/dp/B0BV6CWS2Z' },
        { store: 'Best Buy ~$259', url: 'https://www.bestbuy.com/product/be-quiet-dark-power-13-1000w-atx-3-0-psu--80-plus-titanium--pcie-5-0--fully-digital-modular--10-year-warranty/CC5VXLQ2PY' }
      ]
    }
  ]
};
