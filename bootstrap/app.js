'use strict';
const server_1 = require('../lib/server');
var App;
(function (App) {
    class Bootstrap {
        run() {
            /**
             * Start server
             */
            new server_1.Server();
        }
    }
    App.Bootstrap = Bootstrap;
})(App || (App = {}));
module.exports = App;
