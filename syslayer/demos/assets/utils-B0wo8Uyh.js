import{cC as f}from"./main-D_jCcUNd.js";function y(t){const r=t.map(({name:e,count:o,type:a})=>`${e}.${o}.${a}`).join(",");return f(r)}function m(t,r,e,o,a,c,l){if(t.primitiveName===r){let i=o?.readWithDefault(a,c,t[e]&&l);return t.type==="text"&&(i=i.toString()),void(t[e]=i)}if("type"in t&&t.type!=null){if(t.effects)for(const i of t.effects)m(i,r,e,o,a,c,l);switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(t.symbolLayers)for(const i of t.symbolLayers)m(i,r,e,o,a,c,l);break;case"CIMTextSymbol":t.symbol&&m(t.symbol,r,e,o,a,c,l);break;case"CIMHatchFill":t.lineSymbol&&m(t.lineSymbol,r,e,o,a,c,l);break;case"CIMPictureMarker":case"CIMCharacterMarker":case"CIMVectorMarker":if(t.markerPlacement&&m(t.markerPlacement,r,e,o,a,c,l),t.type==="CIMVectorMarker"&&t.markerGraphics)for(const i of t.markerGraphics)m(i,r,e,o,a,c,l),m(i.symbol,r,e,o,a,c,l)}}}const n=400;function b(t){const r=t.width;return t.effects!=null?n:Math.max(1.25*r,8)}export{b as a,y as r,m as t};
