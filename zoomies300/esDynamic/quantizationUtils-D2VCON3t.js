import"./main-DqYc2eZZ.js";function z(t){return t?{originPosition:t.originPosition==="upper-left"?"upperLeft":t.originPosition==="lower-left"?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance,1,1]:[1,1,1,1],translate:t.extent!=null?[t.extent.xmin,t.extent.ymax,t.extent.zmin??0,t.extent.mmin??0]:[0,0,0,0]}:null}function Z(t){return t.originPosition==="lowerLeft"&&t.scale.length===4&&t.translate.length===4}function g(t){if(Z(t))return t;const{originPosition:e,scale:n,translate:o}=t,l=n[0]??1,s=n[1]??1;return{originPosition:"lowerLeft",scale:[l,e==="lowerLeft"?s:-s,n[2]??1,n[3]??1],translate:[o[0]??0,o[1]??0,o[2]??0,o[3]??0]}}function A({scale:t,translate:e},n){return Math.round((n-e[0])/t[0])}function d({scale:t,translate:e},n){return Math.round((n-e[1])/t[1])}function j({scale:t,translate:e},n){return Math.round(((n??0)-e[2])/t[2])}function B({scale:t,translate:e},n){return n?Math.round((n-e[3])/t[3]):0}function m({scale:t,translate:e},n){return n*t[0]+e[0]}function x({scale:t,translate:e},n){return n*t[1]+e[1]}function P({scale:t,translate:e},n){return(n??0)*t[2]+e[2]}function p({scale:t,translate:e},n){return n?n*t[3]+e[3]:0}function y(t,e){return t&&e?b:t&&!e?D:!t&&e?H:C}const C=(t,e)=>{const n=new Array(e.length);if(!e.length)return n;const o=e[0];let l=m(t,o[0]),s=x(t,o[1]);n[0]=[l,s];const{scale:r,originPosition:a}=t,u=r[0],c=a==="lowerLeft"?r[1]:-r[1];for(let i=1;i<e.length;i++){const[f,h]=e[i];l+=u*f,s+=c*h,n[i]=[l,s]}return n},D=(t,e)=>{const n=new Array(e.length);if(!e.length)return n;const o=e[0];let l=m(t,o[0]),s=x(t,o[1]);n[0]=[l,s,P(t,o[2])];const{scale:r,originPosition:a}=t,u=r[0],c=a==="lowerLeft"?r[1]:-r[1];for(let i=1;i<e.length;i++){const[f,h,w]=e[i];l+=u*f,s+=c*h,n[i]=[l,s,P(t,w)]}return n},H=(t,e)=>{const n=new Array(e.length);if(!e.length)return n;const o=e[0];let l=m(t,o[0]),s=x(t,o[1]);n[0]=[l,s,p(t,o[2])];const{scale:r,originPosition:a}=t,u=r[0],c=a==="lowerLeft"?r[1]:-r[1];for(let i=1;i<e.length;i++){const[f,h,w]=e[i];l+=u*f,s+=c*h,n[i]=[l,s,p(t,w)]}return n},b=(t,e)=>{const n=new Array(e.length);if(!e.length)return n;const o=e[0];let l=m(t,o[0]),s=x(t,o[1]);n[0]=[l,s,P(t,o[2]),p(t,o[3])];const{scale:r,originPosition:a}=t,u=r[0],c=a==="lowerLeft"?r[1]:-r[1];for(let i=1;i<e.length;i++){const[f,h,w,L]=e[i];l+=u*f,s+=c*h,n[i]=[l,s,P(t,w),p(t,L)]}return n};function M(t,e,n){const o=new Array(n.length);for(let l=0;l<n.length;l++)o[l]=e(t,n[l]);return o}function k(t,e,n){const o=g(t);return e.x=A(o,n.x),e.y=d(o,n.y),n.z!=null&&(e.z=j(o,n.z)),n.m!=null&&(e.m=B(o,n.m)),e}function q(t,e,n,o=n?.hasZ??!1,l=n?.hasM??!1){if(n!=null){const s=g(t);e.points=y(o,l)(s,n.points),e.hasZ=o,e.hasM=l}return e}function v(t,e,n,o=n?.z!=null,l=n?.m!=null){if(n==null)return e;const s=g(t);return e.x=m(s,n.x),e.y=x(s,n.y),o&&(e.z=P(s,n.z)),l&&(e.m=p(s,n.m)),e}function F(t,e,n,o=n?.hasZ??!1,l=n?.hasM??!1){if(n!=null){const s=g(t);e.rings=M(s,y(o,l),n.rings),e.hasZ=o,e.hasM=l}return e}function T(t,e,n,o=n?.hasZ??!1,l=n?.hasM??!1){if(n!=null){const s=g(t);e.paths=M(s,y(o,l),n.paths),e.hasZ=o,e.hasM=l}return e}export{q as B,v as C,F as D,T as H,k as j,z as s,g as u};
