import{B as t,c6 as k,c7 as u,c8 as C,c9 as U,ca as l,cb as p}from"./main-CvsyIoCL.js";const d=new t(k),n=new t(u),a=new t(C),m=new t(U);function b(e){const w=f.get(e);if(w)return w;let s=d;if(e)if(e===n)s=n;else if(e===a)s=a;else{const c=e.wkid,o=e.latestWkid;if(c!=null||o!=null)l(c)||l(o)?s=n:(p(c)||p(o))&&(s=a);else{const i=e.wkt2??e.wkt;if(i){const r=i.toUpperCase();r===x?s=n:r===g&&(s=a)}}}return f.set(e,s),s}const f=new Map,x=n.wkt.toUpperCase(),g=a.wkt.toUpperCase();export{b as a,m as w};
