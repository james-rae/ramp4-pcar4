// Put things here that would be common to both 2D and 3D maps.
// May be pointless and should be removed...limitied experience with 3D maps
// makes it unclear how much overlap of functionality makes sense. Could be
// we need an entirely different framework to really support 3D.

// TODO add proper comments

import esri = __esri;
import { APIScope, InstanceAPI } from '../../api/internal';
import { EsriMap } from '../esri';
import { Basemap, RampMapConfig } from '../internal';

// Would ideally call this BaseMap, but that would get confused with Basemap.
// We also use "Base" for our vuex state classes so want to avoid naming overlaps.
export class CommonMapAPI extends APIScope {

    _innerMap: EsriMap | undefined;

    _basemapStore: Array<Basemap>;

    protected constructor (iApi: InstanceAPI) {
        super(iApi);

        this._innerMap = undefined;
        this._basemapStore = [];
    }

    // will generate the actual Map control objects, put it on the page
    createMap(config: RampMapConfig, targetDiv: string | HTMLDivElement): void {
        // TODO if ._innerMap exists, do we want to do any cleanup on it? E.g. remove event handlers?

        this._basemapStore = config.basemaps.map(bmConfig => new Basemap(bmConfig));

        const esriConfig: esri.MapProperties = {};
        if (config.initialBasemapId) {
            esriConfig.basemap = this.findBasemap(config.initialBasemapId).innerBasemap;
        }
        this._innerMap = new EsriMap(esriConfig);
    }

    protected findBasemap(id: string): Basemap {
        const bm: Basemap | undefined = this._basemapStore.find(bms => bms.id === id);
        if (bm) {
            return bm;
        } else {
            throw new Error(`Invalid basemap id requested: ${id}`);
        }
    }

    setBasemap(id: string): void {
        if (!this._innerMap) {
            this.noMapErr();
            return;
        }

        if (id) {
            const bm: Basemap = this.findBasemap(id);
            // TODO test tile schema here? trigger a map reload if new schema?
            //      or will this be handled by the basemap UI? might make sense to do it there;
            //      would need to back out of this function call and trigger something else if we
            //      detect here.

            this._innerMap.basemap = bm.innerBasemap;
        } else {
            // blank basemap case
            // TODO validate this works. the map api spec does not allow setting to undefined.
            (this._innerMap as any).basemap = undefined;
        }
    }

    protected noMapErr(): void {
        console.error('Attempted to manipulate the map before calling createMap()');
    }

    // TODO shared Map (not view-based) functions could go here.
    //      Includes passthrough things. Could also include addLayer (assuming the LayerView gets handled automagically in 3D case?)

}