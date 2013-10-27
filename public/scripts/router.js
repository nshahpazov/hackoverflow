define( function(require) {
	var Marionette = require('marionette');

	return Marionette.AppRouter.extend({
		appRoutes: {
			'topQuestions': 'showTopQuestions',
			'createQuestion': 'showCreateQuestion',
			'question/:id': 'showQuestion' 
		}
	});
});