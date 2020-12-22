import { FixtureInstance } from '@/api';
// BAAH
// import BaseLayer from 'rampgeoapi/dist/layer/BaseLayer';

export class SettingsAPI extends FixtureInstance {
    /**
     * Opens the settings panel. Passes the provided BaseLayer object to the panel.
     * @param layer
     */
    open(layer: any): void{ // BaseLayer): void { // BAAH
        this.$iApi.panel.open({ id: 'settings-panel', props: { layer: layer } });
    }
}
