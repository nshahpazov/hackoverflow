require.define(function (require) {
	var Backbone = require('backbone'),

	Answer = Backbone.Model.extend({

		initialize: function () {

		},

		defauts: {
			text: '',
			author: '',
			date: '',
			votes: 0,
		},

		validate: function(attrs, options) { 
			if (attrs.text.length === 0) { 
				return "Insert question."; 
			}
		}

	});
});