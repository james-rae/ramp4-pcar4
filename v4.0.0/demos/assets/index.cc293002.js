import{gA as l,g6 as c,g7 as d,g9 as p,gf as g,gc as u,gm as h,gs as m}from"./main.efb50b2c.js";import"./preload-helper.387dac8f.js";var v={en:{"scrollguard.instructions":"Use ctrl + scroll to zoom the map"},fr:{"scrollguard.instructions":"Utilisez les touches Ctrl et + pour faire un zoom de la carte"}};class f{enabled=!1}const _={},$={setEnabled(e,t){e.commit("SET_ENABLED",t)}},b={SET_ENABLED(e,t){e.enabled=t}};var s=(e=>(e.enabled="scrollguard/enabled",e))(s||{});function w(){const e=new f;return{namespaced:!0,state:e,getters:{..._},actions:{...$},mutations:{...b,...l.mutations(e)}}}const A=c({name:"MapScrollguardV",mounted(){this.$iApi.$vApp.$el.querySelector(".inner-shell + .esri-view").addEventListener("wheel",this.wheelHandler,{capture:!0})},beforeUnmount(){this.$iApi.$vApp.$el.querySelector(".inner-shell + .esri-view").removeEventListener("wheel",this.wheelHandler,{capture:!0})},data(){return{enabled:this.get(s.enabled)}},methods:{wheelHandler(e){if(!this.enabled)return;const t=this.$el.classList;e.ctrlKey?(t.remove("sg-active"),t.add("sg-scrolling")):(e.stopPropagation(),t.remove("sg-scrolling"),t.add("sg-active"),window.setTimeout(()=>t.remove("sg-active"),2e3))}}}),S={class:"sg",ref:"scrollGuard"},E={class:"sg-label"};function x(e,t,o,a,n,i){return p(),g("div",S,[u("p",E,h(e.$t("scrollguard.instructions")),1)],512)}var y=d(A,[["render",x],["__scopeId","data-v-29010e07"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/scrollguard/map-scrollguard.vue"]]);class C extends m{setEnabled(t){this.$vApp.$store.set(s.enabled,t)}_parseConfig(t){this.$vApp.$store.set(s.enabled,t?.enabled||!1)}get config(){return super.config}}class N extends C{added(){Object.entries(v).forEach(r=>this.$vApp.$i18n.mergeLocaleMessage(...r)),this.$vApp.$store.registerModule("scrollguard",w()),this._parseConfig(this.config);const t=this.$vApp.$watch(()=>this.config,r=>this._parseConfig(r)),{vNode:o,destroy:a,el:n}=this.mount(y,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(n.childNodes[0]),this.removed=()=>{t(),this.$vApp.$store.unregisterModule("scrollguard"),a()}}}export{N as default};
