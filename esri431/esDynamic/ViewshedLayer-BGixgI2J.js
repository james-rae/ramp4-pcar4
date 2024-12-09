import { eu as J, jI as H, bQ as t, bR as s, D as I, gf as X, i5 as x, jJ as G, bS as N, jK as K, a8 as A, d5 as Q, cz as L, hI as P, d4 as U, jL as k, aA as B, fX as F, b5 as q, ez as W, eC as Y, f9 as Z, eM as ee } from "./main-DZxT3i7S.js";
import { c as te, b as ie } from "./featureReferenceUtils-CJErRg8q.js";
import { c as se } from "./Analysis-C3ehJX_-.js";
let a = class extends J(K) {
  constructor(e) {
    super(e), this.observer = null, this.farDistance = 1e3, this.heading = 0, this.tilt = 90, this.horizontalFieldOfView = 45, this.verticalFieldOfView = 45, this.feature = null;
  }
  isValid() {
    return this.observer != null && this.farDistance > 0;
  }
  equals(e) {
    return H(this.observer, e.observer) && this.farDistance === e.farDistance && this.heading === e.heading && this.tilt === e.tilt && this.horizontalFieldOfView === e.horizontalFieldOfView && this.verticalFieldOfView === e.verticalFieldOfView && te(this.feature, e.feature);
  }
};
t([s({ type: I, json: { write: !0 } })], a.prototype, "observer", void 0), t([s({ type: Number, nonNullable: !0, range: { min: 0 }, json: { write: { isRequired: !0 } } })], a.prototype, "farDistance", void 0), t([s({ type: Number, nonNullable: !0, json: { write: { isRequired: !0 } } }), X((i) => x.normalize(G(i), void 0, !0))], a.prototype, "heading", void 0), t([s({ type: Number, nonNullable: !0, range: { min: 0, max: 180 }, json: { write: { isRequired: !0 } } })], a.prototype, "tilt", void 0), t([s({ type: Number, nonNullable: !0, range: { min: 0, max: 360 }, json: { write: { isRequired: !0 } } })], a.prototype, "horizontalFieldOfView", void 0), t([s({ type: Number, nonNullable: !0, range: { min: 0, max: 180 }, json: { write: { isRequired: !0 } } })], a.prototype, "verticalFieldOfView", void 0), t([s(ie)], a.prototype, "feature", void 0), t([s({ json: { read: !1 } })], a.prototype, "isValid", null), a = t([N("esri.analysis.Viewshed")], a);
const S = a, R = A.ofType(S);
let u = class extends se {
  constructor(e) {
    super(e), this.type = "viewshed", this._extent = null;
  }
  initialize() {
    this.addHandles(L(() => this._computeExtent(), (e) => {
      e.pending == null && (this._extent = e.extent);
    }, P));
  }
  get viewsheds() {
    return this._get("viewsheds") || new R();
  }
  set viewsheds(e) {
    this._set("viewsheds", U(e, this.viewsheds, R));
  }
  get spatialReference() {
    for (const e of this.viewsheds) if (e.observer != null) return e.observer.spatialReference;
    return null;
  }
  get extent() {
    return this._extent;
  }
  get requiredPropertiesForEditing() {
    return this.viewsheds.items.map(({ observer: e }) => e);
  }
  async waitComputeExtent() {
    const e = this._computeExtent();
    e.pending != null && await e.pending;
  }
  _computeExtent() {
    const { spatialReference: e } = this;
    if (e == null) return { pending: null, extent: null };
    const d = this.viewsheds.filter((r) => r.observer != null), y = d.map((r) => r.observer).toArray(), o = k(y, e);
    return o.pending != null ? { pending: o.pending, extent: null } : { pending: null, extent: o.geometries.map((r, p) => {
      const b = d.at(p);
      return r != null && b != null ? this._computeViewshedExtent(this.viewsheds.at(p), r) : null;
    }).filter((r) => r != null).reduce((r, p) => re(r, p), null) };
  }
  _computeViewshedExtent(e, d) {
    const { farDistance: y, heading: o, tilt: r, horizontalFieldOfView: p, verticalFieldOfView: b } = e, { spatialReference: E } = d, V = p / 2, O = b / 2, $ = y / E.metersPerUnit, T = [x.normalize(o - V), o, x.normalize(o + V)], h = B.fromPoint(d), m = (v) => {
      const c = T.map((l) => x.normalize(l - v));
      if (c[0] > c[2] || p === 360) return $;
      const w = c.map((l) => Math.abs(l > 180 ? 360 - l : l)).reduce((l, g) => l > g ? g : l);
      return w > 90 ? 0 : $ * Math.cos(F(w));
    };
    h.xmax += m(90), h.xmin -= m(-90), h.ymax += m(0), h.ymin -= m(180);
    const f = d.z;
    if (f != null) {
      let v = f, c = f;
      const w = r - 90, l = q(w + O, -90, 90), g = q(w - O, -90, 90), z = E?.isGeographic ? y : $;
      v += z * j(l), c += z * j(g);
      const C = M(O) * z, _ = j(w) * C * (1 - M(V));
      r < 90 && (v -= _), r > 90 && (c -= _), h.zmax = Math.max(v, f), h.zmin = Math.min(c, f);
    }
    return h;
  }
  clear() {
    this.viewsheds.removeAll();
  }
};
function re(i, e) {
  return i == null ? e : e == null ? i : i.union(e);
}
function M(i) {
  return Math.cos(F(i));
}
function j(i) {
  return Math.sin(F(i));
}
t([s({ type: ["viewshed"] })], u.prototype, "type", void 0), t([s({ cast: Q, type: R, nonNullable: !0 })], u.prototype, "viewsheds", null), t([s({ readOnly: !0 })], u.prototype, "spatialReference", null), t([s()], u.prototype, "_extent", void 0), t([s({ readOnly: !0 })], u.prototype, "extent", null), t([s({ readOnly: !0 })], u.prototype, "requiredPropertiesForEditing", null), u = t([N("esri.analysis.ViewshedAnalysis")], u);
const D = u;
let n = class extends W(Y(ee)) {
  constructor(i) {
    super(i), this.type = "viewshed", this.operationalLayerType = "ViewshedLayer", this.source = new D(), this.opacity = 1;
  }
  initialize() {
    this.addHandles(L(() => this.source, (i, e) => {
      e != null && e.parent === this && (e.parent = null), i != null && (i.parent = this);
    }, P));
  }
  async load() {
    return this.addResolvingPromise(this.source.waitComputeExtent()), this;
  }
  get spatialReference() {
    return this.source.spatialReference;
  }
  get fullExtent() {
    return this.source.extent;
  }
  releaseAnalysis(i) {
    this.source === i && (this.source = new D());
  }
  get analysis() {
    return this.source;
  }
  set analysis(i) {
    this.source = i;
  }
  get viewsheds() {
    return this.source.viewsheds;
  }
  set viewsheds(i) {
    this.source.viewsheds = i;
  }
  writeViewsheds(i, e, d, y) {
    e.viewsheds = i.filter((o) => o.isValid()).map((o) => o.toJSON(y)).toJSON();
  }
};
t([s({ json: { read: !1 }, readOnly: !0 })], n.prototype, "type", void 0), t([s({ type: ["ViewshedLayer"] })], n.prototype, "operationalLayerType", void 0), t([s({ nonNullable: !0 })], n.prototype, "source", void 0), t([s({ readOnly: !0 })], n.prototype, "spatialReference", null), t([s({ readOnly: !0 })], n.prototype, "fullExtent", null), t([s({ readOnly: !0, json: { read: !1, write: !1, origins: { service: { read: !1, write: !1 }, "portal-item": { read: !1, write: !1 }, "web-document": { read: !1, write: !1 } } } })], n.prototype, "opacity", void 0), t([s({ type: ["show", "hide"] })], n.prototype, "listMode", void 0), t([s({ type: A.ofType(S), json: { write: { ignoreOrigin: !0 }, origins: { "web-scene": { write: { ignoreOrigin: !0 } } } } })], n.prototype, "viewsheds", null), t([Z("web-scene", "viewsheds")], n.prototype, "writeViewsheds", null), n = t([N("esri.layers.ViewshedLayer")], n);
const de = n;
export {
  de as default
};
//# sourceMappingURL=ViewshedLayer-BGixgI2J.js.map
