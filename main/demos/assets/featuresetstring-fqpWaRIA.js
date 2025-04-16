import{N as y}from"./arcadeUtils-Bc1hj2Kg.js";import{i as o,U as m,q as T,d as p,K as c,p as f,a as d,r as u,y as b,B as v,C as A,D as g,F as x,G as F,Y as D,N as V,Q as j}from"./languageUtils-CA3Q8OOF.js";import{E as w}from"./shared-BlAZFmOe.js";import"./main-C45WTWFO.js";import"./preload-helper-ExcqyqRp.js";import"./TimeOnly-CaNhrHxA.js";import"./UnknownTimeZone-BwkM8Za9.js";import"./ImmutableArray-BPVd6ESQ.js";import"./featureConversionUtils-CvMp17Lw.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FieldsIndex-Tcaxvyqr.js";import"./number-Dpza4vFU.js";import"./uuid-Cl5lrJ4c.js";import"./Query-BhJjV8cx.js";import"./Field-Bo5KAoom.js";import"./fieldType-CzKcm5BS.js";import"./TimeExtent-DEVmKEPd.js";function l(a,e){return a&&a.domain?a.domain.type==="coded-value"||a.domain.type==="codedValue"?y.convertObjectToArcadeDictionary({type:"codedValue",name:a.domain.name,dataType:w[a.field.type],codedValues:a.domain.codedValues.map(t=>({name:t.name,code:t.code}))},v(e)):y.convertObjectToArcadeDictionary({type:"range",name:a.domain.name,dataType:w[a.field.type],min:a.domain.minValue,max:a.domain.maxValue},v(e)):null}function Y(a){a.mode==="async"&&(a.functions.domain=function(e,t){return a.standardFunctionAsync(e,t,async(i,s,n)=>{if(o(n,2,3,e,t),m(n[0]))return l(T(n[0],p(n[1]),n[2]===void 0?void 0:n[2]),e);if(c(n[0]))return await n[0]._ensureLoaded(),l(f(p(n[1]),n[0],null,n[2]===void 0?void 0:n[2]),e);throw new d(e,u.InvalidParameter,t)})},a.functions.subtypes=function(e,t){return a.standardFunctionAsync(e,t,async(i,s,n)=>{if(o(n,1,1,e,t),m(n[0])){const r=b(n[0]);return r?y.convertObjectToArcadeDictionary(r,v(e)):null}if(c(n[0])){await n[0]._ensureLoaded();const r=n[0].subtypeMetaData();return r?y.convertObjectToArcadeDictionary(r,v(e)):null}throw new d(e,u.InvalidParameter,t)})},a.functions.domainname=function(e,t){return a.standardFunctionAsync(e,t,async(i,s,n)=>{if(o(n,2,4,e,t),m(n[0]))return A(n[0],p(n[1]),n[2],n[3]===void 0?void 0:n[3]);if(c(n[0])){await n[0]._ensureLoaded();const r=f(p(n[1]),n[0],null,n[3]===void 0?void 0:n[3]);return g(r,n[2])}throw new d(e,u.InvalidParameter,t)})},a.signatures.push({name:"domainname",min:2,max:4}),a.functions.domaincode=function(e,t){return a.standardFunctionAsync(e,t,async(i,s,n)=>{if(o(n,2,4,e,t),m(n[0]))return x(n[0],p(n[1]),n[2],n[3]===void 0?void 0:n[3]);if(c(n[0])){await n[0]._ensureLoaded();const r=f(p(n[1]),n[0],null,n[3]===void 0?void 0:n[3]);return F(r,n[2])}throw new d(e,u.InvalidParameter,t)})},a.signatures.push({name:"domaincode",min:2,max:4}),a.functions.text=function(e,t){return a.standardFunctionAsync(e,t,async(i,s,n)=>{if(o(n,1,2,e,t),c(n[0])){const r=D(n[1],"");if(r==="")return n[0].castToText();if(r.toLowerCase()==="schema")return n[0].convertToText("schema",i.abortSignal);if(r.toLowerCase()==="featureset")return n[0].convertToText("featureset",i.abortSignal);throw new d(e,u.InvalidParameter,t)}return V(n[0],n[1])})},a.functions.gdbversion=function(e,t){return a.standardFunctionAsync(e,t,async(i,s,n)=>{if(o(n,1,1,e,t),m(n[0]))return n[0].gdbVersion();if(c(n[0]))return(await n[0].load()).gdbVersion;throw new d(e,u.InvalidParameter,t)})},a.functions.schema=function(e,t){return a.standardFunctionAsync(e,t,async(i,s,n)=>{if(o(n,1,1,e,t),c(n[0]))return await n[0].load(),y.convertObjectToArcadeDictionary(n[0].schema(),v(e));if(m(n[0])){const r=j(n[0]);return r?y.convertObjectToArcadeDictionary(r,v(e)):null}throw new d(e,u.InvalidParameter,t)})})}export{Y as registerFunctions};
