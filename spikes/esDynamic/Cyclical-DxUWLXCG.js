import{aP as h}from"./main-DaZH2qzH.js";class o{constructor(n,t){this.min=n,this.max=t,this.range=t-n}normalize(n,t=0,r=!1){return m(this.range,this.min,this.max,n,t,r)}clamp(n,t=0){return h(n-t,this.min,this.max)+t}monotonic(n,t,r){return n<t?t:t+a(this.range,n-t,r)}minimalMonotonic(n,t,r){return m(this.range,n,n+this.range,t,r)}center(n,t,r){return t=this.monotonic(n,t,r),this.normalize((n+t)/2,r)}diff(n,t,r){return this.monotonic(n,t,r)-n}shortestSignedDiff(n,t){n=this.normalize(n);const r=(t=this.normalize(t))-n,s=t<n?this.minimalMonotonic(n,t)-n:t-this.minimalMonotonic(t,n);return Math.abs(r)<Math.abs(s)?r:s}contains(n,t,r){return t=this.minimalMonotonic(n,t),(r=this.minimalMonotonic(n,r))>n&&r<t}}function m(i,n,t,r,s=0,e=!1){return(r-=s)<n?r+=a(i,n-r):r>t&&(r-=a(i,r-t)),e&&r===t&&(r=n),r+s}function a(i,n,t=0){return Math.ceil((n-t)/i)*i+t}const c=new o(0,360);export{c as a,o as n};
