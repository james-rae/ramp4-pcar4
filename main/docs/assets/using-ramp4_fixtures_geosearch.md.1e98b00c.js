import{_ as e,o as a,c as s,V as t}from"./chunks/framework.67234322.js";const o="/ramp4-pcar4/main/docs/geosearch-search.png",r="/ramp4-pcar4/main/docs/geosearch-top-filters.png",n="/ramp4-pcar4/main/docs/geosearch-bottom-filters.png",i="/ramp4-pcar4/main/docs/geosearch-results.png",w=JSON.parse('{"title":"Geosearch","description":"","frontmatter":{},"headers":[],"relativePath":"using-ramp4/fixtures/geosearch.md","filePath":"using-ramp4/fixtures/geosearch.md"}'),l={name:"using-ramp4/fixtures/geosearch.md"},c=t('<h1 id="geosearch" tabindex="-1">Geosearch <a class="header-anchor" href="#geosearch" aria-label="Permalink to &quot;Geosearch&quot;">​</a></h1><p>The Geosearch component is contained inside a panel in the application. Geosearch makes use of the <a href="https://geogratis.gc.ca/" target="_blank" rel="noreferrer">Geogratis services</a>, in particular the <a href="https://www.nrcan.gc.ca/science-and-data/science-and-research/earth-sciences/geography/topographic-information/web-services/geolocation-service/17304" target="_blank" rel="noreferrer">Geolocation service</a> and the <a href="https://www.nrcan.gc.ca/maps-tools-and-publications/maps/geographical-names-canada/application-programming-interface-api/9249" target="_blank" rel="noreferrer">Geoname service</a>.</p><h2 id="component-breakdown" tabindex="-1">Component Breakdown <a class="header-anchor" href="#component-breakdown" aria-label="Permalink to &quot;Component Breakdown&quot;">​</a></h2><p>The Geosearch component can be broken down into multiple parts: search bar, Geosearch filters, and a list of returned Geosearch results.</p><h3 id="geosearch-bar" tabindex="-1">Geosearch Bar: <a class="header-anchor" href="#geosearch-bar" aria-label="Permalink to &quot;Geosearch Bar:&quot;">​</a></h3><p>In the header of the Geosearch panel, there is a search bar which allows users to search for various locations in Canada using any of the supported search types mentioned below. To the right of the search bar is the usual pin and close panel buttons.</p><p><img src="'+o+'" alt=""></p><h4 id="supported-search-types" tabindex="-1">Supported Search Types <a class="header-anchor" href="#supported-search-types" aria-label="Permalink to &quot;Supported Search Types&quot;">​</a></h4><p><strong>Keyword search</strong>: Type any keyword into Geosearch to display a list of results that contains the keyword.</p><ul><li>each search result consists of: location name (with search keyword highlighted), location province, and location type (lake, city, town, etc.)</li><li>street addresses are prioritized in the list of results</li><li>click on any individual result to mark its coordinates and zoom the map to center around this location</li></ul><p><strong>FSA search</strong>: A <strong>forward sortation area (FSA)</strong> is a way to designate a geographical area based on the first three characters in a Canadian postal code. All postal codes that start with the same three characters are considered an <strong>FSA</strong>.</p><ul><li>a search using FSA will display a list of results in the vicinity of that area</li><li>the very first result is a location of the FSA itself, click to zoom and center the map on the FSA</li><li>example: type in <strong>M3H</strong></li></ul><p><strong>Latitude/Longitude search</strong>: Search using lat/long coordinates to display a list of results in the vicinity of that map point.</p><ul><li>similarly to FSA search, the first result will be a location of those coordinates entered, click this to zoom and center the map on the map point</li><li>lat/long search recognizes spaces, commas, semicolons, or vertical bars (|) to separate the co-ordinates</li><li>example: type in <strong>54.3733, -91.7417</strong></li></ul><p><strong>NTS search</strong>: <strong>National Topographic System (NTS)</strong> is a system used for providing general topographic maps of the country, producing details on landforms, lakes/rivers, forests, roads and railways, etc.</p><ul><li>the NTS is split into three major zones: &quot;Southern zone&quot; - latitudes between 40°N and 68°N, &quot;Arctic zone&quot; - latitudes between 68°N and 80°N, and the &quot;High Arctic zone&quot; - latitudes between 80°N and 88°N</li><li>an NTS map number consists of a string containing a number identifying a map sheet, a letter identifying a map area, and a number identifying the scale map sheet</li><li>likewise, the first result will be a location of the NTS map number, click to center map on this area</li><li>example: type in <strong>030M13</strong></li></ul><h3 id="geosearch-filters" tabindex="-1">Geosearch Filters: <a class="header-anchor" href="#geosearch-filters" aria-label="Permalink to &quot;Geosearch Filters:&quot;">​</a></h3><p>The row of options immediately below the search bar contains two dropdown boxes that allow you to filter the search results by their <strong>province</strong> (Alberta, British Columbia, Ontario, etc.) and/or <strong>type</strong> (lake, town, river, etc.). To the right of these two filters is a <strong>Clear Filters</strong> button, which clears all existing selected filter options.</p><p><img src="'+r+'" alt=""></p><p>Near the bottom of the Geosearch panel, there is a checkbox labeled <strong>visible on map</strong>. Checking this box will filter the results to only show locations that are visible in the current map extent. Moving the map around or zooming in/out with this box selected will be reflected by updating the results to display locations within the new map extent.</p><p><img src="'+n+'" alt=""></p><h3 id="geosearch-results" tabindex="-1">Geosearch Results: <a class="header-anchor" href="#geosearch-results" aria-label="Permalink to &quot;Geosearch Results:&quot;">​</a></h3><p>When searching for a location, a list of matched results with all appropriate filters applied (map extent, province, type) will be displayed. This takes up the main body of the Geosearch panel. There is an upper limit of 100 results possible to be displayed. If no matching results are found, then a message will appear in place of the results to inform the users.</p><p><img src="'+i+`" alt=""></p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>The Geosearch panel has multiple options that can be adjusted through the configuration file. Though the Geosearch fixture is designed with the GeoGratis API in mind, a <code>serviceUrls</code> object with the following properties can define alternate URLs for the lookup service:</p><ul><li><code>geoLocateUrl: string</code>, endpoint for the Geolocation service</li><li><code>geoNameUrl: string</code>, endpoint for the Geoname service</li><li><code>geoProvinceUrl: string</code>, endpoint for province codes provided by the Geoname service</li><li><code>geoTypesUrl: string</code>, endpoint for type codes provided by the Geoname service</li></ul><p>Also, a <code>settings</code> object enables additional fixture customization:</p><ul><li><code>categories: string[]</code>, filter by <a href="https://geogratis.gc.ca/services/geoname/en/codes/concise.json" target="_blank" rel="noreferrer">concise type</a> or street address (&#39;ADDR&#39;) when using the Geoname service</li><li><code>sortOrder: string[]</code>, order search results based on category types, where missing types are appended to the bottom of the sorted list</li><li><code>disabledSearchTypes: string[]</code>, omit results for given <a href="#supported-search-types">search types</a> (<code>LAT/LNG</code>, <code>FSA</code>, and <code>NTS</code>)</li><li><code>maxResults: number</code>, specifies the maximum number of results from a query</li><li><code>officialOnly: boolean</code>, results only use official names for geographic names</li></ul><p>An example of a configured Geosearch panel is below</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">geosearch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    settings: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        categories: [&#39;CITY&#39;, &#39;TOWN&#39;, &#39;VILG&#39;, &#39;ADDR&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">        sortOrder: [&#39;TOWN&#39;, &#39;CITY&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">        disabledSearchTypes: [&#39;FSA&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">        maxResults: 20</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,31),p=[c];function h(d,u,g,m,f,b){return a(),s("div",null,p)}const v=e(l,[["render",h]]);export{w as __pageData,v as default};
