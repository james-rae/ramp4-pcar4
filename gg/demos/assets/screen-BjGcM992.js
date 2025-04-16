import{ek as E,el as M,eq as j,es as u,ew as x,ev as s,er as b,eA as i,ez as k,ey as z,eP as A,eu as C,gs as D,hy as I,eL as R,gt as N,eC as q,gU as K,eo as U,eD as v,eG as F,eH as G,eJ as J,ep as P,et as B,eK as Q,hz as W,hA as X,gS as Y,gR as Z,ex as ee,eB as te,h6 as ne}from"./main-BnINupoD.js";import{m as _}from"./marked.esm-DmSrlTiT.js";import"./preload-helper-ExcqyqRp.js";const oe={key:0},ae=["content"],se={class:"text-lg text-left flex-grow"},le=["innerHTML"],re=E({__name:"section",props:{helpSection:{type:Object,required:!0}},setup(r){const{t:w}=M();return(y,l)=>{const h=j("tippy");return r.helpSection.drawn?(u(),x("div",oe,[s("div",null,[b((u(),x("button",{type:"button",class:"help-section-header flex items-center py-15 px-25 hover:bg-gray-200 cursor-pointer select-none w-full",onClick:l[0]||(l[0]=p=>y.$emit("expand")),content:i(w)(r.helpSection.expanded?"help.section.collapse":"help.section.expand")},[s("span",se,k(r.helpSection.header),1),s("div",{class:z(["dropdown-icon",{"transform -rotate-180":r.helpSection.expanded}])},l[1]||(l[1]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[s("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})],-1)]),2)],8,ae)),[[h,{placement:"top-end",hideOnClick:!1}]]),A(I,{name:"help-item",mode:"out-in"},{default:C(()=>[b(s("div",{innerHTML:r.helpSection.info,class:"ramp-markdown section-body px-20 pt-5 ml-10 overflow-hidden"},null,8,le),[[D,r.helpSection.expanded]])]),_:1})])])):R("",!0)}}}),ie=N(re,[["__scopeId","data-v-ef03eec9"]]),pe={class:"h-26 mb-8 mx-8"},de=["placeholder","aria-label"],ce={key:0},me=E({__name:"screen",props:{panel:{type:Object,required:!0}},setup(r){const w=q("iApi"),y=K(),{t:l}=M(),h=U(()=>y.location),p=v([]),S=v([]),$=v([]),L=v(!1);let f,m;function T(e,o){const t=o.info.split(/(<[^>]*>)/);for(const[n,a]of t.entries())if(n%2===0&&a.toLowerCase().indexOf(e.toLowerCase())>-1)return!0;return!1}function H(e,o){const n=S.value[o].split(/(<[^>]*>)/);let a="";for(const[g,d]of n.entries())g%2===0?a+=d.replace(new RegExp(e,"gi"),c=>`<mark>${c}</mark>`):a+=d;p.value[o].info=a}function O(e,o){f=0,o.forEach((t,n)=>{t.info=S.value[n],t.drawn=T(e,t)||t.header.toLowerCase().indexOf(e.toLowerCase())>-1,f=t.drawn?f+1:f,t.expanded=t.drawn&&e.length>2,t.drawn&&e.length>2&&H(e,n)}),L.value=f===0}function V(e){e.expanded=!e.expanded}return F(()=>{$.value.push(G(()=>w.language,(e,o)=>{if(e===o)return;const t=new _.Renderer,n=h.value.slice(-1)==="/"?h.value:`${h.value}/`;t.image=(a,g,d)=>(a.indexOf("http")===-1&&(a=`${n}images/`+a),`<img src="${a}" alt="${d}">`),ne.get(`${n}${e}.md`).then(a=>{const g=/^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm,d=a.data.replace(new RegExp("\r","g"),"");p.value=[];let c;for(;c=g.exec(d);)p.value.push({header:c[1],info:_(c[0].split(`
`).splice(2).join(`
`),{renderer:t}),drawn:!0,expanded:!1}),S.value.push(_(c[0].split(`
`).splice(2).join(`
`),{renderer:t}))})},{immediate:!0}))}),J(()=>{$.value.forEach(e=>e())}),(e,o)=>{const t=P("panel-screen");return u(),B(t,{panel:r.panel},{header:C(()=>[Q(k(i(l)("help.title")),1)]),content:C(()=>[s("div",pe,[b(s("input",{type:"search",class:"rv-help-search-bar border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",placeholder:i(l)("help.search"),"onUpdate:modelValue":o[0]||(o[0]=n=>X(m)?m.value=n:m=n),"aria-label":i(l)("help.search"),onInput:o[1]||(o[1]=n=>O(i(m),p.value)),onKeypress:o[2]||(o[2]=Y(Z(()=>{},["prevent"]),["enter"])),enterkeyhint:"done"},null,40,de),[[W,i(m)]])]),L.value?(u(),x("div",ce,[s("p",null,k(i(l)("help.noResults")),1)])):R("",!0),(u(!0),x(te,null,ee(p.value,(n,a)=>(u(),B(ie,{helpSection:n,key:a,onExpand:g=>V(n)},null,8,["helpSection","onExpand"]))),128))]),_:1},8,["panel"])}}});export{me as default};
