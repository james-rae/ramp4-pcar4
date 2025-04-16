const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./mediaLayerUtils-Da_Qu46c.js","./utils-DbnOqzmT.js","./main-CGBWc59Z.js","./preload-helper-dJJaZANz.js","./main-CY4W0263.css","./originUtils-Do2K3Z97.js","./multiOriginJSONSupportUtils-C5oGZ9U0.js","./jsonContext-CLNEFAHJ.js","./saveAPIKeyUtils-EUYYaWcY.js","./saveUtils-BK0O4joz.js","./resourceUtils-CR08Kwrh.js","./resourceUtils-DJn3jrs0.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { bd as e, bf as a$2, jB as l$1, eP as V$2, G as n$1, be as y$3, _ as _$2, e4 as u$2, bA as f$1, fL as o, s, fV as c$1, lQ as s$1, ed as o$1, eL as r, lR as I$2, lS as _$3, aX as j$2, fH as n, b_ as f$2, lT as r$1, a_ as w$2, eq as M$2, lU as s$2, lV as u$3, eB as n$2, eJ as e$2, lW as i, ec as S$1, fa as m$1, p as p$3, ez as m$2, eD as U$2, eA as y$4, eC as Y, lX as tt, eE as Z, lY as ut, U as U$3, e1 as n$3, aT as V$3, lZ as c$2, a0 as V$4, kc as n$4, dd as o$2, bj as d$1, dN as s$3, bJ as n$5, dU as N$1, a6 as G$1, bs as K$1, fO as o$4, fN as x$1, e7 as l, eb as t$1, e9 as b$2, ea as j$3, fb as k$1, gV as A$1, cv as s$4, em as f$3 } from './main-CGBWc59Z.js';
import { p as p$1, j as j$1, m as m$3 } from './perspectiveUtils-SKW8-zGp.js';
import { t, e as e$1 } from './mat3f64-BNcPSU_3.js';
import { p as p$2 } from './imageUtils-DNTNJcW1.js';
import { p as p$4 } from './resourceExtension-qA-EBkbW.js';
import { o as o$3 } from './BoundsStore-B8jlL01T.js';
import './normalizeUtilsSync-Ccbt1eZm.js';
import './PooledRBush-CkUzAC4H.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let c=class extends l$1{projectOrWarn(e,r){if(null==e)return e;const{geometry:t,pending:c}=V$2(e,r);return c?null:c||t?t:(n$1.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:r}),null)}};c=e([a$2("esri.layers.support.GeoreferenceBase")],c);const a$1=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const S=e$1(),N=n();let T$1=class T extends f$2{};e([y$3({type:Number,json:{write:!0}})],T$1.prototype,"x",void 0),e([y$3({type:Number,json:{write:!0}})],T$1.prototype,"y",void 0),T$1=e([a$2("esri.layers.support.ControlPointsGeoreference.ControlPointJSONType")],T$1);let _$1=class _ extends l$1{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null;}};e([y$3()],_$1.prototype,"sourcePoint",void 0),e([y$3({type:_$2})],_$1.prototype,"mapPoint",void 0),_$1=e([a$2("esri.layers.support.ControlPointsGeoreference.ControlPoint")],_$1);let O=class extends(u$2(a$1)){constructor(o){super(o),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0;}readControlPoints(o$1,t$1){const r=f$1.fromJSON(t$1.spatialReference),e=t(...t$1.coefficients,1);return o$1.map((o$1=>(o(N,o$1.x,o$1.y),p$1(N,N,e),{sourcePoint:o$1,mapPoint:new _$2({x:N[0],y:N[1],spatialReference:r})})))}writeControlPoints(o,t,e,n){if(null!=this.transform)null!=o&&G(o[0])&&(t.controlPoints=o.map((o=>{const t=o.sourcePoint;return {x:t.x,y:t.y}})),t.spatialReference=o[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else {const o=new s("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:n?.layer,georeference:this});n?.messages?n.messages.push(o):n$1.getLogger(this).error(o.name,o.message);}}get coords(){if(null==this.controlPoints)return null;const o=this._updateTransform(S);if(null==o||!G(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return Q(o,this.width,this.height,t)}set coords(o$1){if(null==this.controlPoints||!G(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if(null==(o$1=this.projectOrWarn(o$1,t)))return;const{width:r,height:e}=this,{rings:[[n,i,l,a]]}=o$1,p={sourcePoint:c$1(0,e),mapPoint:new _$2({x:n[0],y:n[1],spatialReference:t})},u={sourcePoint:c$1(0,0),mapPoint:new _$2({x:i[0],y:i[1],spatialReference:t})},m={sourcePoint:c$1(r,0),mapPoint:new _$2({x:l[0],y:l[1],spatialReference:t})},f={sourcePoint:c$1(r,e),mapPoint:new _$2({x:a[0],y:a[1],spatialReference:t})};G(p)&&G(u)&&G(m)&&G(f)&&(W(S,p,u,m,f),this.controlPoints=this.controlPoints.map((({sourcePoint:o$1})=>(o(N,o$1.x,o$1.y),p$1(N,N,S),{sourcePoint:o$1,mapPoint:new _$2({x:N[0],y:N[1],spatialReference:t})}))));}get inverseTransform(){return null==this.transform?null:s$1(e$1(),this.transform)}get transform(){return this._updateTransform()}toMap(o$1){if(null==o$1||null==this.transform||null==this.controlPoints||!G(this.controlPoints[0]))return null;o(N,o$1.x,o$1.y);const t=this.controlPoints[0].mapPoint.spatialReference;return p$1(N,N,this.transform),new _$2({x:N[0],y:N[1],spatialReference:t})}toSource(o$1){if(null==o$1||null==this.inverseTransform||null==this.controlPoints||!G(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return o$1=o$1.normalize(),null==(o$1=V$2(o$1,t).geometry)?null:(o(N,o$1.x,o$1.y),p$1(N,N,this.inverseTransform),c$1(N[0],N[1]))}toSourceNormalized(o){const t=this.toSource(o);return null!=t&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(o){const{controlPoints:t,width:r,height:e}=this;if(!(null!=t&&r>0&&e>0))return null;const[n,i,s,l]=t;if(!G(n))return null;const c=n.mapPoint.spatialReference,a=this._projectControlPoint(i,c),p=this._projectControlPoint(s,c),u=this._projectControlPoint(l,c);if(!a.valid||!p.valid||!u.valid)return null;if(!G(a.controlPoint))return null;null==o&&(o=e$1());let m=null;return m=G(p.controlPoint)&&G(u.controlPoint)?W(o,n,a.controlPoint,p.controlPoint,u.controlPoint):G(p.controlPoint)?V$1(o,n,a.controlPoint,p.controlPoint):E$2(o,n,a.controlPoint),m.every((o=>0===o))?null:m}_projectControlPoint(o,t){if(!G(o))return {valid:!0,controlPoint:o};const{sourcePoint:r,mapPoint:e}=o,{geometry:n,pending:s}=V$2(e,t);return s?{valid:!1,controlPoint:null}:s||n?{valid:!0,controlPoint:{sourcePoint:r,mapPoint:n}}:(n$1.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:o,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function G(o){return null!=o?.sourcePoint&&null!=o.mapPoint}e([y$3({type:[_$1],json:{write:{allowNull:!1,isRequired:!0,target:{controlPoints:{type:[T$1]},coefficients:{type:[Number]},spatialReference:{type:f$1}}}}})],O.prototype,"controlPoints",void 0),e([o$1("controlPoints")],O.prototype,"readControlPoints",null),e([r("controlPoints")],O.prototype,"writeControlPoints",null),e([y$3({clonable:!1})],O.prototype,"coords",null),e([y$3({type:Number,nonNullable:!0,json:{write:!0}})],O.prototype,"height",void 0),e([y$3({readOnly:!0})],O.prototype,"inverseTransform",null),e([y$3({readOnly:!0})],O.prototype,"transform",null),e([y$3({type:Number,nonNullable:!0,json:{write:!0}})],O.prototype,"width",void 0),O=e([a$2("esri.layers.support.ControlPointsGeoreference")],O);const I$1=n(),J=n(),L$1=n(),M$1=n(),z=n(),A=n(),U$1=n(),k=n(),q=Math.PI/2;function B(o$1,t,r){o(o$1,r.sourcePoint.x,r.sourcePoint.y),o(t,r.mapPoint.x,r.mapPoint.y);}function E$2(o,t,r){return B(I$1,z,t),B(J,A,r),I$2(L$1,J,I$1,q),I$2(M$1,I$1,J,q),I$2(U$1,A,z,-q),I$2(k,z,A,-q),K(o,I$1,J,L$1,M$1,z,A,U$1,k)}function V$1(o,t,r,e){return B(I$1,z,t),B(J,A,r),B(L$1,U$1,e),_$3(M$1,I$1,J,.5),I$2(M$1,L$1,M$1,Math.PI),_$3(k,z,A,.5),I$2(k,U$1,k,Math.PI),K(o,I$1,J,L$1,M$1,z,A,U$1,k)}function W(o,t,r,e,n){return B(I$1,z,t),B(J,A,r),B(L$1,U$1,e),B(M$1,k,n),K(o,I$1,J,L$1,M$1,z,A,U$1,k)}const D=new Array(8).fill(0),F=new Array(8).fill(0);function H$1(o,t,r,e,n){return o[0]=t[0],o[1]=t[1],o[2]=r[0],o[3]=r[1],o[4]=e[0],o[5]=e[1],o[6]=n[0],o[7]=n[1],o}function K(o,t,r,e,n,i,s,c,a){return j$1(o,H$1(D,t,r,e,n),H$1(F,i,s,c,a))}function Q(o,t,r,e){const n=r$1(0,r),i=r$1(0,0),l=r$1(t,0),c=r$1(t,r);return p$1(n,n,o),p$1(i,i,o),p$1(l,l,o),p$1(c,c,o),new j$2({rings:[[n,i,l,c,n]],spatialReference:e})}const X=O;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const u$1=n();let y$2=class y extends a$1{constructor(t){super(t),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners";}get coords(){let{topLeft:t,topRight:o,bottomLeft:e,bottomRight:r}=this;if(null==t||null==o||null==e||null==r)return null;const s=t.spatialReference;return o=this.projectOrWarn(o,s),e=this.projectOrWarn(e,s),r=this.projectOrWarn(r,s),null==o||null==e||null==r?null:new j$2({rings:[[[e.x,e.y],[t.x,t.y],[o.x,o.y],[r.x,r.y],[e.x,e.y]]],spatialReference:s})}set coords(t){const{topLeft:o}=this;if(null==o)return;const e=o.spatialReference;if(null==(t=this.projectOrWarn(t,e)))return;const{rings:[[r,s,i,l]]}=t;this.bottomLeft=new _$2({x:r[0],y:r[1],spatialReference:e}),this.topLeft=new _$2({x:s[0],y:s[1],spatialReference:e}),this.topRight=new _$2({x:i[0],y:i[1],spatialReference:e}),this.bottomRight=new _$2({x:l[0],y:l[1],spatialReference:e});}toSourceNormalized(t){const{topLeft:s,topRight:i,bottomRight:p,bottomLeft:c}=this;if(null==t||null==s||null==i||null==p||null==c)return null;const m=s.spatialReference;t=t.normalize();const f=V$2(t,m).geometry;if(null==f)return null;o(u$1,f.x,f.y);const y=j$1(e$1(),[s.x,s.y,c.x,c.y,i.x,i.y,p.x,p.y],[0,0,0,1,1,0,1,1]);return p$1(u$1,u$1,y),c$1(u$1[0],u$1[1])}};e([y$3({clonable:!1})],y$2.prototype,"coords",null),e([y$3({type:_$2})],y$2.prototype,"bottomLeft",void 0),e([y$3({type:_$2})],y$2.prototype,"bottomRight",void 0),e([y$3({type:_$2})],y$2.prototype,"topLeft",void 0),e([y$3({type:_$2})],y$2.prototype,"topRight",void 0),y$2=e([a$2("esri.layers.support.CornersGeoreference")],y$2);const h$1=y$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let p=class extends a$1{constructor(t){super(t),this.extent=null,this.rotation=0,this.type="extent-and-rotation";}get coords(){if(null==this.extent)return null;const{xmin:t,ymin:e,xmax:r,ymax:o,spatialReference:n}=this.extent;let s;if(this.rotation){const{x:n,y:i}=this.extent.center,a=x(n,i,this.rotation);s=[a(t,e),a(t,o),a(r,o),a(r,e)],s.push(s[0]);}else s=[[t,e],[t,o],[r,o],[r,e],[t,e]];return new j$2({rings:[s],spatialReference:n})}set coords(t){if(null==t||null==this.extent)return;const r=this.extent.spatialReference;if(t=this.projectOrWarn(t,r),null==t?.extent)return;const{rings:[[o,n,s]],extent:{center:{x:i,y:c}}}=t,m=M$2(Math.PI/2-Math.atan2(n[1]-o[1],n[0]-o[0])),l=x(i,c,-m),[p,u]=l(o[0],o[1]),[f,h]=l(s[0],s[1]);this.extent=new w$2({xmin:p,ymin:u,xmax:f,ymax:h,spatialReference:r}),this.rotation=m;}toSourceNormalized(t){const{extent:e,rotation:n}=this;if(null==t||null==e)return null;const{xmin:s,ymin:i,xmax:a,ymax:c,center:l,spatialReference:p}=e;t=t.normalize();const u=V$2(t,p).geometry;if(null==u)return null;let f=u.x,h=u.y;return n&&([f,h]=x(l.x,l.y,-n)(f,h)),c$1(s$2(f,s,a,0,1),s$2(h,c,i,0,1))}};function x(t,e,r){const o=u$3(r),n=Math.cos(o),s=Math.sin(o);return (r,o)=>[n*(r-t)+s*(o-e)+t,n*(o-e)-s*(r-t)+e]}e([y$3({clonable:!1})],p.prototype,"coords",null),e([y$3({type:w$2})],p.prototype,"extent",void 0),e([y$3({type:Number})],p.prototype,"rotation",void 0),p=e([a$2("esri.layers.support.ExtentAndRotationGeoreference")],p);const u=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function m(e){return "media"===e?.type}function f(e,o){const i=n$2(o);return m(e)&&!!e.portalItem&&null!=i&&i>e$2.PORTAL_ITEM}function y$1(t,n,o){if(!t||"control-points"===t.type)return t;const{coords:r}=t;if(5!==r?.rings[0]?.length)return null;const[c,a,p,l]=r.rings[0],{spatialReference:m}=r;return new X({controlPoints:[{mapPoint:new _$2({x:c[0],y:c[1],spatialReference:m}),sourcePoint:c$1(0,o)},{mapPoint:new _$2({x:a[0],y:a[1],spatialReference:m}),sourcePoint:c$1(0,0)},{mapPoint:new _$2({x:p[0],y:p[1],spatialReference:m}),sourcePoint:c$1(n,0)},{mapPoint:new _$2({x:l[0],y:l[1],spatialReference:m}),sourcePoint:c$1(n,o)}],width:n,height:o})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const y={key:"type",base:a$1,typeMap:{"control-points":X,corners:h$1,"extent-and-rotation":u}},g={key:"type",base:a$1,typeMap:{"control-points":X}};let h=class extends(i(S$1(m$1))){constructor(e){super(e),this.georeference=null,this.opacity=1;}readGeoreference(e){return X.fromJSON(e)}writeGeoreference(e,o,t,n){const i=n?.resources?.pendingOperations,c=()=>{const i=y$1(this.georeference,this.contentWidth,this.contentHeight);if(i){if("control-points"!==e.type&&n$1.getLogger(this).warn(`only georeference of type 'control-points' may be persisted. The georeference of type '${e.type}' has been automatically converted.`),4!==i.controlPoints?.length&&n?.messages)return void n.messages.push(new s("property:unsupported","only 'control-points' georeference with 4 control points may be persisted."));o[t]=i.write({},n);}};if("control-points"!==e.type&&!this.loaded&&i)return o[t]={},void i.push(this.load().then(c));c();}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:r,contentWidth:o,contentHeight:t}=this;if(null==e||null==r||0===o||0===t)return null;const s=r.toSourceNormalized(e);return null==s?null:(s.x*=o,s.y*=t,s)}};e([y$3({types:y,json:{write:!0,types:g}})],h.prototype,"georeference",void 0),e([o$1("georeference")],h.prototype,"readGeoreference",null),e([r("georeference")],h.prototype,"writeGeoreference",null),e([y$3({json:{read:!1,write:!1}})],h.prototype,"opacity",void 0),h=e([a$2("esri.layers.support.MediaElementBase")],h);const j=h;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let w$1=class w extends j{constructor(e){super(e),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null;}load(){const e=this.image;if("string"==typeof e){const t=p$2(e).then((e=>{this._set("content",e);}));this.addResolvingPromise(t);}else if(e instanceof HTMLImageElement){const t=e.decode().then((()=>{this._set("content",e);}));this.addResolvingPromise(t);}else e?this._set("content",e):this.addResolvingPromise(Promise.reject(new s("image-element:invalid-image-type","Invalid image type",{image:e})));return Promise.resolve(this)}get contentWidth(){return null==this.content?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return null==this.content?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(e,t,r){return p$3(t.url,r)}writeImage(e,t,r,o){if(null==e)return;const n=o?.portalItem,s=o?.resources;if(!n||!s)return void("string"==typeof e&&(t[r]=m$2(e,o)));const a=E$1(e)?e:null;if(a){if(null==U$2(a))return void(t[r]=a);const e=m$2(a,{...o,verifyItemRelativeUrls:o?.verifyItemRelativeUrls?{writtenUrls:o.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},y$4.NO);if(n&&e&&!Y(e))return s.toKeep.push({resource:n.resourceFromPath(e),compress:!1}),void(t[r]=e)}t[r]="<pending>",s.pendingOperations.push(H(e).then((e=>{const o=U(e,n);t[r]=o.itemRelativeUrl,s.toAdd.push({resource:o,content:{type:"blob",blob:e},compress:!1,finish:e=>{this.image=e.url;}});})));}write(e,t){const r=super.write(e,t);return "mediaType"in r&&!r.url&&delete r.mediaType,r}};e([y$3()],w$1.prototype,"animationOptions",void 0),e([y$3({readOnly:!0})],w$1.prototype,"content",void 0),e([y$3({readOnly:!0})],w$1.prototype,"contentWidth",null),e([y$3({readOnly:!0})],w$1.prototype,"contentHeight",null),e([y$3({json:{name:"url",type:String,write:{overridePolicy:(e,t,r)=>({enabled:!f(r?.layer,r?.origin)})}}})],w$1.prototype,"image",void 0),e([o$1("image",["url"])],w$1.prototype,"readImage",null),e([r("image")],w$1.prototype,"writeImage",null),e([y$3({readOnly:!0,json:{read:!1,write:{target:"mediaType",ignoreOrigin:!0}}})],w$1.prototype,"type",void 0),w$1=e([a$2("esri.layers.support.ImageElement")],w$1);const b$1=w$1;function E$1(e){return "string"==typeof e&&!tt(e)&&!Z(e)}async function H(e){if("string"==typeof e){if(tt(e))return ut(e);return (await U$3(e,{responseType:"blob"})).data}return new Promise((t=>T(e).toBlob(t)))}function T(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,r=e instanceof HTMLImageElement?e.naturalHeight:e.height,o=document.createElement("canvas"),i=o.getContext("2d");return o.width=t,o.height=r,e instanceof HTMLImageElement?i.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&i.putImageData(e,0,0),o}function U(e,t){const r=n$3(),o=`${V$3("media",r)}.${p$4({type:"blob",blob:e})}`;return t.resourceFromPath(o)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let d=class extends j{constructor(e){super(e),this.autoplay=!0,this.content=null,this.type="video";}load(){const e=this.video;if("string"==typeof e){const o=document.createElement("video");o.src=e,o.crossOrigin="anonymous",o.autoplay=!0,o.muted=!0,o.loop=!0,o.playsInline=!0,this.addResolvingPromise(this._loadVideo(o).then((()=>{this._set("content",o);})));}else e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then((()=>{this._set("content",e);}))):this.addResolvingPromise(Promise.reject(new s("video-element:invalid-video-type","Invalid video type",{video:e})));return Promise.resolve(this)}get contentWidth(){return this.content?.videoWidth??0}get contentHeight(){return this.content?.videoHeight??0}set video(e){"not-loaded"===this.loadStatus?this._set("video",e):n$1.getLogger(this).error("#video","video cannot be changed after the element is loaded.");}_loadVideo(e){return new Promise(((o,s)=>{const r=c$2(e,"canplay",(()=>{this.removeHandles("canplay"),this.autoplay?e.play().then(o,s):o();}));this.addHandles(r,"canplay"),"anonymous"!==e.crossOrigin&&(e.crossOrigin="anonymous",e.src?.includes("blob:")||(e.src=e.src));}))}};e([y$3()],d.prototype,"autoplay",void 0),e([y$3({readOnly:!0})],d.prototype,"content",void 0),e([y$3({readOnly:!0})],d.prototype,"contentWidth",null),e([y$3({readOnly:!0})],d.prototype,"contentHeight",null),e([y$3()],d.prototype,"video",null),d=e([a$2("esri.layers.support.VideoElement")],d);const a=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const w={key:"type",defaultKeyValue:"image",base:j,typeMap:{image:b$1,video:a}},M=V$4.ofType(w);let I=class extends(m$1.LoadableMixin(n$4(o$2.EventedAccessor))){constructor(e){super(e),this._index=new o$3,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=e=>{for(const s of e.removed){const e=this._elementViewsMap.get(s);this._elementViewsMap.delete(s),this._index.delete(e),this.removeHandles(e),e.destroy(),this.notifyChange("fullExtent");}const{spatialReference:t}=this;for(const s of e.added){if(this._elementViewsMap.get(s))continue;const e=new m$3({spatialReference:t,element:s});this._elementViewsMap.set(s,e);const r=d$1((()=>e.coords),(()=>this._updateIndexForElement(e,!1)));this._updateIndexForElement(e,!0),this.addHandles(r,e);}this._elementsIndexes.clear(),this.elements.forEach(((e,t)=>this._elementsIndexes.set(e,t))),this.emit("refresh");},this.elements=new M;}async load(e){if(s$3(e),!this.spatialReference){const e=this.elements.find((e=>null!=e.georeference?.coords));this._set("spatialReference",e?e.georeference.coords.spatialReference:f$1.WGS84);}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear();}set elements(e){this._set("elements",n$5(e,this._get("elements"),M));}get fullExtent(){if("not-loaded"===this.loadStatus)return null;const e=this._index.fullBounds;return null==e?null:new w$2({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){"not-loaded"===this.loadStatus?this._set("spatialReference",e):n$1.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.");}async queryElements(e,t){await this.load(),await N$1(e.spatialReference,this.spatialReference,null,t);const s=G$1(e.spatialReference,this.spatialReference)?e:K$1(e,this.spatialReference);if(!s)return [];const r=s.normalize(),o=[];for(const n of r)this._index.forEachInBounds(o$4(n),(({normalizedCoords:e,element:t})=>{null!=e&&x$1(n,e)&&o.push(t);}));return o.sort(((e,t)=>this._elementsIndexes.get(e)-this._elementsIndexes.get(t))),o}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,t){const s=e.normalizedBounds,r=this._index.has(e),o=null!=s;this._index.delete(e),o&&this._index.set(e,s),this.notifyChange("fullExtent"),t||(r!==o?this.emit("refresh"):this.emit("change",{element:e.element}));}};e([y$3()],I.prototype,"elements",null),e([y$3({readOnly:!0})],I.prototype,"fullExtent",null),e([y$3()],I.prototype,"spatialReference",null),I=e([a$2("esri.layers.support.LocalMediaElementSource")],I);const V=I;

