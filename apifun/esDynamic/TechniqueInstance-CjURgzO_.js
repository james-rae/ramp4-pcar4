import{aY as c,s as V,n as S}from"./main-DeRV24Di.js";import{J as o,x as v,b as F,z as k,B as U,j as M,k as L,q as O,y as B}from"./definitions-CBIQmVpq.js";import{f as m}from"./UpdateTracking2D-TQACYved.js";import{i as x,o as R}from"./Utils-IL1c5mAs.js";import{D as T,L as w}from"./enums-DBi1-Mm2.js";import{x as P}from"./FramebufferObject-CvO9um0C.js";import{p as D,w as z}from"./Texture-GctVlvdG.js";import{i as q}from"./TileContainer-wuWlzDl8.js";const $=()=>S.getLogger("esri.views.2d.engine.webgl.AttributeStoreView");class A{constructor(t,e,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:s,pixelType:n,textureOnly:h}=t,a=x(n);this.blockIndex=i,this.pixelType=n,this.size=e,this.textureOnly=h,h||(this.data=new a(s)),this._resetRange()}destroy(){this._texture?.dispose();for(const t in this._fbos){const e=this._fbos[t];e&&(t==="0"&&e.detachColorTexture(),e.dispose()),this._fbos[t]=null}this._texture=null}get _textureDesc(){const t=new D;return t.wrapMode=T.CLAMP_TO_EDGE,t.samplingMode=w.NEAREST,t.dataType=this.pixelType,t.width=this.size,t.height=this.size,t}setData(t,e,i){const s=m(t),n=this.data,h=s*this.texelSize+e;!n||h>=n.length||(n[h]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s))}getData(t,e){if(this.data==null)return null;const i=m(t)*this.texelSize+e;return!this.data||i>=this.data.length?null:this.data[i]}getTexture(t){return this._texture??this._initTexture(t)}getFBO(t,e=0){if(!this._fbos[e]){const i=e===0?this.getTexture(t):this._textureDesc;this._fbos[e]=new P(t,i)}return this._fbos[e]}get hasDirty(){const t=this.dirtyStart;return this.dirtyEnd>=t}updateTexture(t,e){try{const i=this.dirtyStart,s=this.dirtyEnd;if(!this.hasDirty)return;c("esri-2d-update-debug")&&console.debug(`Version[${e}] AttributeStoreView.updateTexture`,{start:i,end:s,firstBytes:new Uint8Array(this.data.buffer.slice(0,16)),block:this}),this._resetRange();const n=this.data.buffer,h=this.getTexture(t),a=4,u=(i-i%this.size)/this.size,d=(s-s%this.size)/this.size,l=u,f=this.size,p=d,_=u*this.size*a,g=(f+p*this.size)*a-_,b=x(this.pixelType),I=new b(n,_*b.BYTES_PER_ELEMENT,g),E=this.size,y=p-l+1;if(y>this.size)return void $().error(new V("mapview-webgl","Out-of-bounds index when updating AttributeData"));h.updateData(0,0,l,E,y,I)}catch{}}update(t){const{data:e,start:i,end:s}=t;if(e!=null&&this.data!=null){const n=this.data,h=i*this.texelSize;for(let a=0;a<e.length;a++){const u=1<<a%this.texelSize;t.layout&u&&(n[h+a]=e[a])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,s)}resize(t,e){const i=this.size;if(this.size=e,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));const s=x(this.pixelType);this.destroy(),this.data=new s(t.buffer)}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(t){const e=new z(t,this._textureDesc,this.data??void 0);if(this._lastTexture!=null&&this._fbos[0]){const i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,n=this._lastTexture.descriptor.dataType,h=this._lastTexture.descriptor.pixelFormat,a=this.getFBO(t),u=R(n),d=new(x(n))(new ArrayBuffer(i*s*u*this.texelSize)),l=t.getBoundFramebufferObject(),{x:f,y:p,width:_,height:g}=t.getViewport();t.bindFramebuffer(a),a.readPixels(0,0,i,s,h,n,d),e.updateData(0,0,0,2*i,s/2,d),t.setViewport(f,p,_,g),t.bindFramebuffer(l)}return this.destroy(),this._texture=e,this._texture}}class C{constructor(){this.size=0,this._pendingAttributeUpdates=[],this._version=0,this._epoch=0,this._locked=!1}get locked(){return this._locked}_initialize(t){if(!t)throw new Error("InternalError: initArgs must be defined");const e=t.blockDescriptors;if(this.size=t.blockSize,c("esri-2d-update-debug")&&console.debug("AttributeStoreView.initialize",{message:t}),this._data==null)this._data=e.map((i,s)=>i!=null?new A(i,this.size,s):null);else for(let i=0;i<this._data.length;i++){const s=this._data[i],n=e[i];n!=null&&(s==null?this._data[i]=new A(n,this.size,i):s.resize(n,this.size))}}destroy(){for(const t of this._data??[])t?.destroy();this._defaultTexture?.dispose(),this._defaultTexture=null,this._pendingAttributeUpdates=[]}isEmpty(){return this._data==null}getBlock(t){return this._data==null?null:this._data[t]}setLabelMinZoom(t,e){this.setData(t,o.FilterFlags,1,e)}setLocalTimeOrigin(t,e){this.setData(t,o.LocalTimeOrigin,0,e)}getLabelMinZoom(t){return this.getData(t,o.FilterFlags,1,255)}getFilterFlags(t){return this.getData(t,o.FilterFlags,0,0)}getVisualVariableData(t,e){return this.getData(t,o.VV,e,0)}getData(t,e,i,s){if(!this._data)return 0;const n=this._data[e];return n==null?0:n.getData(t,i)??s}setData(t,e,i,s){this._data[e].setData(t,i,s)}lockTextureUploads(){this._locked=!0}unlockTextureUploads(){this._locked=!1,this.update()}requestUpdate(t){this._version=t.version,this._pendingAttributeUpdates.push(t),c("esri-2d-update-debug")&&console.debug(`Version[${this._version}] AttributeStoreView.requestUpdate`,{message:t})}get currentEpoch(){return this._epoch}update(){if(this._locked)return;const t=this._pendingAttributeUpdates;this._pendingAttributeUpdates=[];for(const e of t){const{blockData:i,initArgs:s,sendUpdateEpoch:n,version:h}=e;c("esri-2d-update-debug")&&console.debug(`Version[${this._version}] Epoch[${n}] AttributeStoreView.applyUpdate`),this._version=h,this._epoch=n,s!=null&&this._initialize(s);const a=this._data;for(let u=0;u<i.length;u++){const d=i[u],l=a[u];l!=null&&d!=null&&(c("esri-2d-update-debug")&&console.debug(`Version[${this._version}] CpuBlock[${u}] AttributeStoreView.update`,{block:d}),l.update(d))}}}getUniforms(t){return{filterFlags:{texture:this._getTexture(t,o.FilterFlags),unit:v},animation:{texture:this._getTexture(t,o.Animation),unit:F},gpgpu:{texture:this._getTexture(t,o.GPGPU),unit:k},localTimeOrigin:{texture:this._getTexture(t,o.LocalTimeOrigin),unit:U},visualVariableData:{texture:this._getTexture(t,o.VV),unit:M},dataDriven0:{texture:this._getTexture(t,o.DD0),unit:L},dataDriven1:{texture:this._getTexture(t,o.DD1),unit:O},dataDriven2:{texture:this._getTexture(t,o.DD2),unit:B},size:this.size}}_getTexture(t,e){const i=this._data?.[e];return i?(i.updateTexture(t,this._version),i.getTexture(t)):this._getDefaultTexture(t)}_getDefaultTexture(t){if(this._defaultTexture==null){const e=new D;e.wrapMode=T.CLAMP_TO_EDGE,e.samplingMode=w.NEAREST,e.width=1,e.height=1,this._defaultTexture=new z(t,e,new Uint8Array(4))}return this._defaultTexture}}const N=60;let j=class extends q{constructor(r){super(r),this._statisticsByLevel=new Map,this._entityIndex=new Map,this.attributeView=new C}destroy(){this.children.forEach(r=>r.destroy()),this.removeAllChildren(),this.attributeView.destroy()}doRender(r){r.context.capabilities.enable("textureFloatLinear"),super.doRender(r)}get hasAnimations(){for(const r of this.children)if(r.hasAnimations)return!0;return!1}_reindexAndUpdateFeaturesIfNeeded(){if(this.hasAnimations&&(this._reindexFeatures(),this.attributeView.size!==0))for(const r of this._entityIndex.values())r.dirty&&(this.attributeView.setData(r.displayId,o.LocalTimeOrigin,0,r.firstIndexed),r.dirty=!1)}restartAnimation(r){const t=this._entityIndex.get(r);if(!t)return;const e=performance.now()/1e3;t.firstIndexed=e,t.dirty=!0}restartAllAnimations(){const r=performance.now()/1e3;for(const[t,e]of this._entityIndex)e.firstIndexed=r,e.dirty=!0}_reindexFeatures(){const r=performance.now()/1e3;for(const t of this.children)for(const e of t.entityIds){const{objectId:i}=e;let s=this._entityIndex.get(i);s||(s={objectId:i,displayId:0,firstIndexed:r,lastIndexed:0,dirty:!0},this._entityIndex.set(i,s)),s.lastIndexed=r,s.displayId=e.displayId}for(const[t,e]of this._entityIndex)r-e.lastIndexed>N&&this._entityIndex.delete(t)}_updateAttributeView(){this.attributeView.update(),this._reindexAndUpdateFeaturesIfNeeded()}createRenderParams(r){const t=super.createRenderParams(r);return t.attributeView=this.attributeView,t.instanceStore=this._instanceStore,t.statisticsByLevel=this._statisticsByLevel,t}};function G(r){return r}class Y{constructor(t,e,i){this._instanceId=t,this.techniqueRef=e,this._input=i}get instanceId(){return this._instanceId}createMeshInfo(t){return{id:this._instanceId,techniqueType:this.techniqueRef.type,inputParams:t,optionalAttributes:this._input.optionalAttributes}}getInput(){return this._input}setInput(t){this._input=t}}export{Y as i,j as n,G as r};
