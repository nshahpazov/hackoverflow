
require.config({
    
    baseUrl: 'scripts',
    
    paths: {

        jquery: 'libraries/jquery/dist/jquery',
        lodash: "libraries/lodash/dist/lodash",
        underscore: 'libraries/underscore/underscore',
        backbone: 'libraries/backbone/backbone',
        marionette: 'libraries/backbone.marionette/lib/backbone.marionette',
        jade: 'libraries/jade/jade',
    	text: 'libraries/text/text',
    	templates: 'templates'
    },

    shim: {

		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},

		'marionette' : {
            deps : ['jquery', 'underscore', 'backbone'],
            exports : 'Marionette'
        },

        'lodash': { exports: '_' },
        'jquery': { exports: '$' },
        'validate': ['jquery']
    }
});

require(['app'], function(app) {
    app.start();
});
