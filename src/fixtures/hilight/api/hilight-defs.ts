import type { DefPromise, Graphic, IdentifyResult } from '@/geo/api';

export enum HilightMode {
    NONE = 'none', // Hilight is off
    GLOW = 'glow', // an ESRI highlight
    UNKNOWN = 'unknown'
}

// Use these types later for hilightGraphics ... still ironing things out though
export interface HilightGraphic {
    origin: string; // the graphic's origin (e.g., 'identify', 'grid', 'details', etc.)
    graphic: Graphic;
    remove?: any; // rn the GLOW hilighter has a remove handler for each graphic; other hilighters can maybe implement something similar ?
}

export interface HilightGraphicSet {
    result?: IdentifyResult; // identify data for a logical layer
    populating: DefPromise; // indicates if all graphics in the below array have been populated
    graphics: Array<HilightGraphic>;
}
