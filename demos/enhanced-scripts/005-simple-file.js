/*
Test 05: Simple File Layers
- Loads three file layers. A CSV, a GeoJSON, and a zipped Shape
 */

const runPreTest = (config, options, utils) => {
    const cangrid = {
        id: 'cangrid',
        name: 'CanGrid GeoJson',
        nameField: 'keyval',
        layerType: 'file-geojson',
        url: '../file-layers/cangrid_t202213.json',
        state: {
            opacity: 1,
            hovertips: false
        },
        caching: false,
        customRenderer: {
            type: 'simple',
            symbol: {
                type: 'esriSFS',
                style: 'esriSFSSolid',
                color: [255, 255, 255, 1], // transparent
                outline: {
                    color: [5, 5, 5, 255],
                    width: 1
                }
            }
        }
    };

    const toms = {
        name: 'CCCS CanGrid Service',
        controls: ['visibility', 'opacity', 'settings', 'symbology'],
        state: {
            opacity: 0.95,
            identify: false
        },
        id: 'CanGRID_tmean_ANN_en',
        url: 'https://geo.weather.gc.ca/geomet-climate?SERVICE=WMS&VERSION=1.3.0',
        layerType: 'ogc-wms',
        featureInfoMimeType: 'application/json',
        sublayers: [
            {
                id: 'CANGRD.TREND.TM_ANNUAL'
            }
        ]
    };

    const bailley = {
        name: 'Bailley ESRIfied GRD',
        id: 'Bailley',
        layerType: 'esri-map-image',
        url: 'https://ecqcj8ywvwsd025.ncr.int.ec.gc.ca:6443/arcgis/rest/services/CESI_Temp/MapServer',
        state: {
            opacity: 0.95
        },
        sublayers: [{ index: 1 }]
    };

    utils.addLayerLegend(toms);
    utils.addLayerLegend(bailley);
    utils.addLayerLegend(cangrid);

    return { config, options };
};

const runPostTest = (instance, utils) => {
    // Not used in this test
};

export { runPreTest, runPostTest };
