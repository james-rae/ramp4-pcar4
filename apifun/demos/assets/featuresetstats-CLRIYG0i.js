import{c$ as u,c_ as y,aE as d}from"./main-CcTJZah4.js";import{a as F,r as A}from"./unitConversion-BMuQrkcF.js";import{o as w,w as f,h as m,z as s,J as c,K as h}from"./arcade-1I0BOjGZ.js";import{D as l,i as S}from"./WhereClause-BOW_8Nzm.js";import"./preload-helper-ExcqyqRp.js";import"./ImmutableArray-BPVd6ESQ.js";import"./shared-D6HmyAn_.js";import"./TimeOnly-DWIvX36T.js";import"./Field-BlXPfS0o.js";import"./fieldType-DC231FMv.js";import"./number-DMY7uYRQ.js";import"./featureConversionUtils-DO-YkG8U.js";import"./OptimizedFeature-BJjYcmbm.js";import"./memoryEstimations-0WvAqt4K.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FieldsIndex-yYoAn5T0.js";import"./timeZoneUtils-ZVFmM1ie.js";import"./uuid-Cl5lrJ4c.js";async function e(a,n,t,o){if(t.length===1){if(u(t[0]))return s(a,t[0],c(t[1],-1));if(m(t[0]))return s(a,t[0].toArray(),c(t[1],-1))}else if(t.length===2){if(u(t[0]))return s(a,t[0],c(t[1],-1));if(m(t[0]))return s(a,t[0].toArray(),c(t[1],-1));if(f(t[0])){const i=await t[0].load(),r=await g(l.create(t[1],{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC}),o,n);return p(n,await t[0].calculateStatistic(a,r,c(t[2],1e3),n.abortSignal))}}else if(t.length===3&&f(t[0])){const i=await t[0].load(),r=await g(l.create(t[1],{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC}),o,n);return p(n,await t[0].calculateStatistic(a,r,c(t[2],1e3),n.abortSignal))}return s(a,t,-1)}function p(a,n){return n instanceof S?d.fromReaderAsTimeStampOffset(n.toStorageFormat()):n instanceof Date?d.dateJSAndZoneToArcadeDate(n,h(a)):n}async function g(a,n,t){const o=a.getVariables();if(o.length>0){const i={};for(const r of o)i[r]=n.evaluateIdentifier(t,{name:r});a.parameters=i}return a}function V(a){a.mode==="async"&&(a.functions.stdev=function(n,t){return a.standardFunctionAsync(n,t,(o,i,r)=>e("stdev",n,r,a))},a.functions.variance=function(n,t){return a.standardFunctionAsync(n,t,(o,i,r)=>e("variance",n,r,a))},a.functions.average=function(n,t){return a.standardFunctionAsync(n,t,(o,i,r)=>e("mean",n,r,a))},a.functions.mean=function(n,t){return a.standardFunctionAsync(n,t,(o,i,r)=>e("mean",n,r,a))},a.functions.sum=function(n,t){return a.standardFunctionAsync(n,t,(o,i,r)=>e("sum",n,r,a))},a.functions.min=function(n,t){return a.standardFunctionAsync(n,t,(o,i,r)=>e("min",n,r,a))},a.functions.max=function(n,t){return a.standardFunctionAsync(n,t,(o,i,r)=>e("max",n,r,a))},a.functions.count=function(n,t){return a.standardFunctionAsync(n,t,async(o,i,r)=>{if(w(r,1,1,n,t),f(r[0]))return r[0].count(o.abortSignal);if(u(r[0])||y(r[0]))return r[0].length;if(m(r[0]))return r[0].length();throw new F(n,A.InvalidParameter,t)})})}export{V as registerFunctions};
