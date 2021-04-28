// NOTE LayerInstance would be ideal here, but since it inhertis from APIScope it appears
//      to be causing circular reference bombs being in the store. Using neutral interface
//      instead.
import { LayerBase, RampLayerConfig } from '@/geo/api';

export class LayerState {
    layers: LayerBase[];
    layerConfigs: RampLayerConfig[];

    constructor(layers: LayerBase[], configs: RampLayerConfig[]) {
        this.layers = layers;
        this.layerConfigs = configs;
    }
}
