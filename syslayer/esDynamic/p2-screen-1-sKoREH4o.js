import{ek as c,el as b,ep as g,et as i,eu as s,es as u,eK as o,ez as r,eA as m,ev as n}from"./main-DZMdXZ8-.js";const d={class:"flex flex-row justify-center items-center mt-16"},f={class:"mt-16"},h=c({__name:"p2-screen-1",props:{panel:{type:Object,required:!0},greeting:{type:String}},setup(t){const{t:a}=b();return(x,e)=>{const p=g("panel-screen");return u(),i(p,{panel:t.panel},{header:s(()=>e[2]||(e[2]=[o(" Gazebo/Panel 2/Screen A ")])),content:s(()=>[o(r(m(a)("gz.hello"))+" ",1),n("div",d,[n("button",{type:"button",onClick:e[0]||(e[0]=l=>t.panel.show({screen:"p-2-screen-2",props:{greeting:"Howdy?"}})),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16 m-2"}," Go back to B "),n("button",{type:"button",onClick:e[1]||(e[1]=l=>t.panel.show("p-2-screen-3")),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"}," Go to C ")]),n("p",f,r(t.greeting),1)]),_:1},8,["panel"])}}});export{h as default};
