import { cp as w, cq as y, cr as I, cs as V, ct as H, bm as v, a5 as T, cu as n, cv as f, G as b, bQ as o, bR as m, bS as q } from "./main-DZxT3i7S.js";
import "./floatRGBA-R0V_PnPQ.js";
import "./UpdateTracking2D-0o9_i8fH.js";
import "./GeometryUtils-C-fTcTXr.js";
import "./Container-C7h2dwkX.js";
import "./WGLContainer-CjZoexai.js";
import "./Program-7tJi4ey9.js";
import "./LabelMetric-qLdOt4bi.js";
import "./StyleDefinition-D9H4pBJh.js";
import "./enums-qHpGJ28Q.js";
import "./GridShader-CorbVgQx.js";
import "./FeatureCommandQueue-Bd5Dxlq9.js";
import "./PieChartMeshWriter-CJGDsc5M.js";
import "./renderState-vWaicc3E.js";
import "./interfaces-DN2-jsJC.js";
import "./testSVGPremultipliedAlpha-CxmusDvb.js";
import { F as U } from "./GraphicsView2D-DQwEO3YK.js";
import "./earcut-XDcq3zAf.js";
import "./vec3f32-BS0cezmI.js";
import { r as C, o as c, n as d } from "./imageUtils-23ndbz6A.js";
import { j as Q, y as S } from "./LayerView-BSi2ZKlw.js";
import { h as $ } from "./HighlightGraphicContainer-DAbawM5B.js";
import { i as F } from "./RefreshableLayerView-hfJGJOy7.js";
import { _ as P, R as G } from "./MapServiceLayerViewHelper-Dl7suQZe.js";
import { r as L } from "./drapedUtils-CnzC1wPs.js";
const k = [0, 0];
let a = class extends F(C(Q(S))) {
  constructor() {
    super(...arguments), this._fetchQueue = null, this._highlightGraphics = new w(), this._highlightView = null, this._popupHighlightHelper = null, this._tileStrategy = null, this.layer = null;
  }
  get resampling() {
    return !("resampling" in this.layer) || this.layer.resampling !== !1;
  }
  get tilemapCache() {
    return "tilemapCache" in this.layer ? this.layer.tilemapCache : null;
  }
  update(e) {
    this._fetchQueue.pause(), this._fetchQueue.state = e.state, this._tileStrategy.update(e), this._fetchQueue.resume(), this._highlightView?.processUpdate(e);
  }
  attach() {
    const e = "tileServers" in this.layer ? this.layer.tileServers : null, t = this.tilemapCache;
    if (this._tileInfoView = new y(this.layer.tileInfo, this.layer.fullExtent, t?.effectiveMinLOD, t?.effectiveMaxLOD), this._fetchQueue = new I({ tileInfoView: this._tileInfoView, concurrency: e && 10 * e.length || 10, process: (i, s) => this.fetchTile(i, s), scheduler: this.scheduler, priority: V.MAPVIEW_FETCH_QUEUE }), this._tileStrategy = new H({ cachePolicy: "keep", resampling: this.resampling, acquireTile: (i) => this.acquireTile(i), releaseTile: (i) => this.releaseTile(i), tileInfoView: this._tileInfoView }), P(this, this.layer)) {
      const i = this._highlightView = new U({ view: this.view, graphics: this._highlightGraphics, requestUpdateCallback: () => this.requestUpdate(), container: new $(this.view.featuresTilingScheme), defaultPointSymbolEnabled: !1 });
      this.container.addChild(this._highlightView.container), this._popupHighlightHelper = new G({ createFetchPopupFeaturesQueryGeometry: (s, h) => L(s, h, this.view), highlightGraphics: this._highlightGraphics, highlightGraphicUpdated: (s, h) => {
        i.graphicUpdateHandler({ graphic: s, property: h });
      }, layerView: this, updatingHandles: this._updatingHandles });
    }
    this.requestUpdate(), this.addAttachHandles(this._updatingHandles.add(() => this.resampling, () => {
      this.doRefresh();
    })), super.attach();
  }
  detach() {
    super.detach(), this._tileStrategy.destroy(), this._fetchQueue.clear(), this.container.removeAllChildren(), this._popupHighlightHelper?.destroy(), this._highlightView?.destroy(), this._fetchQueue = this._tileStrategy = this._tileInfoView = this._popupHighlightHelper = null;
  }
  async fetchPopupFeaturesAtLocation(e, t) {
    return this._popupHighlightHelper ? this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e, t) : [];
  }
  highlight(e) {
    return this._popupHighlightHelper ? this._popupHighlightHelper.highlight(e) : v();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  supportsSpatialReference(e) {
    return T(this.layer.tileInfo?.spatialReference, e);
  }
  async doRefresh() {
    if (this.attached) {
      if (this.suspended) return this._tileStrategy.clear(), void this.requestUpdate();
      this._fetchQueue.reset(), this._tileStrategy.refresh((e) => this._updatingHandles.addPromise(this._enqueueTileFetch(e)));
    }
  }
  acquireTile(e) {
    const t = this._bitmapView.createTile(e), i = t.bitmap;
    return [i.x, i.y] = this._tileInfoView.getTileCoords(k, t.key), i.resolution = this._tileInfoView.getTileResolution(t.key), [i.width, i.height] = this._tileInfoView.tileInfo.size, this._updatingHandles.addPromise(this._enqueueTileFetch(t)), this._bitmapView.addChild(t), this.requestUpdate(), t;
  }
  releaseTile(e) {
    this._fetchQueue.abort(e.key.id), this._bitmapView.removeChild(e), e.once("detach", () => e.destroy()), this.requestUpdate();
  }
  async fetchTile(e, t = {}) {
    const i = this.tilemapCache, { signal: s, resamplingLevel: h = 0 } = t;
    if (!i) try {
      return await this._fetchImage(e, s);
    } catch (r) {
      if (!n(r) && !this.resampling) return c(this._tileInfoView.tileInfo.size);
      if (h < 3) {
        const u = this._tileInfoView.getTileParentId(e.id);
        if (u) {
          const g = new f(u), _ = await this.fetchTile(g, { ...t, resamplingLevel: h + 1 });
          return d(this._tileInfoView, _, g, e);
        }
      }
      throw r;
    }
    const l = new f(0, 0, 0, 0);
    let p;
    try {
      if (await i.fetchAvailabilityUpsample(e.level, e.row, e.col, l, { signal: s }), !this.resampling && l.level !== e.level) return c(this._tileInfoView.tileInfo.size);
      p = await this._fetchImage(l, s);
    } catch (r) {
      if (n(r)) throw r;
      return c(this._tileInfoView.tileInfo.size);
    }
    return this.resampling ? d(this._tileInfoView, p, l, e) : p;
  }
  async _enqueueTileFetch(e) {
    if (!this._fetchQueue.has(e.key.id)) {
      try {
        const t = await this._fetchQueue.push(e.key);
        e.bitmap.source = t, e.bitmap.width = this._tileInfoView.tileInfo.size[0], e.bitmap.height = this._tileInfoView.tileInfo.size[1], e.once("attach", () => this.requestUpdate());
      } catch (t) {
        n(t) || b.getLogger(this).error(t);
      }
      this.requestUpdate();
    }
  }
  async _fetchImage(e, t) {
    return this.layer.fetchImageBitmapTile(e.level, e.row, e.col, { signal: t });
  }
};
o([m()], a.prototype, "resampling", null), o([m()], a.prototype, "tilemapCache", null), a = o([q("esri.views.2d.layers.TileLayerView2D")], a);
const pe = a;
export {
  pe as default
};
//# sourceMappingURL=TileLayerView2D-C_e-FDUt.js.map
