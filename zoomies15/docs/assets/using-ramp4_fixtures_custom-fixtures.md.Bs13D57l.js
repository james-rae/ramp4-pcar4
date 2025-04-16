import{_ as i,c as a,ag as e,o as n}from"./chunks/framework.BxdpDEOu.js";const c=JSON.parse('{"title":"Fixtures","description":"","frontmatter":{},"headers":[],"relativePath":"using-ramp4/fixtures/custom-fixtures.md","filePath":"using-ramp4/fixtures/custom-fixtures.md"}'),t={name:"using-ramp4/fixtures/custom-fixtures.md"};function l(p,s,r,h,d,k){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="fixtures" tabindex="-1">Fixtures <a class="header-anchor" href="#fixtures" aria-label="Permalink to &quot;Fixtures&quot;">​</a></h1><p>This covers various ways to create fixtures.</p><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;">​</a></h2><p>The fixture interface has one optional property: <code>persist</code>. This indicates whether the fixture should remain in the instance upon language change. Defaults to <code>true</code>. Note that if only one config is provided for all languages, the fixture will remain in the instance on language change, regardless of the value of the flag. Here is a code snippet that shows how to use this property:</p><div class="language-JS vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">JS</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rInstance.fixture.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isLoaded</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;basemap&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">bm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bm.persist </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rInstance.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setLanguage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// basemap fixture will be removed</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>The fixture interface has three methods, all optional. They take no parameters and return no value. If a custom fixture implements them, the RAMP instance will run them at the appropriate time.</p><ul><li><code>added()</code> is run when the fixture has been added to the RAMP instance</li><li><code>initialized()</code> is run when the fixture is <code>added</code> and the instance Map has finished initializing</li><li><code>removed()</code> is run after fixture is removed from the RAMP instance</li></ul><h2 id="pre-made-fixtures" tabindex="-1">Pre-Made Fixtures <a class="header-anchor" href="#pre-made-fixtures" aria-label="Permalink to &quot;Pre-Made Fixtures&quot;">​</a></h2><p>RAMP includes some pre-made fixtures that are not considered &quot;default&quot;, meaning they must be added. Given the implementation exists in the library, only the fixture name needs to be provided to the instance.</p><p>This can be accomplished via the <code>startingFixtures</code> array in the instance configuration, or via an API call (<code>instance.fixture.add(&#39;fixturename&#39;)</code>).</p><p>The current list of available fixture names are</p><ul><li><code>areas-of-interest</code></li><li><code>export</code></li><li><code>extentguard</code></li><li><code>metadata</code></li></ul><h2 id="creation" tabindex="-1">Creation <a class="header-anchor" href="#creation" aria-label="Permalink to &quot;Creation&quot;">​</a></h2><h3 id="internal" tabindex="-1">Internal <a class="header-anchor" href="#internal" aria-label="Permalink to &quot;Internal&quot;">​</a></h3><p>This approach involves forking the R4MP code-base, adding new fixtures, and re-building the project. While this can be rather intensive, the result means the new fixtures are now a part of the R4MP library you are hosting and can be used like other provided fixtures.</p><p>Fixture code should be placed in a directory within <code>src/fixtures</code>. The directory name should be the fixture name. The existing source code can be used as a guide or template to begin a fixture, if desired.</p><p>The remaining creation examples deal with fixtures that are defined outside of the R4MP source, and are more appropriate for a site that is just using the compiled R4MP library (and not wanting to fork &amp; rebuild).</p><h3 id="headless" tabindex="-1">Headless <a class="header-anchor" href="#headless" aria-label="Permalink to &quot;Headless&quot;">​</a></h3><p>For a non-visual (i.e. no need for Vue UI rendering) fixture, a class that respect the fixture interface can be loaded.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HeadlessFixture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    initialized</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // do stuff</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.$iApi.geo.map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">zoomToLevel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rInstance.fixture.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;headless&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, HeadlessFixture);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Note the <code>.add()</code> method will upgrade the class prototype so it has the standard fixture stuff, like the <code>.$iApi</code> property in the example.</p><h3 id="plain-javascript" tabindex="-1">Plain Javascript <a class="header-anchor" href="#plain-javascript" aria-label="Permalink to &quot;Plain Javascript&quot;">​</a></h3><p>This type of fixture is written in plain JS, and requires no compilation step since it doesn&#39;t use Vue components or Vue templates or imports any other third-party code. Vue templates in this type of fixture are written as render functions, hence already compiled in the format Vue runtime can understand.</p><p>This is the most simple and fast way to create fixtures as no build step is required. It is also the most compact way to create fixtures as no external code (like Vue component decorators or other helper functions) is included in the fixture bundle.</p><p>A sample of this type of fixture can be found <a href="https://github.com/ramp4-pcar4/ramp4-pcar4/blob/main/demos/starter-scripts/sample-fixtures/diligord/diligord-fixture.js" target="_blank" rel="noreferrer">here</a>.</p><h3 id="typescript-vue-decorators" tabindex="-1">Typescript, Vue Decorators <a class="header-anchor" href="#typescript-vue-decorators" aria-label="Permalink to &quot;Typescript, Vue Decorators&quot;">​</a></h3><p>This type of fixture is written in Typescript and contains a <code>.vue</code> single-file component in which code is written with the help of Vue decorators (<code>Component</code> and <code>Prop</code>). Since this fixture contains a Vue template, a build step is necessary to compile HTML template to the render function Vue runtime understands, as well as converting the Typescript to Javascript.</p><p>This is the most comfortable way to create fixtures since it&#39;s possible to use nice things like decorators and other syntactic sugar, RAMP type definitions, and intellisense.</p><p>The resulting bundle includes more of external code as Vue decorators will be incorporated into the end file.</p><p>A sample of this type of fixture can be found <a href="https://github.com/ramp4-pcar4/ramp4-pcar4/tree/main/demos/starter-scripts/sample-fixtures/iklob" target="_blank" rel="noreferrer">here</a>.</p><p>For more information about how to use <code>Vue</code>, click <a href="https://vuejs.org/guide/introduction.html" target="_blank" rel="noreferrer">here</a></p><blockquote><p><strong>Note:</strong></p><p>Since these fixtures use <code>Vue</code> and <code>Vue</code> runtime is not bundled in, the fixture expects <code>Vue</code> to be available on the global scope.</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- load Vue since RAMP doesn&#39;t bundle it --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://unpkg.com/vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- load RAMP after loading Vue --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./ramp.browser.iife.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- load script that creates RAMP instance--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;module&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./starter-scripts/index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- load fixtures that require Vue --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../dist/sample-fixtures/diligord-fixture.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></blockquote><h3 id="typescript-no-vue-decorators" tabindex="-1">Typescript, No Vue Decorators <a class="header-anchor" href="#typescript-no-vue-decorators" aria-label="Permalink to &quot;Typescript, No Vue Decorators&quot;">​</a></h3><p>This type of fixture is written in Typescript and contains a <code>.vue</code> single-file component. The code of the component, however, is written in plain Typescript, without use of Vue decorators. This fixture also requires a build step.</p><p>The resulting bundle includes a small amount of external code needed to normalize Vue components, plus a UMD wrapper around it.</p><p>Compared to the Vue Decorator technique, this approach offers a smaller package size and avoids having to care about library loading order while still providing the convenience of Typescript and Vue templates. The lack of decorators will likely be the deciding factor.</p><p>A sample of this type of fixture can be found <a href="https://github.com/ramp4-pcar4/ramp4-pcar4/tree/main/packages/ramp-sample-fixtures/src/mouruge" target="_blank" rel="noreferrer">here</a>.</p><h2 id="loading-external-fixtures" tabindex="-1">Loading External Fixtures <a class="header-anchor" href="#loading-external-fixtures" aria-label="Permalink to &quot;Loading External Fixtures&quot;">​</a></h2><h3 id="the-preferred-way" tabindex="-1">The Preferred Way <a class="header-anchor" href="#the-preferred-way" aria-label="Permalink to &quot;The Preferred Way&quot;">​</a></h3><p>The preferred way of loading fixtures involves either importing the fixture class or adding it to the global scope (<code>window.hostedFixtures</code> or any other suitable place) and then letting the host page add it to a specific RAMP instance.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// my-fixture.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.hostFixtures </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.hostFixtures </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.hostFixtures[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myfixture&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MyFixture;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// index.html</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- load fixture --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../path/my-fixture.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- load Vue and RAMP --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://unpkg.com/vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./ramp.browser.iife.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> RAMP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rInstance.fixture.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myfixture&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, window.hostFixtures.myfixture);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="the-other-rare-way" tabindex="-1">The Other (Rare) Way <a class="header-anchor" href="#the-other-rare-way" aria-label="Permalink to &quot;The Other (Rare) Way&quot;">​</a></h3><p>Sometimes, the preferred way doesn&#39;t work. Specifically, it won&#39;t work when it&#39;s not possible to load a fixture that relies on global <code>Vue</code> before <code>RAMP</code> is loaded, and therefore it&#39;s not guaranteed that <code>RAMP</code> won&#39;t be instantiated earlier (before the fixture can add itself to the global scope).</p><p>The following method is more cumbersome since it requires watching a global variable. In such cases, the host page can save the RAMP instance to a global variable and let the fixture add itself to it after the instance is instantiated. This will look something like this:</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// my-fixture.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> handle</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setInterval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rInstance) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // wait for \`rInstance\` to be defined and add \`myfixture\` to it</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rInstance.fixture.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myfixture&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, MyFixture);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    clearInterval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(handle);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// index.html</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- load RAMP + Vue --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ramp+vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- load fixtures that require Vue --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../path/my-fixture.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rInstance;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rInstance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> RAMP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="lazy-loading" tabindex="-1">Lazy-Loading <a class="header-anchor" href="#lazy-loading" aria-label="Permalink to &quot;Lazy-Loading&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">NOTE</p><p>The current version of RAMP does not include code splitting in production builds. These methods will still work, however the build will not see the benefit of lazy loading. We plan to re-introduce some version of tree-shaking/lazy-loading/code-splitting in the future.</p></div><p>It&#39;s possible to lazy-load fixture code for screen panels. This will split code for individual panel screens into separate file and will be loaded on demand. Otherwise, all fixture code is loaded right away and it defeats parts of the idea to make R4MP as flexible as possible. See <code>gazebo</code> fixture for examples.</p><p>Two methods of lazy loading:</p><h3 id="insider" tabindex="-1">Insider <a class="header-anchor" href="#insider" aria-label="Permalink to &quot;Insider&quot;">​</a></h3><p>When registering panels, provide a relative path to the screen component to lazy load:</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">screens</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;p-2-screen-2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;gazebo/p2-screen-2.vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>The path should be relative to the fixtures home folder, and the <code>panel.ts</code> will try to load a component from <code>src/fixtures/\${screen}</code>.</p><p>This is the simplest way and it&#39;s recommended if you are coding fixtures.</p><h3 id="macho" tabindex="-1">Macho <a class="header-anchor" href="#macho" aria-label="Permalink to &quot;Macho&quot;">​</a></h3><p>Provide a function that returns a promise resolving with a Vue component:</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">screens</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;p-2-screen-1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* webpackChunkName: &quot;p-2-screen-1&quot; */</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`./p2-screen-1.vue\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Here, <code>import</code> will be picked up by webpack and used for code splitting, so it will only work for internal fixtures. For external fixtures, there are no rules for how you load external files; just return a promise with your component code and it should work.</p><p>Read <a href="https://vuejs.org/guide/components/async.html" target="_blank" rel="noreferrer">Async Components</a> in Vue docs if you want more details.</p>`,61)]))}const u=i(t,[["render",l]]);export{c as __pageData,u as default};
