import{aR as m}from"./main-CcTJZah4.js";class r{constructor(n,i){this.min=n,this.max=i,this.range=i-n}normalize(n,i=0,o=!1){return e(this.range,this.min,this.max,n,i,o)}clamp(n,i=0){return m(n-i,this.min,this.max)+i}monotonic(n,i,o){return n<i?i:i+s(this.range,n-i,o)}minimalMonotonic(n,i,o){return e(this.range,n,n+this.range,i,o)}center(n,i,o){return i=this.monotonic(n,i,o),this.normalize((n+i)/2,o)}diff(n,i,o){return this.monotonic(n,i,o)-n}shortestSignedDiff(n,i){n=this.normalize(n);const o=(i=this.normalize(i))-n,a=i<n?this.minimalMonotonic(n,i)-n:i-this.minimalMonotonic(i,n);return Math.abs(o)<Math.abs(a)?o:a}contains(n,i,o){return i=this.minimalMonotonic(n,i),(o=this.minimalMonotonic(n,o))>n&&o<i}}function e(t,n,i,o,a=0,h=!1){return(o-=a)<n?o+=s(t,n-o):o>i&&(o-=s(t,o-i)),h&&o===i&&(o=n),o+a}function s(t,n,i=0){return Math.ceil((n-i)/t)*t+i}const u=new r(0,2*Math.PI),l=new r(-Math.PI,Math.PI),M=new r(0,360);export{M as a,r as n,u as r,l as s};
