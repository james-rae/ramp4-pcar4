import{a as o}from"./fabric-B8beob3t.js";import{F as n}from"./main-BxgY9rsH.js";import"./preload-helper-ExcqyqRp.js";class p extends n{get config(){return this.$iApi.fixture.get("export").config?.map}async make(e){const a=await this.$iApi.geo.map.takeScreenshot({quality:1,format:"png"}),t=new Image;t.src=a.dataUrl;const r=await new Promise(i=>t.onload=()=>i(t));return new o.fabric.Image(r,e)}}export{p as default};
