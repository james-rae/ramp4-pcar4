import{s as n,d2 as a,bO as m,d3 as d,aA as u}from"./main-uRGA0thB.js";import{e as h}from"./LRUCache-D0O054vr.js";let c=b();function b(){return new h(50)}async function v(r,i=null){if(!r.isPrimitive){const e=r.resource?.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const s=c.get(e);if(s!==void 0)return s;const{fetch:l}=await import("./objectResourceUtils-CqaoNnsb.js"),f=await l(e,{disableTextures:!0,spherical:!0,doublePrecisionRequiresObfuscation:!0}),t=a(f.referenceBoundingBox,u());return c.put(e,t),t}if(!r.resource?.primitive)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const o=m(d(r.resource.primitive));if(i!=null)for(let e=0;e<o.length;e++)o[e]*=i;return a(o,u())}export{v as computeObjectLayerResourceSize};
