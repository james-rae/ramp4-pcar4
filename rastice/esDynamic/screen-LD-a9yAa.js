import{dV as k,dW as L,eb as E,ec as x,eh as j,ei as I,dZ as W,d_ as q,d$ as p,e2 as i,e3 as d,e1 as a,ej as w,e8 as A,e9 as s,el as T,e0 as V,e5 as o,ea as B,e6 as C,em as c}from"./main-CvsyIoCL.js";const D=["content"],H=k({__name:"screen",props:{panel:{type:Object,required:!0}},setup(m){const v=c(()=>import("./header-CwgNmqbM.js")),g=c(()=>import("./item-sN5GVtgS.js")),{t:n}=L(),y=E("iApi"),e=x(),l=()=>{e.value._tippy.hide()},r=t=>{t.key==="Tab"&&e.value?.matches(":focus")&&e.value._tippy.show()};j(()=>{e.value?.addEventListener("blur",l),e.value?.addEventListener("keyup",r)}),I(()=>{e.value?.removeEventListener("blur",l),e.value?.removeEventListener("keyup",r)});const f=W(()=>{let t=y.fixture.get("legend");return t?[...t.getLegend()]:[]});return(t,N)=>{const h=q("panel-screen"),_=p("focus-list"),b=p("tippy");return a(),i(h,{panel:m.panel},{header:d(()=>[w(A(s(n)("legend.title")),1)]),content:d(()=>[T(s(v)),V((a(),o("div",{content:s(n)("panels.controls.items"),ref_key:"el",ref:e},[(a(!0),o(B,null,C(f.value,u=>(a(),i(s(g),{legendItem:u,key:u.uid},null,8,["legendItem"]))),128))],8,D)),[[_],[b,{trigger:"manual",placement:"top-end",touch:!1,maxWidth:190}]])]),_:1},8,["panel"])}}});export{H as default};