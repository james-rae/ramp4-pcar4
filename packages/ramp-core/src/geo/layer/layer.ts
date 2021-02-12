// layers api and other public, general layer things.
import esri = __esri;
import { APIScope, InstanceAPI } from '../../api/internal';
import { LayerBase } from '../internal';

// TODO strongly type the config param? might be pointless, as we want custom layers to have any config they like
/**
 * A constructor returning an object implementing LayerBase interface.
 */
type ILayerBase = new (config: any, iApi: InstanceAPI) => LayerBase;

// TODO revist how useful this is. LayerInstance implements LayerBase so its very similar to ILayerBase
/**
 * A constructor returning an instance of LayerInstance class.
 */
type ILayerInstance = new (config: any, iApi: InstanceAPI) => LayerInstance;

// this probably becomes the vuex store object if we convert?
// metadata to store and track our layer definitions
class LayerDef {
    layerConstructor: ILayerBase | undefined;
    // strongLayerConstructor: ILayerInstance | undefined; // would be a layer def from inside RAMP
    rawBase: boolean = false; // true if constructor is from outside the core and requires updateBaseToInstance
    loadPromise: Promise<any> | undefined; // resolves when layer definition has loaded
    id: string;
    private api: InstanceAPI;

    constructor (id: string, api: InstanceAPI) {
        this.id = id;
        this.api = api;
        this.loadPromise = Promise.resolve();
    }

    // TODO figure out the config. if we have the config present for instantiation of the layer object, or we
    //      push it off to a "load layer" function which could be used for reloads as well.
    async generateLayer(config: any): Promise<LayerBase> {
        await this.loadPromise;

        if (!this.layerConstructor) {
            throw new Error(`Layer Definition bug. A definition promise resolved but no definition exists. Definition id ${this.id}`);
        }
        if (this.rawBase) {
            return LayerInstance.updateBaseToInstance(new this.layerConstructor(config, this.api), this.id, this.api);
        } else {
            return new this.layerConstructor(config, this.api); // TODO prob needs instance api passed in
        }
    }
}

// this class represents the functions that exist on rampApi.geo.layer
export class LayerAPI extends APIScope {

    // stores any layer definitions that have been added. this would migrate to a vuex store if we apply that here
    // NOTE probably want to change this from LayerBase to ILayerBase.
    //      we want to store constructors, not instances of layers.
    _layerDefStore: {[key: string]: LayerDef} = {};

    // NOTE also might want to store the Promises that get generated when creating these definitions.
    //      when we request a new layer, would be good to be able to see if a definition request
    //      is pending, instead of just failing on a "no definition found" case.

    /**
     * Loads a (built-in) fixture or adds supplied fixture into the R4MP Vue instance.
     *
     * @param {string} id
     * @param {IFixtureBase} [constructor]
     * @returns {Promise<FixtureBase>}
     * @memberof FixtureAPI
     */
    async addLayerDef(id: string, constructor?: ILayerBase): Promise<string> {
        // TODO revisit if the return value should be LayerBase. This is registering a layer definition
        //      (i.e. a blueprint), so the layer id might be more appropriate, or void. Person would
        //      use the create layer on LayerAPI to make an actual layer.
        //      Also might consider changing the type to ILayerBase, as returning the constructor makes a bit more sense.

        // if the layer def already exist, do nothing and just return it
        // TODO in vuex world, would be a store check
        // if (id in this.$vApp.$store.get<FixtureBaseSet>(`fixture/items`)!) {
        if (this._layerDefStore[id]) {
            console.warn(`Encountered duplicate layer registration for ${id}`);
            return id;
        }

        const layerDef = new LayerDef(id, this.$iApi);

        // only need to provide fixture constructors for external fixtures since internal ones are loaded automatically
        if (constructor) {
            if (typeof constructor !== 'function') {
                throw new Error('malformed layer definition constructor');
            }

            layerDef.layerConstructor = constructor;
            layerDef.rawBase = true;
            layerDef.loadPromise = Promise.resolve();
            this._layerDefStore[id] = layerDef;

            // NOTE we no longer do this here. this would take place on the new layer function.
            //      We might need to also store a flag indicating this def requires the .baseToInstance wrapper

            // run the provided constructor and update the resulting object with FixtureInstance functions/properties
            // layerDef = FixtureInstance.updateBaseToInstance(new constructor(), id, this.$iApi);
        } else {

            // trickery. when the promise resolves, we know layerDef.layerConstructor will have a value.
            layerDef.loadPromise = this.magicLoader(layerDef);

            // store the def in the registry before blocking
            this._layerDefStore[id] = layerDef;
            await layerDef.loadPromise;

            // TODO this would happen on the new layer function
            // layerDef = new layerDef(id, this.$iApi);
        }

        // TODO: calling `ADD_FIXTURE` mutation directly here; might want to switch to calling the action `addFixture`
        // TODO: using this horrible concatenated mixture `fixture/${FixtureMutation.ADD_FIXTURE}!` all the time doesn't seem like a good idea;
        // fixtures are always stored as objects implementing `FixtureBase` interfaces;
        // this.$vApp.$store.set(`fixture/${FixtureMutation.ADD_FIXTURE}!`, { value: fixture });
        // this._layerDefStore[id] = layerDef;

        return id;
    }

