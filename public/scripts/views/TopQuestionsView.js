define(function (require) {
	var Backbone = require('backbone');
	var QuestionCollection = require('collections/QuestionCollection');
	var TopQuestionView = require('views/TopQuestionView');
	var TopQuestionsView = Backbone.View.extend({
		
		tagName: 'ul',
		id: 'top-questions-list',

		initialize: function(intialQuestions) {
			this.collection = new QuestionCollection(intialQuestions);
			var that = this;
			this.collection.fetch({ 
				reset: true,
			 	
			 	success: function() {
					that.render();
				} 
			});
		},

		addOne: function(topQuestion) {
			var questionView = new TopQuestionView( { model: topQuestion } );
			this.$el.append( questionView.render().el );
		},

		render: function() {
			this.collection.each(this.addOne, this);
			return this;
		}
	});
	return TopQuestionsView;
});