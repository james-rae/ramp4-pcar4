import { bT as r, bU as m, bV as a$1, bW as f$1, ch as c, cg as p$1, hf as w, bQ as f, bR as i$1, U, hg as o } from './main-jdFDoOPu.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let a=class extends f$1{constructor(r){super(r),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null;}toJSON(){const r=this.geometries.map((r=>r.toJSON())),o=this.geometries[0],t={};return t.outSR=c(this.outSpatialReference),t.inSR=c(o.spatialReference),t.geometries=JSON.stringify({geometryType:p$1(o),geometries:r}),this.transformation&&(t.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(t.transformForward=this.transformForward),t}};r([m()],a.prototype,"geometries",void 0),r([m({json:{read:{source:"outSR"}}})],a.prototype,"outSpatialReference",void 0),r([m()],a.prototype,"transformation",void 0),r([m()],a.prototype,"transformForward",void 0),a=r([a$1("esri.rest.support.ProjectParameters")],a);const p=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const i=w(p);async function n(o$1,m,n){m=i(m);const u=f(o$1),c={...u.query,f:"json",...m.toJSON()},j=m.outSpatialReference,a=p$1(m.geometries[0]),f$1=i$1(c,n);return U(u.path+"/project",f$1).then((({data:{geometries:r}})=>o(r,a,j)))}

export { n, p };
