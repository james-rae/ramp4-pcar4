import { cz as h, cA as n, bU as g, a8 as w, cB as f, cC as d, cD as y, bQ as u, bS as b } from "./main-DZxT3i7S.js";
import { j as V, y as S } from "./LayerView-BSi2ZKlw.js";
import { t as _ } from "./GraphicContainer-DBCyi5jQ.js";
import { F as T } from "./GraphicsView2D-DQwEO3YK.js";
let c = class extends V(S) {
  constructor() {
    super(...arguments), this._graphicsViewMap = {}, this._popupTemplates = /* @__PURE__ */ new Map(), this.graphicsViews = [];
  }
  async hitTest(e, i) {
    if (!this.graphicsViews.length) return null;
    const r = this.layer;
    return this.graphicsViews.reverse().flatMap((t) => {
      const s = this._popupTemplates.get(t), o = t.hitTest(e);
      for (const a of o) a.layer = r, a.sourceLayer = r, a.popupTemplate = s;
      return o;
    }).map((t) => ({ type: "graphic", graphic: t, layer: r, mapPoint: e }));
  }
  update(e) {
    if (this.graphicsViews) for (const i of this.graphicsViews) i.processUpdate(e);
  }
  attach() {
    this.addAttachHandles([h(() => this.layer?.featureCollections, (e) => {
      this._clear();
      for (const { popupInfo: i, featureSet: r, layerDefinition: t } of e) {
        const s = g.fromJSON(r), o = new w(s.features), a = t.drawingInfo, m = i ? f.fromJSON(i) : null, p = d(a.renderer), l = new T({ requestUpdateCallback: () => this.requestUpdate(), view: this.view, graphics: o, renderer: p, container: new _(this.view.featuresTilingScheme) });
        this._graphicsViewMap[s.geometryType] = l, this._popupTemplates.set(l, m), s.geometryType !== "polygon" || this.layer.polygonSymbol ? s.geometryType !== "polyline" || this.layer.lineSymbol ? s.geometryType !== "point" || this.layer.pointSymbol || (this.layer.pointSymbol = p.symbol) : this.layer.lineSymbol = p.symbol : this.layer.polygonSymbol = p.symbol, this.graphicsViews.push(l), this.container.addChild(l.container);
      }
    }, n), h(() => this.layer?.polygonSymbol, (e) => {
      this._graphicsViewMap.polygon.renderer = new y({ symbol: e });
    }, n), h(() => this.layer?.lineSymbol, (e) => {
      this._graphicsViewMap.polyline.renderer = new y({ symbol: e });
    }, n), h(() => this.layer?.pointSymbol, (e) => {
      this._graphicsViewMap.point.renderer = new y({ symbol: e });
    }, n)]);
  }
  detach() {
    this._clear();
  }
  moveEnd() {
  }
  viewChange() {
    for (const e of this.graphicsViews) e.viewChange();
  }
  _clear() {
    this.container.removeAllChildren();
    for (const e of this.graphicsViews) e.destroy();
    this._graphicsViewMap = {}, this._popupTemplates.clear(), this.graphicsViews.length = 0;
  }
};
c = u([b("esri.views.2d.layers.GeoRSSLayerView2D")], c);
const U = c;
export {
  U as default
};
//# sourceMappingURL=GeoRSSLayerView2D-UP5VCWKP.js.map
