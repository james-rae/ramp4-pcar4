const l=(a,r,e)=>{const n={id:"gjLatLong",name:"GeoJson LatLon",layerType:"file-geojson",url:"../file-layers/geojson.json",caching:!0,colour:"#00FF7F",nameField:"name"},s={id:"gjFancyCRS",name:"GeoJson CRS Great Lakes Albers",layerType:"file-geojson",url:"../file-layers/yarmouth.json",caching:!0,colour:"#FF8C00",nameField:"name"},t={id:"gjFancyWKT",name:"GeoJson WKT Great Lakes Albers",layerType:"file-geojson",url:"../file-layers/duffers.json",caching:!0,colour:"#008CAA",nameField:"name"},o={id:"fLatLong",layerType:"esri-feature",name:"Feature LatLon",url:"https://geoappext.nrcan.gc.ca/arcgis/rest/services/NACEI/energy_infrastructure_of_north_america_en/MapServer/5"},c={id:"fMerc",layerType:"esri-feature",name:"Feature Mercator",url:"https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/Oilsands/MapServer/0",permanentFilteredQuery:"OBJECTID < 100"},d={id:"fLambert",layerType:"esri-feature",name:"Feature Lambert",url:"https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/Surverses_des_egouts_unitaires_Combined_sewer_overflow/MapServer/34"};return e.addLayerLegend(o),e.addLayerLegend(c),e.addLayerLegend(d),e.addLayerLegend(n),e.addLayerLegend(s),e.addLayerLegend(t),{config:a,options:r}},i=(a,r)=>{};export{i as runPostTest,l as runPreTest};