import{dM as E,dN as w,e2 as _,e3 as c,gd as l,e8 as y,dE as i,e9 as M,dY as T,dX as A,d$ as x,e0 as R,dU as $,fN as N,F as P}from"./main-BL33V88t.js";const D={en:{"panguard.instructions":"Use two fingers to pan the map"},fr:{"panguard.instructions":"Utilisez deux doigts pour faire un panoramique de la carte"}},I={class:"pg-label"},S=E({__name:"map-panguard",setup(h){const{t:p}=w(),a=_("iApi"),s=c(),r=c(-1),o=l([]),n=l([]);y(()=>{d(),n.push(a.event.on(i.MAP_CREATED,()=>{d()})),n.push(a.event.on(i.MAP_DESTROYED,()=>{o.forEach(e=>e.remove())})),n.push(a.event.on(i.MAP_REFRESH_START,()=>{o.forEach(e=>e.remove())})),n.push(a.event.on(i.MAP_REFRESH_END,()=>{d()}))}),M(()=>{n.forEach(e=>a.event.off(e)),o.forEach(e=>e.remove())});const d=()=>{const e=new Map;a.geo.map.viewPromise.then(()=>{o.push(a.geo.map.esriView.on("pointer-down",t=>{t.pointerType==="touch"&&e.set(t.pointerId,{x:t.x,y:t.y})})),o.push(a.geo.map.esriView.on(["pointer-up","pointer-leave"],t=>{t.pointerType==="touch"&&window.setTimeout(()=>{e.delete(t.pointerId)},200)})),o.push(a.geo.map.esriView.on("pointer-move",t=>{const{pointerId:m,pointerType:v,x:g,y:f}=t,u=e.get(m);if(!u||v!=="touch"||e.size!==1){s.value.classList.remove("pg-active");return}Math.sqrt(Math.pow(g-u.x,2)+Math.pow(f-u.y,2))<20||(s.value.classList.add("pg-active"),r.value!==-1&&clearTimeout(r.value),r.value=window.setTimeout(()=>{s.value.classList.remove("pg-active")},2e3))}))})};return(e,t)=>($(),T("div",{class:"pg",ref_key:"panGuard",ref:s},[A("p",I,x(R(p)("panguard.instructions")),1)],512))}}),b=N(S,[["__scopeId","data-v-22ab9ef7"]]);class L extends P{added(){Object.entries(D).forEach(s=>this.$iApi.$i18n.mergeLocaleMessage(...s));const{destroy:p,el:a}=this.mount(b,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(a.childNodes[0]),this.removed=()=>{p()}}}export{L as default};
