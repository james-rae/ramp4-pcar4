// put things here that would be common to all layers
// used for layer types defined by Core RAMP.
// TODO add proper comments

// import { InfoBundle, LayerState, RampLayerConfig, LegendSymbology, IdentifyParameters, IdentifyResultSet,
//    FilterEventParam, AttributeSet, FieldDefinition, TabularAttributeSet, GetGraphicResult, GetGraphicParams } from '../gapiTypes';

import { GlobalEvents, InstanceAPI, LayerInstance } from '@/api/internal';
import {
    AttributeSet,
    DataFormat,
    DefPromise,
    Extent,
    FieldDefinition,
    GetGraphicResult,
    GetGraphicParams,
    IdentifyParameters,
    IdentifyResultSet,
    LayerState,
    LayerType,
    LegendSymbology,
    RampLayerConfig,
    ScaleSet,
    TabularAttributeSet,
    TreeNode
} from '@/geo/api';

export class CommonLayer extends LayerInstance {
    // used to manage debouncing when applying filter updates against a layer. Private! but needs to be seen by FCs.
    _lastFilterUpdate: string = '';

    /**
     * Indicates layer had loaded and achieved one sucessful update. I.e. layer has been drawn on the map once.
     * @property initLoadDone
     */
    get initLoadDone(): boolean {
        return this.sawLoad && this.sawRefresh;
    }
    protected sawLoad: boolean;
    protected sawRefresh: boolean;
    protected origRampConfig: RampLayerConfig;
    protected _layerType: LayerType = LayerType.UNKNOWN; // TODO change to readonly?

    // TODO consider also having a loaded boolean property, allowing a synch check if layer has loaded or not. state can flip around to update, etc.
    //      alternately implement something like function layerLoaded() from old geoApi
    protected loadPromise: DefPromise; // a promise that resolves when layer is fully ready and safe to use. for convenience of caller
    protected viewPromise: DefPromise; // a promise that resolves when a layer view has been created on the map. helps bridge the view handler with the layer load handler

    dataFormat: DataFormat;

    protected layerTree: TreeNode | undefined;
    protected reloadTree: TreeNode | undefined;

    // TODO[Layer-Refactor]: making public so parent layer can push watches
    watches: Array<__esri.WatchHandle>;

    // ----------- LAYER CONSTRUCTION AND INITIALIZAION -----------

    // NOTE since constructor needs to be called first, we might want to push a lot of initialization to an .init() function
    //      that actual implementer classes call in their constructors. e.g. for a file layer, might need to process file parts prior to running LayerBase stuff
    // TODO if layer is now self-containing the reload stuff, we can internalize the reload tree.
    protected constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.uid = this.bestUid(-1);

