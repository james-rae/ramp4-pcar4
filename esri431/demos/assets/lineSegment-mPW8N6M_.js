import { dZ as t, ap as n$1, d_ as c, al as P$1, d$ as g, e0 as j$1, b6 as r$1, e1 as u, e2 as s$1 } from './main-jdFDoOPu.js';
import { s } from './sphere-CvWAdV_f.js';
import { c as c$1 } from './plane-CBOt8dOS.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function v(t$1){return t$1?{origin:t(t$1.origin),vector:t(t$1.vector)}:{origin:n$1(),vector:n$1()}}function b(t,r,e=v()){return s$1(e.origin,t),c(e.vector,r,t),e}function M(r,n){const c$2=c(c$1.get(),n,r.origin),s=P$1(r.vector,c$2),u=P$1(r.vector,r.vector),a=r$1(s/u,0,1),g$1=c(c$1.get(),g(c$1.get(),r.vector,a),c$2);return P$1(g$1,g$1)}function j(t,r,n){return A(t,r,0,1,n)}function A(r,n,u$1,a,g$1){const{vector:v,origin:m}=r,p=c(c$1.get(),n,m),h=P$1(v,p)/j$1(v);return g(g$1,v,r$1(h,u$1,a)),u(g$1,g$1,r.origin)}new s((()=>v()));

export { A, M, b, j, v };
