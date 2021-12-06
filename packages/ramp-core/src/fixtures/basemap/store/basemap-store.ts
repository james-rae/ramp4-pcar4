import { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { BasemapState } from './basemap-state';
import { RootState } from '@/store/state';
import { RampBasemapConfig } from '@/geo/api';

type BasemapContext = ActionContext<BasemapState, RootState>;

const getters = {};

const actions = {};

const mutations = {};

export enum BasemapStore {
    /**
     * (State) tileSchemas: Array<any>
     */
    tileSchemas = 'basemap/tileSchemas',
    /**
     * (State) basemaps: Array<any>
     */
    basemaps = 'basemap/basemaps',
    /**
     * (State) selectedBasemap: any
     */
    selectedBasemap = 'basemap/selectedBasemap',
    /**
     * (State) currentTileSchemaId: any
     */
    currentTileSchemaId = 'basemap/currentTileSchemaId'
}

export function basemap() {
    const state = new BasemapState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
