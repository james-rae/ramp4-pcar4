import{fF as E,fG as S,F as L,dP as T,f6 as k,dE as D,f7 as B}from"./main-DFutu5rJ.js";import{_ as j}from"./screen.vue_vue_type_script_setup_true_lang-DoQj1_0k.js";var y={exports:{}},P=y.exports,R;function N(){return R||(R=1,function(H,o){(function(n,a){a()})(P,function(){function n(t,e){return typeof e>"u"?e={autoBom:!1}:typeof e!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\uFEFF",t],{type:t.type}):t}function a(t,e,h){var i=new XMLHttpRequest;i.open("GET",t),i.responseType="blob",i.onload=function(){w(i.response,e,h)},i.onerror=function(){console.error("could not download file")},i.send()}function v(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch{}return 200<=e.status&&299>=e.status}function p(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var r=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof E=="object"&&E.global===E?E:void 0,x=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),w=r.saveAs||(typeof window!="object"||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!x?function(t,e,h){var i=r.URL||r.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener",typeof t=="string"?(c.href=t,c.origin===location.origin?p(c):v(c.href)?a(t,e,h):p(c,c.target="_blank")):(c.href=i.createObjectURL(t),setTimeout(function(){i.revokeObjectURL(c.href)},4e4),setTimeout(function(){p(c)},0))}:"msSaveOrOpenBlob"in navigator?function(t,e,h){if(e=e||t.name||"download",typeof t!="string")navigator.msSaveOrOpenBlob(n(t,h),e);else if(v(t))a(t,e,h);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout(function(){p(i)})}}:function(t,e,h,i){if(i=i||open("","_blank"),i&&(i.document.title=i.document.body.innerText="downloading..."),typeof t=="string")return a(t,e,h);var c=t.type==="application/octet-stream",f=/constructor/i.test(r.HTMLElement)||r.safari,d=/CriOS\/[\d]+/.test(navigator.userAgent);if((d||c&&f||x)&&typeof FileReader<"u"){var m=new FileReader;m.onloadend=function(){var s=m.result;s=d?s:s.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=s:location=s,i=null},m.readAsDataURL(t)}else{var u=r.URL||r.webkitURL,g=u.createObjectURL(t);i?i.location=g:location.href=g,i=null,setTimeout(function(){u.revokeObjectURL(g)},4e4)}});r.saveAs=w.saveAs=w,H.exports=w})}(y)),y.exports}var U=N();const C=S(U),A=1200,l={TOP:40,RIGHT:40,BOTTOM:40,LEFT:40};class _ extends L{fcFabric;fcFabricDownload;options={runningHeight:0,scale:1};customRendererFunc=void 0;customRenderer(o){this.customRendererFunc=o}get config(){return super.config}_parseConfig(o){if(!o)return;const n=T(this.$vApp.$pinia);n.componentSelectedState={title:o.title?.selected??!0,map:o.map?.selected??!0,mapElements:o.mapElements?.selected??!0,legend:o.legend?.selected??!0,footnote:o.footnote?.selected??!0,timestamp:o.timestamp?.selected??!0},n.fileName=o.fileName||"",this.handlePanelWidths(["export"]),this.handlePanelTeleports(["export"])}getSubFixture(o){return this.$iApi.fixture.get(o)}async make(o,n){const{fabric:a}=await import("./fabric-DDudO3za.js").then(b=>b.f);a.Object.prototype.objectCaching=!1;const v=T(this.$vApp.$pinia),p={};this.fcFabric=new a.StaticCanvas(o,{backgroundColor:"#fff"}),this.fcFabricDownload=new a.StaticCanvas(null,{backgroundColor:"#fff"}),this.options.runningHeight=0;const r=v.componentSelectedState,x=this.getSubFixture("export-title"),w=this.getSubFixture("export-map"),t=this.getSubFixture("export-scalebar"),e=this.getSubFixture("export-northarrow"),h=this.getSubFixture("export-legend"),i=this.getSubFixture("export-footnote"),c=this.getSubFixture("export-timestamp");let f,d,m,u,g,s,$;if(r.title&&x&&(f=await x.make({top:this.options.runningHeight,left:0,originX:"left",width:n,textAlign:"center"}),this.options.runningHeight+=f.height+40,p.title=f),r.map&&w&&(d=await w.make({top:this.options.runningHeight}),f&&(f.left=d.width/2,f.originX="center"),this.options.runningHeight+=d.height+40,p.map=d),!d&&f&&(f.width=A),this.options.scale=n/((d?.width??A)+l.LEFT+l.RIGHT),r.mapElements&&t&&(m=await t.make({top:this.options.runningHeight,left:0}),this.options.runningHeight+=m.height+40,p.scaleBar=m,e&&(u=await e.make({top:m.top,left:n/this.options.scale}),u.top+=u.height/2-20,u.left+=-u.width*2,p.northArrow=u)),r.legend&&h&&(g=await h.make({width:h.config?.columnWidth??d?.width??A}),g.top=this.options.runningHeight,this.options.runningHeight+=g.height,p.legend=g),r.timestamp&&c&&($=await c.make({top:this.options.runningHeight+40,width:n*1.5}),this.options.runningHeight+=!r.footnote||!i?$.height+40:$.height+20,p.timestamp=$),r.footnote&&i&&(s=await i.make({top:this.options.runningHeight-2.5,left:n/this.options.scale+40}),r.timestamp&&c?n-p.timestamp.getMinWidth()<=s.getMinWidth()+30?(s.top+=30,s.left=0,s.originX="left",this.options.runningHeight+=20):s.left+=-s.width*2:(s.top+=20,s.left+=-s.width*2,this.options.runningHeight+=20),this.options.runningHeight+=s.height,p.footnote=s),this.customRendererFunc){this.fcFabric.setWidth(n);const b={panelWidth:n,margin:l,defaultWidth:A,fabric:a};await this.customRendererFunc(this.fcFabric,p,b),this.fcFabric.renderAll(),this.fcFabric.clone(F=>{this.fcFabricDownload=F,this.fcFabricDownload.setDimensions({width:this.fcFabric?.getWidth()??n,height:this.fcFabric.getHeight()}),this.fcFabricDownload.renderAll()})}else{const b=new a.Group(Object.values(p),{top:l.TOP*this.options.scale,left:l.LEFT*this.options.scale}),F=await new Promise(O=>{b.clone(M=>{O(M)})});F.top=l.TOP,F.left=l.LEFT,this.fcFabricDownload.add(F),b.scale(this.options.scale),this.fcFabric.add(b),this.fcFabric.setDimensions({width:n,height:(this.options.runningHeight+l.TOP+l.BOTTOM)*this.options.scale}),this.fcFabric.renderAll(),this.fcFabricDownload.setDimensions({width:(d?.width??A)+l.LEFT+l.RIGHT,height:this.options.runningHeight+l.TOP+l.BOTTOM}),this.fcFabricDownload.renderAll()}}export(){if(!this.fcFabric)return;const o=new Date,n=this.config?.fileName||`map-carte - ${o.getFullYear()}-${o.getMonth()}-${o.getDay()}, ${o.getHours()}_${o.getMinutes()}`;C.saveAs(this.fcFabricDownload.toDataURL({format:"png",quality:1}),`${n}.png`)}}const W={en:{"export.title":"Export","export.alertName":"Export","export.download":"Download image","export.refresh":"Refresh","export.scaleBar.approx":"{0} approx.","export.menu":"Settings Menu","export.menu.component.title":"Title","export.menu.component.map":"Map","export.menu.component.mapElements":"North arrow and scalebar","export.menu.component.legend":"Legend","export.menu.component.footnote":"Footnote","export.menu.component.timestamp":"Timestamp"},fr:{"export.title":"Exporter","export.alertName":"Exporter","export.download":"T\xE9l\xE9charger l'image","export.refresh":"Rafra\xEEchir","export.scaleBar.approx":"Environ {0}","export.menu":"Menu des param\xE8tres","export.menu.component.title":"Titre","export.menu.component.map":"Carte","export.menu.component.mapElements":"Fl\xE8che du nord et \xE9chelle graphique","export.menu.component.legend":"L\xE9gende","export.menu.component.footnote":"R\xE9f\xE9rence","export.menu.component.timestamp":"Horodatage"}};class G extends _{initialized(){}async needed(){const o=(await import("./index-bXheC5Kn.js")).default,n=(await import("./index-DhXAOx_d.js")).default,a=(await import("./index-BMmQSDFT.js")).default,v=(await import("./index-BhYEoYpL.js")).default,p=(await import("./index-TqdWBsML.js")).default,r=(await import("./index-BKWVwnvJ.js")).default,x=(await import("./index-gc1Nkf1G.js")).default;this.$iApi.fixture.add("export-title",o),this.$iApi.fixture.add("export-map",n),this.$iApi.fixture.add("export-legend",a),this.$iApi.fixture.add("export-northarrow",v),this.$iApi.fixture.add("export-scalebar",p),this.$iApi.fixture.add("export-timestamp",r),this.$iApi.fixture.add("export-footnote",x)}added(){this.$iApi.panel.register({id:"export",config:{screens:{"export-screen":k(j)},style:{"flex-grow":"1","max-width":"800px"},button:{tooltip:"export.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>'},alertName:"export.alertName"}},{i18n:{messages:W}});const o=this.$iApi.event.on(D.PANEL_OPENED,async a=>{a.id==="export"&&(this.$iApi.event.off(o),await this.needed(),a.exportMake())});this._parseConfig(this.config);const n=this.$vApp.$watch(()=>this.config,a=>this._parseConfig(a));this.removed=()=>{n(),this.$iApi.fixture.get("export-title")?.remove(),this.$iApi.fixture.get("export-map")?.remove(),this.$iApi.fixture.get("export-legend")?.remove(),this.$iApi.fixture.get("export-northarrow")?.remove(),this.$iApi.fixture.get("export-scalebar")?.remove(),this.$iApi.fixture.get("export-timestamp")?.remove(),this.$iApi.fixture.get("export-footnote")?.remove(),this.$iApi.fixture.exists("appbar")&&B(this.$vApp.$pinia).removeButton("export"),T(this.$vApp.$pinia).$reset(),this.$iApi.panel.remove("export")}}}export{G as default};
