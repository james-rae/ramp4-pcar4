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
                        formatter: 'LAT_LONG_DD'
                    },
                    scaleBar: {
                        imperialScale: false
                    }
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
                            }
                        }
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
                    }
                ],
                initialBasemapId: 'baseNrCan'
            },
            layers: [],
            fixtures: {
                appbar: {
                    items: ['legend', 'geosearch', 'basemap']
                },
                mapnav: { items: ['fullscreen', 'help', 'home', 'basemap'] }
            },
            system: { animate: true }
        }
    }
};

// spawn a RAMP
const rInstance = createInstance(document.getElementById('app'), config);

// remove event handler that triggers identify panel
rInstance.event.off('ramp_map_identify_opens_identify_results');

// wait for map to exist, then set up our pin magic
rInstance.event.on('map/created', () => {
    // set up pin layer
    const pinLayerID = 'RAMPpin';
    const pinLayer = rInstance.geo.layer.createLayer({
        id: pinLayerID,
        layerType: 'esri-graphic',
        url: '',
        system: true,
        cosmetic: true
    });
    rInstance.geo.map.addLayer(pinLayer);

    // create the pin graphic
    const magicPin = new rInstance.geo.geom.Graphic(new rInstance.geo.geom.Point('fake', [0, 0]), 'magicpin');
    magicPin.style = new rInstance.geo.geom.PointStyle({
        style: 'icon',
        width: 12,
        height: 16,
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAZCAYAAADTyxWqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCA1LjEuN4vW9zkAAAC2ZVhJZklJKgAIAAAABQAaAQUAAQAAAEoAAAAbAQUAAQAAAFIAAAAoAQMAAQAAAAIAAAAxAQIAEAAAAFoAAABphwQAAQAAAGoAAAAAAAAAYAAAAAEAAABgAAAAAQAAAFBhaW50Lk5FVCA1LjEuNwADAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAWgBAABAAAAlAAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAAAlR56NozS1xQAAAx1JREFUSEuVlV1Ik1EYx5+zuZnza26KWmp4odNUJLwQKUqxzFZgdRF0aRd9EBGGREnRRV3kVUl01U0gEVFQls4uuqgk0IwoY5VOan5O0U3TVlZup/95z7tXp1voDx7O/3nes/973vM1RhHIL7eXoDmC2IkoRKQgfIjPiBeIewM9DifaMMLM8sv3mlG6BnkUYVCKkfmDuM2JN7l6OudkaZkZjHKRtkGKUa2V90T8wEBP55BIFDMYWSBfQhaLfJ18wAgrMcJZvcisWfk30dQKHUK8ZWJ+gcb7psk7Okdej58Wk2IoMTZGdlgigxGzeMdc7QyTvRWFXoRiLBBG/cMzVF9XEayz7+KpVktgyuvVt3U819150s1sOSnEZdcQAUSZ3pqV1wixTSmBkFHLxfrgpfMNVFxUqM/JztIX2PJ0NdU7eFoC43fbu1lqcpz8gUSHmBdmVyE2KSUw7f9Nh6pKg5cvnCWTKU500jAYDKykaAt3u5zU555gJmPYJxtEZ5vUEt/gLO2rqeQmkynMKER8vEm3v7Yq6Bv8rlY0CsQPkqRWWQhQijlZzEFUlOcLi2qmkSTMZqRWsRhpZHRcLMaKOdbgynOrUU01ZoTZJ6kl2ZvN1PrQoZuYmIxo5kG99UGHLjsHhyUcp1iAdIhqmRMZY3T0btTL/JOjvKTIxs3JyeoTIvfQML/S3MIe9X5hmYkb1KrGLbHPMiH6EKlKCTDGqN/3g/ItCfxw7XaekZ4W9ExO6e47utjXWT/LsyQQ52EDn0SUqsfJfg5Ns9DL+RsI0jefHzsI5zrRSLmWeDLoIy5yA26RG4pZXrndANEFWS7ydfIKg6xyvXEEFTMBRleG5jUiVimsDQybKjCqjyLRziMOqgeLIe6p3bKyJhph9FTVS/dZCIzwGZo9Mvsvj2F0UNUKkWbzBGJKyqiMIU5JucQqM7zNjea0zKJyEv3GVa2hzdlyMH9OzN9GSLEoK7kOI3GZriLiplER99zKf6C32KpNql5FVDO8fR7NcUToeviFOObqcSzIdDURPzMEPncEn/sTUpzdM3hBu/IgIkT/AA0b/Z36q15CAAAAAElFTkSuQmCC',
        xOffset: 0,
        yOffset: 8
    });

    // method to drop the pin, pass along point to page
    const dropPin = async pinPoint => {
        // clear any previous pin, if any. no param ==> remove all graphics
        pinLayer.removeGraphic();

        // add pin to layer
        magicPin.geometry = pinPoint;
        pinLayer.addGraphic(magicPin);

        // ensure pin layer is on top. this might not be required for this sample
        const layerOrder = rInstance.geo.layer.layerOrderIds();
        const top = layerOrder.length - 1;
        if (layerOrder[top] !== pinLayerID) {
            // push pinlayer to top
            rInstance.geo.map.reorder(pinLayer, top, false);
        }

        // convert point to lat/lon
        // note: this is async to deal with the possibility that the projection math needs to be downloaded.
        //       in reality, RAMP will know 4326 (lat/lon), so will be rocket-fast
        const llPoint = await rInstance.geo.proj.projectGeometry(4326, pinPoint);

        // this is where you would pass the lat/lon values to your page/form.  will print to the console for now
        console.log('Pin drop at Lat: ' + llPoint.y + ', Lon: ' + llPoint.x);
    };

    // wire up our desired actions with the map identify
    rInstance.event.on('map/identify', async identResult => {
        // add the pin where we identify-clicked
        dropPin(identResult.click.mapPoint);
    });

    // wire up pin drop after a geosearch zoom
    rInstance.event.on('geosearch/zoom', async gsZoomPayload => {
        // wait for map to stop zooming
        await gsZoomPayload.zoomPromise;

        // get map center
        const mapCenter = rInstance.geo.map.getExtent().center();

        // add the pin at map center
        dropPin(mapCenter);
    });
});

// if you need to open one of the panels at startup...
rInstance.fixture.addDefaultFixtures().then(() => {
    rInstance.panel.open('geosearch');
});

window.debugInstance = rInstance;
