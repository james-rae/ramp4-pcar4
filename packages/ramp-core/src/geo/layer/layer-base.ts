// TODO this class would probably go in some type of store, if things ever get converted to Vuex

// defines an interface common to all layers.
// we can allow some things that don't always apply; e.g. a getFeatureCount function,
// which wouldn't apply to a raster layer, but the raster implementation will just
// have a stub that puts an error on the console (see class LayerInstance, which will have stubs).
// doing this allows us to have common "layer" typed variables and we don't have to keep re-casting
// them to get additional methods or props.

import esri = __esri;

// TODO consider making a number of these things optional with ? markup.
export interface LayerBase {

    layerType: string;
    isReadyForMap(): Promise<void>;

    esriLayer: esri.Layer | undefined;
    esriView: esri.LayerView | undefined;

}