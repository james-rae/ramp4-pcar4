import { make } from 'vuex-pathify';

import { HilightState } from './hilight-state';

const getters = {};

const actions = {};
const mutations = {};

export enum HilightStore {}

export function hilight() {
    const state = new HilightState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
