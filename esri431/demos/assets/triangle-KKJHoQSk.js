import { s } from './sphere-CvWAdV_f.js';
import { dZ as t, ap as n$1, d_ as c, ef as r, am as _ } from './main-jdFDoOPu.js';
import { v as v$1 } from './lineSegment-mPW8N6M_.js';
import './plane-CBOt8dOS.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function j(t$1){return t$1?{p0:t(t$1.p0),p1:t(t$1.p1),p2:t(t$1.p2)}:{p0:n$1(),p1:n$1(),p2:n$1()}}function v(t,e,n){const r=e[0]-t[0],o=e[1]-t[1],c=n[0]-t[0],s=n[1]-t[1];return .5*Math.abs(r*s-o*c)}function S(t,e,o){return c(M,e,t),c(O,o,t),.5*r(_(M,M,O))}new s(v$1);new s((()=>j()));const M=n$1(),O=n$1();

export { S, v };
