import{F as c,g0 as a,go as y,gp as s,gq as u,gr as g,gs as m,dV as v,dW as L,eb as f,d_ as b,e2 as I,e3 as x,e9 as A,e1 as $,e4 as h,fl as w,fm as _,fn as C}from"./main-CvsyIoCL.js";class S extends c{_parseConfig(e){const l=e?.headerControls?.slice()??["wizard","layerReorder","groupToggle","visibilityToggle"];if(a(this.$vApp.$pinia).headerControls=l,!e||!e.root.children)return;a(this.$vApp.$pinia).multilineItems=e.multilineItems?.enabled??!0;const t=[1,2,3,4,5,6];!e.multilineItems?.maxLines||!t.includes(e.multilineItems?.maxLines)?a(this.$vApp.$pinia).maxLines=3:a(this.$vApp.$pinia).maxLines=e.multilineItems.maxLines,this.handlePanelWidths(["legend"]),this.handlePanelTeleports(["legend"]);const i=this.getLayerFixtureConfigs();e.root.children.forEach(r=>{r.layerLegendConfigs=i,this.addItem(r)}),this.$iApi.geo.layer.allLayers().forEach(r=>{this.updateLegend(r)})}createItem(e,l){let t;e.layerId===void 0?t=new y(this.$iApi,e,l):(e.sublayerIndex!==void 0&&(e.layerId=`${e.layerId}-${e.sublayerIndex}`),t=new s(this.$iApi,e,l));const i=e.children;return i&&i.forEach(r=>{e.layerLegendConfigs!==void 0&&(r.layerLegendConfigs=e.layerLegendConfigs),t.children.push(this.createItem(r,t))}),t}addItem(e,l){const t=e instanceof u?e:this.createItem(e,l);return this._insertItem(t,l),t}async addLayerItem(e,l){const t=new s(this.$iApi,{layerId:e.id,sublayerIndex:e.isSublayer?e.layerIdx:void 0,name:e.name},l);return this._insertItem(t,l),this.updateLegend(e),t}get config(){return super.config}getLegend(){return a(this.$vApp.$pinia).children||[]}getLegendConfig(){return{root:{children:this.getLegend().map(e=>e.getConfig())}}}getItem(e){const l=this.getLegend();let t;return l.some(i=>(t=this.searchTreeFirst(i,r=>r.uid===e),t!==void 0)),t}getLayerItem(e){let l,t,i;return typeof e=="string"?(t=e,l=e):(t=e.id,l=e.uid),this.getLegend().some(r=>(i=this.searchTreeFirst(r,n=>n instanceof s&&(n.layerId===t||n.uid===l)),i!==void 0)),i}getAllExpanded(e){const l=e??!0;return this.searchLegend(t=>t.children.length>0&&t.expanded===l)}getAllVisible(e){const l=e??!0;return this.searchLegend(t=>t.visibility===l)}getLayerBoundItems(e){let l="";const t=e instanceof g?e:this.$iApi.geo.layer.getLayer(e);if(t)l=t.isSublayer?t.parentLayer?.id||"":t.id;else return[];return this.searchLegend(i=>i instanceof s&&(i.layerId===l||i.parentLayerId===l))}updateLegend(e){const l=(t,i)=>{const r=this.getLayerItem(t);i?(r&&t instanceof g&&(r.layer=t),r?.error()):r?.load(t instanceof g?t:void 0)};e.loadPromise().then(()=>{let t=this.getLayerItem(e);if(e.layerType===m.MAPIMAGE){const i=r=>{if(r.isLayerRoot&&!r.isLogicalLayer)t=this.getLayerItem(e),l(e,!1),t&&!t.treeGrown&&(r.children.map(n=>this._treeWalker(e,n)).map(n=>this.addItem(n,t)),t.treeGrown=!0),r.children.forEach(n=>i(n));else if(!r.isLayerRoot&&!r.isLogicalLayer){if(t=this.getLayerItem(`${e.id}-${r.layerIdx}`),t){const n=t.getConfig();delete n.layerId,delete n.sublayerIndex,delete n.children,n.name||delete n.name;const d={...this._treeWalker(e,r),...n},o=this.createItem(d);this._replaceItem(t,o)}r.children.forEach(n=>i(n))}else r.isLogicalLayer&&l(this._treeWalker(e,r).layer,!1)};i(e.getLayerTree())}else l(e,!1)}).catch(()=>{l(e,!0),e.supportsSublayers&&e.config.sublayers.forEach(t=>{l(`${e.id}-${t.index}`,!0)})})}expandItems(e,l){const t=this.getLegend(),i=l===void 0?t:l.children;l!==void 0&&this._toggleState(l,{expanded:e}),i.forEach(r=>{this._toggleState(r,{expanded:e})})}showItems(e,l){const t=this.getLegend(),i=l===void 0?t:l.children;l!==void 0&&this._toggleState(l,{visibility:e}),i.forEach(r=>{this._toggleState(r,{visibility:e})})}reloadLayerItem(e){const l=this.getLayerBoundItems(e);return l.forEach(t=>t.reload()),l.length>0}removeItem(e){const l=typeof e=="string"?this.getItem(e):e;return l!==void 0?this._deleteItem(l):!1}removeLayerItem(e){const l=this.getLayerItem(e);return l!==void 0?this._deleteItem(l):!1}searchTreeFirst(e,l){if(l(e))return e;{let t;return e.children.some(i=>(t=this.searchTreeFirst(i,l),t!==void 0)),t}}searchTreeAll(e,l){const t=[],i=[e];for(;i.length>0;){const r=i.shift();r&&l(r)&&t.push(r),r&&i.push(...r.children)}return t}searchLegend(e){return this.getLegend().map(l=>this.searchTreeAll(l,e)).flat()}_toggleState(e,l){const t=l.visibility,i=l.expanded;t!==void 0&&e.toggleVisibility(t),i!==void 0&&e.children.length>0&&e.toggleExpanded(i),e.children&&e.children.length>0&&e.children.forEach(r=>{this._toggleState(r,l)})}_insertItem(e,l){a(this.$vApp.$pinia).addItem({item:e,parent:l})}_deleteItem(e){const l=a(this.$vApp.$pinia),t=i=>{i.children.length>0&&i.children.forEach(r=>{t(r)}),i instanceof s&&i.handlers.forEach(r=>this.$iApi.event.off(r)),l.removeItem(i)};return t(e),!0}_replaceItem(e,l){a(this.$vApp.$pinia).replaceItem({oldItem:e,newItem:l})}_treeWalker(e,l,t){const i=(n=>{const d=[e];for(;d.length>0;){const o=d.shift();if(o&&o.uid===n)return o;o&&d.push(...o.sublayers)}})(l.uid),r={};return l.isLayerRoot&&!l.isLogicalLayer?(r.layer=i,r.name=i.name,r.children=l.children.map(n=>this._treeWalker(e,n,t))):!l.isLayerRoot&&!l.isLogicalLayer?(r.name=l.name,r.children=l.children.map(n=>this._treeWalker(e,n,t))):l.isLogicalLayer&&(r.layer=i,r.name=i.name,r.layerId=i.id,r.sublayerIndex=e.isSublayer?e.layerIdx:void 0),{...r,...t}}}const E=v({__name:"nav-button",setup(p){const{t:e}=L(),l=f("iApi"),t=()=>{l.panel.toggle("legend")};return(i,r)=>{const n=b("mapnav-button");return $(),I(n,{onClickFunction:t,tooltip:A(e)("legend.title")},{default:x(()=>r[0]||(r[0]=[h("svg",{class:"fill-current w-32 h-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"})],-1)])),_:1},8,["tooltip"])}}}),M={en:{"legend.title":"Legend","legend.header.addlayer":"Add Layer","legend.header.reorderlayers":"Reorder Layers","legend.header.groups":"Toggle Groups","legend.header.groups.expand":"Expand All","legend.header.groups.collapse":"Collapse All","legend.header.visible":"Toggle Visibility","legend.header.visible.show":"Show All","legend.header.visible.hide":"Hide All","legend.group.expand":"Expand Group","legend.group.collapse":"Collapse Group","legend.visibility.showLayer":"Show layer","legend.visibility.hideLayer":"Hide layer","legend.visibility.showSymbol":"Show symbol","legend.visibility.hideSymbol":"Hide symbol","legend.visibility.showGroup":"Show group","legend.visibility.hideGroup":"Hide group","legend.symbology.expand":"Expand legend","legend.symbology.hide":"Hide legend","legend.symbology.loading":"Loading...","legend.layer.data":"Show more data","legend.layer.data.only":"Layer not on map","legend.layer.offscale":"Layer out of scale","legend.layer.zoomToVisible":"Zoom to visible scale","legend.layer.options":"More options","legend.layer.controls.metadata":"Metadata","legend.layer.controls.settings":"Settings","legend.layer.controls.datatable":"Datatable","legend.layer.controls.symbology":"Legend","legend.layer.controls.boundaryzoom":"Zoom to Layer Boundary","legend.layer.controls.cancel":"Cancel","legend.layer.controls.remove":"Remove","legend.layer.controls.reload":"Reload","legend.layer.controls.reloadDisabled":"Layer cannot be reloaded","legend.alert.symbologyExpanded":"Layer legend expanded","legend.alert.symbologyCollapsed":"Layer legend collapsed","legend.alert.groupExpanded":"Legend group expanded","legend.alert.groupCollapsed":"Legend group collapsed","legend.alert.layerAdded":"{name} layer added to legend","legend.alert.layerRemoved":"{name} layer removed from legend"},fr:{"legend.title":"L\xE9gende","legend.header.addlayer":"Ajouter une couche","legend.header.reorderlayers":"R\xE9organiser les couches","legend.header.groups":"Basculer les Groupes","legend.header.groups.expand":"\xC9largir les groupes","legend.header.groups.collapse":"R\xE9duire les groupes","legend.header.visible":"Basculer la Visibilit\xE9","legend.header.visible.show":"Montrer tout","legend.header.visible.hide":"Cacher tout","legend.group.expand":"D\xE9velopper un groupe","legend.group.collapse":"R\xE9duire un groupe","legend.visibility.showLayer":"Afficher la couche","legend.visibility.hideLayer":"Masquer la couche","legend.visibility.showSymbol":"Afficher le symbole","legend.visibility.hideSymbol":"Masquer le symbole","legend.visibility.showGroup":"Afficher le groupe","legend.visibility.hideGroup":"Masquer le groupe","legend.symbology.expand":"D\xE9velopper la l\xE9gende","legend.symbology.hide":"Masquer la l\xE9gende","legend.symbology.loading":"Chargement en cours...","legend.layer.data":"Afficher plus de donn\xE9es","legend.layer.data.only":"Couche non visualisable","legend.layer.offscale":"Couche hors de port\xE9e","legend.layer.zoomToVisible":"Zoom sur l'\xE9chelle visible","legend.layer.options":"Plus d'options","legend.layer.controls.metadata":"M\xE9tadonn\xE9es","legend.layer.controls.settings":"Param\xE8tres","legend.layer.controls.datatable":"Tableau de donn\xE9es","legend.layer.controls.symbology":"L\xE9gende","legend.layer.controls.boundaryzoom":"Zoomer \xE0 la limite","legend.layer.controls.cancel":"Annuler","legend.layer.controls.remove":"Retirer","legend.layer.controls.reload":"Recharger","legend.layer.controls.reloadDisabled":"Le calque ne peut pas \xEAtre recharg\xE9","legend.alert.symbologyExpanded":"L\xE9gende de la couche d\xE9velopp\xE9e","legend.alert.symbologyCollapsed":"L\xE9gende de la couche r\xE9duite","legend.alert.groupExpanded":"Groupe de l\xE9gende d\xE9velopp\xE9","legend.alert.groupCollapsed":"Groupe de l\xE9gende r\xE9duit","legend.alert.layerAdded":"{name} couche ajout\xE9e \xE0 la l\xE9gende","legend.alert.layerRemoved":"Couche {name} retir\xE9 de la l\xE9gende"}};class T extends S{added(){this.$iApi.component("legend-nav-button",E),this.$iApi.panel.register({legend:{screens:{"legend-screen":()=>w(import("./screen-LD-a9yAa.js"))},style:{width:"350px"},alertName:"legend.title",button:{tooltip:"legend.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" /></svg>'}}},{i18n:{messages:M}}),this._parseConfig(this.config!==void 0?JSON.parse(JSON.stringify(this.config)):void 0);const e=this.$vApp.$watch(()=>this.config,l=>this._parseConfig(l!==void 0?JSON.parse(JSON.stringify(l)):void 0));this.removed=()=>{e(),this.$iApi.fixture.exists("appbar")&&_(this.$vApp.$pinia).removeButton("legend"),this.$iApi.fixture.exists("mapnav")&&C(this.$vApp.$pinia).removeItem("legend"),a().$reset(),this.$iApi.panel.remove("legend")}}}export{T as default};
