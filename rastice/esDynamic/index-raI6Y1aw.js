import{a}from"./fabric-BQVQmQ8R.js";import{F as n,m as s}from"./main-CvsyIoCL.js";class f extends n{get config(){return this.$iApi.fixture.get("export").config?.title}make(o){const t=this.config,e={text:"RAMP-Map / PCAR-Carte",fontFamily:"Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",fill:"#000",fontSize:30,top:0,left:0,originX:"center",originY:"top"};t?.value!==void 0&&(e.text=t.value);const i=s(e,o||{}),r=new a.fabric.Textbox(i.text,i);return Promise.resolve(r)}}export{f as default};
