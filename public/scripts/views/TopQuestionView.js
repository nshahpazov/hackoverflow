define(function (require) {
	var Backbone = require('backbone');
	var topQuestionTemplate = require('templates/topQuestionTemplate');

	var TopQuestionView = Backbone.View.extend({
		
		tagName: 'li',
		id: 'top-questions-list',

		template: topQuestionTemplate,

		initialize: function(intialQuestions) {
			this.collection = new Collection(intialQuestions);
			this.collection.fetch({reset: true});
		},

		render: function() {
			this.collection.each(this.addOne, this);
			return this;
		}
	});
	return TopQuestionView;
});