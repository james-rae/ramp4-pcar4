import{g as a,d as i}from"./main-BZJ3Qd5K.js";import"./preload-helper-ExcqyqRp.js";window.debugInstance=null;let l={configs:{en:{map:{extentSets:[{id:"EXT_ESRI_World_AuxMerc_3857",default:{xmax:-5007771626060756e-9,xmin:-16632697354854e-6,ymax:10015875184845109e-9,ymin:5022907964742964e-9,spatialReference:{wkid:102100,latestWkid:3857}}},{id:"EXT_NRCAN_Lambert_3978",default:{xmax:3549492,xmin:-2681457,ymax:3482193,ymin:-883440,spatialReference:{wkid:3978}}}],caption:{mapCoords:{formatter:"WEB_MERCATOR"},scaleBar:{imperialScale:!0}},lodSets:[{id:"LOD_NRCAN_Lambert_3978",lods:a.defaultLODs(a.defaultTileSchemas()[0])},{id:"LOD_ESRI_World_AuxMerc_3857",lods:a.defaultLODs(a.defaultTileSchemas()[1])}],tileSchemas:[{id:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978",name:"Lambert Maps",extentSetId:"EXT_NRCAN_Lambert_3978",lodSetId:"LOD_NRCAN_Lambert_3978",thumbnailTileUrls:["/tile/8/285/268","/tile/8/285/269"],hasNorthPole:!0},{id:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857",name:"Web Mercator Maps",extentSetId:"EXT_ESRI_World_AuxMerc_3857",lodSetId:"LOD_ESRI_World_AuxMerc_3857",thumbnailTileUrls:["/tile/8/91/74","/tile/8/91/75"]}],basemaps:[{id:"baseNrCan",name:"Canada Base Map - Transportation (CBMT)",description:"The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.",altText:"The Canada Base Map - Transportation (CBMT)",layers:[{id:"CBMT",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseSimple",name:"Canada Base Map - Simple",description:"Canada Base Map - Simple",altText:"Canada base map - Simple",layers:[{id:"SMR",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/Simple/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseCBME_CBCE_HS_RO_3978",name:"Canada Base Map - Elevation (CBME)",description:"The Canada Base Map - Elevation (CBME) web mapping services of the Earth Sciences Sector at Natural Resources Canada, is intended primarily for online mapping application users and developers.",altText:"Canada Base Map - Elevation (CBME)",layers:[{id:"CBME_CBCE_HS_RO_3978",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseCBMT_CBCT_GEOM_3978",name:"Canada Base Map - Transportation (CBMT)",description:" The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.",altText:"Canada Base Map - Transportation (CBMT)",layers:[{id:"CBMT_CBCT_GEOM_3978",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseEsriWorld",name:"World Imagery",description:"World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.",altText:"World Imagery",layers:[{id:"World_Imagery",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857",attribution:{text:{disabled:!0},logo:{disabled:!0}}},{id:"baseEsriPhysical",name:"World Physical Map",description:"This map presents the Natural Earth physical map at 1.24km per pixel for the world and 500m for the coterminous United States.",altText:"World Physical Map",layers:[{id:"World_Physical_Map",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriRelief",name:"World Shaded Relief",description:"This map portrays surface elevation as shaded relief. This map is used as a basemap layer to add shaded relief to other GIS maps, such as the ArcGIS Online World Street Map.",altText:"World Shaded Relief",layers:[{id:"World_Shaded_Relief",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriStreet",name:"World Street Map",description:"This worldwide street map presents highway-level data for the world.",altText:"ESWorld Street Map",layers:[{id:"World_Street_Map",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriTerrain",name:"World Terrain Base",description:"This map is designed to be used as a base map by GIS professionals to overlay other thematic layers such as demographics or land cover.",altText:"World Terrain Base",layers:[{id:"World_Terrain_Base",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriTopo",name:"World Topographic Map",description:"This map is designed to be used as a basemap by GIS professionals and as a reference map by anyone.",altText:"World Topographic Map",layers:[{id:"World_Topo_Map",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseOpenStreetMap",name:"OpenStreetMap",description:"Open sourced topographical map.",altText:"OpenStreetMap",layers:[{id:"Open_Street_Map",layerType:"osm-tile"}],thumbnailUrl:"https://www.openstreetmap.org/assets/about/osm-a74d2c94082260032c133b9d206ee2fdd911e5c82bf03daae10393a02d7b4809.png",tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"}],initialBasemapId:"baseEsriWorld"},layers:[{id:"WaterQuantity",layerType:"esri-map-image",url:"https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer",sublayers:[{index:1,name:"Water quantity child",state:{opacity:1,visibility:!0},fixtures:{details:{template:"Water-Quantity-Template"},settings:{controls:["visibility","opacity"]}}},{index:9,name:"Carbon monoxide emissions by facility",state:{opacity:.5,visibility:!0},disabledControls:["opacity"]}],state:{opacity:1,visibility:!0},metadata:{url:"https://raw.githubusercontent.com/ramp4-pcar4/ramp4-pcar4/main/README.md",name:"Read Me!"},customRenderer:{}},{id:"WaterQuality",layerType:"esri-map-image",url:"https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer",sublayers:[{index:5,state:{}}],state:{opacity:1,visibility:!0},customRenderer:{}},{id:"CleanAir",layerType:"esri-feature",url:"https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/9",state:{opacity:.8,visibility:!0,hovertips:!1},mouseTolerance:10,customRenderer:{}},{id:"WFSLayer",layerType:"ogc-wfs",url:"https://api.weather.gc.ca//collections/ahccd-trends/items?measurement_type__type_mesure=total_precip&period__periode=Ann&startindex=0&limit=1000&province__province=on",xyInAttribs:!0,state:{visibility:!0},customRenderer:{},metadata:{url:"https://raw.githubusercontent.com/ramp4-pcar4/ramp4-pcar4/main/README.md"},fixtures:{details:{template:"WFSLayer-Custom"}}}],fixtures:{legend:{root:{children:[{name:"Visibility Set",exclusive:!0,children:[{layerId:"CleanAir",name:"Clean Air in Set",disabledLayerControls:["boundaryZoom"]},{name:"Group in Set",children:[{layerId:"WaterQuantity",name:"Water Quantity in Nested Group",sublayerIndex:1,layerControls:["datatable","metadata","reload","remove","settings","symbology"]},{layerId:"WaterQuantity",name:"CO2 in Nested Group",sublayerIndex:9},{layerId:"WaterQuality",name:"Water Quality in Nested Group",sublayerIndex:5}]}]},{layerId:"WFSLayer",name:"WFSLayer",layerControls:["metadata","boundaryZoom","refresh","reload","remove","datatable","settings","symbology"]}]}},appbar:{items:["legend","geosearch"]},mapnav:{items:["fullscreen","geolocator","help","home","basemap"]},export:{title:{value:"All Your Base are Belong to Us",selectable:!1},legend:{selected:!1},fileName:"ramp-pcar-4-map-carte"},help:{location:"../help"}},system:{animate:!0}}}},o={loadDefaultFixtures:!0,loadDefaultEvents:!0,startRequired:!1},t;const e=new IntersectionObserver(s=>{s.forEach(r=>{r.isIntersecting&&(t=i(r.target,l,o),e.unobserve(r.target))})});e.observe(document.getElementById("app"));e.observe(document.getElementById("app2"));e.observe(document.getElementById("app3"));e.observe(document.getElementById("app4"));e.observe(document.getElementById("app5"));e.observe(document.getElementById("app6"));e.observe(document.getElementById("app7"));e.observe(document.getElementById("app8"));e.observe(document.getElementById("app9"));window.debugInstance=t;