import type { Graphic } from '@/geo/api';
import { BaseHilightMode } from './base-hilight-mode';

// This hilight mode populates the hilight layer with the given graphics, esentially "lifting" them
// TODO: name could be better
export class LiftHilightMode extends BaseHilightMode {
    async addGraphics(graphics: Array<Graphic>) {
        const hilightLayer = this.getHilightLayer();
        if (!hilightLayer) {
            return;
        }
        await hilightLayer.addGraphic(graphics);
    }

    async removeGraphics(graphics: Array<Graphic> | undefined) {
        const hilightLayer = this.getHilightLayer();
        if (!hilightLayer) {
            return;
        }
        await hilightLayer.removeGraphic(graphics);
    }
}
