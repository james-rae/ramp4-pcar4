<template>
    <button
        ref="buttonRef"
        type="button"
        :data-layer-id="layerId"
        :data-direction="direction"
        :class="`
            pb-10 p-8
            ${direction === 'up' ? 'rotate-180' : ''}
            ${disabled ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-black'}
        `"
        v-focus-item
        v-tippy="{ content: t(`layer-reorder.move.${direction}`), placement: 'top-start', aria: 'describedby' }"
        :aria-disabled="disabled"
        :aria-label="t(`layer-reorder.move.${direction}`)"
    >
        <svg class="fill-current w-20 h-20" viewBox="0 0 23 21">
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        </svg>
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const buttonRef = ref<HTMLButtonElement | null>(null);
defineExpose({ buttonRef });

defineProps({
    disabled: {
        type: Boolean
    },
    direction: {
        type: String,
        required: true
    },
    layerId: {
        type: [String, Number],
        required: true
    }
});
</script>

<style lang="scss" scoped>
.rotate-180 {
    transform: rotate(-180deg);
}
</style>
