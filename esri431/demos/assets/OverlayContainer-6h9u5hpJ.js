import { bT as r, ii as e, ij as O$1, ik as I$1, cH as u$2, aI as C$1, hX as E, gO as e$2, aQ as E$1, hY as L, gH as o, gM as i$1, gI as M, gJ as t$2, hZ as f, gK as h$2, b9 as d, il as mt, im as u$3 } from './main-jdFDoOPu.js';
import { r as r$1 } from './vec3f32-0Jah-02g.js';
import { n } from './WGLContainer-BUclEOgO.js';
import { t as t$1, a as t, i } from './FeatureCommandQueue-BYG4gPcz.js';
import { h as h$1, g, m, I, C, P, a as tt$1, j as j$1, S as S$1, b as j$2, c as hn, G, H as H$1, l as le, v, w as w$1, e as e$1 } from './UpdateTracking2D-nlP-taLY.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class x extends I{}r([h$1(0,C)],x.prototype,"pos",void 0),r([h$1(1,C)],x.prototype,"uv",void 0);class h extends v{}class w extends P{}r([g(tt$1)],w.prototype,"dvs",void 0);class S extends P{}r([g(C)],S.prototype,"perspective",void 0),r([g(C)],S.prototype,"texSize",void 0),r([g(j$1)],S.prototype,"wrapAroundShift",void 0),r([g(j$1)],S.prototype,"opacity",void 0),r([g(S$1)],S.prototype,"texture",void 0);class j extends j$2{vertex(t){const o=t.uv.divide(this.config.texSize),e=new j$1(1).add(hn(o,this.config.perspective)),r=new G(t.pos.add(new C(this.config.wrapAroundShift,0)),1),p=this.transform.dvs.multiply(r);return {uv:o,glPosition:new H$1(p.xy.multiply(e),0,e)}}fragment(t){const o=le(this.config.texture,t.uv).multiply(this.config.opacity),e=new w$1;return e.glFragColor=o,e}}r([g(w)],j.prototype,"transform",void 0),r([g(S)],j.prototype,"config",void 0),r([e(0,m(x))],j.prototype,"vertex",null),r([e(0,m(h))],j.prototype,"fragment",null);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let u$1 = class u extends t$1{constructor(){super(...arguments),this.type=e$1.Overlay,this._mesh=null,this.shaders={overlay:new j};}render(e,t$1){const{context:i,painter:o}=e,r=this._getMesh(e,t$1);o.setPipelineState(t);const{isWrapAround:p,wrapAroundShift:h}=t$1.config,u={...t$1.config,wrapAroundShift:0},m={shader:this.shaders.overlay,uniforms:{transform:t$1.transform,config:u},defines:null,optionalAttributes:null,useComputeBuffer:!1};o.setPipelineState({...t,stencil:{write:!1,test:{compare:O$1.EQUAL,op:{fail:I$1.KEEP,zFail:I$1.KEEP,zPass:I$1.REPLACE},ref:0,mask:255}}}),o.submitDrawMeshUntyped(i,m,r),p&&(u.wrapAroundShift=h,o.submitDrawMeshUntyped(i,m,r));}shutdown(){u$2(this._mesh);}_getMesh(e,s){const{context:i$1}=e;if(this._mesh){const e=this._mesh.vertexBuffers.get("positions");if(!e)throw new Error("Buffer not found");e.setData(s.position);}else {const e=null!=s.index?s.index.length:s.position.length/2;this._mesh=new i(i$1,{vertex:{positions:s.position,uvs:s.tex},index:null!=s.index?{index:s.index}:void 0,groups:[{attributes:[{name:"pos",count:2,type:C$1.FLOAT,location:0,vertex:"positions",stride:8,offset:0},{name:"tex",count:2,type:C$1.UNSIGNED_SHORT,location:1,vertex:"uvs",stride:4,offset:0}],index:null!=s.index?"index":void 0,primitive:E.TRIANGLE_STRIP}],parts:[{group:0,start:0,count:e}]});}return this._mesh}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class u extends n{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=e$2(),this._overlayTechnique=new u$1;}get dvsMat3(){return this._dvsMat3}beforeRender(t){this._updateMatrices(t),this._updateOverlays(t,this.children);for(const e of this.children)e.beforeRender(t);}doRender(t){if(t.drawPhase!==E$1.MAP||!this.visible)return;super.doRender(t);const e=this._overlayTechnique;for(const r of this.children)r.draw(t,e);}onDetach(){this._overlayTechnique.shutdown();}_updateMatrices(a){const{state:h}=a,{id:m,size:d,pixelRatio:p,resolution:f$1,rotation:u,viewpoint:v,displayMat3:_}=h;if(this._viewStateId===m)return;const M$1=u$3(u),g=p*d[0],y=p*d[1];this._localOrigin=v.targetGeometry.clone();const{x:w,y:x}=this._localOrigin,b=L(w,h.spatialReference);this._localOrigin.x=b,this._localOrigin.y=x;const j=f$1*g,O=f$1*y,R=o(this._dvsMat3);i$1(R,R,_),M(R,R,t$2(g/2,y/2)),f(R,R,r$1(g/j,-y/O,1)),h$2(R,R,-M$1),this._viewStateId=m;}_updateOverlays(e,r){const{state:o}=e,{rotation:i,spatialReference:s,worldScreenWidth:a,size:n,viewpoint:l}=o,c=this._localOrigin;let d$1,p=0;const f=d(s);if(f&&s.isWrappable){const e=n[0],r=n[1],c=u$3(i),h=Math.abs(Math.cos(c)),u=Math.abs(Math.sin(c)),v=Math.round(e*h+r*u),[_,M]=f.valid,g=mt(s),{x:y,y:w}=l.targetGeometry,x=[y,w],b=[0,0];o.toScreen(b,x);const j=[0,0];let O;O=v>a?.5*a:.5*v;const R=Math.floor((y+.5*g)/g),q=_+R*g,S=M+R*g,G=[b[0]+O,0];o.toMap(j,G),j[0]>S&&(p=g),G[0]=b[0]-O,o.toMap(j,G),j[0]<q&&(p=-g),d$1={worldWidth:g,xBounds:[_,M]};}for(const t of r)t.updateDrawCoords(c,p,s,d$1);}}

export { u };
