import{d9 as H,fr as J,k as t,o as i,bv as X,by as k,f$ as G,A as N,g0 as I,V as q,cX as U,aE as M,f1 as D,cW as W,au as $,eI as R,aP as P,q as B}from"./main-DqYc2eZZ.js";import{c as K,b as Q}from"./featureReferenceUtils-Dyc_oMvy.js";import{a as g}from"./Cyclical-BRC5wkLn.js";import{c as Y}from"./Analysis-KyLkV746.js";import{X as Z}from"./projection-CThvDJoN.js";import{S as ee}from"./MultiOriginJSONSupport-BjQYN9UY.js";import{f as te}from"./Layer-CVf4mOVm.js";import{b as ie}from"./OperationalLayer-_noFZqj2.js";let o=class extends H(I){constructor(e){super(e),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45,this.feature=null}isValid(){return this.observer!=null&&this.farDistance>0}equals(e){return J(this.observer,e.observer)&&this.farDistance===e.farDistance&&this.heading===e.heading&&this.tilt===e.tilt&&this.horizontalFieldOfView===e.horizontalFieldOfView&&this.verticalFieldOfView===e.verticalFieldOfView&&K(this.feature,e.feature)}};t([i({type:X,json:{write:!0}})],o.prototype,"observer",void 0),t([i({type:Number,nonNullable:!0,range:{min:0},json:{write:{isRequired:!0}}})],o.prototype,"farDistance",void 0),t([i({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),k(e=>g.normalize(G(e),void 0,!0))],o.prototype,"heading",void 0),t([i({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],o.prototype,"tilt",void 0),t([i({type:Number,nonNullable:!0,range:{min:0,max:360},json:{write:{isRequired:!0}}})],o.prototype,"horizontalFieldOfView",void 0),t([i({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],o.prototype,"verticalFieldOfView",void 0),t([i(Q)],o.prototype,"feature",void 0),t([i({json:{read:!1}})],o.prototype,"isValid",null),o=t([N("esri.analysis.Viewshed")],o);const A=o,E=q.ofType(A);let p=class extends Y{constructor(e){super(e),this.type="viewshed",this._extent=null}initialize(){this.addHandles(M(()=>this._computeExtent(),e=>{e.pending==null&&(this._extent=e.extent)},D))}get viewsheds(){return this._get("viewsheds")||new E}set viewsheds(e){this._set("viewsheds",W(e,this.viewsheds,E))}get spatialReference(){for(const e of this.viewsheds)if(e.observer!=null)return e.observer.spatialReference;return null}get extent(){return this._extent}get requiredPropertiesForEditing(){return this.viewsheds.items.map(({observer:e})=>e)}async waitComputeExtent(){const e=this._computeExtent();e.pending!=null&&await e.pending}_computeExtent(){const{spatialReference:e}=this;if(e==null)return{pending:null,extent:null};const r=this.viewsheds.filter(s=>s.observer!=null),y=r.map(s=>s.observer).toArray(),l=Z(y,e);return l.pending!=null?{pending:l.pending,extent:null}:{pending:null,extent:l.geometries.map((s,u)=>{const x=r.at(u);return s!=null&&x!=null?this._computeViewshedExtent(this.viewsheds.at(u),s):null}).filter(s=>s!=null).reduce((s,u)=>se(s,u),null)}}_computeViewshedExtent(e,r){const{farDistance:y,heading:l,tilt:s,horizontalFieldOfView:u,verticalFieldOfView:x}=e,{spatialReference:_}=r,b=u/2,V=x/2,O=y/_.metersPerUnit,S=[g.normalize(l-b),l,g.normalize(l+b)],d=$.fromPoint(r),f=m=>{const h=S.map(a=>g.normalize(a-m));if(h[0]>h[2]||u===360)return O;const c=h.map(a=>Math.abs(a>180?360-a:a)).reduce((a,v)=>a>v?v:a);return c>90?0:O*Math.cos(R(c))};d.xmax+=f(90),d.xmin-=f(-90),d.ymax+=f(0),d.ymin-=f(180);const w=r.z;if(w!=null){let m=w,h=w;const c=s-90,a=P(c+V,-90,90),v=P(c-V,-90,90),z=_?.isGeographic?y:O;m+=z*F(a),h+=z*F(v);const C=L(V)*z,j=F(c)*C*(1-L(b));s<90&&(m-=j),s>90&&(h-=j),d.zmax=Math.max(m,w),d.zmin=Math.min(h,w)}return d}clear(){this.viewsheds.removeAll()}};function se(e,r){return e==null?r:r==null?e:e.union(r)}function L(e){return Math.cos(R(e))}function F(e){return Math.sin(R(e))}t([i({type:["viewshed"]})],p.prototype,"type",void 0),t([i({cast:U,type:E,nonNullable:!0})],p.prototype,"viewsheds",null),t([i({readOnly:!0})],p.prototype,"spatialReference",null),t([i()],p.prototype,"_extent",void 0),t([i({readOnly:!0})],p.prototype,"extent",null),t([i({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",null),p=t([N("esri.analysis.ViewshedAnalysis")],p);const T=p;let n=class extends ie(ee(te)){constructor(e){super(e),this.type="viewshed",this.operationalLayerType="ViewshedLayer",this.source=new T,this.opacity=1}initialize(){this.addHandles(M(()=>this.source,(e,r)=>{r!=null&&r.parent===this&&(r.parent=null),e!=null&&(e.parent=this)},D))}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new T)}get analysis(){return this.source}set analysis(e){this.source=e}get viewsheds(){return this.source.viewsheds}set viewsheds(e){this.source.viewsheds=e}writeViewsheds(e,r,y,l){r.viewsheds=e.filter(s=>s.isValid()).map(s=>s.toJSON(l)).toJSON()}};t([i({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([i({type:["ViewshedLayer"]})],n.prototype,"operationalLayerType",void 0),t([i({nonNullable:!0})],n.prototype,"source",void 0),t([i({readOnly:!0})],n.prototype,"spatialReference",null),t([i({readOnly:!0})],n.prototype,"fullExtent",null),t([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),t([i({type:["show","hide"]})],n.prototype,"listMode",void 0),t([i({type:q.ofType(A),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],n.prototype,"viewsheds",null),t([B("web-scene","viewsheds")],n.prototype,"writeViewsheds",null),n=t([N("esri.layers.ViewshedLayer")],n);const re=n;export{re as default};
