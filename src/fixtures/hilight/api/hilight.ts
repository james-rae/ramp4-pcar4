import { FixtureInstance } from '@/api';
import type { AttribLayer, InstanceAPI } from '@/api/internal';
import type { HilightConfig } from '../store';
import {
    DefPromise,
    Graphic,
    type MapIdentifyResult,
    LayerType
} from '@/geo/api';
import { CommonGraphicLayer } from '@/api/internal';
import { toRaw } from 'vue';
import {
    HilightMode,
    type HilightGraphic,
    type HilightGraphicSet
} from './hilight-defs';
import { BaseHilightMode } from './hilight-mode/base-hilight-mode';
import { GlowHilightMode } from './hilight-mode/glow-hilight-mode';
import { HILIGHT_LAYER_NAME } from './hilight-defs';
import { GlobalEvents } from '@/api/internal';

export class HilightAPI extends FixtureInstance {
    hilightGraphics: Array<HilightGraphicSet>;
    isIdentified: boolean = false; // hilight on/off
    hilightMode: BaseHilightMode = new BaseHilightMode({}, this.$iApi);

    constructor(id: string, iApi: InstanceAPI) {
        super(id, iApi);
        this.hilightGraphics = [];
    }

    _parseConfig(hilightConfig?: HilightConfig) {
        // temp until config is flushed out/written
        const config = {
            mode: 'glow',
            highlightOptions: {
                haloColor: [0, 255, 0],
                haloOpacity: 0.8
            }
        };
        switch (config.mode) {
            case HilightMode.GLOW:
                this.hilightMode = new GlowHilightMode({}, this.$iApi);
        }

        // TODO: revisit to tidy up when all the guts are working.

        // James comment: not 100% (still trying to assemble how everything hangs together), but you
        // might want to wait on map.viewPromise. If there is no view (which maybe could happen if
        // this goes early), then this logic would skip and never revist. However the risk is you get
        // a stack of _parseConfig requests and then they race when the view finally appears.

        // Also we probably need a listener / watcher of sorts to detect when the esriView gets
        // destroyed and recreated. The code below will need to be re-applied. Sharven has samples
        // of this around his reprojection code. Look at mappy stuff like scrollguard and crosshairs
        // if you cant find it.
        if (this.$iApi.geo.map.esriView) {
            // NOTE: typescript complaining that Color attributes (color, haloColor)
            // aren't the right type. Docs say they'll be autocast + it works so ¯\_(ツ)_/¯
            // https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#highlightOptions

            // @ts-ignore
            this.$iApi.geo.map.esriView.highlightOptions =
                config.highlightOptions;
        }

        // create the hilight layer
        // if (this.$iApi.geo.map.created) {
        //     this.initLayer();
        // } else {
        //     this.$iApi.event.on(GlobalEvents.MAP_CREATED, this.initLayer);
        // }
        // this.$iApi.event.on(GlobalEvents.MAP_IDENTIFY, this.populateHilight);
    }

    // async initLayer() {
    //     const hilightLayer = await this.$iApi.geo.layer.createLayer({
    //         id: HILIGHT_LAYER_NAME,
    //         layerType: LayerType.GRAPHIC,
    //         cosmetic: true
    //     });
    //     await hilightLayer.initiate();
    //     this.$iApi.geo.map.addLayer(hilightLayer);
    // }

    // populateHilight(identifyParams: MapIdentifyResult) {
    //     this.clearHilightGraphics();
    //     this.populateFromIdentify(identifyParams);
    // }

    /**
     * Populate the Ramp-Hilight layer with the given graphic(s).
     * The given graphic(s) must be added to a HilightGraphicSet outside of this function.
     *
     * @param graphics A single graphic or an array of graphics
     */
    async populateHilightGraphicsFromSet(graphics: Graphic | Array<Graphic>) {
        const hilightLayer = this.$iApi.geo.layer.getLayer(HILIGHT_LAYER_NAME);
        if (hilightLayer && hilightLayer instanceof CommonGraphicLayer) {
            const gs = graphics instanceof Array ? graphics : [graphics];
            await Promise.all(
                gs.map(g => {
                    console.log('adding graphic...', g);
                    hilightLayer.addGraphic(g);
                })
            );
        }
    }

