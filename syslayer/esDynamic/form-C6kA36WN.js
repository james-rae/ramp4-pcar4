import{x as L}from"./themeUtils-U8eccLDb.js";import{Q as w,m as f}from"./dom-ChHLWznX.js";const q=["calcite-input","calcite-input-number","calcite-input-text","calcite-text-area"];function $(e){return`${e.split("-").map((t,i)=>i===0?t:`${t[0].toUpperCase()}${t.slice(1)}`).join("")}${q.includes(e)?"Input":"Change"}`}const m="hidden-form-input";function p(e){return"checked"in e}const h=new WeakMap,E=new WeakSet;function x(e,t){if(f(t.parentElement,"[form]"))return!0;const i="calciteInternalFormComponentRegister";let n=!1;return e.addEventListener(i,a=>{n=a.composedPath().some(r=>E.has(r)),a.stopPropagation()},{once:!0}),t.dispatchEvent(new CustomEvent(i,{bubbles:!0,composed:!0})),n}function F(e,{status:t,message:i,icon:n}){"status"in e&&(e.status=t),"validationIcon"in e&&typeof e.validationIcon!="string"&&(e.validationIcon=n),"validationMessage"in e&&!e.validationMessage&&(e.validationMessage=i)}function g(e){return e.nodeName==="CALCITE-RADIO-BUTTON"?f(e,"calcite-radio-button-group"):e}const D=new CustomEvent("calciteInvalid",{bubbles:!0,composed:!0});function b(e){const t=e?.target,i=t?.validationMessage,n=g(t?.parentElement);if(!n)return;const a=n?.nodeName?.toLowerCase(),r=a?.split("-");if(r.length<2||r[0]!=="calcite")return;e?.preventDefault(),"validity"in n&&(n.validity=t?.validity),n.dispatchEvent(D),F(n,{message:i,icon:!0,status:"invalid"});const c=$(a);n.addEventListener(c,()=>{"status"in n&&(n.status="idle"),"validationIcon"in n&&(n.validationIcon===""||n.validationIcon===!0)&&(n.validationIcon=!1),"validationMessage"in n&&n.validationMessage===i&&(n.validationMessage=""),"validity"in n&&(n.validity=t?.validity)},{once:!0})}function S(e){const{formEl:t}=e;return t?(t.addEventListener("invalid",b,!0),t.requestSubmit(),t.removeEventListener("invalid",b,!0),requestAnimationFrame(()=>{const i=t.querySelectorAll("[status=invalid]");for(const n of i)if(n?.validationMessage){n?.setFocus();break}}),!0):!1}function V(e){e.formEl?.reset()}function N(e){const{el:t,value:i}=e,n=I(e);if(!n||x(n,t))return;e.formEl=n,e.defaultValue=i,p(e)&&(e.defaultChecked=e.checked);const a=T.bind(e);n.addEventListener("reset",a),h.set(e.el,a),E.add(t)}function I(e){const{el:t,form:i}=e;return i?w(t,{id:i}):f(t,"form")}function T(){if("status"in this&&(this.status="idle"),"validationIcon"in this&&(this.validationIcon=!1),"validationMessage"in this&&(this.validationMessage=""),p(this)){this.checked=this.defaultChecked;return}this.value=this.defaultValue,this.onFormReset?.()}function H(e){const{el:t,formEl:i}=e;if(!i)return;const n=h.get(t);i.removeEventListener("reset",n),h.delete(t),e.formEl=null,E.delete(t)}const y="calciteInternalHiddenInputInput",C=e=>{e.target.dispatchEvent(new CustomEvent(y,{bubbles:!0}))},k=e=>e.removeEventListener("input",C);function P(e){const{el:t,formEl:i,name:n,value:a}=e,{ownerDocument:r}=t,c=t.querySelectorAll(`input[slot="${m}"]`);if(!i||!n){c.forEach(o=>{k(o),o.remove()});return}const v=Array.isArray(a)?a:[a],l=[],d=new Set;c.forEach(o=>{const s=v.find(A=>A==o.value);s!=null?(d.add(s),M(e,o,s)):l.push(o)});let u;v.forEach(o=>{if(d.has(o))return;let s=l.pop();s||(s=r.createElement("input"),s.ariaHidden="true",s.slot=m),u||(u=r.createDocumentFragment()),u.append(s),s.addEventListener("input",C),M(e,s,o)}),u&&t.append(u),l.forEach(o=>{k(o),o.remove()})}function M(e,t,i){const{defaultValue:n,disabled:a,form:r,name:c,required:v}=e;t.defaultValue=n,t.disabled=a,t.name=c,t.required=v,t.tabIndex=-1,r?t.setAttribute("form",r):t.removeAttribute("form"),p(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?i||"on":""):t.value=i||"",e.syncHiddenFormInput?.(t);const l=g(e.el);if(l&&"validity"in l)for(const d in{...t?.validity})l.validity[d]=t.validity[d]}const R=({component:e})=>(P(e),L`<slot name=${m}></slot>`);export{S as $,I as A,R as B,N as D,H as W,y as q,V as x};
