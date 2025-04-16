import{c as C,a as g}from"./devEnvironmentUtils-8WtPGj6h.js";import{s as u,C as N,I as p,p as d,R as U,e as $,f as E,i as S,j as w}from"./main-BnINupoD.js";import{i as I,p as D,m as v,h as R,y as x}from"./styleUtils-9PVBvC-1.js";import{e as A}from"./webStyleAcceptedFormats-CG7ZQ6BV.js";import"./preload-helper-ExcqyqRp.js";function J(t,e,l){const a=t.name;return a==null?Promise.reject(new u("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):t.styleName==="Esri2DPointSymbolsStyle"?k(a,e,l):I(t,e,l).then(n=>W(n,a,e,x,l))}function M(t,e){return e.items.find(l=>l.name===t)}async function W(t,e,l,a,n){const r=l?.portal!=null?l.portal:N.getDefault(),s={portal:r,url:p(t.baseUrl),origin:"portal-item"},m=M(e,t.data);if(!m)throw new u("symbolstyleutils:symbol-name-not-found",`The symbol name '${e}' could not be found`,{symbolName:e});const c=n?.acceptedFormats??A,f=a(m,c);if(!f)throw new u("symbolstyleutils:symbol-reference-no-accepted-format",`The symbol name '${e}' does not have an accepted format (one of ${c})`,{symbolName:e});const{url:F,format:O}=f;let i=d(F,s),y=m.thumbnail?.href??null;const b=m.thumbnail?.imageData;C()&&(i=g(i)??"",y=g(y));const P={portal:r,url:p(U(i)),origin:"portal-item"};return D(i,n).then(h=>{const T=O==="cim"?v(h.data):h.data,o=$(T,P);if(o&&E(o)){if(y){const j=d(y,s);o.thumbnail=new S({url:j})}else b&&(o.thumbnail=new S({url:`data:image/png;base64,${b}`}));t.styleUrl?o.styleOrigin=new w({portal:l.portal,styleUrl:t.styleUrl,name:e}):t.styleName&&(o.styleOrigin=new w({portal:l.portal,styleName:t.styleName,name:e}))}return o})}function k(t,e,l){const a=R.replaceAll(/\{SymbolName\}/gi,t),n=e.portal!=null?e.portal:N.getDefault();return D(a,l).then(r=>{const s=v(r.data);return $(s,{portal:n,url:p(U(a)),origin:"portal-item"})})}export{W as fetchSymbolFromStyle,M as getStyleItemFromStyle,J as resolveWebStyleSymbol};
