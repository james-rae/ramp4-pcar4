function h(n){let r,t,i=[],u=!1;function f(...e){return u&&r===this&&l(e,i)||(t=n.apply(this,e),r=this,i=e,u=!0),t}return f}function l(n,r){if(n.length!==r.length)return!1;for(let t=0;t<n.length;++t)if(n[t]!==r[t])return!1;return!0}export{h as t};
