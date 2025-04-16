import{az as N,q as h,u as d,b3 as T,z,v as G,b4 as S,D as v,C as q,A as F,b5 as P,h as j,ab as x}from"./main-CdIhtOSF.js";import{y as J}from"./Field-DaVZknBl.js";var R;const w=new N({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let c=R=class extends F{constructor(n){super(n),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(n,a){const o=v.fromJSON(a.spatialReference),e=[];for(let s=0;s<n.length;s++){const r=n[s],i=T.fromJSON(r),m=r.geometry?.spatialReference;i.geometry==null||m||(i.geometry.spatialReference=o);const f=r.aggregateGeometries,t=i.aggregateGeometries;if(f&&t!=null)for(const y in t){const l=t[y],p=f[y],g=p?.spatialReference;l==null||g||(l.spatialReference=o)}e.push(i)}return e}writeGeometryType(n,a,o,e){if(n)return void w.write(n,a,o,e);const{features:s}=this;if(s){for(const r of s)if(r?.geometry!=null)return void w.write(r.geometry.type,a,o,e)}}readQueryGeometry(n,a){if(!n)return null;const o=!!n.spatialReference,e=P(n);return e&&!o&&a.spatialReference&&(e.spatialReference=v.fromJSON(a.spatialReference)),e}writeSpatialReference(n,a){if(n)return void(a.spatialReference=n.toJSON());const{features:o}=this;if(o){for(const e of o)if(e&&e.geometry!=null&&e.geometry.spatialReference)return void(a.spatialReference=e.geometry.spatialReference.toJSON())}}clone(){return new R(this.cloneProperties())}cloneProperties(){return j({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(n){const a=this.write();if(a.features&&Array.isArray(n)&&n.length>0)for(let o=0;o<a.features.length;o++){const e=a.features[o];if(e.geometry){const s=n?.[o];e.geometry=s?.toJSON()||e.geometry}}return a}quantize(n){const{scale:[a,o],translate:[e,s]}=n,r=t=>Math.round((t-e)/a),i=t=>Math.round((s-t)/o),m=this.features,f=this._getQuantizationFunction(this.geometryType,r,i);for(let t=0,y=m.length;t<y;t++)f?.(m[t].geometry)||(m.splice(t,1),t--,y--);return this.transform=n,this}unquantize(){const{geometryType:n,features:a,transform:o}=this;if(!o)return this;const{translate:[e,s],scale:[r,i]}=o,m=p=>p*r+e,f=p=>s-p*i;let t=null,y=null;if(this.hasZ&&o?.scale?.[2]!=null){const{translate:[,,p],scale:[,,g]}=o;t=u=>u*g+p}if(this.hasM&&o?.scale?.[3]!=null){const{translate:[,,,p],scale:[,,,g]}=o;y=u=>u==null?u:u*g+p}const l=this._getHydrationFunction(n,m,f,t,y);for(const{geometry:p}of a)p!=null&&l&&l(p);return this.transform=null,this}_quantizePoints(n,a,o){let e,s;const r=[];for(let i=0,m=n.length;i<m;i++){const f=n[i];if(i>0){const t=a(f[0]),y=o(f[1]);t===e&&y===s||(r.push([t-e,y-s]),e=t,s=y)}else e=a(f[0]),s=o(f[1]),r.push([e,s])}return r.length>0?r:null}_getQuantizationFunction(n,a,o){return n==="point"?e=>(e.x=a(e.x),e.y=o(e.y),e):n==="polyline"||n==="polygon"?e=>{const s=x(e)?e.rings:e.paths,r=[];for(let i=0,m=s.length;i<m;i++){const f=s[i],t=this._quantizePoints(f,a,o);t&&r.push(t)}return r.length>0?(x(e)?e.rings=r:e.paths=r,e):null}:n==="multipoint"?e=>{const s=this._quantizePoints(e.points,a,o);return s&&s.length>0?(e.points=s,e):null}:n==="extent"?e=>e:null}_getHydrationFunction(n,a,o,e,s){return n==="point"?r=>{r.x=a(r.x),r.y=o(r.y),e&&(r.z=e(r.z))}:n==="polyline"||n==="polygon"?r=>{const i=x(r)?r.rings:r.paths;let m,f;for(let t=0,y=i.length;t<y;t++){const l=i[t];for(let p=0,g=l.length;p<g;p++){const u=l[p];p>0?(m+=u[0],f+=u[1]):(m=u[0],f=u[1]),u[0]=a(m),u[1]=o(f)}}if(e&&s)for(let t=0,y=i.length;t<y;t++){const l=i[t];for(let p=0,g=l.length;p<g;p++){const u=l[p];u[2]=e(u[2]),u[3]=s(u[3])}}else if(e)for(let t=0,y=i.length;t<y;t++){const l=i[t];for(let p=0,g=l.length;p<g;p++){const u=l[p];u[2]=e(u[2])}}else if(s)for(let t=0,y=i.length;t<y;t++){const l=i[t];for(let p=0,g=l.length;p<g;p++){const u=l[p];u[2]=s(u[2])}}}:n==="extent"?r=>{r.xmin=a(r.xmin),r.ymin=o(r.ymin),r.xmax=a(r.xmax),r.ymax=o(r.ymax),e&&r.zmax!=null&&r.zmin!=null&&(r.zmax=e(r.zmax),r.zmin=e(r.zmin)),s&&r.mmax!=null&&r.mmin!=null&&(r.mmax=s(r.mmax),r.mmin=s(r.mmin))}:n==="multipoint"?r=>{const i=r.points;let m,f;for(let t=0,y=i.length;t<y;t++){const l=i[t];t>0?(m+=l[0],f+=l[1]):(m=l[0],f=l[1]),l[0]=a(m),l[1]=o(f)}if(e&&s)for(let t=0,y=i.length;t<y;t++){const l=i[t];l[2]=e(l[2]),l[3]=s(l[3])}else if(e)for(let t=0,y=i.length;t<y;t++){const l=i[t];l[2]=e(l[2])}else if(s)for(let t=0,y=i.length;t<y;t++){const l=i[t];l[2]=s(l[2])}}:null}};h([d({type:String,json:{write:!0}})],c.prototype,"displayFieldName",void 0),h([d({type:Boolean,json:{write:{overridePolicy:n=>({enabled:n})}}})],c.prototype,"exceededTransferLimit",void 0),h([d({type:[T],json:{write:!0}})],c.prototype,"features",void 0),h([z("features")],c.prototype,"readFeatures",null),h([d({type:[J],json:{write:!0}})],c.prototype,"fields",void 0),h([d({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:w.read}}})],c.prototype,"geometryType",void 0),h([G("geometryType")],c.prototype,"writeGeometryType",null),h([d({type:Boolean,json:{write:{overridePolicy:n=>({enabled:n})}}})],c.prototype,"hasM",void 0),h([d({type:Boolean,json:{write:{overridePolicy:n=>({enabled:n})}}})],c.prototype,"hasZ",void 0),h([d({types:S,json:{write:!0}})],c.prototype,"queryGeometry",void 0),h([z("queryGeometry")],c.prototype,"readQueryGeometry",null),h([d({type:v,json:{write:!0}})],c.prototype,"spatialReference",void 0),h([G("spatialReference")],c.prototype,"writeSpatialReference",null),h([d({json:{write:!0}})],c.prototype,"transform",void 0),c=R=h([q("esri.rest.support.FeatureSet")],c),c.prototype.toJSON.isDefaultToJSON=!0;const $=c;export{$ as d};
