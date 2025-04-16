import{s as j,bF as C,cA as ne,a2 as k,at as te,M as x,cB as E,ci as ie,I as z,n as ae}from"./main-DZMdXZ8-.js";import{i as se,u as re,s as oe}from"./featureConversionUtils-CHO4hk8P.js";import{e as le}from"./OptimizedFeatureSet-DfZGBuxJ.js";import{E as ce,I as ue,N as de}from"./geojson-CLiLT-SH.js";import{u as fe}from"./clientSideDefaults-DO-ZXMTI.js";import{g as me}from"./sourceUtils-Bm269f3U.js";import{Z as B}from"./FieldsIndex-DeesJX9c.js";import{i as pe}from"./fieldType-CCvdPbRn.js";const R=()=>ae.getLogger("esri.layers.ogc.ogcFeatureUtils"),_="startindex",ge=new Set([_,"offset"]),D="http://www.opengis.net/def/crs/",ye=`${D}OGC/1.3/CRS84`;var l;async function we(e,t,n={},i=5){const{links:a}=e,o=p(a,"items",l.geojson)||p(a,"http://www.opengis.net/def/rel/ogc/1.0/items",l.geojson);if(o==null)throw new j("ogc-feature-layer:missing-items-page","Missing items url");const{apiKey:u,customParameters:d,signal:m}=n,g=C(o.href,e.landingPage.url),T={limit:i,...d,token:u},S=ne(g,T),W={accept:l.geojson},{data:v}=await k(S,{signal:m,headers:W}),N=Pe(S,i,v.links)??_;ce(v);const f=ue(v,{geometryType:t.geometryType}),h=t.fields||f.fields||[],G=t.hasZ!=null?t.hasZ:f.hasZ,y=f.geometryType,w=t.objectIdField||f.objectIdFieldName||"OBJECTID";let r=t.timeInfo;const P=h.find(({name:s})=>s===w);if(P)P.editable=!1,P.nullable=!1;else{if(!f.objectIdFieldType)throw new j("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");h.unshift({name:w,alias:w,type:f.objectIdFieldType==="number"?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(w!==f.objectIdFieldName){const s=h.find(({name:c})=>c===f.objectIdFieldName);s&&(s.type="esriFieldTypeInteger")}h===f.fields&&f.unknownFields.length>0&&R().warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:f.unknownFields}});for(const s of h){if(s.name==null&&(s.name=s.alias),s.alias==null&&(s.alias=s.name),s.type!=="esriFieldTypeOID"&&s.type!=="esriFieldTypeGlobalID"&&(s.editable=s.editable==null||!!s.editable,s.nullable=s.nullable==null||!!s.nullable),!s.name)throw new j("ogc-feature-layer:invalid-field-name","field name is missing",{field:s});if(!pe.jsonValues.includes(s.type))throw new j("ogc-feature-layer:invalid-field-type",`invalid type for field "${s.name}"`,{field:s})}if(r){const s=new B(h);if(r.startTimeField){const c=s.get(r.startTimeField);c?(r.startTimeField=c.name,c.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const c=s.get(r.endTimeField);c?(r.endTimeField=c.name,c.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const c=s.get(r.trackIdField);c?r.trackIdField=c.name:(r.trackIdField=null,R().warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.timeReference||={timeZoneIANA:te},r.startTimeField||r.endTimeField||(R().warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:r}}),r=void 0)}return{drawingInfo:y?fe(y):null,extent:Ne(e),geometryType:y,fields:h,hasZ:!!G,objectIdField:w,paginationParameter:N,timeInfo:r}}async function be(e,t={}){const{links:n,url:i}=e,a=p(n,"data",l.json)||p(n,"http://www.opengis.net/def/rel/ogc/1.0/data",l.json);if(a==null)throw new j("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:o,customParameters:u,signal:d}=t,m=C(a.href,i),{data:g}=await k(m,{signal:d,headers:{accept:l.json},query:{...u,token:o}});for(const T of g.collections)T.landingPage=e;return g}async function he(e,t={}){const{links:n,url:i}=e,a=p(n,"conformance",l.json)||p(n,"http://www.opengis.net/def/rel/ogc/1.0/conformance",l.json);if(a==null)throw new j("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:o,customParameters:u,signal:d}=t,m=C(a.href,i),{data:g}=await k(m,{signal:d,headers:{accept:l.json},query:{...u,token:o}});return g}async function Fe(e,t={}){const{apiKey:n,customParameters:i,signal:a}=t,{data:o}=await k(e,{signal:a,headers:{accept:l.json},query:{...i,token:n}});return o.url=e,o}async function Ie(e,t={}){const{links:n,url:i}=e,a=p(n,"service-desc",l.openapi);if(a==null)return R().warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:o,customParameters:u,signal:d}=t,m=C(a.href,i),{data:g}=await k(m,{signal:d,headers:{accept:l.openapi},query:{...u,token:o}});return g}function je(e){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),n=t?.groups;if(!n)return null;const{authority:i,code:a}=n;switch(i.toLowerCase()){case"ogc":switch(a.toLowerCase()){case"crs27":return x.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return x.WGS84.wkid;default:return null}case"esri":case"epsg":{const o=Number.parseInt(a,10);return Number.isNaN(o)?null:o}default:return null}}async function Te(e,t,n){const i=await Q(e,t,n);return se(i)}async function Q(e,t,n){const{collection:{links:i,landingPage:{url:a}},layerDefinition:o,maxRecordCount:u,queryParameters:{apiKey:d,customParameters:m},spatialReference:g,supportedCrs:T}=e,S=p(i,"items",l.geojson)||p(i,"http://www.opengis.net/def/rel/ogc/1.0/items",l.geojson);if(S==null)throw new j("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:W,num:v,start:N,timeExtent:f,where:h}=t;if(t.objectIds)throw new j("ogc-feature-layer:query-by-objectids-not-supported","Queries with object ids are not supported");const G=x.fromJSON(g),y=t.outSpatialReference??G,w=y.isWGS84?null:U(y,T),r=ve(W,T),P=xe(f),s=Se(h),c=v??(N==null?u:10),V=N===0?void 0:N,{fields:K,geometryType:$,hasZ:Z,objectIdField:O,paginationParameter:H}=o,X=C(S.href,a),{data:L}=await k(X,{...n,query:{...m,...r,crs:w,datetime:P,query:s,limit:c,[H]:V,token:d},headers:{accept:l.geojson}}),q=de(L,{geometryType:$,hasZ:Z,objectIdField:O}),Y=q.length===c&&!!p(L.links??[],"next",l.geojson),J=new B(K);for(const b of q){const I={};me(J,I,b.attributes,!0);for(const M of J.fields)M.nullable&&!(M.name in I)&&(I[M.name]=null);I[O]=b.attributes[O],b.attributes=I}if(!w&&y.isWebMercator){for(const b of q)if(b.geometry!=null&&$!=null){const I=re(b.geometry,$,Z,!1);I.spatialReference=x.WGS84,b.geometry=oe(E(I,y))}}for(const b of q)b.objectId=b.attributes[O];const ee=w||!w&&y.isWebMercator?y.toJSON():ie,F=new le;return F.exceededTransferLimit=Y,F.features=q,F.fields=K,F.geometryType=$,F.hasZ=Z,F.objectIdFieldName=O,F.spatialReference=ee,F}function ke(e){return e!=null&&e.type==="extent"}function U(e,t){const{isWebMercator:n,wkid:i}=e;if(!i)return null;const a=n?t[3857]??t[102100]??t[102113]??t[900913]:t[e.wkid];return a?`${D}${a}`:null}function A(e){if(e==null)return"";const{xmin:t,ymin:n,xmax:i,ymax:a}=e;return`${t},${n},${i},${a}`}function xe(e){if(e==null)return null;const{start:t,end:n}=e;return`${t!=null?t.toISOString():".."}/${n!=null?n.toISOString():".."}`}function Se(e){return e!=null&&e&&e!=="1=1"?e:null}function ve(e,t){if(!ke(e))return null;const{spatialReference:n}=e;if(!n||n.isWGS84)return{bbox:A(e)};const i=U(n,t);return i!=null?{bbox:A(e),"bbox-crs":i}:n.isWebMercator?{bbox:A(E(e,x.WGS84))}:null}function Ne(e){const t=e.extent?.spatial;if(!t)return null;const n=t.bbox[0],i=n.length===4,[a,o]=n,u=i?void 0:n[2];return{xmin:a,ymin:o,xmax:i?n[2]:n[3],ymax:i?n[3]:n[4],zmin:u,zmax:i?void 0:n[5],spatialReference:x.WGS84.toJSON()}}function p(e,t,n){return e.find(({rel:i,type:a})=>i===t&&a===n)??e.find(({rel:i,type:a})=>i===t&&!a)}function Pe(e,t,n){if(!n)return;const i=p(n,"next",l.geojson),a=z(i?.href)?.query;if(!a)return;const o=z(e).query,u=Object.keys(o??{});return Object.entries(a).filter(([d])=>!u.includes(d)).find(([d,m])=>ge.has(d.toLowerCase())&&Number.parseInt(m,10)===t)?.[0]}(function(e){e.json="application/json",e.geojson="application/geo+json",e.openapi="application/vnd.oai.openapi+json;version=3.0"})(l||(l={}));export{Q as $,je as C,be as N,he as O,Fe as P,Te as R,D as k,Ie as q,we as v,ye as x};
