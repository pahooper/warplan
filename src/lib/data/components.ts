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
      advice: 'AT 4K: Only 1-5% behind 9800X3D because GPU is the bottleneck. Keeping it is valid IF your chip shows no instability. BUT: degradation risk is real, resale dropping fast \u2014 eBay used listings $250-305 (Apr 30 spot check; high end softened ~$25 vs Apr 29 — Arrow Lake Refresh + 9800X3D dropping to $439 are both pulling buyer attention), new sealed retail $370-441 (Pangoly retail Apr 30 $441.65 unchanged); Newegg still $469 with $130 off + extra 10% via code "NTEL37" + free 750W PSU bundle (NTEL37 re-verified Apr 24-25 per coupon trackers). After eBay fees (~13%) expect ~$217-265 net used. Platform is a dead end. \u26A0\uFE0F\u26A0\uFE0F SELL NOW: Arrow Lake Refresh 270K Plus ($299 MSRP, ~$329-357 street — 17% over MSRP just 48hrs after launch per Tom\'s HW) is the buyers\' alternative — already tariff-bumped, narrowing the value delta vs used 14900K. \u26A0\uFE0F Intel May 2026 hike CONFIRMED at 8-10% (Tech4Gamers, TechPowerUp Apr 28-29, Apr 30 still no rollout reversal) \u2014 stacks on Feb 10-15% + Mar ~15%, cumulative 2026 trajectory ~30% YoY. New Intel chips getting pricier, firming used 14900K floor slightly. 250K Plus $199 MSRP (~$219-249 street), 250KF Plus $199.99. No 290K Plus coming (Intel confirmed scrapped). 9950X3D2 launched Apr 22 (only 0.8% gaming uplift over 9800X3D per TechSpot/Tom\'s HW/Phoronix/KitGuru) further depresses Intel high-end demand. List Langley\'s chip at $290-305 BIN to net ~$252-265 after fees \u2014 the eBay top end softened ~$25 in 24h as the 9800X3D dropped to $439 Amazon Gaming Week, so list a touch lower than yesterday\'s $300-320 ask. Don\'t wait past the May Intel hike \u2014 listing fatigue + Arrow Lake reviews tilting attention away from LGA1700 outweigh the short-term halo. Run stability benchmarks + screenshot before listing (buyers are wary).',
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
      price: 439,
      socket: 'AM5',
      recommended: true,
      owned: false,
      perf4k: 95,
      tdp: 120,
      notes: '\u2B50 UNDISPUTED GAMING KING - 96MB 3D V-Cache, 30% faster than 14900K in gaming, runs cool at 120W. \u2B50 AMAZON GAMING WEEK CRACKED IT - Amazon $439.99 Apr 30 (was $479.99, ~8% off, Apr 27 - May 4 sale window, confirmed Tom\'s HW + TechRadar + Windows Central). ⭐ Newegg-direct ALSO DROPPED Apr 30 to $439.99 (was $464 Apr 29, 13% off $506.99 list, sold/shipped by Newegg) — 1P direct now matches Amazon and undercuts the previous 3P "Ideabuy" $448-449 floor. The 1P-restock-since-Apr-13 drought is OVER. Newegg 3P MobileMonster $464 / DealsADay $478.98 are now both ABOVE the 1P price (3P stack collapsed). Micro Center $399 standalone (Insider card pricing still in effect per April reporting) or $679.99 bundle w/ B850 + 32GB DDR5 (per VideoCardz Apr 15), Newegg $959 full combo bundle (CPU+ASUS TUF X870-Plus WiFi+V-Color 32GB+T-Force 512GB SSD+Crimson Desert digital code+1yr antivirus, retailer-pre-allocated codes still included while stock lasts), Best Buy ~$449-479. \u26a0\ufe0f Crimson Desert AMD-direct promo ENDED Apr 25 (code redemption open till May 23) \u2014 the Newegg combo above is the last channel still bundling a code. 9850X3D launched Jan 29 at $499 MSRP, only 3-7% faster \u2014 9800X3D remains the value king. Arrow Lake Refresh (270K Plus $299 MSRP, ~$329-349 street \u2014 10-19% over MSRP per Tom\'s HW) launched Mar 26 to rave reviews but X3D still dominates gaming by 10-20%. AMD responding with price cuts \u2014 PCGamesN: "AMD CPU price cuts have already begun." \u26A0\uFE0F Intel/AMD confirmed 10-15% CPU price hikes effective now (AI supply crunch); Intel reportedly planning a THIRD hike in May (tech4gamers) \u2014 retail X3D prices have actually dropped below MSRP despite channel hikes. Buy before retail catches up. \u26A0\uFE0F 9950X3D2 Dual Edition LAUNCHED Apr 22 at $899 MSRP \u2014 reviewers (TechSpot, Tom\'s HW, Phoronix, KitGuru) confirm only 0.8% gaming uplift over 9800X3D, 6-9% productivity gain. Verdict: irrelevant for gamers, 9800X3D stays the gaming king. Stock is good (no scalp premium post-launch), but may pressure 9950X3D street prices down further by extension.',
      advice: 'BEST VALUE: \u2B50\u2B50 NEW FLOOR HIT Apr 30 \u2014 Amazon Gaming Week $439.99 (Apr 27 - May 4) AND Newegg-direct $439.99 simultaneously, both 1P, no code needed. Down $24 from yesterday\'s $464 Newegg / $448 3P-Ideabuy. The Apr 13 1P stockout is OVER \u2014 Amazon and Newegg are both selling direct again at the same price. Micro Center $399 in-store ($379.99 w/ Insider card) is still cheapest if you\'re near a store. Effective cost ~$310 at MC w/ Insider card. Micro Center bundle $679.99 (CPU+B850+32GB DDR5) = fantastic value. Newegg $959.99 full bundle (CPU+mobo+RAM+SSD). After selling 14900K (eBay used $250-305 Apr 30, net $217-265 after fees), net switch cost is ~$135-223 + mobo. AM5 platform lasts through 2027+ (Zen 6 "Medusa" desktop delayed to 2027, AM5 confirmed). Arrow Lake Refresh 270K Plus ($299 MSRP, ~$329-357 street, 17-19% over MSRP) reviews stellar but X3D still dominates gaming by 10-20%. \u26A0\uFE0F 9950X3D2 launched Apr 22 \u2014 confirmed only 0.8% gaming uplift, validates 9800X3D as the gaming pick. \u26A0\uFE0F Gaming Week sale ends May 4 \u2014 if you\'re building within weeks, this is the buy window. Reviewer consensus on 9950X3D2 ($899) is unanimous "skip for gaming, buy 9800X3D" \u2014 validates this pick from above.',
      why: 'Every major reviewer (GN, Tom\'s HW, TechSpot, PC Gamer) agrees: this is THE gaming CPU. 96MB 3D V-Cache gives it an insurmountable gaming advantage.',
      benchmarks: { ffxiv: 380, baldurs: 160, starfield: 169, cyberpunk: 219 },
      sources: [
        { label: 'GamersNexus: Full Review', url: 'https://gamersnexus.net/cpus/rip-intel-amd-ryzen-7-9800x3d-cpu-review-benchmarks-vs-7800x3d-285k-14900k-more' },
        { label: 'Tom\'s HW: "Devastating Performance"', url: 'https://www.tomshardware.com/pc-components/cpus/amd-ryzen-7-9800x3d-review-devastating-gaming-performance' },
        { label: 'PC Gamer: Best Gaming CPU', url: 'https://www.pcgamer.com/best-cpu-for-gaming/' }
      ],
      buyLinks: [
        { store: 'Amazon $439.99 (Gaming Week sale Apr 27-May 4, 8% off $479.99 MSRP, 1P direct)', url: 'https://www.amazon.com/AMD-9800X3D-16-Thread-Desktop-Processor/dp/B0DKFMSMYK' },
        { store: 'Newegg-direct $439.99 (was $464 Apr 29; 13% off $506.99 list, 1P, holds Apr 30)', url: 'https://www.newegg.com/amd-ryzen-7-9000-series-ryzen-7-9800x3d-granite-ridge-zen-5-socket-am5-120w-desktop-cpu-processor/p/N82E16819113877' },
        { store: 'Micro Center $399 in-store ($379.99 w/ card) or $679.99 bundle w/ B850+32GB', url: 'https://www.microcenter.com/product/687907/amd-ryzen-7-9800x3d-granite-ridge-am5-470ghz-8-core-boxed-processor-heatsink-not-included' },
        { store: 'Newegg $959 full combo bundle (CPU+TUF X870+32GB+512GB SSD+Crimson Desert code while stock lasts)', url: 'https://www.newegg.com/amd-ryzen-7-9000-series-ryzen-7-9800x3d-granite-ridge-zen-5-socket-am5-120w-desktop-cpu-processor/p/N82E16819113877' },
        { store: 'Best Buy $479 (OOS standalone)', url: 'https://www.bestbuy.com/product/amd-ryzen-7-9800x3d-8-core-16-thread-4-7-ghz-5-2-ghz-max-boost-socket-am5-120w-unlocked-desktop-processor-silver/JXKQHH5XSR' }
      ]
    },
    {
      id: 'r9-9950x3d',
      name: 'AMD Ryzen 9 9950X3D',
      price: 574,
      socket: 'AM5',
      recommended: false,
      owned: false,
      perf4k: 96,
      tdp: 170,
      notes: '16 cores / 128MB cache - Ties 9800X3D in gaming but adds massive productivity power. Full overclocking support (first for X3D Ryzen 9). Micro Center $599 in-store (clearing stock ahead of 9950X3D2 \u2014 unconfirmed if still current Apr 26). \u26A0\uFE0F Amazon ALL-TIME LOW $573.99 (live since Apr 26, holds Apr 29 — STILL #1 Amazon best-seller per Tom\'s HW Apr 28-29) (Amazon Gaming Week, 18% off $699 MSRP, $125 cut per Tom\'s HW + Windows Central + Club386 + VideoCardz; topped Amazon best-sellers list. Limited-time deal, stock flipped between in/OOS during window). Newegg-direct $639.99 Apr 30 (8% off $699 MSRP, $59 savings, sold/shipped by Newegg, limit 1, holds since Apr 28). \u26a0\ufe0f Free ASRock 750W PSU bundle from earlier in week NO LONGER visible on product page Apr 30 \u2014 treat as expired. 3P alts $699-730 if needed sooner. Best Buy ~$699. ⚠️ Crimson Desert promo bundle ENDED Apr 25 — no longer a factor. \u26A0\uFE0F 9950X3D2 "Dual Edition" (208MB cache, dual V-Cache, 16c/32t, 4.3/5.6 GHz, 200W TDP) LAUNCHED APR 22 at $899 MSRP \u2014 TechSpot/Tom\'s HW/Phoronix/KitGuru reviews confirm only 0.8% gaming uplift over 9800X3D, 6-9% productivity gain (Blender +7%, LLVM +6.6%). Notebookcheck verdict: "questions its existence" for gamers. Both Amazon and Newegg now listing 9950X3D2 at $899 MSRP \u2014 no scalp premium post-launch (initial Amazon $999 preorder normalized). This pressures 9950X3D demand from above (better productivity) and below (9800X3D at $449 matches it in gaming for $125 less even at the new $574 Amazon floor).',
      advice: 'OVERKILL: Only 0.4-0.8% faster than 9800X3D in gaming for $125+ more ($573.99 Amazon ATL vs $449 Newegg 3P 9800X3D). No streaming planned, so the extra cores are wasted. ⭐ Amazon $573.99 ATL (live since Apr 26, holds Apr 29 — Tom\'s HW confirms still #1 Amazon best-seller; 18% off $699 MSRP, limited-time, stock has flipped in/OOS). Newegg-direct $639.99 Apr 30 (in stock, 1P direct, limit 1, free PSU bundle no longer on page) is the in-stock backup if Amazon flips OOS, or MC $599 in-store if available. \u26A0\uFE0F 9950X3D2 LAUNCHED Apr 22 at $899 MSRP and reviewers confirmed it adds only 0.8% over the 9800X3D in gaming \u2014 the whole high-end X3D stack just collapsed for pure gamers. The 9800X3D at $449 Newegg 3P / $399 MC is the smarter buy. Only consider 9950X3D if you do heavy productivity (Blender, LLVM compile) AND the $574 Amazon deal is live; don\'t pay $639 Newegg for 0.4-0.8% gaming gain.',
      whyNot: 'Within 0.4-0.8% of 9800X3D in gaming (now confirmed by 9950X3D2 reviews — extra cache barely matters at 4K). No streaming = no use for 16 cores. Even at the Amazon $574 ATL the $125 premium over 9800X3D ($449) buys nothing for your use case.',
      benchmarks: { ffxiv: 373, baldurs: 155, starfield: 171, cyberpunk: 219 },
      sources: [
        { label: 'GamersNexus: 9950X3D Review', url: 'https://gamersnexus.net/cpus/amd-ryzen-9-9950x3d-cpu-review-benchmarks-vs-9800x3d-285k-9950x-more' },
        { label: 'Tom\'s HW: 9950X3D Review', url: 'https://www.tomshardware.com/pc-components/cpus/amd-ryzen-9-9950x3d-review' },
        { label: 'TechSpot: 9950X3D2 vs 9950X3D (0.8% gaming)', url: 'https://www.techspot.com/review/3114-amd-ryzen-9-9950x3d2/' },
        { label: 'Tom\'s HW: 9950X3D2 "More Cache, More Cash"', url: 'https://www.tomshardware.com/pc-components/cpus/amd-ryzen-9-9950x3d2-review' }
      ],
      buyLinks: [
        { store: 'Micro Center $599 in-store (if available)', url: 'https://www.microcenter.com/product/691349/amd-ryzen-9-9950x3d-granite-ridge-am5-430ghz-16-core-boxed-processor-heatsink-not-included' },
        { store: 'Amazon $573.99 ATL (#1 best-seller Apr 29, 18% off, limited-time; stock flipping in/OOS Apr 26-29)', url: 'https://www.amazon.com/dp/B0DVZSG8D5' },
        { store: 'Newegg-direct $639.99 (8% off $699 MSRP, in stock 1P, limit 1, Apr 30 \u2014 PSU bundle gone)', url: 'https://www.newegg.com/amd-ryzen-9-9000-series-ryzen-9-9950x3d-granite-ridge-socket-am5-desktop-cpu-processor/p/N82E16819113884' }
      ]
    }
  ],
  gpu: [
    {
      id: '5070ti',
      name: 'NVIDIA RTX 5070 Ti 16GB',
      price: 999,
      vram: 16,
      recommended: false,
      perf4k: 72,
      tdp: 300,
      notes: '\u26A0\uFE0F QUASI-EOL \u2014 ASUS told retailers production ended, then denied it; NVIDIA says "not EOL" but GDDR7 shortage has effectively halted restocking. NVIDIA cutting gaming GPU production 30-40% in H1 2026 \u2014 5070 Ti is FIRST target for cuts. 50 SUPER lineup indefinitely delayed (confirmed CES 2026) \u2014 no new NVIDIA gaming GPUs in 2026; RTX 60-series pushed to 2028 (Tom\'s HW). Street prices: Newegg ~$999.99 floor HOLDS Apr 30 (3 cards 1P in stock: Zotac SOLID SFF OC, MSI Ventus 3X OC BLACK, Gigabyte WindForce \u2014 flat vs Apr 28-29). MSI Ventus + Gigabyte ship with PRAGMATA bundle. Mid-tier $1,039-1,099 (PNY ARGB, ASUS Prime, ASUS TUF OC). Amazon floor ~$1,049 (PNY ARGB Triple Fan per bestvaluegpu Apr 30, holds vs Apr 28-29). ASUS publicly DENIED EOL claim Apr 2026 (Tom\'s HW) but confirmed memory supply impacted production \u2014 supply tight but not collapsing. Micro Center average $930 across locations (one MSRP card at $899 \u2014 see VideoCardz). Best Buy ~$1,069-1,299. Price trend declining in April vs March (bestvaluegpu.com) \u2014 peaked at $1,220 in mid-2025. ~54fps avg native 4K, DLSS 4.5 Dynamic MFG 6x now live (driver 596.21 WHQL, released Apr 16) \u2014 auto-targets 160Hz, 6x mode for path-traced titles. RTX 5060 Ti launched Apr 16: 16GB at $429, 8GB at $379. RTX 5060 ($299) in May. \u2b50 PRAGMATA bundle ACTIVE Apr 14 - May 12 (redeem by June 9) on select 5070 Ti / 5080 / 5090 \u2014 replaces expired RE Requiem. Stock depleting \u2014 new units may not be replenished.',
      advice: '\u26A0\uFE0F\u26A0\uFE0F PRICE COLLISION OVER Apr 26 \u2014 5080 floor JUMPED from $999 to $1,299 on Newegg! Those $999 MSI Shadow / Zotac Solid Core MSRP cards are GONE. So at $999.99 (3 Newegg 1P cards in stock Apr 29 — Zotac SOLID SFF OC + MSI Ventus 3X OC BLACK + Gigabyte WindForce; MSI/Gigabyte ship with PRAGMATA bundle thru May 12), the 5070 Ti is back to being a rational budget pick — save $300 vs cheapest in-stock 5080 for ~15-18% less performance. STILL: only buy if 4K@160Hz isn\'t a hard requirement (native fps avg ~54, leans heavily on DLSS 4 MFG). Otherwise step up to the 5080. \u2B50 RTX 5060 Ti (16GB, $429) is the budget alternative if 4K@160Hz isn\'t a hard target. Supply not recovering \u2014 buy now or pay more later.',
      whyNot: 'Native 4K performance averages ~54fps. Needs DLSS 4 MFG to hit 160Hz, and not all games support it yet. 16GB VRAM may limit future 4K titles. The 5080 floor is now ~$1,299 Newegg / ~$1,249 Amazon \u2014 $300 more for 15-18% better performance. Only buy if $1,299 for the 5080 is out of range.',
      benchmarks: { cyberpunk_4k: 48, starfield_4k: 61, baldurs_4k: 64, ffxiv_4k: 97 },
      sources: [
        { label: 'GN: 5070 Ti Review', url: 'https://gamersnexus.net/gpus/do-not-buy-nvidia-rtx-5070-ti-gpu-absurdity-benchmarks-review' },
        { label: 'Tom\'s HW: 5070 Ti Review', url: 'https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5070-ti-review-asus' },
        { label: 'TechSpot: 5070 Ti Effectively Dead', url: 'https://www.techspot.com/news/110943-rtx-5070-ti-effectively-dead-gpu-market-worse.html' },
        { label: 'Tweaktown: Production Ended', url: 'https://www.tweaktown.com/news/109716/nvidia-has-reportedly-ended-geforce-rtx-5070-ti-production-and-its-now-end-of-life/index.html' },
        { label: 'NotebookCheck: 5070 Ti Supply Crisis', url: 'https://www.notebookcheck.net/Asus-confirms-RTX-5070-Ti-is-now-discontinued-as-Nvidia-effectively-kills-Blackwell-16-GB-midrange-RTX-5060-Ti-16-GB-next-on-the-chopping-block.1204994.0.html' },
        { label: 'Tom\'s HW: ASUS denies EOL, supply hit', url: 'https://www.tomshardware.com/pc-components/gpus/asus-denies-rtx-5070-ti-and-rtx-5060-ti-discontinuation-after-conflicting-end-of-life-claims-says-it-has-no-plans-to-stop-selling-these-models-but-confirms-memory-supply-has-impacted-production-and-restocking' }
      ],
      buyLinks: [
        { store: 'Newegg ~$999.99 floor (Zotac SOLID SFF OC / MSI Ventus 3X OC BLACK / Gigabyte WindForce, 3 cards 1P, confirmed Apr 30; PRAGMATA bundle on MSI/Gigabyte)', url: 'https://www.newegg.com/p/pl?d=rtx+5070+ti' },
        { store: 'Amazon ~$1,049 (PNY ARGB Triple Fan, bestvaluegpu Apr 30)', url: 'https://www.amazon.com/s?k=rtx+5070+ti' },
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
      notes: '\u2B50 SWEET SPOT FOR 4K@160Hz - DLSS 4 MFG turns 68fps native into 238fps in Cyberpunk. \u2B50 $999 MSRP WINDOW STILL CLOSED Apr 30 \u2014 Newegg floor steady at $1,299.99 (Zotac SOLID OC White, 1P, in stock; flat vs Apr 28-29). Next-cheapest 1P in stock: PNY ARGB OC $1,329.99 (lowest-price-in-30-days badge), MSI Shadow 3X OC $1,349.99. Mid-tier $1,399-1,469 (PNY ARGB, Gigabyte WindForce OC, ASUS PRIME). Amazon $1,249 (Zotac SOLID CORE OC per bestvaluegpu) \u2014 first time Amazon UNDERCUTS Newegg this cycle (gap $50). Micro Center ~$1,150-1,250 in-store (varies by model). Best Buy ~$1,260+. eBay used ~$1,199. \u26A0\uFE0F GDDR7 shortage + NVIDIA 30-40% production cuts, but 5080 is NVIDIA\'s PRIORITY 16GB card \u2014 better supply outlook than 5070 Ti. \u2B50 DLSS 5 announced at GTC 2026 (Fall 2026, RTX 50 exclusive) \u2014 neural rendering breakthrough, photoreal lighting via AI, massive future upgrade. DLSS 4.5 Dynamic MFG 6x live now (driver 596.21 WHQL, Apr 16). 250+ MFG-compatible games. Prices peaked at $1,500 in Aug 2025; the brief Newegg $999 MSRP window held about a week before lifting to $1,299 on Apr 25-26.',
      advice: 'RECOMMENDED: Best realistic path to 160Hz@4K. \u2B50 $999 MSRP WINDOW STILL CLOSED Apr 30! Newegg floor steady at $1,299.99 (Zotac SOLID OC White, 1P, flat vs Apr 28-29), then PNY ARGB OC $1,329.99 (lowest-in-30-days), MSI Shadow 3X OC $1,349.99. Amazon $1,249 — first inversion of the cycle (Amazon now $50 cheaper than Newegg). Micro Center ~$1,150-1,250 in-store. eBay used ~$1,199. \u26A0\uFE0F AMAZON ~$1,249 IS NOW THE BEST PATH \u2014 about $50 below the Newegg in-stock floor. Gap vs 5070 Ti is back to the natural $250-300 range: 15-18% more perf for ~25-30% more $. Still the right pick if 4K@160Hz is a hard target. \u2B50 DLSS 5 coming Fall 2026 (RTX 50 exclusive, neural rendering) \u2014 buying the 5080 now means you get DLSS 5 support when it lands. NVIDIA prioritizing 5080 production. SUPER refresh indefinitely delayed (confirmed CES 2026). \u2b50 PRAGMATA bundle ACTIVE Apr 14 - May 12 on select 5080s (redeem by June 9) \u2014 replaces expired RE Requiem. Clear buy.',
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
        { store: 'Amazon $1,249 (cheapest, Zotac SOLID CORE OC, confirmed Apr 30 via bestvaluegpu)', url: 'https://www.amazon.com/s?k=rtx+5080' },
        { store: 'Newegg $1,299 (Zotac Solid OC White, 1P floor \u2014 $999 MSRP window closed Apr 26, holds Apr 30)', url: 'https://www.newegg.com/p/pl?d=rtx+5080' },
        { store: 'Micro Center ~$1,150-1,250 (varies by model)', url: 'https://www.microcenter.com/search/search_results.aspx?Ntt=rtx+5080' },
        { store: 'Best Buy ~$1,260+', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=rtx+5080' }
      ]
    },
    {
      id: '5090',
      name: 'NVIDIA RTX 5090 32GB',
      price: 3699,
      vram: 32,
      recommended: false,
      perf4k: 99,
      tdp: 575,
      notes: '\uD83D\uDC8E ABSOLUTE FASTEST GPU - 30-69% faster than 5080. 32GB GDDR7. \u26A0\uFE0F Street prices vary wildly by retailer. \u2B50 Micro Center ~$2,910 in-store (ASUS TUF OC, 60-80% in-store success rate) \u2014 still the only reliable sub-$3k path. Newegg 1P floor steady at $3,699.99 Apr 30 across two in-stock SKUs (Gigabyte Gaming OC sale-priced from $3,899.99 + Zotac SOLID OC White, both 1P direct; MSI Suprim Liquid SOC next at $3,899.99; flat vs Apr 28-29). ⭐ Gigabyte Gaming OC ships with PRAGMATA bundle (Apr 14 - May 12, redeem by June 9). ASUS TUF Newegg listing now 3P-only at $4,199-5,099 (GH Electronics, DealsADay, TECH EDGE per Apr 30 \u2014 the $2,909.99 Newegg-direct path is still GONE; only marketplace 3P sellers remain). ASUS ROG Astral / Gigabyte AORUS M $3,899.99. Gigabyte WindForce $3,999.99. Amazon $3,899 (ASUS ROG Astral OC per bestvaluegpu, unchanged). NVIDIA.com $2,500-3,719 (liquid cooled). Best Buy FE $1,999 nominal-only \u2014 supply effectively zero, no FE drop confirmed in last week. eBay used trending UP, not down: $3,580 floor (bestvaluegpu) / $3,658 lowest-3 average (GPU Poet Apr 2026, +11% vs prior 3-month). The "$4,000 eBay average" Tom\'s HW figure is from MARCH 2025 \u2014 stale, do not cite as current. Tech4Gamers Apr 2026: 5090 nearly 2x MSRP at $3,695 with another $1,300 increase forecast if GDDR7 shortage worsens. GDDR7 shortage structural \u2014 NVIDIA confirmed supply constraints through fiscal 2027. SUPER refresh indefinitely delayed (confirmed CES 2026) \u2014 RTX 60-series pushed to 2028. DLSS 4.5 Dynamic MFG 6x live (driver 595.79+). \u2B50 DLSS 5 announced GTC 2026 \u2014 Fall 2026 launch, RTX 50 EXCLUSIVE: neural rendering, photoreal AI lighting \u2014 5090 is the premier DLSS 5 card. \u26A0\uFE0F $5,000 price ceiling rumored by end of 2026 if GDDR7 shortage worsens (TrendForce).',
      advice: 'OVERKILL: ~150fps native 4K avg. Micro Center ~$2,910 in-store (ASUS TUF OC, 60-80% in-store availability) remains the only reasonable deal \u2014 the Newegg ASUS TUF listing is still 3P-only at $4,199-5,099 (confirmed Apr 30) with the $2,909.99 1P direct path gone. Newegg 1P floor steady at $3,699.99 (Gigabyte Gaming OC + Zotac Solid OC White, in stock + PRAGMATA bundle on Gigabyte thru May 12). Amazon ~$3,899. Online 1.85-1.95x MSRP. The 5080 with DLSS 4 MFG hits the same 160Hz target at $1,249-1,299. Best Buy FE $1,999 restocks Tue/Fri 9-11am EST but sells out in 3-5 min. \u2B50 If DLSS 5 (Fall 2026, RTX 50 exclusive neural rendering) is a priority, the 5090 is the showcase card for it \u2014 but the 5080 also supports DLSS 5. eBay used floor ~$3,580 (bestvaluegpu) / $3,658 lowest-3 avg (GPU Poet, +11% vs Q1) \u2014 used is trending UP, not down, and is NOT cheaper than new. Skip the Tom\'s HW "$4,000 avg" figure (March 2025, stale). \u26A0\uFE0F Price could climb toward $5,000 later in 2026 (TrendForce).',
      whyNot: 'Online street price is $3,699-3,899 (1.85-1.95x MSRP). 575W TDP needs 1000W PSU. The 5080 with DLSS 4 MFG reaches the same 160Hz@4K target at $1,249-1,299. Both cards support DLSS 5.',
      benchmarks: { cyberpunk_4k: 150, starfield_4k: 108, baldurs_4k: 133, ffxiv_4k: 182 },
      sources: [
        { label: 'GN: RTX 5090 Review', url: 'https://gamersnexus.net/gpus/nvidia-geforce-rtx-5090-founders-edition-review-benchmarks-gaming-thermals-power' },
        { label: 'DSO: 20-Game 4K Benchmark', url: 'https://www.dsogaming.com/articles/nvidia-rtx-5090-vs-rtx-4090-native-4k-gaming-benchmarks/' },
        { label: 'Tom\'s HW: 5090 Coverage', url: 'https://www.tomshardware.com/tag/rtx-5090' },
        { label: 'NVIDIA: DLSS 5 Announcement (GTC 2026)', url: 'https://nvidianews.nvidia.com/news/nvidia-dlss-5-delivers-ai-powered-breakthrough-in-visual-fidelity-for-games' },
        { label: 'WCCFTech: DLSS 5 Neural Rendering', url: 'https://wccftech.com/nvidia-dlss-5-game-changing-visuals/' },
        { label: 'GPU Poet: 5090 April 2026 used tracker', url: 'https://gpupoet.com/gpu/learn/price/april-2026/nvidia-geforce-rtx-5090' }
      ],
      buyLinks: [
        { store: 'Micro Center ~$2,910 (ASUS TUF OC, in-store, unverified Apr 30)', url: 'https://www.microcenter.com/search/search_results.aspx?Ntt=rtx+5090' },
        { store: 'Newegg ASUS TUF: 3P only $4,199-5,099 (1P still GONE Apr 30)', url: 'https://www.newegg.com/asus-tuf-gaming-tuf-rtx5090-32g-gaming-geforce-rtx-5090-32gb-graphics-card-triple-fans/p/N82E16814126752' },
        { store: 'Newegg 1P floor $3,699.99 (Gigabyte Gaming OC sale from $3,899.99 + PRAGMATA bundle / Zotac SOLID OC White, confirmed Apr 30)', url: 'https://www.newegg.com/p/pl?d=rtx+5090' },
        { store: 'Amazon ~$3,899 (up from $3,818)', url: 'https://www.amazon.com/s?k=rtx+5090' },
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
      notes: 'Solid Z790 for Intel - 16+1+1 VRM with 90A stages, WiFi 7, handles even LN2 overclocking. \u26A0\uFE0F\u26A0\uFE0F TARIFF VOLATILITY: Amazon range $212-300 over April (Pangoly low $211.69 Apr 2, list jumped to ~$298 Apr 22) \u2014 32% Taiwan tariff now passing through. Newegg 3P "HeLiXing" Hong Kong DROPPED to $304.28 Apr 30 (from $346.13 Apr 29 \u2014 tariff pass-through partially reversing). 3P alts $287.46-$313.69 from other HK sellers. Newegg-direct still not stocked at this tier. Best Buy ~$304. LGA1700 platform is EOL with Arrow Lake (LGA1851) as current gen \u2014 but tariffs are overriding the natural demand-fade price decline. \u26a0\ufe0f ASUS warned 25-30% Q2 Taiwan PC price hikes (VideoCardz Apr 28-29); MSI/Gigabyte expected to follow \u2014 buy mobos before May/June if you need one.',
      advice: 'FOR i9-14900K: \u26A0\uFE0F Amazon jumped to ~$298 from $212 (tariff pass-through) \u2014 no longer the budget win it was. Newegg 3P DROPPED to $304.28 Apr 30 (HK seller "HeLiXing", was $346 Apr 29; B.Y.R alt $313) \u2014 tariff pass-through partially reversing. At $298 Amazon it\'s virtually identical to X870 Tomahawk ($240 Amazon pre-tariff / $300 Newegg post-tariff). Only buy if you\'re definitely keeping the 14900K. If tariff pricing hits both boards equally, AM5\'s platform future through 2027+ makes X870 the no-brainer.',
      sources: [
        { label: 'PC Gamer Review', url: 'https://www.pcgamer.com/msi-mag-z790-tomahawk-max-wifi-motherboard-review/' },
        { label: 'OC3D Review', url: 'https://overclock3d.net/reviews/cpu_mainboard/msi-mag-z790-tomahawk-max-review/4/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$298 (\u26A0\uFE0F volatile $212-300 in April)', url: 'https://www.amazon.com/MSI-MAG-Z790-Tomahawk-WiFi/dp/B0CJSL89T2' },
        { store: 'Newegg ~$304 (3P "HeLiXing" HK, DROPPED Apr 30 from $346 Apr 29 \u2014 tariff partial reversal)', url: 'https://www.newegg.com/msi-mag-z790-tomahawk-max-wifi-atx-intel-z790-lga-1700/p/N82E16813144633' },
        { store: 'Best Buy ~$304', url: 'https://www.bestbuy.com/product/msi-mag-z790-tomahawk-max-wifi-socket-lga-1700-intel-z790-atx-ddr5-wi-fi-7-motherboard-black/J3P7TXY677' },
        { store: 'Micro Center', url: 'https://www.microcenter.com/product/661313/msi-z790-mag-tomahawk-wifi-intel-lga-1700-atx-motherboard' }
      ]
    },
    {
      id: 'x870-tomahawk',
      name: 'MSI MAG X870 Tomahawk WiFi',
      price: 227,
      socket: 'AM5',
      recommended: true,
      notes: '\u2B50 SWEET SPOT AM5 - WiFi 7, 5GbE, PCIe 5.0 M.2, 8-layer server-grade PCB. The 9800X3D doesn\'t need more. Amazon ~$227 (Pangoly Apr 30, ATL $219.99 Apr 2, holds flat vs Apr 28-29). \u26A0\uFE0F Newegg-direct DROPPED Apr 27 to $239.99 (was $299.99 Apr 26 \u2014 tariff hit reversed; 6% off MSRP). MSI Store still OUT OF STOCK Apr 30 (back-in-stock notify only). Best Buy ~$254. Amazon at ~$227 remains the floor Apr 30; Newegg-direct $239.99 holds (since Apr 27 drop from $299.99) while MSI is OOS.',
      advice: 'RECOMMENDED: ~$227 at Amazon (still the floor Apr 30) or Newegg-direct $239.99 (holds since Apr 27 drop from $299.99 Apr 26). \u26A0\uFE0F Newegg jumped to $300 from tariffs \u2014 avoid Newegg, buy Amazon/MSI Store. AM5 with WiFi 7 + 5GbE + upgrade path through 2027+ (Zen 6 "Medusa" desktop delayed to 2027, AM5 confirmed). The 9800X3D doesn\'t need a $500 board. Tariff-driven flux on both boards (Z790 $212-300, X870 ~$227) keeps the gap small, and the X870 has a platform future. \u26A0\uFE0F Amazon/MSI prices likely to follow Newegg\'s tariff increase soon. Buy now.',
      sources: [
        { label: 'The FPS Review', url: 'https://www.thefpsreview.com/2025/02/04/msi-mag-x870-tomahawk-wifi-motherboard-review/' },
        { label: 'KitGuru Review', url: 'https://www.kitguru.net/components/motherboard/leo-waldock/msi-mag-x870-tomahawk-review/' }
      ],
      buyLinks: [
        { store: 'MSI Store OUT OF STOCK Apr 30', url: 'https://us-store.msi.com/MAG-X870-TOMAHAWK-WIFI' },
        { store: 'Amazon ~$227 (best! Pangoly Apr 30)', url: 'https://www.amazon.com/MSI-Tomahawk-Motherboard-Processors-Bluetooth/dp/B0DG3HK897' },
        { store: 'Newegg-direct $239.99 (holds since Apr 27 drop from $299.99, 6% off MSRP)', url: 'https://www.newegg.com/msi-mag-x870-tomahawk-wifi-atx-motherboard-amd-x870-am5/p/N82E16813144667' },
        { store: 'Best Buy ~$254', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=msi+x870+tomahawk' }
      ]
    },
    {
      id: 'b650-tomahawk',
      name: 'MSI MAG B650 Tomahawk WiFi',
      price: 176,
      socket: 'AM5',
      recommended: false,
      notes: 'Budget AM5 - 14+2+1 VRM is plenty for 9800X3D. PCWorld: "leaves very little on the table". \u26A0\uFE0F Amazon ~$259 (Apr 2026 coverage, up steeply from $197). Micro Center ~$176 in-store. Walmart ~$198.52 (online floor since Apr 27 — undercuts Amazon/Best Buy but still above MC in-store). Best Buy $219.99-233.49. \u26A0\uFE0F 32% Taiwan tariff effective Apr 2 \u2014 prices may continue rising.',
      advice: 'VALUE GONE ONLINE: Amazon ~$259 \u2014 now $30+ MORE than X870 Tomahawk ($227 Amazon). Buying B650 over X870 at this pricing makes zero sense. Micro Center ~$176 in-store is the only B650 case left ($51 below the X870 Amazon price), and even then the X870\'s WiFi 7 + 5GbE + PCIe 5.0 M.2 + platform future justify the upgrade. Online, definitely just buy the X870.',
      sources: [
        { label: 'PCWorld Review', url: 'https://www.pcworld.com/article/1522279/msi-mag-b650-tomahawk-wifi-motherboard-review.html' },
        { label: 'HWCooling Review', url: 'https://www.hwcooling.net/en/msi-mag-b650-tomahawk-wifi-the-cheapest-of-the-decent-ones-review/' }
      ],
      buyLinks: [
        { store: 'Micro Center $176 in-store', url: 'https://www.microcenter.com/product/659662/msi-b650-mag-tomahawk-wifi-amd-am5-atx-motherboard' },
        { store: 'Amazon ~$259 (up from $211 — tariff-driven)', url: 'https://www.amazon.com/MSI-B650-Tomahawk-Motherboard-Processors/dp/B0BHCCNSRH' },
        { store: 'Best Buy ~$220', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=msi+b650+tomahawk' }
      ]
    },
    {
      id: 'x870e-strix',
      name: 'ASUS ROG Strix X870E-E Gaming WiFi',
      price: 399,
      socket: 'AM5',
      recommended: false,
      notes: 'Premium AM5 - 5x M.2 (3x PCIe 5.0), WiFi 7, 5GbE, USB4. Best-in-class. \uD83D\uDC8E Newegg-direct $399.99 1P (holds since Apr 28 restock; per-customer limit lifted Apr 30) — full reversal of yesterday\'s stockout where only 3P sat at $500+. TECH EDGE 3P alt $398 ties. Amazon $419 still listed but Newegg is now the cheapest authorized channel. Pangoly $369 spot appears stale/transient. \u26A0\uFE0F Best Buy ~$419 (tariff-volatile). ASUS eShop $500 MSRP. \u26A0\uFE0F Price stabilized from $699 spike in Feb 2026 but 32% Taiwan tariff pressure building. \u2B50 ASUS $30 Steam code promo CONFIRMED ACTIVE April 2026 (covers Strix X870E-E/H plus many others \u2014 per Tweaktown Apr coverage; no updated end-date confirmed beyond prior July 1).',
      advice: 'PREMIUM: Newegg-direct $399.99 holds Apr 30 (1P, per-customer limit lifted, since Apr 28 restock) \u2014 that\'s the new authorized floor and undercuts Amazon $419. Best Buy ~$419 ties Amazon. $30 ASUS Steam code only via ASUS eShop ($500) = ~$470 effective, still not worth it. $172+ more than X870 Tomahawk ($227 Amazon) for USB4, 5x M.2, premium VRMs. Hard to justify for a 9800X3D gaming build \u2014 buy if you actually need USB4 + 5x M.2.',
      sources: [
        { label: 'Tom\'s HW Review (4/5)', url: 'https://www.tomshardware.com/pc-components/motherboards/asus-rog-strix-x870e-e-gaming-wifi-review' },
        { label: 'PC Guide Review', url: 'https://www.pcguide.com/motherboard/review/asus-rog-strix-x870e-e-gaming-wifi/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$419 (tariff-adjusted)', url: 'https://www.amazon.com/dp/B0DGFKN5HV' },
        { store: 'Newegg-direct $399.99 holds Apr 30 (1P, per-customer limit lifted; TECH EDGE 3P $398 ties)', url: 'https://www.newegg.com/asus-rog-strix-x870e-e-gaming-wifi-atx-motherboard-amd-x870e-am5/p/N82E16813119682' },
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
      notes: '\u2B50 BEST VALUE - AMD EXPO certified. DDR5-6000 is the AM5 sweet spot (1:1 Infinity Fabric). Amazon ~$359 (confirmed Apr 21, best flat price! Pangoly-tracked). \u2B50 Newegg-direct $449.99 sale (list $494.99, $45 off / 9% \u2014 confirmed Apr 30; 3P JB Rapid $449 / WaveRide Tech $448 also visible). Code PGWEF295 still ACTIVE on product page as "limited offer," another $70 off \u2192 ~$424.99 net. Code STRF99 confirmed EXPIRED. \u26A0\uFE0F Old code SSF5478 appears EXPIRED \u2014 absent from all coupon aggregators (Discoup, SimplyCodes, CouponFollow, Tom\'s HW) as of Apr 21. TrendForce Mar 31: DDR5 retail fell 7.2% MoM in March \u2014 FIRST monthly decline in 8 months. But still 408% above Jul 2025 baseline. Samsung+SK Hynix negotiating Q2 contract hikes of 58-63% QoQ. Shortage expected through late 2027/2028 (PC Gamer). Micron exited consumer RAM \u2014 only Samsung & SK Hynix remain. Google TurboQuant AI memory compression cited as easing some data-center demand pressure.',
      advice: '32GB is all you need for gaming (AAA uses ~20GB max). CL36 vs CL30 is ~1-2% gaming difference. Amazon ~$359 is the best flat price. \u2B50 Newegg-direct $449.99 sale (list $494.99) with code PGWEF295 still active Apr 30 for $70 off \u2192 ~$424.99 net. Old codes STRF99 and SSF5478 both confirmed expired. Retail pulled back 7.2% in March (first decline in 8 months) but contract prices still rising 58-63% QoQ next quarter \u2014 this dip is consumer-affordability driven, not supply relief. Buy now.',
      sources: [
        { label: 'PC Gamer: Best RAM 2026', url: 'https://www.pcgamer.com/best-ram-for-gaming/' },
        { label: 'TrendForce: DDR5 Retail Pullback Mar 2026', url: 'https://www.trendforce.com/news/2026/03/31/news-ddr5-retail-prices-pullback-amid-market-correction-but-industry-players-cite-stable-contract-trends/' },
        { label: 'PC Gamer: DDR5 Prices Drop (Mar 30)', url: 'https://www.pcgamer.com/hardware/memory/yes-some-ddr5-ram-prices-have-dropped-recently-but-i-wouldnt-pop-the-champagne-just-yet/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$359 (best flat price!)', url: 'https://www.amazon.com/G-Skill-288-Pin-CL36-36-36-96-Channel-F5-6000J3636F16GX2-FX5/dp/B0BFGB2D2Z' },
        { store: 'Newegg-direct $449.99 sale (list $494.99; code PGWEF295 \u2014$70 off \u2192 ~$424.99 net Apr 30)', url: 'https://www.newegg.com/g-skill-flare-x5-32gb-ddr5-6000-cas-latency-cl36-desktop-memory-black/p/N82E16820374419' },
        { store: 'Walmart ~$410', url: 'https://www.walmart.com/search?q=g.skill+flare+x5+ddr5+6000' }
      ]
    },
    {
      id: 'ddr5-32gb-6000-cl30',
      name: '32GB DDR5-6000 CL30 (Kingston FURY Beast)',
      price: 474,
      capacity: 32,
      recommended: false,
      notes: 'Tighter CL30 timings for ~1-2% more gaming perf. AMD EXPO + Intel XMP 3.0 certified. Amazon ~$474 (best!). Newegg-direct $489.99 holds Apr 30 (was $499.99 Apr 28; non-RGB SKU KF560C30BBEK2-32, $135 / 21% off $624.99 list, sold/shipped by Newegg, limit 5). 3P range $512-$527 (Amigos / BeachAudio / antonline). Best Buy ~$480. \u26A0\uFE0F DDR5 retail softening slightly in March (first drop in 8 months) but contract prices unchanged \u2014 caution on expecting big drops.',
      advice: 'PREMIUM TIMINGS: CL30 is technically optimal but now ~$115+ more than CL36 ($474 vs $359) for 1-2% real-world difference. Amazon ~$474 is the only sane CL30 price right now \u2014 Newegg-direct $489.99 (down from $499.99 Apr 28, holds Apr 30) is close but Amazon still cheaper. The CL30 premium is barely justified at $474; at $500+ it definitely isn\'t. Stick with Flare X5 CL36 at $359 Amazon.',
      sources: [
        { label: 'PC Gamer: Best RAM 2026', url: 'https://www.pcgamer.com/best-ram-for-gaming/' },
        { label: 'TechRadar: Best DDR5', url: 'https://www.techradar.com/computing/best-ddr5-ram' }
      ],
      buyLinks: [
        { store: 'Amazon ~$474 (best!)', url: 'https://www.amazon.com/Kingston-2x16GB-6000MT-Desktop-KF560C30BBEAK2-32/dp/B0CYM58GFS' },
        { store: 'Newegg-direct $489.99 (down from $499.99 Apr 28, holds Apr 30; non-RGB SKU, $135/21% off $624.99 list)', url: 'https://www.newegg.com/kingston-technology-corp-fury-beast-32gb-ddr5-6000-cas-latency-cl30-memory-black/p/N82E16820242861' },
        { store: 'Best Buy ~$480', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=kingston+fury+beast+ddr5+6000+cl30' }
      ]
    },
    {
      id: 'ddr5-64gb-6000',
      name: '64GB DDR5-6000 (G.Skill Trident Z5 Neo)',
      price: 880,
      capacity: 64,
      recommended: false,
      notes: '\u26A0\uFE0F\u26A0\uFE0F SEVERE SHORTAGE - 64GB DDR5 non-RGB ~$880 at Amazon, RGB variant ~$934-949 (WaveRide Tech ships from Canada, MD Discounts $965 shipped). Newegg $949.99 (3P EvoMicro, holds Apr 30). eBay $968. Pangoly peak was $1,045 in mid-Feb 2026. TrendForce Mar 31: DDR5 retail fell 7.2% MoM \u2014 first decline in 8 months, but Q2 contract hikes of 58-63% QoQ still being negotiated. Tom\'s HW: "64GB of DDR5 now costs more than an entire PS5." Pre-crisis this kit was $193 \u2014 current price is ~4.5x. PCGamer: "memory crisis could run past 2028." Structural shortage from AI data center demand.',
      advice: 'OVERKILL FOR GAMING: Games use ~20GB max. You\'re paying ~$521 extra over 32GB ($880 vs $359) for capacity you\'ll never touch in games. Price eased slightly from peak ($1,045) to $880 range (non-RGB; RGB runs $934+). Retail softened 7.2% in March but Samsung+SK Hynix pushing Q2 contracts up 58-63% QoQ \u2014 structural AI demand hasn\'t changed. Buy 32GB now and upgrade later if/when prices normalize.',
      sources: [
        { label: 'Tom\'s HW: "More than a PS5"', url: 'https://www.tomshardware.com/pc-components/ddr5/64gb-of-ddr5-memory-now-costs-more-than-an-entire-ps5-even-after-a-discount-trident-z5-neo-kit-jumps-to-usd600-due-to-dram-shortage-and-its-expected-to-get-worse-into-2026' },
        { label: 'TrendForce: DDR5 Retail Pullback Mar 2026', url: 'https://www.trendforce.com/news/2026/03/31/news-ddr5-retail-prices-pullback-amid-market-correction-but-industry-players-cite-stable-contract-trends/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$880 (best!)', url: 'https://www.amazon.com/s?k=g.skill+trident+z5+neo+64gb+ddr5+6000' },
        { store: 'Newegg RGB $949.99 (3P EvoMicro, holds Apr 30; B.Y.R $1,133 / WaveRide $1,144). Non-RGB SKU only Canada 3P at $1,274 \u2014 use Amazon for non-RGB.', url: 'https://www.newegg.com/g-skill-trident-z5-neo-rgb-series-64gb-ddr5-6000-cas-latency-cl30-desktop-memory-black/p/N82E16820374445' }
      ]
    }
  ],
  cooling: [
    {
      id: 'pa-120-se-v2',
      name: 'Thermalright Peerless Assassin 120 SE V2',
      price: 40,
      type: 'air',
      recommended: false,
      notes: 'Updated V2 of GN\'s "The Champ" air cooler. Amazon ~$40 (holds Apr 30 via pcspecchart, crept up from $33 Apr 21). Newegg SE V2 $49.90 (Thermalright Authorized Store, top-rated, up from $45.90 Apr 28 — list price now matches sale). Dual-tower, 6 heatpipes, AGHP Gen 5.0, rated to 265W TDP. Supports LGA 1851/1700 and AM5.',
      advice: 'BUDGET: At ~$40 Amazon (crept up from $33), still an absurd deal for 9800X3D (120W). Beats $80-100 towers at half the price. Newegg V2 $49.90 (up from $45.90) if Amazon out. NOT enough for i9-14900K under sustained 253W load.',
      sources: [
        { label: 'GN: PA120 SE Review', url: 'https://gamersnexus.net/coolers/champ-41-thermalright-peerless-assassin-cpu-cooler-review-benchmarks' },
        { label: 'Tom\'s HW Review', url: 'https://www.tomshardware.com/reviews/thermalright-peerless-assassin-120-se' }
      ],
      buyLinks: [
        { store: 'Amazon ~$40 (up from $33 Apr 21, pcspecchart confirmed Apr 30)', url: 'https://www.amazon.com/Thermalright-Peerless-Assassin-120-Cooler/dp/B0DP23NF7T' },
        { store: 'Newegg $49.90 (Thermalright Authorized, up from $45.90 Apr 28)', url: 'https://www.newegg.com/p/13C-000Y-000M3' }
      ]
    },
    {
      id: 'arctic-360-pro',
      name: 'Arctic Liquid Freezer III Pro 360',
      price: 105,
      type: 'aio',
      recommended: true,
      notes: '\u2B50 GN "The New Best" AIO - 2C cooler than standard on AMD, 10C on Intel. Integrated VRM fan. Nothing else comes close. Amazon ~$105 (Non-RGB black, back up from $89 all-time low; Tom\'s HW Apr 30 still cites $89 ATL (no fresh review post) — verify at checkout). ARGB ~$94 (PC Gamer). ⚠️ Newegg first-party listing GONE Apr 30 — only 3P TELeasy at $165.99 / B-IN $169.99 (red flag — Amazon is the only sane path). Tom\'s HW: "Best AIO for 9950X3D and Intel too." Tech4Gamers: "Cooler To Beat In 2026."',
      advice: 'RECOMMENDED: ~$105 on Amazon for the non-RGB black variant of the best AIO ever tested (was $89 briefly, back up). ARGB variant ~$94 if you want lighting. Handles both 14900K and 9800X3D with ease. $86 cheaper than the Corsair Titan ($191) for better thermals.',
      sources: [
        { label: 'GN: "The New Best"', url: 'https://gamersnexus.net/coolers/new-best-arctic-liquid-freezer-iii-360-280-cpu-cooler-review-benchmarks' },
        { label: 'Tom\'s HW: Pro Review', url: 'https://www.tomshardware.com/pc-components/liquid-cooling/arctic-liquid-freezer-iii-pro-review' },
        { label: 'Tech4Gamers: "Cooler To Beat"', url: 'https://tech4gamers.com/arctic-liquid-freezer-iii-pro-360-a-rgb-review/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$105 (Non-RGB Black, up from $89 ATL \u2014 Newegg 1P gone Apr 30, Amazon is the path)', url: 'https://www.amazon.com/Parent-ARCTIC-Liquid-Freezer-III/dp/B0F2TRHJX3' },
        { store: 'PCPartPicker', url: 'https://pcpartpicker.com/product/v2kqqs/arctic-liquid-freezer-iii-pro-360-77-cfm-liquid-cpu-cooler-acfre00180a' }
      ]
    },
    {
      id: 'corsair-titan',
      name: 'Corsair iCUE Link Titan 360 RX RGB',
      price: 160,
      type: 'aio',
      recommended: false,
      notes: 'Premium AIO - Corsair FlowDrive pump, hot-swap caps, iCUE ecosystem integration. LCD variant available at ~$250+. \u2b50 Corsair.com $159.99 CONFIRMED Apr 30 (sale from $199.99, Best Seller, free ship, in stock \u2014 first-party first-hand verification). Amazon Pangoly ~$190.99 holds Apr 30. Newegg-direct $199.99 STILL OUT OF STOCK Apr 30; 3P Canadian seller WaveRide Tech $153.99 (held since Apr 28). Price volatile in 2026 \u2014 12-mo range $140-322, avg $191.',
      advice: 'LUXURY: ⭐ Corsair.com $159.99 CONFIRMED Apr 30 (first-party Best Seller, free ship — beats Newegg OOS state, Amazon $190.99). Gap to Arctic narrowed to ~$55 (Arctic ~$105). Newegg-direct STILL OOS Apr 30. Still buy for iCUE/aesthetics, not thermals.',
      sources: [
        { label: 'PC Gamer Review', url: 'https://www.pcgamer.com/hardware/cooling/corsair-icue-link-titan-360-rx-lcd-review/' },
        { label: 'XDA Review', url: 'https://www.xda-developers.com/corsair-icue-link-titan-360-rx-rgb-review/' }
      ],
      buyLinks: [
        { store: 'Corsair.com $159.99 (best!) — sale from $199.99, in stock Apr 30', url: 'https://www.corsair.com/us/en/p/cpu-coolers/cw-9061018-ww/icue-link-titan-360-rx-rgb-aio-liquid-cpu-cooler-cw-9061018-ww' },
        { store: 'Amazon ~$190.99 (Pangoly Apr 30)', url: 'https://www.amazon.com/CORSAIR-iCUE-Titan-Liquid-Cooler/dp/B0D6BFBLTK' },
        { store: 'Newegg-direct $199.99 STILL OOS Apr 30 ($153.99 from 3P WaveRide CA, holds since Apr 28)', url: 'https://www.newegg.com/p/0EZ-00MD-00003' }
      ]
    }
  ],
  storage: [
    {
      id: 'ssd-2tb-budget',
      name: '2TB Crucial P310',
      price: 215,
      recommended: true,
      notes: '\u2B50 BEST VALUE SSD - Gen4 speeds at nearly half the 990 Pro price. Gaming load times are identical. \u26A0\uFE0F NAND CRISIS DEEPENING: Amazon $214.99 (holds Apr 30; Pangoly tracking shows some retailers near $200.99, was $213.99 briefly in March). Best Buy ~$260. Newegg-direct $299.99 1P (limit 3) / 3P BioStar $298.95. Prices spiked to $400 in Feb 2026, now pulling back. Was $94 in mid-2025. NAND costs up 246% YoY per Kingston (Apr 24 update, 60-day acceleration), all 2026 production sold out (Phison CEO). Tom\'s HW: "pricing apocalypse through 2027." ⚠️⚠️ MICRON CRUCIAL CONSUMER BRAND OFFICIALLY DISCONTINUED FEB 2026 (TrendForce) — Q3 2026 all Micron DRAM/NAND goes to AI customers. P310 stock is FINITE; once depleted, no replenishment from Micron. TrendForce Apr 15 spot update: DDR4 still edging lower 0.48% WoW but NAND supply structurally tight. Q1 contract prices surged 55-60% QoQ and TrendForce now forecasts Q2 +70-75% QoQ (accelerating; client SSDs +40%+ QoQ the steepest category), no supply relief until late 2027. Buy ASAP \u2014 volatile.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: P310 Review', url: 'https://www.tomshardware.com/reviews/crucial-p310-ssd-review' },
        { label: 'TrendForce: Micron ends Crucial brand Feb 2026', url: 'https://www.trendforce.com/news/2025/12/04/news-micron-to-end-crucial-consumer-memory-by-feb-2026-redirects-supply-to-enterprise-amid-ai-surge/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$214.99 (best! Holds Apr 30; Pangoly low $200.99)', url: 'https://www.amazon.com/Crucial-P310-2280-PCIe-Gen4/dp/B0DC8RVRBZ' },
        { store: 'Best Buy ~$260', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=crucial+p310+2tb' },
        { store: 'Newegg ~$300 1P (3P BioStar $298.95)', url: 'https://www.newegg.com/crucial-2tb-p310-nvme/p/N82E16820156413' }
      ]
    },
    {
      id: 'ssd-2tb',
      name: '2TB Samsung 990 Pro',
      price: 494,
      recommended: false,
      notes: 'Best Gen4 SSD. 7,450 MB/s read. Was $133 \u2014 NAND shortage has nearly 4.3x the price. \u26A0\uFE0F PRICE CLIMBING AGAIN: Amazon ~$583 (Pangoly Apr 30, UP $5 from Apr 29; intra-month high $917.84 on Apr 21). Samsung.com $639.99. Newegg 3P BioStar $493.75 / MobileMonster $493.76 / Best Deals For You $494.99 (Newegg-direct not 1P). \u26A0\uFE0F The $493 Newegg 3P floor is now $90 BELOW Amazon 1P \u2014 best non-MC path. \u2B50 Micro Center ~$280 in-store still cited but UNVERIFIED Apr 30 (suspicious gap vs national channel — call store before driving). Still ~4.3x the $133 mid-2025 low. Hit $844 high on Mar 31, $917.84 high on Apr 21. \u26A0\uFE0F NAND CRISIS WORSENING: TrendForce Mar 31 forecasts Q2 2026 NAND contract prices +70-75% QoQ on top of Q1\'s ~60% jump. Phison CEO: all 2026 NAND production already sold out, "pricing apocalypse" through 2027. Enterprise SSDs now ~60% of global NAND output \u2014 consumer allocation shrinking. Volatile \u2014 verify at checkout, direction is UP.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: 990 Pro Review', url: 'https://www.tomshardware.com/reviews/samsung-990-pro-ssd-review' }
      ],
      buyLinks: [
        { store: 'Micro Center ~$280 (UNVERIFIED Apr 30 — call store)', url: 'https://www.microcenter.com/product/661028/samsung-990-pro-2tb-ssd' },
        { store: 'Amazon ~$583 (\u26A0\uFE0F up $5 vs Apr 29; intra-month high $917.84 \u2014 verify at checkout)', url: 'https://www.amazon.com/SAMSUNG-Internal-Expansion-MZ-V9P2T0B-AM/dp/B0BHJJ9Y77' },
        { store: 'Newegg 3P $493.75 (BioStar / MobileMonster $493.76 / Best Deals For You $494.99 \u2014 Newegg 1P not stocked Apr 30)', url: 'https://www.newegg.com/samsung-2tb-990-pro-nvme-2-0/p/N82E16820147861' },
        { store: 'Best Buy ~$440', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=samsung+990+pro+2tb' }
      ]
    },
    {
      id: 'ssd-4tb',
      name: '4TB Samsung 990 Pro',
      price: 899,
      recommended: false,
      notes: 'Single-sided 4TB. Premium for capacity. \u26A0\uFE0F PRICE CLIMBING AGAIN: Pangoly tracker shows current ~$948.93 Apr 30 (UP ~$200 from $742.99 Apr 4 print). Conservative midpoint ~$899 (volatile, verify at checkout). Newegg 3P floor: ServerQue $849 BACK Apr 30 (the $849 floor from Apr 28 returned overnight; BioStar $978.75, Best Deals For You $978.94, E.O.L. Tech $1,000 above). 30-day avg $725 per pricehistory.app \u2014 ServerQue $849 is the realistic floor again. Hit $1,600 in Feb 2026. Was $250 in Nov 2023. Still ~3x the mid-2025 low. NAND crisis continues \u2014 Q1 2026 contract prices surged 55-60% QoQ, no relief until late 2027. Price volatile \u2014 check at purchase time.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: 990 Pro Review', url: 'https://www.tomshardware.com/reviews/samsung-990-pro-ssd-review' }
      ],
      buyLinks: [
        { store: 'Amazon ~$899 (⚠️ UP from $743 Apr 4; Pangoly Apr 29 ~$948.93 — verify at checkout)', url: 'https://www.amazon.com/s?k=samsung+990+pro+4tb' },
        { store: 'Newegg 3P $849 ServerQue (BACK Apr 30 from gone-Apr-29; BioStar $978.75 / Best Deals For You $978.94 above)', url: 'https://www.newegg.com/samsung-4tb-990-pro-nvme-2-0/p/N82E16820147879' }
      ]
    }
  ],
  case: [
    {
      id: 'corsair-4000d-rs',
      name: 'Corsair Frame 4000D RS',
      price: 85,
      recommended: true,
      notes: '\u2B50 Includes 3 fans! Great airflow, clean cable management, InfiniRail fan mounting. GN: "Corsair Remembered How to Make a Case." \u2B50 ON SALE (still active Apr 30): Corsair.com $84.99 (was $114.99, 26% off, in stock free ship). Newegg $84.99 (same sale, 1P direct, #38 in Computer Cases). Amazon black dynamic pricing. \u26A0\uFE0F Earlier $57.86/$70.04 Amazon 30% coupon (Apr 18 Slickdeals YMMV) EXPIRED Apr 20. White $69.99 deal also expired Apr 6 — all variants now ~$84.99. ARGB variant ~$125.',
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
      price: 130,
      wattage: 850,
      recommended: false,
      notes: 'ATX 3.1 (2025 refresh), native 12V-2x6, PCIe 5.1, 7yr warranty. Newegg $129.99 holds Apr 30 (flat vs Apr 28-29 \u2014 10% off $144.99, Best Seller #6 in PSUs; \u26a0\ufe0f code SSF6437 still NOT visible on product page Apr 30 \u2014 treat as expired/built-in; coupon aggregators still reference it but unverifiable). Amazon ~$125. Best Buy ~$125. PCPartPicker lowest alt listing $109.99. Good for 9800X3D + 5080. \u26A0\uFE0F China PSU tariff stack: 45% current rate on imported AC/DC power supplies (100electronics/bravoelectro, Apr 2026) + distributors raised 6-10% in Jan \u2014 expect further hikes in H2 2026. Watch Slickdeals — the $95 flash has already recurred once this month.',
      advice: '',
      sources: [
        { label: 'Best Buy', url: 'https://www.bestbuy.com/product/corsair-rme-series-rm850e-80-plus-gold-fully-modular-low-noise-atx-3-1-and-pcie-5-1-power-supply-black/J39QHT23VT' }
      ],
      buyLinks: [
        { store: 'Newegg $129.99 (10% off, holds Apr 30; ⚠️ code SSF6437 still gone from product page — expired/built-in)', url: 'https://www.newegg.com/corsair-rmx-series-atx-3-1-compatible-850-w-cybenetics-gold-power-supply-black-rm850e/p/N82E16817139336' },
        { store: 'Amazon ~$125', url: 'https://www.amazon.com/CORSAIR-RM850e-Modular-Low-Noise-12V-2x6/dp/B0DPR86ZC8' }
      ]
    },
    {
      id: 'rm1000e',
      name: 'Corsair RM1000e (ATX 3.1)',
      price: 165,
      wattage: 1000,
      recommended: false,
      notes: 'ATX 3.1, 1000W Gold, compact 140mm. Headroom for any GPU. Newegg $164.99 (13% off MSRP $189.99 \u2014 holds Apr 30, Best Seller #13 in PSUs). Amazon ~$170. Best Buy ~$175. B&H ~$175.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW', url: 'https://www.tomshardware.com/pc-components/power-supplies/corsair-rm1000e-atx-3-1-power-supply-review' }
      ],
      buyLinks: [
        { store: 'Amazon ~$170 (best!)', url: 'https://www.amazon.com/CORSAIR-RM1000e-Modular-Low-Noise-12V-2x6/dp/B0DPR5RZ1T' },
        { store: 'Best Buy ~$175', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=corsair+rm1000e' },
        { store: 'B&H ~$175', url: 'https://www.bhphotovideo.com/c/search?q=corsair+rm1000e' },
        { store: 'Newegg $164.99 (13% off $189.99 MSRP, holds Apr 30)', url: 'https://www.newegg.com/corsair-rmx-series-atx-3-1-compatible-1000-w-cybenetics-gold-power-supply-black-rm1000e/p/N82E16817139337' }
      ]
    },
    {
      id: 'dp13-1000',
      name: 'be quiet! Dark Power 13 1000W Titanium',
      price: 235,
      wattage: 1000,
      recommended: false,
      notes: 'Titanium efficiency (95.2%), virtually silent, 10yr warranty. Amazon ~$230. Newegg $234.90 holds Apr 30 (flat vs Apr 28-29; 28% off $329.90 MSRP, down from $239.90 Apr 27 — limit 10/customer). Best Buy ~$259. CompSource $237.62 (Mar 11 ref). Still ATX 3.0 (not 3.1 like Corsair units).',
      advice: '',
      sources: [
        { label: 'be quiet! Official', url: 'https://www.bequiet.com/en/powersupply/4046' }
      ],
      buyLinks: [
        { store: 'Newegg $234.90 (28% off $329.90 MSRP, holds Apr 30)', url: 'https://www.newegg.com/be-quiet-atx-3-0-compatible-1000-w-80-plus-titanium-certified-power-supplies-black/p/1HU-004H-000R8' },
        { store: 'Amazon ~$230', url: 'https://www.amazon.com/quiet-Titanium-Efficiency-Modular-Supply/dp/B0BV6CWS2Z' },
        { store: 'Best Buy ~$259', url: 'https://www.bestbuy.com/product/be-quiet-dark-power-13-1000w-atx-3-0-psu--80-plus-titanium--pcie-5-0--fully-digital-modular--10-year-warranty/CC5VXLQ2PY' }
      ]
    }
  ]
};
