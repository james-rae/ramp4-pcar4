import{h as i}from"./themeUtils-Cwl6dIdv.js";const s={arrow:"calcite-floating-ui-arrow",arrowStroke:"calcite-floating-ui-arrow__stroke"},l={width:12,height:6,strokeWidth:1},$=({floatingLayout:w,key:n,ref:d})=>{const{width:t,height:o,strokeWidth:r}=l,e=t/2,a=w==="vertical",h=`M0,0 H${t} L${t-e},${o} Q${e},${o} ${e},${o} Z`;return i("svg",{"aria-hidden":"true",class:s.arrow,height:t,key:n,ref:d,viewBox:`0 0 ${t} ${t+(a?0:r)}`,width:t+(a?r:0)},r>0&&i("path",{class:s.arrowStroke,d:h,fill:"none","stroke-width":r+1}),i("path",{d:h,stroke:"none"}))};export{$ as F};
