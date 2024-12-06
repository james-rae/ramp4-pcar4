import { bX as d$1, b2 as g$1, a2 as d$2, aA as w$1, bY as s, bZ as r, G as n$1 } from './main-jdFDoOPu.js';
import { $ } from './Mesh-CfyCXhs5.js';
import { i as i$1, a } from './External-DpdFjME1.js';
import { n, i } from './meshFeatureAttributes-Yq2gWwJu.js';
import './preload-helper-dJJaZANz.js';
import './MeshTransform-2R18FMnE.js';
import './mat4f64-Cw8nJbLB.js';
import './quat-CBMGRihX.js';
import './mat3f64-DKAwfC1r.js';
import './quatf64-CvJnKmwc.js';
import './MeshVertexAttributes-awLD9HEN.js';
import './MeshLocalVertexSpace-Cc-jLTni.js';
import './meshVertexSpaceUtils-Bwktraru.js';
import './earcut-Bc6IkkPv.js';
import './Indices-Bo7FLkhm.js';
import './plane-CBOt8dOS.js';
import './deduplicate-BedirgWR.js';
import './projectPointToVector-CuNlzNiq.js';
import './vertexSpaceConversion-3qARGX09.js';
import './spatialReferenceEllipsoidUtils-Cmgcuzrm.js';
import './computeTranslationToOriginAndRotation-BpsM5e_w.js';
import './vec3-c5XtCcIT.js';
import './BufferView-BjlYh8fP.js';
import './vec4-C0O756iN.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const p=()=>n$1.getLogger("esri.rest.support.meshFeatureSet");function l(t,r,s){const o=s.features;s.features=[],delete s.geometryType;const a=d$1.fromJSON(s);if(a.geometryType="mesh",!s.assetMaps)return a;const u=g(r,s.assetMaps),i=t.sourceSpatialReference??g$1.WGS84,m=s.globalIdFieldName,{outFields:c}=t,p=null!=c&&c.length>0?y(c.includes("*")?null:new Set(c)):()=>({});for(const n of o){const t=E(n,m,i,r,u);a.features.push(new d$2({geometry:t,attributes:p(n)}));}return a}function y(e){return ({attributes:t})=>{if(!t)return {};if(!e)return t;for(const r in t)e.has(r)||delete t[r];return t}}function E(e,t,r,n$1,a){const u=e.attributes[t],i$1=a.get(u);if(null==i$1||!e.geometry)return null;const f=n(e.attributes,r,n$1.transformFieldRoles),p=w$1.fromJSON(e.geometry);p.spatialReference=r;const l=i(e.attributes,n$1.transformFieldRoles),y=r.isGeographic?"local":"georeferenced",E=d(i$1);return E?$.createWithExternalSource(f,E,{extent:p,transform:l,vertexSpace:y,unitConversionDisabled:!0}):$.createIncomplete(f,{extent:p,transform:l,vertexSpace:y})}var h;function g(e,t){const s$1=new Map;for(const o of t){const t=o.parentGlobalId;if(null==t)continue;const n=o.assetName,a=o.assetType,u=o.assetHash,f=o.assetURL,m=o.conversionStatus,c=o.seqNo,l=s(a,e.supportedFormats);if(!l){p().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${a}, but it does not list it as a supported type`);continue}const y=r(s$1,t,(()=>({files:new Map})));r(y.files,n,(()=>({name:n,type:a,mimeType:l,status:S(m),parts:[]}))).parts[c]={hash:u,url:f};}return s$1}function d(e){const t=Array.from(e.files.values()),r=new Array;for(const s of t){if(s.status!==h.COMPLETED)return null;const e=new Array;for(const t of s.parts){if(!t)return null;e.push(new i$1(t.url,t.hash));}r.push(new a(s.name,s.mimeType,e));}return r}function S(e){switch(e){case"COMPLETED":case"SUBMITTED":return h.COMPLETED;case"INPROGRESS":return h.PENDING;default:return h.FAILED}}!function(e){e[e.FAILED=0]="FAILED",e[e.PENDING=1]="PENDING",e[e.COMPLETED=2]="COMPLETED";}(h||(h={}));

export { g as assetMapFromAssetMapsJSON, E as extractMesh, l as meshFeatureSetFromJSON };
