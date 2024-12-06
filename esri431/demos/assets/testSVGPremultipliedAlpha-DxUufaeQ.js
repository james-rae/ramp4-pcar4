import { b as n } from './WGLContainer-BUclEOgO.js';
import { E as E$1 } from './BufferObject-Bn5F9NQg.js';
import { aO as r, cS as p$1, cW as D, cV as L, aF as F, cX as m$1, h$ as _, hX as E$2, cZ as G, cU as U } from './main-jdFDoOPu.js';
import { x } from './Program-DyGm5N0S.js';
import { o } from './VertexArrayObject-DvEAXDKn.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e{constructor(e,E,t,T,r,_,i,u,n){this.createQuery=e,this.deleteQuery=E,this.resultAvailable=t,this.getResult=T,this.disjoint=r,this.beginTimeElapsed=_,this.endTimeElapsed=i,this.createTimestamp=u,this.timestampBits=n;}}let E=!1;function t$1(t,T){if(T.disjointTimerQuery)return null;let r=t.getExtension("EXT_disjoint_timer_query_webgl2");return r?new e((()=>t.createQuery()),(e=>{t.deleteQuery(e),E=!1;}),(e=>t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE)),(e=>t.getQueryParameter(e,t.QUERY_RESULT)),(()=>t.getParameter(r.GPU_DISJOINT_EXT)),(e=>{E||(E=!0,t.beginQuery(r.TIME_ELAPSED_EXT,e));}),(()=>{t.endQuery(r.TIME_ELAPSED_EXT),E=!1;}),(e=>r.queryCounterEXT(e,r.TIMESTAMP_EXT)),(()=>t.getQuery(r.TIMESTAMP_EXT,r.QUERY_COUNTER_BITS_EXT))):(r=t.getExtension("EXT_disjoint_timer_query"),r?new e((()=>r.createQueryEXT()),(e=>{r.deleteQueryEXT(e),E=!1;}),(e=>r.getQueryObjectEXT(e,r.QUERY_RESULT_AVAILABLE_EXT)),(e=>r.getQueryObjectEXT(e,r.QUERY_RESULT_EXT)),(()=>t.getParameter(r.GPU_DISJOINT_EXT)),(e=>{E||(E=!0,r.beginQueryEXT(r.TIME_ELAPSED_EXT,e));}),(()=>{r.endQueryEXT(r.TIME_ELAPSED_EXT),E=!1;}),(e=>r.queryCounterEXT(e,r.TIMESTAMP_EXT)),(()=>r.getQueryEXT(r.TIMESTAMP_EXT,r.QUERY_COUNTER_BITS_EXT))):null)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t{constructor(){this._result=!1;}dispose(){this._program=r(this._program);}get result(){return null!=this._program&&(this._result=this._test(this._program),this.dispose()),this._result}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class f extends t{constructor(e){super(),this._rctx=e;const r="\n    precision highp float;\n\n    attribute vec2 a_pos;\n    varying vec2 v_uv;\n\n    void main() {\n      v_uv = a_pos;\n      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n    }\n    ",t="\n    precision highp float;\n\n    varying vec2 v_uv;\n\n    uniform sampler2D u_texture;\n\n    void main() {\n      gl_FragColor = texture2D(u_texture, v_uv);\n    }\n    ";this._program=e.programCache.acquire(r,t,new Map([["a_pos",0]]));}dispose(){super.dispose();}_test(g){const f=this._rctx;if(!f.gl)return g.dispose(),!0;const l=new p$1(1);l.wrapMode=D.CLAMP_TO_EDGE,l.samplingMode=L.NEAREST;const _$1=new x(f,l),v=E$1.createVertex(f,F.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),x$1=new o(f,new Map([["a_pos",0]]),n,new Map([["geometry",v]])),h=new p$1;h.samplingMode=L.LINEAR,h.wrapMode=D.CLAMP_TO_EDGE;const b=new m$1(f,h,w);f.useProgram(g),f.bindTexture(b,0),g.setUniform1i("u_texture",0);const A=f.getBoundFramebufferObject(),{x:E,y:T,width:j,height:C}=f.getViewport();f.bindFramebuffer(_$1),f.setViewport(0,0,1,1),f.setClearColor(0,0,0,0),f.setBlendingEnabled(!1),f.clear(_.COLOR),f.bindVAO(x$1),f.drawArrays(E$2.TRIANGLE_STRIP,0,4);const y=new Uint8Array(4);return _$1.readPixels(0,0,1,1,G.RGBA,U.UNSIGNED_BYTE,y),x$1.dispose(),_$1.dispose(),b.dispose(),f.setViewport(E,T,j,C),f.bindFramebuffer(A),255!==y[0]}}const w=new Image;w.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",w.width=5,w.height=5,w.decode();

export { t$1 as a, f, t };
