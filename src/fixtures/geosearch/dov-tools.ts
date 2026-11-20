// logic for working with the category and province values

import type { AbbrNamePair, LangLookup } from './definitions';
import { zip } from 'es-toolkit';
import { useGeosearchStore } from './store';

// TODO revist the .. key.  maybe change to XX or something. make sure our combo code recognizes the key as nothing
const provAbbr = ['..', 'AB', 'BC', 'IW', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'UF', 'YT'];
const provEn = [
    '...',
    'Alberta',
    'British Columbia',
    'International Waters',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Nova Scotia',
    'Northwest Territories',
    'Nunavut',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
    'Undersea Feature',
    'Yukon'
];
const provFr = [
    '...',
    'Alberta',
    'Colombie-Britannique',
    'Eaux internationales',
    'Manitoba',
    'Nouveau-Brunswick',
    'Terre-Neuve-et-Labrador',
    'Nouvelle-Écosse',
    'Territoires du Nord-Ouest',
    'Nunavut',
    'Ontario',
    'Île-du-Prince-Édouard',
    'Québec',
    'Saskatchewan',
    'Entité sous-marine',
    'Yukon'
];

const fsaToProv: { [key: string]: string } = {
    A: 'NL',
    B: 'NS',
    C: 'PE',
    E: 'NB',
    G: 'QC',
    H: 'QC',
    J: 'QC',
    K: 'ON',
    L: 'ON',
    M: 'ON',
    N: 'ON',
    P: 'ON',
    R: 'MB',
    S: 'SK',
    T: 'AB',
    V: 'BC',
    Y: 'YT'

    //  X: NT / NU
    // this split was not working (nothing would actually show on screen)
    // fsaToProvince() is now handling X in a custom manner
};

// these codes are the old "concise" codes from the original geogratis geonames service.
// the modern geolocator service does not use these codes, it just returns the name value (based on the request language).
// we are keeping the old codes for these reasons:
// - backwards compatibility with config settings (for sorting, restrictions)
// - having a language-independent means of targeting categories
// the current risk is that the new services will add new categories and we won't be aware of it, and thus
// they will not appear in the filter combo. we'll deal with this as best we can. as far as I can tell,
// the modern service does not expose a DOV-type list.
// there is also the issue that some results from OpenStreetMap don't have a category set, despite being obvious (e.g. a lake with category "")
const catAbbr = [
    '..',
    'AIR',
    'BAY',
    'BCH',
    'CAMP',
    'CAPE',
    'CAVE',
    'CHAN',
    'CITY',
    'CLF',
    'CRAT',
    'FALL',
    'FOR',
    'GEOG',
    'GLAC',
    'HAM',
    'HYDR',
    'IR',
    'ISL',
    'LAKE',
    'LTM',
    'MAR',
    'MIL',
    'MISC',
    'MTN',
    'MUN1',
    'MUN2',
    'PARK',
    'PLN',
    'PROV',
    'RAIL',
    'RAP',
    'RECR',
    'RES',
    'RIV',
    'RIVF',
    'ROAD',
    'SEA',
    'SEAF',
    'SEAU',
    'SHL',
    'SITE',
    'SPRG',
    'STM',
    'TERR',
    'TOWN',
    'UNP',
    'UTM',
    'VALL',
    'VEGL',
    'VILG'
];
const catEn = [
    '...',
    'Air Navigation Feature',
    'Bay',
    'Beach',
    'Miscellaneous Campsite',
    'Cape',
    'Cave',
    'Channel',
    'City',
    'Cliff',
    'Crater',
    'Falls',
    'Forest',
    'Geographical Area',
    'Glacier',
    'Hamlet',
    'Hydraulic Construction',
    'Indian Reserve',
    'Island',
    'Lake',
    'Lower Tier Municipality',
    'Marine Navigation Feature',
    'Military Area',
    'Miscellaneous',
    'Mountain',
    'Major Agglom.',
    'Miscellaneous',
    'Conservation Area',
    'Plain',
    'Province',
    'Railway Feature',
    'Rapids',
    'Recreational Site',
    'Natural Resources Site',
    'River',
    'River Feature',
    'Road Feature',
    'Sea',
    'Sea Feature',
    'Undersea Feature',
    'Shoal',
    'Miscellaneous Site',
    'Spring',
    'Single Tier Municipality',
    'Territory',
    'Town',
    'Unincorporated place',
    'Upper Tier Municipality',
    'Valley',
    'Low Vegetation',
    'Village'
];
const catFr = [
    '...',
    'Entité de navigation aérienne',
    'Baie',
    'Plage',
    'Divers',
    'Cap',
    'Caverne',
    'Chenal',
    'Ville',
    'Escarpement',
    'Cratère',
    'Chute',
    'Forêt',
    'Zone géographique',
    'Glacier',
    'Hameau',
    'Construction hydraulique',
    'Réserve indienne',
    'Île',
    'Lac',
    'Municipalité de palier inférieur',
    'Entité de navigation maritime',
    'Réserve militaire',
    'Divers',
    'Montagne',
    'Agglom. majeure',
    'Divers',
    'Zone de préservation',
    'Plaine',
    'Province',
    'Entité ferroviaire',
    'Rapide',
    'Site récréationnel',
    'Site de ressources naturelles',
    "Cours d'eau",
    'Entité fluviale',
    'Entité routière',
    'Mer',
    'Entité maritime',
    'marine',
    'fond',
    'Divers',
    'Source',
    'Municipalité de palier simple',
    'Territoire',
    'Ville',
    'Lieu non organisé',
    'Municipalité de palier supérieure',
    'Vallée',
    'Végétation basse',
    'Village'
];

function langPairMaker(abbrArray: Array<string>, nameArray: Array<string>): Array<AbbrNamePair> {
    return zip(abbrArray, nameArray).map(p => ({
        abbr: p[0],
        name: p[1]
    }));
}

export const provinceData: LangLookup<Array<AbbrNamePair>> = {
    en: langPairMaker(provAbbr, provEn),
    fr: langPairMaker(provAbbr, provFr)
};

export const categoryData: LangLookup<Array<AbbrNamePair>> = {
    en: langPairMaker(catAbbr, catEn),
    fr: langPairMaker(catAbbr, catFr)
};

function currLang(): 'en' | 'fr' {
    return useGeosearchStore().gsLang;
}

/**
 * Get the province information for a province name
 * @param provName the name in the active language
 */
export function nameToProvince(provName: string): AbbrNamePair {
    // TODO find where we're actually using this.
    return provinceData[currLang()].find(pvi => pvi.name === provName)!;
}

/**
 * Get the province information for a province abbreviation
 * @param provAbbr the prov abbreviation
 */
export function abbrToProvince(provAbbr: string): AbbrNamePair {
    return provinceData[currLang()].find(pvi => pvi.abbr === provAbbr)!;
}

/**
 * Get the province information belonging to an FSA
 * @param fsa three-char FSA
 */
export function fsaToProvince(fsa: string): AbbrNamePair {
    let provCode: string;

    const fancyFSA = fsa.toUpperCase();
    const firstLetter = fancyFSA.substring(0, 1);
    if (firstLetter === 'X') {
        // NTW & NV share the X. no easy way to derive but there are only 6 so hardcoding.
        if (fancyFSA === 'X0A' || fancyFSA === 'X0B' || fancyFSA === 'X0C') {
            provCode = 'NU';
        } else {
            provCode = 'NT';
        }
    } else {
        provCode = fsaToProv[firstLetter];
    }

    return abbrToProvince(provCode);
}
