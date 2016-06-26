/// <reference path="../main.d.ts" />

const config:any = {
	path: null,
	customPath: '',
	port: process.env.PORT ? process.env.PORT : 3000,
	listenIp: process.env.ip ? process.env.ip : "127.0.0.1"
};

export const Configuration = config;