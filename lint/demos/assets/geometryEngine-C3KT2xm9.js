import{cH as p,D as l}from"./main-COW1-tZE.js";import{G as n}from"./geometryEngineBase-8g0RzW7z.js";import{hydratedAdapter as r}from"./hydrated-LpNDyUtg.js";import"./preload-helper-ExcqyqRp.js";import"./_commonjsHelpers-DCkdB7M8.js";function i(e){const t=Array.isArray(e)?e[0].spatialReference:e.spatialReference;return t?p(l,t):l.WGS84}function R(e){return n.extendedSpatialReferenceInfo(e)}function x(e,t){return n.clip(r,i(e),e,t)}function S(e,t){return n.cut(r,i(e),e,t)}function y(e,t){return n.contains(r,i(e),e,t)}function D(e,t){return n.crosses(r,i(e),e,t)}function A(e,t,a){return n.distance(r,i(e),e,t,a)}function L(e,t){return n.equals(r,i(e),e,t)}function T(e,t){return n.intersects(r,i(e),e,t)}function V(e,t){return n.touches(r,i(e),e,t)}function H(e,t){return n.within(r,i(e),e,t)}function v(e,t){return n.disjoint(r,i(e),e,t)}function z(e,t){return n.overlaps(r,i(e),e,t)}function I(e,t,a){return n.relate(r,i(e),e,t,a)}function J(e){return n.isSimple(r,i(e),e)}function N(e){return n.simplify(r,i(e),e)}function O(e,t=!1){return n.convexHull(r,i(e),e,t)}function b(e,t){return n.difference(r,i(e),e,t)}function j(e,t){return n.symmetricDifference(r,i(e),e,t)}function q(e,t){return n.intersect(r,i(e),e,t)}function B(e,t=null){return n.union(r,i(e),e,t)}function C(e,t,a,s,c,u){return n.offset(r,i(e),e,t,a,s,c,u)}function E(e,t,a,s=!1){return n.buffer(r,i(e),e,t,a,s)}function G(e,t,a,s,c,u){return n.geodesicBuffer(r,i(e),e,t,a,s,c,u)}function P(e,t,a=!0){return n.nearestCoordinate(r,i(e),e,t,a)}function W(e,t){return n.nearestVertex(r,i(e),e,t)}function $(e,t,a,s){return n.nearestVertices(r,i(e),e,t,a,s)}function f(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent?.center??null:null}function k(e,t,a){if(e==null)throw new o;const s=e.spatialReference;if((a=a??f(e))==null)throw new o;const c=e.constructor.fromJSON(n.rotate(e,t,a));return c.spatialReference=s,c}function F(e,t){if(e==null)throw new o;const a=e.spatialReference;if((t=t??f(e))==null)throw new o;const s=e.constructor.fromJSON(n.flipHorizontal(e,t));return s.spatialReference=a,s}function K(e,t){if(e==null)throw new o;const a=e.spatialReference;if((t=t??f(e))==null)throw new o;const s=e.constructor.fromJSON(n.flipVertical(e,t));return s.spatialReference=a,s}function M(e,t,a,s){return n.generalize(r,i(e),e,t,a,s)}function Q(e,t,a){return n.densify(r,i(e),e,t,a)}function U(e,t,a,s=0){return n.geodesicDensify(r,i(e),e,t,a,s)}function X(e,t){return n.planarArea(r,i(e),e,t)}function Y(e,t){return n.planarLength(r,i(e),e,t)}function Z(e,t,a){return n.geodesicArea(r,i(e),e,t,a)}function _(e,t,a){return n.geodesicLength(r,i(e),e,t,a)}function ee(e,t){return n.intersectLinesToPoints(r,i(e),e,t)}function te(e,t){n.changeDefaultSpatialReferenceTolerance(e,t)}function ne(e){n.clearDefaultSpatialReferenceTolerance(e)}class o extends Error{constructor(){super("Illegal Argument Exception")}}export{E as buffer,te as changeDefaultSpatialReferenceTolerance,ne as clearDefaultSpatialReferenceTolerance,x as clip,y as contains,O as convexHull,D as crosses,S as cut,Q as densify,b as difference,v as disjoint,A as distance,L as equals,R as extendedSpatialReferenceInfo,F as flipHorizontal,K as flipVertical,M as generalize,Z as geodesicArea,G as geodesicBuffer,U as geodesicDensify,_ as geodesicLength,q as intersect,ee as intersectLinesToPoints,T as intersects,J as isSimple,P as nearestCoordinate,W as nearestVertex,$ as nearestVertices,C as offset,z as overlaps,X as planarArea,Y as planarLength,I as relate,k as rotate,N as simplify,j as symmetricDifference,V as touches,B as union,H as within};