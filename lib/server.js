/// <reference path="../main.d.ts" />
'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const configuration_1 = require("./configuration");
class Server {
    constructor() {
        this.app = express();
        this.loadConfiguration()
            .then(() => {
            return this.loadCors();
        })
            .then(() => {
            return this.loadRoutes();
        })
            .then(() => {
            return this.loadDevelopmentMode();
        })
            .then(() => {
            this.startApp();
            if (this.app.get('env') === 'development') {
                console.log('Server started on', configuration_1.Configuration.listenIp, 'Port', configuration_1.Configuration.port);
            }
        });
    }
    /**
     * Load default configuration for ExpressJS app
     */
    loadConfiguration() {
        return new Promise((resolve, reject) => {
            this.app.use(bodyParser.urlencoded({
                extended: true
            }));
            this.app.use(bodyParser.json());
            resolve(true);
        });
    }
    /**
     * Load Cors header so that it works with angularjs and different domains
     */
    loadCors() {
        return new Promise((resolve, reject) => {
            this.app.use(function (req, res, next) {
                res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
                res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Client, Authorization, Remember-me');
                next();
            });
            resolve(true);
        });
    }
    /**
     * Load all routes from folders and files
     */
    loadRoutes() {
        var routes = require(configuration_1.Configuration.path + '/app/http/routes'); //App routes
        var routes2 = require('../app/http/routes'); //Default app routes
        var routes = _.merge(routes, routes2);
        return new Promise((resolve, reject) => {
            /**
             * Load all routers in one place from different files
             * @param {[any]} var route in routes Express.js router object
             */
            console.log(routes);
            for (var route in routes) {
                this.app.use(`/${configuration_1.Configuration.customPath}${route}`, routes[route]);
            }
            resolve(true);
        });
    }
    /**
     * Check if ENV is in development mode and run all needed things
     */
    loadDevelopmentMode() {
        return new Promise((resolve, reject) => {
            if (this.app.get('env') === 'development') {
                this.app.use(function (err, req, res, next) {
                    res.status(err.status || 500);
                    res.render('error', {
                        message: err.message,
                        error: err
                    });
                });
            }
            resolve(true);
        });
    }
    /**
     * Start full APP
     */
    startApp() {
        return new Promise((resolve, reject) => {
            this.app.listen(configuration_1.Configuration.port, configuration_1.Configuration.listenIp);
            resolve(true);
        });
    }
}
exports.Server = Server;
