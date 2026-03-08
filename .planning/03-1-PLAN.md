# Task 1: ExportButton URL Params + handleHttpError Cleanup

<task type="auto">
  <name>Wire ExportButton with build state URL params and remove handleHttpError guard</name>
  <files>src/lib/components/ExportButton.svelte, svelte.config.js</files>
  <depends></depends>
  <must_haves>
    <truths>ExportButton generates a URL with all 8 component selections as search params. If a preset is active, the preset ID is included as a param. The URL uses trailing slash (/export/?...). The handleHttpError guard for /export is removed from svelte.config.js.</truths>
    <artifacts>src/lib/components/ExportButton.svelte exports a component with a derived exportUrl that includes all build selections. svelte.config.js no longer has handleHttpError referencing /export.</artifacts>
    <key_links>ExportButton reads build state via getBuildContext() from $lib/state/build-context. The URL params use the same keys as ComponentCategory (cpu, gpu, motherboard, ram, cooling, storage, case, psu) plus optional 'preset'.</key_links>
  </must_haves>
  <action>
    Read the existing files first:
    - src/lib/components/ExportButton.svelte (currently a static link)
    - src/lib/state/build-context.ts (for BuildState type and getBuildContext)
    - svelte.config.js (for the handleHttpError guard)
    - src/lib/types.ts (for ComponentCategory type)

    Modify ExportButton.svelte:
    1. Import getBuildContext from '$lib/state/build-context'
    2. Import type ComponentCategory from '$lib/types'
    3. Get build state via getBuildContext()
    4. Create a $derived.by() that builds a URLSearchParams from build.selections entries + optional build.activePreset
    5. Use the derived URL in the href attribute
    6. Add target="_blank" to open in new tab (matches reference behavior of window.open)
    7. Keep existing styling classes

    Pattern for the derived URL:
    ```
    let exportUrl = $derived.by(() => {
      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(build.selections)) {
        params.set(key, value);
      }
      if (build.activePreset) params.set('preset', build.activePreset);
      return `/export/?${params.toString()}`;
    });
    ```

    Modify svelte.config.js:
    1. Remove the handleHttpError hook entirely (it was a placeholder for the missing /export route)
    2. If handleHttpError has other logic beyond the /export guard, remove only the /export-specific code

    Do NOT:
    - Change any styling on the button
    - Add any navigation logic beyond the href
    - Use $app/navigation or goto() — keep it as a simple <a> tag
  </action>
  <verify>bun run check — then start dev server, click Export Build button, verify URL contains all 8 selection params and preset param</verify>
  <done>ExportButton generates a parameterized URL with all 8 selections + optional preset. svelte.config.js no longer has handleHttpError for /export. svelte-check passes.</done>
</task>
