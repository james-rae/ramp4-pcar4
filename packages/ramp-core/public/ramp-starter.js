window.rInstance = null;

console.log('RAMP has loaded.');

// TODO: Location for version string needs to be finalized
// document.getElementById('ramp-version').innerText =
//     'v.' +
//     RAMP.version.major +
//     '.' +
//     RAMP.version.minor +
//     '.' +
//     RAMP.version.patch +
//     ' [#' +
//     RAMP.version.hash.slice(0, 6) +
//     ']  -  built on ' +
//     new Date(RAMP.version.timestamp).toLocaleDateString();

let config = {
    en: {
        map: {
            extentSets: [
                {
                    id: 'EXT_ESRI_World_AuxMerc_3857',
                    default: {
                        xmax: -5007771.626060756,
                        xmin: -16632697.354854,
                        ymax: 10015875.184845109,
                        ymin: 5022907.964742964
                    },
                    spatialReference: {
                        wkid: 102100,
                        latestWkid: 3857
                    }
                },
                {
                    id: 'EXT_NRCAN_Lambert_3978',
                    default: {
                        xmax: 3549492,
                        xmin: -2681457,
                        ymax: 3482193,
                        ymin: -883440
                    },
                    spatialReference: {
                        wkid: 3978
                    }
                }
            ],
            caption: {
                mouseCoords: {
                    formatter: 'WEB_MERCATOR'
                },
                scaleBar: {
                    imperialScale: true
                }
            },
            lodSets: [
                {
                    id: 'LOD_NRCAN_Lambert_3978',
                    lods: [
                        {
                            level: 0,
                            resolution: 38364.660062653464,
                            scale: 145000000
                        },
                        {
                            level: 1,
                            resolution: 22489.628312589961,
                            scale: 85000000
                        },
                        {
                            level: 2,
                            resolution: 13229.193125052918,
                            scale: 50000000
                        },
                        {
                            level: 3,
                            resolution: 7937.5158750317505,
                            scale: 30000000
                        },
                        {
                            level: 4,
                            resolution: 4630.2175937685215,
                            scale: 17500000
                        },
                        {
                            level: 5,
                            resolution: 2645.8386250105837,
                            scale: 10000000
                        },
                        {
                            level: 6,
                            resolution: 1587.5031750063501,
                            scale: 6000000
                        },
                        {
                            level: 7,
                            resolution: 926.04351875370423,
                            scale: 3500000
                        },
                        {
                            level: 8,
                            resolution: 529.16772500211675,
                            scale: 2000000
                        },
                        {
                            level: 9,
                            resolution: 317.50063500127004,
                            scale: 1200000
                        },
                        {
                            level: 10,
                            resolution: 185.20870375074085,
                            scale: 700000
                        },
                        {
                            level: 11,
                            resolution: 111.12522225044451,
                            scale: 420000
                        },
                        {
                            level: 12,
                            resolution: 66.1459656252646,
                            scale: 250000
                        },
                        {
                            level: 13,
                            resolution: 38.364660062653464,
                            scale: 145000
                        },
                        {
                            level: 14,
                            resolution: 22.489628312589961,
                            scale: 85000
                        },
                        {
                            level: 15,
                            resolution: 13.229193125052918,
                            scale: 50000
                        },
                        {
                            level: 16,
                            resolution: 7.9375158750317505,
                            scale: 30000
                        },
                        {
                            level: 17,
                            resolution: 4.6302175937685215,
                            scale: 17500
                        }
                    ]
                },
                {
                    id: 'LOD_ESRI_World_AuxMerc_3857',
                    lods: [
                        {
                            level: 0,
                            resolution: 19567.879240999919,
                            scale: 73957190.948944
                        },
                        {
                            level: 1,
                            resolution: 9783.93962049996,
                            scale: 36978595.474472
                        },
                        {
                            level: 2,
                            resolution: 4891.96981024998,
                            scale: 18489297.737236
                        },
                        {
                            level: 3,
                            resolution: 2445.98490512499,
                            scale: 9244648.868618
                        },
                        {
                            level: 4,
                            resolution: 1222.9924525624949,
                            scale: 4622324.434309
                        },
                        {
                            level: 5,
                            resolution: 611.49622628137968,
                            scale: 2311162.217155
                        },
                        {
                            level: 6,
                            resolution: 305.74811314055756,
                            scale: 1155581.108577
                        },
                        {
                            level: 7,
                            resolution: 152.87405657041106,
                            scale: 577790.554289
                        },
                        {
                            level: 8,
                            resolution: 76.437028285073239,
                            scale: 288895.277144
                        },
                        {
                            level: 9,
                            resolution: 38.21851414253662,
                            scale: 144447.638572
                        },
                        {
                            level: 10,
                            resolution: 19.10925707126831,
                            scale: 72223.819286
                        },
                        {
                            level: 11,
                            resolution: 9.5546285356341549,
                            scale: 36111.909643
                        },
                        {
                            level: 12,
                            resolution: 4.77731426794937,
                            scale: 18055.954822
                        },
                        {
                            level: 13,
                            resolution: 2.3886571339746849,
                            scale: 9027.977411
                        },
                        {
                            level: 14,
                            resolution: 1.1943285668550503,
                            scale: 4513.988705
                        },
                        {
                            level: 15,
                            resolution: 0.59716428355981721,
                            scale: 2256.994353
                        },
                        {
                            level: 16,
                            resolution: 0.29858214164761665,
                            scale: 1128.497176
                        },
                        {
                            level: 17,
                            resolution: 0.14929107082380833,
                            scale: 564.248588
                        },
                        {
                            level: 18,
                            resolution: 0.074645535411904163,
                            scale: 282.124294
                        },
                        {
                            level: 19,
                            resolution: 0.037322767705952081,
                            scale: 141.062147
                        },
                        {
                            level: 20,
                            resolution: 0.018661383852976041,
                            scale: 70.5310735
                        }
                    ]
                }
            ],
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
                id: 'WaterQuantity',
                layerType: 'esriMapImage',
                url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
                layerEntries: [
                    {
                        index: 1,
                        name: 'Water quantity child',
                        state: {
                            opacity: 1,
                            visibility: true
                        }
                    },
                    {
                        index: 9,
                        name: 'Carbon monoxide emissions by facility',
                        state: {
                            opacity: 0.5,
                            visibility: true
                        }
                    }
                ],
                state: {
                    opacity: 1,
                    visibility: true
                },
                customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
            },
            {
                id: 'WaterQuality',
                layerType: 'esriMapImage',
                url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
                layerEntries: [
                    {
                        index: 5,
                        state: {
                            opacity: 1,
                            visibility: true
                        }
                    }
                ],
                state: {
                    opacity: 1,
                    visibility: true
                },
                customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
            },
            {
                id: 'CleanAir',
                layerType: 'esriFeature',
                url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/EcoGeo/EcoGeo/MapServer/9',
                state: {
                    opacity: 0.8,
                    visibility: true
                },
                tolerance: 10,
                customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
            },
            {
                id: 'WFSLayer',
                layerType: 'ogcWfs',
                url: 'https://geo.weather.gc.ca/geomet-beta/features/collections/hydrometric-stations/items?startindex=7740',
                state: {
                    visibility: true
                },
                customRenderer: {}
            }
            /*
            {
                id: 'TestTile',
                layerType: 'esriTile',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/USA_Topo_Maps/MapServer',
                state: {
                    opacity: 1,
                    visibility: true
                },
                customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
            },
            {
                "id": "CanGRID_tmean_MAM_en",
                "layerType": "ogcWms",
                "url": "https://geo.weather.gc.ca/geomet-climate?SERVICE=WMS&VERSION=1.3.0",
                "name": "Total precipitation",
                "state": {
                    "opacity": 0.85,
                    "visibility": true
                },
                "layerEntries": [{"id": "CANGRD.TREND.TM_SPRING" }],
                "featureInfoMimeType": "application/json"
            }
            */
        ],
        fixtures: {
            legend: {
                reorderable: true,
                root: {
                    children: [
                        {
                            name: 'Visibility Set',
                            exclusiveVisibility: [
                                {
                                    layerId: 'CleanAir',
                                    name: 'Clean Air in Set'
                                },
                                {
                                    name: 'Group in Set',
                                    children: [
                                        {
                                            layerId: 'WaterQuantity',
                                            name: 'Water Quantity in Nested Group',
                                            entryIndex: 1
                                        },
                                        {
                                            layerId: 'WaterQuantity',
                                            name: 'CO2 in Nested Group',
                                            entryIndex: 9
                                        },
                                        {
                                            layerId: 'WaterQuality',
                                            name: 'Water Quality in Nested Group',
                                            entryIndex: 5
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            layerId: 'WFSLayer',
                            name: 'WFSLayer'
                        }
                    ]
                }
            },
            appbar: {
                items: [
                    'legend',
                    'geosearch',
                    'basemap',
                    'export-v1',
                    'layer-reorder'
                ],
                temporaryButtons: ['details', 'grid', 'settings']
            },
            details: {
                items: [
                    {
                        id: 'WaterQuantity'
                    },
                    {
                        id: 'WFSLayer',
                        template: 'WFSLayer-Custom'
                    }
                ]
            },
            mapnav: { items: ['fullscreen', 'help', 'home', 'basemap'] },
            'export-v1-title': {
                text: 'All Your Base are Belong to Us'
            }
        },
        animate: true
    },
    fr: {
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
                id: 'WaterQuantity',
                layerType: 'esriMapImage',
                url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
                layerEntries: [
                    {
                        index: 1,
                        name: 'Water quantity child',
                        state: {
                            opacity: 1,
                            visibility: true
                        }
                    },
                    {
                        index: 9,
                        name: 'Carbon monoxide emissions by facility',
                        state: {
                            opacity: 0.5,
                            visibility: true
                        }
                    }
                ],
                state: {
                    opacity: 1,
                    visibility: true
                },
                customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
            },
            {
                id: 'WaterQuality',
                layerType: 'esriMapImage',
                url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
                layerEntries: [
                    {
                        index: 5,
                        state: {
                            opacity: 1,
                            visibility: true
                        }
                    }
                ],
                state: {
                    opacity: 1,
                    visibility: true
                },
                customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
            },
            {
                id: 'CleanAir',
                layerType: 'esriFeature',
                url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/EcoGeo/EcoGeo/MapServer/9',
                state: {
                    opacity: 0.8,
                    visibility: true
                },
                tolerance: 10,
                customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
            },
            {
                id: 'WFSLayer',
                layerType: 'ogcWfs',
                url: 'https://geo.weather.gc.ca/geomet-beta/features/collections/hydrometric-stations/items?startindex=7740',
                state: {
                    visibility: true
                },
                customRenderer: {}
            }
            /*
            {
                id: 'TestTile',
                layerType: 'esriTile',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/USA_Topo_Maps/MapServer',
                state: {
                    opacity: 1,
                    visibility: true
                },
                customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
            },
            {
                "id": "CanGRID_tmean_MAM_en",
                "layerType": "ogcWms",
                "url": "https://geo.weather.gc.ca/geomet-climate?SERVICE=WMS&VERSION=1.3.0",
                "name": "Total precipitation",
                "state": {
                    "opacity": 0.85,
                    "visibility": true
                },
                "layerEntries": [{"id": "CANGRD.TREND.TM_SPRING" }],
                "featureInfoMimeType": "application/json"
            }
            */
        ],
        fixtures: {
            legend: {
                reorderable: true,
                root: {
                    children: [
                        {
                            name: 'Visibility Set',
                            exclusiveVisibility: [
                                {
                                    layerId: 'CleanAir'
                                },
                                {
                                    name: 'Group in Set',
                                    children: [
                                        {
                                            layerId: 'WaterQuantity',
                                            name: 'Water Quantity in Nested Group',
                                            entryIndex: 1
                                        },
                                        {
                                            layerId: 'WaterQuantity',
                                            name: 'CO2 in Nested Group',
                                            entryIndex: 9
                                        },
                                        {
                                            layerId: 'WaterQuality',
                                            name: 'Water Quality in Nested Group',
                                            entryIndex: 5
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            layerId: 'WFSLayer',
                            name: 'WFSLayer'
                        }
                    ]
                }
            },
            appbar: {
                items: [
                    'legend',
                    'geosearch',
                    'basemap',
                    'export-v1',
                    'layer-reorder'
                ],
                temporaryButtons: ['details', 'grid', 'settings']
            },
            details: {
                items: [
                    {
                        id: 'WaterQuantity'
                    },
                    {
                        id: 'WFSLayer',
                        template: 'WFSLayer-Custom'
                    }
                ]
            },
            mapnav: { items: ['fullscreen', 'help', 'home', 'basemap'] },
            'export-v1-title': {
                text: 'All Your Base are Belong to Us'
            }
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

rInstance.$element.component('WFSLayer-Custom', {
    props: ['identifyData'],
    template: `
        <div>
            <span>This is an example template that contains an image.</span>
            <img src="https://i.imgur.com/WtY0tdC.gif" />
        </div>
    `
});

// add export-v1 fixtures
rInstance.fixture.add('export-v1');

// load map if startRequired is true
rInstance.start();

function switchLang() {
    if (rInstance.language === 'en') {
        rInstance.setLanguage('fr');
    } else {
        rInstance.setLanguage('en');
    }
    document.getElementById('instance-language').innerText = rInstance.language;
}

function animateToggle() {
    if (rInstance.$vApp.$el.classList.contains('animation-enabled')) {
        rInstance.$vApp.$el.classList.remove('animation-enabled');
    } else {
        rInstance.$vApp.$el.classList.add('animation-enabled');
    }
    document.getElementById('animate-status').innerText =
        'Animate: ' + rInstance.animate;
}
