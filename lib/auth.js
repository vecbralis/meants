/// <reference path="../main.d.ts" />
"use strict";
const jwt = require("jsonwebtoken");
const configuration_1 = require("./configuration");
'use strict';
class Auth {
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
    generateToken() {
        return jwt.sign({ test: 1 }, configuration_1.Configuration.secretKey, {
            expiresIn: configuration_1.Configuration.tokenExpiresIn
        });
    }
}
exports.Auth = Auth;
