// defines an interface common to all layers.
// we can allow some things that don't always apply; e.g. a getFeatureCount function,
// which wouldn't apply to a raster layer, but the raster implementation will just
// have a stub that puts an error on the console (see class LayerInstance, which will have stubs).
// doing this allows us to have common "layer" typed variables and we don't have to keep re-casting
// them to get additional methods or props.

// this exists as an interface to allow things outside of ramp to implement it.
// they probably won't have access to "class" LayerInstance when using compiled RAMP (raw javascript).
// this pattern is stolen from the fixture class model.

import { TreeNode } from '../internal';

// TODO consider making a number of these things optional with ? markup.
export interface LayerBase {

    id: string;

    layerType: string;
    // isReadyForMap(): Promise<void>;

    esriLayer: __esri.Layer | undefined;
    esriView: __esri.LayerView | undefined;

    initiate(): Promise<void>;
    terminate(): Promise<void>;

    getLayerTree(): TreeNode;

}