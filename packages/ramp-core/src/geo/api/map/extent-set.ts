import { SpatialReference, Extent, RampExtentSetConfig } from '@/geo/api';

export class ExtentSet {
    private _id: string;
    private _sr: SpatialReference;
    private _defaultExtent: Extent;
    private _fullExtent: Extent | undefined;
    private _maximumExtent: Extent | undefined;

    constructor(
        id: string,
        sr: SpatialReference,
        defaultExtent: Extent,
        fullExtent: Extent | undefined = undefined,
        maximumExtent: Extent | undefined = undefined
    ) {
        this._id = id;
        this._sr = sr;
        this._defaultExtent = defaultExtent;
        this._fullExtent = fullExtent;
        this._maximumExtent = maximumExtent;
    }

    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get spatialReference(): SpatialReference {
        return this._sr;
    }

    set spatialReference(sr: SpatialReference) {
        this._sr = sr;
    }

    get defaultExtent(): Extent {
        return this._defaultExtent;
    }

    set defaultExtent(extent: Extent) {
        this._defaultExtent = extent.clone();
    }

    /**
     * @return {Extent} the full extent (returns default extent if not provided)
     */
    get fullExtent(): Extent {
        if (!this._fullExtent) {
            return this.defaultExtent;
        }
        return this._fullExtent;
    }

    set fullExtent(extent: Extent) {
        this._fullExtent = extent.clone();
    }

    /**
     * @return {Extent} the maximum extent (returns full extent if not provided)
     */
    get maximumExtent(): Extent {
        if (!this._maximumExtent) {
            return this.fullExtent;
        }
        return this._maximumExtent;
    }

    set maximumExtent(extent: Extent) {
        this._maximumExtent = extent.clone();
    }

    /**
     * Parses a RAMP API Extent Set config into an ExtentSet object
     * @param {RampExtentSetConfig} extentSetConfig the extent set config
     * @returns {ExtentSet} the parsed ExtentSet object
     */
    static fromConfig(extentSetConfig: RampExtentSetConfig): ExtentSet {
        return new ExtentSet(
            extentSetConfig.id,
            SpatialReference.fromConfig(extentSetConfig.spatialReference),
            Extent.fromConfig(
                `${extentSetConfig.id}-extent-default`,
                extentSetConfig.default,
                extentSetConfig.spatialReference
            ),
            extentSetConfig.full !== undefined
                ? Extent.fromConfig(
                      `${extentSetConfig.id}-extent-full`,
                      extentSetConfig.full,
                      extentSetConfig.spatialReference
                  )
                : undefined,
            extentSetConfig.maximum !== undefined
                ? Extent.fromConfig(
                      `${extentSetConfig.id}-extent-maximum`,
                      extentSetConfig.maximum,
                      extentSetConfig.spatialReference
                  )
                : undefined
        );
    }
}
