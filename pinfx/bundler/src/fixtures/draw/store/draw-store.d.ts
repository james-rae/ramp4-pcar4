import { DrawTypeConfig } from '../api/drawApi';
export type ActiveToolList = 'circle' | 'point' | 'polygon' | 'polyline' | 'rectangle' | 'edit' | '' | null;
export declare const useDrawStore: import('pinia').StoreDefinition<"draw", Pick<{
    supportedTypes: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        type: string;
        options?: Record<string, any> | undefined;
        enabled?: boolean | undefined;
    }[], DrawTypeConfig[] | {
        type: string;
        options?: Record<string, any> | undefined;
        enabled?: boolean | undefined;
    }[]>;
    configParsed: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    activeTool: import('../../../../vue/dist/vue.esm-bundler.js').Ref<ActiveToolList, ActiveToolList>;
    graphics: import('../../../../vue/dist/vue.esm-bundler.js').Reactive<any[]>;
    selectedGraphicId: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string | null, string | null>;
    measurementsEnabled: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    setSupportedTypes: (types: DrawTypeConfig[]) => void;
    setActiveTool: (tool: ActiveToolList) => void;
    addGraphic: (graphic: any) => string;
    removeGraphic: (id: string) => void;
    selectGraphic: (id: string) => void;
    clearSelection: () => void;
    getSelectedGraphic: () => any;
    updateGraphicGeometry: (id: string, geometry: any) => void;
    setMeasurementsEnabled: (enabled: boolean) => void;
    toggleMeasurements: () => void;
    mapNavEl: import('../../../../vue/dist/vue.esm-bundler.js').Ref<unknown, unknown>;
}, "graphics" | "supportedTypes" | "configParsed" | "activeTool" | "selectedGraphicId" | "measurementsEnabled" | "mapNavEl">, Pick<{
    supportedTypes: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        type: string;
        options?: Record<string, any> | undefined;
        enabled?: boolean | undefined;
    }[], DrawTypeConfig[] | {
        type: string;
        options?: Record<string, any> | undefined;
        enabled?: boolean | undefined;
    }[]>;
    configParsed: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    activeTool: import('../../../../vue/dist/vue.esm-bundler.js').Ref<ActiveToolList, ActiveToolList>;
    graphics: import('../../../../vue/dist/vue.esm-bundler.js').Reactive<any[]>;
    selectedGraphicId: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string | null, string | null>;
    measurementsEnabled: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    setSupportedTypes: (types: DrawTypeConfig[]) => void;
    setActiveTool: (tool: ActiveToolList) => void;
    addGraphic: (graphic: any) => string;
    removeGraphic: (id: string) => void;
    selectGraphic: (id: string) => void;
    clearSelection: () => void;
    getSelectedGraphic: () => any;
    updateGraphicGeometry: (id: string, geometry: any) => void;
    setMeasurementsEnabled: (enabled: boolean) => void;
    toggleMeasurements: () => void;
    mapNavEl: import('../../../../vue/dist/vue.esm-bundler.js').Ref<unknown, unknown>;
}, never>, Pick<{
    supportedTypes: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        type: string;
        options?: Record<string, any> | undefined;
        enabled?: boolean | undefined;
    }[], DrawTypeConfig[] | {
        type: string;
        options?: Record<string, any> | undefined;
        enabled?: boolean | undefined;
    }[]>;
    configParsed: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    activeTool: import('../../../../vue/dist/vue.esm-bundler.js').Ref<ActiveToolList, ActiveToolList>;
    graphics: import('../../../../vue/dist/vue.esm-bundler.js').Reactive<any[]>;
    selectedGraphicId: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string | null, string | null>;
    measurementsEnabled: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    setSupportedTypes: (types: DrawTypeConfig[]) => void;
    setActiveTool: (tool: ActiveToolList) => void;
    addGraphic: (graphic: any) => string;
    removeGraphic: (id: string) => void;
    selectGraphic: (id: string) => void;
    clearSelection: () => void;
    getSelectedGraphic: () => any;
    updateGraphicGeometry: (id: string, geometry: any) => void;
    setMeasurementsEnabled: (enabled: boolean) => void;
    toggleMeasurements: () => void;
    mapNavEl: import('../../../../vue/dist/vue.esm-bundler.js').Ref<unknown, unknown>;
}, "clearSelection" | "setSupportedTypes" | "setActiveTool" | "addGraphic" | "removeGraphic" | "selectGraphic" | "getSelectedGraphic" | "updateGraphicGeometry" | "setMeasurementsEnabled" | "toggleMeasurements">>;
