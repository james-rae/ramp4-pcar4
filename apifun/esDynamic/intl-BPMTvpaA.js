import{g$ as $,aD as g,a7 as U,s as d,L as z,a2 as E,cy as F}from"./main-DeRV24Di.js";const j={ar:"ar-u-nu-latn"};let m=new WeakMap,b={};function _(t){const e=t||b;if(!m.has(e)){const n=g(),r=j[g()]||n;m.set(e,new Intl.NumberFormat(r,t))}return m.get(e)}function C(t={}){const e={};return t.digitSeparator!=null&&(e.useGrouping=t.digitSeparator),t.places!=null&&(e.minimumFractionDigits=e.maximumFractionDigits=t.places),e}function W(t,e){return Object.is(t,-0)&&(t=0),_(e).format(t)}function D(t,e=g()){if(!t)return null;let n=y.get(e);if(!n){const r=_().formatToParts(12345.6),s=[..._({useGrouping:!1}).format(9876543210)].reverse(),i=new Map(s.map((a,o)=>[a,o])),h=new RegExp(`[${r.find(a=>a.type==="group")?.value}]`,"g"),p=new RegExp(`[${r.find(a=>a.type==="decimal")?.value}]`),l=new RegExp(`[${s.join("")}]`,"g"),w=/[\u200E\u200F\u202A\u202B\u202C\u202D\u202E\u2066\u2067\u2068\u2069\u061C]/g,c=/[-\u2212\u2013\u2014\u2015]/g;n=a=>{if((a=a.trim().replaceAll(h,"").replace(p,".").replace(l,N=>String(i.get(N))).replaceAll(w,"").replaceAll(c,"-"))==="")return null;const o=Number(a);return isNaN(o)?null:o},y.set(e,n)}return n(t)}$(()=>{m=new WeakMap,b={}});const y=new Map,x=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,R={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:"no",nl:!0,no:!0,pl:!0,pt:"pt-BR","pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,zh:"zh-CN","zh-CN":!0,"zh-HK":!0,"zh-TW":!0};function S(t){return t in R}function A(t){if(S(t)){const e=R[t];return e===!0?t:e}return null}const f=[],u=new Map;function L(t){for(const e of u.keys())k(t.pattern,e)&&u.delete(e)}function T(t){return f.includes(t)||(L(t),f.unshift(t)),U(()=>{const e=f.indexOf(t);e>-1&&(f.splice(e,1),L(t))})}async function O(t){const e=g();u.has(t)||u.set(t,P(t,e));const n=u.get(t);return n&&await G.add(n),n}function B(t){if(!x.test(t))return null;const e=x.exec(t);if(e===null)return null;const[,n,r]=e;return A(n+(r?"-"+r.toUpperCase():""))??A(n)}async function P(t,e){const n=[];for(const r of f)if(k(r.pattern,t))try{return await r.fetchMessageBundle(t,e)}catch(s){n.push(s)}throw n.length?new d("intl:message-bundle-error",`Errors occurred while loading "${t}"`,{errors:n}):new d("intl:no-message-bundle-loader",`No loader found for message bundle "${t}"`)}function k(t,e){return typeof t=="string"?e.startsWith(t):t.test(e)}$(()=>{u.clear()});const G=new class{constructor(){this._numLoading=0,this._dfd=null}async waitForAll(){this._dfd&&await this._dfd.promise}add(t){return this._increase(),t.then(()=>this._decrease(),()=>this._decrease()),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=z())}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&this._numLoading===0&&(this._dfd.resolve(),this._dfd=null)}};async function H(t,e,n,r){const s=e.exec(n);if(!s)throw new d("esri-intl:invalid-bundle",`Bundle id "${n}" is not compatible with the pattern "${e}"`);const i=s[1]?`${s[1]}/`:"",h=s[2],p=B(r),l=`${i}${h}.json`,w=p?`${i}${h}_${p}.json`:l;let c;try{c=await v(t(w))}catch(a){if(w===l)throw new d("intl:unknown-bundle",`Bundle "${n}" cannot be loaded`,{error:a});try{c=await v(t(l))}catch(o){throw new d("intl:unknown-bundle",`Bundle "${n}" cannot be loaded`,{error:o})}}return c}async function v(t){if(M.fetchBundleAsset!=null)return M.fetchBundleAsset(t);const e=await E(t,{responseType:"text"});return JSON.parse(e.data)}class I{constructor({base:e="",pattern:n,location:r=new URL(window.location.href)}){let s;s=typeof r=="string"?i=>new URL(i,new URL(r,window.location.href)).href:r instanceof URL?i=>new URL(i,r).href:r,this.pattern=typeof n=="string"?new RegExp(`^${n}`):n,this.getAssetUrl=s,e=e?e.endsWith("/")?e:e+"/":"",this.matcher=new RegExp(`^${e}(?:(.*)\\/)?(.*)$`)}fetchMessageBundle(e,n){return H(this.getAssetUrl,this.matcher,e,n)}}function J(t){return new I(t)}const M={};T(J({pattern:"esri/",location:F}));export{O as f,C as i,W as l,D as o,B as p};
