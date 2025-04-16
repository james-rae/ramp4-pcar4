import{a2 as g,cL as V,s as l,cM as j,cN as C,cO as E,cP as h,M as R,bh as $,cQ as Y,bE as W,bz as z,ch as X,ci as T}from"./main-DTtQVgOw.js";import{Q as q,O as Q}from"./projection-CKR9_Ef1.js";import{u as _}from"./geojson-BDla-UBp.js";import{o as S,n as w}from"./xmlUtils-TLuV3CJ7.js";import{y}from"./Field-CWWKrSVq.js";const F="xlink:href",f="2.0.0",x="__esri_wfs_id__",J="wfs-layer:getWFSLayerTypeInfo-error",H="wfs-layer:empty-service",k="wfs-layer:feature-type-not-found",K="wfs-layer:geojson-not-supported",B="wfs-layer:kvp-encoding-not-supported",Z="wfs-layer:malformed-json",P="wfs-layer:unknown-geometry-type",ee="wfs-layer:unknown-field-type",te="wfs-layer:unsupported-spatial-reference",re="wfs-layer:unsupported-wfs-version";async function ae(r,t){const e=ne((await g(r,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:f,...t?.customParameters},signal:t?.signal})).data);return ie(r,e),e}function ne(r){const t=O(r);he(t),U(t);const e=t.firstElementChild,a=V(ue(e));return{operations:oe(e),get featureTypes(){return Array.from(a())},readFeatureTypes:a}}const se=["json","application/json","geojson","application/json; subtype=geojson","application/geo+json"];function A(r){for(const t of se){const e=r.findIndex(a=>a.toLowerCase()===t);if(e>=0)return r[e]}return null}function oe(r){let t=!1;const e={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}},a=[],s=[];if(S(r,{OperationsMetadata:{Parameter:n=>{if(n.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:({textContent:o})=>{o&&a.push(o)}}}},Operation:n=>{switch(n.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:o=>{e.GetCapabilities.url=o.getAttribute(F)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:o=>{e.DescribeFeatureType.url=o.getAttribute(F)}}}};case"GetFeature":return{DCP:{HTTP:{Get:o=>{e.GetFeature.url=o.getAttribute(F)}}},Parameter:o=>{if(o.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:({textContent:i})=>{i&&s.push(i)}}}}}}},Constraint:n=>{switch(n.getAttribute("name")){case"KVPEncoding":return{DefaultValue:o=>{t=o.textContent.toLowerCase()==="true"}};case"ImplementsResultPaging":return{DefaultValue:o=>{e.GetFeature.supportsPagination=o.textContent.toLowerCase()==="true"}}}}}}),e.GetFeature.outputFormat=A(s)??A(a),!t)throw new l(B,"WFS service doesn't support key/value pair (KVP) encoding");if(e.GetFeature.outputFormat==null)throw new l(K,"WFS service doesn't support GeoJSON output format");return e}function ie(r,t){j(r)&&(C(r,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=E(t.operations.DescribeFeatureType.url)),C(r,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=E(t.operations.GetFeature.url)))}function N(r){const t=parseInt(r.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);if(!Number.isNaN(t))return t}function ue(r){return w(r,{FeatureTypeList:{FeatureType:t=>{const e={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},a=new Set;return S(t,{Name:s=>{const{name:n,prefix:o}=b(s.textContent);e.typeName=`${o}:${n}`,e.name=n,e.namespacePrefix=o,e.namespaceUri=s.lookupNamespaceURI(o)},Abstract:s=>{e.description=s.textContent},Title:s=>{e.title=s.textContent},WGS84BoundingBox:s=>{e.extent=z.fromJSON(pe(s))},DefaultCRS:s=>{const n=N(s);n&&(e.defaultSpatialReference=n,a.add(n))},OtherCRS:s=>{const n=N(s);n&&a.add(n)}}),e.title||(e.title=e.name),a.add(4326),e.supportedSpatialReferences.push(...a),e}}})}function pe(r){let t,e,a,s;for(const n of r.children)switch(n.localName){case"LowerCorner":[t,e]=n.textContent.split(" ").map(o=>Number.parseFloat(o));break;case"UpperCorner":[a,s]=n.textContent.split(" ").map(o=>Number.parseFloat(o))}return{xmin:t,ymin:e,xmax:a,ymax:s,spatialReference:X}}function v(r,t,e){return h(r,a=>e?a.name===t&&a.namespaceUri===e:a.typeName===t||a.name===t)}async function ce(r,t,e,a={}){const{featureType:s,extent:n}=await le(r,t,e,a),{spatialReference:o}=D(r.operations.GetFeature.url,s,a.spatialReference),{fields:i,geometryType:u,swapXY:p,objectIdField:c,geometryField:m}=await me(r,s,o,a);return{url:r.operations.GetCapabilities.url,name:s.name,namespaceUri:s.namespaceUri,fields:i,geometryField:m,geometryType:u,objectIdField:c,spatialReference:a.spatialReference??new R({wkid:s.defaultSpatialReference}),extent:n,swapXY:p,wfsCapabilities:r,customParameters:a.customParameters}}async function le(r,t,e,a={}){const s=r.readFeatureTypes(),n=t?v(s,t,e):s.next().value,{spatialReference:o=new R({wkid:n?.defaultSpatialReference})}=a;if(n==null)throw t?new l(k,`The type '${t}' could not be found in the service`):new l(H,"The service is empty");let i=n.extent;if(i&&!$(i.spatialReference,o))try{await q(i.spatialReference,o,void 0,a),i=Q(i,o)}catch{throw new l(te,"Projection not supported")}return{extent:i,spatialReference:o,featureType:n}}async function me(r,t,e,a={}){const{typeName:s}=t,[n,o]=await Promise.allSettled([fe(r.operations.DescribeFeatureType.url,s,a),ye(r,s,e,a)]),i=d=>new l(J,`An error occurred while getting info about the feature type '${s}'`,{error:d});if(n.status==="rejected")throw i(n.reason);if(o.status==="rejected")throw i(o.reason);const{fields:u,errors:p}=n.value??{},c=n.value?.geometryType||o.value?.geometryType,m=o.value?.swapXY??!1;if(c==null)throw new l(P,`The geometry type could not be determined for type '${s}`,{typeName:s,geometryType:c,fields:u,errors:p});return{...G(u??[]),geometryType:c,swapXY:m}}function G(r){const t=r.find(a=>a.type==="geometry");let e=r.find(a=>a.type==="oid");return r=r.filter(a=>a.type!=="geometry"),e||(e=new y({name:x,type:"oid",alias:x}),r.unshift(e)),{geometryField:t?.name??null,objectIdField:e.name,fields:r}}async function ye(r,t,e,a={}){let s,n=!1;const[o,i]=await Promise.all([M(r.operations.GetFeature.url,t,e,r.operations.GetFeature.outputFormat,{...a,count:1}),g(r.operations.GetFeature.url,{responseType:"text",query:I(t,e,void 0,{...a,count:1}),signal:a?.signal})]),u=o.type==="FeatureCollection"&&o.features[0]?.geometry;if(u){let p;switch(s=Y.fromJSON(_(u.type)),u.type){case"Point":p=u.coordinates;break;case"LineString":case"MultiPoint":p=u.coordinates[0];break;case"MultiLineString":case"Polygon":p=u.coordinates[0][0];break;case"MultiPolygon":p=u.coordinates[0][0][0]}const c=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(i.data);if(c){const m=p[0].toFixed(3),d=p[1].toFixed(3),L=parseFloat(c[1]).toFixed(3);m===parseFloat(c[2]).toFixed(3)&&d===L&&(n=!0)}}return{geometryType:s,swapXY:n}}async function fe(r,t,e){return de(t,(await g(r,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:f,TYPENAME:t,TYPENAMES:t,...e?.customParameters},signal:e?.signal})).data)}function de(r,t){const{name:e}=b(r),a=O(t);U(a);const s=h(w(a.firstElementChild,{element:n=>n}),n=>n.getAttribute("name")===e);if(s!=null){const n=s.getAttribute("type"),o=n?h(w(a.firstElementChild,{complexType:i=>i}),i=>i.getAttribute("name")===b(n).name):h(w(s,{complexType:i=>i}),()=>!0);if(o)return we(o)}throw new l(k,`Type '${r}' not found in document`,{document:new XMLSerializer().serializeToString(a)})}const ge=new Set(["objectid","fid"]);function we(r){const t=[],e=[];let a;const s=w(r,{complexContent:{extension:{sequence:{element:n=>n}}}});for(const n of s){const o=n.getAttribute("name");if(!o)continue;let i,u;if(n.hasAttribute("type")?i=b(n.getAttribute("type")).name:S(n,{simpleType:{restriction:m=>(i=b(m.getAttribute("base")).name,{maxLength:d=>{u=+d.getAttribute("value")}})}}),!i)continue;const p=n.getAttribute("nillable")==="true";let c=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":e.push(new y({name:o,alias:o,type:"integer",nullable:p,length:T("integer")}));break;case"float":case"double":case"decimal":e.push(new y({name:o,alias:o,type:"double",nullable:p,length:T("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":e.push(new y({name:o,alias:o,type:"string",nullable:p,length:u??T("string")}));break;case"datetime":case"date":e.push(new y({name:o,alias:o,type:"date",nullable:p,length:u??T("date")}));break;case"pointpropertytype":a="point",c=!0;break;case"multipointpropertytype":a="multipoint",c=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":a="polyline",c=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":a="polygon",c=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":c=!0,t.push(new l(P,`geometry type '${i}' is not supported`,{type:new XMLSerializer().serializeToString(r)}));break;default:t.push(new l(ee,`Unknown field type '${i}'`,{type:new XMLSerializer().serializeToString(r)}))}c&&e.push(new y({name:o,alias:o,type:"geometry",nullable:p}))}for(const n of e)if(n.type==="integer"&&!n.nullable&&ge.has(n.name.toLowerCase())){n.type="oid";break}return{geometryType:a,fields:e,errors:t}}async function M(r,t,e,a,s){let{data:n}=await g(r,{responseType:"text",query:I(t,e,a,s),signal:s?.signal});n=n.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(n)}catch(o){throw new l(Z,"Error while parsing the\xA0response",{response:n,error:o})}}function I(r,t,e,a){const s=typeof t=="number"?t:t.wkid;return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:f,TYPENAMES:r,OUTPUTFORMAT:e,SRSNAME:"EPSG:"+s,STARTINDEX:a?.startIndex,COUNT:a?.count,...a?.customParameters}}async function be(r,t,e){const a=await g(r,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:f,TYPENAMES:t,RESULTTYPE:"hits",...e?.customParameters},signal:e?.signal}),s=/numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(a.data);if(s?.groups)return+s.groups.numberMatched}function O(r){return new DOMParser().parseFromString(r.trim(),"text/xml")}function b(r){const[t,e]=r.split(":");return{prefix:e?t:"",name:e??t}}function he(r){const t=r.firstElementChild?.getAttribute("version");if(t&&t!==f)throw new l(re,`Unsupported WFS version ${t}. Supported version: ${f}`)}function U(r){let t="",e="";if(S(r.firstElementChild,{Exception:a=>(t=a.getAttribute("exceptionCode"),{ExceptionText:s=>{e=s.textContent}})}),t)throw new l(`wfs-layer:${t}`,e)}function D(r,t,e){const a={wkid:t.defaultSpatialReference},s=e?.wkid!=null?{wkid:e.wkid}:a;return{spatialReference:s,getFeatureSpatialReference:W(r)||s.wkid&&t.supportedSpatialReferences.includes(s.wkid)?{wkid:s.wkid}:{wkid:t.defaultSpatialReference}}}export{M as K,x as S,ce as W,v as Y,be as e,D as o,ae as v,G as z};
