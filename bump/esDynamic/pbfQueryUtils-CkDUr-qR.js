import{bh as T,bg as u,s as q}from"./main-uRGA0thB.js";import{n as F}from"./pbf-BxmDZZ5m.js";import{a as I,e as w,s as l}from"./OptimizedFeature-EIithYlr.js";import{e as S}from"./OptimizedFeatureSet-DfZGBuxJ.js";const p=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];let U=class{constructor(s){this._options=s,this.geometryTypes=p,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new S}prepareFeatures(s){this._vertexDimension=2,s.hasZ&&this._vertexDimension++,s.hasM&&this._vertexDimension++}finishFeatureResult(s){if(!s?.features||!s.hasZ||!this._options.sourceSpatialReference||!s.spatialReference||T(s.spatialReference,this._options.sourceSpatialReference)||s.spatialReference.vcsWkid)return;const e=u(this._options.sourceSpatialReference)/u(s.spatialReference);if(e!==1)for(const t of s.features){if(!I(t))continue;const r=t.geometry.coords;for(let a=2;a<r.length;a+=3)r[a]*=e}}addFeature(s,e){s.features.push(e)}createFeature(){return new w}createSpatialReference(){return{wkid:0}}createGeometry(){return new l}addField(s,e){s.fields.push(e)}allocateCoordinates(s){s.coords.length=s.lengths.reduce((e,t)=>e+t,0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(s,e){s.coords[this._coordinatePtr++]=e}addCoordinatePoint(s,e){s.coords.push(e)}addLength(s,e){s.lengths.push(e)}addQueryGeometry(s,e){s.queryGeometry=e.queryGeometry,s.queryGeometryType=e.queryGeometryType}createPointGeometry(){return new l}};const g=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeBigInteger","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],y=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],f=["upperLeft","lowerLeft"];function d(s){return s>=g.length?null:g[s]}function G(s){return s>=y.length?null:y[s]}function b(s){return s>=f.length?null:f[s]}function h(s,e){return e>=s.geometryTypes.length?null:s.geometryTypes[e]}function D(s,e,t){const r=s.asUnsafe(),a=e.createPointGeometry(t);for(;r.next();)switch(r.tag()){case 3:{const n=r.getUInt32(),o=r.pos()+n;let i=0;for(;r.pos()<o;)e.addCoordinatePoint(a,r.getSInt64(),i++);break}default:r.skip()}return a}function R(s,e,t){const r=s.asUnsafe(),a=e.createGeometry(t),n=2+(t.hasZ?1:0)+(t.hasM?1:0);for(;r.next();)switch(r.tag()){case 2:{const o=r.getUInt32(),i=r.pos()+o;let c=0;for(;r.pos()<i;)e.addLength(a,r.getUInt32(),c++);break}case 3:{const o=r.getUInt32(),i=r.pos()+o;let c=0;for(e.allocateCoordinates(a);r.pos()<i;)e.addCoordinate(a,r.getSInt64(),c),c++,c===n&&(c=0);break}default:r.skip()}return a}function x(s){const e=s.asUnsafe(),t=new l;let r="esriGeometryPoint";for(;e.next();)switch(e.tag()){case 2:{const a=e.getUInt32(),n=e.pos()+a;for(;e.pos()<n;)t.lengths.push(e.getUInt32());break}case 3:{const a=e.getUInt32(),n=e.pos()+a;for(;e.pos()<n;)t.coords.push(e.getSInt64());break}case 1:r=p[e.getEnum()];break;default:e.skip()}return{queryGeometry:t,queryGeometryType:r}}function M(s){const e=s.asUnsafe();for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getSInt32();case 5:return e.getUInt32();case 6:return e.getInt64();case 7:return e.getUInt64();case 8:return e.getSInt64();case 9:return e.getBool();default:return e.skip(),null}return null}function k(s){const e=s.asUnsafe(),t={type:d(0)};for(;e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.type=d(e.getEnum());break;case 3:t.alias=e.getString();break;case 4:t.sqlType=G(e.getEnum());break;case 5:e.skip();break;case 6:t.defaultValue=e.getString();break;default:e.skip()}return t}function P(s){const e={},t=s.asUnsafe();for(;t.next();)switch(t.tag()){case 1:e.name=t.getString();break;case 2:e.isSystemMaintained=t.getBool();break;default:t.skip()}return e}function _(s,e,t,r){const a=e.createFeature(t);let n=0;for(;s.next();)switch(s.tag()){case 1:{const o=r[n++].name;a.attributes[o]=s.processMessage(M);break}case 2:a.geometry=s.processMessageWithArgs(R,e,t);break;case 4:a.centroid=s.processMessageWithArgs(D,e,t);break;default:s.skip()}return a}function B(s){const e=[1,1,1,1],t=s.asUnsafe();for(;t.next();)switch(t.tag()){case 1:e[0]=t.getDouble();break;case 2:e[1]=t.getDouble();break;case 4:e[2]=t.getDouble();break;case 3:e[3]=t.getDouble();break;default:t.skip()}return e}function W(s){const e=[0,0,0,0],t=s.asUnsafe();for(;t.next();)switch(t.tag()){case 1:e[0]=t.getDouble();break;case 2:e[1]=t.getDouble();break;case 4:e[2]=t.getDouble();break;case 3:e[3]=t.getDouble();break;default:t.skip()}return e}function m(s){const e={originPosition:b(0)},t=s.asUnsafe();for(;t.next();)switch(t.tag()){case 1:e.originPosition=b(t.getEnum());break;case 2:e.scale=t.processMessage(B);break;case 3:e.translate=t.processMessage(W);break;default:t.skip()}return e}function L(s){const e={},t=s.asUnsafe();for(;t.next();)switch(t.tag()){case 1:e.shapeAreaFieldName=t.getString();break;case 2:e.shapeLengthFieldName=t.getString();break;case 3:e.units=t.getString();break;default:t.skip()}return e}function N(s,e){const t=e.createSpatialReference();for(;s.next();)switch(s.tag()){case 1:t.wkid=s.getUInt32();break;case 5:t.wkt=s.getString();break;case 2:t.latestWkid=s.getUInt32();break;case 3:t.vcsWkid=s.getUInt32();break;case 4:t.latestVcsWkid=s.getUInt32();break;default:s.skip()}return t}function A(s,e){const t=e.createFeatureResult(),r=s.asUnsafe();t.geometryType=h(e,0);let a=!1;for(;r.next();)switch(r.tag()){case 1:t.objectIdFieldName=r.getString();break;case 3:t.globalIdFieldName=r.getString();break;case 4:t.geohashFieldName=r.getString();break;case 5:t.geometryProperties=r.processMessage(L);break;case 7:t.geometryType=h(e,r.getEnum());break;case 8:t.spatialReference=r.processMessageWithArgs(N,e);break;case 10:t.hasZ=r.getBool();break;case 11:t.hasM=r.getBool();break;case 12:t.transform=r.processMessage(m);break;case 9:t.exceededTransferLimit=r.getBool();break;case 13:e.addField(t,r.processMessage(k));break;case 15:a||(e.prepareFeatures(t),a=!0),e.addFeature(t,r.processMessageWithArgs(_,e,t,t.fields));break;case 2:t.uniqueIdField=r.processMessage(P);break;default:r.skip()}return e.finishFeatureResult(t),t}function V(s,e){const t={};let r=null;for(;s.next();)switch(s.tag()){case 4:r=s.processMessageWithArgs(x);break;case 1:t.featureResult=s.processMessageWithArgs(A,e);break;default:s.skip()}return r!=null&&t.featureResult&&e.addQueryGeometry(t,r),t}function C(s,e){try{const t=new F(new Uint8Array(s),new DataView(s)),r={};for(;t.next();)t.tag()===2?r.queryResult=t.processMessageWithArgs(V,e):t.skip();return r}catch(t){throw new q("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:t})}}function v(s,e){const t=C(s,e),r=t.queryResult.featureResult,a=t.queryResult.queryGeometry,n=t.queryResult.queryGeometryType;if(r&&r.features&&r.features.length&&r.objectIdFieldName){const o=r.objectIdFieldName;for(const i of r.features)i.attributes&&(i.objectId=i.attributes[o])}return r&&(r.queryGeometry=a,r.queryGeometryType=n),r}export{U as a,k as b,m as h,v as t};
