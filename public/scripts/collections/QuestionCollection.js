define( function(require) {
	var Backbone = require('backbone');
	// var QuestionModel = require('models/QuestionModel');

	var QuestionCollection = Backbone.Collection.extend({
		// model: QuestionModel,
		url: '/questions'
	});

	return QuestionCollection;
});