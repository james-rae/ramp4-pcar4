import{o as v}from"./floatRGBA-Dv2S08mR.js";import{cR as y}from"./main-C45WTWFO.js";import{t as F,c as C,o as b}from"./constants-F8oTIn7N.js";const A=a=>a==="vertical"||a==="horizontal"||a==="cross"||a==="esriSFSCross"||a==="esriSFSVertical"||a==="esriSFSHorizontal";function z(a,d,M){const n=d.style,h=y(Math.ceil(M)),t=A(n)?8*h:16*h,o=2*h;a.width=t,a.height=t;const r=a.getContext("2d");r.strokeStyle="#ffffff",r.lineWidth=h,r.beginPath(),n!=="vertical"&&n!=="cross"&&n!=="esriSFSCross"&&n!=="esriSFSVertical"||(r.moveTo(t/2,-o),r.lineTo(t/2,t+o)),n!=="horizontal"&&n!=="cross"&&n!=="esriSFSCross"&&n!=="esriSFSHorizontal"||(r.moveTo(-o,t/2),r.lineTo(t+o,t/2)),n!=="backward-diagonal"&&n!=="diagonal-cross"&&n!=="esriSFSDiagonalCross"&&n!=="esriSFSBackwardDiagonal"||(r.moveTo(-o,-o),r.lineTo(t+o,t+o),r.moveTo(t-o,-o),r.lineTo(t+o,o),r.moveTo(-o,t-o),r.lineTo(o,t+o)),n!=="forward-diagonal"&&n!=="diagonal-cross"&&n!=="esriSFSForwardDiagonal"&&n!=="esriSFSDiagonalCross"||(r.moveTo(t+o,-o),r.lineTo(-o,t+o),r.moveTo(o,-o),r.lineTo(-o,o),r.moveTo(t+o,t-o),r.lineTo(t-o,t+o)),r.stroke();const m=r.getImageData(0,0,a.width,a.height),i=new Uint8Array(m.data);let c;for(let e=0;e<i.length;e+=4)c=i[e+3]/255,i[e]=i[e]*c,i[e+1]=i[e+1]*c,i[e+2]=i[e+2]*c;return[i,a.width,a.height,h]}function U(a){a.length%2==1&&(a=[...a,...a]);const d=a.reduce((e,l)=>e+l,0),M=Math.round(d*F),n=1,h=new Float32Array(M*n);let t=0,o=0,r=.5,m=!0;for(const e of a){for(t=o,o+=e*F;r<=o;){const l=r-.5,s=Math.min(Math.abs(r-t),Math.abs(r-o));h[l]=m?-s:s,r++}m=!m}const i=h.length,c=new Uint8Array(4*i);for(let e=0;e<i;++e){const l=h[e]/F;v(l/C*.5+.5,c,4*e)}return[c,M,n]}function q(a,d){a==null&&(a=[]);const M=d==="Butt",n=d==="Square",h=!M&&!n;a.length%2==1&&(a=[...a,...a]);const t=b,o=2*t;let r=0;for(const f of a)r+=f;const m=Math.round(r*t),i=new Float32Array(m*o),c=.5*t;let e=0,l=0,s=.5,T=!0;for(const f of a){for(e=l,l+=f*t;s<=l;){let g=.5;for(;g<o;){const x=(g-.5)*m+s-.5,S=h?(g-t)*(g-t):Math.abs(g-t);i[x]=T?M?Math.max(Math.max(e+c-s,S),Math.max(s-l+c,S)):S:h?Math.min((s-e)*(s-e)+S,(s-l)*(s-l)+S):n?Math.min(Math.max(s-e,S),Math.max(l-s,S)):Math.min(Math.max(s-e+c,S),Math.max(l+c-s,S)),g++}s++}T=!T}const u=i.length,w=new Uint8Array(4*u);for(let f=0;f<u;++f){const g=(h?Math.sqrt(i[f]):i[f])/t;v(g,w,4*f)}return[w,m,o]}export{U as i,q as l,z as s};
