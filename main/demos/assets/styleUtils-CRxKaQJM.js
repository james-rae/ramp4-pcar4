import{_ as a,G as i,B as c}from"./main-C45WTWFO.js";async function l(r,e,o){const s=r&&r.getAtOrigin&&r.getAtOrigin("renderer",e.origin);if(s&&s.type==="unique-value"&&s.styleOrigin){const n=await a(s.populateFromStyle());if(i(o),n.ok===!1){const t=n.error;e?.messages&&e.messages.push(new c("renderer:style-reference",`Failed to create unique value renderer from style reference: ${t.message}`,{error:t,context:e})),r.clear("renderer",e?.origin)}}}export{l as t};
