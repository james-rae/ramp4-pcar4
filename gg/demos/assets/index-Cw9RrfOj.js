import{F as m,eM as h,eN as r,eO as p}from"./main-BnINupoD.js";import"./preload-helper-ExcqyqRp.js";class A extends m{_parseConfig(e){if(e){const t=h(this.$vApp.$pinia);e.alwaysOn&&t.setAlwaysOn(!0);const i=e.extentSetIds;i&&Array.isArray(i)&&i.length>0&&t.setExtentSetIds(i)}}get config(){return super.config}}function f(a,e,t,i){const s=a-e,n=e+s/2,c=Math.min(s,t-i);return n>t?{min:t-c,max:t,changed:!0}:n<i?{min:i,max:i+c,changed:!0}:{min:e,max:a,changed:!1}}class g extends A{schemaEH="";extentEH="";added(){this._parseConfig(this.config);const e=this.$vApp.$watch(()=>this.config,t=>this._parseConfig(t));this.removed=()=>{e(),h(this.$vApp.$pinia).$reset(),this.evtOff("schemaEH"),this.evtOff("extentEH")},this.schemaEH=this.$iApi.event.on(r.MAP_BASEMAPCHANGE,t=>{t.schemaChanged&&this.checkActive()}),this.$iApi.geo.map.created?this.checkActive():this.$iApi.event.once(r.MAP_CREATED,()=>{this.checkActive()})}checkActive(){const e=h(this.$vApp.$pinia);e.alwaysOn||e.extentSetIds.includes(this.$iApi.geo.map.getExtentSet().id)?e.active||(e.setActive(!0),this.extentEH=this.$iApi.event.on(r.MAP_EXTENTCHANGE,t=>{e.enforcing||this.enforceBoundary(t,!1)})):e.active&&(e.setActive(!1),this.evtOff("extentEH"))}evtOff(e){this[e]&&(this.$iApi.event.off(this[e]),this[e]="")}enforceBoundary(e,t){const i=this.$iApi.geo.map.getExtentSet().maximumExtent,s=f(e.xmax,e.xmin,i.xmax,i.xmin),n=f(e.ymax,e.ymin,i.ymax,i.ymin);if(n.changed||s.changed){t&&(this.$iApi.geo.map.esriView.extent=i.toESRI());const c=p.fromParams("extguard",s.min,n.min,s.max,n.max,e.sr),o=h(this.$vApp.$pinia);o.setEnforcing(!0),setTimeout(()=>{this.$iApi.geo.map.zoomMapTo(c,void 0,!0,400,"ease-in-out").then(()=>{o.setEnforcing(!1),this.enforceBoundary(this.$iApi.geo.map.getExtent(),!0)})},150)}}}export{g as default};
