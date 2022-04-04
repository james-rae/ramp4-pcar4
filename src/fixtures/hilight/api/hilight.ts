import { FixtureInstance, GlobalEvents } from '@/api';
import { InstanceAPI, CommonGraphicLayer } from '@/api/internal';
import { Graphic, LayerType, type MapIdentifyResult } from '@/geo/api';
import { HilightMode, type HilightConfig } from './hilight-defs';
import { BaseHilightMode } from './hilight-mode/base-hilight-mode';
import { GlowHilightMode } from './hilight-mode/glow-hilight-mode';
import { HILIGHT_LAYER_NAME } from './hilight-defs';
import { LiftHilightMode } from './hilight-mode/lift-hilight-mode';

export class HilightAPI extends FixtureInstance {
    hilightMode: BaseHilightMode = new BaseHilightMode({}, this.$iApi);

    constructor(id: string, iApi: InstanceAPI) {
        super(id, iApi);
        // create the hilight layer
        console.log(this);
        if (this.$iApi.geo.map.created) {
            this.initHilightLayer();
        } else {
            this.$iApi.event.on(
                GlobalEvents.MAP_CREATED,
                this.initHilightLayer
            );
        }
    }

    _parseConfig(hilightConfig?: HilightConfig) {
        switch (hilightConfig?.mode) {
            case HilightMode.NONE:
                this.hilightMode = new BaseHilightMode(
                    hilightConfig,
                    this.$iApi
                );
                break;
            case HilightMode.GLOW:
                this.hilightMode = new GlowHilightMode(
                    hilightConfig,
                    this.$iApi
                );
                break;
            case HilightMode.LIFT:
                this.hilightMode = new LiftHilightMode(
                    hilightConfig,
                    this.$iApi
                );
        }
    }

    async initHilightLayer() {
        const hilightLayer = await this.$iApi.geo.layer.createLayer({
            id: HILIGHT_LAYER_NAME,
            layerType: LayerType.GRAPHIC,
            cosmetic: true
        });
        await hilightLayer.initiate();
        this.$iApi.geo.map.addLayer(hilightLayer);
    }

    async addHilight(graphics: Array<Graphic> | Graphic) {
        const gs = graphics instanceof Array ? graphics : [graphics];
        await this.hilightMode.addGraphics(gs);
        this.hilightMode.toggleHilightOn(gs);
    }

    async removeHilight(graphics?: Array<Graphic> | Graphic) {
        const gs: Array<Graphic> | undefined = graphics
            ? graphics instanceof Array
                ? graphics
                : [graphics]
            : undefined;
        await this.hilightMode.removeGraphics(gs);
        this.hilightMode.toggleHilightOff(gs);
    }

    getGraphicsByOrigin(origin: string): Array<Graphic> {
        let graphics: Array<Graphic> = [];
        const hilightLayer = this.getHilightLayer();
        if (!hilightLayer) {
            return [];
        }
        graphics = hilightLayer.graphics.filter(g => {
            const ids = this.deconstructGraphicKey(g.id);
            return ids.origin === origin;
        });
        return graphics;
    }

    constructGraphicKey(origin: string, uid: string, oid: number): string {
        // TODO: add origin into this later
        return `${HILIGHT_LAYER_NAME}~${origin}~${uid}~${oid}`;
    }

    deconstructGraphicKey(key: string): {
        origin: string;
        uid: string;
        oid: string;
    } {
        const ids = key.split('~');
        return { origin: ids[1], uid: ids[2], oid: ids[3] };
    }

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
