
import * as app from './bootstrap/app';
import {Configuration} from './lib/configuration';
import {LibaryRegister} from './app/lib/libaryRegister';

export = {
	configuration: Configuration,
	bootstrap: new app.Bootstrap(),
	lib: new LibaryRegister().list
};