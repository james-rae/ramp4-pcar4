import { InstanceAPI, GraphicLayer, GlobalEvents } from '@/api';
import { HILIGHT_LAYER_NAME } from '../hilight-defs';
import type { Graphic } from '@/geo/api';
import { LiftHilightMode } from './lift-hilight-mode';

// This hilight mode uses the ESRI highlight to outline the given graphics, creating a "glow"
export class GlowHilightMode extends LiftHilightMode {
    handlers: Array<string> = [];

    constructor(config: any, iApi: InstanceAPI) {
        super(config, iApi);

        this.hilightSetup(config);

        this.handlers.push(
            this.$iApi.event.on(GlobalEvents.MAP_CREATED, () => {
                this.hilightSetup(config);
            })
        );
    }

    hilightSetup(config: any) {
        this.$iApi.geo.map.viewPromise.then(() => {
            this.$iApi.geo.map.esriView!.highlightOptions = config.options;
        });
        // if (this.$iApi.geo.map.esriView) {
        //     this.$iApi.geo.map.esriView.highlightOptions = config.options;
        // } else {
        //     this.$iApi.geo.map.viewPromise.then(() => {
        //         this.$iApi.geo.map.esriView!.highlightOptions = config.options;
        //     });
        // }
    }

    toggleHilightOn(graphics: Array<Graphic> | Graphic) {
        const hilightLayer = this.$iApi.geo.layer.getLayer(HILIGHT_LAYER_NAME);
        if (
            hilightLayer &&
            hilightLayer.esriLayer &&
            hilightLayer instanceof GraphicLayer
        ) {
            const gs: Array<Graphic> =
                graphics instanceof Array ? graphics : [graphics];
            this.$iApi.geo.map.esriView
                ?.whenLayerView(hilightLayer.esriLayer)
                ?.then(function (layerView) {
                    gs.forEach((g: Graphic) => {
                        const graphic = hilightLayer.getEsriGraphic(g.id);
                        layerView.highlight(graphic);
                    });
                });
        }
    }

    toggleHilightOff(graphics?: Array<Graphic> | Graphic) {
        // removing the graphic will also remove the esri highlight
        // so there's nothing to do here
        return;
    }
}
