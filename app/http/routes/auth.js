/// <reference path="../../../main.d.ts" />
"use strict";
const express = require("express");
const auth_1 = require("../../../lib/auth");
const auth = express.Router();
exports.auth = auth;
auth.post('/login', function (req, res) {
    new auth_1.Auth(req, res);
});
auth.get('/login', function (req, res) {
    new auth_1.Auth(req, res);
});
/**
 * Export all routes from this file
 */
