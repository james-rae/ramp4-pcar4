import { al as o, ed as v, ef as H, ao as _, am as U, ap as N, kC as Y, h2 as Z, iB as j, eb as b, dY as M, dZ as x, d$ as Q, b5 as z, H as d } from "./main-DZxT3i7S.js";
import { e as B } from "./mat3f64-Dh9_zhFu.js";
import { e as J } from "./mat4f64-Dn1WEGBx.js";
import { e as K } from "./quatf64-C16JxGFv.js";
function V(t, e) {
  return o(t, e) / v(t);
}
function Nt(t, e) {
  const r = o(t, e) / (v(t) * v(e));
  return -H(r);
}
function Et(t, e, r) {
  _(l, t), _(X, e);
  const n = o(l, X), a = H(n), s = U(l, l, X);
  return o(s, r) < 0 ? 2 * Math.PI - a : a;
}
const l = N(), X = N();
let S = class E {
  constructor(e) {
    this._create = e, this._items = new Array(), this._itemsPtr = 0;
  }
  get() {
    return this._itemsPtr === 0 && Y(() => this._reset()), this._itemsPtr >= this._items.length && this._items.push(this._create()), this._items[this._itemsPtr++];
  }
  _reset() {
    const e = 2 * this._itemsPtr;
    this._items.length > e && (this._items.length = e), this._itemsPtr = 0;
  }
  static createVec2f64() {
    return new E(Z);
  }
  static createVec3f64() {
    return new E(N);
  }
  static createVec4f64() {
    return new E(j);
  }
  static createMat3f64() {
    return new E(B);
  }
  static createMat4f64() {
    return new E(J);
  }
  static createQuatf64() {
    return new E(K);
  }
  get test() {
  }
};
const ht = S.createVec2f64(), f = S.createVec3f64(), W = S.createVec4f64();
S.createMat3f64();
const Tt = S.createMat4f64(), _t = S.createQuatf64();
function Mt(t) {
  const e = t[0] * t[0] + t[4] * t[4] + t[8] * t[8], r = t[1] * t[1] + t[5] * t[5] + t[9] * t[9], n = t[2] * t[2] + t[6] * t[6] + t[10] * t[10];
  return Math.sqrt(Math.max(e, r, n));
}
function St(t, e) {
  const r = Math.sqrt(e[0] * e[0] + e[4] * e[4] + e[8] * e[8]), n = Math.sqrt(e[1] * e[1] + e[5] * e[5] + e[9] * e[9]), a = Math.sqrt(e[2] * e[2] + e[6] * e[6] + e[10] * e[10]);
  return b(t, r, n, a), t;
}
function G(t, e, r) {
  Math.abs(t[0]) > Math.abs(t[1]) ? b(e, 0, 1, 0) : b(e, 1, 0, 0), U(r, t, e), U(e, r, t), _(r, r), _(e, e);
}
function k(t = g) {
  return [t[0], t[1], t[2], t[3]];
}
function mt(t = g[0], e = g[1], r = g[2], n = g[3]) {
  return y(t, e, r, n, W.get());
}
function tt(t, e) {
  return y(e[0], e[1], e[2], e[3], t);
}
function $t(t) {
  return t;
}
function y(t, e, r, n, a = k()) {
  return a[0] = t, a[1] = e, a[2] = r, a[3] = n, a;
}
function et(t, e, r) {
  const n = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], a = Math.abs(n - 1) > 1e-5 && n > 1e-12 ? 1 / Math.sqrt(n) : 1;
  return r[0] = e[0] * a, r[1] = e[1] * a, r[2] = e[2] * a, r[3] = -(r[0] * t[0] + r[1] * t[1] + r[2] * t[2]), r;
}
function rt(t, e, r, n = k()) {
  const a = r[0] - e[0], s = r[1] - e[1], i = r[2] - e[2], c = t[0] - e[0], D = t[1] - e[1], O = t[2] - e[2], m = s * O - i * D, R = i * c - a * O, p = a * D - s * c, q = m * m + R * R + p * p, w = Math.abs(q - 1) > 1e-5 && q > 1e-12 ? 1 / Math.sqrt(q) : 1;
  return n[0] = m * w, n[1] = R * w, n[2] = p * w, n[3] = -(n[0] * t[0] + n[1] * t[1] + n[2] * t[2]), n;
}
function nt(t, e, r, n = 0, a = Math.floor(r * (1 / 3)), s = Math.floor(r * (2 / 3))) {
  if (r < 3) return !1;
  e($, n);
  let i = a, c = !1;
  for (; i < r - 1 && !c; ) e(T, i), i++, c = !d($, T);
  if (!c) return !1;
  for (i = Math.max(i, s), c = !1; i < r && !c; ) e(h, i), i++, M(C, $, T), _(C, C), M(P, T, h), _(P, P), c = !d($, h) && !d(T, h) && Math.abs(o(C, P)) < at;
  return c ? (rt($, T, h, t), !0) : (n !== 0 || a !== 1 || s !== 2) && nt(t, e, r, 0, 1, 2);
}
const at = 0.99619469809, $ = N(), T = N(), h = N(), C = N(), P = N();
function gt(t, e, r) {
  return e !== t && tt(t, e), t[3] = -o(t, r), t;
}
function Dt(t, e, r, n) {
  return U(h, e, t), et(r, h, n);
}
function Ot(t, e, r, n) {
  return A(F(t, e, M(f.get(), r, e), it, n));
}
function lt(t, e, r) {
  return e != null && A(F(t, e.origin, e.direction, st, r));
}
function Ct(t, e, r) {
  return A(F(t, e.origin, e.vector, u.NONE, r));
}
function Pt(t, e, r) {
  return A(F(t, e.origin, e.vector, u.CLAMP, r));
}
function Ut(t, e) {
  return L(t, e) >= 0;
}
function bt(t, e, r) {
  const n = x(f.get(), t, -t[3]), a = ct(t, M(f.get(), e, n), f.get());
  return Q(r, a, n), r;
}
function At(t, e, r, n) {
  const a = t, s = f.get(), i = f.get();
  G(a, s, i);
  const c = M(f.get(), r, e), D = V(s, c), O = V(i, c), m = V(a, c);
  return b(n, D, O, m);
}
function ct(t, e, r) {
  const n = x(f.get(), t, o(t, e));
  return M(r, e, n), r;
}
function Ft(t, e) {
  return Math.abs(L(t, e));
}
function L(t, e) {
  return o(t, e) + t[3];
}
var I;
function A(t) {
  return t === I.INTERSECTS_INSIDE_OUT || t === I.INTERSECTS_OUTSIDE_IN;
}
function F(t, e, r, n, a) {
  const s = o(t, r), i = L(t, e);
  if (s === 0) return i >= 0 ? I.INSIDE : I.OUTSIDE;
  let c = -i / s;
  return n & u.CLAMP && (c = z(c, 0, 1)), !(n & u.INFINITE_MIN) && c < 0 || !(n & u.INFINITE_MAX) && c > 1 ? i >= 0 ? I.INSIDE : I.OUTSIDE : (Q(a, e, x(a, r, c)), i >= 0 ? I.INTERSECTS_INSIDE_OUT : I.INTERSECTS_OUTSIDE_IN);
}
(function(t) {
  t[t.INTERSECTS_INSIDE_OUT = 0] = "INTERSECTS_INSIDE_OUT", t[t.INTERSECTS_OUTSIDE_IN = 1] = "INTERSECTS_OUTSIDE_IN", t[t.INSIDE = 2] = "INSIDE", t[t.OUTSIDE = 3] = "OUTSIDE";
})(I || (I = {}));
const g = [0, 0, 1, 0];
var u;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.CLAMP = 1] = "CLAMP", t[t.INFINITE_MIN = 4] = "INFINITE_MIN", t[t.INFINITE_MAX = 8] = "INFINITE_MAX";
})(u || (u = {}));
const it = u.INFINITE_MIN | u.INFINITE_MAX, st = u.INFINITE_MAX;
export {
  mt as D,
  bt as H,
  At as J,
  k as M,
  $t as O,
  Dt as P,
  Ft as Q,
  y as U,
  L as V,
  Tt as a,
  Nt as b,
  f as c,
  G as d,
  V as f,
  St as g,
  tt as h,
  Ot as k,
  et as l,
  Mt as m,
  _t as o,
  rt as p,
  Ct as q,
  W as r,
  ht as t,
  Et as u,
  nt as v,
  Pt as w,
  lt as x,
  gt as y,
  Ut as z
};
//# sourceMappingURL=plane-D2096W83.js.map
