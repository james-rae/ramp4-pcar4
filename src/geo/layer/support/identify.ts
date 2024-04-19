import { DefPromise, IdentifyResultFormat } from '@/geo/api';
import type { MapClick } from '@/geo/api';
import type { LayerInstance } from '@/api/internal';
import { markRaw } from 'vue';

/*
const createPromise = (): [Promise<void>, any] => {
    let resolver;
    return [
        new Promise((resolve, reject) => {
            resolver = resolve;
        }),
        resolver
    ];
};

const [promise, resolver] = createPromise();
*/

/**
 * A baseclass for an IdentifyItem. Contains the information for a specific result and mechanisms
 * to assist in loading the data.
 */
export class IdentifyItem {
    /**
     * Data payload for this item
     */
    data: any;

    /**
     * Format of the data payload
     */
    format: IdentifyResultFormat;

    /**
     * Indicates if payload has finished loading and is available
     */
    loaded: boolean;

    /**
     * A promise that resovles when the payload has loaded
     */
    get loading(): Promise<void> {
        return Promise.resolve();
    }

    /**
     * Indicates if a load has been requested for the payload
     */
    started: boolean;

    /**
     * Internal deferred to manage the public promise
     * @private
     */
    //  private _blocker: DefPromise;

    // NOTE: ideally blocker would be protected , but vue's reactivity seems to be having a major problem with that.

    constructor(format: IdentifyResultFormat) {
        this.format = format;
        this.loaded = false;
        this.started = false;
        //  this._blocker = new DefPromise();
    }

    /**
     * Initiate the loading process for this item
     * @returns {Promise} resolves when load has completed
     */
    async load(): Promise<void> {
        // acts as a fallback for the instant-load subclasses
        return this.loading;
    }

    /*
    protected donethanks() {
        this._blocker.resolveMe();
    }
    */
}

/**
 * Identify item that sources its content via a pre-existing value. Contains the information for a specific result and mechanisms
 * to assist in loading the data.
 */
export class RawIdentifyItem extends IdentifyItem {
    constructor(format: IdentifyResultFormat, payload: any) {
        super(format);

        this.data = payload;

        this.started = true;
        this.loaded = true;
        //  this._blocker.resolveMe();
        //  this.donethanks();
    }
}

/**
 * Identify item that sources its content via an object id. Contains the information for a specific result and mechanisms
 * to assist in loading the data.
 */
export class OidIdentifyItem extends IdentifyItem {
    /**
     * Tracks the oid to load on demand
     */
    private oid: number;

    /**
     * The the logical layer that owns this item
     */
    private hostLayer: LayerInstance;

    private blockProm: Promise<void>;

    private donethankser: any;

    constructor(oid: number, layer: LayerInstance) {
        super(IdentifyResultFormat.ESRI);

        this.oid = oid;
        this.hostLayer = layer;

        // if this works, write a note why DefPromise doesn't respect
        // https://github.com/vuejs/core/issues/3024
        let resolver;

        this.blockProm = new Promise((resolve, reject) => {
            resolver = resolve;
        });
        this.donethankser = markRaw(resolver!);
    }

    get loading(): Promise<void> {
        return this.blockProm;
    }

    /**
     * Initiate the loading process for this item
     *
     * @returns {Promise} resolves when load has completed
     */
    async load(): Promise<void> {
        if (!this.started) {
            this.started = true;

            // get the attributes for the oid.
            // the layer will handle the implementation & caching.
            const g = await this.hostLayer.getGraphic(this.oid, {
                getAttribs: true
            });
            this.data = g.attributes;
            this.loaded = true;
            //   this._blocker.resolveMe();
            this.donethankser();
        }

        return this.loading;
    }
}

/**
 * The result of identifying against a logical layer ( a feature class or WMS )
 */
export interface IdentifyResult {
    /**
     * List of individual results (populated once loaded)
     */
    items: Array<IdentifyItem>;

    /**
     * UID of the logical layer the result came from
     */
    uid: string;

    /**
     * Indicates if the list of results have been identified.
     * This means items is populated. Each item will need to have details loaded as needed.
     */
    loaded: boolean;

    /**
     * Indicates if an error occurred while attempting to get this result
     */
    errored: boolean;

    /**
     * A promise that resolves once this result is loaded
     */
    loading: Promise<void>;

    /**
     * Timestamp of the request
     */
    requestTime: number;
}

/**
 * The result of identifying against a point on the map.
 */
export interface MapIdentifyResult {
    /**
     * List of all the results found in the map identify
     */
    results: IdentifyResult[];

    /**
     * The map point that was identified
     */
    click: MapClick;
}
