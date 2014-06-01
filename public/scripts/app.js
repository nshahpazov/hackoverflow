define( function (require) {

	var Marionette = require('marionette'),
		Controller = require('controller'),
		Router = require('router'),
		Jade = require('jade'),

		initialize = function () {
			Router.initialize();
		},

		app = new Marionette.Application();

	app.router = new Router({
		controller: new Controller({app: app})
	});

	// Start the history of the app
	app.addInitializer(function (options) {
		Backbone.history.start();
	});

	return app;
});