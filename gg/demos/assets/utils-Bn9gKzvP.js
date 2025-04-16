import{d as C}from"./ClassBreaksDefinition-5TKLdi9F.js";import{n as w}from"./main-BnINupoD.js";const E=()=>w.getLogger("esri.rest.support.generateRendererUtils");function v(n,e){return Number(n.toFixed(e))}function bn(n){const e=N(n),t=[],a=e.uniqueValues.length;for(let l=0;l<a;l++){const c=e.uniqueValues[l],s=e.valueFrequency[l],i=c.toString();t.push({value:c,count:s,label:i})}return{uniqueValues:t}}function B(n,e){const{normalizationTotal:t}=n;return{classBreaks:O(n,e),normalizationTotal:t}}function O(n,e){const t=n.definition,{classificationMethod:a,normalizationType:l,definedInterval:c}=t,s=t.breakCount??1,i=[];let r=n.values;if(r.length===0)return[];r=r.sort((m,o)=>m-o);const[h,d]=e??[r.at(0),r.at(-1)];if(a==="equal-interval")if(r.length>=s){const m=(d-h)/s;let o=h;for(let u=1;u<s;u++){const f=v(h+u*m,6);i.push({minValue:o,maxValue:f,label:b(o,f,l)}),o=f}i.push({minValue:o,maxValue:d,label:b(o,d,l)})}else r.forEach(m=>{i.push({minValue:m,maxValue:m,label:b(m,m,l)})});else if(a==="natural-breaks"){const m=N(r),o=n.valueFrequency||m.valueFrequency,u=U(m.uniqueValues,o,s);let f=h;for(let p=1;p<s;p++)if(m.uniqueValues.length>p){const V=v(m.uniqueValues[u[p]],6);i.push({minValue:f,maxValue:V,label:b(f,V,l)}),f=V}i.push({minValue:f,maxValue:d,label:b(f,d,l)})}else if(a==="quantile")if(r.length>=s&&h!==d){let m=h,o=Math.ceil(r.length/s),u=0;for(let f=1;f<s;f++){let p=o+u-1;p>r.length&&(p=r.length-1),p<0&&(p=0),i.push({minValue:m,maxValue:r[p],label:b(m,r[p],l)}),m=r[p],u+=o,o=Math.ceil((r.length-u)/(s-f))}i.push({minValue:m,maxValue:d,label:b(m,d,l)})}else{let m=-1;for(let o=0;o<r.length;o++){const u=r[o];u!==m&&(m=u,i.push({minValue:m,maxValue:u,label:b(m,u,l)}),m=u)}}else if(a==="standard-deviation"){const m=G(r),o=A(r,m);if(o===0)i.push({minValue:r[0],maxValue:r[0],label:b(r[0],r[0],l)});else{const u=L(h,d,s,m,o)*o;let f=0,p=h;for(let g=s;g>=1;g--){const M=v(m-(g-.5)*u,6);i.push({minValue:p,maxValue:M,label:b(p,M,l)}),p=M,f++}let V=v(m+.5*u,6);i.push({minValue:p,maxValue:V,label:b(p,V,l)}),p=V,f++;for(let g=1;g<=s;g++)V=f===2*s?d:v(m+(g+.5)*u,6),i.push({minValue:p,maxValue:V,label:b(p,V,l)}),p=V,f++}}else if(a==="defined-interval"){if(!c)return i;const[m,o]=e??[r.at(0),r.at(-1)],u=Math.ceil((o-m)/c);let f=m;for(let p=1;p<u;p++){const V=v(m+p*c,6);i.push({minValue:f,maxValue:V,label:b(f,V,l)}),f=V}i.push({minValue:f,maxValue:o,label:b(f,o,l)})}return i}function b(n,e,t){let a=null;return a=n===e?t&&t==="percent-of-total"?n+"%":n.toString():t&&t==="percent-of-total"?n+"% - "+e+"%":n+" - "+e,a}function N(n){const e=[],t=[];let a=Number.MIN_VALUE,l=1,c=-1;for(let s=0;s<n.length;s++){const i=n[s];i===a?(l++,t[c]=l):i!==null&&(e.push(i),a=i,l=1,t.push(l),c++)}return{uniqueValues:e,valueFrequency:t}}function U(n,e,t){const a=n.length,l=[];t>a&&(t=a);for(let s=0;s<t;s++)l.push(Math.round(s*a/t-1));l.push(a-1);let c=S(l,n,e,t);return P(c.mean,c.sdcm,l,n,e,t)&&(c=S(l,n,e,t)),l}function S(n,e,t,a){let l=[],c=[],s=[],i=0;const r=[],h=[];for(let u=0;u<a;u++){const f=x(u,n,e,t);r.push(f.sbMean),h.push(f.sbSdcm),i+=h[u]}let d,m=i,o=!0;for(;o||i<m;){o=!1,l=[];for(let u=0;u<a;u++)l.push(n[u]);for(let u=0;u<a;u++)for(let f=n[u]+1;f<=n[u+1];f++)if(d=e[f],u>0&&f!==n[u+1]&&Math.abs(d-r[u])>Math.abs(d-r[u-1]))n[u]=f;else if(u<a-1&&n[u]!==f-1&&Math.abs(d-r[u])>Math.abs(d-r[u+1])){n[u+1]=f-1;break}m=i,i=0,c=[],s=[];for(let u=0;u<a;u++){c.push(r[u]),s.push(h[u]);const f=x(u,n,e,t);r[u]=f.sbMean,h[u]=f.sbSdcm,i+=h[u]}}if(i>m){for(let u=0;u<a;u++)n[u]=l[u],r[u]=c[u],h[u]=s[u];i=m}return{mean:r,sdcm:h}}function P(n,e,t,a,l,c){let s=0,i=0,r=0,h=0,d=!0;for(let m=0;m<2&&d;m++){m===0&&(d=!1);for(let o=0;o<c-1;o++)for(;t[o+1]+1!==t[o+2];){t[o+1]=t[o+1]+1;const u=x(o,t,a,l);r=u.sbMean,s=u.sbSdcm;const f=x(o+1,t,a,l);if(h=f.sbMean,i=f.sbSdcm,!(s+i<e[o]+e[o+1])){t[o+1]=t[o+1]-1;break}e[o]=s,e[o+1]=i,n[o]=r,n[o+1]=h,d=!0}for(let o=c-1;o>0;o--)for(;t[o]!==t[o-1]+1;){t[o]=t[o]-1;const u=x(o-1,t,a,l);r=u.sbMean,s=u.sbSdcm;const f=x(o,t,a,l);if(h=f.sbMean,i=f.sbSdcm,!(s+i<e[o-1]+e[o])){t[o]=t[o]+1;break}e[o-1]=s,e[o]=i,n[o-1]=r,n[o]=h,d=!0}}return d}function L(n,e,t,a,l){let c=Math.max(a-n,e-a)/l/t;return c=c>=1?1:c>=.5?.5:.25,c}function G(n){let e=0;for(let t=0;t<n.length;t++)e+=n[t];return e/=n.length,e}function A(n,e){let t=0;for(let a=0;a<n.length;a++){const l=n[a];t+=(l-e)*(l-e)}return t/=n.length,Math.sqrt(t)}function x(n,e,t,a){let l=0,c=0;for(let r=e[n]+1;r<=e[n+1];r++){const h=a[r];l+=t[r]*h,c+=h}c<=0&&E().warn("Exception in Natural Breaks calculation");const s=l/c;let i=0;for(let r=e[n]+1;r<=e[n+1];r++)i+=a[r]*(t[r]-s)**2;return{sbMean:s,sbSdcm:i}}const _="<Null>",Y="equal-interval",j=1,Q=5,R=10,H=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,J=new Set(["esriFieldTypeDate","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeOID","esriFieldTypeBigInteger"]),K=new Set(["esriFieldTypeTimeOnly","esriFieldTypeDateOnly"]),W=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function T(n){return n==null||typeof n=="string"&&!n?_:n}function X(n){const e=n.normalizationField!=null||n.normalizationType!=null,t=n.minValue!=null||n.maxValue!=null,a=!!n.sqlExpression&&n.supportsSQLExpression;return!e&&!t&&!a}function gn(n){const{outStatisticTypes:e}=n,t=n.returnDistinct?[...new Set(n.values)]:n.values,a=t.filter(s=>s!=null).sort(),l=a.length,c={count:l,min:a[0],max:a[l-1]};return n.supportsNullCount&&(c.nullcount=t.length-l),!n.percentileParams||e?.include?.length&&!e.include.includes("median")||e?.exclude?.length&&e.exclude.includes("median")||(c.median=q(t,n.percentileParams)),c}function Z(n){const{values:e,useSampleStdDev:t,supportsNullCount:a,outStatisticTypes:l}=n;let c=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,i=null,r=null,h=null,d=null,m=0;const o=n.minValue==null?-1/0:n.minValue,u=n.maxValue==null?1/0:n.maxValue;for(const p of e)Number.isFinite(p)?p>=o&&p<=u&&(i=i===null?p:i+p,c=Math.min(c,p),s=Math.max(s,p),m++):typeof p=="string"&&m++;if(m&&i!=null){r=i/m;let p=0;for(const V of e)Number.isFinite(V)&&V>=o&&V<=u&&(p+=(V-r)**2);d=t?m>1?p/(m-1):0:m>0?p/m:0,h=Math.sqrt(d)}else c=null,s=null;const f={avg:r,count:m,max:s,min:c,stddev:h,sum:i,variance:d};return a&&(f.nullcount=e.length-m),!n.percentileParams||l?.include?.length&&!l.include.includes("median")||l?.exclude?.length&&l.exclude.includes("median")||(f.median=q(e,n.percentileParams)),f}function q(n,e){const{fieldType:t,value:a,orderBy:l,isDiscrete:c}=e,s=nn(t,l==="desc");if((n=[...n].filter(u=>u!=null).sort((u,f)=>s(u,f))).length===0)return null;if(a<=0)return n[0];if(a>=1)return n[n.length-1];const i=(n.length-1)*a,r=Math.floor(i),h=r+1,d=i%1,m=n[r],o=n[h];return h>=n.length||c||typeof m=="string"||typeof o=="string"?m:m*(1-d)+o*d}function nn(n,e){if(n){if(J.has(n))return D(e);if(K.has(n))return I(e,!1);if(n==="esriFieldTypeTimestampOffset")return ln(e);const s=I(e,!0);if(n==="esriFieldTypeString")return s;if(n==="esriFieldTypeGUID"||n==="esriFieldTypeGlobalID")return(i,r)=>s($(i),$(r))}const t=e?1:-1,a=D(e),l=I(e,!0),c=k(e);return(s,i)=>typeof s=="number"&&typeof i=="number"?a(s,i):typeof s=="string"&&typeof i=="string"?l(s,i):c(s,i)??t}const y=(n,e)=>n==null?e==null?0:1:e==null?-1:null,F=(n,e)=>n==null?e==null?0:-1:e==null?1:null;function k(n){return n?y:F}const en=(n,e)=>F(n,e)??(n===e?0:new Date(n).getTime()-new Date(e).getTime()),tn=(n,e)=>y(n,e)??(n===e?0:new Date(e).getTime()-new Date(n).getTime());function ln(n){return n?tn:en}const an=(n,e)=>F(n,e)??(n===e?0:n<e?-1:1),un=(n,e)=>y(n,e)??(n===e?0:n<e?1:-1);function I(n,e){if(!e)return n?un:an;const t=k(n);return n?(a,l)=>{const c=t(a,l);return c??((a=a.toUpperCase())>(l=l.toUpperCase())?-1:a<l?1:0)}:(a,l)=>{const c=t(a,l);return c??((a=a.toUpperCase())<(l=l.toUpperCase())?-1:a>l?1:0)}}const on=(n,e)=>y(n,e)??e-n,rn=(n,e)=>F(n,e)??n-e;function D(n){return n?on:rn}function $(n){return n.slice(24,36)+n.slice(19,23)+n.slice(16,18)+n.slice(14,16)+n.slice(11,13)+n.slice(9,11)+n.slice(6,8)+n.slice(4,6)+n.slice(2,4)+n.slice(0,2)}function vn(n,e,t){let a;for(a in n)e?.include?.length&&!e.include.includes(a)||e?.exclude?.length&&e.exclude.includes(a)?delete n[a]:W.includes(a)&&(Number.isFinite(n[a])||(n[a]=null));return t&&["avg","stddev","variance"].forEach(l=>{n[l]!=null&&(n[l]=Math.ceil(n[l]??0))}),n}function xn(n){const e={};for(let t of n)(t==null||typeof t=="string"&&t.trim()==="")&&(t=null),e[t]==null?e[t]={count:1,data:t}:e[t].count++;return{count:e}}function z(n){return n?.type!=="coded-value"?[]:n.codedValues.map(e=>e.code)}function Tn(n,e,t,a){const l=n.count,c=[];if(t&&e){const s=[],i=z(e[0]);for(const r of i)if(e[1]){const h=z(e[1]);for(const d of h)if(e[2]){const m=z(e[2]);for(const o of m)s.push(`${T(r)}${a}${T(d)}${a}${T(o)}`)}else s.push(`${T(r)}${a}${T(d)}`)}else s.push(r);for(const r of s)l.hasOwnProperty(r)||(l[r]={data:r,count:0})}for(const s in l){const i=l[s];c.push({value:i.data,count:i.count,label:i.label})}return{uniqueValueInfos:c}}function yn(n,e,t,a){let l=null;switch(e){case"log":n!==0&&(l=Math.log(n)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(a)&&a!==0&&(l=n/a*100);break;case"field":Number.isFinite(t)&&t!==0&&(l=n/t);break;case"natural-log":n>0&&(l=Math.log(n));break;case"square-root":n>0&&(l=n**.5)}return l}function sn(n,e,t){const a=mn({field:e.field,normalizationType:e.normalizationType,normalizationField:e.normalizationField,classificationMethod:e.classificationMethod,standardDeviationInterval:e.standardDeviationInterval,definedInterval:e.definedInterval,breakCount:e.numClasses||Q});return n=cn(n,e.minValue,e.maxValue),B({definition:a,values:n,normalizationTotal:e.normalizationTotal},t)}function cn(n,e,t){const a=e??-1/0,l=t??1/0;return n.filter(c=>Number.isFinite(c)&&c>=a&&c<=l)}function mn(n){const{breakCount:e,field:t,normalizationField:a,normalizationType:l}=n,c=n.classificationMethod||Y,s=c==="standard-deviation"?n.standardDeviationInterval||j:void 0,i=c==="defined-interval"?n.definedInterval:void 0;return new C({breakCount:e,classificationField:t,classificationMethod:c,normalizationField:l==="field"?a:void 0,normalizationType:l,standardDeviationInterval:s,definedInterval:i})}function Fn(n,e){let t=n.classBreaks;const a=t.length,l=t[0]?.minValue,c=t[a-1]?.maxValue,s=e==="standard-deviation",i=H;return t=t.map(r=>{const h=r.label,d={minValue:r.minValue,maxValue:r.maxValue,label:h};if(s&&h){const m=h.match(i),o=m?.map(u=>+u.trim())??[];o.length===2?(d.minStdDev=o[0],d.maxStdDev=o[1],o[0]<0&&o[1]>0&&(d.hasAvg=!0)):o.length===1&&(h.includes("<")?(d.minStdDev=null,d.maxStdDev=o[0]):h.includes(">")&&(d.minStdDev=o[0],d.maxStdDev=null))}return d}),{minValue:l,maxValue:c,classBreakInfos:t,normalizationTotal:n.normalizationTotal}}function Mn(n,e){const t=fn(n,e);if(t.min==null&&t.max==null)return{bins:[],minValue:t.min,maxValue:t.max,normalizationTotal:e.normalizationTotal};const a=t.intervals,l=t.min??0,c=t.max??0,s=a.map((i,r)=>({minValue:a[r][0],maxValue:a[r][1],count:0}));for(const i of n)if(i!=null&&i>=l&&i<=c){const r=dn(a,i);r>-1&&s[r].count++}return{bins:s,minValue:l,maxValue:c,normalizationTotal:e.normalizationTotal}}function fn(n,e,t=!1){const{field:a,classificationMethod:l,standardDeviationInterval:c,definedInterval:s,normalizationType:i,normalizationField:r,normalizationTotal:h,minValue:d,maxValue:m}=e,o=e.numBins||R;let u=null,f=null,p=null;if((!l||l==="equal-interval")&&!i){if(d!=null&&m!=null)u=d,f=m;else{const V=Z({values:n,minValue:d,maxValue:m,useSampleStdDev:!i,supportsNullCount:X({normalizationType:i,normalizationField:r,minValue:d,maxValue:m})});u=V.min??null,f=V.max??null}p=pn(u??0,f??0,o)}else{const{classBreaks:V}=sn(n,{field:a,normalizationType:i,normalizationField:r,normalizationTotal:h,classificationMethod:l,standardDeviationInterval:c,definedInterval:s,minValue:d,maxValue:m,numClasses:o},d!=null&&m!=null?[d,m]:void 0);u=V[0]?.minValue,f=V[V.length-1]?.maxValue,p=V.map(g=>[g.minValue,g.maxValue])}if(t){const V=p.at(-1)[1];p.push([V,V])}return{min:u,max:f,intervals:p}}function dn(n,e){let t=-1;for(let a=n.length-1;a>=0;a--)if(e>=n[a][0]){t=a;break}return t}function pn(n,e,t){const a=(e-n)/t,l=[];let c,s=n;for(let i=1;i<=t;i++)c=s+a,c=Number(c.toFixed(16)),l.push([s,i===t?e:c]),s=c;return l}export{Tn as $,yn as B,vn as C,sn as E,fn as G,dn as L,Fn as P,Mn as U,B as a,W as c,X as d,gn as f,nn as g,pn as j,xn as k,T as m,bn as n,Z as p,mn as q,q as v};
