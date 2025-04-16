import{aF as T,x as h,z as d,b4 as G,D as z,B as F,b5 as N,M as x,K as S,G as P,b6 as j,o as q,ah as R}from"./main-DeRV24Di.js";import{y as J}from"./Field-Dcbw6k6h.js";var v;const w=new T({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let c=v=class extends P{constructor(r){super(r),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(r,l){return this.readFeaturesWithClass(r,l,G)}writeGeometryType(r,l,s,e){if(r)return void w.write(r,l,s,e);const{features:n}=this;if(n){for(const o of n)if(o?.geometry!=null)return void w.write(o.geometry.type,l,s,e)}}readQueryGeometry(r,l){if(!r)return null;const s=!!r.spatialReference,e=j(r);return e&&!s&&l.spatialReference&&(e.spatialReference=x.fromJSON(l.spatialReference)),e}writeSpatialReference(r,l){if(r)return void(l.spatialReference=r.toJSON());const{features:s}=this;if(s){for(const e of s)if(e&&e.geometry!=null&&e.geometry.spatialReference)return void(l.spatialReference=e.geometry.spatialReference.toJSON())}}clone(){return new v(this.cloneProperties())}cloneProperties(){return q({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(r){const l=this.write();if(l.features&&Array.isArray(r)&&r.length>0)for(let s=0;s<l.features.length;s++){const e=l.features[s];if(e.geometry){const n=r?.[s];e.geometry=n?.toJSON()||e.geometry}}return l}quantize(r){const{scale:[l,s],translate:[e,n]}=r,o=t=>Math.round((t-e)/l),a=t=>Math.round((n-t)/s),f=this.features,m=this._getQuantizationFunction(this.geometryType,o,a);for(let t=0,y=f.length;t<y;t++)m?.(f[t].geometry)||(f.splice(t,1),t--,y--);return this.transform=r,this}unquantize(){const{geometryType:r,features:l,transform:s}=this;if(!s)return this;const{translate:[e,n],scale:[o,a]}=s,f=p=>p*o+e,m=p=>n-p*a;let t=null,y=null;if(this.hasZ&&s?.scale?.[2]!=null){const{translate:[,,p],scale:[,,g]}=s;t=u=>u*g+p}if(this.hasM&&s?.scale?.[3]!=null){const{translate:[,,,p],scale:[,,,g]}=s;y=u=>u==null?u:u*g+p}const i=this._getHydrationFunction(r,f,m,t,y);for(const{geometry:p}of l)p!=null&&i&&i(p);return this.transform=null,this}readFeaturesWithClass(r,l,s){const e=x.fromJSON(l.spatialReference),n=[];for(let o=0;o<r.length;o++){const a=r[o],f=s.fromJSON(a),m=a.geometry?.spatialReference;f.geometry==null||m||(f.geometry.spatialReference=e);const t=a.aggregateGeometries,y=f.aggregateGeometries;if(t&&y!=null)for(const i in y){const p=y[i],g=t[i],u=g?.spatialReference;p==null||u||(p.spatialReference=e)}n.push(f)}return n}_quantizePoints(r,l,s){let e,n;const o=[];for(let a=0,f=r.length;a<f;a++){const m=r[a];if(a>0){const t=l(m[0]),y=s(m[1]);t===e&&y===n||(o.push([t-e,y-n]),e=t,n=y)}else e=l(m[0]),n=s(m[1]),o.push([e,n])}return o.length>0?o:null}_getQuantizationFunction(r,l,s){return r==="point"?e=>(e.x=l(e.x),e.y=s(e.y),e):r==="polyline"||r==="polygon"?e=>{const n=R(e)?e.rings:e.paths,o=[];for(let a=0,f=n.length;a<f;a++){const m=n[a],t=this._quantizePoints(m,l,s);t&&o.push(t)}return o.length>0?(R(e)?e.rings=o:e.paths=o,e):null}:r==="multipoint"?e=>{const n=this._quantizePoints(e.points,l,s);return n&&n.length>0?(e.points=n,e):null}:r==="extent"?e=>e:null}_getHydrationFunction(r,l,s,e,n){return r==="point"?o=>{o.x=l(o.x),o.y=s(o.y),e&&(o.z=e(o.z))}:r==="polyline"||r==="polygon"?o=>{const a=R(o)?o.rings:o.paths;let f,m;for(let t=0,y=a.length;t<y;t++){const i=a[t];for(let p=0,g=i.length;p<g;p++){const u=i[p];p>0?(f+=u[0],m+=u[1]):(f=u[0],m=u[1]),u[0]=l(f),u[1]=s(m)}}if(e&&n)for(let t=0,y=a.length;t<y;t++){const i=a[t];for(let p=0,g=i.length;p<g;p++){const u=i[p];u[2]=e(u[2]),u[3]=n(u[3])}}else if(e)for(let t=0,y=a.length;t<y;t++){const i=a[t];for(let p=0,g=i.length;p<g;p++){const u=i[p];u[2]=e(u[2])}}else if(n)for(let t=0,y=a.length;t<y;t++){const i=a[t];for(let p=0,g=i.length;p<g;p++){const u=i[p];u[2]=n(u[2])}}}:r==="extent"?o=>{o.xmin=l(o.xmin),o.ymin=s(o.ymin),o.xmax=l(o.xmax),o.ymax=s(o.ymax),e&&o.zmax!=null&&o.zmin!=null&&(o.zmax=e(o.zmax),o.zmin=e(o.zmin)),n&&o.mmax!=null&&o.mmin!=null&&(o.mmax=n(o.mmax),o.mmin=n(o.mmin))}:r==="multipoint"?o=>{const a=o.points;let f,m;for(let t=0,y=a.length;t<y;t++){const i=a[t];t>0?(f+=i[0],m+=i[1]):(f=i[0],m=i[1]),i[0]=l(f),i[1]=s(m)}if(e&&n)for(let t=0,y=a.length;t<y;t++){const i=a[t];i[2]=e(i[2]),i[3]=n(i[3])}else if(e)for(let t=0,y=a.length;t<y;t++){const i=a[t];i[2]=e(i[2])}else if(n)for(let t=0,y=a.length;t<y;t++){const i=a[t];i[2]=n(i[2])}}:null}};h([d({type:String,json:{write:!0}})],c.prototype,"displayFieldName",void 0),h([d({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],c.prototype,"exceededTransferLimit",void 0),h([d({type:[G],json:{write:!0}})],c.prototype,"features",void 0),h([z("features")],c.prototype,"readFeatures",null),h([d({type:[J],json:{write:!0}})],c.prototype,"fields",void 0),h([d({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:w.read}}})],c.prototype,"geometryType",void 0),h([F("geometryType")],c.prototype,"writeGeometryType",null),h([d({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],c.prototype,"hasM",void 0),h([d({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],c.prototype,"hasZ",void 0),h([d({types:N,json:{write:!0}})],c.prototype,"queryGeometry",void 0),h([z("queryGeometry")],c.prototype,"readQueryGeometry",null),h([d({type:x,json:{write:!0}})],c.prototype,"spatialReference",void 0),h([F("spatialReference")],c.prototype,"writeSpatialReference",null),h([d({json:{write:!0}})],c.prototype,"transform",void 0),c=v=h([S("esri.rest.support.FeatureSet")],c),c.prototype.toJSON.isDefaultToJSON=!0;const M=c;export{M as d};
