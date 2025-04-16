import{u as D}from"./common-DQOJ18NT.js";import{o as Q,i as Y,M as J,f as V,h as X}from"./mat3-XZDRtl20.js";import{e as Z,E as tt,m as et}from"./MapView-BohDHr0W.js";import{t as ot}from"./vec2f32-BbH2jxlN.js";import{r as st}from"./vec3f32-nZdmKIgz.js";import{L as it}from"./normalizeUtils-CDWFGYLp.js";import{q as r,fY as G,E as rt,bI as nt}from"./main-BxgY9rsH.js";import{n as at}from"./WGLContainer-DffeF42T.js";import{t as pt,a as q,i as dt}from"./FeatureCommandQueue-CShfrf1O.js";import{h as L,C as w,g as a,a as ht,j as P,S as lt,m as B,I as ct,v as ut,P as W,b as ft,c as mt,G as vt,H as xt,l as yt,w as wt,e as gt}from"./UpdateTracking2D-Dig24xAv.js";import{O as _t,I as A,C as U,E as Mt}from"./enums-Dk3osxpS.js";class I extends ct{}r([L(0,w)],I.prototype,"pos",void 0),r([L(1,w)],I.prototype,"uv",void 0);class $t extends ut{}class F extends W{}r([a(ht)],F.prototype,"dvs",void 0);class v extends W{}r([a(w)],v.prototype,"perspective",void 0),r([a(w)],v.prototype,"texSize",void 0),r([a(P)],v.prototype,"wrapAroundShift",void 0),r([a(P)],v.prototype,"opacity",void 0),r([a(lt)],v.prototype,"texture",void 0);class y extends ft{vertex(e){const t=e.uv.divide(this.config.texSize),o=new P(1).add(mt(t,this.config.perspective)),s=new vt(e.pos.add(new w(this.config.wrapAroundShift,0)),1),i=this.transform.dvs.multiply(s);return{uv:t,glPosition:new xt(i.xy.multiply(o),0,o)}}fragment(e){const t=yt(this.config.texture,e.uv).multiply(this.config.opacity),o=new wt;return o.glFragColor=t,o}}r([a(F)],y.prototype,"transform",void 0),r([a(v)],y.prototype,"config",void 0),r([G(0,B(I))],y.prototype,"vertex",null),r([G(0,B($t))],y.prototype,"fragment",null);let St=class extends pt{constructor(){super(...arguments),this.type=gt.Overlay,this._mesh=null,this.shaders={overlay:new y}}render(e,t){const{context:o,painter:s}=e,i=this._getMesh(e,t);s.setPipelineState(q);const{isWrapAround:p,wrapAroundShift:c}=t.config,u={...t.config,wrapAroundShift:0},f={shader:this.shaders.overlay,uniforms:{transform:t.transform,config:u},defines:null,optionalAttributes:null,useComputeBuffer:!1};s.setPipelineState({...q,stencil:{write:!1,test:{compare:_t.EQUAL,op:{fail:A.KEEP,zFail:A.KEEP,zPass:A.REPLACE},ref:0,mask:255}}}),s.submitDrawMeshUntyped(o,f,i),p&&(u.wrapAroundShift=c,s.submitDrawMeshUntyped(o,f,i))}shutdown(){rt(this._mesh)}_getMesh(e,t){const{context:o}=e;if(this._mesh){const s=this._mesh.vertexBuffers.get("positions");if(!s)throw new Error("Buffer not found");s.setData(t.position)}else{const s=t.index!=null?t.index.length:t.position.length/2;this._mesh=new dt(o,{vertex:{positions:t.position,uvs:t.tex},index:t.index!=null?{index:t.index}:void 0,groups:[{attributes:[{name:"pos",count:2,type:U.FLOAT,location:0,vertex:"positions",stride:8,offset:0},{name:"tex",count:2,type:U.UNSIGNED_SHORT,location:1,vertex:"uvs",stride:4,offset:0}],index:t.index!=null?"index":void 0,primitive:Mt.TRIANGLE_STRIP}],parts:[{group:0,start:0,count:s}]})}return this._mesh}};class Gt extends at{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=Z(),this._overlayTechnique=new St}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}doRender(e){if(e.drawPhase!==tt.MAP||!this.visible)return;super.doRender(e);const t=this._overlayTechnique;for(const o of this.children)o.draw(e,t)}onDetach(){this._overlayTechnique.shutdown()}_updateMatrices(e){const{state:t}=e,{id:o,size:s,pixelRatio:i,resolution:p,rotation:c,viewpoint:u,displayMat3:f}=t;if(this._viewStateId===o)return;const g=D(c),d=i*s[0],m=i*s[1];this._localOrigin=u.targetGeometry.clone();const{x,y:$}=this._localOrigin,_=it(x,t.spatialReference);this._localOrigin.x=_,this._localOrigin.y=$;const S=p*d,b=p*m,n=Q(this._dvsMat3);Y(n,n,f),J(n,n,ot(d/2,m/2)),V(n,n,st(d/S,-m/b,1)),X(n,n,-g),this._viewStateId=o}_updateOverlays(e,t){const{state:o}=e,{rotation:s,spatialReference:i,worldScreenWidth:p,size:c,viewpoint:u}=o,f=this._localOrigin;let g,d=0;const m=nt(i);if(m&&i.isWrappable){const x=c[0],$=c[1],_=D(s),S=Math.abs(Math.cos(_)),b=Math.abs(Math.sin(_)),n=Math.round(x*S+$*b),[C,T]=m.valid,h=et(i),{x:j,y:H}=u.targetGeometry,N=[j,H],E=[0,0];o.toScreen(E,N);const M=[0,0];let O;O=n>p?.5*p:.5*n;const z=Math.floor((j+.5*h)/h),K=C+z*h,k=T+z*h,R=[E[0]+O,0];o.toMap(M,R),M[0]>k&&(d=h),R[0]=E[0]-O,o.toMap(M,R),M[0]<K&&(d=-h),g={worldWidth:h,xBounds:[C,T]}}for(const x of t)x.updateDrawCoords(f,d,i,g)}}export{Gt as u};
