// This will collate all the util stuff into one endpoint

// this makes the module that gets exposed on GeoAPI under .util(s)
// TODO add proper comments

import { APIScope, InstanceAPI } from '../../api/internal';
import { AttributeAPI, EpsgLookup, GeometryAPI, ProjectionAPI, QueryAPI, SharedUtilsAPI, SymbologyAPI } from '../internal';

/*
import HighlightService from './HighlightService';
import OgcService from './OgcService';
*/

// TODO extend the InstanceAPI?
export class UtilsAPI extends APIScope {

    attributes: AttributeAPI;
    geom: GeometryAPI;
    proj: ProjectionAPI;
    query: QueryAPI;
    shared: SharedUtilsAPI;
    symbology: SymbologyAPI;

    /*
    attributes: AttributeService; // TODO do we want shorter name "attribs" or "attributes"
    shared: SharedUtils;
    query: QueryService;
    highlight: HighlightService;
    proj: ProjectionService;
    symbology: SymbologyService;
    ogc: OgcService;
    */

    constructor (iApi: InstanceAPI, epsgFunction: EpsgLookup | undefined = undefined) {
        super(iApi);

        this.geom = new GeometryAPI();
        this.shared = new SharedUtilsAPI();
        this.proj = new ProjectionAPI(iApi, epsgFunction);
        this.attributes = new AttributeAPI();
        this.symbology = new SymbologyAPI();
        this.query = new QueryAPI();

        /*

        this.highlight = new HighlightService(infoBundle);
        this.ogc = new OgcService(infoBundle);
        */
    }

}