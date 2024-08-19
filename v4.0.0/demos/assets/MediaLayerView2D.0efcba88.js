import{K as c,N as p,O as G,P as J,i as v,dK as L,ae as N,fT as Z,bS as X,e as E,ak as W,bn as D,bB as ee,ay as te,a6 as k,s as se,aZ as T,bw as re,b9 as ie,c3 as ae,ci as oe,cj as ne,be as le,ck as he,bc as de,bd as ce,bQ as ue,fB as me,j as pe,eS as ye,eO as fe,eP as _e,fU as ve,b2 as ge,M as we,fV as Re,bR as Me}from"./main.efb50b2c.js";import{p as be}from"./normalizeUtilsSync.38eabbc7.js";import{a as xe}from"./utils.9619dae6.js";import{c as B,f as Ce}from"./VertexArrayObject.e5cd7959.js";import{P as Te,G as Ee,L as Se,D as $e,F as Q}from"./enums.de935fa5.js";import{n as j,u as Ve}from"./Texture.627d6838.js";import{r as qe}from"./vec3f32.8d37ecf5.js";import{b as Ae,W as De}from"./WGLContainer.83fa1e96.js";import{I as Oe}from"./Utils.f67560a4.js";import{f as Pe,u as Ie}from"./LayerView.098e8f00.js";import"./preload-helper.387dac8f.js";import"./MaterialKey.c216087c.js";import"./enums.6e42a319.js";import"./VertexElementDescriptor.d386088d.js";import"./ProgramTemplate.1056febf.js";import"./StyleDefinition.627ffe6c.js";import"./config.40d47db8.js";import"./GeometryUtils.8166011b.js";import"./earcut.d30cbec0.js";let m=class extends J{constructor(r){super(r)}get bounds(){const r=this.coords;return v(r)?null:L(r.extent)}get coords(){const r=N(this.element.georeference)?.coords;return Z(r,this.spatialReference).geometry}get normalizedCoords(){return X.fromJSON(be(this.coords))}get normalizedBounds(){return E(this.normalizedCoords)?L(this.normalizedCoords.extent):null}};c([p()],m.prototype,"spatialReference",void 0),c([p()],m.prototype,"element",void 0),c([p()],m.prototype,"bounds",null),c([p()],m.prototype,"coords",null),c([p()],m.prototype,"normalizedCoords",null),c([p()],m.prototype,"normalizedBounds",null),m=c([G("esri.layers.support.media.MediaElementView")],m);class ze extends xe{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this._vertices=new Float32Array(20),this._handles=[],this._handles.push(W(()=>this.elementView.element.opacity,t=>this.opacity=t,D),W(()=>[this.elementView.coords],()=>{this.requestRender()},D),ee(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&E(t.content)&&this._handles.push(te(t.content,"play",()=>this.requestRender()))},D)),e.element.load().catch(t=>{k.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new se("element-load-error","Element cannot be displayed",{element:e,error:t}))})}destroy(){this._handles.forEach(e=>e.remove()),this.texture?.dispose(),this.texture=null}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,s=this.elementView.element.content;if(E(s)){const i=s instanceof HTMLImageElement,a=s instanceof HTMLVideoElement,l=i?s.naturalWidth:a?s.videoWidth:s.width,h=i?s.naturalHeight:a?s.videoHeight:s.height;this.texture?a&&!s.paused&&(this.texture.setData(s),this.requestRender(),(j(t.gl)||T(l)&&T(h))&&this.texture.generateMipmap()):(this.texture=new Ve(t,{pixelFormat:Te.RGBA,dataType:Ee.UNSIGNED_BYTE,samplingMode:Se.LINEAR,wrapMode:$e.CLAMP_TO_EDGE,width:l,height:h},s),(j(t.gl)||T(l)&&T(h))&&this.texture.generateMipmap(),a&&!s.paused&&this.requestRender())}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const s=this.elementView.coords;if(v(s))return;const[i,a,l,h]=s.rings[0],f=this._vertices,{x:o,y:n}=e,u=t!==0;u?f.set([a[0]-o,a[1]-n,i[0]-o,i[1]-n,l[0]-o,l[1]-n,h[0]-o,h[1]-n,h[0]-o,h[1]-n,a[0]+t-o,a[1]-n,a[0]+t-o,a[1]-n,i[0]+t-o,i[1]-n,l[0]+t-o,l[1]-n,h[0]+t-o,h[1]-n]):f.set([a[0]-o,a[1]-n,i[0]-o,i[1]-n,l[0]-o,l[1]-n,h[0]-o,h[1]-n]),this.isWrapAround=u}getVAO(e,t,s){if(v(this.elementView.coords))return null;const i=this._vertices;if(this._vao)this._geometryVbo.setData(i);else{this._geometryVbo=B.createVertex(e,Q.DYNAMIC_DRAW,i);const a=B.createVertex(e,Q.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new Ce(e,s,t,{geometry:this._geometryVbo,tex:a})}return this._vao}}class Ue extends Ae{constructor(){super(...arguments),this._localOrigin=re(0,0),this._viewStateId=-1,this._dvsMat3=ie(),this.requiresDedicatedFBO=!1}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[De.overlay],target:()=>this.children,drawPhase:Oe.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:s,size:i,pixelRatio:a,resolution:l,rotation:h,viewpoint:f,displayMat3:o}=t;if(this._viewStateId===s)return;const n=Math.PI/180*h,u=a*i[0],g=a*i[1],{x:M,y:S}=f.targetGeometry,$=ae(M,t.spatialReference);this._localOrigin.x=$,this._localOrigin.y=S;const b=l*u,w=l*g,d=oe(this._dvsMat3);ne(d,d,o),le(d,d,he(u/2,g/2)),de(d,d,qe(u/b,-g/w,1)),ce(d,d,-n),this._viewStateId=s}_updateOverlays(e,t){const{state:s}=e,{rotation:i,spatialReference:a,worldScreenWidth:l,size:h,viewpoint:f}=s,o=this._localOrigin;let n=0;if(a.isWrappable){const u=h[0],g=h[1],M=180/Math.PI*i,S=Math.abs(Math.cos(M)),$=Math.abs(Math.sin(M)),b=Math.round(u*S+g*$),[w,d]=ue(a).valid,y=me(a),{x:O,y:H}=f.targetGeometry,F=[O,H],V=[0,0];s.toScreen(V,F);const x=[0,0];let q;q=b>l?.5*l:.5*b;const P=Math.floor((O+.5*y)/y),K=w+P*y,Y=d+P*y,A=[V[0]+q,0];s.toMap(x,A),x[0]>Y&&(n=y),A[0]=V[0]-q,s.toMap(x,A),x[0]<K&&(n=-y);for(const C of t){const I=C.elementView.bounds;if(v(I))continue;const[z,,U]=I;z<w&&U>w?C.updateDrawCoords(o,y):U>d&&z<d?C.updateDrawCoords(o,-y):C.updateDrawCoords(o,n)}}else for(const u of t)u.updateDrawCoords(o,n)}}let _=class extends Pe(Ie){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this.layer=null,this.elements=new pe}attach(){this.handles.add(ye(()=>this.layer.source,"refresh",()=>{for(const r of this._tileStrategy.tiles)this._updateTile(r);this.requestUpdate()})),this._overlayContainer=new Ue,this.container.addChild(this._overlayContainer),this._fetchQueue=new fe({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(r,e)=>this._queryElements(r,e)}),this._tileStrategy=new _e({cachePolicy:"purge",resampling:!0,acquireTile:r=>this._acquireTile(r),releaseTile:r=>this._releaseTile(r),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){this.handles.removeAll(),this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear()}supportsSpatialReference(r){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(r){this._tileStrategy.update(r)}async hitTest(r,e){const t=[],s=[r.x,r.y];for(const i of this.elements){const a=N(i.georeference)?.coords;E(a)&&ve(a.rings,s)&&t.push({type:"media",element:i,layer:this.layer,mapPoint:r})}return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){}_acquireTile(r){const e=new Le(r.clone());return this._updateTile(e),e}_updateTile(r){this.updatingHandles.addPromise(this._fetchQueue.push(r.key).then(e=>{const[t,s]=r.setElements(e);this._acquireElements(r,t),this._releaseElements(r,s),this.requestUpdate()},e=>{ge(e)||k.getLogger(this.declaredClass).error(e)}))}_releaseTile(r){this._fetchQueue.abort(r.key.id),r.elements&&this._releaseElements(r,r.elements),this.requestUpdate()}async _queryElements(r,e){const t=this.layer.source;if(v(t))return[];this.view.featuresTilingScheme.getTileBounds(R,r,!0);const s=new we({xmin:R[0],ymin:R[1],xmax:R[2],ymax:R[3],spatialReference:this.view.spatialReference});return t.queryElements(s,e)}_acquireElements(r,e){const t=this.layer.source,s=this.view.spatialReference;if(!v(t))for(const i of e)Re(this._elementReferences,i.uid,()=>{const a=new m({element:i,spatialReference:s}),l=new ze(a);return this._overlayContainer.addChild(l),this.elements.add(i),{tiles:new Set,projectedElement:a,overlay:l}}).tiles.add(r)}_releaseElements(r,e){for(const t of e){const s=this._elementReferences.get(t.uid);s.tiles.delete(r),s.tiles.size||(this._overlayContainer.removeChild(s.overlay),s.overlay.destroy(),s.projectedElement.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t))}}};c([p()],_.prototype,"_fetchQueue",void 0),c([p()],_.prototype,"layer",void 0),c([p({readOnly:!0})],_.prototype,"elements",void 0),_=c([G("esri.views.2d.layers.MediaLayerView2D")],_);const R=Me();class Le{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],s=new Set(this.elements);this.elements=e;for(const i of e)s.has(i)?s.delete(i):t.push(i);return this.isReady=!0,[t,Array.from(s)]}}const at=_;export{at as default};
