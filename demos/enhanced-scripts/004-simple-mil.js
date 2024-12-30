/*
Test 04: Simple Map Image Layers
- Loads one map image layer from EcoGeo.
- Has two sublayers, distinct bound legend blocks (no treegrow)
 */

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
    instance.$element.component('RasterGRD', {
        props: ['identifyData'],
        data() {
            return {
                result: { value: '', internet: '' },
                loaded: false,
                watchers: []
            };
        },
        template: `
            <div>
                <span>This is the data.</span>
                 
                <p v-if="this.loaded" >{{this.result.value}}. And from the internet: {{this.internet}}</p>
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
                    value: JSON.stringify(this.identifyData.data),
                    internet: ''
                };

                const request = new Request(
                    'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/6/1?f=json'
                );
                const answer = await fetch(request);
                const jsonanswer = await answer.json();
                this.result.internet = jsonanswer?.feature?.attributes?.Name ?? 'Something goofed';

                this.loaded = true;
            }
        }
    });
};

export { runPreTest, runPostTest };
