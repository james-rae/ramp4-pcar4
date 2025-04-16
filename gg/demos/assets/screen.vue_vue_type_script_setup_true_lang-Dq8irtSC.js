import{ek as k,el as $,em as O,en as z,eo as h,ep as E,eq as R,er as j,es as i,et as C,eu as v,ev as e,ew as S,ex as q,ey as y,ez as w,eA as l,eB as V,eC as D,eD as b,eE as A,eF as F,eG as N,eH as P,eI as H,eJ as I,eK as T,eL as G}from"./main-BnINupoD.js";const J=["onClick","aria-label"],K={class:"md-icon-small inline"},U=k({__name:"settings-button",props:{componentSelectedState:{type:Object,required:!0}},setup(m){const{t:x}=$(),a=O(),u=z(),_=h(()=>a.mobileView?"top-end":"left-end"),o=r=>{r.selectable&&u.toggleSelected({name:r.name})};return(r,n)=>{const f=E("dropdown-menu"),p=R("focus-item");return j((i(),C(f,{position:_.value,tooltip:l(x)("export.menu"),tooltipPlacement:"top"},{header:v(()=>n[0]||(n[0]=[e("div",{class:"flex items-center text-gray-400 w-full h-full hover:text-black p-4 sm:p-8"},[e("svg",{class:"fill-current w-24 h-24 m-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("g",null,[e("path",{d:"M0,0h24v24H0V0z",fill:"none"}),e("path",{d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"})])])],-1)])),default:v(()=>[(i(!0),S(V,null,q(m.componentSelectedState,s=>(i(),S("a",{key:s.name,onClick:g=>o(s),href:"javascript:;",class:y(`text-left text-sm sm:text-base ${s.selectable?"cursor-pointer":"cursor-default"}`),"aria-label":s.name},[e("div",K,[(i(),S("svg",{height:"20",width:"20",viewBox:"0 0 24 24",class:y(`inline mx-8 ${s.selected?"":"invisible"}`)},n[1]||(n[1]=[e("g",null,[e("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})],-1)]),2)),e("span",{class:y(`inline ${s.selectable?"":"text-gray-300"}
                    `)},w(l(x)(`export.menu.component.${s.name}`)),3)])],10,J))),128))]),_:1},8,["position","tooltip"])),[[p]])}}}),W={class:"overflow-hidden border border-gray-200",ref:"componentEl"},Q={class:"flex"},X=["aria-label"],Y=["aria-label"],ee=k({__name:"screen",props:{panel:{type:Object,required:!0}},setup(m){const x=m,{t:a}=$(),u=D("iApi"),_=z(),o=b(),r=b(void 0),n=b(void 0),f=b([]),p=A("componentEl"),s=h(()=>_.componentSelectedState),g=h(()=>{const c={};return o.value&&Object.keys(s.value).forEach(t=>{c[t]={name:t,selected:s.value[t]??!1,selectable:(o.value?.config)[t]?.selectable??!0}}),c}),L=h(()=>!!o.value?.customRendererFunc),d=F(300,()=>{if(!o.value||!p.value)return;const c=p.value.querySelector(".export-canvas");o.value.make(c,p.value.clientWidth)});return N(()=>{x.panel.exportMake=d,f.value.push(P(g,()=>{d()}))}),H(()=>{o.value=u.fixture.get("export"),r.value=new ResizeObserver(d),n.value=new ResizeObserver(d),r.value.observe(u.$rootEl),n.value.observe(u.$rootEl.querySelector('[data-cy="export"]'))}),I(()=>{r.value.disconnect(),n.value.disconnect(),f.value.forEach(c=>c())}),(c,t)=>{const B=E("panel-screen");return i(),C(B,{panel:m.panel,footer:!0},{header:v(()=>[T(w(l(a)("export.title")),1)]),content:v(()=>[e("div",W,t[2]||(t[2]=[e("canvas",{class:"export-canvas !w-[100%]"},null,-1)]),512)]),footer:v(()=>[e("div",Q,[e("button",{type:"button",onClick:t[0]||(t[0]=M=>o.value?.export()),class:"bg-green-700 hover:bg-green-800 text-white font-bold py-8 px-4 sm:px-16 mr-8 sm:mr-16","aria-label":l(a)("export.download")},w(l(a)("export.download")),9,X),e("button",{type:"button",onClick:t[1]||(t[1]=M=>l(d)()),class:"py-8 px-4 sm:px-16","aria-label":l(a)("export.refresh")},w(l(a)("export.refresh")),9,Y),L.value?G("",!0):(i(),C(U,{key:0,componentSelectedState:g.value,class:"ml-auto flex px-4 sm:px-8"},null,8,["componentSelectedState"]))])]),_:1},8,["panel"])}}});export{ee as _};
