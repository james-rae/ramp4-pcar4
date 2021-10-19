// TODO add proper comments

import { AttribLayer, InstanceAPI } from '@/api/internal';
import { DataFormat, RampLayerConfig } from '@/geo/api';
import MapImageLayer from './index';
import { markRaw } from 'vue';

export class MapImageSublayer extends AttribLayer {
    // @ts-ignore
    // esriSubLayer: __esri.Sublayer; // moved to layer instance
    tooltipField: string;

    constructor(
        config: { layerType: string },
        $iApi: InstanceAPI,
        parent: MapImageLayer,
        layerIdx: number = 0
    ) {
        super(config as RampLayerConfig, $iApi);

        // TODO: below code needs to be added to every sublayer class we make - could we make a general sublayer interface?
        // maybe use mixins for multiple inheritance (extend from Attrib and Sublayer)? https://codeburst.io/multiple-inheritance-with-typescript-mixins-d92d01198907
        this.isSublayer = true;
        this.layerIndex = layerIdx;
        this.parentLayer = parent;
        this.id = `${parent.id}-${layerIdx}`;

        this.dataFormat = DataFormat.ESRI_FEATURE;
        this.tooltipField = '';

        if (!parent.esriLayer) {
            throw new Error(
                'Map Image Layer with no internal esri layer encountered in FC creation'
            );
        }

        this.fetchEsriSublayer(parent);
    }

    /**
     * TODO[Layer-Refactor]: There's probably a better way to do this. I need to re-fetch the sublayer after reload because the markRaw loses its reference during reloading
     *
     * Set the ESRI sublayer using the parent's sublayer list
     *
     * @param {MapImageLayer} parent: Parent MapImageLayer object
     */
    fetchEsriSublayer(parent: MapImageLayer): void {
        if (!parent.esriLayer) {
            console.error(
                'Attempted to fetch the ESRI sublayer when parent has no ESRI layer'
            );
            return;
        }

        // TODO[Layer-Refactor] not found check? - unlikely to happen but how do we handle that?
        this.esriSubLayer = markRaw(
            parent.esriLayer.allSublayers.find(s => {
                return s.id === this.layerIndex;
            })
        );
    }

    /**
     * Load actions for a MapImage sublayer
     */
    onLoadActions(): Array<Promise<void>> {
        return [];
    }

    /**
     * Initiate this sublayer
     *
     * This is called after the parent layer is initiated
     */
    async initiate(): Promise<void> {
        // TODO[Layer-Refactor] For now we just set initialized to true
        this.initialized = true;
    }

    async reload(): Promise<void> {
        if (!this.$iApi.geo.map.esriMap) {
            console.error('Attempted layer reload when no map exists');
            return;
        }

        this._parentLayer?.reload();
    }

    /**
     * Returns the visibility of the sublayer.
     *
     * @function getVisibility
     * @returns {Boolean} visibility of the sublayer
     */
    get visibility(): boolean {
        if (!this._parentLayer?.esriLayer || !this.esriSubLayer) {
            this.noLayerErr();
            return false;
        }

        return this.esriSubLayer.visible;
    }

    /**
     * Applies visibility to sublayer.
     *
     * @function setVisibility
     * @param {Boolean} value the new visibility setting
     */
    set visibility(value: boolean) {
        if (!this._parentLayer?.esriLayer || !this.esriSubLayer) {
            this.noLayerErr();
            return;
        }
        this.esriSubLayer.visible = value;
    }

    /**
     * Returns the opacity of the sublayer.
     *
     * @function getOpacity
     * @returns {Boolean} opacity of the sublayer
     */
    get opacity(): number {
        if (!this._parentLayer?.esriLayer || !this.esriSubLayer) {
            this.noLayerErr();
            return 0;
        }
        return this.esriSubLayer.opacity;
    }

    /**
     * Applies opacity to sublayer.
     *
     * @function setOpacity
     * @param {Boolean} value the new opacity setting
     */
    set opacity(value: number) {
        if (!this._parentLayer?.esriLayer || !this.esriSubLayer) {
            this.noLayerErr();
            return;
        }
        // TODO should we make warning check on parent.isDynamic? currently parent code should manage this
        this.esriSubLayer.opacity = value;
    }

    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     */
    applySqlFilter(exclusions: Array<string> = []): void {
        if (!this._parentLayer?.esriLayer || !this.esriSubLayer) {
            this.noLayerErr();
            return;
        }

        // TODO possibly check against this FC being a Raster Layer sublayer
        const sql = this.filter.getCombinedSql(exclusions);
        this.esriSubLayer.definitionExpression = sql;
    }
}
