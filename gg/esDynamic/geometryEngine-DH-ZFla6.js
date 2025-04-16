import{e1 as r,bq as d,M as p}from"./main-DTtQVgOw.js";import{G as e}from"./geometryEngineBase-DueYg7ux.js";import{hydratedAdapter as i}from"./hydrated-DljSGdyQ.js";function a(n){const t=Array.isArray(n)?n[0].spatialReference:n.spatialReference;return t?d(p,t):p.WGS84}function m(n){return e.extendedSpatialReferenceInfo(n)}function g(n,t){return r(n),e.clip(i,a(n),n,t)}function h(n,t){return r(n),e.cut(i,a(n),n,t)}function w(n,t){return r(n),r(t),e.contains(i,a(n),n,t)}function R(n,t){return r(n),r(t),e.crosses(i,a(n),n,t)}function x(n,t,s){return r(n),r(t),e.distance(i,a(n),n,t,s)}function S(n,t){return r(n),r(t),e.equals(i,a(n),n,t)}function y(n,t){return r(n),r(t),e.intersects(i,a(n),n,t)}function A(n,t){return r(n),r(t),e.touches(i,a(n),n,t)}function D(n,t){return r(n),r(t),e.within(i,a(n),n,t)}function L(n,t){return r(n),r(t),e.disjoint(i,a(n),n,t)}function T(n,t){return r(n),r(t),e.overlaps(i,a(n),n,t)}function V(n,t,s){return r(n),r(t),e.relate(i,a(n),n,t,s)}function v(n){return r(n),e.isSimple(i,a(n),n)}function z(n){return r(n),e.simplify(i,a(n),n)}function H(n,t=!1){return e.convexHull(i,a(n),n,t)}function b(n,t){return r(t),e.difference(i,a(n),n,t)}function q(n,t){return r(t),e.symmetricDifference(i,a(n),n,t)}function I(n,t){return r(t),e.intersect(i,a(n),n,t)}function J(n){return e.union(i,a(n),n)}function N(n,t,s,c,o,f){return e.offset(i,a(n),n,t,s,c,o,f)}function O(n,t,s,c=!1){return e.buffer(i,a(n),n,t,s,c)}function j(n,t,s,c,o,f){return e.geodesicBuffer(i,a(n),n,t,s,c,o,f)}function B(n,t,s=!0){return r(n),e.nearestCoordinate(i,a(n),n,t,s)}function C(n,t){return r(n),e.nearestVertex(i,a(n),n,t)}function E(n,t,s,c){return r(n),e.nearestVertices(i,a(n),n,t,s,c)}function l(n){return"xmin"in n?"center"in n?n.center:null:"x"in n?n:"extent"in n?n.extent?.center??null:null}function G(n,t,s){if(n==null)throw new u;const c=n.spatialReference;if((s=s??l(n))==null)throw new u;const o=n.constructor.fromJSON(e.rotate(n,t,s));return o.spatialReference=c,o}function P(n,t){if(n==null)throw new u;const s=n.spatialReference;if((t=t??l(n))==null)throw new u;const c=n.constructor.fromJSON(e.flipHorizontal(n,t));return c.spatialReference=s,c}function M(n,t){if(n==null)throw new u;const s=n.spatialReference;if((t=t??l(n))==null)throw new u;const c=n.constructor.fromJSON(e.flipVertical(n,t));return c.spatialReference=s,c}function W(n,t,s,c){return r(n),e.generalize(i,a(n),n,t,s,c)}function k(n,t,s){return r(n),e.densify(i,a(n),n,t,s)}function F(n,t,s,c=0){return r(n),e.geodesicDensify(i,a(n),n,t,s,c)}function K(n,t){return r(n),e.planarArea(i,a(n),n,t)}function Q(n,t){return r(n),e.planarLength(i,a(n),n,t)}function U(n,t,s){return r(n),e.geodesicArea(i,a(n),n,t,s)}function X(n,t,s){return r(n),e.geodesicLength(i,a(n),n,t,s)}function Y(n,t){return e.intersectLinesToPoints(i,a(n),n,t)}function Z(n,t){e.changeDefaultSpatialReferenceTolerance(n,t)}function _(n){e.clearDefaultSpatialReferenceTolerance(n)}class u extends Error{constructor(){super("Illegal Argument Exception")}}export{O as buffer,Z as changeDefaultSpatialReferenceTolerance,_ as clearDefaultSpatialReferenceTolerance,g as clip,w as contains,H as convexHull,R as crosses,h as cut,k as densify,b as difference,L as disjoint,x as distance,S as equals,m as extendedSpatialReferenceInfo,P as flipHorizontal,M as flipVertical,W as generalize,U as geodesicArea,j as geodesicBuffer,F as geodesicDensify,X as geodesicLength,I as intersect,Y as intersectLinesToPoints,y as intersects,v as isSimple,B as nearestCoordinate,C as nearestVertex,E as nearestVertices,N as offset,T as overlaps,K as planarArea,Q as planarLength,V as relate,G as rotate,z as simplify,q as symmetricDifference,A as touches,J as union,D as within};
