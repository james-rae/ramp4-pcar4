import { G as h$1 } from './geometryEngineBase-BlwRd40r.js';
import { hydratedAdapter as r$1 } from './hydrated-CvWJDyV6.js';
import './main-DFC4KtAD.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function t(n){return Array.isArray(n)?n[0].spatialReference:n&&n.spatialReference}function r(e){return h$1.extendedSpatialReferenceInfo(e)}function u(r,u){return h$1.clip(r$1,t(r),r,u)}function i(r,u){return h$1.cut(r$1,t(r),r,u)}function c(r,u){return h$1.contains(r$1,t(r),r,u)}function o(r,u){return h$1.crosses(r$1,t(r),r,u)}function f(r,u,i){return h$1.distance(r$1,t(r),r,u,i)}function s(r,u){return h$1.equals(r$1,t(r),r,u)}function a(r,u){return h$1.intersects(r$1,t(r),r,u)}function l(r,u){return h$1.touches(r$1,t(r),r,u)}function p(r,u){return h$1.within(r$1,t(r),r,u)}function d(r,u){return h$1.disjoint(r$1,t(r),r,u)}function m(r,u){return h$1.overlaps(r$1,t(r),r,u)}function g(r,u,i){return h$1.relate(r$1,t(r),r,u,i)}function h(r){return h$1.isSimple(r$1,t(r),r)}function w(r){return h$1.simplify(r$1,t(r),r)}function R(r,u=!1){return h$1.convexHull(r$1,t(r),r,u)}function x(r,u){return h$1.difference(r$1,t(r),r,u)}function y(r,u){return h$1.symmetricDifference(r$1,t(r),r,u)}function S(r,u){return h$1.intersect(r$1,t(r),r,u)}function A(r,u=null){return h$1.union(r$1,t(r),r,u)}function D(r,u,i,c,o,f){return h$1.offset(r$1,t(r),r,u,i,c,o,f)}function j(r,u,i,c=!1){return h$1.buffer(r$1,t(r),r,u,i,c)}function E(r,u,i,c,o,f){return h$1.geodesicBuffer(r$1,t(r),r,u,i,c,o,f)}function J(r,u,i=!0){return h$1.nearestCoordinate(r$1,t(r),r,u,i)}function L(r,u){return h$1.nearestVertex(r$1,t(r),r,u)}function N(r,u,i,c){return h$1.nearestVertices(r$1,t(r),r,u,i,c)}function O(n){return "xmin"in n?"center"in n?n.center:null:"x"in n?n:"extent"in n?n.extent?.center??null:null}function T(e,t,r){if(null==e)throw new F;const u=e.spatialReference;if(null==(r=r??O(e)))throw new F;const i=e.constructor.fromJSON(h$1.rotate(e,t,r));return i.spatialReference=u,i}function V(e,t){if(null==e)throw new F;const r=e.spatialReference;if(null==(t=t??O(e)))throw new F;const u=e.constructor.fromJSON(h$1.flipHorizontal(e,t));return u.spatialReference=r,u}function v(e,t){if(null==e)throw new F;const r=e.spatialReference;if(null==(t=t??O(e)))throw new F;const u=e.constructor.fromJSON(h$1.flipVertical(e,t));return u.spatialReference=r,u}function z(r,u,i,c){return h$1.generalize(r$1,t(r),r,u,i,c)}function B(r,u,i){return h$1.densify(r$1,t(r),r,u,i)}function H(r,u,i,c=0){return h$1.geodesicDensify(r$1,t(r),r,u,i,c)}function I(r,u){return h$1.planarArea(r$1,t(r),r,u)}function b(r,u){return h$1.planarLength(r$1,t(r),r,u)}function k(r,u,i){return h$1.geodesicArea(r$1,t(r),r,u,i)}function q(r,u,i){return h$1.geodesicLength(r$1,t(r),r,u,i)}function C(r,u){return h$1.intersectLinesToPoints(r$1,t(r),r,u)}function G(e,t){h$1.changeDefaultSpatialReferenceTolerance(e,t);}function P(e){h$1.clearDefaultSpatialReferenceTolerance(e);}class F extends Error{constructor(){super("Illegal Argument Exception");}}

export { j as buffer, G as changeDefaultSpatialReferenceTolerance, P as clearDefaultSpatialReferenceTolerance, u as clip, c as contains, R as convexHull, o as crosses, i as cut, B as densify, x as difference, d as disjoint, f as distance, s as equals, r as extendedSpatialReferenceInfo, V as flipHorizontal, v as flipVertical, z as generalize, k as geodesicArea, E as geodesicBuffer, H as geodesicDensify, q as geodesicLength, S as intersect, C as intersectLinesToPoints, a as intersects, h as isSimple, J as nearestCoordinate, L as nearestVertex, N as nearestVertices, D as offset, m as overlaps, I as planarArea, b as planarLength, g as relate, T as rotate, w as simplify, y as symmetricDifference, l as touches, A as union, p as within };
