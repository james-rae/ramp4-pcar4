// wraps and represents a 2D esri map
// TODO add proper comments

import esri = __esri;

import { GlobalEvents, InstanceAPI } from '../../api/internal';
import { CommonMapAPI, CoreFilterKey, IdentifyMode, RampMapConfig, MapClick, MapMove, ScreenPoint, SpatialReference } from '../internal';
import { EsriLOD, EsriMapView } from '../esri';
import { LayerStore } from '@/store/modules/layer';

// TODO bring in the map actions code

export class MapAPI extends CommonMapAPI {

    // NOTE unlike ESRI3, the map view doesnt have a custom event, it uses property watches.
    //      so if we want to detect scale change we'll need to have another event, it won't be
    //      a big bundle of properties like ESRI3 provided

    // NOTE while having this var be protected makes sense, there are also cases where other parts of the geoapi need to access this.
    //      being public will also to allow hacking, which can be useful in a pinch. use underscore to make it clear this in not for playtimes.
    /**
     * The internal esri map view. Avoid referencing outside of geoapi.
     * @private
     */
    _innerView: esri.MapView | undefined;

    /**
     * The map spatial reference in RAMP API Spatial Reference format.
     * Saves us from converting from ESRI format every time it is needed
     * @private
     */
    private _rampSR: SpatialReference | undefined;

    /**
     * @constructor
     * @param {InstanceAPI} iApi the RAMP instance
     */
    constructor (iApi: InstanceAPI) {
        super(iApi);

        // TODO get rid of this definition if there are no additional lines of code needed.
    }

    /**
     * Will generate the actual Map control objects and construct it on the page
     * @param {RampMapConfig} config configuration data for the map
     * @param {string | HTMLDivElement} targetDiv the page div or the div id that the map should be created in
     */
     createMap(config: RampMapConfig, targetDiv: string | HTMLDivElement): void {
         super.createMap(config, targetDiv);

        // TODO if ._innerMap or ._innerView exists, do we want to do any cleanup on it? E.g. remove event handlers?

         this._rampSR = SpatialReference.fromConfig(config.extent.spatialReference);

         const esriViewConfig: esri.MapViewProperties = {
             map: this._innerMap,
             container: targetDiv,
             constraints: {
                 lods: <Array<EsriLOD>>config.lods,
                 rotationEnabled: false // TODO make rotation a config option?
             },
             spatialReference: {}, // this.gapi.utils.geom.convSrToEsri(this.rampSR), // BAAH
             extent: config.extent,

         };

         // TODO extract more from config and set appropriate view properties (e.g. intial extent, initial projection, LODs)
         this._innerView = new EsriMapView(esriViewConfig);

         this._innerView.watch('extent', (newval: esri.Extent) => {
             // NOTE: yes, double events. rationale is a block of code dealing with filters will not
             //       want to have two event handlers (one on filter, one on extent change) and synch
             //       between them. They can subscribe to the filter event and get all the info they need.

             // BAAH
             const newExtent = {}; // <Extent>this.gapi.utils.geom.geomEsriToRamp(newval, 'map_extent_event');
             this.$iApi.event.emit(GlobalEvents.MAP_EXTENTCHANGE, newExtent);
             this.$iApi.event.emit(GlobalEvents.FILTER_CHANGE, {
                 extent: newExtent,
                 filterKey: CoreFilterKey.EXTENT
             });
         });

         this._innerView.watch('scale', (newval: number) => {
             this.$iApi.event.emit(GlobalEvents.MAP_SCALECHANGE, newval);
         });

         this._innerView.on('click', esriClick => {
             // BAAH
             // this.mapClicked.fireEvent(this.gapi.utils.geom.esriMapClickToRamp(esriClick, 'map_click_point'));
         });

         this._innerView.on('double-click', esriClick => {
             // BAAH
             // this.mapDoubleClicked.fireEvent(this.gapi.utils.geom.esriMapClickToRamp(esriClick, 'map_doubleclick_point'));
         });

         this._innerView.on('pointer-move', esriMouseMove => {
             // TODO this even fires on just about every change in pixel the pointer makes.
             //      should we debounce here? or on the client?
             // BAAH
             // this.mapMouseMoved.fireEvent(this.gapi.utils.geom.esriMapMouseToRamp(esriMouseMove));
         });

         this._innerView.on('pointer-down', esriMouseDown => {
             // BAAH
             // this.mapMouseDown.fireEvent(esriMouseDown.native);
         });

         this._innerView.on('key-down', esriKeyDown => {
             // BAAH
             /*
             this.mapKeyDown.fireEvent(esriKeyDown.native);
             esriKeyDown.stopPropagation();
             */
         });

         this._innerView.on('key-up', esriKeyUp => {
             // BAAH
             /*
             this.mapKeyUp.fireEvent(esriKeyUp.native);
             esriKeyUp.stopPropagation();
             */
         });

         this._innerView.on('blur', esriBlur => {
             // BAAH
             // this.mapBlur.fireEvent(esriBlur.native);
         });

         this._innerView.container.addEventListener('touchmove', e => {
             // need this for panning and zooming to work on mobile devices / touchscreens
             // touchmove stops the drag event (what the MapView reacts to) from firing properly
             e.preventDefault();
         });

     }

