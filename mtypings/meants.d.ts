

declare module "meants" {

	/**
	 * Configuration object
	 * @type {Object}
	 */
	var configuration: {
		path: String,
		customPath: String,
		port: Number,
		listenIp: String,
		secretKey: String,
		tokenExpiresIn: Number,
		providers: Array<any>
	};

	namespace bootstrap {

		/**
		 * Start full MeanTS app
		 * @param  {Object} config Full configuration what can rewrite MeanTS
		 * @return void
		 */
		function run(config?: Object): void;

	}

}