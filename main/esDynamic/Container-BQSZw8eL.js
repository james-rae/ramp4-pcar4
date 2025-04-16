import{k as a,o,A as p,aD as g,a$ as y,n as S,f as _,aM as b,bP as q,eW as w,aQ as M,aR as m}from"./main-BL33V88t.js";import{e as F}from"./MapView-l8M1sszu.js";import{d as V,t as I,e as C}from"./parser-DJRIJ23S.js";const u=-1;let c=class extends g{constructor(t){super(t),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=y("mapview-transitions-duration"),this.effects=[]}set effect(t){if(this._get("effect")!==(t=t||"")){this._set("effect",t);try{this._transitionTo(v(t))}catch(e){this._transitionTo([]),S.getLogger(this).warn("Invalid Effect",{effect:t,error:e})}}}get final(){return this._final}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(t){this._updateForScale(t)}get transitioning(){return this._to!==null}canTransitionTo(t){try{return this.scale>0&&R(this._current,v(t),this.scale)}catch{return!1}}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}endTransition(){this._applyTimeTransition(this.duration)}_transitionTo(t){this.scale>0&&R(this._current,t,this.scale)?(this._final=t,this._to=_(t),E(this._current,this._to,this.scale),this._from=_(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._set("effects",this._current[0]?_(this._current[0].effects):[])}_applyTimeTransition(t){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let i=0;i<this._current.length;i++){const r=this._current[i],s=this._from[i],l=this._to[i];r.scale=A(s.scale,l.scale,e);for(let n=0;n<r.effects.length;n++){const f=r.effects[n],h=s.effects[n],O=l.effects[n];f.interpolate(h,O,e)}}e===1&&(this._current=this._final,this._set("effects",this._current[0]?_(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(t){if(this._set("scale",t),this._current.length===0)return;const e=this._current,i=this._current.length-1;let r,s,l=1;if(e.length===1||t>=e[0].scale)s=r=e[0].effects;else if(t<=e[i].scale)s=r=e[i].effects;else for(let n=0;n<i;n++){const f=e[n],h=e[n+1];if(f.scale>=t&&h.scale<=t){l=(t-f.scale)/(h.scale-f.scale),r=f.effects,s=h.effects;break}}for(let n=0;n<this.effects.length;n++)this.effects[n].interpolate(r[n],s[n],l)}};function v(t){const e=V(t)||[];return D(e)?[{scale:u,effects:e}]:e}function R(t,e,i){return!t[0]?.effects||!e[0]?.effects?!0:!((t[0]?.scale===u||e[0]?.scale===u)&&(t.length>1||e.length>1)&&i<=0)&&I(t[0].effects,e[0].effects)}function E(t,e,i){const r=t.length>e.length?t:e,s=t.length>e.length?e:t,l=s[s.length-1],n=l?.scale??i,f=l?.effects??[];for(let h=s.length;h<r.length;h++)s.push({scale:n,effects:[...f]});for(let h=0;h<r.length;h++)s[h].scale=s[h].scale===u?i:s[h].scale,r[h].scale=r[h].scale===u?i:r[h].scale,C(s[h].effects,r[h].effects)}function A(t,e,i){return t+(e-t)*i}function D(t){const e=t[0];return!!e&&"type"in e}a([o()],c.prototype,"_to",void 0),a([o()],c.prototype,"duration",void 0),a([o({value:""})],c.prototype,"effect",null),a([o({readOnly:!0})],c.prototype,"effects",void 0),a([o({readOnly:!0})],c.prototype,"final",null),a([o({readOnly:!0})],c.prototype,"hasEffects",null),a([o({value:0})],c.prototype,"scale",null),a([o({readOnly:!0})],c.prototype,"transitioning",null),c=a([p("esri.layers.effects.EffectView")],c);let d=class extends g{constructor(t){super(t),this.computedOpacity=1,this.computedVisible=!0,this.opacity=1,this.visible=!0,this._fadeOutResolver=null,this._fadeInResolver=null}get transitioning(){return(this._fadeOutResolver||!this.visible?0:this.opacity)!==this.computedOpacity}endTransition(){this._fadeInResolver?.(),this._fadeOutResolver?.(),this._fadeInResolver=this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0}fadeIn(){return this._fadeInResolver||(this.opacity=1,this.computedOpacity=0,this._fadeOutResolver?.(),this._fadeOutResolver=null,this._fadeInResolver=b()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver?.(),this._fadeInResolver=null,this._fadeOutResolver=b()),this._fadeOutResolver.promise}transitionStep(t,e){const i=y("mapview-transitions-duration"),r=i?1/i:0;if(r===0)this.computedOpacity=this.opacity,this.computedVisible=this.visible;else{const s=this._fadeOutResolver||!this.visible?0:this.opacity,l=this.computedOpacity;if(l===s)this.computedVisible=this.visible;else{const n=t*r;this.computedOpacity=l>s?Math.max(s,l-n):Math.min(s,l+n),this.computedVisible=this.computedOpacity>0}}this.transitioning||(this._fadeInResolver?.(),this._fadeOutResolver?.(),this._fadeOutResolver=this._fadeInResolver=null)}};a([o()],d.prototype,"computedOpacity",void 0),a([o()],d.prototype,"computedVisible",void 0),a([o()],d.prototype,"opacity",void 0),a([o()],d.prototype,"visible",void 0),a([o()],d.prototype,"transitioning",null),a([o()],d.prototype,"_fadeOutResolver",void 0),a([o()],d.prototype,"_fadeInResolver",void 0),d=a([p("esri.views.2d.engine.transitions.FadeTransition")],d);class T extends q{constructor(){super(...arguments),this._transitionables=null,this._clips=null,this._fadeTransition=null,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get computedOpacity(){return this._fadeTransition?.computedOpacity??this.opacity}get clips(){return this._clips}set clips(e){this._clips=e,this.requestRender()}get fadeTransitionEnabled(){return this._fadeTransition!==null}set fadeTransitionEnabled(e){!this._fadeTransition&&e?(this._fadeTransition=new d({opacity:this.opacity,visible:this.visible}),this.addTransitionable(this._fadeTransition)):this._fadeTransition&&!e&&(this.removeTransitionable(this._fadeTransition),this._fadeTransition=null)}get inFadeTransition(){return this._fadeTransition?.transitioning??!1}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(e){this._opacity!==e&&(this._opacity=Math.min(1,Math.max(e,0)),this._fadeTransition&&(this._fadeTransition.opacity=this._opacity),this.requestRender())}get stage(){return this._stage}set stage(e){if(this._stage===e)return;const i=this._stage;this._stage=e,e?this._stage?.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):i?.trashDisplayObject(this)}get transforms(){return this._transforms==null&&(this._transforms=this._createTransforms()),this._transforms}get transitioning(){return this.isTransitioning()}get visible(){return this._visible}set visible(e){this._visible!==e&&(this._visible=e,this._fadeTransition&&(this._fadeTransition.visible=this._visible),this.requestRender())}get hasLabels(){return!1}get hasHighlight(){return!1}get hasBlending(){return!1}addTransitionable(e){this._transitionables??=[],this._transitionables.push(e),this.requestRender()}removeTransitionable(e){e.endTransition(),this._transitionables&&w(this._transitionables,e),this.requestRender()}fadeIn(){this.fadeTransitionEnabled=!0;const e=this._fadeTransition.fadeIn();return this.opacity=1,this.requestRender(),e}fadeOut(){this.fadeTransitionEnabled=!0;const e=this._fadeTransition.fadeOut();return this.opacity=0,this.requestRender(),e}endTransitions(){if(this._transitionables){for(const e of this._transitionables)e.endTransition();this.requestRender()}}beforeRender(e){this.transitionStep(e.deltaTime,e.state.scale),this.setTransform(e.state)}afterRender(e){this.transitioning&&this.requestRender()}remove(){this.parent?.removeChild(this)}setTransform(e){}processRender(e){this.stage&&(this._fadeTransition?.computedVisible??this.visible)&&this.doRender(e)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this.endTransitions(),this.onDetach(),this.emit("detach")}isTransitioning(){return this._transitionables?.some(e=>e.transitioning)??!1}transitionStep(e,i){if(this._transitionables)for(const r of this._transitionables)r.transitionStep(e,i)}onAttach(){}onDetach(){}doRender(e){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}let x=class extends T{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this._children=[],this._childrenObservable=new M,this._effectView=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get children(){return m(this._childrenObservable),this._children}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach(e=>e.clips=t)}get computedEffects(){return this._effectView?.effects??null}get effect(){return this._effectView?.effect??""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new c,this.addTransitionable(this._effectView)),this._effectView.effect=t,this.requestRender())}get highlightGradient(){return this._highlightGradient}set highlightGradient(t){this._highlightGradient=t,this.requestRender()}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some(t=>t.hasHighlight)}get hasLabels(){return this.children.some(t=>t.hasLabels)}get requiresDedicatedFBO(){return this.children.some(t=>"blendMode"in t&&t.blendMode&&t.blendMode!=="normal")}get isReady(){return this.children.every(t=>t.isReady)}get sortFunction(){return this._sortFunction}set sortFunction(t){this._sortFunction=t,t&&(this._needsSort=!0)}doRender(t){const e=this.createRenderParams(t),{painter:i}=e;i.beforeRenderLayer(e,this._clips?.length?255:0,this.computedOpacity),this.renderChildren(e),i.afterRenderLayer(e,this.computedOpacity)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,e=this.children.length){if(!t||this.contains(t))return t;this._needsSort=!0;const i=t.parent;return i&&i!==this&&i.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),this._childrenObservable.notify(),t}contains(t){return m(this._childrenObservable),this._childrenSet.has(t)}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0,this._childrenObservable.notify()}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,this._childrenObservable.notify(),e}beforeRender(t){super.beforeRender(t),this.sortFunction&&this._needsSort&&(this.children.sort(this.sortFunction),this._needsSort=!1,this._childrenObservable.notify());for(const e of this.children)e.beforeRender(t)}afterRender(t){super.afterRender(t);for(const e of this.children)e.afterRender(t)}_createTransforms(){return{displayViewScreenMat3:F()}}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.processRender(t)}createRenderParams(t){return{...t,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient}}isTransitioning(){return super.isTransitioning()||this.children.some(t=>t.transitioning)}};export{c as a,T as e,x as n};
