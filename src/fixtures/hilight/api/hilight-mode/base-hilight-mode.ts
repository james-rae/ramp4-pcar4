import { APIScope, InstanceAPI } from '@/api';
import { HilightMode, type HilightGraphic } from '../hilight-defs';

export class BaseHilightMode extends APIScope {
    config: any = {};
    mode: string = HilightMode.UNKNOWN;
    hilightLayerName: string = 'Ramp-Hilight';

    constructor(config: any, iApi: InstanceAPI) {
        super(iApi);
        this.config = config;
    }

    // TODO: not all hilighters will hilight specific geometries
    // e.g., FOG places a 'fog' over existing map geometries while GLOW highlights each identified geometry
    // Do we want 2 subclasses branching off of BaseHilighter to handle this?
    // Or can we configure toggleOn/toggleOff in the API to handle this? flag for it?

    // what about having more than 1 hilighter active? 🤔

    toggleHilightOn(hilightGraphics: Array<HilightGraphic> | HilightGraphic) {}

    toggleHilightOff(hilightGraphics?: Array<any>) {}
}
