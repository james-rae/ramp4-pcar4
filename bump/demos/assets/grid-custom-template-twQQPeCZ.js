import{g as t,d as a}from"./main-CdIhtOSF.js";import"./preload-helper-ExcqyqRp.js";window.debugInstance=null;let s={configs:{en:{map:{extentSets:[{id:"EXT_ESRI_World_AuxMerc_3857",default:{xmax:-5007771626060756e-9,xmin:-16632697354854e-6,ymax:10015875184845109e-9,ymin:5022907964742964e-9,spatialReference:{wkid:102100,latestWkid:3857}}}],lodSets:[{id:"LOD_ESRI_World_AuxMerc_3857",lods:t.defaultLODs(t.defaultTileSchemas()[1])}],tileSchemas:[{id:"DEFAULT_ESRI_World_AuxMerc_3857",name:"Web Mercator Maps",extentSetId:"EXT_ESRI_World_AuxMerc_3857",lodSetId:"LOD_ESRI_World_AuxMerc_3857",thumbnailTileUrls:["/tile/8/91/74","/tile/8/91/75"]}],basemaps:[{id:"esriImagery",tileSchemaId:"DEFAULT_ESRI_World_AuxMerc_3857",layers:[{layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"}]}],initialBasemapId:"esriImagery"},layers:[{id:"WFSLayer",layerType:"ogc-wfs",url:"https://api.weather.gc.ca/collections/hydrometric-stations/items?offset=6000",xyInAttribs:!0,colour:"#FF5555",customRenderer:{},fixtures:{grid:{title:"Datatable for WFS features",columns:[{field:"links",title:"Links",width:600,template:"links-template"},{field:"STATION_NAME",title:"Station Name",template:"station-name-template"}]}}}],fixtures:{legend:{root:{children:[{layerId:"WFSLayer",name:"WFSLayer"},{infoType:"text",content:"The above layer's grid has custom templating for the links and station name columns."}]}},appbar:{items:["legend"]},mapnav:{items:["fullscreen","legend","home","basemap"]}},system:{exposeOid:!0}}}},l={loadDefaultFixtures:!1,loadDefaultEvents:!0};const e=a(document.getElementById("app"),s,l);e.fixture.addDefaultFixtures(["mapnav","legend","appbar","grid","details","wizard"]).then(()=>{e.panel.open("legend")});e.$element.component("links-template",{props:["params"],mounted(){},template:`<div class="my-4" v-focus-list >
        <p v-for="(val, idx) in JSON.parse(params.value)" :key="idx" class="whitespace-pre-wrap leading-none mb-8">
            <a v-focus-item target="_blank" :href="val.href">{{ val.title }}</a>
        </p>
    </div>`});e.$element.component("station-name-template",{props:["params"],template:`
        <div class="mb-8">
            <span>Surprise!</span>
            <img src="https://i.imgur.com/WtY0tdC.gif" />
        </div>
    `});window.debugInstance=e;
