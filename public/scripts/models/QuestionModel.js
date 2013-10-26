require.define(function (require) {
	var Backbone = require('backbone'),

	Question = Backbone.Model.extend({

		initialize: function () {

		},

		defauts: {
			title: '',
			text: '',
			tags: [],
			author: '',
			date: new Date(),
			answers: 0,
			views: 0
		},

		validate: function(attrs, options) { 
			if (attrs.title.length === 0) { 
				return "Insert title."; 
			}
			if (attrs.text.length === 0) { 
				return "Insert question."; 
			}
		}

	});
});