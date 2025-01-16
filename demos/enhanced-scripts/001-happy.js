/*
Test 01: Happy
- Loads Happy.json layer in the legend. Very basic. Test 1 for fast loadup.
 */

const runPreTest = (config, options, utils) => {
    const dots = {
        id: 'Dots',
        name: 'Bailley Dots',
        layerType: 'esri-feature',
        url: 'https://ecqcj8ywvwsd025.ncr.int.ec.gc.ca:6443/arcgis/rest/services/WQMS_Test/MapServer/1',
        customRenderer: {
            type: 'simple',
            label: 'A Dot',
            symbol: {
                type: 'esriSMS',
                style: 'esriSMSCircle',
                color: [147, 50, 168, 255],
                size: 4,
                angle: 0,
                xoffset: 0,
                yoffset: 0,
                outline: {
                    color: [255, 225, 0, 255],
                    width: 0
                }
            }
        },
        state: { visibility: false }
    };
    utils.addLayerLegend(dots);

    const happy = {
        id: 'Happy',
        name: 'Bailley Spikes',
        layerType: 'esri-feature',
        url: 'https://ecqcj8ywvwsd025.ncr.int.ec.gc.ca:6443/arcgis/rest/services/WQMS_Test/MapServer/1',
        customRenderer: {
            type: 'classBreaks',
            field: 'PFAS',
            minValue: -999,
            classBreakInfos: [
                {
                    classMaxValue: 1,
                    label: 'Up to 1',
                    symbol: {
                        type: 'esriSMS',
                        color: [23, 19, 254, 64],
                        angle: 180,
                        xoffset: 0,
                        yoffset: 3,
                        size: 6,
                        style: 'esriSMSPath',
                        path: 'M 0 0 L 8 18 L 16 0 Z',
                        outline: { type: 'esriSLS', color: [23, 19, 254, 255], width: 1, style: 'esriSLSSolid' }
                    }
                },
                {
                    classMaxValue: 3,
                    label: 'Up to 3',
                    symbol: {
                        type: 'esriSMS',
                        color: [46, 19, 235, 64],
                        angle: 180,
                        xoffset: 0,
                        yoffset: 7,
                        size: 14,
                        style: 'esriSMSPath',
                        path: 'M 0 0 L 3.45 18 L 6.9 0 Z',
                        outline: { type: 'esriSLS', color: [46, 19, 235, 255], width: 1, style: 'esriSLSSolid' }
                    }
                },
                {
                    classMaxValue: 5,
                    label: 'Up to 5',
                    symbol: {
                        type: 'esriSMS',
                        color: [80, 20, 206, 64],
                        angle: 180,
                        xoffset: 0,
                        yoffset: 11,
                        size: 22,
                        style: 'esriSMSPath',
                        path: 'M 0 0 L 2.2 18 L 4.4 0 Z',
                        outline: { type: 'esriSLS', color: [80, 20, 206, 255], width: 1, style: 'esriSLSSolid' }
                    }
                },
                {
                    classMaxValue: 7,
                    label: 'Up to 7',
                    symbol: {
                        type: 'esriSMS',
                        color: [104, 20, 188, 64],
                        angle: 180,
                        xoffset: 0,
                        yoffset: 14,
                        size: 28,
                        style: 'esriSMSPath',
                        path: 'M 0 0 L 1.7 18 L 3.4 0 Z',
                        outline: { type: 'esriSLS', color: [104, 20, 188, 255], width: 1, style: 'esriSLSSolid' }
                    }
                },
                {
                    classMaxValue: 9,
                    label: 'Up to 9',
                    symbol: {
                        type: 'esriSMS',
                        color: [138, 20, 159, 64],
                        angle: 180,
                        xoffset: 0,
                        yoffset: 18,
                        size: 36,
                        style: 'esriSMSPath',
                        path: 'M 0 0 L 1.35 18 L 2.7 0 Z',
                        outline: { type: 'esriSLS', color: [138, 20, 159, 255], width: 1, style: 'esriSLSSolid' }
                    }
                },
                {
                    classMaxValue: 12,
                    label: 'Up to 12',
                    symbol: {
                        type: 'esriSMS',
                        color: [184, 20, 121, 64],
                        angle: 180,
                        xoffset: 0,
                        yoffset: 24,
                        size: 48,
                        style: 'esriSMSPath',
                        path: 'M 0 0 L 1 18 L 2 0 Z',
                        outline: { type: 'esriSLS', color: [184, 20, 121, 255], width: 1, style: 'esriSLSSolid' }
                    }
                },
                {
                    classMaxValue: 15,
                    label: 'Up to 15',
                    symbol: {
                        type: 'esriSMS',
                        color: [218, 21, 92, 64],
                        angle: 180,
                        xoffset: 0,
                        yoffset: 32,
                        size: 64,
                        style: 'esriSMSPath',
                        path: 'M 0 0 L 0.75 18 L 1.5 0 Z',
                        outline: { type: 'esriSLS', color: [218, 21, 92, 255], width: 1, style: 'esriSLSSolid' }
                    }
                },
                {
                    classMaxValue: 18,
                    label: 'Up to 18',
                    symbol: {
                        type: 'esriSMS',
                        color: [253, 21, 64, 64],
                        angle: 180,
                        xoffset: 0,
                        yoffset: 40,
                        size: 80,
                        style: 'esriSMSPath',
                        path: 'M 0 0 L 0.6 18 L 1.2 0 Z',
                        outline: { type: 'esriSLS', color: [253, 21, 64, 255], width: 1, style: 'esriSLSSolid' }
                    }
                },
                {
                    classMaxValue: 25,
                    label: 'Up to 25',
                    symbol: {
                        type: 'esriSMS',
                        color: [253, 21, 64, 64],
                        angle: 180,
                        xoffset: 0,
                        yoffset: 48,
                        size: 96,
                        style: 'esriSMSPath',
                        path: 'M 0 0 L 0.5 18 L 1 0 Z',
                        outline: { type: 'esriSLS', color: [253, 21, 64, 255], width: 1, style: 'esriSLSSolid' }
                    }
                }
            ]
        }
    };
    utils.addLayerLegend(happy);

    const milparty = {
        id: 'milparty',
        name: 'Bailley Spikes MIL',
        layerType: 'esri-map-image',
        url: 'https://ecqcj8ywvwsd025.ncr.int.ec.gc.ca:6443/arcgis/rest/services/WQMS_Test/MapServer/',
        sublayers: [{ index: 1, name: 'Lovely and Spikey' }],

        state: { visibility: false }
    };
    utils.addLayerLegend(milparty);

    return { config, options };
};

const runPostTest = () => {
    // Not used in this test
};

export { runPreTest, runPostTest };
