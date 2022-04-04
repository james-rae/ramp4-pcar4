<template>
    <div></div>
</template>

<script>
import { HilightAPI } from './api/hilight';
import { get } from '@/store/pathify-helper';
import { defineComponent } from 'vue';
import { GlobalEvents } from '@/api/internal';
import { debounce } from 'throttle-debounce';
import { HilightStore } from './store';

export default defineComponent({
    name: 'HilightV',
    data() {
        return {
            applyHighlight: get(HilightStore.applyHighlight),
            hilight: new HilightAPI('hilight', this.$iApi)
        };
    },
    mounted() {
        // if (this.$iApi.geo.map.esriView?.ready) {
        //     this.initLayer();
        // }

        // this.$iApi.event.on(GlobalEvents.MAP_CREATED, this.initLayer());
        // MAP_EXTENTCHANGE seems like the wrong event but not MAP_CREATED doesn't work here
        this.$iApi.event.on(
            GlobalEvents.MAP_EXTENTCHANGE,
            debounce(500, this.initLayer)
        );

        this.$iApi.event.on(GlobalEvents.MAP_IDENTIFY, this.populateHilight);
    },
    methods: {
        async initLayer() {
            const hilightLayer = await this.$iApi.geo.layer.createLayer({
                id: 'Hilight',
                layerType: 'esri-graphic',
                cosmetic: true
            });
            await hilightLayer.initiate();
            this.$iApi.geo.map.addLayer(hilightLayer);

            console.log(this.$iApi.geo.layer.getLayer('Hilight'));
        },

        populateHilight(identifyParams) {
            this.hilight.clearHilightPoints();

            this.hilight.populateHilightPoints(identifyParams);

            if (this.applyHighlight) {
                this.hilight.toggleEsriHighlightOn();
            }
        }
    }
});
</script>

<style></style>
