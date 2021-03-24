// TODO fancy up the docs

// TODO add proper comments

import { APIScope, InstanceAPI } from '../../api/internal';
import { Attributes, AttributeSet, BaseGeometry, Extent, GeometryType, LinearRing, LineString, MapClick, MapMove, MultiLineString, MultiPoint,
    MultiPolygon, Point, Polygon, SpatialReference } from '../internal';
import { EsriExtent, EsriMultipoint, EsriPoint, EsriPolygon, EsriPolyline, EsriRequest, EsriSpatialReference } from '../esri';

export class AttributeAPI {

    /*
    constructor (infoBundle: InfoBundle) {
        super(infoBundle);
    }
    */

    private oidIndexer(attSet: AttributeSet, oidField: string): void {
        // make index on object id
        attSet.features.forEach((feat, idx) => {
            // map object id to index of object in feature array
            attSet.oidIndex[feat[oidField]] = idx;
        });
    }

    private arcGisBatchLoad (details: AttributeLoaderDetails, controller: AsynchAttribController): Promise<Array<any>> {
        if (controller.loadAbortFlag) {
            // stop that stop that
            return Promise.resolve([]);
        }

        const params: __esri.RequestOptions = {
            query: {
                where: `${details.oidField}>${details.maxId}`,
                outFields: details.attribs,
                returnGeometry: 'false',
                f: 'json'
            }
        };
        const restReq = EsriRequest(details.serviceUrl + '/query', params);

        return new Promise((resolve, reject) => {
            // TODO revisit error handling. might need a try-catch?
            restReq.then((serviceResult: __esri.RequestResponse) => {
                if (serviceResult.data && serviceResult.data.features) {
                    const feats: Array<any> = serviceResult.data.features;
                    const len: number = feats.length;

                    if (len > 0) {
                        // figure out if we hit the end of the data. different logic for newer vs older servers.
                        controller.loadedCount += len;
                        let moreDataToLoad: boolean;
                        if (details.supportsLimit) {
                            moreDataToLoad = serviceResult.data.exceededTransferLimit;
                        } else {
                            if (details.batchSize === -1) {
                                // this is our first batch. set the max batch size to this batch size
                                details.batchSize = len;
                            }
                            moreDataToLoad = (len >= details.batchSize);
                        }

                        if (moreDataToLoad) {
                            // call the service again for the next batch of data.
                            // max id becomes last object id in the current batch

                            details.maxId = feats[len - 1].attributes[details.oidField];
                            this.arcGisBatchLoad(details, controller).then((futureFeats: Array<any>) => {
                                // take our current batch, append on everything the recursive call loaded, and return
                                resolve(feats.concat(futureFeats));
                            }, (e: any) => {
                                reject(e);
                            });

                        } else {
                            // done thanks
                            resolve(feats);
                        }
                    } else {
                        // no more data.  we are done
                       resolve([]);
                    }

                } else {
                    // TODO nothing came back, handle appropriately with error party rejectorama
                    throw new Error('whoooops');
                }
            }, (e: any) => {
                // TODO handle errors properly
                // TODO investigate if this is proper location where EsriErrorDetails will appear
                throw new Error('Service attribute load error : ' + e.EsriErrorDetails || e);
            });
        });
    }

    async loadArcGisServerAttributes(details: AttributeLoaderDetails, controller: AsynchAttribController): Promise<AttributeSet> {
        details.maxId = -1;
        details.batchSize = -1;

        const serverResult: Array<any> = await this.arcGisBatchLoad(details, controller);

        // hoist the attributes from the .attributes property
        const attSet: AttributeSet = {
            features: serverResult.map(aa => aa.attributes),
            oidIndex: {}
        };

        this.oidIndexer(attSet, details.oidField);

        // done thanks
        controller.loadIsDone = true;
        return attSet;
    }

