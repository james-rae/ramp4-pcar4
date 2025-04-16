import{a as x,_ as He,q as Ue,i as Ce,L as Pe,f as L,x as I,g as je,S as Fe,E as J}from"./themeUtils-2piyLhQV.js";import{i as U}from"./keyed-B2gO5gxN.js";import{e as _e,n as M}from"./ref-xQiEGQWW.js";import{u as ce,f as qe,Y as Ge,l as Ve,c as Xe,X as Ye,s as ue}from"./floating-ui-hoSLidgF.js";import{t as Ae,J as Je,a as We,w as De,Q as Ze,A as Qe}from"./dom-D8XNoqp_.js";import{i as Ne}from"./guid-ejniuQmw.js";import{s as et}from"./openCloseComponent-CK6Jda6g.js";import{s as tt,i as nt,u as at}from"./static-DNbFDL9c.js";import{r as Ie}from"./loadable-iEaxUBY1.js";import{b as it}from"./observers-DNEw4dK8.js";import{S as rt}from"./FloatingArrow-B--J11Kt.js";import{s as ot}from"./component-DLLD6FTh.js";import{s as st}from"./useT9n-DZQIKPQs.js";import{t as $e}from"./key-CZcQa38B.js";const lt=({children:a,...e})=>{const t=e.level?tt(`h${e.level}`):nt`div`;return U(e.key,at`<${t} class=${x(e.class)}>${a}</${t}>`)};/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Se=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],j=Se.join(","),Oe=typeof Element>"u",D=Oe?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,_=!Oe&&Element.prototype.getRootNode?function(a){var e;return a==null||(e=a.getRootNode)===null||e===void 0?void 0:e.call(a)}:function(a){return a?.ownerDocument},q=function a(e,t){var n;t===void 0&&(t=!0);var r=e==null||(n=e.getAttribute)===null||n===void 0?void 0:n.call(e,"inert"),l=r===""||r==="true",i=l||t&&e&&a(e.parentNode);return i},ct=function(e){var t,n=e==null||(t=e.getAttribute)===null||t===void 0?void 0:t.call(e,"contenteditable");return n===""||n==="true"},Be=function(e,t,n){if(q(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(j));return t&&D.call(e,j)&&r.unshift(e),r=r.filter(n),r},Re=function a(e,t,n){for(var r=[],l=Array.from(e);l.length;){var i=l.shift();if(!q(i,!1))if(i.tagName==="SLOT"){var d=i.assignedElements(),u=d.length?d:i.children,p=a(u,!0,n);n.flatten?r.push.apply(r,p):r.push({scopeParent:i,candidates:p})}else{var E=D.call(i,j);E&&n.filter(i)&&(t||!e.includes(i))&&r.push(i);var w=i.shadowRoot||typeof n.getShadowRoot=="function"&&n.getShadowRoot(i),P=!q(w,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(i));if(w&&P){var $=a(w===!0?i.children:w.children,!0,n);n.flatten?r.push.apply(r,$):r.push({scopeParent:i,candidates:$})}else l.unshift.apply(l,i.children)}}return r},Le=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},A=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||ct(e))&&!Le(e)?0:e.tabIndex},ut=function(e,t){var n=A(e);return n<0&&t&&!Le(e)?0:n},dt=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Me=function(e){return e.tagName==="INPUT"},ft=function(e){return Me(e)&&e.type==="hidden"},ht=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(n){return n.tagName==="SUMMARY"});return t},pt=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]},vt=function(e){if(!e.name)return!0;var t=e.form||_(e),n=function(d){return t.querySelectorAll('input[type="radio"][name="'+d+'"]')},r;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")r=n(window.CSS.escape(e.name));else try{r=n(e.name)}catch(i){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",i.message),!1}var l=pt(r,e.form);return!l||l===e},bt=function(e){return Me(e)&&e.type==="radio"},mt=function(e){return bt(e)&&!vt(e)},gt=function(e){var t,n=e&&_(e),r=(t=n)===null||t===void 0?void 0:t.host,l=!1;if(n&&n!==e){var i,d,u;for(l=!!((i=r)!==null&&i!==void 0&&(d=i.ownerDocument)!==null&&d!==void 0&&d.contains(r)||e!=null&&(u=e.ownerDocument)!==null&&u!==void 0&&u.contains(e));!l&&r;){var p,E,w;n=_(r),r=(p=n)===null||p===void 0?void 0:p.host,l=!!((E=r)!==null&&E!==void 0&&(w=E.ownerDocument)!==null&&w!==void 0&&w.contains(r))}}return l},de=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return n===0&&r===0},yt=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var l=D.call(e,"details>summary:first-of-type"),i=l?e.parentElement:e;if(D.call(i,"details:not([open]) *"))return!0;if(!n||n==="full"||n==="legacy-full"){if(typeof r=="function"){for(var d=e;e;){var u=e.parentElement,p=_(e);if(u&&!u.shadowRoot&&r(u)===!0)return de(e);e.assignedSlot?e=e.assignedSlot:!u&&p!==e.ownerDocument?e=p.host:e=u}e=d}if(gt(e))return!e.getClientRects().length;if(n!=="legacy-full")return!0}else if(n==="non-zero-area")return de(e);return!1},Et=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if(r.tagName==="LEGEND")return D.call(t,"fieldset[disabled] *")?!0:!r.contains(e)}return!0}t=t.parentElement}return!1},G=function(e,t){return!(t.disabled||q(t)||ft(t)||yt(t,e)||ht(t)||Et(t))},Z=function(e,t){return!(mt(t)||A(t)<0||!G(e,t))},wt=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},kt=function a(e){var t=[],n=[];return e.forEach(function(r,l){var i=!!r.scopeParent,d=i?r.scopeParent:r,u=ut(d,i),p=i?a(r.candidates):d;u===0?i?t.push.apply(t,p):t.push(d):n.push({documentOrder:l,tabIndex:u,item:r,isScope:i,content:p})}),n.sort(dt).reduce(function(r,l){return l.isScope?r.push.apply(r,l.content):r.push(l.content),r},[]).concat(t)},xt=function(e,t){t=t||{};var n;return t.getShadowRoot?n=Re([e],t.includeContainer,{filter:Z.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:wt}):n=Be(e,t.includeContainer,Z.bind(null,t)),kt(n)},Tt=function(e,t){t=t||{};var n;return t.getShadowRoot?n=Re([e],t.includeContainer,{filter:G.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):n=Be(e,t.includeContainer,G.bind(null,t)),n},N=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return D.call(e,j)===!1?!1:Z(t,e)},Ct=Se.concat("iframe").join(","),W=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return D.call(e,Ct)===!1?!1:G(t,e)};/*!
* focus-trap 7.6.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function Q(a,e){(e==null||e>a.length)&&(e=a.length);for(var t=0,n=Array(e);t<e;t++)n[t]=a[t];return n}function Pt(a){if(Array.isArray(a))return Q(a)}function Ft(a,e,t){return(e=$t(e))in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function At(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function Dt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fe(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),t.push.apply(t,n)}return t}function he(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?fe(Object(t),!0).forEach(function(n){Ft(a,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):fe(Object(t)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(t,n))})}return a}function Nt(a){return Pt(a)||At(a)||St(a)||Dt()}function It(a,e){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var n=t.call(a,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function $t(a){var e=It(a,"string");return typeof e=="symbol"?e:e+""}function St(a,e){if(a){if(typeof a=="string")return Q(a,e);var t={}.toString.call(a).slice(8,-1);return t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set"?Array.from(a):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Q(a,e):void 0}}var pe={activateTrap:function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n._setPausedState(!0)}var r=e.indexOf(t);r===-1||e.splice(r,1),e.push(t)},deactivateTrap:function(e,t){var n=e.indexOf(t);n!==-1&&e.splice(n,1),e.length>0&&!e[e.length-1]._isManuallyPaused()&&e[e.length-1]._setPausedState(!1)}},Ot=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},Bt=function(e){return e?.key==="Escape"||e?.key==="Esc"||e?.keyCode===27},K=function(e){return e?.key==="Tab"||e?.keyCode===9},Rt=function(e){return K(e)&&!e.shiftKey},Lt=function(e){return K(e)&&e.shiftKey},ve=function(e){return setTimeout(e,0)},R=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return typeof e=="function"?e.apply(void 0,n):e},H=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},Mt=[],Kt=function(e,t){var n=t?.document||document,r=t?.trapStack||Mt,l=he({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:Rt,isKeyBackward:Lt},t),i={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},d,u=function(o,s,c){return o&&o[s]!==void 0?o[s]:l[c||s]},p=function(o,s){var c=typeof s?.composedPath=="function"?s.composedPath():void 0;return i.containerGroups.findIndex(function(h){var v=h.container,m=h.tabbableNodes;return v.contains(o)||c?.includes(v)||m.find(function(f){return f===o})})},E=function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=s.hasFallback,h=c===void 0?!1:c,v=s.params,m=v===void 0?[]:v,f=l[o];if(typeof f=="function"&&(f=f.apply(void 0,Nt(m))),f===!0&&(f=void 0),!f){if(f===void 0||f===!1)return f;throw new Error("`".concat(o,"` was specified but was not a node, or did not return a node"))}var g=f;if(typeof f=="string"){try{g=n.querySelector(f)}catch(y){throw new Error("`".concat(o,'` appears to be an invalid selector; error="').concat(y.message,'"'))}if(!g&&!h)throw new Error("`".concat(o,"` as selector refers to no known node"))}return g},w=function(){var o=E("initialFocus",{hasFallback:!0});if(o===!1)return!1;if(o===void 0||o&&!W(o,l.tabbableOptions))if(p(n.activeElement)>=0)o=n.activeElement;else{var s=i.tabbableGroups[0],c=s&&s.firstTabbableNode;o=c||E("fallbackFocus")}else o===null&&(o=E("fallbackFocus"));if(!o)throw new Error("Your focus-trap needs to have at least one focusable element");return o},P=function(){if(i.containerGroups=i.containers.map(function(o){var s=xt(o,l.tabbableOptions),c=Tt(o,l.tabbableOptions),h=s.length>0?s[0]:void 0,v=s.length>0?s[s.length-1]:void 0,m=c.find(function(y){return N(y)}),f=c.slice().reverse().find(function(y){return N(y)}),g=!!s.find(function(y){return A(y)>0});return{container:o,tabbableNodes:s,focusableNodes:c,posTabIndexesFound:g,firstTabbableNode:h,lastTabbableNode:v,firstDomTabbableNode:m,lastDomTabbableNode:f,nextTabbableNode:function(F){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,C=s.indexOf(F);return C<0?O?c.slice(c.indexOf(F)+1).find(function(B){return N(B)}):c.slice(0,c.indexOf(F)).reverse().find(function(B){return N(B)}):s[C+(O?1:-1)]}}}),i.tabbableGroups=i.containerGroups.filter(function(o){return o.tabbableNodes.length>0}),i.tabbableGroups.length<=0&&!E("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(i.containerGroups.find(function(o){return o.posTabIndexesFound})&&i.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},$=function(o){var s=o.activeElement;if(s)return s.shadowRoot&&s.shadowRoot.activeElement!==null?$(s.shadowRoot):s},T=function(o){if(o!==!1&&o!==$(document)){if(!o||!o.focus){T(w());return}o.focus({preventScroll:!!l.preventScroll}),i.mostRecentlyFocusedNode=o,Ot(o)&&o.select()}},ee=function(o){var s=E("setReturnFocus",{params:[o]});return s||(s===!1?!1:o)},te=function(o){var s=o.target,c=o.event,h=o.isBackward,v=h===void 0?!1:h;s=s||H(c),P();var m=null;if(i.tabbableGroups.length>0){var f=p(s,c),g=f>=0?i.containerGroups[f]:void 0;if(f<0)v?m=i.tabbableGroups[i.tabbableGroups.length-1].lastTabbableNode:m=i.tabbableGroups[0].firstTabbableNode;else if(v){var y=i.tabbableGroups.findIndex(function(X){var Y=X.firstTabbableNode;return s===Y});if(y<0&&(g.container===s||W(s,l.tabbableOptions)&&!N(s,l.tabbableOptions)&&!g.nextTabbableNode(s,!1))&&(y=f),y>=0){var F=y===0?i.tabbableGroups.length-1:y-1,O=i.tabbableGroups[F];m=A(s)>=0?O.lastTabbableNode:O.lastDomTabbableNode}else K(c)||(m=g.nextTabbableNode(s,!1))}else{var C=i.tabbableGroups.findIndex(function(X){var Y=X.lastTabbableNode;return s===Y});if(C<0&&(g.container===s||W(s,l.tabbableOptions)&&!N(s,l.tabbableOptions)&&!g.nextTabbableNode(s))&&(C=f),C>=0){var B=C===i.tabbableGroups.length-1?0:C+1,le=i.tabbableGroups[B];m=A(s)>=0?le.firstTabbableNode:le.firstDomTabbableNode}else K(c)||(m=g.nextTabbableNode(s))}}else m=E("fallbackFocus");return m},z=function(o){var s=H(o);if(!(p(s,o)>=0)){if(R(l.clickOutsideDeactivates,o)){d.deactivate({returnFocus:l.returnFocusOnDeactivate});return}R(l.allowOutsideClick,o)||o.preventDefault()}},ne=function(o){var s=H(o),c=p(s,o)>=0;if(c||s instanceof Document)c&&(i.mostRecentlyFocusedNode=s);else{o.stopImmediatePropagation();var h,v=!0;if(i.mostRecentlyFocusedNode)if(A(i.mostRecentlyFocusedNode)>0){var m=p(i.mostRecentlyFocusedNode),f=i.containerGroups[m].tabbableNodes;if(f.length>0){var g=f.findIndex(function(y){return y===i.mostRecentlyFocusedNode});g>=0&&(l.isKeyForward(i.recentNavEvent)?g+1<f.length&&(h=f[g+1],v=!1):g-1>=0&&(h=f[g-1],v=!1))}}else i.containerGroups.some(function(y){return y.tabbableNodes.some(function(F){return A(F)>0})})||(v=!1);else v=!1;v&&(h=te({target:i.mostRecentlyFocusedNode,isBackward:l.isKeyBackward(i.recentNavEvent)})),T(h||i.mostRecentlyFocusedNode||w())}i.recentNavEvent=void 0},Ke=function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;i.recentNavEvent=o;var c=te({event:o,isBackward:s});c&&(K(o)&&o.preventDefault(),T(c))},ae=function(o){(l.isKeyForward(o)||l.isKeyBackward(o))&&Ke(o,l.isKeyBackward(o))},ie=function(o){Bt(o)&&R(l.escapeDeactivates,o)!==!1&&(o.preventDefault(),d.deactivate())},re=function(o){var s=H(o);p(s,o)>=0||R(l.clickOutsideDeactivates,o)||R(l.allowOutsideClick,o)||(o.preventDefault(),o.stopImmediatePropagation())},oe=function(){if(i.active)return pe.activateTrap(r,d),i.delayInitialFocusTimer=l.delayInitialFocus?ve(function(){T(w())}):T(w()),n.addEventListener("focusin",ne,!0),n.addEventListener("mousedown",z,{capture:!0,passive:!1}),n.addEventListener("touchstart",z,{capture:!0,passive:!1}),n.addEventListener("click",re,{capture:!0,passive:!1}),n.addEventListener("keydown",ae,{capture:!0,passive:!1}),n.addEventListener("keydown",ie),d},se=function(){if(i.active)return n.removeEventListener("focusin",ne,!0),n.removeEventListener("mousedown",z,!0),n.removeEventListener("touchstart",z,!0),n.removeEventListener("click",re,!0),n.removeEventListener("keydown",ae,!0),n.removeEventListener("keydown",ie),d},ze=function(o){var s=o.some(function(c){var h=Array.from(c.removedNodes);return h.some(function(v){return v===i.mostRecentlyFocusedNode})});s&&T(w())},V=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(ze):void 0,S=function(){V&&(V.disconnect(),i.active&&!i.paused&&i.containers.map(function(o){V.observe(o,{subtree:!0,childList:!0})}))};return d={get active(){return i.active},get paused(){return i.paused},activate:function(o){if(i.active)return this;var s=u(o,"onActivate"),c=u(o,"onPostActivate"),h=u(o,"checkCanFocusTrap");h||P(),i.active=!0,i.paused=!1,i.nodeFocusedBeforeActivation=n.activeElement,s?.();var v=function(){h&&P(),oe(),S(),c?.()};return h?(h(i.containers.concat()).then(v,v),this):(v(),this)},deactivate:function(o){if(!i.active)return this;var s=he({onDeactivate:l.onDeactivate,onPostDeactivate:l.onPostDeactivate,checkCanReturnFocus:l.checkCanReturnFocus},o);clearTimeout(i.delayInitialFocusTimer),i.delayInitialFocusTimer=void 0,se(),i.active=!1,i.paused=!1,S(),pe.deactivateTrap(r,d);var c=u(s,"onDeactivate"),h=u(s,"onPostDeactivate"),v=u(s,"checkCanReturnFocus"),m=u(s,"returnFocus","returnFocusOnDeactivate");c?.();var f=function(){ve(function(){m&&T(ee(i.nodeFocusedBeforeActivation)),h?.()})};return m&&v?(v(ee(i.nodeFocusedBeforeActivation)).then(f,f),this):(f(),this)},pause:function(o){return i.active?(i.manuallyPaused=!0,this._setPausedState(!0,o)):this},unpause:function(o){return i.active?(i.manuallyPaused=!1,r[r.length-1]!==this?this:this._setPausedState(!1,o)):this},updateContainerElements:function(o){var s=[].concat(o).filter(Boolean);return i.containers=s.map(function(c){return typeof c=="string"?n.querySelector(c):c}),i.active&&P(),S(),this}},Object.defineProperties(d,{_isManuallyPaused:{value:function(){return i.manuallyPaused}},_setPausedState:{value:function(o,s){if(i.paused===o)return this;if(i.paused=o,o){var c=u(s,"onPause"),h=u(s,"onPostPause");c?.(),se(),S(),h?.()}else{var v=u(s,"onUnpause"),m=u(s,"onPostUnpause");v?.(),P(),oe(),S(),m?.()}return this}}}),d.updateContainerElements(e),d};function zt(a,e){return{clickOutsideDeactivates:!0,fallbackFocus:e?.fallbackFocus||a,setReturnFocus:t=>(Ae(t),!1),...e,document:a.ownerDocument,tabbableOptions:Je,trapStack:He}}/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */function be(a,{focusTrapOptions:e},t){return!e?.extraContainers&&!t?a:[a,...me(e?.extraContainers),...me(t)]}function me(a=[]){return Array.isArray(a)?a:[a]}const Ht=a=>Ue((e,t)=>{let n,r,l;const i=a.focusTrapOptions;t.onConnected(()=>{e[a.triggerProp]&&n&&d.activate()}),t.onUpdate(u=>{e.hasUpdated&&u.has("focusTrapDisabled")&&(e.focusTrapDisabled?d.deactivate():d.activate())}),t.onDisconnected(()=>d.deactivate());const d={activate:()=>{const u=r||e.el;if(u.isConnected){if(!n){const p={...i,...e.focusTrapOptions};l||=be(u,e),n=Kt(l,zt(u,p))}(typeof e.focusTrapDisabledOverride=="function"?!e.focusTrapDisabledOverride():!e.focusTrapDisabled)&&n.activate()}},deactivate:()=>n?.deactivate(),overrideFocusTrapEl:u=>{if(n)throw new Error("Focus trap already created");r=u},setExtraContainers:u=>{const p=r||e.el;l=be(p,e,u)},updateContainerElements:()=>n?.updateContainerElements(l)};return d});/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */class Ut{constructor(){this.registeredElements=new Map,this.registeredElementCount=0,this.queryPopover=e=>{const{registeredElements:t}=this,n=e.find(r=>t.has(r));return t.get(n)},this.togglePopovers=e=>{const t=e.composedPath(),n=this.queryPopover(t);n&&!n.triggerDisabled&&(n.open=!n.open),Array.from(this.registeredElements.values()).filter(r=>r!==n&&r.autoClose&&r.open&&!t.includes(r)).forEach(r=>r.open=!1)},this.keyDownHandler=e=>{e.defaultPrevented||(e.key==="Escape"?this.closeAllPopovers():$e(e.key)&&this.togglePopovers(e))},this.clickHandler=e=>{Qe(e)||e.defaultPrevented||this.togglePopovers(e)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t),this.registeredElementCount===1&&this.addListeners()}unregisterElement(e){this.registeredElements.delete(e)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}closeAllPopovers(){Array.from(this.registeredElements.values()).forEach(e=>e.open=!1)}addListeners(){window.addEventListener("click",this.clickHandler),window.addEventListener("keydown",this.keyDownHandler)}removeListeners(){window.removeEventListener("click",this.clickHandler),window.removeEventListener("keydown",this.keyDownHandler)}}const k={positionContainer:"position-container",container:"container",closeButtonContainer:"close-button-container",closeButton:"close-button",content:"content",hasHeader:"has-header",header:"header",headerContainer:"headerContainer",heading:"heading"},ge="auto",ye="aria-controls",Ee="aria-expanded",jt=Ce`:host{display:contents;--calcite-floating-ui-z-index: var(--calcite-popover-z-index, var(--calcite-z-index-popup))}.position-container{inline-size:max-content;display:none;inset-block-start:0;left:0;z-index:var(--calcite-floating-ui-z-index)}.position-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset,left,opacity;opacity:0;box-shadow:0 0 16px #00000029;z-index:var(--calcite-z-index);border-radius:.25rem}.position-container[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.position-container[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.position-container[data-placement^=left] .calcite-floating-ui-anim{left:5px}.position-container[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.position-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block-start:0;left:0}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}:host([scale=s]) .heading{padding:.5rem .75rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding:.75rem 1rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding:1rem 1.25rem;font-size:var(--calcite-font-size-1);line-height:1.375}.position-container .calcite-floating-ui-anim{border-width:1px;border-style:solid;background-color:var(--calcite-popover-background-color, var(--calcite-color-foreground-1));border-color:var(--calcite-popover-border-color, var(--calcite-color-border-3));border-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round))}.calcite-floating-ui-arrow{fill:var(--calcite-popover-background-color, var(--calcite-color-foreground-1))}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-bottom-width:1px;border-style:solid;border-block-end-color:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.heading{margin:0;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);word-wrap:break-word;word-break:break-word;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer{position:relative;display:flex;height:100%;flex-direction:row;flex-wrap:nowrap;border-radius:.25rem;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer.has-header{flex-direction:column}.content{display:flex;height:100%;width:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));border-end-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));--calcite-action-corner-radius-start-end: var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp));--calcite-action-corner-radius-end-end: var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp))}::slotted(calcite-panel),::slotted(calcite-flow){height:100%}:host([hidden]){display:none}[hidden]{display:none}`,we=new Ut;class _t extends Pe{constructor(){super(...arguments),this.closeButtonEl=_e(),this.focusTrap=Ht({triggerProp:"open",focusTrapOptions:{allowOutsideClick:!0,escapeDeactivates:e=>(e.defaultPrevented||(this.open=!1,e.preventDefault()),!1)}})(this),this.guid=`calcite-popover-${Ne()}`,this.hasLoaded=!1,this.mutationObserver=it("mutation",()=>this.focusTrap.updateContainerElements()),this.transitionProp="opacity",this.floatingLayout="vertical",this.autoClose=!1,this.closable=!1,this.flipDisabled=!1,this.focusTrapDisabled=!1,this.messages=st(),this.offsetDistance=ce,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement=ge,this.pointerDisabled=!1,this.scale="m",this.triggerDisabled=!1,this.calcitePopoverBeforeClose=L({cancelable:!1}),this.calcitePopoverBeforeOpen=L({cancelable:!1}),this.calcitePopoverClose=L({cancelable:!1}),this.calcitePopoverOpen=L({cancelable:!1})}static{this.properties={floatingLayout:16,referenceEl:16,autoClose:7,closable:7,flipDisabled:7,flipPlacements:0,focusTrapDisabled:7,focusTrapOptions:0,heading:1,headingLevel:11,label:1,messageOverrides:0,offsetDistance:11,offsetSkidding:11,open:7,overlayPositioning:3,placement:3,pointerDisabled:7,referenceElement:1,scale:3,triggerDisabled:7}}static{this.styles=jt}async reposition(e=!1){const{referenceEl:t,placement:n,overlayPositioning:r,flipDisabled:l,filteredFlipPlacements:i,offsetDistance:d,offsetSkidding:u,arrowEl:p,floatingEl:E}=this;return qe(this,{floatingEl:E,referenceEl:t,overlayPositioning:r,placement:n,flipDisabled:l,flipPlacements:i,offsetDistance:d,offsetSkidding:u,arrowEl:p,type:"popover"},e)}async setFocus(){await Ie(this),this.requestUpdate(),We(this.el)}async updateFocusTrapElements(){this.focusTrap.updateContainerElements()}connectedCallback(){super.connectedCallback(),this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),requestAnimationFrame(()=>this.setUpReferenceElement(this.hasLoaded))}async load(){}willUpdate(e){e.has("flipPlacements")&&this.flipPlacementsHandler(),e.has("open")&&(this.hasUpdated||this.open!==!1)&&this.openHandler(),(e.has("offsetDistance")&&(this.hasUpdated||this.offsetDistance!==ce)||e.has("offsetSkidding")&&(this.hasUpdated||this.offsetSkidding!==0)||e.has("overlayPositioning")&&(this.hasUpdated||this.overlayPositioning!=="absolute")||e.has("placement")&&(this.hasUpdated||this.placement!==ge))&&this.reposition(!0),e.has("referenceElement")&&this.referenceElementHandler()}loaded(){this.referenceElement&&!this.referenceEl&&this.setUpReferenceElement(),this.hasLoaded=!0}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.removeReferences(),Ge(this)}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}openHandler(){et(this),this.reposition(!0),this.setExpandedAttr()}referenceElementHandler(){this.setUpReferenceElement(),this.reposition(!0)}setFloatingEl(e){this.floatingEl=e,e&&requestAnimationFrame(()=>this.setUpReferenceElement())}setTransitionEl(e){this.transitionEl=e}setFilteredPlacements(){const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?Ve(t,e):null}setUpReferenceElement(e=!0){this.removeReferences(),this.referenceEl=this.getReferenceElement(),Xe(this);const{el:t,referenceElement:n,referenceEl:r}=this;e&&n&&!r&&console.warn(`${t.tagName}: reference-element id "${n}" was not found.`,{el:t}),this.addReferences()}getId(){return this.el.id||this.guid}setExpandedAttr(){const{referenceEl:e,open:t}=this;e&&"setAttribute"in e&&e.setAttribute(Ee,De(t))}addReferences(){const{referenceEl:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(ye,t),we.registerElement(e,this.el),this.setExpandedAttr()}removeReferences(){const{referenceEl:e}=this;e&&("removeAttribute"in e&&(e.removeAttribute(ye),e.removeAttribute(Ee)),we.unregisterElement(e))}getReferenceElement(){const{referenceElement:e,el:t}=this;return(typeof e=="string"?Ze(t,{id:e}):e)||null}hide(){this.open=!1}onBeforeOpen(){this.calcitePopoverBeforeOpen.emit()}onOpen(){this.calcitePopoverOpen.emit(),this.focusTrap.activate()}onBeforeClose(){this.calcitePopoverBeforeClose.emit()}onClose(){this.calcitePopoverClose.emit(),Ye(this),this.focusTrap.deactivate()}storeArrowEl(e){this.arrowEl=e,this.reposition(!0)}renderCloseButton(){const{messages:e,closable:t}=this;return t?U(k.closeButtonContainer,I`<div class=${x(k.closeButtonContainer)}><calcite-action appearance=transparent class=${x(k.closeButton)} @click=${this.hide} .scale=${this.scale} .text=${e.close} ${M(this.closeButtonEl)}><calcite-icon icon=x .scale=${ot(this.scale)}></calcite-icon></calcite-action></div>`):null}renderHeader(){const{heading:e,headingLevel:t}=this,n=e?lt({class:k.heading,level:t,children:e}):null;return n?U(k.header,I`<div class=${x(k.header)}>${n}${this.renderCloseButton()}</div>`):null}render(){const{referenceEl:e,heading:t,label:n,open:r,pointerDisabled:l,floatingLayout:i}=this,d=e&&r,u=!d,p=l?null:U("floating-arrow",rt({floatingLayout:i,ref:this.storeArrowEl}));return this.el.inert=u,this.el.ariaLabel=n,this.el.ariaLive="polite",je(this.el,"id",this.getId()),this.el.role="dialog",I`<div class=${x(k.positionContainer)} ${M(this.setFloatingEl)}><div class=${x({[k.container]:!0,[ue.animation]:!0,[ue.animationActive]:d})} ${M(this.setTransitionEl)}>${p}<div class=${x({[k.hasHeader]:!!t,[k.headerContainer]:!0})}>${this.renderHeader()}<div class=${x(k.content)}><slot></slot></div>${t?null:this.renderCloseButton()}</div></div></div>`}}Fe("calcite-popover",_t);/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */function ke(a,e){return(a+e)%e}/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const xe={menu:"menu",defaultTrigger:"default-trigger"},Te={tooltip:"tooltip",trigger:"trigger"},qt={menu:"ellipsis"},Gt="data-active";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const Vt=Ce`:host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1)}::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{display:flex;max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px;gap:var(--calcite-action-menu-items-space, 0)}:host([hidden]){display:none}[hidden]{display:none}`,Xt=["ArrowUp","ArrowDown","End","Home"];class Yt extends Pe{constructor(){super(...arguments),this.guid=`calcite-action-menu-${Ne()}`,this.actionElements=[],this.menuButtonClick=()=>{this.toggleOpen()},this.menuButtonId=`${this.guid}-menu-button`,this.menuButtonKeyDown=e=>{const{key:t}=e,{actionElements:n,activeMenuItemIndex:r,open:l}=this;if(n.length){if($e(t)){if(e.preventDefault(),!l){this.toggleOpen();return}const i=n[r];i?i.click():this.toggleOpen(!1)}if(t==="Tab"){this.open=!1;return}if(t==="Escape"){this.toggleOpen(!1),e.preventDefault();return}this.handleActionNavigation(e,t,n)}},this.menuId=`${this.guid}-menu`,this._open=!1,this.updateAction=(e,t)=>{const{guid:n,activeMenuItemIndex:r}=this,l=`${n}-action-${t}`;e.tabIndex=-1,e.setAttribute("role","menuitem"),e.id||(e.id=l),e.toggleAttribute(Gt,t===r)},this.activeMenuItemIndex=-1,this.appearance="solid",this.expanded=!1,this.overlayPositioning="absolute",this.placement="auto",this.scale="m",this.calciteActionMenuOpen=L({cancelable:!1})}static{this.properties={activeMenuItemIndex:16,menuButtonEl:16,appearance:3,expanded:7,flipPlacements:0,label:1,open:7,overlayPositioning:3,placement:3,scale:3}}static{this.styles=Vt}get open(){return this._open}set open(e){const t=this._open;e!==t&&(this._open=e,this.openHandler(e))}async setFocus(){return await Ie(this),Ae(this.menuButtonEl)}connectedCallback(){super.connectedCallback(),this.connectMenuButtonEl()}load(){}willUpdate(e){e.has("expanded")&&(this.hasUpdated||this.expanded!==!1)&&this.expandedHandler(),e.has("activeMenuItemIndex")&&(this.hasUpdated||this.activeMenuItemIndex!==-1)&&this.updateActions(this.actionElements)}loaded(){}disconnectedCallback(){super.disconnectedCallback(),this.disconnectMenuButtonEl()}expandedHandler(){this.open=!1,this.setTooltipReferenceElement()}openHandler(e){this.menuButtonEl&&(this.menuButtonEl.active=e),this.popoverEl&&(this.popoverEl.open=e),this.activeMenuItemIndex=this.open?0:-1,this.calciteActionMenuOpen.emit(),this.setTooltipReferenceElement()}connectMenuButtonEl(){const{menuButtonId:e,menuId:t,open:n,label:r}=this,l=this.slottedMenuButtonEl||this.defaultMenuButtonEl;this.menuButtonEl!==l&&(this.disconnectMenuButtonEl(),this.menuButtonEl=l,this.setTooltipReferenceElement(),l&&(l.active=n,l.setAttribute("aria-controls",t),l.setAttribute("aria-expanded",De(n)),l.setAttribute("aria-haspopup","true"),l.id||(l.id=e),l.label||(l.label=r),l.text||(l.text=r),l.addEventListener("click",this.menuButtonClick),l.addEventListener("keydown",this.menuButtonKeyDown)))}disconnectMenuButtonEl(){const{menuButtonEl:e}=this;e&&(e.removeEventListener("click",this.menuButtonClick),e.removeEventListener("keydown",this.menuButtonKeyDown),this.menuButtonEl=null)}setMenuButtonEl(e){const t=e.target.assignedElements({flatten:!0}).filter(n=>n?.matches("calcite-action"));this.slottedMenuButtonEl=t[0],this.connectMenuButtonEl()}setDefaultMenuButtonEl(e){this.defaultMenuButtonEl=e,e&&this.connectMenuButtonEl()}setPopoverEl(e){e&&(this.popoverEl=e,e.open=this.open)}handleCalciteActionClick(){this.open=!1,this.setFocus()}updateTooltip(e){const t=e.target.assignedElements({flatten:!0}).filter(n=>n?.matches("calcite-tooltip"));this.tooltipEl=t[0],this.setTooltipReferenceElement()}setTooltipReferenceElement(){const{tooltipEl:e,expanded:t,menuButtonEl:n,open:r}=this;e&&(e.referenceElement=!t&&!r?n:null)}updateActions(e){e?.forEach(this.updateAction)}handleDefaultSlotChange(e){const t=e.target.assignedElements({flatten:!0}).reduce((n,r)=>r?.matches("calcite-action")?(n.push(r),n):r?.matches("calcite-action-group")?n.concat(Array.from(r.querySelectorAll("calcite-action"))):n,[]);this.actionElements=t.filter(n=>!n.disabled&&!n.hidden)}isValidKey(e,t){return!!t.find(n=>n===e)}handleActionNavigation(e,t,n){if(!this.isValidKey(t,Xt))return;if(e.preventDefault(),!this.open){this.toggleOpen(),(t==="Home"||t==="ArrowDown")&&(this.activeMenuItemIndex=0),(t==="End"||t==="ArrowUp")&&(this.activeMenuItemIndex=n.length-1);return}t==="Home"&&(this.activeMenuItemIndex=0),t==="End"&&(this.activeMenuItemIndex=n.length-1);const r=this.activeMenuItemIndex;t==="ArrowUp"&&(this.activeMenuItemIndex=ke(Math.max(r-1,-1),n.length)),t==="ArrowDown"&&(this.activeMenuItemIndex=ke(r+1,n.length))}toggleOpen(e=!this.open){this.open=e}handlePopoverOpen(){this.open=!0,this.setFocus()}handlePopoverClose(){this.open=!1}renderMenuButton(){const{appearance:e,label:t,scale:n,expanded:r}=this;return I`<slot name=${Te.trigger} @slotchange=${this.setMenuButtonEl}><calcite-action .appearance=${e} class=${x(xe.defaultTrigger)} .icon=${qt.menu} .scale=${n} .text=${t} .textEnabled=${r} ${M(this.setDefaultMenuButtonEl)}></calcite-action></slot>`}renderMenuItems(){const{actionElements:e,activeMenuItemIndex:t,menuId:n,menuButtonEl:r,label:l,placement:i,overlayPositioning:d,flipPlacements:u}=this,p=e[t]?.id||null;return I`<calcite-popover auto-close .flipPlacements=${u} focus-trap-disabled .label=${l} offset-distance=0 @calcitePopoverClose=${this.handlePopoverClose} @calcitePopoverOpen=${this.handlePopoverOpen} .overlayPositioning=${d} .placement=${i} pointer-disabled .referenceElement=${r} trigger-disabled ${M(this.setPopoverEl)}><div aria-activedescendant=${p??J} aria-labelledby=${r?.id??J} class=${x(xe.menu)} id=${n??J} @click=${this.handleCalciteActionClick} role=menu tabindex=-1><slot @slotchange=${this.handleDefaultSlotChange}></slot></div></calcite-popover>`}render(){return I`${this.renderMenuButton()}${this.renderMenuItems()}<slot name=${Te.tooltip} @slotchange=${this.updateTooltip}></slot>`}}Fe("calcite-action-menu",Yt);export{Ht as F,Te as e,lt as h};
