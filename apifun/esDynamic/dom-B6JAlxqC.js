import"./themeUtils-CNV_eKPP.js";var M=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],y=M.join(","),S=typeof Element>"u",f=S?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,p=!S&&Element.prototype.getRootNode?function(t){var n;return t==null||(n=t.getRootNode)===null||n===void 0?void 0:n.call(t)}:function(t){return t?.ownerDocument},h=function t(n,e){var r;e===void 0&&(e=!0);var o=n==null||(r=n.getAttribute)===null||r===void 0?void 0:r.call(n,"inert"),a=o===""||o==="true",i=a||e&&n&&t(n.parentNode);return i},U=function(t){var n,e=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"contenteditable");return e===""||e==="true"},q=function(t,n,e){if(h(t))return[];var r=Array.prototype.slice.apply(t.querySelectorAll(y));return n&&f.call(t,y)&&r.unshift(t),r=r.filter(e),r},B=function t(n,e,r){for(var o=[],a=Array.from(n);a.length;){var i=a.shift();if(!h(i,!1))if(i.tagName==="SLOT"){var u=i.assignedElements(),l=u.length?u:i.children,c=t(l,!0,r);r.flatten?o.push.apply(o,c):o.push({scopeParent:i,candidates:c})}else{var s=f.call(i,y);s&&r.filter(i)&&(e||!n.includes(i))&&o.push(i);var d=i.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(i),k=!h(d,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(i));if(d&&k){var w=t(d===!0?i.children:d.children,!0,r);r.flatten?o.push.apply(o,w):o.push({scopeParent:i,candidates:w})}else a.unshift.apply(a,i.children)}}return o},N=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},E=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||U(t))&&!N(t)?0:t.tabIndex},X=function(t,n){var e=E(t);return e<0&&n&&!N(t)?0:e},_=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},b=function(t){return t.tagName==="INPUT"},$=function(t){return b(t)&&t.type==="hidden"},j=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(e){return e.tagName==="SUMMARY"});return n},z=function(t,n){for(var e=0;e<t.length;e++)if(t[e].checked&&t[e].form===n)return t[e]},G=function(t){if(!t.name)return!0;var n=t.form||p(t),e=function(a){return n.querySelectorAll('input[type="radio"][name="'+a+'"]')},r;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")r=e(window.CSS.escape(t.name));else try{r=e(t.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var o=z(r,t.form);return!o||o===t},J=function(t){return b(t)&&t.type==="radio"},Q=function(t){return J(t)&&!G(t)},V=function(t){var n,e=t&&p(t),r=(n=e)===null||n===void 0?void 0:n.host,o=!1;if(e&&e!==t){var a,i,u;for(o=!!((a=r)!==null&&a!==void 0&&(i=a.ownerDocument)!==null&&i!==void 0&&i.contains(r)||t!=null&&(u=t.ownerDocument)!==null&&u!==void 0&&u.contains(t));!o&&r;){var l,c,s;e=p(r),r=(l=e)===null||l===void 0?void 0:l.host,o=!!((c=r)!==null&&c!==void 0&&(s=c.ownerDocument)!==null&&s!==void 0&&s.contains(r))}}return o},x=function(t){var n=t.getBoundingClientRect(),e=n.width,r=n.height;return e===0&&r===0},W=function(t,n){var e=n.displayCheck,r=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var o=f.call(t,"details>summary:first-of-type"),a=o?t.parentElement:t;if(f.call(a,"details:not([open]) *"))return!0;if(!e||e==="full"||e==="legacy-full"){if(typeof r=="function"){for(var i=t;t;){var u=t.parentElement,l=p(t);if(u&&!u.shadowRoot&&r(u)===!0)return x(t);t.assignedSlot?t=t.assignedSlot:!u&&l!==t.ownerDocument?t=l.host:t=u}t=i}if(V(t))return!t.getClientRects().length;if(e!=="legacy-full")return!0}else if(e==="non-zero-area")return x(t);return!1},Y=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var e=0;e<n.children.length;e++){var r=n.children.item(e);if(r.tagName==="LEGEND")return f.call(n,"fieldset[disabled] *")?!0:!r.contains(t)}return!0}n=n.parentElement}return!1},H=function(t,n){return!(n.disabled||h(n)||$(n)||W(n,t)||j(n)||Y(n))},T=function(t,n){return!(Q(n)||E(n)<0||!H(t,n))},K=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},Z=function t(n){var e=[],r=[];return n.forEach(function(o,a){var i=!!o.scopeParent,u=i?o.scopeParent:o,l=X(u,i),c=i?t(o.candidates):u;l===0?i?e.push.apply(e,c):e.push(u):r.push({documentOrder:a,tabIndex:l,item:o,isScope:i,content:c})}),r.sort(_).reduce(function(o,a){return a.isScope?o.push.apply(o,a.content):o.push(a.content),o},[]).concat(e)},tt=function(t,n){n=n||{};var e;return n.getShadowRoot?e=B([t],n.includeContainer,{filter:T.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:K}):e=q(t,n.includeContainer,T.bind(null,n)),Z(e)};const A={getShadowRoot:!0};function nt(t){const n="dir",e=`[${n}]`,r=g(t,e);return r?r.getAttribute(n):"ltr"}function m(t){return t.getRootNode()}function et(t){const n=m(t);return"host"in n?n:null}function R(t){return t.host||null}function I(t,{selector:n,id:e}){if(!t)return null;t.assignedSlot&&(t=t.assignedSlot);const r=m(t);return(e?"getElementById"in r?r.getElementById(e):null:n?r.querySelector(n):null)||I(R(r),{selector:n,id:e})}function g(t,n){return t?t.closest(n)||g(R(m(t)),n):null}function rt(t){return typeof t?.setFocus=="function"}async function D(t){if(t)return rt(t)?t.setFocus():t.focus()}function C(t){if(t)return tt(t,A)[0]??t}function ot(t){C(t)?.focus()}function it(t,n){return t.filter(e=>e.matches(n))}function at(t,n,e){if(typeof n=="string"&&n!=="")return n;if(n===""||n===!0)return t[e]}function ut(t){return(!!t).toString()}function lt(t){return O(t)||ft(t)}function ct(t){return dt(t).filter(n=>n.nodeType===Node.TEXT_NODE).map(n=>n.textContent).join("").trim()}function st(t){for(const n of t.childNodes)if(n.nodeType===Node.TEXT_NODE&&n.textContent?.trim()!==""||n.nodeType===Node.ELEMENT_NODE)return!0;return!1}function ft(t){return!!ct(t)}function dt(t){return t.currentTarget.assignedNodes({flatten:!0})}function O(t){return!!P(t).length}function P(t,n){return pt(t.target,n)}function pt(t,n){const e=t.assignedElements({flatten:!0});return n?it(e,n):e}function ht(t){return!!(t.isPrimary&&t.button===0)}function mt(t){return t.detail===0}const yt=(t,n,e,r=!0)=>{const o=t.indexOf(n),a=o===0,i=o===t.length-1;r&&(e=e==="previous"&&a?"last":e==="next"&&i?"first":e);let u;return e==="previous"?u=t[o-1]||t[r?t.length-1:o]:e==="next"?u=t[o+1]||t[r?0:o]:e==="last"?u=t[t.length-1]:u=t[0],D(u),u};function gt(t,n){if(t.parentNode!==n.parentNode)return!1;const e=Array.from(t.parentNode.children);return e.indexOf(t)<e.indexOf(n)}async function vt(t,n,e,r){return L(t,n,"animation",e,r)}async function wt(t,n,e,r){return L(t,n,"transition",e,r)}async function St(t,n){await v(),t?.(),await v(),n?.()}function F(t,n,e){const r=n==="transition"?"transitionProperty":"animationName";return t.getAnimations().find(o=>o[r]===e)}async function L(t,n,e,r,o){let a=F(t,e,n);if(a||(await v(),a=F(t,e,n)),!a)return St(r,o);r?.();try{await a.finished}catch{}finally{o?.()}}function v(){return new Promise(t=>requestAnimationFrame(()=>t()))}function Nt(t){return t.endsWith("px")}export{mt as A,lt as C,vt as D,wt as F,ht as I,A as J,st as N,Nt as O,I as Q,gt as R,at as T,ot as a,nt as b,C as e,g as m,m as p,P as s,D as t,O as u,ut as w,yt as x,et as y};
