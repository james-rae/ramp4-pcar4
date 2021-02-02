// layers api and other public, general layer things.

import { APIScope, InstanceAPI } from '../../api/internal';
import { LayerBase } from '../internal';

/**
 * A constructor returning an object implementing LayerBase interface.
 */
type ILayerBase = new () => LayerBase;

/**
 * A constructor returning an instance of FixtureInstance class.
 */
type ILayerInstance = new (id: string, iApi: InstanceAPI) => LayerInstance;

// this class represents the functions that exist on rampApi.geo.layer

export class LayerAPI extends APIScope {

    // stores any layer definitions that have been added. this would migrate to a vuex store if we apply that here
    _layerDefStore: {[key: string]: LayerBase} = {};

    /**
     * Loads a (built-in) fixture or adds supplied fixture into the R4MP Vue instance.
     *
     * @param {string} id
     * @param {IFixtureBase} [constructor]
     * @returns {Promise<FixtureBase>}
     * @memberof FixtureAPI
     */
    async addLayerDef(id: string, constructor?: ILayerBase): Promise<LayerBase> {
        // TODO revisit if the return value should be LayerBase. This is registering a layer definition
        //      (i.e. a blueprint), so the layer id might be more appropriate, or void. Person would
        //      use the create layer on LayerAPI to make an actual layer.
        let fixture: LayerBase;

        // if the layer def already exist, do nothing and just return it
        // TODO in vuex world, would be a store check
        // if (id in this.$vApp.$store.get<FixtureBaseSet>(`fixture/items`)!) {
        if (this._layerDefStore[id]) {
            // TODO could indicate a double registration. console.warn?
            return this._layerDefStore[id];
        }

        // only need to provide fixture constructors for external fixtures since internal ones are loaded automatically
        if (constructor) {
            if (typeof constructor !== 'function') {
                throw new Error('malformed fixture constructor');
            }

            // run the provided constructor and update the resulting object with FixtureInstance functions/properties
            fixture = FixtureInstance.updateBaseToInstance(new constructor(), id, this.$iApi);
        } else {
            // perform a dynamic webpack import of a internal fixture (allows for code splitting)
            const instanceConstructor: IFixtureInstance = (await import(/* webpackChunkName: "[request]" */ `@/fixtures/${id}/index.ts`))
                .default;

            fixture = new instanceConstructor(id, this.$iApi);
        }

        // TODO: calling `ADD_FIXTURE` mutation directly here; might want to switch to calling the action `addFixture`
        // TODO: using this horrible concatenated mixture `fixture/${FixtureMutation.ADD_FIXTURE}!` all the time doesn't seem like a good idea;
        // fixtures are always stored as objects implementing `FixtureBase` interfaces;
        this.$vApp.$store.set(`fixture/${FixtureMutation.ADD_FIXTURE}!`, { value: fixture });

        return fixture;
    }

    /**
     * Removes the specified fixture from R4MP instance.
     *
     * @template T
     * @param {(FixtureBase | string)} fixtureOrId
     * @returns {T}
     * @memberof FixtureAPI
     */
    remove<T extends FixtureBase = FixtureBase>(fixtureOrId: FixtureBase | string): T {
        const fixture = this.get<T>(fixtureOrId);

        this.$vApp.$store.set(`fixture/${FixtureMutation.REMOVE_FIXTURE}!`, { value: fixture });

        return fixture;
    }

    /**
     * Finds and returns a `FixtureBase` object with the id specified.
     *
     * @template T subclass of the `FixtureBase`; defaults to `FixtureBase`
     * @param {(string | FixtureBase)} item fixture id or `FixtureBase` item
     * @returns {T}
     * @memberof FixtureAPI
     */
    get<T extends FixtureBase = FixtureBase>(item: string | FixtureBase): T;
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
    addDefaultFixtures(fixtureNames?: Array<string>): Promise<Array<FixtureBase>> {
        if (!Array.isArray(fixtureNames) || fixtureNames.length === 0) {
            fixtureNames = ['appbar', 'basemap', 'crosshairs', 'details', 'geosearch', 'grid', 'help', 'legend', 'mapnav', 'metadata', 'northarrow', 'overviewmap', 'settings'];
        }

        // add all the requested default promises.
        // return the promise-all of all the add fixture promises
        // TODO alterately, don't do a promise.all, and just return the array of promises. not sure which is more useful.
        return Promise.all(fixtureNames.map(fn => this.add(fn)));
    }
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

    layerType: string = '';

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
    static updateBaseToInstance(value: LayerBase, id: string, $iApi: InstanceAPI): LayerInstance {
        const instance = new LayerInstance(id, $iApi);

        Object.defineProperties(value, {
            id: { value: id },
            $iApi: { value: $iApi },
            $vApp: {
                get(): Vue {
                    return instance.$vApp;
                }
            },
            remove: { value: instance.remove },
            extend: { value: instance.extend },
            config: {
                get(): any {
                    return instance.config;
                }
            }
        });

        return value as LayerInstance;
    }

    /**
     * ID of this fixture.
     *
     * @type {string}
     * @memberof FixtureInstance
     */
    readonly id: string;

    /**
     * Creates an instance of FixtureInstance.
     *
     * @param {string} id
     * @param {InstanceAPI} iApi
     * @memberof FixtureInstance
     */
    constructor(id: string, iApi: InstanceAPI) {
        super(iApi);

        this.id = id;
    }

    /**
     * Removes the specified fixture from R4MP instance.
     * This is a proxy to `RAMP.fixture.remove(...)`.
     *
     * @returns {this}
     * @memberof FixtureInstance
     */
    remove(): this {
        this.$iApi.fixture.remove(this);
        return this;
    }

    /**
     * A helper function to create a "subclass" of the base Vue constructor
     *
     * @param {VueConstructor<Vue>} vueConstructor
     * @param {ComponentOptions<Vue>} [options={}]
     * @param {boolean} [mount=true]
     * @returns {Vue}
     * @memberof FixtureInstance
     */
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
    get config(): any {
        return this.$vApp.$store.get('config/getFixtureConfig', this.id);
    }
}