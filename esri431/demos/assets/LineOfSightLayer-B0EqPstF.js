import { ex as u$2, dd as i$1, jL as o, bT as r, bU as m$1, D as j$1, hS as h, bV as a, ez as b$1, jN as l$2, a1 as V, d7 as t, cC as d$2, hL as A, d6 as n$1, kH as a$1, fg as V$1, kI as l$3, kJ as c$2, eC as b$2, eF as S$1, eP as f$1 } from './main-jdFDoOPu.js';
import { c as c$1 } from './Analysis-Dcq3wCjb.js';
import { c, b } from './featureReferenceUtils-CZRtAuV2.js';
import { j } from './persistable-BrlxzVVV.js';
import { i } from './elevationInfoUtils-CL4PiAnx.js';
import './preload-helper-dJJaZANz.js';
import './sphere-CvWAdV_f.js';
import './mat3f64-DKAwfC1r.js';
import './plane-CBOt8dOS.js';
import './mat4f64-Cw8nJbLB.js';
import './quatf64-CvJnKmwc.js';
import './IntersectorInterfaces-DPeWXlfT.js';
import './boundedPlane-_F0novMl.js';
import './lineSegment-mPW8N6M_.js';
import './multiOriginJSONSupportUtils-ThJwHdA9.js';
import './resourceExtension-i88ThDUv.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let l$1=class l extends(u$2(i$1(b$1))){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null;}equals(o$1){return o(this.position,o$1.position)&&o(this.elevationInfo,o$1.elevationInfo)&&c(this.feature,o$1.feature)}};r([m$1({type:j$1,json:{write:{isRequired:!0}}})],l$1.prototype,"position",void 0),r([m$1({type:h}),j()],l$1.prototype,"elevationInfo",void 0),r([m$1(b)],l$1.prototype,"feature",void 0),l$1=r([a("esri.analysis.LineOfSightAnalysisObserver")],l$1);const u$1=l$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let l=class extends(u$2(l$2)){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null;}equals(o$1){return o(this.position,o$1.position)&&o(this.elevationInfo,o$1.elevationInfo)&&c(this.feature,o$1.feature)}};r([m$1({type:j$1}),j()],l.prototype,"position",void 0),r([m$1({type:h}),j()],l.prototype,"elevationInfo",void 0),r([m$1(b)],l.prototype,"feature",void 0),l=r([a("esri.analysis.LineOfSightAnalysisTarget")],l);const f=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const y=V.ofType(f);let d$1=class d extends c$1{constructor(t){super(t),this.type="line-of-sight",this.observer=null,this.extent=null;}initialize(){this.addHandles(d$2((()=>this._computeExtent()),(t=>{null==t?.pending&&this._set("extent",null!=t?t.extent:null);}),A));}get targets(){return this._get("targets")||new y}set targets(t){this._set("targets",n$1(t,this.targets,y));}get spatialReference(){return null!=this.observer?.position?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return [this.observer?.position]}async waitComputeExtent(){const t=this._computeExtent();return null!=t?t.pending:Promise.resolve()}_computeExtent(){const t=this.spatialReference;if(null==this.observer?.position||null==t)return null;const e=t=>"absolute-height"===i(t.position,t.elevationInfo),o=this.observer.position,r=a$1(o.x,o.y,o.z,o.x,o.y,o.z);for(const i of this.targets)if(null!=i.position){const e=V$1(i.position,t);if(null!=e.pending)return {pending:e.pending,extent:null};if(null!=e.geometry){const{x:t,y:o,z:s}=e.geometry;l$3(r,[t,o,s]);}}const s=c$2(r,t);return e(this.observer)&&this.targets.every(e)||(s.zmin=void 0,s.zmax=void 0),{pending:null,extent:s}}clear(){this.observer=null,this.targets.removeAll();}};r([m$1({type:["line-of-sight"]})],d$1.prototype,"type",void 0),r([m$1({type:u$1,json:{read:!0,write:!0}})],d$1.prototype,"observer",void 0),r([m$1({cast:t,type:y,nonNullable:!0,json:{read:!0,write:!0}})],d$1.prototype,"targets",null),r([m$1({value:null,readOnly:!0})],d$1.prototype,"extent",void 0),r([m$1({readOnly:!0})],d$1.prototype,"spatialReference",null),r([m$1({readOnly:!0})],d$1.prototype,"requiredPropertiesForEditing",null),d$1=r([a("esri.analysis.LineOfSightAnalysis")],d$1);const v=d$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const m=V.ofType(f);let u=class extends(b$2(S$1(f$1))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new v,this.opacity=1;}initialize(){this.addHandles(d$2((()=>this.analysis),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this);}),A));}async load(){return null!=this.analysis&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return this.analysis?.observer}set observer(e){const{analysis:t}=this;t&&(t.observer=e);}get targets(){return null!=this.analysis?this.analysis.targets:new V}set targets(e){n$1(e,this.analysis?.targets);}get fullExtent(){return null!=this.analysis?this.analysis.extent:null}get spatialReference(){return null!=this.analysis?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new v);}};r([m$1({json:{read:!1},readOnly:!0})],u.prototype,"type",void 0),r([m$1({type:["LineOfSightLayer"]})],u.prototype,"operationalLayerType",void 0),r([m$1({type:u$1,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],u.prototype,"observer",null),r([m$1({type:m,json:{read:!0,write:{ignoreOrigin:!0}}})],u.prototype,"targets",null),r([m$1({nonNullable:!0,json:{read:!1,write:!1}})],u.prototype,"analysis",void 0),r([m$1({readOnly:!0})],u.prototype,"fullExtent",null),r([m$1({readOnly:!0})],u.prototype,"spatialReference",null),r([m$1({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],u.prototype,"opacity",void 0),r([m$1({type:["show","hide"]})],u.prototype,"listMode",void 0),u=r([a("esri.layers.LineOfSightLayer")],u);const d=u;

export { d as default };
