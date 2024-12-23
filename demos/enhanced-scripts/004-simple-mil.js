/*
Test 04: Simple Map Image Layers
- Loads one map image layer from EcoGeo.
- Has two sublayers, distinct bound legend blocks (no treegrow)
 */

// https://maps-cartes.ec.gc.ca/arcgis/rest/services/STB_AST_Dec2016/Projected_change_temperature/MapServer
// ask on STB storylines what happened to it
// https://maps-cartes.ec.gc.ca/arcgis/rest/services/STB_AST_Dec2016/

const runPreTest = (config, options, utils) => {
    const bailley = {
        name: 'Bailley ESRIfied GRD',
        id: 'Bailley',
        layerType: 'esri-map-image',
        url: 'https://ecqcj8ywvwsd025.ncr.int.ec.gc.ca:6443/arcgis/rest/services/CESI_Temp/MapServer',
        state: {
            opacity: 0.95
        },
        sublayers: [{ index: 1 }],
        fixtures: {
            details: {
                template: 'RasterGRD'
            }
        }
    };

    utils.addLayerLegend(bailley);

    return { config, options };
};

const runPostTest = (instance, utils) => {
    // template for raster nonsense
    // identifyData is an IdentifyItem

    /*
{
    format,
    data: payload,
    started: true,
    loaded: true,
    loading: doneThanksPromise,
    load() {
        return doneThanksPromise;
    }
};
*/

    instance.$element.component('RasterGRD', {
        props: ['identifyData'],
        template: `
            <div>
                <span>This is the data.</span>
                 
                <p v-if="this.identifyData.loaded" >{{JSON.stringify(this.identifyData.data)}} </p>
                <p v-else>Loading...</p>
            </div>
        `
    });
};

export { runPreTest, runPostTest };
