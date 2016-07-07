
/// <reference path="../main.d.ts" />

import * as jwt from "jsonwebtoken";
import {Configuration} from "./configuration";

'use strict';

export class Auth {

	constructor(req, res) {
		
		const token = this.generateToken();

		res.json({
			success: true,
			message: 'authentication good',
			token: token
		});

	}

	/**
	 * Generate JWT token.
	 */
	generateToken(){

		return jwt.sign({test: 1}, Configuration.secretKey, {
			expiresIn: Configuration.tokenExpiresIn
		});

	}

} 