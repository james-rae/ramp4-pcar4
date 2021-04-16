import { APIScope, InstanceAPI } from '../../api/internal';
import { UrlWrapper } from '../internal';

// TODO check if we actually need this library. Does vue have its own internal web request library?
import axios from 'axios';
import to from 'await-to-js';

type WFSResponse = {
    data: { numberMatched: number; features: any[] };
};
type WFSData = { type: string; features: any[] };

type QueryMap = { [name: string]: string };

export class OgcUtils extends APIScope {

    // TODO update logic in this function to get changes done in https://github.com/fgpv-vpgf/fgpv-vpgf/pull/3858
    // TODO consider changing the long list of functon params into one options param object
    /**
     *
     * @param {string} url the current url to the wfs service
     * @param {number} [totalCount=-1] the total number of items available on that service
     * @param {number} [startindex=0] the index to start the querying from. default 0
     * @param {number} [limit=1000] the limit of how many results we want returned. default 10
     * @param {WFSData} [wfsData={
     *                 type: 'FeatureCollection',
     *                 features: []
     *             }] the resulting GeoJSON being populated as we receive layer information
     * @param {boolean} [xyInAttribs=false] true if point co-ords should be copied to attribute values
     * @returns {Promise<any>} a promise resolving with the layer GeoJSON
     * @memberof WFSServiceSource
     */
     async loadWfsData(
        url: string,
        totalCount: number = -1,
        startindex: number = 0,
        limit: number = 1000,
        wfsData: WFSData = {
            type: 'FeatureCollection',
            features: []
        },
        xyInAttribs: boolean = false
    ): Promise<any> {
        let newQueryMap: QueryMap = { startindex: startindex.toString(), limit: limit.toString() };

        // it seems that some WFS services do not return the number of matched records with every request
        // so, we need to get that explicitly first
        if (totalCount === -1) {
            // get the total number of records
            newQueryMap = {
                request: 'GetFeature',
                resultType: 'hits',
                limit: '0'
            };
        }

        // deconstruct the url and apply any updates to it.
        const wrapper = new UrlWrapper(url);
        const requestUrl = wrapper.updateQuery(newQueryMap);

        // use angular to make web request, instead of esriRequest. this is because we can't rely on services having jsonp
        const [error, response] = await to<WFSResponse>(axios.get(requestUrl));

        if (!response) {
            console.error(`WFS data failed to load for ${url}`, error);
            return Promise.reject(error);
        }

        const data = response.data;

        // save the total number of records and start downloading the data
        if (totalCount === -1) {
            totalCount = response.data.numberMatched;
            // note we pass url and not requestUrl here, becuase requestUrl is currently a count request
            return this.loadWfsData(url, totalCount, startindex, limit, wfsData, xyInAttribs);
        }

        wfsData.features = [...wfsData.features, ...data.features]; // update the received features array

        // check if all the requested features are downloaded
        if (data.features.length < totalCount - startindex) {
            // the limit is either 1k or the number of remaining features
            const limit = Math.min(1000, totalCount - startindex - data.features.length);
            return this.loadWfsData(requestUrl, totalCount, data.features.length + startindex, limit, wfsData, xyInAttribs);
        } else {
            if (xyInAttribs && wfsData.features.length > 0 && wfsData.features[0].geometry.type === 'Point') {
                // attempt copy of points to attributes.
                // if we extend this logic to all feature based layers (not just wfs),
                // suggest porting this block to geoApi.
                // for now, easier to modify as early as possible in the transformation

                wfsData.features.forEach(f => {
                    const p = f.geometry.coordinates;
                    f.properties.rvInternalCoordX = p[0];
                    f.properties.rvInternalCoordY = p[1];
                });
            }
            return wfsData;
        }
    }
}