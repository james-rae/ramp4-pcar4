import{bv as o,cm as k,cn as u,co as m,cp as C,cq as p,cr as l}from"./main-DnRb_GMc.js";const U=new o(k),n=new o(u),a=new o(m),d=new o(C);function g(e){const r=f.get(e);if(r)return r;let s=U;if(e)if(e===n)s=n;else if(e===a)s=a;else{const t=e.wkid,c=e.latestWkid;if(t!=null||c!=null)p(t)||p(c)?s=n:(l(t)||l(c))&&(s=a);else{const w=e.wkt2??e.wkt;if(w){const i=w.toUpperCase();i===q?s=n:i===b&&(s=a)}}}return f.set(e,s),s}const f=new Map,q=n.wkt.toUpperCase(),b=a.wkt.toUpperCase();export{g as a,d as w};