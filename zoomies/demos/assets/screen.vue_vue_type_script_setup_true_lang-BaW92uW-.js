import{dM as w,dN as g,e2 as T,dS as r,dU as s,dY as n,dT as l,d_ as v,e0 as _,dX as a,eb as x,d$ as y,g7 as b,g8 as C,fP as z,ee as B,fQ as I,f8 as M,dQ as S,e3 as V,e8 as $,dR as j,dV as A,dW as p,ea as N,e1 as O,dZ as D,ef as E}from"./main-vIJpOdvB.js";const K={class:"mt-10"},Q=["aria-label"],q=["alt","src"],F=["alt"],H={class:"absolute flex w-full bg-black opacity-75 text-white h-30 bottom-6 items-center"},L={class:"pl-5"},P={class:"ml-auto pr-5"},R=["content"],U=w({__name:"item",props:{area:{type:Object,required:!0},showThumbnail:{type:Boolean}},setup(e){const{t:c}=g(),d=T("iApi"),i=o=>{if(!o.extent){console.error("selected area of interest doesn't have an extent specified.");return}d?.geo.map.zoomMapTo(B.fromConfig("area-of-interest-extent",o.extent))};return(o,t)=>{const m=r("truncate"),u=r("tippy"),h=r("focus-item");return s(),n("div",K,[l((s(),n("button",{type:"button",class:v(["area-of-interest-item-button bg-gray-300 w-full",{"border border-gray-300":e.showThumbnail}]),"aria-label":_(c)("areas-of-interest.select"),onClick:t[2]||(t[2]=f=>i(e.area))},[a("div",null,[a("div",{class:v(["flex hover:opacity-50 area-of-interest-item-image",e.showThumbnail?"h-180":"h-30"])},[e.area.thumbnail?(s(),n("img",{key:0,class:"w-full bg-white object-contain",alt:e.area.altText||e.area.title,src:e.area.thumbnail},null,8,q)):e.showThumbnail?(s(),n("img",{key:1,class:"w-full bg-white object-contain py-30",alt:e.area.altText||e.area.title,src:"https://openclipart.org/image/800px/160615"},null,8,F)):x("",!0)],2)]),a("div",H,[l((s(),n("div",L,[a("span",null,y(e.area.title),1)])),[[m]]),l(a("div",P,[l((s(),n("a",{onClick:t[0]||(t[0]=b(()=>{},["stop"])),onKeydown:t[1]||(t[1]=C(b(()=>{},["prevent"]),["enter","space"])),content:e.area.description},t[3]||(t[3]=[a("svg",{class:"fill-current w-16 h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[a("path",{d:"M0 0h24v24H0z",fill:"none"}),a("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})],-1)]),40,R)),[[u,{placement:"bottom",trigger:"click focus"}]])],512),[[z,e.area.description]])])],10,Q)),[[h]])])}}}),W=I(U,[["__scopeId","data-v-7082d36c"]]),X={class:"h-600 overflow-y-auto"},Y={class:"mx-5"},Z={key:0},J=w({__name:"screen",props:{panel:{type:Object}},setup(e){const{t:c}=g(),d=M(),i=S(()=>d.areas),o=V(!1);return $(()=>{o.value=!!i.value?.some(t=>t.thumbnail)}),(t,m)=>{const u=j("panel-screen"),h=r("focus-list");return s(),A(u,{panel:e.panel},{header:p(()=>[N(y(_(c)("areas-of-interest.title")),1)]),content:p(()=>[a("div",X,[a("div",Y,[i.value.length>0?l((s(),n("ul",Z,[(s(!0),n(O,null,D(i.value,(f,k)=>(s(),n("li",{key:k},[E(W,{area:f,"show-thumbnail":o.value,class:"block relative overflow-hidden"},null,8,["area","show-thumbnail"])]))),128))])),[[h]]):x("",!0)])])]),_:1},8,["panel"])}}});export{J as _};
