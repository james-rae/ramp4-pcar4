import { aq as x, dX as E, e0 as u, dZ as l, d$ as p, ea as rn, eb as P, ec as an, ed as h, ee as cn, ef as un, al as $, dY as k, H as S, eg as gn, eh as bn, ei as m, ej as fn, ek as O, ao as D, d_ as G, ap as M, G as ln } from "./main-DZxT3i7S.js";
import { s as q, w as pn } from "./sphere-C5nRNjej.js";
import { e as X } from "./mat4f64-Dn1WEGBx.js";
import { v as dn, A as R, M as mn } from "./lineSegment-DEQPvx1b.js";
import { M as T, D as $n, h as hn, P as Y, c as r, U as In, x as Pn, q as Mn, w as wn, z as Z, H as Nn, f as w, O as N, y as vn } from "./plane-D2096W83.js";
const V = () => ln.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");
class Tn {
  constructor() {
    this.plane = T(), this.origin = M(), this.basis1 = M(), this.basis2 = M();
  }
}
const yn = Tn;
function I(n = on) {
  return { plane: T(n.plane), origin: E(n.origin), basis1: E(n.basis1), basis2: E(n.basis2) };
}
function An(n, e, i) {
  const t = Gn.get();
  return t.origin = n, t.basis1 = e, t.basis2 = i, t.plane = $n(0, 0, 0, 0), A(t), t;
}
function y(n, e = I()) {
  return K(n.origin, n.basis1, n.basis2, e);
}
function _n(n, e) {
  u(e.origin, n.origin), u(e.basis1, n.basis1), u(e.basis2, n.basis2), hn(e.plane, n.plane);
}
function K(n, e, i, t = I()) {
  return u(t.origin, n), u(t.basis1, e), u(t.basis2, i), A(t), Bn(t, "fromValues()"), t;
}
function A(n) {
  Y(n.basis2, n.basis1, n.origin, n.plane);
}
function L(n, e, i) {
  n !== i && y(n, i);
  const t = l(r.get(), f(n), e);
  return p(i.origin, i.origin, t), i.plane[3] -= e, i;
}
function xn(n, e, i) {
  return W(e, i), L(i, z(n, n.origin), i), i;
}
function En(n, e) {
  const i = n.basis1[0], t = n.basis2[1], [s, o] = n.origin;
  return rn(s - i, o - t, s + i, o + t, e);
}
function W(n, e = I()) {
  const i = (n[2] - n[0]) / 2, t = (n[3] - n[1]) / 2;
  return P(e.origin, n[0] + i, n[1] + t, 0), P(e.basis1, i, 0, 0), P(e.basis2, 0, t, 0), In(0, 0, 1, 0, e.plane), e;
}
function F(n, e, i) {
  return !!Pn(n.plane, e, i) && tn(n, i);
}
function Sn(n, e, i) {
  if (F(n, e, i)) return i;
  const t = J(n, e, r.get());
  return p(i, e.origin, l(r.get(), e.direction, an(e.origin, t) / h(e.direction))), i;
}
function J(n, e, i) {
  const t = v.get();
  sn(n, e, t, v.get());
  let s = Number.POSITIVE_INFINITY;
  for (const o of B) {
    const a = C(n, o, _.get()), g = r.get();
    if (Mn(t, a, g)) {
      const c = cn(r.get(), e.origin, g), b = Math.abs(un($(e.direction, c)));
      b < s && (s = b, u(i, g));
    }
  }
  return s === Number.POSITIVE_INFINITY ? Q(n, e, i) : i;
}
function On(n, e) {
  return (e - n) / e;
}
function Q(n, e, i) {
  if (F(n, e, i)) return i;
  const t = v.get(), s = v.get();
  sn(n, e, t, s);
  let o = Number.POSITIVE_INFINITY;
  for (const a of B) {
    const g = C(n, a, _.get()), c = r.get();
    if (wn(t, g, c)) {
      const b = pn(e, c);
      if (!Z(s, c)) continue;
      b < o && (o = b, u(i, c));
    }
  }
  return H(n, e.origin) < o && nn(n, e.origin, i), i;
}
function nn(n, e, i) {
  const t = Nn(n.plane, e, r.get()), s = R(U(n, n.basis1), t, -1, 1, r.get()), o = R(U(n, n.basis2), t, -1, 1, r.get());
  return k(i, p(r.get(), s, o), n.origin), i;
}
function en(n, e, i) {
  const { origin: t, basis1: s, basis2: o } = n, a = k(r.get(), e, t), g = w(s, a), c = w(o, a), b = w(f(n), a);
  return P(i, g, c, b);
}
function H(n, e) {
  const i = en(n, e, r.get()), { basis1: t, basis2: s } = n, o = h(t), a = h(s), g = Math.max(Math.abs(i[0]) - o, 0), c = Math.max(Math.abs(i[1]) - a, 0), b = i[2];
  return g * g + c * c + b * b;
}
function Vn(n, e) {
  return Math.sqrt(H(n, e));
}
function jn(n, e) {
  let i = Number.NEGATIVE_INFINITY;
  for (const t of B) {
    const s = C(n, t, _.get()), o = mn(s, e);
    o > i && (i = o);
  }
  return Math.sqrt(i);
}
function Yn(n, e) {
  return Z(n.plane, e) && tn(n, e);
}
function kn(n, e, i, t) {
  return Cn(n, i, t);
}
function z(n, e) {
  const i = -n.plane[3];
  return w(f(n), e) - i;
}
function qn(n, e, i, t) {
  const s = z(n, e), o = l(Dn, f(n), i - s);
  return p(t, e, o), t;
}
function Fn(n, e) {
  return S(n.basis1, e.basis1) && S(n.basis2, e.basis2) && S(n.origin, e.origin);
}
function Hn(n, e, i) {
  return n !== i && y(n, i), gn(d, e), bn(d, d), m(i.basis1, n.basis1, d), m(i.basis2, n.basis2, d), m(N(i.plane), N(n.plane), d), m(i.origin, n.origin, e), vn(i.plane, i.plane, i.origin), i;
}
function zn(n, e, i, t) {
  return n !== t && y(n, t), fn(j, e, i), m(t.basis1, n.basis1, j), m(t.basis2, n.basis2, j), A(t), t;
}
function f(n) {
  return N(n.plane);
}
function Cn(n, e, i) {
  switch (e) {
    case O.X:
      u(i, n.basis1), D(i, i);
      break;
    case O.Y:
      u(i, n.basis2), D(i, i);
      break;
    case O.Z:
      u(i, f(n));
  }
  return i;
}
function tn(n, e) {
  const i = k(r.get(), e, n.origin), t = G(n.basis1), s = G(n.basis2), o = $(n.basis1, i), a = $(n.basis2, i);
  return -o - t < 0 && o - t < 0 && -a - s < 0 && a - s < 0;
}
function U(n, e) {
  const i = _.get();
  return u(i.origin, n.origin), u(i.vector, e), i;
}
function C(n, e, i) {
  const { basis1: t, basis2: s, origin: o } = n, a = l(r.get(), t, e.origin[0]), g = l(r.get(), s, e.origin[1]);
  p(i.origin, a, g), p(i.origin, i.origin, o);
  const c = l(r.get(), t, e.direction[0]), b = l(r.get(), s, e.direction[1]);
  return l(i.vector, p(c, c, b), 2), i;
}
function Bn(n, e) {
  Math.abs($(n.basis1, n.basis2) / (h(n.basis1) * h(n.basis2))) > 1e-6 && V().warn(e, "Provided basis vectors are not perpendicular"), Math.abs($(n.basis1, f(n))) > 1e-6 && V().warn(e, "Basis vectors and plane normal are not perpendicular"), Math.abs(-$(f(n), n.origin) - n.plane[3]) > 1e-6 && V().warn(e, "Plane offset is not consistent with plane origin");
}
function sn(n, e, i, t) {
  const s = f(n);
  Y(s, e.direction, e.origin, i), Y(N(i), s, e.origin, t);
}
const on = { plane: T(), origin: x(0, 0, 0), basis1: x(1, 0, 0), basis2: x(0, 1, 0) }, v = new q(T), _ = new q(dn), Dn = M(), Gn = new q(() => I()), B = [{ origin: [-1, -1], direction: [1, 0] }, { origin: [1, -1], direction: [0, 1] }, { origin: [1, 1], direction: [-1, 0] }, { origin: [-1, 1], direction: [0, -1] }], d = X(), j = X(), Ln = Object.freeze(Object.defineProperty({ __proto__: null, BoundedPlaneClass: yn, altitudeAt: z, axisAt: kn, cameraFrustumCoverage: On, closestPoint: Q, closestPointOnSilhouette: J, copy: y, copyWithoutVerify: _n, create: I, distance: Vn, distance2: H, distanceToSilhouette: jn, elevate: L, equals: Fn, extrusionContainsPoint: Yn, fromAABoundingRect: W, fromValues: K, getExtent: En, intersectRay: F, intersectRayClosestSilhouette: Sn, normal: f, projectPoint: nn, projectPointLocal: en, rotate: zn, setAltitudeAt: qn, setExtent: xn, transform: Hn, up: on, updateUnboundedPlane: A, wrap: An }, Symbol.toStringTag, { value: "Module" }));
export {
  K as J,
  A as K,
  I as W,
  y as Z,
  Ln as k
};
//# sourceMappingURL=boundedPlane-CsQkwpKS.js.map
