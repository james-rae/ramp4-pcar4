import{cz as i}from"./main-DeRV24Di.js";function f(o,e){let t;if(typeof o=="string")t=i(o+`-seed(${e})`);else{let n=12;t=o^e;do t=107*(t>>8^t)+n|0;while(--n!=0)}return(1+t/(1<<31))/2}function r(o){return Math.floor(f(o,s)*l)}const s=53290320,l=10;export{f as e,r as o};
