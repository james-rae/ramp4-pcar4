// BAAH
// import { RampMapConfig, RampLodConfig, RampBasemapConfig, RampSpatialReference } from 'rampgeoapi'

export class OverviewmapState {
    mapConfig: any = undefined; // RampMapConfig | undefined = undefined; // BAAH
    startMinimized: boolean = true;
}

export interface OverviewmapConfig {
    // BAAH
    map: any,
    /*
    map: {
        lods: RampLodConfig;
        basemap: RampBasemapConfig;
        spatialReference: RampSpatialReference;
    },
    */
    startMinimized: boolean;
}
