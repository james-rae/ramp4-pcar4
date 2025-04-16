import{_ as t,c as i,ag as a,o as n}from"./chunks/framework.DKzaT95j.js";const g=JSON.parse('{"title":"Legend API","description":"","frontmatter":{},"headers":[],"relativePath":"api-guides/legend.md","filePath":"api-guides/legend.md"}'),d={name:"api-guides/legend.md"};function s(l,e,o,r,h,p){return n(),i("div",null,e[0]||(e[0]=[a(`<h1 id="legend-api" tabindex="-1">Legend API <a class="header-anchor" href="#legend-api" aria-label="Permalink to &quot;Legend API&quot;">​</a></h1><p>The CRUD (Create, Read, Update, Delete) API for the legend provides an interface that is able to create, read, update, and delete legend items.</p><p>The API can be accessed through the RAMP API:</p><blockquote><p>const API = RAMPInstance.fixture.get(&#39;legend&#39;);</p></blockquote><h2 id="create" tabindex="-1">Create <a class="header-anchor" href="#create" aria-label="Permalink to &quot;Create&quot;">​</a></h2><p>Provides the following methods:</p><ul><li><code>createItem(itemConfig: any, parent?: LegendItem)</code>: creates and returns a legend item instance given a config object. This method does not add the item to the legend.</li><li><code>addItem(item: any | LegendItem, parent?: LegendItem)</code>: adds a legend item to the legend, as a child of the parent provided.</li><li><code>addLayerItem(layer: LayerInstance, parent?: LegendItem)</code>: given a layer instance, creates a configuration object as a child of the parent provided.</li></ul><h2 id="read" tabindex="-1">Read <a class="header-anchor" href="#read" aria-label="Permalink to &quot;Read&quot;">​</a></h2><p>Provides the following methods:</p><ul><li><code>getLegend()</code>: returns a direct reference to the full legend tree. Modifications made to this object will persist.</li><li><code>getLegendConfig()</code>: returns the current state of the legend tree in the form of a legend config snippet.</li><li><code>getItem(uid: string)</code>: retrieves the legend item with the uid provided.</li><li><code>getLayerItem(layer: string | LayerInstance)</code>: retrieves the layer item for the given layer/layer ID.</li><li><code>getAllExpanded(expanded: boolean)</code>: retrieves all legend items with the given expanded state.</li><li><code>getAllVisible(visibility: boolean)</code>: retrieves all legend items with the given visibility state.</li></ul><p>Note that all of the methods above return direct reference(s) to legend item(s) in the store. Therefore, directly manipulating properties of the returned item(s) will result in changes to the UI. Here is an example of this:</p><div class="language-JS vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">JS</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myItem</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> legendApi.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abcdefg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myItem.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;I have renamed my item!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// this line will cause the name to update in the UI.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>For more information on the different properties that legend items have, read the <a href="./../using-ramp4/fixtures/legend.html#legend-component-objects">legend component objects section</a>.</p><h2 id="update" tabindex="-1">Update <a class="header-anchor" href="#update" aria-label="Permalink to &quot;Update&quot;">​</a></h2><p>Provides the following methods:</p><ul><li><code>updateLegend(layer)</code>: finds the associated legend item by id and &quot;mount&quot; the layer onto the item</li><li><code>expandItems(expanded: boolean, root?: LegendEntry)</code>: sets the <code>expanded</code> state of legend items to the value provided. If <code>root</code> is provided, then the value will be set for all items under that entry.</li><li><code>showItems(visibility: boolean, root?: LegendEntry)</code>: sets the <code>visible</code> state of legend items to the value provided. If <code>root</code> is provided, then the value will be set for all items under that entry.</li></ul><h2 id="delete" tabindex="-1">Delete <a class="header-anchor" href="#delete" aria-label="Permalink to &quot;Delete&quot;">​</a></h2><p>Provides the following methods:</p><ul><li><code>removeItem(item: string | LegendItem)</code>: removes the legend item with the provided uid, or item instance.</li><li><code>removeLayerItem(layer: string | LayerInstance)</code>: removes the legend item connected to the layer ID or instance provided.</li></ul>`,19)]))}const m=t(d,[["render",s]]);export{g as __pageData,m as default};
