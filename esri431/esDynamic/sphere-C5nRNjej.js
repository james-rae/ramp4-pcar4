import { kC as G, dX as R, ap as g, e0 as S, dY as f, am as q, ao as O, al as T, d$ as p, dZ as d, ed as l, kD as H, eb as k, iB as X, ak as Y, aa as x, iV as Z, a9 as J, ec as I, ej as K, ei as Q, d_ as U, ef as W, ek as M, iY as tt, iX as nt, hb as it } from "./main-DZxT3i7S.js";
import "./mat3f64-Dh9_zhFu.js";
import { c as u, a as et, b as rt } from "./plane-D2096W83.js";
class st {
  constructor(i) {
    this._allocator = i, this._items = [], this._itemsPtr = 0, this._grow();
  }
  get() {
    return this._itemsPtr === 0 && G(() => this._reset()), this._itemsPtr === this._items.length && this._grow(), this._items[this._itemsPtr++];
  }
  _reset() {
    const i = Math.min(3 * Math.max(8, this._itemsPtr), this._itemsPtr + 3 * j);
    this._items.length = Math.min(i, this._items.length), this._itemsPtr = 0;
  }
  _grow() {
    for (let i = 0; i < Math.max(8, Math.min(this._items.length, j)); i++) this._items.push(this._allocator());
  }
}
const j = 1024;
function P(t) {
  return t ? v(R(t.origin), R(t.direction)) : v(g(), g());
}
function v(t, i) {
  return { origin: t, direction: i };
}
function Xt(t, i) {
  const n = ut.get();
  return n.origin = t, n.direction = i, n;
}
function Yt(t, i = P()) {
  return ct(t.origin, t.direction, i);
}
function ot(t, i, n = P()) {
  return S(n.origin, t), f(n.direction, i, t), n;
}
function ct(t, i, n = P()) {
  return S(n.origin, t), S(n.direction, i), n;
}
function Zt(t, i) {
  const n = q(u.get(), O(u.get(), t.direction), f(u.get(), i, t.origin));
  return T(n, n);
}
function at(t, i, n) {
  const e = T(t.direction, f(n, i, t.origin));
  return p(n, t.origin, d(n, t.direction, e)), n;
}
const ut = new st(() => P());
function E(t, i) {
  const n = l(t), e = H(t[2] / n), r = Math.atan2(t[1] / n, t[0] / n);
  return k(i, n, e, r), i;
}
const ft = A();
function A() {
  return X();
}
const ht = Y, gt = Y;
function L(t, i) {
  return x(i, t);
}
function lt(t, i) {
  return Z(t[0], t[1], t[2], i);
}
function mt(t) {
  return t;
}
function dt(t) {
  t[0] = t[1] = t[2] = t[3] = 0;
}
function _t(t, i) {
  return t[0] = t[1] = t[2] = 0, t[3] = i, t;
}
function _(t) {
  return t[3];
}
function Mt(t) {
  return t;
}
function $t(t, i, n, e) {
  return Z(t, i, n, e);
}
function pt(t, i, n) {
  return t !== n && (n[0] = t[0], n[1] = t[1], n[2] = t[2]), n[3] = t[3] + i, n;
}
function Pt(t, i, n) {
  return t !== n && L(t, n), n;
}
function bt(t, i) {
  return i;
}
function b(t, i, n) {
  if (i == null || !V(t, i, $)) return !1;
  let { t0: e, t1: r } = $;
  if ((e < 0 || r < e && r > 0) && (e = r), e < 0) return !1;
  if (n) {
    const { origin: s, direction: o } = i;
    n[0] = s[0] + o[0] * e, n[1] = s[1] + o[1] * e, n[2] = s[2] + o[2] * e;
  }
  return !0;
}
function wt(t, i, n) {
  const e = ot(i, n);
  if (!V(t, e, $)) return [];
  const { origin: r, direction: s } = e, { t0: o, t1: c } = $, a = (h) => {
    const m = g();
    return it(m, r, s, h), C(t, m, m);
  };
  return Math.abs(o - c) < J() ? [a(o)] : [a(o), a(c)];
}
const $ = { t0: 0, t1: 0 };
function V(t, i, n) {
  const { origin: e, direction: r } = i, s = St;
  s[0] = e[0] - t[0], s[1] = e[1] - t[1], s[2] = e[2] - t[2];
  const o = r[0] * r[0] + r[1] * r[1] + r[2] * r[2];
  if (o === 0) return !1;
  const c = 2 * (r[0] * s[0] + r[1] * s[1] + r[2] * s[2]), a = c * c - 4 * o * (s[0] * s[0] + s[1] * s[1] + s[2] * s[2] - t[3] * t[3]);
  if (a < 0) return !1;
  const h = Math.sqrt(a);
  return n.t0 = (-c - h) / (2 * o), n.t1 = (-c + h) / (2 * o), !0;
}
const St = g();
function qt(t, i) {
  return b(t, i, null);
}
function kt(t, i, n) {
  if (b(t, i, n)) return n;
  const e = z(t, i, u.get());
  return p(n, i.origin, d(u.get(), i.direction, I(i.origin, e) / l(i.direction))), n;
}
function z(t, i, n) {
  const e = u.get(), r = et.get();
  q(e, i.origin, i.direction);
  const s = _(t);
  q(n, e, i.origin), d(n, n, 1 / l(n) * s);
  const o = B(t, i.origin), c = rt(i.origin, n);
  return K(r, c + o, e), Q(n, n, r), n;
}
function xt(t, i, n, e) {
  const r = _(t), s = r * r, o = i + 0.5 * Math.PI, c = n * n + s - 2 * Math.cos(o) * n * r, a = Math.sqrt(c), h = c - s;
  if (h <= 0) return 0.5;
  const m = Math.sqrt(h), N = Math.acos(m / a) - Math.asin(r / (a / Math.sin(o)));
  return Math.min(1, (N + 0.5 * e) / e);
}
function yt(t, i, n) {
  return b(t, i, n) ? n : (at(i, t, n), C(t, n, n));
}
function C(t, i, n) {
  const e = f(u.get(), i, t), r = d(u.get(), e, t[3] / l(e));
  return p(n, r, t);
}
function At(t, i) {
  const n = f(u.get(), i, t), e = U(n), r = t[3] * t[3];
  return Math.sqrt(Math.abs(e - r));
}
function B(t, i) {
  const n = f(u.get(), i, t), e = l(n), r = _(t), s = r + Math.abs(r - e);
  return W(r / s);
}
const w = g();
function D(t, i, n, e) {
  const r = f(w, i, t);
  switch (n) {
    case M.X: {
      const s = E(r, w)[2];
      return k(e, -Math.sin(s), Math.cos(s), 0);
    }
    case M.Y: {
      const s = E(r, w), o = s[1], c = s[2], a = Math.sin(o);
      return k(e, -a * Math.cos(c), -a * Math.sin(c), Math.cos(o));
    }
    case M.Z:
      return O(e, r);
    default:
      return;
  }
}
function F(t, i) {
  const n = f(y, i, t);
  return l(n) - t[3];
}
function Ct(t, i, n, e) {
  const r = F(t, i), s = D(t, i, M.Z, y), o = d(y, s, n - r);
  return p(e, i, o);
}
function Rt(t, i) {
  const n = tt(t, i), e = _(t);
  return n <= e * e;
}
function jt(t, i, n = X()) {
  const e = I(t, i), r = t[3], s = i[3];
  return e + s < r ? (x(n, t), n) : e + r < s ? (x(n, i), n) : (nt(n, t, i, (e + s - r) / (2 * e)), n[3] = (e + r + s) / 2, n);
}
const y = g(), vt = A(), It = Object.freeze(Object.defineProperty({ __proto__: null, NullSphere: ft, altitudeAt: F, angleToSilhouette: B, axisAt: D, cameraFrustumCoverage: xt, clear: dt, closestPoint: yt, closestPointOnSilhouette: z, containsPoint: Rt, copy: L, create: A, distanceToSilhouette: At, elevate: pt, equals: gt, exactEquals: ht, fromCenterAndRadius: lt, fromRadius: _t, fromValues: $t, getCenter: Mt, getExtent: bt, getRadius: _, intersectLine: wt, intersectRay: b, intersectRayClosestSilhouette: kt, intersectsRay: qt, projectPoint: C, setAltitudeAt: Ct, setExtent: Pt, tmpSphere: vt, union: jt, wrap: mt }, Symbol.toStringTag, { value: "Module" }));
export {
  C as $,
  A as E,
  qt as H,
  wt as I,
  _ as N,
  lt as O,
  mt as T,
  Mt as U,
  $t as V,
  ht as _,
  L as a,
  P as b,
  It as f,
  Rt as i,
  Xt as k,
  st as s,
  Yt as v,
  Zt as w
};
//# sourceMappingURL=sphere-C5nRNjej.js.map
