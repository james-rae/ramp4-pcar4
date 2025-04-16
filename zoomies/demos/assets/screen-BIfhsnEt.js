import{dM as T,dN as E,dS as H,dU as u,dY as x,dX as s,dT as b,e0 as i,d$ as $,d_ as N,ef as I,dW as k,fP as z,gR as A,eb as L,fQ as D,e2 as U,ga as q,dQ as K,e3 as v,e6 as Q,e7 as F,e9 as P,dR as W,dV as R,ea as X,gS as Y,gT as Z,g8 as G,g7 as J,dZ as ee,e1 as te,go as ne}from"./main-vIJpOdvB.js";import{m as _}from"./marked.esm-DmSrlTiT.js";import"./preload-helper-ExcqyqRp.js";const oe={key:0},ae=["content"],se={class:"text-lg text-left flex-grow"},le=["innerHTML"],re=T({__name:"section",props:{helpSection:{type:Object,required:!0}},setup(r){const{t:w}=E();return(S,l)=>{const h=H("tippy");return r.helpSection.drawn?(u(),x("div",oe,[s("div",null,[b((u(),x("button",{type:"button",class:"help-section-header flex items-center py-15 px-25 hover:bg-gray-200 cursor-pointer select-none w-full",onClick:l[0]||(l[0]=d=>S.$emit("expand")),content:i(w)(r.helpSection.expanded?"help.section.collapse":"help.section.expand")},[s("span",se,$(r.helpSection.header),1),s("div",{class:N(["dropdown-icon",{"transform -rotate-180":r.helpSection.expanded}])},l[1]||(l[1]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[s("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})],-1)]),2)],8,ae)),[[h,{placement:"top-end",hideOnClick:!1}]]),I(A,{name:"help-item",mode:"out-in"},{default:k(()=>[b(s("div",{innerHTML:r.helpSection.info,class:"ramp-markdown section-body px-20 pt-5 ml-10 overflow-hidden"},null,8,le),[[z,r.helpSection.expanded]])]),_:1})])])):L("",!0)}}}),ie=D(re,[["__scopeId","data-v-ef03eec9"]]),de={class:"h-26 mb-8 mx-8"},pe=["placeholder","aria-label"],ce={key:0},me=T({__name:"screen",props:{panel:{type:Object,required:!0}},setup(r){const w=U("iApi"),S=q(),{t:l}=E(),h=K(()=>S.location),d=v([]),y=v([]),C=v([]),M=v(!1);let f,m;function B(e,o){const t=o.info.split(/(<[^>]*>)/);for(const[n,a]of t.entries())if(n%2===0&&a.toLowerCase().indexOf(e.toLowerCase())>-1)return!0;return!1}function V(e,o){const n=y.value[o].split(/(<[^>]*>)/);let a="";for(const[g,p]of n.entries())g%2===0?a+=p.replace(new RegExp(e,"gi"),c=>`<mark>${c}</mark>`):a+=p;d.value[o].info=a}function O(e,o){f=0,o.forEach((t,n)=>{t.info=y.value[n],t.drawn=B(e,t)||t.header.toLowerCase().indexOf(e.toLowerCase())>-1,f=t.drawn?f+1:f,t.expanded=t.drawn&&e.length>2,t.drawn&&e.length>2&&V(e,n)}),M.value=f===0}function j(e){e.expanded=!e.expanded}return Q(()=>{C.value.push(F(()=>w.language,(e,o)=>{if(e===o)return;const t=new _.Renderer,n=h.value.slice(-1)==="/"?h.value:`${h.value}/`;t.image=(a,g,p)=>(a.indexOf("http")===-1&&(a=`${n}images/`+a),`<img src="${a}" alt="${p}">`),ne.get(`${n}${e}.md`).then(a=>{const g=/^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm,p=a.data.replace(new RegExp("\r","g"),"");d.value=[];let c;for(;c=g.exec(p);)d.value.push({header:c[1],info:_(c[0].split(`
`).splice(2).join(`
`),{renderer:t}),drawn:!0,expanded:!1}),y.value.push(_(c[0].split(`
`).splice(2).join(`
`),{renderer:t}))})},{immediate:!0}))}),P(()=>{C.value.forEach(e=>e())}),(e,o)=>{const t=W("panel-screen");return u(),R(t,{panel:r.panel},{header:k(()=>[X($(i(l)("help.title")),1)]),content:k(()=>[s("div",de,[b(s("input",{type:"search",class:"rv-help-search-bar border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",placeholder:i(l)("help.search"),"onUpdate:modelValue":o[0]||(o[0]=n=>Z(m)?m.value=n:m=n),"aria-label":i(l)("help.search"),onInput:o[1]||(o[1]=n=>O(i(m),d.value)),onKeypress:o[2]||(o[2]=G(J(()=>{},["prevent"]),["enter"])),enterkeyhint:"done"},null,40,pe),[[Y,i(m)]])]),M.value?(u(),x("div",ce,[s("p",null,$(i(l)("help.noResults")),1)])):L("",!0),(u(!0),x(te,null,ee(d.value,(n,a)=>(u(),R(ie,{helpSection:n,key:a,onExpand:g=>j(n)},null,8,["helpSection","onExpand"]))),128))]),_:1},8,["panel"])}}});export{me as default};
