<template>
    <div class="relative">
        <div
            :style="mapStyle()"
            class="
                pointer-events-auto
                absolute
                top-0
                right-0
                mt-12
                mr-12
                shadow-tm
                border-4 border-solid border-white
                bg-white
                transition-all
                duration-300
                ease-out
            "
        >
            <!-- map -->
            <div class="relative h-full w-full overflow-hidden">
                <div
                    class="overviewmap absolute top-0 right-0 h-192 w-192"
                    :class="{ 'cursor-move': hoverOnExtent }"
                    @mousemove="cursorHitTest"
                ></div>
            </div>
            <!-- toggle -->
            <div class="absolute h-30 w-30 top-0 right-0">
                <button
                    tabindex="0"
                    class="cursor-pointer absolute h-full w-full"
                    @click="minimized = !minimized"
                    :content="
                        $t(
                            minimized
                                ? 'overviewmap.expand'
                                : 'overviewmap.minimize'
                        )
                    "
                    v-tippy="{ placement: 'left', hideOnClick: false }"
                >
                    <svg
                        class="
                            absolute
                            fill-current
                            text-gray-500
                            transition-all
                            duration-300
                            ease-out
                        "
                        :style="toggleStyle()"
                        xmlns="http://www.w3.org/2000/svg"
                        fit=""
                        height="100%"
                        width="100%"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                        focusable="false"
                    >
                        <g id="apple-keyboard-control">
                            <path
                                d="M 19.7782,11.7782L 18.364,13.1924L 12,6.82843L 5.63604,13.1924L 4.22183,11.7782L 12,4L 19.7782,11.7782 Z "
                            ></path>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { get } from '@/store/pathify-helper';
import { Extent } from '@/geo/api';
import { GlobalEvents, OverviewMapAPI } from '@/api/internal';
import { OverviewmapStore } from './store';
import { BasemapStore } from '@/fixtures/basemap/store';

export default defineComponent({
    name: 'OverviewmapV',
    data() {
        return {
            mapConfig: get(OverviewmapStore.mapConfig),
            startMinimized: get(OverviewmapStore.startMinimized),

            // TODO: find a way to fix this declaration (should be something like overviewMap: OverviewMapAPI but that gave a compile error)
            overviewMap: new OverviewMapAPI(this.$iApi),
            minimized: true,
            hoverOnExtent: false
        };
    },

    created() {
        this.overviewMap = new OverviewMapAPI(this.$iApi);
    },

    mounted() {
        this._adaptBasemap();
        this.overviewMap.createMap(
            this.mapConfig,
            this.$el.querySelector('.overviewmap') as HTMLDivElement
        );

        this.minimized = this.startMinimized;

        this.$iApi.event.on(
            GlobalEvents.MAP_EXTENTCHANGE,
            (newExtent: Extent) => {
                this.overviewMap.updateOverview(newExtent);
            }
        );

        this.$iApi.event.on(GlobalEvents.MAP_REFRESH_END, () => {
            this._adaptBasemap();
        });
    },

    methods: {
        async cursorHitTest(e: MouseEvent) {
            this.hoverOnExtent =
                !this.minimized && (await this.overviewMap.cursorHitTest(e));
        },

        mapStyle() {
            return {
                height: `${this.minimized ? 48 : 200}px`,
                width: `${this.minimized ? 48 : 200}px`
            };
        },

        toggleStyle() {
            return {
                top: `${this.minimized ? -6 : -3}px`,
                right: `${this.minimized ? -6 : -3}px`,
                transform: `rotate(${this.minimized ? 225 : 45}deg)`
            };
        },

        _adaptBasemap() {
            const tileSchemaId: string | undefined =
                this.$iApi.$vApp.$store.get(BasemapStore.currentTileSchemaId);

            if (!tileSchemaId) {
                throw new Error(
                    'Overview Map could not obtain the tile schema of the map'
                );
            }

            // find a basemap in this tile schema
            const basemap = this.mapConfig.basemaps.find(
                (bm: any) => bm.tileSchemaId === tileSchemaId
            );

            if (!basemap) {
                throw new Error(
                    'Overview Map could not find a suitable basemap that matches the spatial reference of the map'
                );
            }

            // update intial basemap to suitable basemap
            this.$iApi.$vApp.$store.set(
                OverviewmapStore.updateIntialBasemap,
                basemap.id
            );

            // check if the map has been created, and if it has refresh it
            if (this.overviewMap.created) {
                this.overviewMap.refreshMap(basemap.id);
            }
        }
    }
});
</script>

<style lang="scss" scoped>
.overviewmap::before {
    @apply absolute w-0 h-0 top-0 right-0 border-solid;
    border-width: 0 40px 40px 0;
    border-color: transparent #eee transparent transparent;
    content: '';
}
</style>
