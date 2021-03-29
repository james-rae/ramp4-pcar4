// TODO add proper comments

import { ArcServerAttributeLoader, AttribFC, AttribLayer, AttributeLoaderBase, AttributeLoaderDetails, Attributes, AttributeSet, BaseGeometry, BaseRenderer,
    CommonFC, CommonLayer, DataFormat, Extent, FieldDefinition, Filter, GetGraphicParams, GetGraphicResult, GetGraphicServiceDetails, LayerBase,
    LegendSymbology, QueryFeaturesArcServerParams, QueryFeaturesParams, QuickCache, RampLayerFieldMetadataConfig, ScaleSet, TabularAttributeSet } from '../../internal';

import { EsriExtent, EsriField, EsriRendererUtils, EsriRequest } from '../../esri';

import FeatureLayer from './index';

export class FeatureFC extends AttribFC {

    // @ts-ignore
    protected parentLayer: FeatureLayer;
    tooltipField: string;


    constructor (parent: FeatureLayer, layerIdx: number = 0) {
        super(parent, layerIdx);
        this.dataFormat = DataFormat.ESRI_FEATURE;
        this.tooltipField = '';
    }

    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     */
    applySqlFilter (exclusions: Array<string> = []): void {
        if (!this.parentLayer.esriLayer) {
            this.noLayerErr();
            return;
        }

        const sql = this.filter.getCombinedSql(exclusions);
        // feature layer on a server
        this.parentLayer.esriLayer.definitionExpression = sql;
    }

}