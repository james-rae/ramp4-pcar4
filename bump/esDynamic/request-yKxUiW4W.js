import{s as p}from"./main-DMFDvFfW.js";function f(n,s){let t=s.responseType;t?t!=="array-buffer"&&t!=="blob"&&t!=="json"&&t!=="native"&&t!=="native-request-init"&&t!=="text"&&(t="text"):t="json",s.responseType=t;const c=s.signal;return delete s.signal,globalThis.invokeStaticMessage("request",{url:n,options:s},{signal:c}).then(async e=>{let o,a,l,u,r;if(e.data)if(e.data instanceof ArrayBuffer){if(!(t!=="json"&&t!=="text"&&t!=="blob"||(o=new Blob([e.data]),t!=="json"&&t!=="text"||(u=await o.text(),t!=="json")))){try{a=JSON.parse(u||null)}catch(i){const b={...i,url:n,requestOptions:s};throw new p("request:server",i.message,b)}if(a.error){const i={...a.error,url:n,requestOptions:s};throw new p("request:server",a.error.message,i)}}}else t==="native"&&(e.data.signal=c,l=await fetch(e.data.url,e.data),e.httpStatus=l.status);switch(t){case"blob":r=o;break;case"json":r=a;break;case"native":r=l;break;case"text":r=u;break;default:r=e.data}return{data:r,httpStatus:e.httpStatus,requestOptions:s,ssl:e.ssl,url:n}})}export{f as execute};