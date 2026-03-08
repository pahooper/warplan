import { setContext, getContext } from 'svelte';
import type { BuildSelection } from '$lib/types';

const BUILD_KEY = Symbol('build');

export interface BuildState {
  selections: BuildSelection;
  activePreset: string | null;
}

export function setBuildContext(state: BuildState): BuildState {
  return setContext(BUILD_KEY, state);
}

export function getBuildContext(): BuildState {
  return getContext<BuildState>(BUILD_KEY);
}