    async loadGraphicsAttributes(details: AttributeLoaderDetails, controller: AsynchAttribController): Promise<AttributeSet> {
         // TODO call code to strip from layer
         if (!details.sourceGraphics) {
            throw new Error('No .sourceGraphics provided to file layer attribute loader');
        }

        const pluckedAttributes: esri.Collection<any> = details.sourceGraphics.map((g: esri.Graphic) => {
            // TODO we may need to strip off attributes here based on what we decide to do.
            //      there is no network traffic advantage for files (all data is already loaded).
            //      but we may need to do it for stuff like populating a grid with reduced columns.
            //      if we do this, we may need to clone the attribute objects then remove properties;
            //      we don't want to mess with the original source in the layer.
            return g.attributes;
        });

        const attSet: AttributeSet = {
            features: pluckedAttributes.toArray(),
            oidIndex: {}
        };
        this.oidIndexer(attSet, details.oidField);

        controller.loadIsDone = true;
        controller.loadedCount = attSet.features.length;
        return attSet;
    }

    loadSingleFeature(details: GetGraphicServiceDetails): Promise<GetGraphicResult> {
        const params: esri.RequestOptions = {
            query: {
                f: 'json',
                objectIds: details.oid,
                returnGeometry: details.includeGeometry,
                outFields: details.attribs
            }
        };
        if (!this.isUndefined(details.maxOffset)) {
            params.query.maxAllowableOffset = details.maxOffset;
        }
        if (!this.isUndefined(details.mapSR)) {
            params.query.outSR = details.mapSR;
        }

        // TODO investigate adding `geometryPrecision` to the param.
        //      if we have bloated decimal places, this will drop them.
        //      need to be careful of the units of the map and the current scale.
        //      e.g. a basemap in lat long will certainly need decimal places.
        //      could add this to the tile schema object of our config. if missing we omit, but allow
        //      author to define a precision for better performance. could we apply that elsewhere? (e.g. featurelayers?)

        const restReq = this.esriBundle.esriRequest(details.serviceUrl + '/query', params);

        return restReq.then((serviceResult: esri.RequestResponse) => {
            if (serviceResult.data && serviceResult.data.features) {
                const feats: Array<any> = serviceResult.data.features;
                 if (feats.length > 0) {

                    const feat = feats[0];
                    const result: GetGraphicResult = {
                        attributes: feat.attributes // attributes are always there, so we always return them. letter caller decide to discard them or not.
                    };

                    if (details.includeGeometry) {
                        // server result omits spatial reference
                        feat.geometry.spatialReference = serviceResult.data.spatialReference;
                        const localEsriGeom = this.esriBundle.geometryJsonUtils.fromJSON(feat.geometry);
                        result.geometry = this.gapi.utils.geom.geomEsriToRamp(localEsriGeom);
                    }

                    return result;

                }
            }

            // if we got this far, we failed to get something
            throw new Error(`Could not locate feature ${details.oid} for layer ${details.serviceUrl}`);
        });
    }

}


export class AttributeLoaderDetails {
    supportsLimit?: boolean; // indicates if server will return information about what the maximum number of attributes will be downloaded in a single request
    attribs?: string; // comma delimited list of attributes to download. '*' for all
    serviceUrl?: string; // feature layer endpoint on an arcgis server
    sourceGraphics?: esri.Collection<esri.Graphic>; // set of graphics from non-ArcGIS server source
    maxId?: number; // current maximum OID we have downloaded. i.e. keeps track of where we are over multiple batches of downloads
    batchSize?: number; // calculated maximum amount of attributes that can be downloaded in a single request
    oidField?: string; // attribute name of the OID field
}

// an object that is passed into the asynch attribute loader. the loader can read and update these properties on each iteration
export class AsynchAttribController {
    loadedCount: number;
    loadAbortFlag: boolean;
    loadIsDone: boolean;

    constructor() {
        this.loadedCount = 0;
        this.loadAbortFlag = false;
        this.loadIsDone = false;
    }
}

export class AttributeLoaderBase extends APIScope {

    // TODO need to specificy either load url or load source (a file, a layer with baked attributes)

    protected aac: AsynchAttribController;
    protected loadPromise: Promise<AttributeSet>;
    protected details: AttributeLoaderDetails;
    tabularAttributesCache: Promise<any>; // TODO enhance type

    protected constructor (iApi: InstanceAPI, details: AttributeLoaderDetails) {
        super(iApi);
        this.aac = new AsynchAttribController();
        this.details = details;
    }

    /**
     * Allows the list of field names to download to be updated. Allows support for diverant loading
     * flows between different layers.
     *
     * @param {string} newList
     */
    updateFieldList(newList: string): void {
        this.details.attribs = newList;
    }

