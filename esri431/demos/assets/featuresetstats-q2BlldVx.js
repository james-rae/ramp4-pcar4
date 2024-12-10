import { m as m$1 } from './TimeOnly-CWeyHmrP.js';
import { i as ie, K, E, P, X, a, r, Y, B as Be } from './languageUtils-B9ynR-fa.js';
import { l } from './arcadeUtils-fvrjXtss.js';
import { Z, r as r$1 } from './WhereClause-Cmgb1p74.js';
import './main-jdFDoOPu.js';
import './preload-helper-dJJaZANz.js';
import './ImmutableArray-JzRZGad4.js';
import './shared-DTvdxlgz.js';
import './number-CjhpDVXB.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function m(n,t,e,a){if(1===e.length){if(E(e[0]))return l(n,e[0],Y(e[1],-1));if(X(e[0]))return l(n,e[0].toArray(),Y(e[1],-1))}else if(2===e.length){if(E(e[0]))return l(n,e[0],Y(e[1],-1));if(X(e[0]))return l(n,e[0].toArray(),Y(e[1],-1));if(K(e[0])){const r=await e[0].load(),i=await y(Z.create(e[1],{fieldsIndex:r.getFieldsIndex(),timeZone:r.dateFieldsTimeZoneDefaultUTC}),a,t);return g(t,await e[0].calculateStatistic(n,i,Y(e[2],1e3),t.abortSignal))}}else if(3===e.length&&K(e[0])){const r=await e[0].load(),i=await y(Z.create(e[1],{fieldsIndex:r.getFieldsIndex(),timeZone:r.dateFieldsTimeZoneDefaultUTC}),a,t);return g(t,await e[0].calculateStatistic(n,i,Y(e[2],1e3),t.abortSignal))}return l(n,e,-1)}function g(t,e){return e instanceof r$1?m$1.fromReaderAsTimeStampOffset(e.toStorageFormat()):e instanceof Date?m$1.dateJSAndZoneToArcadeDate(e,Be(t)):e}async function y(n,t,e){const a=n.getVariables();if(a.length>0){const r=[];for(let n=0;n<a.length;n++){const i={name:a[n]};r.push(await t.evaluateIdentifier(e,i));}const i={};for(let n=0;n<a.length;n++)i[a[n]]=r[n];return n.parameters=i,n}return n}function A(n){"async"===n.mode&&(n.functions.stdev=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("stdev",t,r,n)))},n.functions.variance=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("variance",t,r,n)))},n.functions.average=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("mean",t,r,n)))},n.functions.mean=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("mean",t,r,n)))},n.functions.sum=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("sum",t,r,n)))},n.functions.min=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("min",t,r,n)))},n.functions.max=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("max",t,r,n)))},n.functions.count=function(c,u){return n.standardFunctionAsync(c,u,(async(n,f,d)=>{if(ie(d,1,1,c,u),K(d[0]))return d[0].count(n.abortSignal);if(E(d[0])||P(d[0]))return d[0].length;if(X(d[0]))return d[0].length();throw new a(c,r.InvalidParameter,u)}))});}

export { A as registerFunctions };
