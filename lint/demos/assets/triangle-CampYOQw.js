import{s}from"./sphere-Dx5UVXyl.js";import{c,r as v,_ as w}from"./vec32-B0I2fEOr.js";import{cw as m,aA as o}from"./main-COW1-tZE.js";import{v as M}from"./lineSegment-BLHmZ4jP.js";import"./plane-B3KlNySL.js";function b(r){return r?{p0:m(r.p0),p1:m(r.p1),p2:m(r.p2)}:{p0:o(),p1:o(),p2:o()}}function S(r,p,n){const f=p[0]-r[0],a=p[1]-r[1],u=n[0]-r[0],e=n[1]-r[1];return .5*Math.abs(f*e-a*u)}function _(r,p,n){return c(t,p,r),c(i,n,r),.5*v(w(t,t,i))}new s(M);new s(()=>b());const t=o(),i=o();export{_ as S,S as v};