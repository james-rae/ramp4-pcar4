import{i,g as r}from"./themeUtils-Cd2hQloi.js";import{g as u}from"./locale-DE1Vd9Dy.js";const e={};async function g(s,n){const t=`${n}_${s}`;return e[t]||(e[t]=fetch(r(`./assets/${n}/t9n/messages_${s}.json`)).then(a=>(a.ok||c(),a.json())).catch(()=>c())),e[t]}function c(){throw new Error("could not fetch component message bundle")}function o(s){s.messages={...s.defaultMessages,...s.messageOverrides}}function m(){}async function h(s){s.defaultMessages=await f(s,s.effectiveLocale),o(s)}async function f(s,n){if(!i())return{};const{el:t}=s,a=t.tagName.toLowerCase().replace("calcite-","");return g(u(n,"t9n"),a)}async function l(s,n){s.defaultMessages=await f(s,n),o(s)}function d(s){s.onMessagesChange=p}function M(s){s.onMessagesChange=m}function p(){o(this)}export{d as c,M as d,h as s,l as u};