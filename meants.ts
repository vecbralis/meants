
import * as app from './bootstrap/app';
import {Configuration} from './lib/configuration';

export = {
	configuration: Configuration,
	bootstrap: new app.Bootstrap()
};