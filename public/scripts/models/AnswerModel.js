require.define(function (require) {
	var Backbone = require('backbone');
	var AnswerModel = Backbone.Model.extend({

		defauts: {
			text: '',
			author: '',
			date: new Date(),
			votes_count: 0,
		},

		validate: function(attrs, options) { 
			if (attrs.text.length === 0) { 
				return "Insert question."; 
			}
		}

	});
	return AnswerModel;
});