// This will collate all the util stuff into one endpoint

// this makes the module that gets exposed on GeoAPI under .util(s)
// TODO add proper comments

import { APIScope, InstanceAPI } from '../../api/internal';
import { EpsgLookup, GeometryAPI, ProjectionAPI, SharedUtilsAPI } from '../internal';

/*
import AttributeService from './AttributeService';
import SharedUtils from './SharedUtils';
import QueryService from './QueryService';
import HighlightService from './HighlightService';
import ProjectionService from './ProjectionService';
import SymbologyService from './SymbologyService';
import GeometryService from './GeometryService';
import OgcService from './OgcService';
*/

// TODO extend the InstanceAPI?
export class UtilsAPI extends APIScope {

    geom: GeometryAPI;
    shared: SharedUtilsAPI;
    proj: ProjectionAPI;

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

        /*
        this.attributes = new AttributeService(infoBundle);
        this.shared = new SharedUtils(infoBundle);
        this.query = new QueryService(infoBundle);
        this.highlight = new HighlightService(infoBundle);
        this.proj = new ProjectionService(infoBundle, epsgFunction);
        this.symbology = new SymbologyService(infoBundle);
        this.ogc = new OgcService(infoBundle);
        */
    }

}