import { DefPromise, IdentifyResultFormat } from '@/geo/api';
import type { MapClick } from '@/geo/api';
import type { LayerInstance } from '@/api/internal';
import { reactive } from 'vue';

/**
 * A baseclass for an IdentifyItem. Contains the information for a specific result and mechanisms
 * to assist in loading the data.
 */
export interface IdentifyItem {
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
    loading: Promise<void>;

    /**
     * Indicates if a load has been requested for the payload
     */
    started: boolean;

    /**
     * Initiate the loading process for this item
     * @returns {Promise} resolves when load has completed
     */
    load(): Promise<void>;
}

/**
 * Generates reactive Identify Items that support on-demand loading.
 */
export class ReactiveIdentifyFactory {
    /**
     * Generates a reactive Identify Item that sources its content via pre-existing content.
     * Contains the information for a specific result and appropriate methods.
     *
     * @param {IdentifyResultFormat} format the result format of the item
     * @param {any} payload the data for the item
     * @returns {IdentifyItem} a loaded identify item
     */
    static makeRawItem(format: IdentifyResultFormat, payload: any): IdentifyItem {
        const doneThanksPromise = Promise.resolve();
        const vanillaItem: IdentifyItem = {
            format,
            data: payload,
            started: true,
            loaded: true,
            loading: doneThanksPromise,
            load() {
                return doneThanksPromise;
            }
        };

        return reactive(vanillaItem);
    }

    /**
     * Generates a reactive Identify Item that sources its content via an object id.
     * Contains the information for a specific result and mechanisms to assist in loading the data.
     *
     * @param {number} oid objectId for the item
     * @param {LayerInstance} layer the logical layer hosting the item
     * @returns {IdentifyItem} an unloaded identify item
     */
    static makeOidItem(oid: number, layer: LayerInstance): IdentifyItem {
        // having a DefPromise (or any hacky variation) on the actual vanillaItem
        // seems to explode the reactive() painting.
        // so declare locally and then the item has secret reference to it
        // that Vue can't see.
        // This is also why IdentifyItem remains an Interface and not a Class.
        // The method params also use the same secret reference, allowing the
        // layer to not fall under reactive().

        const sneakyDeferred = new DefPromise<void>();

        const vanillaItem: IdentifyItem = {
            format: IdentifyResultFormat.ESRI,
            data: undefined,
            started: false,
            loaded: false,
            loading: sneakyDeferred.getPromise(),
            async load() {
                if (!this.started) {
                    this.started = true;

                    // get the attributes for the oid.
                    // the layer will handle the implementation & caching.
                    const g = await layer.getGraphic(oid, {
                        getAttribs: true
                    });
                    this.data = g.attributes;
                    this.loaded = true;

                    sneakyDeferred.resolveMe();
                }

                return sneakyDeferred.getPromise();
            }
        };

        return reactive(vanillaItem);
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
     * Layer Id of the logical layer the result came from
     */
    layerId: string;

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
