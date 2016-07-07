/// <reference path="../main.d.ts" />

const config:any = {
	path: null,
	customPath: '',
	port: process.env.PORT ? process.env.PORT : 3000,
	listenIp: process.env.ip ? process.env.ip : "127.0.0.1",
	secretKey: 'asdfasdfASDF@£$!@£aSDFASDF12312£!@3123ASD!@£!@£!@£!@£!@£ASDASDASD',
	tokenExpiresIn: 3600,
	lib: []
};

export const Configuration = config;