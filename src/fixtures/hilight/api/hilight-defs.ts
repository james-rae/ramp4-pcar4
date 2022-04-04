export const HILIGHT_LAYER_NAME = 'Ramp-Hilight';

export enum HilightMode {
    NONE = 'none', // no hilight
    GLOW = 'glow', // an ESRI highlight
    LIFT = 'lift' // adds identified graphics to the hilightlayer
}

export interface HilightConfig {
    mode: HilightMode;
    options: any; // options for the specified hilight mode
}
