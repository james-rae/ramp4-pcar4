import{F as r,dO as c,dP as o,dQ as A}from"./main-CvsyIoCL.js";class f extends r{_parseConfig(e){if(e){const t=c(this.$vApp.$pinia);e.alwaysOn&&t.setAlwaysOn(!0);const i=e.extentSetIds;i&&Array.isArray(i)&&i.length>0&&t.setExtentSetIds(i)}}get config(){return super.config}}function p(a,e,t,i){const s=a-e,n=e+s/2,h=Math.min(s,t-i);return n>t?{min:t-h,max:t,changed:!0}:n<i?{min:i,max:i+h,changed:!0}:{min:e,max:a,changed:!1}}class x extends f{schemaEH="";extentEH="";added(){this._parseConfig(this.config);const e=this.$vApp.$watch(()=>this.config,t=>this._parseConfig(t));this.removed=()=>{e(),c(this.$vApp.$pinia).$reset(),this.evtOff("schemaEH"),this.evtOff("extentEH")},this.schemaEH=this.$iApi.event.on(o.MAP_BASEMAPCHANGE,t=>{t.schemaChanged&&this.checkActive()}),this.$iApi.geo.map.created?this.checkActive():this.$iApi.event.once(o.MAP_CREATED,()=>{this.checkActive()})}checkActive(){const e=c(this.$vApp.$pinia);e.alwaysOn||e.extentSetIds.includes(this.$iApi.geo.map.getExtentSet().id)?e.active||(e.setActive(!0),this.extentEH=this.$iApi.event.on(o.MAP_EXTENTCHANGE,t=>{e.enforcing||this.enforceBoundary(t,!1)})):e.active&&(e.setActive(!1),this.evtOff("extentEH"))}evtOff(e){this[e]&&(this.$iApi.event.off(this[e]),this[e]="")}enforceBoundary(e,t){const i=this.$iApi.geo.map.getExtentSet().maximumExtent,s=p(e.xmax,e.xmin,i.xmax,i.xmin),n=p(e.ymax,e.ymin,i.ymax,i.ymin);if(n.changed||s.changed){t&&(this.$iApi.geo.map.esriView.extent=i.toESRI());const h=A.fromParams("extguard",s.min,n.min,s.max,n.max,e.sr),m=c(this.$vApp.$pinia);m.setEnforcing(!0),setTimeout(()=>{this.$iApi.geo.map.zoomMapTo(h,void 0,!0,400,"ease-in-out").then(()=>{m.setEnforcing(!1),this.enforceBoundary(this.$iApi.geo.map.getExtent(),!0)})},150)}}}export{x as default};
