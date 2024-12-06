import { s as c } from "./sphere-C5nRNjej.js";
import { dX as s, ap as p, dY as m, ed as d, am as v } from "./main-DZxT3i7S.js";
import { v as w } from "./lineSegment-DEQPvx1b.js";
import "./plane-D2096W83.js";
function M(r) {
  return r ? { p0: s(r.p0), p1: s(r.p1), p2: s(r.p2) } : { p0: p(), p1: p(), p2: p() };
}
function O(r, o, n) {
  const i = o[0] - r[0], e = o[1] - r[1], f = n[0] - r[0], u = n[1] - r[1];
  return 0.5 * Math.abs(i * u - e * f);
}
function S(r, o, n) {
  return m(a, o, r), m(t, n, r), 0.5 * d(v(a, a, t));
}
new c(w);
new c(() => M());
const a = p(), t = p();
export {
  S,
  O as v
};
//# sourceMappingURL=triangle-COwGjH-R.js.map
