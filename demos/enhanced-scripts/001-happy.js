/*
Test 01: Happy
- Loads Happy.json layer in the legend. Very basic. Test 1 for fast loadup.
 */

const runPreTest = (config, options, utils) => {
    const happy = {
        id: 'Happy',
        name: 'Bailley Spikes',
        layerType: 'esri-feature',
        url: 'https://ecqcj8ywvwsd025.ncr.int.ec.gc.ca:6443/arcgis/rest/services/WQMS_Test/MapServer/1'
    };
    utils.addLayerLegend(happy);

    const milparty = {
        id: 'milparty',
        name: 'Bailley Spikes MIL',
        layerType: 'esri-map-image',
        url: 'https://ecqcj8ywvwsd025.ncr.int.ec.gc.ca:6443/arcgis/rest/services/WQMS_Test/MapServer/',
        sublayers: [{ index: 1, name: 'Lovely and Spikey' }]
    };
    utils.addLayerLegend(milparty);

    return { config, options };
};

const runPostTest = () => {
    // Not used in this test
};

export { runPreTest, runPostTest };
