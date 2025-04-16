import{F as k}from"./main-uRGA0thB.js";import{a as o}from"./fabric-D4KH3aUb.js";const _=30,C=20,T=16,F=12,P=8,f=32,S=32,G=350,w=20,g="Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif";class I extends k{get config(){return this.$iApi.fixture.get("export").config?.legend}async make(n){const r=this.$iApi.geo.layer.allLayersOnMap().filter(a=>!a.isCosmetic);if(r.length===0)return new o.fabric.Group([],{originX:"left"});const e=Math.min(r.length,Math.floor(n.width/(G+w))||1),t=(n.width-(e-1)*w)/e;let i=0;const s=(await Promise.all(this._makeSegments(r,t))).map(({title:a,items:m},c)=>{c>0&&(i+=_),a.top=i,i+=a.height+C;const b=m.map(({title:h,items:u},x)=>{const y=[];return h&&!(m.length===1&&h.text===a.text)&&(x>0&&(i+=T),h.top=i,i+=h.height+F,y.push(h)),u.forEach(p=>{p.top=i,i+=p.height+P}),[...y,...u].filter(p=>p)});return new o.fabric.Group([a,...b.flat()])}).flat(),l=this._makeColumns(s,t,e);return Promise.resolve(l)}_makeColumns(n,r,e){let t=0,i=0,s=0;const l=n[n.length-1].aCoords.bl.y/e;return n.forEach((a,m)=>{const c=m!==n.length-1?n[m+1].top-a.top:a.height,b=s>l*(t+1),h=i!==0&&c>l,u=e-t>n.length-m;(b||h||u)&&t<e&&(++t,i=0),a.left=t*(r+w),a.top=i,i+=c,s+=c}),new o.fabric.Group(n,{originX:"left"})}_makeSegments(n,r){return n.map(async e=>{const t=new o.fabric.Textbox(e.name,{fontSize:24,fontFamily:g,width:r}),i=this._getLayerTreeIds(e);let s=[];return s=e.supportsSublayers?await Promise.all(this._makeSegmentChunks(i,e,r)):await Promise.all(this._makeSegmentChunks([-1],e,r)),{title:t,items:s}})}_makeSegmentChunks(n,r,e){const t=r;return n.map(async i=>{const s=i===-1?t:t.getSublayer(i);if(!s)return{title:new o.fabric.Textbox("ERROR",{fontSize:20,fontFamily:g,width:e}),items:[]};await Promise.all(s.legend.map(c=>c.drawPromise));const l=s.legend,a=new o.fabric.Textbox(s.name,{fontSize:20,fontFamily:g,width:e}),m=await Promise.all(this._makeChunkItems(l,e));return{title:a,items:m}})}_makeChunkItems(n,r){return n.map(async e=>{const t=(await M(o.fabric.loadSVGFromString)(e.svgcode))[0];if(e.esriStandard){t.originY="center",t.top=f/2;const i=new o.fabric.Textbox(e.label,{fontSize:12,fontFamily:g,originY:"center",left:S+20,top:f/2,width:r-S-20});return new o.fabric.Group([t,i],{height:f})}else{const i=new o.fabric.Textbox(e.label,{fontSize:12,fontFamily:g,originY:"center",left:0,top:f/2,width:r}),s=Number(e.imgWidth),l=Number(e.imgHeight),a=Math.min(1,r/s);return t&&(t.originY="center",t.top=l*a/2+f,t.scaleToHeight(l*a),t.scaleToWidth(s*a)),new o.fabric.Group([i,t].filter(Boolean),{height:l*a+f})}})}_getLayerTreeIds(n){const r=[],e=[...n.sublayers];for(;e.length>0;){const t=e.shift();t&&(t.visibility&&r.push(t.layerIdx),e.push(...t.sublayers))}return r}}const M=d=>n=>new Promise(r=>{d(n,e=>{r(e)})});export{I as default};
