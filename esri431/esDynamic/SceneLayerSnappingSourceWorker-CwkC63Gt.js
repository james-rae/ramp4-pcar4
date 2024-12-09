import { hb as l, ec as _, d$ as m, bQ as v, bS as y, ap as u, J as L, dX as h } from "./main-DZxT3i7S.js";
import { v as x, b as S, j as $ } from "./lineSegment-DEQPvx1b.js";
import { E as j, U as f, i as C } from "./sphere-C5nRNjej.js";
import { Y as b } from "./Octree-BZgV7Kq1.js";
import { m as P } from "./edgeProcessing-CebaHmUj.js";
const I = 1e3;
function V(t, n, s) {
  const e = j(), o = f(e);
  return l(o, o, t, 0.5), l(o, o, n, 0.5), e[3] = _(o, t), m(o, o, s), e;
}
let g = class {
  constructor() {
    this._idToComponent = /* @__PURE__ */ new Map(), this._components = new b((t) => t.bounds), this._edges = new b((t) => t.bounds), this._tmpLineSegment = x(), this._tmpP1 = u(), this._tmpP2 = u(), this._tmpP3 = u(), this.remoteClient = null;
  }
  async fetchCandidates(t, n) {
    await Promise.resolve(), L(n), await this._ensureEdgeLocations(t, n);
    const s = [];
    return this._edges.forEachNeighbor((e) => (this._addCandidates(t, e, s), s.length < I), t.bounds), { result: { candidates: s } };
  }
  async _ensureEdgeLocations(t, n) {
    const s = [];
    if (this._components.forEachNeighbor((i) => {
      if (i.info == null) {
        const { id: r, uid: d } = i;
        s.push({ id: r, uid: d });
      }
      return !0;
    }, t.bounds), !s.length) return;
    const e = { components: s }, o = await this.remoteClient.invoke("fetchAllEdgeLocations", e, n ?? {});
    for (const i of o.components) this._setFetchEdgeLocations(i);
  }
  async add(t) {
    const n = new p(t.id, t.bounds);
    return this._idToComponent.set(n.id, n), this._components.add([n]), { result: {} };
  }
  async remove(t) {
    const n = this._idToComponent.get(t.id);
    if (n) {
      const s = [];
      this._edges.forEachNeighbor((e) => (e.component === n && s.push(e), !0), n.bounds), this._edges.remove(s), this._components.remove([n]), this._idToComponent.delete(n.id);
    }
    return { result: {} };
  }
  _setFetchEdgeLocations(t) {
    const n = this._idToComponent.get(t.id);
    if (n == null || t.uid !== n.uid) return;
    const s = P.createView(t.locations), e = new Array(s.count), o = u(), i = u();
    for (let c = 0; c < s.count; c++) {
      s.position0.getVec(c, o), s.position1.getVec(c, i);
      const a = V(o, i, t.origin), E = new T(n, c, a);
      e[c] = E;
    }
    this._edges.add(e);
    const { objectIds: r, origin: d } = t;
    n.info = { locations: s, objectIds: r, origin: d };
  }
  _addCandidates(t, n, s) {
    const { info: e } = n.component, { origin: o, objectIds: i } = e, r = e.locations, d = r.position0.getVec(n.index, this._tmpP1), c = r.position1.getVec(n.index, this._tmpP2);
    m(d, d, o), m(c, c, o);
    const a = i[r.componentIndex.get(n.index)];
    this._addEdgeCandidate(t, a, d, c, s), w(t, a, d, s), w(t, a, c, s);
  }
  _addEdgeCandidate(t, n, s, e, o) {
    if (!t.returnEdge) return;
    const i = f(t.bounds), r = S(s, e, this._tmpLineSegment), d = $(r, i, this._tmpP3);
    C(t.bounds, d) && o.push({ type: "edge", objectId: n, target: h(d), distance: _(i, d), start: h(s), end: h(e) });
  }
};
g = v([y("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")], g);
const J = g;
function w(t, n, s, e) {
  if (!t.returnVertex || !C(t.bounds, s)) return;
  const o = f(t.bounds);
  e.push({ type: "vertex", objectId: n, target: h(s), distance: _(o, s) });
}
class p {
  constructor(n, s) {
    this.id = n, this.bounds = s, this.info = null, this.uid = ++p.uid;
  }
}
p.uid = 0;
class T {
  constructor(n, s, e) {
    this.component = n, this.index = s, this.bounds = e;
  }
}
export {
  J as default
};
//# sourceMappingURL=SceneLayerSnappingSourceWorker-CwkC63Gt.js.map
