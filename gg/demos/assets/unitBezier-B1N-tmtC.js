function i(l,M,k,x){const o=3*l,s=3*(k-l)-o,p=1-o-s,c=3*M,I=3*(x-M)-c,d=1-c-I;function O(t){return((p*t+s)*t+o)*t}function g(t){return((d*t+I)*t+c)*t}function j(t){return(3*p*t+2*s)*t+o}function m(t,f){let u,e,n,a,b,h;for(n=t,h=0;h<8;h++){if(a=O(n)-t,Math.abs(a)<f)return n;if(b=j(n),Math.abs(b)<1e-6)break;n-=a/b}if(u=0,e=1,n=t,n<u)return u;if(n>e)return e;for(;u<e;){if(a=O(n),Math.abs(a-t)<f)return n;t>a?u=n:e=n,n=.5*(e-u)+u}return n}return function(t,f=1e-6){return g(m(t,f))}}const r={};r.ease=i(.25,.1,.25,1),r.linear=i(0,0,1,1),r.easeIn=r["ease-in"]=i(.42,0,1,1),r.easeOut=r["ease-out"]=i(0,0,.58,1),r.easeInOut=r["ease-in-out"]=i(.42,0,.58,1);export{i as e,r as t};
