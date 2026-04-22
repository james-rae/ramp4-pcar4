import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePanguardStore = defineStore('panguard', () => {
    const enabled = ref(true);

    function setEnabled(value: boolean) {
        enabled.value = value;
    }

    return { enabled, setEnabled };
});
