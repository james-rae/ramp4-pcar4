import type { InstanceAPI } from '@/api';
import GraphicLayer from '@/geo/layer/esri-graphic';
import type { HilightGraphic } from '../hilight-defs';
import { BaseHilightMode } from './base-hilight-mode';

export class GlowHilightMode extends BaseHilightMode {
    constructor(config: any, iApi: InstanceAPI) {
        super(config, iApi);
    }

    toggleHilightOn(hilightGraphics: Array<HilightGraphic> | HilightGraphic) {
        const hilightLayer = this.$iApi.geo.layer.getLayer(
            this.hilightLayerName
        );
        if (
            hilightLayer &&
            hilightLayer.esriLayer &&
            hilightLayer instanceof GraphicLayer
        ) {
            let hGraphics: Array<HilightGraphic>;
            if (hilightGraphics instanceof Array) {
                hGraphics = hilightGraphics;
            } else {
                hGraphics = [hilightGraphics];
            }
            this.$iApi.geo.map.esriView
                ?.whenLayerView(hilightLayer.esriLayer)
                ?.then(function (layerView) {
                    hGraphics.forEach((g: HilightGraphic) => {
                        const graphic = hilightLayer.getEsriGraphic(
                            g.graphic!.id
                        );
                        if (graphic && !g.remove) {
                            console.log(`adding ${g.graphic.id} glow`);
                            g.remove = layerView.highlight(graphic);
                        }
                    });
                });
            console.log('total highlights:', hGraphics.length);
        }
    }

    toggleHilightOff(hilightGraphics: Array<HilightGraphic>) {
        hilightGraphics.forEach(g => {
            console.log(`removing ${g.graphic.id} glow`);
            g.remove?.remove();
            delete g.remove;
        });
        // TODO: what do we want to do if g.remove is undefined?
        // if g.remove is undefined, that means there is no highlight on it --> do nothing
    }
}
