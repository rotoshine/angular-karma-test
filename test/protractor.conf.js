'use strict';

exports.config = {
    specs: [
        'e2e/*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl : 'http://localhost:8000/',
    framework: 'jasmine'
};