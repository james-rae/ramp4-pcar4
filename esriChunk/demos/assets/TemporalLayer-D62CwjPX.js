import{q as t,u as i,z as p,C as f,aZ as u}from"./main-B3JhZOBP.js";import{a as d}from"./commonProperties-qelEtEdW.js";import{l as m,d as y,e as O}from"./TimeInfo-BXYfxe2L.js";import{p as c}from"./TimeExtent-XypRjgMf.js";const w={type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation",layerContainerTypes:d}}},g=a=>{let e=class extends a{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(o,l){const r=l.timeInfo.exportOptions;if(!r)return null;const s=r.timeOffset,n=O.fromJSON(r.timeOffsetUnits);return s&&n?new m({value:s,unit:n}):null}set timeInfo(o){u(o,this.fieldsIndex),this._set("timeInfo",o)}};return t([i({type:c,json:{write:!1}})],e.prototype,"timeExtent",void 0),t([i({type:m})],e.prototype,"timeOffset",void 0),t([p("service","timeOffset",["timeInfo.exportOptions"])],e.prototype,"readOffset",null),t([i({value:null,type:y,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],e.prototype,"timeInfo",null),t([i(w)],e.prototype,"useViewTime",void 0),e=t([f("esri.layers.mixins.TemporalLayer")],e),e};export{w as f,g as l};