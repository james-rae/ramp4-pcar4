import{a as l}from"./fabric-Bt7--6A1.js";import{F as k,P as M,m as P}from"./main-DyJf3FFo.js";class y extends k{get config(){return this.$iApi.fixture.get("export").config?.mapElements}async make(c){let o=()=>0,h=0;const f='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.06 96.62"><g transform="translate(-1.438 30.744)"><g fill="none" stroke="#000"><path d="m61 35c0 16.02-12.984 29-29 29-16.02 0-29-12.984-29-29 0-16.02 12.984-29 29-29 16.02 0 29 12.984 29 29z" stroke-width="3"/><path d="m55 35c0 12.979-10.521 23.5-23.5 23.5-12.979 0-23.5-10.521-23.5-23.5 0-12.979 10.521-23.5 23.5-23.5 12.979 0 23.5 10.521 23.5 23.5z" transform="matrix(1.01148 0 0 .99988-.089.004)" stroke-width=".497"/><path d="m32 35v-32" stroke-width=".25"/></g><path d="m32-9.453l28.938 73.826-29-29-29 29z" fill="#fff" stroke="#fff" stroke-width="3"/><path d="m32-9.453l29 73.45-29-29-29 29z" fill="none" stroke="#000" stroke-linecap="square"/><text x="22.71" y="-10.854" font-family="OPEN SANS" word-spacing="0" line-height="125%" letter-spacing="0" font-size="40"><tspan x="22.71" y="-10.854" font-family="Adobe Heiti Std R" font-size="26">N</tspan></text></g><g transform="translate(0-3.829)" fill="none" stroke="#000" stroke-width=".25"><path d="m4 92.82l6.74-3.891"/><path d="m4.603 90.7l10.397-6"/><path d="m3 95.17l4-2.309"/><path d="m5.442 88.45l13.856-8"/><path d="m12 72.26l18.686-10.812"/><path d="m14.593 65.45l16.09-9.291"/><path d="m15.343 63.24l15.343-8.858"/><path d="m16.877 60.58l13.809-7.972"/><path d="m17.511 58.45l13.174-7.606"/><path d="m18.412 56.15l12.274-7.087"/><path d="m19 54.04l11.427-6.597"/><path d="m20 51.757l10.822-6.311"/><path d="m20.826 49.45l9.86-5.693"/><path d="m21.48 47.3l9.206-5.315"/><path d="m23 44.647l7.686-4.437"/><path d="m23.744 42.45l6.928-4"/><path d="m24.549 40.21l6.137-3.543"/><path d="m25 38.18l5.686-3.283"/><path d="m26.663 35.446l4.02-2.323"/><path d="m27.617 33.12l3.069-1.772"/><path d="m28 31.13l2.686-1.551"/><path d="m29.15 28.694l1.534-.886"/><path d="m13 69.909l17.686-10.211"/><path d="m9.206 79.19l21.48-12.402"/><path d="m8.36 81.45l22.326-12.89"/><path d="m7.671 83.62l19.946-11.516"/><path d="m6.137 86.27l17.02-9.827"/><path d="m10 76.956l20.686-11.943"/><path d="m11.279 74.45l19.407-11.205"/><path d="m14 67.56l16.686-9.634"/><path d="m30.562 65.744v-43.566" transform="translate(0 3.829)"/></g></svg>',t=this.$vApp.$el.querySelector(".inner-shell"),s=this.$iApi.geo.map.getSR();let a=0;if(s.isWebMercator())a=0;else{const m=new M("pole",{x:-96,y:90}),r=await this.$iApi.geo.proj.projectGeometry(s,m),i=this.$iApi.geo.map.mapPointToScreenPoint(r),d={screenX:t.clientWidth/2,screenY:t.clientHeight};a=Math.atan((i.screenX-d.screenX)/(d.screenY-i.screenY))*180/Math.PI;const w=t.clientWidth/2+t.clientHeight*Math.tan(a*Math.PI/180)-50/2,x=Math.round(w/t.clientWidth*100);h=Math.min(Math.max(x,0),100),o=n=>{if(n<0||n>100)throw new Error("Normalized position must be between 0 and 100");const u=t.clientWidth*n/100;return Math.atan((i.screenX-u)/(50/2-i.screenY))*(180/Math.PI)}}const g={top:0,left:0,originX:"center",originY:"center",angle:a},p=[];let e=new l.fabric.Group;return l.fabric.loadSVGFromString(f,()=>{e=new l.fabric.Group(p),e.positionX=h,e.getAngleFromPosition=o},(m,r)=>{p.push(r)}),e.set(P(g,c||{})),Promise.resolve(e)}}export{y as default};
