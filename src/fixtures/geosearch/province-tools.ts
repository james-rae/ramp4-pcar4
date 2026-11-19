// logic for working with the province values

import type { AbbrNamePair, LangLookup } from './definitions';
import { abbrPairMaker } from './definitions';
import { zip } from 'es-toolkit';

const provAbbr = ['AB', 'BC', 'IW', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'UF', 'YT'];
const provEn = [
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

const provData: LangLookup<Array<AbbrNamePair>> = {
    en: zip(provAbbr, provEn).map(p => abbrPairMaker(p[0], p[1])),
    fr: zip(provAbbr, provFr).map(p => abbrPairMaker(p[0], p[1]))
};