        this.state = LayerState.LOADING;
        this.supportsIdentify = false; // default state.
        this.isFile = false; // default state.
        this.initialized = false;
        this.sawLoad = false;
        this.sawRefresh = false;
        this.loadPromise = new DefPromise();
        this.viewPromise = new DefPromise();
        this.watches = [];
        this.origRampConfig = rampConfig;
        this.name = rampConfig.name || '';
        this.id = rampConfig.id || '';
        this.supportsFeatures = false; // default state. featurish layers should set to true when the load
        this.legend = [];
        this.dataFormat = DataFormat.UNKNOWN;
    }

    protected noLayerErr(): void {
        console.error(
            'Attempted to manipulate the layer before .initiate() finished'
        );
        console.trace();
    }

    // will give a new uid to use. if appropriate, will recycle same uid from a previous
    // incarnation of a layer to preserve continuity during a reload
    bestUid(idx?: number): string {
        if (
            typeof idx !== 'undefined' &&
            typeof this.reloadTree !== 'undefined'
        ) {
            // we have the ingredients for a reload scenario.
            // if we find an old uid from the last incarnation, use it.
            const t = this.reloadTree.findChildByIdx(idx);
            if (t && t.uid) {
                return t.uid;
            }
        }

        // could find no previous uid, or situation does not apply. new uid.
        return this.$iApi.geo.utils.shared.generateUUID();
    }

    protected updateState(newState: LayerState): void {
        this.state = newState;
        this.$iApi.event.emit(GlobalEvents.LAYER_STATECHANGE, {
            state: newState,
            uid: this.uid
        });
    }

    async initiate(): Promise<void> {
        // NOTE CommonLayer a superclass and this method should be called via super.initiate()
        //      in subclass.initiate() at the appropriate time. A general rule is that at
        //      minimum the subclass should instantiate the Esri layer object and assign it
        //      to .esriLayer before calling this.

        // loading stuff
        // https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#loadStatus
        // https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#loaded

        // NOTE current limitation: the event setup here only support one layer view. Any attempt to make
        //      RAMP have two map views rendering the same Layer will require some major refactoring.

        // TODO consider putting lots of info on the events.  e.g. instead of just state changed, have .state, .layerid
        //      visibility might need an optional FC index (whatever we're calling that)

        if (this.isSublayer) {
            // early back out, we don't want the below code to run for sublayers
            return Promise.resolve();
        }

        if (!this.esriLayer) {
            // TODO maybe different more specific error here. We assume the .initiate() on the subclass would have created the layer by now.
            this.noLayerErr();
            return;
        }

        if (this.initialized) {
            console.error(
                `Encountered layer initialize while already initialized, layer id ${this.id}`
            );
        }

        this.watches.push(
            this.esriLayer.watch('visible', (newval: boolean) => {
                // TODO re-evaluate the event parameter. This is common routine. Need to think about how sublayer would factor in to this.
                //      might need a secondary sublayer event, triggered on the FC? Sublayer visibility can change without affecting
                //      overall layer. TRICKY.
                //      also might want some redundant params, like layer id.
                this.$iApi.event.emit(GlobalEvents.LAYER_VISIBILITYCHANGE, {
                    visibility: newval,
                    uid: this.uid
                });
            })
        );

        this.watches.push(
            this.esriLayer.watch('opacity', (newval: number) => {
                // TODO re-evaluate the event parameter. This is common routine. Need to think about how sublayer would factor in to this.
                //      might need a secondary sublayer event, triggered on the FC? Sublayer opacity can change without affecting
                //      overall layer opacity. TRICKY.
                //      also might want some redundant params, like layer id.
                this.$iApi.event.emit(GlobalEvents.LAYER_OPACITYCHANGE, {
                    opacity: newval,
                    uid: this.uid
                });
            })
        );

        this.watches.push(
            this.esriLayer.watch('loadStatus', (newval: string) => {
                const statemap: any = {
                    'not-loaded': LayerState.LOADING,
                    loading: LayerState.LOADING,
                    loaded: LayerState.LOADED,
                    failed: LayerState.ERROR
                };

                if (newval === 'loaded') {
                    // loaded is a special case. the Layer object (subclasses of BaseLayer) need to do
                    // additional asynch work to fully set things up, so we delay firing the event until
                    // that is done.
                    this.onLoad();
                } else {
                    this.updateState(statemap[newval]);
                }
            })
        );

        this.esriLayer.on(
            'layerview-create',
            (e: __esri.LayerLayerviewCreateEvent) => {
                this.esriView = e.layerView;
                this.watches.push(
                    e.layerView.watch('updating', (newval: boolean) => {
                        this.updateState(
                            newval ? LayerState.REFRESH : LayerState.LOADED
                        );
                        if (newval) {
                            this.sawRefresh = true;
                        }
                    })
                );
                this.viewPromise.resolveMe();
            }
        );

        this.initialized = true;

        // initiate sublayers last (top down intiation)
        this.sublayers.forEach(s => s.initiate());
    }

    async terminate(): Promise<void> {
        // TODO null out esrilayer objects? or make orchestrator handle that stuff.
        // Note: attributes are stored in the FCs, so clearing the array
        //       erases any downloaded/cached attribute data.

        // terminate sublayers first (bottom up termination)
        this.sublayers.forEach(s => s.terminate());

        this.loadPromise = new DefPromise();
        this.viewPromise = new DefPromise();

        this.watches.forEach(w => w.remove());
        this.watches = [];

        this.updateState(LayerState.NEW);

        this.initialized = false;
    }

    async reload(): Promise<void> {
        if (!this.$iApi.geo.map.esriMap) {
            console.error('Attempted layer reload when no map exists');
            return;
        }

        // TODO should we consider a "reload start" event? Could be useful for animations.
        //      that said, .terminate() should cycle the layer state values so animations
        //      are probably already keying on that.

        let mapStackPosition: number = 0; // TODO verify best default if we can't find actual old position. top of the stack seems correct? top of data layer stack (to avoid covering north arrow)?

        if (this.initialized) {
            if (this.esriLayer) {
                // attempt to find esri layer in esri map
                const tempPosition =
                    this.$iApi.geo.map.esriMap.layers.findIndex(
                        l => l.id === this.id
                    );
                if (tempPosition > -1) {
                    mapStackPosition = tempPosition;

                    this.$iApi.geo.map.esriMap.layers.remove(this.esriLayer);

                    // TODO add an ELSE clause here. attempt to derive the position from the layer store (which is ordered).
                    //      do this after discussion 474 is figured out; it will probably put graphics layers into the layer
                    //      store, making the position calculation much easier than it currently is.
                }
            }

            // TODO might need to store layer state. If we want layer to look the same as it was prior to re-loading,
            //      could do that here. Alternative is to not, and let whomever is calling this save state before
            //      and restore state after. Might be more flexible.

            this.$iApi.event.emit(GlobalEvents.LAYER_RELOAD_START, this);
            this.sublayers.forEach(sublayer =>
                this.$iApi.event.emit(GlobalEvents.LAYER_RELOAD_START, sublayer)
            );
            await this.terminate();
        }

        await this.initiate();

        if (!this.esriLayer) {
            // TODO this might not warrent a console. A busted map server could fail, and the layer status would
            //      already give the error indication.
            console.error('ESRI layer failed to re-create during reload.');
            return;
        }

        this.$iApi.geo.map.esriMap.layers.add(this.esriLayer, mapStackPosition);

        this.$iApi.event.emit(GlobalEvents.LAYER_RELOAD_END, this);
        this.sublayers.forEach(sublayer =>
            this.$iApi.event.emit(GlobalEvents.LAYER_RELOAD_END, sublayer)
        );
    }

    // TODO strongly type if it makes sense. unsure if we want client config definitions in here
    //      that said if client shema is different that here, things are gonna break so maybe this is good idea
    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): any {
        // TODO flush out
        // NOTE: it would be nice to put esri.LayerProperties as the return type, but since we are cheating with refreshInterval it wont work
        //       we can make our own interface if it needs to happen (or can extent the esri one)

        const esriConfig: any = {
            id: rampLayerConfig.id,
            url: rampLayerConfig.url,
            opacity: rampLayerConfig?.state?.opacity,
            visible: rampLayerConfig?.state?.visibility
        };

        // TODO careful now. seems setting this willy nilly, even if undefined value, causes layer to keep pinging the server
        if (typeof rampLayerConfig.refreshInterval !== 'undefined') {
            esriConfig.refreshInterval = rampLayerConfig.refreshInterval;
        }
        return esriConfig;
    }

    // ----------- LAYER LOAD -----------

    // when esri layer loads, this will make sure the layer and FCs are in synch then let outsiders know its loaded
    protected onLoad(): void {
        // magic happens here. other layers will override onLoadActions,
        // meaning this will run the function appropriate for the layer who inherited LayerBase
        const loadPromises: Array<Promise<void>> = this.onLoadActions();
        Promise.all(loadPromises).then(() => {
            this.updateState(LayerState.LOADED);
            this.sawLoad = true;
            this.reloadTree = this.layerTree;
            this.loadPromise.resolveMe();

            this.sublayers.forEach(
                sublayer => (sublayer as any)?.onLoad() // This will just trigger the above statements
            );
        });
    }

    protected onLoadActions(): Array<Promise<void>> {
        if (!this.name) {
            // no name from config. attempt layer name
            this.name = this.esriLayer?.title || '';
        }

        // make the root of the tree
        // TODO consider initializing the layer tree object in the constructor, then editing it here.
        //      would mean we can get rid of the undefined type on the property
        if (!this.layerTree) {
            this.layerTree = new TreeNode(-1, this.uid, this.name, false);
        }

        // TODO implement extent defaulting. Need to add property, get appropriate format from incoming ramp config, maybe need an interface
        /*
        if (!this.extent) {
            // no extent from config. attempt layer extent
            this.extent = this.esriLayer.fullExtent;
        }

        this.extent = shared.makeSafeExtent(this.extent);
        */

        // layer base class doesnt have spatial ref, but we will assume all our layers do.
        // consider adding fancy checks if its missing, and if so just promise.resolve
        const lookupPromise = this.$iApi.geo.utils.proj
            .checkProj((<any>this.esriLayer).spatialReference)
            .then((goodSR: boolean) => {
                if (goodSR) {
                    return Promise.resolve();
                } else {
                    this.updateState(LayerState.ERROR);
                    return Promise.reject();
                }
            });

        return [lookupPromise];
    }

    /**
     * Provides a promise that resolves when the layer has finished loading. If accessing layer properties that
     * depend on the layer being loaded, wait on this promise before accessing them.
     *
     * @method isLayerLoaded
     * @returns {Promise} resolves when the layer has finished loading
     */
    isLayerLoaded(): Promise<void> {
        return this.loadPromise.getPromise();
    }

    /**
     * Indicates if the layer is in a state that is makes sense to interact with.
     * I.e. False if layer has not done it's initial load, or is in error state.
     *
     * @method isValidState
     * @returns {Boolean} true if layer is in an interactive state
     */
    get isValidState(): boolean {
        return (
            this.state === LayerState.LOADED ||
            this.state === LayerState.REFRESH
        );
    }

    /**
     * Provides a promise that resolves when the layer is ready to be added to a map.
     * Adding to a map before this has resolved is ok, but it will not appear on the map until after
     * (really only relevant if the timing/order of adding layers is important)
     *
     * @method isReadyForMap
     * @returns {Promise} resolves when the layer has finished loading
     */
    /*
    isReadyForMap(): Promise<void> {
        return this.esriPromise.getPromise();
    }
    */

    // ----------- LAYER MANAGEMENT -----------

    /**
     * The type of the physical layer
     */
    get layerType(): LayerType {
        return this._layerType;
    }

    /**
     * Returns the data format of a sublayer.
     *
     * @function dataFormat
     * @returns {String} format type of the sublayer
     */
    get getDataFormat(): DataFormat {
        // TODO return value might need to be common string to allow for outside layers to have custom formats.
        //      see if the interface on LayerInstance can be string and we can still compile an enum here or not.
        return this.dataFormat;
    }

    /**
     * Provides a tree structure describing the layer and any sublayers,
     * including uid values. Should only be called after isLayerLoaded resolves.
     *
     * @method getLayerTree
     * @returns {TreeNode} the root of the layer tree
     */
    getLayerTree(): TreeNode {
        if (this.layerTree) {
            return this.layerTree;
        } else {
            this.noLayerErr();
            return new TreeNode(
                0,
                'YOU DID AN ERROR',
                'Error, check your console pls'
            );
        }
    }

    /**
     * Wraps an error test for when someone calls a map dependend function too early
     * @private
     */
    protected mapCheck() {
        // Map Check Hah ha-ha-Hah
        // I be the anti-map rhythm rock shocker
        // TODO maybe make this a boolean that gets flipped to true once layer is added to the map.
        /*
        if (this.isUndefined(this.hostMap)) {
            throw new Error('Attempting to use map-dependent logic before the layer has been added to the map');
        }
        */
    }

    /**
     * Returns the name of the layer.
     *
     * @function getName
     * @returns {String} name of the layer
     */
    get name(): string {
        if (!this.sawLoad) {
            // layer has not been loaded yet
            // if the config has a name defined, this.name will be set
            // empty string will indicate the layer has not loaded and has no name defined
            return super.name || '';
        }
        return super.name || this.id;
    }

    /**
     * Set the name of the layer.
     *
     * @function getName
     * @param {String} name the new name of the layer
     */
    set name(name: string) {
        super.name = name;
    }

    /**
     * Returns the visibility of the layer.
     *
     * @function getVisibility
     * @returns {Boolean} visibility of the layer
     */
    get visibility(): boolean {
        // basic case - sublayer vis === layer vis
        if (this.esriLayer) {
            return this.esriLayer.visible;
        } else {
            this.noLayerErr();
            return false; // default to chill things.
        }
    }

    /**
     * Applies visibility to layer.
     *
     * @function setVisibility
     * @param {Boolean} value the new visibility setting
     */
    set visibility(value: boolean) {
        // basic case - set layer visibility
        if (this.esriLayer) {
            this.esriLayer.visible = value;
        } else {
            this.noLayerErr();
        }
    }

    /**
     * Returns the opacity of the layer.
     *
     * @function getOpacity
     * @returns {Boolean} opacity of the layer
     */
    get opacity(): number {
        // basic case - sublayer opac === layer opac
        if (this.esriLayer) {
            return this.esriLayer.opacity;
        } else {
            this.noLayerErr();
            return 0; // default to chill things.
        }
    }

    /**
     * Applies opacity to layer.
     *
     * @function setOpacity
     * @param {Boolean} value the new opacity setting
     */
    set opacity(value: number) {
        // basic case - set layer opacity
        if (this.esriLayer) {
            this.esriLayer.opacity = value;
        } else {
            this.noLayerErr();
        }
    }

    /**
     * Indicates if the layer is not in a visible scale range.
     *
     * @function isOffscale
     * @param {Integer} [testScale] optional scale to test against. if not provided, current map scale is used.
     * @returns {Boolean} true if the layer is outside of a visible scale range
     */
    isOffscale(testScale: number | undefined = undefined): boolean {
        let mahScale: number;
        if (typeof testScale === 'undefined') {
            this.mapCheck();
            mahScale = this.$iApi.geo.map.getScale();
        } else {
            mahScale = testScale;
        }

        return this.scaleSet.isOffScale(mahScale).offScale;
    }

    /**
     * Cause the map to zoom to a scale level where the layer is visible.
     *
     * @returns {Promise} resolves when map has finished zooming
     */
    zoomToVisibleScale(): Promise<void> {
        this.mapCheck();

        // TODO consider enhancing to bring in the old "pan to data" step from RAMP2.
        //      was never a great function; only worked well if data was in a condensed area.
        //      if we do it, we would wait for zoom promise, then check if map center is
        //      inside the layer extent. if not, pan the map to layer extent center.
        //      would need to add an extra boolean flag parameter to indicate if we do the pan or not.
        //      alternate idea is make a separate pan-to-extent function and let caller make two calls. hmmm. nice.
        return this.$iApi.geo.map.zoomToVisibleScale(this.scaleSet);
    }

    // ----------- LAYER ACTIONS -----------

    /**
     * Baseline identify function for layers that do not support identify.
     * Will return an empty result. Layers that support identify should override this method.
     *
     * @param options not used, present for nice signature of overrided function
     * @returns {IdentifyResultSet} an empty result set
     */
    identify(options: IdentifyParameters): IdentifyResultSet {
        // returns an empty set.
        // serves as a fallback incase someone tries to identify on a non-identifiyable layer
        // (callers can use this.supportsIdentify to check for that)
        // and also as a "no results" option for subclasses to use.
        return {
            results: [],
            done: Promise.resolve(),
            parentUid: this.uid
        };
    }

    // ----------- STUB METHODS -----------
    // these are here to provide a consistant method interface when calling methods are
    // dealing with vars typed as BaseLayer. Layer classes that actually use these
    // methods will override the stubs.

    protected stubError(): void {
        throw new Error(
            `Attempted to use a method not valid for ${this.layerType}`
        );
    }

    /**
     * Invokes the process to get the full set of attribute values for the given sublayer.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @returns {Promise} resolves with set of attribute values
     */
    getAttributes(): Promise<AttributeSet> {
        this.stubError();
        return Promise.resolve({
            features: [],
            oidIndex: {}
        });
    }

    /**
     * Returns an array of field definitions about the given sublayer's fields. Raster layers will have empty arrays.
     *
     * @returns {Array} list of field definitions
     */
    get fields(): Array<FieldDefinition> {
        // this.stubError();
        return super.fields;
    }

    /**
     * Sets the array of field definitions about the layers's fields
     *
     * @param {Array<FieldDefinition>} fields the list of field definitions
     */
    set fields(fields: Array<FieldDefinition>) {
        super.fields = fields;
    }

    /**
     * Returns the geometry type of the given sublayer.
     *
     * @returns {Array} list of field definitions
     */
    get geomType(): string {
        //this.stubError();
        return super.geomType;
    }

    /**
     * Sets the geometry type of the layer
     *
     * @param {string} type the new the geometry type
     */
    set geomType(type: string) {
        super.geomType = type;
    }

    /**
     * Returns the name field of the given sublayer.
     *
     * @returns {string} name field
     */
    get nameField(): string {
        //this.stubError();
        return super.nameField;
    }

    /**
     * Set the name field of the layer
     *
     * @param {string} name the new name field
     */
    set nameField(name: string) {
        super.nameField = name;
    }

    /**
     * Returns the OID field of the given sublayer.
     *
     * @returns {string} OID field
     */
    get oidField(): string {
        //this.stubError();
        return super.oidField;
    }

    /**
     * Set the OID field of the layer
     *
     * @param {string} name the new OID field
     */
    set oidField(name: string) {
        super.oidField = name;
    }

    /**
     * Requests that an attribute load request be aborted. Useful when encountering a massive dataset or a runaway process.
     *
     */
    abortAttributeLoad(): void {
        this.stubError();
    }

    /**
     * Requests that any downloaded attribute sets be removed from memory. The next getAttributes request will pull from the server again.
     *
     */
    destroyAttributes(): void {
        this.stubError();
    }

    // formerly known as getFormattedAttributes
    /**
     * Invokes the process to get the full set of attribute values for the given sublayer,
     * formatted in a tabular format. Additional data properties are also included.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @returns {Promise} resolves with set of tabular attribute values
     */
    getTabularAttributes(): Promise<TabularAttributeSet> {
        this.stubError();

        // nonsense to shut up typescript
        return Promise.resolve({
            columns: [],
            rows: [],
            fields: [],
            oidField: 'error',
            oidIndex: 0 // TODO determine if we need this anymore
        });
    }

    /**
     * Get the feature count for the given sublayer.
     *
     * @returns {Integer} number of features in the sublayer
     */
    get featureCount(): number {
        //this.stubError();
        return super.featureCount;
    }

    /**
     * Set the feature count for thelayer
     *
     * @param {Integer} count the new number of features in the layer
     */
    set featureCount(count: number) {
        super.featureCount = count;
    }

    // TODO think about this name. using getGraphic for consistency.
    /**
     * Gets information on a graphic in the most efficient way possible. Options object properties:
     * - getGeom ; a boolean to indicate if the result should include graphic geometry
     * - getAttribs ; a boolean to indicate if the result should include graphic attributes
     * - unboundMap ; an optional RampMap reference. Only required if geometry was requested and the layer has not been added to a map.
     *
     * @param {Integer} objectId the object id of the graphic to find
     * @param {Object} options options object for the request, see above
     * @returns {Promise} resolves with a fake graphic containing the requested information
     */
    getGraphic(
        objectId: number,
        options: GetGraphicParams
    ): Promise<GetGraphicResult> {
        this.stubError();
        return Promise.resolve({});
    }

    /**
     * Gets the icon for a specific feature, as an SVG string.
     *
     * @param {Integer} objectId the object id of the feature to find
     * @returns {Promise} resolves with an svg string encoding of the icon
     */
    getIcon(objectId: number): Promise<string> {
        this.stubError();
        return Promise.resolve('');
    }

    /**
     * Applies an SQL filter to the layer. Will overwrite any existing filter for the given key.
     * Use `1=2` for a "hide all" where clause.
     *
     * @param {String} filterKey the filter key / named filter to apply the SQL to
     * @param {String} whereClause the WHERE clause of the filter
     */
    setSqlFilter(filterKey: string, whereClause: string): void {
        this.stubError();
    }

    /**
     * Returns the value of a named SQL filter for a given sublayer.
     *
     * @param {String} filterKey the filter key / named filter to view
     * @returns {String} the value of the where clause for the filter. Empty string if not defined.
     */
    getSqlFilter(filterKey: string): string {
        this.stubError();
        return '';
    }

    // TODO this makes for a fairly gnarly param. i.e. to target a sublayer with no extras, gotta call
    //      mylayer.getFilterOIDs(undefined, undefined, myUid)
    //      changing the two params to an options object somewhat helps, though that would also be optional param.
    /**
     * Gets array of object ids that currently pass any filters for the given sublayer
     *
     * @param {Array} [exclusions] list of any filters keys to exclude from the result. omission includes all filters
     * @param {Extent} [extent] if provided, the result list will only include features intersecting the extent
     * @returns {Promise} resolves with array of object ids that pass the filter. if no filters are active, resolves with undefined.
     */
    getFilterOIDs(
        exclusions: Array<string> = [],
        extent: Extent | undefined = undefined
    ): Promise<Array<number> | undefined> {
        this.stubError();
        return Promise.resolve(undefined);
    }

    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     */
    applySqlFilter(exclusions: Array<string> = []): void {
        this.stubError();
    }

    /**
     * Add a WMS layer parameter, maybe even refresh the layer
     *
     * @function setCustomParameter
     * @param {String} key name of the key to be created or updated
     * @param {String} value value of the key
     * @param {Boolean} forceRefresh show the new fancy version of the layer or not
     */
    setCustomParameter(
        key: string,
        value: string,
        forceRefresh: boolean = true
    ): void {
        this.stubError();
    }
}
