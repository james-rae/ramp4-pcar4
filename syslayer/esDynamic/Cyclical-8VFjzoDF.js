import{aP as m}from"./main-DZMdXZ8-.js";class a{constructor(n,t){this.min=n,this.max=t,this.range=t-n}normalize(n,t=0,r=!1){return o(this.range,this.min,this.max,n,t,r)}clamp(n,t=0){return m(n-t,this.min,this.max)+t}monotonic(n,t,r){return n<t?t:t+e(this.range,n-t,r)}minimalMonotonic(n,t,r){return o(this.range,n,n+this.range,t,r)}center(n,t,r){return t=this.monotonic(n,t,r),this.normalize((n+t)/2,r)}diff(n,t,r){return this.monotonic(n,t,r)-n}shortestSignedDiff(n,t){n=this.normalize(n);const r=(t=this.normalize(t))-n,i=t<n?this.minimalMonotonic(n,t)-n:t-this.minimalMonotonic(t,n);return Math.abs(r)<Math.abs(i)?r:i}contains(n,t,r){return t=this.minimalMonotonic(n,t),(r=this.minimalMonotonic(n,r))>n&&r<t}}function o(s,n,t,r,i=0,h=!1){return(r-=i)<n?r+=e(s,n-r):r>t&&(r-=e(s,r-t)),h&&r===t&&(r=n),r+i}function e(s,n,t=0){return Math.ceil((n-t)/s)*s+t}const c=new a(0,2*Math.PI),u=new a(-Math.PI,Math.PI),l=new a(0,360);export{l as a,a as n,c as r,u as s};
