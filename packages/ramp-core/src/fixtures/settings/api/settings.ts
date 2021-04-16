import { FixtureInstance } from '@/api';
import { LayerInstance } from '@/geo/internal';

export class SettingsAPI extends FixtureInstance {
    /**
     * Opens the settings panel. Passes the provided LayerInstance object to the panel.
     * @param layer
     */
    open(layer: LayerInstance): void {
        this.$iApi.panel.open({ id: 'settings-panel', props: { layer: layer } });
    }
}
