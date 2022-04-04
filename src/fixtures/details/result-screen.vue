<template>
    <panel-screen :panel="panel">
        <template #header>{{ $t('details.items.title') }}</template>
        <template #content>
            <div v-if="layerExists">
                <div v-if="result.items.length > 0">
                    <!-- layer name -->
                    <div
                        class="flex justify-between py-8 px-8 mb-8 bg-gray-100"
                        v-if="layerExists"
                    >
                        <div class="p-8 font-bold break-words">
                            {{ layerName }}
                        </div>
                    </div>

                    <!-- highlight toggle -->
                    <div class="p-8 mb-8 bg-gray-100 flex justify-between">
                        <div>Toggle Highlight</div>
                        <Toggle
                            @change="() => onHilightToggle()"
                            v-model="hilightToggle"
                            :classes="toggleClasses"
                        ></Toggle>
                    </div>

                    <!-- result list -->
                    <button
                        class="w-full flex px-16 py-10 text-md hover:bg-gray-200 cursor-pointer"
                        v-for="(item, idx) in result.items"
                        :key="idx"
                        @click="item.loaded && openResult(idx)"
                        :disabled="!item.loaded"
                        v-focus-item
                        v-truncate
                    >
                        <!-- ifs on each span as wrapper breaks aligment. smart person might improve things -->
                        <span
                            v-if="item.loaded"
                            v-html="itemIcon(item.data, idx)"
                            class="flex-none symbologyIcon"
                        ></span>
                        <span
                            class="flex-initial py-5 px-10"
                            v-truncate
                            v-if="item.loaded"
                        >
                            {{
                                nameField
                                    ? item.data[nameField]
                                    : $t('details.result.default.name', [
                                          idx + 1
                                      ])
                            }}
                        </span>
                        <span
                            v-if="!item.loaded"
                            class="animate-spin spinner h-20 w-20 px-5"
                        ></span>
                    </button>
                </div>
                <div v-else>{{ $t('details.layers.results.empty') }}</div>
            </div>
            <!-- layer does not exist anymore, show no data text -->
            <div v-else class="p-5">
                {{ $t('details.item.no.data') }}
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
// This screen is the view of all geometries on a specific layer interrogated in the identify (details screen)

import { defineComponent, type PropType } from 'vue';
import type { DetailsAPI } from './api/details';
import { GlobalEvents, type LayerInstance, type PanelInstance } from '@/api';
import type { IdentifyResult } from '@/geo/api';
import Toggle from '@vueform/toggle';
import { DetailsStore } from './store';

