import { FixtureInstance, InstanceAPI } from '../../../api';
import { useDrawStore, ActiveToolList } from '../store';
import { BaseGeometry, IdentifyGeometryProvider, MapClick } from '../../../geo/api';
export interface DrawTypeConfig {
    type: string;
    options?: Record<string, any>;
    enabled?: boolean;
}
export interface DrawFixtureConfig {
    types?: DrawTypeConfig[];
    defaultTool?: ActiveToolList;
}
export declare class DrawAPI extends FixtureInstance implements IdentifyGeometryProvider {
    store: ReturnType<typeof useDrawStore>;
    constructor(id: string, iApi: InstanceAPI);
    /**
     * Parses the draw fixture configuration and sets up the draw store.
     * @param drawConfig The configuration object for the draw fixture.
     */
    _parseConfig(drawConfig: DrawFixtureConfig): void;
    /**
     * Returns the ID of the graphics layer used by the draw fixture.
     */
    get graphicsLayerId(): string;
    /**
     * Prevent default map identify while the draw fixture is creating or editing graphics.
     */
    suppressIdentify(): boolean;
    /**
     * Finds the top-most drawn graphic hit by a map click and returns that graphic's full geometry.
     *
     * Points and lines are considered hit when they intersect a small click buffer.
     */
    getIdentifyGeometry(mapClick: MapClick): BaseGeometry | undefined;
}
