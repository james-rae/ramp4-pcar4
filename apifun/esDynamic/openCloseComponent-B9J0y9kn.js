import{F as r}from"./dom-B6JAlxqC.js";function e(o){return o[o.openProp||"open"]}function t(o){requestAnimationFrame(()=>{o.transitionEl&&r(o.transitionEl,o.transitionProp,()=>{e(o)?o.onBeforeOpen():o.onBeforeClose()},()=>{e(o)?o.onOpen():o.onClose()})})}export{t as s};
