import{q as t,u as i,aY as p,z as f,C as u,aZ as d}from"./main-CUxU9bWS.js";import{a as y}from"./commonProperties-BWvpypTA.js";import{l as m,d as O,e as c}from"./TimeInfo-C3qfLVA5.js";const w={type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation",layerContainerTypes:y}}},h=a=>{let e=class extends a{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(o,l){const r=l.timeInfo.exportOptions;if(!r)return null;const s=r.timeOffset,n=c.fromJSON(r.timeOffsetUnits);return s&&n?new m({value:s,unit:n}):null}set timeInfo(o){d(o,this.fieldsIndex),this._set("timeInfo",o)}};return t([i({type:p,json:{write:!1}})],e.prototype,"timeExtent",void 0),t([i({type:m})],e.prototype,"timeOffset",void 0),t([f("service","timeOffset",["timeInfo.exportOptions"])],e.prototype,"readOffset",null),t([i({value:null,type:O,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],e.prototype,"timeInfo",null),t([i(w)],e.prototype,"useViewTime",void 0),e=t([u("esri.layers.mixins.TemporalLayer")],e),e};export{w as f,h as l};
