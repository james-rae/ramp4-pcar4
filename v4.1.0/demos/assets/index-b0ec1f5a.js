import{gK as r,hi as p,gY as a,gZ as m,gQ as i,gX as u,gT as c,gM as d,gO as _,gR as g,gS as h}from"./main-e6c796d9.js";import"./preload-helper-388ac9d5.js";const f=["src"],x=r({__name:"snowman",props:{fixture:{type:p,required:!0},message:String},setup(n){const e=n,t=a(),s=a("https://i.ya-webdesign.com/images/evil-snowman-png-1.png");return m(()=>{setTimeout(()=>{t.value.parentNode.removeChild(t.value),e.fixture.remove()},6e3)}),(l,o)=>(i(),u("div",{class:"absolute top-0 right-0",ref_key:"el",ref:t},[c("img",{style:{width:"250px"},src:s.value,alt:"Snowman",srcset:""},null,8,f)],512))}}),b=c("span",{class:"block h-24"},"⛄",-1),w=r({__name:"appbar-button",setup(n){const e=d("iApi"),t=()=>{e.fixture.add("snowman")};return(s,l)=>{const o=_("appbar-button",!0);return i(),g(o,{onClickFunction:t,tooltip:"⛄"},{default:h(()=>[b]),_:1})}}});class C extends p{added(){this.$iApi.component("snowman-appbar-button",w);const e=this.extend(x,{propsData:{message:"I'm snowman prop.",fixture:this}});this.$vApp.$el.appendChild(e)}removed(){}}export{C as default};
