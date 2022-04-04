import { make } from 'vuex-pathify';
import { HilightState } from './hilight-state';

const getters = {};

const mutations = {};

const actions = {};

export enum HilightStore {
    applyHighlight = 'hilight/applyHighlight'
}

export function hilight() {
    const state = new HilightState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