    private async magicLoader(layerDef: LayerDef): Promise<void> {
        // TODO might need some magic in the webpack to copy stuff over.
        //      we might also need to structure our layers folder to be by-id
        // perform a dynamic webpack import of a internal fixture (allows for code splitting)
        layerDef.layerConstructor = (await import(/* webpackChunkName: "[request]" */ `@/geo/layer/${layerDef.id}/index.ts`)).default;
    }

    /**
     * Removes the specified fixture from R4MP instance.
     *
     * @template T
     * @param {(FixtureBase | string)} fixtureOrId
     * @returns {T}
     * @memberof FixtureAPI
     */
    // TODO consider if we need the ability to remove a definition. Possible use case:
    //      someone wants to override a core layer class with a custom (like, hotswapping anything that is feature layer)
    /*
    remove<T extends FixtureBase = FixtureBase>(fixtureOrId: FixtureBase | string): T {
        const fixture = this.get<T>(fixtureOrId);

        this.$vApp.$store.set(`fixture/${FixtureMutation.REMOVE_FIXTURE}!`, { value: fixture });

        return fixture;
    }
    */

    // TODO consider if we need a "get". The common use case would be to do a create layer
    /**
     * Finds and returns a `FixtureBase` object with the id specified.
     *
     * @template T subclass of the `FixtureBase`; defaults to `FixtureBase`
     * @param {(string | FixtureBase)} item fixture id or `FixtureBase` item
     * @returns {T}
     * @memberof FixtureAPI
     */
    // get<T extends FixtureBase = FixtureBase>(item: string | FixtureBase): T;
    /**
     * Finds and returns a collection of `FixtureBase` objects given a list of ids.
     * This can be useful when retrieving several fixtures at one time as follows:
     * ```ts
     * const [one, two, three] = RAMP.fixture.get(['fixture-one', 'fixture-two', 'fixture-three']);
     * ```
     *
     * @template T subclass of the `FixtureBase`; defaults to `FixtureBase`
     * @param {string[]} item a list of fixture ids
     * @returns {T[]}
     * @memberof FixtureAPI
     */
    /*
    get<T extends FixtureBase = FixtureBase>(item: string[]): T[];
    get<T extends FixtureBase = FixtureBase>(item: string | FixtureBase | string[]): T | T[] {
        const ids: string[] = [];

        // parse the input and figure our what it is
        if (typeof item === 'string') {
            ids.push(item);
        } else if (Array.isArray(item)) {
            ids.push(...item);
        } else {
            ids.push(item.id);
        }

        const fixtures = ids.map(id => {
            const fixture = this.$vApp.$store.get<T>(`fixture/items@${id}`);
            if (!fixture) {
                throw new Error("fixture doesn't exist");
            }

            return fixture;
        });

        return fixtures.length === 1 ? fixtures[0] : fixtures;
    }
    */

    // TODO consider if we need a defaulting scenario. This might tie in with
    //      people wanting to override core layer types; they would omit then provide
    //      the custom layer definition class.
    /**
     * Loads the set of standard, built-in fixtures to the R4MP Vue instance.
     * This will quickly set up the vanilla version of RAMP.
     * Note this function is automatically run by the instance startup unless the loadDefaultFixtures option is
     * set to false. The function is exposed to allow custom pages the ability to call it at a different point
     * in the startup. Also, a subset of standard fixtures can be provided on the optional parameter if one
     * wishes to omit some of the standard fixtures.
     *
     * @param {Array<string>} [fixtureNames] list of built-in fixtures names to add. omission means all built-in fixtures will be added
     * @returns {Promise<Array<FixtureBase>>} resolves with array of default fixtures
     * @memberof FixtureAPI
     */
    /*
    addDefaultFixtures(fixtureNames?: Array<string>): Promise<Array<FixtureBase>> {
        if (!Array.isArray(fixtureNames) || fixtureNames.length === 0) {
            fixtureNames = ['appbar', 'basemap', 'crosshairs', 'details', 'geosearch', 'grid', 'help', 'legend', 'mapnav', 'metadata', 'northarrow', 'overviewmap', 'settings'];
        }

        // add all the requested default promises.
        // return the promise-all of all the add fixture promises
        // TODO alterately, don't do a promise.all, and just return the array of promises. not sure which is more useful.
        return Promise.all(fixtureNames.map(fn => this.add(fn)));
    }
    */
}

