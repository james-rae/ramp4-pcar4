import{a as i}from"./fabric-CvqngJ05.js";import{F as n}from"./main-DaZH2qzH.js";class s extends n{get config(){return this.$iApi.fixture.get("export").config?.map}async make(t){const e=await this.$iApi.geo.map.takeScreenshot({quality:1,format:"png"}),a=new Image;a.src=e.dataUrl;const r=await new Promise(o=>a.onload=()=>o(a));return new i.fabric.Image(r,t)}}export{s as default};
