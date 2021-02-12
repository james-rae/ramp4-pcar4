<template>
    <div class="h-full"></div>
</template>

<script lang="ts">
import { Vue, Watch, Component } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
// BAAH
// import GapiLoader, { RampMap, GeoApi, RampMapConfig, MapClick, MapMove, FilterEventParam, CoreFilterKey, ApiBundle as GeoApiBundle } from 'rampgeoapi';
import { LayerInstance, MapAPI, RampMapConfig } from '../../geo/internal';
import { GlobalEvents } from '../../api/internal';
import { APIInterface /*, RampGeo // BAAH */ } from '../../api';
// import { window } from '@/main';

import { ConfigStore } from '@/store/modules/config';
import { LayerStore, layer } from '@/store/modules/layer';

@Component
export default class EsriMap extends Vue {
    @Get(ConfigStore.getMapConfig) mapConfig!: RampMapConfig;

    @Get(LayerStore.layers) layers!: LayerInstance[];

    map!: MapAPI; // TODO assuming we need this as a local property for vue binding. if we don't, remove it and just use $iApi.geo.map

    created() {
        // temporarily print out loaded layers to console for grid testing purposes.
        console.log(this.layers);
    }

    // BAAH
    @Watch('layers')
    onLayerArrayChange(newValue: LayerInstance[], oldValue: LayerInstance[]) { // BAAH
        // TODO we are getting frequent errors at startup; something reacts to layer array
        //      change before map exists. kicking out for now to make demos work.
        //      possibly this is evil in vue state land. if so, then someone figure out
        //      the root cause and fix that.
        if (!this.map) { return; }

        newValue.filter(l => !oldValue.includes(l)).forEach(layer => {
            this.map.addLayer(layer);

            // a bit dangerous but ideally https://github.com/ramp4-pcar4/ramp4-pcar4/issues/126 and https://github.com/ramp4-pcar4/ramp4-pcar4/issues/173
            // will make this more seamless and not need to worry about having multiple listeners.

            // BAAH
            /*
            layer.filterChanged.listen((payload: FilterEventParam) => {
                this.$iApi.event.emit(GlobalEvents.FILTER_CHANGE, payload);
            });
            */
        });
    }

    @Watch('mapConfig')
    onMapConfigChange(newValue: RampMapConfig, oldValue: RampMapConfig) {
        if (newValue === oldValue) {
            return;
        }

        this.$iApi.geo.map.createMap(this.mapConfig, this.$el as HTMLDivElement);
        this.map = this.$iApi.geo.map;
        this.$iApi.event.emit(GlobalEvents.MAP_CREATED, this.$iApi.geo.map);

        this.onLayerArrayChange(this.layers, []);
    }

}
</script>

<style lang="scss" scoped></style>
