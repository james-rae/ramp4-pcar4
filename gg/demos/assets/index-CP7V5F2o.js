import{ek as d,ia as l,el as p,eC as u,eD as g,eo as h,eI as v,eN as m,eJ as f,ew as $,ev as _,ez as A,eA as S,es as w,gt as b,F as C}from"./main-BnINupoD.js";import"./preload-helper-ExcqyqRp.js";const E={en:{"scrollguard.instructions":"Use ctrl + scroll to zoom the map"},fr:{"scrollguard.instructions":"Utilisez les touches Ctrl et + pour faire un zoom de la carte"}},y={class:"sg-label"},x=d({__name:"map-scrollguard",setup(c){const e=l(),{t:a}=p(),s=u("iApi"),n=g(),t=h(()=>e.enabled);v(()=>{s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener("wheel",o,{capture:!0}),s.event.on(m.MAP_CREATED,()=>{s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener("wheel",o,{capture:!0})})}),f(()=>{s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.removeEventListener("wheel",o,{capture:!0})});const o=i=>{if(!t.value)return;const r=n.value.classList;i.ctrlKey?(r.remove("sg-active"),r.add("sg-scrolling")):(i.stopPropagation(),r.remove("sg-scrolling"),r.add("sg-active"),window.setTimeout(()=>r.remove("sg-active"),2e3))};return(i,r)=>(w(),$("div",{class:"sg",ref_key:"scrollGuard",ref:n},[_("p",y,A(S(a)("scrollguard.instructions")),1)],512))}}),L=b(x,[["__scopeId","data-v-cd7bd252"]]);class B extends C{setEnabled(e){l(this.$vApp.$pinia).enabled=e}_parseConfig(e){l(this.$vApp.$pinia).enabled=e?.enabled||!1}get config(){return super.config}}class z extends B{added(){Object.entries(E).forEach(t=>this.$iApi.$i18n.mergeLocaleMessage(...t)),this._parseConfig(this.config);const e=this.$vApp.$watch(()=>this.config,t=>this._parseConfig(t)),{destroy:a,el:s}=this.mount(L,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(s.childNodes[0]),this.removed=()=>{e(),a(),l(this.$vApp.$pinia).$reset()}}}export{z as default};
