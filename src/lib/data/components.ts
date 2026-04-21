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
      advice: 'AT 4K: Only 1-5% behind 9800X3D because GPU is the bottleneck. Keeping it is valid IF your chip shows no instability. BUT: degradation risk is real, resale dropping fast \u2014 eBay sold ~$250-305 used (floor holding ~$250 after Mar drop). After fees (~13%) expect ~$217-265 net used. Platform is a dead end. \u26A0\uFE0F\u26A0\uFE0F SELL NOW: Arrow Lake Refresh 270K Plus ($299 MSRP, ~$349 street confirmed, 17% over MSRP per Tom\'s HW) is the new viable alternative for buyers. \u26A0\uFE0F Intel confirmed 10-15% CPU price hikes effective April 2026 \u2014 AND a third hike reportedly landing in May (tech4gamers) \u2014 new Intel chips getting pricier, which may slow used 14900K\'s decline slightly. 250K Plus $199 MSRP (~$219-249 street), 250KF Plus $199.99. No 290K Plus coming (Intel confirmed scrapped). Window to get $300+ is closing \u2014 expect $230-280 range over Q2 2026. Run stability benchmarks + screenshot results before listing (buyers are wary).',
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
      price: 409,
      socket: 'AM5',
      recommended: true,
      owned: false,
      perf4k: 95,
      tdp: 120,
      notes: '\u2B50 UNDISPUTED GAMING KING - 96MB 3D V-Cache, 30% faster than 14900K in gaming, runs cool at 120W. \u2B50 ALL-TIME LOW HIT APR 11: Amazon $409.95 (beat prior $419.95 by $10! \u26A0\uFE0F 1P OOS 8 days and counting \u2014 list now $464, 3P new ~$389-462 incl. used from $389.99), Micro Center $399 standalone ($379.99 w/ Insider card!) or $679.99 bundle w/ B850 + 32GB DDR5 (per VideoCardz Apr 15), Newegg $959.99 bundle (CPU+mobo+RAM+SSD+Crimson Desert) or standalone + free Crimson Desert, Best Buy ~$449-479. Free Crimson Desert game ($69.99 value, launched Mar 19! Bundle thru Apr 25 \u2014 4 days left! Redeem by May 23). 9850X3D launched Jan 29 at $499 MSRP, only 3-7% faster \u2014 9800X3D remains the value king. Arrow Lake Refresh (270K Plus $299 MSRP, ~$329-349 street \u2014 17-19% over MSRP per Tom\'s HW) launched Mar 26 to rave reviews but X3D still dominates gaming by 10-20%. AMD responding with price cuts \u2014 PCGamesN: "AMD CPU price cuts have already begun." \u26A0\uFE0F Intel/AMD confirmed 10-15% CPU price hikes effective now (AI supply crunch); Intel reportedly planning a THIRD hike in May (tech4gamers) \u2014 retail X3D prices have actually dropped below MSRP despite channel hikes. Buy before retail catches up. \u26A0\uFE0F 9950X3D2 Dual Edition launches Apr 22 ($899 MSRP) \u2014 LAUNCHES TOMORROW \u2014 may temporarily depress 9800X3D street prices further.',
      advice: 'BEST VALUE: $409.95 at Amazon (all-time low from Apr 11 \u2014 but 1P OOS 6 days running, list now $464, 3P ~$389-462 incl used at $389.99) or $399 at Micro Center in-store ($379.99 w/ Insider card!) + free Crimson Desert ($69.99 value, now playable! Bundle ends Apr 25 \u2014 4 days left!) = ~$340 effective cost online IF Amazon 1P restocks, ~$310 at MC w/ card. Micro Center bundle $679.99 (CPU+B850+32GB DDR5) = fantastic value if you\'re near a store. Newegg $959.99 bundle (CPU+mobo+RAM+SSD+Crimson Desert). After selling 14900K (~$250-305 on eBay used, net ~$217-265 \u2014 resale floor holding ~$250 after Mar drop), net switch cost is ~$95-190 + mobo. AM5 platform lasts through 2027+ (Zen 6 "Medusa" desktop delayed to 2027, AM5 confirmed). Arrow Lake Refresh 270K Plus ($299 MSRP, ~$329-349 street) reviews stellar but X3D still dominates gaming by 10-20%. \u26A0\uFE0F Amazon 1P has been OOS since Apr 13 \u2014 no 1P restock signal yet. 3P is your only Amazon path right now. If you need it today, Micro Center in-store is the call.',
      why: 'Every major reviewer (GN, Tom\'s HW, TechSpot, PC Gamer) agrees: this is THE gaming CPU. 96MB 3D V-Cache gives it an insurmountable gaming advantage.',
      benchmarks: { ffxiv: 380, baldurs: 160, starfield: 169, cyberpunk: 219 },
      sources: [
        { label: 'GamersNexus: Full Review', url: 'https://gamersnexus.net/cpus/rip-intel-amd-ryzen-7-9800x3d-cpu-review-benchmarks-vs-7800x3d-285k-14900k-more' },
        { label: 'Tom\'s HW: "Devastating Performance"', url: 'https://www.tomshardware.com/pc-components/cpus/amd-ryzen-7-9800x3d-review-devastating-gaming-performance' },
        { label: 'PC Gamer: Best Gaming CPU', url: 'https://www.pcgamer.com/best-cpu-for-gaming/' }
      ],
      buyLinks: [
        { store: 'Amazon $409.95 all-time low; 1P OOS 8 days, list $464; 3P $389-462 + Crimson Desert (4 days left)', url: 'https://www.amazon.com/AMD-9800X3D-16-Thread-Desktop-Processor/dp/B0DKFMSMYK' },
        { store: 'Micro Center $399 in-store ($379.99 w/ card) or $679.99 bundle w/ B850+32GB', url: 'https://www.microcenter.com/product/687907/amd-ryzen-7-9800x3d-granite-ridge-am5-470ghz-8-core-boxed-processor-heatsink-not-included' },
        { store: 'Newegg $959.99 full bundle (CPU+mobo+RAM+SSD+Crimson Desert)', url: 'https://www.newegg.com/amd-ryzen-7-9000-series-ryzen-7-9800x3d-granite-ridge-zen-5-socket-am5-120w-desktop-cpu-processor/p/N82E16819113877' },
        { store: 'Best Buy $479 (OOS standalone)', url: 'https://www.bestbuy.com/product/amd-ryzen-7-9800x3d-8-core-16-thread-4-7-ghz-5-2-ghz-max-boost-socket-am5-120w-unlocked-desktop-processor-silver/JXKQHH5XSR' }
      ]
    },
    {
      id: 'r9-9950x3d',
      name: 'AMD Ryzen 9 9950X3D',
      price: 699,
      socket: 'AM5',
      recommended: false,
      owned: false,
      perf4k: 96,
      tdp: 170,
      notes: '16 cores / 128MB cache - Ties 9800X3D in gaming but adds massive productivity power. Full overclocking support (first for X3D Ryzen 9). Micro Center $599 in-store (clearing stock ahead of 9950X3D2 \u2014 unconfirmed if still current). \u26A0\uFE0F Amazon ~$675 (1P confirmed Apr 21, 3P sellers from ~$462). Newegg $699 (confirmed, sold by Newegg direct, limit 1) + free Crimson Desert ($69.99 value, 4 days left thru Apr 25, redeem by May 23). Best Buy ~$699. \u26A0\uFE0F 9950X3D2 "Dual Edition" (208MB cache, dual V-Cache, 16c/32t, 4.3/5.6 GHz, 200W TDP) LAUNCHING APR 22 \u2014 LAUNCHES TOMORROW TUE APR 22! AMD official MSRP $899 (29% above 9950X3D), AMD claims ~13% avg uplift overall (SPEC POISSON +63%, OpenFOAM +26%), modest gaming gains expected vs 9950X3D. VideoCardz flagged Amazon preorders listed at $999 (premium over MSRP \u2014 scalping pressure already); B&H listed at $899 MSRP (no pre-order premium). Newegg "coming soon." Will push 9950X3D prices down further post-launch.',
      advice: 'OVERKILL: Only 0.4% faster than 9800X3D in gaming for $250+ more ($675+ vs $409). No streaming planned, so the extra cores are wasted. MC $599 in-store if still available (clearing for 9950X3D2). Buy from Newegg $699 if you must. \u26A0\uFE0F WAIT 1 DAY: 9950X3D2 "Dual Edition" (208MB cache!) drops Apr 22 at $899 MSRP (Amazon preorders $999, B&H $899 \u2014 buy B&H to avoid scalp premium). Will push this chip\'s price down further. The 9800X3D at $409 ($399 MC) + the same free game is the smarter buy for pure gaming.',
      whyNot: 'Within 1-3% of 9800X3D in gaming. No streaming = no use for 16 cores. The $179-255 premium buys nothing for your use case.',
      benchmarks: { ffxiv: 373, baldurs: 155, starfield: 171, cyberpunk: 219 },
      sources: [
        { label: 'GamersNexus: 9950X3D Review', url: 'https://gamersnexus.net/cpus/amd-ryzen-9-9950x3d-cpu-review-benchmarks-vs-9800x3d-285k-9950x-more' },
        { label: 'Tom\'s HW: 9950X3D Review', url: 'https://www.tomshardware.com/pc-components/cpus/amd-ryzen-9-9950x3d-review' }
      ],
      buyLinks: [
        { store: 'Micro Center $599 in-store (if available)', url: 'https://www.microcenter.com/product/691349/amd-ryzen-9-9950x3d-granite-ridge-am5-430ghz-16-core-boxed-processor-heatsink-not-included' },
        { store: 'Amazon ~$675 (1P in stock Apr 21, 3P from ~$462)', url: 'https://www.amazon.com/dp/B0DVZSG8D5' },
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
      notes: '\u26A0\uFE0F QUASI-EOL \u2014 ASUS told retailers production ended, then denied it; NVIDIA says "not EOL" but GDDR7 shortage has effectively halted restocking. NVIDIA cutting gaming GPU production 30-40% in H1 2026 \u2014 5070 Ti is FIRST target for cuts. 50 SUPER lineup indefinitely delayed (confirmed CES 2026) \u2014 no new NVIDIA gaming GPUs in 2026; RTX 60-series pushed to 2028 (Tom\'s HW). Street prices: Newegg ~$999 (MSI Ventus 3X OC / Zotac Solid OC, floor \u2014 confirmed Apr 21), most models $1,000-1,160. Amazon ~$1,049 (confirmed Apr 21). Micro Center average $930 across locations (one MSRP card at $899 \u2014 see VideoCardz). Best Buy ~$1,069-1,299. Price trend declining in April vs March (bestvaluegpu.com) \u2014 peaked at $1,220 in mid-2025. ~54fps avg native 4K, DLSS 4.5 Dynamic MFG 6x now live (driver 596.21 WHQL, released Apr 16) \u2014 auto-targets 160Hz, 6x mode for path-traced titles. RTX 5060 Ti launched Apr 16: 16GB at $429, 8GB at $379. RTX 5060 ($299) in May. Resident Evil Requiem bundle expired Apr 13. Stock depleting \u2014 new units may not be replenished.',
      advice: '\u26A0\uFE0F\u26A0\uFE0F DO NOT BUY \u2014 5080 STILL SAME PRICE ON NEWEGG (confirmed Apr 21)! MSI Shadow 3X OC and Zotac Solid Core 5080s at $999 = same price as 5070 Ti floor for 15-18% MORE performance. The 5070 Ti at $999 makes zero sense when the 5080 is $999. Only consider if Micro Center has it under $899 in-store AND the 5080 is unavailable. \u2B50 RTX 5060 Ti (16GB, $429) is the budget alternative if 4K@160Hz isn\'t a hard target. Supply not recovering \u2014 this card is effectively dead at current pricing.',
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
        { store: 'Newegg ~$999 (MSI Ventus 3X OC / Zotac Solid OC, floor, confirmed Apr 21)', url: 'https://www.newegg.com/p/pl?d=rtx+5070+ti' },
        { store: 'Amazon ~$1,049 (confirmed Apr 21)', url: 'https://www.amazon.com/s?k=rtx+5070+ti' },
        { store: 'Micro Center avg $930 (one MSRP $899 model, varies by location)', url: 'https://www.microcenter.com/search/search_results.aspx?Ntt=rtx+5070+ti' },
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
      notes: '\u2B50 SWEET SPOT FOR 4K@160Hz - DLSS 4 MFG turns 68fps native into 238fps in Cyberpunk. \u2B50 $999 MSRP MODELS STILL ON NEWEGG (confirmed Apr 21)! MSI Shadow 3X OC and Zotac Solid Core at $999 \u2014 held this price for a week+ now. Premium models: Gigabyte Gaming OC $1,540, AORUS Master Ice $1,630. Amazon ~$1,249 (confirmed Apr 21). Micro Center ~$1,150-1,250 in-store (varies by model). Best Buy ~$1,260+. eBay used ~$1,199. \u26A0\uFE0F GDDR7 shortage + NVIDIA 30-40% production cuts, but 5080 is NVIDIA\'s PRIORITY 16GB card \u2014 better supply outlook than 5070 Ti. \u2B50 DLSS 5 announced at GTC 2026 (Fall 2026, RTX 50 exclusive) \u2014 neural rendering breakthrough, photoreal lighting via AI, massive future upgrade. DLSS 4.5 Dynamic MFG 6x live now (driver 596.21 WHQL, Apr 16). 250+ MFG-compatible games. Prices peaked at $1,500 in Aug 2025 and trending down \u2014 Newegg $999 is a new low since launch.',
      advice: 'RECOMMENDED: Best realistic path to 160Hz@4K. \u2B50 $999 MSRP MODELS STILL IN STOCK (confirmed Apr 21)! Newegg has MSI Shadow 3X OC and Zotac Solid Core at $999 \u2014 this window has held a week+, grab while available. Amazon ~$1,249. Micro Center ~$1,150-1,250 in-store. eBay used ~$1,199. \u26A0\uFE0F AT $999, THE 5080 COSTS THE SAME AS THE 5070 Ti \u2014 absolutely do NOT buy the 5070 Ti right now. 5080 is 15-18% faster for $0 more on Newegg. \u2B50 DLSS 5 coming Fall 2026 (RTX 50 exclusive, neural rendering) \u2014 buying the 5080 now means you get DLSS 5 support when it lands. NVIDIA prioritizing 5080 production. SUPER refresh indefinitely delayed (confirmed CES 2026). Clear buy.',
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
        { store: 'Newegg ~$999 (MSI Shadow 3X OC / Zotac Solid Core, MSRP! confirmed Apr 21)', url: 'https://www.newegg.com/p/pl?d=rtx+5080' },
        { store: 'Amazon ~$1,249 (confirmed Apr 21)', url: 'https://www.amazon.com/s?k=rtx+5080' },
        { store: 'Micro Center ~$1,150-1,250 (varies by model)', url: 'https://www.microcenter.com/search/search_results.aspx?Ntt=rtx+5080' },
        { store: 'Best Buy ~$1,260+', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=rtx+5080' }
      ]
    },
    {
      id: '5090',
      name: 'NVIDIA RTX 5090 32GB',
      price: 3695,
      vram: 32,
      recommended: false,
      perf4k: 99,
      tdp: 575,
      notes: '\uD83D\uDC8E ABSOLUTE FASTEST GPU - 30-69% faster than 5080. 32GB GDDR7. \u26A0\uFE0F Street prices vary wildly by retailer. \u2B50 Micro Center ~$2,910 in-store (ASUS TUF OC, 60-80% in-store success rate) \u2014 still the only reliable sub-$3k path. ASUS TUF is tracked at Newegg with a $2,909.99 Newegg-direct price BUT 1P is OOS (confirmed Apr 21) \u2014 only 3P marketplace sellers remain, starting $4,199. Newegg search page floor is $3,699.99 (MSI Ventus 3X OC / Zotac Solid OC / Gigabyte Gaming OC, all in stock). Newegg FE $3,695 (up from $3,799 per WCCFTech). Amazon ~$3,818 (confirmed Apr 21, up from $3,799). B&H ~$3,999 (PNY Triple Fan). NVIDIA.com $2,500-3,719 (liquid cooled). Best Buy FE $1,999 sells out in 3-5 min (restocks Tue/Fri 9-11am EST). eBay used ~$3,700-4,000 avg (per Tom\'s HW tracker Apr 2026; FE cards ~$3,700; flagship SKUs now hitting $5,000+). GDDR7 shortage structural \u2014 NVIDIA confirmed supply constraints through fiscal 2027. SUPER refresh indefinitely delayed (confirmed CES 2026) \u2014 RTX 60-series pushed to 2028. DLSS 4.5 Dynamic MFG 6x live (driver 595.79+). \u2B50 DLSS 5 announced GTC 2026 \u2014 Fall 2026 launch, RTX 50 EXCLUSIVE: neural rendering, photoreal AI lighting \u2014 5090 is the premier DLSS 5 card. \u26A0\uFE0F $5,000 price ceiling rumored by end of 2026 if GDDR7 shortage worsens (TrendForce).',
      advice: 'OVERKILL: ~150fps native 4K avg. Micro Center ~$2,910 in-store (ASUS TUF OC, 60-80% in-store availability) remains the only reasonable deal \u2014 the Newegg ASUS TUF listing shows $2,909.99 Newegg-direct but 1P is OOS, 3P marketplace is $4,199+ so not actually buyable at that price. Newegg in-stock floor is $3,699.99 (MSI Ventus / Zotac Solid / Gigabyte Gaming OC). Newegg FE $3,695. Amazon ~$3,818 (up from $3,799). Online 1.85-1.95x MSRP. The 5080 with DLSS 4 MFG hits the same 160Hz target at $999-1,249. Best Buy FE $1,999 restocks Tue/Fri 9-11am EST but sells out in 3-5 min. \u2B50 If DLSS 5 (Fall 2026, RTX 50 exclusive neural rendering) is a priority, the 5090 is the showcase card for it \u2014 but the 5080 also supports DLSS 5. eBay used ~$3,700-4,000 avg (Tom\'s HW Apr tracker) \u2014 used is NOT cheaper than new anymore, skip it. \u26A0\uFE0F Price could climb toward $5,000 later in 2026 (TrendForce).',
      whyNot: 'Online street price is $3,799-3,999 (1.90-2.00x MSRP). 575W TDP needs 1000W PSU. The 5080 with DLSS 4 MFG reaches the same 160Hz@4K target at $999-1,249. Both cards support DLSS 5.',
      benchmarks: { cyberpunk_4k: 150, starfield_4k: 108, baldurs_4k: 133, ffxiv_4k: 182 },
      sources: [
        { label: 'GN: RTX 5090 Review', url: 'https://gamersnexus.net/gpus/nvidia-geforce-rtx-5090-founders-edition-review-benchmarks-gaming-thermals-power' },
        { label: 'DSO: 20-Game 4K Benchmark', url: 'https://www.dsogaming.com/articles/nvidia-rtx-5090-vs-rtx-4090-native-4k-gaming-benchmarks/' },
        { label: 'Tom\'s HW: 5090 Coverage', url: 'https://www.tomshardware.com/tag/rtx-5090' },
        { label: 'NVIDIA: DLSS 5 Announcement (GTC 2026)', url: 'https://nvidianews.nvidia.com/news/nvidia-dlss-5-delivers-ai-powered-breakthrough-in-visual-fidelity-for-games' },
        { label: 'WCCFTech: DLSS 5 Neural Rendering', url: 'https://wccftech.com/nvidia-dlss-5-game-changing-visuals/' }
      ],
      buyLinks: [
        { store: 'Micro Center ~$2,910 (ASUS TUF OC, in-store, best!)', url: 'https://www.microcenter.com/search/search_results.aspx?Ntt=rtx+5090' },
        { store: 'Newegg ASUS TUF $2,909.99 (1P OOS \u2014 3P $4,199+)', url: 'https://www.newegg.com/asus-tuf-gaming-tuf-rtx5090-32g-gaming-geforce-rtx-5090-32gb-graphics-card-triple-fans/p/N82E16814126752' },
        { store: 'Newegg in-stock floor $3,699.99 (MSI Ventus / Zotac / Gigabyte)', url: 'https://www.newegg.com/p/pl?d=rtx+5090' },
        { store: 'Amazon ~$3,818 (confirmed Apr 21, up from $3,799)', url: 'https://www.amazon.com/s?k=rtx+5090' },
        { store: 'Best Buy FE $1,999 (restocks Tue/Fri 9-11am EST, sells out in 3-5 min)', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=rtx+5090' }
      ]
    }
  ],
  motherboard: [
    {
      id: 'z790-tomahawk',
      name: 'MSI MAG Z790 Tomahawk MAX WiFi',
      price: 298,
      socket: 'LGA1700',
      recommended: false,
      notes: 'Solid Z790 for Intel - 16+1+1 VRM with 90A stages, WiFi 7, handles even LN2 overclocking. \u26A0\uFE0F\u26A0\uFE0F TARIFF HIT HARD: Amazon jumped from ~$212 (Apr 2 Pangoly low) to $297-300 (confirmed Apr 17) \u2014 32% Taiwan tariff now passing through. Newegg ~$242 (3P, HK sellers routing around tariffs). Best Buy ~$304. LGA1700 platform is EOL with Arrow Lake (LGA1851) as current gen \u2014 but tariffs are overriding the natural demand-fade price decline.',
      advice: 'FOR i9-14900K: \u26A0\uFE0F Amazon jumped to ~$298 from $212 (tariff pass-through) \u2014 no longer the budget win it was. Newegg 3P ~$242 is your best path now (HK sellers routing tariffs). At $298 Amazon it\'s virtually identical to X870 Tomahawk ($240 Amazon pre-tariff / $300 Newegg post-tariff). Only buy if you\'re definitely keeping the 14900K. If tariff pricing hits both boards equally, AM5\'s platform future through 2027+ makes X870 the no-brainer.',
      sources: [
        { label: 'PC Gamer Review', url: 'https://www.pcgamer.com/msi-mag-z790-tomahawk-max-wifi-motherboard-review/' },
        { label: 'OC3D Review', url: 'https://overclock3d.net/reviews/cpu_mainboard/msi-mag-z790-tomahawk-max-review/4/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$298 (\u26A0\uFE0F tariff hike from $212!)', url: 'https://www.amazon.com/MSI-MAG-Z790-Tomahawk-WiFi/dp/B0CJSL89T2' },
        { store: 'Newegg ~$242 (3P HK sellers, best!)', url: 'https://www.newegg.com/msi-mag-z790-tomahawk-max-wifi-atx-intel-z790-lga-1700/p/N82E16813144633' },
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
      notes: '\u2B50 SWEET SPOT AM5 - WiFi 7, 5GbE, PCIe 5.0 M.2, 8-layer server-grade PCB. The 9800X3D doesn\'t need more. Amazon ~$240. \u26A0\uFE0F TARIFF HIT: Newegg jumped to $299.99 ($289.99 after $10 rebate) \u2014 up from $239.99! 32% Taiwan tariff effective Apr 2, 2026 is now passing through to retail. MSI Store $239.99 (may still have pre-tariff stock). Best Buy ~$254. Buy from Amazon or MSI Store while pre-tariff pricing lasts.',
      advice: 'RECOMMENDED: ~$240 at Amazon or MSI Store $239.99 (best!). \u26A0\uFE0F Newegg jumped to $300 from tariffs \u2014 avoid Newegg, buy Amazon/MSI Store. AM5 with WiFi 7 + 5GbE + upgrade path through 2027+ (Zen 6 "Medusa" desktop delayed to 2027, AM5 confirmed). The 9800X3D doesn\'t need a $500 board. Now $28 more than Z790 Tomahawk ($212 Amazon) but the X870 has a platform future. \u26A0\uFE0F Amazon/MSI prices likely to follow Newegg\'s tariff increase soon. Buy now.',
      sources: [
        { label: 'The FPS Review', url: 'https://www.thefpsreview.com/2025/02/04/msi-mag-x870-tomahawk-wifi-motherboard-review/' },
        { label: 'KitGuru Review', url: 'https://www.kitguru.net/components/motherboard/leo-waldock/msi-mag-x870-tomahawk-review/' }
      ],
      buyLinks: [
        { store: 'MSI Store $239.99 (best!)', url: 'https://us-store.msi.com/MAG-X870-TOMAHAWK-WIFI' },
        { store: 'Amazon ~$240 (best!)', url: 'https://www.amazon.com/MSI-Tomahawk-Motherboard-Processors-Bluetooth/dp/B0DG3HK897' },
        { store: 'Newegg $299.99 ($289.99 w/ rebate \u2014 tariff hike!)', url: 'https://www.newegg.com/msi-mag-x870-tomahawk-wifi-atx-motherboard-amd-x870-am5/p/N82E16813144667' },
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
      price: 395,
      socket: 'AM5',
      recommended: false,
      notes: 'Premium AM5 - 5x M.2 (3x PCIe 5.0), WiFi 7, 5GbE, USB4. Best-in-class. \uD83D\uDC8E Amazon ~$419 (tariff-adjusted up from $362). Newegg $394.99 (17% off $477, down from $409.99 \u2014 new low!). \u26A0\uFE0F Best Buy jumped to $418.99 (up from $435, then broke LOWER \u2014 mixed signals, likely tariff-adjusted). ASUS eShop $500 MSRP. \u26A0\uFE0F Price stabilized from $699 spike in Feb 2026 but 32% Taiwan tariff pressure building. \u2B50 ASUS $30 Steam code promo CONFIRMED ACTIVE April 2026 (covers Strix X870E-E/H plus many others \u2014 per Tweaktown Apr coverage; no updated end-date confirmed beyond prior July 1).',
      advice: 'PREMIUM: Newegg $394.99 is the new anchor (Amazon jumped to ~$419 tariff-adjusted) \u2014 grab before tariff hits here too. Best Buy $418.99 (tariff-hit). Buy from Newegg. $30 ASUS Steam code only via ASUS eShop ($500) = ~$470 effective, not worth it vs Newegg. Still $95 more than X870 Tomahawk ($300 Newegg post-tariff) for USB4, 5x M.2, premium VRMs. Hard to justify for a 9800X3D gaming build, but a solid price for this board right now.',
      sources: [
        { label: 'Tom\'s HW Review (4/5)', url: 'https://www.tomshardware.com/pc-components/motherboards/asus-rog-strix-x870e-e-gaming-wifi-review' },
        { label: 'PC Guide Review', url: 'https://www.pcguide.com/motherboard/review/asus-rog-strix-x870e-e-gaming-wifi/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$419 (tariff-adjusted from $362)', url: 'https://www.amazon.com/dp/B0DGFKN5HV' },
        { store: 'Newegg $394.99 (best! 17% off $477, new anchor)', url: 'https://www.newegg.com/asus-rog-strix-x870e-e-gaming-wifi-atx-motherboard-amd-x870e-am5/p/N82E16813119682' },
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
      notes: '\u2B50 BEST VALUE - AMD EXPO certified. DDR5-6000 is the AM5 sweet spot (1:1 Infinity Fabric). Amazon ~$359 (confirmed Apr 21, best flat price! Pangoly-tracked). \u2B50 Newegg $449.99 list \u2014 code STRF99 drops $90 to $359.99 (verified active Apr 21). \u26A0\uFE0F Old code SSF5478 appears EXPIRED \u2014 absent from all coupon aggregators (Discoup, SimplyCodes, CouponFollow, Tom\'s HW) as of Apr 21. TrendForce Mar 31: DDR5 retail fell 7.2% MoM in March \u2014 FIRST monthly decline in 8 months. But still 408% above Jul 2025 baseline. Samsung+SK Hynix negotiating Q2 contract hikes of 58-63% QoQ. Shortage expected through late 2027/2028 (PC Gamer). Micron exited consumer RAM \u2014 only Samsung & SK Hynix remain. Google TurboQuant AI memory compression cited as easing some data-center demand pressure.',
      advice: '32GB is all you need for gaming (AAA uses ~20GB max). CL36 vs CL30 is ~1-2% gaming difference. Amazon ~$359 is the best flat price. \u2B50 Newegg $449.99 with code STRF99 (~$360 net, verify at checkout) \u2014 old code SSF5478 is dead, don\'t rely on it. Retail pulled back 7.2% in March (first decline in 8 months) but contract prices still rising 58-63% QoQ next quarter \u2014 this dip is consumer-affordability driven, not supply relief. Buy now.',
      sources: [
        { label: 'PC Gamer: Best RAM 2026', url: 'https://www.pcgamer.com/best-ram-for-gaming/' },
        { label: 'TrendForce: DDR5 Retail Pullback Mar 2026', url: 'https://www.trendforce.com/news/2026/03/31/news-ddr5-retail-prices-pullback-amid-market-correction-but-industry-players-cite-stable-contract-trends/' },
        { label: 'PC Gamer: DDR5 Prices Drop (Mar 30)', url: 'https://www.pcgamer.com/hardware/memory/yes-some-ddr5-ram-prices-have-dropped-recently-but-i-wouldnt-pop-the-champagne-just-yet/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$359 (best flat price!)', url: 'https://www.amazon.com/G-Skill-288-Pin-CL36-36-36-96-Channel-F5-6000J3636F16GX2-FX5/dp/B0BFGB2D2Z' },
        { store: 'Newegg $359.99 w/ code STRF99 (list $449.99, \u2014$90 off; old SSF5478 expired)', url: 'https://www.newegg.com/g-skill-flare-x5-32gb-ddr5-6000-cas-latency-cl36-desktop-memory-black/p/N82E16820374419' },
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
      notes: '\u26A0\uFE0F\u26A0\uFE0F SEVERE SHORTAGE - 64GB DDR5 non-RGB ~$880 at Amazon, RGB variant ~$934-949 (WaveRide Tech ships from Canada, MD Discounts $965 shipped). Newegg $949.99. eBay $968. Pangoly peak was $1,045 in mid-Feb 2026. TrendForce Mar 31: DDR5 retail fell 7.2% MoM \u2014 first decline in 8 months, but Q2 contract hikes of 58-63% QoQ still being negotiated. Tom\'s HW: "64GB of DDR5 now costs more than an entire PS5." Pre-crisis this kit was $193 \u2014 current price is ~4.5x. PCGamer: "memory crisis could run past 2028." Structural shortage from AI data center demand.',
      advice: 'OVERKILL FOR GAMING: Games use ~20GB max. You\'re paying ~$521 extra over 32GB ($880 vs $359) for capacity you\'ll never touch in games. Price eased slightly from peak ($1,045) to $880 range (non-RGB; RGB runs $934+). Retail softened 7.2% in March but Samsung+SK Hynix pushing Q2 contracts up 58-63% QoQ \u2014 structural AI demand hasn\'t changed. Buy 32GB now and upgrade later if/when prices normalize.',
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
      notes: 'Updated V2 of GN\'s "The Champ" air cooler. Amazon ~$33 (confirmed Apr 21, PC Gamer-cited stable price). Newegg SE V2 $45.90 on sale (list $49.90, confirmed Apr 21). Dual-tower, 6 heatpipes, AGHP Gen 5.0, rated to 265W TDP. Supports LGA 1851/1700 and AM5.',
      advice: 'BUDGET: At ~$33 Amazon, an absurd deal for 9800X3D (120W). Competes with $80-100 towers at a third of the price. Newegg V2 $45.90 if Amazon black is OOS. NOT enough for i9-14900K under sustained 253W load.',
      sources: [
        { label: 'GN: PA120 SE Review', url: 'https://gamersnexus.net/coolers/champ-41-thermalright-peerless-assassin-cpu-cooler-review-benchmarks' },
        { label: 'Tom\'s HW Review', url: 'https://www.tomshardware.com/reviews/thermalright-peerless-assassin-120-se' }
      ],
      buyLinks: [
        { store: 'Amazon ~$33 (best!)', url: 'https://www.amazon.com/Thermalright-Peerless-Assassin-120-Cooler/dp/B0DP23NF7T' },
        { store: 'Newegg $45.90 (SE V2 on sale from $49.90)', url: 'https://www.newegg.com/p/13C-000Y-000M3' }
      ]
    },
    {
      id: 'arctic-360-pro',
      name: 'Arctic Liquid Freezer III Pro 360',
      price: 105,
      type: 'aio',
      recommended: true,
      notes: '\u2B50 GN "The New Best" AIO - 2C cooler than standard on AMD, 10C on Intel. Integrated VRM fan. Nothing else comes close. Amazon ~$105 (Non-RGB black, back up from $89 all-time low). ARGB ~$94 (PC Gamer). Tom\'s HW: "Best AIO for 9950X3D and Intel too." Tech4Gamers: "Cooler To Beat In 2026."',
      advice: 'RECOMMENDED: ~$105 on Amazon for the non-RGB black variant of the best AIO ever tested (was $89 briefly, back up). ARGB variant ~$94 if you want lighting. Handles both 14900K and 9800X3D with ease. $86 cheaper than the Corsair Titan ($191) for better thermals.',
      sources: [
        { label: 'GN: "The New Best"', url: 'https://gamersnexus.net/coolers/new-best-arctic-liquid-freezer-iii-360-280-cpu-cooler-review-benchmarks' },
        { label: 'Tom\'s HW: Pro Review', url: 'https://www.tomshardware.com/pc-components/liquid-cooling/arctic-liquid-freezer-iii-pro-review' },
        { label: 'Tech4Gamers: "Cooler To Beat"', url: 'https://tech4gamers.com/arctic-liquid-freezer-iii-pro-360-a-rgb-review/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$105 (Non-RGB Black, up from $89 low)', url: 'https://www.amazon.com/Parent-ARCTIC-Liquid-Freezer-III/dp/B0F2TRHJX3' },
        { store: 'PCPartPicker', url: 'https://pcpartpicker.com/product/v2kqqs/arctic-liquid-freezer-iii-pro-360-77-cfm-liquid-cpu-cooler-acfre00180a' }
      ]
    },
    {
      id: 'corsair-titan',
      name: 'Corsair iCUE Link Titan 360 RX RGB',
      price: 191,
      type: 'aio',
      recommended: false,
      notes: 'Premium AIO - Corsair FlowDrive pump, hot-swap caps, iCUE ecosystem integration. LCD variant available at ~$250+. Amazon ~$191 (down from $200). Newegg $199.99. Price volatile in 2026 \u2014 ranged $140-322.',
      advice: 'LUXURY: ~$191-200 at Amazon/Newegg for similar performance to the $105 Arctic (~1.8x the price). Buy for the iCUE ecosystem and looks, not for thermals.',
      sources: [
        { label: 'PC Gamer Review', url: 'https://www.pcgamer.com/hardware/cooling/corsair-icue-link-titan-360-rx-lcd-review/' },
        { label: 'XDA Review', url: 'https://www.xda-developers.com/corsair-icue-link-titan-360-rx-rgb-review/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$191 (down from $200)', url: 'https://www.amazon.com/CORSAIR-iCUE-Titan-Liquid-Cooler/dp/B0D6BFBLTK' },
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
      notes: '\u2B50 BEST VALUE SSD - Gen4 speeds at nearly half the 990 Pro price. Gaming load times are identical. \u26A0\uFE0F NAND CRISIS DEEPENING: Amazon ~$214.99 (last confirmed Apr 16, Pangoly tracking shows some retailers near $201). Best Buy ~$260. Newegg ~$290. Prices spiked to $400 in Feb 2026, now pulling back. Was $94 in mid-2025. NAND costs up 246% per Kingston, all 2026 production sold out (Phison CEO). Tom\'s HW: "pricing apocalypse through 2027." TrendForce Apr 15 spot update: DDR4 still edging lower 0.48% WoW but NAND supply structurally tight. Q1 contract prices surged 55-60% QoQ and TrendForce now forecasts Q2 +70-75% QoQ (accelerating; client SSDs +40%+ QoQ the steepest category), no supply relief until late 2027. Buy ASAP \u2014 volatile.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: P310 Review', url: 'https://www.tomshardware.com/reviews/crucial-p310-ssd-review' }
      ],
      buyLinks: [
        { store: 'Amazon ~$214.99 (best! crept up from $201)', url: 'https://www.amazon.com/Crucial-P310-2280-PCIe-Gen4/dp/B0DC8RVRBZ' },
        { store: 'Best Buy ~$260', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=crucial+p310+2tb' },
        { store: 'Newegg ~$300', url: 'https://www.newegg.com/crucial-2tb-p310-nvme/p/N82E16820156413' }
      ]
    },
    {
      id: 'ssd-2tb',
      name: '2TB Samsung 990 Pro',
      price: 512,
      recommended: false,
      notes: 'Best Gen4 SSD. 7,450 MB/s read. Was $133 \u2014 NAND shortage has nearly 4x the price. \u26A0\uFE0F PRICE CLIMBING: Amazon ~$512 now (Pangoly-tracked Apr 21, up from $478 on Apr 16). Samsung.com $639.99. Newegg ~$493 (3P). \u2B50 Micro Center ~$280 in-store (huge savings if nearby!). Still ~3.8x the $133 mid-2025 low. Hit $844 high on Mar 31, 2026. \u26A0\uFE0F NAND CRISIS WORSENING: TrendForce Mar 31 forecasts Q2 2026 NAND contract prices +70-75% QoQ on top of Q1\'s ~60% jump. Phison CEO: all 2026 NAND production already sold out, "pricing apocalypse" through 2027. Enterprise SSDs now ~60% of global NAND output \u2014 consumer allocation shrinking. Volatile \u2014 verify at checkout, direction is UP.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: 990 Pro Review', url: 'https://www.tomshardware.com/reviews/samsung-990-pro-ssd-review' }
      ],
      buyLinks: [
        { store: 'Micro Center ~$280 in-store (best!)', url: 'https://www.microcenter.com/product/661028/samsung-990-pro-2tb-ssd' },
        { store: 'Amazon ~$512 (\u26A0\uFE0F up from $478 Apr 16 \u2014 verify at checkout)', url: 'https://www.amazon.com/SAMSUNG-Internal-Expansion-MZ-V9P2T0B-AM/dp/B0BHJJ9Y77' },
        { store: 'Newegg ~$493 (3P)', url: 'https://www.newegg.com/samsung-2tb-990-pro-nvme-2-0/p/N82E16820147861' },
        { store: 'Best Buy ~$440', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=samsung+990+pro+2tb' }
      ]
    },
    {
      id: 'ssd-4tb',
      name: '4TB Samsung 990 Pro',
      price: 743,
      recommended: false,
      notes: 'Single-sided 4TB. Premium for capacity. \u26A0\uFE0F PRICE CORRECTING: Amazon ~$743 (1P, confirmed Apr 4 \u2014 down sharply from $940 spike!). Newegg ~$889-995 (3P, volatile). 30-day avg $725 per pricehistory.app \u2014 Amazon now near average. Hit $1,600 in Feb 2026. Was $250 in Nov 2023. Still ~3x the mid-2025 low. NAND crisis continues \u2014 Q1 2026 contract prices surged 55-60% QoQ, no relief until late 2027. Price volatile \u2014 check at purchase time.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: 990 Pro Review', url: 'https://www.tomshardware.com/reviews/samsung-990-pro-ssd-review' }
      ],
      buyLinks: [
        { store: 'Amazon ~$743 (1P, down from $940 spike!)', url: 'https://www.amazon.com/s?k=samsung+990+pro+4tb' },
        { store: 'Newegg ~$889 (3P BioStar) / $995 (other 3P)', url: 'https://www.newegg.com/samsung-4tb-990-pro-nvme-2-0/p/N82E16820147879' }
      ]
    }
  ],
  case: [
    {
      id: 'corsair-4000d-rs',
      name: 'Corsair Frame 4000D RS',
      price: 85,
      recommended: true,
      notes: '\u2B50 Includes 3 fans! Great airflow, clean cable management, InfiniRail fan mounting. GN: "Corsair Remembered How to Make a Case." \u2B50 ON SALE (still active Apr 21): Corsair.com $84.99 (was $114.99, 26% off! Ships 4/22-4/23). Newegg $84.99 (same sale). Amazon black dynamic pricing. \u26A0\uFE0F WHITE $69.99 deal EXPIRED (ended Apr 6, now ~$84.99 everywhere). ARGB variant ~$125.',
      advice: '',
      sources: [
        { label: 'GN: "Corsair Remembered How to Make a Case"', url: 'https://gamersnexus.net/cases/corsair-remembered-how-make-case-frame-4000d-rs-argb-review' },
        { label: 'Tom\'s HW: "Lightweight, Effective"', url: 'https://www.tomshardware.com/pc-components/pc-cases/corsair-frame-4000d-case-review' }
      ],
      buyLinks: [
        { store: 'Corsair $84.99 (26% off, sale!)', url: 'https://www.corsair.com/us/en/p/pc-cases/cc-9011335-ww/4000d-rs-airflow-mid-tower-atx-pc-case-black-cc-9011335-ww' },
        { store: 'Newegg $84.99 (sale!)', url: 'https://www.newegg.com/corsair-atx-mid-tower-frame-4000d-rs-argb-steel-tempered-glass-computer-case-black/p/N82E16811139230' },
        { store: 'Amazon ~$90-100', url: 'https://www.amazon.com/s?k=corsair+frame+4000d+rs' }
      ]
    },
    {
      id: 'lancool-216',
      name: 'Lian Li Lancool 216',
      price: 103,
      recommended: false,
      notes: 'Proven airflow champ. 160mm fans, 392mm GPU clearance. \u2B50 Newegg $102.99 + $10 promotional gift card w/ purchase (confirmed Apr 21 via direct page fetch, promo active, effective net ~$93). Best Buy $102.99 (down from $111.49). \u26A0\uFE0F Amazon prior $167 spike unable to re-verify, listings active but dynamic pricing \u2014 Newegg best with gift card, otherwise Newegg/Best Buy tied at $102.99.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW Review', url: 'https://www.tomshardware.com/reviews/lian-li-lancool-216-review' }
      ],
      buyLinks: [
        { store: 'Newegg $102.99 + $10 gift card (best!)', url: 'https://www.newegg.com/lian-li-atx-mid-tower-steel-tempered-glass-cases-black-lancool-216rx/p/2AM-000Z-000A8' },
        { store: 'Best Buy $102.99 (down from $111.49)', url: 'https://www.bestbuy.com/product/lian-li-lancool-216rx-black-steel-tempered-glass-atx-mid-tower-with-2x-16cm-argb-fans-black/J39TC2KZJ9' },
        { store: 'Amazon ~$167 (\u26A0\uFE0F inflated!)', url: 'https://www.amazon.com/LANCOOL-Computer-All-Around-Pre-Installed-Innovative/dp/B0BN3SY5XW' }
      ]
    },
    {
      id: 'fractal-north',
      name: 'Fractal Design North',
      price: 155,
      recommended: false,
      notes: '\u2B50 Stunning wood+mesh design. Great airflow despite aesthetic focus. \u2B50 Newegg $154.99 Charcoal Black Mesh (confirmed Apr 21 via direct page fetch). The $109.97 figure some trackers quote is from a Sep 2024 Tom\'s HW deal, NOT currently available. Amazon ~$171 per TechSpot Feb tracking. March $124 Amazon Big Spring sale expired (9to5toys flagged). B&H prior $119 unable to re-verify (403 anti-scrape). \u26A0\uFE0F Tariff risk: Section 301 tariffs on Chinese electronics delayed until Nov 10, 2026 \u2014 prices stable for now but expect hikes in H2.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW Review', url: 'https://www.tomshardware.com/reviews/fractal-design-north' }
      ],
      buyLinks: [
        { store: 'Newegg $154.99 Charcoal Black Mesh (confirmed Apr 21)', url: 'https://www.newegg.com/fractal-design-atx-mid-tower-steel-case-charcoal-black-fd-c-nor1c-01/p/N82E16811352203' },
        { store: 'B&H (price unverified \u2014 anti-scrape)', url: 'https://www.bhphotovideo.com/c/product/1752176-REG/fractal_design_fd_c_nor1c_01_north_mid_tower_atx_case.html' },
        { store: 'Amazon (price unverified)', url: 'https://www.amazon.com/s?k=fractal+design+north+case' }
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
      notes: 'ATX 3.1 (2025 refresh), native 12V-2x6, PCIe 5.1, 7yr warranty. Newegg $124.98 (13% off $144.99, confirmed Apr 21 \u2014 $95 Slickdeals deal DID RETURN briefly Apr 12 (34% off flash); Newegg 1P back to $124.98). Amazon ~$125. Best Buy ~$125. PCPartPicker lowest alt listing $109.99. Good for 9800X3D + 5080. \u26A0\uFE0F China PSU tariff stack: 45% current rate on imported AC/DC power supplies (100electronics/bravoelectro, Apr 2026) + distributors raised 6-10% in Jan \u2014 expect further hikes in H2 2026. Watch Slickdeals — the $95 flash has already recurred once this month.',
      advice: '',
      sources: [
        { label: 'Best Buy', url: 'https://www.bestbuy.com/product/corsair-rme-series-rm850e-80-plus-gold-fully-modular-low-noise-atx-3-1-and-pcie-5-1-power-supply-black/J39QHT23VT' }
      ],
      buyLinks: [
        { store: 'Newegg $124.98 (13% off; $95 Slickdeals flash returned Apr 12)', url: 'https://www.newegg.com/corsair-rmx-series-atx-3-1-compatible-850-w-cybenetics-gold-power-supply-black-rm850e/p/N82E16817139336' },
        { store: 'Amazon ~$125', url: 'https://www.amazon.com/CORSAIR-RM850e-Modular-Low-Noise-12V-2x6/dp/B0DPR86ZC8' }
      ]
    },
    {
      id: 'rm1000e',
      name: 'Corsair RM1000e (ATX 3.1)',
      price: 170,
      wattage: 1000,
      recommended: false,
      notes: 'ATX 3.1, 1000W Gold, compact 140mm. Headroom for any GPU. Newegg $164.99 (down from $180!). Amazon ~$170. Best Buy ~$175. B&H ~$175.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW', url: 'https://www.tomshardware.com/pc-components/power-supplies/corsair-rm1000e-atx-3-1-power-supply-review' }
      ],
      buyLinks: [
        { store: 'Amazon ~$170 (best!)', url: 'https://www.amazon.com/CORSAIR-RM1000e-Modular-Low-Noise-12V-2x6/dp/B0DPR5RZ1T' },
        { store: 'Best Buy ~$175', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=corsair+rm1000e' },
        { store: 'B&H ~$175', url: 'https://www.bhphotovideo.com/c/search?q=corsair+rm1000e' },
        { store: 'Newegg $164.99 (down from $180)', url: 'https://www.newegg.com/corsair-rmx-series-atx-3-1-compatible-1000-w-cybenetics-gold-power-supply-black-rm1000e/p/N82E16817139337' }
      ]
    },
    {
      id: 'dp13-1000',
      name: 'be quiet! Dark Power 13 1000W Titanium',
      price: 235,
      wattage: 1000,
      recommended: false,
      notes: 'Titanium efficiency (95.2%), virtually silent, 10yr warranty. Amazon ~$230 (down from $249!). Newegg ~$235 (28% off $330 MSRP). Best Buy ~$259. ATX 3.0 compliant (not 3.1 like Corsair units).',
      advice: '',
      sources: [
        { label: 'be quiet! Official', url: 'https://www.bequiet.com/en/powersupply/4046' }
      ],
      buyLinks: [
        { store: 'Newegg ~$235 (best! 28% off)', url: 'https://www.newegg.com/be-quiet-atx-3-0-compatible-1000-w-80-plus-titanium-certified-power-supplies-black/p/1HU-004H-000R8' },
        { store: 'Amazon ~$230 (down from $249)', url: 'https://www.amazon.com/quiet-Titanium-Efficiency-Modular-Supply/dp/B0BV6CWS2Z' },
        { store: 'Best Buy ~$259', url: 'https://www.bestbuy.com/product/be-quiet-dark-power-13-1000w-atx-3-0-psu--80-plus-titanium--pcie-5-0--fully-digital-modular--10-year-warranty/CC5VXLQ2PY' }
      ]
    }
  ]
};
