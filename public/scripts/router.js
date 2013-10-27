define( function(require) {
	var Marionette = require('marionette');

	return Marionette.AppRouter.extend({
		appRoutes: {
			'topQuestions': 'showTopQuestions',
			'createQuestion': 'showCreateQuestion',
			'questions/:id': 'showQuestion' 
		}
	});
});