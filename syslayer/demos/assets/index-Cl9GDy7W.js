import{J as y,i as z,L as k,m as C,x as O,a as U,d as f,E as p,S as D,T as I}from"./themeUtils-B7nSQ0Ik.js";import{b as L,w as A}from"./dom-C1FrJZto.js";import{b as R}from"./observers-C6b0B9U5.js";import"./main-D_jCcUNd.js";import"./preload-helper-ExcqyqRp.js";import"./intl-Bp-1PIwe.js";import"./uuid-Cl5lrJ4c.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const b=new Set,m={trace:0,debug:1,info:2,warn:4,error:8,off:10};function E(t){return m[t]>=m[y]}function l(t,...i){E(t)&&console[t].call(this,"%ccalcite","background: #007AC2; color: #fff; border-radius: 4px; padding: 2px 4px;",...i)}let d;const P={debug:t=>l("debug",t),info:t=>l("info",t),warn:t=>l("warn",t),error:t=>l("error",t),trace:t=>l("trace",t),deprecated:j};function j(t,{component:i,name:s,suggested:e,removalVersion:n}){const a=`${t}:${t==="component"?"":i}${s}`;if(b.has(a))return;b.add(a);const r=Array.isArray(e);r&&!d&&(d=new Intl.ListFormat("en",{style:"long",type:"disjunction"}));const o=`[${s}] ${t} is deprecated and will be removed in ${n==="future"?"a future version":`v${n}`}.${e?` Use ${r?d.format(e.map(c=>`"${c}"`)):`"${e}"`} instead.`:""}`;l("warn",o)}/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const F={flipRtl:"flip-rtl"},$={},u={},v={s:16,m:24,l:32};function g({icon:t,scale:i}){const s=v[i],e=M(t),n=e.charAt(e.length-1)==="F";return`${n?e.substring(0,e.length-1):e}${s}${n?"F":""}`}async function N(t){const i=g(t),s=x(i);if(s)return s;u[i]||(u[i]=fetch(I(`./assets/icon/${i}.json`)).then(n=>n.json()).catch(()=>(P.error(`${t.icon} (${t.scale}) icon failed to load`),"")));const e=await u[i];return $[i]=e,e}function V(t){return x(g(t))}function x(t){return $[t]}function M(t){const i=!isNaN(Number(t.charAt(0))),s=t.split("-");if(s.length>0){const e=/[a-z]/i;t=s.map((n,a)=>n.replace(e,function(r,o){return a===0&&o===0?r:r.toUpperCase()})).join("")}return i?`i${t}`:t}const S=z`:host{display:inline-flex;color:var(--calcite-icon-color, var(--calcite-ui-icon-color, currentColor))}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}`;class B extends k{constructor(){super(...arguments),this.visible=!1,this.flipRtl=!1,this.icon=null,this.preload=!1,this.scale="m"}static{this.properties={pathData:16,visible:16,flipRtl:7,icon:3,preload:7,scale:3,textLabel:1}}static{this.styles=S}connectedCallback(){if(super.connectedCallback(),this.preload){this.visible=!0,this.loadIconPathData();return}this.visible||this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}willUpdate(i){(i.has("icon")&&(this.hasUpdated||this.icon!==null)||i.has("scale")&&(this.hasUpdated||this.scale!=="m"))&&this.loadIconPathData()}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver?.disconnect(),this.intersectionObserver=null}async loadIconPathData(){const{icon:i,scale:s,visible:e}=this;if(!C()||!i||!e)return;const n={icon:i,scale:s},a=V(n)||await N(n);i===this.icon&&(this.pathData=a)}waitUntilVisible(i){if(this.intersectionObserver=R("intersection",s=>{s.forEach(e=>{e.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,i())})},{rootMargin:"50px"}),!this.intersectionObserver){i();return}this.intersectionObserver.observe(this.el)}render(){const{el:i,flipRtl:s,pathData:e,scale:n,textLabel:a}=this,r=L(i),o=v[n],c=!!a,w=[].concat(e||"");return this.el.ariaHidden=A(!c),this.el.ariaLabel=c?a:null,this.el.role=c?"img":null,O`<svg aria-hidden=true class=${U({[F.flipRtl]:r==="rtl"&&s,svg:!0})} fill=currentColor height=100% viewBox=${`0 0 ${o} ${o}`} width=100% xmlns=http://www.w3.org/2000/svg>${w.map(h=>typeof h=="string"?f`<path d=${h??p} />`:f`<path d=${h.d??p} opacity=${("opacity"in h?h.opacity:1)??p} />`)}</svg>`}}D("calcite-icon",B);export{B as Icon};
