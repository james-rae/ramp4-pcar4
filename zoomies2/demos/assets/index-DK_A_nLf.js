import{dM as p,F as i,e3 as r,e8 as u,dY as d,dX as c,dU as l,e2 as m,dR as _,dV as h,dW as f}from"./main-BxgY9rsH.js";import"./preload-helper-ExcqyqRp.js";const x=["src"],b=p({__name:"snowman",props:{fixture:{type:i,required:!0},message:String},setup(s){const e=s,t=r(),o=r("https://i.imgur.com/p13yknD.png");return u(()=>{setTimeout(()=>{t.value.parentNode.removeChild(t.value),e.fixture.remove()},6e3)}),(n,a)=>(l(),d("div",{class:"absolute top-0 right-0",ref_key:"el",ref:t},[c("img",{style:{width:"250px"},src:o.value,alt:"Snowman",srcset:""},null,8,x)],512))}}),g=p({__name:"appbar-button",setup(s){const e=m("iApi"),t=()=>{e.fixture.add("snowman")};return(o,n)=>{const a=_("appbar-button",!0);return l(),h(a,{onClickFunction:t,tooltip:"⛄"},{default:f(()=>n[0]||(n[0]=[c("span",{class:"block h-24"},"⛄",-1)])),_:1})}}});class k extends i{added(){this.$iApi.component("snowman-appbar-button",g);const{el:e}=this.mount(b,{app:this.$element,props:{message:"This is a snowman prop.",fixture:this}});this.$vApp.$el.appendChild(e.childNodes[0])}removed(){}}export{k as default};
