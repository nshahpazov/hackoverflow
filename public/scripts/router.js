define( function(require) {
	var Marionette = require('marionette');

	return Marionette.AppRouter.extend({
		appRoutes: {
			'questions': 'showTopQuestions',
			'createQuestion': 'showCreateQuestion',
			'questions/:id': 'showQuestion', 
			'/': 'showTopQuestions'
		}
	});
});