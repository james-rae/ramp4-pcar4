import {
    RampExtentSetConfig,
    RampMapConfig,
    RampBasemapConfig,
    RampLodSetConfig,
    RampSpatialReference,
    RampTileSchemaConfig
} from '@/geo/api';

export class OverviewmapState {
    mapConfig: RampMapConfig | undefined = undefined;
    startMinimized: boolean = true;
}

export interface OverviewmapConfig {
    map: {
        lodSets: Array<RampLodSetConfig>;
        extentSets: Array<RampExtentSetConfig>;
        tileSchemas: Array<RampTileSchemaConfig>;
        basemap: RampBasemapConfig;
    };
    startMinimized: boolean;
}
