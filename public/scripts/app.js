define( function(require) {
	var Marionette = require('marionette');
	var Controller = require('controller');
	var Router = require('router');
	var Jade = require('jade');

	var initialize = function() {
		Router.initialize();
	}

	var app = new Marionette.Application();

	app.router = new Router({
		controller: new Controller({ app: app })
	});

	app.addInitializer(function(options) {
		Backbone.history.start();
	});

	return app;
});