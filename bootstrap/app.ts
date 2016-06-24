'use strict';

import {Server} from '../lib/server';

module App {

	export class Bootstrap {

		public run() {
			
			/**
			 * Start server
			 */
			new Server();

		}

	}

}

export = App;