/// <reference path="../main.d.ts" />

'use strict';

import * as express from "express";
import * as bodyParser from "body-parser";
import {Configuration} from "./configuration";

export class Server {

	public app: any;

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
					console.log('Server started on', Configuration.listenIp, 'Port', Configuration.port);
				}	

			});

	}

	/**
	 * Load default configuration for ExpressJS app
	 */
	loadConfiguration() {

		return new Promise((resolve, reject) => {

			this.app.use(bodyParser.urlencoded({ extended: true }));
			this.app.use(bodyParser.json());

			resolve(true);

		});

	}

	/**
	 * Load Cors header so that it works with angularjs and different domains
	 */
	loadCors(){

		return new Promise((resolve, reject) => {

			this.app.use(function(req, res, next) {
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

		var routes = require(Configuration.path + '/app/http/routes');

		return new Promise((resolve, reject) => {
			
			/**
			 * Load all routers in one place from different files
			 * @param {[any]} var route in routes Express.js router object
			 */
			for (var route in routes) {
				this.app.use(`/${Configuration.customPath}${route}`, routes[route]);
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
				this.app.use(function(err, req, res, next) {
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

			this.app.listen(Configuration.port, Configuration.listenIp);
			resolve(true);

		});

	}

}

