import{B as r,D as o,fH as L,G as H,H as U,N as y,J as T,dQ as j,bs as x,aZ as S,aM as N,bI as b,n as E,v as f}from"./main-BnINupoD.js";import{c as I}from"./imageUtils-ZdAnWR8g.js";import{r as R,n as O}from"./meshProperties-C4iW0Ukm.js";var h;const v=new WeakMap;let _=0,l=h=class extends T{constructor(e){super(e),this.wrap="repeat"}get url(){return this._get("url")||null}set url(e){this._set("url",e),e&&this._set("data",null)}get data(){return this._get("data")||null}set data(e){this._set("data",e),e&&this._set("url",null)}writeData(e,t,s,i){if(e instanceof HTMLImageElement){const c={type:"image-element",src:j(e.src,i),crossOrigin:e.crossOrigin};t[s]=c}else if(e instanceof HTMLCanvasElement){const c={type:"canvas-element",imageData:$(e.getContext("2d").getImageData(0,0,e.width,e.height))};t[s]=c}else if(e instanceof HTMLVideoElement){const c={type:"video-element",src:j(e.src,i),autoplay:e.autoplay,loop:e.loop,muted:e.muted,crossOrigin:e.crossOrigin,preload:e.preload};t[s]=c}else if(e instanceof ImageData){const c={type:"image-data",imageData:$(e)};t[s]=c}}readData(e){switch(e.type){case"image-element":{const t=new Image;return t.src=e.src,t.crossOrigin=e.crossOrigin,t}case"canvas-element":{const t=C(e.imageData),s=document.createElement("canvas");return s.width=t.width,s.height=t.height,s.getContext("2d").putImageData(t,0,0),s}case"image-data":return C(e.imageData);case"video-element":{const t=document.createElement("video");return t.src=e.src,t.crossOrigin=e.crossOrigin,t.autoplay=e.autoplay,t.loop=e.loop,t.muted=e.muted,t.preload=e.preload,t}default:return}}get transparent(){const{data:e,url:t}=this;return e instanceof HTMLCanvasElement?W(e.getContext("2d").getImageData(0,0,e.width,e.height)):e instanceof ImageData?W(e):!(!t?.toLowerCase().endsWith(".png")&&!t?.toLocaleLowerCase().startsWith("data:image/png;"))}set transparent(e){this._overrideIfSome("transparent",e)}get contentHash(){const e=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",t=(s="")=>`d:${s},t:${this.transparent},w:${e}`;return this.url!=null?t(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?t(this.data.src):(v.has(this.data)||v.set(this.data,++_),t(v.get(this.data))):t()}get memoryUsage(){let e=0;if(e+=this.url!=null?this.url.length:0,this.data!=null){const t=this.data;"data"in t?e+=t.data.byteLength:t instanceof HTMLImageElement?e+=t.naturalWidth*t.naturalHeight*3:t instanceof HTMLCanvasElement&&(e+=t.width*t.height*3)}return e}clone(){const e={url:this.url,data:this.data,wrap:this._cloneWrap()};return new h(e)}cloneWithDeduplication(e){const t=e.get(this);if(t)return t;const s=this.clone();return e.set(this,s),s}_cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}static from(e){return typeof e=="string"?new h({url:e}):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData||e instanceof HTMLVideoElement?new h({data:e}):x(h,e)}};function $(e){let t="";for(let s=0;s<e.data.length;s++)t+=String.fromCharCode(e.data[s]);return{data:btoa(t),width:e.width,height:e.height}}function C(e){const t=atob(e.data),s=new Uint8ClampedArray(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return I(s,e.width,e.height)}function W(e){for(let t=3;t<e.data.length;t+=4)if(e.data[t]!==255)return!0;return!1}r([o({type:String,json:{write:L}})],l.prototype,"url",null),r([o({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),o()],l.prototype,"data",null),r([H("data")],l.prototype,"writeData",null),r([U("data")],l.prototype,"readData",null),r([o({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],l.prototype,"transparent",null),r([o({json:{write:!0}})],l.prototype,"wrap",void 0),r([o({readOnly:!0})],l.prototype,"contentHash",null),l=h=r([y("esri.geometry.support.MeshTexture")],l);const d=l;let p=class extends S.ClonableMixin(T){constructor(e){super(e),this.offset=[0,0],this.rotation=0,this.scale=[1,1]}};r([o({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"offset",void 0),r([o({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"rotation",void 0),r([o({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"scale",void 0),p=r([y("esri.geometry.support.MeshTextureTransform")],p);const g=p;var w;let a=w=class extends T{constructor(e){super(e),this.color=null,this.colorTexture=null,this.colorTextureTransform=null,this.normalTexture=void 0,this.normalTextureTransform=void 0,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const s=e!=null?e.get(this):null;if(s)return s;const i=new w(this.clonePropertiesWithDeduplication(t));return e?.set(this,i),i}clonePropertiesWithDeduplication(e){return{color:this.color!=null?this.color.clone():null,colorTexture:this.colorTexture?.cloneWithDeduplication(e),normalTexture:this.normalTexture?.cloneWithDeduplication(e),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:this.colorTextureTransform?.clone(),normalTextureTransform:this.normalTextureTransform?.clone()}}get memoryUsage(){return this.getMemoryUsage()}getMemoryUsage(){let e=0;return e+=this.color!=null?16:0,this.colorTexture!=null&&(e+=this.colorTexture.memoryUsage),e+=this.colorTextureTransform!=null?20:0,this.normalTexture!=null&&(e+=this.normalTexture.memoryUsage),e+=this.normalTextureTransform!=null?20:0,e}};r([o({type:N,json:{write:!0}})],a.prototype,"color",void 0),r([o({type:d,json:{write:!0}})],a.prototype,"colorTexture",void 0),r([o({type:g,json:{write:!0}})],a.prototype,"colorTextureTransform",void 0),r([o({type:d,json:{write:!0}})],a.prototype,"normalTexture",void 0),r([o({type:g,json:{write:!0}})],a.prototype,"normalTextureTransform",void 0),r([o({nonNullable:!0,json:{write:!0}})],a.prototype,"alphaMode",void 0),r([o({nonNullable:!0,json:{write:!0}})],a.prototype,"alphaCutoff",void 0),r([o({nonNullable:!0,json:{write:!0}})],a.prototype,"doubleSided",void 0),a=w=r([y("esri.geometry.support.MeshMaterial")],a);const D=a;var M;let n=M=class extends D{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.emissiveTextureTransform=void 0,this.occlusionTexture=null,this.occlusionTextureTransform=void 0,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null,this.metallicRoughnessTextureTransform=void 0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const s=e!=null?e.get(this):null;if(s)return s;const i=new M(this.clonePropertiesWithDeduplication(t));return e?.set(this,i),i}getMemoryUsage(){let e=super.getMemoryUsage();return e+=this.emissiveColor!=null?16:0,this.emissiveTexture!=null&&(e+=this.emissiveTexture.memoryUsage),e+=this.emissiveTextureTransform!=null?20:0,this.occlusionTexture!=null&&(e+=this.occlusionTexture.memoryUsage),e+=this.occlusionTextureTransform!=null?20:0,this.metallicRoughnessTexture!=null&&(e+=this.metallicRoughnessTexture.memoryUsage),e+=this.metallicRoughnessTextureTransform!=null?20:0,e}clonePropertiesWithDeduplication(e){return{...super.clonePropertiesWithDeduplication(e),emissiveColor:this.emissiveColor?.clone(),emissiveTexture:this.emissiveTexture?.cloneWithDeduplication(e),emissiveTextureTransform:this.emissiveTextureTransform?.clone(),occlusionTexture:this.occlusionTexture?.cloneWithDeduplication(e),occlusionTextureTransform:this.occlusionTextureTransform?.clone(),metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?.cloneWithDeduplication(e),metallicRoughnessTextureTransform:this.metallicRoughnessTextureTransform?.clone()}}};r([o({type:N,json:{write:!0}})],n.prototype,"emissiveColor",void 0),r([o({type:d,json:{write:!0}})],n.prototype,"emissiveTexture",void 0),r([o({type:g,json:{write:!0}})],n.prototype,"emissiveTextureTransform",void 0),r([o({type:d,json:{write:!0}})],n.prototype,"occlusionTexture",void 0),r([o({type:g,json:{write:!0}})],n.prototype,"occlusionTextureTransform",void 0),r([o({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],n.prototype,"metallic",void 0),r([o({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],n.prototype,"roughness",void 0),r([o({type:d,json:{write:!0}})],n.prototype,"metallicRoughnessTexture",void 0),r([o({type:g,json:{write:!0}})],n.prototype,"metallicRoughnessTextureTransform",void 0),n=M=r([y("esri.geometry.support.MeshMaterialMetallicRoughness")],n);const P=n;var m;let u=m=class extends T{static from(e){return x(m,e)}constructor(e){super(e),this.faces=null,this.material=null,this.name=void 0,this.shading="source",this.trustSourceNormals=!1}castFaces(e){return O(e,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},E.getLogger(this))}castMaterial(e){return x(e&&typeof e=="object"&&("metallic"in e||"roughness"in e||"metallicRoughnessTexture"in e)?P:D,e)}clone(){return new m({faces:f(this.faces),shading:this.shading,material:f(this.material),trustSourceNormals:this.trustSourceNormals,name:this.name})}cloneWithDeduplication(e,t){const s={faces:f(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(e,t):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new m(s)}get memoryUsage(){let e=0;return this.faces!=null&&(e+=this.faces.byteLength),this.material!=null&&(e+=this.material.memoryUsage),e}};r([o({json:{write:R}})],u.prototype,"faces",void 0),r([b("faces")],u.prototype,"castFaces",null),r([o({type:D,json:{write:!0}})],u.prototype,"material",void 0),r([b("material")],u.prototype,"castMaterial",null),r([o({json:{write:!0}})],u.prototype,"name",void 0),r([o({type:String,json:{write:!0}})],u.prototype,"shading",void 0),r([o({type:Boolean})],u.prototype,"trustSourceNormals",void 0),u=m=r([y("esri.geometry.support.MeshComponent")],u);const V=u;export{V as f,g as i,P as m,d as w};