    /**
     * Populate the Ramp-Hilight layer with the given graphic(s).
     * The given graphic(s) will be added to a HilightGraphicSet.
     *
     * @param graphics The graphic(s) to add to the layer
     * @param origin The graphic's origin
     */
    async populateHilightGraphics(
        graphics: Graphic | Array<Graphic>,
        origin: string
    ) {
        // NOTE: this function is untested still
        const hilightLayer = this.$iApi.geo.layer.getLayer(HILIGHT_LAYER_NAME);

        if (hilightLayer && hilightLayer instanceof CommonGraphicLayer) {
            const gs = graphics instanceof Array ? graphics : [graphics];
            const gSet: HilightGraphicSet = {
                graphics: [],
                populating: new DefPromise()
            };
            this.hilightGraphics.push(gSet);
            await Promise.all(
                gs.map(g => {
                    console.log('adding graphic...', g);
                    const hGraphic: HilightGraphic = {
                        origin: origin,
                        graphic: g
                    };
                    gSet.graphics.push(hGraphic);
                    hilightLayer.addGraphic(g);
                })
            );
            gSet.populating.resolveMe();
        }
    }

    /**
     * Populate the Hilight layer using identify results
     *
     * @param identifyParams The identified results to highlight
     */
    populateFromIdentify(identifyParams: MapIdentifyResult) {
        identifyParams.results.forEach(res => {
            this.hilightGraphics.push({
                result: res,
                graphics: [],
                populating: new DefPromise()
            });
        });

        console.log(this.hilightGraphics);

        this.hilightGraphics.forEach(l => {
            const layer = this.$iApi.geo.layer.getLayer(l.result!.uid);
            if (layer?.supportsFeatures) {
                l.result!.loading.then(() => {
                    // the result for this layer has loaded
                    Promise.all(
                        l.result!.items.map((i: any) => i.loading)
                    ).then(
                        // each individual result for this layer has loaded
                        async () => {
                            await Promise.all(
                                l.result!.items.map(async item => {
                                    // get the Graphic
                                    const oid = item.data[layer.oidField];
                                    const g: Graphic = await (
                                        layer as AttribLayer
                                    ).getGraphic(oid, {
                                        getGeom: true,
                                        getAttribs: true,
                                        getStyle: true
                                    });

                                    // const symbol = toRaw(
                                    //     this.$iApi.geo.utils.symbology.getGraphicSymbol(
                                    //         item.data,
                                    //         (layer as AttribLayer).renderer!
                                    //     )
                                    // );
                                    // const style =
                                    //     this.$iApi.geo.utils.geom.styleEsriToRamp(
                                    //         symbol
                                    //     );

                                    // g.style = style;
                                    g.id = this.constructGraphicKey(
                                        l.result!.uid,
                                        oid
                                    );
                                    this.populateHilightGraphicsFromSet(g);
                                    l.graphics.push({
                                        origin: 'identify',
                                        graphic: g
                                    });
                                })
                            );
                            // mark the layer as populated
                            l.populating.resolveMe();
                        }
                    );
                });
            }
        });

        this.isIdentified = true;
    }

    /**
     * Toggle highlight on for the given graphics.
     *
     * @param graphicIds ids of graphics to toggle hilight for. Defaults to all graphics.
     */
    toggleHilightOn(graphicIds?: string | Array<string>) {
        console.log('toggling highlight on');
        this.hilightGraphics.forEach(l => {
            l.populating.getPromise().then(() => {
                let graphics;
                if (!graphicIds) {
                    // if graphicIds is not defined, toggle every graphic
                    graphics = l.graphics;
                } else {
                    let gids: Array<string>;
                    if (graphicIds instanceof Array) {
                        gids = graphicIds;
                    } else {
                        gids = [graphicIds];
                    }
                    graphics = l.graphics.filter((g: HilightGraphic) =>
                        g.graphic ? gids.includes(g.graphic.id) : false
                    );
                }

                if (graphics.length != 0) {
                    console.log(graphics);
                    this.hilightMode.toggleHilightOn(graphics);
                }
            });
        });
    }

