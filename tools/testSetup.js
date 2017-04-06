// This file is written in ES5 since it is not transpiled by Babel.
// this file does the following:
// 1. Sets Node env var
// 2. Registers babel for transpileing our code for testing
// 3. Disables webpack-specific features that Mocha does not understand.
// 4. Requires jsdom so we can test via an in-memory DOM in Node.
// 5. Sets up global vars that mimic a browser

/* eslint-disable novar*/

/*This setting assures the .babelrc dev config (which includes hot
module reloading code) does not apply for tests.
But also, we do not want to set it to production here for
two reasons:
1. You won't see any PropType validation warnings when code is running in prod mode.
2. Tests will not display detailed error messages
when running against production version code*/

process.env.NODE_ENV = 'test';

//Register babel so that it will transpile ES6 to es2015
//before our test run.
require('babel-register')();

//Disable webpack-specific features for tests since
//mocha does not know what to do with them.
require.extensions['.css'] = function () { return null };
require.extensions['.png'] = function () { return null };
require.extensions['.jpg'] = function () { return null };

//Configure JSDOM and set global variables
//to simulate a browser environment for tests.
let jsdom = require('jsdom').jsdom;

let exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if(typeof global[property] == 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
    userAgent: 'node.js'
};
