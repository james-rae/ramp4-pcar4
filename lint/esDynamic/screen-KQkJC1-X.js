import{dK as z,dL as B,e0 as A,ga as C,e2 as I,e1 as E,dO as H,e6 as O,e7 as j,dQ as c,dS as l,dW as s,dR as b,d_ as T,dV as i,dY as S,d$ as w,dX as k,dZ as U,gg as M,gh as P,e9 as q,fL as Q,dP as R,dT as X,dU as K,e8 as V,ea as Y}from"./main-umVzVZ3H.js";const Z={class:"mb-10"},$=["aria-label"],F={key:0,class:"w-full h-30 hidden"},G=["alt","src"],J=["alt","src"],N=["alt"],D={class:"pl-5"},ee={class:"ml-auto pr-5"},ae=["content"],le={key:0,class:"rv-basemap-check absolute top-0 right-0"},se=z({__name:"item",props:{basemap:{type:Object,required:!0},tileSchema:{type:Object,required:!0}},setup(a){const{t:h}=B(),_=A("iApi"),n=C(),e=I("basemapInfo"),p=E(!1),o=H(()=>n.activeBasemapConfig),y=u=>{u.id!==o.value.id&&_?.geo.map.setBasemap(u.id)},f=u=>{u.key==="Tab"&&e.value?.matches(":focus")&&(p.value=!0,e.value._tippy.show())},r=()=>{p.value=!1,e.value._tippy.hide()},d=u=>{u.pointerType==="touch"&&(p.value=!p.value,p.value?e.value._tippy.show():e.value._tippy.hide())};return O(()=>{e.value?.addEventListener("mouseenter",()=>e.value._tippy.show()),e.value?.addEventListener("mouseleave",()=>e.value._tippy.hide()),e.value?.addEventListener("click",d),e.value?.addEventListener("keyup",f),e.value?.addEventListener("blur",r)}),j(()=>{e.value?.removeEventListener("mouseenter",()=>e.value._tippy.show()),e.value?.removeEventListener("mouseleave",()=>e.value._tippy.hide()),e.value?.removeEventListener("click",d),e.value?.removeEventListener("focus",()=>f),e.value?.removeEventListener("blur",()=>r)}),(u,t)=>{const x=c("truncate"),L=c("tippy"),v=c("focus-item");return l(),s("div",Z,[b((l(),s("button",{class:"basemap-item-button bg-gray-300 w-full h-full",type:"button","aria-label":T(h)("basemap.select"),onClick:t[2]||(t[2]=m=>y(a.basemap))},[i("div",null,[i("div",{class:S(["flex hover:opacity-50 basemap-item-image basemap-item-container",a.basemap.hideThumbnail?"h-30":"h-180"])},[a.basemap.hideThumbnail?(l(),s("div",F)):a.basemap.thumbnailUrl?(l(),s("img",{key:1,class:"w-full h-180",alt:a.basemap.altText,src:a.basemap.thumbnailUrl},null,8,G)):a.tileSchema.thumbnailTileUrls&&a.tileSchema.thumbnailTileUrls.length>0&&a.basemap.layers.every(m=>m.layerType==="esri-tile")?(l(!0),s(w,{key:2},k(a.basemap.layers,m=>(l(),s("div",{key:m.id,class:"flex basemap-item-inner h-180"},[(l(!0),s(w,null,k(a.tileSchema.thumbnailTileUrls,(g,W)=>(l(),s("img",{class:"w-full",alt:a.basemap.altText,src:m.url+g,key:W},null,8,J))),128))]))),128)):(l(),s("img",{key:3,class:"w-full bg-white h-180",alt:a.basemap.altText,src:"https://openclipart.org/image/800px/275366"},null,8,N))],2)]),i("div",{class:S(["absolute flex w-full bg-black text-white h-30 bottom-6 items-center",a.basemap.hideThumbnail&&a.basemap.id===o.value.id?"opacity-85":"opacity-75"])},[b((l(),s("div",D,[i("span",null,U(a.basemap.name),1)])),[[x]]),i("div",ee,[b((l(),s("a",{onClick:t[0]||(t[0]=M(()=>{},["stop"])),onKeydown:t[1]||(t[1]=P(M(()=>{},["prevent"]),["enter","space"])),content:a.basemap.description,ref_key:"basemapInfo",ref:e},t[3]||(t[3]=[i("svg",{class:"fill-current w-16 h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[i("path",{d:"M0 0h24v24H0z",fill:"none"}),i("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})],-1)]),40,ae)),[[L,{placement:"bottom",trigger:"manual"}]])])],2),a.basemap.id===o.value.id&&!a.basemap.hideThumbnail?(l(),s("div",le,t[4]||(t[4]=[i("svg",{class:"fill-current w-25 h-25 relative",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[i("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})],-1)]))):q("",!0)],8,$)),[[v]])])}}}),te=Q(se,[["__scopeId","data-v-b53a4940"]]),ie=["content"],ne={class:"h-600 overflow-y-auto"},re={class:"font-bold text-xl"},pe={key:0,class:"border-t border-b border-gray-600"},ue=z({__name:"screen",props:{panel:{type:Object}},setup(a){const{t:h}=B(),_=C(),n=I("el"),e=E([]),p=E([]),o=r=>{r.key==="Tab"&&n.value?.matches(":focus")&&n.value._tippy.show()},y=()=>{n.value._tippy.hide()};O(()=>{const r=_.config.map;e.value=r.tileSchemas,p.value=r.basemaps,n.value?.addEventListener("blur",y),n.value?.addEventListener("keyup",o)}),j(()=>{n.value?.removeEventListener("blur",y),n.value?.removeEventListener("keyup",o)});const f=r=>p.value.filter(d=>d.tileSchemaId===r);return(r,d)=>{const u=R("panel-screen"),t=c("truncate"),x=c("focus-list"),L=c("tippy");return l(),X(u,{panel:a.panel},{header:K(()=>[V(U(T(h)("basemap.title")),1)]),content:K(()=>[b((l(),s("div",{content:T(h)("panels.controls.items"),ref_key:"el",ref:n},[i("div",ne,[(l(!0),s(w,null,k(e.value,(v,m)=>(l(),s("div",{class:"mx-5",key:v.id},[i("div",{class:S((m===0?"mt-5":"mt-36")+" flex mb-5")},[b((l(),s("h3",re,[V(U(v.name),1)])),[[t]])],2),p.value.length>0?(l(),s("ul",pe,[(l(!0),s(w,null,k(f(v.id),g=>(l(),s("li",{key:g.id},[Y(te,{basemap:g,tileSchema:v,class:"block relative overflow-hidden"},null,8,["basemap","tileSchema"])]))),128))])):q("",!0)]))),128))])],8,ie)),[[x],[L,{trigger:"manual",placement:"top-end",touch:!1,maxWidth:190}]])]),_:1},8,["panel"])}}});export{ue as default};