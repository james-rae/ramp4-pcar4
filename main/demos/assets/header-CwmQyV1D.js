import{dM as k,fO as _,dN as E,e2 as M,dQ as R,dR as A,dS as B,dU as v,dY as h,dX as e,dT as o,fP as i,e0 as l,ef as m,dW as d,d$ as p,ed as w,fQ as I}from"./main-C45WTWFO.js";import"./preload-helper-ExcqyqRp.js";const j={class:"relative legend-header flex align-middle"},L=["content","aria-label"],S=["content","aria-label"],D=k({__name:"header",setup(G){const x=_(),{t:s}=E(),a=M("iApi"),r=R(()=>a.fixture.get("legend")),b=()=>{a.event.emit(w.WIZARD_TOGGLE)},y=()=>{try{return a.fixture.exists("wizard")}catch{return!1}},C=()=>{a.event.emit(w.REORDER_TOGGLE)},z=()=>{try{return a.fixture.exists("layer-reorder")}catch{return!1}},n=u=>x.headerControls.includes(u);return(u,t)=>{const g=A("dropdown-menu"),f=B("tippy");return v(),h("div",j,[e("div",null,[o((v(),h("button",{type:"button",onClick:b,class:"relative mr-auto text-gray-500 hover:text-black",content:l(s)("legend.header.addlayer"),"aria-label":l(s)("legend.header.addlayer")},t[4]||(t[4]=[e("div",{class:"p-8"},[e("svg",{class:"fill-current w-18 h-18 flip",viewBox:"0 0 24 24"},[e("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})])],-1)]),8,L)),[[i,y()&&n("wizard")],[f,{placement:"right"}]])]),e("div",null,[o((v(),h("button",{type:"button",onClick:C,class:"relative mr-auto text-gray-500 hover:text-black flex justify-center items-center",content:l(s)("legend.header.reorderlayers"),"aria-label":l(s)("legend.header.reorderlayers")},t[5]||(t[5]=[e("div",{class:"p-8"},[e("svg",{class:"fill-current w-18 h-18 flip",viewBox:"0 0 24 24"},[e("path",{d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"})])],-1)]),8,S)),[[i,z()&&n("layerReorder")],[f,{placement:"right"}]])]),t[8]||(t[8]=e("span",{class:"flex-1"},null,-1)),o(m(g,{class:"relative",position:"left-start",tooltip:l(s)("legend.header.groups"),tooltipPlacement:"left-start",tooltipPlacementAlt:"bottom-end"},{header:d(()=>t[6]||(t[6]=[e("div",{class:"p-8"},[e("svg",{class:"fill-current w-18 h-18",viewBox:"0 0 24 24"},[e("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})])],-1)])),default:d(()=>[e("a",{href:"javascript:;",class:"flex leading-snug items-center overflow-hidden whitespace-nowrap",onClick:t[0]||(t[0]=c=>r.value.expandItems(!0))},p(l(s)("legend.header.groups.expand")),1),e("a",{href:"javascript:;",class:"flex leading-snug items-center overflow-hidden whitespace-nowrap",onClick:t[1]||(t[1]=c=>r.value.expandItems(!1))},p(l(s)("legend.header.groups.collapse")),1)]),_:1},8,["tooltip"]),[[i,n("groupToggle")]]),o(m(g,{class:"relative",position:"left-start",tooltip:l(s)("legend.header.visible"),tooltipPlacement:"left-start",tooltipPlacementAlt:"bottom-end"},{header:d(()=>t[7]||(t[7]=[e("div",{class:"flex p-8"},[e("svg",{class:"fill-current w-18 h-18",viewBox:"0 0 24 24"},[e("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"})])],-1)])),default:d(()=>[e("a",{href:"javascript:;",class:"flex leading-snug items-center overflow-hidden whitespace-nowrap",onClick:t[2]||(t[2]=c=>r.value.showItems(!0))},p(l(s)("legend.header.visible.show")),1),e("a",{href:"javascript:;",class:"flex leading-snug items-center overflow-hidden whitespace-nowrap",onClick:t[3]||(t[3]=c=>r.value.showItems(!1))},p(l(s)("legend.header.visible.hide")),1)]),_:1},8,["tooltip"]),[[i,n("visibilityToggle")]])])}}}),T=I(D,[["__scopeId","data-v-b533dc53"]]);export{T as default};
