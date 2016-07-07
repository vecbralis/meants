/// <reference path="../../../main.d.ts" />

import * as express from "express";
import {Auth} from "../../../lib/auth";

const auth = express.Router();


auth.post('/login', function(req, res){
	new Auth(req, res);
});

auth.get('/login', function(req, res){
	new Auth(req, res);
});

/**
 * Export all routes from this file
 */
export {auth};