    /**
     * Projects a geometry to the map's spatial reference
     *
     * @private
     * @param {BaseGeometry} geom the RAMP API geometry to project
     * @returns {Promise<BaseGeometry>} the geometry projected to the map's projection, in RAMP API Geometry format
     */
    // BAAH
    /*
    private geomToMapSR(geom: BaseGeometry): Promise<BaseGeometry> {
        if (this.rampSR.isEqual(geom.sr)) {
            return Promise.resolve(geom);
        } else {
            return this.gapi.utils.proj.projectGeometry(this.rampSR, geom);
        }
    }
    */

    /**
     * Adds a layer to the map
     *
     * @param {LayerBase} layer the GeoAPI layer to add
     * @returns {Promise<void>} a promise that resolves when the layer has been added to the map
     */
    // BAAH
    /*
    async addLayer (layer: LayerBase): Promise<void> {
        await layer.isReadyForMap();
        this._innerMap.add(layer._innerLayer);
        layer.hostMap = this;
    }
    */

    /**
     * Adds a highlight layer to the map
     *
     * @param {HighlightLayer} highlightLayer the highlight
     */
    // BAAH
    /*
    addHighlightLayer (highlightLayer: HighlightLayer): void {
        this._innerMap.add(highlightLayer._innerLayer);
    }
    */

    // TODO passthrough functions, either by aly magic or make them hardcoded

    /**
     * Zooms the map to a given geometry.
     *
     * @param {BaseGeometry} geom A RAMP API geometry to zoom the map to
     * @param {number} [scale] An optional scale value of the map. Is ignored for non-Point geometries
     * @param {boolean} [animate] An optional animation setting. On by default
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    // BAAH
    /*
    zoomMapTo(geom: BaseGeometry, scale?: number, animate: boolean = true): Promise<void> {
        // TODO technically this can accept any geometry. should we open up the suggested signatures to allow various things?
        return this.geomToMapSR(geom).then(g => {
            // TODO investigate the `snapTo` parameter if we have an extent / poly coming in
            //      see how it compares to the old "fit to view" parameter of ESRI3
            const zoomP: any = {
                target: this.gapi.utils.geom.geomRampToEsri(g)
            };
            if (g.type === GeometryType.POINT) {
                zoomP.scale = scale || 50000;
            }
            const opts: any = { animate: animate };
            return this._innerView.goTo(zoomP, opts);
        });
    }
    */

    /**
     * Zooms the map to a given zoom level. The center point will not change.
     * In the rare case where there is no basemap, this will likely do nothing
     *
     * @param {number} zoomLevel An integer matching the level of detail / zoom level the map should adjust to
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    // BAAH
    /*
    zoomToLevel(zoomLevel: number): Promise<void> {
        return this._innerView.goTo({ zoom: zoomLevel });
    }
    */

