import{aE as l}from"./main-CUxU9bWS.js";import{y,m as f,M as k,I as M,f as b}from"./utils-QWndGYJy.js";function S(e){const o=[];return i(y(e),o),o.length?new l(b(o[0])):null}function i(e,o){if(!e)return;let a;a=e.type==="CIMTextSymbol"?e.symbol:e;const t=e.type==="CIMPolygonSymbol";if(a?.symbolLayers){for(const r of a.symbolLayers)if(!(r.colorLocked||t&&(f(r)||k(r)&&r.markerPlacement&&M(r.markerPlacement))))switch(r.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":r.tintColor&&m(o,r.tintColor);break;case"CIMVectorMarker":r.markerGraphics?.forEach(c=>{i(c.symbol,o)});break;case"CIMSolidStroke":case"CIMSolidFill":m(o,r.color);break;case"CIMHatchFill":i(r.lineSymbol,o)}}}function m(e,o){for(const a of e)if(a.join(".")===o.join("."))return;e.push(o)}function p(e,o,a){o instanceof l||(o=new l(o));const t=y(e);t&&n(t,o)}function n(e,o,a){if(!e)return;let t;t=e.type==="CIMTextSymbol"?e.symbol:e;const r=t?.type==="CIMPolygonSymbol";if(t?.symbolLayers)for(const c of t.symbolLayers){if(c.colorLocked||r&&(f(c)||k(c)&&c.markerPlacement&&M(c.markerPlacement)))continue;const s=o.toArray();switch(c.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":c.tintColor=s;break;case"CIMVectorMarker":c.markerGraphics?.forEach(C=>{n(C.symbol,o)});break;case"CIMSolidStroke":case"CIMSolidFill":c.color=s;break;case"CIMHatchFill":n(c.lineSymbol,o)}}}export{S as C,p as I};
