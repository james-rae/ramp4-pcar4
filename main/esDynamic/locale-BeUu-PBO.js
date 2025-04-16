import{a as _,c as v}from"./dom-N58V0tYi.js";import{n as S}from"./key-CZySMiwx.js";import{c as y}from"./observers-JaMe6dBO.js";const A=new RegExp("\\.(0+)?$"),C=new RegExp("0+$");class s{constructor(t){if(t instanceof s)return t;const[n,i]=j(t).split(".").concat("");this.value=BigInt(n+i.padEnd(s.DECIMALS,"0").slice(0,s.DECIMALS))+BigInt(s.ROUNDED&&i[s.DECIMALS]>="5"),this.isNegative=t.charAt(0)==="-"}getIntegersAndDecimals(){const t=this.value.toString().replace("-","").padStart(s.DECIMALS+1,"0"),n=t.slice(0,-s.DECIMALS),i=t.slice(-s.DECIMALS).replace(C,"");return{integers:n,decimals:i}}toString(){const{integers:t,decimals:n}=this.getIntegersAndDecimals();return`${this.isNegative?"-":""}${t}${n.length?"."+n:""}`}formatToParts(t){const{integers:n,decimals:i}=this.getIntegersAndDecimals(),r=t.numberFormatter.formatToParts(BigInt(n));return this.isNegative&&r.unshift({type:"minusSign",value:t.minusSign}),i.length&&(r.push({type:"decimal",value:t.decimal}),i.split("").forEach(a=>r.push({type:"fraction",value:a}))),r}format(t){const{integers:n,decimals:i}=this.getIntegersAndDecimals(),r=`${this.isNegative?t.minusSign:""}${t.numberFormatter.format(BigInt(n))}`,a=i.length?`${t.decimal}${i.split("").map(g=>t.numberFormatter.format(Number(g))).join("")}`:"";return`${r}${a}`}add(t){return s.fromBigInt(this.value+new s(t).value)}subtract(t){return s.fromBigInt(this.value-new s(t).value)}multiply(t){return s._divRound(this.value*new s(t).value,s.SHIFT)}divide(t){return s._divRound(this.value*s.SHIFT,new s(t).value)}}s.DECIMALS=100,s.ROUNDED=!0,s.SHIFT=BigInt("1"+"0".repeat(s.DECIMALS)),s._divRound=(e,t)=>s.fromBigInt(e/t+(s.ROUNDED?e*BigInt(2)/t%BigInt(2):BigInt(0))),s.fromBigInt=e=>Object.assign(Object.create(s.prototype),{value:e,isNegative:e<BigInt(0)});function h(e){return!(!e||isNaN(Number(e)))}function B(e){return!e||!k(e)?"":p(e,t=>{let n=!1;const i=t.split("").filter((r,a)=>r.match(/\./g)&&!n?(n=!0,!0):r.match(/-/g)&&a===0?!0:S.includes(r)).join("");return h(i)?new s(i).toString():""})}const I=/^([-0])0+(?=\d)/,R=/(?!^\.)\.$/,z=/(?!^-)-/g,x=/^-\b0\b\.?0*$/,L=/0*$/,T=e=>p(e,t=>{const n=t.replace(z,"").replace(R,"").replace(I,"$1");return h(n)?x.test(n)?n:M(n):t});function M(e){const t=e.split(".")[1],n=new s(e).toString(),[i,r]=n.split(".");return t&&r!==t?`${i}.${t}`:n}function p(e,t){if(!e)return e;const n=e.toLowerCase().indexOf("e")+1;return n?e.replace(/[eE]*$/g,"").substring(0,n).concat(e.slice(n).replace(/[eE]/g,"")).split(/[eE]/).map((i,r)=>t(r===1?i.replace(/\./g,""):i)).join("e").replace(/^e/,"1e"):t(e)}function j(e){const t=e.split(/[eE]/);if(t.length===1)return e;const n=+e;if(Number.isSafeInteger(n))return`${n}`;const i=e.charAt(0)==="-",r=+t[1],a=t[0].split("."),g=(i?a[0].substring(1):a[0])||"",f=a[1]||"",N=(l,o)=>{const c=Math.abs(o)-l.length,$=c>0?`${"0".repeat(c)}${l}`:l;return`${$.slice(0,o)}.${$.slice(o)}`},D=(l,o)=>{const c=o>l.length?`${l}${"0".repeat(o-l.length)}`:l;return`${c.slice(0,o)}.${c.slice(o)}`},b=r>0?`${g}${D(f,r)}`:`${N(g,r)}${f}`;return`${i?"-":""}${b.charAt(0)==="."?"0":""}${b.replace(A,"").replace(I,"")}`}function k(e){return S.some(t=>e.includes(t))}function H(e,t,n){const i=t.split(".")[1];if(i){const r=i.match(L)[0];if(r&&n.delocalize(e).length!==t.length&&i.indexOf("e")===-1){const a=n.decimal;return e=e.includes(a)?e:`${e}${a}`,e.padEnd(e.length+r.length,n.localize("0"))}}return e}const u="en",G=["ar","bg","bs","ca","cs","da","de","el",u,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],P=["ar","bg","bs","ca","cs","da","de","de-AT","de-CH","el",u,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],U=["arab","arabext","latn"],E=e=>U.includes(e),d=new Intl.NumberFormat().resolvedOptions().numberingSystem,F=d==="arab"||!E(d)?"latn":d,J=e=>E(e)?e:F;function w(e,t="cldr"){const n=t==="cldr"?P:G;return e?n.includes(e)?e:(e=e.toLowerCase(),e==="nb"?"no":t==="t9n"&&e==="pt"?"pt-BR":(e.includes("-")&&(e=e.replace(/(\w+)-(\w+)/,(i,r,a)=>`${r}-${a.toUpperCase()}`),n.includes(e)||(e=e.split("-")[0])),e==="zh"?"zh-CN":n.includes(e)?e:(console.warn(`Translations for the "${e}" locale are not available and will fall back to the default, English (en).`),u))):u}const m=new Set;function K(e){W(e),m.size===0&&O?.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0}),m.add(e)}function W(e){e.effectiveLocale=Q(e)}function q(e){m.delete(e),m.size===0&&O.disconnect()}const O=y("mutation",e=>{e.forEach(t=>{const n=t.target;m.forEach(i=>{if(!_(n,i.el))return;const r=v(i.el,"[lang]");if(!r){i.effectiveLocale=u;return}const a=r.lang;i.effectiveLocale=r.hasAttribute("lang")&&a===""?u:a})})});function Q(e){return e.el.lang||v(e.el,"[lang]")?.lang||document.documentElement.lang||u}class V{constructor(){this.delocalize=t=>this._numberFormatOptions?p(t,n=>n.replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex)):t,this.localize=t=>this._numberFormatOptions?p(t,n=>h(n.trim())?new s(n.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):n):t}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(t){if(t.locale=w(t?.locale),t.numberingSystem=J(t?.numberingSystem),!this._numberFormatOptions&&t.locale===u&&t.numberingSystem===F&&Object.keys(t).length===2||JSON.stringify(this._numberFormatOptions)===JSON.stringify(t))return;this._numberFormatOptions=t,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const n=new Map(this._digits.map((r,a)=>[r,a])),i=new Intl.NumberFormat(this._numberFormatOptions.locale,{numberingSystem:this._numberFormatOptions.numberingSystem}).formatToParts(-123456789e-1);this._actualGroup=i.find(r=>r.type==="group").value,this._group=this._actualGroup.trim().length===0||this._actualGroup==" "?"\xA0":this._actualGroup,this._decimal=i.find(r=>r.type==="decimal").value,this._minusSign=i.find(r=>r.type==="minusSign").value,this._getDigitIndex=r=>n.get(r)}}const X=new V;export{s as B,H as a,K as c,q as d,w as g,h as i,X as n,B as p,T as s};
