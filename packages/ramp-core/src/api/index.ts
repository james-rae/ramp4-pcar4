import Vue from 'vue';
// BAAH
// import GapiLoader, { GeoApi, ApiBundle as GeoApiBundle } from 'rampgeoapi';

import { InstanceAPI, AppVersion } from './internal';
import { GeoCommonAPI } from '../geo/internal';
import mixin from './mixin';

export * from './internal';

declare const __VERSION__: AppVersion;

// install/register mixin plugin with Vue, so it's available on all Vue instances
Vue.use(mixin);

// BAAH
/*
export interface RampGeo {
    Extent: typeof GeoApiBundle.Extent;
    Graphic: typeof GeoApiBundle.Graphic;
    Hover: typeof GeoApiBundle.Hover;
    LineString: typeof GeoApiBundle.LineString;
    LineStyleOptions: typeof GeoApiBundle.LineStyleOptions;
    LinearRing: typeof GeoApiBundle.LinearRing;
    MultiLineString: typeof GeoApiBundle.MultiLineString;
    MultiPoint: typeof GeoApiBundle.MultiPoint;
    MultiPolygon: typeof GeoApiBundle.MultiPolygon;
    Point: typeof GeoApiBundle.Point;
    PointStyleOptions: typeof GeoApiBundle.PointStyleOptions;
    Polygon: typeof GeoApiBundle.Polygon;
    PolygonStyleOptions: typeof GeoApiBundle.PolygonStyleOptions;
    SpatialReference: typeof GeoApiBundle.SpatialReference;
}
*/

// TODO some of the stateless geoapi stuff needs to be still available.
//      e.g. we need default LODs to be there before an instance is created.
//      might as well make the geometry stuff available too? We can always expose later.
//      The files that expose this will need to be in classes that do not require a an instance on the constructor

export interface APIInterface {
    Instance: typeof InstanceAPI;
    // BAAH
    // geoapi: GeoApi;
    // gapiPromise: Promise<GeoApi>;

    /**
     * Version information of R4MP.
     *
     * @type {AppVersion}
     * @memberof APIInterface
     */
    version: AppVersion;

    // BAAH
    GEO: GeoCommonAPI;
}

// Load geoapi
// moved from `main-build` since it was being attached to the api object anyways
// BAAH
// let geoapi: GeoApi;
let geocommon: GeoCommonAPI = new GeoCommonAPI();

/*
const gapiPromise = GapiLoader(window);
gapiPromise.then((gapi: GeoApi) => {
    geoapi = gapi;
    rampgeo = {
        Extent: GeoApiBundle.Extent,
        Graphic: GeoApiBundle.Graphic,
        Hover: GeoApiBundle.Hover,
        LineString: GeoApiBundle.LineString,
        LineStyleOptions: GeoApiBundle.LineStyleOptions,
        LinearRing: GeoApiBundle.LinearRing,
        MultiLineString: GeoApiBundle.MultiLineString,
        MultiPoint: GeoApiBundle.MultiPoint,
        MultiPolygon: GeoApiBundle.MultiPolygon,
        Point: GeoApiBundle.Point,
        PointStyleOptions: GeoApiBundle.PointStyleOptions,
        Polygon: GeoApiBundle.Polygon,
        PolygonStyleOptions: GeoApiBundle.PolygonStyleOptions,
        SpatialReference: GeoApiBundle.SpatialReference
    };
});
*/

const api: APIInterface = {
    Instance: InstanceAPI,

    // BAAH
    /*
    gapiPromise,
    get geoapi(): GeoApi {
        if (typeof geoapi === 'undefined') {
            throw new Error("Attempting to access `geoapi` before it's resolved. Use `initRamp` global function instead.");
        }

        return geoapi;
    },
    */
    version: __VERSION__, // this is populated by the build process; see `vue.config.js`

    // BAAH
    get GEO(): GeoCommonAPI {
        // TODO we might not need this check anymore, since there is no longer a geoapi promise
        if (typeof geocommon === 'undefined') {
            throw new Error("Attempting to access `GEO` before it's resolved. Use `initRamp` global function instead.");
        }

        return geocommon;
    }

};

// export `InstanceApi` as `Instance` on global RAMP interface
export default api as APIInterface;
