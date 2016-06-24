/// <reference path="../main.d.ts" />

'use strict';

import * as express from "express";
import * as bodyParser from "body-parser";
import {Configuration} from "./configuration";


export class Server {
	
	constructor() {

		console.log(Configuration.path);

		const app = express();

		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(bodyParser.json());

		app.get('/', function(req, res) {
			res.send('Hello World!');
		});

		app.listen(3000);
		console.log('http://127.0.0.1:3000/api');

	}

}

