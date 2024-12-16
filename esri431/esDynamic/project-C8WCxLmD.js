import { bQ as s, bR as i, bS as d, bT as l, ce as n, cd as f, hc as S, bN as g, bO as y, U as R, hd as w } from "./main-DZxT3i7S.js";
let o = class extends l {
  constructor(e) {
    super(e), this.geometries = [], this.outSpatialReference = null, this.transformation = null, this.transformForward = null;
  }
  toJSON() {
    const e = this.geometries.map((a) => a.toJSON()), t = this.geometries[0], r = {};
    return r.outSR = n(this.outSpatialReference), r.inSR = n(t.spatialReference), r.geometries = JSON.stringify({ geometryType: f(t), geometries: e }), this.transformation && (r.transformation = this.transformation.wkid || JSON.stringify(this.transformation)), this.transformForward != null && (r.transformForward = this.transformForward), r;
  }
};
s([i()], o.prototype, "geometries", void 0), s([i({ json: { read: { source: "outSR" } } })], o.prototype, "outSpatialReference", void 0), s([i()], o.prototype, "transformation", void 0), s([i()], o.prototype, "transformForward", void 0), o = s([d("esri.rest.support.ProjectParameters")], o);
const b = o, N = S(b);
async function j(e, t, r) {
  t = N(t);
  const a = g(e), p = { ...a.query, f: "json", ...t.toJSON() }, c = t.outSpatialReference, m = f(t.geometries[0]), u = y(p, r);
  return R(a.path + "/project", u).then(({ data: { geometries: h } }) => w(h, m, c));
}
export {
  j as n,
  b as p
};
//# sourceMappingURL=project-C8WCxLmD.js.map
