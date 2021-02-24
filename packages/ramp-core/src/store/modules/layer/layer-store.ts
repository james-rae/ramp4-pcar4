import { ActionContext, Action } from 'vuex';
import { make } from 'vuex-pathify';

import { LayerState } from './layer-state';
import { RootState } from '@/store';

import { LayerBase, RampLayerConfig } from '../../../geo/internal';
// import BaseLayer from 'rampgeoapi/dist/layer/BaseLayer';



import LayerBlueprint from './layer-blueprint.class';

import api from '@/api';

// use for actions
type LayerContext = ActionContext<LayerState, RootState>;

const getters = {
    getLayerByUid: (state: LayerState) => (uid: string): LayerBase | undefined => {
        return state.layers.find((layer: LayerBase) => layer.getLayerTree().findChildByUid(uid) !== undefined);
    },
    getLayerById: (state: LayerState) => (id: string): LayerBase | undefined => {
        return state.layers.find((layer: LayerBase) => layer.id === id);
    }
};

const actions = {
    addLayers: (context: LayerContext, layerConfigs: RampLayerConfig[]) => {
        // TODO we are getting frequent errors at startup; something passes in an
        //      undefined layerConfigs. kicking out for now to make demos work.
        //      possibly this is evil in vue state land. if so, then someone figure out
        //      the root cause and fix that.
        if (!Array.isArray(layerConfigs)) { return; }

        // plan for the moment.
        // looks like we can't access $iApi here in the store.
        // the old code used LayerBlueprint, which is a standalone factory and didn't need the api
        // suggesting the following:
        // have esrimap watch the layerconfig array as well.
        // when it sees the change, it does the layer registration and generation (might as well also add it to the map)
        // then it puts the new layer in the layer store (and we erase the existing listener). need to figure out how to do this.
        // something like this.$vApp.$store.set(ConfigStore.newConfig, defaultConfig !== undefined ? defaultConfig : undefined);

        /*
        const loadproms = [];
        layerConfigs.forEach(layerConfig => {
            if (api.)
            loadproms.push(LayerBlueprint.makeBlueprint(layerConfig));
        });
        */

        // old code
        /*
        const blueprints: any = [];
        layerConfigs.forEach(layerConfig => {
            blueprints.push(LayerBlueprint.makeBlueprint(layerConfig));
        });
        blueprints.forEach((blueprint: any) => {
            blueprint.makeLayer().then((layer: LayerBase) => {
                context.commit('ADD_LAYER', layer);
            });
        });
        */
    }
};

const mutations = {
    ADD_LAYER: (state: LayerState, value: LayerBase) => {
        // copy to new array so watchers will have a reference to the old value
        state.layers = [...state.layers, value]
    }
};

export enum LayerStore {
    /**
     * (Getter) getLayerByUid: (uid: string) => Layer | undefined
     */
    getLayerByUid = 'layer/getLayerByUid',
    /**
     * (Getter) getLayerById: (id: string) => Layer | undefined
     */
    getLayerById = 'layer/getLayerById',
    /**
     * (State) layers: Layer[]
     */
    layers = 'layer/layers',
    /**
     * (Action) addLayers: (layerConfigs: RampLayerConfig[])
     */
    addLayers = 'layer/addLayers!'
}

export function layer() {
    const state = new LayerState([]);

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
