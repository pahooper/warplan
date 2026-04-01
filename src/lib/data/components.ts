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
      advice: 'AT 4K: Only 1-5% behind 9800X3D because GPU is the bottleneck. Keeping it is valid IF your chip shows no instability. BUT: degradation risk is real, resale dropping fast \u2014 eBay sold ~$305-420 used (condition dependent). After fees (~13%) expect ~$265-365 net used. Platform is a dead end. \u26A0\uFE0F\u26A0\uFE0F SELL NOW: Arrow Lake Refresh launched Mar 26 to universally positive reviews. 270K Plus ($299 MSRP, ~$329-350 street) obliterates the value proposition of a used 14900K. \u26A0\uFE0F Intel confirmed 10-15% CPU price hikes effective April 2026 \u2014 new Intel chips getting more expensive, making your used 14900K slightly more competitive on price but still a dead-end platform. 250K Plus at $199 MSRP (~$220 street) also available. No 290K Plus coming (Intel confirmed scrapped). Resale will crater as Arrow Lake Refresh saturates shelves. Run stability benchmarks + screenshot results before listing (buyers are wary). Expected $200-250 by summer.',
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
      notes: '\u2B50 UNDISPUTED GAMING KING - 96MB 3D V-Cache, 30% faster than 14900K in gaming, runs cool at 120W. Amazon ~$420 (all-time low! $60 off MSRP), Micro Center $399 in-store ($379.99 w/ Insider card!), Newegg ~$464, Best Buy ~$479. Free Crimson Desert game ($69.99 value, launched Mar 19! Bundle thru Apr 25, redeem by May 23). 9850X3D ($499 MSRP, ~$492-500) only 3-7% faster \u2014 9800X3D remains the value king. Arrow Lake Refresh (270K Plus $299 MSRP, ~$330-350 street) launched Mar 26 to rave reviews but X3D still dominates gaming by 10-20%. AMD responding with price cuts \u2014 PCGamesN: "AMD CPU price cuts have already begun." \u2B50 5080 now at $999 MSRP makes this + 5080 combo the ultimate 4K build.',
      advice: 'BEST VALUE: ~$420 at Amazon (all-time low! $60 off MSRP) or $399 at Micro Center in-store ($379.99 w/ Insider card!) + free Crimson Desert ($69.99 value, now playable!) = ~$350 effective cost online, ~$310 at MC w/ card. After selling 14900K (~$300-375 on eBay used, net ~$261-326), net switch cost is ~$24-89 + mobo. AM5 platform lasts through 2027+ (Zen 6 "Medusa" desktop delayed to 2027, AM5 confirmed, up to 24 cores on TSMC 3nm/2nm). Arrow Lake Refresh launched Mar 26 \u2014 270K Plus ($299 MSRP, ~$349-357 street, selling 10-17% above MSRP due to demand) reviews stellar but X3D still dominates gaming by 10-20%. 270K Plus further crushes i9-14900K resale.',
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
        { store: 'Newegg ~$464', url: 'https://www.newegg.com/amd-ryzen-7-9000-series-ryzen-7-9800x3d-granite-ridge-zen-5-socket-am5-120w-desktop-cpu-processor/p/N82E16819113877' },
        { store: 'Best Buy $479', url: 'https://www.bestbuy.com/product/amd-ryzen-7-9800x3d-8-core-16-thread-4-7-ghz-5-2-ghz-max-boost-socket-am5-120w-unlocked-desktop-processor-silver/JXKQHH5XSR' }
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
      notes: '16 cores / 128MB cache - Ties 9800X3D in gaming but adds massive productivity power. Full overclocking support (first for X3D Ryzen 9). Micro Center ~$650 in-store (best!). Amazon ~$675. Newegg ~$699 w/ free MSI MAG Coreliquid 360 AIO (~$110 value!) + Crimson Desert ($69.99 value, thru Apr 25, redeem by May 23). Best Buy ~$699. \u26A0\uFE0F 9950X3D2 "Dual Edition" (208MB cache, dual V-Cache, 16c/32t, 4.3/5.6 GHz, 200W TDP) confirmed Apr 22 launch \u2014 5-10% uplift per AMD, price speculated $749-999. May push 9950X3D prices down further.',
      advice: 'OVERKILL: Only 0.4% faster than 9800X3D in gaming for $255 more ($675 vs $420). No streaming planned, so the extra cores are wasted. MC $650 is cheapest cash price. Amazon ~$675 best standalone online. Newegg ~$699 bundles a free $110 AIO cooler \u2014 decent if you need one. \u26A0\uFE0F WAIT: 9950X3D2 "Dual Edition" (208MB cache!) drops Apr 22 \u2014 will likely push this chip\'s price down further. The 9800X3D at $420 ($399 MC) + the same free game is the smarter buy for pure gaming.',
      whyNot: 'Within 1-3% of 9800X3D in gaming. No streaming = no use for 16 cores. The $200 premium buys nothing for your use case.',
      benchmarks: { ffxiv: 373, baldurs: 155, starfield: 171, cyberpunk: 219 },
      sources: [
        { label: 'GamersNexus: 9950X3D Review', url: 'https://gamersnexus.net/cpus/amd-ryzen-9-9950x3d-cpu-review-benchmarks-vs-9800x3d-285k-9950x-more' },
        { label: 'Tom\'s HW: 9950X3D Review', url: 'https://www.tomshardware.com/pc-components/cpus/amd-ryzen-9-9950x3d-review' }
      ],
      buyLinks: [
        { store: 'Amazon ~$675 (best standalone!)', url: 'https://www.amazon.com/dp/B0DVZSG8D5' },
        { store: 'Micro Center ~$650 in-store (cheapest!)', url: 'https://www.microcenter.com/product/691349/amd-ryzen-9-9950x3d-granite-ridge-am5-430ghz-16-core-boxed-processor-heatsink-not-included' },
        { store: 'Newegg ~$675-699 (free AIO cooler + Crimson Desert!)', url: 'https://www.newegg.com/amd-ryzen-9-9000-series-ryzen-9-9950x3d-granite-ridge-socket-am5-desktop-cpu-processor/p/N82E16819113884' }
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
      notes: '\u26A0\uFE0F QUASI-EOL \u2014 ASUS told retailers production ended, then denied it; NVIDIA says "not EOL" but GDDR7 shortage has effectively halted restocking. NVIDIA cutting gaming GPU production 30-40% in H1 2026 \u2014 5070 Ti is FIRST target for cuts. 50 SUPER lineup officially on hold \u2014 no new NVIDIA gaming GPUs in 2026; RTX 60-series pushed to 2028 (Tom\'s HW). \u2B50 MSRP $749 models still available at Micro Center ($999.99 for MSI Shadow 3X on sale). Newegg $999 floor (ASUS PRIME, MSI Ventus 3X, Zotac Solid OC). Amazon ~$1,069. ~54fps avg native 4K, DLSS 4 MFG boosts to 120-280fps. DLSS 4.5 Dynamic MFG 6x launched Mar 31 \u2014 Dynamic mode auto-targets 160Hz, 6x mode for path-traced titles.',
      advice: '\u26A0\uFE0F QUASI-EOL BUT STILL AVAILABLE: $999 models at Newegg (ASUS PRIME, MSI Ventus, Zotac Solid). At $999, the value calc has shifted \u2014 5080 street price rose to $1,230+ (MC sale) / $1,249 (Amazon), so the 5070 Ti is now $230-250 LESS for 15-18% less perf. Better value gap than before. If $1,230+ for the 5080 is too steep, the 5070 Ti at $999 is a solid 4K card with DLSS 4.5 Dynamic MFG 6x (launched Mar 31). Supply drying up \u2014 buy sooner rather than later.',
      whyNot: 'Native 4K performance averages ~54fps. Needs DLSS 4 MFG to hit 160Hz, and not all games support it yet. 16GB VRAM may limit future 4K titles. The 5080 at ~$1,230 is 15-18% faster \u2014 ~$230 more for a meaningful jump. Only buy if $1,230+ for the 5080 is out of range.',
      benchmarks: { cyberpunk_4k: 48, starfield_4k: 61, baldurs_4k: 64, ffxiv_4k: 97 },
      sources: [
        { label: 'GN: 5070 Ti Review', url: 'https://gamersnexus.net/gpus/do-not-buy-nvidia-rtx-5070-ti-gpu-absurdity-benchmarks-review' },
        { label: 'Tom\'s HW: 5070 Ti Review', url: 'https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5070-ti-review-asus' },
        { label: 'TechSpot: 5070 Ti Effectively Dead', url: 'https://www.techspot.com/news/110943-rtx-5070-ti-effectively-dead-gpu-market-worse.html' },
        { label: 'Tweaktown: Production Ended', url: 'https://www.tweaktown.com/news/109716/nvidia-has-reportedly-ended-geforce-rtx-5070-ti-production-and-its-now-end-of-life/index.html' },
        { label: 'NotebookCheck: 5070 Ti Supply Crisis', url: 'https://www.notebookcheck.net/Asus-confirms-RTX-5070-Ti-is-now-discontinued-as-Nvidia-effectively-kills-Blackwell-16-GB-midrange-RTX-5060-Ti-16-GB-next-on-the-chopping-block.1204994.0.html' }
      ],
      buyLinks: [
        { store: 'Micro Center $999 (MSI Shadow 3X on sale)', url: 'https://www.microcenter.com/search/search_results.aspx?Ntt=rtx+5070+ti' },
        { store: 'Newegg ~$999-1,169 (ASUS PRIME $999)', url: 'https://www.newegg.com/p/pl?d=rtx+5070+ti' },
        { store: 'Best Buy ~$1,000+', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=rtx+5070+ti' },
        { store: 'Amazon ~$1,069+', url: 'https://www.amazon.com/s?k=rtx+5070+ti' }
      ]
    },
    {
      id: '5080',
      name: 'NVIDIA RTX 5080 16GB',
      price: 1230,
      vram: 16,
      recommended: true,
      perf4k: 90,
      tdp: 360,
      notes: '\u2B50 SWEET SPOT FOR 4K@160Hz - DLSS 4 MFG turns 68fps native into 238fps in Cyberpunk. \u26A0\uFE0F $999 MSRP models NO LONGER AVAILABLE \u2014 street prices have risen significantly. Micro Center $1,230 (PNY EPIC-X RGB, $170 off sale!). Amazon ~$1,249 (Zotac Solid Core OC, cheapest online). Newegg ~$1,299+ (Zotac Solid Core OC). Best Buy ~$1,260+. \u26A0\uFE0F GDDR7 shortage + NVIDIA 30-40% production cuts, but 5080 is NVIDIA\'s PRIORITY 16GB card \u2014 better supply outlook than 5070 Ti. 50 SUPER officially on hold \u2014 no new NVIDIA gaming GPUs in 2026; RTX 60-series pushed to 2028. DLSS 4.5 Dynamic MFG 6x launched Mar 31 \u2014 6x frame gen, auto-adapts to your 160Hz target.',
      advice: 'RECOMMENDED: Best realistic path to 160Hz@4K. \u26A0\uFE0F BUT prices have risen \u2014 $999 MSRP no longer available at any major retailer. Best deal: Micro Center $1,230 in-store (PNY EPIC-X RGB, $170 off). Online floor: Amazon $1,249 (Zotac Solid Core OC). At $1,230-1,249, still 15-18% faster than 5070 Ti ($999 street) \u2014 worth it for native 4K headroom if you can stomach the markup. NVIDIA prioritizing 5080 production over 5070 Ti = better supply outlook. DLSS 4.5 Dynamic MFG 6x launched Mar 31 \u2014 generates 5 extra frames per real frame, auto-adapts to your 160Hz monitor. 20+ new path-traced titles announced at GDC 2026. No SUPER refresh coming \u2014 this is the card to buy.',
      why: 'DLSS 4 MFG generates up to 3 extra frames per real frame. Cyberpunk goes from 68fps native to 238fps. Best value path to 160Hz@4K, 15-18% faster than the 5070 Ti. DLSS 4.5 Dynamic MFG 6x launched Mar 31 \u2014 generates 5 extra frames per real frame, auto-adjusts to match your 160Hz monitor. No SUPER refresh coming. NVIDIA prioritizing 5080 production over 5070 Ti \u2014 best supply outlook in the Blackwell lineup.',
      benchmarks: { cyberpunk_4k: 68, starfield_4k: 71, baldurs_4k: 85, ffxiv_4k: 112 },
      sources: [
        { label: 'GN: RTX 5080 Review', url: 'https://gamersnexus.net/gpus/nvidia-geforce-rtx-5080-founders-edition-review-benchmarks-vs-5090-7900-xtx-4080-more' },
        { label: 'Tom\'s HW: 5080 Review', url: 'https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5080-review/4' },
        { label: 'TechSpot: 5080 Review', url: 'https://www.techspot.com/review/2947-nvidia-geforce-rtx-5080/' },
        { label: 'JayzTwoCents: "OC Monster"', url: 'https://www.pcguide.com/news/rtx-5080-dubbed-overclocking-monster-by-jayztwocents-its-like-a-whole-nother-tier-with-oc/' },
        { label: 'NVIDIA: DLSS 4.5 Announcement', url: 'https://www.nvidia.com/en-us/geforce/news/dlss-4-5-dynamic-multi-frame-gen-6x-2nd-gen-transformer-super-res/' }
      ],
      buyLinks: [
        { store: 'Micro Center $1,230 (PNY EPIC-X RGB, $170 off!)', url: 'https://www.microcenter.com/search/search_results.aspx?Ntt=rtx+5080' },
        { store: 'Amazon ~$1,249 (Zotac Solid Core OC)', url: 'https://www.amazon.com/s?k=rtx+5080' },
        { store: 'Newegg ~$1,299+ (Zotac Solid Core OC)', url: 'https://www.newegg.com/p/pl?d=rtx+5080' },
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
      notes: '\uD83D\uDC8E ABSOLUTE FASTEST GPU - 30-69% faster than 5080. 32GB GDDR7. \u26A0\uFE0F Street price RISING \u2014 floor now $3,799 (1.90x MSRP $1,999), up from ~$2,600 in Jan. ASUS TUF Gaming OC ~$3,799 (Newegg, cheapest new). Gigabyte Gaming OC ~$3,799. MSI Suprim ~$3,899. Premium/liquid-cooled AIBs $4,000-5,000+. Best Buy FE $1,999 sells out in minutes. eBay used ~$3,399. GDDR7 shortage structural \u2014 NVIDIA confirmed supply constraints through fiscal 2027. No SUPER refresh coming \u2014 no new NVIDIA gaming GPUs in 2026; RTX 60-series pushed to 2028. \u26A0\uFE0F Prices predicted to continue rising to $4,000-4,400 by Q4 2026. DLSS 4.5 Dynamic MFG 6x launched Mar 31.',
      advice: 'OVERKILL: ~150fps native 4K avg. Floor now $3,799 (up from ~$2,910 last month) \u2014 still 3.1x the 5080 ($1,230) for 30-60% more perf. The 5080 with DLSS 4 MFG hits the same 160Hz target at a third of the price. \u26A0\uFE0F Prices actively RISING \u2014 predicted $4,000-4,400 by Q4 2026.',
      whyNot: 'Street price is 1.90x MSRP and rising. 575W TDP needs 1000W PSU. The 5080 with DLSS 4 MFG reaches the same 160Hz@4K target at ~$1,230.',
      benchmarks: { cyberpunk_4k: 150, starfield_4k: 108, baldurs_4k: 133, ffxiv_4k: 182 },
      sources: [
        { label: 'GN: RTX 5090 Review', url: 'https://gamersnexus.net/gpus/nvidia-geforce-rtx-5090-founders-edition-review-benchmarks-gaming-thermals-power' },
        { label: 'DSO: 20-Game 4K Benchmark', url: 'https://www.dsogaming.com/articles/nvidia-rtx-5090-vs-rtx-4090-native-4k-gaming-benchmarks/' },
        { label: 'Tom\'s HW: 5090 Coverage', url: 'https://www.tomshardware.com/tag/rtx-5090' }
      ],
      buyLinks: [
        { store: 'Newegg ~$3,799 (ASUS TUF OC, cheapest new)', url: 'https://www.newegg.com/p/pl?d=rtx+5090' },
        { store: 'Amazon ~$3,799+', url: 'https://www.amazon.com/s?k=rtx+5090' },
        { store: 'Best Buy FE $1,999 (sells out in minutes)', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=rtx+5090' },
        { store: 'Micro Center ~$3,799+ (limited)', url: 'https://www.microcenter.com/search/search_results.aspx?Ntt=rtx+5090' }
      ]
    }
  ],
  motherboard: [
    {
      id: 'z790-tomahawk',
      name: 'MSI MAG Z790 Tomahawk MAX WiFi',
      price: 275,
      socket: 'LGA1700',
      recommended: false,
      notes: 'Solid Z790 for Intel - 16+1+1 VRM with 90A stages, WiFi 7, handles even LN2 overclocking. Amazon ~$275 (price drop!), Newegg ~$275, Best Buy ~$300. MSI Store $374 (OOS). LGA1700 platform is EOL with Arrow Lake (LGA1851) as current gen \u2014 prices declining as Intel shifts to LGA1851.',
      advice: 'FOR i9-14900K: At ~$275, now $35 more than the X870 Tomahawk ($240) which has a platform future. Dead-end platform. Only makes sense if keeping the 14900K, and at this price even that is questionable \u2014 Arrow Lake Refresh (270K Plus $299 MSRP) on LGA1851 is the better Intel path.',
      sources: [
        { label: 'PC Gamer Review', url: 'https://www.pcgamer.com/msi-mag-z790-tomahawk-max-wifi-motherboard-review/' },
        { label: 'OC3D Review', url: 'https://overclock3d.net/reviews/cpu_mainboard/msi-mag-z790-tomahawk-max-review/4/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$275 (price drop!)', url: 'https://www.amazon.com/MSI-MAG-Z790-Tomahawk-WiFi/dp/B0CJSL89T2' },
        { store: 'Best Buy ~$300', url: 'https://www.bestbuy.com/product/msi-mag-z790-tomahawk-max-wifi-socket-lga-1700-intel-z790-atx-ddr5-wi-fi-7-motherboard-black/J3P7TXY677' },
        { store: 'Micro Center', url: 'https://www.microcenter.com/product/661313/msi-z790-mag-tomahawk-wifi-intel-lga-1700-atx-motherboard' },
        { store: 'Amazon', url: 'https://www.amazon.com/MSI-MAG-Z790-Motherboard-Processors/dp/B0BL8K1YH1' }
      ]
    },
    {
      id: 'x870-tomahawk',
      name: 'MSI MAG X870 Tomahawk WiFi',
      price: 240,
      socket: 'AM5',
      recommended: true,
      notes: '\u2B50 SWEET SPOT AM5 - WiFi 7, 5GbE, PCIe 5.0 M.2, 8-layer server-grade PCB. The 9800X3D doesn\'t need more. Amazon ~$240, MSI Store $239.99 (tied for best!), Best Buy ~$254, Newegg ~$290 after rebate (went up from ~$257 \u2014 buy elsewhere).',
      advice: 'RECOMMENDED: ~$240 at Amazon or MSI Store direct (tied for cheapest). AM5 with WiFi 7 + 5GbE + upgrade path through 2027+ (Zen 6 "Medusa" desktop delayed to 2027, AM5 confirmed). The 9800X3D doesn\'t need a $500 board. $35 less than Z790 Tomahawk (~$275) AND has a platform future.',
      sources: [
        { label: 'The FPS Review', url: 'https://www.thefpsreview.com/2025/02/04/msi-mag-x870-tomahawk-wifi-motherboard-review/' },
        { label: 'KitGuru Review', url: 'https://www.kitguru.net/components/motherboard/leo-waldock/msi-mag-x870-tomahawk-review/' }
      ],
      buyLinks: [
        { store: 'MSI Store $239.99 (best!)', url: 'https://us-store.msi.com/MAG-X870-TOMAHAWK-WIFI' },
        { store: 'Best Buy ~$254 (price drop!)', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=msi+x870+tomahawk' },
        { store: 'Amazon ~$240 (price drop!)', url: 'https://www.amazon.com/MSI-Tomahawk-Motherboard-Processors-Bluetooth/dp/B0DG3HK897' },
        { store: 'Newegg ~$290 (after $10 rebate)', url: 'https://www.newegg.com/p/pl?d=msi+x870+tomahawk' }
      ]
    },
    {
      id: 'b650-tomahawk',
      name: 'MSI MAG B650 Tomahawk WiFi',
      price: 176,
      socket: 'AM5',
      recommended: false,
      notes: 'Budget AM5 - 14+2+1 VRM is plenty for 9800X3D. PCWorld: "leaves very little on the table". Amazon ~$197, Micro Center ~$176 in-store (unverified \u2014 may vary), Best Buy ~$220 (price drop from $261!).',
      advice: 'VALUE PICK: Amazon ~$197 is $43 less than X870 Tomahawk ($240). Loses WiFi 7 and PCIe 5.0 M.2. At $197 online, the $43 gap vs X870 Tomahawk ($240) makes the B650 a value option \u2014 but X870\'s WiFi 7 + 5GbE + PCIe 5.0 M.2 are arguably worth $43 more. Best at Micro Center in-store pricing (~$176).',
      sources: [
        { label: 'PCWorld Review', url: 'https://www.pcworld.com/article/1522279/msi-mag-b650-tomahawk-wifi-motherboard-review.html' },
        { label: 'HWCooling Review', url: 'https://www.hwcooling.net/en/msi-mag-b650-tomahawk-wifi-the-cheapest-of-the-decent-ones-review/' }
      ],
      buyLinks: [
        { store: 'Micro Center $176 in-store', url: 'https://www.microcenter.com/product/659662/msi-b650-mag-tomahawk-wifi-amd-am5-atx-motherboard' },
        { store: 'Amazon ~$197', url: 'https://www.amazon.com/MSI-B650-Tomahawk-Motherboard-Processors/dp/B0BHCCNSRH' },
        { store: 'Best Buy ~$220', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=msi+b650+tomahawk' }
      ]
    },
    {
      id: 'x870e-strix',
      name: 'ASUS ROG Strix X870E-E Gaming WiFi',
      price: 362,
      socket: 'AM5',
      recommended: false,
      notes: 'Premium AM5 - 5x M.2 (3x PCIe 5.0), WiFi 7, 5GbE, USB4. Best-in-class. \uD83D\uDC8E Amazon ~$362-400 (price fluctuates). Newegg ~$441 (3P sellers), ~$435 Best Buy. ASUS eShop $500 MSRP. \u26A0\uFE0F Price stabilized from $699 spike in Feb 2026. ASUS offering $30 Steam code with ASUS eShop purchase (thru May 31, 2026).',
      advice: 'PREMIUM: ~$362-400 at Amazon (27% off $500 MSRP at best!). $30 ASUS Steam code available but only if purchased from ASUS eShop (thru May 31) = ~$470 effective from eShop vs ~$362-400 from Amazon. Buy from Amazon unless you really want the Steam code. Still $122-160 more than X870 Tomahawk ($240) for USB4, 5x M.2, premium VRMs. Hard to justify for a 9800X3D gaming build, but a solid price for this board.',
      sources: [
        { label: 'Tom\'s HW Review (4/5)', url: 'https://www.tomshardware.com/pc-components/motherboards/asus-rog-strix-x870e-e-gaming-wifi-review' },
        { label: 'PC Guide Review', url: 'https://www.pcguide.com/motherboard/review/asus-rog-strix-x870e-e-gaming-wifi/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$362-400 (best!)', url: 'https://www.amazon.com/dp/B0DGFKN5HV' },
        { store: 'Newegg ~$441 (3P)', url: 'https://www.newegg.com/asus-rog-strix-x870e-e-gaming-wifi-atx-motherboard-amd-x870e-am5/p/N82E16813119682' }
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
      notes: '\u2B50 BEST VALUE - AMD EXPO certified. DDR5-6000 is the AM5 sweet spot (1:1 Infinity Fabric). Amazon ~$359 (best!). Newegg ~$450. \u26A0\uFE0F DDR5 prices still elevated due to AI demand \u2014 data centers consuming 70% of all memory chips. Micron exited consumer RAM entirely \u2014 only Samsung & SK Hynix remain. March 2026 saw first 7.2% decline after 6 months of growth \u2014 peak may be behind us but shortage expected through 2028. Pre-crisis this kit was $76 \u2014 current $359 is 4.7x.',
      advice: '32GB is all you need for gaming (AAA uses ~20GB max). CL36 vs CL30 is ~1-2% gaming difference. Amazon ~$359 is the best price right now. DDR5 prices plateauing \u2014 minor 1-2% natural volatility, not a real decline. Real decreases not expected until H2 2026. Micron leaving consumer RAM means supply stays tight. Still ~4.7x pre-crisis pricing ($76). SK Group chairman says memory shortage will last until 2030.',
      sources: [
        { label: 'PC Gamer: Best RAM 2026', url: 'https://www.pcgamer.com/best-ram-for-gaming/' },
        { label: 'TechRadar: DDR5 Deal w/ Promo', url: 'https://www.techradar.com/pro/ram-prices-are-sky-high-but-you-can-take-usd80-off-this-32gb-g-skill-trident-z5-rgb-ddr5-6000-kit-right-now-using-a-promo-code-at-newegg' }
      ],
      buyLinks: [
        { store: 'Amazon ~$359 (best!)', url: 'https://www.amazon.com/G-Skill-288-Pin-CL36-36-36-96-Channel-F5-6000J3636F16GX2-FX5/dp/B0BFGB2D2Z' },
        { store: 'Newegg ~$450', url: 'https://www.newegg.com/g-skill-flare-x5-32gb-ddr5-6000-cas-latency-cl36-desktop-memory-black/p/N82E16820374419' },
        { store: 'Walmart ~$410', url: 'https://www.walmart.com/search?q=g.skill+flare+x5+ddr5+6000' }
      ]
    },
    {
      id: 'ddr5-32gb-6000-cl30',
      name: '32GB DDR5-6000 CL30 (Kingston FURY Beast)',
      price: 474,
      capacity: 32,
      recommended: false,
      notes: 'Tighter CL30 timings for ~1-2% more gaming perf. AMD EXPO + Intel XMP 3.0 certified. Price volatile during DDR5 shortage \u2014 Amazon ~$474, Newegg ~$519, Best Buy ~$480. DDR5 prices plateauing but not declining \u2014 minor 1-2% natural volatility, real decreases not expected until H2 2026.',
      advice: 'PREMIUM TIMINGS: CL30 is technically optimal but ~$115 more than CL36 ($474 vs $359) for 1-2% real-world difference. The CL30 premium is harder to justify with Flare X5 CL36 at $359. Stick with CL36 unless you want every last frame.',
      sources: [
        { label: 'PC Gamer: Best RAM 2026', url: 'https://www.pcgamer.com/best-ram-for-gaming/' },
        { label: 'TechRadar: Best DDR5', url: 'https://www.techradar.com/computing/best-ddr5-ram' }
      ],
      buyLinks: [
        { store: 'Amazon ~$474 (best!)', url: 'https://www.amazon.com/Kingston-2x16GB-6000MT-Desktop-KF560C30BBEAK2-32/dp/B0CYM58GFS' },
        { store: 'Newegg ~$519 (big drop from $671!)', url: 'https://www.newegg.com/p/pl?d=32gb+ddr5+6000mhz+cl30' },
        { store: 'Best Buy ~$480', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=kingston+fury+beast+ddr5+6000+cl30' }
      ]
    },
    {
      id: 'ddr5-64gb-6000',
      name: '64GB DDR5-6000 (G.Skill Trident Z5 Neo)',
      price: 880,
      capacity: 64,
      recommended: false,
      notes: '\u26A0\uFE0F\u26A0\uFE0F SEVERE SHORTAGE (but easing) - 64GB DDR5 now ~$880 at Amazon (down from $983 \u2014 possible TurboQuant effect!), ~$950 at Newegg. Google TurboQuant (announced Mar 24) reduces AI memory usage by 6x, spooked DRAM market \u2014 select DDR5 kits dropped 20%+ in US retail. But analysts split on whether relief is structural or temporary. Tom\'s HW: "64GB of DDR5 now costs more than an entire PS5." Pre-crisis this kit was $193 \u2014 current price is ~4.6x. Shortage expected until Q4 2027 at earliest.',
      advice: 'OVERKILL FOR GAMING: Games use ~20GB max. You\'re paying ~$521-591 extra over 32GB ($880-950 vs $359) for capacity you\'ll never touch in games. Price easing from peak ($1,077) to ~$880 at Amazon (10% drop post-TurboQuant). Consider 32GB now + upgrade later when prices normalize \u2014 TurboQuant may signal that the DDR5 shortage is peaking.',
      sources: [
        { label: 'Tom\'s HW: "More than a PS5"', url: 'https://www.tomshardware.com/pc-components/ddr5/64gb-of-ddr5-memory-now-costs-more-than-an-entire-ps5-even-after-a-discount-trident-z5-neo-kit-jumps-to-usd600-due-to-dram-shortage-and-its-expected-to-get-worse-into-2026' }
      ],
      buyLinks: [
        { store: 'Amazon ~$880 (best! dropped from $983)', url: 'https://www.amazon.com/s?k=g.skill+trident+z5+neo+64gb+ddr5+6000' },
        { store: 'Newegg ~$950', url: 'https://www.newegg.com/g-skill-trident-z5-neo-rgb-series-64gb-ddr5-6000-cas-latency-cl30-desktop-memory-black/p/N82E16820374445' }
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
      notes: 'Updated V2 of GN\'s "The Champ" air cooler. Amazon ~$33 (15% off sale!). Dual-tower, 6 heatpipes, AGHP Gen 5.0, rated to 265W TDP. Supports LGA 1851/1700 and AM5.',
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
      notes: 'Premium AIO - Corsair FlowDrive pump, hot-swap caps, iCUE ecosystem integration. LCD variant available at ~$250+. Amazon ~$191, Newegg ~$200. Price volatile in 2026 \u2014 ranged $140-322.',
      advice: 'LUXURY: ~$191 online for similar performance to the $89 Arctic (2.1x the price). Buy for the iCUE ecosystem and looks, not for thermals.',
      sources: [
        { label: 'PC Gamer Review', url: 'https://www.pcgamer.com/hardware/cooling/corsair-icue-link-titan-360-rx-lcd-review/' },
        { label: 'XDA Review', url: 'https://www.xda-developers.com/corsair-icue-link-titan-360-rx-rgb-review/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$191 (best!)', url: 'https://www.amazon.com/CORSAIR-iCUE-Titan-Liquid-Cooler/dp/B0D6BFBLTK' },
        { store: 'Newegg ~$200', url: 'https://www.newegg.com/corsair-icue-link-titan-360-rx-rgb/p/N82E16835181400' }
      ]
    }
  ],
  storage: [
    {
      id: 'ssd-2tb-budget',
      name: '2TB Crucial P310',
      price: 214,
      recommended: true,
      notes: '\u2B50 BEST VALUE SSD - Gen4 speeds at nearly half the 990 Pro price. Gaming load times are identical. \u26A0\uFE0F NAND CRISIS: Amazon ~$214 (crept up again from $201), Best Buy ~$260, Newegg ~$290. Prices volatile \u2014 spiked to $400 in Feb 2026. Was $94 in mid-2025. NAND costs up 246% per Kingston, all 2026 production sold out (Phison CEO). Tom\'s HW: "pricing apocalypse through 2027." Q1 2026 NAND prices up 33-38% QoQ (TrendForce). No relief until late 2027. Buy ASAP \u2014 prices only going up.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: P310 Review', url: 'https://www.tomshardware.com/reviews/crucial-p310-ssd-review' }
      ],
      buyLinks: [
        { store: 'Amazon ~$214 (best!)', url: 'https://www.amazon.com/Crucial-P310-2280-PCIe-Gen4/dp/B0DC8RVRBZ' },
        { store: 'Best Buy ~$260', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=crucial+p310+2tb' },
        { store: 'Newegg ~$290', url: 'https://www.newegg.com/crucial-2tb-p310-nvme/p/N82E16820156413' }
      ]
    },
    {
      id: 'ssd-2tb',
      name: '2TB Samsung 990 Pro',
      price: 389,
      recommended: false,
      notes: 'Best Gen4 SSD. 7,450 MB/s read. Was $133 \u2014 NAND shortage has nearly tripled the price. Newegg ~$389, Amazon ~$400 (1P, varies by seller), Best Buy ~$440. \u26A0\uFE0F Prices stabilized from Feb peaks ($720 spike) but still nearly 3x the $133 mid-2025 low. Volatile \u2014 check at purchase time.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: 990 Pro Review', url: 'https://www.tomshardware.com/reviews/samsung-990-pro-ssd-review' }
      ],
      buyLinks: [
        { store: 'Newegg ~$389 (w/ rebate)', url: 'https://www.newegg.com/samsung-2tb-990-pro-nvme-2-0/p/N82E16820147861' },
        { store: 'Amazon ~$391 (1P) / ~$335 (3P)', url: 'https://www.amazon.com/SAMSUNG-Internal-Expansion-MZ-V9P2T0B-AM/dp/B0BHJJ9Y77' },
        { store: 'Best Buy ~$440', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=samsung+990+pro+2tb' }
      ]
    },
    {
      id: 'ssd-4tb',
      name: '4TB Samsung 990 Pro',
      price: 739,
      recommended: false,
      notes: 'Single-sided 4TB. Premium for capacity. \u26A0\uFE0F Extreme price volatility \u2014 hit $1,600 in Feb 2026. Currently ~$700+ Amazon (3P, best!), ~$739 Newegg. Was $250 in Nov 2023. Still ~2.5x the mid-2025 low.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: 990 Pro Review', url: 'https://www.tomshardware.com/reviews/samsung-990-pro-ssd-review' }
      ],
      buyLinks: [
        { store: 'Amazon ~$700+ (3P, best!)', url: 'https://www.amazon.com/s?k=samsung+990+pro+4tb' },
        { store: 'Newegg ~$739', url: 'https://www.newegg.com/samsung-4tb-990-pro-nvme-2-0/p/N82E16820147879' }
      ]
    }
  ],
  case: [
    {
      id: 'corsair-4000d-rs',
      name: 'Corsair Frame 4000D RS',
      price: 100,
      recommended: true,
      notes: '\u2B50 Includes 3 fans! Great airflow, clean cable management, InfiniRail fan mounting. GN: "Corsair Remembered How to Make a Case." Amazon ~$100, Corsair $100. ARGB variant ~$125. White model hit $73 on Amazon in Feb \u2014 set price alerts.',
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
      price: 124,
      recommended: false,
      notes: 'Stunning wood+mesh design. Great airflow despite aesthetic focus. \u2B50 Big Spring Sale! Amazon ~$124, Best Buy ~$124, Newegg ~$124 (now participating in sale! was $155). B&H ~$126. Sale price temporary.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW Review', url: 'https://www.tomshardware.com/reviews/fractal-design-north' }
      ],
      buyLinks: [
        { store: 'Newegg ~$124 (Big Spring Sale!)', url: 'https://www.newegg.com/fractal-design-atx-mid-tower-steel-case-charcoal-black-fd-c-nor1c-01/p/N82E16811352203' },
        { store: 'B&H ~$126', url: 'https://www.bhphotovideo.com/c/search?q=fractal+design+north' },
        { store: 'Amazon ~$124 (Big Spring Sale!)', url: 'https://www.amazon.com/s?k=fractal+design+north+case' }
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
      notes: 'ATX 3.1 (2025 refresh), native 12V-2x6, PCIe 5.1, 7yr warranty. Best Buy ~$125, Amazon ~$125, Newegg ~$145 base (code BUSF536 for additional savings!). Good for 9800X3D + 5080.',
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
      notes: 'ATX 3.1, 1000W Gold, compact 140mm. Headroom for any GPU. Amazon ~$170 (best!), Best Buy ~$175, Newegg ~$190. B&H ~$175.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW', url: 'https://www.tomshardware.com/pc-components/power-supplies/corsair-rm1000e-atx-3-1-power-supply-review' }
      ],
      buyLinks: [
        { store: 'Amazon ~$170 (best!)', url: 'https://www.amazon.com/CORSAIR-RM1000e-Modular-Low-Noise-12V-2x6/dp/B0DPR5RZ1T' },
        { store: 'Best Buy ~$175', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=corsair+rm1000e' },
        { store: 'B&H ~$175', url: 'https://www.bhphotovideo.com/c/search?q=corsair+rm1000e' },
        { store: 'Newegg ~$190', url: 'https://www.newegg.com/corsair-rmx-series-atx-3-1-compatible-1000-w-cybenetics-gold-power-supply-black-rm1000e/p/N82E16817139337' }
      ]
    },
    {
      id: 'dp13-1000',
      name: 'be quiet! Dark Power 13 1000W Titanium',
      price: 235,
      wattage: 1000,
      recommended: false,
      notes: 'Titanium efficiency (95.2%), virtually silent, 10yr warranty. Newegg ~$235 (28% off $330 MSRP, lowest in 30 days!), Amazon ~$237-249. ATX 3.0 compliant (not 3.1 like Corsair units).',
      advice: '',
      sources: [
        { label: 'be quiet! Official', url: 'https://www.bequiet.com/en/powersupply/4046' }
      ],
      buyLinks: [
        { store: 'Newegg ~$235 (best! 28% off)', url: 'https://www.newegg.com/be-quiet-atx-3-0-compatible-1000-w-80-plus-titanium-certified-power-supplies-black/p/1HU-004H-000R8' },
        { store: 'Amazon ~$249', url: 'https://www.amazon.com/quiet-Titanium-Efficiency-Modular-Supply/dp/B0BV6CWS2Z' }
      ]
    }
  ]
};
