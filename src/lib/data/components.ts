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
      notes: '\u26A0\uFE0F DEGRADATION RISK - Intel confirmed voltage bugs causing permanent silicon damage. Microcode fixes (0x129, 0x12B, 0x12F) PREVENT new damage but can\'t REVERSE existing damage. Intel extended warranty by 2 years for 13th/14th gen. Root cause: turbo boost on favored cores spiking to 1.65V. Reports of continued degradation even post-fix. Game server providers have moved to AMD due to stability concerns. \u2B50 MAY 31 RESALE SIGNAL: Jawa $275 anchor CLEARED (sold out, next-tier Jawa listing $370 like-new); eBay BIN $300-$305 holds; Tom\'s HW reports Intel raising Raptor Lake prices 10%+ due to AI fab pull \u2014 bullish for used 14900K floor. Frame the BIN at $310-$340 to clear in days.',
      advice: 'AT 4K: Only 1-5% behind 9800X3D because GPU is the bottleneck. Keeping it is valid IF your chip shows no instability. BUT: degradation risk is real, resale soft \u2014 eBay used BIN floor HOLDS ~$300-$305 May 31 (flat vs May 30 / UP $25 from May 29 $275-305 print; recent eBay sold auction confirmed at $305 3-bid May 31; \u2b50 JAWA $275 ANCHOR CLEARED May 31 \u2014 the $275 listing is now SOLD OUT (only "Make an Offer" remains), next-tier Jawa listing $370 (LIKE-NEW) so the absolute floor anchor on Jawa just LIFTED ~$95, validating the eBay $300-305 BIN cluster as the realistic floor; eBay used BIN still $300-$340 cluster; Amazon 3P used reference $439.95 May 21 per CamelCamelCamel; sold-listing inference vs May 17-27 \u2014 7+ days at this band; new sealed 1P $375-420 range; open-box $399-420, Jawa-style floor ~$275-305 holding — consistent with May 15 $275-305 \u2014 floor BROADENED $26 LOWER as inventory ages: Jawa $249 + eBay BIN $275-305 May 13; BIN listings $290-375 holding per eBay sort, Gamertargets May 5 deal post pegs new $391 i.e. 17% off — Arrow Lake Refresh + 9800X3D dropping to $439 are both pulling buyer attention), new sealed retail $370-469 (Pangoly retail $469 May 10); Newegg listed $469 with $130 off + code "NTEL37" + free Corsair CX750M 750W PSU bundle, but NTEL37 is UNCONFIRMED past ~May 10 — not re-verified in coupon trackers May 16, treat as possibly expired (PC Guide Newegg listing was the last live confirmation). After eBay fees (~13%) expect ~$217-265 net used (now $217-265 net for $249 Jawa floor / $275-305 eBay BIN range as of May 13). Platform is a dead end. \u26A0\uFE0F\u26A0\uFE0F SELL NOW: Arrow Lake Refresh 270K Plus Newegg HOLDS $319.99 May 31 (flat vs May 30, DOWN $30 from $350 May 29, 8% off $348.49 list per QC WebFetch on Newegg PDP; Micro Center holds $259.99 per WCCFtech; VideoCardz May 31 also reports some retailers DROPPED 270K Plus to $279.99 — $20 BELOW MSRP — broader downward pressure on Arrow Lake Refresh). The Newegg walk-back narrows the cheap-Intel alternative gap and shifts buyer attention BACK toward Arrow Lake — short-term halo for LGA1700 used market gone. Refresh reviews still show it matching 14900K gaming perf. At MC $259.99 the cheap-Intel alternative still nets less than a used 14900K after fees, but the gap is tightening fast. \u2B50 NEW MAY 31 SIGNAL: Tom\'s HW reports Intel reportedly raising Raptor Lake (14th gen) prices 10%+ due to AI fab capacity pulling from older nodes \u2014 BULLISH for i9-14900K used floor short-term (channel hikes firm up the secondary market since fewer cheap new-Intel alternatives exist). The 270K Plus walk-back narrows the cheap-Intel alternative gap but the Raptor Lake +10% rumor offsets that pressure. \u26A0\uFE0F Intel May 2026 hike CONFIRMED at 8-10% AND LIVE since May 1 (Tech4Gamers + TechPowerUp + TweakTown corroborating, day 9 of rollout May 10 \u2014 retail moves still pending) \u2014 stacks on Feb 10-15% + Mar ~15%, cumulative 2026 trajectory ~30% YoY. New Intel chips getting pricier, firming used 14900K floor slightly. 250K Plus $199 MSRP (~$219-249 street), 250KF Plus $199.99. No 290K Plus coming (Intel confirmed scrapped). 9950X3D2 launched Apr 22 (only 0.8% gaming uplift over 9800X3D per TechSpot/Tom\'s HW/Phoronix/KitGuru) further depresses Intel high-end demand. List Langley\'s chip at $310-$330 BIN to net ~$270-$287 after fees \u2014 with Jawa $275 anchor CLEARED + Raptor Lake +10% hike rumor, you could push BIN to $325-$340 and still clear given the next Jawa floor is $370 (LIKE-NEW); the May 30 floor lift held into May 31, so the upside band has firmed up by ~$10-25 vs yesterday\'s plan. Prior context: the eBay top end held steady as the 9800X3D Amazon ATL DROPPED to $409.95 May 11 (down $10 from $419.95 May 10 — VideoCardz/HotHardware confirm "new record low"; Tom\'s HW reports 9950X3D Amazon ATL $573.99 still topping best-sellers May 9 \u2014 sharper buyer shift away from Intel high-end), so list at $290-305 BIN to clear faster. Don\'t wait past the May Intel hike \u2014 listing fatigue + Arrow Lake reviews tilting attention away from LGA1700 outweigh the short-term halo. Run stability benchmarks + screenshot before listing (buyers are wary).',
      whyNot: 'Dead-end LGA1700 platform, 253W power draw, degradation risk. At 4K the perf gap is small (1-5%), but resale value declines every month and damage is irreversible.',
      benchmarks: { ffxiv: 310, baldurs: 105, starfield: 135, cyberpunk: 175 },
      sources: [
        { label: 'XDA: Degradation Report', url: 'https://www.xda-developers.com/intel-core-i9-14900k-deteriorated/' },
        { label: 'TechSpot: vs 9800X3D', url: 'https://www.techspot.com/review/2931-amd-ryzen-9800x3d-vs-intel-core-14900k/' },
        { label: 'Tom\'s HW: 270K Plus drops below MSRP to $279', url: 'https://www.tomshardware.com/pc-components/intel-core-ultra-7-270k-plus-drops-below-msrp-for-the-first-time-grab-the-24-core-arrow-lake-refresh-chip-for-just-usd279-for-a-limited-time' },
        { label: 'WCCFtech (May 27): 270K Plus drops to $259 at Micro Center', url: 'https://wccftech.com/intel-core-ultra-7-270k-plus-drops-to-259-at-microcenter-but-delidded-version-costs-twice-as-much/' },
        { label: 'TechSpot: 270K Plus post-launch price spike', url: 'https://www.techspot.com/news/111878-price-spike-hits-intel-core-ultra-7-270k.html' },
        { label: 'VideoCardz (May 31): 270K Plus drops to $279.99, $20 below MSRP', url: 'https://videocardz.com/newz/intel-core-ultra-7-270k-plus-drops-to-279-99-20-below-msrp-two-months-after-launch' },
        { label: 'Tom\'s HW (May 31): Intel raising Raptor Lake prices 10%+ due to AI fab pull', url: 'https://www.tomshardware.com/pc-components/cpus/intel-reportedly-raising-prices-on-ever-popular-raptor-lake-chips-outdated-cpus-to-get-over-10-percent-price-hike-due-to-disinterest-in-ai-processors' }
      ],
      buyLinks: [
        { store: 'eBay (sell yours) — May 31 floor $300-$305 BIN, Jawa $275 SOLD OUT (next tier $370 like-new)', url: 'https://www.ebay.com/sch/i.html?_nkw=i9+14900k&_sop=12' }
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
      notes: '\u2B50 UNDISPUTED GAMING KING - 96MB 3D V-Cache, 30% faster than 14900K in gaming, runs cool at 120W. \u2B50\u2B50 ATL LONG GONE May 17: Amazon ~$439.99 — the $409.95 May 11 floor held 1 day, the $419.99 May 13 print and $419.95 Apr 26-May 10 ATL are also gone (CamelCamelCamel/VideoCardz/Windows Central May 17; now matching the Walmart $439.99-from-$479.99 sale; Amazon-direct flips OOS, 3P fills in) — promotional momentum exhausted (was a 3-day hold at the ATL since May 11 with free Crimson Desert, $60 off $479 launch \u2014 confirmed VideoCardz, Notebookcheck, Tom\'s HW; Amazon GAMING WEEK extended/replaced. Crimson Desert game bundle holds on Amazon listing May 10 (returned May 2, ~8 days continuous) \u2014 promo widened from the AMD-direct one that ended Apr 25). ⭐ Newegg-direct 1P $439.99 HOLDS May 10 (⚠️ Newegg cut LIST price $49 from $506.99 → $457.99 May 10 (sale price held at $439.99 but discount now framed as 9% off / $24.50 savings, was 13% off / $67 savings) — same buying price, smaller "discount" optics; sold/shipped by Newegg, limit 1; QC-verified live on listing May 10). ⭐ Free Corsair CX750M 750W PSU bundle ACTIVE on Newegg "May The Fourth Sale" event May 10 (Tom\'s HW Apr 28 Newegg-bundle coverage + Newegg event page corroborate, ~12 days continuous; the per-product page didn\'t surface the bundle May 10 but the sale event explicitly bundles CX750M with the 9800X3D — try at checkout). PlatinumMicro 3P $457.99 / MobileMonster 3P $464 / DealsADay 3P $478.98 sit ABOVE Newegg-direct \u2014 Newegg-direct is the cheapest Newegg path AND beats 3P alts. ⭐  ONGOING NEWEGG COMBO (since Nov 2025, QC-confirmed live May 5 per Tom\'s HW + Slickdeals): $454 with code BFEFE36 in cart used to bundle a free MSI MAG Coreliquid A13 360mm AIO ($109.99 value), but as of May 4 the combo NO LONGER appears on the Newegg product page (QC-verified absent, treat as expired). The November-launched Newegg combo deal has officially ended. ⚠⚠ POST-MEMORIAL DAY DEAL COLLAPSE May 28: Both major holiday cuts reverted simultaneously. ⚠️ Newegg-direct: $439.99 May 17-27 LIFTED to $459 base May 28 (QC WebFetch direct on Newegg PDP confirms); SSF6798 -$20 code GONE from product page (Windows Central marked the SSF6798 + free Corsair PSU deal [EXPIRED]); free Corsair CX750M 750W PSU bundle GONE. ⚠️ Amazon: $419.99 May 27 LIFTED back to $439 May 28 (1-day Memorial Day match broke; Amazon-direct flips OOS intermittently, 3P fills in). The 10+ day Newegg promo + 1-day Amazon match ended together post-holiday — buyer-attention window closed. ⚠️ MAY 31 UPDATE: SSF6798 code CONFIRMED DEAD on Newegg PDP Day 2 (QC WebFetch re-verified — $459.00 list with NO code visible, NO free Corsair CX750M PSU bundle line; Windows Central tags [EXPIRED] with a tertiary source citing May 14 expiry date). Drop the "maybe live" hedge — promo is officially gone. Cheapest Newegg path TODAY: 3P PlatinumMicro at $439.99 (sits BELOW Newegg-direct $459). PCGuide Memorial Day Amazon article (May 25) cites $420 12% off MSRP — Amazon 1P likely sitting $420-$439 range, no fresh May 31 PDP price (Amazon JS-blocked CamelCamelCamel today). ⭐ Next cheapest Newegg listing PlatinumMicro 3P $439.99 (now BELOW Newegg-direct, but 3P seller — vet rating). Micro Center $399 standalone (Insider card pricing still in effect per April reporting) or $679.99 bundle w/ B850 + 32GB DDR5 (per VideoCardz Apr 15), Newegg $959 full combo bundle (CPU+ASUS TUF X870-Plus WiFi+V-Color 32GB+T-Force 512GB SSD+Crimson Desert digital code+1yr antivirus, retailer-pre-allocated codes still included while stock lasts), Best Buy ~$449-479. \u26a0\ufe0f Crimson Desert AMD-direct promo ENDED Apr 25 (code redemption open till May 23) \u2014 the Newegg combo above is the last channel still bundling a code. 9850X3D refresh LAUNCHED Jan 29 2026 (CES 2026) at $458 street per VideoCardz (NOT a leak any more \u2014 shipping; 5.6GHz boost, 104MB cache, 120W), 7% gaming uplift over 9800X3D, sold side-by-side per AMD \u2014 at $458 vs $420-439 9800X3D, the 9800X3D still wins value (38-60% lower per-fps cost for the 7% uplift). Arrow Lake Refresh (270K Plus $299 MSRP, ~$329-349 street \u2014 10-19% over MSRP per Tom\'s HW) launched Mar 26 to rave reviews but X3D still dominates gaming by 10-20%. AMD responding with price cuts \u2014 PCGamesN: "AMD CPU price cuts have already begun." \u26A0\uFE0F Intel/AMD confirmed 10-15% CPU price hikes effective now (AI supply crunch); Intel reportedly planning a THIRD hike in May (tech4gamers) \u2014 retail X3D prices have actually dropped below MSRP despite channel hikes. Buy before retail catches up. \u26A0\uFE0F 9950X3D2 Dual Edition LAUNCHED Apr 22 at $899 MSRP \u2014 reviewers (TechSpot, Tom\'s HW, Phoronix, KitGuru) confirm only 0.8% gaming uplift over 9800X3D, 6-9% productivity gain. Verdict: irrelevant for gamers, 9800X3D stays the gaming king. Stock is good (no scalp premium post-launch), but may pressure 9950X3D street prices down further by extension.',
      advice: 'BEST VALUE: ⚠️ MAY 31 (Day 2 dead): SSF6798 code + free Corsair CX750M 750W PSU bundle CONFIRMED DEAD on Newegg PDP today — QC re-verified $459 list with no code visible. Cheapest Newegg path TODAY: PlatinumMicro 3P $439.99 (sits BELOW Newegg-direct $459 by $19). Amazon ~$420-$439 (PCGuide Memorial Day May 25 cites $420; Amazon JS-blocked today, treat as ~$420-$439 range). ⭐ Micro Center latest data point: $429.99 in-store pickup-only ($50 off list per agent research — May 30 reconfirm; prior $399/$379.99 Insider pricing not freshly reconfirmed this week, may have lifted). Treat MC as $399-$429.99 depending on store. Newegg combo $959.99 full bundle (CPU+ASUS TUF X870+32GB DDR5-6400+free 512GB TeamGroup SSD+Crimson Desert) still active per Tom\'s HW. NEW combo options also live: $938.99 (CPU+ASUS TUF X870+Corsair Vengeance DDR5-6000, saves $269.99), $1,000.77 (CPU+Gigabyte X870E+32GB Corsair, $177 off), $1,078.99 (CPU+ASUS ROG Strix B850-I+32GB, $240 off). After selling 14900K (eBay BIN $300-$305 May 31 — net ~$261-$265 after fees, with Jawa $275 SOLD OUT and next Jawa tier $370 the upside band has firmed up), net switch cost is ~$155-$170 at MC $429.99 or ~$155-$174 at Amazon $420-$439. AM5 platform lasts through 2027+ (Zen 6 "Medusa" desktop delayed to 2027, AM5 confirmed). Pattern signal: Newegg/Amazon Memorial Day promos historically recur within 1-2 weeks (next typical window: early/mid-June Father\'s Day-adjacent cycles); if you can wait, the SSF6798-style bundle has flown 2x already this month. ⚠️ Arrow Lake Refresh 270K Plus Newegg HOLDS $319.99 May 31 (flat vs May 30; Micro Center holds $259.99 floor; VideoCardz May 31 reports some retailers dropped 270K Plus to $279.99 — $20 below MSRP) — Refresh reviews show it matching 14900K gaming perf, a real cheap-Intel alternative now, but X3D still dominates gaming by 10-20%. ⭐ 9850X3D refresh shipping since Jan 29 at $458 street per VideoCardz, 7% gaming uplift — at the $38-58 premium vs 9800X3D, 9800X3D still wins value. ⚠️ 9950X3D2 launched Apr 22 — confirmed only 0.8% gaming uplift, validates 9800X3D as the gaming pick.',
      why: 'Every major reviewer (GN, Tom\'s HW, TechSpot, PC Gamer) agrees: this is THE gaming CPU. 96MB 3D V-Cache gives it an insurmountable gaming advantage.',
      benchmarks: { ffxiv: 380, baldurs: 160, starfield: 169, cyberpunk: 219 },
      sources: [
        { label: 'GamersNexus: Full Review', url: 'https://gamersnexus.net/cpus/rip-intel-amd-ryzen-7-9800x3d-cpu-review-benchmarks-vs-7800x3d-285k-14900k-more' },
        { label: 'Tom\'s HW: "Devastating Performance"', url: 'https://www.tomshardware.com/pc-components/cpus/amd-ryzen-7-9800x3d-review-devastating-gaming-performance' },
        { label: 'PC Gamer: Best Gaming CPU', url: 'https://www.pcgamer.com/best-cpu-for-gaming/' },
        { label: 'VideoCardz: 9800X3D new ATL $409 May 11', url: 'https://videocardz.com/newz/amd-ryzen-7-9800x3d-hits-new-record-low-now-409-on-amazon' },
        { label: 'HotHardware: 9800X3D ATL $409.95', url: 'https://hothardware.com/news/amd-ryzen-7-9800x3d-hits-all-time-low-409' },
        { label: 'VideoCardz: 9800X3D Newegg $419.99 + free Corsair PSU (May 2026)', url: 'https://videocardz.com/newz/amd-ryzen-7-9800x3d-drops-to-419-99-at-newegg-with-free-750w-corsair-psu' },
        { label: 'WCCFtech: Newegg quietly bundles free Corsair PSU with 9800X3D at $419', url: 'https://wccftech.com/newegg-quietly-bundles-a-free-64-corsair-psu-with-the-ryzen-7-9800x3d-at-419/' },
        { label: 'Tom\'s HW (May 31): $959.99 9800X3D + ASUS TUF X870 + 32GB DDR5 + free 512GB SSD + Crimson Desert combo', url: 'https://www.tomshardware.com/pc-components/spend-usd959-99-and-get-the-9800x3d-cpu-asus-tuf-gaming-x870-and-32gb-of-ddr5-ram-plus-a-free-512gb-gen-4-ssd-and-crimson-desert-neweggs-combo-bundles-strike-again' },
        { label: 'VideoCardz: 9850X3D refresh now $458 street, 9800X3D $419', url: 'https://videocardz.com/newz/amd-ryzen-7-9850x3d-falls-to-458-9800x3d-now-at-419' },
        { label: 'Windows Central: 9800X3D SSF6798 [EXPIRED]', url: 'https://www.windowscentral.com/hardware/cpus/amd-ryzen-7-9800x3d-best-pc-gaming-cpu-free-power-supply' }
      ],
      buyLinks: [
        { store: 'Amazon ~$420-$439 May 31 (PCGuide Memorial Day cites $420 12% off; Amazon JS-blocked today, treat as range; 1P intermittently OOS, 3P fills in; Pangoly ATL was $409.95 April)', url: 'https://www.amazon.com/AMD-9800X3D-16-Thread-Desktop-Processor/dp/B0DKFMSMYK' },
        { store: '⚠️ Newegg-direct $459 list May 31 (QC WebFetch on PDP Day 2: SSF6798 CONFIRMED DEAD, no free PSU bundle; Windows Central tagged [EXPIRED] with May 14 expiry per tertiary source). Cheapest Newegg path TODAY: PlatinumMicro 3P $439.99 (below Newegg-direct $459 by $19)', url: 'https://www.newegg.com/amd-ryzen-7-9000-series-ryzen-7-9800x3d-granite-ridge-zen-5-socket-am5-120w-desktop-cpu-processor/p/N82E16819113877' },
        { store: 'Newegg combo BFEFE36 (Nov 2025-Apr 2026) ENDED \u2014 combo no longer on listing May 10', url: 'https://www.newegg.com/p/pl?d=amd+ryzen+7+9800x3d' },
        { store: 'Micro Center $399-$429.99 in-store May 31 (latest data point $429.99 pickup-only $50 off list; prior $399/$379.99 Insider not freshly reconfirmed this week — call/check store; $679.99 bundle w/ B850+32GB still listed)', url: 'https://www.microcenter.com/product/687907/amd-ryzen-7-9800x3d-granite-ridge-am5-470ghz-8-core-boxed-processor-heatsink-not-included' },
        { store: 'Newegg $959 full combo bundle (CPU+TUF X870+32GB+512GB SSD+Crimson Desert code while stock lasts)', url: 'https://www.newegg.com/amd-ryzen-7-9000-series-ryzen-7-9800x3d-granite-ridge-zen-5-socket-am5-120w-desktop-cpu-processor/p/N82E16819113877' },
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
      notes: '16 cores / 128MB cache - Ties 9800X3D in gaming but adds massive productivity power. Full overclocking support (first for X3D Ryzen 9). Micro Center $599 in-store (clearing stock ahead of 9950X3D2 \u2014 unconfirmed if still current Apr 26). \u26A0\uFE0F Amazon ALL-TIME LOW $573.99 EXPIRED — reverted to $639.99 by May 14 (the $573.99 Apr 26-May 10 window has closed; CamelCamelCamel/Tom\'s HW; was live since Apr 26— Tom\'s HW May 9 still flags as topping Amazon best-sellers, 14 days continuous) (Amazon Gaming Week, 18% off $699 MSRP, $125 cut per Tom\'s HW + Windows Central + Club386 + VideoCardz; topped Amazon best-sellers list. Limited-time deal, stock flipped between in/OOS during window). ⚠ Newegg-direct LIFTED to $699 May 28 (QC WebFetch direct on PDP confirms; UP $84 from $614.99 May 25-27 floor; $25 code GONE post-Memorial Day; free Cooler Master Elite 240mm AIO STILL bundled). Memorial Day\'s "$639.99 - $25 code + free AIO = $614.99" PC Guide deal collapsed today alongside the 9800X3D SSF6798 reversion. ⚠️ MAY 31 UPDATE: $25 promo code GONE Day 3 (QC re-verified — Newegg-direct $699 list, no code, in stock limit 1/customer); free Cooler Master Elite Liquid 240 AIO bundle STILL ACTIVE ("limited offer" language live on page; AIO listed as separate free add-on). 30-day returns. "Savings Up To $1550+" combo deals also live. Amazon last confirmed $639.99 OOS (May 10), 3P reports of $749.99 sitting above MSRP per Wccftech tracking — no fresh in-stock signal May 31. 3P alts $699-730 if needed sooner. Best Buy ~$699. ⚠️ Crimson Desert promo bundle ENDED Apr 25 — no longer a factor. \u26A0\uFE0F 9950X3D2 "Dual Edition" (208MB cache, dual V-Cache, 16c/32t, 4.3/5.6 GHz, 200W TDP) LAUNCHED APR 22 at $899 MSRP \u2014 TechSpot/Tom\'s HW/Phoronix/KitGuru reviews confirm only 0.8% gaming uplift over 9800X3D, 6-9% productivity gain (Blender +7%, LLVM +6.6%). Notebookcheck verdict: "questions its existence" for gamers. Both Amazon and Newegg now listing 9950X3D2 at $899 MSRP \u2014 no scalp premium post-launch (initial Amazon $999 preorder normalized). This pressures 9950X3D demand from above (better productivity) and below (9800X3D Amazon $409.95 NEW ATL May 11 matches it in gaming for $164 less even at the $574 Amazon floor).',
      advice: 'OVERKILL: Only 0.4-0.8% faster than 9800X3D in gaming for ~$240-300 more ($699 Newegg-direct MSRP May 31 + free CM Elite Liquid 240 AIO vs $399-$459 9800X3D depending on Micro Center / 3P / Newegg-direct path). No streaming planned, so the extra cores are wasted. ⚠️ MAY 31 Day 3: $25 promo code stays DEAD, no signs of return without a new holiday window. The May 29 $614.99 net price was a 1-day blip — short revert cycle. MC $599 in-store if available is still the cheapest absolute. \u26A0\uFE0F 9950X3D2 LAUNCHED Apr 22 at $899 MSRP and reviewers confirmed it adds only 0.8% over the 9800X3D in gaming \u2014 the whole high-end X3D stack just collapsed for pure gamers. The 9800X3D at ~$439 Amazon / $459 Newegg / $399 MC is the smarter buy (Memorial Day expirations widened the 9950X3D gap, not narrowed it). Only consider 9950X3D if you do heavy productivity (Blender, LLVM compile); don\'t pay $669-699 for a 0.4-0.8% gaming gain.',
      whyNot: 'Within 0.4-0.8% of 9800X3D in gaming (now confirmed by 9950X3D2 reviews — extra cache barely matters at 4K). No streaming = no use for 16 cores. At Newegg-direct MSRP $699 May 31 the $240-260 premium over 9800X3D ($420-$459 1P / 3P) buys nothing for your use case.',
      benchmarks: { ffxiv: 373, baldurs: 155, starfield: 171, cyberpunk: 219 },
      sources: [
        { label: 'GamersNexus: 9950X3D Review', url: 'https://gamersnexus.net/cpus/amd-ryzen-9-9950x3d-cpu-review-benchmarks-vs-9800x3d-285k-9950x-more' },
        { label: 'Tom\'s HW: 9950X3D Review', url: 'https://www.tomshardware.com/pc-components/cpus/amd-ryzen-9-9950x3d-review' },
        { label: 'TechSpot: 9950X3D2 vs 9950X3D (0.8% gaming)', url: 'https://www.techspot.com/review/3114-amd-ryzen-9-9950x3d2/' },
        { label: 'Tom\'s HW: 9950X3D2 "More Cache, More Cash"', url: 'https://www.tomshardware.com/pc-components/cpus/amd-ryzen-9-9950x3d2-review' },
        { label: 'Tom\'s HW: 9950X3D Newegg free AIO bundle (360mm)', url: 'https://www.tomshardware.com/pc-components/cpus/ryzen-9-9950x3d-bundle-at-amazon-includes-a-free-360mm-aio-liquid-cooler-or-save-usd30-at-newegg' },
        { label: 'PC Guide: 9950X3D Newegg $614.99 + free CM 240mm AIO', url: 'https://www.pcguide.com/deals/newegg-drops-ryzen-9-9950x3d-to-best-price-in-30-days-and-throws-in-extra-savings-and-free-cpu-cooler/' },
        { label: 'VideoCardz (May 27): 9950X3D $669 Amazon + free AIO Newegg', url: 'https://videocardz.com/newz/amd-ryzen-9-9950x3d-drops-to-669-on-amazon-newegg-offers-free-360-aio-cooler' }
      ],
      buyLinks: [
        { store: 'Micro Center $599 in-store (if available)', url: 'https://www.microcenter.com/product/691349/amd-ryzen-9-9950x3d-granite-ridge-am5-430ghz-16-core-boxed-processor-heatsink-not-included' },
        { store: '⚠️ Amazon $639.99 last confirmed (May 10, OOS); 3P at $749.99 above MSRP per WCCFtech; no fresh May 31 in-stock signal', url: 'https://www.amazon.com/dp/B0DVZSG8D5' },
        { store: '⚠️ Newegg-direct $699 May 31 Day 3 (QC re-verified — $25 code stays DEAD; in stock limit 1/customer; 30-day returns). Free Cooler Master Elite Liquid 240 AIO bundle STILL ACTIVE on page. "Savings Up To $1550+" combo deals live', url: 'https://www.newegg.com/amd-ryzen-9-9000-series-ryzen-9-9950x3d-granite-ridge-socket-am5-desktop-cpu-processor/p/N82E16819113884' }
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
      notes: '\u26A0\uFE0F QUASI-EOL \u2014 ASUS told retailers production ended, then denied it; NVIDIA says "not EOL" but GDDR7 shortage has effectively halted restocking. NVIDIA cutting gaming GPU production 30-40% in H1 2026 \u2014 5070 Ti is FIRST target for cuts. 50 SUPER lineup indefinitely delayed (confirmed CES 2026) \u2014 no new NVIDIA gaming GPUs in 2026; RTX 60-series pushed to 2028 (Tom\'s HW). \u2b50\u2b50 FLOOR HOLDS May 31 (Day 2 / 21+ day band hold) - ASUS PRIME RTX 5070 Ti 16G STILL OOS at Newegg-direct (1P listing shows $899.99 list with PRAGMATA bundle, stock depleted 24+ days since May 7; 3P sellers $1,229+ are the in-stock options — bestvaluegpu confirms long OOS). bestvaluegpu pegs Newegg cheapest 1P May 31 as MSI Ventus 3X OC $979 (flat 21+ day hold at the $979 band). ⚠️ NEW MAY 30 SIGNAL: VideoCardz reports ASUS told retailers RTX 5070 Ti is "no longer being produced" with RTX 5060 Ti 16GB next on the chopping block — EOL signal supply will tighten further, but actually amplifies the do-not-buy logic: if tempted to grab before stock dries up, the $999 5080 is the better grab (5080 window holds Day 4). Next 1P tier: MSI Shadow 3X OC $989.99, Gigabyte WindForce $999.99 ($100 off), MSI Ventus 3X OC BLACK $999.99. Mid-tier $1,019-1,159. \u26a0\ufe0f Memorial Day promo May 25: Newegg ZOTAC SOLID SFF OC $50 off with code MDSF388 (QC WebFetch-confirmed via Newegg PDP; base is $1,099.99 — NOT the historical $1,029) lands at ~$1,049.99 after code, which is $70+ ABOVE the $979 1P floor at MSI Ventus 3X OC / PNY ARGB. Not a deal vs the $979 tie; the SOLID SFF OC is just a less-bad SFF option, not a price-leader. ⭐ Amazon cheapest authorized 1P May 25 = PNY RTX 5070 Ti ARGB Triple Fan OC $979 (flat 8-day hold) — Amazon TIES Newegg at $979 floor for in-stock 1P. ASUS publicly DENIED EOL claim Apr 2026 (Tom\'s HW) but confirmed memory supply impacted production \u2014 supply tight but not collapsing. Micro Center average $930 across locations (one MSRP card at $899 \u2014 see VideoCardz). Best Buy ~$1,069-1,299. \u26a0\ufe0f eBay used floor JUMPED to ~$859.99 May 31 (bestvaluegpu, UP $60 from the $799 May 25 hold — used market tightening as new $979 1P supply remains stuck; supply squeeze finally pushing through to secondary market). Peaked at $1,220 in mid-2025. ~54fps avg native 4K, DLSS 4.5 Dynamic MFG 6x live (596.21/596.36 WHQL drivers; 596.36 added Conan Exiles Enhanced May 5) \u2014 auto-targets 160Hz, 6x mode for path-traced titles. \u2b50 PRAGMATA bundle ENDED May 12 (ran Apr 14 - May 12 on select 5070 Ti / 5080 / 5090; codes redeemable through June 2 per NVIDIA terms (some regional retailer pages list June 9) if you bought a qualifying card before midnight May 12 — no longer a buying lever for May 13+ purchases) \u2014 \u26a0\ufe0f ENDED May 12 (ran Apr 14 - May 12; codes still redeemable on Steam through June 9 if you bought a qualifying card before midnight May 12 — no longer a lever for May 13+ buys). Stock depleting \u2014 new units may not be replenished.',
      advice: 'BUDGET PICK MAY 31: ⚠️⚠️⚠️ 5070 Ti VALUE PICK PARTIALLY RESTORED Day 5 — $999 5080 MSRP WINDOW CLOSED at Newegg today (MSI Shadow 3X OC OOS per agent search, ZOTAC Solid Core $999 not surfacing in fresh results; Day 4 was the final day of the cycle). Walmart PNY OC $929 status UNVERIFIED today (Walmart product page blocked by bot verification; Tom\'s HW May 30 article still indexed but no fresh May 31 confirmation — treat as stale/unverified). At MSRP-window-closed, Amazon ZOTAC SOLID CORE OC $1,249.99 (Day 6 flat hold) is the realistic 5080 alternative — gap to 5070 Ti $979 widens to $271. Buy 5070 Ti $979 today if you need a 4K card and the $1,249.99 5080 step-up isn\'t in budget; or wait for the next $999 5080 MSRP window (May had 3: 1-day May 6, &lt;24h May 14, 4-day May 27-30 — pattern says expect another in ~1-2 weeks). ASUS PRIME 16G $899.99 Newegg-direct STILL OOS 17+ days (1P listing shows $899.99 list with PRAGMATA bundle but stock depleted since May 7; 3P sellers $1,229+). ⭐ Cheapest 1P in-stock May 25: Amazon PNY ARGB Triple Fan OC $979 AND Newegg MSI Ventus 3X OC $979 — TIE at $979 (Amazon undercut by switching from $999 ASUS PRIME OC to PNY ARGB). \u26a0\ufe0f Memorial Day code MDSF388 ($50 off ZOTAC SOLID SFF OC at Newegg) lands at ~$1,049.99 after code (QC WebFetch on Newegg PDP confirms base $1,099.99) — NOT a deal vs the $979 1P tie; skip unless you specifically need SFF. ⚠️ eBay used floor JUMPED to ~$859.99 May 31 (bestvaluegpu, UP $60 from $799 May 25 hold — used market tightening as new supply stays stuck at $979; the secondary-market discount has narrowed to ~$120, warranty trade-off looks worse than yesterday). ⭐ RTX 5060 Ti (16GB, $429) is the budget alternative if 4K@160Hz isn\'t a hard target. ⚠️ Buy plan: 5070 Ti $979 Amazon/Newegg if you\'re OK with DLSS-dependent 160Hz; step to 5080 $1,249.99 Amazon ZOTAC for native 4K@160Hz margin (step-up just shrunk by $50 to $271). If a $999 5080 SFF flashes back, drop everything and grab it. ⚠️ PRAGMATA bundle ENDED May 12 (codes redeemable on Steam through June 2 for qualifying May 12 buys — no lever for May 13+).',
      whyNot: 'Native 4K performance averages ~54fps. Needs DLSS 4 MFG to hit 160Hz, and not all games support it yet. 16GB VRAM may limit future 4K titles. ⚠️ $999 5080 MSRP WINDOW CLOSED May 31 (Day 4 was the final day at Newegg; Walmart $929 unverified today) — at $1,249.99 Amazon ZOTAC (current cheapest 5080), the 5070 Ti $979 has $271 step-up math working again. ASUS EOL signal (VideoCardz May 30) still in play — 5080 supply healthier than 5070 Ti supply going forward.',
      benchmarks: { cyberpunk_4k: 48, starfield_4k: 61, baldurs_4k: 64, ffxiv_4k: 97 },
      sources: [
        { label: 'GN: 5070 Ti Review', url: 'https://gamersnexus.net/gpus/do-not-buy-nvidia-rtx-5070-ti-gpu-absurdity-benchmarks-review' },
        { label: 'Tom\'s HW: 5070 Ti Review', url: 'https://www.tomshardware.com/pc-components/gpus/nvidia-geforce-rtx-5070-ti-review-asus' },
        { label: 'TechSpot: 5070 Ti Effectively Dead', url: 'https://www.techspot.com/news/110943-rtx-5070-ti-effectively-dead-gpu-market-worse.html' },
        { label: 'Tweaktown: Production Ended', url: 'https://www.tweaktown.com/news/109716/nvidia-has-reportedly-ended-geforce-rtx-5070-ti-production-and-its-now-end-of-life/index.html' },
        { label: 'NotebookCheck: 5070 Ti Supply Crisis', url: 'https://www.notebookcheck.net/Asus-confirms-RTX-5070-Ti-is-now-discontinued-as-Nvidia-effectively-kills-Blackwell-16-GB-midrange-RTX-5060-Ti-16-GB-next-on-the-chopping-block.1204994.0.html' },
        { label: 'Tom\'s HW: ASUS denies EOL, supply hit', url: 'https://www.tomshardware.com/pc-components/gpus/asus-denies-rtx-5070-ti-and-rtx-5060-ti-discontinuation-after-conflicting-end-of-life-claims-says-it-has-no-plans-to-stop-selling-these-models-but-confirms-memory-supply-has-impacted-production-and-restocking' },
        { label: 'VideoCardz (May 30): ASUS says 5070 Ti no longer being produced, 5060 Ti 16GB next', url: 'https://videocardz.com/newz/asus-reportedly-says-rtx-5070-ti-is-no-longer-being-produced-rtx-5060-ti-16gb-to-follow' }
      ],
      buyLinks: [
        { store: '⚠️ Newegg-direct ASUS PRIME 16G $899.99 1P listing STILL OOS May 25 (17+ days OOS since May 7; 3P sellers $1,229+ are the in-stock options)', url: 'https://www.newegg.com/asus-prime-rtx5070ti-16g-geforce-rtx-5070-ti-16gb-graphics-card-triple-fans/p/N82E16814126757' },
        { store: '⭐ Newegg-direct $979 MSI Ventus 3X OC (1P in stock May 25, flat 15+ day hold; cheapest standard Newegg 1P)', url: 'https://www.newegg.com/msi-rtx-5070-ti-16g-ventus-3x-oc-geforce-rtx-5070-ti-16gb-graphics-card-triple-fans/p/N82E16814137933' },
        { store: 'Newegg ZOTAC SOLID SFF OC $1,099.99 base - $50 code MDSF388 = ~$1,049.99 May 25 (QC WebFetch on Newegg PDP confirmed; NOT cheaper than the $979 MSI Ventus 3X OC / Amazon PNY ARGB tie — SFF-form-factor option only)', url: 'https://www.newegg.com/zotac-gaming-geforce-rtx-5070-ti-solid-sff-oc-16gb-graphics-card-triple-fans/p/N82E16814500607' },
        { store: 'Newegg next 1P tier $989.99-$999.99 (MSI Shadow 3X OC $989.99 / Gigabyte WindForce $999.99 $100 off / MSI Ventus 3X OC BLACK $999.99)', url: 'https://www.newegg.com/p/pl?d=rtx+5070+ti' },
        { store: '⭐ Amazon $979 PNY RTX 5070 Ti ARGB Triple Fan OC May 25 (NEW — undercut the prior $999 ASUS PRIME OC; cheapest Amazon authorized 1P; bestvaluegpu)', url: 'https://www.amazon.com/s?k=rtx+5070+ti' },
        { store: 'Micro Center avg $930 (one MSRP $899 model, varies by location)', url: 'https://www.microcenter.com/search/search_results.aspx?Ntt=rtx+5070+ti' },
        { store: 'Best Buy ~$1,069-1,299', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=rtx+5070+ti' }
      ]
    },
    {
      id: '5080',
      name: 'NVIDIA RTX 5080 16GB',
      price: 929,
      vram: 16,
      recommended: true,
      perf4k: 90,
      tdp: 360,
      notes: '\u2B50\u2B50\u2B50 SWEET SPOT FOR 4K@160Hz - DLSS 4 MFG turns 68fps native into 238fps in Cyberpunk. \u2B50\u2B50\u2B50 $999 MSRP WINDOW CLOSED May 31 — Day 4 was the final day— MSI Shadow 3X OC at Newegg now OOS; ZOTAC Solid Core / PNY OC Best Buy not surfacing in fresh search results May 31; Tom\'s HW Memorial Day-window coverage stopped May 30 with no $999 standalone GPU mentions for May 31. This $999 window ran 4 days (May 27-30) — by far the LONGEST of the 3 May reopens (May 6 = 1 day, May 14 = <1 day, May 27-30 = 4 days and counting). ⚠️ MAY 31 STATUS: Walmart PNY RTX 5080 OC $929 — UNVERIFIED today. Walmart product page blocked by bot verification on agent fetch attempt; Tom\'s HW May 30 article "drops to new lowest-ever price" still indexed but no fresh May 31 confirmation; PC Guide "Walmart just restocked" coverage from prior day. Treat $929 as STALE/POSSIBLY EXPIRED — verify directly at Walmart before relying on it. The flash event window may have closed (typical flash deals last hours to days). Above MSRP: ⭐⭐ Amazon ZOTAC SOLID CORE OC $1,249.99 holds May 31 (was $1,299 May 25 → $1,249.99 May 26-31, flat 6-day hold; PNY ARGB EPIC-X $1,319 still listed per bestvaluegpu; retail tracker average $1,249) and ⭐ Newegg 1P non-MSRP ZOTAC SOLID CORE OC $1,379 holds May 31 (PC Guide confirms "RTX 5080 is priced at $1,379.99" at Newegg). With $999 MSRP window closed and Walmart $929 unverified, Amazon $1,249.99 is the realistic floor for new buys today. \u26a0\ufe0f Newegg 1P landscape May 27: $999 MSRP SFF SKUs at top (MSI Shadow 3X OC, ZOTAC Solid Core), then ZOTAC SOLID CORE OC $1,379, GIGABYTE WindForce SFF $1,399, mid-tier $1,376-1,499 (GIGABYTE WindForce OC SFF $1,376, GAMING OC $1,499, ASUS PRIME, MSI INSPIRE 3X OC BLACK $1,499.92). Windows Central + Tweaktown coverage confirms most non-SFF 5080 SKUs sit 30-50% above $999 MSRP. Micro Center ~$1,150-1,250 in-store (varies by model). Best Buy ~$1,260+. eBay used ~$1,150-1,200 (Tom\'s HW used tracker May 12 cites $1,189.89) — used is NOW PRICED ABOVE the $999 MSRP cards available today, warranty makes new the obvious call. \u26A0\uFE0F GDDR7 shortage + NVIDIA 30-40% production cuts, but 5080 is NVIDIA\'s PRIORITY 16GB card — better supply outlook than 5070 Ti. \u2B50 DLSS 5 announced at GTC 2026 (Fall 2026, RTX 50 exclusive) — neural rendering breakthrough, photoreal lighting via AI, massive future upgrade. DLSS 4.5 Dynamic MFG 6x live (596.21/596.36 WHQL drivers). 250+ MFG-compatible games. ⚠️ MAY 31 SUPER REFRESH UPDATE: Laurent\'s Choice + TweakTown now report SUPER series CANCELED outright (not just delayed) — 24GB 5080 SUPER variant officially dead per latest coverage; TechPowerUp + VideoCardz 3GB GDDR7 shortage reporting backs this. 32GB modded RTX 5080s appearing for AI workstation use (Tom\'s HW), adding pressure on consumer 5080 supply. Prices peaked at $1,500 in Aug 2025.',
      advice: 'RECOMMENDED: Best realistic path to 160Hz@4K. ⚠️ MAY 31: $999 MSRP WINDOW NOW CLOSED — MSI Shadow 3X OC at Newegg OOS today, ZOTAC Solid Core / PNY OC Best Buy not surfacing in fresh search results; the May 27-30 4-day window was the longest of 3 May reopens (May 6 = 1 day, May 14 = <24h) but ended yesterday. Walmart PNY OC $929 UNVERIFIED today (page blocked by bot verification; Tom\'s HW May 30 article still indexed but no fresh May 31 confirmation — treat as stale). REALISTIC FLOOR for new 5080 today: ⭐⭐ Amazon ZOTAC SOLID CORE OC $1,249.99 (Day 6 flat hold, $1,299→$1,249.99 May 26-31; per bestvaluegpu retail tracker average $1,249). ⭐ Newegg cheapest non-MSRP 1P: ZOTAC SOLID CORE OC $1,379 holds (PC Guide confirms). Mid-tier Newegg $1,319-1,499 (PNY ARGB EPIC-X $1,319, PNY Triple Fan $1,349.99, ASUS PRIME $1,354, GIGABYTE WindForce OC SFF $1,355/$1,376, GAMING OC $1,499, MSI INSPIRE 3X OC BLACK $1,499.92). ⭐⭐⭐ STEP-UP MATH vs 5070 Ti at $979: $1,249.99 Amazon ZOTAC SOLID CORE OC = $271 gap, still the right pick — the 5070 Ti averages ~54fps native and depends on DLSS 4 MFG to reach 160Hz, the 5080 averages ~68fps native and clears 160Hz with margin in most titles. Pattern signal: $999 MSRP windows reopened 3x in May (1d / <24h / 4d) — next typical window is 1-2 weeks away (early/mid-June Father\'s Day-adjacent). If Langley can wait, the next $999 window is the better buy. If he can\'t, $1,249.99 Amazon ZOTAC is the realistic buy today. ⭐ DLSS 5 coming Fall 2026 (RTX 50 exclusive, neural rendering) — locked to this card. NVIDIA prioritizing 5080 production. ⚠️ MAY 31 SUPER REFRESH UPDATE: Laurent\'s Choice + TweakTown report SUPER series now CANCELED outright (not just delayed) — downgrade refresh probability to zero for 2026; 5080 is the card. ⚠️ PRAGMATA bundle ENDED May 12 (codes redeemable on Steam through June 2 per NVIDIA terms; not a lever for May 13+ buys).',
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
        { label: 'Tweaktown: "RTX 50 prices finally hit MSRP"', url: 'https://www.tweaktown.com/news/107952/geforce-rtx-50-series-gpu-prices-finally-hit-msrp-and-below-in-the-us/index.html' },
        { label: 'TechPowerUp: GDDR7 shortage may halt RTX 50 SUPER rollout', url: 'https://www.techpowerup.com/342705/gddr7-shortage-could-stop-nvidia-geforce-rtx-50-series-super-rollout' },
        { label: 'Neowin (May 27): RTX 5080 MSRP for Amazon Prime members', url: 'https://www.neowin.net/deals/nvidia-rtx-5080-is-now-available-at-msrp-for-amazon-prime-members/' },
        { label: 'Tom\'s HW (May 30): "RTX 5080 drops to new lowest-ever price — PNY OC $929 Walmart"', url: 'https://www.tomshardware.com/pc-components/the-nvidia-rtx-5080-drops-to-new-lowest-ever-price-grab-the-pny-oc-model-for-usd929-at-walmart' }
      ],
      buyLinks: [
        { store: '⚠️ Walmart PNY RTX 5080 OC $929 May 30 — UNVERIFIED May 31 (Walmart product page blocked by bot verification on agent fetch; Tom\'s HW May 30 article still indexed but no fresh confirmation; treat as stale)', url: 'https://www.walmart.com/search?q=pny+rtx+5080+oc' },
        { store: '⚠️ $999 MSRP WINDOW CLOSED May 31 — MSI Shadow 3X OC at Newegg OOS today; ZOTAC Solid Core / PNY OC Best Buy not surfacing in fresh search results. Day 4 (May 30) was the final day of the 4-day cycle', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=pny+rtx+5080' },
        { store: '⭐⭐ Amazon ZOTAC SOLID CORE OC $1,249.99 holds May 31 (Day 6 flat hold May 26-31; broader street avg $1,249 per bestvaluegpu; REALISTIC FLOOR for new 5080 today)', url: 'https://www.amazon.com/s?k=rtx+5080' },
        { store: '⭐ Newegg non-MSRP 1P May 31: ZOTAC SOLID CORE OC $1,379 holds (PC Guide confirms; above the MSRP-SFF tier)', url: 'https://www.newegg.com/p/pl?d=rtx+5080' },
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
      notes: '\uD83D\uDC8E ABSOLUTE FASTEST GPU - 30-69% faster than 5080. 32GB GDDR7. \u26A0\uFE0F Street prices vary wildly by retailer. \u2B50 Micro Center ~$2,910 in-store (ASUS TUF OC, 60-80% in-store success rate) \u2014 still the only reliable sub-$3k path. \u2B50 ⚠️ Newegg 1P DESKTOP floor SHIFTED May 31 — the 5090 Founders Edition $3,695 1P listing at Newegg (p/1FT-0004-008V4) appears DELISTED today, page now showing 3P-only: GH Electronics $4,499.99 (lowest), Tech Trends $5,699, Roboshine $5,599 (per QC research agent direct fetch). Tech4Gamers/WCCFtech May 30 coverage of FE $3,695 likely captured the final 1P listing before it dropped. ⭐ NEW CHEAPEST NEW RETAIL May 31: B&H Photo MSI Suprim Liquid SOC $3,799.95 — bestvaluegpu now tags this as the lowest new retail (the FE 1P path that held the floor is gone). Aggregators (bestvaluegpu, GPU Poet May 2026 lowest-avg ~$3,658) still reference $3,658-$3,799 ASUS ROG Astral 1P but those are out of stock. Per nowinstock.net, MSRP-tier 5090s remain OOS at Newegg with no fresh restock signal. Tom\'s HW also reports Zotac raised RTX 5090 prices ~20% across lineup + seemingly eliminated MSRP models, supporting upward pressure. ⚠️⚠️ NVIDIA $300 AIB PRICE HIKE CONFIRMED EFFECTIVE MAY 13 (TechPowerUp + TweakTown corroborate): NVIDIA passed +$300 to board partners on 5090 + 5090D V2 amid GDDR7 +40% Q2 cost pressure. Production for 5090 + 5080 slashed up to 40% to free GDDR7 for AI/data center. Analysts now project $4,500-$5,000 retail by EOY 2026 (TechPowerUp leak suggests $5,000). PRAGMATA bundle on select cards ENDED May 12 (codes redeemable on Steam through June 2 per NVIDIA terms for qualifying May 12 buys). ASUS TUF Newegg listing still 3P-only at $4,199-5,099 \u2014 the $2,909.99 1P path remains GONE since Apr 28. ASUS ROG Astral / Gigabyte AORUS M $3,899.99. Gigabyte WindForce $3,999.99. Amazon ASUS ROG Astral OC $3,899.95 holds May 31 (unchanged from May 30; 52-week low $2,799.99, high $5,049.43). ⭐ B&H Photo MSI Suprim Liquid SOC $3,799.95 NOW THE CHEAPEST NEW RETAIL May 31 — confirmed via bestvaluegpu tracker; with Newegg FE $3,695 1P delisted, B&H is the verified 1P/authorized floor. NVIDIA.com $2,500-3,719 (liquid cooled). Best Buy FE $1,999 nominal-only \u2014 supply effectively zero, no FE drop confirmed in last week. \u2B50 eBay used floor JUMPED to ~$3,899.99 May 31 (bestvaluegpu, UP $100-200 from $3,700-3,799 May 25-30; GPUPoet May 2026 lowest-avg ~$3,658 now stale; 30-day eBay sold avg ~$4,000+ across ~200 units — cheap end sits well below typical sale) — used now ABOVE B&H new: B&H 1P $3,799.95 is now CHEAPER than the $3,899.99 eBay floor; warranty path is the obvious pick (used-cheaper-than-new gap has inverted). Floor trajectory: Apr 30 $3,580 → May 11 $3,500 → May 15-25 $3,700-3,799, scalper-exhaustion arc stalled as supply tightens. Tom\'s HW eBay average dropped from $6k \u2192 $4k by spring \u2014 now $2,700 trend signal: stocks loosening or scalpers exhausted. Tech4Gamers Apr 2026: 5090 nearly 2x MSRP with another $1,300 increase forecast if GDDR7 shortage worsens \u2014 used market trending opposite, suggesting forecast may not pan out. GDDR7 shortage structural \u2014 NVIDIA confirmed supply constraints through fiscal 2027, WCCFtech (~May 13) reported NVIDIA passed ~$300 GDDR7 cost increase to board partners, and now TechPowerUp May 2026 reports the entire Blackwell SUPER refresh may be CANCELLED due to 3GB GDDR7 module shortage \u2014 upward pressure on 1P retail signaled (the prior nightly\'s claimed Newegg $3,799 \u2192 $3,999 lift was UNVERIFIED at QC time \u2014 direction is up but magnitude unproven). SUPER refresh indefinitely delayed (confirmed CES 2026) \u2014 RTX 60-series pushed to 2028. DLSS 4.5 Dynamic MFG 6x live (596.21/596.36 WHQL). \u2B50 DLSS 5 announced GTC 2026 \u2014 Fall 2026 launch, RTX 50 EXCLUSIVE: neural rendering, photoreal AI lighting \u2014 5090 is the premier DLSS 5 card. \u26A0\uFE0F $5,000 price ceiling rumored by end of 2026 if GDDR7 shortage worsens (TrendForce).',
      advice: 'OVERKILL: ~150fps native 4K avg. Micro Center ~$2,910 in-store (ASUS TUF OC, 60-80% in-store availability) remains the only reasonable deal \u2014 the Newegg ASUS TUF listing is still 3P-only at $4,199-5,099 (confirmed May 17) with the $2,909.99 1P direct path gone. ⚠️ Newegg 1P desktop floor SHIFTED May 31 — the FE $3,695 1P listing appears DELISTED (page now 3P-only: GH Electronics $4,499.99 lowest, Tech Trends $5,699, Roboshine $5,599). Tech4Gamers/WCCFtech May 30 likely captured the final 1P listing before drop. ⭐ NEW CHEAPEST NEW RETAIL May 31: B&H Photo MSI Suprim Liquid SOC $3,799.95 — bestvaluegpu tags this as the lowest new retail with FE gone. ⭐ Amazon ASUS ROG Astral OC $3,899.95 confirmed unchanged May 31. \u26A0\uFE0F The GIGABYTE AORUS AI BOX at $3,599.99 1P on Newegg is a Thunderbolt 5 eGPU enclosure for LAPTOPS, ~27% slower than desktop 5090 in gaming. NOT a desktop card; do not confuse for a 5090 desktop deal. ⚠️ PRAGMATA bundle ENDED May 12 on select cards (ran Apr 14 - May 12; codes redeemable through June 2 per NVIDIA terms (some regional retailer pages list June 9) if you bought a qualifying card before midnight May 12 — no longer a buying lever for May 13+ purchases). Online ~1.85-1.95x MSRP. The 5080 with DLSS 4 MFG hits the same 160Hz target at $1,299 Amazon PNY ARGB EPIC-X / ⭐ $1,379 Newegg ZOTAC SOLID CORE OC May 25 (NEW Newegg floor, DOWN $20 from May 17). The May 14 $999 Newegg MSRP reopening slammed shut <24 hours, 10+ days without a new $999 window. Best Buy FE $1,999 restocks Tue/Fri 9-11am EST but sells out in 3-5 min. \u2B50 If DLSS 5 (Fall 2026, RTX 50 exclusive neural rendering) is a priority, the 5090 is the showcase card for it \u2014 but the 5080 also supports DLSS 5. \u2B50 eBay used floor JUMPED to ~$3,899.99 May 31 (bestvaluegpu, UP $100-200 from $3,700-3,799 May 25-30; GPUPoet $3,658 stale; 30-day eBay sold avg ~$4,000+). Floor trajectory: Apr 30 $3,580 → May 11 $3,500 → May 15-30 $3,700-3,799 → May 31 $3,899.99 — scalper-exhaustion arc fully reversed. At $3,899.99 used vs $3,799.95 B&H 1P new (cheapest verified authorized), used now PRICED ABOVE new by ~$100 — warranty makes new the obvious pick \u2014 the May 31 floor jump confirms scalper exhaustion has fully reversed, supply tightening squeezing used market. \u26A0\uFE0F TrendForce $5,000 forecast still on the books \u2014 TechPowerUp\'s May 2026 SUPER-refresh cancellation reporting backs it up.',
      whyNot: 'Online street price $3,799-3,899 (1.90-1.95x MSRP) as of May 31 — direction up confirmed (GDDR7 cost pass-through), magnitude unverified beyond ~$3,800. 575W TDP needs 1000W PSU. The 5080 with DLSS 4 MFG reaches the same 160Hz@4K target at $1,249.99 Amazon ZOTAC / $1,379 Newegg ZOTAC SOLID CORE OC May 31. Both cards support DLSS 5. eBay used floor JUMPED to $3,899.99 May 31 — now PRICED ABOVE B&H 1P new $3,799.95; warranty makes new the obvious pick.',
      benchmarks: { cyberpunk_4k: 150, starfield_4k: 108, baldurs_4k: 133, ffxiv_4k: 182 },
      sources: [
        { label: 'GN: RTX 5090 Review', url: 'https://gamersnexus.net/gpus/nvidia-geforce-rtx-5090-founders-edition-review-benchmarks-gaming-thermals-power' },
        { label: 'DSO: 20-Game 4K Benchmark', url: 'https://www.dsogaming.com/articles/nvidia-rtx-5090-vs-rtx-4090-native-4k-gaming-benchmarks/' },
        { label: 'Tom\'s HW: 5090 Coverage', url: 'https://www.tomshardware.com/tag/rtx-5090' },
        { label: 'NVIDIA: DLSS 5 Announcement (GTC 2026)', url: 'https://nvidianews.nvidia.com/news/nvidia-dlss-5-delivers-ai-powered-breakthrough-in-visual-fidelity-for-games' },
        { label: 'WCCFTech: DLSS 5 Neural Rendering', url: 'https://wccftech.com/nvidia-dlss-5-game-changing-visuals/' },
        { label: 'GPU Poet: 5090 May 2026 used tracker', url: 'https://gpupoet.com/gpu/learn/price/may-2026/nvidia-geforce-rtx-5090' },
        { label: 'WCCFtech: NVIDIA passes another $300 GDDR7 hit to 5090 partners', url: 'https://wccftech.com/nvidia-passes-another-300-hit-to-rtx-5090-board-partners-due-to-vram-shortage/' },
        { label: 'TechPowerUp: GDDR7 shortage may halt RTX 50 SUPER rollout', url: 'https://www.techpowerup.com/342705/gddr7-shortage-could-stop-nvidia-geforce-rtx-50-series-super-rollout' },
        { label: 'TechPowerUp (May 13): NVIDIA $300 AIB price hike on 5090', url: 'https://www.techpowerup.com/349050/nvidia-reportedly-prepares-rtx-5090-price-hike-amid-rising-gddr7-costs' },
        { label: 'Tech4Gamers: RTX 5090 nearly 2x MSRP at $3,695 on Newegg', url: 'https://tech4gamers.com/rtx-5090-is-already-nearly-2x-its-msrp-at-3695-on-newegg-with-another-1300-increase-expected/' },
        { label: 'WCCFtech: RTX 5090 FE $3,695 at Newegg', url: 'https://wccftech.com/nvidia-geforce-rtx-5090-founders-edition-jumps-to-3695-usd-newegg-almost-double-msrp/' }
      ],
      buyLinks: [
        { store: 'Micro Center ~$2,910 (ASUS TUF OC, in-store, unverified May 31 — last week\'s baseline)', url: 'https://www.microcenter.com/search/search_results.aspx?Ntt=rtx+5090' },
        { store: '⚠️ Newegg 5090 FE $3,695 May 30 1P listing appears DELISTED May 31 — page now 3P-only: GH Electronics $4,499.99 lowest, Tech Trends $5,699, Roboshine $5,599 (per QC agent direct fetch). Tech4Gamers/WCCFtech captured the final 1P listing before drop', url: 'https://www.newegg.com/nvidia-founder-edition-900-1g144-2530-000-geforce-rtx-5090-32gb-graphics-card-double-fans/p/1FT-0004-008V4' },
        { store: 'Newegg ASUS TUF: 3P only $4,199-5,099 (1P still GONE May 31 — 33 days since Apr 28)', url: 'https://www.newegg.com/asus-tuf-gaming-tuf-rtx5090-32g-gaming-geforce-rtx-5090-32gb-graphics-card-triple-fans/p/N82E16814126752' },
        { store: '⭐ Amazon ASUS ROG Astral OC $3,899.95 holds May 31 (unchanged from May 30)', url: 'https://www.amazon.com/ASUS-Graphics-3-8-Slot-Axial-tech-Phase-Change/dp/B0DS2WQZ2M' },
        { store: '⭐⭐ B&H Photo MSI Suprim Liquid SOC $3,799.95 NOW THE CHEAPEST NEW RETAIL May 31 (bestvaluegpu tags as lowest new retail with FE 1P delisted)', url: 'https://www.bhphotovideo.com/c/search?q=rtx+5090' },
        { store: '⚠️ eBay used floor JUMPED to ~$3,899.99 May 31 (bestvaluegpu, UP $100-200 from May 25-30 $3,700-3,799 hold; now PRICED ABOVE B&H new at $3,799.95 — warranty wins, used-cheaper-than-new gap INVERTED)', url: 'https://www.ebay.com/sch/i.html?_nkw=rtx+5090&_sop=12' },
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
      notes: 'Solid Z790 for Intel - 16+1+1 VRM with 90A stages, WiFi 7, handles even LN2 overclocking. \u26A0\uFE0F\u26A0\uFE0F TARIFF VOLATILITY: Amazon range $212-300 over April (Pangoly low $211.69 Apr 2, list jumped to ~$298 Apr 22) \u2014 32% Taiwan tariff now passing through. Newegg 3P top offer NEW May 31: Speed Electronics JUMPED UP to $298.42 (was $243.33 May 30 \u2014 Hong Kong seller hiked ~$55 in 24h, listing/promo likely revised). Alt 3P sellers $273.28-$313.69. Newegg-direct still not stocked at this tier. Best Buy $303.99 holds (SKU 6571302, search-result confirmed, PDP-fetch timed out today). LGA1700 platform is EOL with Arrow Lake (LGA1851) as current gen \u2014 but tariffs are overriding the natural demand-fade price decline. \u26a0\ufe0f ASUS warned 25-30% Q2 Taiwan PC price hikes (VideoCardz Apr 28-29); MSI/Gigabyte expected to follow \u2014 buy mobos before May/June if you need one. \u26a0\ufe0f BigGo/Gizmochina/VideoCardz May 7-9: ASUS/MSI/Gigabyte/ASRock cutting 2026 motherboard shipments 24-37% (AI RAM crisis + tariffs), MSI signaling 15-30% price raises industry-wide \u2014 board prices on an upward path into Q3.',
      advice: 'FOR i9-14900K: \u26A0\uFE0F Best Buy $303.99 holds May 31 (stable). Newegg 3P Speed Electronics JUMPED to $298.42 May 31 (UP ~$55 from $243.33 May 30 \u2014 Hong Kong seller revised listing, no longer the bargain it was yesterday). Pangoly composite shows ~$228 as best-flat at unspecified retailer \u2014 verify before relying on. At $300+ retail it\'s now ABOVE X870 Tomahawk ($229.99 Newegg 1P / $239.99 Best Buy May 25 \u2014 the AM5 board with a real platform future). Only buy if you\'re definitely keeping the 14900K. \u26A0\uFE0F TARIFF CORRECTION: the 32% Taiwan tariff narrative is OUTDATED \u2014 Supreme Court struck down IEEPA tariff Feb 2026, replaced with 10% Section 122 (expires ~July 24, 2026). Mobo prices now driven by AI-shipment-cut (24-37% per VideoCardz), not the older tariff stack.',
      sources: [
        { label: 'PC Gamer Review', url: 'https://www.pcgamer.com/msi-mag-z790-tomahawk-max-wifi-motherboard-review/' },
        { label: 'OC3D Review', url: 'https://overclock3d.net/reviews/cpu_mainboard/msi-mag-z790-tomahawk-max-review/4/' },
        { label: 'VideoCardz: Mobo shipments to fall 24-37% in 2026', url: 'https://videocardz.com/newz/asus-gigabyte-msi-and-asrock-reportedly-expect-motherboard-shipments-to-fall-24-to-37-this-year' }
      ],
      buyLinks: [
        { store: 'Amazon ~$297.63-$299.99 May 2026 (search-snippet, PDP-body unparseable \u2014 verify at checkout)', url: 'https://www.amazon.com/MSI-MAG-Z790-Tomahawk-WiFi/dp/B0CJSL89T2' },
        { store: '\u26a0\ufe0f Newegg 3P Speed Electronics JUMPED to $298.42 May 31 (UP ~$55 from $243.33 May 30, ships Hong Kong; alt 3P $273.28-$313.69; Newegg-direct not stocked at this tier)', url: 'https://www.newegg.com/msi-mag-z790-tomahawk-max-wifi-atx-intel-z790-lga-1700/p/N82E16813144633' },
        { store: '\u2B50 Best Buy $303.99 May 30 (HIGH confidence, stable \u2014 search-result confirmed, PDP-fetch timed out today)', url: 'https://www.bestbuy.com/product/msi-mag-z790-tomahawk-max-wifi-socket-lga-1700-intel-z790-atx-ddr5-wi-fi-7-motherboard-black/J3P7TXY677' },
        { store: 'Micro Center', url: 'https://www.microcenter.com/product/661313/msi-z790-mag-tomahawk-wifi-intel-lga-1700-atx-motherboard' }
      ]
    },
    {
      id: 'x870-tomahawk',
      name: 'MSI MAG X870 Tomahawk WiFi',
      price: 230,
      socket: 'AM5',
      recommended: true,
      notes: '\u2B50 SWEET SPOT AM5 - WiFi 7, 5GbE, PCIe 5.0 M.2, 8-layer server-grade PCB. The 9800X3D doesn\'t need more. \u2B50 Newegg 1P-direct $229.99 RE-VERIFIED May 30 (QC WebFetch on PDP: list $259.99 -$30 / 11% off = $229.99 sale, sold/shipped by Newegg, limit 5, free 30-day returns, #1 Best Seller in AMD Motherboards). Newegg pushed list $239.99 → $259.99 between May 26-30 (deeper "discount" optics, same buying price). \u26a0\ufe0f MAY 31 CORRECTION: Bundle BFEDY2A66 (cited in prior notes as $279.99 + $50 Uber Eats GC + Steam code + $40 rebate per Slickdeals 17900610) is now CONFIRMED STALE — Slickdeals listing actually dates to Nov 19 2024, not a current bundle. Drop from active bundle list. Standalone $229.99 1P sale is the working deal. Newegg also surfacing a current bundle of CPU+V-color RAM+Team Group SSD+free CM RGB cooler. Original (now-stale) bundle was not showing on Newegg PDP main view today — likely moved off front bundle slot or expired; standalone $229.99 1P sale is the better deal anyway. The May 29 event-page listing showing $299.99 list / $289.99 / $279.99-with-code bundled with Uber Eats GC + Steam code + rebate card \u2014 same "lift" pattern QC reverted May 25, but with a bundled-promo mechanism this time. NOT independently verified on the bare-PDP path this cycle \u2014 treat as MAYBE LIVE as a bundle deal, verify on PDP before buying; the $229.99 PDP sale may also still be running in parallel. Best Buy $239.99 search-snippet May 30 (marked from $259.99 — backup 1P path; Best Buy PDP-fetch timed out today). 3P sellers on Newegg marketplace sit ABOVE 1P: NothingButSavings $298.59, BTE Outlet (Canada) $348.98, TECH EDGE (China) $419.99. Amazon $226.99 historical floor listed but not freshly scraped this cycle \u2014 historically the floor at $219.99-226.99; verify at checkout. Pangoly: ATL $219.99 Apr 2, broad May floor at $229.99 still holds. \u26a0\ufe0f BROADER CONTEXT: TrendForce Q2 DRAM +63% QoQ; ASUS/MSI/Gigabyte/ASRock cutting 2026 mobo shipments 24-37% (VideoCardz/Gizmochina); MSI signaling 15-30% price raises industry-wide \u2014 upward pressure building but X870 Tomahawk has HELD the $229.99 Newegg 1P floor through this week. \u26a0\ufe0f TARIFF CORRECTION: the 32% Taiwan IEEPA tariff was STRUCK DOWN by the Supreme Court Feb 2026 and replaced with a 10% Section 122 tariff (PC Gamer, tariffstool.com); Section 122 expires ~July 24, 2026 \u2014 but the AI-supply-driven shipment cut is now the dominant upward force. MSI Store still OUT OF STOCK May 30 (us-store.msi.com returned HTTP 403, geo-blocked or OOS).',
      advice: 'RECOMMENDED: \u2b50 Newegg 1P-direct $229.99 RE-VERIFIED May 30 (QC WebFetch on PDP: list $259.99 -$30 / 11% off = $229.99 sale, sold/shipped by Newegg, limit 5, free 30-day returns, #1 Best Seller in AMD Motherboards; Newegg pushed list $239.99 \u2192 $259.99 between May 26-30, same buying price). Best Buy $239.99 search-snippet May 30 (marked from $259.99) is the backup 1P (Best Buy PDP-fetch timed out today). Amazon $226.99 historical floor listed live but not freshly scraped \u2014 historically the floor at $219.99-226.99, verify before relying on it. \u26A0\uFE0F MAY 31 CORRECTION: Bundle BFEDY2A66 confirmed STALE \u2014 Slickdeals 17900610 listing actually dates to Nov 19 2024, not a current bundle. Drop from advice. Standalone $229.99 1P is the working price. Net: take the Newegg $229.99 1P sale, fall back to Best Buy $239.99 if Newegg goes OOS. AM5 with WiFi 7 + 5GbE + upgrade path through 2027+ (Zen 6 "Medusa" desktop delayed to 2027, AM5 confirmed). The 9800X3D doesn\'t need a $500 board. \u26A0\uFE0F Shipment cuts (24-37% per VideoCardz/Gizmochina) + memory crisis remain upward forces; a real hike could still arrive \u2014 buy soon if you\'re close to building.',
      sources: [
        { label: 'The FPS Review', url: 'https://www.thefpsreview.com/2025/02/04/msi-mag-x870-tomahawk-wifi-motherboard-review/' },
        { label: 'KitGuru Review', url: 'https://www.kitguru.net/components/motherboard/leo-waldock/msi-mag-x870-tomahawk-review/' },
        { label: 'Tom\'s HW: DRAM/NAND Q2 +63-75% QoQ contract hikes', url: 'https://www.tomshardware.com/pc-components/dram/dram-and-nand-contract-prices-to-climb-again-in-q2' },
        { label: 'PC Gamer: Taiwan semiconductors tariff carveout (10% Section 122)', url: 'https://www.pcgamer.com/hardware/semiconductors-are-exempt-from-trumps-massive-32-percent-tariff-on-taiwan-though-pc-gamers-will-still-feel-the-heat/' }
      ],
      buyLinks: [
        { store: 'MSI Store OUT OF STOCK May 30 (us-store.msi.com 403 — geo-blocked or OOS)', url: 'https://us-store.msi.com/MAG-X870-TOMAHAWK-WIFI' },
        { store: 'Amazon $226.99 historical floor (not freshly scraped this cycle — PDP body unparseable; verify at checkout)', url: 'https://www.amazon.com/MSI-Tomahawk-Motherboard-Processors-Bluetooth/dp/B0DG3HK897' },
        { store: '⭐ Newegg-direct $229.99 May 31 (list $259.99 -$30/11% off, sold/shipped by Newegg, limit 5, free 30-day returns, #1 Best Seller in AMD Motherboards; bundle BFEDY2A66 confirmed STALE — Slickdeals listing is Nov 2024, not current)', url: 'https://www.newegg.com/msi-mag-x870-tomahawk-wifi-atx-motherboard-amd-x870-am5/p/N82E16813144667' },
        { store: 'Best Buy $239.99 search-snippet May 30 (marked from $259.99 — backup 1P after Newegg $229.99; PDP-fetch timed out today)', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=msi+x870+tomahawk' }
      ]
    },
    {
      id: 'b650-tomahawk',
      name: 'MSI MAG B650 Tomahawk WiFi',
      price: 176,
      socket: 'AM5',
      recommended: false,
      notes: 'Budget AM5 - 14+2+1 VRM is plenty for 9800X3D. PCWorld: "leaves very little on the table". \u26A0\uFE0F Amazon ~$259 (Apr 2026 coverage, up steeply from $197). Micro Center ~$176 in-store. ⚠️ MAY 31: Newegg-direct OUT OF STOCK — page now shows only 3P BTE Outlet (Canada) $345.83 / alt sellers ~$198.52. Newegg-direct path dried up; meaningful availability change. Walmart $159.99 May 31 still live (marked from $219, saves $59.01) BUT seller is "Sure to Shop" (3P marketplace, NOT Walmart 1P) — vet seller before counting on warranty/return path. Free shipping, in stock, listing 1640611318. Best Buy listings $179.99-$233.49 in May 30 searches — SKU/region variance, PDP-fetch timed out. Micro Center refurb SKU 684978 at $149.99 (new SKU 659662 gated behind sign-in). \u26A0\uFE0F 32% Taiwan tariff effective Apr 2 \u2014 prices may continue rising.',
      advice: 'VALUE WITH CAVEAT MAY 31: \u26a0\ufe0f NEWEGG-DIRECT OUT OF STOCK today (page now 3P BTE Outlet $345.83 only \u2014 Newegg-direct path dried up, meaningful availability change). Walmart $159.99 still live (marked from $219) BUT seller is "Sure to Shop" 3P marketplace, NOT Walmart 1P \u2014 vet seller before relying on warranty/return. Cheapest online either way. Best Buy in the $179.99-$233.49 band (SKU/region variance \u2014 verify PDP). MC refurb $149.99 if you want a true 1P channel. ~$70-80 below X870 Tomahawk ($229.99 Newegg / $239.99 Best Buy May 30). Amazon still ~$259 (stale tariff/dynamic-price inflated \u2014 ignore). Micro Center ~$176 in-store still cheapest if local. \u26a0\ufe0f Motherboard shipment cuts (24-37% per VideoCardz/Gizmochina) + memory crisis remain upward forces \u2014 buy soon, but the X870\'s WiFi 7 + 5GbE + PCIe 5.0 M.2 + AM5 platform future are still worth ~$70-80 on a long-lived 4K build \u2014 buy B650 only if every dollar counts.',
      sources: [
        { label: 'PCWorld Review', url: 'https://www.pcworld.com/article/1522279/msi-mag-b650-tomahawk-wifi-motherboard-review.html' },
        { label: 'HWCooling Review', url: 'https://www.hwcooling.net/en/msi-mag-b650-tomahawk-wifi-the-cheapest-of-the-decent-ones-review/' }
      ],
      buyLinks: [
        { store: 'Micro Center $176 in-store', url: 'https://www.microcenter.com/product/659662/msi-b650-mag-tomahawk-wifi-amd-am5-atx-motherboard' },
        { store: '⚠️ Walmart $159.99 May 30 (confirmed live, marked from $219, saves $59.01 — BUT seller is "Sure to Shop" 3P marketplace, NOT Walmart 1P; vet seller before relying on warranty)', url: 'https://www.walmart.com/ip/MSI-MAG-B650-TOMAHAWK-WIFI-AM5-AMD-B650-SATA-6Gbs-DDR5-Ryzen-7000-ATX-Motherboard/1640611318' },
        { store: 'Best Buy $179.99-$233.49 band May 30 (SKU/regional variance — PDP-fetch timed out today, verify at checkout)', url: 'https://www.bestbuy.com/product/msi-mag-b650-tomahawk-wifi-socket-am5-amd-b650-atx-ddr5-wi-fi-6e-motherboard-black/J3P7TXG8HS' },
        { store: 'Amazon ~$259 (up from $211 — stale, ignore)', url: 'https://www.amazon.com/MSI-B650-Tomahawk-Motherboard-Processors/dp/B0BHCCNSRH' }
      ]
    },
    {
      id: 'x870e-strix',
      name: 'ASUS ROG Strix X870E-E Gaming WiFi',
      price: 400,
      socket: 'AM5',
      recommended: false,
      notes: 'Premium AM5 - 5x M.2 (3x PCIe 5.0), WiFi 7, 5GbE, USB4. Best-in-class. \uD83D\uDC8E Newegg-direct $399.99 May 31 RE-CONFIRMED on PDP (list $443.99 -$44 / 9% off, sold/shipped by Newegg, limit 2/customer, #4 Best Seller in AMD Motherboards; flat 4+ day hold from May 27). Pangoly $369 composite is PHANTOM— no major retailer match — CompSource shows $470.59 May 12; likely aggregating an expired/regional offer). Best Buy $417.99 May 30 (marked from $513.36, saves $95.37) is the verified backup 1P. 3P marketplace alts antonline $502 / NothingButSavings $512 sit well above Newegg-direct. Amazon $419 still listed but Newegg now the cheapest authorized channel. \u26A0\uFE0F Best Buy ~$419 (tariff-volatile). ASUS eShop $500 MSRP. \u26A0\uFE0F Price stabilized from $699 spike in Feb 2026 but 32% Taiwan tariff pressure building. \u2B50 ASUS $30 Steam code promo last CONFIRMED active Mar 11 2026 (Tweaktown; covers Strix X870E-E/H + others) \u2014 UNCONFIRMED past mid-April, "limited-time" with no verified end-date; verify on ASUS eShop before counting on it.',
      advice: 'PREMIUM: Newegg-direct $399.99 May 31 RE-CONFIRMED on PDP (list $443.99 -$44 / 9% off, sold/shipped by Newegg, limit 2/customer, #4 Best Seller in AMD Motherboards; flat 4+ day hold from May 27). Beats Amazon $419 by $19. ⚠️ Pangoly $369 composite is PHANTOM — no major retailer match (CompSource shows $470.59 May 12; likely aggregating an expired/regional offer). Best Buy $417.99 May 30 verified (marked from $513.36). Treat $369 (unverified at any major retailer \u2014 treat as transient 3P, not the buyable price. Best Buy ~$419 ties Amazon. $30 ASUS Steam code only via ASUS eShop ($500) = ~$470 effective, still not worth it. ~$170 more than X870 Tomahawk ($229.99 Newegg 1P May 30) for USB4, 5x M.2, premium VRMs. Hard to justify for a 9800X3D gaming build \u2014 buy if you actually need USB4 + 5x M.2.',
      sources: [
        { label: 'Tom\'s HW Review (4/5)', url: 'https://www.tomshardware.com/pc-components/motherboards/asus-rog-strix-x870e-e-gaming-wifi-review' },
        { label: 'PC Guide Review', url: 'https://www.pcguide.com/motherboard/review/asus-rog-strix-x870e-e-gaming-wifi/' }
      ],
      buyLinks: [
        { store: 'Amazon ~$419 (tariff-adjusted)', url: 'https://www.amazon.com/dp/B0DGFKN5HV' },
        { store: 'Best Buy $417.99 May 30 (verified — marked from $513.36, saves $95.37)', url: 'https://www.bestbuy.com/product/asus-rog-strix-x870e-e-gaming-wifi-socket-am5-amd-x870-atx-ddr5-wi-fi-7-motherboard-black/JJGGLQHLHT' },
        { store: '⭐ Newegg-direct $399.99 May 31 RE-CONFIRMED on PDP (1P, list $443.99 -$44 / 9% off, limit 2/customer, free 30-day returns, #4 Best Seller in AMD Motherboards; flat 4+ day hold from May 27; Pangoly $369 composite is PHANTOM, no major retailer match)', url: 'https://www.newegg.com/asus-rog-strix-x870e-e-gaming-wifi-atx-motherboard-amd-x870e-am5/p/N82E16813119682' },
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
      notes: '\u2B50 BEST VALUE - AMD EXPO certified. DDR5-6000 is the AM5 sweet spot (1:1 Infinity Fabric). Amazon ~$359 (confirmed Apr 21, best flat price! Pangoly-tracked). \u2B50 Newegg-direct $479.99 May 5 (UP $30 from May 3 $449.99; list $494.99, only $15 off / 3% now — sale shrunk). ⭐ Code MFSF278 appears EXPIRED \u2014 replaced by \u2b50 NEW CODE LUSF245 ($40 off) RE-VERIFIED active on Newegg PDP May 31 (Day 4 hold; QC agent direct PDP fetch confirms "limited offer" language live; applies to $479.99 list\u2192 $439.99 net direct). Smaller discount than the prior MFSF278 ($90 off was $389.99 net), but verified live this cycle. Newegg list ~$449.99-479.99 without a code. STRF99/SSF5478/PGWEF295 all confirmed expired. \u26A0\uFE0F Old code SSF5478 appears EXPIRED \u2014 absent from all coupon aggregators (Discoup, SimplyCodes, CouponFollow, Tom\'s HW) as of Apr 21. TrendForce Mar 31: DDR5 retail fell 7.2% MoM in March \u2014 FIRST monthly decline in 8 months. But still 408% above Jul 2025 baseline. Samsung+SK Hynix negotiating Q2 contract hikes of 58-63% QoQ. Shortage expected through late 2027/2028 (PC Gamer). Micron exited consumer RAM \u2014 only Samsung & SK Hynix remain. Google TurboQuant AI memory compression cited as easing some data-center demand pressure. ⚠️ TrendForce May 27 spot update: DDR5 spot gains narrowed amid sluggish trading, buyers sidelined ahead of Q2 contract finalization; Q2 DRAM contract still +58-63% QoQ, NAND +70-75% QoQ; Citi raised Samsung/SK Hynix targets May 12 citing sustained memory strength through H2 2026 — the March -7.2% retail dip has NOT continued into May. ⚠️ Tom\'s HW May 30: "all 32GB DDR5 kits under $359 wiped out within seconds" — confirms $359 Amazon is the absolute floor.',
      advice: '32GB is all you need for gaming (AAA uses ~20GB max). CL36 vs CL30 is ~1-2% gaming difference. Amazon ~$359 is the best flat price. \u2B50 Newegg-direct list $479.99 — CODE LUSF245 ($40 off, QC-re-verified active on PDP May 31, Day 4 hold) drops to ~$439.99 net. Replaces the now-expired MFSF278 ($90 off → $389.99). At $439.99 Newegg-direct is still ~$80 above the Amazon $359 floor — Amazon remains the cheapest path. STRF99/SSF5478/PGWEF295 all expired. Pangoly composite ~$399.99 best May 30 (UP from the long-standing Amazon $359 floor — Tom\'s HW May 30 confirms sub-$359 kits "wiped out within seconds"; verify Amazon directly before buying). 52-week high $801.18 Apr 25 (tariff spike). Retail pulled back 7.2% in March but TrendForce now forecasts DRAM contract +63% Q2 QoQ (after Q1 +95%), NAND +70-75% — Citi raised Samsung/SK Hynix targets May 12 citing sustained memory strength through H2 2026; no meaningful relief until late 2027/2028 \u2014 this is not the start of a price drop. Buy now at $359 Amazon.',
      sources: [
        { label: 'PC Gamer: Best RAM 2026', url: 'https://www.pcgamer.com/best-ram-for-gaming/' },
        { label: 'TrendForce: DDR5 Retail Pullback Mar 2026', url: 'https://www.trendforce.com/news/2026/03/31/news-ddr5-retail-prices-pullback-amid-market-correction-but-industry-players-cite-stable-contract-trends/' },
        { label: 'PC Gamer: DDR5 Prices Drop (Mar 30)', url: 'https://www.pcgamer.com/hardware/memory/yes-some-ddr5-ram-prices-have-dropped-recently-but-i-wouldnt-pop-the-champagne-just-yet/' },
        { label: 'Tom\'s HW (May 30): "US RAM crisis hits boiling point — sub-$359 kits vanish in seconds"', url: 'https://www.tomshardware.com/pc-components/ram/us-ram-crisis-hits-boiling-point-as-ai-mania-wipes-out-all-32gb-ddr5-kits-under-usd359-cheaper-kits-vanish-from-shelves-within-seconds-of-listing' }
      ],
      buyLinks: [
        { store: 'Amazon ~$359 (best flat price — Tom\'s HW May 30: sub-$359 kits "wiped out within seconds"; this is the hard floor)', url: 'https://www.amazon.com/G-Skill-288-Pin-CL36-36-36-96-Channel-F5-6000J3636F16GX2-FX5/dp/B0BFGB2D2Z' },
        { store: 'Newegg-direct $479.99 list May 31 (\u2b50 CODE LUSF245 -$40 = $439.99 net, QC-re-verified active on PDP via direct fetch, Day 4 hold; replaces expired MFSF278; 3P Circuit Nest $438.97 still ties net)', url: 'https://www.newegg.com/g-skill-flare-x5-32gb-ddr5-6000-cas-latency-cl36-desktop-memory-black/p/N82E16820374419' },
        { store: 'Walmart ~$410', url: 'https://www.walmart.com/search?q=g.skill+flare+x5+ddr5+6000' }
      ]
    },
    {
      id: 'ddr5-32gb-6000-cl30',
      name: '32GB DDR5-6000 CL30 (Kingston FURY Beast)',
      price: 474,
      capacity: 32,
      recommended: false,
      notes: 'Tighter CL30 timings for ~1-2% more gaming perf. AMD EXPO + Intel XMP 3.0 certified. Amazon ~$468.95 holds May 30 (flat since May 25, no further softening from $474 May 17). Newegg-direct $489.99 holds May 10 (was $499.99 Apr 28, sale held; non-RGB SKU KF560C30BBEK2-32, $135 / 21% off $624.99 list, sold/shipped by Newegg, limit 5). 3P range $512-$527 (Amigos / BeachAudio / antonline). Best Buy ~$480. \u26A0\uFE0F DDR5 retail softening slightly in March (first drop in 8 months) but contract prices unchanged \u2014 caution on expecting big drops.',
      advice: 'PREMIUM TIMINGS: CL30 is technically optimal but now ~$80-110 more than CL36 ($468.95 vs $359 Amazon Flare X5 floor / $399 Pangoly composite) for 1-2% real-world difference. Amazon ~$468.95 May 30 holds (flat vs May 25) is the cheapest CL30. Newegg-direct $489.99 close behind. The CL30 premium is barely justified; stick with Flare X5 CL36.',
      sources: [
        { label: 'PC Gamer: Best RAM 2026', url: 'https://www.pcgamer.com/best-ram-for-gaming/' },
        { label: 'TechRadar: Best DDR5', url: 'https://www.techradar.com/computing/best-ddr5-ram' }
      ],
      buyLinks: [
        { store: 'Amazon ~$468.95 May 30 (flat vs May 25, no further softening from $474 May 17, best!)', url: 'https://www.amazon.com/Kingston-2x16GB-6000MT-Desktop-KF560C30BBEAK2-32/dp/B0CYM58GFS' },
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
      advice: 'OVERKILL FOR GAMING: Games use ~20GB max. You\'re paying ~$480-520 extra over 32GB ($880 vs $359-399) for capacity you\'ll never touch in games. Price holds at $880 non-RGB / $950 RGB May 30 \u2014 52-week high $1,044.99 Feb 16. TrendForce May 27 spot update: DDR5 gains narrowed amid sluggish trading, buyers sidelined; Q2 DRAM contract +58-63% QoQ, NAND +70-75% QoQ. Tom\'s HW May 30: "all 32GB DDR5 kits under $359 wiped out within seconds" \u2014 shortage WORSENING not easing, structural AI demand hasn\'t changed, no fab relief until 2027-2028. Buy 32GB now and upgrade later if/when prices normalize.',
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
      notes: 'Updated V2 of GN\'s "The Champ" air cooler. Amazon ~$33 holds May 30 (WebSearch confirms $33 Amazon US, flat since the May 6 reversal from $40 May 5 \u2014 long-stable at the Apr 21 floor; Tom\'s HW cites a $36 alt listing). Newegg SE V2 $49.90 (Thermalright Authorized Store, top-rated, holds since Apr 28 \u2014 list price now matches sale). Dual-tower, 6 heatpipes, AGHP Gen 5.0, rated to 265W TDP. Supports LGA 1851/1700 and AM5.',
      advice: 'BUDGET: ⭐ Amazon ~$33 holds May 30 (WebSearch-confirmed, flat since the May 6 reversal from $40 — long-stable at the Apr 21 floor). Absurd deal for 9800X3D (120W). Beats $80-100 towers at half the price. Newegg V2 $49.90 if Amazon out. NOT enough for i9-14900K under sustained 253W load.',
      sources: [
        { label: 'GN: PA120 SE Review', url: 'https://gamersnexus.net/coolers/champ-41-thermalright-peerless-assassin-cpu-cooler-review-benchmarks' },
        { label: 'Tom\'s HW Review', url: 'https://www.tomshardware.com/reviews/thermalright-peerless-assassin-120-se' }
      ],
      buyLinks: [
        { store: 'Amazon ~$33 holds May 30 (WebSearch-confirmed, flat since the May 6 reversal from $40 May 5; long-stable at the Apr 21 floor)', url: 'https://www.amazon.com/Thermalright-Peerless-Assassin-120-Cooler/dp/B0DP23NF7T' },
        { store: 'Newegg $49.90 (Thermalright Authorized, holds since Apr 28)', url: 'https://www.newegg.com/p/13C-000Y-000M3' }
      ]
    },
    {
      id: 'arctic-360-pro',
      name: 'Arctic Liquid Freezer III Pro 360',
      price: 84,
      type: 'aio',
      recommended: true,
      notes: '\u2B50 GN "The New Best" AIO - 2C cooler than standard on AMD, 10C on Intel. Integrated VRM fan. Nothing else comes close. Amazon Non-RGB Black ~$83.99 STILL ACTIVE May 31 (Memorial Day deal Day 5 post-holiday survival via Arctic Amazon store; flat May 25-31; DOWN ~$5 from $89 May 17 — Neowin May 23 article still indexed, no expiration coverage) \u2014 Tom\'s HW Memorial Day deal article confirms "lowest-ever price" (non-RGB $89, the prior $105 listing dropped back to the ATL). ⚠️ ARGB Black $91.49 Memorial Day deal EXPIRED May 27 (Slickdeals flagged expired post-holiday, ARGB reverting toward ~$110+ MSRP territory; Tom\'s HW "lowest-ever" Memorial Day window now closed \u2014 HIGH confidence). Unusually durable hold for a holiday deal; signals weakened cooler demand or excess Arctic inventory. ⚠️ Newegg first-party listing GONE Apr 30 — only 3P TELeasy at $165.99 / B-IN $169.99 (red flag — Amazon is the only sane path). Tom\'s HW: "Best AIO for 9950X3D and Intel too." Tech4Gamers: "Cooler To Beat In 2026."',
      advice: 'RECOMMENDED: ⭐⭐ Amazon Non-RGB Black ~$83.99 STILL ACTIVE May 31 (Memorial Day deal Day 5 post-holiday — flat May 25-31; DOWN $5 from $89 May 17; Neowin May 23 article re-confirms) for the best AIO ever tested. Unusually durable hold for a holiday deal. ⚠️ ARGB Black $91.49 Memorial Day deal EXPIRED May 27 — if you want lighting, ARGB has reverted to ~$110-124 MSRP and the Non-RGB Black is the better buy now. Handles both 14900K and 9800X3D with ease. ~$107 cheaper than the Corsair Titan ($191) for better thermals.',
      sources: [
        { label: 'GN: "The New Best"', url: 'https://gamersnexus.net/coolers/new-best-arctic-liquid-freezer-iii-360-280-cpu-cooler-review-benchmarks' },
        { label: 'Tom\'s HW: Pro Review', url: 'https://www.tomshardware.com/pc-components/liquid-cooling/arctic-liquid-freezer-iii-pro-review' },
        { label: 'Tech4Gamers: "Cooler To Beat"', url: 'https://tech4gamers.com/arctic-liquid-freezer-iii-pro-360-a-rgb-review/' },
        { label: 'Tom\'s HW: ARGB $91 "lowest-ever" Memorial Day deal', url: 'https://www.tomshardware.com/pc-components/liquid-cooling/the-best-cpu-cooler-available-hits-its-lowest-ever-price-arctics-liquid-freezer-iii-pro-360-argb-all-in-one-liquid-cpu-cooler-is-now-only-usd91-for-memorial-day' }
      ],
      buyLinks: [
        { store: '\u2b50\u2b50 Amazon ~$83.99 Non-RGB Black STILL ACTIVE May 31 (Day 5 post-holiday survival via Arctic store; \u26a0\ufe0f ARGB Black $91.49 deal EXPIRED May 27, reverted to ~$110-124 MSRP) \u2014 Newegg 1P gone Apr 30, Amazon is the path', url: 'https://www.amazon.com/Parent-ARCTIC-Liquid-Freezer-III/dp/B0F2TRHJX3' },
        { store: 'PCPartPicker', url: 'https://pcpartpicker.com/product/v2kqqs/arctic-liquid-freezer-iii-pro-360-77-cfm-liquid-cpu-cooler-acfre00180a' }
      ]
    },
    {
      id: 'corsair-titan',
      name: 'Corsair iCUE Link Titan 360 RX RGB',
      price: 160,
      type: 'aio',
      recommended: false,
      notes: 'Premium AIO - Corsair FlowDrive pump, hot-swap caps, iCUE ecosystem integration. LCD variant available at ~$250+. \u2b50 Corsair.com $159.99 holds May 10 (sale from $199.99, Best Seller, free ship, in stock \u2014 verified May 5, sale held 5 days). Amazon ~$190.99 holds May 16 (Pangoly/CamelCamelCamel, flat). Newegg-direct $199.99 still OOS; 3P WaveRide CA $153.99. Price volatile in 2026 \u2014 12-mo range $140-322, avg $191.',
      advice: 'LUXURY: ⭐ Corsair.com $159.99 CONFIRMED still live May 31 via QC WebFetch (Best Seller, free shipping, June 3-4 delivery — marked down from $199.99-$239.99 list; 1P Best Seller historically \u2014 verify price on page; beats Amazon ~$190.99). ⭐ Best Buy ~$159.99 (PDP-fetch timed out May 31, prior $159.99 match assumed holding). Gap to Arctic stays ~$76 (Arctic Non-RGB Black $83.99 Day 5 hold). Newegg-direct still OOS. Still buy for iCUE/aesthetics, not thermals.',
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
      price: 285,
      recommended: true,
      notes: '\u2B50 BEST VALUE SSD - Gen4 speeds at nearly half the 990 Pro price. Gaming load times are identical. \u26A0\uFE0F NAND CRISIS DEEPENING: ⚠️⚠️ Amazon ~$290 holds May 30 (Pangoly confirms sustained at $290 since the May 6 jump from $245— long-stable; high $649.98 Mar 21; finite Crucial channel stock, Micron discontinued the brand) — NAND crisis squeeze continuing exactly as TrendForce forecast. wccftech still cites old $213.99 deal but that was March \u2014 Wccftech still cites old $213.99 deal). Best Buy ~$260 (last verified May 25, no fresh signal). ⭐ MAY 31 QC CORRECTION: research agent claimed Newegg-direct DELISTED — FALSE. QC direct PDP fetch confirms Newegg-direct STILL ACTIVE at $284.99 with free shipping (cheapest 1P channel); 3P sellers exist (BioStar $283.95, MobileMonster $288.95, 3C Expert $325.00) but Newegg-direct is the cheapest 1P path, not delisted. The "DELISTED" framing was a research-agent hallucination — reverted by QC. Amazon ~$290 (Pangoly composite) sits ABOVE Newegg-direct $284.99. Prices spiked to $400 in Feb 2026, now pulling back. Was $94 in mid-2025. NAND costs up 246% YoY per Kingston (Apr 24 update, 60-day acceleration), all 2026 production sold out (Phison CEO). Tom\'s HW: "pricing apocalypse through 2027." ⚠️⚠️ MICRON CRUCIAL CONSUMER BRAND OFFICIALLY DISCONTINUED FEB 2026 (TrendForce) — Q3 2026 all Micron DRAM/NAND goes to AI customers. P310 stock is FINITE; once depleted, no replenishment from Micron. TrendForce Apr 15 spot update: DDR4 still edging lower 0.48% WoW but NAND supply structurally tight. Q1 contract prices surged 55-60% QoQ and TrendForce now forecasts Q2 +70-75% QoQ (accelerating; client SSDs +40%+ QoQ the steepest category), no supply relief until late 2027. Buy ASAP \u2014 volatile.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: P310 Review', url: 'https://www.tomshardware.com/reviews/crucial-p310-ssd-review' },
        { label: 'TrendForce: Micron ends Crucial brand Feb 2026', url: 'https://www.trendforce.com/news/2025/12/04/news-micron-to-end-crucial-consumer-memory-by-feb-2026-redirects-supply-to-enterprise-amid-ai-surge/' },
        { label: 'DropReference: SSD 2026 NAND crisis — NVMe +115% YoY', url: 'https://dropreference.com/en/blog/news/ssd-price-increase-2026-nand-flash-crisis' }
      ],
      buyLinks: [
        { store: 'Amazon ~$290 holds May 31 (Pangoly composite; sits above Newegg-direct $284.99; high $649.98 Mar 21; verify at checkout)', url: 'https://www.amazon.com/Crucial-P310-2280-PCIe-Gen4/dp/B0DC8RVRBZ' },
        { store: 'Best Buy ~$260 (last verified May 30, no fresh May 31 signal)', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=crucial+p310+2tb' },
        { store: '⭐ Newegg-direct $284.99 May 31 (QC PDP-fetch-verified, 1P sold/shipped by Newegg, free shipping, cheapest 1P channel; 3P sellers BioStar $283.95 / MobileMonster $288.95 / 3C Expert $325.00 — research agent\'s "delisted" claim was FALSE, reverted)', url: 'https://www.newegg.com/crucial-2tb-p310-nvme/p/N82E16820156413' }
      ]
    },
    {
      id: 'ssd-2tb',
      name: '2TB Samsung 990 Pro',
      price: 389,
      recommended: false,
      notes: 'Best Gen4 SSD. 7,450 MB/s read. Was $133 \u2014 NAND shortage still ~3x the price.\u2B50\u2B50\u2B50 AMAZON MEMORIAL DAY DEAL EXTENDED INTO DAY 5 May 31: $389.99 STILL ACTIVE per Gizmodo "final clearance push" headline (re-confirmed May 31) + TechRadar/wccftech ($389.99, 39% off $639.99 MSRP). \u2B50 Newegg-direct $389.99 holds May 31 (1P, both non-heatsink and heatsink SKU variants; limit 5/customer; 3P floor PlatinumMicro $388.99 ties). Cheapest 990 Pro 2TB in months. \u26A0\uFE0F Snapback risk HIGH next 24h; "final clearance push" framing now in Day 5 \u2014 pattern says this is final-call territory; Tom\'s HW prior $429.99 framing is the realistic post-holiday equilibrium. \u26A0\uFE0F Prior baseline (still relevant if Amazon deal ends): Pangoly composite tracker ~$429.99 (flat vs May 17; Tom\'s HW Memorial Day-adjacent confirms ~$200 off recent highs but still 3x normal; gaming-SSD comparisons now peg it ~$400, "more than doubled from $190" — same band; well off the Apr 21 $917.84 intra-month high; Pangoly excludes Amazon, authorized-retailer composite). Samsung.com $639.99. Newegg 3P BioStar $493.75 / MobileMonster $493.76 / Best Deals For You $494.99 (Newegg-direct not 1P). \u26A0\uFE0F The $493 Newegg 3P floor is still $90 BELOW Amazon 1P May 10 \u2014 best non-MC path. \u2B50 Micro Center ~$280 in-store still cited but UNVERIFIED May 10 (suspicious gap vs national channel — call store before driving). Still ~3.2x the $133 mid-2025 low (down from ~4.3x peak). Hit $844 high on Mar 31, $917.84 high on Apr 21. \u26A0\uFE0F NAND CRISIS WORSENING: TrendForce Mar 31 forecasts Q2 2026 NAND contract prices +70-75% QoQ on top of Q1\'s ~60% jump. Phison CEO: all 2026 NAND production already sold out, "pricing apocalypse" through 2027. Enterprise SSDs now ~60% of global NAND output \u2014 consumer allocation shrinking. Volatile \u2014 verify at checkout, direction is UP.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: 990 Pro Review', url: 'https://www.tomshardware.com/reviews/samsung-990-pro-ssd-review' },
        { label: 'TechRadar (May 27): 990 Pro 2TB $389.99 Memorial Day', url: 'https://www.techradar.com/pro/samsungs-absolutely-stellar-m-2-ssd-for-both-professional-users-and-gamers-is-just-usd390-in-the-amazon-memorial-day-sale-thats-a-usd250-discount-on-our-5-star-2tb-internal-ssd' }
      ],
      buyLinks: [
        { store: 'Micro Center ~$280 (UNVERIFIED May 10 — call store)', url: 'https://www.microcenter.com/product/661028/samsung-990-pro-2tb-ssd' },
        { store: '\u2b50\u2b50\u2b50 Amazon Memorial Day $389.99 EXTENDED Day 5 May 31 (Gizmodo "final clearance push" headline re-confirmed; TechRadar/wccftech corroborate; 39% off $639.99 list; cheapest 990 Pro 2TB in months; snapback risk HIGH next 24h, Day 5 is final-call territory, $429 likely post-window equilibrium)', url: 'https://www.amazon.com/SAMSUNG-Internal-Expansion-MZ-V9P2T0B-AM/dp/B0BHJJ9Y77' },
        { store: '\u2b50\u2b50 Newegg-direct $389.99 holds May 31 (1P, both non-heatsink MZ-V9P2T0B/AM and heatsink MZ-V9P2T0CW variants; limit 5/customer; 3P floor PlatinumMicro $388.99 ties)', url: 'https://www.newegg.com/samsung-2tb-990-pro-nvme-2-0/p/N82E16820147861' },
        { store: 'Best Buy ~$440', url: 'https://www.bestbuy.com/site/searchpage.jsp?st=samsung+990+pro+2tb' }
      ]
    },
    {
      id: 'ssd-4tb',
      name: '4TB Samsung 990 Pro',
      price: 840,
      recommended: false,
      notes: 'Single-sided 4TB. Premium for capacity. \u26A0\uFE0F \u26a0\ufe0f Newegg 3P floor LIFTED May 31: MEMORYnMORE $809.95 pulled, BioStar $839.95 back as the floor (UP $30 in 24h \u2014 yesterday\'s MEMORYnMORE leader sold out). Cluster behind: EvoMicro $839.99, BestDealsForYou $864.99. The downward pressure reversed; Newegg-direct now $999. The MEMORYnMORE flash was a 24h event. \u26A0\uFE0F AMAZON MEMORIAL DAY DEAL May 27 at $940 (15% off, "stock almost out" per PC Guide) \u2014 stock thinning at this price May 30, snapback above $1,000 imminent. Pangoly composite still ~$880 (DOWN ~$19 from $899 May 17 — modest relief vs NAND-squeeze backdrop; was $799.99 May 13 → $899 May 16 — NAND squeeze sustained; Pangoly excludes Amazon, authorized-retailer composite; Apr 22 spike-print hit $2,199 from 3P gougers). ⚠️ Newegg 3P floor LIFTED May 10: ServerQue $849 GONE (was the floor since Apr 28 \u2014 11+ day hold). [NOTE: that $929+ floor data is now stale \u2014 direct-fetch May 25 confirmed actual 3P floor is $819.95-$849, see above]. 30-day avg $725 per pricehistory.app stale \u2014 May 10 is solidly above that. Hit $1,600 in Feb 2026. Was $250 in Nov 2023. Still ~3x the mid-2025 low. NAND crisis continues \u2014 Q1 2026 contract prices surged 55-60% QoQ, TrendForce forecasts Q2 +70-75% QoQ; Samsung reportedly halting SATA SSD production (Tweaktown) \u2014 no relief until late 2027. Price volatile, trending UP \u2014 check at purchase time.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW: 990 Pro Review', url: 'https://www.tomshardware.com/reviews/samsung-990-pro-ssd-review' }
      ],
      buyLinks: [
        { store: 'Pangoly composite ~$880 May 25 (DOWN ~$19 from $899 May 17 — 3P Newegg floor actually $819.95-$849 per QC direct-fetch \u2014 verify at checkout)', url: 'https://www.amazon.com/s?k=samsung+990+pro+4tb' },
        { store: '⚠️ Newegg 3P floor LIFTED May 31: MEMORYnMORE $809.95 (May 30 leader) SOLD OUT/pulled; BioStar $839.95 back as floor (UP $30 in 24h); cluster behind: EvoMicro $839.99 / BestDealsForYou $864.99; Newegg-direct now $999 — vet 3P seller rating', url: 'https://www.newegg.com/samsung-4tb-990-pro-nvme-2-0/p/N82E16820147879' }
      ]
    }
  ],
  case: [
    {
      id: 'corsair-4000d-rs',
      name: 'Corsair Frame 4000D RS',
      price: 115,
      recommended: true,
      notes: '\u2B50 Includes 3 fans! Great airflow, clean cable management, InfiniRail fan mounting. GN: "Corsair Remembered How to Make a Case." \u26A0\uFE0F SALE STILL GONE May 31 (Day 6): Newegg 1P direct Black $114.99 holds since May 26 (UP $30 from the $84.99 26%-off sale that ran May 5-25; QC WebFetch on Newegg PDP confirms list = sale = $114.99 with no active discount, no promo). 6-day hold at $114.99. Newegg ARGB Black variant $124.99. Corsair MSRP $119.99. Newegg sold-by-Newegg, free 30-day returns. The reliable buy WAS $84.99; now $114.99 list \u2014 wait for the sale to return (Corsair has run this case at $84.99 multiple times this year) or accept current $114.99. \u26a0\ufe0f WHITE $59.99 NOT RE-VERIFIED May 25: the May 5 Slickdeals Amazon WHITE $59.99 (CC-9011313-WW) and B&H $59.99 + ASUS ROG Orion headset bundle were live May 17 but have NOT been re-confirmed this week \u2014 treat as possibly expired (Slickdeals/B&H stock flash-deals). If still live, still the cheapest 4000D RS in years (~$25 below Newegg Black) \u2014 verify at checkout. Pangoly composite May 25 shows non-ARGB ~$99.99, ARGB $109.99 \u2014 standard pricing without the $59.99 deal. Corsair.com Wood RS variant $129.99 (different SKU, the standard 4000D RS RS-fan version is back to ~$99.99-114.99 list across retailers). ARGB variant ~$125. Amazon dynamic pricing on Black variant. \u26A0\uFE0F Earlier $57.86/$70.04 Amazon 30% coupon (Apr 18 Slickdeals YMMV) long expired. Watch Slickdeals for sale return \u2014 Corsair has run this case at $84.99 multiple times in 2026. \u2b50 NEW MAY 31: Corsair Vault series Frame 4000D LIMITED EDITION launched at $140 per Tom\'s HW \u2014 color-shifting paintjobs + upgraded front-panel I/O, premium spin on the same chassis if Langley wants a flashier build.',
      advice: '',
      sources: [
        { label: 'GN: "Corsair Remembered How to Make a Case"', url: 'https://gamersnexus.net/cases/corsair-remembered-how-make-case-frame-4000d-rs-argb-review' },
        { label: 'Tom\'s HW: "Lightweight, Effective"', url: 'https://www.tomshardware.com/pc-components/pc-cases/corsair-frame-4000d-case-review' },
        { label: 'Slickdeals (May 5): 4000D RS White $59.99 Amazon', url: 'https://slickdeals.net/f/19492038-59-99-corsair-4000d-rs-frame-modular-high-airflow-mid-tower-pc-case-white-at-amazon' },
        { label: 'Tom\'s HW (May 31): Corsair Vault Frame 4000D limited edition $140 with color-shift paint', url: 'https://www.tomshardware.com/pc-components/pc-cases/corsairs-new-vault-series-frame-4000d-cases-have-color-shifting-paintjobs-priced-at-usd140-these-limited-edition-towers-also-feature-upgraded-front-panel-i-o' }
      ],
      buyLinks: [
        { store: '⚠️ Newegg $114.99 May 31 (1P direct Black, Day 6 hold; sale ENDED 6+ days ago — UP $30 from $84.99 26%-off that held May 5-25; ARGB Black variant $124.99; wait for sale to return)', url: 'https://www.newegg.com/corsair-atx-mid-tower-frame-4000d-rs-argb-steel-tempered-glass-computer-case-black/p/N82E16811139230' },
        { store: '⚠️ B&H WHITE $59.99 + ASUS ROG Orion headset bundle (live May 17, NOT re-verified May 25 — verify before relying on it)', url: 'https://www.bhphotovideo.com/c/search?q=corsair+frame+4000d+rs+white' },
        { store: '⚠️ Amazon WHITE non-ARGB $59.99 — Slickdeals May 5 (CC-9011313-WW); NOT re-verified May 25, likely expired — verify before counting on it', url: 'https://www.amazon.com/CORSAIR-4000D-Modular-Airflow-Mid-Tower/dp/B0DPJ9FD5N' },
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
      notes: 'Proven airflow champ. 160mm fans, 392mm GPU clearance. \u2B50 Best Buy $102.99 holds May 31 (HIGH confidence, 216RX Black ARGB; compare $111.49; RGB variants $112-133 on Amazon). ⭐ NEW MAY 31: Newegg 216X non-RGB base DROPPED to $99.99 (a $3 undercut vs the 216RX RGB tier; cheapest in-channel option if you don\'t need lighting). ⭐ Newegg-direct 216RX $102.99 holds May 31 (1P, sold/shipped by Newegg). $10 gift card promo last confirmed Apr 21 — STILL UNVERIFIED May 17, treat as possibly lapsed (effective net ~$93 IF still live). \u26A0\uFE0F Amazon prior $167 spike unable to re-verify, listings active but dynamic pricing \u2014 Newegg best with gift card, otherwise Newegg/Best Buy tied at $102.99.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW Review', url: 'https://www.tomshardware.com/reviews/lian-li-lancool-216-review' }
      ],
      buyLinks: [
        { store: '⭐ Best Buy $102.99 May 31 (confirmed, HIGH confidence, 216RX Black ARGB; compare $111.49)', url: 'https://www.bestbuy.com/product/lian-li-lancool-216rx-black-steel-tempered-glass-atx-mid-tower-with-2x-16cm-argb-fans-black/J39TC2KZJ9' },
        { store: '⭐ Newegg 216X non-RGB base $99.99 May 31 (NEW low, $3 undercut vs 216RX RGB tier) / 216RX RGB $102.99 (1P holds May 31; $10 gift card promo UNVERIFIED, treat as possibly lapsed)', url: 'https://www.newegg.com/lian-li-atx-mid-tower-steel-tempered-glass-cases-black-lancool-216rx/p/2AM-000Z-000A8' },
        { store: 'Amazon ~$167 (\u26A0\uFE0F inflated!)', url: 'https://www.amazon.com/LANCOOL-Computer-All-Around-Pre-Installed-Innovative/dp/B0BN3SY5XW' }
      ]
    },
    {
      id: 'fractal-north',
      name: 'Fractal Design North',
      price: 155,
      recommended: false,
      notes: '\u2B50 Stunning wood+mesh design. Great airflow despite aesthetic focus. \u2B50 Newegg $154.99 Charcoal Black Mesh holds May 31 (limit 5/customer, sold/shipped Newegg; 6-day hold—). Walmart $151.06. The $109.97 figure some trackers quote is from a Sep 2024 Tom\'s HW deal, NOT currently available. Amazon ~$171 per TechSpot Feb tracking. March $124 Amazon Big Spring sale expired (9to5toys flagged). B&H prior $119 unable to re-verify (403 anti-scrape). \u26A0\uFE0F Tariff risk: Section 301 tariffs on Chinese electronics delayed until Nov 10, 2026 \u2014 prices stable for now but expect hikes in H2.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW Review', url: 'https://www.tomshardware.com/reviews/fractal-design-north' }
      ],
      buyLinks: [
        { store: '\u2b50 Newegg $154.99 Charcoal Black Mesh May 31 (limit 5/customer, sold/shipped Newegg; 6-day hold)', url: 'https://www.newegg.com/fractal-design-atx-mid-tower-steel-case-charcoal-black-fd-c-nor1c-01/p/N82E16811352203' },
        { store: 'Walmart ~$151.06 holds May 31 (still cheapest verified path)', url: 'https://www.walmart.com/ip/Fractal-Design-North-ATX-mATX-Mid-Tower-PC-Case-Charcoal-Black-Chassis-with-Walnut-Front-and-Mesh-Side-Panel/2926667655' },
        { store: 'B&H (price unverified \u2014 anti-scrape)', url: 'https://www.bhphotovideo.com/c/product/1752176-REG/fractal_design_fd_c_nor1c_01_north_mid_tower_atx_case.html' },
        { store: 'Amazon ~$194.99 higher-trim (May 25)', url: 'https://www.amazon.com/s?k=fractal+design+north+case' }
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
      notes: 'ATX 3.1 (2025 refresh), native 12V-2x6, PCIe 5.1, 7yr warranty. \u26a0\ufe0f\u26a0\ufe0f Newegg DROPPED to $111.90 May 10 (DOWN $18 from $129.99 May 8 floor; 25% off $129.99 \u2014 Newegg cut both list AND sale; sold/shipped by Newegg, limit 3 free 30-day returns; \u26a0\ufe0f code SSF6437 still NOT visible on product page May 8 \u2014 treat as expired/built-in; coupon aggregators still reference it but unverifiable). Amazon ~$125. Best Buy ~$144.99. ⚠️ Newegg PDP $129.99 list with "Save 16%" promo badge May 31 — discounts to $124.90 net via the in-page promo (QC research agent direct fetch; limit 3/customer, in stock); the $111.90 May 10 deep-promo stays lapsed. ⭐ NEW MAY 31: Best Buy search snippet surfaces $109.99 (DOWN $35 from the $144.99 holding price — meaningful drop, worth verifying on PDP before relying on). Corsair.com $139.99 (down from $154.99) as official store reference. PCPartPicker lowest alt listing $109.99. Good for 9800X3D + 5080. \u26A0\uFE0F China PSU tariff stack: 45% current rate on imported AC/DC power supplies (100electronics/bravoelectro, Apr 2026) + distributors raised 6-10% in Jan \u2014 expect further hikes in H2 2026. Watch Slickdeals — the $95 flash has already recurred once this month.',
      advice: '',
      sources: [
        { label: 'Best Buy', url: 'https://www.bestbuy.com/product/corsair-rme-series-rm850e-80-plus-gold-fully-modular-low-noise-atx-3-1-and-pcie-5-1-power-supply-black/J39QHT23VT' }
      ],
      buyLinks: [
        { store: '⚠️ Newegg $129.99 list with "Save 16%" badge May 31 — discounts to $124.90 net via in-page promo (QC direct fetch confirmed live PDP N82E16817139336; limit 3/customer, in stock— walked back to the on-page $129.99 figure; the $111.90 May 10 deep-promo has lapsed. Prior context: was $129.99 May 8 — 25% off $129.99 list; $111.90 promo UNCONFIRMED May 17, may have lapsed toward ~$129.99; sold/shipped by Newegg, limit 3; code SSF6437 still gone from product page \u2014 expired/built-in)', url: 'https://www.newegg.com/corsair-rmx-series-atx-3-1-compatible-850-w-cybenetics-gold-power-supply-black-rm850e/p/N82E16817139336' },
        { store: 'Amazon ~$125 May 31 (JS-blocked PDP, snippet-cited; carryover from May 30)', url: 'https://www.amazon.com/CORSAIR-RM850e-Modular-Low-Noise-12V-2x6/dp/B0DPR86ZC8' },
        { store: '⭐ Best Buy $109.99 May 31 NEW LOW (search snippet — DOWN $35 from $144.99; verify on PDP before relying; if confirmed, cheapest authorized 1P channel)', url: 'https://www.bestbuy.com/product/corsair-rme-series-rm850e-80-plus-gold-fully-modular-low-noise-atx-3-1-and-pcie-5-1-power-supply-black/J39QHT23VT' }
      ]
    },
    {
      id: 'rm1000e',
      name: 'Corsair RM1000e (ATX 3.1)',
      price: 148,
      wattage: 1000,
      recommended: false,
      notes: 'ATX 3.1, 1000W Gold, compact 140mm. Headroom for any GPU. ⭐ Newegg BLACK SKU N82E16817139337 holds $169.99 May 31 (10% off $189.99 MSRP, $20 savings; sold/shipped by Newegg, limit 3/customer, free 30-day returns; 21-day hold from May 10). ⚠️ The research agent claimed "Newegg LIFTED to $174.99" — that was WHITE-SKU confusion AGAIN (white N82E16817139342 is $174.99 off $179.99, but BLACK is still $169.99). QC reverted; this is the second nightly in a row to make the white/black RM1000e SKU mistake (Best Buy version of the same error is already documented below). \u2b50 Pangoly tracker shows $149.99 current May 10 (RM1000e 2025 refresh) \u2014 UNVERIFIED at Newegg-direct, may be 3P spot or aggregator stale data; verify before treating as floor. Amazon ~$170. ⭐ Best Buy BLACK SKU (J39QHT28XQ) $147.99 last verified May 25 (PDP-fetch timed out May 31 — assume still cheapest 1P if holding; no fresh contradicting signal). B&H ~$175. \u2B50 Per Newegg listing, GIGABYTE RTX 5080 WindForce OC May 10 ships with FREE 1000W 80+ Gold PSU (combo holds since May 2 — 8 days) \u2014 if you\'re buying that GPU, skip a separate PSU here.',
      advice: '',
      sources: [
        { label: 'Tom\'s HW', url: 'https://www.tomshardware.com/pc-components/power-supplies/corsair-rm1000e-atx-3-1-power-supply-review' }
      ],
      buyLinks: [
        { store: 'Amazon ~$170 (best!)', url: 'https://www.amazon.com/CORSAIR-RM1000e-Modular-Low-Noise-12V-2x6/dp/B0DPR5RZ1T' },
        { store: '⭐ Best Buy BLACK $147.99 May 25 (QC-verified, SKU J39QHT28XQ — the cheapest 1P path; prior nightly\'s "$174.99 lift" was white-SKU confusion, black is unchanged from May 17)', url: 'https://www.bestbuy.com/product/corsair-rme-series-rm1000e-80-plus-gold-fully-modular-low-noise-atx-3-1-and-pcie-5-1-power-supply-black/J39QHT28XQ' },
        { store: 'B&H ~$175', url: 'https://www.bhphotovideo.com/c/search?q=corsair+rm1000e' },
        { store: '⭐ Newegg BLACK $169.99 May 26 (QC-verified live on PDP N82E16817139337 — 10% off $189.99 MSRP, flat since May 10; sold/shipped by Newegg, limit 3, free 30-day returns. The research agent\'s "LIFTED to $174.99" claim was WHITE-SKU confusion again — white N82E16817139342 is $174.99 off $179.99, but the BLACK SKU we link to is still $169.99)', url: 'https://www.newegg.com/corsair-rmx-series-atx-3-1-compatible-1000-w-cybenetics-gold-power-supply-black-rm1000e/p/N82E16817139337' }
      ]
    },
    {
      id: 'dp13-1000',
      name: 'be quiet! Dark Power 13 1000W Titanium',
      price: 250,
      wattage: 1000,
      recommended: false,
      notes: 'Titanium efficiency (95.2%), virtually silent, 10yr warranty. Amazon ~$230. \u2b50 Newegg $249.90 holds May 31 (Day 2 \u2014 gave back the May 29 $259.49 bump in 24h, now flat for 2 days; MSRP $249.99, basically at MSRP; sold/shipped by Newegg, limit 10/customer; in stock). Best Buy $259.49 likely stale post-Newegg-reversal \u2014 verify. CompSource $237.62 (Mar 11 ref, possibly stale). Pangoly best price $229.90 (composite, may reflect 3P stock). Newegg $249.90 STILL NOT re-confirmed May 25 (CompSource $237.62, Amazon ~$230 — possible softening still in play) (other retailers $229.90-237.62, Amazon ~$230 — possible softening). ⚠️ Dark Power 14 1000W successor (ATX 3.1, Cybenetics Titanium) now listed on Amazon — may pressure DP13 pricing/value down. Still ATX 3.0 (not 3.1 like Corsair units).',
      advice: '',
      sources: [
        { label: 'be quiet! Official', url: 'https://www.bequiet.com/en/powersupply/4046' }
      ],
      buyLinks: [
        { store: '⭐ Newegg $249.90 May 31 (Day 2 flat — gave back the May 29 $259.49 bump; sold/shipped by Newegg, 1P, limit 10/customer; in stock; essentially at $249.99 MSRP)', url: 'https://www.newegg.com/be-quiet-atx-3-0-compatible-1000-w-80-plus-titanium-certified-power-supplies-black/p/1HU-004H-000R8' },
        { store: 'Amazon ~$230', url: 'https://www.amazon.com/quiet-Titanium-Efficiency-Modular-Supply/dp/B0BV6CWS2Z' },
        { store: 'Best Buy ~$259', url: 'https://www.bestbuy.com/product/be-quiet-dark-power-13-1000w-atx-3-0-psu--80-plus-titanium--pcie-5-0--fully-digital-modular--10-year-warranty/CC5VXLQ2PY' }
      ]
    }
  ]
};
