"use strict";
const app = require('./bootstrap/app');
const configuration_1 = require('./lib/configuration');
const libaryRegister_1 = require('./app/lib/libaryRegister');
module.exports = {
    configuration: configuration_1.Configuration,
    bootstrap: new app.Bootstrap(),
    lib: libaryRegister_1.LibaryRegister
};
