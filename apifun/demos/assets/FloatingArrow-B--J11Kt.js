import{n as c}from"./ref-xQiEGQWW.js";import{i as f}from"./keyed-B2gO5gxN.js";import{x as g,a as $,d as s,E as h}from"./themeUtils-2piyLhQV.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const n={arrow:"calcite-floating-ui-arrow",arrowStroke:"calcite-floating-ui-arrow__stroke"},k={width:12,height:6,strokeWidth:1},v=({floatingLayout:d,key:l,ref:w})=>{const{width:t,height:r,strokeWidth:o}=k,a=t/2,i=d==="vertical",e=`M0,0 H${t} L${t-a},${r} Q${a},${r} ${a},${r} Z`;return f(l,g`<svg aria-hidden=true class=${$(n.arrow)} height=${t} viewBox=${`0 0 ${t} ${t+(i?0:o)}`} width=${t+(i?o:0)} ${c(w)}>${s`${s`<path class=${$(n.arrowStroke)} d=${e??h} fill=none stroke-width=${o+1} />`||""}<path d=${e??h} stroke=none />`}</svg>`)};export{v as S};
