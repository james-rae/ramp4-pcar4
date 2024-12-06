import { b2 as p, b1 as l } from "./main-DZxT3i7S.js";
import { G as n } from "./geometryEngineBase-C9QoUrQj.js";
import { hydratedAdapter as r } from "./hydrated-D2oRICvs.js";
function i(e) {
  const t = Array.isArray(e) ? e[0].spatialReference : e.spatialReference;
  return t ? p(l, t) : l.WGS84;
}
function h(e) {
  return n.extendedSpatialReferenceInfo(e);
}
function w(e, t) {
  return n.clip(r, i(e), e, t);
}
function R(e, t) {
  return n.cut(r, i(e), e, t);
}
function x(e, t) {
  return n.contains(r, i(e), e, t);
}
function S(e, t) {
  return n.crosses(r, i(e), e, t);
}
function y(e, t, a) {
  return n.distance(r, i(e), e, t, a);
}
function A(e, t) {
  return n.equals(r, i(e), e, t);
}
function D(e, t) {
  return n.intersects(r, i(e), e, t);
}
function L(e, t) {
  return n.touches(r, i(e), e, t);
}
function T(e, t) {
  return n.within(r, i(e), e, t);
}
function V(e, t) {
  return n.disjoint(r, i(e), e, t);
}
function b(e, t) {
  return n.overlaps(r, i(e), e, t);
}
function v(e, t, a) {
  return n.relate(r, i(e), e, t, a);
}
function z(e) {
  return n.isSimple(r, i(e), e);
}
function H(e) {
  return n.simplify(r, i(e), e);
}
function I(e, t = !1) {
  return n.convexHull(r, i(e), e, t);
}
function J(e, t) {
  return n.difference(r, i(e), e, t);
}
function N(e, t) {
  return n.symmetricDifference(r, i(e), e, t);
}
function O(e, t) {
  return n.intersect(r, i(e), e, t);
}
function j(e, t = null) {
  return n.union(r, i(e), e, t);
}
function q(e, t, a, s, c, u) {
  return n.offset(r, i(e), e, t, a, s, c, u);
}
function B(e, t, a, s = !1) {
  return n.buffer(r, i(e), e, t, a, s);
}
function C(e, t, a, s, c, u) {
  return n.geodesicBuffer(r, i(e), e, t, a, s, c, u);
}
function E(e, t, a = !0) {
  return n.nearestCoordinate(r, i(e), e, t, a);
}
function G(e, t) {
  return n.nearestVertex(r, i(e), e, t);
}
function P(e, t, a, s) {
  return n.nearestVertices(r, i(e), e, t, a, s);
}
function f(e) {
  return "xmin" in e ? "center" in e ? e.center : null : "x" in e ? e : "extent" in e ? e.extent?.center ?? null : null;
}
function W(e, t, a) {
  if (e == null) throw new o();
  const s = e.spatialReference;
  if ((a = a ?? f(e)) == null) throw new o();
  const c = e.constructor.fromJSON(n.rotate(e, t, a));
  return c.spatialReference = s, c;
}
function $(e, t) {
  if (e == null) throw new o();
  const a = e.spatialReference;
  if ((t = t ?? f(e)) == null) throw new o();
  const s = e.constructor.fromJSON(n.flipHorizontal(e, t));
  return s.spatialReference = a, s;
}
function k(e, t) {
  if (e == null) throw new o();
  const a = e.spatialReference;
  if ((t = t ?? f(e)) == null) throw new o();
  const s = e.constructor.fromJSON(n.flipVertical(e, t));
  return s.spatialReference = a, s;
}
function F(e, t, a, s) {
  return n.generalize(r, i(e), e, t, a, s);
}
function K(e, t, a) {
  return n.densify(r, i(e), e, t, a);
}
function M(e, t, a, s = 0) {
  return n.geodesicDensify(r, i(e), e, t, a, s);
}
function Q(e, t) {
  return n.planarArea(r, i(e), e, t);
}
function U(e, t) {
  return n.planarLength(r, i(e), e, t);
}
function X(e, t, a) {
  return n.geodesicArea(r, i(e), e, t, a);
}
function Y(e, t, a) {
  return n.geodesicLength(r, i(e), e, t, a);
}
function Z(e, t) {
  return n.intersectLinesToPoints(r, i(e), e, t);
}
function _(e, t) {
  n.changeDefaultSpatialReferenceTolerance(e, t);
}
function ee(e) {
  n.clearDefaultSpatialReferenceTolerance(e);
}
class o extends Error {
  constructor() {
    super("Illegal Argument Exception");
  }
}
export {
  B as buffer,
  _ as changeDefaultSpatialReferenceTolerance,
  ee as clearDefaultSpatialReferenceTolerance,
  w as clip,
  x as contains,
  I as convexHull,
  S as crosses,
  R as cut,
  K as densify,
  J as difference,
  V as disjoint,
  y as distance,
  A as equals,
  h as extendedSpatialReferenceInfo,
  $ as flipHorizontal,
  k as flipVertical,
  F as generalize,
  X as geodesicArea,
  C as geodesicBuffer,
  M as geodesicDensify,
  Y as geodesicLength,
  O as intersect,
  Z as intersectLinesToPoints,
  D as intersects,
  z as isSimple,
  E as nearestCoordinate,
  G as nearestVertex,
  P as nearestVertices,
  q as offset,
  b as overlaps,
  Q as planarArea,
  U as planarLength,
  v as relate,
  W as rotate,
  H as simplify,
  N as symmetricDifference,
  L as touches,
  j as union,
  T as within
};
//# sourceMappingURL=geometryEngine-DnF4ZSkY.js.map
