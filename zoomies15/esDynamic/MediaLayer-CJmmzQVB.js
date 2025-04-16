import{k as s,A as v,g0 as fe,n as C,o as a,bv as p,d9 as Ae,B as re,s as P,eU as w,u as k,q as F,bC as se,v as We,au as ie,dg as Ge,i5 as ye,bl as Ue,bm as J,i6 as ze,e as ge,p as Be,dk as ve,dn as Pe,dl as ke,dm as we,fd as ae,dp as le,i7 as Fe,U as xe,Z as Je,bx as $e,gZ as qe,d4 as Re,i8 as De,V as Y,gs as Ke,bP as Ze,aE as Qe,D as Xe,cW as Ye,bh as et,eR as tt,gE as nt,dA as ot,by as rt}from"./main-yxqK2SuK.js";import{S as be}from"./MultiOriginJSONSupport-rE-Iv97a.js";import{f as st}from"./Layer-Cfkh5xRq.js";import{l as it}from"./BlendLayer-Cd0hbvyB.js";import{b as at}from"./OperationalLayer-B-oqPeB7.js";import{j as lt}from"./PortalLayer-BTHLodGx.js";import{t as ct}from"./ScaleRangeLayer-D_VvaLx3.js";import{p as I,j as _e,m as ut}from"./perspectiveUtils-CjKREqfF.js";import{s as pt}from"./mat3-CC4Foazl.js";import{t as dt,e as ee}from"./mat3f64-Dh9_zhFu.js";import{o as N,I as U,_ as Se}from"./vec2-tHZ6OaOy.js";import{n as b,r as te}from"./vec2f64-CeODonrJ.js";import{V as $,N as ht,K as mt}from"./projection-DFcZYgpP.js";import{p as ft}from"./imageUtils-DqBr0_in.js";import{n as yt}from"./uuid-Dj9mdEVg.js";import{u as gt}from"./common-CYWrYyJl.js";import{p as vt}from"./resourceExtension-Dp3ZYzku.js";import{o as Pt}from"./BoundsStore-DRytYwmz.js";import{A as ne}from"./interfaces-Cwm0pihk.js";let ce=class extends fe{projectOrWarn(e,t){if(e==null)return e;const{geometry:n,pending:o}=$(e,t);return o?null:o||n?n:(C.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),null)}};ce=s([v("esri.layers.support.GeoreferenceBase")],ce);const q=ce,ue=ee(),d=b();let D=class extends We{};s([a({type:Number,json:{write:!0}})],D.prototype,"x",void 0),s([a({type:Number,json:{write:!0}})],D.prototype,"y",void 0),D=s([v("esri.layers.support.ControlPointsGeoreference.ControlPointJSONType")],D);let K=class extends fe{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};s([a()],K.prototype,"sourcePoint",void 0),s([a({type:p})],K.prototype,"mapPoint",void 0),K=s([v("esri.layers.support.ControlPointsGeoreference.ControlPoint")],K);let x=class extends Ae(q){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){const n=re.fromJSON(t.spatialReference),o=dt(...t.coefficients,1);return e.map(r=>(N(d,r.x,r.y),I(d,d,o),{sourcePoint:r,mapPoint:new p({x:d[0],y:d[1],spatialReference:n})}))}writeControlPoints(e,t,n,o){if(this.transform!=null)e!=null&&f(e[0])&&(t.controlPoints=e.map(r=>{const i=r.sourcePoint;return{x:i.x,y:i.y}}),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{const r=new P("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration. Make sure the parent media element is loaded i.e. the ImageElement or VideoElement set as 'MediaLayer.source'.",{layer:o?.layer,georeference:this});o?.messages?o.messages.push(r):C.getLogger(this).error(r.name,r.message)}}get coords(){if(this.controlPoints==null)return null;const e=this._updateTransform(ue);if(e==null||!f(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return _t(e,this.width,this.height,t)}set coords(e){if(this.controlPoints==null||!f(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if((e=this.projectOrWarn(e,t))==null)return;const{width:n,height:o}=this,{rings:[[r,i,l,c]]}=e,u={sourcePoint:w(0,o),mapPoint:new p({x:r[0],y:r[1],spatialReference:t})},h={sourcePoint:w(0,0),mapPoint:new p({x:i[0],y:i[1],spatialReference:t})},y={sourcePoint:w(n,0),mapPoint:new p({x:l[0],y:l[1],spatialReference:t})},g={sourcePoint:w(n,o),mapPoint:new p({x:c[0],y:c[1],spatialReference:t})};f(u)&&f(h)&&f(y)&&f(g)&&(Ie(ue,u,h,y,g),this.controlPoints=this.controlPoints.map(({sourcePoint:S})=>(N(d,S.x,S.y),I(d,d,ue),{sourcePoint:S,mapPoint:new p({x:d[0],y:d[1],spatialReference:t})})))}get inverseTransform(){return this.transform==null?null:pt(ee(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(e==null||this.transform==null||this.controlPoints==null||!f(this.controlPoints[0]))return null;N(d,e.x,e.y);const t=this.controlPoints[0].mapPoint.spatialReference;return I(d,d,this.transform),new p({x:d[0],y:d[1],spatialReference:t})}toSource(e){if(e==null||this.inverseTransform==null||this.controlPoints==null||!f(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),(e=$(e,t).geometry)==null?null:(N(d,e.x,e.y),I(d,d,this.inverseTransform),w(d[0],d[1]))}toSourceNormalized(e){const t=this.toSource(e);return t!=null&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(e){const{controlPoints:t,width:n,height:o}=this;if(!(t!=null&&n>0&&o>0))return null;const[r,i,l,c]=t;if(!f(r))return null;const u=r.mapPoint.spatialReference,h=this._projectControlPoint(i,u),y=this._projectControlPoint(l,u),g=this._projectControlPoint(c,u);if(!h.valid||!y.valid||!g.valid||!f(h.controlPoint))return null;e==null&&(e=ee());let S=null;return S=f(y.controlPoint)&&f(g.controlPoint)?Ie(e,r,h.controlPoint,y.controlPoint,g.controlPoint):f(y.controlPoint)?xt(e,r,h.controlPoint,y.controlPoint):wt(e,r,h.controlPoint),S.every(Ne=>Ne===0)?null:S}_projectControlPoint(e,t){if(!f(e))return{valid:!0,controlPoint:e};const{sourcePoint:n,mapPoint:o}=e,{geometry:r,pending:i}=$(o,t);return i?{valid:!1,controlPoint:null}:i||r?{valid:!0,controlPoint:{sourcePoint:n,mapPoint:r}}:(C.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:o.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function f(e){return e?.sourcePoint!=null&&e.mapPoint!=null}s([a({type:[K],json:{write:{allowNull:!1,isRequired:!0,target:{controlPoints:{type:[D]},coefficients:{type:[Number]},spatialReference:{type:re}}}}})],x.prototype,"controlPoints",void 0),s([k("controlPoints")],x.prototype,"readControlPoints",null),s([F("controlPoints")],x.prototype,"writeControlPoints",null),s([a({clonable:!1})],x.prototype,"coords",null),s([a({type:Number,nonNullable:!0,json:{write:!0}})],x.prototype,"height",void 0),s([a({readOnly:!0})],x.prototype,"inverseTransform",null),s([a({readOnly:!0})],x.prototype,"transform",null),s([a({type:Number,nonNullable:!0,json:{write:!0}})],x.prototype,"width",void 0),x=s([v("esri.layers.support.ControlPointsGeoreference")],x);const O=b(),E=b(),A=b(),j=b(),M=b(),L=b(),W=b(),H=b(),oe=Math.PI/2;function T(e,t,n){N(e,n.sourcePoint.x,n.sourcePoint.y),N(t,n.mapPoint.x,n.mapPoint.y)}function wt(e,t,n){return T(O,M,t),T(E,L,n),U(A,E,O,oe),U(j,O,E,oe),U(W,L,M,-oe),U(H,M,L,-oe),pe(e,O,E,A,j,M,L,W,H)}function xt(e,t,n,o){return T(O,M,t),T(E,L,n),T(A,W,o),Se(j,O,E,.5),U(j,A,j,Math.PI),Se(H,M,L,.5),U(H,W,H,Math.PI),pe(e,O,E,A,j,M,L,W,H)}function Ie(e,t,n,o,r){return T(O,M,t),T(E,L,n),T(A,W,o),T(j,H,r),pe(e,O,E,A,j,M,L,W,H)}const Rt=new Array(8).fill(0),bt=new Array(8).fill(0);function Oe(e,t,n,o,r){return e[0]=t[0],e[1]=t[1],e[2]=n[0],e[3]=n[1],e[4]=o[0],e[5]=o[1],e[6]=r[0],e[7]=r[1],e}function pe(e,t,n,o,r,i,l,c,u){return _e(e,Oe(Rt,t,n,o,r),Oe(bt,i,l,c,u))}function _t(e,t,n,o){const r=te(0,n),i=te(0,0),l=te(t,0),c=te(t,n);return I(r,r,e),I(i,i,e),I(l,l,e),I(c,c,e),new se({rings:[[r,i,l,c,r]],spatialReference:o})}const Z=x,Q=b();let V=class extends q{constructor(e){super(e),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:e,topRight:t,bottomLeft:n,bottomRight:o}=this;if(e==null||t==null||n==null||o==null)return null;const r=e.spatialReference;return t=this.projectOrWarn(t,r),n=this.projectOrWarn(n,r),o=this.projectOrWarn(o,r),t==null||n==null||o==null?null:new se({rings:[[[n.x,n.y],[e.x,e.y],[t.x,t.y],[o.x,o.y],[n.x,n.y]]],spatialReference:r})}set coords(e){const{topLeft:t}=this;if(t==null)return;const n=t.spatialReference;if((e=this.projectOrWarn(e,n))==null)return;const{rings:[[o,r,i,l]]}=e;this.bottomLeft=new p({x:o[0],y:o[1],spatialReference:n}),this.topLeft=new p({x:r[0],y:r[1],spatialReference:n}),this.topRight=new p({x:i[0],y:i[1],spatialReference:n}),this.bottomRight=new p({x:l[0],y:l[1],spatialReference:n})}toSourceNormalized(e){const{topLeft:t,topRight:n,bottomRight:o,bottomLeft:r}=this;if(e==null||t==null||n==null||o==null||r==null)return null;const i=t.spatialReference;e=e.normalize();const l=$(e,i).geometry;if(l==null)return null;N(Q,l.x,l.y);const c=_e(ee(),[t.x,t.y,r.x,r.y,n.x,n.y,o.x,o.y],[0,0,0,1,1,0,1,1]);return I(Q,Q,c),w(Q[0],Q[1])}};s([a({clonable:!1})],V.prototype,"coords",null),s([a({type:p})],V.prototype,"bottomLeft",void 0),s([a({type:p})],V.prototype,"bottomRight",void 0),s([a({type:p})],V.prototype,"topLeft",void 0),s([a({type:p})],V.prototype,"topRight",void 0),V=s([v("esri.layers.support.CornersGeoreference")],V);const St=V;let z=class extends q{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(this.extent==null)return null;const{xmin:e,ymin:t,xmax:n,ymax:o,spatialReference:r}=this.extent;let i;if(this.rotation){const{x:l,y:c}=this.extent.center,u=de(l,c,this.rotation);i=[u(e,t),u(e,o),u(n,o),u(n,t)],i.push(i[0])}else i=[[e,t],[e,o],[n,o],[n,t],[e,t]];return new se({rings:[i],spatialReference:r})}set coords(e){if(e==null||this.extent==null)return;const t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),e?.extent==null)return;const{rings:[[n,o,r]],extent:{center:{x:i,y:l}}}=e,c=Ge(Math.PI/2-Math.atan2(o[1]-n[1],o[0]-n[0])),u=de(i,l,-c),[h,y]=u(n[0],n[1]),[g,S]=u(r[0],r[1]);this.extent=new ie({xmin:h,ymin:y,xmax:g,ymax:S,spatialReference:t}),this.rotation=c}toSourceNormalized(e){const{extent:t,rotation:n}=this;if(e==null||t==null)return null;const{xmin:o,ymin:r,xmax:i,ymax:l,center:c,spatialReference:u}=t;e=e.normalize();const h=$(e,u).geometry;if(h==null)return null;let y=h.x,g=h.y;return n&&([y,g]=de(c.x,c.y,-n)(y,g)),w(ye(y,o,i,0,1),ye(g,l,r,0,1))}};function de(e,t,n){const o=gt(n),r=Math.cos(o),i=Math.sin(o);return(l,c)=>[r*(l-e)+i*(c-t)+e,r*(c-t)-i*(l-e)+t]}s([a({clonable:!1})],z.prototype,"coords",null),s([a({type:ie})],z.prototype,"extent",void 0),s([a({type:Number})],z.prototype,"rotation",void 0),z=s([v("esri.layers.support.ExtentAndRotationGeoreference")],z);const It=z;function Ot(e){return e?.type==="media"}function Ee(e,t){const n=Ue(t);return Ot(e)&&!!e.portalItem&&n!=null&&n>J.PORTAL_ITEM}function Et(e,t,n){if(!e||e.type==="control-points")return e;const{coords:o}=e;if(o?.rings[0]?.length!==5)return null;const[r,i,l,c]=o.rings[0],{spatialReference:u}=o;return new Z({controlPoints:[{mapPoint:new p({x:r[0],y:r[1],spatialReference:u}),sourcePoint:w(0,n)},{mapPoint:new p({x:i[0],y:i[1],spatialReference:u}),sourcePoint:w(0,0)},{mapPoint:new p({x:l[0],y:l[1],spatialReference:u}),sourcePoint:w(t,0)},{mapPoint:new p({x:c[0],y:c[1],spatialReference:u}),sourcePoint:w(t,n)}],width:t,height:n})}function Me(e,t,n){return{enabled:!Ee(n?.layer,n?.origin),ignoreOrigin:!0}}const Le={json:{name:"url",type:String,write:{overridePolicy:Me}}},Te={readOnly:!0,json:{read:!1,write:{target:"mediaType",overridePolicy:Me}}},Mt={types:{key:"type",base:q,typeMap:{"control-points":Z,corners:St,"extent-and-rotation":It}},json:{types:{key:"type",base:q,typeMap:{"control-points":Z}},write:{overridePolicy:()=>({enabled:!0,ignoreOrigin:!0})}}};let G=class extends ze(be(ge)){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return Z.fromJSON(e)}writeGeoreference(e,t,n,o){const r=o?.resources?.pendingOperations,i=()=>{const l=Et(this.georeference,this.contentWidth,this.contentHeight);if(l){if(e.type!=="control-points"&&C.getLogger(this).warn(`only georeference of type 'control-points' may be persisted. The georeference of type '${e.type}' has been automatically converted.`),l.controlPoints?.length!==4&&o?.messages)return void o.messages.push(new P("property:unsupported","only 'control-points' georeference with 4 control points may be persisted."));t[n]=l.write({},o)}};if(e.type!=="control-points"&&!this.loaded&&r)return t[n]={},void r.push(this.load().then(i));i()}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:t,contentWidth:n,contentHeight:o}=this;if(e==null||t==null||n===0||o===0)return null;const r=t.toSourceNormalized(e);return r==null?null:(r.x*=n,r.y*=o,r)}};s([a(Mt)],G.prototype,"georeference",void 0),s([k("georeference")],G.prototype,"readGeoreference",null),s([F("georeference")],G.prototype,"writeGeoreference",null),s([a({json:{read:!1,write:!1}})],G.prototype,"opacity",void 0),G=s([v("esri.layers.support.MediaElementBase")],G);const he=G;let R=class extends he{constructor(e){super(e),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){const e=this.image;if(typeof e=="string"){const t=ft(e).then(n=>{this._set("content",n)});this.addResolvingPromise(t)}else if(e instanceof HTMLImageElement){const t=e.decode().then(()=>{this._set("content",e)});this.addResolvingPromise(t)}else e?this._set("content",e):this.addResolvingPromise(Promise.reject(new P("image-element:invalid-image-type","Invalid image type",{image:e})));return Promise.resolve(this)}get contentWidth(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(e,t,n){return Be(t.url,n)}writeImage(e,t,n,o){if(e==null)return;const r=o?.portalItem,i=o?.resources;if(!r||!i)return void(typeof e=="string"&&(t[n]=ve(e,o)));const l=Lt(e)?e:null;if(l){if(Pe(l)==null)return void(t[n]=l);const c=ve(l,{...o,verifyItemRelativeUrls:o?.verifyItemRelativeUrls?{writtenUrls:o.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},ke.NO);if(r&&c&&!we(c))return i.toKeep.push({resource:r.resourceFromPath(c),compress:!1}),void(t[n]=c)}t[n]="<pending>",i.pendingOperations.push(Tt(e).then(c=>{const u=Ht(c,r);t[n]=u.itemRelativeUrl,i.toAdd.push({resource:u,content:{type:"blob",blob:c},compress:!1,finish:h=>{this.image=h.url}})}))}};s([a()],R.prototype,"animationOptions",void 0),s([a({readOnly:!0})],R.prototype,"content",void 0),s([a({readOnly:!0})],R.prototype,"contentWidth",null),s([a({readOnly:!0})],R.prototype,"contentHeight",null),s([a(Le)],R.prototype,"image",void 0),s([k("image",["url"])],R.prototype,"readImage",null),s([F("image")],R.prototype,"writeImage",null),s([a(Te)],R.prototype,"type",void 0),R=s([v("esri.layers.support.ImageElement")],R);const je=R;function Lt(e){return typeof e=="string"&&!ae(e)&&!le(e)}async function Tt(e){return typeof e=="string"?ae(e)?Fe(e):(await xe(e,{responseType:"blob"})).data:new Promise(t=>jt(e).toBlob(t))}function jt(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,n=e instanceof HTMLImageElement?e.naturalHeight:e.height,o=document.createElement("canvas"),r=o.getContext("2d");return o.width=t,o.height=n,e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,0,0),o}function Ht(e,t){const n=yt(),o=`${Je("media",n)}.${vt({type:"blob",blob:e})}`;return t.resourceFromPath(o)}let _=class extends he{constructor(e){super(e),this.autoplay=!0,this.content=null,this.type="video"}load(){const e=this.video;return typeof e=="string"?this.addResolvingPromise(this._preProcessVideoUrl(e).then(t=>{const n=document.createElement("video");return n.src=t,n.crossOrigin="anonymous",n.autoplay=!0,n.muted=!0,n.loop=!0,n.playsInline=!0,this._loadVideo(n).then(()=>{this._set("content",n)})})):e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new P("video-element:invalid-video-type","Invalid video type",{video:e}))),Promise.resolve(this)}get contentWidth(){return this.content?.videoWidth??0}get contentHeight(){return this.content?.videoHeight??0}set video(e){this.loadStatus==="not-loaded"?this._set("video",e):C.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}writeVideo(e,t,n,o){if(!e)return void(o?.messages&&o.messages.push(new P("video-element:unsupported-video","video source is missing")));const r=Vt(e)?e:null;if(!r)return void(o?.messages&&o.messages.push(new P("video-element:unsupported-video","video source must be an absolute url")));!we(r)&&o?.blockedRelativeUrls&&o.blockedRelativeUrls.push(r);const i=$e(r);Pe(i)?o?.messages&&o.messages.push(new P("video-element:unsupported-video","video source cannot be an item resource")):t[n]=i}async _preProcessVideoUrl(e){if(qe(e))return Re(e);try{return await xe(e,{method:"head"}),e}catch{return Re(e,!0)}}_loadVideo(e){return new Promise((t,n)=>{const o=De(e,"canplay",()=>{this.removeHandles("canplay"),this.autoplay?e.play().then(t,n):t()});this.addHandles(o,"canplay"),e.crossOrigin!=="anonymous"&&(e.crossOrigin="anonymous",le(e.src)||(e.src=e.src))})}};s([a()],_.prototype,"autoplay",void 0),s([a({readOnly:!0})],_.prototype,"content",void 0),s([a({readOnly:!0})],_.prototype,"contentWidth",null),s([a({readOnly:!0})],_.prototype,"contentHeight",null),s([a(Le)],_.prototype,"video",null),s([F("video")],_.prototype,"writeVideo",null),s([a(Te)],_.prototype,"type",void 0),_=s([v("esri.layers.support.VideoElement")],_);const He=_;function Vt(e){return typeof e=="string"&&!ae(e)&&!le(e)}const Ct={key:"type",defaultKeyValue:"image",base:he,typeMap:{image:je,video:He}},Ve=Y.ofType(Ct);let B=class extends ge.LoadableMixin(Ke(Ze.EventedAccessor)){constructor(e){super(e),this._index=new Pt,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const o of t.removed){const r=this._elementViewsMap.get(o);this._elementViewsMap.delete(o),this._index.delete(r),this.removeHandles(r),r.destroy(),this.notifyChange("fullExtent")}const{spatialReference:n}=this;for(const o of t.added){if(this._elementViewsMap.get(o))continue;const r=new ut({spatialReference:n,element:o});this._elementViewsMap.set(o,r);const i=Qe(()=>r.coords,()=>this._updateIndexForElement(r,!1));this._updateIndexForElement(r,!0),this.addHandles(i,r)}this._elementsIndexes.clear(),this.elements.forEach((o,r)=>this._elementsIndexes.set(o,r)),this.emit("refresh")},this.elements=new Ve}async load(e){if(Xe(e),!this.spatialReference){const t=this.elements.find(n=>n.georeference?.coords!=null);this._set("spatialReference",t?t.georeference.coords.spatialReference:re.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",Ye(e,this._get("elements"),Ve))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return e==null?null:new ie({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):C.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await ht(e.spatialReference,this.spatialReference,null,t);const n=et(e.spatialReference,this.spatialReference)?e:mt(e,this.spatialReference);if(!n)return[];const o=n.normalize(),r=[];for(const i of o)this._index.forEachInBounds(tt(i),({normalizedCoords:l,element:c})=>{l!=null&&nt(i,l)&&r.push(c)});return r.sort((i,l)=>this._elementsIndexes.get(i)-this._elementsIndexes.get(l)),r}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,t){const n=e.normalizedBounds,o=this._index.has(e),r=n!=null;this._index.delete(e),r&&this._index.set(e,n),this.notifyChange("fullExtent"),t||(o!==r?this.emit("refresh"):this.emit("change",{element:e.element}))}};s([a()],B.prototype,"elements",null),s([a({readOnly:!0})],B.prototype,"fullExtent",null),s([a()],B.prototype,"spatialReference",null),B=s([v("esri.layers.support.LocalMediaElementSource")],B);const X=B;function me(e){return typeof e=="object"&&e!=null&&"type"in e}function Ce(e){return me(e)&&(e.type==="image"||e.type==="video")}let m=class extends it(ct(at(lt(be(st))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=ot(async(t,n,o)=>{const{save:r,saveAs:i}=await import("./mediaLayerUtils-CDFult8m.js");switch(t){case ne.SAVE:return r(this,n);case ne.SAVE_AS:return i(this,o,n)}}),this.source=new X}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let t=this.source;if(!t)throw new P("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const n=this._getSourceOverride(t,this.georeference);n&&(this.setAtOrigin("source",n,"web-map"),this.setAtOrigin("source",n,"web-scene"),t=n);const o=me(t)?new X({elements:new Y([t])}):t;this._set("effectiveSource",o),this.spatialReference&&(o.spatialReference=this.spatialReference),await o.load(e),this.spatialReference=o.spatialReference}destroy(){this.effectiveSource?.destroy(),this.effectiveSource!==this.source&&this.source?.destroy()}readGeoreference(e,t){return e&&"itemId"in t&&t.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("source",e):C.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new X({elements:new Y(e)}):e instanceof Y?new X({elements:e}):e:null}readSource(e,t,n){if("itemId"in t&&t.itemId)return;const o=this._createSource(t);return o?.read(t,n),o}writeSource(e,t,n,o){if(e&&e instanceof X){const r=e.elements.length;if(r!==1)return void(o?.messages&&o.messages.push(new P("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${r}.`)));e=e.elements.at(0)}Ce(e)?e.write(t,o):o?.messages&&(e?o.messages.push(new P("media-layer:unsupported-source","only media elements of type 'ImageElement' or 'VideoElement' can be persisted")):o.messages.push(new P("media-layer:unsupported-source","the media layer is missing a source")))}async save(e){return this._debouncedSaveOperations(ne.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(ne.SAVE_AS,t,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new je;case"video":return new He}return null}_getSourceOverride(e,t){if(me(e)&&this.originIdOf("source")===J.PORTAL_ITEM&&t&&(this.originIdOf("georeference")===J.WEB_MAP||this.originIdOf("georeference")===J.WEB_SCENE)){const n=e.toJSON(),o=this._createSource(n);return o.read({...n},{origin:"portal-item"}),o.read({georeference:t},{origin:"web-map"}),o.read({georeference:t},{origin:"web-scene"}),o}return null}};s([a({readOnly:!0})],m.prototype,"effectiveSource",void 0),s([a({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],m.prototype,"georeference",void 0),s([k("web-document","georeference")],m.prototype,"readGeoreference",null),s([a({type:String})],m.prototype,"copyright",void 0),s([a({readOnly:!0})],m.prototype,"fullExtent",null),s([a({type:["MediaLayer"]})],m.prototype,"operationalLayerType",void 0),s([a({type:["show","hide"]})],m.prototype,"listMode",void 0),s([a({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image","video"]},georeference:{type:Z}},overridePolicy(e,t,n){return{enabled:!0,allowNull:!1,ignoreOrigin:Ee(this,n?.origin)&&Ce(e)&&!!e.georeference&&e.originIdOf("georeference")>J.PORTAL_ITEM}}}}})],m.prototype,"source",null),s([rt("source")],m.prototype,"castSource",null),s([k("source",["url"])],m.prototype,"readSource",null),s([F("source")],m.prototype,"writeSource",null),s([a()],m.prototype,"spatialReference",void 0),s([a({readOnly:!0})],m.prototype,"type",void 0),m=s([v("esri.layers.MediaLayer")],m);const Nt=m;export{Nt as default};
