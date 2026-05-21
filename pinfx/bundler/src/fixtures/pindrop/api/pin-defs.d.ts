import { PointIconStyleOptions, PointStyleOptions } from '../../../geo/api';
export declare const PINDROP_LAYER_NAME = "Ramp-Pin-Drop";
export declare const DEFAULT_PIN: PointIconStyleOptions;
export interface PinDropConfig {
    pinSymbol?: PointStyleOptions;
    linkIdentify?: boolean;
    linkDetails?: boolean;
}
