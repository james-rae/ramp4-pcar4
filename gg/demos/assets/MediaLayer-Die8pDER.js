const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoController-mgWt1IEG.js","./main-BnINupoD.js","./preload-helper-ExcqyqRp.js","./main-gKmidBZg.css","./mat3f64-q3fE-ZOt.js","./mat3-CruJiiUv.js","./common-DQOJ18NT.js","./vec32-zaCIH5IA.js","./spatialReferenceEllipsoidUtils-CE9BWFiu.js","./projectBuffer-aZbPqVLL.js","./_commonjsHelpers-DCkdB7M8.js","./mediaLayerUtils-TyYsfvLW.js","./utils-Bt1gTORM.js","./originUtils-CPX8CCAY.js","./multiOriginJSONSupportUtils-C0wm8_Yw.js","./PortalItem-DK_mjKau.js","./jsonContext-tHh0MAxV.js","./portalItemUtils-ChyFTvmo.js","./projection-BG6zqujR.js","./saveUtils-CtuOV8r8.js","./resourceUtils-D5USeNjT.js","./uuid-Cl5lrJ4c.js","./resourceUtils-CYpMCaMj.js"])))=>i.map(i=>d[i]);
import{_ as be}from"./preload-helper-ExcqyqRp.js";import{B as i,N as b,aZ as _e,n as W,D as l,bE as d,J as $e,O as ae,s as R,fA as x,H as D,G as X,bQ as ce,bB as ue,dz as Ge,jh as fe,by as ze,bz as F,dH as qe,o as Se,p as Be,dQ as ye,dT as Ie,dR as Je,dS as Oe,fZ as pe,dU as de,ji as ke,a4 as Ee,bK as Fe,fJ as ge,aR as De,bH as Qe,i5 as Ke,dC as ve,jj as Ze,V as ne,he as Xe,c0 as Ye,aO as et,X as tt,dm as nt,bj as ot,gx as rt,hq as it,e7 as st,bI as lt}from"./main-BnINupoD.js";import{S as Me}from"./MultiOriginJSONSupport-CGej6qDM.js";import{f as at}from"./Layer-CwalWWQV.js";import{p as ct}from"./BlendLayer-BxUnbfFb.js";import{b as ut}from"./OperationalLayer-DKH-ff4v.js";import{j as pt}from"./PortalLayer-D6Y3jv6h.js";import{t as dt}from"./ScaleRangeLayer-B8obctTT.js";import{p as S,j as Le,n as ht,e as mt,m as ft,c as oe}from"./mediaLayerUtils-DMKtgItE.js";import{s as yt}from"./mat3-CruJiiUv.js";import{t as gt,e as re}from"./mat3f64-q3fE-ZOt.js";import{o as N,I as z,_ as Pe}from"./vec2-maR1OrZI.js";import{n as _,t as Y}from"./vec2f64-DohEyf3f.js";import{X as Q,Q as vt,O as Pt}from"./projection-BG6zqujR.js";import{p as wt}from"./imageUtils-ZdAnWR8g.js";import{n as xt}from"./uuid-Cl5lrJ4c.js";import{u as Rt}from"./common-DQOJ18NT.js";import{p as bt}from"./resourceExtension-BQeikUPo.js";import{o as _t}from"./BoundsStore-Dxd083mu.js";import{A as ee}from"./interfaces-CL2NbQte.js";import"./TimeExtent-Drrkeg7H.js";import"./layerContainerType-C5CzMsLd.js";import"./jsonUtils-BsukQQP4.js";import"./parser-MOfMo6qv.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-pV3Yd6bK.js";import"./commonProperties-Bl81uyDg.js";import"./ElevationInfo-Cbv7unv8.js";import"./lengthUtils-CI7g6Q2A.js";import"./PortalItem-DK_mjKau.js";import"./portalItemUtils-ChyFTvmo.js";import"./normalizeUtilsSync-CKLqOnRs.js";import"./normalizeUtilsCommon-DfLd2kE6.js";import"./vec32-zaCIH5IA.js";import"./projectBuffer-aZbPqVLL.js";import"./PooledRBush-CMPBeBl8.js";import"./quickselect-QQC62dOK.js";let le=class extends _e{projectOrWarn(e,t){if(e==null)return e;const{geometry:n,pending:o}=Q(e,t);return o?null:o||n?n:(W.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),null)}};le=i([b("esri.layers.support.GeoreferenceBase")],le);const K=le,ie=re(),p=_();let J=class extends $e{};i([l({type:Number,json:{write:{isRequired:!0}}})],J.prototype,"x",void 0),i([l({type:Number,json:{write:{isRequired:!0}}})],J.prototype,"y",void 0),J=i([b("esri.layers.support.ControlPointsGeoreference.ControlPointJSONType")],J);let k=class extends _e{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};i([l()],k.prototype,"sourcePoint",void 0),i([l({type:d})],k.prototype,"mapPoint",void 0),k=i([b("esri.layers.support.ControlPointsGeoreference.ControlPoint")],k);let P=class extends $e.JSONSupportMixin(K){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){const n=ae.fromJSON(t.spatialReference),o=gt(...t.coefficients,1);return e.map(r=>(N(p,r.x,r.y),S(p,p,o),{sourcePoint:r,mapPoint:new d({x:p[0],y:p[1],spatialReference:n})}))}writeControlPoints(e,t,n,o){if(this.transform!=null)e!=null&&y(e[0])&&(t.controlPoints=e.map(r=>{const s=r.sourcePoint;return{x:s.x,y:s.y}}),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{const r=new R("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration. Make sure the parent media element is loaded i.e. the ImageElement or VideoElement set as 'MediaLayer.source'.",{layer:o?.layer,georeference:this});o?.messages?o.messages.push(r):W.getLogger(this).error(r.name,r.message)}}get coords(){if(this.controlPoints==null)return null;const e=this._updateTransform(ie);if(e==null||!y(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return Et(e,this.width,this.height,t)}set coords(e){if(this.controlPoints==null||!y(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if((e=this.projectOrWarn(e,t))==null)return;const{width:n,height:o}=this,{rings:[[r,s,a,c]]}=e,u={sourcePoint:x(0,o),mapPoint:new d({x:r[0],y:r[1],spatialReference:t})},h={sourcePoint:x(0,0),mapPoint:new d({x:s[0],y:s[1],spatialReference:t})},m={sourcePoint:x(n,0),mapPoint:new d({x:a[0],y:a[1],spatialReference:t})},v={sourcePoint:x(n,o),mapPoint:new d({x:c[0],y:c[1],spatialReference:t})};y(u)&&y(h)&&y(m)&&y(v)&&(we(ie,u,h,m,v),this.controlPoints=this.controlPoints.map(({sourcePoint:$})=>(N(p,$.x,$.y),S(p,p,ie),{sourcePoint:$,mapPoint:new d({x:p[0],y:p[1],spatialReference:t})})))}get inverseTransform(){return this.transform==null?null:yt(re(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(e==null||this.transform==null||this.controlPoints==null||!y(this.controlPoints[0]))return null;N(p,e.x,e.y);const t=this.controlPoints[0].mapPoint.spatialReference;return S(p,p,this.transform),new d({x:p[0],y:p[1],spatialReference:t})}toSource(e){if(e==null||this.inverseTransform==null||this.controlPoints==null||!y(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),(e=Q(e,t).geometry)==null?null:(N(p,e.x,e.y),S(p,p,this.inverseTransform),x(p[0],p[1]))}toSourceNormalized(e){const t=this.toSource(e);return t!=null&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(e){const{controlPoints:t,width:n,height:o}=this;if(!(t!=null&&n>0&&o>0))return null;const[r,s,a,c]=t;if(!y(r))return null;const u=r.mapPoint.spatialReference,h=this._projectControlPoint(s,u),m=this._projectControlPoint(a,u),v=this._projectControlPoint(c,u);if(!h.valid||!m.valid||!v.valid||!y(h.controlPoint))return null;e==null&&(e=re());let $=null;return $=y(m.controlPoint)&&y(v.controlPoint)?we(e,r,h.controlPoint,m.controlPoint,v.controlPoint):y(m.controlPoint)?St(e,r,h.controlPoint,m.controlPoint):$t(e,r,h.controlPoint),$.every(Ue=>Ue===0)?null:$}_projectControlPoint(e,t){if(!y(e))return{valid:!0,controlPoint:e};const{sourcePoint:n,mapPoint:o}=e,{geometry:r,pending:s}=Q(o,t);return s?{valid:!1,controlPoint:null}:s||r?{valid:!0,controlPoint:{sourcePoint:n,mapPoint:r}}:(W.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:o.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function y(e){return e?.sourcePoint!=null&&e.mapPoint!=null}i([l({type:[k],json:{write:{allowNull:!1,isRequired:!0,target:{controlPoints:{type:[J],isRequired:!0},coefficients:{type:[Number],isRequired:!0},spatialReference:{type:ae,isRequired:!0}}}}})],P.prototype,"controlPoints",void 0),i([D("controlPoints")],P.prototype,"readControlPoints",null),i([X("controlPoints")],P.prototype,"writeControlPoints",null),i([l({clonable:!1})],P.prototype,"coords",null),i([l({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],P.prototype,"height",void 0),i([l({readOnly:!0})],P.prototype,"inverseTransform",null),i([l({readOnly:!0})],P.prototype,"transform",null),i([l({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],P.prototype,"width",void 0),P=i([b("esri.layers.support.ControlPointsGeoreference")],P);const I=_(),O=_(),A=_(),j=_(),E=_(),M=_(),C=_(),H=_(),te=Math.PI/2;function L(e,t,n){N(e,n.sourcePoint.x,n.sourcePoint.y),N(t,n.mapPoint.x,n.mapPoint.y)}function $t(e,t,n){return L(I,E,t),L(O,M,n),z(A,O,I,te),z(j,I,O,te),z(C,M,E,-te),z(H,E,M,-te),he(e,I,O,A,j,E,M,C,H)}function St(e,t,n,o){return L(I,E,t),L(O,M,n),L(A,C,o),Pe(j,I,O,.5),z(j,A,j,Math.PI),Pe(H,E,M,.5),z(H,C,H,Math.PI),he(e,I,O,A,j,E,M,C,H)}function we(e,t,n,o,r){return L(I,E,t),L(O,M,n),L(A,C,o),L(j,H,r),he(e,I,O,A,j,E,M,C,H)}const It=new Array(8).fill(0),Ot=new Array(8).fill(0);function xe(e,t,n,o,r){return e[0]=t[0],e[1]=t[1],e[2]=n[0],e[3]=n[1],e[4]=o[0],e[5]=o[1],e[6]=r[0],e[7]=r[1],e}function he(e,t,n,o,r,s,a,c,u){return Le(e,xe(It,t,n,o,r),xe(Ot,s,a,c,u))}function Et(e,t,n,o){const r=Y(0,n),s=Y(0,0),a=Y(t,0),c=Y(t,n);return S(r,r,e),S(s,s,e),S(a,a,e),S(c,c,e),new ce({rings:[[r,s,a,c,r]],spatialReference:o})}const Z=P,q=_();let T=class extends K{constructor(e){super(e),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:e,topRight:t,bottomLeft:n,bottomRight:o}=this;if(e==null||t==null||n==null||o==null)return null;const r=e.spatialReference;return t=this.projectOrWarn(t,r),n=this.projectOrWarn(n,r),o=this.projectOrWarn(o,r),t==null||n==null||o==null?null:new ce({rings:[[[n.x,n.y],[e.x,e.y],[t.x,t.y],[o.x,o.y],[n.x,n.y]]],spatialReference:r})}set coords(e){const{topLeft:t}=this;if(t==null)return;const n=t.spatialReference;if((e=this.projectOrWarn(e,n))==null)return;const{rings:[[o,r,s,a]]}=e;this.bottomLeft=new d({x:o[0],y:o[1],spatialReference:n}),this.topLeft=new d({x:r[0],y:r[1],spatialReference:n}),this.topRight=new d({x:s[0],y:s[1],spatialReference:n}),this.bottomRight=new d({x:a[0],y:a[1],spatialReference:n})}toSourceNormalized(e){const{topLeft:t,topRight:n,bottomRight:o,bottomLeft:r}=this;if(e==null||t==null||n==null||o==null||r==null)return null;const s=t.spatialReference;e=e.normalize();const a=Q(e,s).geometry;if(a==null)return null;N(q,a.x,a.y);const c=Le(re(),[t.x,t.y,r.x,r.y,n.x,n.y,o.x,o.y],[0,0,0,1,1,0,1,1]);return S(q,q,c),x(q[0],q[1])}};i([l({clonable:!1})],T.prototype,"coords",null),i([l({type:d})],T.prototype,"bottomLeft",void 0),i([l({type:d})],T.prototype,"bottomRight",void 0),i([l({type:d})],T.prototype,"topLeft",void 0),i([l({type:d})],T.prototype,"topRight",void 0),T=i([b("esri.layers.support.CornersGeoreference")],T);const Mt=T;let U=class extends K{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(this.extent==null)return null;const{xmin:e,ymin:t,xmax:n,ymax:o,spatialReference:r}=this.extent;let s;if(this.rotation){const{x:a,y:c}=this.extent.center,u=se(a,c,this.rotation);s=[u(e,t),u(e,o),u(n,o),u(n,t)],s.push(s[0])}else s=[[e,t],[e,o],[n,o],[n,t],[e,t]];return new ce({rings:[s],spatialReference:r})}set coords(e){if(e==null||this.extent==null)return;const t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),e?.extent==null)return;const{rings:[[n,o,r]],extent:{center:{x:s,y:a}}}=e,c=Ge(Math.PI/2-Math.atan2(o[1]-n[1],o[0]-n[0])),u=se(s,a,-c),[h,m]=u(n[0],n[1]),[v,$]=u(r[0],r[1]);this.extent=new ue({xmin:h,ymin:m,xmax:v,ymax:$,spatialReference:t}),this.rotation=c}toSourceNormalized(e){const{extent:t,rotation:n}=this;if(e==null||t==null)return null;const{xmin:o,ymin:r,xmax:s,ymax:a,center:c,spatialReference:u}=t;e=e.normalize();const h=Q(e,u).geometry;if(h==null)return null;let m=h.x,v=h.y;return n&&([m,v]=se(c.x,c.y,-n)(m,v)),x(fe(m,o,s,0,1),fe(v,a,r,0,1))}};function se(e,t,n){const o=Rt(n),r=Math.cos(o),s=Math.sin(o);return(a,c)=>[r*(a-e)+s*(c-t)+e,r*(c-t)-s*(a-e)+t]}i([l({clonable:!1})],U.prototype,"coords",null),i([l({type:ue})],U.prototype,"extent",void 0),i([l({type:Number})],U.prototype,"rotation",void 0),U=i([b("esri.layers.support.ExtentAndRotationGeoreference")],U);const Lt=U;function Tt(e){return e?.type==="media"}function Te(e,t){const n=ze(t);return Tt(e)&&!!e.portalItem&&n!=null&&n>F.PORTAL_ITEM}function jt(e,t,n){if(!e||e.type==="control-points")return e;const{coords:o}=e;if(o?.rings[0]?.length!==5)return null;const[r,s,a,c]=o.rings[0],{spatialReference:u}=o;return new Z({controlPoints:[{mapPoint:new d({x:r[0],y:r[1],spatialReference:u}),sourcePoint:x(0,n)},{mapPoint:new d({x:s[0],y:s[1],spatialReference:u}),sourcePoint:x(0,0)},{mapPoint:new d({x:a[0],y:a[1],spatialReference:u}),sourcePoint:x(t,0)},{mapPoint:new d({x:c[0],y:c[1],spatialReference:u}),sourcePoint:x(t,n)}],width:t,height:n})}function je(e,t,n){return{enabled:!Te(n?.layer,n?.origin),ignoreOrigin:!0}}const He={json:{name:"url",type:String,write:{overridePolicy:je}}},Ve={readOnly:!0,json:{read:!1,write:{target:"mediaType",overridePolicy:je}}},Ht={types:{key:"type",base:K,typeMap:{"control-points":Z,corners:Mt,"extent-and-rotation":Lt}},json:{types:{key:"type",base:K,typeMap:{"control-points":Z}},write:{overridePolicy:()=>({enabled:!0,ignoreOrigin:!0})}}};let V=class extends qe.NumericIdentifiableMixin(Me(Se)){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return Z.fromJSON(e)}writeGeoreference(e,t,n,o){const r=o?.resources?.pendingOperations,s=()=>{const a=jt(this.georeference,this.contentWidth,this.contentHeight);if(a){if(e.type!=="control-points"&&W.getLogger(this).warn(`only georeference of type 'control-points' may be persisted. The georeference of type '${e.type}' has been automatically converted.`),a.controlPoints?.length!==4&&o?.messages)return void o.messages.push(new R("property:unsupported","only 'control-points' georeference with 4 control points may be persisted."));t[n]=a.write({},o)}};if(e.type!=="control-points"&&!this.loaded&&r)return t[n]={},void r.push(this.load().then(s));s()}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:t,contentWidth:n,contentHeight:o}=this;if(e==null||t==null||n===0||o===0)return null;const r=t.toSourceNormalized(e);return r==null?null:(r.x*=n,r.y*=o,r)}};i([l(Ht)],V.prototype,"georeference",void 0),i([D("georeference")],V.prototype,"readGeoreference",null),i([X("georeference")],V.prototype,"writeGeoreference",null),i([l({json:{read:!1,write:!1}})],V.prototype,"opacity",void 0),V=i([b("esri.layers.support.MediaElementBase")],V);const me=V;var Ne;let w=class extends me{constructor(t){super(t),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this[Ne]=!0,this.image=null}load(){const t=this.image;if(typeof t=="string"){const n=wt(t).then(o=>{this._set("content",o)});this.addResolvingPromise(n)}else if(t instanceof HTMLImageElement){const n=t.decode().then(()=>{this._set("content",t)});this.addResolvingPromise(n)}else t?this._set("content",t):this.addResolvingPromise(Promise.reject(new R("image-element:invalid-image-type","Invalid image type",{image:t})));return Promise.resolve(this)}get contentWidth(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(t,n,o){return Be(n.url,o)}writeImage(t,n,o,r){if(t==null)return;const s=r?.portalItem,a=r?.resources;if(!s||!a)return void(typeof t=="string"&&(n[o]=ye(t,r)));const c=Vt(t)?t:null;if(c){if(Ie(c)==null)return void(n[o]=c);const u=ye(c,{...r,verifyItemRelativeUrls:r?.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},Je.NO);if(s&&u&&!Oe(u))return a.toKeep.push({resource:s.resourceFromPath(u),compress:!1}),void(n[o]=u)}n[o]="<pending>",a.pendingOperations.push(Nt(t).then(u=>{const h=Ct(u,s);n[o]=h.itemRelativeUrl,a.toAdd.push({resource:h,content:{type:"blob",blob:u},compress:!1,finish:m=>{this.image=m.url}})}))}};Ne=ht,i([l()],w.prototype,"animationOptions",void 0),i([l({readOnly:!0})],w.prototype,"content",void 0),i([l({readOnly:!0})],w.prototype,"contentWidth",null),i([l({readOnly:!0})],w.prototype,"contentHeight",null),i([l(He)],w.prototype,"image",void 0),i([D("image",["url"])],w.prototype,"readImage",null),i([X("image")],w.prototype,"writeImage",null),i([l(Ve)],w.prototype,"type",void 0),w=i([b("esri.layers.support.ImageElement")],w);const Ae=w;function Vt(e){return typeof e=="string"&&!pe(e)&&!de(e)}async function Nt(e){return typeof e=="string"?pe(e)?ke(e):(await Ee(e,{responseType:"blob"})).data:new Promise(t=>At(e).toBlob(t))}function At(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,n=e instanceof HTMLImageElement?e.naturalHeight:e.height,o=document.createElement("canvas"),r=o.getContext("2d");return o.width=t,o.height=n,e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,0,0),o}function Ct(e,t){const n=xt(),o=`${Fe("media",n)}.${bt({type:"blob",blob:e})}`;return t.resourceFromPath(o)}var Ce;let g=class extends me{constructor(t){super(t),this.autoplay=!0,this.content=null,this.controller=null,this.type="video",this[Ce]=!0}load(){const t=this.video;return typeof t=="string"?this.addResolvingPromise(Promise.all([this._preProcessVideoUrl(t),be(()=>import("./VideoController-mgWt1IEG.js").then(n=>n.V),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url)]).then(async([n,{default:o}])=>{this.controller=new o,this.controller.playerUrl=n,await ge(()=>this.controller?.element),this.controller.loop=!0,this.controller.muted=!0,this.controller.playsInline=!0,this.controller.crossOrigin="anonymous",await ge(()=>this.controller?.state==="can-play"),await this.controller.play(),this.autoplay||this.controller.pause(),this._set("content",this.controller.element)})):t instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(t).then(()=>{this._set("content",t)})):this.addResolvingPromise(Promise.reject(new R("video-element:invalid-video-type","Invalid video type",{video:t}))),Promise.resolve(this)}get contentWidth(){return this.content?.videoWidth??0}get contentHeight(){return this.content?.videoHeight??0}get currentTime(){return this.controller?.currentTime}set currentTime(t){if(!this.controller)return;const n=De(t,0,this.controller.duration);this.controller?.setCurrentTime(n)}get duration(){return this.controller?.duration}set video(t){this.loadStatus==="not-loaded"?this._set("video",t):W.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}writeVideo(t,n,o,r){if(!t)return void(r?.messages&&r.messages.push(new R("video-element:unsupported-video","video source is missing")));const s=Wt(t)?t:null;if(!s)return void(r?.messages&&r.messages.push(new R("video-element:unsupported-video","video source must be an absolute url")));!Oe(s)&&r?.blockedRelativeUrls&&r.blockedRelativeUrls.push(s);const a=Qe(s);Ie(a)?r?.messages&&r.messages.push(new R("video-element:unsupported-video","video source cannot be an item resource")):n[o]=a}async _preProcessVideoUrl(t){if(Ke(t))return ve(t);try{return await Ee(t,{method:"head"}),t}catch{return ve(t,!0)}}_loadVideo(t){return new Promise((n,o)=>{const r=Ze(t,"canplay",()=>{this.removeHandles("canplay"),this.autoplay?t.play().then(n,o):n()});this.addHandles(r,"canplay"),t.crossOrigin!=="anonymous"&&(t.crossOrigin="anonymous",de(t.src)||(t.src=t.src))})}};Ce=mt,i([l()],g.prototype,"autoplay",void 0),i([l({readOnly:!0})],g.prototype,"content",void 0),i([l({readOnly:!0})],g.prototype,"contentWidth",null),i([l({readOnly:!0})],g.prototype,"contentHeight",null),i([l()],g.prototype,"controller",void 0),i([l({type:Number})],g.prototype,"currentTime",null),i([l({type:Number})],g.prototype,"duration",null),i([l(He)],g.prototype,"video",null),i([X("video")],g.prototype,"writeVideo",null),i([l(Ve)],g.prototype,"type",void 0),g=i([b("esri.layers.support.VideoElement")],g);const We=g;function Wt(e){return typeof e=="string"&&!pe(e)&&!de(e)}const Ut={key:"type",defaultKeyValue:"image",base:me,typeMap:{image:Ae,video:We}},Re=ne.ofType(Ut);let G=class extends Se.LoadableMixin(Xe.EsriPromiseMixin(Ye.EventedAccessor)){constructor(e){super(e),this._index=new _t,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const o of t.removed){const r=this._elementViewsMap.get(o);this._elementViewsMap.delete(o),this._index.delete(r),this.removeHandles(r),r.destroy(),this.notifyChange("fullExtent")}const{spatialReference:n}=this;for(const o of t.added){if(this._elementViewsMap.get(o))continue;const r=new ft({spatialReference:n,element:o});this._elementViewsMap.set(o,r);const s=et(()=>r.coords,()=>this._updateIndexForElement(r,!1));this._updateIndexForElement(r,!0),this.addHandles(s,r)}this._elementsIndexes.clear(),this.elements.forEach((o,r)=>this._elementsIndexes.set(o,r)),this.emit("refresh")},this.elements=new Re}async load(e){if(tt(e),!this.spatialReference){const t=this.elements.find(n=>n.georeference?.coords!=null);this._set("spatialReference",t?t.georeference.coords.spatialReference:ae.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",nt(e,this._get("elements"),Re))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return e==null?null:new ue({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):W.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await vt(e.spatialReference,this.spatialReference,null,t);const n=ot(e.spatialReference,this.spatialReference)?e:Pt(e,this.spatialReference);if(!n)return[];const o=n.normalize(),r=[];for(const s of o)this._index.forEachInBounds(rt(s),({normalizedCoords:a,element:c})=>{a!=null&&it(s,a)&&r.push(c)});return r.sort((s,a)=>this._elementsIndexes.get(s)-this._elementsIndexes.get(a)),r}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,t){const n=e.normalizedBounds,o=this._index.has(e),r=n!=null;this._index.delete(e),r&&this._index.set(e,n),this.notifyChange("fullExtent"),t||(o!==r?this.emit("refresh"):this.emit("change",{element:e.element}))}};i([l()],G.prototype,"elements",null),i([l({readOnly:!0})],G.prototype,"fullExtent",null),i([l()],G.prototype,"spatialReference",null),G=i([b("esri.layers.support.LocalMediaElementSource")],G);const B=G;let f=class extends ct(dt(ut(pt(Me(at))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=st(async(t,n,o)=>{const{save:r,saveAs:s}=await be(()=>import("./mediaLayerUtils-TyYsfvLW.js"),__vite__mapDeps([11,12,1,2,3,13,14,15,16,17,18,9,19,20,21,22]),import.meta.url);switch(t){case ee.SAVE:return r(this,n);case ee.SAVE_AS:return s(this,o,n)}}),this.source=new B}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let t=this.source;if(!t)throw new R("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const n=this._getSourceOverride(t,this.georeference);n&&(this.setAtOrigin("source",n,"web-map"),this.setAtOrigin("source",n,"web-scene"),t=n);const o=oe(t)?new B({elements:new ne([t])}):t;this._set("effectiveSource",o),this.spatialReference&&(o.spatialReference=this.spatialReference),await o.load(e),this.spatialReference=o.spatialReference}destroy(){this.effectiveSource?.destroy(),this.effectiveSource!==this.source&&this.source?.destroy()}readGeoreference(e,t){return e&&"itemId"in t&&t.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}get source(){return this._get("source")}set source(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("source",e):W.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new B({elements:new ne(e)}):e instanceof ne?new B({elements:e}):e:null}readSource(e,t,n){if("itemId"in t&&t.itemId)return;const o=this._createSource(t);return o?.read(t,n),o}writeSource(e,t,n,o){if(e&&e instanceof B){const r=e.elements.length;if(r!==1)return void(o?.messages&&o.messages.push(new R("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${r}.`)));e=e.elements.at(0)}oe(e)?e.write(t,o):o?.messages&&(e?o.messages.push(new R("media-layer:unsupported-source","only media elements of type 'ImageElement' or 'VideoElement' can be persisted")):o.messages.push(new R("media-layer:unsupported-source","the media layer is missing a source")))}async save(e){return this._debouncedSaveOperations(ee.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(ee.SAVE_AS,t,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new Ae;case"video":return new We}return null}_getSourceOverride(e,t){if(oe(e)&&this.originIdOf("source")===F.PORTAL_ITEM&&t&&(this.originIdOf("georeference")===F.WEB_MAP||this.originIdOf("georeference")===F.WEB_SCENE)){const n=e.toJSON(),o=this._createSource(n);return o.read({...n},{origin:"portal-item"}),o.read({georeference:t},{origin:"web-map"}),o.read({georeference:t},{origin:"web-scene"}),o}return null}};i([l({readOnly:!0})],f.prototype,"effectiveSource",void 0),i([l({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],f.prototype,"georeference",void 0),i([D("web-document","georeference")],f.prototype,"readGeoreference",null),i([l({type:String})],f.prototype,"copyright",void 0),i([l({readOnly:!0})],f.prototype,"fullExtent",null),i([l({type:["MediaLayer"]})],f.prototype,"operationalLayerType",void 0),i([l({type:["show","hide"]})],f.prototype,"listMode",void 0),i([l({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image","video"]},georeference:{type:Z}},overridePolicy(e,t,n){return{enabled:!0,allowNull:!1,ignoreOrigin:Te(this,n?.origin)&&oe(e)&&!!e.georeference&&e.originIdOf("georeference")>F.PORTAL_ITEM}}}}})],f.prototype,"source",null),i([lt("source")],f.prototype,"castSource",null),i([D("source",["url"])],f.prototype,"readSource",null),i([X("source")],f.prototype,"writeSource",null),i([l()],f.prototype,"spatialReference",void 0),i([l({readOnly:!0})],f.prototype,"type",void 0),f=i([b("esri.layers.MediaLayer")],f);const In=f;export{In as default};
