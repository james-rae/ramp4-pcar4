import{br as u,bs as l,aP as m}from"./main-DZMdXZ8-.js";import{_ as p}from"./vec42-D8CJyqHG.js";import{n as h}from"./vec4f64-CjUMzAyX.js";const c=2.4;function y(t){return u(t*c)}function g(t){return l(t)/c}function x(t,n,i,a){let{color:e,ratio:s}=n,{color:o,ratio:r}=i;r===s&&(r===1?s-=1e-6:r+=1e-6);const f=m((a-s)/(r-s),0,1);p(t,e.toArray(),o.toArray(),f)}function A(t){const n=new Uint8ClampedArray(2048);if(t=t.filter(({ratio:o})=>o>=0&&o<=1).sort((o,r)=>o.ratio-r.ratio).map(({color:o,ratio:r})=>({color:o,ratio:Math.max(r,.001)})),t.length<1)return n;let i=t[0],a=t[0],e=1;const s=h();for(let o=0;o<512;o++){const r=(o+.5)/512;for(;r>a.ratio&&e<t.length;)i=a,a=t[e++];x(s,i,a,r),n.set(s,4*o)}return n}function M(t,n,i){const a=Math.sqrt(t**2+n**2)/i;return a>1?0:3/(Math.PI*i**2)*(1-a**2)**2}function P(t){return typeof t=="function"?t:t?n=>+n[t]:()=>1}export{g as a,c,y as e,A as f,M as l,P as u};
