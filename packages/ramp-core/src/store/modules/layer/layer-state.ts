import { LayerInstance } from '@/api/internal';
import { RampLayerConfig } from '@/api/internal';

export class LayerState {
    layers: LayerInstance[];
    layerConfigs: RampLayerConfig[];

    constructor(layers: LayerInstance[], configs: RampLayerConfig[]) {
        this.layers = layers;
        this.layerConfigs = configs;
    }
}
