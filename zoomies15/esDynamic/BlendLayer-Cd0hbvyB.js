import{k as r,o as t,A as s}from"./main-yxqK2SuK.js";import{n as l,a as d}from"./jsonUtils-BLd8jLtI.js";const o={type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0},"portal-item":{read:!0,write:!0}}}},i={read:{reader:l},write:{allowNull:!0,writer:d}},a={json:{read:!1,write:!1,origins:{"web-map":i,"portal-item":i}}},u=n=>{let e=class extends n{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return r([t(o)],e.prototype,"blendMode",void 0),r([t(a)],e.prototype,"effect",void 0),e=r([s("esri.layers.mixins.BlendLayer")],e),e};export{a,u as l,o as s};
