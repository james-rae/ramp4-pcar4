import{_ as a,c as i,ag as e,o as n}from"./chunks/framework.DKzaT95j.js";const k=JSON.parse('{"title":"Basic Layer Properties","description":"","frontmatter":{},"headers":[],"relativePath":"using-ramp4/layers/basic-properties.md","filePath":"using-ramp4/layers/basic-properties.md"}'),t={name:"using-ramp4/layers/basic-properties.md"};function l(p,s,r,h,o,d){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="basic-layer-properties" tabindex="-1">Basic Layer Properties <a class="header-anchor" href="#basic-layer-properties" aria-label="Permalink to &quot;Basic Layer Properties&quot;">​</a></h1><h2 id="controls" tabindex="-1">controls <a class="header-anchor" href="#controls" aria-label="Permalink to &quot;controls&quot;">​</a></h2><p><em>array of string</em></p><p>Defines what controls should be available for this layer in the app. This list acts as the &quot;layer default&quot;, but controls on specific fixtures can be overridden by that fixture&#39;s configuration structure (typically in the <code>fixtures</code> object of the layer configuration, or the configuration object of the fixture itself).</p><p>See the <a href="./additional-layer-sections.html#control-names">list of control names</a> for valid values. If missing, all the valid controls will be included as a default. If <code>disabledControls</code> is also present on the layer config, that list will take priority and <strong>any specified controls list will be ignored</strong>.</p><p>Generally speaking, this config option is useful when there is a small list of controls to enable, avoiding defining a long list in <code>disabledControls</code>.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    controls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;visibility&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;opacity&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="cosmetic" tabindex="-1">cosmetic <a class="header-anchor" href="#cosmetic" aria-label="Permalink to &quot;cosmetic&quot;">​</a></h2><p><em>boolean</em>, only applies to <a href="./additional-layer-sections.html#layer-abilities">map layers</a></p><p>Indicates if a layer should be treated as cosmetic; i.e. something that appears on the map to give additional context, but is generally not interacted with when using common functions. If missing, defaults to <code>false</code>.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    cosmetic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="disabledcontrols" tabindex="-1">disabledControls <a class="header-anchor" href="#disabledcontrols" aria-label="Permalink to &quot;disabledControls&quot;">​</a></h2><p><em>array of string</em></p><p>Defines what controls should be omitted / disabled for this layer in the app. This list acts as the &quot;layer default&quot;, but disabled controls on specifc fixtures can be overridden by that fixture&#39;s configuration structure (typically in the <code>fixtures</code> object of the layer configuration, or the configuration object of the fixture itself).</p><p>See the <a href="./additional-layer-sections.html#control-names">list of control names</a> for valid values. If missing, enabled controls will be determined by the <code>controls</code> config value, or all valid controls will be enabled if <code>controls</code> is also missing.</p><p>Generally speaking, this config option is useful when there is a small list of controls to disable, avoiding defining a long list in <code>controls</code>.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    disabledControls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;identify&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;remove&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="expecteddrawtime" tabindex="-1">expectedDrawTime <a class="header-anchor" href="#expecteddrawtime" aria-label="Permalink to &quot;expectedDrawTime&quot;">​</a></h2><p><em>integer</em>, only applies to <a href="./additional-layer-sections.html#layer-abilities">map layers</a></p><p>Defines a time limit, in milliseconds, for the expected time it would take for the layer to draw itself (i.e. the fetching and processing of data to render the layer in the current extent). If the limit is exceeded, a notification will be issued in the app. If missing, the map level configuration will be used. This defaults to 10000 (10 seconds). Setting to <code>0</code> will disable the notification.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    expectedDrawTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="expectedloadtime" tabindex="-1">expectedLoadTime <a class="header-anchor" href="#expectedloadtime" aria-label="Permalink to &quot;expectedLoadTime&quot;">​</a></h2><p><em>integer</em></p><p>Defines a time limit, in milliseconds, for the expected time it would take for the layer load (i.e. establishing contact with a server, the fetching of metadata, the downloading of data for file or WFS type layers). If the limit is exceeded, a notification will be issued in the app. If missing, the map level configuration will be used. This defaults to 10000 (10 seconds). Setting to <code>0</code> will disable the notification.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    expectedLoadTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="extent" tabindex="-1">extent <a class="header-anchor" href="#extent" aria-label="Permalink to &quot;extent&quot;">​</a></h2><p><em>object</em>, only applies to <a href="./additional-layer-sections.html#layer-abilities">map layers</a></p><p>Defines a custom extent for the layer. Will be used in scenarios like the &quot;Zoom To Layer Boundary&quot; legend menu. If missing, the extent provided by the service or the extent of file contents will be used.</p><p>The object structure matches the ArcGIS Server <a href="https://developers.arcgis.com/documentation/common-data-types/geometry-objects.htm" target="_blank" rel="noreferrer">2D Envelope</a> schema. Spatial Reference schema is on the same page, we do not currently support <code>vcs</code> type references.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    extent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        xmin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">22.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ymin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">33.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        xmax</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">44.4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ymax</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">55.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        spatialReference</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            wkid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4326</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="maxloadtime" tabindex="-1">maxLoadTime <a class="header-anchor" href="#maxloadtime" aria-label="Permalink to &quot;maxLoadTime&quot;">​</a></h2><p><em>integer</em></p><p>Defines a time limit, in milliseconds, for the max amount of time it would take for the layer load (i.e. establishing contact with a server, the fetching of metadata, the downloading of data for file or WFS type layers). If the limit is exceeded, the layer will stop loading and produce an error. The value must be greater than 0. If 0 or missing, the map level configuration will be used. This defaults to 90000 (90 seconds).</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    maxLoadTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="metadata" tabindex="-1">metadata <a class="header-anchor" href="#metadata" aria-label="Permalink to &quot;metadata&quot;">​</a></h2><p><em>object</em></p><p>Defines information about metadata for the layer. Only used if the <code>metadata</code> fixture (or comparable custom alternative) has been loaded in the application. In the standard case, the information is used to populate the metadata panel. If missing, the metadata controls option will not be shown for the layer.</p><p>TODO is there a name for the specification we support? What happens if it&#39;s just text file, is raw text shown?</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;My Custom Metadata Panel Name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://mydomain.ca/my_metadata_content.xml&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h2><p><em>string</em></p><p>Defines the name of the layer. If missing, the name defined on the layer source will be used if possible.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Fancy Layer&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="state" tabindex="-1">state <a class="header-anchor" href="#state" aria-label="Permalink to &quot;state&quot;">​</a></h2><p><em>object</em></p><p>Defines the desired state of the layer at load time.</p><ul><li><code>visibility</code>: Boolean. If missing, will attempt to find an initial setting from the server, otherwise defaults to <code>true</code>.</li><li><code>opacity</code>: Decimal between 0 and 1. If missing, will default to full opacity.</li><li><code>identify</code>: Boolean. Ignored by layers that do not support identify requests. If missing, will default to <code>true</code>.</li><li><code>hovertips</code>: Boolean. Ignored by layers that do not support hover tips (usually raster-based layers). If missing, will default to <code>true</code>.</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    state</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        visibility</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        opacity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        identify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        hovertips</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="system" tabindex="-1">system <a class="header-anchor" href="#system" aria-label="Permalink to &quot;system&quot;">​</a></h2><p><em>boolean</em></p><p>Indicates if a layer is used / managed by a RAMP functionality. Some examples would be the layer that houses the North Pole marker, or feature highlighting. The value is informational, and does not change anything about the layer itself. In a typical scenario, a layer defined in a RAMP configuration will not need to set this. If missing, defaults to <code>false</code>.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    system</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,52)]))}const m=a(t,[["render",l]]);export{k as __pageData,m as default};
