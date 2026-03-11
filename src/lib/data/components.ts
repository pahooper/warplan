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
      notes: '\u26A0\uFE0F DEGRADATION RISK - Intel confirmed voltage bugs causing permanent silicon damage. Microcode fixes PREVENT new damage but can\'t REVERSE existing damage. Intel extended warranty to 5 years.',
      advice: 'AT 4K: Only 1-5% behind 9800X3D because GPU is the bottleneck. Keeping it is valid IF your chip shows no instability. BUT: degradation risk is real, resale dropping \u2014 eBay asking ~$305 used, ~$375 new. After fees expect ~$265-320. Platform is a dead end. \u26A0\uFE0F Arrow Lake Refresh reviews embargo lifts Mar 23. 290K Plus cancelled but 270K Plus ($357) still pressures resale. Sell BEFORE Mar 23 \u2014 reviews will remind buyers LGA1700 is dead. Expected $250-300 by summer.',
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
      price: 461,
      socket: 'AM5',
      recommended: true,
      owned: false,
      perf4k: 95,
      tdp: 120,
      notes: '\u2B50 UNDISPUTED GAMING KING - 96MB 3D V-Cache, 30% faster than 14900K in gaming, runs cool at 120W. Amazon ~$461 (crept up from $449). 9850X3D refresh ($499, 5.6GHz boost) launched Jan 29 but 9800X3D remains the value king.',
      advice: 'BEST VALUE: ~$461 on Amazon, $479 at Best Buy/Newegg. After selling 14900K (~$305), net switch cost is ~$156 + mobo. AM5 platform lasts through 2027+ (Zen 6 & Zen 7 confirmed AM5).',
      why: 'Every major reviewer (GN, Tom\'s HW, TechSpot, PC Gamer) agrees: this is THE gaming CPU. 96MB 3D V-Cache gives it an insurmountable gaming advantage.',
      benchmarks: { ffxiv: 380, baldurs: 160, starfield: 169, cyberpunk: 219 },
      sources: [
        { label: 'GamersNexus: Full Review', url: 'https://gamersnexus.net/cpus/rip-intel-amd-ryzen-7-9800x3d-cpu-review-benchmarks-vs-7800x3d-285k-14900k-more' },
        { label: 'Tom\'s HW: "Devastating Performance"', url: 'https://www.tomshardware.com/pc-components/cpus/amd-ryzen-7-9800x3d-review-devastating-gaming-performance' },
        { label: 'PC Gamer: Best Gaming CPU', url: 'https://www.pcgamer.com/best-cpu-for-gaming/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$461', url: 'https://www.amazon.com/AMD-9800X3D-16-Thread-Desktop-Processor/dp/B0DKFMSMYK' },
        { store: 'Best Buy $479', url: 'https://www.bestbuy.com/product/amd-ryzen-7-9800x3d-8-core-16-thread-4-7-ghz-5-2-ghz-max-boost-socket-am5-120w-unlocked-desktop-processor-silver/JXKQHH5XSR' },
        { store: 'Newegg $479 + free game bundle', url: 'https://www.newegg.com/amd-ryzen-7-9000-series-ryzen-7-9800x3d-granite-ridge-zen-5-socket-am5-desktop-cpu-processor/p/N82E16819113877' }
      ]
    },
    {
      id: 'r9-9950x3d',
      name: 'AMD Ryzen 9 9950X3D',
      price: 644,
      socket: 'AM5',
      recommended: false,
      owned: false,
      perf4k: 96,
      tdp: 170,
      notes: '16 cores / 128MB cache - Ties 9800X3D in gaming but adds massive productivity power. Full overclocking support (first for X3D Ryzen 9). $644 at Newegg w/ code ASF72. Micro Center $649.99 in-store.',
      advice: 'OVERKILL: Only 0.4% faster than 9800X3D in gaming for $195 more ($644 vs $449). No streaming planned, so the extra cores are wasted. Skip this.',
      whyNot: 'Within 1-3% of 9800X3D in gaming. No streaming = no use for 16 cores. The $200 premium buys nothing for your use case.',
      benchmarks: { ffxiv: 373, baldurs: 155, starfield: 171, cyberpunk: 219 },
      sources: [
        { label: 'GamersNexus: 9950X3D Review', url: 'https://gamersnexus.net/cpus/amd-ryzen-9-9950x3d-cpu-review-benchmarks-vs-9800x3d-285k-9950x-more' },
        { label: 'Tom\'s HW: 9950X3D Review', url: 'https://www.tomshardware.com/pc-components/cpus/amd-ryzen-9-9950x3d-review' }
      ],
      buyLinks: [
        { store: 'Newegg $644 (code: ASF72)', url: 'https://www.newegg.com/amd-ryzen-9-9000-series-ryzen-9-9950x3d-granite-ridge-socket-am5-desktop-cpu-processor/p/N82E16819113884' },
        { store: 'Amazon ~$675', url: 'https://www.amazon.com/dp/B0DVZSG8D5' }
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
      notes: '\u26A0\uFE0F EFFECTIVELY DISCONTINUED \u2014 ASUS called it end-of-life, NVIDIA halted production due to GDDR7 shortage. All GDDR7 supply redirected to AI accelerators. ASUS later walked back "EOL" label but confirmed production paused due to memory supply constraints. Street price ~$999 on Amazon, $999-1,300+ on Newegg. Inventory is drying up \u2014 once remaining stock sells, it\'s gone. ~54fps avg native 4K, DLSS 4 MFG boosts to 120-280fps. GN says "Do Not Buy" at inflated prices.',
      advice: 'DO NOT BUY: Production halted, stock dwindling. At $999 street price it matches the 5080\'s MSRP \u2014 and the 5080 is 12-16% faster at 4K. Remaining inventory will only get more expensive as supply dries up. AMD RX 9070 XT at $630-730 offers comparable raster perf (no DLSS/MFG). If you want DLSS 4, get the 5080 at the same price.',
      whyNot: 'Native 4K performance averages ~54fps. Needs DLSS 4 MFG to hit 160Hz, and not all games support it yet. 16GB VRAM may limit future 4K titles. At current $999+ street price, 5080 is the obvious choice.',
      benchmarks: { cyberpunk_4k: 48, starfield_4k: 61, baldurs_4k: 64, ffxiv_4k: 97 },
      sources: [
        { label: 'GN: 5070 Ti Review', url: 'https://gamersnexus.net/gpus/do-not-buy-nvidia-rtx-5070-ti-gpu-absurdity-benchmarks-review' },
        { label: 'Tom\'s HW: 5070 Ti Review', url: 'https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5070-ti-review-asus' },
        { label: 'TechSpot: 5070 Ti Effectively Dead', url: 'https://www.techspot.com/news/110943-rtx-5070-ti-effectively-dead-gpu-market-worse.html' },
        { label: 'Tweaktown: Production Ended', url: 'https://www.tweaktown.com/news/109716/nvidia-has-reportedly-ended-geforce-rtx-5070-ti-production-and-its-now-end-of-life/index.html' }
      ],
      buyLinks: [
        { store: 'Amazon ~$999', url: 'https://www.amazon.com/s?k=rtx+5070+ti' },
        { store: 'Newegg ~$999-1,300 (stock drying up)', url: 'https://www.newegg.com/p/pl?d=rtx+5070+ti' },
        { store: 'Best Buy ~$1,000+', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=rtx+5070+ti' }
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
      notes: '\u2B50 SWEET SPOT FOR 4K@160Hz - DLSS 4 MFG turns 68fps native into 238fps in Cyberpunk. MSRP $999 \u2014 availability improving! MSI Shadow 3X OC and Zotac Solid Core spotted at $999 MSRP on Newegg. Most AIBs still $1,049-1,349. FE at $999 rare. Less affected by GDDR7 cuts than 5070 Ti (which is now effectively dead).',
      advice: 'RECOMMENDED: Prices finally dropping \u2014 select AIB models (MSI Shadow, Zotac Solid Core, PNY OC) hitting $999 MSRP at Newegg/Best Buy. Most models still $1,049-1,349. Amazon lagging at ~$1,399. Best sub-$2K path to 160Hz@4K via DLSS 4 MFG (250+ games). \u26A0\uFE0F DLSS 4.5 Dynamic MFG 6x launching March 31 as NVIDIA App beta \u2014 RTX 50 exclusive, adapts frame count to your monitor\'s refresh rate. \u26A0\uFE0F DEFECTIVE ROPS: NVIDIA says RESOLVED in current production. Early units had 104 vs 112 ROPs. Verify with GPU-Z after purchase.',
      why: 'DLSS 4 MFG generates up to 3 extra frames per real frame. Cyberpunk goes from 68fps native to 238fps. Best sub-$2K card for reliably hitting 160Hz at 4K in AAA. DLSS 4.5 Dynamic MFG 6x launching March 31 (beta) will push this even further \u2014 auto-adjusts generated frames to match your 160Hz monitor.',
      benchmarks: { cyberpunk_4k: 68, starfield_4k: 71, baldurs_4k: 85, ffxiv_4k: 112 },
      sources: [
        { label: 'GN: RTX 5080 Review', url: 'https://gamersnexus.net/gpus/nvidia-geforce-rtx-5080-founders-edition-review-benchmarks-vs-5090-7900-xtx-4080-more' },
        { label: 'Tom\'s HW: 5080 Review', url: 'https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5080-review/4' },
        { label: 'TechSpot: 5080 Review', url: 'https://www.techspot.com/review/2947-nvidia-geforce-rtx-5080/' },
        { label: 'JayzTwoCents: "OC Monster"', url: 'https://www.pcguide.com/news/rtx-5080-dubbed-overclocking-monster-by-jayztwocents-its-like-a-whole-nother-tier-with-oc/' },
        { label: 'Defective Units Report', url: 'https://www.tomshardware.com/pc-components/gpus/nvidia-confirms-different-rtx-5080-sku-with-fewer-rops' }
      ],
      buyLinks: [
        { store: 'Newegg ~$999-1,349 (select AIBs at MSRP!)', url: 'https://www.newegg.com/p/pl?d=rtx+5080' },
        { store: 'Amazon ~$1,399', url: 'https://www.amazon.com/s?k=rtx+5080' },
        { store: 'Best Buy ~$999-1,099', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=rtx+5080' },
        { store: 'Stock Tracker', url: 'https://www.trackalacker.com/products/showcase/nvidia-rtx-5080' }
      ]
    },
    {
      id: '5090',
      name: 'NVIDIA RTX 5090 32GB',
      price: 3900,
      vram: 32,
      recommended: false,
      perf4k: 99,
      tdp: 575,
      notes: '\uD83D\uDC8E ABSOLUTE FASTEST GPU - 30-69% faster than 5080. 32GB GDDR7. Street price $3,400-$5,495 (1.7-2.75x MSRP $1,999). GDDR7 shortage is structural \u2014 NVIDIA confirmed supply constraints through fiscal 2027. Newegg floor ~$3,900. FE at $1,999 sells out in 3-5 minutes. Analysts project $3,800-$4,400 by Q4 2026 \u2014 no relief expected this year.',
      advice: 'OVERKILL: ~150fps native 4K avg. At $3,900+ street, you\'re paying 3.9x the 5080 for 30-60% more perf. The 5080 with DLSS 4 MFG hits the same 160Hz target for 1/4 the price. MSRP ($1,999) is unobtainable \u2014 FE at Best Buy sells out in minutes. Prices unlikely to drop below $3,600 at any point in 2026. \u26A0\uFE0F Most Amazon listings are 3P sellers at $4,147+. Only buy from authorized sources.',
      whyNot: 'Street price is 1.85-2.75x MSRP and rising. 575W TDP needs 1000W PSU. The 5080 with DLSS 4 MFG reaches the same 160Hz@4K target for far less.',
      benchmarks: { cyberpunk_4k: 150, starfield_4k: 108, baldurs_4k: 133, ffxiv_4k: 182 },
      sources: [
        { label: 'GN: RTX 5090 Review', url: 'https://gamersnexus.net/gpus/nvidia-geforce-rtx-5090-founders-edition-review-benchmarks-gaming-thermals-power' },
        { label: 'DSO: 20-Game 4K Benchmark', url: 'https://www.dsogaming.com/articles/nvidia-rtx-5090-vs-rtx-4090-native-4k-gaming-benchmarks/' },
        { label: 'Tom\'s HW: 5090 Coverage', url: 'https://www.tomshardware.com/tag/rtx-5090' }
      ],
      buyLinks: [
        { store: 'Newegg ~$3,900-5,495', url: 'https://www.newegg.com/p/pl?d=rtx+5090' },
        { store: 'Amazon 3P ~$4,147+', url: 'https://www.amazon.com/s?k=rtx+5090' },
        { store: 'Best Buy FE $1,999 (OOS)', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=rtx+5090' }
      ]
    }
  ],
  motherboard: [
    {
      id: 'z790-tomahawk',
      name: 'MSI MAG Z790 Tomahawk MAX WiFi',
      price: 228,
      socket: 'LGA1700',
      recommended: false,
      notes: 'Solid Z790 for Intel - 16+1+1 VRM with 90A stages, WiFi 7, handles even LN2 overclocking',
      advice: 'FOR i9-14900K: Good value at $228 but remember the platform is a dead end. No future CPU upgrades.',
      sources: [
        { label: 'PC Gamer Review', url: 'https://www.pcgamer.com/msi-mag-z790-tomahawk-max-wifi-motherboard-review/' },
        { label: 'OC3D Review', url: 'https://overclock3d.net/reviews/cpu_mainboard/msi-mag-z790-tomahawk-max-review/4/' }
      ],
      buyLinks: [
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
      notes: '\u2B50 SWEET SPOT AM5 - WiFi 7, 5GbE, PCIe 5.0 M.2, 8-layer server-grade PCB. The 9800X3D doesn\'t need more. Dropped to $240 on Amazon.',
      advice: 'RECOMMENDED: Now $240 on Amazon (was $254). AM5 with WiFi 7 + 5GbE + upgrade path through 2027+ (Zen 6 & 7 confirmed AM5). The 9800X3D doesn\'t need a $500 board.',
      sources: [
        { label: 'The FPS Review', url: 'https://www.thefpsreview.com/2025/02/04/msi-mag-x870-tomahawk-wifi-motherboard-review/' },
        { label: 'KitGuru Review', url: 'https://www.kitguru.net/components/motherboard/leo-waldock/msi-mag-x870-tomahawk-review/' }
      ],
      buyLinks: [
        { store: 'Amazon $240', url: 'https://www.amazon.com/MSI-Tomahawk-Motherboard-Processors-Bluetooth/dp/B0DG3HK897' },
        { store: 'Best Buy ~$254', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=msi+x870+tomahawk' }
      ]
    },
    {
      id: 'b650-tomahawk',
      name: 'MSI MAG B650 Tomahawk WiFi',
      price: 210,
      socket: 'AM5',
      recommended: false,
      notes: 'Budget AM5 - 14+2+1 VRM is plenty for 9800X3D. PCWorld: "leaves very little on the table". Now ~$210 on Amazon/Pangoly.',
      advice: 'VALUE PICK: Only $30 cheaper than X870 Tomahawk ($210 vs $240). Loses WiFi 7 and PCIe 5.0 M.2. At just $30 savings, X870 Tomahawk\'s WiFi 7 + 5GbE + PCIe 5.0 M.2 are absolutely worth the premium.',
      sources: [
        { label: 'PCWorld Review', url: 'https://www.pcworld.com/article/1522279/msi-mag-b650-tomahawk-wifi-motherboard-review.html' },
        { label: 'HWCooling Review', url: 'https://www.hwcooling.net/en/msi-mag-b650-tomahawk-wifi-the-cheapest-of-the-decent-ones-review/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$210', url: 'https://www.amazon.com/MSI-B650-Tomahawk-Motherboard-Processors/dp/B0BHCCNSRH' },
        { store: 'Best Buy ~$220', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=msi+b650+tomahawk' }
      ]
    },
    {
      id: 'x870e-strix',
      name: 'ASUS ROG Strix X870E-E Gaming WiFi',
      price: 362,
      socket: 'AM5',
      recommended: false,
      notes: 'Premium AM5 - 5x M.2 (3x PCIe 5.0), WiFi 7, 5GbE, USB4. Best-in-class. \uD83D\uDC8E Now ~$362 on Amazon (was $478 — 27% off).',
      advice: 'PREMIUM: Dropped to ~$362 (27% off on Amazon). Now only $122 more than X870 Tomahawk for USB4, 5x M.2, premium VRMs. Much better value at this price, but the 9800X3D still doesn\'t need it.',
      sources: [
        { label: 'Tom\'s HW Review (4/5)', url: 'https://www.tomshardware.com/pc-components/motherboards/asus-rog-strix-x870e-e-gaming-wifi-review' },
        { label: 'PC Guide Review', url: 'https://www.pcguide.com/motherboard/review/asus-rog-strix-x870e-e-gaming-wifi/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$362 (27% off)', url: 'https://www.amazon.com/dp/B0DGFKN5HV' }
      ]
    }
  ],
  ram: [
    {
      id: 'ddr5-32gb-6000-cl36',
      name: '32GB DDR5-6000 CL36 (G.Skill Flare X5)',
      price: 380,
      capacity: 32,
      recommended: true,
      notes: '\u2B50 BEST VALUE - AMD EXPO certified. DDR5-6000 is the AM5 sweet spot (1:1 Infinity Fabric). Newegg ~$380 (base sale price), Amazon ~$475. \u26A0\uFE0F Promo code MMSF256 may be expired \u2014 deal returned to full price per recent reports. Test at checkout but don\'t count on it. DDR5 prices 300-500% above pre-crisis levels due to AI demand \u2014 shortage lasts through Q4 2027.',
      advice: '32GB is all you need for gaming (AAA uses ~20GB max). CL36 vs CL30 is ~1-2% gaming difference. Newegg base sale ~$380 \u2014 try code MMSF256 at checkout (may be expired). Pangoly tracks ~$359 at best. Amazon volatile at ~$475.',
      sources: [
        { label: 'PC Gamer: Best RAM 2026', url: 'https://www.pcgamer.com/best-ram-for-gaming/' },
        { label: 'TechRadar: DDR5 Deal w/ Promo', url: 'https://www.techradar.com/pro/ram-prices-are-sky-high-but-you-can-take-usd80-off-this-32gb-g-skill-trident-z5-rgb-ddr5-6000-kit-right-now-using-a-promo-code-at-newegg' }
      ],
      buyLinks: [
        { store: 'Newegg ~$380 (code: MMSF256)', url: 'https://www.newegg.com/g-skill-32gb-288-pin-ddr5-sdram/p/N82E16820374415' },
        { store: 'Amazon ~$475', url: 'https://www.amazon.com/s?k=g.skill+flare+x5+ddr5+6000' }
      ]
    },
    {
      id: 'ddr5-32gb-6000-cl30',
      name: '32GB DDR5-6000 CL30 (Kingston FURY Beast)',
      price: 500,
      capacity: 32,
      recommended: false,
      notes: 'Tighter CL30 timings for ~1-2% more gaming perf. AMD EXPO + Intel XMP 3.0 certified. Price volatile during DDR5 shortage \u2014 now ~$500 (Pangoly), up from $474.',
      advice: 'PREMIUM TIMINGS: CL30 is technically optimal but ~$120 more than CL36 ($500 vs $380) for 1-2% real-world difference. That $120 is better spent elsewhere.',
      sources: [
        { label: 'PC Gamer: Best RAM 2026', url: 'https://www.pcgamer.com/best-ram-for-gaming/' },
        { label: 'TechRadar: Best DDR5', url: 'https://www.techradar.com/computing/best-ddr5-ram' }
      ],
      buyLinks: [
        { store: 'Newegg ~$500', url: 'https://www.newegg.com/p/pl?d=32gb+ddr5+6000mhz+cl30' },
        { store: 'Amazon ~$500', url: 'https://www.amazon.com/Kingston-2x16GB-6000MT-Desktop-KF560C30BBEAK2-32/dp/B0CYM58GFS' }
      ]
    },
    {
      id: 'ddr5-64gb-6000',
      name: '64GB DDR5-6000 (G.Skill Trident Z5 Neo)',
      price: 950,
      capacity: 64,
      recommended: false,
      notes: '\u26A0\uFE0F\u26A0\uFE0F SEVERE SHORTAGE - 64GB DDR5 now ~$950-1,034 (Newegg official $949.99, 3P from $913). RAMageddon 2026 in full effect \u2014 prices up 300-500% from 2024 levels. AI demand consuming all HBM/DRAM fab capacity. No relief until late 2027.',
      advice: 'OVERKILL FOR GAMING: Games use ~20GB max. You\'re paying $570 extra over 32GB for capacity you\'ll never touch in games. At nearly $1,000 for RAM alone, this is hard to justify for any gaming build.',
      sources: [
        { label: 'Tom\'s HW: "More than a PS5"', url: 'https://www.tomshardware.com/pc-components/ddr5/64gb-of-ddr5-memory-now-costs-more-than-an-entire-ps5-even-after-a-discount-trident-z5-neo-kit-jumps-to-usd600-due-to-dram-shortage-and-its-expected-to-get-worse-into-2026' }
      ],
      buyLinks: [
        { store: 'Newegg ~$950-1,034', url: 'https://www.newegg.com/g-skill-trident-z5-neo-rgb-series-64gb-ddr5-6000-cas-latency-cl30-desktop-memory-black/p/N82E16820374445' }
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
      notes: 'Updated V2 of GN\'s "The Champ" air cooler. ~$33 on Amazon \u2014 insane value. Dual-tower, 6 heatpipes, AGHP Gen 5.0, rated to 265W TDP. Now supports LGA 1851 (Arrow Lake).',
      advice: 'BUDGET: At ~$33, this is an absurd deal for 9800X3D (120W). Competes with $80-100 towers at 1/3 the price. NOT enough for i9-14900K under sustained 253W load.',
      sources: [
        { label: 'GN: PA120 SE Review', url: 'https://gamersnexus.net/coolers/champ-41-thermalright-peerless-assassin-cpu-cooler-review-benchmarks' },
        { label: 'Tom\'s HW Review', url: 'https://www.tomshardware.com/reviews/thermalright-peerless-assassin-120-se' }
      ],
      buyLinks: [
        { store: 'Amazon ~$33-35', url: 'https://www.amazon.com/Thermalright-Peerless-Assassin-120-Cooler/dp/B0DP23NF7T' },
        { store: 'Newegg ~$35-40', url: 'https://www.newegg.com/p/13C-000Y-000M3' }
      ]
    },
    {
      id: 'arctic-360-pro',
      name: 'Arctic Liquid Freezer III Pro 360',
      price: 104,
      type: 'aio',
      recommended: true,
      notes: '\u2B50 GN "The New Best" AIO - 2C cooler than standard on AMD, 10C on Intel. Integrated VRM fan. Nothing else comes close. ~$104 on Amazon.',
      advice: 'RECOMMENDED: $104 for the best AIO ever tested. Handles both 14900K and 9800X3D with ease. At this price, there\'s zero reason to consider anything else.',
      sources: [
        { label: 'GN: "The New Best"', url: 'https://gamersnexus.net/coolers/new-best-arctic-liquid-freezer-iii-360-280-cpu-cooler-review-benchmarks' },
        { label: 'Tom\'s HW: Pro Review', url: 'https://www.tomshardware.com/pc-components/liquid-cooling/arctic-liquid-freezer-iii-pro-review' },
        { label: 'Tech4Gamers: "Cooler To Beat"', url: 'https://tech4gamers.com/arctic-liquid-freezer-iii-pro-360-a-rgb-review/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$104', url: 'https://www.amazon.com/Parent-ARCTIC-Liquid-Freezer-III/dp/B0F2TRHJX3' },
        { store: 'PCPartPicker', url: 'https://pcpartpicker.com/product/v2kqqs/arctic-liquid-freezer-iii-pro-360-77-cfm-liquid-cpu-cooler-acfre00180a' }
      ]
    },
    {
      id: 'corsair-titan',
      name: 'Corsair iCUE Link Titan 360 RX RGB',
      price: 191,
      type: 'aio',
      recommended: false,
      notes: 'Premium AIO - Corsair FlowDrive pump, hot-swap caps, iCUE ecosystem integration. LCD variant available at ~$280. Now ~$191 on Amazon.',
      advice: 'LUXURY: $191 for similar performance to the $104 Arctic (1.8x the price). Buy for the iCUE ecosystem and looks, not for thermals.',
      sources: [
        { label: 'PC Gamer Review', url: 'https://www.pcgamer.com/hardware/cooling/corsair-icue-link-titan-360-rx-lcd-review/' },
        { label: 'XDA Review', url: 'https://www.xda-developers.com/corsair-icue-link-titan-360-rx-rgb-review/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$191', url: 'https://www.amazon.com/CORSAIR-iCUE-Titan-Liquid-Cooler/dp/B0D6BFBLTK' },
        { store: 'Best Buy ~$200', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=corsair+icue+link+titan+360+rx+rgb' }
      ]
    }
  ],
  storage: [
    {
      id: 'ssd-2tb-budget',
      name: '2TB Crucial P310',
      price: 201,
      recommended: true,
      notes: '\u2B50 BEST VALUE SSD - Gen4 speeds at nearly half the 990 Pro price. Gaming load times are identical. \u26A0\uFE0F NAND CRISIS: Down from $270 Feb spike to ~$201 (Pangoly tracked). Spiked to $400 on Feb 2. Prices still 2x+ above 2024 levels. All 2026 NAND production sold out \u2014 buy now, prices volatile.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: P310 Review', url: 'https://www.tomshardware.com/reviews/crucial-p310-ssd-review' }
      ],
      buyLinks: [
        { store: 'Newegg ~$201', url: 'https://www.newegg.com/crucial-2tb-p310-nvme/p/N82E16820156413' },
        { store: 'Amazon ~$214', url: 'https://www.amazon.com/Crucial-P310-2280-PCIe-Gen4/dp/B0DC8RVRBZ' }
      ]
    },
    {
      id: 'ssd-2tb',
      name: '2TB Samsung 990 Pro',
      price: 370,
      recommended: false,
      notes: 'Best Gen4 SSD. 7,450 MB/s read. Was $133 \u2014 NAND shortage has nearly tripled the price. Spiked to $720 in Jan 2026. Amazon direct ~$390, 3P sellers ~$335-375. \u26A0\uFE0F Prices volatile \u2014 check at purchase time.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: 990 Pro Review', url: 'https://www.tomshardware.com/reviews/samsung-990-pro-ssd-review' }
      ],
      buyLinks: [
        { store: 'Amazon 3P ~$335-390', url: 'https://www.amazon.com/SAMSUNG-Internal-Expansion-MZ-V9P2T0B-AM/dp/B0BHJJ9Y77' },
        { store: 'Best Buy ~$390', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=samsung+990+pro+2tb' }
      ]
    },
    {
      id: 'ssd-4tb',
      name: '4TB Samsung 990 Pro',
      price: 539,
      recommended: false,
      notes: 'Single-sided 4TB. Premium for capacity. \u26A0\uFE0F Extreme price volatility — hit $1,600 in Feb 2026. Currently ~$539-613 via 3P sellers. Amazon direct OUT OF STOCK. NAND shortage hitting high-capacity drives hardest.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: 990 Pro Review', url: 'https://www.tomshardware.com/reviews/samsung-990-pro-ssd-review' }
      ],
      buyLinks: [
        { store: 'Amazon 3P ~$539-613', url: 'https://www.amazon.com/s?k=samsung+990+pro+4tb' }
      ]
    }
  ],
  case: [
    {
      id: 'corsair-4000d-rs',
      name: 'Corsair Frame 4000D RS',
      price: 100,
      recommended: true,
      notes: '\u2B50 Includes 3 fans! Great airflow, clean cable management, InfiniRail fan mounting. GN: "Corsair Remembered How to Make a Case." Frequent sales to $73-85.',
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
      notes: 'Proven airflow champ. 160mm fans, 392mm GPU clearance.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW Review', url: 'https://www.tomshardware.com/reviews/lian-li-lancool-216-review' }
      ],
      buyLinks: [
        { store: 'Best Buy ~$103', url: 'https://www.bestbuy.com/product/lian-li-lancool-216rx-black-steel-tempered-glass-atx-mid-tower-with-2x-16cm-argb-fans-black/J39TC2KZJ9' },
        { store: 'Amazon ~$103', url: 'https://www.amazon.com/LANCOOL-Computer-All-Around-Pre-Installed-Innovative/dp/B0BN3SY5XW' }
      ]
    },
    {
      id: 'fractal-north',
      name: 'Fractal Design North',
      price: 155,
      recommended: false,
      notes: 'Stunning wood+mesh design. Great airflow despite aesthetic focus.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW Review', url: 'https://www.tomshardware.com/reviews/fractal-design-north' }
      ],
      buyLinks: [
        { store: 'B&H $155', url: 'https://www.bhphotovideo.com/c/search?q=fractal+design+north' },
        { store: 'Best Buy $184', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=fractal+design+north' }
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
      notes: 'ATX 3.1 (2025 refresh), native 12V-2x6, PCIe 5.1, 7yr warranty. ~$125 at major retailers. Good for 9800X3D + 5080.',
      advice: '',
      sources: [
        { label: 'Best Buy', url: 'https://www.bestbuy.com/product/corsair-rme-series-rm850e-80-plus-gold-fully-modular-low-noise-atx-3-1-and-pcie-5-1-power-supply-black/J39QHT23VT' }
      ],
      buyLinks: [
        { store: 'Amazon ~$125', url: 'https://www.amazon.com/CORSAIR-RM850e-Modular-Low-Noise-12V-2x6/dp/B0DPR86ZC8' },
        { store: 'Newegg ~$125', url: 'https://www.newegg.com/corsair-rmx-series-atx-3-1-compatible-850-w-cybenetics-gold-power-supply-black-rm850e/p/N82E16817139336' }
      ]
    },
    {
      id: 'rm1000e',
      name: 'Corsair RM1000e (ATX 3.1)',
      price: 170,
      wattage: 1000,
      recommended: false,
      notes: 'ATX 3.1, 1000W Gold, compact 140mm. Headroom for any GPU.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW', url: 'https://www.tomshardware.com/pc-components/power-supplies/corsair-rm1000e-atx-3-1-power-supply-review' }
      ],
      buyLinks: [
        { store: 'Amazon $170', url: 'https://www.amazon.com/CORSAIR-RM1000e-Modular-Low-Noise-12V-2x6/dp/B0DPR5RZ1T' },
        { store: 'Newegg $170', url: 'https://www.newegg.com/corsair-rmx-series-atx-3-1-compatible-1000-w-cybenetics-gold-power-supply-black-rm1000e/p/N82E16817139337' }
      ]
    },
    {
      id: 'dp13-1000',
      name: 'be quiet! Dark Power 13 1000W Titanium',
      price: 230,
      wattage: 1000,
      recommended: false,
      notes: 'Titanium efficiency (95.2%), virtually silent, 10yr warranty. Down to ~$230 (Pangoly best tracked).',
      advice: '',
      sources: [
        { label: 'be quiet! Official', url: 'https://www.bequiet.com/en/powersupply/4046' }
      ],
      buyLinks: [
        { store: 'Newegg ~$230-261', url: 'https://www.newegg.com/be-quiet-atx-3-0-compatible-1000-w-80-plus-titanium-certified-power-supplies-black/p/1HU-004H-000R8' },
        { store: 'Amazon ~$250', url: 'https://www.amazon.com/quiet-Titanium-Efficiency-Modular-Supply/dp/B0BV6CWS2Z' }
      ]
    }
  ]
};
