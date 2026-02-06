import { InstanceAPI, MapLayer, IdentifyResult } from '../../api/internal';
import { DrawState, LayerState, IdentifyParameters, RampLayerConfig } from '../api';
import { EsriMapImageLayer } from '../esri';
/**
 * A layer class which implements an ESRI Map Image Layer.
 */
export declare class MapImageLayer extends MapLayer {
    isDynamic: boolean;
    private origState;
    esriLayer: EsriMapImageLayer | undefined;
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    /**
     * We keep the esri layer always visible to avoid flicker. This tracks what our fake viz state is.
     */
    private actualViz;
    /**
     * Returns the visibility of the layer.
     *
     * @returns {Boolean} visibility of the layer
     */
    get visibility(): boolean;
    /**
     * Applies visibility to  .
     *
     * @function setVisibility
     * @param {Boolean} value the new visibility setting
     */
    set visibility(value: boolean);
    protected onInitiate(): Promise<void>;
    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): __esri.MapImageLayerProperties;
    protected onLoadActions(): Array<Promise<void>>;
    updateLayerState(newState: LayerState, userCancel?: boolean): void;
    updateDrawState(newState: DrawState): void;
    runIdentify(options: IdentifyParameters): Array<IdentifyResult>;
}
