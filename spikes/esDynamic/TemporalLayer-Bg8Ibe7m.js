import{k as t,o as i,u as l,A as u,aZ as d}from"./main-DaZH2qzH.js";import{a as y}from"./commonProperties-CNeWdTKN.js";import{l as a,d as O,e as c}from"./TimeInfo-CmSjECAJ.js";import{p as w}from"./TimeExtent-Ce0DTrDh.js";const m={type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation",layerContainerTypes:y}}},x=p=>{let e=class extends p{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(s,f){const o=f.timeInfo.exportOptions;if(!o)return null;const r=o.timeOffset,n=c.fromJSON(o.timeOffsetUnits);return r&&n?new a({value:r,unit:n}):null}set timeInfo(s){d(s,this.fieldsIndex),this._set("timeInfo",s)}};return t([i({type:w,json:{write:!1}})],e.prototype,"timeExtent",void 0),t([i({type:a})],e.prototype,"timeOffset",void 0),t([l("service","timeOffset",["timeInfo.exportOptions"])],e.prototype,"readOffset",null),t([i({value:null,type:O,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],e.prototype,"timeInfo",null),t([i(m)],e.prototype,"useViewTime",void 0),e=t([u("esri.layers.mixins.TemporalLayer")],e),e};export{m as f,x as l};
