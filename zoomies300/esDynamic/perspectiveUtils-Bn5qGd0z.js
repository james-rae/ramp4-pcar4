import{k as n,o as a,A as w,aD as A,eR as p,bC as D,aA as E}from"./main-DqYc2eZZ.js";import{V as J}from"./projection-CThvDJoN.js";import{p as I}from"./normalizeUtilsSync-CWU7gvfK.js";import{u as m,i as d,c,r as f}from"./mat3-CC4Foazl.js";import{e as i}from"./mat3f64-Dh9_zhFu.js";import{o as y}from"./vec2-tHZ6OaOy.js";import{o as g,N as h}from"./vec32-BemlCnwz.js";let o=class extends A{constructor(e){super(e)}get bounds(){const e=this.coords;return e?.extent==null?null:p(e.extent)}get coords(){const e=this.element.georeference?.coords;return J(e,this.spatialReference).geometry}get normalizedCoords(){return D.fromJSON(I(this.coords))}get normalizedBounds(){const e=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return e!=null?p(e):null}};n([a()],o.prototype,"spatialReference",void 0),n([a()],o.prototype,"element",void 0),n([a()],o.prototype,"bounds",null),n([a()],o.prototype,"coords",null),n([a()],o.prototype,"normalizedCoords",null),n([a()],o.prototype,"normalizedBounds",null),o=n([w("esri.layers.support.MediaElementView")],o);const r=E(),l=i(),u=i(),z=i();function K(e,t,s){return g(r,t[0],t[1],1),h(r,r,m(l,s)),r[2]===0?y(e,r[0],r[1]):y(e,r[0]/r[2],r[1]/r[2])}function M(e,t,s){return x(u,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),x(z,s[0],s[1],s[2],s[3],s[4],s[5],s[6],s[7]),d(e,c(u,u),z),e[8]!==0&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function x(e,t,s,C,b,B,N,R,V){f(e,t,C,B,s,b,N,1,1,1),g(r,R,V,1),c(l,e);const[j,k,v]=h(r,r,m(l,l));return f(l,j,0,0,0,k,0,0,0,v),d(e,l,e)}export{M as j,o as m,K as p};