    /**
     * Toggle highlight off for the given graphics.
     *
     * @param graphicIds ids of graphics to toggle hilight for. Defaults to all graphics.
     */
    toggleHilightOff(graphicIds?: string | Array<string>) {
        console.log('toggling highlight off');
        this.hilightGraphics.forEach(l => {
            l.populating.getPromise().then(() => {
                let graphics: Array<HilightGraphic>;
                if (!graphicIds) {
                    // if graphicIds is not defined, toggle every graphic
                    graphics = l.graphics;
                } else {
                    let gids: Array<string>;
                    if (graphicIds instanceof Array) {
                        gids = graphicIds;
                    } else {
                        gids = [graphicIds];
                    }
                    graphics = l.graphics.filter((g: HilightGraphic) =>
                        g.graphic ? gids.includes(g.graphic.id) : false
                    );
                }
                console.log(graphics);
                this.hilightMode.toggleHilightOff(graphics);
            });
        });
    }

    getGraphicsByOrigin(origin: string): Array<HilightGraphic> {
        const graphics: Array<HilightGraphic> = [];
        this.hilightGraphics.forEach(l => {
            l.populating.getPromise().then(() => {
                l.graphics.forEach(g => {
                    if (g.origin == origin) {
                        graphics.push(g);
                    }
                });
            });
        });
        return graphics;
    }

    /**
     * Clears all existing graphics on the Hilight layer.
     */
    clearHilightGraphics() {
        const hilightLayer = this.$iApi.geo.layer.getLayer(HILIGHT_LAYER_NAME);
        // For now just removing everything. Later might want to be more sophisticated with removing specific results.
        if (hilightLayer && hilightLayer instanceof CommonGraphicLayer) {
            hilightLayer.removeGraphic();
        }
        this.hilightGraphics = [];
        this.isIdentified = false;
    }

    constructGraphicKey(uid: string, oid: number): string {
        return `${HILIGHT_LAYER_NAME}~${uid}~${oid}`;
    }

    deconstructGraphicKey(key: string) {
        const ids = key.split('~');
        return { uid: ids[1], oid: ids[2] };
    }

    /**
     * SEARCH 'HILIGHT TODO'
     * TODO:
     * - consider getting rid of the 2-layer structure of hilightGraphics and just make it flat
     *   - will there be complications with waiting on promises/loading? we could give every
     *      individual geometry a DefPromise instead of having it on the layer
     *   - ❗ yes ... we need to wait for the layer's loading promise first
     *     -> actually need to keep the current structure I think, otherwise other methods start
     *      doing their thing too early (before stuff is actually populated)
     *   - are there instance where we want all the geometries from a specific layer?
     *      -> yes, but we should be able to find them using the gids
     *
     * - move population of hilightGraphics to populateHilightGraphics()? Since outside callers need
     *    a way to populate hilightGraphics.
     *   - in that case, we would want to pass in 'origin' in 'Graphic'. can probably take 'result' off
     *      the HilightGraphic type and put a 'loading' attr on. populateFromIdentify() will have a
     *      similar structure still. Coincides well with getting rid of the 2-layer structure mentioned
     *      above.
     *   - ✅ created 2 different methods for this for now - could change it to be 1 method with a true/false
     *      parameter for telling us whether or not the function itself needs to make the HilightGraphicSet.
     *      not sure what would make more sense for an outside caller (up to documentation maybe)
     *
     * - BUG: projection change while hilighted causes prev hilight to stay
     *    (esri highlight removed, but graphics on hilightlayer remains) --> call clearHilightGraphics()
     *
     * - don't turn hilight on if there were 0 identified points (?)
     *
     * - BUG: hilight. click see list. choose a point that isn't the first one.
     *      hit the arrow to toggle to the next or prev point. glow stays on the
     *      point you clicked first. toggling more after that gets rid of it.
     *   - ✅ toggleOn was being called twice for some reason (not sure why atm), seems that you can put
     *      one hilight on top of another, and calling remove() only removes one of them...?
     *      For now, put a check in so that we don't hilight if remove() is already defined
     */
}
