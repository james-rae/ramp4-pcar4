import { DetailsAPI } from './api/details';
import { details } from './store';
import DetailsAppbarButtonV from './appbar-button.vue';
import DetailsLayerScreenV from './layers-screen.vue';
import DetailsResultScreenV from './result-screen.vue';
import DetailsItemScreenV from './item-screen.vue';
import messages from './lang/lang.csv';

class DetailsFixture extends DetailsAPI {
    async added() {
        this.$iApi.panel.register(
            {
                'details-panel': {
                    screens: {
                        'details-screen-layers': DetailsLayerScreenV,
                        'details-screen-result': DetailsResultScreenV,
                        'details-screen-item': DetailsItemScreenV
                    },
                    style: {
                        width: '350px'
                    }
                }
            },
            { i18n: { messages } }
        );

        this.$vApp.$store.registerModule('details', details());

        this.$iApi.component('details-appbar-button', DetailsAppbarButtonV);

        // Parse the details portion of the configuration file and save any custom
        // template bindings in the details store.
        this._parseConfig(this.config);
        this.$vApp.$watch(
            () => this.config,
            value => this._parseConfig(value)
        );
    }

    removed() {
        this.$vApp.$store.unregisterModule('details');
    }
}

export default DetailsFixture;
