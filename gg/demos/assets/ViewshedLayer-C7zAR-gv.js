import{J as T,aZ as G,g7 as B,B as i,D as r,bE as C,bI as H,gG as I,N as E,V as D,dn as U,aO as S,dp as A,dm as Y,bB as Z,d3 as F,aR as q,G as k}from"./main-BnINupoD.js";import{c as K,b as Q}from"./featureReferenceUtils-BZJP_F-0.js";import{a as g}from"./Cyclical-B9WPg2EH.js";import{c as W}from"./Analysis-DA5mH051.js";import{Y as X}from"./projection-BG6zqujR.js";import{S as ee}from"./MultiOriginJSONSupport-CGej6qDM.js";import{f as te}from"./Layer-CwalWWQV.js";import{b as ie}from"./OperationalLayer-DKH-ff4v.js";import"./preload-helper-ExcqyqRp.js";import"./vec32-zaCIH5IA.js";import"./common-DQOJ18NT.js";import"./sphere-PuK9bi4-.js";import"./mat4-pV3Yd6bK.js";import"./vec42-CKs01hkn.js";import"./vec4f64-o2zAXfmz.js";import"./mat3-CruJiiUv.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-BbrtMSGO.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./vec2f64-DohEyf3f.js";import"./IntersectorInterfaces-BgX4KEwK.js";import"./boundedPlane-D2JhHQSD.js";import"./lineSegment-Cechqz02.js";import"./projectBuffer-aZbPqVLL.js";import"./TimeExtent-Drrkeg7H.js";import"./layerContainerType-C5CzMsLd.js";import"./commonProperties-Bl81uyDg.js";import"./ElevationInfo-Cbv7unv8.js";import"./lengthUtils-CI7g6Q2A.js";let o=class extends T.JSONSupportMixin(G){constructor(t){super(t),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45,this.feature=null}isValid(){return this.observer!=null&&this.farDistance>0}equals(t){return B(this.observer,t.observer)&&this.farDistance===t.farDistance&&this.heading===t.heading&&this.tilt===t.tilt&&this.horizontalFieldOfView===t.horizontalFieldOfView&&this.verticalFieldOfView===t.verticalFieldOfView&&K(this.feature,t.feature)}};i([r({type:C,json:{write:{isRequired:!0}}})],o.prototype,"observer",void 0),i([r({type:Number,nonNullable:!0,range:{min:0},json:{write:{isRequired:!0}}})],o.prototype,"farDistance",void 0),i([r({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),H(e=>g.normalize(I(e),void 0,!0))],o.prototype,"heading",void 0),i([r({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],o.prototype,"tilt",void 0),i([r({type:Number,nonNullable:!0,range:{min:0,max:360},json:{write:{isRequired:!0}}})],o.prototype,"horizontalFieldOfView",void 0),i([r({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],o.prototype,"verticalFieldOfView",void 0),i([r(Q)],o.prototype,"feature",void 0),i([r({json:{read:!1}})],o.prototype,"isValid",null),o=i([E("esri.analysis.Viewshed")],o);const L=o,$=D.ofType(L);let p=class extends W{constructor(e){super(e),this.type="viewshed",this._extent=null}initialize(){this.addHandles(S(()=>this._computeExtent(),e=>{e.pending==null&&(this._extent=e.extent)},A))}get viewsheds(){return this._get("viewsheds")||new $}set viewsheds(e){this._set("viewsheds",Y(e,this.viewsheds,$))}get spatialReference(){for(const e of this.viewsheds)if(e.observer!=null)return e.observer.spatialReference;return null}get extent(){return this._extent}get requiredPropertiesForEditing(){return this.viewsheds.items.map(({observer:e})=>e)}async waitComputeExtent(){const e=this._computeExtent();e.pending!=null&&await e.pending}_computeExtent(){const{spatialReference:e}=this;if(e==null)return{pending:null,extent:null};const t=this.viewsheds.filter(s=>s.observer!=null),c=t.map(s=>s.observer).toArray(),l=X(c,e);return l.pending!=null?{pending:l.pending,extent:null}:{pending:null,extent:l.geometries.map((s,u)=>{const x=t.at(u);return s!=null&&x!=null?this._computeViewshedExtent(this.viewsheds.at(u),s):null}).filter(s=>s!=null).reduce((s,u)=>re(s,u),null)}}_computeViewshedExtent(e,t){const{farDistance:c,heading:l,tilt:s,horizontalFieldOfView:u,verticalFieldOfView:x}=e,{spatialReference:j}=t,b=u/2,O=x/2,V=c/j.metersPerUnit,P=[g.normalize(l-b),l,g.normalize(l+b)],d=Z.fromPoint(t),f=w=>{const h=P.map(a=>g.normalize(a-w));if(h[0]>h[2]||u===360)return V;const m=h.map(a=>Math.abs(a>180?360-a:a)).reduce((a,v)=>a>v?v:a);return m>90?0:V*Math.cos(F(m))};d.xmax+=f(90),d.xmin-=f(-90),d.ymax+=f(0),d.ymin-=f(180);const y=t.z;if(y!=null){let w=y,h=y;const m=s-90,a=q(m+O,-90,90),v=q(m-O,-90,90),N=j?.isGeographic?c:V;w+=N*R(a),h+=N*R(v);const J=M(O)*N,_=R(m)*J*(1-M(b));s<90&&(w-=_),s>90&&(h-=_),d.zmax=Math.max(w,y),d.zmin=Math.min(h,y)}return d}clear(){this.viewsheds.removeAll()}};function re(e,t){return e==null?t:t==null?e:e.union(t)}function M(e){return Math.cos(F(e))}function R(e){return Math.sin(F(e))}i([r({type:["viewshed"]})],p.prototype,"type",void 0),i([r({cast:U,type:$,nonNullable:!0})],p.prototype,"viewsheds",null),i([r({readOnly:!0})],p.prototype,"spatialReference",null),i([r()],p.prototype,"_extent",void 0),i([r({readOnly:!0})],p.prototype,"extent",null),i([r({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",null),p=i([E("esri.analysis.ViewshedAnalysis")],p);const z=p;let n=class extends ie(ee(te)){constructor(e){super(e),this.type="viewshed",this.operationalLayerType="ViewshedLayer",this.source=new z,this.opacity=1}initialize(){this.addHandles(S(()=>this.source,(e,t)=>{t!=null&&t.parent===this&&(t.parent=null),e!=null&&(e.parent=this)},A))}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new z)}get analysis(){return this.source}set analysis(e){this.source=e}get viewsheds(){return this.source.viewsheds}set viewsheds(e){this.source.viewsheds=e}writeViewsheds(e,t,c,l){t.viewsheds=e.filter(s=>s.isValid()).map(s=>s.toJSON(l)).toJSON()}};i([r({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),i([r({type:["ViewshedLayer"]})],n.prototype,"operationalLayerType",void 0),i([r({type:z,nonNullable:!0})],n.prototype,"source",void 0),i([r({readOnly:!0})],n.prototype,"spatialReference",null),i([r({readOnly:!0})],n.prototype,"fullExtent",null),i([r({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),i([r({type:["show","hide"]})],n.prototype,"listMode",void 0),i([r({type:D.ofType(L),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],n.prototype,"viewsheds",null),i([k("web-scene","viewsheds")],n.prototype,"writeViewsheds",null),n=i([E("esri.layers.ViewshedLayer")],n);const Se=n;export{Se as default};
