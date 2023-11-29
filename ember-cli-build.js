'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const { Webpack } = require('@embroider/webpack');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-babel': { enableTypeScriptTransform: true },

    // Add options here
  });

  return require('@embroider/compat').compatBuild(app, Webpack);
};
