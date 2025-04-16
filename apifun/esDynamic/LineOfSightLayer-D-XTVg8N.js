import{G as x,aX as b,aL as M,g6 as y,x as t,z as s,bC as w,K as h,V as f,dl as T,aM as O,dm as L,dk as R,ho as C,hp as N,hq as P}from"./main-DeRV24Di.js";import{c as F}from"./Analysis-DD6RcZyJ.js";import{c as S,b as j}from"./featureReferenceUtils-CZGE9-bi.js";import{v as g}from"./persistable-BfXoOf8c.js";import{h as q}from"./ElevationInfo-b86CcKpg.js";import{X as H}from"./projection-B0lCSWOh.js";import{i as J}from"./elevationInfoUtils-BQ7PwI-0.js";import{S as X}from"./MultiOriginJSONSupport-B-tcjtAX.js";import{f as k}from"./Layer-BYwzhU09.js";import{b as G}from"./OperationalLayer-aipQXicj.js";let a=class extends x.JSONSupportMixin(b.ClonableMixin(M)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return y(this.position,e.position)&&y(this.elevationInfo,e.elevationInfo)&&S(this.feature,e.feature)}};t([s({type:w,json:{write:{isRequired:!0}}})],a.prototype,"position",void 0),t([s({type:q}),g()],a.prototype,"elevationInfo",void 0),t([s(j)],a.prototype,"feature",void 0),a=t([h("esri.analysis.LineOfSightAnalysisObserver")],a);const E=a;let l=class extends x.JSONSupportMixin(b){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return y(this.position,e.position)&&y(this.elevationInfo,e.elevationInfo)&&S(this.feature,e.feature)}};t([s({type:w,json:{write:!0,origins:{"web-scene":{write:{isRequired:!0}}}}}),g()],l.prototype,"position",void 0),t([s({type:q}),g()],l.prototype,"elevationInfo",void 0),t([s(j)],l.prototype,"feature",void 0),l=t([h("esri.analysis.LineOfSightAnalysisTarget")],l);const I=l,v=f.ofType(I);let r=class extends F{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(O(()=>this._computeExtent(),e=>{e?.pending==null&&this._set("extent",e!=null?e.extent:null)},L))}get targets(){return this._get("targets")||new v}set targets(e){this._set("targets",R(e,this.targets,v))}get spatialReference(){return this.observer?.position!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[this.observer?.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(this.observer?.position==null||e==null)return null;const n=p=>J(p.position,p.elevationInfo)==="absolute-height",o=this.observer.position,m=C(o.x,o.y,o.z,o.x,o.y,o.z);for(const p of this.targets)if(p.position!=null){const u=H(p.position,e);if(u.pending!=null)return{pending:u.pending,extent:null};if(u.geometry!=null){const{x:z,y:_,z:A}=u.geometry;N(m,[z,_,A])}}const d=P(m,e);return n(this.observer)&&this.targets.every(n)||(d.zmin=void 0,d.zmax=void 0),{pending:null,extent:d}}clear(){this.observer=null,this.targets.removeAll()}};t([s({type:["line-of-sight"]})],r.prototype,"type",void 0),t([s({type:E,json:{read:!0,write:!0}})],r.prototype,"observer",void 0),t([s({cast:T,type:v,nonNullable:!0,json:{read:!0,write:!0}})],r.prototype,"targets",null),t([s({value:null,readOnly:!0})],r.prototype,"extent",void 0),t([s({readOnly:!0})],r.prototype,"spatialReference",null),t([s({readOnly:!0})],r.prototype,"requiredPropertiesForEditing",null),r=t([h("esri.analysis.LineOfSightAnalysis")],r);const c=r,K=f.ofType(I);let i=class extends G(X(k)){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new c,this.opacity=1}initialize(){this.addHandles(O(()=>this.analysis,(e,n)=>{n!=null&&n.parent===this&&(n.parent=null),e!=null&&(e.parent=this)},L))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return this.analysis?.observer}set observer(e){const{analysis:n}=this;n&&(n.observer=e)}get targets(){return this.analysis!=null?this.analysis.targets:new f}set targets(e){R(e,this.analysis?.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new c)}};t([s({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),t([s({type:["LineOfSightLayer"]})],i.prototype,"operationalLayerType",void 0),t([s({type:E,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],i.prototype,"observer",null),t([s({type:K,json:{read:!0,write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"targets",null),t([s({type:c,nonNullable:!0,json:{read:!1,write:!1}})],i.prototype,"analysis",void 0),t([s({readOnly:!0})],i.prototype,"fullExtent",null),t([s({readOnly:!0})],i.prototype,"spatialReference",null),t([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],i.prototype,"opacity",void 0),t([s({type:["show","hide"]})],i.prototype,"listMode",void 0),i=t([h("esri.layers.LineOfSightLayer")],i);const V=i;export{V as default};
