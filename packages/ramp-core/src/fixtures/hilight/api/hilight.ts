import { FixtureInstance } from '@/api';
import { AttribLayer, InstanceAPI } from '@/api/internal';
import { HilightConfig } from '../store';
import { DefPromise, MapIdentifyResult } from '@/geo/api';
import { EsriGraphic, EsriGraphicsLayer } from '@/geo/esri';
import { toRaw } from 'vue';

export class HilightAPI extends FixtureInstance {
    identifyResults: Array<any>;
    isIdentified: boolean; // identify mode on/off; should this be a vue store thing instead?

    constructor(id: string, iApi: InstanceAPI) {
        super(id, iApi);
        this.identifyResults = [];
        this.isIdentified = false;
    }

    _parseConfig(hilightConfig?: HilightConfig) {}

    get config() {
        return super.config;
    }

    /**
     * Populate the Hilight layer with the identified points.
     *
     * @param identifyParams The identified results to highlight
     */
    populateHilightPoints(identifyParams: MapIdentifyResult) {
        identifyParams.results.forEach(res => {
            this.identifyResults.push({
                result: res,
                populating: new DefPromise()
            });
        });

        console.log(this.identifyResults);

        this.identifyResults.forEach((l: any) => {
            const layer = this.$iApi.geo.layer.getLayer(l.result.uid);
            // check for AttribLayer seems kind of scuffed rn but LayerInstance doesn't have renderer attr
            if (layer instanceof AttribLayer && layer.renderer) {
                l.result.loadPromise.then(async () => {
                    for (const item of l.result.items) {
                        // get the Graphic's symbol
                        const symbol = toRaw(
                            this.$iApi.geo.utils.symbology.getGraphicSymbol(
                                item.data,
                                layer.renderer!
                            )
                        );
                        // get the Graphic's geometry
                        const oid = item.data[layer.oidField];
                        const g = await layer.getGraphic(oid, {
                            getGeom: true
                        });
                        if (g.geometry === undefined) {
                            console.error(
                                `Could not find graphic for objectid ${oid}`
                            );
                        } else {
                            let geometry =
                                this.$iApi.geo.utils.geom.geomRampToEsri(
                                    g.geometry
                                );

                            // create the Graphic
                            let graphic = new EsriGraphic({
                                geometry: geometry,
                                symbol: symbol
                            });

                            const hilightLayer =
                                this.$iApi.geo.layer.getLayer(
                                    'Hilight'
                                ).esriLayer;

                            if (hilightLayer instanceof EsriGraphicsLayer) {
                                console.log('adding graphic...', graphic);
                                hilightLayer.add(graphic);
                            }
                        }
                    }
                    // mark the layer as populated
                    l.populating.resolveMe();
                });
            }
        });
    }

    /**
     * Toggle the ESRI highlight for features on.
     */
    toggleEsriHighlightOn() {
        // NOTE: currently we only have an 'on' toggle. It gets toggled off when the identify is turned off.
        const promises = this.identifyResults.map(res =>
            res.populating.getPromise()
        );
        Promise.all(promises).then(() => {
            const hilightLayer =
                this.$iApi.geo.layer.getLayer('Hilight').esriLayer;
            if (hilightLayer && hilightLayer instanceof EsriGraphicsLayer) {
                this.$iApi.geo.map.esriView
                    ?.whenLayerView(hilightLayer)
                    ?.then(function (layerView) {
                        hilightLayer.graphics.forEach(g => {
                            layerView.highlight(g);
                        });
                    });
                console.log('total highlights:', hilightLayer.graphics.length);
            }
        });
    }

    /**
     * Clears any existing graphics on the Hilight layer.
     */
    clearHilightPoints() {
        const hilightLayer = this.$iApi.geo.layer.getLayer('Hilight').esriLayer;
        if (hilightLayer instanceof EsriGraphicsLayer) {
            hilightLayer.graphics.splice(0, hilightLayer.graphics.length); //remove all graphics
        }
        // For now just resetting the array. Later might want to be more sophisticated with removing specific results.
        this.identifyResults = [];
    }
}
