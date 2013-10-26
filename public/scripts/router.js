define( function(require) {
	var Marionette = require('marionette');

	return Marionette.AppRouter.extend({
		appRoutes: {
			'question': 'showQuestion',
			'topQuestions': 'showTopQuestions',
			'createQuestion': 'showCreateQuestion' 
			// 'createQuestion': 'showCreateQuestion' 
		}
	});
});