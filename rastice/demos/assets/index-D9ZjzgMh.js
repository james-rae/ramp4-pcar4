const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./fabric-DICoK5U1.js","./main-CUxU9bWS.js","./preload-helper-ExcqyqRp.js","./main-wZMPJMua.css","./index-C5So1MuB.js","./index-Mjt2lRqZ.js","./index-DUC-1fW4.js","./index-6ha60ep8.js","./index-BRGj-NUP.js","./index-e_81J69I.js","./index-NuiNDmqg.js"])))=>i.map(i=>d[i]);
import{_}from"./preload-helper-ExcqyqRp.js";import{fZ as T,f_ as O,F as D,dY as $,fo as M,em as P,fp as k}from"./main-CUxU9bWS.js";import{_ as B}from"./screen.vue_vue_type_script_setup_true_lang-mkPjkdTa.js";var S={exports:{}},j=S.exports,L;function I(){return L||(L=1,function(R,i){(function(n,s){s()})(j,function(){function n(t,e){return typeof e>"u"?e={autoBom:!1}:typeof e!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\uFEFF",t],{type:t.type}):t}function s(t,e,u){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){a(o.response,e,u)},o.onerror=function(){console.error("could not download file")},o.send()}function v(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch{}return 200<=e.status&&299>=e.status}function c(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var r=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof T=="object"&&T.global===T?T:void 0,F=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),a=r.saveAs||(typeof window!="object"||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!F?function(t,e,u){var o=r.URL||r.webkitURL,l=document.createElement("a");e=e||t.name||"download",l.download=e,l.rel="noopener",typeof t=="string"?(l.href=t,l.origin===location.origin?c(l):v(l.href)?s(t,e,u):c(l,l.target="_blank")):(l.href=o.createObjectURL(t),setTimeout(function(){o.revokeObjectURL(l.href)},4e4),setTimeout(function(){c(l)},0))}:"msSaveOrOpenBlob"in navigator?function(t,e,u){if(e=e||t.name||"download",typeof t!="string")navigator.msSaveOrOpenBlob(n(t,u),e);else if(v(t))s(t,e,u);else{var o=document.createElement("a");o.href=t,o.target="_blank",setTimeout(function(){c(o)})}}:function(t,e,u,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),typeof t=="string")return s(t,e,u);var l=t.type==="application/octet-stream",h=/constructor/i.test(r.HTMLElement)||r.safari,d=/CriOS\/[\d]+/.test(navigator.userAgent);if((d||l&&h||F)&&typeof FileReader<"u"){var x=new FileReader;x.onloadend=function(){var p=x.result;p=d?p:p.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=p:location=p,o=null},x.readAsDataURL(t)}else{var m=r.URL||r.webkitURL,g=m.createObjectURL(t);o?o.location=g:location.href=g,o=null,setTimeout(function(){m.revokeObjectURL(g)},4e4)}});r.saveAs=a.saveAs=a,R.exports=a})}(S)),S.exports}var N=I();const U=O(N),A=1200,f={TOP:40,RIGHT:40,BOTTOM:40,LEFT:40};class G extends D{fcFabric;fcFabricDownload;options={runningHeight:0,scale:1};customRendererFunc=void 0;customRenderer(i){this.customRendererFunc=i}get config(){return super.config}_parseConfig(i){if(!i)return;const n=$(this.$vApp.$pinia);n.componentSelectedState={title:i.title?.selected??!0,map:i.map?.selected??!0,mapElements:i.mapElements?.selected??!0,legend:i.legend?.selected??!0,footnote:i.footnote?.selected??!0,timestamp:i.timestamp?.selected??!0},n.fileName=i.fileName||"",this.handlePanelWidths(["export"]),this.handlePanelTeleports(["export"])}getSubFixture(i){return this.$iApi.fixture.get(i)}async make(i,n){const{fabric:s}=await _(async()=>{const{fabric:w}=await import("./fabric-DICoK5U1.js").then(b=>b.f);return{fabric:w}},__vite__mapDeps([0,1,2,3]),import.meta.url);s.Object.prototype.objectCaching=!1;const v=$(this.$vApp.$pinia),c={};this.fcFabric=new s.StaticCanvas(i,{backgroundColor:"#fff"}),this.fcFabricDownload=new s.StaticCanvas(null,{backgroundColor:"#fff"}),this.options.runningHeight=0;const r=v.componentSelectedState,F=this.getSubFixture("export-title"),a=this.getSubFixture("export-map"),t=this.getSubFixture("export-scalebar"),e=this.getSubFixture("export-northarrow"),u=this.getSubFixture("export-legend"),o=this.getSubFixture("export-footnote"),l=this.getSubFixture("export-timestamp");let h,d,x,m,g,p,E;if(r.title&&F&&(h=await F.make({top:this.options.runningHeight,left:0,originX:"left",width:n,textAlign:"center"}),this.options.runningHeight+=h.height+40,c.title=h),r.map&&a&&(d=await a.make({top:this.options.runningHeight}),h&&(h.left=d.width/2,h.originX="center"),this.options.runningHeight+=d.height+40,c.map=d),!d&&h&&(h.width=A),this.options.scale=n/((d?.width??A)+f.LEFT+f.RIGHT),r.mapElements&&t&&(x=await t.make({top:this.options.runningHeight,left:0}),this.options.runningHeight+=x.height+40,c.scaleBar=x,e&&(m=await e.make({top:x.top,left:n/this.options.scale}),m.top+=m.height/2-20,m.left+=-m.width*2,c.northArrow=m)),r.legend&&u&&(g=await u.make({width:u.config?.columnWidth??d?.width??A}),g.top=this.options.runningHeight,this.options.runningHeight+=g.height,c.legend=g),r.timestamp&&l&&(E=await l.make({top:this.options.runningHeight+40,width:n*1.5}),this.options.runningHeight+=!r.footnote||!o?E.height+40:E.height+20,c.timestamp=E),r.footnote&&o&&(p=await o.make({top:this.options.runningHeight-2.5,left:n/this.options.scale+40}),r.timestamp&&l?n-c.timestamp.getMinWidth()<=p.getMinWidth()+30?(p.top+=30,p.left=0,p.originX="left",this.options.runningHeight+=20):p.left+=-p.width*2:(p.top+=20,p.left+=-p.width*2,this.options.runningHeight+=20),this.options.runningHeight+=p.height,c.footnote=p),this.customRendererFunc){this.fcFabric.setWidth(n);const w={panelWidth:n,margin:f,defaultWidth:A,fabric:s};await this.customRendererFunc(this.fcFabric,c,w),this.fcFabric.renderAll(),this.fcFabric.clone(b=>{this.fcFabricDownload=b,this.fcFabricDownload.setDimensions({width:this.fcFabric?.getWidth(),height:this.fcFabric.getHeight()}),this.fcFabricDownload.renderAll()})}else{const w=new s.Group(Object.values(c),{top:f.TOP*this.options.scale,left:f.LEFT*this.options.scale}),b=await new Promise(H=>{w.clone(y=>{H(y)})});b.top=f.TOP,b.left=f.LEFT,this.fcFabricDownload.add(b),w.scale(this.options.scale),this.fcFabric.add(w),this.fcFabric.setDimensions({width:n,height:(this.options.runningHeight+f.TOP+f.BOTTOM)*this.options.scale}),this.fcFabric.renderAll(),this.fcFabricDownload.setDimensions({width:(d?.width??A)+f.LEFT+f.RIGHT,height:this.options.runningHeight+f.TOP+f.BOTTOM}),this.fcFabricDownload.renderAll()}}export(){if(!this.fcFabric)return;const i=new Date,n=this.config?.fileName||`map-carte - ${i.getFullYear()}-${i.getMonth()}-${i.getDay()}, ${i.getHours()}_${i.getMinutes()}`;U.saveAs(this.fcFabricDownload.toDataURL({format:"png",quality:1}),`${n}.png`)}}const V={en:{"export.title":"Export","export.alertName":"Export","export.download":"Download image","export.refresh":"Refresh","export.scaleBar.approx":"{0} approx.","export.menu":"Settings Menu","export.menu.component.title":"Title","export.menu.component.map":"Map","export.menu.component.mapElements":"North arrow and scalebar","export.menu.component.legend":"Legend","export.menu.component.footnote":"Footnote","export.menu.component.timestamp":"Timestamp"},fr:{"export.title":"Exporter","export.alertName":"Exporter","export.download":"Télécharger l'image","export.refresh":"Rafraîchir","export.scaleBar.approx":"Environ {0}","export.menu":"Menu des paramètres","export.menu.component.title":"Titre","export.menu.component.map":"Carte","export.menu.component.mapElements":"Flèche du nord et échelle graphique","export.menu.component.legend":"Légende","export.menu.component.footnote":"Référence","export.menu.component.timestamp":"Horodatage"}};class C extends G{initialized(){}async needed(){const i=(await _(async()=>{const{default:a}=await import("./index-C5So1MuB.js");return{default:a}},__vite__mapDeps([4,0,1,2,3]),import.meta.url)).default,n=(await _(async()=>{const{default:a}=await import("./index-Mjt2lRqZ.js");return{default:a}},__vite__mapDeps([5,0,1,2,3]),import.meta.url)).default,s=(await _(async()=>{const{default:a}=await import("./index-DUC-1fW4.js");return{default:a}},__vite__mapDeps([6,1,2,3,0]),import.meta.url)).default,v=(await _(async()=>{const{default:a}=await import("./index-6ha60ep8.js");return{default:a}},__vite__mapDeps([7,0,1,2,3]),import.meta.url)).default,c=(await _(async()=>{const{default:a}=await import("./index-BRGj-NUP.js");return{default:a}},__vite__mapDeps([8,0,1,2,3]),import.meta.url)).default,r=(await _(async()=>{const{default:a}=await import("./index-e_81J69I.js");return{default:a}},__vite__mapDeps([9,0,1,2,3]),import.meta.url)).default,F=(await _(async()=>{const{default:a}=await import("./index-NuiNDmqg.js");return{default:a}},__vite__mapDeps([10,0,1,2,3]),import.meta.url)).default;this.$iApi.fixture.add("export-title",i),this.$iApi.fixture.add("export-map",n),this.$iApi.fixture.add("export-legend",s),this.$iApi.fixture.add("export-northarrow",v),this.$iApi.fixture.add("export-scalebar",c),this.$iApi.fixture.add("export-timestamp",r),this.$iApi.fixture.add("export-footnote",F)}added(){this.$iApi.panel.register({id:"export",config:{screens:{"export-screen":M(B)},style:{"flex-grow":"1","max-width":"800px"},button:{tooltip:"export.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>'},alertName:"export.alertName"}},{i18n:{messages:V}});const i=this.$iApi.event.on(P.PANEL_OPENED,async s=>{s.id==="export"&&(this.$iApi.event.off(i),await this.needed(),s.exportMake())});this._parseConfig(this.config);const n=this.$vApp.$watch(()=>this.config,s=>this._parseConfig(s));this.removed=()=>{n(),this.$iApi.fixture.get("export-title")?.remove(),this.$iApi.fixture.get("export-map")?.remove(),this.$iApi.fixture.get("export-legend")?.remove(),this.$iApi.fixture.get("export-northarrow")?.remove(),this.$iApi.fixture.get("export-scalebar")?.remove(),this.$iApi.fixture.get("export-timestamp")?.remove(),this.$iApi.fixture.get("export-footnote")?.remove(),this.$iApi.fixture.exists("appbar")&&k(this.$vApp.$pinia).removeButton("export"),$(this.$vApp.$pinia).$reset(),this.$iApi.panel.remove("export")}}}export{C as default};
