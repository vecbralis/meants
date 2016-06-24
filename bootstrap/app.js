'use strict';
var server_1 = require('../lib/server');
var App;
(function (App) {
    var Bootstrap = (function () {
        function Bootstrap() {
        }
        Bootstrap.prototype.run = function () {
            /**
             * Start server
             */
            new server_1.Server();
        };
        return Bootstrap;
    }());
    App.Bootstrap = Bootstrap;
})(App || (App = {}));
module.exports = App;
