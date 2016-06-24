/// <reference path="../main.d.ts" />
'use strict';
var express = require("express");
var bodyParser = require("body-parser");
var configuration_1 = require("./configuration");
var Server = (function () {
    function Server() {
        console.log(configuration_1.Configuration.path);
        var app = express();
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.get('/', function (req, res) {
            res.send('Hello World!');
        });
        app.listen(3000);
        console.log('http://127.0.0.1:3000/api');
    }
    return Server;
}());
exports.Server = Server;
