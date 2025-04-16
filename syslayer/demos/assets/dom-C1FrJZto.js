import"./themeUtils-B7nSQ0Ik.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 *//*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var D=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],m=D.join(","),S=typeof Element>"u",f=S?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,p=!S&&Element.prototype.getRootNode?function(t){var n;return t==null||(n=t.getRootNode)===null||n===void 0?void 0:n.call(t)}:function(t){return t?.ownerDocument},h=function t(n,e){var r;e===void 0&&(e=!0);var o=n==null||(r=n.getAttribute)===null||r===void 0?void 0:r.call(n,"inert"),u=o===""||o==="true",i=u||e&&n&&t(n.parentNode);return i},O=function(t){var n,e=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"contenteditable");return e===""||e==="true"},P=function(t,n,e){if(h(t))return[];var r=Array.prototype.slice.apply(t.querySelectorAll(m));return n&&f.call(t,m)&&r.unshift(t),r=r.filter(e),r},F=function t(n,e,r){for(var o=[],u=Array.from(n);u.length;){var i=u.shift();if(!h(i,!1))if(i.tagName==="SLOT"){var a=i.assignedElements(),l=a.length?a:i.children,c=t(l,!0,r);r.flatten?o.push.apply(o,c):o.push({scopeParent:i,candidates:c})}else{var s=f.call(i,m);s&&r.filter(i)&&(e||!n.includes(i))&&o.push(i);var d=i.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(i),C=!h(d,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(i));if(d&&C){var v=t(d===!0?i.children:d.children,!0,r);r.flatten?o.push.apply(o,v):o.push({scopeParent:i,candidates:v})}else u.unshift.apply(u,i.children)}}return o},b=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},x=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||O(t))&&!b(t)?0:t.tabIndex},L=function(t,n){var e=x(t);return e<0&&n&&!b(t)?0:e},k=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},T=function(t){return t.tagName==="INPUT"},M=function(t){return T(t)&&t.type==="hidden"},U=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(e){return e.tagName==="SUMMARY"});return n},q=function(t,n){for(var e=0;e<t.length;e++)if(t[e].checked&&t[e].form===n)return t[e]},B=function(t){if(!t.name)return!0;var n=t.form||p(t),e=function(u){return n.querySelectorAll('input[type="radio"][name="'+u+'"]')},r;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")r=e(window.CSS.escape(t.name));else try{r=e(t.name)}catch(u){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",u.message),!1}var o=q(r,t.form);return!o||o===t},X=function(t){return T(t)&&t.type==="radio"},_=function(t){return X(t)&&!B(t)},$=function(t){var n,e=t&&p(t),r=(n=e)===null||n===void 0?void 0:n.host,o=!1;if(e&&e!==t){var u,i,a;for(o=!!((u=r)!==null&&u!==void 0&&(i=u.ownerDocument)!==null&&i!==void 0&&i.contains(r)||t!=null&&(a=t.ownerDocument)!==null&&a!==void 0&&a.contains(t));!o&&r;){var l,c,s;e=p(r),r=(l=e)===null||l===void 0?void 0:l.host,o=!!((c=r)!==null&&c!==void 0&&(s=c.ownerDocument)!==null&&s!==void 0&&s.contains(r))}}return o},w=function(t){var n=t.getBoundingClientRect(),e=n.width,r=n.height;return e===0&&r===0},j=function(t,n){var e=n.displayCheck,r=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var o=f.call(t,"details>summary:first-of-type"),u=o?t.parentElement:t;if(f.call(u,"details:not([open]) *"))return!0;if(!e||e==="full"||e==="legacy-full"){if(typeof r=="function"){for(var i=t;t;){var a=t.parentElement,l=p(t);if(a&&!a.shadowRoot&&r(a)===!0)return w(t);t.assignedSlot?t=t.assignedSlot:!a&&l!==t.ownerDocument?t=l.host:t=a}t=i}if($(t))return!t.getClientRects().length;if(e!=="legacy-full")return!0}else if(e==="non-zero-area")return w(t);return!1},z=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var e=0;e<n.children.length;e++){var r=n.children.item(e);if(r.tagName==="LEGEND")return f.call(n,"fieldset[disabled] *")?!0:!r.contains(t)}return!0}n=n.parentElement}return!1},G=function(t,n){return!(n.disabled||h(n)||M(n)||j(n,t)||U(n)||z(n))},N=function(t,n){return!(_(n)||x(n)<0||!G(t,n))},V=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},W=function t(n){var e=[],r=[];return n.forEach(function(o,u){var i=!!o.scopeParent,a=i?o.scopeParent:o,l=L(a,i),c=i?t(o.candidates):a;l===0?i?e.push.apply(e,c):e.push(a):r.push({documentOrder:u,tabIndex:l,item:o,isScope:i,content:c})}),r.sort(k).reduce(function(o,u){return u.isScope?o.push.apply(o,u.content):o.push(u.content),o},[]).concat(e)},Y=function(t,n){n=n||{};var e;return n.getShadowRoot?e=F([t],n.includeContainer,{filter:N.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:V}):e=P(t,n.includeContainer,N.bind(null,n)),W(e)};const H={getShadowRoot:!0};function ct(t){const n="dir",e=`[${n}]`,r=R(t,e);return r?r.getAttribute(n):"ltr"}function g(t){return t.getRootNode()}function st(t){const n=g(t);return"host"in n?n:null}function A(t){return t.host||null}function J(t,{selector:n,id:e}){if(!t)return null;t.assignedSlot&&(t=t.assignedSlot);const r=g(t);return(e?"getElementById"in r?r.getElementById(e):null:n?r.querySelector(n):null)||J(A(r),{selector:n,id:e})}function R(t,n){return t?t.closest(n)||R(A(g(t)),n):null}function K(t){return typeof t?.setFocus=="function"}async function Q(t){if(t)return K(t)?t.setFocus():t.focus()}function Z(t){if(t)return Y(t,H)[0]??t}function ft(t){Z(t)?.focus()}function tt(t,n){return t.filter(e=>e.matches(n))}function dt(t,n,e){if(typeof n=="string"&&n!=="")return n;if(n===""||n===!0)return t[e]}function pt(t){return(!!t).toString()}function ht(t){return ot(t)||et(t)}function nt(t){return rt(t).filter(n=>n.nodeType===Node.TEXT_NODE).map(n=>n.textContent).join("").trim()}function mt(t){for(const n of t.childNodes)if(n.nodeType===Node.TEXT_NODE&&n.textContent?.trim()!==""||n.nodeType===Node.ELEMENT_NODE)return!0;return!1}function et(t){return!!nt(t)}function rt(t){return t.currentTarget.assignedNodes({flatten:!0})}function ot(t){return!!it(t).length}function it(t,n){return ut(t.target,n)}function ut(t,n){const e=t.assignedElements({flatten:!0});return n?tt(e,n):e}function yt(t){return!!(t.isPrimary&&t.button===0)}function gt(t){return t.detail===0}const vt=(t,n,e,r=!0)=>{const o=t.indexOf(n),u=o===0,i=o===t.length-1;r&&(e=e==="previous"&&u?"last":e==="next"&&i?"first":e);let a;return e==="previous"?a=t[o-1]||t[r?t.length-1:o]:e==="next"?a=t[o+1]||t[r?0:o]:e==="last"?a=t[t.length-1]:a=t[0],Q(a),a};function wt(t,n){if(t.parentNode!==n.parentNode)return!1;const e=Array.from(t.parentNode.children);return e.indexOf(t)<e.indexOf(n)}async function Nt(t,n,e,r){return I(t,n,"animation",e,r)}async function Et(t,n,e,r){return I(t,n,"transition",e,r)}async function at(t,n){await y(),t?.(),await y(),n?.()}function E(t,n,e){const r=n==="transition"?"transitionProperty":"animationName";return t.getAnimations().find(o=>o[r]===e)}async function I(t,n,e,r,o){let u=E(t,e,n);if(u||(await y(),u=E(t,e,n)),!u)return at(r,o);r?.();try{await u.finished}catch{}finally{o?.()}}function y(){return new Promise(t=>requestAnimationFrame(()=>t()))}function St(t){return t.endsWith("px")}export{gt as A,ht as C,Nt as D,Et as F,yt as I,H as J,mt as N,St as O,J as Q,wt as R,dt as T,ft as a,ct as b,Z as e,R as m,g as p,it as s,Q as t,ot as u,pt as w,vt as x,st as y};
