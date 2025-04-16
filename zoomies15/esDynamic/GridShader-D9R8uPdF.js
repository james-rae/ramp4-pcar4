import{d as L}from"./WGLContainer-CfYwhIfs.js";import{k as c,fV as R,a$ as Vt,bP as Te,aP as z,aD as O,o as f,A as q,eU as Fe,aA as Jt,bv as pt,aF as Qt,iJ as ke,cp as Se,C as gt}from"./main-yxqK2SuK.js";import{h as _t,g as v,K as De,m as P,I as yt,C as F,P as J,S as U,j as h,b as vt,H as y,z as Ee,l as $,x as C,U as k,y as N,G as b,D as d,Y as Kt,A as zt,B as S,E as I,F as te,J as ee,L as Ve,M as ie,N as ze,O as Lt,v as wt,w as ft,c as Le,Q as se,V as Re,R as Pe,T as Ie,X as Ae,_ as Ze,$ as Ne,a as Be,a0 as Rt,a1 as Oe,a2 as qe,a3 as ne,a4 as oe,a5 as Ue,a6 as $e}from"./UpdateTracking2D-Dvjb-sXn.js";import{t as Ge}from"./CircularArray-DaQg3PQl.js";import{a as je}from"./testSVGPremultipliedAlpha-Dn3GeiHf.js";import{M as Xe,N as Ye,L as He}from"./definitions-DJSdSb77.js";import{L as We,_ as ae,d as re,f as bt,k as xt,g as Je,G as Qe,$ as Ke,j as Pt,p as ti,n as le}from"./MapView-viZl6GJi.js";import{t as ei}from"./AttributeStore-C_nSOFbW.js";import{o as ii,r as si,g as ue}from"./vec32-CSgqTdIu.js";import{o as It,u as ni,r as oi}from"./vec2-tHZ6OaOy.js";import{n as Q}from"./vec2f64-CeODonrJ.js";const ai={shaders:{vertexShader:L("bitBlit/bitBlit.vert"),fragmentShader:L("bitBlit/bitBlit.frag")},attributes:new Map([["a_pos",0],["a_tex",1]])},ri={shaders:{vertexShader:L("stencil/stencil.vert"),fragmentShader:L("stencil/stencil.frag")},attributes:new Map([["a_pos",0]])};class he extends yt{}c([_t(0,F)],he.prototype,"position",void 0);class li extends wt{}class K extends J{}c([v(U)],K.prototype,"layerTexture",void 0),c([v(U)],K.prototype,"backbufferTexture",void 0),c([v(h)],K.prototype,"opacity",void 0),c([v(h)],K.prototype,"inFadeOpacity",void 0);class tt extends vt{vertex(e){return{uv:e.position,glPosition:new y(Ee(e.position),0,1)}}fragment(e){const i=new ft,s=$(this.config.layerTexture,e.uv),a=$(this.config.backbufferTexture,e.uv),o=C(k(s.a,new h(0)),s.rgb,s.rgb.divide(s.a)),n=C(k(a.a,new h(0)),a.rgb,a.rgb.divide(a.a)),l=this.config.opacity.multiply(s.a),r=a.a;switch(this.blendMode){case"destination-over":i.glFragColor=new y(o.multiply(l).multiply(d(r)).add(n.multiply(r)),l.add(r).subtract(l.multiply(r)));break;case"source-in":{const u=new y(o.multiply(l).multiply(r),l.multiply(r)),m=new y(n.multiply(r),r).multiply(d(this.config.opacity)).multiply(this.config.inFadeOpacity);i.glFragColor=u.add(m)}break;case"destination-in":{const u=new y(n.multiply(r).multiply(l),r.multiply(l)),m=new y(n.multiply(r),r).multiply(new y(d(this.config.opacity).multiply(this.config.inFadeOpacity)));i.glFragColor=u.add(m)}break;case"source-out":i.glFragColor=new y(o.multiply(l).multiply(d(r)),l.multiply(d(r)));break;case"destination-out":i.glFragColor=new y(n.multiply(r).multiply(d(l)),r.multiply(d(l)));break;case"source-atop":i.glFragColor=new y(o.multiply(l).multiply(r).add(n.multiply(r.multiply(d(l)))),r);break;case"destination-atop":i.glFragColor=new y(o.multiply(l.multiply(d(r))).add(n.multiply(r).multiply(l)),l);break;case"xor":i.glFragColor=new y(o.multiply(l.multiply(d(r))).add(n.multiply(r.multiply(d(l)))),l.multiply(d(r)).add(r.multiply(d(l))));break;case"multiply":i.glFragColor=new y(o.multiply(l).multiply(n.multiply(r)).add(o.multiply(l).multiply(d(r))).add(n.multiply(r).multiply(d(l))),l.add(r.multiply(d(l))));break;case"screen":i.glFragColor=new y(o.add(n).subtract(o.multiply(n)).multiply(l.multiply(r)).add(o.multiply(l).multiply(d(r))).add(n.multiply(r).multiply(d(l))),l.add(r.multiply(d(l))));break;case"overlay":{const u=new b(At(n.r,o.r),At(n.g,o.g),At(n.b,o.b));i.glFragColor=x(u,o,n,l,r)}break;case"darken":{const u=S(o,n);i.glFragColor=x(u,o,n,l,r)}break;case"lighter":i.glFragColor=new y(o.multiply(l).add(n.multiply(r)),l.add(r));break;case"lighten":{const u=zt(o,n);i.glFragColor=x(u,o,n,l,r)}break;case"color-dodge":{const u=N(new b(Mt(n.r,o.r),Mt(n.g,o.g),Mt(n.b,o.b)),new b(0),new b(1));i.glFragColor=x(u,o,n,l,r)}break;case"color-burn":{const u=new b(Ct(n.r,o.r),Ct(n.g,o.g),Ct(n.b,o.b));i.glFragColor=x(u,o,n,l,r)}break;case"hard-light":{const u=new b(Zt(n.r,o.r),Zt(n.g,o.g),Zt(n.b,o.b));i.glFragColor=x(u,o,n,l,r)}break;case"soft-light":{const u=new b(Nt(n.r,o.r),Nt(n.g,o.g),Nt(n.b,o.b));i.glFragColor=x(u,o,n,l,r)}break;case"difference":{const u=Kt(n.subtract(o));i.glFragColor=x(u,o,n,l,r)}break;case"exclusion":{const u=o.add(n).subtract(new h(2).multiply(o).multiply(n));i.glFragColor=x(u,o,n,l,r)}break;case"invert":i.glFragColor=new y(new b(1).subtract(n).multiply(l).multiply(r).add(n.multiply(r).multiply(d(l))),r);break;case"vivid-light":{const u=new b(N(Bt(n.r,o.r),new h(0),new h(1)),N(Bt(n.g,o.g),new h(0),new h(1)),N(Bt(n.b,o.b),new h(0),new h(1)));i.glFragColor=x(u,o,n,l,r)}break;case"hue":{const u=de(o,n,n);i.glFragColor=x(u,o,n,l,r)}break;case"saturation":{const u=de(n,o,n);i.glFragColor=x(u,o,n,l,r)}break;case"color":{const u=Ut(o,n);i.glFragColor=x(u,o,n,l,r)}break;case"luminosity":{const u=Ut(n,o);i.glFragColor=x(u,o,n,l,r)}break;case"plus":i.glFragColor=N(new y(s.r.add(n.r),s.g.add(n.g),s.b.add(n.b),l.add(r)),new y(0),new y(1));break;case"minus":i.glFragColor=new y(N(new b(n.r.subtract(s.r),n.g.subtract(s.g),n.b.subtract(s.b)),new b(0),new b(1)),r.multiply(l));break;case"average":{const u=n.add(o).divide(2);i.glFragColor=x(u,o,n,l,r)}break;case"reflect":{const u=N(new b($t(n.r,o.r),$t(n.g,o.g),$t(n.b,o.b)),new b(0),new b(1));i.glFragColor=x(u,o,n,l,r)}break;default:i.glFragColor=s.multiply(this.config.opacity)}return i}}function x(t,e,i,s,a){return new y(t.multiply(s).multiply(a).add(e.multiply(s).multiply(d(a))).add(i.multiply(a).multiply(d(s))),s.add(a.multiply(d(s))))}function At(t,e){return new h(1).subtract(I(new h(.5),e)).multiply(d(new h(2).multiply(d(e).multiply(d(t))))).add(I(new h(.5),e).multiply(new h(2).multiply(e).multiply(t)))}function Mt(t,e){return C(k(t,new h(0)),new h(0),C(k(e,new h(1)),new h(1),S(new h(1),t.divide(new h(1).subtract(e)))))}function Ct(t,e){return C(k(t,new h(1)),new h(1),C(k(e,new h(0)),new h(0),d(S(new h(1),d(t).divide(e)))))}function Zt(t,e){return new h(1).subtract(I(new h(.5),e)).multiply(new h(2).multiply(e).multiply(t)).add(I(new h(.5),e).multiply(d(new h(2).multiply(d(e).multiply(d(t))))))}function Nt(t,e){return te([ie(e,new h(.5)),()=>{const i=new h(2).multiply(e),s=d(i),a=d(t);return t.subtract(s.multiply(t).multiply(a))}],[ie(t,new h(.25)),()=>{const i=new h(2).multiply(e),s=ee(i).multiply(t),a=new h(16).multiply(t).subtract(new h(12)).multiply(t).add(new h(3));return t.add(s.multiply(a))}],[!0,()=>{const i=new h(2).multiply(e),s=ee(i),a=Ve(t).subtract(t);return t.add(s.multiply(a))}])}function Bt(t,e){const i=d(I(new h(.5),e)).multiply(Ct(t,new h(2).multiply(e))),s=I(new h(.5),e).multiply(Mt(t,new h(2).multiply(ze(e,.5))));return i.add(s)}function Ot(t){return S(S(t.r,t.g),t.b)}function ce(t){return zt(zt(t.r,t.g),t.b)}function qt(t){return Le(t,new b(.3,.59,.11))}function me(t){return ce(t).subtract(Ot(t))}function ui(t){const e=qt(t),i=Ot(t),s=ce(t);return te([se(i,new h(0)),()=>{const a=t.subtract(e).multiply(e),o=e.subtract(i);return e.add(a.divide(o))}],[Lt(s,new h(1)),()=>{const a=t.subtract(e),o=d(e),n=a.multiply(o),l=s.subtract(e);return e.add(n.divide(l))}],[!0,t])}function Ut(t,e){const i=qt(t),s=qt(e).subtract(i);return ui(t.add(new b(s)))}function de(t,e,i){const s=Ot(t),a=me(t),o=me(e);return Ut(C(Lt(a,new h(0)),()=>t.subtract(s).multiply(o).divide(a),new b(0)),i)}function $t(t,e){return C(k(e,new h(1)),e,()=>{const i=d(e),s=t.multiply(t).divide(i);return S(s,new h(1))})}c([De],tt.prototype,"blendMode",void 0),c([v(K)],tt.prototype,"config",void 0),c([R(0,P(he))],tt.prototype,"vertex",null),c([R(0,P(li))],tt.prototype,"fragment",null);class pe extends yt{}c([_t(0,F)],pe.prototype,"position",void 0);class hi extends wt{}let Gt=class extends J{};c([v(U)],Gt.prototype,"layerTexture",void 0),c([v(h)],Gt.prototype,"opacity",void 0);let Tt=class extends vt{vertex(t){return{uv:t.position,glPosition:new y(t.position.subtract(new F(.5)).multiply(2),0,1)}}fragment(t){const e=new ft;return e.glFragColor=$(this.config.layerTexture,t.uv).multiply(this.config.opacity),e}};c([v(Gt)],Tt.prototype,"config",void 0),c([R(0,P(pe))],Tt.prototype,"vertex",null),c([R(0,P(hi))],Tt.prototype,"fragment",null);const ci={shaders:{vertexShader:L("highlight/textured.vert"),fragmentShader:L("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},mi={shaders:{vertexShader:L("highlight/textured.vert"),fragmentShader:L("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},D=!!Vt("esri-2d-profiler");let di=class{constructor(t,e){if(this._events=new Te,this._entries=new Map,this._timings=new Ge(10),this._currentContainer=null,this._currentPass=null,this._currentBrush=null,this._currentSummary=null,!D)return;this._ext=je(t.gl,{}),this._debugOutput=e;const i=t.gl;if(!this.enableCommandLogging)return;let s;for(s in i)if(typeof i[s]=="function"){const a=i[s],o=s.includes("draw");i[s]=(...n)=>(this._events.emit("command",{container:this._currentContainer,pass:this._currentPass,brush:this._currentBrush,method:s,args:n,isDrawCommand:o}),this._currentSummary&&(this._currentSummary.commands++,o&&this._currentSummary.drawCommands++),a.apply(i,n))}}get enableCommandLogging(){return!(typeof D=="object"&&D.disableCommands)}recordContainerStart(t){D&&(this._currentContainer=t)}recordContainerEnd(){D&&(this._currentContainer=null)}recordPassStart(t){D&&(this._currentPass=t,this._initSummary())}recordPassEnd(){D&&(this._currentPass=null,this._emitSummary())}recordBrushStart(t){D&&(this._currentBrush=t)}recordBrushEnd(){D&&(this._currentBrush=null)}recordStart(t){if(D&&this._ext!=null){if(this._entries.has(t)){const i=this._entries.get(t),s=this._ext.resultAvailable(i.query),a=this._ext.disjoint();if(s&&!a){const o=this._ext.getResult(i.query)/1e6;let n=0;if(this._timings.enqueue(o)!=null){const u=this._timings.entries,m=u.length;let _=0;for(const p of u)_+=p;n=_/m}const l=o.toFixed(2),r=n?n.toFixed(2):"--";this.enableCommandLogging?(console.groupCollapsed(`Frame report for ${t}, ${l} ms (${r} last 10 avg)
${i.commandsLen} Commands (${i.drawCommands} draw)`),console.log("RenderPass breakdown: "),console.table(i.summaries),console.log("Commands: ",i.commands),console.groupEnd()):console.log(`Frame report for ${t}, ${l} ms (${r} last 10 avg)`),this._debugOutput.innerHTML=`${l} (${r})`}for(const o of i.handles)o.remove();this._ext.deleteQuery(i.query),this._entries.delete(t)}const e={name:t,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]};this.enableCommandLogging&&(e.handles.push(this._events.on("command",i=>{e.commandsLen++,e.commands.push(i),i.isDrawCommand&&e.drawCommands++})),e.handles.push(this._events.on("summary",i=>{e.summaries.push(i)}))),this._ext.beginTimeElapsed(e.query),this._entries.set(t,e)}}recordEnd(t){D&&this._ext!=null&&this._entries.has(t)&&this._ext.endTimeElapsed()}_initSummary(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})}_emitSummary(){this.enableCommandLogging&&this._currentSummary&&this._events.emit("summary",this._currentSummary)}};const E=1,Ft=0,et=1,it=2;let pi=class{constructor(t,e,i){this._width=t*i,this._height=e*i,this._pixelRatio=i;const s=Math.ceil(this._width/E),a=Math.ceil(this._height/E);this._cols=s,this._rows=a,this._cells=ei.create(s*a)}insertMetrics(t){this._markMetrics(t)}hasCollision(t){let e=0;for(const{transformedX:i,transformedY:s,width:a,height:o}of t.bounds){const n=a*this._pixelRatio,l=o*this._pixelRatio,r=i*this._pixelRatio,u=s*this._pixelRatio;switch(this._collide(r,u,n,l)){case it:return it;case et:e++}}return e===t.bounds.length?et:Ft}getCellId(t,e){return t+e*this._cols}has(t){return this._cells.has(t)}hasRange(t,e){return this._cells.hasRange(t,e)}set(t){this._cells.set(t)}setRange(t,e){this._cells.setRange(t,e)}_collide(t,e,i,s){const a=t-i/2,o=e-s/2,n=a+i,l=o+s;if(n<0||l<0||a>this._width||o>this._height)return et;const r=z(Math.floor(a/E),0,this._cols),u=z(Math.floor(o/E),0,this._rows),m=z(Math.ceil(n/E),0,this._cols),_=z(Math.ceil(l/E),0,this._rows);for(let p=u;p<=_;p++)for(let g=r;g<=m;g++){const w=this.getCellId(g,p);if(this.has(w))return it}return Ft}_mark(t,e,i,s){const a=t-i/2,o=e-s/2,n=a+i,l=o+s,r=z(Math.floor(a/E),0,this._cols),u=z(Math.floor(o/E),0,this._rows),m=z(Math.ceil(n/E),0,this._cols),_=z(Math.ceil(l/E),0,this._rows);for(let p=u;p<=_;p++)for(let g=r;g<=m;g++){const w=this.getCellId(g,p);this.set(w)}return!1}_markMetrics(t){for(const{transformedX:e,transformedY:i,width:s,height:a}of t.bounds){const o=s*this._pixelRatio,n=a*this._pixelRatio,l=e*this._pixelRatio,r=i*this._pixelRatio;this._mark(l,r,o,n)}}};const st=254,kt=255,nt=0;function G(t,e){const i=t.children.slice();i.sort((s,a)=>s.tileAge-a.tileAge),i.forEach(s=>{s.labelMetrics!=null&&s.isReady&&e(s,s.labelMetrics)})}function ge(t,e){return(!t.minScale||t.minScale>=e)&&(!t.maxScale||t.maxScale<=e)}class gi{run(e,i,s,a){const o=[];for(let n=e.length-1;n>=0;n--){const l=e[n];l.labelingCollisionInfos?.length&&o.push(...l.labelingCollisionInfos)}Vt("esri-2d-update-debug")&&o.length&&console.debug("CollisionEngine.run"),this._transformMetrics(o),this._runCollision(o,i,s,a);for(const n of o)n.container.requestRender()}_runCollision(e,i,s,a){const[o,n]=i.state.size,l=new pi(o,n,i.pixelRatio);for(const{container:r,deconflictionEnabled:u,visible:m}of e){const _=r.attributeView;u?m?(this._prepare(r),this._collideVisible(l,r,s,a),this._collideInvisible(l,r)):G(r,(p,g)=>{for(const w of g)_.setLabelMinZoom(w.entityTexel,kt)}):G(r,(p,g)=>{for(const w of g)ge(w,s)?(_.setLabelMinZoom(w.entityTexel,nt),m&&l.insertMetrics(w)):_.setLabelMinZoom(w.entityTexel,st)})}}_isFiltered(e,i,s){const a=i.getFilterFlags(e),o=!s.hasFilter||!!(a&Xe),n=s.featureEffect==null||s.featureEffect.excludedLabelsVisible||!!(a&Ye);return!(o&&n)}_prepare(e){const i=e.attributeView,s=new Set;G(e,(a,o)=>{for(const n of o){const l=n.entityTexel;if(!s.has(l)){if(s.add(l),this._isFiltered(l,i,e.layerView)){i.setLabelMinZoom(l,st);continue}i.getLabelMinZoom(l)!==nt?i.setLabelMinZoom(l,kt):i.setLabelMinZoom(l,nt)}}})}_collideVisible(e,i,s,a){const o=i.attributeView,n=new Set;G(i,(l,r)=>{for(let u=0;u<r.length;u++){const m=r[u].entityTexel;if(n.has(m))continue;if(l.key.level!==a){o.setLabelMinZoom(m,st),n.add(m);continue}if(!ge(r[u],s)){o.setLabelMinZoom(m,st),n.add(m);continue}if(o.getLabelMinZoom(m)!==0){n.add(m);continue}let _=!1,p=!0;const g=u;let w=u;for(;w<r.length;w++){const T=r[w];if(T.entityTexel!==m)break;if(!_)switch(e.hasCollision(T)){case et:break;case it:_=!0,p=!1;break;case Ft:p=!1}}if(!_)for(let T=g;T<w;T++)e.insertMetrics(r[T]);u=w-1,p||(n.add(m),o.setLabelMinZoom(m,_?st:nt))}})}_collideInvisible(e,i){const s=i.attributeView,a=new Set;G(i,(o,n)=>{for(let l=0;l<n.length;l++){const r=n[l].entityTexel;if(a.has(r))continue;if(s.getLabelMinZoom(r)!==kt){a.add(r);continue}let u=!1,m=!0;const _=l;let p=l;for(;p<n.length;p++){const g=n[p];if(g.entityTexel!==r)break;if(!u)switch(e.hasCollision(g)){case et:break;case it:u=!0,m=!1;break;case Ft:m=!1}}if(!u)for(let g=_;g<p;g++)e.insertMetrics(n[g]);l=p-1,m||(a.add(r),s.setLabelMinZoom(r,u?kt:nt))}})}_transformMetrics(e){for(const{container:i,geometryType:s,vvEvaluators:a}of e)G(i,(o,n)=>{const l=i.attributeView,r=o.transforms.labelMat2d;r[4]=Math.round(r[4]),r[5]=Math.round(r[5]);const u=s==="polyline";for(const m of n){const{entityTexel:_,anchorX:p,anchorY:g}=m;let w=m.referenceBounds?.size??0;const T=a[0];if(T!=null){const M=T(l.getVisualVariableData(_,We.SIZE));w=isNaN(M)||M==null||M===1/0?w:M}const lt=He+w/2,ut=m.directionX*lt,W=m.directionY*lt;for(const M of m.bounds){let ht=p,ct=g;if(u){const mt=p+M.x+ut,dt=g+M.y+W;ht=r[0]*mt+r[2]*dt+r[4],ct=r[1]*mt+r[3]*dt+r[5];const Me=ht,Ce=ct;M.transformedX=Math.floor(Me),M.transformedY=Math.floor(Ce)}else{ht=r[0]*p+r[2]*g+r[4],ct=r[1]*p+r[3]*g+r[5];const mt=ht+M.x+ut,dt=ct+M.y+W;M.transformedX=mt,M.transformedY=dt}}}})}}const _i=32;let j=class extends O{constructor(t){super(t),this._lastUpdate=0,this.collisionEngine=new gi,this.lastUpdateId=-1,this.updateRequested=!1,this.view=null}get updating(){return Vt("esri-2d-log-updating")&&console.log(`Updating LabelManager ${this.updateRequested}:
-> updateRequested: ${this.updateRequested}`),this.updateRequested}update(t){const e=performance.now();e-this._lastUpdate>=_i?(this._lastUpdate=e,this.doUpdate(t)):this.requestUpdate()}viewChange(){this.requestUpdate()}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view?.requestUpdate())}processUpdate(t){this.updateRequested&&(this.updateRequested=!1,this.update(t))}doUpdate(t){const e=this.view;if(e)try{const i=t.state.scale,s=e.featuresTilingScheme.getClosestInfoForScale(i).level;this.collisionEngine.run(e.allLayerViews.items,t,i,s)}catch{}}};c([f()],j.prototype,"updateRequested",void 0),c([f()],j.prototype,"updating",null),c([f()],j.prototype,"view",void 0),j=c([q("esri.views.2d.LabelManager")],j);const St="esri-zoom-box",Dt={container:`${St}__container`,overlay:`${St}__overlay`,background:`${St}__overlay-background`,box:`${St}__outline`},jt={zoom:"Shift",counter:"Control"};let ot=class extends O{constructor(t){super(t),this._container=null,this._overlay=null,this._backgroundShape=null,this._boxShape=null,this._box={x:0,y:0,width:0,height:0},this._rafId=null,this._redraw=this._redraw.bind(this)}destroy(){this.view=null}set view(t){this.removeAllHandles(),this._destroyOverlay(),this._set("view",t),t&&this.addHandles([t.on("drag",[jt.zoom],e=>this._handleDrag(e,1),ae.INTERNAL),t.on("drag",[jt.zoom,jt.counter],e=>this._handleDrag(e,-1),ae.INTERNAL)])}_start(){this._createContainer(),this._createOverlay(),this.navigation.begin()}_update(t,e,i,s){this._box.x=t,this._box.y=e,this._box.width=i,this._box.height=s,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))}_end(t,e,i,s,a){const o=this.view,n=o.toMap(Fe(t+.5*i,e+.5*s));let l=Math.max(i/o.width,s/o.height);a===-1&&(l=1/l),this._destroyOverlay(),this.navigation.end(),o.goTo({center:n,scale:o.scale*l},{animationMode:"always",duration:re()})}_updateBox(t,e,i,s){const a=this._boxShape;a.setAttributeNS(null,"x",""+t),a.setAttributeNS(null,"y",""+e),a.setAttributeNS(null,"width",""+i),a.setAttributeNS(null,"height",""+s),a.setAttributeNS(null,"class",Dt.box)}_updateBackground(t,e,i,s){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(t,e,i,s,this.view.width,this.view.height))}_createContainer(){const t=document.createElement("div");t.className=Dt.container,this.view.root.appendChild(t),this._container=t}_createOverlay(){const t=this.view.width,e=this.view.height,i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttributeNS(null,"d","M 0 0 L "+t+" 0 L "+t+" "+e+" L 0 "+e+" Z"),i.setAttributeNS(null,"class",Dt.background);const s=document.createElementNS("http://www.w3.org/2000/svg","rect"),a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),a.setAttributeNS(null,"class",Dt.overlay),a.appendChild(i),a.appendChild(s),this._container.appendChild(a),this._backgroundShape=i,this._boxShape=s,this._overlay=a}_destroyOverlay(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null}_toSVGPath(t,e,i,s,a,o){const n=t+i,l=e+s;return"M 0 0 L "+a+" 0 L "+a+" "+o+" L 0 "+o+" ZM "+t+" "+e+" L "+t+" "+l+" L "+n+" "+l+" L "+n+" "+e+" Z"}_handleDrag(t,e){const i=t.x,s=t.y,a=t.origin.x,o=t.origin.y;let n,l,r,u;switch(i>a?(n=a,r=i-a):(n=i,r=a-i),s>o?(l=o,u=s-o):(l=s,u=o-s),t.action){case"start":this._start();break;case"update":this._update(n,l,r,u);break;case"end":this._end(n,l,r,u,e)}t.stopPropagation()}_redraw(){if(!this._rafId||(this._rafId=null,!this._overlay))return;const{x:t,y:e,width:i,height:s}=this._box;this._updateBox(t,e,i,s),this._updateBackground(t,e,i,s),this._rafId=requestAnimationFrame(this._redraw)}};c([f()],ot.prototype,"navigation",void 0),c([f()],ot.prototype,"view",null),ot=c([q("esri.views.2d.navigation.ZoomBox")],ot);const yi=ot;let A=class{constructor(t){this._gain=t,this.lastValue=void 0,this.filteredDelta=void 0}update(t){if(this.hasLastValue()){const e=this.computeDelta(t);this._updateDelta(e)}this.lastValue=t}reset(){this.lastValue=void 0,this.filteredDelta=void 0}hasLastValue(){return this.lastValue!==void 0}hasFilteredDelta(){return this.filteredDelta!==void 0}computeDelta(t){return this.lastValue===void 0?NaN:t-this.lastValue}_updateDelta(t){this.filteredDelta!==void 0?this.filteredDelta=(1-this._gain)*this.filteredDelta+this._gain*t:this.filteredDelta=t}};class Xt{constructor(e,i,s){this._initialVelocity=e,this._stopVelocity=i,this._friction=s,this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction))}get duration(){return this._duration}isFinished(e){return e>this.duration}get friction(){return this._friction}value(e){return this.valueFromInitialVelocity(this._initialVelocity,e)}valueDelta(e,i){const s=this.value(e);return this.value(e+i)-s}valueFromInitialVelocity(e,i){i=Math.min(i,this.duration);const s=1-this.friction;return e*(s**i-1)/Math.log(s)}}class vi extends Xt{constructor(e,i,s,a,o){super(e,i,s),this._sceneVelocity=a,this.direction=o}value(e){return super.valueFromInitialVelocity(this._sceneVelocity,e)}}class wi{constructor(e=300,i=12,s=.84){this._minimumInitialVelocity=e,this._stopVelocity=i,this._friction=s,this.enabled=!0,this._time=new A(.6),this._screen=[new A(.4),new A(.4)],this._scene=[new A(.6),new A(.6),new A(.6)],this._tmpDirection=Jt()}add(e,i,s){if(this.enabled){if(this._time.hasLastValue()&&this._time.computeDelta(s)<.015)return;this._screen[0].update(e[0]),this._screen[1].update(e[1]),this._scene[0].update(i[0]),this._scene[1].update(i[1]),this._scene[2].update(i[2]),this._time.update(s)}}reset(){this._screen[0].reset(),this._screen[1].reset(),this._scene[0].reset(),this._scene[1].reset(),this._scene[2].reset(),this._time.reset()}evaluateMomentum(){if(!this.enabled||!this._screen[0].hasFilteredDelta()||!this._time.hasFilteredDelta())return null;const e=this._screen[0].filteredDelta,i=this._screen[1].filteredDelta,s=e==null||i==null?0:Math.sqrt(e*e+i*i),a=this._time.filteredDelta,o=a==null||s==null?0:s/a;return Math.abs(o)<this._minimumInitialVelocity?null:this.createMomentum(o,this._stopVelocity,this._friction)}createMomentum(e,i,s){ii(this._tmpDirection,this._scene[0].filteredDelta??0,this._scene[1].filteredDelta??0,this._scene[2].filteredDelta??0);const a=si(this._tmpDirection);a>0&&ue(this._tmpDirection,this._tmpDirection,1/a);const o=this._time.filteredDelta;return new vi(e,i,s,o==null?0:a/o,this._tmpDirection)}}let X=class extends O{constructor(t){super(t),this.animationTime=0,this.momentumEstimator=new wi(500,6,.92),this.momentum=null,this.tmpMomentum=Jt(),this.momentumFinished=!1,this.viewpoint=new bt({targetGeometry:new pt,scale:0,rotation:0}),this._previousDrag=null,Qt(()=>this.momentumFinished,()=>this.navigation.stop())}begin(t,e){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(e),this._previousDrag=e}update(t,e){this.addToEstimator(e);let i=e.center.x,s=e.center.y;const a=this._previousDrag;i=a?a.center.x-i:-i,s=a?s-a.center.y:s,t.viewpoint=xt(this.viewpoint,t.viewpoint,[i||0,s||0]),this._previousDrag=e}end(t,e){this.addToEstimator(e);const i=t.navigation.effectiveMomentumEnabled;this.momentum=i?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(t),this._previousDrag=null,this.navigation.end()}addToEstimator(t){const e=t.center.x,i=t.center.y,s=ke(-e,i),a=Se(-e,i,0);this.momentumEstimator.add(s,a,.001*t.timestamp)}onAnimationUpdate(t){this.navigation.animationManager?.animateContinuous(t.viewpoint,(e,i)=>{const{momentum:s,animationTime:a,tmpMomentum:o}=this,n=.001*i;if(!(this.momentumFinished=!s||s.isFinished(a))){const l=s.valueDelta(a,n);ue(o,s.direction,l),xt(e,e,o),t.constraints.constrainByGeometry(e)}this.animationTime+=n})}stopMomentumNavigation(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())}};c([f()],X.prototype,"momentumFinished",void 0),c([f()],X.prototype,"viewpoint",void 0),c([f()],X.prototype,"navigation",void 0),X=c([q("esri.views.2d.navigation.actions.Pan")],X);const fi=X;let _e=class{constructor(t=2.5,e=.01,i=.95,s=12){this._minimumInitialVelocity=t,this._stopVelocity=e,this._friction=i,this._maxVelocity=s,this.enabled=!0,this.value=new A(.8),this.time=new A(.3)}add(t,e){if(this.enabled&&e!=null){if(this.time.hasLastValue()){if(this.time.computeDelta(e)<.01)return;if(this.value.hasFilteredDelta()){const i=this.value.computeDelta(t);this.value.filteredDelta*i<0&&this.value.reset()}}this.time.update(e),this.value.update(t)}}reset(){this.value.reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.value.hasFilteredDelta()||!this.time.hasFilteredDelta())return null;let t=this.value.filteredDelta/this.time.filteredDelta;return t=z(t,-this._maxVelocity,this._maxVelocity),Math.abs(t)<this._minimumInitialVelocity?null:this.createMomentum(t,this._stopVelocity,this._friction)}createMomentum(t,e,i){return new Xt(t,e,i)}};class bi extends _e{constructor(e=3,i=.01,s=.95,a=12){super(e,i,s,a)}add(e,i){const s=this.value.lastValue;if(s!=null){let a=e-s;for(;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;e=s+a}super.add(e,i)}}class xi extends Xt{constructor(e,i,s){super(e,i,s)}value(e){const i=super.value(e);return Math.exp(i)}valueDelta(e,i){const s=super.value(e),a=super.value(e+i)-s;return Math.exp(a)}}class Mi extends _e{constructor(e=2.5,i=.01,s=.95,a=12){super(e,i,s,a)}add(e,i){super.add(Math.log(e),i)}createMomentum(e,i,s){return new xi(e,i,s)}}let Y=class extends O{constructor(t){super(t),this._animationTime=0,this._momentumFinished=!1,this._previousAngle=0,this._previousRadius=0,this._previousCenter=null,this._rotationMomentumEstimator=new bi(.6,.15,.95),this._rotationDirection=1,this._startAngle=0,this._startRadius=0,this._updateTimestamp=null,this._zoomDirection=1,this._zoomMomentumEstimator=new Mi,this._zoomOnly=null,this.viewpoint=new bt({targetGeometry:new pt,scale:0,rotation:0}),this.zoomMomentum=null,this.rotateMomentum=null,this.addHandles(Qt(()=>this._momentumFinished,()=>this.navigation.stop()))}begin(t,e){this.navigation.begin(),this._rotationMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._zoomOnly=null,this._previousAngle=this._startAngle=e.angle,this._previousRadius=this._startRadius=e.radius,this._previousCenter=e.center,this._updateTimestamp=null,t.constraints.rotationEnabled&&this.addToRotateEstimator(0,e.timestamp),this.addToZoomEstimator(e,1)}update(t,e){this._updateTimestamp===null&&(this._updateTimestamp=e.timestamp);const i=e.angle,s=e.radius,a=e.center,o=Math.abs(180*(i-this._startAngle)/Math.PI),n=Math.abs(s-this._startRadius),l=this._startRadius/s;if(this._previousRadius&&this._previousCenter){const r=s/this._previousRadius;let u=180*(i-this._previousAngle)/Math.PI;this._rotationDirection=u>=0?1:-1,this._zoomDirection=r>=1?1:-1,t.constraints.rotationEnabled?(this._zoomOnly===null&&e.timestamp-this._updateTimestamp>200&&(this._zoomOnly=n-o>0),this._zoomOnly===null||this._zoomOnly?u=0:this.addToRotateEstimator(i-this._startAngle,e.timestamp)):u=0,this.addToZoomEstimator(e,l),this.navigation.setViewpoint([a.x,a.y],1/r,u,[this._previousCenter.x-a.x,a.y-this._previousCenter.y])}this._previousAngle=i,this._previousRadius=s,this._previousCenter=a}end(t){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(t),this.navigation.end()}addToRotateEstimator(t,e){this._rotationMomentumEstimator.add(t,.001*e)}addToZoomEstimator(t,e){this._zoomMomentumEstimator.add(e,.001*t.timestamp)}canZoomIn(t){const e=t.scale,i=t.constraints.effectiveMaxScale;return i===0||e>i}canZoomOut(t){const e=t.scale,i=t.constraints.effectiveMinScale;return i===0||e<i}onAnimationUpdate(t){this.navigation.animationManager?.animateContinuous(t.viewpoint,(e,i)=>{const s=!this.canZoomIn(t)&&this._zoomDirection>1||!this.canZoomOut(t)&&this._zoomDirection<1,a=!this.rotateMomentum||this.rotateMomentum.isFinished(this._animationTime),o=s||!this.zoomMomentum||this.zoomMomentum.isFinished(this._animationTime),n=.001*i;if(this._momentumFinished=a&&o,!this._momentumFinished){const l=this.rotateMomentum?Math.abs(this.rotateMomentum.valueDelta(this._animationTime,n))*this._rotationDirection*180/Math.PI:0;let r=this.zoomMomentum?Math.abs(this.zoomMomentum.valueDelta(this._animationTime,n)):1;const u=Q(),m=Q();if(this._previousCenter){It(u,this._previousCenter.x,this._previousCenter.y),Je(m,t.size,t.padding),ni(u,u,m);const{constraints:_,scale:p}=t,g=p*r;r<1&&!_.canZoomInTo(g)?(r=p/_.effectiveMaxScale,this.zoomMomentum=null,this.rotateMomentum=null):r>1&&!_.canZoomOutTo(g)&&(r=p/_.effectiveMinScale,this.zoomMomentum=null,this.rotateMomentum=null),Qe(e,t.viewpoint,r,l,u,t.size),t.constraints.constrainByGeometry(e)}}this._animationTime+=n})}stopMomentumNavigation(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())}};c([f()],Y.prototype,"_momentumFinished",void 0),c([f()],Y.prototype,"viewpoint",void 0),c([f()],Y.prototype,"navigation",void 0),Y=c([q("esri.views.2d.navigation.actions.Pinch")],Y);const Ci=Y,Yt=Q(),ye=Q();let at=class extends O{constructor(t){super(t),this._previousCenter=Q(),this.viewpoint=new bt({targetGeometry:new pt,scale:0,rotation:0})}begin(t,e){this.navigation.begin(),It(this._previousCenter,e.center.x,e.center.y)}update(t,e){const{state:{size:i,padding:s}}=t;It(Yt,e.center.x,e.center.y),Ke(ye,i,s),t.viewpoint=Pt(this.viewpoint,t.state.paddedViewState.viewpoint,ti(ye,this._previousCenter,Yt)),oi(this._previousCenter,Yt)}end(){this.navigation.end()}};c([f()],at.prototype,"viewpoint",void 0),c([f()],at.prototype,"navigation",void 0),at=c([q("esri.views.2d.navigation.actions.Rotate")],at);const Ti=at,H=10,ve=1,Ht=new bt({targetGeometry:new pt}),Wt=[0,0],we=250;let V=class extends O{constructor(t){super(t),this._endTimer=null,this._lastEventTimestamp=null,this.animationManager=null,this.interacting=!1}initialize(){this.pan=new fi({navigation:this}),this.rotate=new Ti({navigation:this}),this.pinch=new Ci({navigation:this}),this.zoomBox=new yi({view:this.view,navigation:this})}destroy(){this.pan=gt(this.pan),this.rotate=gt(this.rotate),this.pinch=gt(this.pinch),this.zoomBox=gt(this.zoomBox),this.animationManager=null}begin(){this.stop(),this._set("interacting",!0)}end(){this._lastEventTimestamp=performance.now(),this._startTimer(we)}async zoom(t,e=this._getDefaultAnchor()){if(this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return t<1?this.zoomIn(e):this.zoomOut(e);this.setViewpoint(e,t,0,[0,0])}async zoomIn(t){const e=this.view,i=e.constraints.snapToNextScale(e.scale);return this._zoomToScale(i,t)}async zoomOut(t){const e=this.view,i=e.constraints.snapToPreviousScale(e.scale);return this._zoomToScale(i,t)}setViewpoint(t,e,i,s){this.begin(),this.view.stateManager.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,t,e,i,s),this.end()}setViewpointImmediate(t,e=0,i=[0,0],s=this._getDefaultAnchor()){this.view.stateManager.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,s,t,e,i)}continuousRotateClockwise(){const t=this.view.viewpoint;this.animationManager?.animateContinuous(t,e=>{Pt(e,e,-ve)})}continuousRotateCounterclockwise(){const t=this.view.viewpoint;this.animationManager?.animateContinuous(t,e=>{Pt(e,e,ve)})}resetRotation(){this.view.constraints.rotationEnabled&&(this.view.rotation=0)}continuousPanLeft(){this._continuousPan([-H,0])}continuousPanRight(){this._continuousPan([H,0])}continuousPanUp(){this._continuousPan([0,H])}continuousPanDown(){this._continuousPan([0,-H])}continuousPanVector({x:t,y:e}){this._continuousPan([t*H,e*H])}stop(){this.pan.stopMomentumNavigation(),this.animationManager?.stop(),this.end(),this._endTimer!==null&&(clearTimeout(this._endTimer),this._endTimer=null,this._set("interacting",!1))}_continuousPan(t){const e=this.view.viewpoint;this.animationManager?.animateContinuous(e,i=>{xt(i,i,t),this.view.constraints.constrainByGeometry(i)})}_startTimer(t){return this._endTimer!==null||(this._endTimer=setTimeout(()=>{this._endTimer=null;const e=performance.now()-(this._lastEventTimestamp??0);e<we?this._endTimer=this._startTimer(e):this._set("interacting",!1)},t)),this._endTimer}_getDefaultAnchor(){const{size:t,padding:{left:e,right:i,top:s,bottom:a}}=this.view;return Wt[0]=.5*(t[0]-i+e),Wt[1]=.5*(t[1]-a+s),Wt}async _zoomToScale(t,e=this._getDefaultAnchor()){const{view:i}=this,{constraints:s,scale:a,viewpoint:o,size:n,padding:l}=i,r=s.canZoomInTo(t),u=s.canZoomOutTo(t);if(!(t<a&&!r||t>a&&!u))return le(Ht,o,t/a,0,e,n,l),s.constrainByGeometry(Ht),i.goTo(Ht,{animate:!0,animationMode:"always",duration:re(),pickClosestTarget:!1})}_scaleRotateTranslateViewpoint(t,e,i,s,a){const{view:o}=this,{size:n,padding:l,constraints:r,scale:u,viewpoint:m}=o,_=u*i,p=r.canZoomInTo(_),g=r.canZoomOutTo(_);return(i<1&&!p||i>1&&!g)&&(i=1),xt(m,m,a),le(t,m,i,s,e,n,l),r.constrainByGeometry(t)}};c([f()],V.prototype,"animationManager",void 0),c([f({type:Boolean,readOnly:!0})],V.prototype,"interacting",void 0),c([f()],V.prototype,"pan",void 0),c([f()],V.prototype,"pinch",void 0),c([f()],V.prototype,"rotate",void 0),c([f()],V.prototype,"view",void 0),c([f()],V.prototype,"zoomBox",void 0),V=c([q("esri.views.2d.navigation.MapViewNavigation")],V);const Fi=V;class fe extends yt{}c([_t(0,F)],fe.prototype,"position",void 0);class ki extends wt{}class Z extends J{}c([v(U)],Z.prototype,"readbackTexture",void 0),c([v(U)],Z.prototype,"maskTexture",void 0),c([v(U)],Z.prototype,"overlayTexture",void 0),c([v(y)],Z.prototype,"background",void 0),c([v(y)],Z.prototype,"drawPos",void 0),c([v(h)],Z.prototype,"maskEnabled",void 0),c([v(h)],Z.prototype,"overlayEnabled",void 0);class Et extends vt{vertex(e){const i=e.position,s=e.position.subtract(new F(.5)).multiply(this.config.drawPos.zw),a=this.config.drawPos.xy.add(s);return{glPosition:new y(a,0,1),texCoord:i}}fragment(e){let i=$(this.config.readbackTexture,Si(e.texCoord));i=i.add(new h(1).subtract(i.a)).multiply(this.config.background);const s=C(k(this.config.maskEnabled,new h(1)),$(this.config.maskTexture,e.texCoord).a,new h(1));i=i.multiply(s);const a=C(k(this.config.overlayEnabled,new h(1)),$(this.config.overlayTexture,e.texCoord),new y(0)),o=new ft;return o.glFragColor=a.add(new h(1).subtract(a.a).multiply(i)),o}}function Si(t){const e=t.multiply(new F(2)).subtract(1);return C(k(e.x,new h(0)).and(k(e.y,new h(0))),new F(.5),()=>{const i=Re(e.y,e.x),s=Pe(Ae(e),new h(Ie)),a=new F(Ze(i),Ne(i));return s.multiply(a).multiply(new F(.5)).add(new h(.5))})}c([v(Z)],Et.prototype,"config",void 0),c([R(0,P(fe))],Et.prototype,"vertex",null),c([R(0,P(ki))],Et.prototype,"fragment",null);class be extends yt{}c([_t(0,F)],be.prototype,"position",void 0);class Di extends wt{}class xe extends J{}c([v(Be)],xe.prototype,"dvs",void 0);class B extends J{}c([v(h)],B.prototype,"halfWidth",void 0),c([v(h)],B.prototype,"aaWidth",void 0),c([v(h)],B.prototype,"pxPerCell",void 0),c([v(y)],B.prototype,"minorLineColor",void 0),c([v(y)],B.prototype,"majorLineColor",void 0),c([v(Rt)],B.prototype,"majorLineInterval",void 0);class rt extends vt{vertex(e){const i=e.position.multiply(2).subtract(1);return{gridPos:this.transform.dvs.multiply(new b(i,1)).xy,glPosition:new y(i,0,1)}}fragment(e){const i=Kt(e.gridPos),s=Oe(i),a=S(s.x,new h(1).subtract(s.x)),o=S(s.y,new h(1).subtract(s.y)),n=new F(a,o).multiply(this.config.pxPerCell).subtract(this.config.halfWidth),l=S(n.x,n.y),r=new h(1).subtract(qe(new h(0),this.config.aaWidth,l)),u=new Rt(ne(i.x)),m=new Rt(ne(i.y)),_=new h(oe(u,this.config.majorLineInterval)),p=new h(oe(m,this.config.majorLineInterval)),g=C(se(n.x,n.y),_,p),w=Lt(Ue(I(n.x,this.config.aaWidth),I(n.y,this.config.aaWidth)),new h(.5)),T=S(_,p),lt=C(w,T,g),ut=$e(this.config.majorLineColor,this.config.minorLineColor,S(lt,new h(1))),W=new ft;return W.glFragColor=ut.multiply(r),W}}c([v(xe)],rt.prototype,"transform",void 0),c([v(B)],rt.prototype,"config",void 0),c([R(0,P(be))],rt.prototype,"vertex",null),c([R(0,P(Di))],rt.prototype,"fragment",null);export{tt as D,Et as E,rt as S,mi as a,j as b,ai as e,di as n,ri as r,ci as t,Tt as v,Fi as y};
