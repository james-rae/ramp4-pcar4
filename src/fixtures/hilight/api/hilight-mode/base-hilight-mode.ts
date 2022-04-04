import { APIScope, CommonGraphicLayer, InstanceAPI } from '@/api';
import { HILIGHT_LAYER_NAME } from '../hilight-defs';
import type { Graphic } from '@/geo/api';

// This hilight mode does nothing
export class BaseHilightMode extends APIScope {
    config: any = {};

    constructor(config: any, iApi: InstanceAPI) {
        super(iApi);
        this.config = config;
    }

    /**
     * Toggles on the highlighting of the graphics (e.g., fog, glow, sparkle, etc.)
     */
    toggleHilightOn(hilightGraphics?: Array<Graphic> | Graphic) {}

    /**
     * Toggles off the highlighting of the graphics.
     */
    toggleHilightOff(hilightGraphics?: Array<Graphic> | Graphic) {}

    /**
     * Adds the given graphics to the hilight layer.
     */
    addGraphics(graphics: Array<Graphic>) {}

    /**
     * Removes the given graphics from the hilight layer.
     */
    removeGraphics(graphics: Array<Graphic> | undefined) {}

    getHilightLayer(): CommonGraphicLayer | undefined {
        const hilightLayer = this.$iApi.geo.layer.getLayer(HILIGHT_LAYER_NAME);
        if (hilightLayer && hilightLayer instanceof CommonGraphicLayer) {
            return hilightLayer;
        } else {
            console.warn('hilight layer could not be fetched.');
            return undefined;
        }
    }
}
