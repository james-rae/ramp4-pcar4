import{aF as ie,x as T,z as k,D as Fe,B as Te,aQ as Pe,K as re,G as se,a2 as Re,id as Me,n as Ue,bq as Oe,cX as R,aC as Ge,cY as A,C as Ne,S as Ve,ie as ze,b4 as Je}from"./main-DeRV24Di.js";import{o as v,a1 as He,a0 as le,w as C,c as M,j as D,aq as We,K as Ee,Z as ve,a4 as De,J as L,am as Q,H as X,V as Be,h as W,G as Qe,d as q,D as qe,ar as Ke,as as ee,z as de}from"./arcade-C7Qop3EQ.js";import{a as p,r as y}from"./unitConversion-ZS2oNdwf.js";import{R as _e,q as xe,p as Ye,c as ce,e as Xe,a as et,b as tt,N as te,j as nt,F as at,E as ot,L as B,B as it,d as ne,f as Z,k as ue}from"./featureSetUtils-CzK_Y2Us.js";import{t as rt}from"./ImmutableArray-CiJxhY8_.js";import{l as st}from"./portalUtils-CvqOZUWx.js";import{u as lt,O as Se}from"./SpatialFilter-C9BHhK4D.js";import{x as ke,s as fe}from"./shared-CBOvlBsM.js";import{D as E}from"./WhereClause-B-G47uEA.js";import Ae from"./FeatureLayer-BOnkaWhc.js";import{y as $}from"./Field-Dcbw6k6h.js";import{f as dt,s as ct,i as ut}from"./utils-C8s4qYBR.js";import{p as K}from"./NetworkElement-O6eP8b0D.js";var Ce;(function(n){n[n.RTJunctionJunctionConnectivity=1]="RTJunctionJunctionConnectivity",n[n.RTContainment=2]="RTContainment",n[n.RTAttachment=3]="RTAttachment",n[n.RTJunctionEdgeConnectivity=4]="RTJunctionEdgeConnectivity",n[n.RTEdgeJunctionEdgeConnectivity=5]="RTEdgeJunctionEdgeConnectivity"})(Ce||(Ce={})),new ie({connected:"connected",upstream:"upstream",downstream:"downstream",shortestPath:"shortest-path",subnetwork:"subnetwork",subnetworkController:"subnetwork-controller",loops:"loops",isolation:"isolation"});const U=new ie({junctionJunctionConnectivity:"junction-junction-connectivity",connectivity:"connectivity",attachment:"attachment",containment:"containment",junctionEdgeFromConnectivity:"junction-edge-from-connectivity",junctionEdgeMidspanConnectivity:"junction-edge-midspan-connectivity",junctionEdgeToConnectivity:"junction-edge-to-connectivity"});new ie({normal:"normal",rebuild:"rebuild",forceRebuild:"force-rebuild"});let S=class extends se{constructor(n){super(n),this.globalId=null,this.associationType=null,this.fromNetworkElement=null,this.toNetworkElement=null,this.geometry=null,this.errorMessage=null,this.percentAlong=null,this.errorCode=null,this.isContentVisible=null,this.status=null}readFromNetworkElement(n,t){return new K({globalId:t.fromGlobalId,networkSourceId:t.fromNetworkSourceId,terminalId:t.fromTerminalId})}writeFromNetworkElement(n,t){n&&(t.fromGlobalId=n.globalId,t.fromNetworkSourceId=n.networkSourceId,t.fromTerminalId=n.terminalId)}readToNetworkElement(n,t){return new K({globalId:t.toGlobalId,networkSourceId:t.toNetworkSourceId,terminalId:t.toTerminalId})}writeToNetworkElement(n,t){n&&(t.toGlobalId=n.globalId,t.toNetworkSourceId=n.networkSourceId,t.toTerminalId=n.terminalId)}};T([k({type:String,json:{write:!0}})],S.prototype,"globalId",void 0),T([k({type:U.apiValues,json:{type:U.jsonValues,read:U.read,write:U.write}})],S.prototype,"associationType",void 0),T([k({type:K,json:{write:{target:{fromGlobalId:{type:String},fromNetworkSourceId:{type:Number},fromTerminalId:{type:Number}}},read:{source:["fromGlobalId","fromNetworkSourceId","fromTerminalId"]}}})],S.prototype,"fromNetworkElement",void 0),T([Fe("fromNetworkElement")],S.prototype,"readFromNetworkElement",null),T([Te("fromNetworkElement")],S.prototype,"writeFromNetworkElement",null),T([k({type:K,json:{write:{target:{toGlobalId:{type:String},toNetworkSourceId:{type:Number},toTerminalId:{type:Number}}},read:{source:["toGlobalId","toNetworkSourceId","toTerminalId"]}}})],S.prototype,"toNetworkElement",void 0),T([Fe("toNetworkElement")],S.prototype,"readToNetworkElement",null),T([Te("toNetworkElement")],S.prototype,"writeToNetworkElement",null),T([k({type:Pe,json:{write:!0}})],S.prototype,"geometry",void 0),T([k({type:String,json:{write:!0}})],S.prototype,"errorMessage",void 0),T([k({type:Number,json:{write:!0}})],S.prototype,"percentAlong",void 0),T([k({type:Number,json:{write:!0}})],S.prototype,"errorCode",void 0),T([k({type:Boolean,json:{write:!0}})],S.prototype,"isContentVisible",void 0),T([k({type:Number,json:{write:!0}})],S.prototype,"status",void 0),S=T([re("esri.rest.networks.support.Association")],S);const ft=S;let ae=class extends se{constructor(n){super(n),this.associations=[]}};T([k({type:[ft],json:{write:!0}})],ae.prototype,"associations",void 0),ae=T([re("esri.rest.networks.support.QueryAssociationsResult")],ae);const mt=ae;function pt(n){const{returnDeletes:t,elements:o,gdbVersion:w,moment:I}=n.toJSON();return{returnDeletes:t,elements:JSON.stringify(o.map(e=>({globalId:e.globalId,networkSourceId:e.networkSourceId,terminalId:e.terminalId}))),types:JSON.stringify(n.types.map(e=>U.toJSON(e))).replaceAll('"connectivity"','"junctionJunctionConnectivity"'),gdbVersion:w,moment:I}}async function yt(n,t,o){const w=dt(n),I={...pt(t),f:"json"},e=ct({...w.query,...I}),a=ut(e,{...o,method:"post"}),r=`${w.path}/associations/query`,{data:l}=await Re(r,a),m=mt.fromJSON(l);return t.types.includes("connectivity")&&Me(Ue.getLogger("esri/rest/networks/support/QueryAssociationsParameters"),"types",{replacement:"Please use 'junction-junction-connectivity' instead of 'connectivity'.",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-networks-support-QueryAssociationsParameters.html#types",version:"4.29",warnOnce:!0}),m}var me;let V=me=class extends se{static from(n){return Oe(me,n)}constructor(n){super(n),this.returnDeletes=!1,this.elements=[],this.types=[],this.gdbVersion=null,this.moment=null}};T([k({type:Boolean,json:{write:!0}})],V.prototype,"returnDeletes",void 0),T([k({type:[K],json:{write:!0}})],V.prototype,"elements",void 0),T([k({type:[U.apiValues],json:{type:U.jsonValues,read:U.read,write:U.write}})],V.prototype,"types",void 0),T([k({type:String,json:{write:!0}})],V.prototype,"gdbVersion",void 0),T([k({type:Date,json:{type:Number,write:{writer:(n,t)=>{t.moment=n?.getTime()}}}})],V.prototype,"moment",void 0),V=me=T([re("esri.rest.networks.support.QueryAssociationsParameters")],V);const wt=V;function gt(n){if(n.length===1){if(A(n[0]))return de("distinct",n[0],-1);if(W(n[0]))return de("distinct",n[0].toArray(),-1)}return de("distinct",n,-1)}function pe(n,t,o){const w=n.getVariables();if(w.length>0){const I={};for(const e of w)I[e]=t.evaluateIdentifier(o,{name:e});n.parameters=I}return n}function f(n,t,o=null){for(const w in n)if(w.toLowerCase()===t.toLowerCase())return n[w];return o}function je(n){if(n===null)return null;const t={type:f(n,"type",""),name:f(n,"name","")};if(t.type==="range")t.range=f(n,"range",[]);else{t.codedValues=[];for(const o of f(n,"codedValues",[]))t.codedValues.push({name:f(o,"name",""),code:f(o,"code",null)})}return t}function ye(n){if(n===null)return null;const t={},o=f(n,"wkt");o!==null&&(t.wkt=o);const w=f(n,"wkid");return w!==null&&(t.wkid=w),t}function Le(n){if(n===null)return null;const t={hasZ:f(n,"hasz",!1),hasM:f(n,"hasm",!1)},o=f(n,"spatialreference");o!=null&&(t.spatialReference=ye(o));const w=f(n,"x",null);if(w!==null)return t.x=w,t.y=f(n,"y",null),t.hasZ&&(t.z=f(n,"z",null)),t.hasM&&(t.m=f(n,"m",null)),t;const I=f(n,"rings",null);if(I!==null)return t.rings=I,t;const e=f(n,"paths",null);if(e!==null)return t.paths=e,t;const a=f(n,"points",null);if(a!==null)return t.points=a,t;for(const r of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const l=f(n,r,null);l!==null&&(t[r]=l)}return t}function It(n,t){for(const o of t)if(o===n)return!0;return!1}function ht(n){return!!n.layerDefinition&&!!n.featureSet&&It(n.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&A(n.layerDefinition.fields)!==!1&&A(n.featureSet.features)!==!1}function _(n){return n?.toLowerCase()==="utc"?"UTC":n?.toLowerCase()==="unknown"?"Unknown":n}async function bt(n,t,o,w,I,e,a){const r=await n.getFeatureSetInfo();if((r?.layerId??null)===null||!I.layerIdLookup.get(r.layerId))return null;const l=n.serviceUrl().replace(/\/FeatureServer/i,"/UtilityNetworkServer"),m=[];switch(o){case"connected":m.push("connectivity"),m.push("junction-edge-from-connectivity"),m.push("junction-edge-to-connectivity"),m.push("junction-edge-midspan-connectivity"),m.push("junction-junction-connectivity");break;case"container":case"content":m.push("containment");break;case"structure":case"attached":m.push("attachment");break;case"junctionedge":m.push("junction-edge-from-connectivity"),m.push("junction-edge-to-connectivity");break;case"midspan":m.push("junction-edge-midspan-connectivity");break;default:throw new p(e,y.InvalidParameter,a)}let c=null,s=!1;if(w!==null&&w!==""&&w!==void 0){for(const u of I.terminals)u.terminalName===w&&(c=u.terminalId);c===null&&(s=!0)}const i=[];if(!s){const u=new K({globalId:t.field(n.globalIdField),networkSourceId:I.layerIdLookup.get(r.layerId).sourceId,...c?{terminalId:c}:""}),x=await yt(l,new wt({types:m,elements:[u]}));let N=0;for(const g of x.associations){let F=null,z="",P="";if(g.fromNetworkElement?.globalId===u.globalId?(F=g.toNetworkElement,P="to"):g.toNetworkElement?.globalId===u.globalId&&(F=g.fromNetworkElement,P="from"),!F)continue;switch(o){case"attached":if(g.associationType!=="attachment"||P!=="to")continue;break;case"structure":if(g.associationType!=="attachment"||P!=="from")continue;break;case"container":if(g.associationType!=="containment"||P!=="from")continue;break;case"content":if(g.associationType!=="containment"||P!=="to")continue;break;case"connected":break;case"junctionedge":g.associationType==="junction-edge-to-connectivity"?z="to":g.associationType==="junction-edge-from-connectivity"&&(z="from");break;case"midspan":if(g.associationType!=="junction-edge-midspan-connectivity")continue}const J=I.sourceIdLookup.get(F.networkSourceId)?.className??"";i.push(new Je({geometry:null,attributes:{objectId:N++,globalId:F.globalId,percentAlong:g.percentAlong??0,isContentVisible:g.isContentVisible?0:1,className:J,side:z}}))}}const d=new Ae({source:i,geometryType:null,objectIdField:"objectId",globalIdField:"globalId",fields:[new $({name:"objectId",alias:"objectId",type:"oid"}),new $({name:"globalId",alias:"globalId",type:"global-id"}),new $({name:"percentAlong",alias:"percentAlong",type:"double"}),new $({name:"side",alias:"side",type:"string"}),new $({name:"isContentVisible",alias:"isContentVisible",type:"integer"}),new $({name:"className",alias:"className",type:"string"})]});return te(d)}function Ft(n){n.mode==="async"&&(n.functions.timezone=function(t,o){return n.standardFunctionAsync(t,o,async(w,I,e)=>{if(v(e,1,2,t,o),He(e[0])||le(e[0]))return"Unknown";if(C(e[0])){if(await e[0].load(),e.length===1||e[1]===null)return e[0].datesInUnknownTimezone?_("unknown"):_(e[0].dateFieldsTimeZone);if(!(e[1]instanceof M)||e[1].hasField("type")===!1)throw new p(t,y.InvalidParameter,o);const l=e[1].field("type");if(R(l)===!1)throw new p(t,y.InvalidParameter,o);switch(D(l).toLowerCase()){case"preferredtimezone":return _(e[0].preferredTimeZone);case"editfieldsinfo":return _(e[0].editFieldsInfo?.timeZone??null);case"timeinfo":return _(e[0].timeInfo?.timeZone??null);case"field":if(e[1].hasField("fieldname")&&R(e[1].field("fieldname")))return _(e[0].fieldTimeZone(D(e[1].field("fieldname"))))}throw new p(t,y.InvalidParameter,o)}const a=We(e[0],Ee(t));if(a===null)return null;const r=a.timeZone;return r==="system"?Ge.systemTimeZoneCanonicalName:r.toLowerCase()==="utc"?"UTC":r.toLowerCase()==="unknown"?"Unknown":r})},n.functions.sqltimestamp=function(t,o){return n.standardFunctionAsync(t,o,async(w,I,e)=>{v(e,1,3,t,o);const a=e[0];if(ve(a)){if(e.length===1)return a.toSQLWithKeyword();if(e.length===2)return a.changeTimeZone(D(e[1])).toSQLWithKeyword();throw new p(t,y.InvalidParameter,o)}if(le(a))return a.toSQLWithKeyword();if(C(a)){if(e.length!==3)throw new p(t,y.InvalidParameter,o);await a.load();const r=D(e[1]);if(le(e[2]))return e[2].toSQLWithKeyword();if(ve(e[2])===!1)throw new p(t,y.InvalidParameter,o);const l=a.fieldTimeZone(r);return l==null?e[2].toSQLWithKeyword():e[2].changeTimeZone(l).toSQLWithKeyword()}throw new p(t,y.InvalidParameter,o)})},n.signatures.push({name:"sqltimestamp",min:2,max:4}),n.functions.featuresetbyid=function(t,o){return n.standardFunctionAsync(t,o,(w,I,e)=>{if(v(e,2,4,t,o),De(e[0])){const a=D(e[1]);let r=L(e[2],null);const l=Q(L(e[3],!0));if(r===null&&(r=["*"]),A(r)===!1)throw new p(t,y.InvalidParameter,o);return e[0].featureSetById(a,l,r)}throw new p(t,y.InvalidParameter,o)})},n.signatures.push({name:"featuresetbyid",min:2,max:4}),n.functions.getfeatureset=function(t,o){return n.standardFunctionAsync(t,o,async(w,I,e)=>{if(v(e,1,2,t,o),X(e[0])){let a=L(e[1],"datasource");return a===null&&(a="datasource"),a=D(a).toLowerCase(),_e(e[0].fullSchema(),a,t.lrucache,t.interceptor,t.spatialReference??null)}throw new p(t,y.InvalidParameter,o)})},n.signatures.push({name:"getfeatureset",min:1,max:2}),n.functions.featuresetbyportalitem=function(t,o){return n.standardFunctionAsync(t,o,(w,I,e)=>{if(v(e,2,5,t,o),e[0]===null)throw new p(t,y.PortalRequired,o);if(e[0]instanceof Be){const c=D(e[1]),s=D(e[2]);let i=L(e[3],null);const d=Q(L(e[4],!0));if(i===null&&(i=["*"]),A(i)===!1)throw new p(t,y.InvalidParameter,o);let u;return u=t.services?.portal?t.services.portal:Ne.getDefault(),u=st(e[0],u),xe(c,s,t.spatialReference??null,i,d,u,t.lrucache,t.interceptor)}if(R(e[0])===!1)throw new p(t,y.PortalRequired,o);const a=D(e[0]),r=D(e[1]);let l=L(e[2],null);const m=Q(L(e[3],!0));if(l===null&&(l=["*"]),A(l)===!1)throw new p(t,y.InvalidParameter,o);return xe(a,r,t.spatialReference??null,l,m,t.services?.portal??Ne.getDefault(),t.lrucache,t.interceptor)})},n.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),n.functions.featuresetbyname=function(t,o){return n.standardFunctionAsync(t,o,(w,I,e)=>{if(v(e,2,4,t,o),De(e[0])){const a=D(e[1]);let r=L(e[2],null);const l=Q(L(e[3],!0));if(r===null&&(r=["*"]),A(r)===!1)throw new p(t,y.InvalidParameter,o);return e[0].featureSetByName(a,l,r)}throw new p(t,y.InvalidParameter,o)})},n.signatures.push({name:"featuresetbyname",min:2,max:4}),n.functions.featureset=function(t,o){return n.standardFunction(t,o,(w,I,e)=>{v(e,1,1,t,o);const a={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",hasM:!1,hasZ:!1,fields:[]},featureSet:{geometryType:"",features:[]}};if(R(e[0])){const r=JSON.parse(e[0]);r.layerDefinition!==void 0?(a.layerDefinition=r.layerDefinition,a.featureSet=r.featureSet,r.layerDefinition.spatialReference&&(a.layerDefinition.spatialReference=r.layerDefinition.spatialReference)):(a.featureSet.features=r.features,a.featureSet.geometryType=r.geometryType,a.layerDefinition.geometryType=a.featureSet.geometryType,a.layerDefinition.objectIdField=r.objectIdFieldName??"",a.layerDefinition.typeIdField=r.typeIdFieldName,a.layerDefinition.globalIdField=r.globalIdFieldName,a.layerDefinition.fields=r.fields,r.spatialReference&&(a.layerDefinition.spatialReference=r.spatialReference))}else{if(!(e[0]instanceof M))throw new p(t,y.InvalidParameter,o);{const r=JSON.parse(e[0].castToText(!0)),l=f(r,"layerdefinition");if(l!==null){a.layerDefinition.geometryType=f(l,"geometrytype",""),a.featureSet.geometryType=a.layerDefinition.geometryType,a.layerDefinition.globalIdField=f(l,"globalidfield",""),a.layerDefinition.objectIdField=f(l,"objectidfield",""),a.layerDefinition.typeIdField=f(l,"typeidfield",""),a.layerDefinition.hasZ=f(l,"hasz",!1)===!0,a.layerDefinition.hasM=f(l,"hasm",!1)===!0;const m=f(l,"spatialreference");m&&(a.layerDefinition.spatialReference=ye(m));const c=[];for(const i of f(l,"fields",[])){const d={name:f(i,"name",""),alias:f(i,"alias",""),type:f(i,"type",""),nullable:f(i,"nullable",!0),editable:f(i,"editable",!0),length:f(i,"length",null),domain:je(f(i,"domain"))};c.push(d)}a.layerDefinition.fields=c;const s=f(r,"featureset");if(s){const i={};for(const d of c)i[d.name.toLowerCase()]=d.name;for(const d of f(s,"features",[])){const u={},x=f(d,"attributes",{});for(const N in x)u[i[N.toLowerCase()]]=x[N];a.featureSet.features.push({attributes:u,geometry:Le(f(d,"geometry"))})}}}else{a.layerDefinition.hasZ=f(r,"hasz",!1)===!0,a.layerDefinition.hasM=f(r,"hasm",!1)===!0,a.layerDefinition.geometryType=f(r,"geometrytype",""),a.featureSet.geometryType=a.layerDefinition.geometryType,a.layerDefinition.objectIdField=f(r,"objectidfieldname",""),a.layerDefinition.typeIdField=f(r,"typeidfieldname","");const m=f(r,"spatialreference");m&&(a.layerDefinition.spatialReference=ye(m));const c=[],s=f(r,"fields",null);if(!A(s))throw new p(t,y.InvalidParameter,o);for(const u of s){const x={name:f(u,"name",""),alias:f(u,"alias",""),type:f(u,"type",""),nullable:f(u,"nullable",!0),editable:f(u,"editable",!0),length:f(u,"length",null),domain:je(f(u,"domain"))};c.push(x)}a.layerDefinition.fields=c;const i={};for(const u of c)i[u.name.toLowerCase()]=u.name;let d=f(r,"features",null);if(A(d))for(const u of d){const x={},N=f(u,"attributes",{});for(const g in N)x[i[g.toLowerCase()]]=N[g];a.featureSet.features.push({attributes:x,geometry:Le(f(u,"geometry",null))})}else d=null,a.featureSet.features=d}}}if(ht(a)===!1)throw new p(t,y.InvalidParameter,o);return a.layerDefinition.geometryType||(a.layerDefinition.geometryType="esriGeometryNull"),Ye.create(a,t.spatialReference)})},n.signatures.push({name:"featureset",min:1,max:1}),n.functions.filter=function(t,o){return n.standardFunctionAsync(t,o,async(w,I,e)=>{if(v(e,2,2,t,o),A(e[0])||W(e[0])){const a=[];let r,l=e[0];if(l instanceof rt&&(l=l.toArray()),!Qe(e[1]))throw new p(t,y.InvalidParameter,o);r=e[1].createFunction(t);for(const m of l){const c=r(m);Ve(c)?await c===!0&&a.push(m):c===!0&&a.push(m)}return a}if(C(e[0])){const a=await e[0].load(),r=E.create(e[1],{fieldsIndex:a.getFieldsIndex(),timeZone:a.dateFieldsTimeZoneDefaultUTC}),l=r.getVariables();if(l.length>0){const m={};for(const c of l)m[c]=n.evaluateIdentifier(t,{name:c});r.parameters=m}return new ce({parentfeatureset:e[0],whereclause:r})}throw new p(t,y.InvalidParameter,o)})},n.signatures.push({name:"filter",min:2,max:2}),n.functions.orderby=function(t,o){return n.standardFunctionAsync(t,o,async(w,I,e)=>{if(v(e,2,2,t,o),C(e[0])){const a=new Xe(e[1]);return new et({parentfeatureset:e[0],orderbyclause:a})}throw new p(t,y.InvalidParameter,o)})},n.signatures.push({name:"orderby",min:2,max:2}),n.functions.top=function(t,o){return n.standardFunctionAsync(t,o,async(w,I,e)=>{if(v(e,2,2,t,o),C(e[0]))return new tt({parentfeatureset:e[0],topnum:e[1]});if(A(e[0]))return q(e[1])>=e[0].length?e[0].slice():e[0].slice(0,q(e[1]));if(W(e[0]))return q(e[1])>=e[0].length()?e[0].slice():e[0].slice(0,q(e[1]));throw new p(t,y.InvalidParameter,o)})},n.signatures.push({name:"top",min:2,max:2}),n.functions.first=function(t,o){return n.standardFunctionAsync(t,o,async(w,I,e)=>{if(v(e,1,1,t,o),C(e[0])){const a=await e[0].first(w.abortSignal);if(a!==null){const r=qe.createFromGraphicLikeObject(a.geometry,a.attributes,e[0],t.timeZone);return r._underlyingGraphic=a,r}return a}return A(e[0])?e[0].length===0?null:e[0][0]:W(e[0])?e[0].length()===0?null:e[0].get(0):null})},n.signatures.push({name:"first",min:1,max:1}),n.functions.attachments=function(t,o){return n.standardFunctionAsync(t,o,async(w,I,e)=>{v(e,1,2,t,o);const a={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof M){if(e[1].hasField("minsize")&&(a.minsize=q(e[1].field("minsize"))),e[1].hasField("metadata")&&(a.returnMetadata=Q(e[1].field("metadata"))),e[1].hasField("maxsize")&&(a.maxsize=q(e[1].field("maxsize"))),e[1].hasField("types")){const r=Ke(e[1].field("types"),!1);r.length>0&&(a.types=r)}}else if(e[1]!==null)throw new p(t,y.InvalidParameter,o)}if(X(e[0])){const r=e[0]._layer;let l;if(C(r))l=r;else{if(r==null||!ke(r))return[];l=te(r,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)}return await l.load(),l.queryAttachments(e[0].field(l.objectIdField),a.minsize,a.maxsize,a.types,a.returnMetadata)}if(e[0]===null)return[];throw new p(t,y.InvalidParameter,o)})},n.signatures.push({name:"attachments",min:1,max:2}),n.functions.featuresetbyrelationshipname=function(t,o){return n.standardFunctionAsync(t,o,async(w,I,e)=>{v(e,2,4,t,o);const a=e[0],r=D(e[1]);let l=L(e[2],null);const m=Q(L(e[3],!0));if(l===null&&(l=["*"]),A(l)===!1)throw new p(t,y.InvalidParameter,o);if(e[0]===null)return null;if(!X(e[0]))throw new p(t,y.InvalidParameter,o);const c=a._layer;let s;if(C(c))s=c;else{if(c==null||!ke(c))return null;s=te(c,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)}s=await s.load();const i=s.relationshipMetaData().filter(g=>g.name===r);if(i.length===0)return null;if(i[0].relationshipTableId!==void 0&&i[0].relationshipTableId!==null&&i[0].relationshipTableId>-1)return nt(s,i[0],a.field(s.objectIdField),s.spatialReference,l,m,t.lrucache,t.interceptor);let d=s.serviceUrl();if(!d)return null;d=d.charAt(d.length-1)==="/"?d+i[0].relatedTableId.toString():d+"/"+i[0].relatedTableId.toString();const u=await at(d,s.spatialReference,l,m,t.lrucache,t.interceptor);await u.load();let x=u.relationshipMetaData();if(x=x.filter(g=>g.id===i[0].id),a.hasField(i[0].keyField)===!1||a.field(i[0].keyField)===null){const g=await s.getFeatureByObjectId(a.field(s.objectIdField),[i[0].keyField]);if(g){const F=E.create(x[0].keyField+"= @id",{fieldsIndex:u.getFieldsIndex(),timeZone:u.dateFieldsTimeZoneDefaultUTC});return F.parameters={id:g.attributes[i[0].keyField]},u.filter(F)}return new lt({parentfeatureset:u})}const N=E.create(x[0].keyField+"= @id",{fieldsIndex:u.getFieldsIndex(),timeZone:u.dateFieldsTimeZoneDefaultUTC});return N.parameters={id:a.field(i[0].keyField)},u.filter(N)})},n.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),n.functions.featuresetbyassociation=function(t,o){return n.standardFunctionAsync(t,o,async(w,I,e)=>{v(e,2,3,t,o);const a=e[0],r=D(L(e[1],"")).toLowerCase(),l=R(e[2])?D(e[2]):null;if(e[0]===null)return null;if(!X(e[0]))throw new p(t,y.InvalidParameter,o);let m=a._layer;if(m instanceof Ae&&(m=te(m,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),m===null||C(m)===!1)return null;await m.load();const c=m.serviceUrl(),s=await ot(c,t.spatialReference,!0);if(s.unVersion>=8)return await bt(m,a,r,l,s,t,o);const i=s.associations;let d=null,u=null,x=!1;if(l!==null&&l!==""&&l!==void 0){for(const b of s.terminals)b.terminalName===l&&(u=b.terminalId);u===null&&(x=!0)}const N=i.getFieldsIndex(),g=N.get("TOGLOBALID").name,F=N.get("FROMGLOBALID").name,z=N.get("TOTERMINALID").name,P=N.get("FROMTERMINALID").name,J=N.get("FROMNETWORKSOURCEID").name,Y=N.get("TONETWORKSOURCEID").name,H=N.get("ASSOCIATIONTYPE").name,Ze=N.get("ISCONTENTVISIBLE").name,$e=N.get("OBJECTID").name;for(const b of m.fields)if(b.type==="global-id"){d=a.field(b.name);break}let O=null,we=new B(new $({name:"percentalong",alias:"percentalong",type:"double"}),E.create("0",{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC})),ge=new B(new $({name:"side",alias:"side",type:"string"}),E.create("''",{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC}));const j="globalid",Ie="globalId",he={};for(const b in s.lkp)he[b]=s.lkp[b].sourceId;const G=new it(new $({name:"classname",alias:"classname",type:"string"}),null,he);let h="";switch(r){case"midspan":{h=`((${g}='${d}') OR ( ${F}='${d}')) AND (${H} IN (5))`,G.codefield=E.create(`CASE WHEN (${g}='${d}') THEN ${J} ELSE ${Y} END`,{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC});const b=fe(Z.findField(i.fields,F));b.name=j,b.alias=j,O=new B(b,E.create(`CASE WHEN (${F}='${d}') THEN ${g} ELSE ${F} END`,{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC})),we=s.unVersion>=4?new ue(Z.findField(i.fields,N.get("PERCENTALONG").name)):new B(new $({name:"percentalong",alias:"percentalong",type:"double"}),E.create("0",{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC}));break}case"junctionedge":{h=`((${g}='${d}') OR ( ${F}='${d}')) AND (${H} IN (4,6))`,G.codefield=E.create(`CASE WHEN (${g}='${d}') THEN ${J} ELSE ${Y} END`,{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC});const b=fe(Z.findField(i.fields,F));b.name=j,b.alias=j,O=new B(b,E.create(`CASE WHEN (${F}='${d}') THEN ${g} ELSE ${F} END`,{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC})),ge=new B(new $({name:"side",alias:"side",type:"string"}),E.create(`CASE WHEN (${H}=4) THEN 'from' ELSE 'to' END`,{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC}));break}case"connected":{let b=`${g}='@T'`,be=`${F}='@T'`;u!==null&&(b+=` AND ${z}=@A`,be+=` AND ${P}=@A`),h="(("+b+") OR ("+be+"))",h=ee(h,"@T",d??""),b=ee(b,"@T",d??""),u!==null&&(b=ee(b,"@A",u.toString()),h=ee(h,"@A",u.toString())),G.codefield=E.create("CASE WHEN "+b+` THEN ${J} ELSE ${Y} END`,{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC});const oe=fe(Z.findField(i.fields,F));oe.name=j,oe.alias=j,O=new B(oe,E.create("CASE WHEN "+b+` THEN ${F} ELSE ${g} END`,{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC}));break}case"container":h=`${g}='${d}' AND ${H} = 2`,u!==null&&(h+=` AND ${z} = `+u.toString()),G.codefield=J,h="( "+h+" )",O=new ne(Z.findField(i.fields,F),j,j);break;case"content":h=`(${F}='${d}' AND ${H} = 2)`,u!==null&&(h+=` AND ${P} = `+u.toString()),G.codefield=Y,h="( "+h+" )",O=new ne(Z.findField(i.fields,g),j,j);break;case"structure":h=`(${g}='${d}' AND ${H} = 3)`,u!==null&&(h+=` AND ${z} = `+u.toString()),G.codefield=J,h="( "+h+" )",O=new ne(Z.findField(i.fields,F),j,Ie);break;case"attached":h=`(${F}='${d}' AND ${H} = 3)`,u!==null&&(h+=` AND ${P} = `+u.toString()),G.codefield=Y,h="( "+h+" )",O=new ne(Z.findField(i.fields,g),j,Ie);break;default:throw new p(t,y.InvalidParameter,o)}return x&&(h="1 <> 1"),new Z({parentfeatureset:i,adaptedFields:[new ue(Z.findField(i.fields,$e)),new ue(Z.findField(i.fields,Ze)),O,ge,G,we],extraFilter:h?E.create(h,{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC}):null})})},n.signatures.push({name:"featuresetbyassociation",min:2,max:6}),n.functions.groupby=function(t,o){return n.standardFunctionAsync(t,o,async(w,I,e)=>{if(v(e,3,3,t,o),!C(e[0]))throw new p(t,y.InvalidParameter,o);const a=await e[0].load(),r=[],l=[];let m=!1,c=[];if(R(e[1]))c.push(e[1]);else if(e[1]instanceof M)c.push(e[1]);else if(A(e[1]))c=e[1];else{if(!W(e[1]))throw new p(t,y.InvalidParameter,o);c=e[1].toArray()}for(const s of c)if(R(s)){const i=E.create(D(s),{fieldsIndex:a.getFieldsIndex(),timeZone:a.dateFieldsTimeZoneDefaultUTC}),d=Se(i)===!0?D(s):"%%%%FIELDNAME";r.push({name:d,expression:i}),d==="%%%%FIELDNAME"&&(m=!0)}else{if(!(s instanceof M))throw new p(t,y.InvalidParameter,o);{const i=s.hasField("name")?s.field("name"):"%%%%FIELDNAME",d=s.hasField("expression")?s.field("expression"):"";if(i==="%%%%FIELDNAME"&&(m=!0),!i)throw new p(t,y.InvalidParameter,o);r.push({name:i,expression:E.create(d||i,{fieldsIndex:a.getFieldsIndex(),timeZone:a.dateFieldsTimeZoneDefaultUTC})})}}if(c=[],R(e[2]))c.push(e[2]);else if(A(e[2]))c=e[2];else if(W(e[2]))c=e[2].toArray();else{if(!(e[2]instanceof M))throw new p(t,y.InvalidParameter,o);c.push(e[2])}for(const s of c){if(!(s instanceof M))throw new p(t,y.InvalidParameter,o);{const i=s.hasField("name")?s.field("name"):"",d=s.hasField("statistic")?s.field("statistic"):"",u=s.hasField("expression")?s.field("expression"):"";if(!i||!d||!u)throw new p(t,y.InvalidParameter,o);l.push({name:i,statistic:d.toLowerCase(),expression:E.create(u,{fieldsIndex:a.getFieldsIndex(),timeZone:a.dateFieldsTimeZoneDefaultUTC})})}}if(m){const s={};for(const d of a.fields)s[d.name.toLowerCase()]=1;for(const d of r)d.name!=="%%%%FIELDNAME"&&(s[d.name.toLowerCase()]=1);for(const d of l)d.name!=="%%%%FIELDNAME"&&(s[d.name.toLowerCase()]=1);let i=0;for(const d of r)if(d.name==="%%%%FIELDNAME"){for(;s["field_"+i.toString()]===1;)i++;s["field_"+i.toString()]=1,d.name="FIELD_"+i.toString()}}for(const s of r)pe(s.expression,n,t);for(const s of l)pe(s.expression,n,t);return e[0].groupby(r,l)})},n.signatures.push({name:"groupby",min:3,max:3}),n.functions.distinct=function(t,o){return n.standardFunctionAsync(t,o,async(w,I,e)=>{if(C(e[0])){v(e,2,2,t,o);const a=await e[0].load(),r=[];let l=[];if(R(e[1]))l.push(e[1]);else if(e[1]instanceof M)l.push(e[1]);else if(A(e[1]))l=e[1];else{if(!W(e[1]))throw new p(t,y.InvalidParameter,o);l=e[1].toArray()}let m=!1;for(const c of l)if(R(c)){const s=E.create(D(c),{fieldsIndex:a.getFieldsIndex(),timeZone:a.dateFieldsTimeZoneDefaultUTC}),i=Se(s)===!0?D(c):"%%%%FIELDNAME";r.push({name:i,expression:s}),i==="%%%%FIELDNAME"&&(m=!0)}else{if(!(c instanceof M))throw new p(t,y.InvalidParameter,o);{const s=c.hasField("name")?c.field("name"):"%%%%FIELDNAME",i=c.hasField("expression")?c.field("expression"):"";if(s==="%%%%FIELDNAME"&&(m=!0),!s)throw new p(t,y.InvalidParameter,o);r.push({name:s,expression:E.create(i||s,{fieldsIndex:a.getFieldsIndex(),timeZone:a.dateFieldsTimeZoneDefaultUTC})})}}if(m){const c={};for(const i of a.fields)c[i.name.toLowerCase()]=1;for(const i of r)i.name!=="%%%%FIELDNAME"&&(c[i.name.toLowerCase()]=1);let s=0;for(const i of r)if(i.name==="%%%%FIELDNAME"){for(;c["field_"+s.toString()]===1;)s++;c["field_"+s.toString()]=1,i.name="FIELD_"+s.toString()}}for(const c of r)pe(c.expression,n,t);return e[0].groupby(r,[])}return gt(e)})},n.functions.getfeaturesetinfo=function(t,o){return n.standardFunctionAsync(t,o,async(w,I,e)=>{if(v(e,1,1,t,o),!C(e[0]))return null;const a=await e[0].getFeatureSetInfo();return a?M.convertObjectToArcadeDictionary({layerId:a.layerId,layerName:a.layerName,itemId:a.itemId,serviceLayerUrl:a.serviceLayerUrl,webMapLayerId:a.webMapLayerId??null,webMapLayerTitle:a.webMapLayerTitle??null,className:null,objectClassId:null},Ee(t),!1,!1):null})},n.signatures.push({name:"getfeaturesetinfo",min:1,max:1}),n.functions.filterbysubtypecode=function(t,o){return n.standardFunctionAsync(t,o,async(w,I,e)=>{if(v(e,2,2,t,o),C(e[0])){const a=await e[0].load(),r=e[1];if(!ze(r))throw new p(t,y.InvalidParameter,o);if(a.subtypeField){const m=E.create(`${a.subtypeField}= ${e[1]}`,{fieldsIndex:a.getFieldsIndex(),timeZone:a.dateFieldsTimeZoneDefaultUTC});return new ce({parentfeatureset:e[0],whereclause:m})}if(a.typeIdField===null||a.typeIdField==="")throw new p(t,y.FeatureSetDoesNotHaveSubtypes,o);const l=E.create(`${a.typeIdField}= ${e[1]}`,{fieldsIndex:a.getFieldsIndex(),timeZone:a.dateFieldsTimeZoneDefaultUTC});return new ce({parentfeatureset:e[0],whereclause:l})}throw new p(t,y.InvalidParameter,o)})},n.signatures.push({name:"filterbysubtypecode",min:2,max:2}))}export{Ft as registerFunctions};
