import{F as m,f9 as n,f6 as u,f7 as b}from"./main-DaZH2qzH.js";import{T as o}from"./table-state-manager-CYJ24Yv5.js";class x extends m{gridStore=n(this.$vApp.$pinia);toggleGrid(e,l){const i=this.gridStore.getGridId(e);if(!i){const d=this.getLayerFixtureConfigs();this.gridStore.addGrid({id:e,layerIds:[e],state:new o(d[e]),fieldMap:{}})}const t=this.gridStore.currentId;this.gridStore.currentId=i??e;const a=this.$iApi.panel.get("grid");if(l===!1){a.close();return}!a.isOpen||!a.isVisible?this.$iApi.panel.open("grid"):t!==e||l===!0?a.show({screen:"grid-screen",props:{key:e}}):a.close()}_parseConfig(e){this.handlePanelWidths(["grid"]),this.handlePanelTeleports(["grid"]);const l=this.getLayerFixtureConfigs();e&&e.mergeGrids&&e.mergeGrids.forEach(i=>{const t=[],{gridId:a,layers:d,fieldMap:h,options:p}=i;d.forEach(r=>{r.sublayers?r.sublayers?.forEach(s=>{t.push(`${r.layerId}-${s}`),delete l[`${r.layerId}-${s}`]}):(t.push(r.layerId),delete l[r.layerId])});const g={};h?.forEach(r=>{r.sources.forEach(s=>{g[s]=r.field})});const f={id:a,layerIds:t,state:new o(p),fieldMap:g};this.gridStore.addGrid(f)}),Object.keys(l).forEach(i=>{const t={id:i,layerIds:[i],state:new o(l[i]),fieldMap:{}};this.gridStore.addGrid(t)})}}const y={en:{"grid.title":"Datatable","grid.alertName":"Grid","grid.splash.error":"Error: Failed to load the layer's data.","grid.splash.loading":"Loading data...","grid.splash.building":"Building table...","grid.splash.cancel":"Cancel","grid.search.clear":"Clear search filter","grid.clearAll":"Clear search and filters","grid.layer.loading":"The layer is loading...","grid.label.pinColumns":"Pin columns","grid.label.export":"Export","grid.label.columns":"Hide columns","grid.label.copied":"Copied","grid.label.copy":"Press ctrl + c or double click to copy","grid.label.specialColumn":"Special Column","grid.label.filters.show":"Show filters","grid.label.filters.hide":"Hide filters","grid.label.filters.apply":"Apply filters to map","grid.header.sort.0":"Sort ascending","grid.header.sort.1":"Sort descending","grid.header.sort.2":"Sort default","grid.header.reorder.left":"Move left","grid.header.reorder.right":"Move right","grid.filters.label.global":"Search table","grid.filters.column.label.text":"Search {0}...","grid.filters.clear":"Clear filters","grid.filters.number.max":"Max","grid.filters.number.min":"Min","grid.filters.date.max":"Max Date","grid.filters.date.min":"Min Date","grid.filters.label.info":"{range} of {total} entries shown","grid.filters.label.filtered":"(filtered from {max} total entries)","grid.filters.label.extent":"Filter by extent","grid.cells.controls":"Use arrow keys to navigate grid cells. Press Tab to proceed","grid.cells.zoom":"Zoom to feature","grid.cells.zoom.zooming":"Zooming...","grid.cells.zoom.error":"Zoom failed","grid.cells.zoom.zoomed":"Zoomed","grid.cells.alert.zoom":"Zoomed into feature","grid.cells.details":"Details","grid.button.title":"Grid"},fr:{"grid.title":"Tableau de donn\xE9es","grid.alertName":"Grille","grid.splash.error":"Erreur\xA0: \xC9chec du chargement des donn\xE9es de la couche.","grid.splash.loading":"Chargement des donn\xE9es...","grid.splash.building":"Cr\xE9ation du tableau...","grid.splash.cancel":"Annuler","grid.search.clear":"Effacer le filtre de recherche","grid.clearAll":"Effacer la recherche et les filtres","grid.layer.loading":"La couche est en cours de t\xE9l\xE9chargement...","grid.label.pinColumns":"\xC9pingler les colonnes","grid.label.export":"Exporter","grid.label.columns":"Masquer les colonnes","grid.label.copied":"Copi\xE9","grid.label.copy":"Appuyez sur Ctrl + C ou double-cliquez pour copier","grid.label.specialColumn":"Colonne sp\xE9ciale","grid.label.filters.show":"Afficher les filtres","grid.label.filters.hide":"Masquer les filtres","grid.label.filters.apply":"Appliquer les filtres \xE0 la carte","grid.header.sort.0":"Tri ascendant","grid.header.sort.1":"Tri descendant","grid.header.sort.2":"Tri par d\xE9faut","grid.header.reorder.left":"D\xE9placer vers la gauche","grid.header.reorder.right":"D\xE9placer vers la droite","grid.filters.label.global":"Tableau de recherche","grid.filters.column.label.text":"Rechercher {0}...","grid.filters.clear":"Supprimer les filtres","grid.filters.number.max":"Max","grid.filters.number.min":"Min","grid.filters.date.max":"Date max","grid.filters.date.min":"Date min","grid.filters.label.info":"{range} de {total} saisies affich\xE9es","grid.filters.label.filtered":"(filtr\xE9 \xE0 partir d'un total de {max} saisies)","grid.filters.label.extent":"Filtrer par \xE9tendue","grid.cells.controls":"Utilisez les fl\xE8ches pour parcourir les cellules de la grille. Appuyez sur Tab pour continuer","grid.cells.zoom":"Zoom \xE0 l'\xE9l\xE9ment","grid.cells.zoom.zooming":"Zoom en cours...","grid.cells.zoom.error":"\xC9chec du zoom","grid.cells.zoom.zoomed":"Zoom termin\xE9","grid.cells.alert.zoom":"Zoom sur la caract\xE9ristique","grid.cells.details":"D\xE9tails","grid.button.title":"Grille"}};class z extends x{async added(){this.$iApi.panel.register({grid:{screens:{"grid-screen":()=>u(import("./screen-Db-GVusd.js"))},style:{width:"450px"},controls:{expand:!0},button:{tooltip:"grid.button.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /> <path d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z" /></svg>'},expanded:!0,alertName:"grid.alertName"}},{i18n:{messages:y}}),this._parseConfig(this.config)}removed(){this.$iApi.fixture.exists("appbar")&&b(this.$vApp.$pinia).removeButton("grid"),n(this.$vApp.$pinia).$reset(),this.$iApi.panel.remove("grid")}}export{z as default};
