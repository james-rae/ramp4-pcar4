const c=(r,a,e)=>{const s={id:"EcoGeo",layerType:"esri-map-image",url:"https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/EcoAction/MapServer/",sublayers:[{index:6},{index:8}]};return e.addLayer(s),e.addLegend({layerId:"EcoGeo",sublayerIndex:6}),e.addLegend({layerId:"EcoGeo",sublayerIndex:8}),{config:r,options:a}},d=()=>{};export{d as runPostTest,c as runPreTest};
