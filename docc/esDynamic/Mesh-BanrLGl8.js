import{O as u,P as f,gr as Pt,ek as Dt,dO as Et,Q as W,bV as le,e8 as Oe,c2 as Te,bU as Ut,aO as Pe,c5 as De,D as ee,ad as be,s as te,ge as Wt,jb as I,bo as zt,lA as Ht,fo as ce,o5 as ue,o6 as Bt,bz as Vt,o7 as kt,b8 as Ee,a7 as $t,di as Gt,dl as Yt,aI as R,aJ as Ae,hg as Ue,dm as pe,a6 as L,R as Zt,o8 as Xt,n5 as qt,jU as Jt,my as Qt,jy as Kt,V as er,bi as tr,cd as Se,aH as rr,o9 as We,mu as nr,cf as he,cg as ze,oa as He,g4 as Be,ob as Ve,oc as ke,cc as or,ja as sr,e0 as ir,dk as ar,eP as lr,k9 as cr,S as ur,b5 as pr,od as hr,eB as fr}from"./main-DnRb_GMc.js";import{u as $e,y as mr,h as dr,b as Ge,N as re,c as Ye,d as fe,k as Ze,w as gr}from"./MeshTransform-DAyUco-w.js";import{c as yr}from"./imageUtils-DkKhtwbc.js";import{c as xr,l as me}from"./MeshVertexAttributes-Bqa60Kx8.js";import{a as Re,i as de}from"./MeshLocalVertexSpace-Dyhk4Q7T.js";import{a as ne,s as ge,g as Xe,u as qe}from"./meshVertexSpaceUtils-D4LH1_PJ.js";import{i as vr}from"./earcut-vjJGbWvt.js";import{a as wr,e as Tr,t as Je}from"./DoubleArray-B6drqOW6.js";import{t as Qe}from"./Indices-CElmjOv5.js";import{E as br,F as Ar,X as Sr}from"./plane-bo_sGHzF.js";import{e as Ke}from"./deduplicate-BZGFZ_kC.js";import{project as Rr,logProjectionError as A,loadProjectErrorMessage as D,projectToPCPF as et,projectNormalToPCPF as tt,projectTangentToPCPF as rt,projectFromPCPF as nt,projectNormalFromPCPF as ot,projectTangentFromPCPF as st}from"./projection-BjG5akMT.js";import{c as N,M as Me,X as Mr,N as it}from"./vertexSpaceConversion-CsGdpBgJ.js";import{e as at}from"./mat3f64-Dh9_zhFu.js";import{e as Ie}from"./mat4f64-Dn1WEGBx.js";import{I as Ir}from"./quat-0foEsiKJ.js";import{e as Fr,o as Cr}from"./quatf64-DxbQqBtW.js";import{a as lt}from"./spatialReferenceEllipsoidUtils-DqTpRRNP.js";import{u as jr}from"./computeTranslationToOriginAndRotation-PdUGpf6M.js";var V;const Fe=new WeakMap;let Lr=0,_=V=class extends le{constructor(e){super(e),this.wrap="repeat"}get url(){return this._get("url")||null}set url(e){this._set("url",e),e&&this._set("data",null)}get data(){return this._get("data")||null}set data(e){this._set("data",e),e&&this._set("url",null)}writeData(e,t,n,r){if(e instanceof HTMLImageElement){const o={type:"image-element",src:Oe(e.src,r),crossOrigin:e.crossOrigin};t[n]=o}else if(e instanceof HTMLCanvasElement){const o={type:"canvas-element",imageData:ct(e.getContext("2d").getImageData(0,0,e.width,e.height))};t[n]=o}else if(e instanceof HTMLVideoElement){const o={type:"video-element",src:Oe(e.src,r),autoplay:e.autoplay,loop:e.loop,muted:e.muted,crossOrigin:e.crossOrigin,preload:e.preload};t[n]=o}else if(e instanceof ImageData){const o={type:"image-data",imageData:ct(e)};t[n]=o}}readData(e){switch(e.type){case"image-element":{const t=new Image;return t.src=e.src,t.crossOrigin=e.crossOrigin,t}case"canvas-element":{const t=ut(e.imageData),n=document.createElement("canvas");return n.width=t.width,n.height=t.height,n.getContext("2d").putImageData(t,0,0),n}case"image-data":return ut(e.imageData);case"video-element":{const t=document.createElement("video");return t.src=e.src,t.crossOrigin=e.crossOrigin,t.autoplay=e.autoplay,t.loop=e.loop,t.muted=e.muted,t.preload=e.preload,t}default:return}}get transparent(){const e=this.data,t=this.url;if(e instanceof HTMLCanvasElement)return pt(e.getContext("2d").getImageData(0,0,e.width,e.height));if(e instanceof ImageData)return pt(e);if(t){const n=t.substr(t.length-4,4).toLowerCase(),r=t.substr(0,15).toLocaleLowerCase();if(n===".png"||r==="data:image/png;")return!0}return!1}set transparent(e){this._overrideIfSome("transparent",e)}get contentHash(){const e=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",t=(n="")=>`d:${n},t:${this.transparent},w:${e}`;return this.url!=null?t(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?t(this.data.src):(Fe.has(this.data)||Fe.set(this.data,++Lr),t(Fe.get(this.data))):t()}get memoryUsage(){let e=0;if(e+=this.url!=null?this.url.length:0,this.data!=null){const t=this.data;"data"in t?e+=t.data.byteLength:t instanceof HTMLImageElement?e+=t.naturalWidth*t.naturalHeight*3:t instanceof HTMLCanvasElement&&(e+=t.width*t.height*3)}return e}clone(){const e={url:this.url,data:this.data,wrap:this._cloneWrap()};return new V(e)}cloneWithDeduplication(e){const t=e.get(this);if(t)return t;const n=this.clone();return e.set(this,n),n}_cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}static from(e){return typeof e=="string"?new V({url:e}):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData||e instanceof HTMLVideoElement?new V({data:e}):Te(V,e)}};function ct(e){let t="";for(let n=0;n<e.data.length;n++)t+=String.fromCharCode(e.data[n]);return{data:btoa(t),width:e.width,height:e.height}}function ut(e){const t=atob(e.data),n=new Uint8ClampedArray(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return yr(n,e.width,e.height)}function pt(e){for(let t=3;t<e.data.length;t+=4)if(e.data[t]!==255)return!0;return!1}u([f({type:String,json:{write:Pt}})],_.prototype,"url",null),u([f({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),f()],_.prototype,"data",null),u([Dt("data")],_.prototype,"writeData",null),u([Et("data")],_.prototype,"readData",null),u([f({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],_.prototype,"transparent",null),u([f({json:{write:!0}})],_.prototype,"wrap",void 0),u([f({readOnly:!0})],_.prototype,"contentHash",null),_=V=u([W("esri.geometry.support.MeshTexture")],_);const k=_;let $=class extends Ut(le){constructor(e){super(e),this.offset=[0,0],this.rotation=0,this.scale=[1,1]}};u([f({type:[Number],nonNullable:!0,json:{write:!0}})],$.prototype,"offset",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0}})],$.prototype,"rotation",void 0),u([f({type:[Number],nonNullable:!0,json:{write:!0}})],$.prototype,"scale",void 0),$=u([W("esri.geometry.support.MeshTextureTransform")],$);const G=$;var Ce;let j=Ce=class extends le{constructor(e){super(e),this.color=null,this.colorTexture=null,this.colorTextureTransform=null,this.normalTexture=void 0,this.normalTextureTransform=void 0,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const n=e!=null?e.get(this):null;if(n)return n;const r=new Ce(this.clonePropertiesWithDeduplication(t));return e?.set(this,r),r}clonePropertiesWithDeduplication(e){return{color:this.color!=null?this.color.clone():null,colorTexture:this.colorTexture?.cloneWithDeduplication(e),normalTexture:this.normalTexture?.cloneWithDeduplication(e),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:this.colorTextureTransform?.clone(),normalTextureTransform:this.normalTextureTransform?.clone()}}get memoryUsage(){return this.getMemoryUsage()}getMemoryUsage(){let e=0;return e+=this.color!=null?16:0,this.colorTexture!=null&&(e+=this.colorTexture.memoryUsage),e+=this.colorTextureTransform!=null?20:0,this.normalTexture!=null&&(e+=this.normalTexture.memoryUsage),e+=this.normalTextureTransform!=null?20:0,e}};u([f({type:Pe,json:{write:!0}})],j.prototype,"color",void 0),u([f({type:k,json:{write:!0}})],j.prototype,"colorTexture",void 0),u([f({type:G,json:{write:!0}})],j.prototype,"colorTextureTransform",void 0),u([f({type:k,json:{write:!0}})],j.prototype,"normalTexture",void 0),u([f({type:G,json:{write:!0}})],j.prototype,"normalTextureTransform",void 0),u([f({nonNullable:!0,json:{write:!0}})],j.prototype,"alphaMode",void 0),u([f({nonNullable:!0,json:{write:!0}})],j.prototype,"alphaCutoff",void 0),u([f({nonNullable:!0,json:{write:!0}})],j.prototype,"doubleSided",void 0),j=Ce=u([W("esri.geometry.support.MeshMaterial")],j);const je=j;var Le;let F=Le=class extends je{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.emissiveTextureTransform=void 0,this.occlusionTexture=null,this.occlusionTextureTransform=void 0,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null,this.metallicRoughnessTextureTransform=void 0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const n=e!=null?e.get(this):null;if(n)return n;const r=new Le(this.clonePropertiesWithDeduplication(t));return e?.set(this,r),r}getMemoryUsage(){let e=super.getMemoryUsage();return e+=this.emissiveColor!=null?16:0,this.emissiveTexture!=null&&(e+=this.emissiveTexture.memoryUsage),e+=this.emissiveTextureTransform!=null?20:0,this.occlusionTexture!=null&&(e+=this.occlusionTexture.memoryUsage),e+=this.occlusionTextureTransform!=null?20:0,this.metallicRoughnessTexture!=null&&(e+=this.metallicRoughnessTexture.memoryUsage),e+=this.metallicRoughnessTextureTransform!=null?20:0,e}clonePropertiesWithDeduplication(e){return{...super.clonePropertiesWithDeduplication(e),emissiveColor:this.emissiveColor?.clone(),emissiveTexture:this.emissiveTexture?.cloneWithDeduplication(e),emissiveTextureTransform:this.emissiveTextureTransform?.clone(),occlusionTexture:this.occlusionTexture?.cloneWithDeduplication(e),occlusionTextureTransform:this.occlusionTextureTransform?.clone(),metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?.cloneWithDeduplication(e),metallicRoughnessTextureTransform:this.metallicRoughnessTextureTransform?.clone()}}};u([f({type:Pe,json:{write:!0}})],F.prototype,"emissiveColor",void 0),u([f({type:k,json:{write:!0}})],F.prototype,"emissiveTexture",void 0),u([f({type:G,json:{write:!0}})],F.prototype,"emissiveTextureTransform",void 0),u([f({type:k,json:{write:!0}})],F.prototype,"occlusionTexture",void 0),u([f({type:G,json:{write:!0}})],F.prototype,"occlusionTextureTransform",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],F.prototype,"metallic",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],F.prototype,"roughness",void 0),u([f({type:k,json:{write:!0}})],F.prototype,"metallicRoughnessTexture",void 0),u([f({type:G,json:{write:!0}})],F.prototype,"metallicRoughnessTextureTransform",void 0),F=Le=u([W("esri.geometry.support.MeshMaterialMetallicRoughness")],F);const ht=F;var oe;let O=oe=class extends le{static from(e){return Te(oe,e)}constructor(e){super(e),this.faces=null,this.material=null,this.name=void 0,this.shading="source",this.trustSourceNormals=!1}castFaces(e){return xr(e,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},ee.getLogger(this))}castMaterial(e){return Te(e&&typeof e=="object"&&("metallic"in e||"roughness"in e||"metallicRoughnessTexture"in e)?ht:je,e)}clone(){return new oe({faces:be(this.faces),shading:this.shading,material:be(this.material),trustSourceNormals:this.trustSourceNormals,name:this.name})}cloneWithDeduplication(e,t){const n={faces:be(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(e,t):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new oe(n)}get memoryUsage(){let e=0;return this.faces!=null&&(e+=this.faces.byteLength),this.material!=null&&(e+=this.material.memoryUsage),e}};u([f({json:{write:!0}})],O.prototype,"faces",void 0),u([De("faces")],O.prototype,"castFaces",null),u([f({type:je,json:{write:!0}})],O.prototype,"material",void 0),u([De("material")],O.prototype,"castMaterial",null),u([f()],O.prototype,"name",void 0),u([f({type:String,json:{write:!0}})],O.prototype,"shading",void 0),u([f({type:Boolean})],O.prototype,"trustSourceNormals",void 0),O=oe=u([W("esri.geometry.support.MeshComponent")],O);const z=O,Nr="Mesh must be loaded before applying operations",_r="Provided component is not part of the list of components",Or="Expected polygon to be a Polygon instance",se="Expected location to be a Point instance";let ft=class extends te{constructor(){super("invalid-input:location",se)}};function Pr(e,t,n){const r=Dr(mt,e,t,n)?Ar(mt):[0,0,1];return Math.abs(r[2])>Math.cos(Wt(80))?I.Z:Math.abs(r[1])>Math.abs(r[0])?I.Y:I.X}function Dr(e,t,n,r){const o=(i=>!Array.isArray(i[0]))(t)?(i,a)=>t[3*i+a]:(i,a)=>t[i][a],s=r?zt(r)/Ht(r):1;return Sr(e,(i,a)=>ce(i,o(a,0)*s,o(a,1)*s,o(a,2)),n)}const mt=br();function Er(e){const t=Wr(e.rings,e.hasZ,xe.CCW_IS_HOLE,e.spatialReference),n=new Array;let r=0,o=0;for(const a of t.polygons){const c=a.count,l=a.index,h=wr(t.position,3*l,3*c),m=a.holeIndices.map(d=>d-l),p=Qe(vr(h,m,3));n.push({position:h,faces:p}),r+=h.length,o+=p.length}const s=Ur(n,r,o),i=Array.isArray(s.position)?Ke(s.position,3,{originalIndices:s.faces}):Ke(s.position.buffer,6,{originalIndices:s.faces});return s.position=Tr(new Float64Array(i.buffer)),s.faces=i.indices,s}function Ur(e,t,n){if(e.length===1)return e[0];const r=Je(t),o=new Array(n);let s=0,i=0,a=0;for(const c of e){for(let l=0;l<c.position.length;l++)r[s++]=c.position[l];for(const l of c.faces)o[i++]=l+a;a=s/3}return{position:r,faces:Qe(o)}}function Wr(e,t,n,r){const o=e.length,s=new Array(o),i=new Array(o),a=new Array(o);let c=0;for(let g=0;g<o;++g)c+=e[g].length;let l=0,h=0,m=0;const p=Je(3*c);let d=0;for(let g=o-1;g>=0;g--){const y=e[g],T=n===xe.CCW_IS_HOLE&&zr(y,t,r);if(T&&o!==1)s[l++]=y;else{let M=y.length;for(let x=0;x<l;++x)M+=s[x].length;const b={index:d,pathLengths:new Array(l+1),count:M,holeIndices:new Array(l)};b.pathLengths[0]=y.length,y.length>0&&(a[m++]={index:d,count:y.length}),d=T?ye(y,y.length-1,-1,p,d,y.length,t):ye(y,0,1,p,d,y.length,t);for(let x=0;x<l;++x){const w=s[x];b.holeIndices[x]=d,b.pathLengths[x+1]=w.length,w.length>0&&(a[m++]={index:d,count:w.length}),d=ye(w,0,1,p,d,w.length,t)}l=0,b.count>0&&(i[h++]=b)}}for(let g=0;g<l;++g){const y=s[g];y.length>0&&(a[m++]={index:d,count:y.length}),d=ye(y,0,1,p,d,y.length,t)}return i.length=h,a.length=m,{position:p,polygons:i,outlines:a}}function ye(e,t,n,r,o,s,i){o*=3;for(let a=0;a<s;++a){const c=e[t];r[o++]=c[0],r[o++]=c[1],r[o++]=i?c[2]:0,t+=n}return o/3}function zr(e,t,n){if(!t)return!ue(e);const r=e.length-1;switch(Pr(e,r,n)){case I.X:return!ue(e,I.Y,I.Z);case I.Y:return!ue(e,I.X,I.Z);case I.Z:return!ue(e,I.X,I.Y)}}var xe;(function(e){e[e.NONE=0]="NONE",e[e.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(xe||(xe={}));function Hr([e,t,n,r,o,s],i,a,c){dt??=new Float64Array(24);const l=dt;return l[0]=e,l[1]=t,l[2]=n,l[3]=e,l[4]=o,l[5]=n,l[6]=r,l[7]=o,l[8]=n,l[9]=r,l[10]=t,l[11]=n,l[12]=e,l[13]=t,l[14]=s,l[15]=e,l[16]=o,l[17]=s,l[18]=r,l[19]=o,l[20]=s,l[21]=r,l[22]=t,l[23]=s,Rr({positions:l,transform:i,vertexSpace:a,inSpatialReference:c,outSpatialReference:c,outPositions:l}),yt(l,c)}let dt=null;function gt(e){if(e.length===0)return Bt;const t=Vt([Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY]);return kt(t,e),t}function yt(e,t){const[n,r,o,s,i,a]=gt(e);return new Ee({xmin:n,ymin:r,zmin:o,xmax:s,ymax:i,zmax:a,spatialReference:t})}function Ne(e,t,n,r){if(r!==void 0){$t(e(),"option: geographic",{replacement:"Use mesh `vertexSpace` and spatial reference to control how operations are performed instead.",version:"4.30",warnOnce:!0});const o=t.type==="local";if(!ne(t)||r===o)return n.isGeographic||n.isWebMercator&&r;e().warnOnce(`Specifying the 'geographic' parameter (${r}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}switch(t.type){case"georeferenced":return n.isGeographic;case"local":return n.isGeographic||n.isWebMercator}}const ie=()=>ee.getLogger("esri.geometry.support.meshUtils.centerAt");function Br(e,t,n){if(!e.vertexAttributes?.position)return;const{vertexSpace:r}=e,o=n?.origin??e.anchor,s=Ne(ie,r,o.spatialReference,n?.geographic);ne(r)?Vr(e,t,o):s?kr(e,t,o):$r(e,t,o)}function Vr(e,t,n){const{vertexSpace:r}=e;if(!ne(r))return;const o=vt,s=xt;if(!N(t,s,e.spatialReference))return void A(ie(),t.spatialReference,e.spatialReference,D);if(!N(n,o,e.spatialReference)){const a=e.origin;return o[0]=a.x,o[1]=a.y,o[2]=a.z,void A(ie(),n.spatialReference,e.spatialReference,D)}const i=Gt(Yr,s,o);r.origin=Yt(R(),r.origin,i)}function kr(e,t,n){const r=Ae(n.x,n.y,n.z??0),o=Me(e,new Re({origin:r}));if(!o)return;const s=Ae(t.x,t.y,t.z??0),i=Me({vertexAttributes:o,spatialReference:e.spatialReference,vertexSpace:new Re({origin:s})},new de);if(!i)return;const{position:a,normal:c,tangent:l}=i;e.vertexAttributes.position=a,e.vertexAttributes.normal=c,e.vertexAttributes.tangent=l,e.vertexAttributesChanged()}function $r(e,t,n){const r=vt,o=xt;if(N(t,o,e.spatialReference)){if(!N(n,r,e.spatialReference)){const s=e.origin;return r[0]=s.x,r[1]=s.y,r[2]=s.z,void A(ie(),n.spatialReference,e.spatialReference,D)}Gr(e.vertexAttributes.position,o,r),e.vertexAttributesChanged()}else A(ie(),t.spatialReference,e.spatialReference,D)}function Gr(e,t,n){if(e)for(let r=0;r<e.length;r+=3)for(let o=0;o<3;o++)e[r+o]+=t[o]-n[o]}const xt=R(),vt=R(),Yr=R();async function Zr(e,t,n){const{source:r}=t,{loadGLTFMesh:o}=await Ue(import("./loadGLTFMesh-byPZYZXU.js"),n),s=await qr(r,n);pe(n);const i=o(new L({x:0,y:0,z:0,spatialReference:e.spatialReference}),s.url,{resolveFile:Xr(s),signal:n?.signal,expectedType:s.type});i.then(()=>s.dispose(),()=>s.dispose());const{vertexAttributes:a,components:c}=await i;e.vertexAttributes=a,e.components=c}function Xr(e){const t=Zt(e.url);return n=>{const r=Xt(n,t,t),o=r?r.replace(/^ *\.\//,""):null;return(o?e.files.get(o):null)??n}}async function qr(e,t){if(Array.isArray(e)){if(!e.length)throw new te("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?Qr(e):Kr(e,t)}return wt(e)}async function Jr(e,t){const{parts:n,assetMimeType:r,assetName:o}=e;if(n.length===1)return new K(n[0].partUrl);const s=await e.toBlob(t);return pe(t),K.fromBlob(s,St(o,r))}function wt(e){return K.fromBlob(e,St(e.name,e.type))}function Qr(e){return At(e.map(t=>({name:t.name,mimeType:t.type,source:wt(t)})))}async function Kr(e,t){const n=await qt(e.map(async r=>{const o=await Jr(r);return pe(t),{name:r.assetName,mimeType:r.assetMimeType,source:o}}));if(Jt(t))throw n.forEach(r=>r.source.dispose()),Qt();return At(n)}const Tt=/^model\/gltf\+json$/,bt=/^model\/gltf-binary$/,_e=/\.gltf$/i,en=/\.glb$/i;function At(e){const t=new Map;let n,r=null;for(const{name:o,mimeType:s,source:i}of e)r===null&&(Tt.test(s)||_e.test(o)?(r=i.url,n="gltf"):(bt.test(s)||en.test(o))&&(r=i.url,n="glb")),t.set(o,i.url),i.files.forEach((a,c)=>t.set(c,a));if(r==null)throw new te("mesh-load-external:missing-files","Missing files to load external mesh source");return new K(r,()=>e.forEach(({source:o})=>o.dispose()),t,n)}class K{constructor(t,n=()=>{},r=new Map,o){this.url=t,this.dispose=n,this.files=r,this.type=o}static fromBlob(t,n){const r=URL.createObjectURL(t);return new K(r,()=>URL.revokeObjectURL(r),void 0,n)}}function St(e,t){return Tt.test(t)||_e.test(e)?"gltf":bt.test(t)||_e.test(e)?"glb":void 0}let E=class extends Kt{constructor(e){super(e),this.externalSources=new er,this._explicitDisplaySource=null,this.addHandles(tr(()=>this.externalSources,"after-remove",({item:t})=>{t===this._explicitDisplaySource&&(this._explicitDisplaySource=null)},{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(e!=null&&!$e(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every(t=>!mr(t,e))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter(t=>dr(t,e))}get _implicitDisplaySource(){return this.externalSources.find($e)}};u([f()],E.prototype,"externalSources",void 0),u([f()],E.prototype,"displaySource",null),u([f()],E.prototype,"_implicitDisplaySource",null),u([f()],E.prototype,"_explicitDisplaySource",void 0),E=u([W("esri.geometry.support.meshUtils.Metadata")],E);function tn(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=pn,r=4*e.length,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(2*e.length*3);let c=0,l=0,h=0,m=0;for(let p=0;p<e.length;p++){const d=e[p],g=c/3;for(const T of t)a[m++]=g+T;const y=d.corners;for(let T=0;T<4;T++){const M=y[T];let b=0;i[h++]=.25*n[T][0]+d.uvOrigin[0],i[h++]=d.uvOrigin[1]-.25*n[T][1];for(let x=0;x<3;x++)d.axis[x]!==0?(o[c++]=.5*d.axis[x],s[l++]=d.axis[x]):(o[c++]=.5*M[b++],s[l++]=0)}}return{position:o,normal:s,uv:i,faces:a}}function rn(e,t){const n=e.components[0],r=n.faces,o=hn[t],s=6*o,i=new Array(6),a=new Array(r.length-6);let c=0,l=0;for(let h=0;h<r.length;h++)h>=s&&h<s+6?i[c++]=r[h]:a[l++]=r[h];if(e.vertexAttributes.uv!=null){const h=new Float32Array(e.vertexAttributes.uv),m=4*o*2,p=[0,1,1,1,1,0,0,0];for(let d=0;d<p.length;d++)h[m+d]=p[d];e.vertexAttributes.uv=h}return e.components=[new z({faces:i,material:n.material}),new z({faces:a})],e}function nn(e=0){const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*((t-1)*n*2));let c=0,l=0,h=0,m=0;for(let p=0;p<=t;p++){const d=p/t*Math.PI+.5*Math.PI,g=Math.cos(d),y=Math.sin(d);v[2]=y;const T=p===0||p===t,M=T?n-1:n;for(let b=0;b<=M;b++){const x=b/M*2*Math.PI;v[0]=-Math.sin(x)*g,v[1]=Math.cos(x)*g;for(let w=0;w<3;w++)o[c]=.5*v[w],s[c]=v[w],++c;i[l++]=(b+(T?.5:0))/n,i[l++]=p/t,p!==0&&b!==n&&(p!==t&&(a[h++]=m,a[h++]=m+1,a[h++]=m-n),p!==1&&(a[h++]=m,a[h++]=m-n,a[h++]=m-n-1)),m++}}return{position:o,normal:s,uv:i,faces:a}}function on(e=0){const t=Math.round(16*2**e),n=4*(t+1)+2*t,r=new Float64Array(3*n),o=new Float32Array(3*n),s=new Float32Array(2*n),i=new Uint32Array(3*(4*t));let a=0,c=0,l=0,h=0,m=0;for(let p=0;p<=5;p++){const d=p===0||p===5,g=p<=1||p>=4,y=p===2||p===4,T=d?t-1:t;for(let M=0;M<=T;M++){const b=M/T*2*Math.PI,x=d?0:.5;v[0]=x*Math.sin(b),v[1]=x*-Math.cos(b),v[2]=p<=2?.5:-.5;for(let w=0;w<3;w++)r[a++]=v[w],o[c++]=g?w===2?p<=1?1:-1:0:w===2?0:v[w]/x;s[l++]=(M+(d?.5:0))/t,s[l++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,y||p===0||M===t||(p!==5&&(i[h++]=m,i[h++]=m+1,i[h++]=m-t),p!==1&&(i[h++]=m,i[h++]=m-t,i[h++]=m-t-1)),m++}}return{position:r,normal:o,uv:s,faces:i}}function sn(e,t){const n=typeof t=="number"?t:t!=null?t.width:1,r=typeof t=="number"?t:t!=null?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function an(e){const t=ae.facingAxisOrderSwap[e],n=ae.position,r=ae.normal,o=new Float64Array(n.length),s=new Float32Array(r.length);let i=0;for(let a=0;a<4;a++){const c=i;for(let l=0;l<3;l++){const h=t[l],m=Math.abs(h)-1,p=h>=0?1:-1;o[i]=n[c+m]*p,s[i]=r[c+m]*p,i++}}return{position:o,normal:s,uv:new Float32Array(ae.uv),faces:new Uint32Array(ae.faces),isPlane:!0}}const Y=1,Z=2,X=3,ae={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[X,Y,Z],west:[-X,-Y,Z],north:[-Y,X,Z],south:[Y,-X,Z],up:[Y,Z,X],down:[Y,-Z,-X]}};function ve(e,t,n){e.isPlane||ln(e),un(e,cn(n?.size,n?.unit,t.spatialReference));const r=ge(t,n),o=t.spatialReference.isGeographic?ge(t):r,s=Me({vertexAttributes:e,vertexSpace:o,spatialReference:t.spatialReference},r,{allowBufferReuse:!0});return{vertexAttributes:new me({...s,uv:e.uv}),vertexSpace:r,components:[new z({faces:e.faces,material:n?.material||null})],spatialReference:t.spatialReference}}function ln(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}function cn(e,t,n){const r=Mr(t,n);if(e==null&&r===1)return null;if(e==null)return[r,r,r];if(typeof e=="number"){const o=e*r;return[o,o,o]}return[e.width!=null?e.width*r:r,e.depth!=null?e.depth*r:r,e.height!=null?e.height*r:r]}function un(e,t){if(t!=null){U[0]=t[0],U[4]=t[1],U[8]=t[2];for(let n=0;n<e.position.length;n+=3){for(let r=0;r<3;r++)v[r]=e.position[n+r];Se(v,v,U);for(let r=0;r<3;r++)e.position[n+r]=v[r]}if(t[0]!==t[1]||t[1]!==t[2]){U[0]=1/t[0],U[4]=1/t[1],U[8]=1/t[2];for(let n=0;n<e.normal.length;n+=3){for(let r=0;r<3;r++)v[r]=e.normal[n+r];Se(v,v,U),rr(v,v);for(let r=0;r<3;r++)e.normal[n+r]=v[r]}}}}const pn={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},hn={south:0,east:1,north:2,west:3,up:4,down:5},v=R(),U=at(),H=()=>ee.getLogger("esri.geometry.support.meshUtils.rotate");function fn(e,t,n){if(!e.vertexAttributes?.position||t[3]===0)return;const{spatialReference:r,vertexSpace:o}=e,s=n?.origin??e.anchor,i=n?.geographic,a=Ne(H,o,r,i);Xe(e)?mn(e,t,s):a?dn(e,t,s):gn(e,t,s)}function mn(e,t,n){e.transform??=new re;const{vertexSpace:r,transform:o,spatialReference:s}=e,[i,a,c]=r.origin,l=new L({x:i,y:a,z:c,spatialReference:s}),h=J;if(l.equals(n))ce(h,0,0,0);else if(!it(h,n,e))return void A(H(),n.spatialReference,s,D);Ir(Ct,fe(t),Ye(t));const m=We(Rt,Ct,he,nr,h),{localMatrix:p}=o,d=ze(Rt,m,p);o.scale=He(R(),d),Be(d,d,Ve(J,o.scale));const g=o.rotationAxis;o.rotation=Ze(d),o.rotationAngle===0&&(o.rotationAxis=g),o.translation=ke(R(),d)}function dn(e,t,n){const r=e.spatialReference,o=lt(r),s=Ft;if(!N(n,s,o)&&(A(H(),n.spatialReference,o,"Falling back to mesh origin"),!N(e.origin,s,o)))return void A(H(),e.origin.spatialReference,o);const i=e.vertexAttributes.position,a=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,l=new Float64Array(i.length),h=a!=null?new Float32Array(a.length):null,m=c!=null?new Float32Array(c.length):null;jr(o,s,we,o),or(It,we);const p=Mt;Se(fe(Mt),fe(t),It),p[3]=t[3],et(i,r,l)&&(a==null||h==null||tt(a,i,l,r,h))&&(c==null||m==null||rt(c,i,l,r,m))?(q(l,p,3,s),nt(l,i,r)&&(a==null||h==null||(q(h,p,3),ot(h,i,l,r,a)))&&(c==null||m==null||(q(m,p,4),st(m,i,l,r,c)))?e.vertexAttributesChanged():A(H(),o,r)):A(H(),r,o)}function gn(e,t,n){const r=Ft;if(!N(n,r,e.spatialReference)){const o=e.origin;return r[0]=o.x,r[1]=o.y,r[2]=o.z,void A(H(),n.spatialReference,e.spatialReference,D)}q(e.vertexAttributes.position,t,3,r),q(e.vertexAttributes.normal,t,3),q(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}function q(e,t,n,r=he){if(e!=null){sr(we,Ye(t),fe(t));for(let o=0;o<e.length;o+=n){for(let s=0;s<3;s++)J[s]=e[o+s]-r[s];ir(J,J,we);for(let s=0;s<3;s++)e[o+s]=J[s]+r[s]}}}const J=R(),Rt=Ie(),Mt=Ge(),we=Ie(),It=at(),Ft=R(),Ct=Fr(),B=()=>ee.getLogger("esri.geometry.support.meshUtils.scale");function yn(e,t,n){if(!e.vertexAttributes?.position)return;const{vertexSpace:r,spatialReference:o}=e,s=n?.origin??e.anchor,i=n?.geographic,a=Ne(B,r,o,i);Xe(e)?xn(e,t,s):a?vn(e,t,s):wn(e,t,s)}function xn(e,t,n){e.transform??=new re;const{vertexSpace:r,transform:o,spatialReference:s}=e,[i,a,c]=r.origin,l=new L({x:i,y:a,z:c,spatialReference:s}),h=Q;if(l.equals(n))ce(h,0,0,0);else if(!it(h,n,e))return void A(B(),n.spatialReference,s,D);const m=ce(Tn,t,t,t),p=We(Lt,Cr,he,m,h),{localMatrix:d}=o,g=ze(Lt,p,d);o.scale=He(R(),g),Be(g,g,Ve(Q,o.scale));const y=o.rotationAxis;o.rotation=Ze(g),o.rotationAngle===0&&(o.rotationAxis=y),o.translation=ke(R(),g)}function vn(e,t,n){const r=e.spatialReference,o=lt(r),s=Nt;if(!N(n,s,o)&&(A(B(),n.spatialReference,o,"Falling back to mesh origin"),!N(e.origin,s,o)))return void A(B(),e.origin.spatialReference,o);const i=e.vertexAttributes.position,a=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,l=new Float64Array(i.length),h=a!=null?new Float32Array(a.length):null,m=c!=null?new Float32Array(c.length):null;et(i,r,l)&&(a==null||h==null||tt(a,i,l,r,h))&&(c==null||m==null||rt(c,i,l,r,m))?(jt(l,t,s),nt(l,i,r)&&(a==null||h==null||ot(h,i,l,r,a))&&(c==null||m==null||st(m,i,l,r,c))?e.vertexAttributesChanged():A(B(),o,r)):A(B(),r,o)}function wn(e,t,n){const r=Nt;if(!N(n,r,e.spatialReference)){const o=e.origin;return r[0]=o.x,r[1]=o.y,r[2]=o.z,void A(B(),n.spatialReference,e.spatialReference,D)}jt(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}function jt(e,t,n=he){if(e)for(let r=0;r<e.length;r+=3){for(let o=0;o<3;o++)Q[o]=e[r+o]-n[o];ar(Q,Q,t);for(let o=0;o<3;o++)e[r+o]=Q[o]+n[o]}}const Q=R(),Tn=R(),Lt=Ie(),Nt=R();var C;const _t="esri.geometry.Mesh";function P(){return ee.getLogger(_t)}const bn={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:de,local:Re}};let S=C=class extends lr.LoadableMixin(cr(fr)){constructor(e){super(e),this.components=null,this.vertexSpace=new de,this.transform=null,this.metadata=new E,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new me,this.type="mesh"}initialize(){(this.metadata.externalSources.length===0||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.addHandles(ur(()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map(e=>e.clone())}),()=>this._clearSources(),{once:!0,sync:!0}))})}get hasExtent(){return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):this.metadata.displaySource?.extent!=null}get _transformedExtent(){const{components:e,spatialReference:t,vertexAttributes:n,vertexSpace:r}=this,o=n.position;if(o.length===0||e&&e.length===0)return new Ee({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t});if(ne(r)){const{_untransformedBounds:s,transform:i}=this;return Hr(s,i,r,t)}return yt(o,t)}get _untransformedBounds(){return gt(this.vertexAttributes.position)}get anchor(){const e=qe(this.vertexSpace,this.spatialReference);if(e!=null)return e;const{center:t,zmin:n}=this._transformedExtent;return new L({x:t.x,y:t.y,z:n,spatialReference:this.spatialReference})}get origin(){return qe(this.vertexSpace,this.spatialReference)??this._transformedExtent.center}get extent(){return this.loaded||this.metadata?.displaySource?.extent==null?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this._checkIfLoaded("addComponent()")&&(this.components||(this.components=[]),this.components.push(z.from(e)),this.notifyChange("components"))}removeComponent(e){if(this._checkIfLoaded("removeComponent()")){if(this.components){const t=this.components.indexOf(e);if(t!==-1)return this.components.splice(t,1),void this.notifyChange("components")}P().error("removeComponent()",_r)}}rotate(e,t,n,r){return gr(e,t,n,Ot),fn(this,Ot,r),this}offset(e,t,n){if(!this._checkIfLoaded("offset()"))return this;const{vertexSpace:r,vertexAttributes:o}=this,s=o?.position;if(!s)return this;if(ne(r)){const[i,a,c]=r.origin;r.origin=Ae(i+e,a+t,c+n)}else{for(let i=0;i<s.length;i+=3)s[i]+=e,s[i+1]+=t,s[i+2]+=n;this.vertexAttributesChanged()}return this}scale(e,t){return this._checkIfLoaded("scale()")?(yn(this,e,t),this):this}centerAt(e,t){return this._checkIfLoaded("centerAt()")?(Br(this,e,t),this):this}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(Zr(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneAndModifyVertexAttributes(this.vertexAttributes.clone(),this.vertexSpace.clone())}cloneAndModifyVertexAttributes(e,t){let n=null;if(this.components){const o=new Map,s=new Map;n=this.components.map(i=>i.cloneWithDeduplication(o,s))}const r={components:n,spatialReference:this.spatialReference,vertexAttributes:e,vertexSpace:t,transform:this.transform?.clone()??null,metadata:this.metadata.clone()};return new C(r)}cloneShallow(){return new C({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const[{toBinaryGLTF:t}]=await Promise.all([import("./gltfexport-3QdycjOi.js"),this.load(e)]);return pe(e),await t(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,this.components!=null)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}_checkIfLoaded(e){return!!this.loaded||(P().error(e,Nr),!1)}static createBox(e,t){if(!(e instanceof L))return P().error(".createBox()",se),null;const n=new C(ve(tn(),e,t));return t?.imageFace&&t.imageFace!=="all"?rn(n,t.imageFace):n}static createSphere(e,t){return e instanceof L?new C(ve(nn(t?.densificationFactor||0),e,t)):(P().error(".createSphere()",se),null)}static createCylinder(e,t){return e instanceof L?new C(ve(on(t?.densificationFactor||0),e,t)):(P().error(".createCylinder()",se),null)}static createPlane(e,t){if(!(e instanceof L))return P().error(".createPlane()",se),null;const n=t?.facing??"up",r=sn(n,t?.size);return new C(ve(an(n),e,{...t,size:r}))}static createFromPolygon(e,t){if(!(e instanceof pr))return P().error(".createFromPolygon()",Or),null;const n=Er(e);return new C({vertexAttributes:new me({position:n.position}),components:[new z({faces:n.faces,shading:"flat",material:t?.material??null})],spatialReference:e.spatialReference,vertexSpace:new de})}static async createFromGLTF(e,t,n){if(!(e instanceof L)){const o=new ft;throw P().error(".createfromGLTF()",o.message),o}const{loadGLTFMesh:r}=await Ue(import("./loadGLTFMesh-byPZYZXU.js"),n);return new C(await r(e,t,n))}static async createFromFiles(e,t,n){hr(P(),"`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'",{replacement:"SceneLayer.convertMesh",version:"4.29"});const r=o=>P().error(".createFromFiles()",o.message);if(!(e instanceof L)){const o=new ft;throw r(o),o}if(!n?.layer)throw new te("invalid:no-layer","SceneLayer required for file to mesh conversion.");return n.layer.convertMesh(t,{location:e,...n})}static createWithExternalSource(e,t,n){const r=n?.extent??null,{spatialReference:o}=e,s=n?.transform?.clone()??new re,i=ge(e,n),a={source:t,extent:r},c=new E;return c.externalSources.push(a),new C({metadata:c,transform:s,vertexSpace:i,spatialReference:o})}static createIncomplete(e,t){const{spatialReference:n}=e,r=t?.transform?.clone()??new re,o=ge(e,t),s=new C({transform:r,vertexSpace:o,spatialReference:n});return s.addResolvingPromise(Promise.reject(new te("mesh-incomplete","Mesh resources are not complete"))),s}};u([f({type:[z],json:{write:!0}})],S.prototype,"components",void 0),u([f({nonNullable:!0,types:bn,constructOnly:!0,json:{write:!0}})],S.prototype,"vertexSpace",void 0),u([f({type:re,json:{write:!0}})],S.prototype,"transform",void 0),u([f({constructOnly:!0})],S.prototype,"metadata",void 0),u([f()],S.prototype,"hasExtent",null),u([f()],S.prototype,"_transformedExtent",null),u([f()],S.prototype,"_untransformedBounds",null),u([f()],S.prototype,"anchor",null),u([f()],S.prototype,"origin",null),u([f({readOnly:!0,json:{read:!1}})],S.prototype,"extent",null),u([f({readOnly:!0,json:{read:!1,write:!0,default:!0}})],S.prototype,"hasZ",void 0),u([f({readOnly:!0,json:{read:!1,write:!0,default:!1}})],S.prototype,"hasM",void 0),u([f({type:me,nonNullable:!0,json:{write:!0}})],S.prototype,"vertexAttributes",void 0),S=C=u([W(_t)],S);const Ot=Ge(),An=S;export{An as $,G as c,z as h,ht as m,k as w};