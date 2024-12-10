import { dX as g, ap as v, dY as a, al as e, dZ as f, d_ as b, b5 as m, d$ as j, e0 as h } from "./main-DZxT3i7S.js";
import { s as l } from "./sphere-C5nRNjej.js";
import { c as s } from "./plane-D2096W83.js";
function p(o) {
  return o ? { origin: g(o.origin), vector: g(o.vector) } : { origin: v(), vector: v() };
}
function P(o, t, r = p()) {
  return h(r.origin, o), a(r.vector, t, o), r;
}
function X(o, t) {
  const r = a(s.get(), t, o.origin), u = e(o.vector, r), n = e(o.vector, o.vector), i = m(u / n, 0, 1), c = a(s.get(), f(s.get(), o.vector, i), r);
  return e(c, c);
}
function Y(o, t, r) {
  return w(o, t, 0, 1, r);
}
function w(o, t, r, u, n) {
  const { vector: i, origin: c } = o, d = a(s.get(), t, c), $ = e(i, d) / b(i);
  return f(n, i, m($, r, u)), j(n, n, o.origin);
}
new l(() => p());
export {
  w as A,
  X as M,
  P as b,
  Y as j,
  p as v
};
//# sourceMappingURL=lineSegment-DEQPvx1b.js.map
