import{dM as c,dN as i,dR as d,dV as b,dW as o,dU as g,ea as s,d$ as r,e0 as u,dX as n}from"./main-Di-yv68k.js";import"./preload-helper-ExcqyqRp.js";const m={class:"flex flex-row justify-center items-center mt-16"},f={class:"mt-16"},h=c({__name:"p2-screen-1",props:{panel:{type:Object,required:!0},greeting:{type:String}},setup(t){const{t:a}=i();return(x,e)=>{const l=d("panel-screen");return g(),b(l,{panel:t.panel},{header:o(()=>e[2]||(e[2]=[s(" Gazebo/Panel 2/Screen A ")])),content:o(()=>[s(r(u(a)("gz.hello"))+" ",1),n("div",m,[n("button",{type:"button",onClick:e[0]||(e[0]=p=>t.panel.show({screen:"p-2-screen-2",props:{greeting:"Howdy?"}})),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16 m-2"}," Go back to B "),n("button",{type:"button",onClick:e[1]||(e[1]=p=>t.panel.show("p-2-screen-3")),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"}," Go to C ")]),n("p",f,r(t.greeting),1)]),_:1},8,["panel"])}}});export{h as default};
