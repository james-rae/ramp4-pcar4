import{d9 as m,a_ as A,fr as y,k as t,o as s,bv as x,A as h,aD as T,g0 as P,V as f,cX as F,aE as b,f1 as w,cW as O,gF as H,gG as C,gH as N}from"./main-DyJf3FFo.js";import{c as V}from"./Analysis-BA0V48GU.js";import{c as L,b as E}from"./featureReferenceUtils-LvVuuOTw.js";import{j as g}from"./persistable-nM4CKULR.js";import{h as R}from"./ElevationInfo-C0RHO4Cd.js";import{V as k}from"./projection-CuZEvqR0.js";import{i as D}from"./elevationInfoUtils-N1vHxeKB.js";import{S as G}from"./MultiOriginJSONSupport-Ld4olNaD.js";import{f as M}from"./Layer-T_GCFI6Y.js";import{b as W}from"./OperationalLayer-Ci0vpWOe.js";let a=class extends m(A(T)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return y(this.position,e.position)&&y(this.elevationInfo,e.elevationInfo)&&L(this.feature,e.feature)}};t([s({type:x,json:{write:{isRequired:!0}}})],a.prototype,"position",void 0),t([s({type:R}),g()],a.prototype,"elevationInfo",void 0),t([s(E)],a.prototype,"feature",void 0),a=t([h("esri.analysis.LineOfSightAnalysisObserver")],a);const j=a;let l=class extends m(P){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return y(this.position,e.position)&&y(this.elevationInfo,e.elevationInfo)&&L(this.feature,e.feature)}};t([s({type:x}),g()],l.prototype,"position",void 0),t([s({type:R}),g()],l.prototype,"elevationInfo",void 0),t([s(E)],l.prototype,"feature",void 0),l=t([h("esri.analysis.LineOfSightAnalysisTarget")],l);const I=l,v=f.ofType(I);let r=class extends V{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(b(()=>this._computeExtent(),e=>{e?.pending==null&&this._set("extent",e!=null?e.extent:null)},w))}get targets(){return this._get("targets")||new v}set targets(e){this._set("targets",O(e,this.targets,v))}get spatialReference(){return this.observer?.position!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[this.observer?.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(this.observer?.position==null||e==null)return null;const n=p=>D(p.position,p.elevationInfo)==="absolute-height",o=this.observer.position,c=H(o.x,o.y,o.z,o.x,o.y,o.z);for(const p of this.targets)if(p.position!=null){const u=k(p.position,e);if(u.pending!=null)return{pending:u.pending,extent:null};if(u.geometry!=null){const{x:S,y:_,z:q}=u.geometry;C(c,[S,_,q])}}const d=N(c,e);return n(this.observer)&&this.targets.every(n)||(d.zmin=void 0,d.zmax=void 0),{pending:null,extent:d}}clear(){this.observer=null,this.targets.removeAll()}};t([s({type:["line-of-sight"]})],r.prototype,"type",void 0),t([s({type:j,json:{read:!0,write:!0}})],r.prototype,"observer",void 0),t([s({cast:F,type:v,nonNullable:!0,json:{read:!0,write:!0}})],r.prototype,"targets",null),t([s({value:null,readOnly:!0})],r.prototype,"extent",void 0),t([s({readOnly:!0})],r.prototype,"spatialReference",null),t([s({readOnly:!0})],r.prototype,"requiredPropertiesForEditing",null),r=t([h("esri.analysis.LineOfSightAnalysis")],r);const z=r,X=f.ofType(I);let i=class extends W(G(M)){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new z,this.opacity=1}initialize(){this.addHandles(b(()=>this.analysis,(e,n)=>{n!=null&&n.parent===this&&(n.parent=null),e!=null&&(e.parent=this)},w))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return this.analysis?.observer}set observer(e){const{analysis:n}=this;n&&(n.observer=e)}get targets(){return this.analysis!=null?this.analysis.targets:new f}set targets(e){O(e,this.analysis?.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new z)}};t([s({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),t([s({type:["LineOfSightLayer"]})],i.prototype,"operationalLayerType",void 0),t([s({type:j,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],i.prototype,"observer",null),t([s({type:X,json:{read:!0,write:{ignoreOrigin:!0}}})],i.prototype,"targets",null),t([s({nonNullable:!0,json:{read:!1,write:!1}})],i.prototype,"analysis",void 0),t([s({readOnly:!0})],i.prototype,"fullExtent",null),t([s({readOnly:!0})],i.prototype,"spatialReference",null),t([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],i.prototype,"opacity",void 0),t([s({type:["show","hide"]})],i.prototype,"listMode",void 0),i=t([h("esri.layers.LineOfSightLayer")],i);const $=i;export{$ as default};
