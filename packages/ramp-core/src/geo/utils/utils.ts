// This will collate all the util stuff into one endpoint

// this makes the module that gets exposed on GeoAPI under .util(s)
// TODO add proper comments

import esri = __esri;
import { EpsgLookup, GeometryAPI } from '../internal';

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
export class UtilsAPI {

    geom: GeometryAPI;

    /*
    attributes: AttributeService; // TODO do we want shorter name "attribs" or "attributes"
    shared: SharedUtils;
    query: QueryService;
    highlight: HighlightService;
    proj: ProjectionService;
    symbology: SymbologyService;
    ogc: OgcService;
    */

    constructor (epsgFunction: EpsgLookup | undefined = undefined) {

        this.geom = new GeometryAPI();

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