import{i as s}from"./themeUtils-Cd2hQloi.js";const c="calcite-list",o="calcite-list-item-group",l="calcite-list-item";function u(r){return Array.from(r.assignedElements({flatten:!0}).filter(e=>e.matches(c)))}function m(r){const e=r.assignedElements({flatten:!0}),a=e.filter(t=>t?.matches(o)).map(t=>Array.from(t.querySelectorAll(l))).reduce((t,i)=>[...t,...i],[]),n=e.filter(t=>t?.matches(l));return[...e.filter(t=>t?.matches(c)).map(t=>Array.from(t.querySelectorAll(l))).reduce((t,i)=>[...t,...i],[]),...a,...n]}function f(r){r.forEach(e=>{e.setPosition=r.indexOf(e)+1,e.setSize=r.length})}function h(r,e=!1){if(!s())return 0;const a=e?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(a,r,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}export{m as a,u as b,h as g,f as u};