import { eN as D, ez as U, eA as z, eB as V, eC as j, eO as X, eP as G, b1 as b, aA as A, eQ as _, aq as u, dY as P, d$ as p, ei as $, e0 as M, b$ as E, c4 as L, eR as S, eS as I, eT as d, s as W, B as R, U as k, G as T, bQ as m, bR as f, eU as q, eG as F, bS as B, eM as K, ap as g } from "./main-DZxT3i7S.js";
import { $ as N, Z as O, w as Q } from "./elevationInfoUtils-CrzkqZgQ.js";
let y = class extends D(U(z(V(j(X(G(K))))))) {
  constructor(i) {
    super(i), this.operationalLayerType = "IntegratedMesh3DTilesLayer", this.spatialReference = new b({ wkid: 4326, vcsWkid: 115700 }), this.fullExtent = new A(-180, -90, 180, 90, this.spatialReference), this.url = null, this.type = "integrated-mesh-3dtiles", this.path = null, this.minScale = 0, this.maxScale = 0;
  }
  set elevationInfo(i) {
    this._set("elevationInfo", i), this._validateElevationInfo();
  }
  _verifyArray(i, a) {
    if (!Array.isArray(i) || i.length < a) return !1;
    for (const o of i) if (typeof o != "number") return !1;
    return !0;
  }
  _initFullExtent(i) {
    const a = i.root?.boundingVolume;
    if (!a) return;
    if (a.box) {
      const t = a?.box;
      if (t[3] > 7972671 && t[7] > 7972671 && t[11] > 7945940) return;
    }
    const o = i.root?.transform, x = g();
    if (a.region && this._verifyArray(a.region, 6)) {
      const t = a.region, l = _(t[0]), n = _(t[1]), s = t[4], r = _(t[2]), e = _(t[3]), h = t[5];
      this.fullExtent = new A({ xmin: l, ymin: n, zmin: s, xmax: r, ymax: e, zmax: h, spatialReference: this.spatialReference });
    } else if (a.sphere && this._verifyArray(a.sphere, 4)) {
      const t = a.sphere, l = u(t[0], t[1], t[2]), n = t[3] / Math.sqrt(3), s = g();
      P(s, l, u(n, n, n));
      const r = g();
      if (p(r, l, u(n, n, n)), o && this._verifyArray(o, 16)) {
        const v = o;
        $(x, s, v), M(s, x), $(x, r, v), M(r, x);
      }
      E(s, L, 0, s, b.WGS84, 0), E(r, L, 0, r, b.WGS84, 0);
      const e = g(), h = g();
      S(e, s, r), I(h, s, r), this.fullExtent = new A({ xmin: e[0], ymin: e[1], zmin: e[2], xmax: h[0], ymax: h[1], zmax: h[2], spatialReference: this.spatialReference });
    } else if (a.box && this._verifyArray(a.box, 12)) {
      const t = a.box, l = u(t[0], t[1], t[2]), n = u(t[3], t[4], t[5]), s = u(t[6], t[7], t[8]), r = u(t[9], t[10], t[11]), e = [];
      for (let c = 0; c < 8; ++c) e.push(g());
      if (p(e[0], l, n), p(e[0], e[0], s), p(e[0], e[0], r), d(e[1], l, n), p(e[1], e[1], s), p(e[1], e[1], r), p(e[2], l, n), d(e[2], e[2], s), p(e[2], e[2], r), d(e[3], l, n), d(e[3], e[3], s), p(e[3], e[3], r), p(e[4], l, n), p(e[4], e[4], s), d(e[4], e[4], r), d(e[5], l, n), p(e[5], e[5], s), d(e[5], e[5], r), p(e[6], l, n), d(e[6], e[6], s), d(e[6], e[6], r), d(e[7], l, n), d(e[7], e[7], s), d(e[7], e[7], r), o && this._verifyArray(o, 16)) {
        const c = o;
        for (let w = 0; w < 8; ++w) $(e[w], e[w], c);
      }
      const h = u(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), v = u(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
      for (let c = 0; c < 8; ++c) E(e[c], L, 0, e[c], b.WGS84, 0), S(v, v, e[c]), I(h, h, e[c]);
      this.fullExtent = new A({ xmin: v[0], ymin: v[1], zmin: v[2], xmax: h[0], ymax: h[1], zmax: h[2], spatialReference: this.spatialReference });
    }
  }
  async load(i) {
    return this.addResolvingPromise(this._doLoad(i)), this;
  }
  async _doLoad(i) {
    const a = i != null ? i.signal : null;
    try {
      await this.loadFromPortal({ supportedTypes: ["3DTiles Service"], validateItem: (o) => {
        if (o.typeKeywords?.includes("IntegratedMesh")) return !0;
        throw new W("portal:invalid-layer-item-type", "Invalid layer item, expected '${expectedType}' ", { expectedType: "3DTiles Service containing IntegratedMesh" });
      } }, i);
    } catch (o) {
      R(o);
    }
    this.url && await k(this.url, { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: a }).then((x) => {
      this._initFullExtent(x.data);
    }, (x) => {
      R(x);
    });
  }
  async fetchAttributionData() {
    return this.load().then(() => ({}));
  }
  _validateElevationInfo() {
    const i = this.elevationInfo, a = "Integrated mesh 3d tiles layers";
    N(T.getLogger(this), O(a, "absolute-height", i)), N(T.getLogger(this), Q(a, i));
  }
};
m([f({ type: ["IntegratedMesh3DTilesLayer"] })], y.prototype, "operationalLayerType", void 0), m([f({ type: b })], y.prototype, "spatialReference", void 0), m([f({ type: A })], y.prototype, "fullExtent", void 0), m([f(q)], y.prototype, "elevationInfo", null), m([f({ type: ["show", "hide"] })], y.prototype, "listMode", void 0), m([f(F)], y.prototype, "url", void 0), m([f({ readOnly: !0 })], y.prototype, "type", void 0), m([f({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 }, "portal-item": { read: !0, write: !0 } }, read: !1 } })], y.prototype, "path", void 0), m([f({ type: Number, json: { name: "layerDefinition.minScale", write: !0, origins: { service: { read: !1, write: !1 } } } })], y.prototype, "minScale", void 0), m([f({ type: Number, json: { name: "layerDefinition.maxScale", write: !0, origins: { service: { read: !1, write: !1 } } } })], y.prototype, "maxScale", void 0), y = m([B("esri.layers.IntegratedMesh3DTilesLayer")], y);
const Z = y;
export {
  Z as default
};
//# sourceMappingURL=IntegratedMesh3DTilesLayer-CsmR7_IG.js.map
