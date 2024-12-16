import { eu as x, db as _, jI as y, bQ as t, bR as s, D as w, hP as O, bS as h, ew as P, jK as T, a8 as g, d5 as k, cz as $, hI as j, d4 as I, kE as C, fd as F, kF as H, kG as M, ez as N, eC as V, eM as D } from "./main-DZxT3i7S.js";
import { c as G } from "./Analysis-C3ehJX_-.js";
import { c as L, b as R } from "./featureReferenceUtils-CJErRg8q.js";
import { j as f } from "./persistable-ChKWNQcl.js";
import { i as K } from "./elevationInfoUtils-CrzkqZgQ.js";
let a = class extends x(_(P)) {
  constructor(e) {
    super(e), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(e) {
    return y(this.position, e.position) && y(this.elevationInfo, e.elevationInfo) && L(this.feature, e.feature);
  }
};
t([s({ type: w, json: { write: { isRequired: !0 } } })], a.prototype, "position", void 0), t([s({ type: O }), f()], a.prototype, "elevationInfo", void 0), t([s(R)], a.prototype, "feature", void 0), a = t([h("esri.analysis.LineOfSightAnalysisObserver")], a);
const E = a;
let l = class extends x(T) {
  constructor(i) {
    super(i), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(i) {
    return y(this.position, i.position) && y(this.elevationInfo, i.elevationInfo) && L(this.feature, i.feature);
  }
};
t([s({ type: w }), f()], l.prototype, "position", void 0), t([s({ type: O }), f()], l.prototype, "elevationInfo", void 0), t([s(R)], l.prototype, "feature", void 0), l = t([h("esri.analysis.LineOfSightAnalysisTarget")], l);
const z = l, c = g.ofType(z);
let r = class extends G {
  constructor(e) {
    super(e), this.type = "line-of-sight", this.observer = null, this.extent = null;
  }
  initialize() {
    this.addHandles($(() => this._computeExtent(), (e) => {
      e?.pending == null && this._set("extent", e != null ? e.extent : null);
    }, j));
  }
  get targets() {
    return this._get("targets") || new c();
  }
  set targets(e) {
    this._set("targets", I(e, this.targets, c));
  }
  get spatialReference() {
    return this.observer?.position != null ? this.observer.position.spatialReference : null;
  }
  get requiredPropertiesForEditing() {
    return [this.observer?.position];
  }
  async waitComputeExtent() {
    const e = this._computeExtent();
    return e != null ? e.pending : Promise.resolve();
  }
  _computeExtent() {
    const e = this.spatialReference;
    if (this.observer?.position == null || e == null) return null;
    const v = (p) => K(p.position, p.elevationInfo) === "absolute-height", o = this.observer.position, b = C(o.x, o.y, o.z, o.x, o.y, o.z);
    for (const p of this.targets) if (p.position != null) {
      const u = F(p.position, e);
      if (u.pending != null) return { pending: u.pending, extent: null };
      if (u.geometry != null) {
        const { x: S, y: q, z: A } = u.geometry;
        H(b, [S, q, A]);
      }
    }
    const d = M(b, e);
    return v(this.observer) && this.targets.every(v) || (d.zmin = void 0, d.zmax = void 0), { pending: null, extent: d };
  }
  clear() {
    this.observer = null, this.targets.removeAll();
  }
};
t([s({ type: ["line-of-sight"] })], r.prototype, "type", void 0), t([s({ type: E, json: { read: !0, write: !0 } })], r.prototype, "observer", void 0), t([s({ cast: k, type: c, nonNullable: !0, json: { read: !0, write: !0 } })], r.prototype, "targets", null), t([s({ value: null, readOnly: !0 })], r.prototype, "extent", void 0), t([s({ readOnly: !0 })], r.prototype, "spatialReference", null), t([s({ readOnly: !0 })], r.prototype, "requiredPropertiesForEditing", null), r = t([h("esri.analysis.LineOfSightAnalysis")], r);
const m = r, Q = g.ofType(z);
let n = class extends N(V(D)) {
  constructor(i) {
    super(i), this.type = "line-of-sight", this.operationalLayerType = "LineOfSightLayer", this.analysis = new m(), this.opacity = 1;
  }
  initialize() {
    this.addHandles($(() => this.analysis, (i, e) => {
      e != null && e.parent === this && (e.parent = null), i != null && (i.parent = this);
    }, j));
  }
  async load() {
    return this.analysis != null && this.addResolvingPromise(this.analysis.waitComputeExtent()), this;
  }
  get observer() {
    return this.analysis?.observer;
  }
  set observer(i) {
    const { analysis: e } = this;
    e && (e.observer = i);
  }
  get targets() {
    return this.analysis != null ? this.analysis.targets : new g();
  }
  set targets(i) {
    I(i, this.analysis?.targets);
  }
  get fullExtent() {
    return this.analysis != null ? this.analysis.extent : null;
  }
  get spatialReference() {
    return this.analysis != null ? this.analysis.spatialReference : null;
  }
  releaseAnalysis(i) {
    this.analysis === i && (this.analysis = new m());
  }
};
t([s({ json: { read: !1 }, readOnly: !0 })], n.prototype, "type", void 0), t([s({ type: ["LineOfSightLayer"] })], n.prototype, "operationalLayerType", void 0), t([s({ type: E, json: { read: !0, write: { isRequired: !0, ignoreOrigin: !0 } } })], n.prototype, "observer", null), t([s({ type: Q, json: { read: !0, write: { ignoreOrigin: !0 } } })], n.prototype, "targets", null), t([s({ nonNullable: !0, json: { read: !1, write: !1 } })], n.prototype, "analysis", void 0), t([s({ readOnly: !0 })], n.prototype, "fullExtent", null), t([s({ readOnly: !0 })], n.prototype, "spatialReference", null), t([s({ readOnly: !0, json: { read: !1, write: !1, origins: { service: { read: !1, write: !1 }, "portal-item": { read: !1, write: !1 }, "web-document": { read: !1, write: !1 } } } })], n.prototype, "opacity", void 0), t([s({ type: ["show", "hide"] })], n.prototype, "listMode", void 0), n = t([h("esri.layers.LineOfSightLayer")], n);
const ee = n;
export {
  ee as default
};
//# sourceMappingURL=LineOfSightLayer-fdFo_j5e.js.map
