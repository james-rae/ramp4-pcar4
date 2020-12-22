// `main.ts` is used for serves and tests, and `main-build.ts` is used for builds

// this file is used when running `rush serve` and `rush test:e2e`
// when compiled using the `serve` command, the code is treated as an app, not a library,
// so we need to expose RAMP API on the window manually
import api from '@/api';
import Vue from 'vue';

// assign RAMP api to global variable
window.RAMP = api;

// expose Vue to the global scope so fixtures that use Vue have access to it
// this is only needed in `serve` mode; in `build`, Vue is explicitly loaded by the host page
// TODO: there are issues with how Vue is loading when using Cypress
window.Vue = Vue;

// execute `initRAMP` global function if it's defined as soon at the RAMP library is added to the global scope
// BAAH
// api.gapiPromise.then(() => {
if (typeof window.initRAMP === 'function') {
    window.initRAMP();
}
//});
