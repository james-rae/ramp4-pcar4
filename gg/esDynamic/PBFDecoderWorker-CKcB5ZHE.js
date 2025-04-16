import{M as d,eU as p,fe as c}from"./main-DTtQVgOw.js";import{o as f}from"./projection-CKR9_Ef1.js";import{x as m,w as _,d as y}from"./dehydratedFeatures-B4WFST7N.js";import{M as g,u as P}from"./featureConversionUtils-C_AE9BPE.js";import{y as C}from"./Field-CWWKrSVq.js";import{t as b}from"./pbfQueryUtils-Dgm3VftL.js";function G(i,e){return e}function h(i,e,t,r){switch(t){case 0:return a(i,e+r,0);case 1:return i.originPosition==="lowerLeft"?a(i,e+r,1):v(i,e+r,1)}}function u(i,e,t,r){return t===2?a(i,e,2):h(i,e,t,r)}function A(i,e,t,r){return t===2?a(i,e,3):h(i,e,t,r)}function M(i,e,t,r){return t===3?a(i,e,3):u(i,e,t,r)}function a({translate:i,scale:e},t,r){return i[r]+t*e[r]}function v({translate:i,scale:e},t,r){return i[r]-t*e[r]}class x{constructor(e){this._options=e,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=G,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{},this._missingAttributes=[]}get missingAttributes(){return this._missingAttributes}createFeatureResult(){return new m}finishFeatureResult(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!e.hasZ)return;const t=f(e.geometryType,this._options.sourceSpatialReference,e.spatialReference);if(t!=null)for(const r of e.features)t(r.geometry)}createSpatialReference(){return new d}addField(e,t){e.fields.push(C.fromJSON(t));const r=e.fields.map(s=>s.name);this._attributesConstructor=function(){for(const s of r)this[s]=null}}addFeature(e,t){const r=this._options.maxStringAttributeLength,s=this._options.maxStringAttributeFields;_(t.attributes,s,r,n=>{const o=t.attributes[e.objectIdFieldName];o!=null&&this._missingAttributes.push({objectId:o,attribute:n})}),e.features.push(t)}addQueryGeometry(e,t){const{queryGeometry:r,queryGeometryType:s}=t,n=this._transform?g(r.clone(),r,!1,!1,this._transform):r.clone(),o=P(n,s,!1,!1);switch(s){case"esriGeometryPoint":o.type="point";break;case"esriGeometryPolygon":o.type="polygon";break;case"esriGeometryPolyline":o.type="polyline";break;case"esriGeometryMultipoint":o.type="multipoint"}e.queryGeometryType=s,e.queryGeometry=o}prepareFeatures(e){switch(this._transform=e.transform??null,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++,e.geometryType){case"point":this.addCoordinate=(t,r,s)=>this.addCoordinatePoint(t,r,s),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,r,s)=>this._addCoordinatePolygon(t,r,s),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,r,s)=>this._addCoordinatePolyline(t,r,s),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,r,s)=>this._addCoordinateMultipoint(t,r,s),this.createGeometry=t=>this._createMultipointGeometry(t);break;case"mesh":case"extent":break;default:p(e.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new y(c(),null,new this._attributesConstructor)}allocateCoordinates(){const e=this._lengths.reduce((t,r)=>t+r,0);this._coordinateBuffer=new Float64Array(e*this._vertexDimension),this._coordinateBufferPtr=0}addLength(e,t){this._lengths.length===0&&(this._toAddInCurrentPath=t),this._lengths.push(t)}createPointGeometry(e){const t={type:"point",x:0,y:0,spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM};return t.hasZ&&(t.z=0),t.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){const s=this._transform?this._applyTransform(this._transform,t,r,0):t;if(s!=null)switch(r){case 0:e.x=s;break;case 1:e.y=s;break;case 2:e.hasZ?e.z=s:e.m=s;break;case 3:e.m=s}}_transformPathLikeValue(e,t){let r=0;return t<=1&&(r=this._previousCoordinate[t],this._previousCoordinate[t]+=e),this._transform?this._applyTransform(this._transform,e,t,r):e}_addCoordinatePolyline(e,t,r){this._dehydratedAddPointsCoordinate(e.paths,t,r)}_addCoordinatePolygon(e,t,r){this._dehydratedAddPointsCoordinate(e.rings,t,r)}_addCoordinateMultipoint(e,t,r){r===0&&e.points.push([]);const s=this._transformPathLikeValue(t,r);e.points[e.points.length-1].push(s)}_createPolygonGeometry(e){return{type:"polygon",rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{type:"polyline",paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{type:"multipoint",points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,r){r===0&&this._toAddInCurrentPath--==0&&(e.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const s=this._transformPathLikeValue(t,r),n=e[e.length-1],o=this._coordinateBuffer;if(o){if(r===0){const l=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;n.push(new Float64Array(o.buffer,l,this._vertexDimension))}o[this._coordinateBufferPtr++]=s}}_deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?M:t?u:r?A:h}}class R{_parseFeatureQuery(e){const t=new x(e.options),r=b(e.buffer,t),s={...r,spatialReference:r.spatialReference?.toJSON(),fields:r.fields?r.fields.map(n=>n.toJSON()):void 0,missingAttributes:t.missingAttributes};return Promise.resolve(s)}}function T(){return new R}export{T as default};
