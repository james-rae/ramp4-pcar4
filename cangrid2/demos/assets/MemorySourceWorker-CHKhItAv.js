import { di as Z, s, dj as i, dl as K, dk as H, b6 as i$1, cY as p, dq as et, dr as nt, ds as tt, dh as g, aH as u } from './main-CGBWc59Z.js';
import { t, n } from './objectIdUtils-DbyWascn.js';
import { m } from './FeatureStore-BEDETHh3.js';
import { x, j as j$1 } from './timeSupport-B8yJYqAw.js';
import { $ } from './QueryEngine-xZNZ2wBq.js';
import { i as i$2, o, c } from './clientSideDefaults-DokujK5o.js';
import { j, f, p as p$1, d, y } from './sourceUtils-kq2iGOgB.js';
import './preload-helper-dJJaZANz.js';
import './BoundsStore-B8jlL01T.js';
import './PooledRBush-CkUzAC4H.js';
import './json-DYk0G9qS.js';
import './WhereClause-3pL4DCSU.js';
import './TimeOnly-BZ2-EQE7.js';
import './QueryEngineCapabilities-wlDphL4g.js';
import './utils-CPQvVcJK.js';
import './utils-Ds0jPQyL.js';
import './utils-_ntP36Td.js';
import './date-BnBdrlFs.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const R=g,q={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:g},D={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function O(e){return u(e)?null!=e.z:!!e.hasZ}function w(e){return u(e)?null!=e.m:!!e.hasM}class S{constructor(){this._queryEngine=null,this._nextObjectId=null;}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null;}async load(t$1){const i$3=[],{features:s$1}=t$1,n$1=this._inferLayerProperties(s$1,t$1.fields),r=t$1.fields||[],a=null!=t$1.hasM?t$1.hasM:!!n$1.hasM,p=null!=t$1.hasZ?t$1.hasZ:!!n$1.hasZ,h=!t$1.spatialReference&&!n$1.spatialReference,g=h?R:t$1.spatialReference||n$1.spatialReference,I=h?q:null,F=t$1.geometryType||n$1.geometryType,b=!F;let O=t$1.objectIdField||n$1.objectIdField,w=t$1.timeInfo;const S=new Z(r);if(!b&&(h&&i$3.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!F))throw new s("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!O)throw new s("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n$1.objectIdField&&O!==n$1.objectIdField&&(i$3.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${O}" doesn't match the field name "${n$1.objectIdField}", found in the provided fields`}),O=n$1.objectIdField),O&&!n$1.objectIdField){const e=S.get(O);e?(O=e.name,e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r.unshift({alias:O,name:O,type:"esriFieldTypeOID",editable:!1,nullable:!1});}for(const o of r){if(null==o.name&&(o.name=o.alias),null==o.alias&&(o.alias=o.name),!o.name)throw new s("feature-layer:invalid-field-name","field name is missing",{field:o});if(o.name===O&&(o.type="esriFieldTypeOID"),!i.jsonValues.includes(o.type))throw new s("feature-layer:invalid-field-type",`invalid type for field "${o.name}"`,{field:o});null==o.length&&(o.length=K(o));}const v={};for(const e of r)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=H(e);void 0!==t&&(v[e.name]=t);}if(w){if(w.startTimeField){const e=S.get(w.startTimeField);e?(w.startTimeField=e.name,e.type="esriFieldTypeDate"):w.startTimeField=null;}if(w.endTimeField){const e=S.get(w.endTimeField);e?(w.endTimeField=e.name,e.type="esriFieldTypeDate"):w.endTimeField=null;}if(w.trackIdField){const e=S.get(w.trackIdField);e?w.trackIdField=e.name:(w.trackIdField=null,i$3.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:w}}));}w.startTimeField||w.endTimeField||(i$3.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:w}}),w=null);}const Q=S.dateFields.length?{timeZoneIANA:t$1.dateFieldsTimeZone??i$1}:null;this._createDefaultAttributes=i$2(v,O);const M={warnings:i$3,featureErrors:[],layerDefinition:{...D,drawingInfo:o(F),templates:c(v),extent:I,geometryType:F,objectIdField:O,fields:r,hasZ:p,hasM:a,timeInfo:w,dateFieldsTimeReference:Q},assignedObjectIds:{}};if(this._queryEngine=new $({fieldsIndex:Z.fromLayerJSON({fields:r,timeInfo:w,dateFieldsTimeReference:Q}),geometryType:F,hasM:a,hasZ:p,objectIdField:O,spatialReference:g,featureStore:new m({geometryType:F,hasM:a,hasZ:p}),timeInfo:w,cacheSpatialQueries:!0}),!s$1?.length)return this._nextObjectId=t,M;const Z$1=n(O,s$1);return this._nextObjectId=Z$1+1,await x(s$1,g),this._loadInitialFeatures(M,s$1)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([j(t,i),x(e.adds,t),x(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,i){let s,n,r=null,a=null,o=null;for(const l of e){const e=l.geometry;if(null!=e&&(r||(r=p(e)),a||(a=e.spatialReference),null==s&&(s=O(e)),null==n&&(n=w(e)),r&&a&&null!=s&&null!=n))break}if(i&&i.length){let e=null;i.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(o=e.name);}return {geometryType:r,spatialReference:a,objectIdField:o,hasM:n,hasZ:s}}async _loadInitialFeatures(e,i){const{geometryType:s,hasM:r,hasZ:a,objectIdField:o,spatialReference:l,featureStore:u,fieldsIndex:d}=this._queryEngine,f$1=[];for(const n of i){if(null!=n.uid&&(e.assignedObjectIds[n.uid]=-1),n.geometry&&s!==p(n.geometry)){e.featureErrors.push(f("Incorrect geometry type."));continue}const i=this._createDefaultAttributes(),r=p$1(d,i,n.attributes,!0);r?e.featureErrors.push(r):(this._assignObjectId(i,n.attributes,!0),n.attributes=i,null!=n.uid&&(e.assignedObjectIds[n.uid]=n.attributes[o]),null!=n.geometry&&(n.geometry=j$1(n.geometry,n.geometry.spatialReference,l)),f$1.push(n));}u.addMany(et([],f$1,s,a,r,o));const{fullExtent:c,timeExtent:m}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=c,m){const{start:t,end:i}=m;e.layerDefinition.timeInfo.timeExtent=[t,i];}return e}async _applyEdits(e){const{adds:t,updates:i,deletes:s}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t?.length&&this._applyAddEdits(n,t),i?.length&&this._applyUpdateEdits(n,i),s?.length){for(const e of s)n.deleteResults.push(d(e));this._queryEngine.featureStore.removeManyById(s);}const{fullExtent:r,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();return {extent:r,timeExtent:a,featureEditResults:n}}_applyAddEdits(e,i){const{addResults:s}=e,{geometryType:r,hasM:a,hasZ:o,objectIdField:l,spatialReference:u,featureStore:d$1,fieldsIndex:f$1}=this._queryEngine,c=[];for(const n of i){if(n.geometry&&r!==p(n.geometry)){s.push(f("Incorrect geometry type."));continue}const i=this._createDefaultAttributes(),a=p$1(f$1,i,n.attributes);if(a)s.push(a);else {if(this._assignObjectId(i,n.attributes),n.attributes=i,null!=n.uid){const t=n.attributes[l];e.uidToObjectId[n.uid]=t;}if(null!=n.geometry){const e=n.geometry.spatialReference??u;n.geometry=j$1(y(n.geometry,e),e,u);}c.push(n),s.push(d(n.attributes[l]));}}d$1.addMany(et([],c,r,o,a,l));}_applyUpdateEdits({updateResults:e},i){const{geometryType:s,hasM:n,hasZ:o,objectIdField:l,spatialReference:u,featureStore:d$1,fieldsIndex:f$1}=this._queryEngine;for(const c of i){const{attributes:i,geometry:m}=c,y$1=i?.[l];if(null==y$1){e.push(f(`Identifier field ${l} missing`));continue}if(!d$1.has(y$1)){e.push(f(`Feature with object id ${y$1} missing`));continue}const h=nt(d$1.getFeature(y$1),s,o,n);if(null!=m){if(s!==p(m)){e.push(f("Incorrect geometry type."));continue}const i=m.spatialReference??u;h.geometry=j$1(y(m,i),i,u);}if(i){const t=p$1(f$1,h.attributes,i);if(t){e.push(t);continue}}d$1.add(tt(h,s,o,n,l)),e.push(d(y$1));}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++;}}

export { S as default };
