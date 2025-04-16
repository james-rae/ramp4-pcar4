import{aD as u,dL as y,aH as l,dM as v,c_ as r,dN as g,k as s,o as i,A as f}from"./main-CvsyIoCL.js";import{h as w}from"./UpdatingHandles-D9UhpCoF.js";import{_ as d}from"./MapView-Cut68N6_.js";const h={redo:"r",undo:"z"},c=Symbol(),p=Symbol(),_=Symbol();let n=class extends u{constructor(e){super(e),this._tool=null,this._updatingHandles=new w,this.enabled=!1,this._onPointerMove=y(async t=>{const o=await this._updatingHandles.addPromise(this._findElementAtScreenPoint(t));this.destroyed||(this.removeHandles(p),o&&o!==this.selectedElement&&(this.view.cursor="pointer",this.addHandles(l(()=>this.view.cursor=null),p)))})}initialize(){this.addHandles(v(this._updatingHandles)),this._updatingHandles.add(()=>this.enabled,e=>this._setEnabled(e),r),this._updatingHandles.add(()=>this._preferredInteractionTool,()=>this._preferredInteractionToolChanged())}get _validatedSelectedElement(){const e=this.selectedElement;if(!e)return null;const{layer:{source:t}}=this;return t?"hasElement"in t?t.hasElement(e)?e:null:t===e?e:null:null}get _preferredInteractionTool(){return this.options?.tool??"transform"}get updating(){return this._updatingHandles.updating}_setEnabled(e){if(this.removeHandles(c),!e)return;const{view:t}=this;this.addHandles([t.on("immediate-click",o=>this._onClick(o),d.TOOL),t.on("pointer-move",o=>this._onPointerMove(o).catch(()=>{}),d.TOOL),t.on("key-down",o=>{o.key===h.undo&&this._tool?.canUndo()&&(this._tool.undo(),o.stopPropagation()),o.key===h.redo&&this._tool?.canRedo()&&(this._tool.redo(),o.stopPropagation())}),this._updatingHandles.add(()=>this._validatedSelectedElement,o=>this._selectedElementChanged(o),r),l(()=>{t.cursor=null,this._removeTool()})],c)}async _findElementAtScreenPoint(e){const t=(await this.view.hitTest(e,{include:[this.layer]})).results[0];return t?.type==="media"?t.element:null}async _onClick(e){await this._updatingHandles.addPromise(e.async(async()=>{const t=await this._findElementAtScreenPoint(e);this.destroyed||(t&&e.stopPropagation(),this.selectedElement=t,this.selectedElement&&(this.view.cursor=null))}))}_preferredInteractionToolChanged(){const{_tool:e}=this;e&&(this._preferredInteractionTool===e.type||this._updatingHandles.addPromise(this._recreateTool()))}async _recreateTool(){this.removeHandles(_),this._removeTool();const e=this._validatedSelectedElement;if(!e)return;const t=new AbortController;this.addHandles(g(t),_);const{TransformTool:o,ControlPointsTransformTool:m}=await import("./editingTools-sjto9k4w.js");if(t.signal.aborted)return;const{view:a}=this;switch(this._preferredInteractionTool){case"transform":this._tool=new o({target:e,view:a});break;case"reshape":this._tool=new m({mediaElement:e,view:a})}this.addHandles([l(()=>{this._tool&&(a.tools.remove(this._tool),this._tool=null)})],this._tool),a.addAndActivateTool(this._tool)}_removeTool(){this._tool&&this.removeHandles(this._tool)}async _selectedElementChanged(e){e?.georeference?await this._updatingHandles.addPromise(this._recreateTool()):this._removeTool()}};s([i()],n.prototype,"_validatedSelectedElement",null),s([i()],n.prototype,"_preferredInteractionTool",null),s([i({constructOnly:!0})],n.prototype,"view",void 0),s([i({constructOnly:!0})],n.prototype,"layer",void 0),s([i()],n.prototype,"selectedElement",void 0),s([i()],n.prototype,"enabled",void 0),s([i()],n.prototype,"options",void 0),s([i()],n.prototype,"updating",null),n=s([f("esri.views.2d.layers.support.MediaLayerInteraction")],n);export{n as MediaLayerInteraction};
