import{aw as m,cy as c}from"./main-CUxU9bWS.js";function u(n,e){return e?"xoffset"in e&&e.xoffset?Math.max(n,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(n,Math.abs(e.yoffset||0)):n:n}function h(n){let e=0,r=0;for(let t=0;t<n.length;t++){const s=n[t].size;typeof s=="number"&&(e+=s,r++)}return e/r}function p(n,e){return typeof n=="number"?n:n?.stops?.length?h(n.stops):e}function M(n,e){if(!e)return n;const r=e.filter(o=>o.type==="size").map(o=>{const{maxSize:f,minSize:i}=o;return(p(f,n)+p(i,n))/2});let t=0;const s=r.length;if(s===0)return n;for(let o=0;o<s;o++)t+=r[o];const a=Math.floor(t/s);return Math.max(a,n)}function b(n){const e=n?.renderer,r=n?.pointerType,t=r==="touch"?9:6;if(!e)return t;const s="visualVariables"in e?M(t,e.visualVariables):t;if(e.type==="simple")return u(s,e.symbol);if(e.type==="unique-value"){let a=s;return e.uniqueValueInfos?.forEach(o=>{a=u(a,o.symbol)}),a}if(e.type==="class-breaks"){let a=s;return e.classBreakInfos.forEach(o=>{a=u(a,o.symbol)}),a}return e.type==="dot-density"||e.type,s}function z(n,e,r,t=new m){let s=0;if(r.type==="2d")s=e*(r.resolution??0);else if(r.type==="3d"){const x=r.overlayPixelSizeInMapUnits(n),l=r.basemapSpatialReference;s=l==null||l.equals(r.spatialReference)?e*x:c(l)/c(r.spatialReference)}const a=n.x-s,o=n.y-s,f=n.x+s,i=n.y+s,{spatialReference:y}=r;return t.xmin=Math.min(a,f),t.ymin=Math.min(o,i),t.xmax=Math.max(a,f),t.ymax=Math.max(o,i),t.spatialReference=y,t}function v(n,e,r){const t=r.toMap(n);return t==null?!1:z(t,b(),r,d).intersects(e)}const d=new m;export{v as i,b as o,z as r};
