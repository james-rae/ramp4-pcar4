import{x as t,z as i,D as l,K as u,aW as d}from"./main-DeRV24Di.js";import{a as y}from"./layerContainerType-ChWdCT09.js";import{l as a,d as O,e as c}from"./TimeInfo-cNeglzDY.js";import{p as w}from"./TimeExtent-Bh6vqv-J.js";const m={type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation",layerContainerTypes:y}}},x=p=>{let e=class extends p{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(s,f){const o=f.timeInfo.exportOptions;if(!o)return null;const r=o.timeOffset,n=c.fromJSON(o.timeOffsetUnits);return r&&n?new a({value:r,unit:n}):null}set timeInfo(s){d(s,this.fieldsIndex),this._set("timeInfo",s)}};return t([i({type:w,json:{write:!1}})],e.prototype,"timeExtent",void 0),t([i({type:a})],e.prototype,"timeOffset",void 0),t([l("service","timeOffset",["timeInfo.exportOptions"])],e.prototype,"readOffset",null),t([i({value:null,type:O,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],e.prototype,"timeInfo",null),t([i(m)],e.prototype,"useViewTime",void 0),e=t([u("esri.layers.mixins.TemporalLayer")],e),e};export{m as f,x as l};