// TODO put in a separate file?
/**
 * A base class for Layer subclasses. It provides some utility functions to Layer and also gives access to `$iApi` and `$vApp` globals.
 * Mostly it exposes stub methods on LayerBase; this is because layer subclasses can be wildly different, so we don't
 * have a pile of common things to put here. The stubs will help debugging as they will alert devs when they have not
 * implemented something.
 *
 * @export
 * @class LayerInstance
 * @extends {APIScope}
 * @implements {LayerBase}
 */
export class LayerInstance extends APIScope implements LayerBase {

    get layerType(): string { return ''};
    config: any = {};

    /**
     * Adds missing functions and properties to the object implementing FixtureBase interface.
     * This is only needed for external fixtures as they can't inherit from FixtureInstance.
     *
     * TODO: If you know a better way to deep-mixin props/getters/functions from a class into another class instance, please tell me. I honestly don't know 🤷‍♂️.
     *
     * @static
     * @param {LayerBase} value
     * @param {string} id
     * @param {InstanceAPI} $iApi
     * @returns {LayerInstance}
     * @memberof LayerInstance
     */
    static updateBaseToInstance(value: LayerBase, config: any, $iApi: InstanceAPI): LayerInstance {
        const instance = new LayerInstance(config, $iApi);

        Object.defineProperties(value, {
            config: { value: config },
            $iApi: { value: $iApi },
            $vApp: {
                get(): Vue {
                    return instance.$vApp;
                }
            },
            // remove: { value: instance.remove },
            // extend: { value: instance.extend },
            /*
            config: {
                get(): any {
                    return instance.config;
                }
            }
            */
        });

        return value as LayerInstance;
    }

    /**
     * ID of this fixture.
     *
     * @type {string}
     * @memberof FixtureInstance
     */
    // readonly id: string;

    /**
     * Creates an instance of LayerInstance.
     *
     * @param {string} id
     * @param {InstanceAPI} iApi
     * @memberof FixtureInstance
     */
    constructor(config: any, iApi: InstanceAPI) {
        super(iApi);

        this.config = config;
    }

    isReadyForMap(): Promise<void> {
        // TODO revist the intelligence of this. it should get overwritten,
        //      but i guess auto-resolve is best thing for 3rd party if they
        //      don't care; otherwise will never get added to the map.
        return Promise.resolve();
    }

    esriLayer: esri.Layer | undefined;
    esriView: esri.LayerView | undefined;

    /**
     * Removes the specified fixture from R4MP instance.
     * This is a proxy to `RAMP.fixture.remove(...)`.
     *
     * @returns {this}
     * @memberof FixtureInstance
     */
    // TODO re-add this if we support removal
    /*
    remove(): this {
        this.$iApi.fixture.remove(this);
        return this;
    }
    */

    /**
     * A helper function to create a "subclass" of the base Vue constructor
     *
     * @param {VueConstructor<Vue>} vueConstructor
     * @param {ComponentOptions<Vue>} [options={}]
     * @param {boolean} [mount=true]
     * @returns {Vue}
     * @memberof FixtureInstance
     */
    // TODO i have no idea what this does, but since layers are not vue componets like fixtures are,
    //      will assume we don't need this
    /*
    extend(vueConstructor: VueConstructor<Vue>, options: ComponentOptions<Vue> = {}, mount: boolean = true): Vue {
        const component = new (Vue.extend(vueConstructor))({
            iApi: this.$iApi,
            ...options,
            propsData: {
                ...options.propsData,
                fixture: this
            }
        });

        component.$mount();

        return component;
    }
    */

    added?(): void;
    removed?(): void;
    initialized?(): void;
    terminated?(): void;

    /**
     * Returns the fixture config section (JSON) taken from the global config.
     *
     * @readonly
     * @type {*}
     * @memberof FixtureInstance
     */
    // this might return if we vuex thing. for now, config is normal local property
    /*
    get config(): any {
        return this.$vApp.$store.get('config/getFixtureConfig', this.id);
    }
    */
}