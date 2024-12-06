import { o as we, i as ie, d as de, K, a, r } from './languageUtils-B9ynR-fa.js';
import { s } from './TimeOnly-CWeyHmrP.js';
import { u, f } from './SpatialFilter-uHvOGVk6.js';
import { fq as n } from './main-jdFDoOPu.js';
import { relate as R$1, crosses as m, touches as S$1, within as x, overlaps as O, contains as p, intersects as h$1 } from './geometryEngineAsync-mMIfPxDV.js';
import './ImmutableArray-JzRZGad4.js';
import './shared-DTvdxlgz.js';
import './number-CjhpDVXB.js';
import './arcadeUtils-fvrjXtss.js';
import './preload-helper-dJJaZANz.js';
import './WhereClause-Cmgb1p74.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function h(e){return e instanceof n}function S(i,a$1,c,S){return S(i,a$1,(async(S,R,v)=>{if(v.length<2)throw new a(i,r.WrongNumberOfParameters,a$1);if(null===(v=we(v))[0]&&null===v[1])return !1;if(K(v[0])){if(v[1]instanceof n)return new f({parentfeatureset:v[0],relation:c,relationGeom:v[1]});if(null===v[1])return new u({parentfeatureset:v[0]});throw new a(i,r.InvalidParameter,a$1)}if(h(v[0])){if(h(v[1])){switch(c){case"esriSpatialRelEnvelopeIntersects":return h$1(s(v[0]),s(v[1]));case"esriSpatialRelIntersects":return h$1(v[0],v[1]);case"esriSpatialRelContains":return p(v[0],v[1]);case"esriSpatialRelOverlaps":return O(v[0],v[1]);case"esriSpatialRelWithin":return x(v[0],v[1]);case"esriSpatialRelTouches":return S$1(v[0],v[1]);case"esriSpatialRelCrosses":return m(v[0],v[1])}throw new a(i,r.InvalidParameter,a$1)}if(K(v[1]))return new f({parentfeatureset:v[1],relation:c,relationGeom:v[0]});if(null===v[1])return !1;throw new a(i,r.InvalidParameter,a$1)}if(null===v[0]){if(K(v[1]))return new u({parentfeatureset:v[1]});if(v[1]instanceof n||null===v[1])return !1}throw new a(i,r.InvalidParameter,a$1)}))}function R(t){"async"===t.mode&&(t.functions.intersects=function(e,n){return S(e,n,"esriSpatialRelIntersects",t.standardFunctionAsync)},t.functions.envelopeintersects=function(e,n){return S(e,n,"esriSpatialRelEnvelopeIntersects",t.standardFunctionAsync)},t.signatures.push({name:"envelopeintersects",min:2,max:2}),t.functions.contains=function(e,n){return S(e,n,"esriSpatialRelContains",t.standardFunctionAsync)},t.functions.overlaps=function(e,n){return S(e,n,"esriSpatialRelOverlaps",t.standardFunctionAsync)},t.functions.within=function(e,n){return S(e,n,"esriSpatialRelWithin",t.standardFunctionAsync)},t.functions.touches=function(e,n){return S(e,n,"esriSpatialRelTouches",t.standardFunctionAsync)},t.functions.crosses=function(e,n){return S(e,n,"esriSpatialRelCrosses",t.standardFunctionAsync)},t.functions.relate=function(u$1,f){return t.standardFunctionAsync(u$1,f,(async(t,p,m)=>{if(m=we(m),ie(m,3,3,u$1,f),h(m[0])&&h(m[1]))return R$1(m[0],m[1],de(m[2]));if(m[0]instanceof n&&null===m[1])return !1;if(m[1]instanceof n&&null===m[0])return !1;if(K(m[0])&&null===m[1])return new u({parentfeatureset:m[0]});if(K(m[1])&&null===m[0])return new u({parentfeatureset:m[1]});if(K(m[0])&&m[1]instanceof n)return m[0].relate(m[1],de(m[2]));if(K(m[1])&&m[0]instanceof n)return m[1].relate(m[0],de(m[2]));if(null===m[0]&&null===m[1])return !1;throw new a(u$1,r.InvalidParameter,f)}))});}

export { R as registerFunctions };
