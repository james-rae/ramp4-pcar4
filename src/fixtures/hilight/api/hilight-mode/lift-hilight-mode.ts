import type { Graphic } from '@/geo/api';
import { BaseHilightMode } from './base-hilight-mode';

// This hilight mode populates the hilight layer with the given graphics, esentially "lifting" them
export class LiftHilightMode extends BaseHilightMode {
    async add(graphics: Array<Graphic>) {
        const hilightLayer = this.getHilightLayer();
        if (!hilightLayer) {
            return;
        }
        await hilightLayer.addGraphic(graphics);
    }

    async remove(graphics: Array<Graphic> | undefined) {
        const hilightLayer = this.getHilightLayer();
        if (!hilightLayer) {
            return;
        }
        await hilightLayer.removeGraphic(graphics);
    }
}
