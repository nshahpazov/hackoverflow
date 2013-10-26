define( function(require) {
	var Backbone = require('backbone');
	var AnswerModel = require('models/AnswerModel');

	var AnswerCollection = Backbone.Collection.extend({
		model: AnswerModel
	});

	return AnswerCollection;
});