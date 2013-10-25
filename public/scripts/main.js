
require.config({
	baseUrl: 'scripts',
	paths: {
        jquery: 'libraries/jquery',
        validate: 'libraries/jquery.validate',
        form: 'libraries/jquery.form',
    	underscore: 'libraries/underscore',
    	backbone: 'libraries/backbone',
    	marionette: 'libraries/backbone.marionette',
    	jade: 'libraries/jade',
    	text: 'libraries/text',
    	templates: 'templates'
  	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		marionette : {
      		deps : ['jquery', 'underscore', 'backbone'],
      		exports : 'Marionette'
    },
		
		'underscore': { exports: '_' },
    	'jquery': { exports: '$' },
    	'validate': ['jquery'],
    	'form': ['jquery']
	}
});
