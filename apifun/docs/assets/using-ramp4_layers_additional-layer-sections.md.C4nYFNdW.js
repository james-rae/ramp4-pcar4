import{_ as e,c as d,ag as a,o as r}from"./chunks/framework.BZ3cXYXD.js";const m=JSON.parse('{"title":"Additional Layer Information","description":"","frontmatter":{},"headers":[],"relativePath":"using-ramp4/layers/additional-layer-sections.md","filePath":"using-ramp4/layers/additional-layer-sections.md"}'),i={name:"using-ramp4/layers/additional-layer-sections.md"};function o(s,t,l,n,c,p){return r(),d("div",null,t[0]||(t[0]=[a('<h1 id="additional-layer-information" tabindex="-1">Additional Layer Information <a class="header-anchor" href="#additional-layer-information" aria-label="Permalink to &quot;Additional Layer Information&quot;">​</a></h1><ul><li><a href="#control-names">Control Names</a></li><li><a href="#image-format-types">Image Format Types</a></li><li><a href="#layer-abilities">Layer Abilities</a></li></ul><h2 id="control-names" tabindex="-1">Control Names <a class="header-anchor" href="#control-names" aria-label="Permalink to &quot;Control Names&quot;">​</a></h2><p>These represent control names that can be enabled or disabled throughout the standard application fixtures.</p><ul><li><code>boundaryZoom</code>: Zoom map to layer&#39;s boundary.</li><li><code>datatable</code>: Access to the Data Table fixture panel.</li><li><code>identify</code>: Layer reacts to identify requests.</li><li><code>metadata</code>: Access to the Metadata fixture panel.</li><li><code>opacity</code>: Layer opacity.</li><li><code>refresh</code>: Time-sensitive layer refresh interval. <strong>Currently not supported</strong>.</li><li><code>reload</code>: Reload the layer.</li><li><code>remove</code>: Remove the layer from the map / application.</li><li><code>settings</code>: Access to the Settings fixture panel.</li><li><code>symbology</code>: Access to the symbology stack in the Legend fixture panel.</li><li><code>visibility</code>: Layer visibility.</li></ul><p>Data Layers will ignore settings that are map-related, with the exception of <code>visibility</code>. In this case, visibility would control if attribute data is considered visible.</p><h2 id="image-format-types" tabindex="-1">Image Format Types <a class="header-anchor" href="#image-format-types" aria-label="Permalink to &quot;Image Format Types&quot;">​</a></h2><p>These represent formats an ESRI Map Image Layer can return.</p><ul><li><code>png</code></li><li><code>png8</code></li><li><code>png24</code></li><li><code>png32</code></li><li><code>jpg</code></li><li><code>pdf</code></li><li><code>bmp</code></li><li><code>gif</code></li><li><code>svg</code></li></ul><h2 id="arcade-formulas" tabindex="-1">Arcade Formulas <a class="header-anchor" href="#arcade-formulas" aria-label="Permalink to &quot;Arcade Formulas&quot;">​</a></h2><p>Some properties on RAMP Attribute-supporting layers use Arcade formulas with a custom profile. This section lists the variables in that profile.</p><p>For more information about Arcade formulas in general, see the <a href="https://developers.arcgis.com/javascript/latest/arcade/" target="_blank" rel="noreferrer">ESRI Arcade</a> page.</p><h3 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h3><p>Use the <code>$attr</code> variable to access attribute values. E.g.:</p><div class="language-txt vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;My prefix &#39; + $attr.myfieldname</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="layer-abilities" tabindex="-1">Layer Abilities <a class="header-anchor" href="#layer-abilities" aria-label="Permalink to &quot;Layer Abilities&quot;">​</a></h2><p>This indicates which layer types can support certain sets of abilities</p><table tabindex="0"><thead><tr><th>Layer Type</th><th>Map Layer</th><th>Identify</th><th>Attributes</th><th>Local Data</th><th>Client Data Format</th></tr></thead><tbody><tr><td>ESRI Feature Layer</td><td>Yes</td><td>Yes</td><td>Yes</td><td>No</td><td>Vector</td></tr><tr><td>ESRI Map Image Layer</td><td>Yes</td><td>Yes</td><td>No</td><td>No</td><td>Raster</td></tr><tr><td>ESRI M.I.L. Feature Sublayer</td><td>Yes</td><td>Yes</td><td>Yes</td><td>No</td><td>Raster</td></tr><tr><td>ESRI M.I.L. Raster Sublayer</td><td>Yes</td><td>No</td><td>No</td><td>No</td><td>Raster</td></tr><tr><td>ESRI Image Server Layer</td><td>Yes</td><td>No</td><td>No</td><td>No</td><td>Raster</td></tr><tr><td>ESRI Tile Layer</td><td>Yes</td><td>No</td><td>No</td><td>No</td><td>Raster</td></tr><tr><td>OGC WMS Layer</td><td>Yes</td><td>Yes</td><td>No</td><td>No</td><td>Raster</td></tr><tr><td>OGC WFS 3.0 Layer</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Vector</td></tr><tr><td>GeoJSON Layer</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Vector</td></tr><tr><td>Zipped GeoJSON Layer</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Vector</td></tr><tr><td>CSV Layer</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Vector</td></tr><tr><td>Shapefile Layer</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Vector</td></tr><tr><td>FlatGeobuf Layer</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Vector</td></tr><tr><td>Zipped FlatGeobuf Layer</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Vector</td></tr><tr><td>OpenStreetMap Tile Layer</td><td>Yes</td><td>No</td><td>No</td><td>No</td><td>Raster</td></tr><tr><td>ESRI Table Layer</td><td>No</td><td>No</td><td>Yes</td><td>No</td><td>N/A</td></tr><tr><td>Non Spatial CSV Layer</td><td>No</td><td>No</td><td>Yes</td><td>Yes</td><td>N/A</td></tr><tr><td>Compact JSON Layer</td><td>No</td><td>No</td><td>Yes</td><td>Yes</td><td>N/A</td></tr></tbody></table>',18)]))}const y=e(i,[["render",o]]);export{m as __pageData,y as default};
