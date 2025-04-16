import{_ as t,o,c as a,S as n}from"./chunks/framework.075d7704.js";const u=JSON.parse('{"title":"Instance API","description":"","frontmatter":{},"headers":[],"relativePath":"api-guides/instance.md","filePath":"api-guides/instance.md"}'),i={name:"api-guides/instance.md"};function r(c,e,d,s,l,p){return o(),a("div",null,e[0]||(e[0]=[n('<h1 id="instance-api" tabindex="-1">Instance API <a class="header-anchor" href="#instance-api" aria-label="Permalink to &quot;Instance API&quot;">​</a></h1><p>The Instance API provides an interface to manage all aspects of a RAMP instance. When calling the <code>createInstance(...)</code> function to place a RAMP instance on a page (see the <a href="./../introduction/instantiation.html">instantiation documentation</a> for more details on this), it will return an API for the new instance. Detailed below are the properties and methods it provides.</p><h4 id="apis" tabindex="-1">APIs <a class="header-anchor" href="#apis" aria-label="Permalink to &quot;APIs&quot;">​</a></h4><ul><li><code>fixture</code> - the fixture API.</li><li><code>panel</code> - <a href="./panels.html#the-panel-api">the panel API</a></li><li><code>event</code> - <a href="./events.html">the event API</a></li><li><code>geo</code> - the geo API</li><li><code>notify</code> - <a href="./notifications.html">the notification API</a></li></ul><h4 id="other-attributes" tabindex="-1">Other Attributes <a class="header-anchor" href="#other-attributes" aria-label="Permalink to &quot;Other Attributes&quot;">​</a></h4><ul><li><code>$vApp</code> - an object of type <code>ComponentPublicInstance</code> that represents the Vue app for the RAMP instance. See the <a href="https://vuejs.org/api/component-instance.html" target="_blank" rel="noreferrer">Vue documentation</a> for details. Note that use of the various APIs is encouraged over accessing the app&#39;s properties and methods directly.</li><li><code>$element</code> - an object of type <code>VueApp&lt;Element&gt;</code> that represents the root element for the instance&#39;s Vue app.</li><li><code>$i18n</code> - an object representing the <a href="https://vue-i18n.intlify.dev/api/composition.html#composer" target="_blank" rel="noreferrer">Vue I18n Composer Instance</a> for the instance&#39;s Vue app.</li><li><code>language</code> - a string representing the current language for the instance.</li><li><code>screenSize</code> - a string representing the screen size for the app. Returns the largest tailwind screen class on the element. Possible values are &#39;lg&#39;, &#39;md&#39;, &#39;sm&#39; or &#39;xs&#39;.</li><li><code>animate</code> - a boolean representing whether the app has animations enabled.</li><li><code>exposeOid</code> - a boolean representing whether the app includes Object ID fields of a feature alongside attribute data.</li><li><code>exposeMeasurements</code> - a boolean representing whether the app includes Shape_Length and Shape_Area of a feature alongside attribute data.</li><li><code>isFullScreen</code> - a boolean representing whether the app is currently fullscreen.</li><li><code>started</code> - a boolean representing whether the app has been started.</li></ul><p>Note that all the properties above are read only.</p><h4 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h4><ul><li><code>reload(configs?: RampConfigs, options?: RampOptions)</code> - Reloads a RAMP4 instance with a new config and options, if provided. If not provided, the same config and default options are used.</li><li><code>component(id: string): Object</code> - Retrieves a global Vue component by its id.</li><li><code>component(id: string, definition?: any)</code> - Registers a global Vue component given an id and a constructor (which is represented by the <code>definition</code> parameter).</li><li><code>getConfig(): RampConfig</code> - Gets a deep copy of the currently active config.</li><li><code>setLanguage(language: string)</code> - Sets the language of the app to the specified string (e.g. &#39;en&#39; or &#39;fr&#39;).</li><li><code>toggleFullscreen()</code> - Toggles fullscreen for the app.</li><li><code>updateAlert(alert: string)</code> - Updates the screen reader alert. Use this to inform screen reader users of visual changes in the app (pieces of ui appearing/leaving).</li><li><code>start()</code> - Starts the app i.e. loads the map and layers. Used when <code>startRequired</code> is set to true in the <a href="./../introduction/instantiation.html#instance-options">instance options</a>.</li><li><code>useStore(id: string)</code> - Returns the store with the specified id, if it exists, else returns undefined. The following out-of-the-box store ID&#39;s are currently supported: <code>appbar</code>, <code>areas-of-interest</code>, <code>config</code>, <code>details</code>, <code>export</code>, <code>extentguard</code>, <code>fixture</code>, <code>geosearch</code>, <code>grid</code>, <code>help</code>, <code>instance</code>, <code>layer</code>, <code>legend</code>, <code>map-caption</code>, <code>mapnav</code>, <code>maptip</code>, <code>metadata</code>, <code>northarrow</code>, <code>notification</code>, <code>overviewmap</code>, <code>panel</code>, <code>scrollgurard</code>, and <code>wizard</code>. Note that for ids that correspond to fixture ids, the fixture must be added before the store can be retrieved.</li></ul>',9)]))}const f=t(i,[["render",r]]);export{u as __pageData,f as default};
