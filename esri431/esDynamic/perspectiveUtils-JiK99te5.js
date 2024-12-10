import { bQ as t, bR as l, bS as N, ew as S, gX as d, fd as V, b4 as E, eb as m, gj as b, gY as y, gZ as c, gJ as h, g_ as x, g$ as i, ap as M } from "./main-DZxT3i7S.js";
import { p as O } from "./normalizeUtilsSync-BXiwJJN9.js";
import { e as p } from "./mat3f64-Dh9_zhFu.js";
let s = class extends S {
  constructor(o) {
    super(o);
  }
  get bounds() {
    const o = this.coords;
    return o?.extent == null ? null : d(o.extent);
  }
  get coords() {
    const o = this.element.georeference?.coords;
    return V(o, this.spatialReference).geometry;
  }
  get normalizedCoords() {
    return E.fromJSON(O(this.coords));
  }
  get normalizedBounds() {
    const o = this.normalizedCoords != null ? this.normalizedCoords.extent : null;
    return o != null ? d(o) : null;
  }
};
t([l()], s.prototype, "spatialReference", void 0), t([l()], s.prototype, "element", void 0), t([l()], s.prototype, "bounds", null), t([l()], s.prototype, "coords", null), t([l()], s.prototype, "normalizedCoords", null), t([l()], s.prototype, "normalizedBounds", null), s = t([N("esri.layers.support.MediaElementView")], s);
const r = M(), a = p(), u = p(), g = p();
function Z(o, e, n) {
  return m(r, e[0], e[1], 1), b(r, r, y(a, n)), r[2] === 0 ? c(o, r[0], r[1]) : c(o, r[0] / r[2], r[1] / r[2]);
}
function _(o, e, n) {
  return f(u, e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]), f(g, n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7]), h(o, x(u, u), g), o[8] !== 0 && (o[0] /= o[8], o[1] /= o[8], o[2] /= o[8], o[3] /= o[8], o[4] /= o[8], o[5] /= o[8], o[6] /= o[8], o[7] /= o[8], o[8] /= o[8]), o;
}
function f(o, e, n, z, v, C, $, R, j) {
  i(o, e, z, C, n, v, $, 1, 1, 1), m(r, R, j, 1), x(a, o);
  const [w, B, J] = b(r, r, y(a, a));
  return i(a, w, 0, 0, 0, B, 0, 0, 0, J), h(o, a, o);
}
export {
  _ as j,
  s as m,
  Z as p
};
//# sourceMappingURL=perspectiveUtils-JiK99te5.js.map
