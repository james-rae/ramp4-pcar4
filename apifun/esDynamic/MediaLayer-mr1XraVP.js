import{x as i,K as P,aX as fe,n as C,z as l,bC as p,G as ye,M as ie,s as w,fx as x,D as B,B as F,bO as se,bz as le,dx as ze,jc as ge,bw as Ue,bx as k,dF as qe,j as ve,p as Be,dO as Pe,dR as we,dP as Fe,dQ as xe,fY as ae,dS as ce,jd as ke,a2 as Re,bJ as Je,fG as be,aP as $e,bF as Ke,i2 as De,dA as _e,je as Qe,V as Z,hb as Xe,b_ as Ye,aM as Ze,T as et,dk as tt,bh as nt,gu as ot,hn as rt,e4 as it,bG as st}from"./main-DeRV24Di.js";import{S as Se}from"./MultiOriginJSONSupport-B-tcjtAX.js";import{f as lt}from"./Layer-BYwzhU09.js";import{p as at}from"./BlendLayer-L3pb8nn4.js";import{b as ct}from"./OperationalLayer-aipQXicj.js";import{j as ut}from"./PortalLayer-DGPFQ0q_.js";import{t as pt}from"./ScaleRangeLayer-DCHlWw-h.js";import{p as O,j as Oe,n as dt,e as ht,m as mt,c as ee}from"./mediaLayerUtils-BlvlLiSl.js";import{s as ft}from"./mat3-DOnW3DjW.js";import{t as yt,e as te}from"./mat3f64-Dh9_zhFu.js";import{o as A,I as z,_ as Ie}from"./vec2-BnynUbeJ.js";import{n as _,t as ne}from"./vec2f64-CEUyUoff.js";import{X as J,Q as gt,O as vt}from"./projection-B0lCSWOh.js";import{p as Pt}from"./imageUtils-GdgFeUx4.js";import{n as wt}from"./uuid-Dj9mdEVg.js";import{u as xt}from"./common-CYWrYyJl.js";import{p as Rt}from"./resourceExtension-CF_ZK0yd.js";import{o as bt}from"./BoundsStore-cCwnnYbT.js";import{A as oe}from"./interfaces-Cwm0pihk.js";let ue=class extends fe{projectOrWarn(e,t){if(e==null)return e;const{geometry:n,pending:o}=J(e,t);return o?null:o||n?n:(C.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),null)}};ue=i([P("esri.layers.support.GeoreferenceBase")],ue);const $=ue,pe=te(),d=_();let K=class extends ye{};i([l({type:Number,json:{write:{isRequired:!0}}})],K.prototype,"x",void 0),i([l({type:Number,json:{write:{isRequired:!0}}})],K.prototype,"y",void 0),K=i([P("esri.layers.support.ControlPointsGeoreference.ControlPointJSONType")],K);let D=class extends fe{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};i([l()],D.prototype,"sourcePoint",void 0),i([l({type:p})],D.prototype,"mapPoint",void 0),D=i([P("esri.layers.support.ControlPointsGeoreference.ControlPoint")],D);let R=class extends ye.JSONSupportMixin($){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){const n=ie.fromJSON(t.spatialReference),o=yt(...t.coefficients,1);return e.map(r=>(A(d,r.x,r.y),O(d,d,o),{sourcePoint:r,mapPoint:new p({x:d[0],y:d[1],spatialReference:n})}))}writeControlPoints(e,t,n,o){if(this.transform!=null)e!=null&&f(e[0])&&(t.controlPoints=e.map(r=>{const s=r.sourcePoint;return{x:s.x,y:s.y}}),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{const r=new w("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration. Make sure the parent media element is loaded i.e. the ImageElement or VideoElement set as 'MediaLayer.source'.",{layer:o?.layer,georeference:this});o?.messages?o.messages.push(r):C.getLogger(this).error(r.name,r.message)}}get coords(){if(this.controlPoints==null)return null;const e=this._updateTransform(pe);if(e==null||!f(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return Mt(e,this.width,this.height,t)}set coords(e){if(this.controlPoints==null||!f(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if((e=this.projectOrWarn(e,t))==null)return;const{width:n,height:o}=this,{rings:[[r,s,a,c]]}=e,u={sourcePoint:x(0,o),mapPoint:new p({x:r[0],y:r[1],spatialReference:t})},h={sourcePoint:x(0,0),mapPoint:new p({x:s[0],y:s[1],spatialReference:t})},y={sourcePoint:x(n,0),mapPoint:new p({x:a[0],y:a[1],spatialReference:t})},v={sourcePoint:x(n,o),mapPoint:new p({x:c[0],y:c[1],spatialReference:t})};f(u)&&f(h)&&f(y)&&f(v)&&(Me(pe,u,h,y,v),this.controlPoints=this.controlPoints.map(({sourcePoint:S})=>(A(d,S.x,S.y),O(d,d,pe),{sourcePoint:S,mapPoint:new p({x:d[0],y:d[1],spatialReference:t})})))}get inverseTransform(){return this.transform==null?null:ft(te(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(e==null||this.transform==null||this.controlPoints==null||!f(this.controlPoints[0]))return null;A(d,e.x,e.y);const t=this.controlPoints[0].mapPoint.spatialReference;return O(d,d,this.transform),new p({x:d[0],y:d[1],spatialReference:t})}toSource(e){if(e==null||this.inverseTransform==null||this.controlPoints==null||!f(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),(e=J(e,t).geometry)==null?null:(A(d,e.x,e.y),O(d,d,this.inverseTransform),x(d[0],d[1]))}toSourceNormalized(e){const t=this.toSource(e);return t!=null&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(e){const{controlPoints:t,width:n,height:o}=this;if(!(t!=null&&n>0&&o>0))return null;const[r,s,a,c]=t;if(!f(r))return null;const u=r.mapPoint.spatialReference,h=this._projectControlPoint(s,u),y=this._projectControlPoint(a,u),v=this._projectControlPoint(c,u);if(!h.valid||!y.valid||!v.valid||!f(h.controlPoint))return null;e==null&&(e=te());let S=null;return S=f(y.controlPoint)&&f(v.controlPoint)?Me(e,r,h.controlPoint,y.controlPoint,v.controlPoint):f(y.controlPoint)?St(e,r,h.controlPoint,y.controlPoint):_t(e,r,h.controlPoint),S.every(Ge=>Ge===0)?null:S}_projectControlPoint(e,t){if(!f(e))return{valid:!0,controlPoint:e};const{sourcePoint:n,mapPoint:o}=e,{geometry:r,pending:s}=J(o,t);return s?{valid:!1,controlPoint:null}:s||r?{valid:!0,controlPoint:{sourcePoint:n,mapPoint:r}}:(C.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:o.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function f(e){return e?.sourcePoint!=null&&e.mapPoint!=null}i([l({type:[D],json:{write:{allowNull:!1,isRequired:!0,target:{controlPoints:{type:[K],isRequired:!0},coefficients:{type:[Number],isRequired:!0},spatialReference:{type:ie,isRequired:!0}}}}})],R.prototype,"controlPoints",void 0),i([B("controlPoints")],R.prototype,"readControlPoints",null),i([F("controlPoints")],R.prototype,"writeControlPoints",null),i([l({clonable:!1})],R.prototype,"coords",null),i([l({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],R.prototype,"height",void 0),i([l({readOnly:!0})],R.prototype,"inverseTransform",null),i([l({readOnly:!0})],R.prototype,"transform",null),i([l({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],R.prototype,"width",void 0),R=i([P("esri.layers.support.ControlPointsGeoreference")],R);const I=_(),M=_(),V=_(),j=_(),E=_(),L=_(),W=_(),N=_(),re=Math.PI/2;function T(e,t,n){A(e,n.sourcePoint.x,n.sourcePoint.y),A(t,n.mapPoint.x,n.mapPoint.y)}function _t(e,t,n){return T(I,E,t),T(M,L,n),z(V,M,I,re),z(j,I,M,re),z(W,L,E,-re),z(N,E,L,-re),de(e,I,M,V,j,E,L,W,N)}function St(e,t,n,o){return T(I,E,t),T(M,L,n),T(V,W,o),Ie(j,I,M,.5),z(j,V,j,Math.PI),Ie(N,E,L,.5),z(N,W,N,Math.PI),de(e,I,M,V,j,E,L,W,N)}function Me(e,t,n,o,r){return T(I,E,t),T(M,L,n),T(V,W,o),T(j,N,r),de(e,I,M,V,j,E,L,W,N)}const Ot=new Array(8).fill(0),It=new Array(8).fill(0);function Ee(e,t,n,o,r){return e[0]=t[0],e[1]=t[1],e[2]=n[0],e[3]=n[1],e[4]=o[0],e[5]=o[1],e[6]=r[0],e[7]=r[1],e}function de(e,t,n,o,r,s,a,c,u){return Oe(e,Ee(Ot,t,n,o,r),Ee(It,s,a,c,u))}function Mt(e,t,n,o){const r=ne(0,n),s=ne(0,0),a=ne(t,0),c=ne(t,n);return O(r,r,e),O(s,s,e),O(a,a,e),O(c,c,e),new se({rings:[[r,s,a,c,r]],spatialReference:o})}const Q=R,X=_();let H=class extends ${constructor(e){super(e),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:e,topRight:t,bottomLeft:n,bottomRight:o}=this;if(e==null||t==null||n==null||o==null)return null;const r=e.spatialReference;return t=this.projectOrWarn(t,r),n=this.projectOrWarn(n,r),o=this.projectOrWarn(o,r),t==null||n==null||o==null?null:new se({rings:[[[n.x,n.y],[e.x,e.y],[t.x,t.y],[o.x,o.y],[n.x,n.y]]],spatialReference:r})}set coords(e){const{topLeft:t}=this;if(t==null)return;const n=t.spatialReference;if((e=this.projectOrWarn(e,n))==null)return;const{rings:[[o,r,s,a]]}=e;this.bottomLeft=new p({x:o[0],y:o[1],spatialReference:n}),this.topLeft=new p({x:r[0],y:r[1],spatialReference:n}),this.topRight=new p({x:s[0],y:s[1],spatialReference:n}),this.bottomRight=new p({x:a[0],y:a[1],spatialReference:n})}toSourceNormalized(e){const{topLeft:t,topRight:n,bottomRight:o,bottomLeft:r}=this;if(e==null||t==null||n==null||o==null||r==null)return null;const s=t.spatialReference;e=e.normalize();const a=J(e,s).geometry;if(a==null)return null;A(X,a.x,a.y);const c=Oe(te(),[t.x,t.y,r.x,r.y,n.x,n.y,o.x,o.y],[0,0,0,1,1,0,1,1]);return O(X,X,c),x(X[0],X[1])}};i([l({clonable:!1})],H.prototype,"coords",null),i([l({type:p})],H.prototype,"bottomLeft",void 0),i([l({type:p})],H.prototype,"bottomRight",void 0),i([l({type:p})],H.prototype,"topLeft",void 0),i([l({type:p})],H.prototype,"topRight",void 0),H=i([P("esri.layers.support.CornersGeoreference")],H);const Et=H;let U=class extends ${constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(this.extent==null)return null;const{xmin:e,ymin:t,xmax:n,ymax:o,spatialReference:r}=this.extent;let s;if(this.rotation){const{x:a,y:c}=this.extent.center,u=he(a,c,this.rotation);s=[u(e,t),u(e,o),u(n,o),u(n,t)],s.push(s[0])}else s=[[e,t],[e,o],[n,o],[n,t],[e,t]];return new se({rings:[s],spatialReference:r})}set coords(e){if(e==null||this.extent==null)return;const t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),e?.extent==null)return;const{rings:[[n,o,r]],extent:{center:{x:s,y:a}}}=e,c=ze(Math.PI/2-Math.atan2(o[1]-n[1],o[0]-n[0])),u=he(s,a,-c),[h,y]=u(n[0],n[1]),[v,S]=u(r[0],r[1]);this.extent=new le({xmin:h,ymin:y,xmax:v,ymax:S,spatialReference:t}),this.rotation=c}toSourceNormalized(e){const{extent:t,rotation:n}=this;if(e==null||t==null)return null;const{xmin:o,ymin:r,xmax:s,ymax:a,center:c,spatialReference:u}=t;e=e.normalize();const h=J(e,u).geometry;if(h==null)return null;let y=h.x,v=h.y;return n&&([y,v]=he(c.x,c.y,-n)(y,v)),x(ge(y,o,s,0,1),ge(v,a,r,0,1))}};function he(e,t,n){const o=xt(n),r=Math.cos(o),s=Math.sin(o);return(a,c)=>[r*(a-e)+s*(c-t)+e,r*(c-t)-s*(a-e)+t]}i([l({clonable:!1})],U.prototype,"coords",null),i([l({type:le})],U.prototype,"extent",void 0),i([l({type:Number})],U.prototype,"rotation",void 0),U=i([P("esri.layers.support.ExtentAndRotationGeoreference")],U);const Lt=U;function Tt(e){return e?.type==="media"}function Le(e,t){const n=Ue(t);return Tt(e)&&!!e.portalItem&&n!=null&&n>k.PORTAL_ITEM}function jt(e,t,n){if(!e||e.type==="control-points")return e;const{coords:o}=e;if(o?.rings[0]?.length!==5)return null;const[r,s,a,c]=o.rings[0],{spatialReference:u}=o;return new Q({controlPoints:[{mapPoint:new p({x:r[0],y:r[1],spatialReference:u}),sourcePoint:x(0,n)},{mapPoint:new p({x:s[0],y:s[1],spatialReference:u}),sourcePoint:x(0,0)},{mapPoint:new p({x:a[0],y:a[1],spatialReference:u}),sourcePoint:x(t,0)},{mapPoint:new p({x:c[0],y:c[1],spatialReference:u}),sourcePoint:x(t,n)}],width:t,height:n})}function Te(e,t,n){return{enabled:!Le(n?.layer,n?.origin),ignoreOrigin:!0}}const je={json:{name:"url",type:String,write:{overridePolicy:Te}}},Ne={readOnly:!0,json:{read:!1,write:{target:"mediaType",overridePolicy:Te}}},Nt={types:{key:"type",base:$,typeMap:{"control-points":Q,corners:Et,"extent-and-rotation":Lt}},json:{types:{key:"type",base:$,typeMap:{"control-points":Q}},write:{overridePolicy:()=>({enabled:!0,ignoreOrigin:!0})}}};let G=class extends qe.NumericIdentifiableMixin(Se(ve)){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return Q.fromJSON(e)}writeGeoreference(e,t,n,o){const r=o?.resources?.pendingOperations,s=()=>{const a=jt(this.georeference,this.contentWidth,this.contentHeight);if(a){if(e.type!=="control-points"&&C.getLogger(this).warn(`only georeference of type 'control-points' may be persisted. The georeference of type '${e.type}' has been automatically converted.`),a.controlPoints?.length!==4&&o?.messages)return void o.messages.push(new w("property:unsupported","only 'control-points' georeference with 4 control points may be persisted."));t[n]=a.write({},o)}};if(e.type!=="control-points"&&!this.loaded&&r)return t[n]={},void r.push(this.load().then(s));s()}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:t,contentWidth:n,contentHeight:o}=this;if(e==null||t==null||n===0||o===0)return null;const r=t.toSourceNormalized(e);return r==null?null:(r.x*=n,r.y*=o,r)}};i([l(Nt)],G.prototype,"georeference",void 0),i([B("georeference")],G.prototype,"readGeoreference",null),i([F("georeference")],G.prototype,"writeGeoreference",null),i([l({json:{read:!1,write:!1}})],G.prototype,"opacity",void 0),G=i([P("esri.layers.support.MediaElementBase")],G);const me=G;var He;let b=class extends me{constructor(e){super(e),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this[He]=!0,this.image=null}load(){const e=this.image;if(typeof e=="string"){const t=Pt(e).then(n=>{this._set("content",n)});this.addResolvingPromise(t)}else if(e instanceof HTMLImageElement){const t=e.decode().then(()=>{this._set("content",e)});this.addResolvingPromise(t)}else e?this._set("content",e):this.addResolvingPromise(Promise.reject(new w("image-element:invalid-image-type","Invalid image type",{image:e})));return Promise.resolve(this)}get contentWidth(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(e,t,n){return Be(t.url,n)}writeImage(e,t,n,o){if(e==null)return;const r=o?.portalItem,s=o?.resources;if(!r||!s)return void(typeof e=="string"&&(t[n]=Pe(e,o)));const a=Ht(e)?e:null;if(a){if(we(a)==null)return void(t[n]=a);const c=Pe(a,{...o,verifyItemRelativeUrls:o?.verifyItemRelativeUrls?{writtenUrls:o.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},Fe.NO);if(r&&c&&!xe(c))return s.toKeep.push({resource:r.resourceFromPath(c),compress:!1}),void(t[n]=c)}t[n]="<pending>",s.pendingOperations.push(Ct(e).then(c=>{const u=Vt(c,r);t[n]=u.itemRelativeUrl,s.toAdd.push({resource:u,content:{type:"blob",blob:c},compress:!1,finish:h=>{this.image=h.url}})}))}};He=dt,i([l()],b.prototype,"animationOptions",void 0),i([l({readOnly:!0})],b.prototype,"content",void 0),i([l({readOnly:!0})],b.prototype,"contentWidth",null),i([l({readOnly:!0})],b.prototype,"contentHeight",null),i([l(je)],b.prototype,"image",void 0),i([B("image",["url"])],b.prototype,"readImage",null),i([F("image")],b.prototype,"writeImage",null),i([l(Ne)],b.prototype,"type",void 0),b=i([P("esri.layers.support.ImageElement")],b);const Ce=b;function Ht(e){return typeof e=="string"&&!ae(e)&&!ce(e)}async function Ct(e){return typeof e=="string"?ae(e)?ke(e):(await Re(e,{responseType:"blob"})).data:new Promise(t=>At(e).toBlob(t))}function At(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,n=e instanceof HTMLImageElement?e.naturalHeight:e.height,o=document.createElement("canvas"),r=o.getContext("2d");return o.width=t,o.height=n,e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,0,0),o}function Vt(e,t){const n=wt(),o=`${Je("media",n)}.${Rt({type:"blob",blob:e})}`;return t.resourceFromPath(o)}var Ae;let g=class extends me{constructor(e){super(e),this.autoplay=!0,this.content=null,this.controller=null,this.type="video",this[Ae]=!0}load(){const e=this.video;return typeof e=="string"?this.addResolvingPromise(Promise.all([this._preProcessVideoUrl(e),import("./VideoController-D7dk581s.js").then(t=>t.V)]).then(async([t,{default:n}])=>{this.controller=new n,this.controller.playerUrl=t,await be(()=>this.controller?.element),this.controller.loop=!0,this.controller.muted=!0,this.controller.playsInline=!0,this.controller.crossOrigin="anonymous",await be(()=>this.controller?.state==="can-play"),await this.controller.play(),this.autoplay||this.controller.pause(),this._set("content",this.controller.element)})):e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new w("video-element:invalid-video-type","Invalid video type",{video:e}))),Promise.resolve(this)}get contentWidth(){return this.content?.videoWidth??0}get contentHeight(){return this.content?.videoHeight??0}get currentTime(){return this.controller?.currentTime}set currentTime(e){if(!this.controller)return;const t=$e(e,0,this.controller.duration);this.controller?.setCurrentTime(t)}get duration(){return this.controller?.duration}set video(e){this.loadStatus==="not-loaded"?this._set("video",e):C.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}writeVideo(e,t,n,o){if(!e)return void(o?.messages&&o.messages.push(new w("video-element:unsupported-video","video source is missing")));const r=Wt(e)?e:null;if(!r)return void(o?.messages&&o.messages.push(new w("video-element:unsupported-video","video source must be an absolute url")));!xe(r)&&o?.blockedRelativeUrls&&o.blockedRelativeUrls.push(r);const s=Ke(r);we(s)?o?.messages&&o.messages.push(new w("video-element:unsupported-video","video source cannot be an item resource")):t[n]=s}async _preProcessVideoUrl(e){if(De(e))return _e(e);try{return await Re(e,{method:"head"}),e}catch{return _e(e,!0)}}_loadVideo(e){return new Promise((t,n)=>{const o=Qe(e,"canplay",()=>{this.removeHandles("canplay"),this.autoplay?e.play().then(t,n):t()});this.addHandles(o,"canplay"),e.crossOrigin!=="anonymous"&&(e.crossOrigin="anonymous",ce(e.src)||(e.src=e.src))})}};Ae=ht,i([l()],g.prototype,"autoplay",void 0),i([l({readOnly:!0})],g.prototype,"content",void 0),i([l({readOnly:!0})],g.prototype,"contentWidth",null),i([l({readOnly:!0})],g.prototype,"contentHeight",null),i([l()],g.prototype,"controller",void 0),i([l({type:Number})],g.prototype,"currentTime",null),i([l({type:Number})],g.prototype,"duration",null),i([l(je)],g.prototype,"video",null),i([F("video")],g.prototype,"writeVideo",null),i([l(Ne)],g.prototype,"type",void 0),g=i([P("esri.layers.support.VideoElement")],g);const Ve=g;function Wt(e){return typeof e=="string"&&!ae(e)&&!ce(e)}const Gt={key:"type",defaultKeyValue:"image",base:me,typeMap:{image:Ce,video:Ve}},We=Z.ofType(Gt);let q=class extends ve.LoadableMixin(Xe.EsriPromiseMixin(Ye.EventedAccessor)){constructor(e){super(e),this._index=new bt,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const o of t.removed){const r=this._elementViewsMap.get(o);this._elementViewsMap.delete(o),this._index.delete(r),this.removeHandles(r),r.destroy(),this.notifyChange("fullExtent")}const{spatialReference:n}=this;for(const o of t.added){if(this._elementViewsMap.get(o))continue;const r=new mt({spatialReference:n,element:o});this._elementViewsMap.set(o,r);const s=Ze(()=>r.coords,()=>this._updateIndexForElement(r,!1));this._updateIndexForElement(r,!0),this.addHandles(s,r)}this._elementsIndexes.clear(),this.elements.forEach((o,r)=>this._elementsIndexes.set(o,r)),this.emit("refresh")},this.elements=new We}async load(e){if(et(e),!this.spatialReference){const t=this.elements.find(n=>n.georeference?.coords!=null);this._set("spatialReference",t?t.georeference.coords.spatialReference:ie.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",tt(e,this._get("elements"),We))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return e==null?null:new le({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):C.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await gt(e.spatialReference,this.spatialReference,null,t);const n=nt(e.spatialReference,this.spatialReference)?e:vt(e,this.spatialReference);if(!n)return[];const o=n.normalize(),r=[];for(const s of o)this._index.forEachInBounds(ot(s),({normalizedCoords:a,element:c})=>{a!=null&&rt(s,a)&&r.push(c)});return r.sort((s,a)=>this._elementsIndexes.get(s)-this._elementsIndexes.get(a)),r}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,t){const n=e.normalizedBounds,o=this._index.has(e),r=n!=null;this._index.delete(e),r&&this._index.set(e,n),this.notifyChange("fullExtent"),t||(o!==r?this.emit("refresh"):this.emit("change",{element:e.element}))}};i([l()],q.prototype,"elements",null),i([l({readOnly:!0})],q.prototype,"fullExtent",null),i([l()],q.prototype,"spatialReference",null),q=i([P("esri.layers.support.LocalMediaElementSource")],q);const Y=q;let m=class extends at(pt(ct(ut(Se(lt))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=it(async(t,n,o)=>{const{save:r,saveAs:s}=await import("./mediaLayerUtils-C1fH3NR5.js");switch(t){case oe.SAVE:return r(this,n);case oe.SAVE_AS:return s(this,o,n)}}),this.source=new Y}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let t=this.source;if(!t)throw new w("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const n=this._getSourceOverride(t,this.georeference);n&&(this.setAtOrigin("source",n,"web-map"),this.setAtOrigin("source",n,"web-scene"),t=n);const o=ee(t)?new Y({elements:new Z([t])}):t;this._set("effectiveSource",o),this.spatialReference&&(o.spatialReference=this.spatialReference),await o.load(e),this.spatialReference=o.spatialReference}destroy(){this.effectiveSource?.destroy(),this.effectiveSource!==this.source&&this.source?.destroy()}readGeoreference(e,t){return e&&"itemId"in t&&t.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}get source(){return this._get("source")}set source(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("source",e):C.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new Y({elements:new Z(e)}):e instanceof Z?new Y({elements:e}):e:null}readSource(e,t,n){if("itemId"in t&&t.itemId)return;const o=this._createSource(t);return o?.read(t,n),o}writeSource(e,t,n,o){if(e&&e instanceof Y){const r=e.elements.length;if(r!==1)return void(o?.messages&&o.messages.push(new w("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${r}.`)));e=e.elements.at(0)}ee(e)?e.write(t,o):o?.messages&&(e?o.messages.push(new w("media-layer:unsupported-source","only media elements of type 'ImageElement' or 'VideoElement' can be persisted")):o.messages.push(new w("media-layer:unsupported-source","the media layer is missing a source")))}async save(e){return this._debouncedSaveOperations(oe.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(oe.SAVE_AS,t,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new Ce;case"video":return new Ve}return null}_getSourceOverride(e,t){if(ee(e)&&this.originIdOf("source")===k.PORTAL_ITEM&&t&&(this.originIdOf("georeference")===k.WEB_MAP||this.originIdOf("georeference")===k.WEB_SCENE)){const n=e.toJSON(),o=this._createSource(n);return o.read({...n},{origin:"portal-item"}),o.read({georeference:t},{origin:"web-map"}),o.read({georeference:t},{origin:"web-scene"}),o}return null}};i([l({readOnly:!0})],m.prototype,"effectiveSource",void 0),i([l({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],m.prototype,"georeference",void 0),i([B("web-document","georeference")],m.prototype,"readGeoreference",null),i([l({type:String})],m.prototype,"copyright",void 0),i([l({readOnly:!0})],m.prototype,"fullExtent",null),i([l({type:["MediaLayer"]})],m.prototype,"operationalLayerType",void 0),i([l({type:["show","hide"]})],m.prototype,"listMode",void 0),i([l({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image","video"]},georeference:{type:Q}},overridePolicy(e,t,n){return{enabled:!0,allowNull:!1,ignoreOrigin:Le(this,n?.origin)&&ee(e)&&!!e.georeference&&e.originIdOf("georeference")>k.PORTAL_ITEM}}}}})],m.prototype,"source",null),i([st("source")],m.prototype,"castSource",null),i([B("source",["url"])],m.prototype,"readSource",null),i([F("source")],m.prototype,"writeSource",null),i([l()],m.prototype,"spatialReference",void 0),i([l({readOnly:!0})],m.prototype,"type",void 0),m=i([P("esri.layers.MediaLayer")],m);const zt=m;export{zt as default};
