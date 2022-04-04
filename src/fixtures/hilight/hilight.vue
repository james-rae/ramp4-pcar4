<template>
    <div></div>
</template>

<script lang="ts">
import type { HilightAPI } from './api/hilight';
import { get } from '@/store/pathify-helper';
import { defineComponent } from 'vue';
import { GlobalEvents } from '@/api/internal';
import { HilightStore } from './store';
import { IdentifyResultFormat, type MapIdentifyResult } from '@/geo/api';
import { LayerType } from '@/geo/api';

export default defineComponent({
    name: 'HilightV',
    data() {
        return {
            applyHighlight: get(HilightStore.applyHighlight),
            hilight: this.$iApi.fixture.get('hilight') as HilightAPI
        };
    },
    mounted() {
        if (this.$iApi.geo.map.created) {
            this.initLayer();
        } else {
            this.$iApi.event.on(GlobalEvents.MAP_CREATED, this.initLayer);
        }
        this.$iApi.event.on(GlobalEvents.MAP_IDENTIFY, this.populateHilight);

        // James bumped into a bug where the map locked up after doing an identify.
        // Haven't managed to reproduce yet. See https://github.com/james-rae/ramp4-pcar4/pull/4
    },
    methods: {
        async initLayer() {
            const hilightLayer = await this.$iApi.geo.layer.createLayer({
                id: this.hilight.hilightLayerName,
                layerType: LayerType.GRAPHIC,
                cosmetic: true
            });
            await hilightLayer.initiate();
            this.$iApi.geo.map.addLayer(hilightLayer);
        },

        populateHilight(identifyParams: MapIdentifyResult) {
            this.hilight.clearHilightGraphics();
            this.hilight.populateFromIdentify(identifyParams);
        }
    }
});
</script>

<style></style>
