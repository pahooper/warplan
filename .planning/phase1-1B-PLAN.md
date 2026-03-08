# Task 1B: App Shell + Styling

<task type="auto">
  <name>Create SvelteKit app shell with Tailwind 4 military theme and Google Fonts</name>
  <files>src/app.css, src/app.html, src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/+page.svelte</files>
  <depends>1A</depends>
  <must_haves>
    <truths>
      - npm run dev starts the dev server without errors
      - The dev server renders a page at localhost:5173 (or next available port)
      - Tailwind CSS 4 classes work in Svelte components (test with a bg-gray-900 class)
      - adapter-static is configured with prerender = true globally
      - Google Fonts (Special Elite + Courier Prime) are loaded
    </truths>
    <artifacts>
      - src/app.css with @import "tailwindcss" and @theme block for military design tokens
      - src/app.html with Google Fonts preconnect links
      - src/routes/+layout.svelte importing app.css and rendering children via {@render children()}
      - src/routes/+layout.ts with export const prerender = true
      - src/routes/+page.svelte with minimal placeholder content
    </artifacts>
    <key_links>
      - +layout.svelte imports ../app.css
      - +layout.svelte uses $props() to get children snippet
    </key_links>
  </must_haves>
  <action>
    1. Create src/app.css with:
       @import "tailwindcss";

       @theme {
         --color-military-gold: #d4af37;
         --color-military-dark: #0f1419;
         --color-military-card: #1e3a4c;
         --color-tactical-border: #4a5568;
         --font-display: 'Special Elite', cursive;
         --font-body: 'Courier Prime', monospace;
       }

       Plus the custom component styles from the existing index.html:
       - body styles (font-family, background gradient, color)
       - .military-header styles
       - .tactical-card styles
       - .component-option styles (including :hover, .selected, .recommended)
       - Badge styles (.warning-badge, .compatible-badge, .value-badge, .danger-badge, .info-badge)
       - .source-link styles
       - .intel-briefing and .market-alert styles
       - .benchmark-bar and .benchmark-fill styles
       - Scrollbar styles

    2. Create src/app.html:
       Standard SvelteKit app.html but add Google Fonts preconnect + stylesheet links in <head>:
       <link rel="preconnect" href="https://fonts.googleapis.com">
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
       <link href="https://fonts.googleapis.com/css2?family=Special+Elite&family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet">

    3. Create src/routes/+layout.svelte:
       - script lang="ts" with: import '../app.css'; let { children } = $props();
       - Body: {@render children()}
       - Keep it LEAN — no wrapper divs, no extra markup

    4. Create src/routes/+layout.ts:
       export const prerender = true;

    5. Create src/routes/+page.svelte:
       Minimal placeholder:
       <div class="min-h-screen bg-[#0f1419] p-4">
         <div class="max-w-7xl mx-auto">
           <h1 class="military-header text-3xl text-[#d4af37] text-center">TACTICAL BUILD CONFIGURATOR</h1>
           <p class="text-gray-400 text-center mt-2">Phase 1 scaffold — components coming in Phase 2</p>
         </div>
       </div>

    6. Run npm run dev and verify the page loads with the military-header font rendering correctly.

    DO NOT:
    - Delete index.html — it's the reference implementation
    - Use old Svelte 4 patterns (no export let, no $: reactive, no createEventDispatcher)
  </action>
  <verify>cd /home/pnod/dev/projects/warplan && npm run build 2>&1 | tail -5 && echo "BUILD OK" && npx tsc --noEmit 2>&1 | tail -5</verify>
  <done>npm run dev starts without errors, page renders at localhost with military-header font, npm run build produces static output in build/ directory, tsc --noEmit passes</done>
</task>
