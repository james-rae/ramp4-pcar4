import{bi as a,bj as l}from"./main-BnINupoD.js";function t(n,o,f){if(n.hasM==null||n.hasZ)for(const s of o)for(const e of s)e.length>2&&(e[2]*=f)}function p(n,o,f){if(!n&&!o||!f)return;const s=a(f);r(n,f,s),r(o,f,s)}function r(n,o,f){if(n)for(const s of n)c(s.geometry,o,f)}function c(n,o,f){if(!n?.spatialReference||l(n.spatialReference,o))return;const s=a(n.spatialReference)/f;if(s!==1){if("x"in n)n.z!=null&&(n.z*=s);else if("rings"in n)t(n,n.rings,s);else if("paths"in n)t(n,n.paths,s);else if("points"in n&&(n.hasM==null||n.hasZ))for(const e of n.points)e.length>2&&(e[2]*=s)}}export{p as i};
