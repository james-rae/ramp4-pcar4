import { markRaw } from 'vue';
import { WizardAPI } from './api/wizard';
import { LayerSource } from './store/layer-source';
import messages from './lang/lang.csv?raw';
import { useWizardStore } from './store';

class WizardFixture extends WizardAPI {
    added() {
        // console.log(`[fixture] ${this.id} added`);

        this.$iApi.panel.register(
            {
                wizard: {
                    screens: {
                        'wizard-screen': () => markRaw(import('./screen.vue'))
                    },
                    button: {
                        tooltip: 'wizard.title',
                        icon: '<svg class="fill-current" viewBox="0 0 23 21"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>'
                    },
                    style: {
                        width: '350px'
                    },
                    alertName: 'wizard.title'
                }
            },
            {
                i18n: { messages }
            }
        );

        this.handlePanelTeleports(['wizard']);

        let layerSource: LayerSource | undefined = new LayerSource(this.$iApi);

        const wizardStore = useWizardStore(this.$vApp.$pinia);
        //@ts-expect-error TODO: explain why this is needed or remove
        wizardStore.layerSource = layerSource;

        // override the removed method here to get access to scope
        this.removed = () => {
            // console.log(`[fixture] ${this.id} removed`);
            this.$iApi.panel.remove('wizard');
            layerSource = undefined; // will be cleaned up by JS garbage collector
            wizardStore.$reset();
        };
    }
}

export default WizardFixture;