export default defineComponent({
    name: 'DetailsResultScreenV',
    props: {
        panel: {
            type: Object as PropType<PanelInstance>,
            required: true
        },
        result: {
            type: Object as PropType<IdentifyResult>,
            required: true
        },
        // the index of the item that was selected before coming to this screen (optional)
        previousItemIndex: {
            type: Number,
            default: -1
        }
    },
    components: { Toggle },
    data() {
        return {
            icon: [] as string[],
            layerExists: false, // tracks whether the layer still exists
            detailProperties: this.get(DetailsStore.properties),
            handlers: [] as Array<string>,
            details: this.$iApi.fixture.get('details') as DetailsAPI,
            hilightToggle: true,
            // toggle classes from settings panel toggle
            toggleClasses: {
                container:
                    'inline-block rounded-full outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-30',
                toggle: 'flex w-40 h-15 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none',
                toggleOn:
                    'bg-blue-500 border-blue-500 justify-start text-white',
                toggleOff:
                    'bg-gray-200 border-gray-200 justify-end text-gray-700',
                toggleOnDisabled:
                    'bg-gray-300 border-gray-300 justify-start text-gray-400 cursor-not-allowed',
                toggleOffDisabled:
                    'bg-gray-200 border-gray-200 justify-end text-gray-400 cursor-not-allowed',
                handle: 'inline-block bg-white w-15 h-15 top-0 rounded-full absolute transition-all',
                handleOn: 'left-full transform -translate-x-full',
                handleOff: 'left-0',
                handleOnDisabled:
                    'bg-gray-100 left-full transform -translate-x-full',
                handleOffDisabled: 'bg-gray-100 left-0',
                label: 'text-center w-8 border-box whitespace-nowrap select-none'
            }
        };
    },
    computed: {
        /**
         * Returns the name field for the layer specified by resultIndex.
         */
        nameField(): string | undefined {
            const layer: LayerInstance | undefined =
                this.$iApi.geo.layer.getLayer(this.result.uid);
            return layer?.nameField;
        },

        /**
         * Returns the layer name of the result
         */
        layerName(): string {
            const layer: LayerInstance | undefined =
                this.$iApi.geo.layer.getLayer(this.result.uid);
            if (
                layer &&
                this.detailProperties[layer.id] &&
                this.detailProperties[layer.id].name
            ) {
                return this.detailProperties[layer.id].name;
            }
            return layer?.name ?? '';
        }
    },
    mounted() {
        this.layerExists =
            this.$iApi.geo.layer.getLayer(this.result.uid) !== undefined;

        this.hilightToggle =
            this.$store.get(DetailsStore.hilightToggle) ?? this.hilightToggle;
        if (this.hilightToggle) {
            this.details.hilightDetailsItems(
                this.result.items,
                this.result.uid
            );
        }

        this.$iApi.updateAlert(
            this.$iApi.$vApp.$t('details.item.alert.show.list', {
                layerName: this.layerName
            })
        );

        // close this panel if layer is removed
        this.handlers.push(
            this.$iApi.event.on(
                GlobalEvents.LAYER_REMOVE,
                (removedLayer: LayerInstance) => {
                    if (this.result.uid === removedLayer.uid) {
                        this.panel.close();
                    }
                }
            )
        );

        this.handlers.push(
            this.$iApi.event.on(GlobalEvents.DETAILS_CLOSED, () =>
                this.detailsClosed()
            )
        );

        this.handlers.push(
            this.$iApi.event.on(GlobalEvents.DETAILS_MINIMIZED, () =>
                this.detailsMinimized()
            )
        );
    },
    beforeUnmount() {
        this.handlers.forEach(handler => this.$iApi.event.off(handler));
    },
    methods: {
        /**
         * Clean up for when the details screen is closed.
         */
        detailsClosed() {
            this.details.removeDetailsHilight();
            this.$store.set(DetailsStore.hilightToggle, true);
        },

        /**
         * Clean up for when the details screen is minimized.
         */
        detailsMinimized() {
            // TODO: on minimize, do we want to keep the hilight?
            this.details.removeDetailsHilight();
        },

        /**
         * Switches the panel screen to display the data for a given result. Provides the currently selected layer index and the currently selected feature index as props.
         */
        openResult(itemIndex: number) {
            this.panel.show({
                screen: 'item-screen',
                props: { result: this.result, itemIndex: itemIndex }
            });
        },

        /**
         * Updates the value of icon[idx] with the svg string of the item.
         *
         * @param {any} data data of item in identifyResult.items
         * @param {number} idx index of item in identifyResult.items
         */
        itemIcon(data: any, idx: number) {
            const layer: LayerInstance | undefined =
                this.$iApi.geo.layer.getLayer(this.result.uid);
            if (layer === undefined) {
                console.warn(
                    `could not find layer for uid ${this.result.uid} during icon lookup`
                );
                return;
            }

            const oidField = layer.oidField;
            layer.getIcon(data[oidField]).then(value => {
                if (this.icon[idx] !== value) {
                    this.icon[idx] = value;
                }
            });

            return this.icon[idx];
        },

        onHilightToggle() {
            this.details.onHilightToggle(
                this.hilightToggle,
                this.result.items,
                this.result.uid
            );
        }
    }
});
</script>

<style lang="scss"></style>
