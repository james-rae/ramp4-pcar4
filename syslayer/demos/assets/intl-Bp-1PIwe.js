import{gQ as B,aF as $,a9 as M,s as f,L as N,a4 as U,cB as z}from"./main-D_jCcUNd.js";const F={ar:"ar-u-nu-latn"};let g=new WeakMap,L={};function m(n){const t=n||L;if(!g.has(t)){const e=$(),r=F[$()]||e;g.set(t,new Intl.NumberFormat(r,n))}return g.get(t)}function H(n={}){const t={};return n.digitSeparator!=null&&(t.useGrouping=n.digitSeparator),n.places!=null&&(t.minimumFractionDigits=t.maximumFractionDigits=n.places),t}function I(n,t){return Object.is(n,-0)&&(n=0),m(t).format(n)}function J(n,t=$()){if(!n)return null;let e=_.get(t);if(!e){const r=m().formatToParts(12345.6),s=[...m({useGrouping:!1}).format(9876543210)].reverse(),i=new Map(s.map((a,o)=>[a,o])),h=new RegExp(`[${r.find(a=>a.type==="group")?.value}]`,"g"),p=new RegExp(`[${r.find(a=>a.type==="decimal")?.value}]`),l=new RegExp(`[${s.join("")}]`,"g"),w=/[\u200E\u200F\u202A\u202B\u202C\u202D\u202E\u2066\u2067\u2068\u2069\u061C]/g,c=/[-\u2212\u2013\u2014\u2015]/g;e=a=>{if((a=a.trim().replaceAll(h,"").replace(p,".").replace(l,E=>String(i.get(E))).replaceAll(w,"").replaceAll(c,"-"))==="")return null;const o=Number(a);return isNaN(o)?null:o},_.set(t,e)}return e(n)}B(()=>{g=new WeakMap,L={}});const _=new Map,b=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,k={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:"no",nl:!0,no:!0,pl:!0,pt:"pt-BR","pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,zh:"zh-CN","zh-CN":!0,"zh-HK":!0,"zh-TW":!0};function j(n){return n in k}function y(n){if(j(n)){const t=k[n];return t===!0?n:t}return null}const d=[],u=new Map;function x(n){for(const t of u.keys())v(n.pattern,t)&&u.delete(t)}function C(n){return d.includes(n)||(x(n),d.unshift(n)),M(()=>{const t=d.indexOf(n);t>-1&&(d.splice(t,1),x(n))})}async function K(n){const t=$();u.has(n)||u.set(n,S(n,t));const e=u.get(n);return e&&await T.add(e),e}function W(n){if(!b.test(n))return null;const t=b.exec(n);if(t===null)return null;const[,e,r]=t;return y(e+(r?"-"+r.toUpperCase():""))??y(e)}async function S(n,t){const e=[];for(const r of d)if(v(r.pattern,n))try{return await r.fetchMessageBundle(n,t)}catch(s){e.push(s)}throw e.length?new f("intl:message-bundle-error",`Errors occurred while loading "${n}"`,{errors:e}):new f("intl:no-message-bundle-loader",`No loader found for message bundle "${n}"`)}function v(n,t){return typeof n=="string"?t.startsWith(n):n.test(t)}B(()=>{u.clear()});const T=new class{constructor(){this._numLoading=0,this._dfd=null}async waitForAll(){this._dfd&&await this._dfd.promise}add(n){return this._increase(),n.then(()=>this._decrease(),()=>this._decrease()),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=N())}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&this._numLoading===0&&(this._dfd.resolve(),this._dfd=null)}};async function D(n,t,e,r){const s=t.exec(e);if(!s)throw new f("esri-intl:invalid-bundle",`Bundle id "${e}" is not compatible with the pattern "${t}"`);const i=s[1]?`${s[1]}/`:"",h=s[2],p=W(r),l=`${i}${h}.json`,w=p?`${i}${h}_${p}.json`:l;let c;try{c=await R(n(w))}catch(a){if(w===l)throw new f("intl:unknown-bundle",`Bundle "${e}" cannot be loaded`,{error:a});try{c=await R(n(l))}catch(o){throw new f("intl:unknown-bundle",`Bundle "${e}" cannot be loaded`,{error:o})}}return c}async function R(n){if(A.fetchBundleAsset!=null)return A.fetchBundleAsset(n);const t=await U(n,{responseType:"text"});return JSON.parse(t.data)}class O{constructor({base:t="",pattern:e,location:r=new URL(window.location.href)}){let s;s=typeof r=="string"?i=>new URL(i,new URL(r,window.location.href)).href:r instanceof URL?i=>new URL(i,r).href:r,this.pattern=typeof e=="string"?new RegExp(`^${e}`):e,this.getAssetUrl=s,t=t?t.endsWith("/")?t:t+"/":"",this.matcher=new RegExp(`^${t}(?:(.*)\\/)?(.*)$`)}fetchMessageBundle(t,e){return D(this.getAssetUrl,this.matcher,t,e)}}function P(n){return new O(n)}const A={};C(P({pattern:"esri/",location:z}));export{K as f,H as i,I as l,J as o,W as p};
