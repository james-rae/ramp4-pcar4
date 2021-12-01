window.rInstance = null;
document.title = 'Custom Renderer';

console.log('RAMP has loaded.');

let config = {
    en: {
        map: {
            extent: {
                xmax: -5007771.626060756,
                xmin: -16632697.354854,
                ymax: 10015875.184845109,
                ymin: 5022907.964742964,
                spatialReference: {
                    wkid: 102100,
                    latestWkid: 3857
                }
            },
            caption: {
                mouseCoords: {
                    formatter: 'WEB_MERCATOR'
                },
                scaleBar: {
                    imperialScale: true
                }
            },
            lods: RAMP.GEO.defaultLODs(RAMP.GEO.defaultTileSchemas()[1]), // idx 1 = mercator
            tileSchemas: [
                {
                    id: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                    name: 'Lambert Maps',
                    extentSetId: 'EXT_NRCAN_Lambert_3978',
                    lodSetId: 'LOD_NRCAN_Lambert_3978',
                    thumbnailTileUrls: ['/tile/8/285/268', '/tile/8/285/269'],
                    hasNorthPole: true
                },
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
                    id: 'baseNrCan',
                    name: 'Canada Base Map - Transportation (CBMT)',
                    description:
                        'The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                    altText: 'The Canada Base Map - Transportation (CBMT)',
                    layers: [
                        {
                            id: 'CBMT',
                            layerType: 'esriTile',
                            url: 'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT3978/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                    wkid: 3978
                },
                {
                    id: 'baseSimple',
                    name: 'Canada Base Map - Simple',
                    description: 'Canada Base Map - Simple',
                    altText: 'Canada base map - Simple',
                    layers: [
                        {
                            id: 'SMR',
                            layerType: 'esriTile',
                            url: 'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/Simple/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                    wkid: 3978
                },
                {
                    id: 'baseCBME_CBCE_HS_RO_3978',
                    name: 'Canada Base Map - Elevation (CBME)',
                    description:
                        'The Canada Base Map - Elevation (CBME) web mapping services of the Earth Sciences Sector at Natural Resources Canada, is intended primarily for online mapping application users and developers.',
                    altText: 'Canada Base Map - Elevation (CBME)',
                    layers: [
                        {
                            id: 'CBME_CBCE_HS_RO_3978',
                            layerType: 'esriTile',
                            url: 'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                    wkid: 3978
                },
                {
                    id: 'baseCBMT_CBCT_GEOM_3978',
                    name: 'Canada Base Map - Transportation (CBMT)',
                    description:
                        ' The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                    altText: 'Canada Base Map - Transportation (CBMT)',
                    layers: [
                        {
                            id: 'CBMT_CBCT_GEOM_3978',
                            layerType: 'esriTile',
                            url: 'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                    wkid: 3978
                },
                {
                    id: 'baseEsriWorld',
                    name: 'World Imagery',
                    description:
                        'World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.',
                    altText: 'World Imagery',
                    layers: [
                        {
                            id: 'World_Imagery',
                            layerType: 'esriTile',
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                    wkid: 102100,
                    attribution: {
                        text: {
                            disabled: true
                        },
                        logo: {
                            disabled: true
                        }
                    }
                },
                {
                    id: 'baseEsriPhysical',
                    name: 'World Physical Map',
                    description:
                        'This map presents the Natural Earth physical map at 1.24km per pixel for the world and 500m for the coterminous United States.',
                    altText: 'World Physical Map',
                    layers: [
                        {
                            id: 'World_Physical_Map',
                            layerType: 'esriTile',
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                    wkid: 102100
                },
                {
                    id: 'baseEsriRelief',
                    name: 'World Shaded Relief',
                    description:
                        'This map portrays surface elevation as shaded relief. This map is used as a basemap layer to add shaded relief to other GIS maps, such as the ArcGIS Online World Street Map.',
                    altText: 'World Shaded Relief',
                    layers: [
                        {
                            id: 'World_Shaded_Relief',
                            layerType: 'esriTile',
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                    wkid: 102100
                },
                {
                    id: 'baseEsriStreet',
                    name: 'World Street Map',
                    description:
                        'This worldwide street map presents highway-level data for the world.',
                    altText: 'ESWorld Street Map',
                    layers: [
                        {
                            id: 'World_Street_Map',
                            layerType: 'esriTile',
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                    wkid: 102100
                },
                {
                    id: 'baseEsriTerrain',
                    name: 'World Terrain Base',
                    description:
                        'This map is designed to be used as a base map by GIS professionals to overlay other thematic layers such as demographics or land cover.',
                    altText: 'World Terrain Base',
                    layers: [
                        {
                            id: 'World_Terrain_Base',
                            layerType: 'esriTile',
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                    wkid: 102100
                },
                {
                    id: 'baseEsriTopo',
                    name: 'World Topographic Map',
                    description:
                        'This map is designed to be used as a basemap by GIS professionals and as a reference map by anyone.',
                    altText: 'World Topographic Map',
                    layers: [
                        {
                            id: 'World_Topo_Map',
                            layerType: 'esriTile',
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                    wkid: 102100
                }
            ],
            initialBasemapId: 'baseEsriWorld'
        },
        layers: [
            {
                id: 'CleanAirSimple',
                layerType: 'esriFeature',
                url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/EcoGeo/EcoGeo/MapServer/9',
                customRenderer: {
                    type: 'simple',
                    symbol: {
                        type: 'esriSMS',
                        style: 'esriSMSCross',
                        color: [255, 225, 0, 255],
                        size: 8,
                        angle: 0,
                        xoffset: 0,
                        yoffset: 0,
                        outline: {
                            color: [255, 225, 0, 255],
                            width: 4
                        }
                    }
                }
            },
            {
                id: 'CleanAirUniqueValue',
                layerType: 'esriFeature',
                url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/EcoGeo/EcoGeo/MapServer/9',
                customRenderer: {
                    type: 'uniqueValue',
                    field1: 'Category',
                    // defaultSymbol: {},
                    // all possible values must be covered or use defaultSymbol
                    uniqueValueInfos: [
                        {
                            value: 'Clean Air',
                            symbol: {
                                type: 'esriSMS',
                                style: 'esriSMSDiamond',
                                color: [225, 152, 234, 255],
                                size: 12,
                                angle: 0,
                                xoffset: 0,
                                yoffset: 0,
                                outline: {
                                    color: [255, 255, 255, 255],
                                    width: 0.5
                                }
                            }
                        }
                    ]
                }
            },
            {
                id: 'CleanAirClassBreaks',
                layerType: 'esriFeature',
                url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/EcoGeo/EcoGeo/MapServer/9',
                customRenderer: {
                    type: 'classBreaks',
                    field: 'OBJECTID',
                    // all possible values must be covered
                    minValue: 0,
                    classBreakInfos: [
                        {
                            classMaxValue: 100,
                            symbol: {
                                type: 'esriSMS',
                                style: 'esriSMSCircle',
                                color: [122, 250, 255, 255],
                                size: 10,
                                outline: {
                                    color: [0, 0, 0, 255],
                                    width: 1
                                }
                            },
                            label: '0 to 100'
                        },
                        {
                            classMaxValue: 300,
                            symbol: {
                                type: 'esriSMS',
                                style: 'esriSMSCircle',
                                color: [55, 169, 255, 255],
                                size: 14,
                                outline: {
                                    color: [0, 0, 0, 255],
                                    width: 1
                                }
                            },
                            label: '100 to 300'
                        },
                        {
                            classMaxValue: 1000,
                            symbol: {
                                type: 'esriSMS',
                                style: 'esriSMSCircle',
                                color: [0, 27, 209, 255],
                                size: 18,
                                outline: {
                                    color: [0, 0, 0, 255],
                                    width: 1
                                }
                            },
                            label: '300 to 1000'
                        }
                    ]
                }
            },
            {
                id: 'WFSLayerSimple',
                layerType: 'ogcWfs',
                url: 'https://geo.weather.gc.ca/geomet-beta/features/collections/hydrometric-stations/items?startindex=7740',
                customRenderer: {
                    type: 'simple',
                    symbol: {
                        type: 'esriSMS',
                        style: 'esriSMSTriangle',
                        color: [61, 255, 166, 255],
                        size: 8,
                        angle: 0,
                        xoffset: 0,
                        yoffset: 0,
                        outline: {
                            color: [255, 255, 255, 255],
                            width: 0.5
                        }
                    }
                }
            },
            {
                id: 'WFSLayerUniqueValue',
                layerType: 'ogcWfs',
                url: 'https://geo.weather.gc.ca/geomet-beta/features/collections/hydrometric-stations/items?startindex=7740',
                customRenderer: {
                    type: 'uniqueValue',
                    field1: 'STATUS_EN',
                    defaultSymbol: {
                        type: 'esriSMS',
                        style: 'esriSMSCircle',
                        color: [255, 255, 255, 255],
                        size: 8,
                        angle: 0,
                        xoffset: 0,
                        yoffset: 0,
                        outline: {
                            color: [0, 0, 0, 255],
                            width: 2
                        }
                    },
                    defaultLabel: 'Other',
                    // all possible values must be covered or use defaultSymbol
                    uniqueValueInfos: [
                        {
                            value: 'Discontinued',
                            symbol: {
                                type: 'esriSMS',
                                style: 'esriSMSDiamond',
                                color: [142, 0, 0, 255],
                                size: 10,
                                angle: 20,
                                xoffset: 0,
                                yoffset: 0,
                                outline: {
                                    color: [0, 0, 0, 255],
                                    width: 0.5
                                }
                            },
                            label: 'Discontinued'
                        },
                        {
                            value: 'Active',
                            symbol: {
                                type: 'esriSMS',
                                style: 'esriSMSDiamond',
                                color: [0, 142, 77, 255],
                                size: 10,
                                angle: 65,
                                xoffset: 0,
                                yoffset: 0,
                                outline: {
                                    color: [255, 255, 255, 255],
                                    width: 0.5
                                }
                            },
                            label: 'Active'
                        }
                    ]
                }
            },
            {
                id: 'WFSLayerClassBreaks',
                layerType: 'ogcWfs',
                url: 'https://geo.weather.gc.ca/geomet-beta/features/collections/hydrometric-stations/items?startindex=7740',
                customRenderer: {
                    type: 'classBreaks',
                    field: 'OBJECTID',
                    defaultSymbol: {
                        type: 'esriSMS',
                        style: 'esriSMSCross',
                        color: [0, 0, 0, 255],
                        size: 8,
                        angle: 45,
                        xoffset: 0,
                        yoffset: 0,
                        outline: {
                            color: [0, 0, 0, 255],
                            width: 4
                        }
                    },
                    defaultLabel: 'Other',
                    // all possible values must be covered
                    minValue: 0,
                    classBreakInfos: [
                        {
                            classMaxValue: 50,
                            symbol: {
                                type: 'esriSMS',
                                style: 'esriSMSCross',
                                color: [255, 190, 124, 255],
                                size: 8,
                                angle: 45,
                                xoffset: 0,
                                yoffset: 0,
                                outline: {
                                    color: [255, 190, 124, 255],
                                    width: 4
                                }
                            },
                            label: '0 to 50'
                        },
                        {
                            classMaxValue: 100,
                            symbol: {
                                type: 'esriSMS',
                                style: 'esriSMSCross',
                                color: [190, 124, 255, 255],
                                size: 8,
                                angle: 45,
                                xoffset: 0,
                                yoffset: 0,
                                outline: {
                                    color: [190, 124, 255, 255],
                                    width: 4
                                }
                            },
                            label: '50 to 100'
                        }
                    ]
                }
            }
        ],
        fixtures: {
            legend: {
                reorderable: true,
                root: {
                    children: [
                        {
                            name: 'Feature Layer',
                            exclusiveVisibility: [
                                {
                                    layerId: 'CleanAirSimple',
                                    name: 'Clean Air - Simple'
                                },
                                {
                                    layerId: 'CleanAirUniqueValue',
                                    name: 'Clean Air - Unique Value'
                                },
                                {
                                    layerId: 'CleanAirClassBreaks',
                                    name: 'Clean Air - Class Breaks'
                                }
                            ]
                        },
                        {
                            name: '(fake) File Layer',
                            exclusiveVisibility: [
                                {
                                    layerId: 'WFSLayerSimple',
                                    name: 'WFS Layer - Simple'
                                },
                                {
                                    layerId: 'WFSLayerUniqueValue',
                                    name: 'WFS Layer - Unique Value'
                                },
                                {
                                    layerId: 'WFSLayerClassBreaks',
                                    name: 'WFS Layer - Class Breaks'
                                }
                            ]
                        }
                    ]
                }
            },
            appbar: {
                items: ['legend'],
                temporaryButtons: ['details', 'grid', 'settings']
            },
            mapnav: { items: ['fullscreen', 'help', 'home', 'basemap'] }
        },
        animate: true
    }
};

let options = {
    loadDefaultFixtures: false,
    loadDefaultEvents: true,
    startRequired: false
};

rInstance = new RAMP.Instance(document.getElementById('app'), config, options);
rInstance.fixture.addDefaultFixtures().then(() => {
    rInstance.panel.open('legend-panel');
});

// load map if startRequired is true
rInstance.start();

function animateToggle() {
    if (rInstance.$vApp.$el.classList.contains('animation-enabled')) {
        rInstance.$vApp.$el.classList.remove('animation-enabled');
    } else {
        rInstance.$vApp.$el.classList.add('animation-enabled');
    }
    document.getElementById('animate-status').innerText =
        'Animate: ' + rInstance.animate;
}