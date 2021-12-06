// Put things here that would be common to both 2D and 3D maps.
// May be pointless and should be removed...limitied experience with 3D maps
// makes it unclear how much overlap of functionality makes sense. Could be
// we need an entirely different framework to really support 3D.

// TODO add proper comments

import { toRaw, markRaw } from 'vue';
import { APIScope, Basemap, GlobalEvents, InstanceAPI } from '@/api/internal';
import { EsriMap } from '@/geo/esri';
import { RampMapConfig } from '@/geo/api';

// Would ideally call this BaseMap, but that would get confused with Basemap.
// We also use "Base" for our vuex state classes so want to avoid naming overlaps.
// Do not add any event emits or listeners that would be tied to a specific map
export class CommonMapAPI extends APIScope {
    esriMap: EsriMap | undefined;
    created = false;
    _basemapStore: Array<Basemap>;

    protected constructor(iApi: InstanceAPI) {
        super(iApi);

        this.esriMap = undefined;
        this._basemapStore = [];
    }

    // will generate the actual Map control objects, put it on the page
    createMap(config: RampMapConfig, targetDiv: string | HTMLDivElement): void {
        // TODO if .esriMap exists, do we want to do any cleanup on it? E.g. remove event handlers?
        this._basemapStore = config.basemaps.map(
            bmConfig => new Basemap(bmConfig)
        );

        if (!this.esriMap) {
            // first time map setup
            const esriConfig: __esri.MapProperties = {};
            if (config.initialBasemapId) {
                esriConfig.basemap = toRaw(
                    this.findBasemap(config.initialBasemapId).innerBasemap
                );
            }
            this.esriMap = markRaw(new EsriMap(esriConfig));
            // emit basemap changed event
            // need to do this here for first time map setup
            this.$iApi.event.emit(GlobalEvents.MAP_BASEMAPCHANGE, {
                basemapId: config.initialBasemapId,
                schemaChanged: false
            });
        } else {
            // creating map again - probably due to map refresh
            // just set the basemap
            this.setBasemap(config.initialBasemapId);
        }
    }

    protected findBasemap(id: string): Basemap {
        const bm: Basemap | undefined = this._basemapStore.find(
            bms => bms.id === id
        );
        if (bm) {
            return bm;
        } else {
            throw new Error(`Invalid basemap id requested: ${id}`);
        }
    }

    setBasemap(id: string): void {
        if (!this.esriMap) {
            this.noMapErr();
            return;
        }

        if (id) {
            const bm: Basemap = this.findBasemap(id);
            this.esriMap.basemap = toRaw(bm.innerBasemap);
        } else {
            // blank basemap case
            // TODO validate this works. the map api spec does not allow setting to undefined.
            (this.esriMap as any).basemap = undefined;
        }
    }

    protected noMapErr(): void {
        console.error(
            'Attempted to manipulate the map before calling createMap()'
        );
    }

    protected abstractError(): void {
        throw new Error(
            `Attempted to call an abstract method in the parent CommonMapAPI`
        );
    }

    // TODO shared Map (not view-based) functions could go here.
    //      Includes passthrough things. Could also include addLayer (assuming the LayerView gets handled automagically in 3D case?)
}
