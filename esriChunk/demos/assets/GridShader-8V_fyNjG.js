import{d as R}from"./WGLContainer-BTBIjqYB.js";import{q as c,fW as I,a$ as Yt,bQ as $e,aP as V,aD as Y,u as f,C as W,eV as Te,aA as ue,bv as xt,aF as he,j8 as Fe,cq as ke,E as mt}from"./main-B3JhZOBP.js";import{h as Mt,g as w,K as Se,m as P,I as Ct,C as k,P as ot,S as G,j as h,b as $t,H as y,z as De,l as j,x as $,U as S,y as Z,G as b,D as d,Y as ce,A as Nt,B as F,E as A,F as me,J as Qt,L as Ee,M as Jt,N as Ve,O as Wt,v as Tt,w as Ft,c as ze,Q as de,V as Le,R as Re,T as Ie,X as Pe,_ as Ae,$ as Ze,a as Ne,a0 as Bt,a1 as Be,a2 as Oe,a3 as Kt,a4 as te,a5 as qe,a6 as Ue}from"./UpdateTracking2D-Bw6yNE-3.js";import{t as Ge}from"./CircularArray-CujHzHWW.js";import{a as je}from"./testSVGPremultipliedAlpha-C-swcGPI.js";import{M as Ye,N as We,L as Xe}from"./definitions-C0Jy3zs7.js";import{L as He,_ as ee,d as pe,f as kt,k as ft,g as Qe,G as Je,$ as Ke,j as Ot,p as ti,n as ie}from"./MapView-CUhzHRPm.js";import{t as ei}from"./AttributeStore-Da2sskWy.js";import{o as ii,r as si,g as ge}from"./vec32-DzWiU6o7.js";import{o as qt,u as ni,r as oi}from"./vec2-DGVIkCvT.js";import{n as nt}from"./vec2f64-B7N_6o8F.js";const Ri={shaders:{vertexShader:R("bitBlit/bitBlit.vert"),fragmentShader:R("bitBlit/bitBlit.frag")},attributes:new Map([["a_pos",0],["a_tex",1]])},Ii={shaders:{vertexShader:R("stencil/stencil.vert"),fragmentShader:R("stencil/stencil.frag")},attributes:new Map([["a_pos",0]])};class _e extends Ct{}c([Mt(0,k)],_e.prototype,"position",void 0);class ai extends Tt{}class K extends ot{}c([w(G)],K.prototype,"layerTexture",void 0),c([w(G)],K.prototype,"backbufferTexture",void 0),c([w(h)],K.prototype,"opacity",void 0),c([w(h)],K.prototype,"inFadeOpacity",void 0);class dt extends $t{vertex(t){return{uv:t.position,glPosition:new y(De(t.position),0,1)}}fragment(t){const e=new Ft,i=j(this.config.layerTexture,t.uv),o=j(this.config.backbufferTexture,t.uv),s=$(S(i.a,new h(0)),i.rgb,i.rgb.divide(i.a)),n=$(S(o.a,new h(0)),o.rgb,o.rgb.divide(o.a)),l=this.config.opacity.multiply(i.a),r=o.a;switch(this.blendMode){case"destination-over":e.glFragColor=new y(s.multiply(l).multiply(d(r)).add(n.multiply(r)),l.add(r).subtract(l.multiply(r)));break;case"source-in":{const u=new y(s.multiply(l).multiply(r),l.multiply(r)),m=new y(n.multiply(r),r).multiply(d(this.config.opacity)).multiply(this.config.inFadeOpacity);e.glFragColor=u.add(m)}break;case"destination-in":{const u=new y(n.multiply(r).multiply(l),r.multiply(l)),m=new y(n.multiply(r),r).multiply(new y(d(this.config.opacity).multiply(this.config.inFadeOpacity)));e.glFragColor=u.add(m)}break;case"source-out":e.glFragColor=new y(s.multiply(l).multiply(d(r)),l.multiply(d(r)));break;case"destination-out":e.glFragColor=new y(n.multiply(r).multiply(d(l)),r.multiply(d(l)));break;case"source-atop":e.glFragColor=new y(s.multiply(l).multiply(r).add(n.multiply(r.multiply(d(l)))),r);break;case"destination-atop":e.glFragColor=new y(s.multiply(l.multiply(d(r))).add(n.multiply(r).multiply(l)),l);break;case"xor":e.glFragColor=new y(s.multiply(l.multiply(d(r))).add(n.multiply(r.multiply(d(l)))),l.multiply(d(r)).add(r.multiply(d(l))));break;case"multiply":e.glFragColor=new y(s.multiply(l).multiply(n.multiply(r)).add(s.multiply(l).multiply(d(r))).add(n.multiply(r).multiply(d(l))),l.add(r.multiply(d(l))));break;case"screen":e.glFragColor=new y(s.add(n).subtract(s.multiply(n)).multiply(l.multiply(r)).add(s.multiply(l).multiply(d(r))).add(n.multiply(r).multiply(d(l))),l.add(r.multiply(d(l))));break;case"overlay":{const u=new b(St(n.r,s.r),St(n.g,s.g),St(n.b,s.b));e.glFragColor=x(u,s,n,l,r)}break;case"darken":{const u=F(s,n);e.glFragColor=x(u,s,n,l,r)}break;case"lighter":e.glFragColor=new y(s.multiply(l).add(n.multiply(r)),l.add(r));break;case"lighten":{const u=Nt(s,n);e.glFragColor=x(u,s,n,l,r)}break;case"color-dodge":{const u=Z(new b(vt(n.r,s.r),vt(n.g,s.g),vt(n.b,s.b)),new b(0),new b(1));e.glFragColor=x(u,s,n,l,r)}break;case"color-burn":{const u=new b(wt(n.r,s.r),wt(n.g,s.g),wt(n.b,s.b));e.glFragColor=x(u,s,n,l,r)}break;case"hard-light":{const u=new b(Dt(n.r,s.r),Dt(n.g,s.g),Dt(n.b,s.b));e.glFragColor=x(u,s,n,l,r)}break;case"soft-light":{const u=new b(Et(n.r,s.r),Et(n.g,s.g),Et(n.b,s.b));e.glFragColor=x(u,s,n,l,r)}break;case"difference":{const u=ce(n.subtract(s));e.glFragColor=x(u,s,n,l,r)}break;case"exclusion":{const u=s.add(n).subtract(new h(2).multiply(s).multiply(n));e.glFragColor=x(u,s,n,l,r)}break;case"invert":e.glFragColor=new y(new b(1).subtract(n).multiply(l).multiply(r).add(n.multiply(r).multiply(d(l))),r);break;case"vivid-light":{const u=new b(Z(Vt(n.r,s.r),new h(0),new h(1)),Z(Vt(n.g,s.g),new h(0),new h(1)),Z(Vt(n.b,s.b),new h(0),new h(1)));e.glFragColor=x(u,s,n,l,r)}break;case"hue":{const u=ne(s,n,n);e.glFragColor=x(u,s,n,l,r)}break;case"saturation":{const u=ne(n,s,n);e.glFragColor=x(u,s,n,l,r)}break;case"color":{const u=Gt(s,n);e.glFragColor=x(u,s,n,l,r)}break;case"luminosity":{const u=Gt(n,s);e.glFragColor=x(u,s,n,l,r)}break;case"plus":e.glFragColor=Z(new y(i.r.add(n.r),i.g.add(n.g),i.b.add(n.b),l.add(r)),new y(0),new y(1));break;case"minus":e.glFragColor=new y(Z(new b(n.r.subtract(i.r),n.g.subtract(i.g),n.b.subtract(i.b)),new b(0),new b(1)),r.multiply(l));break;case"average":{const u=n.add(s).divide(2);e.glFragColor=x(u,s,n,l,r)}break;case"reflect":{const u=Z(new b(zt(n.r,s.r),zt(n.g,s.g),zt(n.b,s.b)),new b(0),new b(1));e.glFragColor=x(u,s,n,l,r)}break;default:e.glFragColor=i.multiply(this.config.opacity)}return e}}function x(a,t,e,i,o){return new y(a.multiply(i).multiply(o).add(t.multiply(i).multiply(d(o))).add(e.multiply(o).multiply(d(i))),i.add(o.multiply(d(i))))}function St(a,t){return new h(1).subtract(A(new h(.5),t)).multiply(d(new h(2).multiply(d(t).multiply(d(a))))).add(A(new h(.5),t).multiply(new h(2).multiply(t).multiply(a)))}function vt(a,t){return $(S(a,new h(0)),new h(0),$(S(t,new h(1)),new h(1),F(new h(1),a.divide(new h(1).subtract(t)))))}function wt(a,t){return $(S(a,new h(1)),new h(1),$(S(t,new h(0)),new h(0),d(F(new h(1),d(a).divide(t)))))}function Dt(a,t){return new h(1).subtract(A(new h(.5),t)).multiply(new h(2).multiply(t).multiply(a)).add(A(new h(.5),t).multiply(d(new h(2).multiply(d(t).multiply(d(a))))))}function Et(a,t){return me([Jt(t,new h(.5)),()=>{const e=new h(2).multiply(t),i=d(e),o=d(a);return a.subtract(i.multiply(a).multiply(o))}],[Jt(a,new h(.25)),()=>{const e=new h(2).multiply(t),i=Qt(e).multiply(a),o=new h(16).multiply(a).subtract(new h(12)).multiply(a).add(new h(3));return a.add(i.multiply(o))}],[!0,()=>{const e=new h(2).multiply(t),i=Qt(e),o=Ee(a).subtract(a);return a.add(i.multiply(o))}])}function Vt(a,t){const e=d(A(new h(.5),t)).multiply(wt(a,new h(2).multiply(t))),i=A(new h(.5),t).multiply(vt(a,new h(2).multiply(Ve(t,.5))));return e.add(i)}function Xt(a){return F(F(a.r,a.g),a.b)}function ye(a){return Nt(Nt(a.r,a.g),a.b)}function Ut(a){return ze(a,new b(.3,.59,.11))}function se(a){return ye(a).subtract(Xt(a))}function ri(a){const t=Ut(a),e=Xt(a),i=ye(a);return me([de(e,new h(0)),()=>{const o=a.subtract(t).multiply(t),s=t.subtract(e);return t.add(o.divide(s))}],[Wt(i,new h(1)),()=>{const o=a.subtract(t),s=d(t),n=o.multiply(s),l=i.subtract(t);return t.add(n.divide(l))}],[!0,a])}function Gt(a,t){const e=Ut(a),i=Ut(t).subtract(e);return ri(a.add(new b(i)))}function ne(a,t,e){const i=Xt(a),o=se(a),s=se(t);return Gt($(Wt(o,new h(0)),()=>a.subtract(i).multiply(s).divide(o),new b(0)),e)}function zt(a,t){return $(S(t,new h(1)),t,()=>{const e=d(t),i=a.multiply(a).divide(e);return F(i,new h(1))})}c([Se],dt.prototype,"blendMode",void 0),c([w(K)],dt.prototype,"config",void 0),c([I(0,P(_e))],dt.prototype,"vertex",null),c([I(0,P(ai))],dt.prototype,"fragment",null);class ve extends Ct{}c([Mt(0,k)],ve.prototype,"position",void 0);class li extends Tt{}let jt=class extends ot{};c([w(G)],jt.prototype,"layerTexture",void 0),c([w(h)],jt.prototype,"opacity",void 0);let Lt=class extends $t{vertex(t){return{uv:t.position,glPosition:new y(t.position.subtract(new k(.5)).multiply(2),0,1)}}fragment(t){const e=new Ft;return e.glFragColor=j(this.config.layerTexture,t.uv).multiply(this.config.opacity),e}};c([w(jt)],Lt.prototype,"config",void 0),c([I(0,P(ve))],Lt.prototype,"vertex",null),c([I(0,P(li))],Lt.prototype,"fragment",null);const Zi={shaders:{vertexShader:R("highlight/textured.vert"),fragmentShader:R("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},Ni={shaders:{vertexShader:R("highlight/textured.vert"),fragmentShader:R("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},T=!!Yt("esri-2d-profiler");let Bi=class{constructor(t,e){if(this._events=new $e,this._entries=new Map,this._timings=new Ge(10),this._currentContainer=null,this._currentPass=null,this._currentBrush=null,this._currentSummary=null,!T)return;this._ext=je(t.gl,{}),this._debugOutput=e;const i=t.gl;if(!this.enableCommandLogging)return;let o;for(o in i)if(typeof i[o]=="function"){const s=i[o],n=o.includes("draw");i[o]=(...l)=>(this._events.emit("command",{container:this._currentContainer,pass:this._currentPass,brush:this._currentBrush,method:o,args:l,isDrawCommand:n}),this._currentSummary&&(this._currentSummary.commands++,n&&this._currentSummary.drawCommands++),s.apply(i,l))}}get enableCommandLogging(){return!(typeof T=="object"&&T.disableCommands)}recordContainerStart(t){T&&(this._currentContainer=t)}recordContainerEnd(){T&&(this._currentContainer=null)}recordPassStart(t){T&&(this._currentPass=t,this._initSummary())}recordPassEnd(){T&&(this._currentPass=null,this._emitSummary())}recordBrushStart(t){T&&(this._currentBrush=t)}recordBrushEnd(){T&&(this._currentBrush=null)}recordStart(t){if(T&&this._ext!=null){if(this._entries.has(t)){const i=this._entries.get(t),o=this._ext.resultAvailable(i.query),s=this._ext.disjoint();if(o&&!s){const n=this._ext.getResult(i.query)/1e6;let l=0;if(this._timings.enqueue(n)!=null){const m=this._timings.entries,v=m.length;let g=0;for(const p of m)g+=p;l=g/v}const r=n.toFixed(2),u=l?l.toFixed(2):"--";this.enableCommandLogging?(console.groupCollapsed(`Frame report for ${t}, ${r} ms (${u} last 10 avg)
${i.commandsLen} Commands (${i.drawCommands} draw)`),console.log("RenderPass breakdown: "),console.table(i.summaries),console.log("Commands: ",i.commands),console.groupEnd()):console.log(`Frame report for ${t}, ${r} ms (${u} last 10 avg)`),this._debugOutput.innerHTML=`${r} (${u})`}for(const n of i.handles)n.remove();this._ext.deleteQuery(i.query),this._entries.delete(t)}const e={name:t,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]};this.enableCommandLogging&&(e.handles.push(this._events.on("command",i=>{e.commandsLen++,e.commands.push(i),i.isDrawCommand&&e.drawCommands++})),e.handles.push(this._events.on("summary",i=>{e.summaries.push(i)}))),this._ext.beginTimeElapsed(e.query),this._entries.set(t,e)}}recordEnd(t){T&&this._ext!=null&&this._entries.has(t)&&this._ext.endTimeElapsed()}_initSummary(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})}_emitSummary(){this.enableCommandLogging&&this._currentSummary&&this._events.emit("summary",this._currentSummary)}};const D=1,bt=0,it=1,st=2;let ui=class{constructor(t,e,i){this._width=t*i,this._height=e*i,this._pixelRatio=i;const o=Math.ceil(this._width/D),s=Math.ceil(this._height/D);this._cols=o,this._rows=s,this._cells=ei.create(o*s)}insertMetrics(t){this._markMetrics(t)}hasCollision(t){let e=0;for(const{transformedX:i,transformedY:o,width:s,height:n}of t.bounds){const l=s*this._pixelRatio,r=n*this._pixelRatio,u=i*this._pixelRatio,m=o*this._pixelRatio;switch(this._collide(u,m,l,r)){case st:return st;case it:e++}}return e===t.bounds.length?it:bt}getCellId(t,e){return t+e*this._cols}has(t){return this._cells.has(t)}hasRange(t,e){return this._cells.hasRange(t,e)}set(t){this._cells.set(t)}setRange(t,e){this._cells.setRange(t,e)}_collide(t,e,i,o){const s=t-i/2,n=e-o/2,l=s+i,r=n+o;if(l<0||r<0||s>this._width||n>this._height)return it;const u=V(Math.floor(s/D),0,this._cols),m=V(Math.floor(n/D),0,this._rows),v=V(Math.ceil(l/D),0,this._cols),g=V(Math.ceil(r/D),0,this._rows);for(let p=m;p<=g;p++)for(let _=u;_<=v;_++){const M=this.getCellId(_,p);if(this.has(M))return st}return bt}_mark(t,e,i,o){const s=t-i/2,n=e-o/2,l=s+i,r=n+o,u=V(Math.floor(s/D),0,this._cols),m=V(Math.floor(n/D),0,this._rows),v=V(Math.ceil(l/D),0,this._cols),g=V(Math.ceil(r/D),0,this._rows);for(let p=m;p<=g;p++)for(let _=u;_<=v;_++){const M=this.getCellId(_,p);this.set(M)}return!1}_markMetrics(t){for(const{transformedX:e,transformedY:i,width:o,height:s}of t.bounds){const n=o*this._pixelRatio,l=s*this._pixelRatio,r=e*this._pixelRatio,u=i*this._pixelRatio;this._mark(r,u,n,l)}}};const H=254,pt=255,Q=0;function B(a,t){const e=a.children.slice();e.sort((i,o)=>i.tileAge-o.tileAge),e.forEach(i=>{i.labelMetrics!=null&&i.isReady&&t(i,i.labelMetrics)})}function oe(a,t){return(!a.minScale||a.minScale>=t)&&(!a.maxScale||a.maxScale<=t)}class hi{run(t,e,i,o){const s=[];for(let n=t.length-1;n>=0;n--){const l=t[n];l.labelingCollisionInfos?.length&&s.push(...l.labelingCollisionInfos)}Yt("esri-2d-update-debug")&&s.length&&console.debug("CollisionEngine.run"),this._transformMetrics(s),this._runCollision(s,e,i,o);for(const n of s)n.container.requestRender()}_runCollision(t,e,i,o){const[s,n]=e.state.size,l=new ui(s,n,e.pixelRatio);for(const{container:r,deconflictionEnabled:u,visible:m}of t){const v=r.attributeView;u?m?(this._prepare(r),this._collideVisible(l,r,i,o),this._collideInvisible(l,r)):B(r,(g,p)=>{for(const _ of p)v.setLabelMinZoom(_.entityTexel,pt)}):B(r,(g,p)=>{for(const _ of p)oe(_,i)?(v.setLabelMinZoom(_.entityTexel,Q),m&&l.insertMetrics(_)):v.setLabelMinZoom(_.entityTexel,H)})}}_isFiltered(t,e,i){const o=e.getFilterFlags(t),s=!i.hasFilter||!!(o&Ye),n=i.featureEffect==null||i.featureEffect.excludedLabelsVisible||!!(o&We);return!(s&&n)}_prepare(t){const e=t.attributeView,i=new Set;B(t,(o,s)=>{for(const n of s){const l=n.entityTexel;if(!i.has(l)){if(i.add(l),this._isFiltered(l,e,t.layerView)){e.setLabelMinZoom(l,H);continue}e.getLabelMinZoom(l)!==Q?e.setLabelMinZoom(l,pt):e.setLabelMinZoom(l,Q)}}})}_collideVisible(t,e,i,o){const s=e.attributeView,n=new Set;B(e,(l,r)=>{for(let u=0;u<r.length;u++){const m=r[u].entityTexel;if(n.has(m))continue;if(l.key.level!==o){s.setLabelMinZoom(m,H),n.add(m);continue}if(!oe(r[u],i)){s.setLabelMinZoom(m,H),n.add(m);continue}if(s.getLabelMinZoom(m)!==0){n.add(m);continue}let v=!1,g=!0;const p=u;let _=u;for(;_<r.length;_++){const M=r[_];if(M.entityTexel!==m)break;if(!v)switch(t.hasCollision(M)){case it:break;case st:v=!0,g=!1;break;case bt:g=!1}}if(!v)for(let M=p;M<_;M++)t.insertMetrics(r[M]);u=_-1,g||(n.add(m),s.setLabelMinZoom(m,v?H:Q))}})}_collideInvisible(t,e){const i=e.attributeView,o=new Set;B(e,(s,n)=>{for(let l=0;l<n.length;l++){const r=n[l].entityTexel;if(o.has(r))continue;if(i.getLabelMinZoom(r)!==pt){o.add(r);continue}let u=!1,m=!0;const v=l;let g=l;for(;g<n.length;g++){const p=n[g];if(p.entityTexel!==r)break;if(!u)switch(t.hasCollision(p)){case it:break;case st:u=!0,m=!1;break;case bt:m=!1}}if(!u)for(let p=v;p<g;p++)t.insertMetrics(n[p]);l=g-1,m||(o.add(r),i.setLabelMinZoom(r,u?pt:Q))}})}_transformMetrics(t){for(const{container:e,geometryType:i,vvEvaluators:o}of t)B(e,(s,n)=>{const l=e.attributeView,r=s.transforms.labelMat2d;r[4]=Math.round(r[4]),r[5]=Math.round(r[5]);const u=i==="polyline";for(const m of n){const{entityTexel:v,anchorX:g,anchorY:p}=m;let _=m.referenceBounds?.size??0;const M=o[0];if(M!=null){const C=M(l.getVisualVariableData(v,He.SIZE));_=isNaN(C)||C==null||C===1/0?_:C}const at=Xe+_/2,rt=m.directionX*at,X=m.directionY*at;for(const C of m.bounds){let lt=g,ut=p;if(u){const ht=g+C.x+rt,ct=p+C.y+X;lt=r[0]*ht+r[2]*ct+r[4],ut=r[1]*ht+r[3]*ct+r[5];const Me=lt,Ce=ut;C.transformedX=Math.floor(Me),C.transformedY=Math.floor(Ce)}else{lt=r[0]*g+r[2]*p+r[4],ut=r[1]*g+r[3]*p+r[5];const ht=lt+C.x+rt,ct=ut+C.y+X;C.transformedX=ht,C.transformedY=ct}}}})}}const ci=32;let J=class extends Y{constructor(t){super(t),this._lastUpdate=0,this.collisionEngine=new hi,this.lastUpdateId=-1,this.updateRequested=!1,this.view=null}get updating(){return Yt("esri-2d-log-updating")&&console.log(`Updating LabelManager ${this.updateRequested}:
-> updateRequested: ${this.updateRequested}`),this.updateRequested}update(t){const e=performance.now();e-this._lastUpdate>=ci?(this._lastUpdate=e,this.doUpdate(t)):this.requestUpdate()}viewChange(){this.requestUpdate()}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view?.requestUpdate())}processUpdate(t){this.updateRequested&&(this.updateRequested=!1,this.update(t))}doUpdate(t){const e=this.view;if(e)try{const i=t.state.scale,o=e.featuresTilingScheme.getClosestInfoForScale(i).level;this.collisionEngine.run(e.allLayerViews.items,t,i,o)}catch{}}};c([f()],J.prototype,"updateRequested",void 0),c([f()],J.prototype,"updating",null),c([f()],J.prototype,"view",void 0),J=c([W("esri.views.2d.LabelManager")],J);const gt="esri-zoom-box",_t={container:`${gt}__container`,overlay:`${gt}__overlay`,background:`${gt}__overlay-background`,box:`${gt}__outline`},Rt={zoom:"Shift",counter:"Control"};let tt=class extends Y{constructor(t){super(t),this._container=null,this._overlay=null,this._backgroundShape=null,this._boxShape=null,this._box={x:0,y:0,width:0,height:0},this._rafId=null,this._redraw=this._redraw.bind(this)}destroy(){this.view=null}set view(t){this.removeAllHandles(),this._destroyOverlay(),this._set("view",t),t&&this.addHandles([t.on("drag",[Rt.zoom],e=>this._handleDrag(e,1),ee.INTERNAL),t.on("drag",[Rt.zoom,Rt.counter],e=>this._handleDrag(e,-1),ee.INTERNAL)])}_start(){this._createContainer(),this._createOverlay(),this.navigation.begin()}_update(t,e,i,o){this._box.x=t,this._box.y=e,this._box.width=i,this._box.height=o,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))}_end(t,e,i,o,s){const n=this.view,l=n.toMap(Te(t+.5*i,e+.5*o));let r=Math.max(i/n.width,o/n.height);s===-1&&(r=1/r),this._destroyOverlay(),this.navigation.end(),n.goTo({center:l,scale:n.scale*r},{animationMode:"always",duration:pe()})}_updateBox(t,e,i,o){const s=this._boxShape;s.setAttributeNS(null,"x",""+t),s.setAttributeNS(null,"y",""+e),s.setAttributeNS(null,"width",""+i),s.setAttributeNS(null,"height",""+o),s.setAttributeNS(null,"class",_t.box)}_updateBackground(t,e,i,o){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(t,e,i,o,this.view.width,this.view.height))}_createContainer(){const t=document.createElement("div");t.className=_t.container,this.view.root.appendChild(t),this._container=t}_createOverlay(){const t=this.view.width,e=this.view.height,i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttributeNS(null,"d","M 0 0 L "+t+" 0 L "+t+" "+e+" L 0 "+e+" Z"),i.setAttributeNS(null,"class",_t.background);const o=document.createElementNS("http://www.w3.org/2000/svg","rect"),s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),s.setAttributeNS(null,"class",_t.overlay),s.appendChild(i),s.appendChild(o),this._container.appendChild(s),this._backgroundShape=i,this._boxShape=o,this._overlay=s}_destroyOverlay(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null}_toSVGPath(t,e,i,o,s,n){const l=t+i,r=e+o;return"M 0 0 L "+s+" 0 L "+s+" "+n+" L 0 "+n+" ZM "+t+" "+e+" L "+t+" "+r+" L "+l+" "+r+" L "+l+" "+e+" Z"}_handleDrag(t,e){const i=t.x,o=t.y,s=t.origin.x,n=t.origin.y;let l,r,u,m;switch(i>s?(l=s,u=i-s):(l=i,u=s-i),o>n?(r=n,m=o-n):(r=o,m=n-o),t.action){case"start":this._start();break;case"update":this._update(l,r,u,m);break;case"end":this._end(l,r,u,m,e)}t.stopPropagation()}_redraw(){if(!this._rafId||(this._rafId=null,!this._overlay))return;const{x:t,y:e,width:i,height:o}=this._box;this._updateBox(t,e,i,o),this._updateBackground(t,e,i,o),this._rafId=requestAnimationFrame(this._redraw)}};c([f()],tt.prototype,"navigation",void 0),c([f()],tt.prototype,"view",null),tt=c([W("esri.views.2d.navigation.ZoomBox")],tt);const mi=tt;let L=class{constructor(t){this._gain=t,this.lastValue=void 0,this.filteredDelta=void 0}update(t){if(this.hasLastValue()){const e=this.computeDelta(t);this._updateDelta(e)}this.lastValue=t}reset(){this.lastValue=void 0,this.filteredDelta=void 0}hasLastValue(){return this.lastValue!==void 0}hasFilteredDelta(){return this.filteredDelta!==void 0}computeDelta(t){return this.lastValue===void 0?NaN:t-this.lastValue}_updateDelta(t){this.filteredDelta!==void 0?this.filteredDelta=(1-this._gain)*this.filteredDelta+this._gain*t:this.filteredDelta=t}};class Ht{constructor(t,e,i){this._initialVelocity=t,this._stopVelocity=e,this._friction=i,this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction))}get duration(){return this._duration}isFinished(t){return t>this.duration}get friction(){return this._friction}value(t){return this.valueFromInitialVelocity(this._initialVelocity,t)}valueDelta(t,e){const i=this.value(t);return this.value(t+e)-i}valueFromInitialVelocity(t,e){e=Math.min(e,this.duration);const i=1-this.friction;return t*(i**e-1)/Math.log(i)}}class di extends Ht{constructor(t,e,i,o,s){super(t,e,i),this._sceneVelocity=o,this.direction=s}value(t){return super.valueFromInitialVelocity(this._sceneVelocity,t)}}class pi{constructor(t=300,e=12,i=.84){this._minimumInitialVelocity=t,this._stopVelocity=e,this._friction=i,this.enabled=!0,this._time=new L(.6),this._screen=[new L(.4),new L(.4)],this._scene=[new L(.6),new L(.6),new L(.6)],this._tmpDirection=ue()}add(t,e,i){if(this.enabled){if(this._time.hasLastValue()&&this._time.computeDelta(i)<.015)return;this._screen[0].update(t[0]),this._screen[1].update(t[1]),this._scene[0].update(e[0]),this._scene[1].update(e[1]),this._scene[2].update(e[2]),this._time.update(i)}}reset(){this._screen[0].reset(),this._screen[1].reset(),this._scene[0].reset(),this._scene[1].reset(),this._scene[2].reset(),this._time.reset()}evaluateMomentum(){if(!this.enabled||!this._screen[0].hasFilteredDelta()||!this._time.hasFilteredDelta())return null;const t=this._screen[0].filteredDelta,e=this._screen[1].filteredDelta,i=t==null||e==null?0:Math.sqrt(t*t+e*e),o=this._time.filteredDelta,s=o==null||i==null?0:i/o;return Math.abs(s)<this._minimumInitialVelocity?null:this.createMomentum(s,this._stopVelocity,this._friction)}createMomentum(t,e,i){ii(this._tmpDirection,this._scene[0].filteredDelta??0,this._scene[1].filteredDelta??0,this._scene[2].filteredDelta??0);const o=si(this._tmpDirection);o>0&&ge(this._tmpDirection,this._tmpDirection,1/o);const s=this._time.filteredDelta;return new di(t,e,i,s==null?0:o/s,this._tmpDirection)}}let q=class extends Y{constructor(t){super(t),this.animationTime=0,this.momentumEstimator=new pi(500,6,.92),this.momentum=null,this.tmpMomentum=ue(),this.momentumFinished=!1,this.viewpoint=new kt({targetGeometry:new xt,scale:0,rotation:0}),this._previousDrag=null,he(()=>this.momentumFinished,()=>this.navigation.stop())}begin(t,e){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(e),this._previousDrag=e}update(t,e){this.addToEstimator(e);let i=e.center.x,o=e.center.y;const s=this._previousDrag;i=s?s.center.x-i:-i,o=s?o-s.center.y:o,t.viewpoint=ft(this.viewpoint,t.viewpoint,[i||0,o||0]),this._previousDrag=e}end(t,e){this.addToEstimator(e);const i=t.navigation.effectiveMomentumEnabled;this.momentum=i?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(t),this._previousDrag=null,this.navigation.end()}addToEstimator(t){const e=t.center.x,i=t.center.y,o=Fe(-e,i),s=ke(-e,i,0);this.momentumEstimator.add(o,s,.001*t.timestamp)}onAnimationUpdate(t){this.navigation.animationManager?.animateContinuous(t.viewpoint,(e,i)=>{const{momentum:o,animationTime:s,tmpMomentum:n}=this,l=.001*i;if(!(this.momentumFinished=!o||o.isFinished(s))){const r=o.valueDelta(s,l);ge(n,o.direction,r),ft(e,e,n),t.constraints.constrainByGeometry(e)}this.animationTime+=l})}stopMomentumNavigation(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())}};c([f()],q.prototype,"momentumFinished",void 0),c([f()],q.prototype,"viewpoint",void 0),c([f()],q.prototype,"navigation",void 0),q=c([W("esri.views.2d.navigation.actions.Pan")],q);const gi=q;let we=class{constructor(t=2.5,e=.01,i=.95,o=12){this._minimumInitialVelocity=t,this._stopVelocity=e,this._friction=i,this._maxVelocity=o,this.enabled=!0,this.value=new L(.8),this.time=new L(.3)}add(t,e){if(this.enabled&&e!=null){if(this.time.hasLastValue()){if(this.time.computeDelta(e)<.01)return;if(this.value.hasFilteredDelta()){const i=this.value.computeDelta(t);this.value.filteredDelta*i<0&&this.value.reset()}}this.time.update(e),this.value.update(t)}}reset(){this.value.reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.value.hasFilteredDelta()||!this.time.hasFilteredDelta())return null;let t=this.value.filteredDelta/this.time.filteredDelta;return t=V(t,-this._maxVelocity,this._maxVelocity),Math.abs(t)<this._minimumInitialVelocity?null:this.createMomentum(t,this._stopVelocity,this._friction)}createMomentum(t,e,i){return new Ht(t,e,i)}};class _i extends we{constructor(t=3,e=.01,i=.95,o=12){super(t,e,i,o)}add(t,e){const i=this.value.lastValue;if(i!=null){let o=t-i;for(;o>Math.PI;)o-=2*Math.PI;for(;o<-Math.PI;)o+=2*Math.PI;t=i+o}super.add(t,e)}}class yi extends Ht{constructor(t,e,i){super(t,e,i)}value(t){const e=super.value(t);return Math.exp(e)}valueDelta(t,e){const i=super.value(t),o=super.value(t+e)-i;return Math.exp(o)}}class vi extends we{constructor(t=2.5,e=.01,i=.95,o=12){super(t,e,i,o)}add(t,e){super.add(Math.log(t),e)}createMomentum(t,e,i){return new yi(t,e,i)}}let U=class extends Y{constructor(t){super(t),this._animationTime=0,this._momentumFinished=!1,this._previousAngle=0,this._previousRadius=0,this._previousCenter=null,this._rotationMomentumEstimator=new _i(.6,.15,.95),this._rotationDirection=1,this._startAngle=0,this._startRadius=0,this._updateTimestamp=null,this._zoomDirection=1,this._zoomMomentumEstimator=new vi,this._zoomOnly=null,this.viewpoint=new kt({targetGeometry:new xt,scale:0,rotation:0}),this.zoomMomentum=null,this.rotateMomentum=null,this.addHandles(he(()=>this._momentumFinished,()=>this.navigation.stop()))}begin(t,e){this.navigation.begin(),this._rotationMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._zoomOnly=null,this._previousAngle=this._startAngle=e.angle,this._previousRadius=this._startRadius=e.radius,this._previousCenter=e.center,this._updateTimestamp=null,t.constraints.rotationEnabled&&this.addToRotateEstimator(0,e.timestamp),this.addToZoomEstimator(e,1)}update(t,e){this._updateTimestamp===null&&(this._updateTimestamp=e.timestamp);const i=e.angle,o=e.radius,s=e.center,n=Math.abs(180*(i-this._startAngle)/Math.PI),l=Math.abs(o-this._startRadius),r=this._startRadius/o;if(this._previousRadius&&this._previousCenter){const u=o/this._previousRadius;let m=180*(i-this._previousAngle)/Math.PI;this._rotationDirection=m>=0?1:-1,this._zoomDirection=u>=1?1:-1,t.constraints.rotationEnabled?(this._zoomOnly===null&&e.timestamp-this._updateTimestamp>200&&(this._zoomOnly=l-n>0),this._zoomOnly===null||this._zoomOnly?m=0:this.addToRotateEstimator(i-this._startAngle,e.timestamp)):m=0,this.addToZoomEstimator(e,r),this.navigation.setViewpoint([s.x,s.y],1/u,m,[this._previousCenter.x-s.x,s.y-this._previousCenter.y])}this._previousAngle=i,this._previousRadius=o,this._previousCenter=s}end(t){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(t),this.navigation.end()}addToRotateEstimator(t,e){this._rotationMomentumEstimator.add(t,.001*e)}addToZoomEstimator(t,e){this._zoomMomentumEstimator.add(e,.001*t.timestamp)}canZoomIn(t){const e=t.scale,i=t.constraints.effectiveMaxScale;return i===0||e>i}canZoomOut(t){const e=t.scale,i=t.constraints.effectiveMinScale;return i===0||e<i}onAnimationUpdate(t){this.navigation.animationManager?.animateContinuous(t.viewpoint,(e,i)=>{const o=!this.canZoomIn(t)&&this._zoomDirection>1||!this.canZoomOut(t)&&this._zoomDirection<1,s=!this.rotateMomentum||this.rotateMomentum.isFinished(this._animationTime),n=o||!this.zoomMomentum||this.zoomMomentum.isFinished(this._animationTime),l=.001*i;if(this._momentumFinished=s&&n,!this._momentumFinished){const r=this.rotateMomentum?Math.abs(this.rotateMomentum.valueDelta(this._animationTime,l))*this._rotationDirection*180/Math.PI:0;let u=this.zoomMomentum?Math.abs(this.zoomMomentum.valueDelta(this._animationTime,l)):1;const m=nt(),v=nt();if(this._previousCenter){qt(m,this._previousCenter.x,this._previousCenter.y),Qe(v,t.size,t.padding),ni(m,m,v);const{constraints:g,scale:p}=t,_=p*u;u<1&&!g.canZoomInTo(_)?(u=p/g.effectiveMaxScale,this.zoomMomentum=null,this.rotateMomentum=null):u>1&&!g.canZoomOutTo(_)&&(u=p/g.effectiveMinScale,this.zoomMomentum=null,this.rotateMomentum=null),Je(e,t.viewpoint,u,r,m,t.size),t.constraints.constrainByGeometry(e)}}this._animationTime+=l})}stopMomentumNavigation(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())}};c([f()],U.prototype,"_momentumFinished",void 0),c([f()],U.prototype,"viewpoint",void 0),c([f()],U.prototype,"navigation",void 0),U=c([W("esri.views.2d.navigation.actions.Pinch")],U);const wi=U,It=nt(),ae=nt();let et=class extends Y{constructor(t){super(t),this._previousCenter=nt(),this.viewpoint=new kt({targetGeometry:new xt,scale:0,rotation:0})}begin(t,e){this.navigation.begin(),qt(this._previousCenter,e.center.x,e.center.y)}update(t,e){const{state:{size:i,padding:o}}=t;qt(It,e.center.x,e.center.y),Ke(ae,i,o),t.viewpoint=Ot(this.viewpoint,t.state.paddedViewState.viewpoint,ti(ae,this._previousCenter,It)),oi(this._previousCenter,It)}end(){this.navigation.end()}};c([f()],et.prototype,"viewpoint",void 0),c([f()],et.prototype,"navigation",void 0),et=c([W("esri.views.2d.navigation.actions.Rotate")],et);const fi=et,O=10,re=1,Pt=new kt({targetGeometry:new xt}),At=[0,0],le=250;let E=class extends Y{constructor(a){super(a),this._endTimer=null,this._lastEventTimestamp=null,this.animationManager=null,this.interacting=!1}initialize(){this.pan=new gi({navigation:this}),this.rotate=new fi({navigation:this}),this.pinch=new wi({navigation:this}),this.zoomBox=new mi({view:this.view,navigation:this})}destroy(){this.pan=mt(this.pan),this.rotate=mt(this.rotate),this.pinch=mt(this.pinch),this.zoomBox=mt(this.zoomBox),this.animationManager=null}begin(){this.stop(),this._set("interacting",!0)}end(){this._lastEventTimestamp=performance.now(),this._startTimer(le)}async zoom(a,t=this._getDefaultAnchor()){if(this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return a<1?this.zoomIn(t):this.zoomOut(t);this.setViewpoint(t,a,0,[0,0])}async zoomIn(a){const t=this.view,e=t.constraints.snapToNextScale(t.scale);return this._zoomToScale(e,a)}async zoomOut(a){const t=this.view,e=t.constraints.snapToPreviousScale(t.scale);return this._zoomToScale(e,a)}setViewpoint(a,t,e,i){this.begin(),this.view.stateManager.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,a,t,e,i),this.end()}setViewpointImmediate(a,t=0,e=[0,0],i=this._getDefaultAnchor()){this.view.stateManager.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,i,a,t,e)}continuousRotateClockwise(){const a=this.view.viewpoint;this.animationManager?.animateContinuous(a,t=>{Ot(t,t,-re)})}continuousRotateCounterclockwise(){const a=this.view.viewpoint;this.animationManager?.animateContinuous(a,t=>{Ot(t,t,re)})}resetRotation(){this.view.constraints.rotationEnabled&&(this.view.rotation=0)}continuousPanLeft(){this._continuousPan([-O,0])}continuousPanRight(){this._continuousPan([O,0])}continuousPanUp(){this._continuousPan([0,O])}continuousPanDown(){this._continuousPan([0,-O])}continuousPanVector({x:a,y:t}){this._continuousPan([a*O,t*O])}stop(){this.pan.stopMomentumNavigation(),this.animationManager?.stop(),this.end(),this._endTimer!==null&&(clearTimeout(this._endTimer),this._endTimer=null,this._set("interacting",!1))}_continuousPan(a){const t=this.view.viewpoint;this.animationManager?.animateContinuous(t,e=>{ft(e,e,a),this.view.constraints.constrainByGeometry(e)})}_startTimer(a){return this._endTimer!==null||(this._endTimer=setTimeout(()=>{this._endTimer=null;const t=performance.now()-(this._lastEventTimestamp??0);t<le?this._endTimer=this._startTimer(t):this._set("interacting",!1)},a)),this._endTimer}_getDefaultAnchor(){const{size:a,padding:{left:t,right:e,top:i,bottom:o}}=this.view;return At[0]=.5*(a[0]-e+t),At[1]=.5*(a[1]-o+i),At}async _zoomToScale(a,t=this._getDefaultAnchor()){const{view:e}=this,{constraints:i,scale:o,viewpoint:s,size:n,padding:l}=e,r=i.canZoomInTo(a),u=i.canZoomOutTo(a);if(!(a<o&&!r||a>o&&!u))return ie(Pt,s,a/o,0,t,n,l),i.constrainByGeometry(Pt),e.goTo(Pt,{animate:!0,animationMode:"always",duration:pe(),pickClosestTarget:!1})}_scaleRotateTranslateViewpoint(a,t,e,i,o){const{view:s}=this,{size:n,padding:l,constraints:r,scale:u,viewpoint:m}=s,v=u*e,g=r.canZoomInTo(v),p=r.canZoomOutTo(v);return(e<1&&!g||e>1&&!p)&&(e=1),ft(m,m,o),ie(a,m,e,i,t,n,l),r.constrainByGeometry(a)}};c([f()],E.prototype,"animationManager",void 0),c([f({type:Boolean,readOnly:!0})],E.prototype,"interacting",void 0),c([f()],E.prototype,"pan",void 0),c([f()],E.prototype,"pinch",void 0),c([f()],E.prototype,"rotate",void 0),c([f()],E.prototype,"view",void 0),c([f()],E.prototype,"zoomBox",void 0),E=c([W("esri.views.2d.navigation.MapViewNavigation")],E);const Qi=E;class fe extends Ct{}c([Mt(0,k)],fe.prototype,"position",void 0);class bi extends Tt{}class z extends ot{}c([w(G)],z.prototype,"readbackTexture",void 0),c([w(G)],z.prototype,"maskTexture",void 0),c([w(G)],z.prototype,"overlayTexture",void 0),c([w(y)],z.prototype,"background",void 0),c([w(y)],z.prototype,"drawPos",void 0),c([w(h)],z.prototype,"maskEnabled",void 0),c([w(h)],z.prototype,"overlayEnabled",void 0);class Zt extends $t{vertex(t){const e=t.position,i=t.position.subtract(new k(.5)).multiply(this.config.drawPos.zw),o=this.config.drawPos.xy.add(i);return{glPosition:new y(o,0,1),texCoord:e}}fragment(t){let e=j(this.config.readbackTexture,xi(t.texCoord));e=e.add(new h(1).subtract(e.a)).multiply(this.config.background);const i=$(S(this.config.maskEnabled,new h(1)),j(this.config.maskTexture,t.texCoord).a,new h(1));e=e.multiply(i);const o=$(S(this.config.overlayEnabled,new h(1)),j(this.config.overlayTexture,t.texCoord),new y(0)),s=new Ft;return s.glFragColor=o.add(new h(1).subtract(o.a).multiply(e)),s}}function xi(a){const t=a.multiply(new k(2)).subtract(1);return $(S(t.x,new h(0)).and(S(t.y,new h(0))),new k(.5),()=>{const e=Le(t.y,t.x),i=Re(Pe(t),new h(Ie)),o=new k(Ae(e),Ze(e));return i.multiply(o).multiply(new k(.5)).add(new h(.5))})}c([w(z)],Zt.prototype,"config",void 0),c([I(0,P(fe))],Zt.prototype,"vertex",null),c([I(0,P(bi))],Zt.prototype,"fragment",null);class be extends Ct{}c([Mt(0,k)],be.prototype,"position",void 0);class Mi extends Tt{}class xe extends ot{}c([w(Ne)],xe.prototype,"dvs",void 0);class N extends ot{}c([w(h)],N.prototype,"halfWidth",void 0),c([w(h)],N.prototype,"aaWidth",void 0),c([w(h)],N.prototype,"pxPerCell",void 0),c([w(y)],N.prototype,"minorLineColor",void 0),c([w(y)],N.prototype,"majorLineColor",void 0),c([w(Bt)],N.prototype,"majorLineInterval",void 0);class yt extends $t{vertex(t){const e=t.position.multiply(2).subtract(1);return{gridPos:this.transform.dvs.multiply(new b(e,1)).xy,glPosition:new y(e,0,1)}}fragment(t){const e=ce(t.gridPos),i=Be(e),o=F(i.x,new h(1).subtract(i.x)),s=F(i.y,new h(1).subtract(i.y)),n=new k(o,s).multiply(this.config.pxPerCell).subtract(this.config.halfWidth),l=F(n.x,n.y),r=new h(1).subtract(Oe(new h(0),this.config.aaWidth,l)),u=new Bt(Kt(e.x)),m=new Bt(Kt(e.y)),v=new h(te(u,this.config.majorLineInterval)),g=new h(te(m,this.config.majorLineInterval)),p=$(de(n.x,n.y),v,g),_=Wt(qe(A(n.x,this.config.aaWidth),A(n.y,this.config.aaWidth)),new h(.5)),M=F(v,g),at=$(_,M,p),rt=Ue(this.config.majorLineColor,this.config.minorLineColor,F(at,new h(1))),X=new Ft;return X.glFragColor=rt.multiply(r),X}}c([w(xe)],yt.prototype,"transform",void 0),c([w(N)],yt.prototype,"config",void 0),c([I(0,P(be))],yt.prototype,"vertex",null),c([I(0,P(Mi))],yt.prototype,"fragment",null);export{dt as D,Zt as E,yt as S,Ni as a,J as b,Ri as e,Bi as n,Ii as r,Zi as t,Lt as v,Qi as y};