    /**
     * Zooms the map to the next zoom level in towards the earth. The center point will not change.
     * In the rare case where there is no basemap, this will likely do nothing
     *
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    // BAAH
    /*
    zoomIn(): Promise<void> {
        // TODO fancy it up and add some bounds checking
        return this.zoomToLevel(this._innerView.zoom + 1);
    }
    */

    /**
     * Zooms the map to the next zoom level out away from the earth. The center point will not change.
     * In the rare case where there is no basemap, this will likely do nothing
     *
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    // BAAH
    /*
    zoomOut(): Promise<void> {
        // TODO fancy it up and add some bounds checking
        return this.zoomToLevel(this._innerView.zoom - 1);
    }
    */

    /**
     * Zooms the map to the closest zoom level that will be visible for a given scale set.
     * Does nothing if scale set is already visible for the map.
     *
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    // BAAH
    /*
    zoomToVisibleScale(scaleSet: ScaleSet): Promise<void> {
        const offStatus = scaleSet.isOffScale(this.getScale());

        if (!offStatus.offScale) { return Promise.resolve(); }

        const lods = this._innerView.constraints.lods;

        if (!lods) {
            // handle case with no tiles / lods
            return this.zoomMapTo(this.getExtent().center(), offStatus.zoomIn ? scaleSet.minScale : scaleSet.minScale);
        }

        // the lods array is ordered largest scale to smallest scale.  e.g. world view to city view
        // if zoomOut is false, we reverse the array so we search it in the other direction.
        const modLods = offStatus.zoomIn ? lods : [...lods].reverse();

        // scan for appropriate LOD that will make scale set visible, or pick last LOD if no boundary was found
        const scaleLod = modLods.find(currentLod => offStatus.zoomIn ? currentLod.scale < scaleSet.minScale :
                currentLod.scale > scaleSet.maxScale) || modLods[modLods.length - 1];

        return this.zoomToLevel(scaleLod.level);

    }
    */

    /**
     * Provides the scale of the map (the scale denominator as integer)
     *
     * @returns {number} the map scale
     */
    getScale(): number {
        if (this._innerView) {
            return this._innerView.scale;
        } else {
            this.noMapErr();
            return 1; // avoid returning zero, could cause divide-by-zero error in caller.
        }
    }

    /**
     * Provides the resolution of the map. This means the number of map units that is covered by one pixel.
     *
     * @returns {number} the map resolution
     */
    getResolution(): number {
        if (this._innerView) {
            return this._innerView.resolution;
        } else {
            this.noMapErr();
            return 1; // avoid returning zero, could cause divide-by-zero error in caller.
        }
    }

    /**
     * Provides the extent of the map
     *
     * @returns {Extent} the map extent in RAMP API Extent format
     */
    // BAAH
    /*
    getExtent(): Extent {
        return this.gapi.utils.geom.convEsriExtentToRamp(this._innerView.extent);
    }
    */

    /**
     * Provides the spatial reference of the map
     *
     * @returns {SpatialReference} the map spatial reference in RAMP API format
     */
    getSR(): SpatialReference {
        if (this._rampSR) {
            return this._rampSR.clone();
        } else {
            this.noMapErr();
            return SpatialReference.latLongSR(); // default fake value. avoids us having undefined checks everywhere.
        }
    }

    /**
     * Get the height of the map on the screen in pixels
     *
     * @returns {Number} pixel height
     */
    getPixelHeight(): number {
        if (this._innerView) {
            return this._innerView.height;
        } else {
            this.noMapErr();
            return 1; // avoid returning zero, could cause divide-by-zero error in caller.
        }
    }

    /**
     * Get the width of the map on the screen in pixels
     *
     * @returns {Number} pixel width
     */
    getPixelWidth(): number {
        if (this._innerView) {
            return this._innerView.width;
        } else {
            this.noMapErr();
            return 1; // avoid returning zero, could cause divide-by-zero error in caller.
        }
    }

