import{o as S,i as y,d as p,K as a,a as u,r as l}from"./languageUtils-B0BjhYMX.js";import{s as w}from"./TimeOnly-C4DXtAnK.js";import{u as c,f as h}from"./SpatialFilter-CwCM0XP2.js";import{cI as o}from"./main-COW1-tZE.js";import{relate as I,crosses as F,touches as A,within as P,overlaps as g,contains as C,intersects as R}from"./geometryEngineAsync-DauiOn7Y.js";import"./ImmutableArray-BPVd6ESQ.js";import"./shared-Z76MXpfN.js";import"./Field-BbM3YSMn.js";import"./fieldType-Rjx7u5H6.js";import"./number-20stla5E.js";import"./Query-B7QuQNj2.js";import"./TimeExtent-Netzf3WV.js";import"./UnknownTimeZone-DnLCB85J.js";import"./arcadeUtils-BIZMB8qN.js";import"./preload-helper-ExcqyqRp.js";import"./featureConversionUtils-5qY5C-9w.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FieldsIndex-CAs3Af8Z.js";import"./uuid-Cl5lrJ4c.js";import"./WhereClause-CfECb-3n.js";import"./workers-CrxYpYBd.js";function f(r){return r instanceof o}function s(r,t,i,d){return d(r,t,async(m,e,n)=>{if(n.length<2)throw new u(r,l.WrongNumberOfParameters,t);if((n=S(n))[0]===null&&n[1]===null)return!1;if(a(n[0])){if(n[1]instanceof o)return new h({parentfeatureset:n[0],relation:i,relationGeom:n[1]});if(n[1]===null)return new c({parentfeatureset:n[0]});throw new u(r,l.InvalidParameter,t)}if(f(n[0])){if(f(n[1])){switch(i){case"esriSpatialRelEnvelopeIntersects":return R(w(n[0]),w(n[1]));case"esriSpatialRelIntersects":return R(n[0],n[1]);case"esriSpatialRelContains":return C(n[0],n[1]);case"esriSpatialRelOverlaps":return g(n[0],n[1]);case"esriSpatialRelWithin":return P(n[0],n[1]);case"esriSpatialRelTouches":return A(n[0],n[1]);case"esriSpatialRelCrosses":return F(n[0],n[1])}throw new u(r,l.InvalidParameter,t)}if(a(n[1]))return new h({parentfeatureset:n[1],relation:i,relationGeom:n[0]});if(n[1]===null)return!1;throw new u(r,l.InvalidParameter,t)}if(n[0]===null){if(a(n[1]))return new c({parentfeatureset:n[1]});if(n[1]instanceof o||n[1]===null)return!1}throw new u(r,l.InvalidParameter,t)})}function X(r){r.mode==="async"&&(r.functions.intersects=function(t,i){return s(t,i,"esriSpatialRelIntersects",r.standardFunctionAsync)},r.functions.envelopeintersects=function(t,i){return s(t,i,"esriSpatialRelEnvelopeIntersects",r.standardFunctionAsync)},r.signatures.push({name:"envelopeintersects",min:2,max:2}),r.functions.contains=function(t,i){return s(t,i,"esriSpatialRelContains",r.standardFunctionAsync)},r.functions.overlaps=function(t,i){return s(t,i,"esriSpatialRelOverlaps",r.standardFunctionAsync)},r.functions.within=function(t,i){return s(t,i,"esriSpatialRelWithin",r.standardFunctionAsync)},r.functions.touches=function(t,i){return s(t,i,"esriSpatialRelTouches",r.standardFunctionAsync)},r.functions.crosses=function(t,i){return s(t,i,"esriSpatialRelCrosses",r.standardFunctionAsync)},r.functions.relate=function(t,i){return r.standardFunctionAsync(t,i,async(d,m,e)=>{if(e=S(e),y(e,3,3,t,i),f(e[0])&&f(e[1]))return I(e[0],e[1],p(e[2]));if(e[0]instanceof o&&e[1]===null||e[1]instanceof o&&e[0]===null)return!1;if(a(e[0])&&e[1]===null)return new c({parentfeatureset:e[0]});if(a(e[1])&&e[0]===null)return new c({parentfeatureset:e[1]});if(a(e[0])&&e[1]instanceof o)return e[0].relate(e[1],p(e[2]));if(a(e[1])&&e[0]instanceof o)return e[1].relate(e[0],p(e[2]));if(e[0]===null&&e[1]===null)return!1;throw new u(t,l.InvalidParameter,i)})})}export{X as registerFunctions};