"use strict";
const app = require('./bootstrap/app');
const configuration_1 = require('./lib/configuration');
module.exports = {
    configuration: configuration_1.Configuration,
    bootstrap: new app.Bootstrap()
};
