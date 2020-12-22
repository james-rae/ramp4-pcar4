<template>
    <div class="h-full"></div>
</template>

<script lang="ts">
import { Vue, Watch, Component } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
// BAAH
// import GapiLoader, { RampMap, GeoApi, RampMapConfig, MapClick, MapMove, FilterEventParam, CoreFilterKey, ApiBundle as GeoApiBundle } from 'rampgeoapi';
import { GlobalEvents } from '../../api/internal';
import { APIInterface /*, RampGeo // BAAH */ } from '../../api';
// import { window } from '@/main';

import { ConfigStore } from '@/store/modules/config';
import { LayerStore, layer } from '@/store/modules/layer';
// BAAH
// import BaseLayer from 'rampgeoapi/dist/layer/BaseLayer';

@Component
export default class EsriMap extends Vue {
    @Get(ConfigStore.getMapConfig) mapConfig!: any; // RampMapConfig; // BAAH

    @Get(LayerStore.layers) layers!: any[]; // BaseLayer[]; // BAAH

    // BAAH
    gapi!: any; // GeoApi; // BAAH
    map!: any; // RampMap; // BAAH

    created() {
        // temporarily print out loaded layers to console for grid testing purposes.
        console.log(this.layers);
    }

    // BAAH
    /*
    @Watch('layers')
    onLayerArrayChange(newValue: any[], oldValue: any[]) { // (newValue: BaseLayer[], oldValue: BaseLayer[]) { // BAAH
        // TODO we are getting frequent errors at startup; something reacts to layer array
        //      change before map exists. kicking out for now to make demos work.
        //      possibly this is evil in vue state land. if so, then someone figure out
        //      the root cause and fix that.
        if (!this.map) { return; }

        newValue.filter(l => !oldValue.includes(l)).forEach(layer => {
            this.map.addLayer(layer);

            // a bit dangerous but ideally https://github.com/ramp4-pcar4/ramp4-pcar4/issues/126 and https://github.com/ramp4-pcar4/ramp4-pcar4/issues/173
            // will make this more seamless and not need to worry about having multiple listeners.
            layer.filterChanged.listen((payload: FilterEventParam) => {
                this.$iApi.event.emit(GlobalEvents.FILTER_CHANGE, payload);
            });
        });
    }

    @Watch('mapConfig')
    onMapConfigChange(newValue: RampMapConfig, oldValue: RampMapConfig) {
        if (newValue === oldValue) {
            return;
        }

        this.map = RAMP.geoapi.maps.createMap(this.mapConfig, this.$el as HTMLDivElement);
        // FIXME: temporarily store map in global, remove line below when map API is complete
        this.$iApi.map = this.map;
        this.$iApi.event.emit(GlobalEvents.MAP_CREATED, this.$iApi.map);

        // TODO wire up more events from map to main bus. or migrate into "map API" if that happens
        this.$iApi.map.mapClicked.listen((payload: MapClick) => {
            this.$iApi.event.emit(GlobalEvents.MAP_CLICK, payload);
        });
        this.$iApi.map.mapDoubleClicked.listen((payload: MapClick) => {
            this.$iApi.event.emit(GlobalEvents.MAP_DOUBLECLICK, payload);
        });
        this.$iApi.map.extentChanged.listen((payload: GeoApiBundle.Extent) => {
            // NOTE: yes, double events. rationale is a block of code dealing with filters will not
            //       want to have two event handlers (one on filter, one on extent change) and synch
            //       between them. They can subscribe to the filter event and get all the info they need.
            this.$iApi.event.emit(GlobalEvents.MAP_EXTENTCHANGE, payload);
            this.$iApi.event.emit(GlobalEvents.FILTER_CHANGE, {
                extent: payload,
                filterKey: CoreFilterKey.EXTENT
            });
        });
        this.$iApi.map.mapMouseMoved.listen((payload: MapMove) => {
            // TODO debounce here? the map event fires pretty much every change in pixel value.
            this.$iApi.event.emit(GlobalEvents.MAP_MOUSEMOVE, payload);
        });
        this.$iApi.map.mapMouseDown.listen((payload: PointerEvent) => {
            this.$iApi.event.emit(GlobalEvents.MAP_MOUSEDOWN, payload);
        });
        this.$iApi.map.mapKeyDown.listen((payload: KeyboardEvent) => {
            this.$iApi.event.emit(GlobalEvents.MAP_KEYDOWN, payload);
        });
        this.$iApi.map.mapKeyUp.listen((payload: KeyboardEvent) => {
            this.$iApi.event.emit(GlobalEvents.MAP_KEYUP, payload);
        });
        this.$iApi.map.mapBlur.listen((payload: FocusEvent) => {
            this.$iApi.event.emit(GlobalEvents.MAP_BLUR, payload);
        });


        this.onLayerArrayChange(this.layers, []);
    }
    */
}
</script>

<style lang="scss" scoped></style>
