import{m as r}from"./themeUtils-CNV_eKPP.js";const c="calcite-list",i="calcite-list-item-group",a="calcite-list-item";function l(e){const t=e.parentElement?.closest(a);t&&(t.open=!0,l(t))}function m(e){const t=e.assignedElements({flatten:!0}),s=t.filter(n=>n?.matches(i)).map(n=>Array.from(n.querySelectorAll(a))).flat(),o=t.filter(n=>n?.matches(a));return{lists:t.filter(n=>n?.matches(c)),items:s.concat(o)}}function f(e){const t=e.assignedElements({flatten:!0}).filter(s=>s.matches(a));t.forEach(s=>{s.setPosition=t.indexOf(s)+1,s.setSize=t.length})}function u(e,t=!1){if(!r())return 0;const s=t?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(s,e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}function h(e){return e.tagName==="CALCITE-LIST-ITEM"}export{l as a,c,h as d,m as f,f as h,a as i,i as o,u as p};
