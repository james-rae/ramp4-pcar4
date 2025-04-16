import{O as h,b6 as y,bB as S,az as l,n as g}from"./main-CcTJZah4.js";import E from"./Mesh-D_iERPmz.js";import{i as N,a as D}from"./External-D-EF7psY.js";import{s as M}from"./infoFor3D-DhzudQro.js";import{d as b}from"./FeatureSet-xTHFBdFq.js";import{n as F,i as T}from"./meshFeatureAttributes-B5nmVroh.js";import"./preload-helper-ExcqyqRp.js";import"./axisAngleDegrees-CuYl0LkC.js";import"./mat4-I_M_KIEV.js";import"./common-DQOJ18NT.js";import"./quat-DAA9UZ3A.js";import"./mat3f64-q3fE-ZOt.js";import"./quatf64-aQ5IuZRd.js";import"./vec32-D4ob7-3U.js";import"./vec42-CKs01hkn.js";import"./MeshComponent-Cd1RY7_C.js";import"./imageUtils-D2KqOp3F.js";import"./meshProperties-C4iW0Ukm.js";import"./MeshLocalVertexSpace-D-Mxwhot.js";import"./MeshTransform-BDNW2zxz.js";import"./mat4f64-Dk4dwAN8.js";import"./MeshVertexAttributes-b2-qBU6r.js";import"./meshVertexSpaceUtils-D_fO4xGi.js";import"./triangulationUtils-YYXFxn_r.js";import"./earcut-Lltz9D9k.js";import"./Indices-TRVfGyko.js";import"./plane-DJilfJKg.js";import"./vec2f64-DohEyf3f.js";import"./vec4f64-o2zAXfmz.js";import"./deduplicate-CD7rzKBH.js";import"./projectPointToVector-D6P7t9ma.js";import"./projection-nLxG4Uci.js";import"./projectBuffer-DwB7xYJN.js";import"./vertexSpaceConversion-BgFgstzH.js";import"./mat3-CruJiiUv.js";import"./spatialReferenceEllipsoidUtils-CsSyVIf9.js";import"./computeTranslationToOriginAndRotation-CTqTKM0w.js";import"./vec3-CHxyJkts.js";import"./BufferView-DZslrVDM.js";import"./vec2-maR1OrZI.js";import"./vec4-BJnMXj40.js";import"./Field-BlXPfS0o.js";import"./fieldType-DC231FMv.js";const w=()=>g.getLogger("esri.rest.support.meshFeatureSet");function Dt(t,o,r){const e=r.features;r.features=[],delete r.geometryType;const s=b.fromJSON(r);if(s.geometryType="mesh",!r.assetMaps)return s;const n=L(o,r.assetMaps),a=t.sourceSpatialReference??h.WGS84,u=r.globalIdFieldName,{outFields:i}=t,f=i!=null&&i.length>0?I(i.includes("*")?null:new Set(i)):()=>({});for(const m of e){const p=O(m,u,a,o,n);s.features.push(new y({geometry:p,attributes:f(m)}))}return s}function I(t){return({attributes:o})=>{if(!o)return{};if(!t)return o;for(const r in o)t.has(r)||delete o[r];return o}}function O(t,o,r,e,s){const n=t.attributes[o],a=s.get(n);if(a==null||!t.geometry)return null;const u=F(t.attributes,r,e.transformFieldRoles),i=S.fromJSON(t.geometry);i.spatialReference=r;const f=T(t.attributes,e.transformFieldRoles),m=r.isGeographic?"local":"georeferenced",p=P(a);return p?E.createWithExternalSource(u,p,{extent:i,transform:f,vertexSpace:m,unitConversionDisabled:!0}):E.createIncomplete(u,{extent:i,transform:f,vertexSpace:m})}var c;function L(t,o){const r=new Map;for(const e of o){const s=e.parentGlobalId;if(s==null)continue;const n=e.assetName,a=e.assetType,u=e.assetHash,i=e.assetURL,f=e.conversionStatus,m=e.seqNo,p=M(a,t.supportedFormats);if(!p){w().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${a}, but it does not list it as a supported type`);continue}const d=l(r,s,()=>({files:new Map}));l(d.files,n,()=>({name:n,type:a,mimeType:p,status:$(f),parts:[]})).parts[m]={hash:u,url:i}}return r}function P(t){const o=Array.from(t.files.values()),r=new Array;for(const e of o){if(e.status!==c.COMPLETED)return null;const s=new Array;for(const n of e.parts){if(!n)return null;s.push(new N(n.url,n.hash))}r.push(new D(e.name,e.mimeType,s))}return r}function $(t){switch(t){case"COMPLETED":case"SUBMITTED":return c.COMPLETED;case"INPROGRESS":return c.PENDING;default:return c.FAILED}}(function(t){t[t.FAILED=0]="FAILED",t[t.PENDING=1]="PENDING",t[t.COMPLETED=2]="COMPLETED"})(c||(c={}));export{L as assetMapFromAssetMapsJSON,O as extractMesh,Dt as meshFeatureSetFromJSON};
