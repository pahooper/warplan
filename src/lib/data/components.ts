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
      advice: 'AT 4K: Only 1-5% behind 9800X3D because GPU is the bottleneck. Keeping it is valid IF your chip shows no instability. BUT: degradation risk is real, resale dropping fast \u2014 eBay used listings $275-305 (May 14 spot check \u2014 floor BROADENED $26 LOWER as inventory ages: Jawa $249 + eBay BIN $275-305 May 13; BIN listings $290-375 holding per eBay sort, Gamertargets May 5 deal post pegs new $391 i.e. 17% off — Arrow Lake Refresh + 9800X3D dropping to $439 are both pulling buyer attention), new sealed retail $370-469 (Pangoly retail $469 May 10); Newegg still $469 with $130 off + extra 10% via code "NTEL37" + free Corsair CX750M 750W PSU bundle (NTEL37 captured Apr 29, monitored daily 11 days, still live May 10 per coupon trackers + PC Guide Newegg listing scrape). After eBay fees (~13%) expect ~$217-265 net used (now $217-265 net for $249 Jawa floor / $275-305 eBay BIN range as of May 13). Platform is a dead end. \u26A0\uFE0F\u26A0\uFE0F SELL NOW: Arrow Lake Refresh 270K Plus ($299 MSRP, ~$349 street May 4, narrowed from $329-357 launch range per Tom\'s HW dynamic pricing tracker — still ~17% over MSRP) is the buyers\' alternative — already tariff-bumped, narrowing the value delta vs used 14900K. \u26A0\uFE0F Intel May 2026 hike CONFIRMED at 8-10% AND LIVE since May 1 (Tech4Gamers + TechPowerUp + TweakTown corroborating, day 9 of rollout May 10 \u2014 retail moves still pending) \u2014 stacks on Feb 10-15% + Mar ~15%, cumulative 2026 trajectory ~30% YoY. New Intel chips getting pricier, firming used 14900K floor slightly. 250K Plus $199 MSRP (~$219-249 street), 250KF Plus $199.99. No 290K Plus coming (Intel confirmed scrapped). 9950X3D2 launched Apr 22 (only 0.8% gaming uplift over 9800X3D per TechSpot/Tom\'s HW/Phoronix/KitGuru) further depresses Intel high-end demand. List Langley\'s chip at $290-305 BIN to net ~$252-265 after fees \u2014 the eBay top end held steady as the 9800X3D Amazon ATL DROPPED to $409.95 May 11 (down $10 from $419.95 May 10 — VideoCardz/HotHardware confirm "new record low"; Tom\'s HW reports 9950X3D Amazon ATL $573.99 still topping best-sellers May 9 \u2014 sharper buyer shift away from Intel high-end), so list at $290-305 BIN to clear faster. Don\'t wait past the May Intel hike \u2014 listing fatigue + Arrow Lake reviews tilting attention away from LGA1700 outweigh the short-term halo. Run stability benchmarks + screenshot before listing (buyers are wary).',
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
      notes: '\u2B50 UNDISPUTED GAMING KING - 96MB 3D V-Cache, 30% faster than 14900K in gaming, runs cool at 120W. \u2B50\u2B50 ATL HOLDS May 13: Amazon $409.95 — DROPPED $10 from May 10 floor $419.95 May 11 — Notebookcheck May 2026 + WebSearch May 12 + Tom\'s HW "within $10 of ATL" coverage May 13 corroborate "new record low" still live (3-day hold at this ATL since May 11 with free Crimson Desert, $60 off $479 launch \u2014 confirmed VideoCardz, Notebookcheck, Tom\'s HW; Amazon GAMING WEEK extended/replaced. Crimson Desert game bundle holds on Amazon listing May 10 (returned May 2, ~8 days continuous) \u2014 promo widened from the AMD-direct one that ended Apr 25). ⭐ Newegg-direct 1P $439.99 HOLDS May 10 (⚠️ Newegg cut LIST price $49 from $506.99 → $457.99 May 10 (sale price held at $439.99 but discount now framed as 9% off / $24.50 savings, was 13% off / $67 savings) — same buying price, smaller "discount" optics; sold/shipped by Newegg, limit 1; QC-verified live on listing May 10). ⭐ Free Corsair CX750M 750W PSU bundle ACTIVE on Newegg "May The Fourth Sale" event May 10 (Tom\'s HW Apr 28 Newegg-bundle coverage + Newegg event page corroborate, ~12 days continuous; the per-product page didn\'t surface the bundle May 10 but the sale event explicitly bundles CX750M with the 9800X3D — try at checkout). PlatinumMicro 3P $457.99 / MobileMonster 3P $464 / DealsADay 3P $478.98 sit ABOVE Newegg-direct \u2014 Newegg-direct is the cheapest Newegg path AND beats 3P alts. ⭐  ONGOING NEWEGG COMBO (since Nov 2025, QC-confirmed live May 5 per Tom\'s HW + Slickdeals): $454 with code BFEFE36 in cart used to bundle a free MSI MAG Coreliquid A13 360mm AIO ($109.99 value), but as of May 4 the combo NO LONGER appears on the Newegg product page (QC-verified absent, treat as expired). The November-launched Newegg combo deal has officially ended: Amazon $409.95 NEW ATL May 11 (down $10 from $419.95) and Newegg-direct $439.99 + free PSU bundle are both clean buys (Newegg net beats Amazon if you needed a PSU, otherwise the $30 Amazon gap just widened); next cheapest Newegg listing is PlatinumMicro 3P $457.99 (no AIO included). Micro Center $399 standalone (Insider card pricing still in effect per April reporting) or $679.99 bundle w/ B850 + 32GB DDR5 (per VideoCardz Apr 15), Newegg $959 full combo bundle (CPU+ASUS TUF X870-Plus WiFi+V-Color 32GB+T-Force 512GB SSD+Crimson Desert digital code+1yr antivirus, retailer-pre-allocated codes still included while stock lasts), Best Buy ~$449-479. \u26a0\ufe0f Crimson Desert AMD-direct promo ENDED Apr 25 (code redemption open till May 23) \u2014 the Newegg combo above is the last channel still bundling a code. 9850X3D early refresh listings now leaking ~$500 MSRP per Tom\'s HW (modest hike vs current 9800X3D), only 3-7% faster \u2014 9800X3D remains the value king. Arrow Lake Refresh (270K Plus $299 MSRP, ~$329-349 street \u2014 10-19% over MSRP per Tom\'s HW) launched Mar 26 to rave reviews but X3D still dominates gaming by 10-20%. AMD responding with price cuts \u2014 PCGamesN: "AMD CPU price cuts have already begun." \u26A0\uFE0F Intel/AMD confirmed 10-15% CPU price hikes effective now (AI supply crunch); Intel reportedly planning a THIRD hike in May (tech4gamers) \u2014 retail X3D prices have actually dropped below MSRP despite channel hikes. Buy before retail catches up. \u26A0\uFE0F 9950X3D2 Dual Edition LAUNCHED Apr 22 at $899 MSRP \u2014 reviewers (TechSpot, Tom\'s HW, Phoronix, KitGuru) confirm only 0.8% gaming uplift over 9800X3D, 6-9% productivity gain. Verdict: irrelevant for gamers, 9800X3D stays the gaming king. Stock is good (no scalp premium post-launch), but may pressure 9950X3D street prices down further by extension.',
      advice: 'BEST VALUE: ⭐⭐⭐ NEWEGG $419.99 WITH CODE SSF6798 May 14 — VideoCardz/HotHardware/Digital Citizen confirm $20 off $439.99 list (1P direct, sold/shipped by Newegg) AND includes free Corsair CX750M 750W PSU bundle. Net effective price BELOW Amazon by ~$20 BEFORE PSU value. Code SSF6798 verified May 14 via PC Gamer + Tom\'s Guide + TechRadar coupon trackers; replaces expired BFEFE36 (Nov 2025-Apr 2026) combo. ⚠️ Amazon LIFTED to ~$438-440 May 13-14 (CamelCamelCamel + Pangoly) — the $409.95 May 11 ATL held just 1 day, $419.95 ATL Apr 26-May 10 also gone. MC $399 in-store still cheapest absolute. Micro Center $399 in-store ($379.99 w/ Insider card) is still cheapest if you\'re near a store. Effective cost ~$310 at MC w/ Insider card. Micro Center bundle $679.99 (CPU+B850+32GB DDR5) = fantastic value. Newegg $959.99 full bundle (CPU+mobo+RAM+SSD). After selling 14900K (eBay used $275-305 May 14 spot check — Jawa listing at $275 + multiple eBay BIN $275-305 May 14, net $239-265 after fees), net switch cost is ~$135-180 + mobo at the Newegg $419.99 path with free PSU offset. AM5 platform lasts through 2027+ (Zen 6 "Medusa" desktop delayed to 2027, AM5 confirmed). Arrow Lake Refresh 270K Plus ($299 MSRP, ~$329-357 street, 17-19% over MSRP) reviews stellar but X3D still dominates gaming by 10-20%. ⚠️ 9950X3D2 launched Apr 22 — confirmed only 0.8% gaming uplift, validates 9800X3D as the gaming pick. ⚠️ Amazon Gaming Week officially closed May 4 then $419.95 ATL extended through May 10 then BROKE to $409.95 May 11 (1-day ATL) then LIFTED back to $438-440 May 13-14 — promotional momentum exhausted. Reviewer consensus on 9950X3D2 ($899) is unanimous "skip for gaming, buy 9800X3D" — validates this pick.',
      why: 'Every major reviewer (GN, Tom\'s HW, TechSpot, PC Gamer) agrees: this is THE gaming CPU. 96MB 3D V-Cache gives it an insurmountable gaming advantage.',
      benchmarks: { ffxiv: 380, baldurs: 160, starfield: 169, cyberpunk: 219 },
      sources: [
        { label: 'GamersNexus: Full Review', url: 'https://gamersnexus.net/cpus/rip-intel-amd-ryzen-7-9800x3d-cpu-review-benchmarks-vs-7800x3d-285k-14900k-more' },
        { label: 'Tom\'s HW: "Devastating Performance"', url: 'https://www.tomshardware.com/pc-components/cpus/amd-ryzen-7-9800x3d-review-devastating-gaming-performance' },
        { label: 'PC Gamer: Best Gaming CPU', url: 'https://www.pcgamer.com/best-cpu-for-gaming/' },
        { label: 'VideoCardz: 9800X3D new ATL $409 May 11', url: 'https://videocardz.com/newz/amd-ryzen-7-9800x3d-hits-new-record-low-now-409-on-amazon' },
        { label: 'HotHardware: 9800X3D ATL $409.95', url: 'https://hothardware.com/news/amd-ryzen-7-9800x3d-hits-all-time-low-409' },
        { label: 'VideoCardz (May 14): 9800X3D $419 Newegg with free 750W PSU', url: 'https://videocardz.com/newz/amd-ryzen-7-9800x3d-drops-to-419-99-at-newegg-with-free-750w-corsair-psu' },
      ],
      buyLinks: [
        { store: '⚠️ Amazon $439 May 14 (LIFTED $29 from May 11 ATL $409.95 — the May 11 floor held just 1 day; CamelCamelCamel May 13 + Pangoly May 14 both confirm back to ~$438-440 1P direct; free Crimson Desert bundle still listed)', url: 'https://www.amazon.com/AMD-9800X3D-16-Thread-Desktop-Processor/dp/B0DKFMSMYK' },
        { store: '⭐⭐ Newegg-direct $419.99 with code SSF6798 May 14 (1P, $20 off $439.99 sale price; ⭐ free Corsair CX750M 750W PSU bundle still ACTIVE; sold/shipped by Newegg, limit 1; code verified via VideoCardz/HotHardware/Digital Citizen/PC Gamer/Tom\'s Guide/TechRadar)', url: 'https://www.newegg.com/amd-ryzen-7-9000-series-ryzen-7-9800x3d-granite-ridge-zen-5-socket-am5-120w-desktop-cpu-processor/p/N82E16819113877' },
        { store: 'Newegg combo BFEFE36 (Nov 2025-Apr 2026) ENDED \u2014 combo no longer on listing May 10', url: 'https://www.newegg.com/p/pl?d=amd+ryzen+7+9800x3d' },
        { store: 'Micro Center $399 in-store ($379.99 w/ card) or $679.99 bundle w/ B850+32GB', url: 'https://www.microcenter.com/product/687907/amd-ryzen-7-9800x3d-granite-ridge-am5-470ghz-8-core-boxed-processor-heatsink-not-included' },
        { store: 'Newegg $959 full combo bundle (CPU+TUF X870+32GB+512GB SSD+Crimson Desert code while stock lasts)', url: 'https://www.newegg.com/amd-ryzen-7-9000-series-ryzen-7-9800x3d-granite-ridge-zen-5-socket-am5-120w-desktop-cpu-processor/p/N82E16819113877' },
        { store: 'Best Buy $479 (OOS standalone)', url: 'https://www.bestbuy.com/product/amd-ryzen-7-9800x3d-8-core-16-thread-4-7-ghz-5-2-ghz-max-boost-socket-am5-120w-unlocked-desktop-processor-silver/JXKQHH5XSR' }
      ]
    },
    {
      id: 'r9-9950x3d',
      name: 'AMD Ryzen 9 9950X3D',
      price: 640,
      socket: 'AM5',
      recommended: false,
      owned: false,
      perf4k: 96,
      tdp: 170,
      notes: '16 cores / 128MB cache - Ties 9800X3D in gaming but adds massive productivity power. Full overclocking support (first for X3D Ryzen 9). Micro Center $599 in-store (clearing stock ahead of 9950X3D2 \u2014 unconfirmed if still current Apr 26). \u26A0\uFE0F Amazon ALL-TIME LOW $573.99 holds May 10 (live since Apr 26 — Tom\'s HW May 9 still flags as topping Amazon best-sellers, 14 days continuous) (Amazon Gaming Week, 18% off $699 MSRP, $125 cut per Tom\'s HW + Windows Central + Club386 + VideoCardz; topped Amazon best-sellers list. Limited-time deal, stock flipped between in/OOS during window). Newegg-direct $639.99 holds May 10 (8% off $699 MSRP, $59 savings, sold/shipped by Newegg, limit 1, holds since Apr 28 — 13 days continuous). \u26a0\ufe0f \u2B50 Free Corsair CX750M 750W PSU bundle still featured on Newegg "May The Fourth Sale" event page May 10 (event corroborates bundle continuity; ASRock 750W earlier in week was a different SKU \u2014 current freebie is Corsair). 3P alts $699-730 if needed sooner. Best Buy ~$699. ⚠️ Crimson Desert promo bundle ENDED Apr 25 — no longer a factor. \u26A0\uFE0F 9950X3D2 "Dual Edition" (208MB cache, dual V-Cache, 16c/32t, 4.3/5.6 GHz, 200W TDP) LAUNCHED APR 22 at $899 MSRP \u2014 TechSpot/Tom\'s HW/Phoronix/KitGuru reviews confirm only 0.8% gaming uplift over 9800X3D, 6-9% productivity gain (Blender +7%, LLVM +6.6%). Notebookcheck verdict: "questions its existence" for gamers. Both Amazon and Newegg now listing 9950X3D2 at $899 MSRP \u2014 no scalp premium post-launch (initial Amazon $999 preorder normalized). This pressures 9950X3D demand from above (better productivity) and below (9800X3D Amazon $409.95 NEW ATL May 11 matches it in gaming for $164 less even at the $574 Amazon floor).',
      advice: 'OVERKILL: Only 0.4-0.8% faster than 9800X3D in gaming for $164+ more ($573.99 Amazon ATL vs $409.95 Amazon ATL 9800X3D May 11). No streaming planned, so the extra cores are wasted. ⭐ Amazon $573.99 ATL holds May 10 (live since Apr 26, 18% off $699 MSRP, limited-time, stock has flipped in/OOS — Tom\'s HW May 9 still flags as topping Amazon best-sellers, 14 days continuous). Newegg-direct $639.99 holds May 10 (in stock 1P, limit 1; free Corsair CX750M 750W PSU bundle still listed in Newegg "May The Fourth Sale" event May 10) is the in-stock backup if Amazon flips OOS or MC $599 in-store if available. \u26A0\uFE0F 9950X3D2 LAUNCHED Apr 22 at $899 MSRP and reviewers confirmed it adds only 0.8% over the 9800X3D in gaming \u2014 the whole high-end X3D stack just collapsed for pure gamers. The 9800X3D at $409.95 Amazon NEW ATL May 11 / $399 MC is the smarter buy. Only consider 9950X3D if you do heavy productivity (Blender, LLVM compile) AND the $574 Amazon deal is live; don\'t pay $639 Newegg for 0.4-0.8% gaming gain.',
      whyNot: 'Within 0.4-0.8% of 9800X3D in gaming (now confirmed by 9950X3D2 reviews — extra cache barely matters at 4K). No streaming = no use for 16 cores. Even at the Amazon $574 ATL the $164 premium over 9800X3D Amazon $409.95 NEW ATL May 11 buys nothing for your use case.',
      benchmarks: { ffxiv: 373, baldurs: 155, starfield: 171, cyberpunk: 219 },
      sources: [
        { label: 'GamersNexus: 9950X3D Review', url: 'https://gamersnexus.net/cpus/amd-ryzen-9-9950x3d-cpu-review-benchmarks-vs-9800x3d-285k-9950x-more' },
        { label: 'Tom\'s HW: 9950X3D Review', url: 'https://www.tomshardware.com/pc-components/cpus/amd-ryzen-9-9950x3d-review' },
        { label: 'TechSpot: 9950X3D2 vs 9950X3D (0.8% gaming)', url: 'https://www.techspot.com/review/3114-amd-ryzen-9-9950x3d2/' },
        { label: 'Tom\'s HW: 9950X3D2 "More Cache, More Cash"', url: 'https://www.tomshardware.com/pc-components/cpus/amd-ryzen-9-9950x3d2-review' }
      ],
      buyLinks: [
        { store: 'Micro Center $599 in-store (if available)', url: 'https://www.microcenter.com/product/691349/amd-ryzen-9-9950x3d-granite-ridge-am5-430ghz-16-core-boxed-processor-heatsink-not-included' },
        { store: '⚠️ Amazon $639.99 May 14 (LIFTED from $573.99 May 10 ATL; 14-day ATL window Apr 26-May 10 ended; CamelCamelCamel + WebSearch May 14 confirm $639.99 1P; 8% off $699 MSRP, stock varies)', url: 'https://www.amazon.com/dp/B0DVZSG8D5' },
        { store: 'Newegg-direct $639.99 (8% off $699 MSRP, in stock 1P May 10, limit 1, free Corsair CX750M 750W PSU bundle ACTIVE per "May The Fourth Sale" event)', url: 'https://www.newegg.com/amd-ryzen-9-9000-series-ryzen-9-9950x3d-granite-ridge-socket-am5-desktop-cpu-processor/p/N82E16819113884' }
      ]
    }
  ],
  gpu: [
    {
      id: '5070ti',
      name: 'NVIDIA RTX 5070 Ti 16GB',
      price: 979,
      vram: 16,
      recommended: false,
      perf4k: 72,
      tdp: 300,
      notes: '\u26A0\uFE0F QUASI-EOL \u2014 ASUS told retailers production ended, then denied it; NVIDIA says "not EOL" but GDDR7 shortage has effectively halted restocking. NVIDIA cutting gaming GPU production 30-40% in H1 2026 \u2014 5070 Ti is FIRST target for cuts. 50 SUPER lineup indefinitely delayed (confirmed CES 2026) \u2014 no new NVIDIA gaming GPUs in 2026; RTX 60-series pushed to 2028 (Tom\'s HW). \u2b50\u2b50 FLOOR HOLDS May 10 - ASUS PRIME RTX 5070 Ti 16G STILL OOS at Newegg-direct (1P listing still shows $899.99 marked-down from $953.99 list with PRAGMATA bundle, but stock depleted since May 7 - 3P sellers SenyTech Global $1,229.99 cheapest, range to $1,339 are the in-stock options on the listing — QC-verified directly on Newegg listing May 10, 4th day OOS). bestvaluegpu + Newegg listing scrape pegs Newegg cheapest May 10 as MSI Ventus 3X PZ OC BLACK $979 (PRAGMATA, "lowest in 30 days", flat vs May 8) — STAYS the 1P floor with PRIME OOS for 4th day. Next 1P tier: MSI Shadow 3X OC $989.99 (PRAGMATA), Gigabyte WindForce $999.99 ($100 off), MSI Ventus 3X OC BLACK $999.99 (all 1P, in stock). Mid-tier $1,019-1,159 (PNY ARGB, Gigabyte AERO OC). Amazon ASUS PRIME OC $999 May 10 per bestvaluegpu (cheapest authorized PRIME 1P now that Newegg PRIME is OOS 4th day, flat vs May 8 — Newegg MSI Ventus $979.99 still ~$20 cheaper for in-stock 1P). ASUS publicly DENIED EOL claim Apr 2026 (Tom\'s HW) but confirmed memory supply impacted production \u2014 supply tight but not collapsing. Micro Center average $930 across locations (one MSRP card at $899 \u2014 see VideoCardz). Best Buy ~$1,069-1,299. eBay used ~$869.99. Peaked at $1,220 in mid-2025. ~54fps avg native 4K, DLSS 4.5 Dynamic MFG 6x live (596.21/596.36 WHQL drivers; 596.36 added Conan Exiles Enhanced May 5) \u2014 auto-targets 160Hz, 6x mode for path-traced titles. \u2b50 PRAGMATA bundle ENDED May 12 (ran Apr 14 - May 12 on select 5070 Ti / 5080 / 5090; codes still redeemable through June 9 if you bought a qualifying card before midnight May 12 — no longer a buying lever for May 13+ purchases) \u2014 \u26a0\ufe0f ENDED May 12 (ran Apr 14 - May 12; codes still redeemable on Steam through June 9 if you bought a qualifying card before midnight May 12 — no longer a lever for May 13+ buys). Stock depleting \u2014 new units may not be replenished.',
      advice: '⚠️⚠️ STEP UP TO 5080 May 14: Newegg has $999 MSRP 5080 SFF cards BACK IN STOCK per Tom\'s HW (MSI Shadow 3X OC + ZOTAC Solid Core) — the 5070 Ti at $979 (MSI Ventus 3X PZ OC) is just $20 cheaper and 15-18% slower. While the $999 5080 window is open, there is ZERO reason to buy a 5070 Ti. Watch Slickdeals — if 5080 SKUs go OOS, the 5070 Ti is back to the budget pick. ASUS PRIME 16G $899.99 Newegg-direct STILL OOS for 5th day (1P listing still shows $899.99 list with PRAGMATA bundle but stock depleted; 3P SenyTech Global $1,229.99 cheapest, range to $1,339; QC-verified May 10). Cheapest 1P in-stock 5070 Ti is MSI Ventus 3X PZ OC BLACK at $979 Newegg (PRAGMATA, "lowest in 30 days", flat May 10-14). Amazon ASUS PRIME OC $999 May 10 per bestvaluegpu — ties the $999 5080 SFF cards exactly, so jump tier. ⭐ RTX 5060 Ti (16GB, $429) is the budget alternative if 4K@160Hz isn\'t a hard target. Supply not recovering — the $899 PRIME flip OOS now 5 days in. ⚠️ PRAGMATA bundle ENDED May 12 (no longer a lever for May 14+ buys; codes redeemable on Steam through June 9 for qualifying May 12 buys).',
      whyNot: 'Native 4K performance averages ~54fps. Needs DLSS 4 MFG to hit 160Hz, and not all games support it yet. 16GB VRAM may limit future 4K titles. ⚠️ $999 5080 MSRP window REOPENED May 14 (Tom\'s HW: MSI Shadow 3X OC + ZOTAC Solid Core back in stock at $999 Newegg) — with the cheapest in-stock 5070 Ti at $979, the step-up cost is just $20 for a 15-18% faster card. While that 5080 window is open, the 5070 Ti loses its value-pick rationale entirely. Buy 5070 Ti only if the $999 5080 SFF SKUs go OOS.',
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
        { store: '⚠️ Newegg-direct ASUS PRIME 16G $899.99 1P listing STILL OOS May 10 (4th day OOS; was IN STOCK May 5; 1P direct out per listing scrape; 3P sellers SenyTech Global $1,229.99 cheapest, range to $1,339 are the in-stock options on the listing)', url: 'https://www.newegg.com/asus-prime-rtx5070ti-16g-geforce-rtx-5070-ti-16gb-graphics-card-triple-fans/p/N82E16814126757' },
        { store: '⭐ Newegg-direct $979 MSI Ventus 3X PZ OC BLACK (1P in stock May 10 flat vs May 8, PRAGMATA, "lowest in 30 days") — STAYS the cheapest 1P option after PRIME OOS 4th day', url: 'https://www.newegg.com/p/pl?d=rtx+5070+ti' },
        { store: 'Newegg next 1P tier $989.99-$999.99 (MSI Shadow 3X OC $989.99 PRAGMATA / Gigabyte WindForce $999.99 $100 off / MSI Ventus 3X OC BLACK $999.99)', url: 'https://www.newegg.com/p/pl?d=rtx+5070+ti' },
        { store: 'Amazon ASUS PRIME OC $999 May 8 per bestvaluegpu (Newegg PRIME OOS so this is the cheapest authorized PRIME 1P in stock; Newegg MSI Ventus $979.99 still ~$20 cheaper for in-stock 5070 Ti)', url: 'https://www.amazon.com/s?k=rtx+5070+ti' },
        { store: 'Micro Center avg $930 (one MSRP $899 model, varies by location)', url: 'https://www.microcenter.com/search/search_results.aspx?Ntt=rtx+5070+ti' },
        { store: 'Best Buy ~$1,069-1,299', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=rtx+5070+ti' }
      ]
    },
    {
      id: '5080',
      name: 'NVIDIA RTX 5080 16GB',
      price: 999,
      vram: 16,
      recommended: true,
      perf4k: 90,
      tdp: 360,
      notes: '\u2B50\u2B50\u2B50 SWEET SPOT FOR 4K@160Hz - DLSS 4 MFG turns 68fps native into 238fps in Cyberpunk. \u2B50\u2B50 $999 MSRP WINDOW REOPENED May 14 — Tom\'s HW: "Back in stock, this MSRP-priced RTX 5080 OC is the 2nd most powerful GPU available and is now just $999 for the overclocked variant." MSI Shadow 3X OC + ZOTAC Solid Core BACK at $999 Newegg (2nd reopening in 8 days; prior May 6 window held only ONE day before slamming shut May 7-13). Pattern of brief MSRP windows accelerating — pull trigger fast, expect closure inside hours. \u26a0\ufe0f BACKDROP May 11-13 (still live alongside $999 SFF cards as fallback floor): Newegg cheapest non-SFF 1P LIFTED to GIGABYTE WindForce SFF $1,399 May 11 (UP $100 from May 10 PNY ARGB OC $1,299.99); Amazon PNY ARGB EPIC-X $1,299 holds (DOWN $30 from May 10 $1,329, 3-day hold May 11-14 per bestvaluegpu/WePC). Mid-tier Newegg $1,376-1,499 (GIGABYTE WindForce OC SFF $1,376, WindForce SFF $1,399, GAMING OC $1,499, ASUS PRIME, MSI INSPIRE 3X OC BLACK $1,499.92). Windows Central + Tweaktown coverage confirms most non-SFF 5080 SKUs sit 30-50% above $999 MSRP. Micro Center ~$1,150-1,250 in-store (varies by model). Best Buy ~$1,260+. eBay used ~$1,150-1,189 (Tom\'s HW used tracker May 12 cites $1,189.89). \u26A0\uFE0F GDDR7 shortage + NVIDIA 30-40% production cuts, but 5080 is NVIDIA\'s PRIORITY 16GB card — better supply outlook than 5070 Ti. \u2B50 DLSS 5 announced at GTC 2026 (Fall 2026, RTX 50 exclusive) — neural rendering breakthrough, photoreal lighting via AI, massive future upgrade. DLSS 4.5 Dynamic MFG 6x live (596.21/596.36 WHQL drivers). 250+ MFG-compatible games. Prices peaked at $1,500 in Aug 2025.',
      advice: 'RECOMMENDED: Best realistic path to 160Hz@4K. ⭐⭐⭐ BUY-NOW WINDOW May 14: $999 MSRP REOPENED on Newegg per Tom\'s HW May 14 ("Back in stock, this MSRP-priced RTX 5080 OC is the 2nd most powerful GPU available and is now just $999 for the overclocked variant" — MSI Shadow 3X OC + ZOTAC Solid Core, both SFF-ready 151mm/304mm/2.5-slot per NVIDIA spec). 2nd reopening in 8 days; prior May 6 window held only ONE day before slamming shut May 7-13. If you\'re building soon, pull the trigger immediately — stock is the constraint, listings can vanish inside hours. Set Slickdeals alerts as backup. ⭐ BACKUP PATHS (if $999 SFF SKUs go OOS): Amazon PNY ARGB EPIC-X $1,299 (3-day hold May 11-14 per bestvaluegpu/WePC) / Newegg GIGABYTE WindForce OC SFF $1,376 / WindForce SFF $1,399 / GAMING OC $1,499. ⚠️ STEP-UP MATH FLIPPED vs 5070 Ti: At $999 5080 vs $979 5070 Ti (MSI Ventus 3X PZ OC, flat May 10-14), the 5080 is the NO-BRAINER pick — ZERO reason to buy a 5070 Ti while the $999 5080 window is open. Even at the $1,299 Amazon 5080 fallback the gap is $320 — still worth it for reliable 4K@160Hz, but the SFF MSRP cards make it trivial. Anyone who pulled the trigger May 6 saved $300+ over May 11-13 buyers; same opportunity is back today. The 5070 Ti can\'t reliably hit 160Hz native, the 5080 can with DLSS 4 MFG. ⭐ DLSS 5 coming Fall 2026 (RTX 50 exclusive, neural rendering) — buying the 5080 now means you get DLSS 5 support when it lands. NVIDIA prioritizing 5080 production. SUPER refresh indefinitely delayed (confirmed CES 2026). ⚠️ PRAGMATA bundle ENDED May 12 (ran Apr 14 - May 12; codes still redeemable through June 9 if you bought a qualifying card before midnight May 12 — no longer a buying lever for May 14+ purchases).',
      why: 'DLSS 4 MFG generates up to 3 extra frames per real frame. Cyberpunk goes from 68fps native to 238fps. Best value path to 160Hz@4K, 15-18% faster than the 5070 Ti. DLSS 4.5 Dynamic MFG 6x now live (Mar 31, driver 595.79+), auto-adjusts to your 160Hz monitor. DLSS 5 (Fall 2026, RTX 50 exclusive) \u2014 neural rendering, photoreal AI lighting \u2014 locked to this card. NVIDIA prioritizing 5080 production over 5070 Ti \u2014 best supply outlook in the Blackwell lineup.',
      benchmarks: { cyberpunk_4k: 68, starfield_4k: 71, baldurs_4k: 85, ffxiv_4k: 112 },
      sources: [
        { label: 'GN: RTX 5080 Review', url: 'https://gamersnexus.net/gpus/nvidia-geforce-rtx-5080-founders-edition-review-benchmarks-vs-5090-7900-xtx-4080-more' },
        { label: 'Tom\'s HW: 5080 Review', url: 'https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5080-review/4' },
        { label: 'TechSpot: 5080 Review', url: 'https://www.techspot.com/review/2947-nvidia-geforce-rtx-5080/' },
        { label: 'JayzTwoCents: "OC Monster"', url: 'https://www.pcguide.com/news/rtx-5080-dubbed-overclocking-monster-by-jayztwocents-its-like-a-whole-nother-tier-with-oc/' },
        { label: 'NVIDIA: DLSS 4.5 Announcement', url: 'https://www.nvidia.com/en-us/geforce/news/dlss-4-5-dynamic-multi-frame-gen-6x-2nd-gen-transformer-super-res/' },
        { label: 'NVIDIA: DLSS 5 Announcement (GTC 2026)', url: 'https://nvidianews.nvidia.com/news/nvidia-dlss-5-delivers-ai-powered-breakthrough-in-visual-fidelity-for-games' },
        { label: 'Tom\'s HW (May 6): "RTX 5080 at MSRP \u2014 yes, you read that right"', url: 'https://www.tomshardware.com/pc-components/gpus/get-an-rtx-5080-at-msrp-yes-you-read-that-right-newegg-has-zotac-and-msi-rtx-5080-gpus-at-a-discount-from-their-original-prices' },
        { label: 'Tom\'s HW (May 14): "Back in stock, MSRP-priced RTX 5080 OC, just $999"', url: 'https://www.tomshardware.com/pc-components/gpus/back-in-stock-this-msrp-priced-rtx-5080-oc-is-the-2nd-most-powerful-gpu-available-and-is-now-just-usd999-for-the-overclocked-variant' },
        { label: 'Tweaktown: "RTX 50 prices finally hit MSRP"', url: 'https://www.tweaktown.com/news/107952/geforce-rtx-50-series-gpu-prices-finally-hit-msrp-and-below-in-the-us/index.html' }
      ],
      buyLinks: [
        { store: '⭐⭐ Newegg $999 MSRP REOPENED May 14 (MSI Shadow 3X OC + ZOTAC Solid Core SFF-ready, per Tom\'s HW May 14 "Back in stock, this MSRP-priced RTX 5080 OC, just $999" — 2nd reopening in 8 days; stock will move FAST; ⚠️ PRAGMATA bundle ENDED May 12, codes redeemable on Steam through June 9 for qualifying May 12 buys)', url: 'https://www.newegg.com/p/pl?d=rtx+5080' },
        { store: 'Amazon PNY ARGB EPIC-X $1,299 holds May 14 (3-day hold from May 11 per bestvaluegpu/WePC — backup if Newegg $999 SFF SKUs go OOS; cheapest Amazon authorized 1P)', url: 'https://www.amazon.com/s?k=rtx+5080' },
        { store: 'Newegg mid-tier $1,376-1,499 (GIGABYTE WindForce OC SFF $1,376, WindForce SFF $1,399, ASUS PRIME, MSI INSPIRE 3X OC BLACK $1,499.92, GIGABYTE GAMING OC $1,499) — fallback if the $999 MSRP SFF SKUs go OOS', url: 'https://www.newegg.com/p/pl?d=rtx+5080' },
        { store: 'Micro Center ~$1,150-1,250 (varies by model)', url: 'https://www.microcenter.com/search/search_results.aspx?Ntt=rtx+5080' },
        { store: 'Best Buy ~$1,260+', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=rtx+5080' }
      ]
    },
    {
      id: '5090',
      name: 'NVIDIA RTX 5090 32GB',
      price: 3799,
      vram: 32,
      recommended: false,
      perf4k: 99,
      tdp: 575,
      notes: '\uD83D\uDC8E ABSOLUTE FASTEST GPU - 30-69% faster than 5080. 32GB GDDR7. \u26A0\uFE0F Street prices vary wildly by retailer. \u2B50 Micro Center ~$2,910 in-store (ASUS TUF OC, 60-80% in-store success rate) \u2014 still the only reliable sub-$3k path. \u2B50 Newegg 1P DESKTOP floor HOLDS at $3,799 May 10 (flat vs May 8, was $3,699.99 May 3): ZOTAC SOLID OC White $3,799.99 1P in stock + GIGABYTE Gaming OC $3,799.99 1P in stock per Newegg listing scrape May 10 (regular ZOTAC SOLID OC Black sold out, "Coming Soon" notify-only; MSI Suprim Liquid SOC $3,899.99 also 1P; GIGABYTE AORUS M-32GD next-tier 1P $3,999.99; ⚠️ PRAGMATA bundle on select cards ENDED May 12 (codes still redeemable through June 9 if you bought a qualifying card before midnight May 12) — expires TODAY, NVIDIA terms confirm via WebSearch May 12; codes redeemable on Steam through June 9). ASUS TUF Newegg listing still 3P-only at $4,199-5,099 \u2014 the $2,909.99 1P path remains GONE since Apr 28. ASUS ROG Astral / Gigabyte AORUS M $3,899.99. Gigabyte WindForce $3,999.99. Amazon $3,899 (ASUS ROG Astral OC per bestvaluegpu May 10, flat since May 2 — 8 day hold). B&H Photo MSI Suprim Liquid SOC $3,799.95 (cheapest B&H 1P). NVIDIA.com $2,500-3,719 (liquid cooled). Best Buy FE $1,999 nominal-only \u2014 supply effectively zero, no FE drop confirmed in last week. \u2B50 eBay used FLOOR RESOLVED May 11: bestvaluegpu refresh now reports a clean $3,500 used floor (May 10 anomalous "$1020.99" print was a single non-functional/listing-error item scraped as indicator; new $3,500 floor aligns with Apr 30 $3,580 + GPU Poet $3,658 3-mo avg + May 5-8 ~$3,599 prints). At $3,500 used vs $3,799 Newegg 1P new, "used cheaper than new" REASSERTS — used is ~$299 below new, gap widened from ~$200 (May 5-8) as the data noise cleared. Tom\'s HW eBay average dropped from $6k \u2192 $4k by spring \u2014 now $2,700 trend signal: stocks loosening or scalpers exhausted. Tech4Gamers Apr 2026: 5090 nearly 2x MSRP with another $1,300 increase forecast if GDDR7 shortage worsens \u2014 used market trending opposite, suggesting forecast may not pan out. GDDR7 shortage structural \u2014 NVIDIA confirmed supply constraints through fiscal 2027. SUPER refresh indefinitely delayed (confirmed CES 2026) \u2014 RTX 60-series pushed to 2028. DLSS 4.5 Dynamic MFG 6x live (596.21/596.36 WHQL). \u2B50 DLSS 5 announced GTC 2026 \u2014 Fall 2026 launch, RTX 50 EXCLUSIVE: neural rendering, photoreal AI lighting \u2014 5090 is the premier DLSS 5 card. \u26A0\uFE0F $5,000 price ceiling rumored by end of 2026 if GDDR7 shortage worsens (TrendForce).',
      advice: 'OVERKILL: ~150fps native 4K avg. Micro Center ~$2,910 in-store (ASUS TUF OC, 60-80% in-store availability) remains the only reasonable deal \u2014 the Newegg ASUS TUF listing is still 3P-only at $4,199-5,099 (confirmed May 10) with the $2,909.99 1P direct path gone. Newegg 1P desktop floor HOLDS $3,799 May 10 (flat since May 5 lift, was $3,699.99 May 3; ZOTAC SOLID OC White 1P in stock + GIGABYTE Gaming OC $3,799.99 1P in stock; ZOTAC SOLID OC Black sold out / "Coming Soon"; MSI Suprim Liquid SOC $3,899.99 also 1P). \u26A0\uFE0F The GIGABYTE AORUS AI BOX at $3,599.99 1P on Newegg is a Thunderbolt 5 eGPU enclosure for LAPTOPS, ~27% slower than desktop 5090 in gaming. NOT a desktop card; do not confuse for a 5090 desktop deal. ⚠️ PRAGMATA bundle ENDED May 12 on select cards (ran Apr 14 - May 12; codes still redeemable through June 9 if you bought a qualifying card before midnight May 12 — no longer a buying lever for May 13+ purchases). Amazon ~$3,899. Online ~1.85-1.95x MSRP. The 5080 with DLSS 4 MFG hits the same 160Hz target at $1,299 Amazon PNY ARGB EPIC-X / $1,399 Newegg GIGABYTE WindForce SFF May 11 (Amazon DROPPED $30 from May 10 $1,329; Newegg LIFTED $100 from May 10 PNY ARGB OC $1,299.99 — inversion flipped back to Amazon\'s favor; the brief May 6 $999 MSRP window stays closed 5 days running). Best Buy FE $1,999 restocks Tue/Fri 9-11am EST but sells out in 3-5 min. \u2B50 If DLSS 5 (Fall 2026, RTX 50 exclusive neural rendering) is a priority, the 5090 is the showcase card for it \u2014 but the 5080 also supports DLSS 5. \u2B50 eBay used FLOOR RESOLVED May 11: bestvaluegpu refresh now reports a clean $3,500 used floor (May 10 anomalous "$1020.99" print was a single bad listing scraped as indicator). Last reliable used floor was ~$3,599 May 5-8 (per bestvaluegpu, Apr 30 $3,580 floor + GPU Poet $3,658 3-mo avg). [Earlier May 3 $2,700 print also reads as anomalous — $3,599 aligned with Apr 30 $3,580 floor + GPU Poet $3,658 3-mo avg]. At $3,500 used vs $3,799 Newegg 1P new, used is now ~$299 BELOW new — the used-cheaper-than-new edge WIDENED from ~$200 (May 5-8) as the data noise cleared (warranty risk vs $299 savings) \u2014 if you\'re willing to take warranty risk, eBay is suddenly the value play. \u26A0\uFE0F TrendForce $5,000 forecast still on the books but used pricing collapse argues against it.',
      whyNot: 'Online street price $3,699-3,899 (1.85-1.95x MSRP). 575W TDP needs 1000W PSU. The 5080 with DLSS 4 MFG reaches the same 160Hz@4K target at $1,299 Amazon / $1,399 Newegg May 11 (Amazon DROPPED $30, Newegg LIFTED $100 — inversion flipped back to Amazon; the brief May 6 $999 MSRP window stays closed 5 days). Both cards support DLSS 5. eBay used floor RESOLVED May 11 at $3,500 (bestvaluegpu refresh clean — May 10 anomalous $1,020.99 print resolved) — ~$299 below new Newegg $3,799 if you accept warranty risk.',
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
        { store: 'Micro Center ~$2,910 (ASUS TUF OC, in-store, unverified May 10)', url: 'https://www.microcenter.com/search/search_results.aspx?Ntt=rtx+5090' },
        { store: 'Newegg-direct $3,799 ZOTAC SOLID OC White + GIGABYTE Gaming OC $3,799.99 1P (desktop floor HOLDS May 10, flat since May 5 lift; ZOTAC SOLID OC Black sold out / "Coming Soon")', url: 'https://www.newegg.com/p/pl?d=rtx+5090' },
        { store: 'Newegg ASUS TUF: 3P only $4,199-5,099 (1P still GONE May 10 — 12 days since Apr 28)', url: 'https://www.newegg.com/asus-tuf-gaming-tuf-rtx5090-32g-gaming-geforce-rtx-5090-32gb-graphics-card-triple-fans/p/N82E16814126752' },
        { store: 'Amazon ~$3,899 (ASUS ROG Astral OC, bestvaluegpu May 10, flat since May 2 — 8 day hold)', url: 'https://www.amazon.com/s?k=rtx+5090' },
        { store: 'B&H Photo $3,799.95 MSI Suprim Liquid SOC', url: 'https://www.bhphotovideo.com/c/search?q=rtx+5090' },
        { store: 'eBay used $3,500 floor May 11 (bestvaluegpu refresh CLEAN — May 10 anomalous $1020.99 print gone; floor aligns with Apr 30 $3,580 + GPU Poet $3,658 3-mo avg; $299 below Newegg 1P $3,799)', url: 'https://www.ebay.com/sch/i.html?_nkw=rtx+5090&_sop=12' },
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
      notes: 'Solid Z790 for Intel - 16+1+1 VRM with 90A stages, WiFi 7, handles even LN2 overclocking. \u26A0\uFE0F\u26A0\uFE0F TARIFF VOLATILITY: Amazon range $212-300 over April (Pangoly low $211.69 Apr 2, list jumped to ~$298 Apr 22) \u2014 32% Taiwan tariff now passing through. Newegg 3P "HeLiXing" Hong Kong $304.28 holds May 10 (down from $346.13 Apr 29 \u2014 tariff pass-through partially reversing, 4-day hold at $304). 3P alts $287.46-$313.69 from other HK sellers. Newegg-direct still not stocked at this tier. Best Buy ~$304. LGA1700 platform is EOL with Arrow Lake (LGA1851) as current gen \u2014 but tariffs are overriding the natural demand-fade price decline. \u26a0\ufe0f ASUS warned 25-30% Q2 Taiwan PC price hikes (VideoCardz Apr 28-29); MSI/Gigabyte expected to follow \u2014 buy mobos before May/June if you need one.',
      advice: 'FOR i9-14900K: \u26A0\uFE0F Amazon jumped to ~$298 from $212 (tariff pass-through) \u2014 no longer the budget win it was. Newegg 3P $304.28 holds May 10 (HK seller "HeLiXing", was $346 Apr 29; B.Y.R alt $313) \u2014 tariff pass-through partially reversing. At $298 Amazon it\'s virtually identical to X870 Tomahawk ($240 Amazon pre-tariff / $300 Newegg post-tariff). Only buy if you\'re definitely keeping the 14900K. If tariff pricing hits both boards equally, AM5\'s platform future through 2027+ makes X870 the no-brainer.',
      sources: [
        { label: 'PC Gamer Review', url: 'https://www.pcgamer.com/msi-mag-z790-tomahawk-max-wifi-motherboard-review/' },
        { label: 'OC3D Review', url: 'https://overclock3d.net/reviews/cpu_mainboard/msi-mag-z790-tomahawk-max-review/4/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$298 (\u26A0\uFE0F volatile $212-300 in April)', url: 'https://www.amazon.com/MSI-MAG-Z790-Tomahawk-WiFi/dp/B0CJSL89T2' },
        { store: 'Newegg ~$304 (3P "HeLiXing" HK, holds May 10; was $346 Apr 29 \u2014 tariff partial reversal)', url: 'https://www.newegg.com/msi-mag-z790-tomahawk-max-wifi-atx-intel-z790-lga-1700/p/N82E16813144633' },
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
      notes: '\u2B50 SWEET SPOT AM5 - WiFi 7, 5GbE, PCIe 5.0 M.2, 8-layer server-grade PCB. The 9800X3D doesn\'t need more. Amazon $226.99 holds May 12 (Pangoly tracker confirms current price via WebSearch May 12, ATL $219.99 Apr 2, flat since May 2 \u2014 10 day hold extended from 8-day May 10). \u2b50 Newegg 1P direct $229.99 holds May 10 (#1 best-seller AMD MB, "Lowest Price in 30 Days" badge confirmed via direct page check May 10; sold and shipped by Newegg, saving $24.50/9% off list $254.49, limit 5/customer; 5-day hold at $229.99 since May 5 1P pivot). The 3P-only era ENDED. MSI Store still OUT OF STOCK May 10 (email-when-back notify only). Best Buy ~$254. Amazon at ~$227 remains the floor May 10.',
      advice: 'RECOMMENDED: ~$227 at Amazon (still the floor May 10) or \u2b50 Newegg 1P-direct $229.99 holds May 10 (#1 best-seller AMD MB, "Lowest Price in 30 Days" badge live; sold and shipped by Newegg, list $254.49, limit 5; 5-day hold) \u2014 Newegg now within $3 of Amazon AND finally 1P. Both paths are clean buys. \u26A0\uFE0F Newegg jumped to $300 from tariffs in late April \u2014 partial reversal stuck so far. AM5 with WiFi 7 + 5GbE + upgrade path through 2027+ (Zen 6 "Medusa" desktop delayed to 2027, AM5 confirmed). The 9800X3D doesn\'t need a $500 board. Tariff-driven flux on both boards (Z790 $212-300, X870 ~$227-240) keeps the gap small, and the X870 has a platform future. \u26A0\uFE0F Amazon/MSI prices likely to follow Newegg\'s tariff increase soon. Buy now.',
      sources: [
        { label: 'The FPS Review', url: 'https://www.thefpsreview.com/2025/02/04/msi-mag-x870-tomahawk-wifi-motherboard-review/' },
        { label: 'KitGuru Review', url: 'https://www.kitguru.net/components/motherboard/leo-waldock/msi-mag-x870-tomahawk-review/' }
      ],
      buyLinks: [
        { store: 'MSI Store OUT OF STOCK May 8', url: 'https://us-store.msi.com/MAG-X870-TOMAHAWK-WIFI' },
        { store: 'Amazon $226.99 (best! Pangoly May 10, flat since May 2 — 8 day hold)', url: 'https://www.amazon.com/MSI-Tomahawk-Motherboard-Processors-Bluetooth/dp/B0DG3HK897' },
        { store: 'Newegg-direct $229.99 holds May 10 (1P, #1 best-seller AMD MB, "Lowest Price in 30 Days"; saving $24.50/9% off list $254.49, limit 5; 5-day hold)', url: 'https://www.newegg.com/msi-mag-x870-tomahawk-wifi-atx-motherboard-amd-x870-am5/p/N82E16813144667' },
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
      price: 410,
      socket: 'AM5',
      recommended: false,
      notes: 'Premium AM5 - 5x M.2 (3x PCIe 5.0), WiFi 7, 5GbE, USB4. Best-in-class. \uD83D\uDC8E Newegg-direct $409.99 1P May 10 (QC-verified live, ⚠️ UP $16 from $393.99 May 8; ALSO Newegg cut LIST price from $500 → $443.99, so the discount narrowed from "21% off $500" to "7% off $443.99 / $34 savings"; sold/shipped by Newegg, free 30-day returns; first lift since the $393.99 floor held 12 days). Pangoly aggregator shows $369 spot but unverified at any major retailer (likely transient 3P) — $393.99 Newegg-direct is the verified authorized floor. TECH EDGE 3P alt $398 ties. Amazon $419 still listed but Newegg is now the cheapest authorized channel. \u26A0\uFE0F Best Buy ~$419 (tariff-volatile). ASUS eShop $500 MSRP. \u26A0\uFE0F Price stabilized from $699 spike in Feb 2026 but 32% Taiwan tariff pressure building. \u2B50 ASUS $30 Steam code promo CONFIRMED ACTIVE April 2026 (covers Strix X870E-E/H plus many others \u2014 per Tweaktown Apr coverage; no updated end-date confirmed beyond prior July 1).',
      advice: 'PREMIUM: Newegg-direct $409.99 May 10 (⚠️ UP $16 from $393.99 May 8 floor that held 12 days — first lift; QC-verified live; Newegg also cut LIST from $500 → $443.99, so the "21% off" framing collapsed to "7% off / $34 savings") still undercuts Amazon $419 by ~$9. Pangoly $369 aggregator spot is unverified at any major retailer \u2014 treat as transient 3P, not the buyable price. Best Buy ~$419 ties Amazon. $30 ASUS Steam code only via ASUS eShop ($500) = ~$470 effective, still not worth it. $183 more than X870 Tomahawk ($227 Amazon) for USB4, 5x M.2, premium VRMs. Hard to justify for a 9800X3D gaming build \u2014 buy if you actually need USB4 + 5x M.2.',
      sources: [
        { label: 'Tom\'s HW Review (4/5)', url: 'https://www.tomshardware.com/pc-components/motherboards/asus-rog-strix-x870e-e-gaming-wifi-review' },
        { label: 'PC Guide Review', url: 'https://www.pcguide.com/motherboard/review/asus-rog-strix-x870e-e-gaming-wifi/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$419 (tariff-adjusted)', url: 'https://www.amazon.com/dp/B0DGFKN5HV' },
        { store: 'Newegg-direct $409.99 May 10 (1P, ⚠️ UP $16 from $393.99 May 8 floor; Newegg cut LIST $500 → $443.99 — discount now 7% off / $34 savings vs prior 21% off $500 framing; sold/shipped by Newegg)', url: 'https://www.newegg.com/asus-rog-strix-x870e-e-gaming-wifi-atx-motherboard-amd-x870e-am5/p/N82E16813119682' },
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
      notes: '\u2B50 BEST VALUE - AMD EXPO certified. DDR5-6000 is the AM5 sweet spot (1:1 Infinity Fabric). Amazon ~$359 (confirmed Apr 21, best flat price! Pangoly-tracked). \u2B50 Newegg-direct $479.99 May 5 (UP $30 from May 3 $449.99; list $494.99, only $15 off / 3% now — sale shrunk). ⭐ Code MFSF278 listed on product page as "$90 off, limited offer" CONFIRMED LIVE May 10 via direct Newegg page check (replaces expired PGWEF295); $90 off \u2192 ~$389.99 net (improves on PGWEF295 ~$424.99 path). Code STRF99 confirmed EXPIRED. \u26A0\uFE0F Old code SSF5478 appears EXPIRED \u2014 absent from all coupon aggregators (Discoup, SimplyCodes, CouponFollow, Tom\'s HW) as of Apr 21. TrendForce Mar 31: DDR5 retail fell 7.2% MoM in March \u2014 FIRST monthly decline in 8 months. But still 408% above Jul 2025 baseline. Samsung+SK Hynix negotiating Q2 contract hikes of 58-63% QoQ. Shortage expected through late 2027/2028 (PC Gamer). Micron exited consumer RAM \u2014 only Samsung & SK Hynix remain. Google TurboQuant AI memory compression cited as easing some data-center demand pressure.',
      advice: '32GB is all you need for gaming (AAA uses ~20GB max). CL36 vs CL30 is ~1-2% gaming difference. Amazon ~$359 is the best flat price. \u2B50 Newegg-direct UP $30 to $479.99 May 5 (was $449.99 May 3; list $494.99) — CONFIRMED code MFSF278 on product page says "$90 off, limited offer" (replaces expired PGWEF295), QC-verified live on Newegg page May 10 — apply at checkout for $90 off \u2192 ~$389.99 net (BEATS the prior PGWEF295 ~$424.99 path). Old codes STRF99 / SSF5478 / PGWEF295 all confirmed expired/replaced. Retail pulled back 7.2% in March (first decline in 8 months) but contract prices still rising 58-63% QoQ next quarter \u2014 this dip is consumer-affordability driven, not supply relief. Buy now.',
      sources: [
        { label: 'PC Gamer: Best RAM 2026', url: 'https://www.pcgamer.com/best-ram-for-gaming/' },
        { label: 'TrendForce: DDR5 Retail Pullback Mar 2026', url: 'https://www.trendforce.com/news/2026/03/31/news-ddr5-retail-prices-pullback-amid-market-correction-but-industry-players-cite-stable-contract-trends/' },
        { label: 'PC Gamer: DDR5 Prices Drop (Mar 30)', url: 'https://www.pcgamer.com/hardware/memory/yes-some-ddr5-ram-prices-have-dropped-recently-but-i-wouldnt-pop-the-champagne-just-yet/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$359 (best flat price!)', url: 'https://www.amazon.com/G-Skill-288-Pin-CL36-36-36-96-Channel-F5-6000J3636F16GX2-FX5/dp/B0BFGB2D2Z' },
        { store: 'Newegg-direct $479.99 holds May 10 (flat vs May 8; list $494.99; \u2b50 code MFSF278 "$90 off, limited offer" CONFIRMED LIVE on product page May 10 \u2014 net ~$389.99 with code applied at checkout)', url: 'https://www.newegg.com/g-skill-flare-x5-32gb-ddr5-6000-cas-latency-cl36-desktop-memory-black/p/N82E16820374419' },
        { store: 'Walmart ~$410', url: 'https://www.walmart.com/search?q=g.skill+flare+x5+ddr5+6000' }
      ]
    },
    {
      id: 'ddr5-32gb-6000-cl30',
      name: '32GB DDR5-6000 CL30 (Kingston FURY Beast)',
      price: 474,
      capacity: 32,
      recommended: false,
      notes: 'Tighter CL30 timings for ~1-2% more gaming perf. AMD EXPO + Intel XMP 3.0 certified. Amazon ~$474 (best!). Newegg-direct $489.99 holds May 10 (was $499.99 Apr 28, sale held; non-RGB SKU KF560C30BBEK2-32, $135 / 21% off $624.99 list, sold/shipped by Newegg, limit 5). 3P range $512-$527 (Amigos / BeachAudio / antonline). Best Buy ~$480. \u26A0\uFE0F DDR5 retail softening slightly in March (first drop in 8 months) but contract prices unchanged \u2014 caution on expecting big drops.',
      advice: 'PREMIUM TIMINGS: CL30 is technically optimal but now ~$115+ more than CL36 ($474 vs $359) for 1-2% real-world difference. Amazon ~$474 is the only sane CL30 price right now \u2014 Newegg-direct $489.99 (down from $499.99 Apr 28, holds May 10) is close but Amazon still cheaper. The CL30 premium is barely justified at $474; at $500+ it definitely isn\'t. Stick with Flare X5 CL36 at $359 Amazon.',
      sources: [
        { label: 'PC Gamer: Best RAM 2026', url: 'https://www.pcgamer.com/best-ram-for-gaming/' },
        { label: 'TechRadar: Best DDR5', url: 'https://www.techradar.com/computing/best-ddr5-ram' }
      ],
      buyLinks: [
        { store: 'Amazon ~$474 (best!)', url: 'https://www.amazon.com/Kingston-2x16GB-6000MT-Desktop-KF560C30BBEAK2-32/dp/B0CYM58GFS' },
        { store: 'Newegg-direct $489.99 (down from $499.99 Apr 28, holds May 5; non-RGB SKU, $135/21% off $624.99 list)', url: 'https://www.newegg.com/kingston-technology-corp-fury-beast-32gb-ddr5-6000-cas-latency-cl30-memory-black/p/N82E16820242861' },
        { store: 'Best Buy ~$480', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=kingston+fury+beast+ddr5+6000+cl30' }
      ]
    },
    {
      id: 'ddr5-64gb-6000',
      name: '64GB DDR5-6000 (G.Skill Trident Z5 Neo)',
      price: 880,
      capacity: 64,
      recommended: false,
      notes: '\u26A0\uFE0F\u26A0\uFE0F SEVERE SHORTAGE - 64GB DDR5 non-RGB ~$880 at Amazon, RGB variant ~$934-949 (WaveRide Tech ships from Canada, MD Discounts $965 shipped). Newegg $949.99 (3P EvoMicro, holds May 10). eBay $968. Pangoly peak was $1,045 in mid-Feb 2026. TrendForce Mar 31: DDR5 retail fell 7.2% MoM \u2014 first decline in 8 months, but Q2 contract hikes of 58-63% QoQ still being negotiated. Tom\'s HW: "64GB of DDR5 now costs more than an entire PS5." Pre-crisis this kit was $193 \u2014 current price is ~4.5x. PCGamer: "memory crisis could run past 2028." Structural shortage from AI data center demand.',
      advice: 'OVERKILL FOR GAMING: Games use ~20GB max. You\'re paying ~$521 extra over 32GB ($880 vs $359) for capacity you\'ll never touch in games. Price eased slightly from peak ($1,045) to $880 range (non-RGB; RGB runs $934+). Retail softened 7.2% in March but Samsung+SK Hynix pushing Q2 contracts up 58-63% QoQ \u2014 structural AI demand hasn\'t changed. Buy 32GB now and upgrade later if/when prices normalize.',
      sources: [
        { label: 'Tom\'s HW: "More than a PS5"', url: 'https://www.tomshardware.com/pc-components/ddr5/64gb-of-ddr5-memory-now-costs-more-than-an-entire-ps5-even-after-a-discount-trident-z5-neo-kit-jumps-to-usd600-due-to-dram-shortage-and-its-expected-to-get-worse-into-2026' },
        { label: 'TrendForce: DDR5 Retail Pullback Mar 2026', url: 'https://www.trendforce.com/news/2026/03/31/news-ddr5-retail-prices-pullback-amid-market-correction-but-industry-players-cite-stable-contract-trends/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$880 (best!)', url: 'https://www.amazon.com/s?k=g.skill+trident+z5+neo+64gb+ddr5+6000' },
        { store: 'Newegg RGB $949.99 (3P EvoMicro, holds May 10; B.Y.R $1,133 / WaveRide $1,144). Non-RGB SKU only Canada 3P at $1,274 \u2014 use Amazon for non-RGB.', url: 'https://www.newegg.com/g-skill-trident-z5-neo-rgb-series-64gb-ddr5-6000-cas-latency-cl30-desktop-memory-black/p/N82E16820374445' }
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
      notes: 'Updated V2 of GN\'s "The Champ" air cooler. Amazon ~$33 holds May 10 (Amazon listing scrape, flat since May 6 reversal from $40 May 5 \u2014 back to Apr 21 floor \u2014 5-day hold; Tom\'s HW May 8 cites $36 alt listing). Newegg SE V2 $49.90 (Thermalright Authorized Store, top-rated, holds since Apr 28 \u2014 list price now matches sale). Dual-tower, 6 heatpipes, AGHP Gen 5.0, rated to 265W TDP. Supports LGA 1851/1700 and AM5.',
      advice: 'BUDGET: ⭐ Amazon ~$33 holds May 10 (flat since May 6 reversal from $40 May 5; back to Apr 21 floor — 5-day hold). Absurd deal for 9800X3D (120W). Beats $80-100 towers at half the price. Newegg V2 $49.90 if Amazon out. NOT enough for i9-14900K under sustained 253W load.',
      sources: [
        { label: 'GN: PA120 SE Review', url: 'https://gamersnexus.net/coolers/champ-41-thermalright-peerless-assassin-cpu-cooler-review-benchmarks' },
        { label: 'Tom\'s HW Review', url: 'https://www.tomshardware.com/reviews/thermalright-peerless-assassin-120-se' }
      ],
      buyLinks: [
        { store: 'Amazon ~$33 holds May 8 (flat vs May 6 REVERSAL from $40 May 5; back to Apr 21 floor)', url: 'https://www.amazon.com/Thermalright-Peerless-Assassin-120-Cooler/dp/B0DP23NF7T' },
        { store: 'Newegg $49.90 (Thermalright Authorized, holds since Apr 28)', url: 'https://www.newegg.com/p/13C-000Y-000M3' }
      ]
    },
    {
      id: 'arctic-360-pro',
      name: 'Arctic Liquid Freezer III Pro 360',
      price: 105,
      type: 'aio',
      recommended: true,
      notes: '\u2B50 GN "The New Best" AIO - 2C cooler than standard on AMD, 10C on Intel. Integrated VRM fan. Nothing else comes close. Amazon ~$105 Non-RGB Black holds May 10 (back up from $89 ATL; Tom\'s HW still cites $89 ATL but listing now $105 \u2014 7-day hold). ARGB Black $91.49 holds May 10 (flat vs May 2 \u2014 8-day hold, Amazon). ⚠️ Newegg first-party listing GONE Apr 30 — only 3P TELeasy at $165.99 / B-IN $169.99 (red flag — Amazon is the only sane path). Tom\'s HW: "Best AIO for 9950X3D and Intel too." Tech4Gamers: "Cooler To Beat In 2026."',
      advice: 'RECOMMENDED: ~$105 Amazon non-RGB Black holds May 10 (flat vs May 5 — 7-day hold) for the best AIO ever tested. ARGB Black $91.49 holds May 10 (flat since May 2 — 8-day hold) if you want lighting. Handles both 14900K and 9800X3D with ease. $86 cheaper than the Corsair Titan ($191) for better thermals.',
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
      notes: 'Premium AIO - Corsair FlowDrive pump, hot-swap caps, iCUE ecosystem integration. LCD variant available at ~$250+. \u2b50 Corsair.com $159.99 holds May 10 (sale from $199.99, Best Seller, free ship, in stock \u2014 verified May 5, sale held 5 days). Amazon Pangoly ~$190.99 holds May 10. Newegg-direct $199.99 STILL OUT OF STOCK May 10; 3P Canadian seller WaveRide Tech $153.99 (held since Apr 28 \u2014 13 days). Price volatile in 2026 \u2014 12-mo range $140-322, avg $191.',
      advice: 'LUXURY: ⭐ Corsair.com $159.99 holds May 10 (first-party Best Seller, free ship \u2014 beats Newegg OOS state, Amazon $190.99). Gap to Arctic narrowed to ~$55 (Arctic ~$105). Newegg-direct STILL OOS May 10. Still buy for iCUE/aesthetics, not thermals.',
      sources: [
        { label: 'PC Gamer Review', url: 'https://www.pcgamer.com/hardware/cooling/corsair-icue-link-titan-360-rx-lcd-review/' },
        { label: 'XDA Review', url: 'https://www.xda-developers.com/corsair-icue-link-titan-360-rx-rgb-review/' }
      ],
      buyLinks: [
        { store: 'Corsair.com $159.99 (best!) \u2014 sale from $199.99, in stock May 10 (5-day hold)', url: 'https://www.corsair.com/us/en/p/cpu-coolers/cw-9061018-ww/icue-link-titan-360-rx-rgb-aio-liquid-cpu-cooler-cw-9061018-ww' },
        { store: 'Amazon ~$190.99 (Pangoly May 10, flat since May 2 — 8 day hold)', url: 'https://www.amazon.com/CORSAIR-iCUE-Titan-Liquid-Cooler/dp/B0D6BFBLTK' },
        { store: 'Newegg-direct $199.99 STILL OOS May 10 ($153.99 from 3P WaveRide CA, holds since Apr 28 — 13 days)', url: 'https://www.newegg.com/p/0EZ-00MD-00003' }
      ]
    }
  ],
  storage: [
    {
      id: 'ssd-2tb-budget',
      name: '2TB Crucial P310',
      price: 290,
      recommended: true,
      notes: '\u2B50 BEST VALUE SSD - Gen4 speeds at nearly half the 990 Pro price. Gaming load times are identical. \u26A0\uFE0F NAND CRISIS DEEPENING: ⚠️⚠️ Amazon ~$290 holds May 10 (flat since May 6 jump UP $45 from May 5 $245 pcspecchart print; Pangoly tracker confirms sustained at $290 — 5 day hold) — NAND crisis squeeze continuing exactly as TrendForce forecast. wccftech still cites old $213.99 deal but that was March \u2014 Wccftech still cites old $213.99 deal). Best Buy ~$260. Newegg-direct $299.99 1P (limit 3) / 3P BioStar $298.95. Prices spiked to $400 in Feb 2026, now pulling back. Was $94 in mid-2025. NAND costs up 246% YoY per Kingston (Apr 24 update, 60-day acceleration), all 2026 production sold out (Phison CEO). Tom\'s HW: "pricing apocalypse through 2027." ⚠️⚠️ MICRON CRUCIAL CONSUMER BRAND OFFICIALLY DISCONTINUED FEB 2026 (TrendForce) — Q3 2026 all Micron DRAM/NAND goes to AI customers. P310 stock is FINITE; once depleted, no replenishment from Micron. TrendForce Apr 15 spot update: DDR4 still edging lower 0.48% WoW but NAND supply structurally tight. Q1 contract prices surged 55-60% QoQ and TrendForce now forecasts Q2 +70-75% QoQ (accelerating; client SSDs +40%+ QoQ the steepest category), no supply relief until late 2027. Buy ASAP \u2014 volatile.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: P310 Review', url: 'https://www.tomshardware.com/reviews/crucial-p310-ssd-review' },
        { label: 'TrendForce: Micron ends Crucial brand Feb 2026', url: 'https://www.trendforce.com/news/2025/12/04/news-micron-to-end-crucial-consumer-memory-by-feb-2026-redirects-supply-to-enterprise-amid-ai-surge/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$290 holds May 10 (flat since May 6 jump UP $45 from May 5 $245; NAND crisis squeeze plateaued 5 days; verify at checkout)', url: 'https://www.amazon.com/Crucial-P310-2280-PCIe-Gen4/dp/B0DC8RVRBZ' },
        { store: 'Best Buy ~$260', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=crucial+p310+2tb' },
        { store: 'Newegg ~$300 1P (3P BioStar $298.95)', url: 'https://www.newegg.com/crucial-2tb-p310-nvme/p/N82E16820156413' }
      ]
    },
    {
      id: 'ssd-2tb',
      name: '2TB Samsung 990 Pro',
      price: 430,
      recommended: false,
      notes: 'Best Gen4 SSD. 7,450 MB/s read. Was $133 \u2014 NAND shortage still ~3.2x the price.\u26A0\uFE0F PRICE EASING May 13: Pangoly composite tracker $429.99 May 13 (DOWN ~$153 from May 10 $583.19 print, sharp pullback from Apr 21 $917.84 intra-month high — 8 day hold; intra-month high $917.84 on Apr 21). Samsung.com $639.99. Newegg 3P BioStar $493.75 / MobileMonster $493.76 / Best Deals For You $494.99 (Newegg-direct not 1P). \u26A0\uFE0F The $493 Newegg 3P floor is still $90 BELOW Amazon 1P May 10 \u2014 best non-MC path. \u2B50 Micro Center ~$280 in-store still cited but UNVERIFIED May 10 (suspicious gap vs national channel — call store before driving). Still ~3.2x the $133 mid-2025 low (down from ~4.3x peak). Hit $844 high on Mar 31, $917.84 high on Apr 21. \u26A0\uFE0F NAND CRISIS WORSENING: TrendForce Mar 31 forecasts Q2 2026 NAND contract prices +70-75% QoQ on top of Q1\'s ~60% jump. Phison CEO: all 2026 NAND production already sold out, "pricing apocalypse" through 2027. Enterprise SSDs now ~60% of global NAND output \u2014 consumer allocation shrinking. Volatile \u2014 verify at checkout, direction is UP.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: 990 Pro Review', url: 'https://www.tomshardware.com/reviews/samsung-990-pro-ssd-review' }
      ],
      buyLinks: [
        { store: 'Micro Center ~$280 (UNVERIFIED May 10 — call store)', url: 'https://www.microcenter.com/product/661028/samsung-990-pro-2tb-ssd' },
        { store: 'Pangoly composite ~$430 May 13 (DOWN ~$153 from May 10 $583.19 print; Pangoly excludes Amazon data per operating agreement \u2014 treat as authorized-retailer composite, verify at checkout)', url: 'https://www.amazon.com/SAMSUNG-Internal-Expansion-MZ-V9P2T0B-AM/dp/B0BHJJ9Y77' },
        { store: 'Newegg 3P $493.75 (BioStar / MobileMonster $493.76 / Best Deals For You $494.99 \u2014 Newegg 1P not stocked May 8)', url: 'https://www.newegg.com/samsung-2tb-990-pro-nvme-2-0/p/N82E16820147861' },
        { store: 'Best Buy ~$440', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=samsung+990+pro+2tb' }
      ]
    },
    {
      id: 'ssd-4tb',
      name: '4TB Samsung 990 Pro',
      price: 800,
      recommended: false,
      notes: 'Single-sided 4TB. Premium for capacity. \u2B50 PRICE EASING May 13: Pangoly composite tracker $799.99 May 13 (DOWN ~$149 from May 10 $948.93 print; Pangoly excludes Amazon data per operating agreement — treat as authorized-retailer composite). ⚠️ Newegg 3P floor LIFTED May 10: ServerQue $849 GONE (was the floor since Apr 28 \u2014 11+ day hold). New floor EvoMicro $929.99 / BioStar $929.95 / The Best Deals For You $939.99 / MobileMonster $940.00 (3P-only, Newegg-direct not stocked) \u2014 net $80 floor jump in ~2 days, NAND squeeze biting. 30-day avg $725 per pricehistory.app stale \u2014 May 10 is solidly above that. Hit $1,600 in Feb 2026. Was $250 in Nov 2023. Still ~3x the mid-2025 low. NAND crisis continues \u2014 Q1 2026 contract prices surged 55-60% QoQ, no relief until late 2027. Price volatile \u2014 check at purchase time.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: 990 Pro Review', url: 'https://www.tomshardware.com/reviews/samsung-990-pro-ssd-review' }
      ],
      buyLinks: [
        { store: 'Pangoly composite ~$800 May 13 (⚠️ UP from $743 Apr 4; Pangoly $948.93 May 10; 3P floor lifted to ~$930 \u2014 verify at checkout)', url: 'https://www.amazon.com/s?k=samsung+990+pro+4tb' },
        { store: 'Newegg 3P floor LIFTED May 10 — ServerQue $849 GONE; new 3P floor EvoMicro $929.99 / BioStar $929.95 / The Best Deals For You $939.99 / MobileMonster $940.00; ~$80 jump from prior $849 floor', url: 'https://www.newegg.com/samsung-4tb-990-pro-nvme-2-0/p/N82E16820147879' }
      ]
    }
  ],
  case: [
    {
      id: 'corsair-4000d-rs',
      name: 'Corsair Frame 4000D RS',
      price: 85,
      recommended: true,
      notes: '\u2B50 Includes 3 fans! Great airflow, clean cable management, InfiniRail fan mounting. GN: "Corsair Remembered How to Make a Case." \u26A0\uFE0F SALE HOLDS May 10! Newegg $84.99 1P direct holds (verified live May 10, flat since May 7; 26% off list $114.99 \u2014 4-day hold). \u2b50\u2b50 DEAL HOLDS May 12: Amazon WHITE non-ARGB variant (CC-9011313-WW) at $59.99 with free shipping per Slickdeals staff post May 5 ($25 below Newegg Black sale, ~47% below list) \u2014 re-verified live by Neowin + WebSearch May 12, 8-day hold (extended from 6-day May 10). Cheapest authorized 4000D RS in YEARS. Verify still active at checkout (Slickdeals deals can flip in hours). Corsair.com Wood RS variant $129.99 (different SKU, the standard 4000D RS RS-fan version is back to ~$99.99-114.99 list across retailers). ARGB variant ~$125. Amazon dynamic pricing on Black variant. \u26A0\uFE0F Earlier $57.86/$70.04 Amazon 30% coupon (Apr 18 Slickdeals YMMV) long expired. Watch Slickdeals for sale return \u2014 Corsair has run this case at $84.99 multiple times in 2026.',
      advice: '',
      sources: [
        { label: 'GN: "Corsair Remembered How to Make a Case"', url: 'https://gamersnexus.net/cases/corsair-remembered-how-make-case-frame-4000d-rs-argb-review' },
        { label: 'Tom\'s HW: "Lightweight, Effective"', url: 'https://www.tomshardware.com/pc-components/pc-cases/corsair-frame-4000d-case-review' },
        { label: 'Slickdeals (May 5): 4000D RS White $59.99 Amazon', url: 'https://slickdeals.net/f/19492038-59-99-corsair-4000d-rs-frame-modular-high-airflow-mid-tower-pc-case-white-at-amazon' }
      ],
      buyLinks: [
        { store: 'Newegg $84.99 holds May 10 (⭐ 1P direct Black, sale holds 4 days — 26% off list $114.99, verified live)', url: 'https://www.newegg.com/corsair-atx-mid-tower-frame-4000d-rs-argb-steel-tempered-glass-computer-case-black/p/N82E16811139230' },
        { store: '⭐⭐ Amazon WHITE non-ARGB $59.99 holds May 12 (Slickdeals staff post May 5 + Neowin coverage + WebSearch May 12 confirm live — 8-day hold extended from 6-day May 10, $25 BELOW Newegg Black sale, ~47% below list, free shipping; verify still live at checkout)', url: 'https://www.amazon.com/CORSAIR-4000D-Modular-Airflow-Mid-Tower/dp/B0DPJ9FD5N' },
        { store: 'Corsair Wood RS variant $129.99', url: 'https://www.corsair.com/us/en/p/pc-cases/cc-9011340-ww/frame-4000d-wood-rs-modular-mid-tower-pc-case-black-walnut-cc-9011340-ww' },
        { store: 'Corsair standard 4000D RS $99-115', url: 'https://www.corsair.com/us/en/p/pc-cases/cc-9011335-ww/4000d-rs-airflow-mid-tower-atx-pc-case-black-cc-9011335-ww' },
        { store: 'Amazon ~$95-115 (dynamic)', url: 'https://www.amazon.com/s?k=corsair+frame+4000d+rs' }
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
      price: 112,
      wattage: 850,
      recommended: false,
      notes: 'ATX 3.1 (2025 refresh), native 12V-2x6, PCIe 5.1, 7yr warranty. \u26a0\ufe0f\u26a0\ufe0f Newegg DROPPED to $111.90 May 10 (DOWN $18 from $129.99 May 8 floor; 25% off $129.99 \u2014 Newegg cut both list AND sale; sold/shipped by Newegg, limit 3 free 30-day returns; \u26a0\ufe0f code SSF6437 still NOT visible on product page May 8 \u2014 treat as expired/built-in; coupon aggregators still reference it but unverifiable). Amazon ~$125. Best Buy ~$125. PCPartPicker lowest alt listing $109.99. Good for 9800X3D + 5080. \u26A0\uFE0F China PSU tariff stack: 45% current rate on imported AC/DC power supplies (100electronics/bravoelectro, Apr 2026) + distributors raised 6-10% in Jan \u2014 expect further hikes in H2 2026. Watch Slickdeals — the $95 flash has already recurred once this month.',
      advice: '',
      sources: [
        { label: 'Best Buy', url: 'https://www.bestbuy.com/product/corsair-rme-series-rm850e-80-plus-gold-fully-modular-low-noise-atx-3-1-and-pcie-5-1-power-supply-black/J39QHT23VT' }
      ],
      buyLinks: [
        { store: '⭐ Newegg $111.90 May 10 (⚠️⚠️ DOWN $18 from $129.99 May 8 — 25% off $129.99 list, fresh price drop; sold/shipped by Newegg, limit 3; code SSF6437 still gone from product page \u2014 expired/built-in)', url: 'https://www.newegg.com/corsair-rmx-series-atx-3-1-compatible-850-w-cybenetics-gold-power-supply-black-rm850e/p/N82E16817139336' },
        { store: 'Amazon ~$125', url: 'https://www.amazon.com/CORSAIR-RM850e-Modular-Low-Noise-12V-2x6/dp/B0DPR86ZC8' }
      ]
    },
    {
      id: 'rm1000e',
      name: 'Corsair RM1000e (ATX 3.1)',
      price: 170,
      wattage: 1000,
      recommended: false,
      notes: 'ATX 3.1, 1000W Gold, compact 140mm. Headroom for any GPU. Newegg $169.99 (10% off $189.99 MSRP, holds May 10 vs May 6/5 verified-live; up from $164.99 13%-off floor that ran through May 1, sale STILL ACTIVE for 9+ days). \u2b50 Pangoly tracker shows $149.99 current May 10 (RM1000e 2025 refresh) \u2014 UNVERIFIED at Newegg-direct, may be 3P spot or aggregator stale data; verify before treating as floor. Amazon ~$170. Best Buy ~$175. B&H ~$175. \u2B50 Per Newegg listing, GIGABYTE RTX 5080 WindForce OC May 10 ships with FREE 1000W 80+ Gold PSU (combo holds since May 2 — 8 days) \u2014 if you\'re buying that GPU, skip a separate PSU here.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW', url: 'https://www.tomshardware.com/pc-components/power-supplies/corsair-rm1000e-atx-3-1-power-supply-review' }
      ],
      buyLinks: [
        { store: 'Amazon ~$170 (best!)', url: 'https://www.amazon.com/CORSAIR-RM1000e-Modular-Low-Noise-12V-2x6/dp/B0DPR5RZ1T' },
        { store: 'Best Buy ~$175', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=corsair+rm1000e' },
        { store: 'B&H ~$175', url: 'https://www.bhphotovideo.com/c/search?q=corsair+rm1000e' },
        { store: 'Newegg $169.99 (10% off $189.99 MSRP, holds May 10 — 9-day hold; up from $164.99 13%-off May 1)', url: 'https://www.newegg.com/corsair-rmx-series-atx-3-1-compatible-1000-w-cybenetics-gold-power-supply-black-rm1000e/p/N82E16817139337' }
      ]
    },
    {
      id: 'dp13-1000',
      name: 'be quiet! Dark Power 13 1000W Titanium',
      price: 250,
      wattage: 1000,
      recommended: false,
      notes: 'Titanium efficiency (95.2%), virtually silent, 10yr warranty. Amazon ~$230. \u26a0\ufe0f Newegg LIFTED to $249.90 May 13 (UP ~$15 from $234.90 May 10 floor that held 14 days since Apr 27 \u2014 28% off framing gone, now ~24% off $329.90 MSRP; sale narrowed but still discounted; sold/shipped by Newegg, limit 10/customer; QC verified via Newegg product page May 13). Best Buy $259.49 now ~$10 ABOVE Newegg, no longer ties. CompSource $237.62 (Mar 11 ref, possibly stale). Pangoly best price $229.90 (composite, may reflect 3P stock). Still ATX 3.0 (not 3.1 like Corsair units).',
      advice: '',
      sources: [
        { label: 'be quiet! Official', url: 'https://www.bequiet.com/en/powersupply/4046' }
      ],
      buyLinks: [
        { store: '⚠️ Newegg $249.90 May 13 (UP ~$15 from $234.90 May 10 floor that held 14 days since Apr 27; sale narrowed to ~24% off $329.90 MSRP, sold/shipped by Newegg, limit 10/customer; QC verified)', url: 'https://www.newegg.com/be-quiet-atx-3-0-compatible-1000-w-80-plus-titanium-certified-power-supplies-black/p/1HU-004H-000R8' },
        { store: 'Amazon ~$230', url: 'https://www.amazon.com/quiet-Titanium-Efficiency-Modular-Supply/dp/B0BV6CWS2Z' },
        { store: 'Best Buy ~$259', url: 'https://www.bestbuy.com/product/be-quiet-dark-power-13-1000w-atx-3-0-psu--80-plus-titanium--pcie-5-0--fully-digital-modular--10-year-warranty/CC5VXLQ2PY' }
      ]
    }
  ]
};
