import { createInstance, geo } from '@/main';

window.debugInstance = null;

let config = {
    configs: {
        en: {
            map: {
                extentSets: [
                    {
                        id: 'EXT_ESRI_World_AuxMerc_3857',
                        default: {
                            xmax: -5007771.626060756,
                            xmin: -16632697.354854,
                            ymax: 10015875.184845109,
                            ymin: 5022907.964742964,
                            spatialReference: {
                                wkid: 102100,
                                latestWkid: 3857
                            }
                        }
                    }
                ],
                caption: {
                    mapCoords: {
                        formatter: 'WEB_MERCATOR'
                    },
                    scaleBar: {
                        imperialScale: true
                    }
                },
                mapMouseThrottle: 200,
                lodSets: [
                    {
                        id: 'LOD_ESRI_World_AuxMerc_3857',
                        lods: geo.defaultLODs(geo.defaultTileSchemas()[1])
                    }
                ],
                tileSchemas: [
                    {
                        id: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        name: 'Web Mercator Maps',
                        extentSetId: 'EXT_ESRI_World_AuxMerc_3857',
                        lodSetId: 'LOD_ESRI_World_AuxMerc_3857',
                        thumbnailTileUrls: ['/tile/8/91/74', '/tile/8/91/75']
                    }
                ],
                basemaps: [
                    {
                        id: 'baseEsriWorld',
                        name: 'World Imagery',
                        description:
                            'World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.',
                        altText: 'World Imagery',
                        layers: [
                            {
                                id: 'World_Imagery',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        attribution: {
                            text: {
                                disabled: true
                            },
                            logo: {
                                disabled: true
                            }
                        }
                    }
                ],
                initialBasemapId: 'baseEsriWorld'
            },
            layers: [
                {
                    id: 'ecogeo-nature',
                    name: 'settings',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/EcoAction/MapServer/6'
                },
                {
                    id: 'ecogeo-climate-change',
                    name: 'datatable',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/EcoAction/MapServer/7'
                },
                {
                    id: 'ecogeo-clean-water',
                    name: 'symbology',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/EcoAction/MapServer/8'
                },
                {
                    id: 'ecogeo-clean-air',
                    name: 'boundary zoom',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/EcoAction/MapServer/9'
                },
                {
                    id: 'e1',
                    name: 'remove',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer/9'
                },
                {
                    id: 'e2',
                    name: 'reload',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer/10'
                },
                {
                    id: 'e3',
                    name: 'visibility',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer/11',
                    fixtures: {
                        settings: {
                            disabledControls: ['visibility']
                        }
                    }
                },
                {
                    id: 'e4',
                    name: 'opacity',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer/12',
                    fixtures: {
                        settings: {
                            disabledControls: ['opacity']
                        }
                    }
                },
                {
                    id: 'e5',
                    name: 'identify',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer/13',
                    fixtures: {
                        settings: {
                            disabledControls: ['identify']
                        }
                    }
                },
                {
                    id: 'e6',
                    name: 'all',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer/14',
                    fixtures: {
                        settings: {
                            controls: []
                        }
                    }
                }
            ],
            fixtures: {
                legend: {
                    root: {
                        children: [
                            {
                                name: 'Disabled option:',
                                disabledControls: ['visibilityButton', 'expandButton'],
                                children: [
                                    {
                                        layerId: 'ecogeo-nature',
                                        disabledLayerControls: ['settings']
                                    },
                                    {
                                        layerId: 'ecogeo-climate-change',
                                        disabledLayerControls: ['datatable']
                                    },
                                    {
                                        layerId: 'ecogeo-clean-water',
                                        disabledLayerControls: ['symbology']
                                    },
                                    {
                                        layerId: 'ecogeo-clean-air',
                                        disabledLayerControls: ['boundaryZoom']
                                    },
                                    {
                                        layerId: 'e1',
                                        disabledLayerControls: ['remove']
                                    },
                                    {
                                        layerId: 'e2',
                                        disabledLayerControls: ['reload']
                                    },
                                    {
                                        layerId: 'e3',
                                        disabledLayerControls: ['visibility']
                                    },
                                    {
                                        layerId: 'e4'
                                    },
                                    {
                                        layerId: 'e5'
                                    },
                                    {
                                        layerId: 'e6',
                                        disabledLayerControls: [
                                            'boundaryZoom',
                                            'datatable',
                                            'metadata',
                                            'opacity',
                                            'reload',
                                            'remove',
                                            'settings',
                                            'symbology',
                                            'visibility'
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            },
            panels: {
                open: [{ id: 'legend' }]
            },
            system: { animate: true }
        }
    }
};

let options = {
    loadDefaultFixtures: true,
    loadDefaultEvents: true,
    startRequired: false
};

const rInstance = createInstance(document.getElementById('app'), config, options);

rInstance.$element.component('WFSLayer-Custom', {
    props: ['identifyData'],
    template: `
        <div>
            <span>This is an example template that contains an image.</span>
            <img src="https://i.imgur.com/WtY0tdC.gif" />
        </div>
    `
});

// load map if startRequired is true
// rInstance.start();

window.debugInstance = rInstance;
