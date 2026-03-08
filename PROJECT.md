# warplan

> WWII-themed gaming PC configurator dashboard for Langley

## Vision

A carefully researched, opinionated gaming PC parts guide for Phil's nephew Langley. Themed as a WWII tactical briefing — "Operation: Gaming Rig." Every recommendation is backed by benchmarks, reviews, and current pricing. Langley owns an i9-14900K but is open to switching if the evidence supports it.

**Target:** 4K @ 160Hz AAA single-player gaming.

## Tech Stack

- Single HTML file (vanilla JS, Tailwind CDN)
- No build step, no framework, no backend
- Hosted on Cloudflare Pages
- All data researched and baked in (no live APIs)

## Design Language

WWII tactical/military briefing aesthetic:
- Dark backgrounds, military gold (#d4af37) accents
- "Operation" naming for build tiers (Vanguard / Overlord / Thunderbolt)
- Classified document styling, "FOR LANGLEY'S EYES ONLY"
- Special Elite + Courier Prime fonts

## Constraints

- All prices must be current as of March 2026
- Every component recommendation must cite at least one review/benchmark source
- Every component must link to a real purchase page
- Must work as a static site — no server-side logic

## Out of Scope

- Live price tracking or APIs
- User accounts or saved builds
- Backend or database
- Mobile app