    /**
     * Get a point in map co-ordinates corresponding to a pixel in screen co-ordinates.
     *
     * @param {Number} screenX pixel co-ord of the point on the map, x-axis.
     * @param {Number} screenY pixel co-ord of the point on the map, y-axis.
     * @returns {Point} the map point analagous to the screen point
     */
    // BAAH
    /*
    screenPointToMapPoint(screenX: number, screenY: number): Point {
        return this.gapi.utils.geom.convEsriPointToRamp(this._innerView.toMap({x: screenX, y: screenY}), 'mappoint');
    }
    */

    /**
     * Get a pixel in screen co-ordinates corresponding to a point in map co-ordinates.
     *
     * @param {Point} mapPoint point on the map
     * @returns {ScreenPoint} the screen point analagous to the map point
     */
    // BAAH
    /*
    mapPointToScreenPoint(mapPoint: Point): ScreenPoint {
        const esriPoint = this._innerView.toScreen(this.gapi.utils.geom.convPointToEsri(mapPoint))
        return { screenX: esriPoint.x, screenY: esriPoint.y };
    }
    */

    // TODO function to allow a second Map to be shot out, that shares this map but has a different scene

    // TODO basemap generation stuff (might need to be delayed due to lack of dojo dijit)

    _identifyMode: IdentifyMode[] = [
        IdentifyMode.Query,
        IdentifyMode.Marker,
        IdentifyMode.Highlight,
        IdentifyMode.Haze,
        IdentifyMode.Details
    ];

    // a note about modes and events.
    // depending if we choose to implement the old modes are come up with a new scheme,
    // there are two event handlers that are running stuff (see events.ts).
    // there is a map click event that then triggers the identify routine below
    // and there is the identify event, raised by the routine below, that then opens the details panel.
    // so the solution may need to either do some on/off'ing of the event handlers,
    // or we introduce some global flag variables that get referenced
    // (e.g. dont run identify could be a first line in the function below: if api.noIdentify then return )
    // global flags MIGHT be safer, as it doesn't have to assume the default handlers are in play.
    // i.e. if someone did some event modding for custom results, and we have core code then swapping
    //      default event handlers, would be a mess.

    /**
     * Performs an identify request on all layers that support identify, and combines the results into an object that is readable by the details panel.
     *
     * @param {*} payload
     * @memberof DetailsFixture
     */
    // BAAH
    /*
    identify(payload: MapClick | ApiBundle.Point) {
        let layers: BaseLayer[] | undefined = this.$vApp.$store.get(LayerStore.layers);

        // Don't perform an identify request if the layers array hasn't been established yet.
        if (layers === undefined) return;

        let p: IdentifyParameters = {
            geometry: payload instanceof ApiBundle.Point ? payload : payload.mapPoint
        };

        // Perform an identify request on each layer. Does not perform the request on layers that do not have an identify function (layers that do not support identify).
        const identifyInstances: IdentifyResultSet[] = layers
            .filter(layer => layer.supportsIdentify)
            .map(layer => {
                return layer.identify(p);
            });

        // Merge all results received by the identify into one array.
        const identifyResults: IdentifyResult[] = ([] as IdentifyResult[]).concat(...identifyInstances.map(({ results }) => results));

        let mapClick: MapClick;
        if (payload instanceof ApiBundle.Point) {
            // construct MapClick if only point is given
            const screenPoint = this.$iApi.map.mapPointToScreenPoint(payload);
            mapClick = {
                mapPoint: payload,
                screenX: screenPoint.screenX,
                screenY: screenPoint.screenY,
                button: 0,
                clickTime: Date.now()
            };
        } else {
            mapClick = payload;
        }

        // TODO make the event payload an interface? should there be a public area with all event payload interfaces?
        this.$iApi.event.emit(GlobalEvents.MAP_IDENTIFY, { results: identifyResults, click: mapClick });
    }
    */

    // list of keys that are currently pressed
    private _activeKeys: string[] = [];

    // ID of pan interval
    private _panInterval: any;

