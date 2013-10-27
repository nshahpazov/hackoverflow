define(function (require) {
	var Backbone = require('backbone');
	var AnswerModel = Backbone.Model.extend({

		defaults: {
			text: '',
			author: '',
			date: new Date(),
			votes_count: 0,
		}
	});
	return AnswerModel;
});