    getAttribs(): Promise<AttributeSet> {
        if (!this.loadPromise) {
            // promise creation
            this.aac = new AsynchAttribController();
            this.loadPromise = this.loadPromiseGenerator();
        }
        return this.loadPromise;
    }

    abortAttribLoad(): void {
        this.aac.loadAbortFlag = true;

        // TODO nuke the promise?
        // this.destroyAttribs();
    }

    destroyAttribs(): void {
        // erase private promise
        this.loadPromise = undefined;
        this.tabularAttributesCache = undefined;
        this.aac.loadIsDone = false;
        this.aac.loadedCount = 0;
    }

    loadCount(): number {
        return this.aac.loadedCount;
    }

    isLoaded(): boolean {
        return this.aac.loadIsDone;
    }

    // this will be overrideable.
    // so one function for arcgis server. another for baked featurelayer. another for json file source
    protected loadPromiseGenerator(): Promise<AttributeSet> {
        // this should never run
        return Promise.reject(new Error('Subclass of AttributeLoaderBase did not implement loadPromiseGenerator'));
    }

}

export class ArcServerAttributeLoader extends AttributeLoaderBase {

    constructor (iApi: InstanceAPI, details: AttributeLoaderDetails) {
        super(iApi, details);
    }

    protected loadPromiseGenerator(): Promise<AttributeSet> {
        // TODO call arcgis loader
        return this.$iApi.geo.utils.attributes.loadArcGisServerAttributes(this.details, this.aac);
    }

}

export class FileLayerAttributeLoader extends AttributeLoaderBase {

    constructor (iApi: InstanceAPI, details: AttributeLoaderDetails) {
        super(iApi, details);
    }

    protected loadPromiseGenerator(): Promise<AttributeSet> {
        return this.$iApi.geo.utils.attributes.loadGraphicsAttributes(this.details, this.aac);
    }

}

// manages the quick-lookup of attributes.
// i.e. when it makes sense to just download one instead of the entire set
export class QuickCache {

    // TODO if we come up with nice types for attribs or geoms, apply them

    private attribs: {[key: number]: Attributes};

    // the "any" type here is funny. for points, its BaseGeometry, for line/poly based, it's an object indexed by scale,
    // which then containts an object indexed by key (likely oid) and returns BaseGeometry.
    // will keep as any since it's private and the interfaces are casting to BaseGeometry. otherwise would need type shenannigans.

    // TODO see if we are impacted by the stuff found in https://github.com/fgpv-vpgf/fgpv-vpgf/issues/3873
    //      if memory serves there is no local stealing anymore but check anyways.

    private geoms: {[key: number]: any};

    readonly isPoint: boolean;

    constructor(geomType: string) {
        this.attribs = {};
        this.geoms = {};
        this.isPoint = geomType === 'point';
    }

    private getScaleStore(scale: number): {[key: number]: any} {
        if (!this.geoms[scale]) {
            // make a new store for this scale
            this.geoms[scale] = {};
        }
        return this.geoms[scale];
    }

    private getGeomStore(scale: number = undefined): {[key: number]: BaseGeometry} {
        // polygon and line layers have to also cache their geometry by scale level, as the
        // geometry can be simplified at smaller scales

        if (this.isPoint) {
            return this.geoms;
        } else {
            return this.getScaleStore(scale);
        }

        // dont think we need this error check, keeping in comments incase we need to restore it
        // throw new Error('LOD must be provided for geometry quickcache on line or polygon layer');
    }

    getAttribs(key: number): Attributes {
        return this.attribs[key];
    }

    setAttribs(key: number, atts: Attributes): void {
        this.attribs[key] = atts;
    }

    getGeom(key: number, scale: number = undefined): BaseGeometry {

        // polygon and line layers have to also cache their geometry by scale level, as the
        // geometry can be simplified at smaller scales
        return this.getGeomStore(scale)[key];
    }

    setGeom(key: number, geom: BaseGeometry, scale: number = undefined): void {
        const store = this.getGeomStore(scale);
        store[key] = geom;
    }

    // TODO if we decide not to use cacheResult, this function might be so underpowered its not worth having
    /*
    private finder(store: {[key: number]: any}, key: number): any {
        return store[key];


        const x = store[key];
        return {
            found: !!x,
            item: x
        }

    }
    */
}