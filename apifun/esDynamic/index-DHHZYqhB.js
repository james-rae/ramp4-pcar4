import{ek as E,el as w,eC as _,eD as d,gW as l,eI as y,ec as i,eJ as A,ew as T,ev as M,ez as x,eA as R,es as D,gq as I,F as P}from"./main-DeRV24Di.js";const C={en:{"panguard.instructions":"Use two fingers to pan the map"},fr:{"panguard.instructions":"Utilisez deux doigts pour faire un panoramique de la carte"}},S={class:"pg-label"},$=E({__name:"map-panguard",setup(h){const{t:p}=w(),a=_("iApi"),t=d(),r=d(-1),o=l([]),n=l([]);y(()=>{u(),n.push(a.event.on(i.MAP_CREATED,()=>{u()})),n.push(a.event.on(i.MAP_DESTROYED,()=>{o.forEach(e=>e.remove())})),n.push(a.event.on(i.MAP_REFRESH_START,()=>{o.forEach(e=>e.remove())})),n.push(a.event.on(i.MAP_REFRESH_END,()=>{u()}))}),A(()=>{n.forEach(e=>a.event.off(e)),o.forEach(e=>e.remove())});const u=()=>{const e=new Map;a.geo.map.viewPromise.then(()=>{o.push(a.geo.map.esriView.on("pointer-down",s=>{s.pointerType==="touch"&&e.set(s.pointerId,{x:s.x,y:s.y})})),o.push(a.geo.map.esriView.on(["pointer-up","pointer-leave"],s=>{s.pointerType==="touch"&&window.setTimeout(()=>{e.delete(s.pointerId)},200)})),o.push(a.geo.map.esriView.on("pointer-move",s=>{const{pointerId:v,pointerType:m,x:g,y:f}=s,c=e.get(v);if(!c||m!=="touch"||e.size!==1){t.value.classList.remove("pg-active");return}Math.sqrt(Math.pow(g-c.x,2)+Math.pow(f-c.y,2))<20||(t.value.classList.add("pg-active"),r.value!==-1&&clearTimeout(r.value),r.value=window.setTimeout(()=>{t.value.classList.remove("pg-active")},2e3))}))})};return(e,s)=>(D(),T("div",{class:"pg",ref_key:"panGuard",ref:t},[M("p",S,x(R(p)("panguard.instructions")),1)],512))}}),b=I($,[["__scopeId","data-v-22ab9ef7"]]);class F extends P{added(){Object.entries(C).forEach(t=>this.$iApi.$i18n.mergeLocaleMessage(...t));const{destroy:p,el:a}=this.mount(b,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(a.childNodes[0]),this.removed=()=>{p()}}}export{F as default};
