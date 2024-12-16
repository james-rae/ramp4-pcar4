import { bT as r, bU as m$1, bV as a, ez as b$1, g_ as o, fg as V, b5 as v, ed as o$1, gm as N, g$ as u$1, h0 as o$2, gM as i, h1 as c, h2 as r$1, ap as n$1 } from './main-jdFDoOPu.js';
import { p as p$1 } from './normalizeUtilsSync-gaQdI-2O.js';
import { e } from './mat3f64-DKAwfC1r.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let m=class extends b$1{constructor(o){super(o);}get bounds(){const o$1=this.coords;return null==o$1?.extent?null:o(o$1.extent)}get coords(){const o=this.element.georeference?.coords;return V(o,this.spatialReference).geometry}get normalizedCoords(){return v.fromJSON(p$1(this.coords))}get normalizedBounds(){const o$1=null!=this.normalizedCoords?this.normalizedCoords.extent:null;return null!=o$1?o(o$1):null}};r([m$1()],m.prototype,"spatialReference",void 0),r([m$1()],m.prototype,"element",void 0),r([m$1()],m.prototype,"bounds",null),r([m$1()],m.prototype,"coords",null),r([m$1()],m.prototype,"normalizedCoords",null),r([m$1()],m.prototype,"normalizedBounds",null),m=r([a("esri.layers.support.MediaElementView")],m);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const f=n$1(),n=e(),l=e(),u=e();function p(r,s,i){return o$1(f,s[0],s[1],1),N(f,f,u$1(n,i)),0===f[2]?o$2(r,f[0],f[1]):o$2(r,f[0]/f[2],f[1]/f[2])}function j(t,i$1,m){return x(l,i$1[0],i$1[1],i$1[2],i$1[3],i$1[4],i$1[5],i$1[6],i$1[7]),x(u,m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7]),i(t,c(l,l),u),0!==t[8]&&(t[0]/=t[8],t[1]/=t[8],t[2]/=t[8],t[3]/=t[8],t[4]/=t[8],t[5]/=t[8],t[6]/=t[8],t[7]/=t[8],t[8]/=t[8]),t}function x(m,o,c$1,l,u,p,j,x,b){r$1(m,o,l,p,c$1,u,j,1,1,1),o$1(f,x,b,1),c(n,m);const[g,h,v]=N(f,f,u$1(n,n));return r$1(n,g,0,0,0,h,0,0,0,v),i(m,n,m)}

export { j, m, p };
