import{ac as s}from"./main-BnINupoD.js";function a(n){return 32+n.length}const c=16;function g(n){if(!n)return 0;let t=o;for(const e in n)n.hasOwnProperty(e)&&(t+=u(n[e],!1));return t}function y(n){if(!n)return 0;if(typeof n[0]=="number")return h(n);if(Array.isArray(n))return l(n);let t=o;for(const e in n)n.hasOwnProperty(e)&&(t+=u(n[e]));return t}function l(n){const t=n.length;if(t===0||typeof n[0]=="number")return f(n,8);let e=i;for(let r=0;r<t;r++)e+=u(n[r]);return e}function u(n,t=!0){switch(typeof n){case"object":return t?y(n):o;case"string":return a(n);case"number":return c;case"boolean":return 4;default:return 8}}function h(...n){return n.reduce((t,e)=>t+(e?s(e)?e.byteLength+p:Array.isArray(e)?f(e,c):0:0),0)}function f(n,t){return i+n.length*t}const o=32,i=16,p=145;export{i as a,g as e,h as i,c as n,o as s,y as u,p as y};
