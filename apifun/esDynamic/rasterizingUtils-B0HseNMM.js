import{o as v}from"./floatRGBA-D4vAsjIU.js";import{n as z,fj as U}from"./main-DeRV24Di.js";import{n as R}from"./defaultCIMValues-CJbk_AyU.js";import{c as b}from"./definitions-CBIQmVpq.js";const $=15.5,C=4,I=64,L=1024,N=()=>z.getLogger("esri.symbols.cim.rasterizingUtils"),P=32,q=t=>t==="vertical"||t==="horizontal"||t==="cross"||t==="esriSFSCross"||t==="esriSFSVertical"||t==="esriSFSHorizontal";function E(t,l,a){const e=l.style,n=U(Math.ceil(a)),o=q(e)?8*n:16*n,r=2*n;t.width=o,t.height=o;const s=t.getContext("2d");s.strokeStyle="#ffffff",s.lineWidth=n,s.beginPath(),e!=="vertical"&&e!=="cross"&&e!=="esriSFSCross"&&e!=="esriSFSVertical"||(s.moveTo(o/2,-r),s.lineTo(o/2,o+r)),e!=="horizontal"&&e!=="cross"&&e!=="esriSFSCross"&&e!=="esriSFSHorizontal"||(s.moveTo(-r,o/2),s.lineTo(o+r,o/2)),e!=="backward-diagonal"&&e!=="diagonal-cross"&&e!=="esriSFSDiagonalCross"&&e!=="esriSFSBackwardDiagonal"||(s.moveTo(-r,-r),s.lineTo(o+r,o+r),s.moveTo(o-r,-r),s.lineTo(o+r,r),s.moveTo(-r,o-r),s.lineTo(r,o+r)),e!=="forward-diagonal"&&e!=="diagonal-cross"&&e!=="esriSFSForwardDiagonal"&&e!=="esriSFSDiagonalCross"||(s.moveTo(o+r,-r),s.lineTo(-r,o+r),s.moveTo(r,-r),s.lineTo(-r,r),s.moveTo(o+r,o-r),s.lineTo(o-r,o+r)),s.stroke();const h=s.getImageData(0,0,t.width,t.height),i=new Uint8Array(h.data);let f;for(let c=0;c<i.length;c+=4)f=i[c+3]/255,i[c]=i[c]*f,i[c+1]=i[c+1]*f,i[c+2]=i[c+2]*f;return[i,t.width,t.height,n]}function G(t){t.length%2==1&&(t=[...t,...t]);const l=t.reduce((c,m)=>c+m,0),a=Math.round(l*C),e=1,n=new Float32Array(a*e);let o=0,r=0,s=.5,h=!0;for(const c of t){for(o=r,r+=c*C;s<=r;){const m=s-.5,u=Math.min(Math.abs(s-o),Math.abs(s-r));n[m]=h?-u:u,s++}h=!h}const i=n.length,f=new Uint8Array(4*i);for(let c=0;c<i;++c){const m=n[c]/C;v(m/I*.5+.5,f,4*c)}return[f,a,e]}function B(t,l){t==null&&(t=[]);const a=l==="Butt",e=l==="Square",n=!a&&!e;t.length%2==1&&(t=[...t,...t]);const o=$,r=2*o;let s=0;for(const g of t)s+=g;const h=Math.round(s*o),i=new Float32Array(h*r),f=.5*o;let c=0,m=0,u=.5,x=!0;for(const g of t){for(c=m,m+=g*o;u<=m;){let p=.5;for(;p<r;){const A=(p-.5)*h+u-.5,d=n?(p-o)*(p-o):Math.abs(p-o);i[A]=x?a?Math.max(Math.max(c+f-u,d),Math.max(u-m+f,d)):d:n?Math.min((u-c)*(u-c)+d,(u-m)*(u-m)+d):e?Math.min(Math.max(u-c,d),Math.max(m-u,d)):Math.min(Math.max(u-c+f,d),Math.max(m+f-u,d)),p++}u++}x=!x}const F=i.length,T=new Uint8Array(4*F);for(let g=0;g<F;++g){const p=(n?Math.sqrt(i[g]):i[g])/o;v(p,T,4*g)}return[T,h,r]}function H(t,l){const{colorRamp:a,gradientType:e}=l,n=a.type==="CIMFixedColorRamp",o=l.interval||R.CIMGradientFill.interval;let r=w(a);return n&&(r=k(r,o)),e==="Discrete"||n?W(t,r,o):V(t,r)}let y;function O(t,l){const{colorRamp:a,gradientType:e}=l,n=w(a),o=a.type==="CIMFixedColorRamp";if(e==="Continuous"&&!o)return M(t,n);const r=l.interval??R.CIMGradientFill.interval;if(o)return M(t,k(n,r));const s=[];y??=document.createElement("canvas"),S(y,n,r,1,0);const h=y.getContext("2d").getImageData(0,0,r,1).data;for(let i=0,f=0;i<r;i++,f=4*i){const c=[h[f+0],h[f+1],h[f+2],h[f+3]];s.push({offset:i/r,color:c}),s.push({offset:(i+1)/r,color:c})}return M(t,s)}function w(t){const l=[];switch(t.type){case"CIMPolarContinuousColorRamp":case"CIMLinearContinuousColorRamp":{t.type==="CIMPolarContinuousColorRamp"&&N().warnOnce("CIMPolarContinuousColorRamp is currently unsupported. Falling back to CIMLinearContinuousColorRamp.");const a=t;l.push({offset:0,color:[a.fromColor[0],a.fromColor[1],a.fromColor[2],a.fromColor[3]/255]}),l.push({offset:1,color:[a.toColor[0],a.toColor[1],a.toColor[2],a.toColor[3]/255]});break}case"CIMFixedColorRamp":{const a=t,e=1/(a.colors.length-1);let n=0;for(const o of a.colors)l.push({offset:n,color:[o[0],o[1],o[2],o[3]/255]}),n+=e;break}case"CIMMultipartColorRamp":{const a=t,e=a.weights.reduce((o,r)=>o+r,0);let n=0;for(let o=0;o<a.colorRamps.length;o++){const r=a.colorRamps[o],s=a.weights[o],h=w(r);for(const i of h)l.push({offset:(n+i.offset*s)/e,color:i.color});n+=s}break}default:N().error(`Color ramp "${t.type}" currently unsupported.`)}return l}function k(t,l){const a=[],e=(t.length-1)/(l-1);for(let n=0;n<l;n++){const o=t[Math.round(n*e)].color;a.push({offset:n/l,color:o}),a.push({offset:(n+1)/l,color:o})}return a}function V(t,l){return S(t,l,P,1,b),D(t)}function W(t,l,a){return S(t,l,a,1,b),D(t)}function M(t,l,a=0){for(const{offset:e,color:n}of l)t.addColorStop(Math.min(Math.max(e,a),1-a),`rgba(${n[0]}, ${n[1]}, ${n[2]}, ${n[3]})`)}function S(t,l,a,e,n){const o=a+2*n;t.width=o,t.height=e;const r=(n+1)/o,s=t.getContext("2d",{willReadFrequently:!0});if(l.length>0){const h=s.createLinearGradient(0,0,o,e);M(h,l,r),s.fillStyle=h}else s.fillStyle="rgba(128, 128, 128, 1)";s.fillRect(0,0,o,e)}function D(t){const{width:l,height:a}=t,e=t.getContext("2d").getImageData(0,0,l,a),n=new Uint8Array(e.data);for(let o=0;o<n.length;o+=4){const r=n[o+3]/255;n[o]*=r,n[o+1]*=r,n[o+2]*=r}return[n,l,a]}function j(t){const l=t[0]?.[0]?.[0]??0,a=t[0]?.[0]?.[1]??0,e={ymin:a,xmin:l,ymax:a,xmax:l,width:0,height:0};for(let n=0;n<t.length;n++){const o=t[n];for(let r=0;r<o.length;r++){const s=o[r][0],h=o[r][1];s<e.xmin&&(e.xmin=s),s>e.xmax&&(e.xmax=s),h<e.ymin&&(e.ymin=h),h>e.ymax&&(e.ymax=h)}}return e.width=Math.abs(e.xmax-e.xmin),e.height=Math.abs(e.ymax-e.ymin),e}function J(t,l){const a=j(t),e=a.width===0?1:a.width,n=a.height===0?1:a.height,o=[];for(let r=0;r<t.length;r++){const s=t[r],h=[];for(let i=0;i<s.length;i++){let f=Math.round(s[i][0]-a.xmin),c=Math.round(s[i][1]-a.ymin);if(f=l.xmin+f*l.width/e,c=l.ymin+c*l.height/n,isNaN(f)||isNaN(c))throw new Error("Scaled shape has NaN values");h.push([f,c])}o.push(h)}return o}function K(t,l,a){const e=[];for(let n=0;n<t.length;n++){const o=t[n],r=[];for(let s=0;s<o.length;s++){const h=o[s][0]+l,i=o[s][1]+a;if(isNaN(h)||isNaN(i))throw new Error("Scaled shape has NaN values");r.push([h,i])}e.push(r)}return e}export{K as R,J as T,I as c,L as e,E as f,H as g,G as m,O as p,C as t,B as u};
