import{g as r,d as a}from"./main-CUxU9bWS.js";import"./preload-helper-ExcqyqRp.js";window.debugInstance=null;let t={configs:{en:{map:{extentSets:[{id:"EXT_ESRI_World_AuxMerc_3857",default:{xmax:-5007771626060756e-9,xmin:-16632697354854e-6,ymax:10015875184845109e-9,ymin:5022907964742964e-9,spatialReference:{wkid:102100,latestWkid:3857}}}],lodSets:[{id:"LOD_ESRI_World_AuxMerc_3857",lods:r.defaultLODs(r.defaultTileSchemas()[1])}],tileSchemas:[{id:"DEFAULT_ESRI_World_AuxMerc_3857",name:"Web Mercator Maps",extentSetId:"EXT_ESRI_World_AuxMerc_3857",lodSetId:"LOD_ESRI_World_AuxMerc_3857",thumbnailTileUrls:["/tile/8/91/74","/tile/8/91/75"]}],basemaps:[{id:"esriImagery",tileSchemaId:"DEFAULT_ESRI_World_AuxMerc_3857",layers:[{layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"}]}],initialBasemapId:"esriImagery"},layers:[{id:"CarbonMonoxide",layerType:"esri-feature",url:"https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer/9",state:{opacity:1,visibility:!0},customRenderer:{}},{id:"CleanAir",layerType:"esri-feature",url:"https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/9",state:{opacity:.8,visibility:!0},customRenderer:{}},{id:"Shellfish",layerType:"esri-feature",url:"https://maps-cartes.ec.gc.ca/arcgis/rest/services/Shellfish_Classification_Mollusques/MapServer/1",state:{opacity:1,visibility:!0},customRenderer:{}}],fixtures:{legend:{root:{children:[{layerId:"CleanAir",name:"Clean Air"},{layerId:"CarbonMonoxide",name:"Carbon monoxide"},{layerId:"Shellfish",name:"Shellfish"}]}},appbar:{items:["legend"]}}}}},i={loadDefaultFixtures:!1,loadDefaultEvents:!0};const e=a(document.getElementById("app"),t,i);e.fixture.addDefaultFixtures(["legend","appbar","grid","layer-reorder","details"]).then(()=>{e.panel.open("legend")});window.debugInstance=e;
