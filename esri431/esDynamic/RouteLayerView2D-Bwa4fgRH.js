import { a8 as p, d6 as _, cA as w, cF as o, bm as g, cz as d, bQ as l, bR as u, bS as y } from "./main-DZxT3i7S.js";
import { c as m, y as f, C as k, T as M, j as F, S as V, w as I } from "./Stop-DXkrdKgD.js";
import { j as v, y as G } from "./LayerView-BSi2ZKlw.js";
import { t as H } from "./GraphicContainer-DBCyi5jQ.js";
import { F as b } from "./GraphicsView2D-DQwEO3YK.js";
const C = ["route-info", "direction-line", "direction-point", "polygon-barrier", "polyline-barrier", "point-barrier", "stop"], a = { graphic: null, property: null, oldValue: null, newValue: null };
function c(e) {
  return e instanceof m || e instanceof f || e instanceof k || e instanceof M || e instanceof F || e instanceof V || e instanceof I;
}
function U(e) {
  return p.isCollection(e) && e.length && c(e.at(0));
}
function $(e) {
  return Array.isArray(e) && e.length > 0 && c(e[0]);
}
const A = /* @__PURE__ */ new Set(["default"]);
let h = class extends v(G) {
  constructor() {
    super(...arguments), this._graphics = new p(), this._highlightIds = /* @__PURE__ */ new Map(), this._networkFeatureMap = /* @__PURE__ */ new Map(), this._networkGraphicMap = /* @__PURE__ */ new Map();
  }
  get _routeItems() {
    return new _({ getCollections: () => this.layer == null || this.destroyed ? [] : [this.layer.routeInfo != null ? new p([this.layer.routeInfo]) : null, this.layer.directionLines, this.layer.directionPoints, this.layer.polygonBarriers, this.layer.polylineBarriers, this.layer.pointBarriers, this.layer.stops] });
  }
  initialize() {
    this._updatingHandles.addOnCollectionChange(() => this._routeItems, (e) => this._routeItemsChanged(e), w);
  }
  destroy() {
    this._networkFeatureMap.clear(), this._networkGraphicMap.clear(), this._graphics.removeAll(), this._get("_routeItems")?.destroy();
  }
  attach() {
    this._createGraphicsView();
  }
  detach() {
    this._destroyGraphicsView();
  }
  async fetchPopupFeaturesAtLocation(e, t) {
    return this._graphicsView.hitTest(e).filter(({ popupTemplate: i }) => !!i);
  }
  highlight(e) {
    let t;
    t = c(e) ? [this._getNetworkFeatureUid(e)] : $(e) ? e.map((r) => this._getNetworkFeatureUid(r)) : U(e) ? e.map((r) => this._getNetworkFeatureUid(r)).toArray() : [e.uid];
    const i = t.filter(o);
    return i.length ? (this._addHighlight(i), g(() => this._removeHighlight(i))) : g();
  }
  async hitTest(e, t) {
    if (this.suspended) return null;
    const i = this._graphicsView.hitTest(e).filter(o).map((s) => this._networkGraphicMap.get(s));
    if (!i.length) return null;
    const { layer: r } = this;
    return i.reverse().map((s) => ({ type: "route", layer: r, mapPoint: e, networkFeature: s }));
  }
  isUpdating() {
    return this._graphicsView.updating;
  }
  moveEnd() {
  }
  update(e) {
    this._graphicsView.processUpdate(e);
  }
  viewChange() {
    this._graphicsView.viewChange();
  }
  _addHighlight(e) {
    for (const t of e) if (this._highlightIds.has(t)) {
      const i = this._highlightIds.get(t);
      this._highlightIds.set(t, i + 1);
    } else this._highlightIds.set(t, 1);
    this._updateHighlight();
  }
  _createGraphic(e) {
    const t = e.toGraphic();
    return t.layer = this.layer, t.sourceLayer = this.layer, t;
  }
  _createGraphicsView() {
    const e = this.view, t = () => this.requestUpdate(), i = new H(e.featuresTilingScheme);
    this._graphicsView = new b({ container: i, graphics: this._graphics, requestUpdateCallback: t, view: e }), this.container.addChild(i), this._updateHighlight();
  }
  _destroyGraphicsView() {
    this.container.removeChild(this._graphicsView.container), this._graphicsView.destroy();
  }
  _getDrawOrder(e) {
    const t = this._networkGraphicMap.get(e);
    return C.indexOf(t.type);
  }
  _getNetworkFeatureUid(e) {
    return this._networkFeatureMap.has(e) ? this._networkFeatureMap.get(e).uid : null;
  }
  _removeHighlight(e) {
    for (const t of e) if (this._highlightIds.has(t)) {
      const i = this._highlightIds.get(t) - 1;
      i === 0 ? this._highlightIds.delete(t) : this._highlightIds.set(t, i);
    }
    this._updateHighlight();
  }
  _routeItemsChanged(e) {
    if (e.removed.length) {
      this._graphics.removeMany(e.removed.map((t) => {
        const i = this._networkFeatureMap.get(t);
        return this._networkFeatureMap.delete(t), this._networkGraphicMap.delete(i), i;
      }));
      for (const t of e.removed) this.removeHandles(t);
    }
    if (e.added.length) {
      this._graphics.addMany(e.added.map((t) => {
        const i = this._createGraphic(t);
        return i.symbol == null ? null : (this._networkFeatureMap.set(t, i), this._networkGraphicMap.set(i, t), i);
      }).filter(o));
      for (const t of e.added) this.addHandles([d(() => t.geometry, (i, r) => {
        this._updateGraphic(t, "geometry", i, r);
      }), d(() => t.symbol, (i, r) => {
        this._updateGraphic(t, "symbol", i, r);
      })], t);
      this._graphics.sort((t, i) => this._getDrawOrder(t) - this._getDrawOrder(i));
    }
  }
  _updateGraphic(e, t, i, r) {
    if (!this._networkFeatureMap.has(e)) {
      const n = this._createGraphic(e);
      return this._networkFeatureMap.set(e, n), this._networkGraphicMap.set(n, e), void this._graphics.add(n);
    }
    const s = this._networkFeatureMap.get(e);
    s[t] = i, a.graphic = s, a.property = t, a.oldValue = r, a.newValue = i, this._graphicsView.graphicUpdateHandler(a);
  }
  _updateHighlight() {
    const e = Array.from(this._highlightIds.keys()), t = this._getHighlightBits(A);
    this._graphicsView.setHighlight(e.map((i) => ({ objectId: i, highlightFlags: t })));
  }
};
l([u()], h.prototype, "_graphics", void 0), l([u()], h.prototype, "_routeItems", null), h = l([y("esri.views.2d.layers.RouteLayerView2D")], h);
const L = h;
export {
  L as default
};
//# sourceMappingURL=RouteLayerView2D-Bwa4fgRH.js.map
