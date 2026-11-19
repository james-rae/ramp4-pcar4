// Handles the act of searching for stuff

import type { ISearchResult, QueryFilters } from './definitions';
import { useGeosearchStore } from './store';

/**
 * Takes a string and converts it to an equivalent string that is lowercase and
 * has all accents removed from letters (e.g. é becomes e )
 */
export function lowerNoAccent(val: string): string {
    // trickery to convert accent characters to their base letters.
    // the NFD thing converts to unicode "canonical decomposition". This splits stuff like ö into an o and a unicode for the dots.
    // the replace targets the range of unicode that represent the different accent symbols.  so we're essentially stripping them out.
    // then we to-lower which does that but also re-assembles everything into a basic string

    return val
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
}

/**
 * Helper function that filters based on query parameters.
 *
 * @param {Boolean} visibleOnly Apply map extent filters
 * @param {QueryFilters}  queryParams Contains which filter to process
 * @param {Array<ISearchResult>}   data        An array of results from the query
 */
function filterResults(
    visibleOnly: boolean,
    queryParams: QueryFilters,
    data: Array<ISearchResult>
): Array<ISearchResult> {
    if (visibleOnly && queryParams.extent) {
        // ensure bbox boundaries are within the current map extent properties
        const extent = queryParams.extent!;
        data = data.filter(
            r =>
                r.bbox[0] <= extent.xmax &&
                r.bbox[1] <= extent.ymax &&
                r.bbox[2] >= extent.xmin &&
                r.bbox[3] >= extent.ymin
        );
    }
    if (queryParams.province && queryParams.province !== '...') {
        data = data.filter(r => r.location.province?.name && r.location.province.name === queryParams.province);
    }
    if (queryParams.type && queryParams.type !== '...') {
        data = data.filter(r => r.type === queryParams.type);
    }
    return data;
}

/**
 * Runs the geosearch query to update visible search and the saved results.
 *
 * @function runQuery
 * @param {boolean} forceReRun whether to force the server query (i.e. the typed-in search) to run again
 */
export function runQuery(forceReRun?: boolean): void {
    // TODO rename to executeSearch or runSearch or something??
    // TODO consider having a way to run the query with passed-in parameter values as overrides to the store values.
    //      different approach is have a generalized version of this, then two other methods that call it,
    //      one that collects data from store and makes the param payload, other accepts param payload.
    //      the store-based one could live in the store. have the other one here for API call useage.
    //      Also may want to separate the "search" and the "show in the UI" functionality.
    //      Would let someone just get geosearch stuff without the UI going ham.

    const gsStore = useGeosearchStore();

    // set loading flag to true and turn off when reach return
    gsStore.loadingResults = true;

    // Replace bad characters with empty string because the default geocratis service
    // returns rubbish results if any of these characters are used, so we ignore them.
    const cleanedSearchVal = gsStore.searchVal.replace(/["!*$+?^{}()|[\]\\]/g, '').trim();
    if (!cleanedSearchVal) {
        gsStore.searchResults = [];
        gsStore.savedResults = [];
        gsStore.loadingResults = false;
    } else {
        // run new query if different search term is entered
        if ((cleanedSearchVal && cleanedSearchVal !== gsStore.lastSearchVal) || forceReRun) {
            // watch for provinces and types to finish loading
            const watcher = setInterval(() => {
                if (GSservice.value.config.provinces.listFetched && GSservice.value.config.types.typesFetched) {
                    clearInterval(watcher);
                    GSservice.value.query(`${cleanedSearchVal}*`).then((data: any) => {
                        gsStore.failedServices = data.failedServs;
                        // store data for current search term
                        gsStore.lastSearchVal = cleanedSearchVal;
                        gsStore.savedResults = data.results;

                        // replace old saved results
                        const filteredData = filterResults(
                            gsStore.resultsVisible,
                            //@ts-expect-error TODO: explain why this is needed or remove
                            gsStore.queryParams,
                            gsStore.savedResults
                        );
                        gsStore.searchResults = filteredData || [];
                        gsStore.loadingResults = false;
                    });
                }
            }, 250);
        } else {
            // otherwise no new search term so we only need to filter on query param values
            const filteredData = filterResults(
                gsStore.resultsVisible,
                //@ts-expect-error TODO: explain why this is needed or remove
                gsStore.queryParams,
                gsStore.savedResults
            );
            gsStore.searchResults = filteredData || [];
            gsStore.loadingResults = false;
        }
    }
}

/**
 * Make the regex that search result items use for determining what to highlight
 * (accounting for character accents).
 *
 * @param {string} searchTerm current geosearch search value term
 */
export function makeSearchRegex(searchTerm: string): string {
    // List of all character accents
    // (NOTE: probably not a comprehensive list, add more as encountered)
    const accentedChars: { [key: string]: string } = {
        a: 'àáâãäåāăąǎȁȃȧạảấầẩẫậắằẳẵặ',
        b: 'ḃɓḅḇ',
        c: 'çćĉċč',
        d: 'ďḋḍḏḑḓ',
        e: 'èéêëēĕėęěȅȇẹẻẽếềểễệ',
        f: 'ƒḟ',
        g: 'ĝğġģǧǵḡ',
        h: 'ĥȟḣḥḧḩḫẖ',
        i: 'ìíîïĩīĭįıȉȋịỉĩ',
        j: 'ĵǰɉ',
        k: 'ķĸƙḳḵ',
        l: 'ĺļľŀłḷḹḻḽ',
        m: 'ḿṁṃ',
        n: 'ñńņňŉŋǹṅṇṉṋ',
        o: 'òóôõöōŏőơǒǫǭȍȏȯọỏốồổỗộớờởỡợ',
        p: 'ṕṗ',
        r: 'ŕŗřȑȓṛṝṟ',
        s: 'śŝşšșṡṣṥṧṩ',
        t: 'ţťŧțṫṭṯṱẗ',
        u: 'ùúûüũūŭůűųưǔǖǘǚǜȕȗụủứừửữự',
        v: 'ṽṿ',
        w: 'ẁẃŵẅẇẉẋ',
        x: 'ẋẍ',
        y: 'ỳýŷÿỹȳẏẙỵỷỹ',
        z: 'źżžẑẓẕ'
    };

    // Strip out all accents first, to make life easier
    // For highlighting purposes, we want to treat accented characters as normal ones & vice versa
    searchTerm = lowerNoAccent(searchTerm);

    return searchTerm
        .trim()
        .split(/\s+/)
        .map(word =>
            Array.from(word)
                .map(c => {
                    // If character has accents, add them as equivalent replacements to the regex
                    if (Object.keys(accentedChars).includes(c)) {
                        return '[' + c + accentedChars[c] + ']';
                    }

                    // Replace bad characters with empty string
                    // Escape special regex characters (like '.'), so the string isn't broken
                    return c.replace(/["$!*+?^{}()|[\]\\]/g, '').replace(/[.\\]/g, '\\$&');
                })
                .join('')
        )
        .join('|');
}
