import { InstanceAPI, MapLayer } from '@/api/internal';
import { DataFormat, LayerFormat, LayerType } from '@/geo/api';
import type { RampLayerConfig } from '@/geo/api';
import type { EsriImageryLayer } from '@/geo/esri';
import { EsriAPI } from '@/geo/esri';
import { markRaw } from 'vue';

/**
 * A layer class which implements an ESRI Imagery Layer.
 */
export class ImageryLayer extends MapLayer {
    declare esriLayer: EsriImageryLayer | undefined;

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.supportsIdentify = false;
        this.layerType = LayerType.IMAGERY;
        this.layerFormat = LayerFormat.IMAGERY;
        this.dataFormat = DataFormat.ESRI_RASTER;
    }

    protected async onInitiate(): Promise<void> {
        this.esriLayer = markRaw(await EsriAPI.ImageryLayer(this.makeEsriLayerConfig(this.origRampConfig)));
        await super.onInitiate();
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): __esri.ImageryLayerProperties {
        const esriConfig: __esri.ImageryLayerProperties = super.makeEsriLayerConfig(rampLayerConfig);

        return esriConfig;
    }

    protected onLoadActions(): Array<Promise<void>> {
        const loadPromises: Array<Promise<void>> = super.onLoadActions();

        this.layerTree.name = this.name;

        const startTime = Date.now();

        const legendPromise = this.$iApi.geo.symbology
            .mapServerToLocalLegend(this.origRampConfig.url!)
            .then(legArray => {
                if (startTime > this.lastCancel) {
                    this.legend = legArray;
                }
            });

        loadPromises.push(legendPromise);

        // TODO once decided, might want to set a value on layer count that indicates nothing to count

        // TODO check out whats going on with layer extent. is it set and donethanks?

        return loadPromises;
    }
}