function b(e){return "object"==typeof e&&null!=e&&"type"in e}function L(e){return b(e)&&"image"===e.type}let E=class extends(l(t$1(b$2(j$3(S$1(f$3)))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=k$1((async(e,r,o)=>{const{save:t,saveAs:s}=await __vitePreload(() => import('./mediaLayerUtils-Da_Qu46c.js'),true?__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]):void 0,import.meta.url);switch(e){case A$1.SAVE:return t(this,r);case A$1.SAVE_AS:return s(this,o,r)}})),this.source=new V;}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let t=this.source;if(!t)throw new s("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const s$1=this._getSourceOverride(t,this.georeference);s$1&&(this.setAtOrigin("source",s$1,"web-map"),this.setAtOrigin("source",s$1,"web-scene"),t=s$1);const i=b(t)?new V({elements:new V$4([t])}):t;this._set("effectiveSource",i),this.spatialReference&&(i.spatialReference=this.spatialReference),await i.load(e),this.spatialReference=i.spatialReference;}destroy(){this.effectiveSource?.destroy(),this.effectiveSource!==this.source&&this.source?.destroy();}readGeoreference(e,r){return e&&"itemId"in r&&r.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){"loaded"!==this.loadStatus&&"failed"!==this.loadStatus?this._set("source",e):n$1.getLogger(this).error("#source","source cannot be changed after the layer is loaded.");}castSource(e){return e?Array.isArray(e)?new V({elements:new V$4(e)}):e instanceof V$4?new V({elements:e}):e:null}readSource(e,r,o){if("itemId"in r&&r.itemId)return;const t=this._createSource(r);return t?.read(r,o),t}writeSource(e,r,t,s$1){if(e&&e instanceof V){const r=e.elements.length;if(1!==r)return void(s$1?.messages&&s$1.messages.push(new s("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${r}.`)));e=e.elements.at(0);}L(e)?e.write(r,s$1):s$1?.messages&&(e?s$1.messages.push(new s("media-layer:unsupported-source","only media elements of type 'ImageElement' can be persisted")):s$1.messages.push(new s("media-layer:unsupported-source","the media layer is missing a source")));}async save(e){return this._debouncedSaveOperations(A$1.SAVE,e)}async saveAs(e,r){return this._debouncedSaveOperations(A$1.SAVE_AS,r,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new b$1;case"video":return new a}return null}_getSourceOverride(e,r){if(b(e)&&this.originIdOf("source")===e$2.PORTAL_ITEM&&r&&(this.originIdOf("georeference")===e$2.WEB_MAP||this.originIdOf("georeference")===e$2.WEB_SCENE)){const o=e.toJSON(),t=this._createSource(o);return t.read({...o},{origin:"portal-item"}),t.read({georeference:r},{origin:"web-map"}),t.read({georeference:r},{origin:"web-scene"}),t}return null}};e([y$3({readOnly:!0})],E.prototype,"effectiveSource",void 0),e([y$3({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],E.prototype,"georeference",void 0),e([o$1("web-document","georeference")],E.prototype,"readGeoreference",null),e([y$3({type:String})],E.prototype,"copyright",void 0),e([y$3({readOnly:!0})],E.prototype,"fullExtent",null),e([y$3({type:["MediaLayer"]})],E.prototype,"operationalLayerType",void 0),e([y$3({type:["show","hide"]})],E.prototype,"listMode",void 0),e([y$3({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image"]},georeference:{type:X}},overridePolicy(e,r,o){return {enabled:!0,allowNull:!1,ignoreOrigin:f(this,o?.origin)&&L(e)&&!!e.georeference&&e.originIdOf("georeference")>e$2.PORTAL_ITEM}}}}})],E.prototype,"source",null),e([s$4("source")],E.prototype,"castSource",null),e([o$1("source",["url"])],E.prototype,"readSource",null),e([r("source")],E.prototype,"writeSource",null),e([y$3()],E.prototype,"spatialReference",void 0),e([y$3({readOnly:!0})],E.prototype,"type",void 0),E=e([a$2("esri.layers.MediaLayer")],E);const _=E;

export { _ as default };
