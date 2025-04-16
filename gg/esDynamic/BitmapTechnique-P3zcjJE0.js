import{L as G,w as A,h_ as N,x as u,gv as P}from"./main-DTtQVgOw.js";import{o as q,M,h as U,b as V,i as F}from"./mat3-DOnW3DjW.js";import{e as K}from"./MapView-C9_5t0hh.js";import{t as _}from"./vec2f32-CVhmN3Me.js";import{e as O}from"./Container-D6cqUdf2.js";import{P as j,G as Q,D as X,L as y,O as Y,I as R}from"./enums-DBi1-Mm2.js";import{p as J,w as Z}from"./Texture-BTsMYwij.js";import{w as $}from"./definitions-CBIQmVpq.js";import{a as f,_ as h,E,b as p,c as k,Y as w,h as tt,g as m,K as et,m as I,C as it,P as st,U as rt,r as ot,j as at,X as nt,v as lt,w as ut,t as ht}from"./GraphShaderModule-QVoI9W5I.js";import{e as ct}from"./TechniqueType-GommNIdJ.js";class T{constructor(t,i,s){this.pixelBlock=t,this.extent=i,this.originalPixelBlock=s}get width(){return this.pixelBlock!=null?this.pixelBlock.width:0}get height(){return this.pixelBlock!=null?this.pixelBlock.height:0}render(t){const i=this.pixelBlock;if(i==null)return;const s=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??i});if(s.pixelBlock==null)return;s.pixelBlock.maskIsAlpha&&(s.pixelBlock.premultiplyAlpha=!0);const r=s.pixelBlock.getAsRGBA(),a=t.createImageData(s.pixelBlock.width,s.pixelBlock.height);a.data.set(r),t.putImageData(a,0,0)}getRenderedRasterPixels(){const t=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return t.pixelBlock==null?null:(t.pixelBlock.maskIsAlpha&&(t.pixelBlock.premultiplyAlpha=!0),{width:t.pixelBlock.width,height:t.pixelBlock.height,renderedRasterPixels:new Uint8Array(t.pixelBlock.getAsRGBA().buffer)})}}function z(e){return e&&"render"in e}function H(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}function dt(e){return z(e)?e instanceof T?e.getRenderedRasterPixels()?.renderedRasterPixels:H(e):e}let pt=class extends O{constructor(e=null,t=!1){super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._texture=null,this._width=void 0,this.x=0,this.y=0,this.immutable=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),this._uploadStatus!=null&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return this._height!==void 0?this._height:this._sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){e==null&&this._source==null||(this._source=e,this.invalidateTexture(),this.requestRender())}get texture(){return this._texture}get width(){return this._width!==void 0?this._width:this._sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}async setSourceAsync(e,t){this._uploadStatus!=null&&this._uploadStatus.controller.abort();const i=new AbortController,s=G();return A(t,()=>i.abort()),A(i,r=>s.reject(r)),this._uploadStatus={controller:i,resolver:s},this.source=e,s.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}transitionStep(e,t){e>=64&&(this.fadeTransitionEnabled=!1),super.transitionStep(e,t)}setTransform(e){const t=q(this.transforms.displayViewScreenMat3),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),r=this.resolution/this.pixelRatio/e.resolution,a=r*this.width,o=r*this.height,n=Math.PI*this.rotation/180;M(t,t,_(i,s)),M(t,t,_(a/2,o/2)),U(t,t,-n),M(t,t,_(-a/2,-o/2)),V(t,t,_(a,o)),F(this.transforms.displayViewScreenMat3,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}async updateTexture({context:e,painter:t}){if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(e)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const i=dt(this.source);try{if(this._uploadStatus!=null){const{controller:s,resolver:r}=this._uploadStatus,a={signal:s.signal},{width:o,height:n}=this,l=this._texture;await t.textureUploadManager.enqueueTextureUpdate({data:i,texture:l,width:o,height:n},a),r.resolve(),this._uploadStatus=null}else this._texture.setData(i);this.ready()}catch(s){N(s)}}onDetach(){this.destroy()}_createTransforms(){return{displayViewScreenMat3:K()}}_createTexture(e){const t=this.immutable,i=new J;return i.internalFormat=t?j.RGBA8:Q.RGBA,i.wrapMode=X.CLAMP_TO_EDGE,i.isImmutable=t,i.width=this._sourceWidth,i.height=this._sourceHeight,new Z(e,i)}};function mt(e){const t=new h(.16666666666666666),i=e.multiply(e),s=i.multiply(e),r=t.multiply(s.multiply(-1).add(new h(3).multiply(i)).subtract(new h(3).multiply(e)).add(1)),a=t.multiply(s.multiply(3).subtract(i.multiply(6)).add(4)),o=t.multiply(s.multiply(-3).add(i.multiply(3)).add(e.multiply(3)).add(1)),n=t.multiply(s);return new w(r,a,o,n)}function L(e){const t=mt(e),i=t.x.add(t.y),s=t.z.add(t.w),r=new h(1).subtract(t.y.divide(i)).add(e),a=new h(1).add(t.w.divide(s)).subtract(e);return new w(r,a,i,s)}function xt(e,t,i){const s=new f(new h(1).divide(i.x),0),r=new f(0,new h(1).divide(i.y)),a=t.multiply(i).subtract(.5),o=L(E(a).x).xyz,n=L(E(a).y).xyz;let l=t.add(o.x.multiply(s)),d=t.subtract(o.y.multiply(s));const v=l.add(n.x.multiply(r)),S=d.add(n.x.multiply(r));l=l.subtract(n.y.multiply(r)),d=d.subtract(n.y.multiply(r));let c=p(e,d),B=p(e,l);const W=p(e,S),C=p(e,v);return c=k(c,W,n.z),B=k(B,C,n.z),c=k(c,B,o.z),c}class D extends it{}u([tt(0,f)],D.prototype,"position",void 0);class gt extends lt{}class x extends st{}u([m(rt)],x.prototype,"texture",void 0),u([m(ot)],x.prototype,"dvsMat3",void 0),u([m(f)],x.prototype,"coordScale",void 0),u([m(h)],x.prototype,"opacity",void 0);class g extends at{constructor(){super(...arguments),this.type="BitmapShader"}vertex(t){const i=this.config.dvsMat3.multiply(new nt(t.position.multiply(this.config.coordScale),1));return{glPosition:new w(i,1),texcoord:t.position}}fragment(t){const i=new ut;let s;return s=this.bicubic?xt(this.config.texture,t.texcoord,this.config.coordScale):p(this.config.texture,t.texcoord),i.fragColor=new w(s.rgb.multiply(this.config.opacity),s.a.multiply(this.config.opacity)),i}}u([m(x)],g.prototype,"config",void 0),u([et],g.prototype,"bicubic",void 0),u([P(0,I(D))],g.prototype,"vertex",null),u([P(0,I(gt))],g.prototype,"fragment",null);const b={nearest:{samplingMode:y.NEAREST,mips:!1},bilinear:{samplingMode:y.LINEAR,mips:!1},bicubic:{samplingMode:y.LINEAR,mips:!1},trilinear:{samplingMode:y.LINEAR_MIPMAP_LINEAR,mips:!0}},_t=(e,t,i)=>{if(i.samplingMode==="dynamic"){const{state:s}=e,r=t.resolution/t.pixelRatio/s.resolution,a=Math.round(e.pixelRatio)!==e.pixelRatio,o=r>1.05||r<.95;return s.rotation||o||a||t.isSourceScaled||t.rotation?b.bilinear:b.nearest}return b[i.samplingMode]};class yt extends ht{constructor(){super(...arguments),this.name="BrushBitmap",this.type=ct.Bitmap,this.shaders={bitmap:new g}}render(t,i){const{context:s,renderingOptions:r,painter:a}=t;for(const o of i.bitmaps){const n=o.texture;if(!o.source||!o.isReady||n==null)continue;const l=_t(t,o,r);t.timeline.begin(this.name),a.setPipelineState({depth:!1,stencil:{test:{mask:255,ref:o.stencilRef,compare:Y.EQUAL,op:{fail:R.KEEP,zFail:R.KEEP,zPass:R.KEEP}},write:!1},color:{write:[!0,!0,!0,!0],blendMode:o.blendFunction==="additive"?"additive":"composite"}}),o.setSamplingProfile(l);const{coordScale:d,computedOpacity:v,transforms:S}=o,c={texture:{texture:n,unit:$},dvsMat3:S.displayViewScreenMat3,coordScale:d,opacity:v};a.submitDrawMesh(s,{shader:this.shaders.bitmap,uniforms:{config:c},defines:{bicubic:l===b.bicubic},optionalAttributes:null,useComputeBuffer:!1},a.quadMesh),t.timeline.end(this.name)}}}export{pt as S,H as f,z as g,T as l,yt as p};
