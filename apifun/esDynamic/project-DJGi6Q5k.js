import{x as s,z as i,M as d,K as y,G as S,by as n,aT as m,bI as g,a2 as R}from"./main-DeRV24Di.js";import{f as w,i as O}from"./utils-C8s4qYBR.js";import{o as j}from"./utils-lOk8-VTf.js";let o=class extends S{constructor(e){super(e),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const e=this.geometries.map(a=>a.toJSON()),t=this.geometries[0],r={};return r.outSR=n(this.outSpatialReference),r.inSR=n(t.spatialReference),r.geometries=JSON.stringify({geometryType:m(t),geometries:e}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),this.transformForward!=null&&(r.transformForward=this.transformForward),r}};s([i()],o.prototype,"geometries",void 0),s([i({type:d,json:{read:{source:"outSR"}}})],o.prototype,"outSpatialReference",void 0),s([i()],o.prototype,"transformation",void 0),s([i()],o.prototype,"transformForward",void 0),o=s([y("esri.rest.support.ProjectParameters")],o);const p=o,v=g(p);async function F(e,t,r){t=v(t);const a=w(e),f={...a.query,f:"json",...t.toJSON()},u=t.outSpatialReference,c=m(t.geometries[0]),h=O(f,r);return R(a.path+"/project",h).then(({data:{geometries:l}})=>j(l,c,u))}export{p as m,F as n};