    /**
     * Processes keydown event on map and initiates panning/zooming
     *
     * @param {KeyboardEvent} payload
     * @memberof MapAPI
     */
    mapKeyDown(payload: KeyboardEvent) {
        const zoomKeys = ['=', '-'];
        const panKeys = ['Shift', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp'];

        if (panKeys.includes(payload.key) && !this._activeKeys.includes(payload.key)) {
            this._activeKeys.push(payload.key);
            // don't pan in middle of zoom animation
            if (!this._activeKeys.some(k => zoomKeys.includes(k))) {
                this.pan();
            }
        } else if (zoomKeys.includes(payload.key) && !this._activeKeys.includes(payload.key)) {
            this._activeKeys.push(payload.key);
            this.zoom(payload);
        } else if (payload.key === 'Enter') {
            // BAAH
            // this.identify(this.$iApi.map.getExtent().center());
        }
    }

    /**
     * Processes keyup event on map and deactivates key
     *
     * @param {KeyboardEvent} payload
     * @memberof MapAPI
     */
    mapKeyUp(payload: KeyboardEvent) {
        const zoomKeys = ['=', '-'];

        // ignore zoom keys, manually deactivate them when zoom finishes so keyup won't interrupt zoom animation
        if (this._activeKeys.includes(payload.key) && !zoomKeys.includes(payload.key)) {
            this._activeKeys.splice(this._activeKeys.indexOf(payload.key), 1);
            // don't pan in middle of zoom animation
            if (!this._activeKeys.some(k => zoomKeys.includes(k))) {
                this.pan();
            }
        }
    }

    /**
     * Stops panning and deactivates all keys
     *
     * @memberof MapAPI
     */
    stopPan() {
        this._activeKeys = [];
        clearInterval(this._panInterval);
    }

    /**
     * Returns if keys are active on map
     *
     * @memberof MapAPI
     * @returns {boolean} - true if any pan/zoom keys are active
     */
    get keysActive(): boolean {
        return this._activeKeys.length !== 0;
    }

    /**
     * Pauses pan interval to process zoom from keyboard
     *
     * @param {KeyboardEvent} payload
     * @memberof MapAPI
     * @private
     */
    private async zoom(payload: KeyboardEvent) {
        // TODO consider renaming to something more specific

        // BAAH
        /*
        clearInterval(this._panInterval);
        if (payload.key === '=') {
            await this.$iApi.map.zoomIn();
        } else if (payload.key === '-') {
            await this.$iApi.map.zoomOut();
        }
        this._activeKeys.splice(this._activeKeys.indexOf(payload.key), 1);
        this.pan();
        */
    }

    /**
     * Starts/restarts panning with active keys
     *
     * @memberof MapAPI
     * @private
     */
    private pan() {
        // TODO consider renaming to something more specific

        // BAAH
        /*
        clearInterval(this._panInterval);
        if (this._activeKeys.length === 0) {
            return;
        }

        const center = this.$iApi.geo.map.getExtent().center();

        // calculate pan velocity based on constant pixel value that won't change based on zoom
        const screenCenter = this.$iApi.map.mapPointToScreenPoint(center);
        const p = this.$iApi.geo.map.screenPointToMapPoint(screenCenter.screenX + 5, screenCenter.screenY + 5);
        const xDiff = Math.abs(p.x - center.x);
        const yDiff = Math.abs(p.y - center.y);

        let dx = 0;
        let dy = 0;
        let multiplier = 1;

        for (let i = 0; i < this._activeKeys.length; ++i) {
            switch (this._activeKeys[i]) {
                case 'ArrowLeft':
                    dx -= xDiff;
                    break;
                case 'ArrowRight':
                    dx += xDiff;
                    break;
                case 'ArrowUp':
                    dy += yDiff;
                    break;
                case 'ArrowDown':
                    dy -= yDiff;
                    break;
                case 'Shift':
                    multiplier = 2;
                    break;
            };
        }

        const scale = this.$iApi.map.getScale();

        this._panInterval = setInterval(() => {
            center.x += multiplier * dx;
            center.y += multiplier * dy;
            this.$iApi.map.zoomMapTo(center, scale, false);
        }, 25)
        */
    }
}
