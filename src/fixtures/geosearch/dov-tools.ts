// logic for working with the category and province values

import { zip } from 'es-toolkit';
import { useGeosearchStore } from './store';

// NOTE: if the whole `as const` trick for types blows up when we try to add custom categories,
//       i guess just roll back to basic string

// TODO revist the .. key.  maybe change to XX or something. make sure our combo code recognizes the key as nothing
const provCodes = [
    '..',
    'AB',
    'BC',
    'IW',
    'MB',
    'NB',
    'NL',
    'NS',
    'NT',
    'NU',
    'ON',
    'PE',
    'QC',
    'SK',
    'UF',
    'YT'
] as const;

export type ProvCode = (typeof provCodes)[number];

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

const fsaToProv: { [key: string]: ProvCode } = {
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
// there is also the issue that some results from OpenStreetMap don't have a category set, despite being obvious (e.g. a lake with category ""),
// or have different wordings (e.g. "Waterway"). May not be able to use them, or use with limitations

const catCodes = [
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
    'VILG',
    // the following codes are not from the concise list, they are our custom ones for special handcrafted results
    'ADDRESS',
    'FSA',
    'NTS',
    'COORD'
] as const;

export type CategoryCode = (typeof catCodes)[number];

// new things from geonames
// Dispersed Rural Community | Collectivité rurale dispersée
// Compact Rural Community | Collectivité rurale concentrée
// Railway Point | Point ferroviaire
// Creek | Crique
// Township Municipality | Municipalité de canton
// Geographic Township | Canton géographique
// Hill | Colline

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
    'Village',
    'Street Address',
    'Forward Sortation Area',
    'National Topographic System',
    'Latitude/Longitude'
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
    'Village',
    'Adresse Municipale',
    "Région De Tri D'Acheminement",
    'Système National De Référence Cartographique',
    'Latitude/Longitude'
];

export interface ProvinceInfo {
    /**
     * code string
     */
    code: ProvCode;

    /**
     * Full name
     */
    name: string;
}

export interface CategoryInfo {
    /**
     * code string
     */
    code: CategoryCode;

    /**
     * Full name
     */
    name: string;
}

/**
 * A structure for storing two variants of the same thing, one for each language
 */
interface LangLookup<T> {
    en: T;
    fr: T;
}

function langPairMaker<T>(abbrArray: ReadonlyArray<T>, nameArray: Array<string>): Array<any> {
    return zip(abbrArray, nameArray).map(p => ({
        code: p[0],
        name: p[1]
    }));
}

export const provinceData: LangLookup<Array<ProvinceInfo>> = {
    en: langPairMaker(provCodes, provEn),
    fr: langPairMaker(provCodes, provFr)
};

export const categoryData: LangLookup<Array<CategoryInfo>> = {
    en: langPairMaker(catCodes, catEn),
    fr: langPairMaker(catCodes, catFr)
};

function currLang(): 'en' | 'fr' {
    return useGeosearchStore().gsLang;
}

/**
 * Get the province information for a province name
 * @param provName the name in the active language
 */
export function nameToProvince(provName: string): ProvinceInfo {
    // TODO find where we're actually using this.
    return provinceData[currLang()].find(pvi => pvi.name === provName)!;
}

/**
 * Get the province information for a province abbreviation
 * @param provAbbr the prov abbreviation
 */
export function abbrToProvince(provAbbr: ProvCode): ProvinceInfo {
    return provinceData[currLang()].find(pvi => pvi.code === provAbbr)!;
}

/**
 * Get the province information belonging to an FSA
 * @param fsa three-char FSA
 */
export function fsaToProvince(fsa: string): ProvinceInfo {
    let provCode: ProvCode;

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
