import{bg as f,bh as l}from"./main-DqYc2eZZ.js";function r(s,t,i){if(s.hasM==null||s.hasZ)for(const e of t)for(const o of e)o.length>2&&(o[2]*=i)}function c(s,t,i){if(!s&&!t||!i)return;const e=f(i);a(s,i,e),a(t,i,e)}function a(s,t,i){if(s)for(const e of s)n(e.geometry,t,i)}function n(s,t,i){if(!s?.spatialReference||l(s.spatialReference,t))return;const e=f(s.spatialReference)/i;if(e!==1){if("x"in s)s.z!=null&&(s.z*=e);else if("rings"in s)r(s,s.rings,e);else if("paths"in s)r(s,s.paths,e);else if("points"in s&&(s.hasM==null||s.hasZ))for(const o of s.points)o.length>2&&(o[2]*=e)}}export{c as i};
