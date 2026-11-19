import { defineStore } from 'pinia';
import { GeoSearchUI } from './geosearch.feature-old';
import { computed, ref } from 'vue';
import type { IProvinceInfo, ISearchResult, LangLookup, MapExtentFilter, QueryFilters } from '../definitions';

export const useGeosearchStore = defineStore('geosearch', () => {
    // NOTE this is just defining the reactive instance of GSUI. The lang gets properly set in .initService()
    const GSservice = ref<GeoSearchUI>(new GeoSearchUI('en', undefined));

    // TODO rename to queryFilters
    const queryParams = ref<QueryFilters>({
        type: '',
        province: '',
        extent: undefined
    });

    /**
     * State of the "results in the map extent" filter check
     */
    const resultsVisible = ref<boolean>(false);

    /**
     * What the user has typed in the search box
     */
    const searchVal = ref<string>('');

    /**
     * searchVal, but with magic regex applied. Used for highlighting the search term in the result list
     */
    const searchRegex = ref<string>('');

    /**
     * Tracks previous search, used to tell if new search is actually different or just whitepace changes / tomfoolery
     */
    const lastSearchVal = ref<string>('');

    /**
     * This represents the active, visible search (typed words and any filters)
     */
    const searchResults = ref<Array<ISearchResult>>([]);

    /**
     * This is the contents of the last server search result from the current search term.
     * Is used as input for local filters (like bounding box, province, etc) without re-querying the services.
     */
    const savedResults = ref<Array<ISearchResult>>([]);

    /**
     * When true, shows the loading indicator
     */
    const loadingResults = ref<boolean>(false);
    const failedServices = ref<Array<string>>([]);

    /**
     * Our cache of province data
     */
    const provinceData = ref<LangLookup<Array<IProvinceInfo>>>({ en: undefined, fr: undefined });

    /**
     * Fetches the list of all possible provinces in a geoName query. Province objects contain the following properties:
     * code: numeric province code (i.e. ontario is 35)
     * abbr: short hand notation (Ontario is ON)
     * name: full province name
     *
     * @return {Promise<Array>} a promise that resolves to a list of all provinces in the form
     */
    const getProvinces = computed<Promise<Array<IProvinceInfo>>>(() =>
        GSservice.value.fetchProvinces().then(provs => {
            provs.sort((provA, provB) => provA.name.localeCompare(provB.name, undefined, { sensitivity: 'case' }));
            return provs;
        })
    );

    /**
     * Fetches the list of all possible types in a geoName query. Returned type objects contain the following properties:
     * code: short form code (i.e. TERR)
     * name: full type name (i.e. Territory)
     *
     * @function getTypes
     * @return {Promise<Array>} a promise that resolves to a list of all types in the form
     */
    const getTypes = computed<Promise<Array<any>>>(
        () =>
            new Promise(resolve => {
                GSservice.value.fetchTypes().then((types: Array<any>) => {
                    types.sort((typeA: any, typeB: any) =>
                        typeA.name.localeCompare(typeB.name, undefined, { sensitivity: 'case' })
                    );
                    resolve(types);
                });
            })
    );

    function initService(lang: string, config: any) {
        GSservice.value = new GeoSearchUI(lang, config);
    }

    /**
     * Update province filter value.
     *
     * @function setProvince
     * @param   {object}   payload an object with two properties - province (the province to set) and
     * forceReRun (whether to force the query to run again)
     */
    function setProvince(payload: { province?: string; forceReRun?: boolean }): void {
        queryParams.value.province = typeof payload.province === 'undefined' ? '' : payload.province;
        // run query after province filter changes
        runQuery(payload.forceReRun);
    }

    /**
     * Update type filter value.
     *
     * @function setType
     * @param   {object}    payload   an object with two properties - type (the type to set) and
     * forceReRun (whether to force the query to run again)
     */
    function setType(payload: { type?: string; forceReRun?: boolean }): void {
        queryParams.value.type = typeof payload.type === 'undefined' ? '' : payload.type;
        // run query after type filter changes
        runQuery(payload.forceReRun);
    }

    /**
     * Update current search val and last search val.
     *
     * @function setSearchTerm
     * @param   {string}    searchTerm  current geosearch search value term
     */
    function setSearchTerm(searchTerm: string): void {
        lastSearchVal.value = searchVal.value.replace(/["!*$+?^{}()|[\]\\]/g, '').trim();
        searchVal.value = searchTerm;
        // run query after search term changes
        runQuery();
    }

    // TODO rename to setMapExtentFilter
    /**
     * Toggle map extent filter.
     *
     * @function setMapExtent
     * @param {MapExtentFilter} mapExtent current map extent info
     */
    function setMapExtent(mapExtent: MapExtentFilter): void {
        // if results should be filtered by current map view
        if (mapExtent.visible !== undefined) {
            resultsVisible.value = mapExtent.visible;
        }
        // re-project current extent object with lat/lon WKID number
        // NOTE: after removal of geoapi, the projection code is now accessed via the instance api.
        //       since no one could answer if we are allowed to reference the api in the store, we instead
        //       have the caller pre-project to lat long and add a rule that only lat long extents
        //       can be provided to the store.

        if (mapExtent.extent.sr.wkid !== 4326) {
            throw new Error('an extent that was not projected to wkid 4326 was passed to the geosearch store');
        }
        queryParams.value.extent = mapExtent.extent;
        // run query after toggling map extent filters
        runQuery();
    }

    /**
     * Update the regex that search result items use for determining what to highlight
     * (accounting for character accents).
     *
     * @param {string} searchTerm current geosearch search value term
     */
    function setSearchRegex(searchTerm: string): void {
        // TODO look into how this gets called. If we always set the term and the regex at the same time,
        //      then stop with this atomic setter stuff

        searchRegex.value = makeSearchRegex(searchTerm);
    }

    return {
        GSservice,
        queryParams,
        resultsVisible,
        searchVal,
        searchRegex,
        lastSearchVal,
        searchResults,
        savedResults,
        loadingResults,
        failedServices,
        getProvinces,
        getTypes,
        initService,
        setProvince,
        setType,
        setSearchTerm,
        setSearchRegex,
        setMapExtent
    };
});
