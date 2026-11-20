import { defineStore } from 'pinia';
import { GeoSearchUI } from './geosearch.feature-old';
import { computed, ref } from 'vue';
import type { ISearchResult, MapExtentFilter, QueryFilters } from '../definitions';
import type { CategoryInfo, ProvinceInfo } from '../dov-tools';
import { categoryData, provinceData } from '../dov-tools';

export const useGeosearchStore = defineStore('geosearch', () => {
    // NOTE this is just defining the reactive instance of GSUI. The lang gets properly set in .initService()
    const GSservice = ref<GeoSearchUI>(new GeoSearchUI('en', undefined));

    // TODO rename to queryFilters
    const queryParams = ref<QueryFilters>({
        category: '..',
        province: '..',
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

    // TODO ideally we wouldn't need this and could just bind to the reactive instance.$i18n.locale.value
    //      It seems stores are not tied to the instance (maybe?), so doing this for now.
    //      If there is a smart way to link it, do so cuz this is a bit silly
    /**
     * The active language.
     */
    const gsLang = ref<'en' | 'fr'>('en');

    const sortyMcGhee = (itemA: ProvinceInfo | CategoryInfo, itemB: ProvinceInfo | CategoryInfo): number =>
        itemA.name.localeCompare(itemB.name, undefined, { sensitivity: 'case' });

    /**
     * Returns the list of province abbr/name objects in the active language, sorted by name
     */
    const provinceList = computed<Array<ProvinceInfo>>(() => provinceData[gsLang.value].toSorted(sortyMcGhee));

    /**
     * Returns the list of category abbr/name objects in the active language, sorted by name
     */
    const categoryList = computed<Array<CategoryInfo>>(() => categoryData[gsLang.value].toSorted(sortyMcGhee));

    function initService(lang: string, config: any) {
        gsLang.value = lang as 'en' | 'fr';
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
        provinceList,
        categoryList,
        gsLang,
        initService,
        setProvince,
        setType,
        setSearchTerm,
        setSearchRegex,
        setMapExtent
    };
});
