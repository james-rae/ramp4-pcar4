import{dV as d,hn as l,dW as p,eb as u,ec as g,dZ as h,eh as v,em as m,ei as f,e5 as $,e4 as _,e8 as A,e9 as S,e1 as b,g5 as w,F as E}from"./main-CUxU9bWS.js";import"./preload-helper-ExcqyqRp.js";const C={en:{"scrollguard.instructions":"Use ctrl + scroll to zoom the map"},fr:{"scrollguard.instructions":"Utilisez les touches Ctrl et + pour faire un zoom de la carte"}},y={class:"sg-label"},x=d({__name:"map-scrollguard",setup(c){const e=l(),{t:n}=p(),s=u("iApi"),a=g(),t=h(()=>e.enabled);v(()=>{s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener("wheel",o,{capture:!0}),s.event.on(m.MAP_CREATED,()=>{s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener("wheel",o,{capture:!0})})}),f(()=>{s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.removeEventListener("wheel",o,{capture:!0})});const o=i=>{if(!t.value)return;const r=a.value.classList;i.ctrlKey?(r.remove("sg-active"),r.add("sg-scrolling")):(i.stopPropagation(),r.remove("sg-scrolling"),r.add("sg-active"),window.setTimeout(()=>r.remove("sg-active"),2e3))};return(i,r)=>(b(),$("div",{class:"sg",ref_key:"scrollGuard",ref:a},[_("p",y,A(S(n)("scrollguard.instructions")),1)],512))}}),L=w(x,[["__scopeId","data-v-cd7bd252"]]);class B extends E{setEnabled(e){l(this.$vApp.$pinia).enabled=e}_parseConfig(e){l(this.$vApp.$pinia).enabled=e?.enabled||!1}get config(){return super.config}}class k extends B{added(){Object.entries(C).forEach(t=>this.$iApi.$i18n.mergeLocaleMessage(...t)),this._parseConfig(this.config);const e=this.$vApp.$watch(()=>this.config,t=>this._parseConfig(t)),{destroy:n,el:s}=this.mount(L,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(s.childNodes[0]),this.removed=()=>{e(),n(),l(this.$vApp.$pinia).$reset()}}}export{k as default};