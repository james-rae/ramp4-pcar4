import{by as c,cp as k,cq as u,cr as m,cs as C,ct as f,cu as i}from"./main-Cvu-P-7v.js";const U=new c(k),n=new c(u),e=new c(m),g=new c(C);function q(t){const p=l.get(t);if(p)return p;let s=U;if(t)if(t===n)s=n;else if(t===e)s=e;else{const a=t.wkid,o=t.latestWkid;if(a!=null||o!=null)f(a)||f(o)?s=n:(i(a)||i(o))&&(s=e);else{const r=t.wkt2??t.wkt;if(r){const w=r.toUpperCase();w===d?s=n:w===$&&(s=e)}}}return l.set(t,s),s}const l=new Map,d=n.wkt.toUpperCase(),$=e.wkt.toUpperCase();export{q as a,g as w};