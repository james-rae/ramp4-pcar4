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
                    },
                    {
                        id: 'EXT_NRCAN_Lambert_3978',
                        default: {
                            xmax: 3549492,
                            xmin: -2681457,
                            ymax: 3482193,
                            ymin: -883440,
                            spatialReference: {
                                wkid: 3978
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
                layerTimeDefault: {
                    expectedLoadTime: 500,
                    expectedDrawTime: 500
                },
                lodSets: [
                    {
                        id: 'LOD_NRCAN_Lambert_3978',
                        lods: geo.defaultLODs(geo.defaultTileSchemas()[0])
                    },
                    {
                        id: 'LOD_ESRI_World_AuxMerc_3857',
                        lods: geo.defaultLODs(geo.defaultTileSchemas()[1])
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
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                    },
                    {
                        id: 'baseSimple',
                        name: 'Canada Base Map - Simple',
                        description: 'Canada Base Map - Simple',
                        altText: 'Canada base map - Simple',
                        layers: [
                            {
                                id: 'SMR',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/Simple/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
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
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
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
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
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
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
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
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseEsriStreet',
                        name: 'World Street Map',
                        description: 'This worldwide street map presents highway-level data for the world.',
                        altText: 'ESWorld Street Map',
                        layers: [
                            {
                                id: 'World_Street_Map',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
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
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
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
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseOpenStreetMap',
                        name: 'OpenStreetMap',
                        description: 'Open sourced topographical map.',
                        altText: 'OpenStreetMap',
                        layers: [
                            {
                                id: 'Open_Street_Map',
                                layerType: 'osm-tile'
                            }
                        ],
                        thumbnailUrl:
                            'https://www.openstreetmap.org/assets/about/osm-a74d2c94082260032c133b9d206ee2fdd911e5c82bf03daae10393a02d7b4809.png',
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    }
                ],
                initialBasemapId: 'baseEsriWorld'
            },
            layers: [
                {
                    id: 'Water',
                    name: 'Oily Water',
                    layerType: 'esri-map-image',
                    url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/OilsandsLambert/MapServer/',
                    sublayers: [
                        {
                            index: 0,
                            permanentFilteredQuery: `siteType_en = 'Air'`
                        }
                    ]
                },
                {
                    id: 'Cities',
                    name: 'Grouse Cities',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/BasicCity/MapServer/0',
                    permanentFilteredQuery: 'POPCLASS = 3',
                    customRenderer: {
                        type: 'simple',
                        label: 'Grouse Cities',
                        symbol: {
                            type: 'esriPMS',
                            imageData:
                                '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',
                            contentType: 'image/png'
                        }
                    }
                }
            ],
            fixtures: {
                legend: {
                    root: {
                        children: [
                            {
                                layerId: 'Cities'
                            },
                            {
                                layerId: 'Water',
                                sublayerIndex: 0
                            }
                        ]
                    }
                },
                appbar: {
                    items: ['legend', 'geosearch', 'basemap', 'export', 'layer-reorder']
                },
                mapnav: {
                    items: ['fullscreen', 'geolocator', 'help', 'home', 'basemap', 'legend', 'geosearch']
                },
                export: {
                    title: {
                        value: 'Enjoy this Export',
                        selectable: false
                    },
                    legend: {
                        selected: false
                    },
                    fileName: 'ramp-pcar-4-map-carte'
                },
                help: {
                    location: '../help'
                }
            },
            panels: {
                open: [{ id: 'legend', pin: true }]
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

// add export fixtures
rInstance.fixture.add('export');

// load map if startRequired is true
// rInstance.start();

window.debugInstance = rInstance;
