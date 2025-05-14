/*
Test 01: Happy
- Loads Happy.json layer in the legend. Very basic. Test 1 for fast loadup.
 */

const runPreTest = (config, options, utils) => {
    const happy = {
        id: 'Happy',
        name: 'FSA Squares',
        layerType: 'esri-feature',
        url: 'https://maps-cartes.dev.ec.gc.ca/arcgis/rest/services/CCDS/FSA_Boundaries_RTA_Limites_StatsCan_2021/MapServer/0',
        colour: '#6495ED',
        nameField: 'CFSAUID'
    };

    utils.addLayerLegend(happy);

    return { config, options };
};

const runPostTest = () => {
    // Not used in this test
};

export { runPreTest, runPostTest };
