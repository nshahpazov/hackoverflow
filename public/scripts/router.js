define( function (require) {

	var Marionette = require('marionette');

	return Marionette.AppRouter.extend({

		// the routes of the app
		appRoutes: {
			'/': 'showTopQuestions',
			'questions': 'showTopQuestions',
			'createQuestion': 'showCreateQuestion',
			'questions/:id': 'showQuestion', 
			'signup': 'signup'
		}
	});
});