import{s as r}from"./sphere-DeqUVpl8.js";import{c as s,r as v,_ as w}from"./vec32-E5gJqT0h.js";import{cH as a,aI as t}from"./main-DTtQVgOw.js";import{v as b}from"./lineSegment-CQuGWDqI.js";import"./plane-CCOH3u1B.js";function M(o){return o?{p0:a(o.p0),p1:a(o.p1),p2:a(o.p2)}:{p0:t(),p1:t(),p2:t()}}function h(o,p,n){const f=p[0]-o[0],c=p[1]-o[1],e=n[0]-o[0],u=n[1]-o[1];return .5*Math.abs(f*u-c*e)}function x(o,p,n){return s(m,p,o),s(i,n,o),.5*v(w(m,m,i))}new r(b),new r(()=>M());const m=t(),i=t();export{x as S,h as v};
