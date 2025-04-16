import{g as e,d as r}from"./main-CSU-shzQ.js";import"./preload-helper-ExcqyqRp.js";window.debugInstance=null;let s={configs:{en:{map:{extentSets:[{id:"EXT_ESRI_World_AuxMerc_3857",default:{xmax:-5007771626060756e-9,xmin:-16632697354854e-6,ymax:10015875184845109e-9,ymin:5022907964742964e-9,spatialReference:{wkid:102100,latestWkid:3857}}},{id:"EXT_NRCAN_Lambert_3978",default:{xmax:3549492,xmin:-2681457,ymax:3482193,ymin:-883440,spatialReference:{wkid:3978}}}],caption:{mapCoords:{formatter:"WEB_MERCATOR"},scaleBar:{imperialScale:!0}},mapMouseThrottle:200,lodSets:[{id:"LOD_NRCAN_Lambert_3978",lods:e.defaultLODs(e.defaultTileSchemas()[0])},{id:"LOD_ESRI_World_AuxMerc_3857",lods:e.defaultLODs(e.defaultTileSchemas()[1])}],tileSchemas:[{id:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978",name:"Lambert Maps",extentSetId:"EXT_NRCAN_Lambert_3978",lodSetId:"LOD_NRCAN_Lambert_3978",thumbnailTileUrls:["/tile/8/285/268","/tile/8/285/269"],hasNorthPole:!0},{id:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857",name:"Web Mercator Maps",extentSetId:"EXT_ESRI_World_AuxMerc_3857",lodSetId:"LOD_ESRI_World_AuxMerc_3857",thumbnailTileUrls:["/tile/8/91/74","/tile/8/91/75"]}],basemaps:[{id:"baseNrCan",name:"Canada Base Map - Transportation (CBMT)",description:"The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.",altText:"The Canada Base Map - Transportation (CBMT)",layers:[{id:"CBMT",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseSimple",name:"Canada Base Map - Simple",description:"Canada Base Map - Simple",altText:"Canada base map - Simple",layers:[{id:"SMR",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/Simple/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseCBME_CBCE_HS_RO_3978",name:"Canada Base Map - Elevation (CBME)",description:"The Canada Base Map - Elevation (CBME) web mapping services of the Earth Sciences Sector at Natural Resources Canada, is intended primarily for online mapping application users and developers.",altText:"Canada Base Map - Elevation (CBME)",layers:[{id:"CBME_CBCE_HS_RO_3978",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseCBMT_CBCT_GEOM_3978",name:"Canada Base Map - Transportation (CBMT)",description:" The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.",altText:"Canada Base Map - Transportation (CBMT)",layers:[{id:"CBMT_CBCT_GEOM_3978",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseEsriWorld",name:"World Imagery",description:"World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.",altText:"World Imagery",layers:[{id:"World_Imagery",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857",attribution:{text:{disabled:!0},logo:{disabled:!0}}},{id:"baseEsriPhysical",name:"World Physical Map",description:"This map presents the Natural Earth physical map at 1.24km per pixel for the world and 500m for the coterminous United States.",altText:"World Physical Map",layers:[{id:"World_Physical_Map",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriRelief",name:"World Shaded Relief",description:"This map portrays surface elevation as shaded relief. This map is used as a basemap layer to add shaded relief to other GIS maps, such as the ArcGIS Online World Street Map.",altText:"World Shaded Relief",layers:[{id:"World_Shaded_Relief",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriStreet",name:"World Street Map",description:"This worldwide street map presents highway-level data for the world.",altText:"ESWorld Street Map",layers:[{id:"World_Street_Map",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriTerrain",name:"World Terrain Base",description:"This map is designed to be used as a base map by GIS professionals to overlay other thematic layers such as demographics or land cover.",altText:"World Terrain Base",layers:[{id:"World_Terrain_Base",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriTopo",name:"World Topographic Map",description:"This map is designed to be used as a basemap by GIS professionals and as a reference map by anyone.",altText:"World Topographic Map",layers:[{id:"World_Topo_Map",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseOpenStreetMap",name:"OpenStreetMap",description:"Open sourced topographical map.",altText:"OpenStreetMap",layers:[{id:"Open_Street_Map",layerType:"osm-tile"}],thumbnailUrl:"https://www.openstreetmap.org/assets/about/osm-a74d2c94082260032c133b9d206ee2fdd911e5c82bf03daae10393a02d7b4809.png",tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"}],initialBasemapId:"baseEsriWorld"},layers:[{id:"Nature",name:"Feature Layer with Name and Description",layerType:"esri-feature",url:"https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/EcoAction/MapServer/6",fieldMetadata:{fieldInfo:[{name:"Name"},{name:"Description"}],exclusiveFields:!0}},{id:"EcoGeo",layerType:"esri-map-image",url:"https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/EcoAction/MapServer/",sublayers:[{index:8,name:"Map Image Sublayer with Category and Group",fieldMetadata:{fieldInfo:[{name:"Category"},{name:"Group_",alias:"Group"}],exclusiveFields:!0}}]},{id:"CSV",name:"File Layer with X and Y",layerType:"file-csv",url:"../file-layers/csv.csv",latField:"Y",longField:"X",colour:"#FF0000",fieldMetadata:{fieldInfo:[{name:"X"},{name:"Y"}],exclusiveFields:!0}}],fixtures:{legend:{root:{children:[{layerId:"Nature"},{layerId:"EcoGeo",sublayerIndex:8},{layerId:"CSV"}]}},appbar:{items:["legend","geosearch","basemap","export","layer-reorder"]},mapnav:{items:["fullscreen","geolocator","help","home","basemap","legend","geosearch"]},export:{title:{value:"Enjoy this Export",selectable:!1},legend:{selected:!1},fileName:"ramp-pcar-4-map-carte"},help:{location:"../help"}},panels:{open:[{id:"legend",pin:!0}]},system:{animate:!0}}}},t={loadDefaultFixtures:!0,loadDefaultEvents:!0,startRequired:!1};const a=r(document.getElementById("app"),s,t);a.fixture.add("export");window.debugInstance=a;
