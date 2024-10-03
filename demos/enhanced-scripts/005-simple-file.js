/*
Test 05: Simple File Layers
- Loads three file layers. A CSV, a GeoJSON, and a zipped Shape
 */

const runPreTest = (config, options, utils) => {
    const hex2esri = colourHex => {
        const s = colourHex.substring(0, 1) === '#' ? colourHex.substring(1) : colourHex;

        return [0, 2, 4, 6].map(i => {
            const hex = s.substring(i, i + 2);
            return hex.length === 0 ? 255 : parseInt(hex, 16);
        });
    };
    const zipGeoJson = {
        id: 'GeoZipson',
        name: 'Zipped GeoJson',
        nameField: 'zappy_name',
        colour: '#FF6E00',
        layerType: 'file-zip-geojson',
        url: '../file-layers/zgeojson.zip'
    };

    const shaderMcGhee = (colour, maxVal) => {
        return {
            classMaxValue: maxVal,
            symbol: {
                type: 'esriSFS',
                style: 'esriSFSSolid',
                color: hex2esri(colour),
                outline: {
                    color: [255, 190, 124, 255],
                    width: 1
                }
            },
            label: 'Top range ' + maxVal
        };
    };

    const colourRamp = [
        ['#0000FF', 0],
        ['#00FF00', 1],
        ['#FF0000', 100]
    ];

    const cangrid = {
        id: 'cangrid',
        name: 'CanGrid GeoJson',
        nameField: 'cellval',
        layerType: 'file-geojson',
        url: '../file-layers/cangrid_1202213.json',
        state: {
            opacity: 0.8
        },
        caching: false,
        customRenderer: {
            type: 'classBreaks',
            field: 'cellval',
            // all possible values must be covered
            minValue: -999,
            classBreakInfos: colourRamp.map(nugget => shaderMcGhee(nugget[0], nugget[1]))
        }
    };

    const toms = {
        name: 'CCCP CanGrid Service',
        controls: ['visibility', 'opacity', 'settings', 'symbology'],
        state: {
            opacity: 0.95,
            visibility: true,
            identify: true,
            hovertips: true
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

    utils.addLayerLegend(toms);
    utils.addLayerLegend(cangrid);

    return { config, options };
};

const runPostTest = (instance, utils) => {
    // Not used in this test
};

export { runPreTest, runPostTest };
