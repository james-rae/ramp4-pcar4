import{a as i}from"./fabric-DacOu3K8.js";import{F as a}from"./main-CSU-shzQ.js";import"./preload-helper-ExcqyqRp.js";class x extends a{get config(){return this.$iApi.fixture.get("export").config?.mapElements}make(r){const t=this.$iApi.geo.map.caption.scaleHelper(),o=[];for(let e=0;e<2;e++){const n=new i.fabric.Text(this.$iApi.$i18n.t("export.scaleBar.approx",[`${this.$iApi.$i18n.n(t[e].distance,"number")}${t[e].units}`]),{fontFamily:"Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",fill:"#000",fontSize:16,top:e*50,left:0,originX:"left",originY:"top"}),s=new i.fabric.Line([0,e===0?30:40,t[e].pixels,e===0?30:40],{stroke:"black",strokeWidth:3});o.push(new i.fabric.Group([s,n]))}return Promise.resolve(new i.fabric.Group(o,r))}}export{x as default};
