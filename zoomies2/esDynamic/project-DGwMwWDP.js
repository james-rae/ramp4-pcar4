import{k as s,o as i,A as d,v as S,bn as n,aW as m,ef as g,U as y}from"./main-DyJf3FFo.js";import{f as R,i as w}from"./utils--UsOW0Pk.js";import{o as v}from"./utils-D8LWziUK.js";let o=class extends S{constructor(e){super(e),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const e=this.geometries.map(a=>a.toJSON()),t=this.geometries[0],r={};return r.outSR=n(this.outSpatialReference),r.inSR=n(t.spatialReference),r.geometries=JSON.stringify({geometryType:m(t),geometries:e}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),this.transformForward!=null&&(r.transformForward=this.transformForward),r}};s([i()],o.prototype,"geometries",void 0),s([i({json:{read:{source:"outSR"}}})],o.prototype,"outSpatialReference",void 0),s([i()],o.prototype,"transformation",void 0),s([i()],o.prototype,"transformForward",void 0),o=s([d("esri.rest.support.ProjectParameters")],o);const f=o,O=g(f);async function j(e,t,r){t=O(t);const a=R(e),p={...a.query,f:"json",...t.toJSON()},u=t.outSpatialReference,c=m(t.geometries[0]),h=w(p,r);return y(a.path+"/project",h).then(({data:{geometries:l}})=>v(l,c,u))}export{j as n,f as p};
