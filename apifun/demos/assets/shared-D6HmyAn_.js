import{aD as F,aE as f}from"./main-CcTJZah4.js";import{i as g,r as G}from"./TimeOnly-DWIvX36T.js";import{y as S}from"./Field-BlXPfS0o.js";var u,c;function b(e){return S.fromJSON(e.toJSON())}function N(e){return e.toJSON?e.toJSON():e}function P(e){return e instanceof Date}function E(e){return e instanceof F}function J(e){return e instanceof f}function B(e){return e instanceof g}function M(e){return e instanceof G}(function(e){e[e.Standardised=0]="Standardised",e[e.StandardisedNoInterval=1]="StandardisedNoInterval",e[e.SqlServer=2]="SqlServer",e[e.Oracle=3]="Oracle",e[e.Postgres=4]="Postgres",e[e.PGDB=5]="PGDB",e[e.FILEGDB=6]="FILEGDB",e[e.NotEvaluated=7]="NotEvaluated"})(u||(u={})),function(e){e[e.InFeatureSet=0]="InFeatureSet",e[e.NotInFeatureSet=1]="NotInFeatureSet",e[e.Unknown=2]="Unknown"}(c||(c={}));const w=1e3,x={point:"point",polygon:"polygon",polyline:"polyline",multipoint:"multipoint",extent:"extent",esriGeometryPoint:"point",esriGeometryPolygon:"polygon",esriGeometryPolyline:"polyline",esriGeometryMultipoint:"multipoint",esriGeometryEnvelope:"extent",envelope:"extent"},L={point:"esriGeometryPoint",polygon:"esriGeometryPolygon",polyline:"esriGeometryPolyline",multipoint:"esriGeometryMultipoint",extent:"esriGeometryEnvelope",esriGeometryPoint:"esriGeometryPoint",esriGeometryPolygon:"esriGeometryPolygon",esriGeometryPolyline:"esriGeometryPolyline",esriGeometryMultipoint:"esriGeometryMultipoint",esriGeometryEnvelope:"esriGeometryEnvelope",envelope:"esriGeometryEnvelope"},h={"small-integer":"esriFieldTypeSmallInteger",integer:"esriFieldTypeInteger",long:"esriFieldTypeLong",single:"esriFieldTypeSingle",double:"esriFieldTypeDouble",string:"esriFieldTypeString",date:"esriFieldTypeDate","date-only":"esriFieldTypeDateOnly","time-only":"esriFieldTypeTimeOnly","timestamp-offset":"esriFieldTypeTimestampOffset",oid:"esriFieldTypeOID",geometry:"esriFieldTypeGeometry",blob:"esriFieldTypeBlob",raster:"esriFieldTypeRaster",guid:"esriFieldTypeGUID","global-id":"esriFieldTypeGlobalID",xml:"esriFieldTypeXML","big-integer":"esriFieldTypeBigInteger",esriFieldTypeSmallInteger:"esriFieldTypeSmallInteger",esriFieldTypeInteger:"esriFieldTypeInteger",esriFieldTypeLong:"esriFieldTypeLong",esriFieldTypeSingle:"esriFieldTypeSingle",esriFieldTypeDouble:"esriFieldTypeDouble",esriFieldTypeString:"esriFieldTypeString",esriFieldTypeDate:"esriFieldTypeDate",esriFieldTypeDateOnly:"esriFieldTypeDateOnly",esriFieldTypeTimeOnly:"esriFieldTypeTimeOnly",esriFieldTypeTimestampOffset:"esriFieldTypeTimestampOffset",esriFieldTypeOID:"esriFieldTypeOID",esriFieldTypeGeometry:"esriFieldTypeGeometry",esriFieldTypeBlob:"esriFieldTypeBlob",esriFieldTypeRaster:"esriFieldTypeRaster",esriFieldTypeGUID:"esriFieldTypeGUID",esriFieldTypeGlobalID:"esriFieldTypeGlobalID",esriFieldTypeXML:"esriFieldTypeXML",esriFieldTypeBigInteger:"esriFieldTypeBigInteger"};function k(e){return e===void 0?"":e=(e=(e=e.replace(/\/featureserver\/[0-9]*/i,"/FeatureServer")).replace(/\/mapserver\/[0-9]*/i,"/MapServer")).split("?")[0]}function U(e,n){n||(n={}),typeof n=="function"&&(n={cmp:n});const T=typeof n.cycles=="boolean"&&n.cycles,m=n.cmp&&(y=n.cmp,function(o){return function(r,i){const t={key:r,value:o[r]},s={key:i,value:o[i]};return y(t,s)}});var y;const l=[];return function o(r){if(r?.toJSON&&typeof r.toJSON=="function"&&(r=r.toJSON()),r===void 0)return;if(typeof r=="number")return isFinite(r)?""+r:"null";if(typeof r!="object")return JSON.stringify(r);let i,t;if(Array.isArray(r)){for(t="[",i=0;i<r.length;i++)i&&(t+=","),t+=o(r[i])||"null";return t+"]"}if(r===null)return"null";if(l.includes(r)){if(T)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}const s=l.push(r)-1,p=Object.keys(r).sort(m?.(r));for(t="",i=0;i<p.length;i++){const a=p[i],d=o(r[a]);d&&(t&&(t+=","),t+=JSON.stringify(a)+":"+d)}return l.splice(s,1),"{"+t+"}"}(e)}function O(e){switch(e.type){case"catalog":case"csv":case"feature":case"geojson":case"knowledge-graph-sublayer":case"oriented-imagery":case"subtype-group":case"wfs":return!0;default:return!1}}function _(e){switch(e.type){case"catalog-footprint":case"subtype-sublayer":return!0;default:return O(e)}}export{x as D,k as E,U as J,O as M,w as O,L as P,M as T,h as b,P as d,J as f,B as g,c as l,E as m,u as o,b as s,_ as x,N as y};
