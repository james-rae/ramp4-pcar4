import{m as Fe}from"./TimeOnly-F3w253Sj.js";import{N as C,t as De,D as Te,l as X}from"./arcadeUtils-CnJMS213.js";import{i as b,g as xe,t as Y,K as A,a as c,r as m,P as v,d as E,j as be,B as de,k as ue,W as ce,Y as L,S as $,E as N,U as G,X as k,v as Ee,h as O,J as Ne,l as B,V as Ae}from"./languageUtils-BQj98kww.js";import{M as Se,q as me,f as Le,c as K,e as Ze,a as Ce,b as ve,T as q,E as Pe,N as Re,O as Ue,L as M,B as Me,d as _,R as Z,k as ee}from"./featureSetUtils-DxvFY_cw.js";import{t as ke}from"./ImmutableArray-BPVd6ESQ.js";import{l as $e}from"./portalUtils-Dr_rSQvo.js";import{u as Oe,O as pe}from"./SpatialFilter-CJHTtTqJ.js";import{y as te}from"./shared-CwOv6TgF.js";import{b as ye,aQ as ze}from"./main-BZJ3Qd5K.js";import{Z as x}from"./WhereClause-Bvsz-bQa.js";import ne from"./FeatureLayer-Dri7jfbL.js";import{y as H}from"./Field-Di2Xz8nL.js";import"./UnknownTimeZone-DMPqWLGe.js";import"./preload-helper-ExcqyqRp.js";import"./featureConversionUtils-DTrc5loO.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FieldsIndex-Yb6xEjsC.js";import"./number-40nRjysk.js";import"./uuid-Cl5lrJ4c.js";import"./Query-CjsolEdw.js";import"./TimeExtent-ocVmLA2y.js";import"./MD5-C9MwAd2G.js";import"./RelationshipQuery-tGjDs237.js";import"./FeatureType-_7cBkJHd.js";import"./FeatureTemplate-4rOpZojr.js";import"./Layer-D8U3MG56.js";import"./PortalItem-JiujPliF.js";import"./geometryEngineAsync-B2yLSmOs.js";import"./workers-V3c3M70y.js";import"./UniqueValueRenderer-Cx_COm-f.js";import"./RendererLegendOptions-zTlWUdoe.js";import"./diffUtils-wsHQMnnB.js";import"./colorRamps-BhSsi93l.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-CXW9Ht1U.js";import"./compilerUtils-CKkoRW9M.js";import"./lengthUtils-DoTmbXcg.js";import"./styleUtils-C6ozL5Hd.js";import"./jsonUtils-CoOyGl7a.js";import"./LRUCache-qDUDD3bO.js";import"./Version-UCJA5wmP.js";import"./OverrideHelper-BACbqaFQ.js";import"./colorUtils-CdXOKSOf.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-D7m1KQaI.js";import"./heatmapUtils-iP2R7ZHR.js";import"./MultiOriginJSONSupport-Dbt2BArL.js";import"./commonProperties-DuTKtWhB.js";import"./ElevationInfo-3FZ63WC2.js";import"./FeatureLayerBase-CyjShMdk.js";import"./HeightModelInfo-ByAcVZfQ.js";import"./arcgisLayerUrl-CmfT-saV.js";import"./featureLayerUtils-B8FqOQvZ.js";import"./LayerFloorInfo-Bxyv2sVs.js";import"./Relationship-CdCLc496.js";import"./serviceCapabilitiesUtils-BkkMiho5.js";import"./editsZScale-WfZWdXMt.js";import"./queryZScale-o89_d7rK.js";import"./projection-BNcXvFgQ.js";import"./projectBuffer-CIj7HyWF.js";import"./FeatureSet-BSEezTkt.js";import"./APIKeyMixin-BQfsM8H_.js";import"./ArcGISService-ebms0QIb.js";import"./BlendLayer-BK9Uv26T.js";import"./jsonUtils-tb2xzObw.js";import"./parser-DLwwPwXy.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-Cm6-9mvg.js";import"./CustomParametersMixin-BS7ATcqd.js";import"./EditBusLayer-DRS_T7nB.js";import"./FeatureEffectLayer-DXpNnZtA.js";import"./FeatureEffect-C8LPGkyR.js";import"./FeatureFilter-DY_rLP7m.js";import"./fieldType-BaHTRhkB.js";import"./FeatureReductionLayer-D0OTiBUX.js";import"./FeatureReductionSelection-BSzRzTRs.js";import"./labelingInfo-BGeQhcDt.js";import"./labelUtils-qLMnU-T6.js";import"./OperationalLayer-D7TWu84q.js";import"./OrderedLayer-ohqC5dnB.js";import"./OrderByInfo-Ds9ux0la.js";import"./PortalLayer-BUIBI_RM.js";import"./portalItemUtils-KiX1C6hB.js";import"./RefreshableLayer-Ep8Ydd4M.js";import"./ScaleRangeLayer-CxwGkrfK.js";import"./TemporalLayer-DY7LYnH8.js";import"./TimeInfo-CUh3UK8b.js";import"./fieldProperties-DSWGYTuz.js";import"./versionUtils-CZydlpsE.js";import"./styleUtils-DIK7ecwb.js";import"./popupUtils-0335OjrW.js";import"./AlphaCutoff-UcccL64p.js";import"./interfaces-CL2NbQte.js";function We(r){if(r.length===1){if(N(r[0]))return X("distinct",r[0],-1);if(k(r[0]))return X("distinct",r[0].toArray(),-1)}return X("distinct",r,-1)}async function ie(r,t,i){const y=r.getVariables();if(y.length>0){const F=[];for(let n=0;n<y.length;n++){const o={name:y[n]};F.push(await t.evaluateIdentifier(i,o))}const e={};for(let n=0;n<y.length;n++)e[y[n]]=F[n];return r.parameters=e,r}return r}function u(r,t,i=null){for(const y in r)if(y.toLowerCase()===t.toLowerCase())return r[y];return i}function we(r){if(r===null)return null;const t={type:u(r,"type",""),name:u(r,"name","")};if(t.type==="range")t.range=u(r,"range",[]);else{t.codedValues=[];for(const i of u(r,"codedValues",[]))t.codedValues.push({name:u(i,"name",""),code:u(i,"code",null)})}return t}function ae(r){if(r===null)return null;const t={},i=u(r,"wkt");i!==null&&(t.wkt=i);const y=u(r,"wkid");return y!==null&&(t.wkid=y),t}function he(r){if(r===null)return null;const t={hasZ:u(r,"hasz",!1),hasM:u(r,"hasm",!1)},i=u(r,"spatialreference");i!=null&&(t.spatialReference=ae(i));const y=u(r,"x",null);if(y!==null)return t.x=y,t.y=u(r,"y",null),t.hasZ&&(t.z=u(r,"z",null)),t.hasM&&(t.m=u(r,"m",null)),t;const F=u(r,"rings",null);if(F!==null)return t.rings=F,t;const e=u(r,"paths",null);if(e!==null)return t.paths=e,t;const n=u(r,"points",null);if(n!==null)return t.points=n,t;for(const o of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const l=u(r,o,null);l!==null&&(t[o]=l)}return t}function je(r,t){for(const i of t)if(i===r)return!0;return!1}function He(r){return!!r.layerDefinition&&!!r.featureSet&&je(r.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&N(r.layerDefinition.fields)!==!1&&N(r.featureSet.features)!==!1}function z(r){return r?.toLowerCase()==="utc"?"UTC":r?.toLowerCase()==="unknown"?"Unknown":r}function Un(r){r.mode==="async"&&(r.functions.timezone=function(t,i){return r.standardFunctionAsync(t,i,async(y,F,e)=>{if(b(e,1,2,t,i),xe(e[0])||Y(e[0]))return"Unknown";if(A(e[0])){if(await e[0].load(),e.length===1||e[1]===null)return e[0].datesInUnknownTimezone?z("unknown"):z(e[0].dateFieldsTimeZone);if(!(e[1]instanceof C)||e[1].hasField("type")===!1)throw new c(t,m.InvalidParameter,i);const l=e[1].field("type");if(v(l)===!1)throw new c(t,m.InvalidParameter,i);switch(E(l).toLowerCase()){case"preferredtimezone":return z(e[0].preferredTimeZone);case"editfieldsinfo":return z(e[0].editFieldsInfo?.timeZone??null);case"timeinfo":return z(e[0].timeInfo?.timeZone??null);case"field":if(e[1].hasField("fieldname")&&v(e[1].field("fieldname")))return z(e[0].fieldTimeZone(E(e[1].field("fieldname"))))}throw new c(t,m.InvalidParameter,i)}const n=be(e[0],de(t));if(n===null)return null;const o=n.timeZone;return o==="system"?Fe.systemTimeZoneCanonicalName:o.toLowerCase()==="utc"?"UTC":o.toLowerCase()==="unknown"?"Unknown":o})},r.functions.sqltimestamp=function(t,i){return r.standardFunctionAsync(t,i,async(y,F,e)=>{b(e,1,3,t,i);const n=e[0];if(ue(n)){if(e.length===1)return n.toSQLWithKeyword();if(e.length===2)return n.changeTimeZone(E(e[1])).toSQLWithKeyword();throw new c(t,m.InvalidParameter,i)}if(Y(n))return n.toSQLWithKeyword();if(A(n)){if(e.length!==3)throw new c(t,m.InvalidParameter,i);await n.load();const o=E(e[1]);if(Y(e[2]))return e[2].toSQLWithKeyword();if(ue(e[2])===!1)throw new c(t,m.InvalidParameter,i);const l=n.fieldTimeZone(o);return l===null?e[2].toSQLWithKeyword():e[2].changeTimeZone(l).toSQLWithKeyword()}throw new c(t,m.InvalidParameter,i)})},r.signatures.push({name:"sqltimestamp",min:2,max:4}),r.functions.featuresetbyid=function(t,i){return r.standardFunctionAsync(t,i,(y,F,e)=>{if(b(e,2,4,t,i),ce(e[0])){const n=E(e[1]);let o=L(e[2],null);const l=$(L(e[3],!0));if(o===null&&(o=["*"]),N(o)===!1)throw new c(t,m.InvalidParameter,i);return e[0].featureSetById(n,l,o)}throw new c(t,m.InvalidParameter,i)})},r.signatures.push({name:"featuresetbyid",min:2,max:4}),r.functions.getfeatureset=function(t,i){return r.standardFunctionAsync(t,i,async(y,F,e)=>{if(b(e,1,2,t,i),G(e[0])){let n=L(e[1],"datasource");return n===null&&(n="datasource"),n=E(n).toLowerCase(),Se(e[0].fullSchema(),n,t.lrucache,t.interceptor,t.spatialReference??null)}throw new c(t,m.InvalidParameter,i)})},r.signatures.push({name:"getfeatureset",min:1,max:2}),r.functions.featuresetbyportalitem=function(t,i){return r.standardFunctionAsync(t,i,(y,F,e)=>{if(b(e,2,5,t,i),e[0]===null)throw new c(t,m.PortalRequired,i);if(e[0]instanceof De){const f=E(e[1]),a=E(e[2]);let s=L(e[3],null);const d=$(L(e[4],!0));if(s===null&&(s=["*"]),N(s)===!1)throw new c(t,m.InvalidParameter,i);let w;return w=t.services?.portal?t.services.portal:ye.getDefault(),w=$e(e[0],w),me(f,a,t.spatialReference??null,s,d,w,t.lrucache,t.interceptor)}if(v(e[0])===!1)throw new c(t,m.PortalRequired,i);const n=E(e[0]),o=E(e[1]);let l=L(e[2],null);const p=$(L(e[3],!0));if(l===null&&(l=["*"]),N(l)===!1)throw new c(t,m.InvalidParameter,i);return me(n,o,t.spatialReference??null,l,p,t.services?.portal??ye.getDefault(),t.lrucache,t.interceptor)})},r.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),r.functions.featuresetbyname=function(t,i){return r.standardFunctionAsync(t,i,(y,F,e)=>{if(b(e,2,4,t,i),ce(e[0])){const n=E(e[1]);let o=L(e[2],null);const l=$(L(e[3],!0));if(o===null&&(o=["*"]),N(o)===!1)throw new c(t,m.InvalidParameter,i);return e[0].featureSetByName(n,l,o)}throw new c(t,m.InvalidParameter,i)})},r.signatures.push({name:"featuresetbyname",min:2,max:4}),r.functions.featureset=function(t,i){return r.standardFunction(t,i,(y,F,e)=>{b(e,1,1,t,i);const n={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",hasM:!1,hasZ:!1,fields:[]},featureSet:{geometryType:"",features:[]}};if(v(e[0])){const o=JSON.parse(e[0]);o.layerDefinition!==void 0?(n.layerDefinition=o.layerDefinition,n.featureSet=o.featureSet,o.layerDefinition.spatialReference&&(n.layerDefinition.spatialReference=o.layerDefinition.spatialReference)):(n.featureSet.features=o.features,n.featureSet.geometryType=o.geometryType,n.layerDefinition.geometryType=n.featureSet.geometryType,n.layerDefinition.objectIdField=o.objectIdFieldName??"",n.layerDefinition.typeIdField=o.typeIdFieldName,n.layerDefinition.globalIdField=o.globalIdFieldName,n.layerDefinition.fields=o.fields,o.spatialReference&&(n.layerDefinition.spatialReference=o.spatialReference))}else{if(!(e[0]instanceof C))throw new c(t,m.InvalidParameter,i);{const o=JSON.parse(e[0].castToText(!0)),l=u(o,"layerdefinition");if(l!==null){n.layerDefinition.geometryType=u(l,"geometrytype",""),n.featureSet.geometryType=n.layerDefinition.geometryType,n.layerDefinition.globalIdField=u(l,"globalidfield",""),n.layerDefinition.objectIdField=u(l,"objectidfield",""),n.layerDefinition.typeIdField=u(l,"typeidfield",""),n.layerDefinition.hasZ=u(l,"hasz",!1)===!0,n.layerDefinition.hasM=u(l,"hasm",!1)===!0;const p=u(l,"spatialreference");p&&(n.layerDefinition.spatialReference=ae(p));const f=[];for(const s of u(l,"fields",[])){const d={name:u(s,"name",""),alias:u(s,"alias",""),type:u(s,"type",""),nullable:u(s,"nullable",!0),editable:u(s,"editable",!0),length:u(s,"length",null),domain:we(u(s,"domain"))};f.push(d)}n.layerDefinition.fields=f;const a=u(o,"featureset");if(a){const s={};for(const d of f)s[d.name.toLowerCase()]=d.name;for(const d of u(a,"features",[])){const w={},D=u(d,"attributes",{});for(const I in D)w[s[I.toLowerCase()]]=D[I];n.featureSet.features.push({attributes:w,geometry:he(u(d,"geometry"))})}}}else{n.layerDefinition.hasZ=u(o,"hasz",!1)===!0,n.layerDefinition.hasM=u(o,"hasm",!1)===!0,n.layerDefinition.geometryType=u(o,"geometrytype",""),n.featureSet.geometryType=n.layerDefinition.geometryType,n.layerDefinition.objectIdField=u(o,"objectidfieldname",""),n.layerDefinition.typeIdField=u(o,"typeidfieldname","");const p=u(o,"spatialreference");p&&(n.layerDefinition.spatialReference=ae(p));const f=[],a=u(o,"fields",null);if(!N(a))throw new c(t,m.InvalidParameter,i);for(const w of a){const D={name:u(w,"name",""),alias:u(w,"alias",""),type:u(w,"type",""),nullable:u(w,"nullable",!0),editable:u(w,"editable",!0),length:u(w,"length",null),domain:we(u(w,"domain"))};f.push(D)}n.layerDefinition.fields=f;const s={};for(const w of f)s[w.name.toLowerCase()]=w.name;let d=u(o,"features",null);if(N(d))for(const w of d){const D={},I=u(w,"attributes",{});for(const T in I)D[s[T.toLowerCase()]]=I[T];n.featureSet.features.push({attributes:D,geometry:he(u(w,"geometry",null))})}else d=null,n.featureSet.features=d}}}if(He(n)===!1)throw new c(t,m.InvalidParameter,i);return n.layerDefinition.geometryType||(n.layerDefinition.geometryType="esriGeometryNull"),Le.create(n,t.spatialReference)})},r.signatures.push({name:"featureset",min:1,max:1}),r.functions.filter=function(t,i){return r.standardFunctionAsync(t,i,async(y,F,e)=>{if(b(e,2,2,t,i),N(e[0])||k(e[0])){const n=[];let o,l=e[0];if(l instanceof ke&&(l=l.toArray()),!Ee(e[1]))throw new c(t,m.InvalidParameter,i);o=e[1].createFunction(t);for(const p of l){const f=o(p);ze(f)?await f===!0&&n.push(p):f===!0&&n.push(p)}return n}if(A(e[0])){const n=await e[0].load(),o=x.create(e[1],{fieldsIndex:n.getFieldsIndex(),timeZone:n.dateFieldsTimeZoneDefaultUTC}),l=o.getVariables();if(l.length>0){const p=[];for(let a=0;a<l.length;a++){const s={name:l[a]};p.push(await r.evaluateIdentifier(t,s))}const f={};for(let a=0;a<l.length;a++)f[l[a]]=p[a];return o.parameters=f,new K({parentfeatureset:e[0],whereclause:o})}return new K({parentfeatureset:e[0],whereclause:o})}throw new c(t,m.InvalidParameter,i)})},r.signatures.push({name:"filter",min:2,max:2}),r.functions.orderby=function(t,i){return r.standardFunctionAsync(t,i,async(y,F,e)=>{if(b(e,2,2,t,i),A(e[0])){const n=new Ze(e[1]);return new Ce({parentfeatureset:e[0],orderbyclause:n})}throw new c(t,m.InvalidParameter,i)})},r.signatures.push({name:"orderby",min:2,max:2}),r.functions.top=function(t,i){return r.standardFunctionAsync(t,i,async(y,F,e)=>{if(b(e,2,2,t,i),A(e[0]))return new ve({parentfeatureset:e[0],topnum:e[1]});if(N(e[0]))return O(e[1])>=e[0].length?e[0].slice():e[0].slice(0,O(e[1]));if(k(e[0]))return O(e[1])>=e[0].length()?e[0].slice():e[0].slice(0,O(e[1]));throw new c(t,m.InvalidParameter,i)})},r.signatures.push({name:"top",min:2,max:2}),r.functions.first=function(t,i){return r.standardFunctionAsync(t,i,async(y,F,e)=>{if(b(e,1,1,t,i),A(e[0])){const n=await e[0].first(y.abortSignal);if(n!==null){const o=Te.createFromGraphicLikeObject(n.geometry,n.attributes,e[0],t.timeZone);return o._underlyingGraphic=n,o}return n}return N(e[0])?e[0].length===0?null:e[0][0]:k(e[0])?e[0].length()===0?null:e[0].get(0):null})},r.signatures.push({name:"first",min:1,max:1}),r.functions.attachments=function(t,i){return r.standardFunctionAsync(t,i,async(y,F,e)=>{b(e,1,2,t,i);const n={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof C){if(e[1].hasField("minsize")&&(n.minsize=O(e[1].field("minsize"))),e[1].hasField("metadata")&&(n.returnMetadata=$(e[1].field("metadata"))),e[1].hasField("maxsize")&&(n.maxsize=O(e[1].field("maxsize"))),e[1].hasField("types")){const o=Ne(e[1].field("types"),!1);o.length>0&&(n.types=o)}}else if(e[1]!==null)throw new c(t,m.InvalidParameter,i)}if(G(e[0])){let o=e[0]._layer;return o instanceof ne&&(o=q(o,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),o===null?[]:A(o)===!1?[]:(await o.load(),o.queryAttachments(e[0].field(o.objectIdField),n.minsize,n.maxsize,n.types,n.returnMetadata))}if(e[0]===null)return[];throw new c(t,m.InvalidParameter,i)})},r.signatures.push({name:"attachments",min:1,max:2}),r.functions.featuresetbyrelationshipname=function(t,i){return r.standardFunctionAsync(t,i,async(y,F,e)=>{b(e,2,4,t,i);const n=e[0],o=E(e[1]);let l=L(e[2],null);const p=$(L(e[3],!0));if(l===null&&(l=["*"]),N(l)===!1)throw new c(t,m.InvalidParameter,i);if(e[0]===null)return null;if(!G(e[0]))throw new c(t,m.InvalidParameter,i);let f=n._layer;if(f instanceof ne&&(f=q(f,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),f===null||A(f)===!1)return null;f=await f.load();const a=f.relationshipMetaData().filter(I=>I.name===o);if(a.length===0)return null;if(a[0].relationshipTableId!==void 0&&a[0].relationshipTableId!==null&&a[0].relationshipTableId>-1)return Pe(f,a[0],n.field(f.objectIdField),f.spatialReference,l,p,t.lrucache,t.interceptor);let s=f.serviceUrl();if(!s)return null;s=s.charAt(s.length-1)==="/"?s+a[0].relatedTableId.toString():s+"/"+a[0].relatedTableId.toString();const d=await Re(s,f.spatialReference,l,p,t.lrucache,t.interceptor);await d.load();let w=d.relationshipMetaData();if(w=w.filter(I=>I.id===a[0].id),n.hasField(a[0].keyField)===!1||n.field(a[0].keyField)===null){const I=await f.getFeatureByObjectId(n.field(f.objectIdField),[a[0].keyField]);if(I){const T=x.create(w[0].keyField+"= @id",{fieldsIndex:d.getFieldsIndex(),timeZone:d.dateFieldsTimeZoneDefaultUTC});return T.parameters={id:I.attributes[a[0].keyField]},d.filter(T)}return new Oe({parentfeatureset:d})}const D=x.create(w[0].keyField+"= @id",{fieldsIndex:d.getFieldsIndex(),timeZone:d.dateFieldsTimeZoneDefaultUTC});return D.parameters={id:n.field(a[0].keyField)},d.filter(D)})},r.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),r.functions.featuresetbyassociation=function(t,i){return r.standardFunctionAsync(t,i,async(y,F,e)=>{b(e,2,3,t,i);const n=e[0],o=E(L(e[1],"")).toLowerCase(),l=v(e[2])?E(e[2]):null;if(e[0]===null)return null;if(!G(e[0]))throw new c(t,m.InvalidParameter,i);let p=n._layer;if(p instanceof ne&&(p=q(p,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),p===null||A(p)===!1)return null;await p.load();const f=p.serviceUrl(),a=await Ue(f,t.spatialReference);let s=null,d=null,w=!1;if(l!==null&&l!==""&&l!==void 0){for(const g of a.terminals)g.terminalName===l&&(d=g.terminalId);d===null&&(w=!0)}const D=a.associations.getFieldsIndex(),I=D.get("TOGLOBALID").name,T=D.get("FROMGLOBALID").name,V=D.get("TOTERMINALID").name,Q=D.get("FROMTERMINALID").name,W=D.get("FROMNETWORKSOURCEID").name,j=D.get("TONETWORKSOURCEID").name,U=D.get("ASSOCIATIONTYPE").name,Ie=D.get("ISCONTENTVISIBLE").name,ge=D.get("OBJECTID").name;for(const g of p.fields)if(g.type==="global-id"){s=n.field(g.name);break}let P=null,re=new M(new H({name:"percentalong",alias:"percentalong",type:"double"}),x.create("0",{fieldsIndex:a.associations.getFieldsIndex(),timeZone:a.associations.dateFieldsTimeZoneDefaultUTC})),oe=new M(new H({name:"side",alias:"side",type:"string"}),x.create("''",{fieldsIndex:a.associations.getFieldsIndex(),timeZone:a.associations.dateFieldsTimeZoneDefaultUTC}));const S="globalid",se="globalId",le={};for(const g in a.lkp)le[g]=a.lkp[g].sourceId;const R=new Me(new H({name:"classname",alias:"classname",type:"string"}),null,le);let h="";switch(o){case"midspan":{h=`((${I}='${s}') OR ( ${T}='${s}')) AND (${U} IN (5))`,R.codefield=x.create(`CASE WHEN (${I}='${s}') THEN ${W} ELSE ${j} END`,{fieldsIndex:a.associations.getFieldsIndex(),timeZone:a.associations.dateFieldsTimeZoneDefaultUTC});const g=te(Z.findField(a.associations.fields,T));g.name=S,g.alias=S,P=new M(g,x.create(`CASE WHEN (${T}='${s}') THEN ${I} ELSE ${T} END`,{fieldsIndex:a.associations.getFieldsIndex(),timeZone:a.associations.dateFieldsTimeZoneDefaultUTC})),re=a.unVersion>=4?new ee(Z.findField(a.associations.fields,D.get("PERCENTALONG").name)):new M(new H({name:"percentalong",alias:"percentalong",type:"double"}),x.create("0",{fieldsIndex:a.associations.getFieldsIndex(),timeZone:a.associations.dateFieldsTimeZoneDefaultUTC}));break}case"junctionedge":{h=`((${I}='${s}') OR ( ${T}='${s}')) AND (${U} IN (4,6))`,R.codefield=x.create(`CASE WHEN (${I}='${s}') THEN ${W} ELSE ${j} END`,{fieldsIndex:a.associations.getFieldsIndex(),timeZone:a.associations.dateFieldsTimeZoneDefaultUTC});const g=te(Z.findField(a.associations.fields,T));g.name=S,g.alias=S,P=new M(g,x.create(`CASE WHEN (${T}='${s}') THEN ${I} ELSE ${T} END`,{fieldsIndex:a.associations.getFieldsIndex(),timeZone:a.associations.dateFieldsTimeZoneDefaultUTC})),oe=new M(new H({name:"side",alias:"side",type:"string"}),x.create(`CASE WHEN (${U}=4) THEN 'from' ELSE 'to' END`,{fieldsIndex:a.associations.getFieldsIndex(),timeZone:a.associations.dateFieldsTimeZoneDefaultUTC}));break}case"connected":{let g=`${I}='@T'`,fe=`${T}='@T'`;d!==null&&(g+=` AND ${V}=@A`,fe+=` AND ${Q}=@A`),h="(("+g+") OR ("+fe+"))",h=B(h,"@T",s??""),g=B(g,"@T",s??""),d!==null&&(g=B(g,"@A",d.toString()),h=B(h,"@A",d.toString())),R.codefield=x.create("CASE WHEN "+g+` THEN ${W} ELSE ${j} END`,{fieldsIndex:a.associations.getFieldsIndex(),timeZone:a.associations.dateFieldsTimeZoneDefaultUTC});const J=te(Z.findField(a.associations.fields,T));J.name=S,J.alias=S,P=new M(J,x.create("CASE WHEN "+g+` THEN ${T} ELSE ${I} END`,{fieldsIndex:a.associations.getFieldsIndex(),timeZone:a.associations.dateFieldsTimeZoneDefaultUTC}));break}case"container":h=`${I}='${s}' AND ${U} = 2`,d!==null&&(h+=` AND ${V} = `+d.toString()),R.codefield=W,h="( "+h+" )",P=new _(Z.findField(a.associations.fields,T),S,S);break;case"content":h=`(${T}='${s}' AND ${U} = 2)`,d!==null&&(h+=` AND ${Q} = `+d.toString()),R.codefield=j,h="( "+h+" )",P=new _(Z.findField(a.associations.fields,I),S,S);break;case"structure":h=`(${I}='${s}' AND ${U} = 3)`,d!==null&&(h+=` AND ${V} = `+d.toString()),R.codefield=W,h="( "+h+" )",P=new _(Z.findField(a.associations.fields,T),S,se);break;case"attached":h=`(${T}='${s}' AND ${U} = 3)`,d!==null&&(h+=` AND ${Q} = `+d.toString()),R.codefield=j,h="( "+h+" )",P=new _(Z.findField(a.associations.fields,I),S,se);break;default:throw new c(t,m.InvalidParameter,i)}return w&&(h="1 <> 1"),new Z({parentfeatureset:a.associations,adaptedFields:[new ee(Z.findField(a.associations.fields,ge)),new ee(Z.findField(a.associations.fields,Ie)),P,oe,R,re],extraFilter:h?x.create(h,{fieldsIndex:a.associations.getFieldsIndex(),timeZone:a.associations.dateFieldsTimeZoneDefaultUTC}):null})})},r.signatures.push({name:"featuresetbyassociation",min:2,max:6}),r.functions.groupby=function(t,i){return r.standardFunctionAsync(t,i,async(y,F,e)=>{if(b(e,3,3,t,i),!A(e[0]))throw new c(t,m.InvalidParameter,i);const n=await e[0].load(),o=[],l=[];let p=!1,f=[];if(v(e[1]))f.push(e[1]);else if(e[1]instanceof C)f.push(e[1]);else if(N(e[1]))f=e[1];else{if(!k(e[1]))throw new c(t,m.InvalidParameter,i);f=e[1].toArray()}for(const a of f)if(v(a)){const s=x.create(E(a),{fieldsIndex:n.getFieldsIndex(),timeZone:n.dateFieldsTimeZoneDefaultUTC}),d=pe(s)===!0?E(a):"%%%%FIELDNAME";o.push({name:d,expression:s}),d==="%%%%FIELDNAME"&&(p=!0)}else{if(!(a instanceof C))throw new c(t,m.InvalidParameter,i);{const s=a.hasField("name")?a.field("name"):"%%%%FIELDNAME",d=a.hasField("expression")?a.field("expression"):"";if(s==="%%%%FIELDNAME"&&(p=!0),!s)throw new c(t,m.InvalidParameter,i);o.push({name:s,expression:x.create(d||s,{fieldsIndex:n.getFieldsIndex(),timeZone:n.dateFieldsTimeZoneDefaultUTC})})}}if(f=[],v(e[2]))f.push(e[2]);else if(N(e[2]))f=e[2];else if(k(e[2]))f=e[2].toArray();else{if(!(e[2]instanceof C))throw new c(t,m.InvalidParameter,i);f.push(e[2])}for(const a of f){if(!(a instanceof C))throw new c(t,m.InvalidParameter,i);{const s=a.hasField("name")?a.field("name"):"",d=a.hasField("statistic")?a.field("statistic"):"",w=a.hasField("expression")?a.field("expression"):"";if(!s||!d||!w)throw new c(t,m.InvalidParameter,i);l.push({name:s,statistic:d.toLowerCase(),expression:x.create(w,{fieldsIndex:n.getFieldsIndex(),timeZone:n.dateFieldsTimeZoneDefaultUTC})})}}if(p){const a={};for(const d of n.fields)a[d.name.toLowerCase()]=1;for(const d of o)d.name!=="%%%%FIELDNAME"&&(a[d.name.toLowerCase()]=1);for(const d of l)d.name!=="%%%%FIELDNAME"&&(a[d.name.toLowerCase()]=1);let s=0;for(const d of o)if(d.name==="%%%%FIELDNAME"){for(;a["field_"+s.toString()]===1;)s++;a["field_"+s.toString()]=1,d.name="FIELD_"+s.toString()}}for(const a of o)await ie(a.expression,r,t);for(const a of l)await ie(a.expression,r,t);return e[0].groupby(o,l)})},r.signatures.push({name:"groupby",min:3,max:3}),r.functions.distinct=function(t,i){return r.standardFunctionAsync(t,i,async(y,F,e)=>{if(A(e[0])){b(e,2,2,t,i);const n=await e[0].load(),o=[];let l=[];if(v(e[1]))l.push(e[1]);else if(e[1]instanceof C)l.push(e[1]);else if(N(e[1]))l=e[1];else{if(!k(e[1]))throw new c(t,m.InvalidParameter,i);l=e[1].toArray()}let p=!1;for(const f of l)if(v(f)){const a=x.create(E(f),{fieldsIndex:n.getFieldsIndex(),timeZone:n.dateFieldsTimeZoneDefaultUTC}),s=pe(a)===!0?E(f):"%%%%FIELDNAME";o.push({name:s,expression:a}),s==="%%%%FIELDNAME"&&(p=!0)}else{if(!(f instanceof C))throw new c(t,m.InvalidParameter,i);{const a=f.hasField("name")?f.field("name"):"%%%%FIELDNAME",s=f.hasField("expression")?f.field("expression"):"";if(a==="%%%%FIELDNAME"&&(p=!0),!a)throw new c(t,m.InvalidParameter,i);o.push({name:a,expression:x.create(s||a,{fieldsIndex:n.getFieldsIndex(),timeZone:n.dateFieldsTimeZoneDefaultUTC})})}}if(p){const f={};for(const s of n.fields)f[s.name.toLowerCase()]=1;for(const s of o)s.name!=="%%%%FIELDNAME"&&(f[s.name.toLowerCase()]=1);let a=0;for(const s of o)if(s.name==="%%%%FIELDNAME"){for(;f["field_"+a.toString()]===1;)a++;f["field_"+a.toString()]=1,s.name="FIELD_"+a.toString()}}for(const f of o)await ie(f.expression,r,t);return e[0].groupby(o,[])}return We(e)})},r.functions.getfeaturesetinfo=function(t,i){return r.standardFunctionAsync(t,i,async(y,F,e)=>{if(b(e,1,1,t,i),!A(e[0]))return null;const n=await e[0].getFeatureSetInfo();return n?C.convertObjectToArcadeDictionary({layerId:n.layerId,layerName:n.layerName,itemId:n.itemId,serviceLayerUrl:n.serviceLayerUrl,webMapLayerId:n.webMapLayerId??null,webMapLayerTitle:n.webMapLayerTitle??null,className:null,objectClassId:null},de(t),!1,!1):null})},r.signatures.push({name:"getfeaturesetinfo",min:1,max:1}),r.functions.filterbysubtypecode=function(t,i){return r.standardFunctionAsync(t,i,async(y,F,e)=>{if(b(e,2,2,t,i),A(e[0])){const n=await e[0].load(),o=e[1];if(!Ae(o))throw new c(t,m.InvalidParameter,i);if(n.subtypeField){const p=x.create(`${n.subtypeField}= ${e[1]}`,{fieldsIndex:n.getFieldsIndex(),timeZone:n.dateFieldsTimeZoneDefaultUTC});return new K({parentfeatureset:e[0],whereclause:p})}if(n.typeIdField===null||n.typeIdField==="")throw new c(t,m.FeatureSetDoesNotHaveSubtypes,i);const l=x.create(`${n.typeIdField}= ${e[1]}`,{fieldsIndex:n.getFieldsIndex(),timeZone:n.dateFieldsTimeZoneDefaultUTC});return new K({parentfeatureset:e[0],whereclause:l})}throw new c(t,m.InvalidParameter,i)})},r.signatures.push({name:"filterbysubtypecode",min:2,max:2}))}export{Un as registerFunctions};