"use strict";
var app = require('./bootstrap/app');
var configuration_1 = require('./lib/configuration');
module.exports = {
    configuration: configuration_1.Configuration,
    bootstrap: new app.Bootstrap()
};
