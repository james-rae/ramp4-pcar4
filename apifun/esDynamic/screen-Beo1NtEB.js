import{ek as L,el as b,eC as x,eD as E,eI as I,eJ as q,eo as w,ep as A,eq as p,et as o,eu as i,es as a,eK as j,ez as B,eA as s,eM as C,er as D,ew as d,eB as M,ex as N,eN as c}from"./main-DeRV24Di.js";const T=["content"],z=L({__name:"screen",props:{panel:{type:Object,required:!0}},setup(m){const v=c(()=>import("./header-5Rav1SpK.js")),g=c(()=>import("./item-BO73nRmf.js")),{t:n}=b(),y=x("iApi"),e=E(),l=()=>{e.value._tippy.hide()},r=t=>{t.key==="Tab"&&e.value?.matches(":focus")&&e.value._tippy.show()};I(()=>{e.value?.addEventListener("blur",l),e.value?.addEventListener("keyup",r)}),q(()=>{e.value?.removeEventListener("blur",l),e.value?.removeEventListener("keyup",r)});const f=w(()=>{const t=y.fixture.get("legend");return t?[...t.getLegend()]:[]});return(t,F)=>{const h=A("panel-screen"),k=p("focus-list"),_=p("tippy");return a(),o(h,{panel:m.panel},{header:i(()=>[j(B(s(n)("legend.title")),1)]),content:i(()=>[C(s(v)),D((a(),d("div",{content:s(n)("panels.controls.items"),ref_key:"el",ref:e},[(a(!0),d(M,null,N(f.value,u=>(a(),o(s(g),{legendItem:u,key:u.uid},null,8,["legendItem"]))),128))],8,T)),[[k],[_,{trigger:"manual",placement:"top-end",touch:!1,maxWidth:190}]])]),_:1},8,["panel"])}}});export{z as default};
