import{k as u,o as f,T as Nt,q as Wt,u as Pt,A as P,v as ae,dk as Ne,cG as Te,a_ as zt,aC as We,by as Pe,n as Q,f as Ae,s as ee,eI as Ht,cD as C,bq as Bt,bg as kt,iw as Gt,ix as $t,iy as Se,h3 as le,c7 as Vt,aA as R,cp as Re,iz as Zt,gH as ze,iA as Me,au as qt,bu as He,D as ce,bv as O,R as Xt,fb as Yt,hM as Jt,fp as Kt,aN as Qt,g0 as er,V as tr,aG as rr,er as nr,fI as ue,e as or,gs as sr,aE as ir,bO as ar,iB as lr,bC as cr,iC as ur,cH as pr}from"./main-DaZH2qzH.js";import{j as Be,N as te,z as ke,w as pe,k as Ge,d as hr}from"./MeshTransform-CzfYvGR5.js";import{c as fr}from"./imageUtils-BPagsMuI.js";import{r as mr,n as dr,p as he}from"./MeshVertexAttributes-Bp5wNDfG.js";import{b as Ce,a as fe}from"./MeshLocalVertexSpace-s6aq03eo.js";import{a as re,s as me,g as $e,u as gr}from"./meshVertexSpaceUtils-BoWwLw2S.js";import{e as yr}from"./earcut-XDcq3zAf.js";import{t as Ve}from"./Indices-D-rLILc1.js";import{o as de,c as xr,u as vr,N as De,A as wr,z as Ze,E as br,g as Tr}from"./vec32-CNZIEqxa.js";import{M as Ar,O as Sr,v as Rr}from"./plane-Bn-FmvIB.js";import{e as qe}from"./deduplicate-DZISfaqC.js";import{c as _}from"./projectPointToVector-B4X4ZcZr.js";import{F as A,B as Le,O as N,n as Mr,k as Xe,g as Ye,E as Je,w as Ke,h as Qe,R as et,G as tt}from"./vertexSpaceConversion-B2SlF3j-.js";import{e as ge}from"./mat4f64-Dn1WEGBx.js";import{J as Cr}from"./projection-C6k445ah.js";import{a as Fe}from"./spatialReferenceEllipsoidUtils-xQbYtGDR.js";import{C as rt}from"./computeTranslationToOriginAndRotation-CtQFd2_f.js";import{n as Dr}from"./projectBuffer-CdEZDkSz.js";import{e as nt,i as Lr}from"./vec3-c1J7iIQj.js";import{o as ot,h as Fr,m as Or}from"./External-inMy8yXo.js";import{e as st}from"./mat3f64-Dh9_zhFu.js";import{n as _r}from"./mat3-CC4Foazl.js";import{D as it,c as at,O as lt,f as ct,I as ut,p as jr}from"./mat4-CF3QiBVL.js";import{b as Er}from"./quat-D6c9q3IE.js";import{e as Ir,r as Ur}from"./quatf64-C16JxGFv.js";var k;const Oe=new WeakMap;let Nr=0,j=k=class extends ae{constructor(e){super(e),this.wrap="repeat"}get url(){return this._get("url")||null}set url(e){this._set("url",e),e&&this._set("data",null)}get data(){return this._get("data")||null}set data(e){this._set("data",e),e&&this._set("url",null)}writeData(e,t,n,r){if(e instanceof HTMLImageElement){const o={type:"image-element",src:Ne(e.src,r),crossOrigin:e.crossOrigin};t[n]=o}else if(e instanceof HTMLCanvasElement){const o={type:"canvas-element",imageData:pt(e.getContext("2d").getImageData(0,0,e.width,e.height))};t[n]=o}else if(e instanceof HTMLVideoElement){const o={type:"video-element",src:Ne(e.src,r),autoplay:e.autoplay,loop:e.loop,muted:e.muted,crossOrigin:e.crossOrigin,preload:e.preload};t[n]=o}else if(e instanceof ImageData){const o={type:"image-data",imageData:pt(e)};t[n]=o}}readData(e){switch(e.type){case"image-element":{const t=new Image;return t.src=e.src,t.crossOrigin=e.crossOrigin,t}case"canvas-element":{const t=ht(e.imageData),n=document.createElement("canvas");return n.width=t.width,n.height=t.height,n.getContext("2d").putImageData(t,0,0),n}case"image-data":return ht(e.imageData);case"video-element":{const t=document.createElement("video");return t.src=e.src,t.crossOrigin=e.crossOrigin,t.autoplay=e.autoplay,t.loop=e.loop,t.muted=e.muted,t.preload=e.preload,t}default:return}}get transparent(){const{data:e,url:t}=this;return e instanceof HTMLCanvasElement?ft(e.getContext("2d").getImageData(0,0,e.width,e.height)):e instanceof ImageData?ft(e):!(!t?.toLowerCase().endsWith(".png")&&!t?.toLocaleLowerCase().startsWith("data:image/png;"))}set transparent(e){this._overrideIfSome("transparent",e)}get contentHash(){const e=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",t=(n="")=>`d:${n},t:${this.transparent},w:${e}`;return this.url!=null?t(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?t(this.data.src):(Oe.has(this.data)||Oe.set(this.data,++Nr),t(Oe.get(this.data))):t()}get memoryUsage(){let e=0;if(e+=this.url!=null?this.url.length:0,this.data!=null){const t=this.data;"data"in t?e+=t.data.byteLength:t instanceof HTMLImageElement?e+=t.naturalWidth*t.naturalHeight*3:t instanceof HTMLCanvasElement&&(e+=t.width*t.height*3)}return e}clone(){const e={url:this.url,data:this.data,wrap:this._cloneWrap()};return new k(e)}cloneWithDeduplication(e){const t=e.get(this);if(t)return t;const n=this.clone();return e.set(this,n),n}_cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}static from(e){return typeof e=="string"?new k({url:e}):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData||e instanceof HTMLVideoElement?new k({data:e}):Te(k,e)}};function pt(e){let t="";for(let n=0;n<e.data.length;n++)t+=String.fromCharCode(e.data[n]);return{data:btoa(t),width:e.width,height:e.height}}function ht(e){const t=atob(e.data),n=new Uint8ClampedArray(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return fr(n,e.width,e.height)}function ft(e){for(let t=3;t<e.data.length;t+=4)if(e.data[t]!==255)return!0;return!1}u([f({type:String,json:{write:Nt}})],j.prototype,"url",null),u([f({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),f()],j.prototype,"data",null),u([Wt("data")],j.prototype,"writeData",null),u([Pt("data")],j.prototype,"readData",null),u([f({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],j.prototype,"transparent",null),u([f({json:{write:!0}})],j.prototype,"wrap",void 0),u([f({readOnly:!0})],j.prototype,"contentHash",null),j=k=u([P("esri.geometry.support.MeshTexture")],j);const G=j;let $=class extends zt(ae){constructor(e){super(e),this.offset=[0,0],this.rotation=0,this.scale=[1,1]}};u([f({type:[Number],nonNullable:!0,json:{write:!0}})],$.prototype,"offset",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0}})],$.prototype,"rotation",void 0),u([f({type:[Number],nonNullable:!0,json:{write:!0}})],$.prototype,"scale",void 0),$=u([P("esri.geometry.support.MeshTextureTransform")],$);const V=$;var _e;let F=_e=class extends ae{constructor(e){super(e),this.color=null,this.colorTexture=null,this.colorTextureTransform=null,this.normalTexture=void 0,this.normalTextureTransform=void 0,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const n=e!=null?e.get(this):null;if(n)return n;const r=new _e(this.clonePropertiesWithDeduplication(t));return e?.set(this,r),r}clonePropertiesWithDeduplication(e){return{color:this.color!=null?this.color.clone():null,colorTexture:this.colorTexture?.cloneWithDeduplication(e),normalTexture:this.normalTexture?.cloneWithDeduplication(e),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:this.colorTextureTransform?.clone(),normalTextureTransform:this.normalTextureTransform?.clone()}}get memoryUsage(){return this.getMemoryUsage()}getMemoryUsage(){let e=0;return e+=this.color!=null?16:0,this.colorTexture!=null&&(e+=this.colorTexture.memoryUsage),e+=this.colorTextureTransform!=null?20:0,this.normalTexture!=null&&(e+=this.normalTexture.memoryUsage),e+=this.normalTextureTransform!=null?20:0,e}};u([f({type:We,json:{write:!0}})],F.prototype,"color",void 0),u([f({type:G,json:{write:!0}})],F.prototype,"colorTexture",void 0),u([f({type:V,json:{write:!0}})],F.prototype,"colorTextureTransform",void 0),u([f({type:G,json:{write:!0}})],F.prototype,"normalTexture",void 0),u([f({type:V,json:{write:!0}})],F.prototype,"normalTextureTransform",void 0),u([f({nonNullable:!0,json:{write:!0}})],F.prototype,"alphaMode",void 0),u([f({nonNullable:!0,json:{write:!0}})],F.prototype,"alphaCutoff",void 0),u([f({nonNullable:!0,json:{write:!0}})],F.prototype,"doubleSided",void 0),F=_e=u([P("esri.geometry.support.MeshMaterial")],F);const je=F;var Ee;let D=Ee=class extends je{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.emissiveTextureTransform=void 0,this.occlusionTexture=null,this.occlusionTextureTransform=void 0,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null,this.metallicRoughnessTextureTransform=void 0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const n=e!=null?e.get(this):null;if(n)return n;const r=new Ee(this.clonePropertiesWithDeduplication(t));return e?.set(this,r),r}getMemoryUsage(){let e=super.getMemoryUsage();return e+=this.emissiveColor!=null?16:0,this.emissiveTexture!=null&&(e+=this.emissiveTexture.memoryUsage),e+=this.emissiveTextureTransform!=null?20:0,this.occlusionTexture!=null&&(e+=this.occlusionTexture.memoryUsage),e+=this.occlusionTextureTransform!=null?20:0,this.metallicRoughnessTexture!=null&&(e+=this.metallicRoughnessTexture.memoryUsage),e+=this.metallicRoughnessTextureTransform!=null?20:0,e}clonePropertiesWithDeduplication(e){return{...super.clonePropertiesWithDeduplication(e),emissiveColor:this.emissiveColor?.clone(),emissiveTexture:this.emissiveTexture?.cloneWithDeduplication(e),emissiveTextureTransform:this.emissiveTextureTransform?.clone(),occlusionTexture:this.occlusionTexture?.cloneWithDeduplication(e),occlusionTextureTransform:this.occlusionTextureTransform?.clone(),metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?.cloneWithDeduplication(e),metallicRoughnessTextureTransform:this.metallicRoughnessTextureTransform?.clone()}}};u([f({type:We,json:{write:!0}})],D.prototype,"emissiveColor",void 0),u([f({type:G,json:{write:!0}})],D.prototype,"emissiveTexture",void 0),u([f({type:V,json:{write:!0}})],D.prototype,"emissiveTextureTransform",void 0),u([f({type:G,json:{write:!0}})],D.prototype,"occlusionTexture",void 0),u([f({type:V,json:{write:!0}})],D.prototype,"occlusionTextureTransform",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],D.prototype,"metallic",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],D.prototype,"roughness",void 0),u([f({type:G,json:{write:!0}})],D.prototype,"metallicRoughnessTexture",void 0),u([f({type:V,json:{write:!0}})],D.prototype,"metallicRoughnessTextureTransform",void 0),D=Ee=u([P("esri.geometry.support.MeshMaterialMetallicRoughness")],D);const mt=D;var ne;let E=ne=class extends ae{static from(e){return Te(ne,e)}constructor(e){super(e),this.faces=null,this.material=null,this.name=void 0,this.shading="source",this.trustSourceNormals=!1}castFaces(e){return dr(e,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},Q.getLogger(this))}castMaterial(e){return Te(e&&typeof e=="object"&&("metallic"in e||"roughness"in e||"metallicRoughnessTexture"in e)?mt:je,e)}clone(){return new ne({faces:Ae(this.faces),shading:this.shading,material:Ae(this.material),trustSourceNormals:this.trustSourceNormals,name:this.name})}cloneWithDeduplication(e,t){const n={faces:Ae(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(e,t):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new ne(n)}get memoryUsage(){let e=0;return this.faces!=null&&(e+=this.faces.byteLength),this.material!=null&&(e+=this.material.memoryUsage),e}};u([f({json:{write:mr}})],E.prototype,"faces",void 0),u([Pe("faces")],E.prototype,"castFaces",null),u([f({type:je,json:{write:!0}})],E.prototype,"material",void 0),u([Pe("material")],E.prototype,"castMaterial",null),u([f({json:{write:!0}})],E.prototype,"name",void 0),u([f({type:String,json:{write:!0}})],E.prototype,"shading",void 0),u([f({type:Boolean})],E.prototype,"trustSourceNormals",void 0),E=ne=u([P("esri.geometry.support.MeshComponent")],E);const z=E,Wr="Mesh must be loaded before applying operations",Pr="Provided component is not part of the list of components",zr="Expected polygon to be a Polygon instance",oe="Expected location to be a Point instance";class dt extends ee{constructor(){super("invalid-input:location",oe)}}function Hr(e,t,n){const r=Br(gt,e,t,n)?Sr(gt):[0,0,1];return Math.abs(r[2])>Math.cos(Ht(80))?C.Z:Math.abs(r[1])>Math.abs(r[0])?C.Y:C.X}function Br(e,t,n,r){const o=(i=>!Array.isArray(i[0]))(t)?(i,a)=>t[3*i+a]:(i,a)=>t[i][a],s=r?Bt(r)/kt(r):1;return Rr(e,(i,a)=>de(i,o(a,0)*s,o(a,1)*s,o(a,2)),n)}const gt=Ar();function kr(e){const t=$r(e.rings,e.hasZ,xe.CCW_IS_HOLE,e.spatialReference),n=new Array;let r=0,o=0;for(const a of t.polygons){const c=a.count,l=a.index,h=Gt(t.position,3*l,3*c),m=a.holeIndices.map(d=>d-l),p=Ve(yr(h,m,3));n.push({position:h,faces:p}),r+=h.length,o+=p.length}const s=Gr(n,r,o),i=Array.isArray(s.position)?qe(s.position,3,{originalIndices:s.faces}):qe(s.position.buffer,6,{originalIndices:s.faces});return s.position=$t(new Float64Array(i.buffer)),s.faces=i.indices,s}function Gr(e,t,n){if(e.length===1)return e[0];const r=Se(t),o=new Array(n);let s=0,i=0,a=0;for(const c of e){for(let l=0;l<c.position.length;l++)r[s++]=c.position[l];for(const l of c.faces)o[i++]=l+a;a=s/3}return{position:r,faces:Ve(o)}}function $r(e,t,n,r){const o=e.length,s=new Array(o),i=new Array(o),a=new Array(o);let c=0;for(let g=0;g<o;++g)c+=e[g].length;let l=0,h=0,m=0;const p=Se(3*c);let d=0;for(let g=o-1;g>=0;g--){const y=e[g],b=n===xe.CCW_IS_HOLE&&Vr(y,t,r);if(b&&o!==1)s[l++]=y;else{let M=y.length;for(let x=0;x<l;++x)M+=s[x].length;const T={index:d,pathLengths:new Array(l+1),count:M,holeIndices:new Array(l)};T.pathLengths[0]=y.length,y.length>0&&(a[m++]={index:d,count:y.length}),d=b?ye(y,y.length-1,-1,p,d,y.length,t):ye(y,0,1,p,d,y.length,t);for(let x=0;x<l;++x){const w=s[x];T.holeIndices[x]=d,T.pathLengths[x+1]=w.length,w.length>0&&(a[m++]={index:d,count:w.length}),d=ye(w,0,1,p,d,w.length,t)}l=0,T.count>0&&(i[h++]=T)}}for(let g=0;g<l;++g){const y=s[g];y.length>0&&(a[m++]={index:d,count:y.length}),d=ye(y,0,1,p,d,y.length,t)}return i.length=h,a.length=m,{position:p,polygons:i,outlines:a}}function ye(e,t,n,r,o,s,i){o*=3;for(let a=0;a<s;++a){const c=e[t];r[o++]=c[0],r[o++]=c[1],r[o++]=i&&c[2]?c[2]:0,t+=n}return o/3}function Vr(e,t,n){if(!t)return!le(e);const r=e.length-1;switch(Hr(e,r,n)){case C.X:return!le(e,C.Y,C.Z);case C.Y:return!le(e,C.X,C.Z);case C.Z:return!le(e,C.X,C.Y)}}var xe;(function(e){e[e.NONE=0]="NONE",e[e.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(xe||(xe={}));function Ie(e,t,n,r){if(r!==void 0){Vt(e(),"option: geographic",{replacement:"Use mesh `vertexSpace` and spatial reference to control how operations are performed instead.",version:"4.30",warnOnce:!0});const o=t.type==="local";if(!re(t)||r===o)return n.isGeographic||n.isWebMercator&&r;e().warnOnce(`Specifying the 'geographic' parameter (${r}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}switch(t.type){case"georeferenced":return n.isGeographic;case"local":return n.isGeographic||n.isWebMercator}}const se=()=>Q.getLogger("esri.geometry.support.meshUtils.centerAt");function Zr(e,t,n){if(!e.vertexAttributes?.position)return;const{vertexSpace:r}=e,o=n?.origin??e.origin,s=Ie(se,r,o.spatialReference,n?.geographic);re(r)?qr(e,t,o):s?Xr(e,t,o):Yr(e,t,o)}function qr(e,t,n){const{vertexSpace:r}=e;if(!re(r))return;const o=xt,s=yt;if(!_(t,s,e.spatialReference))return void A(se(),t.spatialReference,e.spatialReference,N);if(!_(n,o,e.spatialReference)){const a=e.origin;return o[0]=a.x,o[1]=a.y,o[2]=a.z,void A(se(),n.spatialReference,e.spatialReference,N)}const i=xr(Kr,s,o);r.origin=vr(R(),r.origin,i)}function Xr(e,t,n){const r=Re(n.x,n.y,n.z??0),o=Le(e,new Ce({origin:r}));if(!o)return;const s=Re(t.x,t.y,t.z??0),i=Le({vertexAttributes:o,spatialReference:e.spatialReference,vertexSpace:new Ce({origin:s})},fe.absolute);if(!i)return;const{position:a,normal:c,tangent:l}=i;e.vertexAttributes.position=a,e.vertexAttributes.normal=c,e.vertexAttributes.tangent=l,e.vertexAttributesChanged()}function Yr(e,t,n){const r=xt,o=yt;if(_(t,o,e.spatialReference)){if(!_(n,r,e.spatialReference)){const s=e.origin;return r[0]=s.x,r[1]=s.y,r[2]=s.z,void A(se(),n.spatialReference,e.spatialReference,N)}Jr(e.vertexAttributes.position,o,r),e.vertexAttributesChanged()}else A(se(),t.spatialReference,e.spatialReference,N)}function Jr(e,t,n){if(e)for(let r=0;r<e.length;r+=3)for(let o=0;o<3;o++)e[r+o]+=t[o]-n[o]}const yt=R(),xt=R(),Kr=R();function Qr(e){const{spatialReference:t,vertexSpace:n,untransformedBounds:r}=e,o=Zt(r,en);if(re(n)&&e.transform&&nt(o,o,e.transform.localMatrix),n.type==="georeferenced"){const a=n.origin;return a&&Lr(o,o,a),ze(Me(o),t)}const s=Fe(t),i=n.origin;if(!Cr(s,t)){const[a,c,l]=i;return new qt({xmin:a,ymin:c,zmin:l,xmax:a,ymax:c,zmax:l,spatialReference:t})}return rt(t,i,vt,s),nt(o,o,vt),Dr(o,s,0,o,t,0),ze(Me(o),t)}const vt=ge(),en=Se(24);async function tn(e,t,n){const{source:r}=t,{loadGLTFMesh:o}=await He(import("./loadGLTFMesh-BCDk4II4.js"),n),s=await nn(r,n);ce(n);const i=o(new O({x:0,y:0,z:0,spatialReference:e.spatialReference}),s.url,{resolveFile:rn(s),signal:n?.signal,expectedType:s.type,unitConversionDisabled:t.unitConversionDisabled});i.then(()=>s.dispose(),()=>s.dispose());const{vertexAttributes:a,components:c}=await i;e.vertexAttributes=a,e.components=c}function rn(e){const t=Xt(e.url);return n=>{const r=Yt(n,t,t),o=r?r.replace(/^ *\.\//,""):null;return(o?e.files.get(o):null)??n}}async function nn(e,t){if(Array.isArray(e)){if(!e.length)throw new ee("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?sn(e):an(e,t)}return wt(e)}async function on(e,t){const{parts:n,assetMimeType:r,assetName:o}=e;if(n.length===1)return new ve(n[0].partUrl);const s=await e.toBlob(t);return ce(t),ve.fromBlob(s,Rt(o,r))}function wt(e){return ve.fromBlob(e,Rt(e.name,e.type))}function sn(e){return St(e.map(t=>({name:t.name,mimeType:t.type,source:wt(t)})))}async function an(e,t){const n=await Jt(e.map(async r=>{const o=await on(r);return ce(t),{name:r.assetName,mimeType:r.assetMimeType,source:o}}));if(Kt(t))throw n.forEach(r=>r.source.dispose()),Qt();return St(n)}const bt=/^model\/gltf\+json$/,Tt=/^model\/gltf-binary$/,Ue=/\.gltf$/i,ln=/\.glb$/i;function At({mimeType:e,source:t,name:n}){return bt.test(e)||Ue.test(n)?{url:t.url,type:"gltf"}:Tt.test(e)||ln.test(n)?{url:t.url,type:"glb"}:null}function St(e){const t=new Map;let n=null,r=null;for(const s of e){const{source:i,name:a}=s;n??=At(s),a==="ESRI3DO_NORM.glb"&&(r=At(s)),t.set(a,i.url),i.files.forEach((c,l)=>t.set(l,c))}const o=r??n;if(o==null)throw new ee("mesh-load-external:missing-files","Missing files to load external mesh source");return new ve(o.url,()=>e.forEach(({source:s})=>s.dispose()),t,o.type)}let ve=class Ut{constructor(t,n=()=>{},r=new Map,o){this.url=t,this.dispose=n,this.files=r,this.type=o}static fromBlob(t,n){const r=URL.createObjectURL(t);return new Ut(r,()=>URL.revokeObjectURL(r),void 0,n)}};function Rt(e,t){return bt.test(t)||Ue.test(e)?"gltf":Tt.test(t)||Ue.test(e)?"glb":void 0}let I=class extends er{constructor(e){super(e),this.externalSources=new tr,this._explicitDisplaySource=null,this.georeferenced=!1,this.addHandles(rr(()=>this.externalSources,"after-remove",({item:t})=>{t===this._explicitDisplaySource&&(this._explicitDisplaySource=null)},{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(e!=null&&!ot(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every(t=>!Fr(t,e))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter(t=>Or(t,e))}get _implicitDisplaySource(){return this.externalSources.find(ot)}};u([f()],I.prototype,"externalSources",void 0),u([f()],I.prototype,"displaySource",null),u([f()],I.prototype,"_implicitDisplaySource",null),u([f()],I.prototype,"_explicitDisplaySource",void 0),u([f()],I.prototype,"georeferenced",void 0),I=u([P("esri.geometry.support.meshUtils.Metadata")],I);function cn(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=xn,r=4*e.length,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(2*e.length*3);let c=0,l=0,h=0,m=0;for(let p=0;p<e.length;p++){const d=e[p],g=c/3;for(const b of t)a[m++]=g+b;const y=d.corners;for(let b=0;b<4;b++){const M=y[b];let T=0;i[h++]=.25*n[b][0]+d.uvOrigin[0],i[h++]=d.uvOrigin[1]-.25*n[b][1];for(let x=0;x<3;x++)d.axis[x]!==0?(o[c++]=.5*d.axis[x],s[l++]=d.axis[x]):(o[c++]=.5*M[T++],s[l++]=0)}}return{position:o,normal:s,uv:i,faces:a}}function un(e,t){const n=e.components[0],r=n.faces,o=vn[t],s=6*o,i=new Array(6),a=new Array(r.length-6);let c=0,l=0;for(let h=0;h<r.length;h++)h>=s&&h<s+6?i[c++]=r[h]:a[l++]=r[h];if(e.vertexAttributes.uv!=null){const h=new Float32Array(e.vertexAttributes.uv),m=4*o*2,p=[0,1,1,1,1,0,0,0];for(let d=0;d<p.length;d++)h[m+d]=p[d];e.vertexAttributes.uv=h}return e.components=[new z({faces:i,material:n.material}),new z({faces:a})],e}function pn(e=0){const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*((t-1)*n*2));let c=0,l=0,h=0,m=0;for(let p=0;p<=t;p++){const d=p/t*Math.PI+.5*Math.PI,g=Math.cos(d),y=Math.sin(d);v[2]=y;const b=p===0||p===t,M=b?n-1:n;for(let T=0;T<=M;T++){const x=T/M*2*Math.PI;v[0]=-Math.sin(x)*g,v[1]=Math.cos(x)*g;for(let w=0;w<3;w++)o[c]=.5*v[w],s[c]=v[w],++c;i[l++]=(T+(b?.5:0))/n,i[l++]=p/t,p!==0&&T!==n&&(p!==t&&(a[h++]=m,a[h++]=m+1,a[h++]=m-n),p!==1&&(a[h++]=m,a[h++]=m-n,a[h++]=m-n-1)),m++}}return{position:o,normal:s,uv:i,faces:a}}function hn(e=0){const t=Math.round(16*2**e),n=4*(t+1)+2*t,r=new Float64Array(3*n),o=new Float32Array(3*n),s=new Float32Array(2*n),i=new Uint32Array(3*(4*t));let a=0,c=0,l=0,h=0,m=0;for(let p=0;p<=5;p++){const d=p===0||p===5,g=p<=1||p>=4,y=p===2||p===4,b=d?t-1:t;for(let M=0;M<=b;M++){const T=M/b*2*Math.PI,x=d?0:.5;v[0]=x*Math.sin(T),v[1]=x*-Math.cos(T),v[2]=p<=2?.5:-.5;for(let w=0;w<3;w++)r[a++]=v[w],o[c++]=g?w===2?p<=1?1:-1:0:w===2?0:v[w]/x;s[l++]=(M+(d?.5:0))/t,s[l++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,y||p===0||M===t||(p!==5&&(i[h++]=m,i[h++]=m+1,i[h++]=m-t),p!==1&&(i[h++]=m,i[h++]=m-t,i[h++]=m-t-1)),m++}}return{position:r,normal:o,uv:s,faces:i}}function fn(e,t){const n=typeof t=="number"?t:t!=null?t.width:1,r=typeof t=="number"?t:t!=null?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function mn(e){const t=ie.facingAxisOrderSwap[e],n=ie.position,r=ie.normal,o=new Float64Array(n.length),s=new Float32Array(r.length);let i=0;for(let a=0;a<4;a++){const c=i;for(let l=0;l<3;l++){const h=t[l],m=Math.abs(h)-1,p=h>=0?1:-1;o[i]=n[c+m]*p,s[i]=r[c+m]*p,i++}}return{position:o,normal:s,uv:new Float32Array(ie.uv),faces:new Uint32Array(ie.faces),isPlane:!0}}const Z=1,q=2,X=3,ie={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[X,Z,q],west:[-X,-Z,q],north:[-Z,X,q],south:[Z,-X,q],up:[Z,q,X],down:[Z,-q,-X]}};function we(e,t,n){e.isPlane||dn(e),yn(e,gn(n?.size,n?.unit,t.spatialReference));const r=me(t,n),o=t.spatialReference.isGeographic?me(t):r,s=Le({vertexAttributes:e,vertexSpace:o,spatialReference:t.spatialReference},r,{allowBufferReuse:!0});return{vertexAttributes:new he({...s,uv:e.uv}),vertexSpace:r,components:[new z({faces:e.faces,material:n?.material||null})],spatialReference:t.spatialReference}}function dn(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}function gn(e,t,n){const r=Mr(t,n);if(e==null&&r===1)return null;if(e==null)return[r,r,r];if(typeof e=="number"){const o=e*r;return[o,o,o]}return[e.width!=null?e.width*r:r,e.depth!=null?e.depth*r:r,e.height!=null?e.height*r:r]}function yn(e,t){if(t!=null){W[0]=t[0],W[4]=t[1],W[8]=t[2];for(let n=0;n<e.position.length;n+=3){for(let r=0;r<3;r++)v[r]=e.position[n+r];De(v,v,W);for(let r=0;r<3;r++)e.position[n+r]=v[r]}if(t[0]!==t[1]||t[1]!==t[2]){W[0]=1/t[0],W[4]=1/t[1],W[8]=1/t[2];for(let n=0;n<e.normal.length;n+=3){for(let r=0;r<3;r++)v[r]=e.normal[n+r];De(v,v,W),wr(v,v);for(let r=0;r<3;r++)e.normal[n+r]=v[r]}}}}const xn={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},vn={south:0,east:1,north:2,west:3,up:4,down:5},v=R(),W=st(),H=()=>Q.getLogger("esri.geometry.support.meshUtils.rotate");function wn(e,t,n){if(!e.vertexAttributes?.position||t[3]===0)return;const{spatialReference:r,vertexSpace:o}=e,s=n?.origin??e.origin,i=n?.geographic,a=Ie(H,o,r,i);$e(e)?bn(e,t,s):a?Tn(e,t,s):An(e,t,s)}function bn(e,t,n){e.transform??=new te;const{vertexSpace:r,transform:o,spatialReference:s}=e,[i,a,c]=r.origin,l=new O({x:i,y:a,z:c,spatialReference:s}),h=J;if(l.equals(n))de(h,0,0,0);else if(!Xe(h,n,e))return void A(H(),n.spatialReference,s,N);Er(Ft,pe(t),ke(t));const m=it(Mt,Ft,ue,nr,h),{localMatrix:p}=o,d=at(Mt,m,p);o.scale=lt(R(),d),ct(d,d,Ze(J,o.scale));const g=o.rotationAxis;o.rotation=Ge(d),o.rotationAngle===0&&(o.rotationAxis=g),o.translation=ut(R(),d)}function Tn(e,t,n){const r=e.spatialReference,o=Fe(r),s=Lt;if(!_(n,s,o)&&(A(H(),n.spatialReference,o,"Falling back to mesh origin"),!_(e.origin,s,o)))return void A(H(),e.origin.spatialReference,o);const i=e.vertexAttributes.position,a=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,l=new Float64Array(i.length),h=a!=null?new Float32Array(a.length):null,m=c!=null?new Float32Array(c.length):null;rt(o,s,be,o),_r(Dt,be);const p=Ct;De(pe(Ct),pe(t),Dt),p[3]=t[3],Ye(i,r,l,o)&&(a==null||h==null||Je(a,i,r,l,o,h))&&(c==null||m==null||Ke(c,i,r,l,o,m))?(Y(l,p,3,s),Qe(l,o,i,r)&&(a==null||h==null||(Y(h,p,3),et(h,i,r,l,o,a)))&&(c==null||m==null||(Y(m,p,4),tt(m,i,r,l,o,c)))?e.vertexAttributesChanged():A(H(),o,r)):A(H(),r,o)}function An(e,t,n){const r=Lt;if(!_(n,r,e.spatialReference)){const o=e.origin;return r[0]=o.x,r[1]=o.y,r[2]=o.z,void A(H(),n.spatialReference,e.spatialReference,N)}Y(e.vertexAttributes.position,t,3,r),Y(e.vertexAttributes.normal,t,3),Y(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}function Y(e,t,n,r=ue){if(e!=null){jr(be,ke(t),pe(t));for(let o=0;o<e.length;o+=n){for(let s=0;s<3;s++)J[s]=e[o+s]-r[s];br(J,J,be);for(let s=0;s<3;s++)e[o+s]=J[s]+r[s]}}}const J=R(),Mt=ge(),Ct=Be(),be=ge(),Dt=st(),Lt=R(),Ft=Ir(),B=()=>Q.getLogger("esri.geometry.support.meshUtils.scale");function Sn(e,t,n){if(!e.vertexAttributes?.position)return;const{vertexSpace:r,spatialReference:o}=e,s=n?.origin??e.origin,i=n?.geographic,a=Ie(B,r,o,i);$e(e)?Rn(e,t,s):a?Mn(e,t,s):Cn(e,t,s)}function Rn(e,t,n){e.transform??=new te;const{vertexSpace:r,transform:o,spatialReference:s}=e,[i,a,c]=r.origin,l=new O({x:i,y:a,z:c,spatialReference:s}),h=K;if(l.equals(n))de(h,0,0,0);else if(!Xe(h,n,e))return void A(B(),n.spatialReference,s,N);const m=de(Dn,t,t,t),p=it(_t,Ur,ue,m,h),{localMatrix:d}=o,g=at(_t,p,d);o.scale=lt(R(),g),ct(g,g,Ze(K,o.scale));const y=o.rotationAxis;o.rotation=Ge(g),o.rotationAngle===0&&(o.rotationAxis=y),o.translation=ut(R(),g)}function Mn(e,t,n){const r=e.spatialReference,o=Fe(r),s=jt;if(!_(n,s,o)&&(A(B(),n.spatialReference,o,"Falling back to mesh origin"),!_(e.origin,s,o)))return void A(B(),e.origin.spatialReference,o);const i=e.vertexAttributes.position,a=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,l=new Float64Array(i.length),h=a!=null?new Float32Array(a.length):null,m=c!=null?new Float32Array(c.length):null;Ye(i,r,l,o)&&(a==null||h==null||Je(a,i,r,l,o,h))&&(c==null||m==null||Ke(c,i,r,l,o,m))?(Ot(l,t,s),Qe(l,o,i,r)&&(a==null||h==null||et(h,i,r,l,o,a))&&(c==null||m==null||tt(m,i,r,l,o,c))?e.vertexAttributesChanged():A(B(),o,r)):A(B(),r,o)}function Cn(e,t,n){const r=jt;if(!_(n,r,e.spatialReference)){const o=e.origin;return r[0]=o.x,r[1]=o.y,r[2]=o.z,void A(B(),n.spatialReference,e.spatialReference,N)}Ot(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}function Ot(e,t,n=ue){if(e)for(let r=0;r<e.length;r+=3){for(let o=0;o<3;o++)K[o]=e[r+o]-n[o];Tr(K,K,t);for(let o=0;o<3;o++)e[r+o]=K[o]+n[o]}}const K=R(),Dn=R(),_t=ge(),jt=R();var L;const Et="esri.geometry.Mesh";function U(){return Q.getLogger(Et)}const Ln={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:fe,local:Ce}};let S=L=class extends or.LoadableMixin(sr(pr)){constructor(e){super(e),this.components=null,this.vertexSpace=new fe,this.transform=null,this.metadata=new I,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new he,this.type="mesh"}initialize(){(this.metadata.externalSources.length===0||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.addHandles(ir(()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map(e=>e.clone())}),()=>this._clearSources(),{once:!0,sync:!0}))})}get hasExtent(){return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):this.metadata.displaySource?.extent!=null}get _transformedExtent(){const{spatialReference:e,vertexSpace:t}=this,n=this;return Qr({get transform(){return n.transform},vertexSpace:t,spatialReference:e,untransformedBounds:this._untransformedBounds})}get _untransformedBounds(){const{vertexAttributes:{position:e},components:t}=this;return e.length===0||t?.length===0?ar(lr):Me(e)}get origin(){const e=gr(this.vertexSpace,this.spatialReference);if(e!=null)return e;const{center:t,zmin:n}=this._transformedExtent;return new O({x:t.x,y:t.y,z:n,spatialReference:this.spatialReference})}get extent(){return this.loaded||this.metadata?.displaySource?.extent==null?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this._checkIfLoaded("addComponent()")&&(this.components||(this.components=[]),this.components.push(z.from(e)),this.notifyChange("components"))}removeComponent(e){if(this._checkIfLoaded("removeComponent()")){if(this.components){const t=this.components.indexOf(e);if(t!==-1)return this.components.splice(t,1),void this.notifyChange("components")}U().error("removeComponent()",Pr)}}rotate(e,t,n,r){return hr(e,t,n,It),wn(this,It,r),this}offset(e,t,n){if(!this._checkIfLoaded("offset()"))return this;const{vertexSpace:r,vertexAttributes:o}=this,s=o?.position;if(!s)return this;if(re(r)){const[i,a,c]=r.origin;r.origin=Re(i+e,a+t,c+n)}else{for(let i=0;i<s.length;i+=3)s[i]+=e,s[i+1]+=t,s[i+2]+=n;this.vertexAttributesChanged()}return this}scale(e,t){return this._checkIfLoaded("scale()")?(Sn(this,e,t),this):this}centerAt(e,t){return this._checkIfLoaded("centerAt()")?(Zr(this,e,t),this):this}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(tn(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneAndModifyVertexAttributes(this.vertexAttributes.clone(),this.vertexSpace.clone(),{preserveMetadata:!0})}cloneAndModifyVertexAttributes(e,t,n){let r=null;if(this.components){const s=new Map,i=new Map;r=this.components.map(a=>a.cloneWithDeduplication(s,i))}const o={components:r,spatialReference:this.spatialReference,vertexAttributes:e,vertexSpace:t,transform:this.transform?.clone()??null,metadata:n?.preserveMetadata?this.metadata.clone():new I};return new L(o)}cloneShallow(){return new L({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const[{toBinaryGLTF:t}]=await Promise.all([import("./gltfexport-CDS4UZ25.js"),this.load(e)]);return ce(e),await t(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,this.components!=null)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}_checkIfLoaded(e){return!!this.loaded||(U().error(e,Wr),!1)}static createBox(e,t){if(!(e instanceof O))return U().error(".createBox()",oe),null;const n=new L(we(cn(),e,t));return t?.imageFace&&t.imageFace!=="all"?un(n,t.imageFace):n}static createSphere(e,t){return e instanceof O?new L(we(pn(t?.densificationFactor||0),e,t)):(U().error(".createSphere()",oe),null)}static createCylinder(e,t){return e instanceof O?new L(we(hn(t?.densificationFactor||0),e,t)):(U().error(".createCylinder()",oe),null)}static createPlane(e,t){if(!(e instanceof O))return U().error(".createPlane()",oe),null;const n=t?.facing??"up",r=fn(n,t?.size);return new L(we(mn(n),e,{...t,size:r}))}static createFromPolygon(e,t){if(!(e instanceof cr))return U().error(".createFromPolygon()",zr),null;const n=kr(e);return new L({vertexAttributes:new he({position:n.position}),components:[new z({faces:n.faces,shading:"flat",material:t?.material??null})],spatialReference:e.spatialReference,vertexSpace:new fe})}static async createFromGLTF(e,t,n){if(!(e instanceof O)){const o=new dt;throw U().error(".createfromGLTF()",o.message),o}const{loadGLTFMesh:r}=await He(import("./loadGLTFMesh-BCDk4II4.js"),n);return new L(await r(e,t,n))}static async createFromFiles(e,t,n){ur(U(),"`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'",{replacement:"SceneLayer.convertMesh",version:"4.29"});const r=o=>U().error(".createFromFiles()",o.message);if(!(e instanceof O)){const o=new dt;throw r(o),o}if(!n?.layer)throw new ee("invalid:no-layer","SceneLayer required for file to mesh conversion.");return n.layer.convertMesh(t,{location:e,...n})}static createWithExternalSource(e,t,n){const r=n?.extent??null,{spatialReference:o}=e,s=n?.transform?.clone()??new te,i=me(e,n),a=n?.unitConversionDisabled,c={source:t,extent:r,unitConversionDisabled:a},l=new I;return l.externalSources.push(c),new L({metadata:l,transform:s,vertexSpace:i,spatialReference:o})}static createIncomplete(e,t){const{spatialReference:n}=e,r=t?.transform?.clone()??new te,o=me(e,t),s=new L({transform:r,vertexSpace:o,spatialReference:n});return s.addResolvingPromise(Promise.reject(new ee("mesh-incomplete","Mesh resources are not complete"))),s}};u([f({type:[z],json:{write:!0}})],S.prototype,"components",void 0),u([f({nonNullable:!0,types:Ln,constructOnly:!0,json:{write:!0}})],S.prototype,"vertexSpace",void 0),u([f({type:te,json:{write:!0}})],S.prototype,"transform",void 0),u([f({constructOnly:!0})],S.prototype,"metadata",void 0),u([f()],S.prototype,"hasExtent",null),u([f()],S.prototype,"_transformedExtent",null),u([f()],S.prototype,"_untransformedBounds",null),u([f()],S.prototype,"origin",null),u([f({readOnly:!0,json:{read:!1}})],S.prototype,"extent",null),u([f({readOnly:!0,json:{read:!1,write:!0,default:!0}})],S.prototype,"hasZ",void 0),u([f({readOnly:!0,json:{read:!1,write:!0,default:!1}})],S.prototype,"hasM",void 0),u([f({type:he,nonNullable:!0,json:{write:!0}})],S.prototype,"vertexAttributes",void 0),S=L=u([P(Et)],S);const It=Be(),Fn=S;export{Fn as $,V as c,z as f,mt as m,G as w};
