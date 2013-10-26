define( function(require) {
	var Marionette = require('marionette');
	// var QuestionView = require('views/questionView');

	return Marionette.AppRouter.extend({
		appRoutes: {
			'question': 'showQuestion',
			'topQuestions': 'showTopQuestions' 
		}
	});
});