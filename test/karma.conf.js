'use strict';

module.exports = function(config){
	config.set({
		basePath: '../',

		files: [
			'app/lib/angular/angular.min.js',
			'app/lib/angular-mocks/angular-mocks.js',
			'app/js/init.js',
			'app/js/**/*.js',
			'test/unit/**/*.js'
		],
		autoWatch: true,
		frameworks: ['jasmine'],
		browsers: ['Chrome']
	});
};