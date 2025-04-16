import{_ as a,o as n,c as s,S as t}from"./chunks/framework.075d7704.js";const h=JSON.parse('{"title":"Extent Guard","description":"","frontmatter":{},"headers":[],"relativePath":"using-ramp4/fixtures/extentguard.md","filePath":"using-ramp4/fixtures/extentguard.md"}'),i={name:"using-ramp4/fixtures/extentguard.md"};function l(r,e,o,p,c,d){return n(),s("div",null,e[0]||(e[0]=[t(`<h1 id="extent-guard" tabindex="-1">Extent Guard <a class="header-anchor" href="#extent-guard" aria-label="Permalink to &quot;Extent Guard&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The extent guard fixture allows a map view to be restricted to a geographical extent. If the center of the map view goes outside of the bounds, the map will pan back within the bounds.</p><p>The extent guard fixture is not a default fixture, meaning it <a href="./custom-fixtures.html#pre-made-fixtures">must be added to the instance</a>.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>Configuration should be placed in the <code>fixtures</code> object of the config file, keyed by the fixture name. Extent Guard supports two modes of operation.</p><h3 id="always-on" tabindex="-1">Always On <a class="header-anchor" href="#always-on" aria-label="Permalink to &quot;Always On&quot;">​</a></h3><p>The fixture will be active regardless of the Extent Set being used by the map.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fixtures: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    extentguard: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        alwaysOn: true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="specific-extent-sets" tabindex="-1">Specific Extent Sets <a class="header-anchor" href="#specific-extent-sets" aria-label="Permalink to &quot;Specific Extent Sets&quot;">​</a></h3><p>The fixture will only be active when the provided Extent Sets are being used. Typically this will align with specific basemap schemas. The Extent Set ids must match ids defined in the <code>map.extentSets</code> section of the config file.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fixtures: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    extentguard: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        extentSetIds: [&quot;EXT_NRCAN_Lambert_3978&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="bounding-area" tabindex="-1">Bounding Area <a class="header-anchor" href="#bounding-area" aria-label="Permalink to &quot;Bounding Area&quot;">​</a></h2><p>The Extent Guard uses the <code>maximum</code> extent defined in the active Extent Set as the boundary to enforce. If <code>maximum</code> is not defined, it will fallback to use the <code>full</code> extent, or the <code>default</code> extent if full is not provided either.</p>`,14)]))}const b=a(i,[["render",l]]);export{h as __pageData,b as default};
