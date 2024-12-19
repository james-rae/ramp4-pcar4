import { G as e } from './geometryEngineBase-DtPgLMZr.js';
import { iq as t$1 } from './main-jdFDoOPu.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(n){return e.extendedSpatialReferenceInfo(n)}function r(t,r,i){return e.clip(t$1,t,r,i)}function i(t,r,i){return e.cut(t$1,t,r,i)}function a(t,r,i){return e.contains(t$1,t,r,i)}function o(t,r,i){return e.crosses(t$1,t,r,i)}function s(t,r,i,a){return e.distance(t$1,t,r,i,a)}function u(t,r,i){return e.equals(t$1,t,r,i)}function c(t,r,i){return e.intersects(t$1,t,r,i)}function f(t,r,i){return e.touches(t$1,t,r,i)}function l(t,r,i){return e.within(t$1,t,r,i)}function p(t,r,i){return e.disjoint(t$1,t,r,i)}function g(t,r,i){return e.overlaps(t$1,t,r,i)}function d(t,r,i,a){return e.relate(t$1,t,r,i,a)}function m(t,r){return e.isSimple(t$1,t,r)}function h(t,r){return e.simplify(t$1,t,r)}function y(t,r,i=!1){return e.convexHull(t$1,t,r,i)}function x(t,r,i){return e.difference(t$1,t,r,i)}function S(t,r,i){return e.symmetricDifference(t$1,t,r,i)}function w(t,r,i){return e.intersect(t$1,t,r,i)}function A(t,r,i=null){return e.union(t$1,t,r,i)}function D(t,r,i,a,o,s,u){return e.offset(t$1,t,r,i,a,o,s,u)}function R(t,r,i,a,o=!1){return e.buffer(t$1,t,r,i,a,o)}function j(t,r,i,a,o,s,u){return e.geodesicBuffer(t$1,t,r,i,a,o,s,u)}function E(t,r,i,a=!0){return e.nearestCoordinate(t$1,t,r,i,a)}function L(t,r,i){return e.nearestVertex(t$1,t,r,i)}function T(t,r,i,a,o){return e.nearestVertices(t$1,t,r,i,a,o)}function b(n,t,r,i){if(null==t||null==i)throw new Error("Illegal Argument Exception");const a=e.rotate(t,r,i);return a.spatialReference=n,a}function v(n,t,r){if(null==t||null==r)throw new Error("Illegal Argument Exception");const i=e.flipHorizontal(t,r);return i.spatialReference=n,i}function z(n,t,r){if(null==t||null==r)throw new Error("Illegal Argument Exception");const i=e.flipVertical(t,r);return i.spatialReference=n,i}function I(t,r,i,a,o){return e.generalize(t$1,t,r,i,a,o)}function V(t,r,i,a){return e.densify(t$1,t,r,i,a)}function H(t,r,i,a,o=0){return e.geodesicDensify(t$1,t,r,i,a,o)}function B(t,r,i){return e.planarArea(t$1,t,r,i)}function _(t,r,i){return e.planarLength(t$1,t,r,i)}function q(t,r,i,a){return e.geodesicArea(t$1,t,r,i,a)}function C(t,r,i,a){return e.geodesicLength(t$1,t,r,i,a)}function P(t,r,i){return null==r||null==i?[]:e.intersectLinesToPoints(t$1,t,r,i)}function G(n,t){e.changeDefaultSpatialReferenceTolerance(n,t);}function M(n){e.clearDefaultSpatialReferenceTolerance(n);}const O=Object.freeze(Object.defineProperty({__proto__:null,buffer:R,changeDefaultSpatialReferenceTolerance:G,clearDefaultSpatialReferenceTolerance:M,clip:r,contains:a,convexHull:y,crosses:o,cut:i,densify:V,difference:x,disjoint:p,distance:s,equals:u,extendedSpatialReferenceInfo:t,flipHorizontal:v,flipVertical:z,generalize:I,geodesicArea:q,geodesicBuffer:j,geodesicDensify:H,geodesicLength:C,intersect:w,intersectLinesToPoints:P,intersects:c,isSimple:m,nearestCoordinate:E,nearestVertex:L,nearestVertices:T,offset:D,overlaps:g,planarArea:B,planarLength:_,relate:d,rotate:b,simplify:h,symmetricDifference:S,touches:f,union:A,within:l},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/

const geometryEngineJSON = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	buffer: R,
	changeDefaultSpatialReferenceTolerance: G,
	clearDefaultSpatialReferenceTolerance: M,
	clip: r,
	contains: a,
	convexHull: y,
	crosses: o,
	cut: i,
	densify: V,
	difference: x,
	disjoint: p,
	distance: s,
	equals: u,
	extendedSpatialReferenceInfo: t,
	flipHorizontal: v,
	flipVertical: z,
	generalize: I,
	geodesicArea: q,
	geodesicBuffer: j,
	geodesicDensify: H,
	geodesicLength: C,
	intersect: w,
	intersectLinesToPoints: P,
	intersects: c,
	isSimple: m,
	nearestCoordinate: E,
	nearestVertex: L,
	nearestVertices: T,
	offset: D,
	overlaps: g,
	planarArea: B,
	planarLength: _,
	relate: d,
	rotate: b,
	simplify: h,
	symmetricDifference: S,
	touches: f,
	union: A,
	within: l
}, Symbol.toStringTag, { value: 'Module' }));

export { O, geometryEngineJSON as g };
