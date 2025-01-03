/*
Test 04: Simple Map Image Layers
- Loads one map image layer from EcoGeo.
- Has two sublayers, distinct bound legend blocks (no treegrow)
 */

// https://maps-cartes.ec.gc.ca/arcgis/rest/services/STB_AST_Dec2016/Projected_change_temperature/MapServer
// ask on STB storylines what happened to it
// https://maps-cartes.ec.gc.ca/arcgis/rest/services/STB_AST_Dec2016/

//
// https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/OilsandsLambert/MapServer

const runPreTest = (config, options, utils) => {
    const bailley = {
        name: 'Bailley ESRIfied GRD',
        id: 'Bailley',
        layerType: 'esri-map-image',
        url: 'https://ecqcj8ywvwsd025.ncr.int.ec.gc.ca:6443/arcgis/rest/services/CESI_Temp/MapServer',
        state: {
            opacity: 0.95
        },
        sublayers: [
            {
                index: 0,
                name: '2022 GRD Source',
                fixtures: {
                    details: {
                        template: 'RasterGRD'
                    }
                }
            }
        ]
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
        data() {
            return {
                result: { value: '' },
                loaded: false,
                watchers: []
            };
        },
        template: `
            <div>
                <div v-if="this.loaded" >
                 
                
                    <h3>Cell Value: {{this.result.value}}</h3>
                    <hr />
                    <span>Trend Value: 1.2</span>
                    
                    <hr />
                    <h4>Historic Values</h4>
                    <ul>
                        <li>2022 --&gt; 1.4</li>
                        <li>2021 --&gt; 1.2</li>
                        <li>2020 --&gt; 1.2</li>
                        <li>2019 --&gt; 1.0</li>
                    </ul>
                </div>
                <p v-else>Loading...</p>
            </div>
        `,
        created() {
            this.watchers.push(
                this.$watch('identifyData', () => {
                    this.parseData();
                })
            );

            this.parseData();
        },
        beforeUnmount() {
            this.watchers.forEach(unwatch => unwatch());
        },
        methods: {
            async parseData() {
                this.loaded = false;
                await this.identifyData.loading;
                this.result = {
                    value: this.identifyData.data.pixel
                };

                this.loaded = true;
            }
        }
    });
};

export { runPreTest, runPostTest };
