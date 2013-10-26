define(function (require) {
	var Backbone = require('backbone');
	var topQuestionsTemplate = require('templates/topQuestionsTemplate');

	var TopQuestionsView = Backbone.View.extend({
		
		tagName: 'ul',
		id: 'top-questions-list',

		template: topQuestionsTemplate,

		initialize: function(intialQuestions) {
			this.collection = new Collection(intialQuestions);
			this.collection.fetch({reset: true});
		},

		addOne: function(topQuestion) {
			var questionView = new this.TopQuestionsView( {model: topQuestion} );
			this.$el.append( questionView.render().el );
		},

		render: function() {
			this.collection.each(this.addOne, this);
			return this;
		}
	});
	return TopQuestionsView;
});