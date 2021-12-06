import { FixtureInstance } from '@/api';
import { OverviewmapConfig, OverviewmapStore } from '../store';

export class OverviewmapAPI extends FixtureInstance {
    /**
     * Parses the overview map config JSON snippet from the config file and save to the fixture store.
     *
     * @param {OverviewmapConfig} [OverviewmapConfig]
     * @memberof OverviewmapAPI
     */
    _parseConfig(overviewmapConfig?: OverviewmapConfig) {
        if (!overviewmapConfig) return;
        let mapConfig = {
            extentSets: overviewmapConfig.map.extentSets,
            lodSets: overviewmapConfig.map.lodSets,
            tileSchemas: overviewmapConfig.map.tileSchemas,
            basemaps: [overviewmapConfig.map.basemap],
            initialBasemapId: overviewmapConfig.map.basemap.id
        };
        this.$vApp.$store.set(OverviewmapStore.mapConfig, mapConfig);
        this.$vApp.$store.set(
            OverviewmapStore.startMinimized,
            overviewmapConfig.startMinimized
        );
    }

    get config(): OverviewmapConfig {
        return super.config;
    }
}
