import{dK as P,e1 as w,e6 as le,dS as t,dW as a,dV as h,d$ as Z,dX as Y,dY as G,gf as de,e9 as $,dZ as C,fL as ae,g0 as K,dO as M,dQ as S,dR as A,ea as se,gg as ce,dL as R,il as ie,e4 as W,e5 as U,e7 as X,dT as Q,d_ as L,e0 as J,iQ as ve,hw as Te,g8 as _e,iR as Ee,dC as ee,e8 as ne,dP as Me,dU as pe}from"./main-umVzVZ3H.js";import{T as je}from"./toggle-switch-control-CiTomKrf.js";const ze={key:0,class:"relative"},Ie={key:0,class:"relative"},He=["innerHTML"],Oe=["src"],Ce={key:1,class:"w-32 h-32"},$e={class:"symbologyIcon"},qe=["innerHTML"],Ne=["src"],Be={class:"badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center"},Se={key:0,class:"px-5"},Ae={key:1,class:"inline-flex justify-center items-center relative"},De=P({__name:"symbology-stack",props:{layer:{type:Object,required:!0},result:{type:Object,required:!0}},setup(v){const k=v,i=w([]);return le(()=>{i.value=k.layer.legend}),(d,p)=>v.result.loaded?(t(),a("div",ze,[h("div",{class:G(v.result.items.length===0?"opacity-50":"")},[i.value.length>1?(t(),a("div",Ie,[(t(!0),a(Z,null,Y(i.value.slice(0,3).reverse(),(T,y)=>(t(),a("div",{class:G(["absolute",[y==0?"symbol-0":y==1?"left-3":"left-6"]]),style:de({"z-index":3-y}),key:y},[i.value[y].svgcode?(t(),a("span",{key:0,class:"symbologyIcon w-28 h-28",innerHTML:i.value[y].svgcode},null,8,He)):i.value[y].imgUrl?(t(),a("img",{key:1,class:"symbologyIcon w-28 h-28",src:i.value[y].imgUrl},null,8,Oe)):$("",!0)],6))),128))])):i.value.length>0?(t(),a("div",Ce,[h("div",$e,[i.value[0].svgcode?(t(),a("span",{key:0,innerHTML:i.value[0].svgcode},null,8,qe)):i.value[0].imgUrl?(t(),a("img",{key:1,class:"symbologyIcon w-full h-full",src:i.value[0].imgUrl},null,8,Ne)):$("",!0)])])):$("",!0)],2),h("div",Be,[v.result.loaded?(t(),a("div",Se,C(v.result.items.length),1)):$("",!0)])])):(t(),a("div",Ae,p[0]||(p[0]=[h("div",{class:"symbologyIcon h-32 w-32"},[h("div",{class:"relative animate-spin spinner h-24 w-24"})],-1)])))}}),Pe=ae(De,[["__scopeId","data-v-496d788d"]]),Fe=["content"],Ge={class:"symbologyLayerName truncate"},Ue=P({__name:"symbology-item",props:{layer:{type:Object,required:!0},result:{type:Object,required:!0},selected:{type:Boolean,required:!0}},setup(v){const k=K(),i=M(()=>k.properties),d=v,p=()=>{const T=d.layer;return T&&i.value[T.id]&&i.value[T.id].name?i.value[T.id].name:T?.name??""};return(T,y)=>{const b=S("tippy");return A((t(),a("button",{class:G(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate",v.selected?"detailsButtonSelected":"px-11"]),onClick:y[0]||(y[0]=ce(()=>{},["stop"])),content:p()},[se(Pe,{class:"symbStack w-32 h-32 mr-10",layer:v.layer,result:v.result},null,8,["layer","result"]),h("div",Ge,C(p()),1)],10,Fe)),[[b,{placement:"right",sticky:!0}]])}}}),Re=["content"],Qe=P({__name:"symbology-list",props:{results:{type:Object,required:!0},selected:{type:String,required:!0}},emits:["selection-changed"],setup(v,{emit:k}){const{t:i}=R(),d=ie(),p=w(),T=()=>{p.value._tippy.hide()},y=g=>{g.key==="Tab"&&p.value?.matches(":focus")&&p.value._tippy.show()},b=k,o=v,r=w(""),c=w([]),u=w(!1),e=w(!1),n=g=>d.getLayerByUid(g),j=g=>{r.value=g,b("selection-changed",g),u.value=!1},q=()=>{e.value||setTimeout(()=>{u.value=e.value},500),e.value=!0},O=()=>{u.value=e.value=!1},m=()=>{e.value||(u.value=!0),e.value=!0},z=()=>{u.value=e.value=!1};return W(()=>{c.value.push(U(o,()=>{r.value=o.selected}))}),le(()=>{p.value?.addEventListener("blur",T),p.value?.addEventListener("keyup",y)}),X(()=>{c.value.forEach(g=>g()),p.value?.removeEventListener("blur",T),p.value?.removeEventListener("keyup",y)}),(g,D)=>{const B=S("focus-item"),H=S("focus-list"),I=S("tippy");return A((t(),a("div",{class:G(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col",{"symbology-list-expanded":u.value}]),onMouseover:q,onMouseleave:O,onFocus:m,onBlur:ce(z,["self"]),content:L(i)("details.layers.results.list.tooltip"),ref_key:"el",ref:p},[(t(!0),a(Z,null,Y(o.results,(l,f)=>(t(),a("div",{class:"flex justify-start relative",key:f},[A((t(),Q(Ue,{key:l.uid,layer:n(l.uid),result:l,selected:l.uid===r.value,onClick:x=>j(l.uid)},null,8,["layer","result","selected","onClick"])),[[B]])]))),128))],42,Re)),[[H],[I,{trigger:"manual",placement:"top-start",touch:!1}]])}}}),Ze={class:"inline font-bold"},Ve=["innerHTML"],Ye=P({__name:"esri-default",props:{fixtureFields:{type:Object,required:!1},fields:{type:Object,required:!0},identifyData:{type:Object,required:!0}},setup(v){const{t:k}=R(),i=J("iApi"),d=v,p=(r,c,u,e)=>{const n=r.find(j=>j[c].toLowerCase()===u.toLowerCase());n&&delete e[n.name]},T=()=>{const r=Object.assign({},d.identifyData.data);p(d.fields,"type","geometry",r),i?.ui.exposeOids||p(d.fields,"type","oid",r),i?.ui.exposeMeasurements||(p(d.fields,"name","shape_length",r),p(d.fields,"name","shape_area",r));const c={};d.fields.forEach(e=>{const n=d.fixtureFields?.find(j=>e.name===j.field);c[e.name]={name:n?.alias||e.alias||e.name,type:e.type,visible:n?.visible??!0}});const u={};Object.keys(r).forEach(e=>{const n=c[e];if(n&&n.visible){const j=r[e];u[e]={value:typeof j=="number"?i?.ui.formatNumber(j):j,alias:n.name,type:n.type}}});for(const[e]of Object.entries(u))i.ui.isPlainText(u[e].value)&&(u[e].value=i.ui.escapeHtml(u[e].value));return u},y=(r,c,u)=>{switch(u){case"date":return o(r);default:return b(r,c)}},b=(r,c)=>{if(!r)return r;if(r.trim().match(/\.(jpeg|jpg|gif|png)$/)||r.trim().match(/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i))return`<img src="${r}" alt="${k("details.item.alert.defaultAltText",{alias:c})}" />`;const u="underline text-blue-700 break-all",e=document.createElement("div");return e.innerHTML=r.trim(),e.firstElementChild?.tagName=="A"?(e.firstElementChild.className=u,e.innerHTML):ve(r,{className:u,target:"_blank",validate:{url:n=>/^https?:\/\//.test(n)}})},o=r=>{const c=parseInt(r);return isNaN(c)?r:new Date(c).toISOString().split("T")[0]};return(r,c)=>(t(),a("div",null,[(t(!0),a(Z,null,Y(T(),(u,e,n)=>(t(),a("div",{class:"p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",key:n},[h("span",Ze,C(u.alias),1),c[0]||(c[0]=h("span",{class:"flex-auto"},null,-1)),h("span",{class:"inline",innerHTML:y(u.value,u.alias,u.type)},null,8,Ve)]))),128))]))}}),Ke=["innerHTML"],We={key:1},Xe=P({__name:"html-default",props:{identifyData:{type:Object,required:!0}},setup(v){const{t:k}=R();return(i,d)=>v.identifyData?(t(),a("div",{key:0,class:"whitespace-pre-wrap break-words h-full overflow-auto",innerHTML:v.identifyData.data.data??v.identifyData.data},null,8,Ke)):(t(),a("div",We,C(L(k)("details.layers.results.empty")),1))}}),Je={class:"relative flex flex-grow truncate"},et={key:0,class:"flex flex-grow items-center truncate"},tt={class:"flex p-8 items-center"},lt=["innerHTML"],at={key:1,class:"symbologyIcon p-6"},st=["content","innerHTML","tabindex"],it={key:1,class:"flex p-6 flex-grow"},nt={key:2,class:"zoomButton text-center p-3"},ut=["content","aria-label"],rt={key:0,class:"m-auto animate-spin spinner h-20 w-20"},ot={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"green",class:"m-auto w-20 h-20"},dt={key:2,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"red",class:"m-auto w-20 h-20"},ct=["innerHTML"],me=P({__name:"result-item",props:{uid:{type:String,required:!0},data:{type:Object,required:!0},open:{type:Boolean,required:!1},inList:{type:Boolean,required:!1}},setup(v){const k=ie(),i=v,d=J("iApi"),p=w([]),T=K(),{t:y}=R(),b=w(""),o=w("none"),r=w(),c=()=>k.getLayerByUid(i.uid),u=M(()=>T.properties),e=M(()=>T.defaultTemplates),n=M(()=>c()?.supportsFeatures??!1),j=M(()=>c()?.mapLayer??!1),q=M(()=>{const l=c()?.nameField;let f=l&&i.data.loaded?i.data.data[l]:d.$i18n.t("details.items.title");return d.ui.isPlainText(f)&&(f=d.ui.escapeHtml(f)),f}),O=l=>{if(typeof l=="string"){const f="underline text-blue-700 break-all",x=document.createElement("div");return x.innerHTML=l.trim(),x.firstElementChild?.tagName=="A"?(x.firstElementChild.className=f,x.innerHTML):ve(l,{className:f,target:"_blank",validate:{url:_=>/^https?:\/\//.test(_)}})}return l},m=()=>{H("none"),i.data.loaded?z():i.data.load().then(()=>{z()})},z=()=>{if(b.value="",!(i.data&&i.data.loaded))return;const l=c();if(l===void 0){console.warn(`could not find layer for uid ${i.uid} during icon lookup`);return}if(l.supportsFeatures){const f=l.oidField;l.getIcon(i.data.data[f]).then(x=>{b.value=x})}},g=M(()=>{const l=c();return l&&u.value[l.id]&&u.value[l.id].template?u.value[l.id].template:e.value&&e.value[i.data.format]?e.value[i.data.format]:n.value?Ye:Xe}),D=M(()=>n.value?c()?.fields||[]:[]),B=M(()=>{const l=c();if(l&&u.value[l.id]&&u.value[l.id].fields)return u.value[l.id].fields}),H=l=>{l==="zoomed"||l==="error"?setTimeout(()=>{o.value=l,r.value?._tippy.show(),setTimeout(()=>{r.value?._tippy.hide(),o.value="none"},3e3)},300):o.value=l},I=()=>{if(o.value!=="none")return;H("zooming");const l=c();if(l===void 0||!l.isLoaded){console.warn(`Could not find layer for uid ${i.uid} during zoom geometry lookup`),H("error");return}if(!i.data.loaded){console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs."),H("error");return}const f=i.data.data[l.oidField],x=()=>{const _={getGeom:!0};l.getGraphic(f,_).then(N=>{N.geometry.invalid()?(console.error(`Could not find graphic for objectid ${f}`),H("error")):(d.geo.map.zoomMapTo(N.geometry),H("zoomed"),d.updateAlert(d.$i18n.t("details.item.alert.zoom")))}).catch(()=>{H("error")})};l.layerType===_e.FEATURE&&l.geomType!==Ee.POINT?l.getGraphicExtent(f).then(_=>{d.geo.map.zoomMapTo(_),H("zoomed"),d.updateAlert(d.$i18n.t("details.item.alert.zoom"))}).catch(()=>{x()}):x()};return W(()=>{p.value.push(U(i,()=>{m()},{deep:!1,immediate:!0}))}),X(()=>{p.value.forEach(l=>l())}),(l,f)=>{const x=S("truncate"),_=S("tippy");return t(),a(Z,null,[h("div",Je,[n.value?(t(),a("div",et,[h("div",tt,[v.data.loaded&&b.value?(t(),a("span",{key:0,class:"flex-none symbologyIcon",innerHTML:b.value},null,8,lt)):(t(),a("div",at,f[1]||(f[1]=[h("div",{class:"animate-spin spinner h-20 w-20"},null,-1)])))]),v.data.loaded?A((t(),a("span",{key:0,class:"pl-3 text-left flex-grow itemName",content:q.value,innerHTML:O(q.value),tabindex:v.inList?-1:0},null,8,st)),[[x,{options:{placement:"right"}}]]):(t(),a("div",it,C(L(y)("details.loading")),1)),v.data.loaded?(t(),a("span",nt,[j.value?A((t(),a("button",{key:0,type:"button",content:L(y)(`details.item.zoom${o.value==="none"?"":`.${o.value}`}`),"aria-label":L(y)(`grid.cells.zoom${o.value==="none"?"":`.${o.value}`}`),ref_key:"zoomButton",ref:r,onClick:f[0]||(f[0]=N=>{N.stopPropagation(),I()}),class:"text-gray-600 w-24 h-24 p-2 flex justify-center items-center"},[o.value==="zooming"?(t(),a("div",rt)):o.value==="zoomed"?(t(),a("svg",ot,f[2]||(f[2]=[h("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"},null,-1)]))):o.value==="error"?(t(),a("svg",dt,f[3]||(f[3]=[h("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1)]))):(t(),a("span",{key:3,innerHTML:L(d).ui.getZoomIcon()},null,8,ct))],8,ut)),[[_,{placement:"bottom"}]]):$("",!0)])):$("",!0)])):$("",!0)]),v.open?(t(),Q(Te(g.value),{key:0,identifyData:v.data,fields:D.value,fixtureFields:B.value,class:"p-8"},null,8,["identifyData","fields","fixtureFields"])):$("",!0)],64)}}}),vt={key:0,class:"layerName w-full flex-grow p-5 pb-8 font-bold truncate",tabIndex:"0"},pt={key:1,class:"p-8 mb-8 bg-gray-100 flex justify-between"},mt={for:"toggle"},yt={key:2,class:"flex flex-col justify-between p-8 mb-8 bg-gray-100"},gt={class:"flex"},ft=["aria-label"],ht=["content","aria-label","disabled"],bt={class:"px-3 text-center flex-grow"},kt=["content","aria-label","disabled"],xt={key:3},wt={key:0},Lt=["content"],Tt=["onClick"],_t={key:1,class:"text-center"},Et={key:4,class:"p-5"},Mt=P({__name:"result-list",props:{uid:{type:String,required:!0},results:{type:Object,required:!0}},setup(v){const k=w(),i=()=>{k.value._tippy.hide()},d=s=>{s.key==="Tab"&&k.value?.matches(":focus")&&k.value._tippy.show()},p=J("iApi"),T=K(),y=ie(),b=v,{t:o}=R(),r=w(!1),c=w(p.fixture.get("details")),u=w(!0),e=w(!1),n=w(0),j=w(20),q=w([]),O=w([]),m=M(()=>T.activeGreedy),z=M(()=>T.properties),g=M(()=>n.value+j.value),D=()=>y.getLayerByUid(b.uid),B=()=>b.results.find(s=>s.uid===b.uid),H=M(()=>B()?.loaded??!1),I=M(()=>B()?.requestTime),l=M(()=>r.value&&(!e.value&&_().length>1||e.value&&_().length>j.value)),f=M(()=>{const s=D();return s&&z.value[s.id]&&z.value[s.id].name?z.value[s.id].name:s?.name??""}),x=M(()=>b.uid),_=()=>{const s=B();return s?s.items:[]},N=M(()=>_()[n.value]),ue=M(()=>{if(c.value.hasHilighter()){const s=D();if(s)return s.mapLayer&&s.supportsFeatures}return!1}),ye=s=>{u.value=s,T.hilightToggle=s,F()},ge=()=>{const s=D();n.value=n.value??0,u.value=T.hilightToggle??u.value,e.value=!1,r.value=!!s,F()},re=s=>{e.value?(n.value+=s*j.value,F()):n.value+=s},F=()=>{const s=_();if(u.value&&H.value&&s.length>0&&ue.value)if(e.value)c.value.hilightDetailsItems(s.slice(n.value,g.value),b.uid);else{const E=s[n.value];E&&c.value.hilightDetailsItems([E],b.uid)}else c.value.removeDetailsHilight()},fe=()=>{e.value=!0,n.value=Math.floor(n.value/j.value)*j.value,F()},he=()=>{c.value.removeDetailsHilight()},be=()=>{c.value.removeDetailsHilight()},ke=s=>{const E=n.value;n.value=s,e.value=!1,E===s&&F()};return le(()=>{q.value.push(p.event.on(ee.LAYER_REMOVE,s=>{const E=p.panel.get("details");b.uid===s.uid&&E&&E.close()})),q.value.push(p.event.on(ee.PANEL_CLOSED,s=>{s.id==="details"&&he()})),q.value.push(p.event.on(ee.PANEL_MINIMIZED,s=>{s.id==="details"&&be()})),q.value.push(p.event.on(ee.MAP_BASEMAPCHANGE,s=>{u.value&&s.schemaChanged&&F()})),k.value?.addEventListener("blur",i),k.value?.addEventListener("keyup",d)}),W(()=>{O.value.push(U(N,()=>{e.value||(ge(),N.value===void 0&&c.value.removeDetailsHilight())},{deep:!1,immediate:!0})),O.value.push(U(x,()=>{const s=b.uid;if(e.value&&s){const E=B();E&&E.loading.then(()=>{b.uid===s&&e.value&&F()})}},{deep:!1,immediate:!0})),O.value.push(U(I,()=>{n.value=0})),O.value.push(U(()=>b.uid,()=>{n.value=0}))}),X(()=>{O.value.forEach(s=>s()),q.value.forEach(s=>p.event.off(s)),k.value?.removeEventListener("blur",i),k.value?.removeEventListener("keyup",d)}),(s,E)=>{const xe=S("truncate"),te=S("tippy"),we=S("focus-item"),Le=S("focus-list");return H.value&&m.value===0?(t(),a("div",{key:0,class:"detailsContent relative flex flex-col flex-grow pl-5",style:de(v.results.length>1?{"margin-left":"42px"}:"")},[r.value?A((t(),a("h1",vt,[ne(C(f.value),1)])),[[xe,{options:{placement:"top-start"}}]]):$("",!0),ue.value?(t(),a("div",pt,[h("label",mt,C(L(o)("details.togglehilight.title")),1),se(je,{config:{value:u.value,disabled:!1},onToggled:ye},null,8,["config"])])):$("",!0),l.value?(t(),a("div",yt,[h("div",gt,[e.value?$("",!0):(t(),a("button",{key:0,type:"button",class:"px-8 font-bold hover:bg-gray-200 focus:bg-gray-200","aria-label":L(o)("details.item.see.list"),onClick:E[0]||(E[0]=V=>fe())},C(L(o)("details.item.see.list")),9,ft)),h("div",{class:G(["flex ml-auto bg-gray-200 py-8 items-center",{"w-full":e.value}])},[A((t(),a("button",{type:"button",content:L(o)(e.value?"details.items.previous":"details.item.previous.item"),onClick:E[1]||(E[1]=V=>re(-1)),class:"mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default","aria-label":L(o)(e.value?"details.items.previous":"details.item.previous.item"),disabled:n.value===0},E[3]||(E[3]=[h("svg",{height:"24",width:"24",viewBox:"0 0 23 23"},[h("g",null,[h("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})])],-1)]),8,ht)),[[te,{placement:"top"}]]),h("span",bt,C(e.value?L(o)("details.items.range",[n.value+1,Math.min(g.value,_().length),_().length]):L(o)("details.item.count",[n.value+1,_().length])),1),A((t(),a("button",{type:"button",content:L(o)(e.value?"details.items.next":"details.item.next.item"),onClick:E[2]||(E[2]=V=>re(1)),class:"mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default","aria-label":L(o)(e.value?"details.items.next":"details.item.next.item"),disabled:!e.value&&n.value===_().length-1||e.value&&g.value>=_().length},E[4]||(E[4]=[h("svg",{height:"24",width:"24",viewBox:"0 0 23 23"},[h("g",null,[h("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})])],-1)]),8,kt)),[[te,{placement:"top"}]])],2)])])):$("",!0),r.value?(t(),a("div",xt,[_().length>0?(t(),a("div",wt,[e.value?A((t(),a("div",{key:0,class:"flex flex-col",content:L(o)("details.layers.results.list.tooltip"),ref_key:"el",ref:k},[(t(!0),a(Z,null,Y(_().slice(n.value,g.value),(V,oe)=>A((t(),a("button",{class:"flex flex-grow truncate default-focus-style hover:bg-gray-200",key:oe,onClick:Ct=>ke(n.value+oe)},[se(me,{data:V,uid:v.uid,open:!1,"in-list":!0},null,8,["data","uid"])],8,Tt)),[[we,"show-truncate"]])),128))],8,Lt)),[[Le],[te,{trigger:"manual",placement:"top-start",touch:!1}]]):(t(),Q(me,{key:1,data:N.value,uid:v.uid,open:!0,"in-list":!1},null,8,["data","uid"]))])):(t(),a("div",_t,C(L(o)("details.layers.results.empty.currentLayer")),1))])):(t(),a("div",Et,C(L(o)("details.item.no.data")),1))],4)):(t(),a("div",{key:1,class:G(["flex justify-center py-10 items-center",v.results.length>1?"ml-42":""])},[E[5]||(E[5]=h("span",{class:"animate-spin spinner h-20 w-20 px-5 mr-8"},null,-1)),ne(" "+C(L(o)("details.item.loading")),1)],2))}}}),jt=ae(Mt,[["__scopeId","data-v-3a47d6ad"]]),zt={class:"relative h-full"},It={class:"detailsContentSection overflow-y-auto h-full"},Ht=P({__name:"details-screen",props:{panel:{type:Object}},setup(v){const{t:k}=R(),i=J("iApi"),d=K(),p=w([]),T=w([]),y=w([]),b=w(!1),o=w(""),r=M(()=>d.activeGreedy),c=M(()=>d.payload),u=M(()=>d.properties),e=m=>{o.value=m},n=m=>y.value.find(z=>z.uid===m),j=m=>{m!==void 0&&(d.activeGreedy=m.length===0?0:m[0].requestTime,y.value=m,q(m))},q=m=>{if(o.value){const z=n(o.value);z?z.loading.then(()=>{z.requestTime===r.value&&(z.items.length>0?(d.activeGreedy=0,b.value=!1):O(m))}):O(m)}else O(m)},O=(m,z)=>{let g;if(z)g=z;else{const I=d.properties,l=m.map(x=>[I[x.layerId]?.priority??50,x.layerId]),f=new Set(l.map(x=>x[0]));g=[],f.forEach(x=>{const _=l.filter(N=>N[0]===x).map(N=>N[1]);g.push([x,_])}),g.sort((x,_)=>_[0]-x[0])}if(g.length===0){d.activeGreedy=0,b.value=!0;return}const D=g[g.length-1][1],B=m.filter(I=>D.includes(I.layerId)).map(I=>I.loading.then(()=>I.items.length>0?Promise.resolve(I):Promise.reject())),H=m.length===0?0:m[0].requestTime;Promise.any(B).then(I=>{I.requestTime===r.value&&(d.activeGreedy=0,o.value=I.uid,b.value=!1)}).catch(()=>{H===r.value&&(g.pop(),O(m,g))})};return W(()=>{T.value.push(U(c,m=>{j(m)},{deep:!1,immediate:!0}))}),X(()=>{p.value.forEach(m=>i.event.off(m)),T.value.forEach(m=>m())}),(m,z)=>{const g=Me("panel-screen");return t(),Q(g,{panel:v.panel},{header:pe(()=>[ne(C(L(d).origin==="toggleEvent"?L(k)("details.layers.title.gridOrigin"):L(k)("details.layers.title.identifyOrigin")),1)]),content:pe(()=>[h("div",zt,[y.value.length>1?(t(),Q(Qe,{key:0,results:y.value,detailsProperties:u.value,selected:o.value,onSelectionChanged:e},null,8,["results","detailsProperties","selected"])):$("",!0),h("div",It,[b.value?(t(),a("div",{key:1,class:G(["text-center",{"ml-42":y.value.length>1}])},C(y.value.length>=1?L(k)("details.layers.results.empty"):L(k)("details.layers.results.empty.noLayers")),3)):(t(),Q(jt,{key:0,uid:o.value,results:y.value},null,8,["uid","results"]))])])]),_:1},8,["panel"])}}}),Ot=ae(Ht,[["__scopeId","data-v-2a8a1e06"]]);export{Ot as default};