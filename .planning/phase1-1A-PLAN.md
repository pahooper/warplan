# Task 1A: SvelteKit Project Init

<task type="auto">
  <name>Initialize SvelteKit 2 project with TypeScript, Tailwind CSS 4, and adapter-static</name>
  <files>package.json, svelte.config.js, vite.config.ts, tsconfig.json, static/.nojekyll</files>
  <depends></depends>
  <must_haves>
    <truths>
      - package.json has svelte, @sveltejs/kit, @sveltejs/adapter-static, tailwindcss, @tailwindcss/vite
      - svelte.config.js uses adapter-static with pages: 'build', fallback: '404.html', strict: true
      - vite.config.ts has tailwindcss() plugin BEFORE sveltekit() plugin
      - TypeScript strict mode is enabled in tsconfig.json
      - static/.nojekyll exists (empty file for GitHub Pages)
      - npm install completes without errors
    </truths>
    <artifacts>
      - package.json with all required dependencies
      - svelte.config.js with adapter-static config and trailingSlash: 'always'
      - vite.config.ts with tailwindcss() before sveltekit()
      - tsconfig.json with strict: true
      - static/.nojekyll (empty file)
    </artifacts>
    <key_links>
      - vite.config.ts imports @tailwindcss/vite and @sveltejs/kit/vite
      - svelte.config.js imports @sveltejs/adapter-static
    </key_links>
  </must_haves>
  <action>
    IMPORTANT: This is a BROWNFIELD conversion. The existing index.html must be preserved — do NOT delete it.

    1. Initialize a SvelteKit project in the EXISTING /home/pnod/dev/projects/warplan directory.
       Run: npx sv create . --template minimal --types ts
       If prompted about existing files, allow it to proceed (it should only add SvelteKit scaffolding).
       If sv create doesn't work in an existing directory, manually create the files.

    2. Install dependencies:
       npm install @sveltejs/adapter-static
       npm install -D tailwindcss @tailwindcss/vite

    3. Configure svelte.config.js:
       - Import adapter from '@sveltejs/adapter-static'
       - Set adapter options: pages: 'build', assets: 'build', fallback: '404.html', precompress: false, strict: true
       - Set kit.paths.base: process.argv.includes('dev') ? '' : process.env.BASE_PATH || ''
       - Set trailingSlash: 'always'

    4. Configure vite.config.ts:
       - Import tailwindcss from '@tailwindcss/vite'
       - Import sveltekit from '@sveltejs/kit/vite'
       - plugins: [tailwindcss(), sveltekit()] — tailwindcss MUST come first

    5. Ensure tsconfig.json has strict: true

    6. Create static/.nojekyll as an empty file (for GitHub Pages)

    DO NOT:
    - Delete index.html — it's the reference implementation
    - Install any UI component libraries
    - Use Tailwind CSS v3 patterns (no tailwind.config.js, no postcss.config.js)
  </action>
  <verify>cd /home/pnod/dev/projects/warplan && node -e "const pkg = require('./package.json'); const deps = {...pkg.dependencies, ...pkg.devDependencies}; const needed = ['@sveltejs/kit', '@sveltejs/adapter-static', 'tailwindcss', '@tailwindcss/vite']; needed.forEach(n => { if (!deps[n]) { console.error('MISSING:', n); process.exit(1); } }); console.log('All deps present');" && npx tsc --noEmit 2>&1 | tail -5 && test -f static/.nojekyll && echo "VERIFY OK"</verify>
  <done>package.json has all deps, svelte.config.js uses adapter-static, vite.config.ts has correct plugin order, tsconfig strict mode enabled, .nojekyll exists</done>
</task>
