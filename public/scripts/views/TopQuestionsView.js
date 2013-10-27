define(function (require) {
	var Backbone = require('backbone');
	var QuestionCollection = require('collections/QuestionCollection');
	var TopQuestionView = require('views/TopQuestionView');
	var questionsListTemplate = require('templates/questionsListTemplate');

	var TopQuestionsView = Backbone.View.extend({
		
		template: questionsListTemplate,
		tagName: 'div',
		id: 'top-questions',

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
			this.$el.$ul.append( questionView.render().el );
		},

		render: function() {
			var templ = this.template();
			this.$el.html(templ);
			this.$el.$ul = this.$el.find('#top-questions-list');
			this.collection.each(this.addOne, this);
			return this;
		}
	});
	return TopQuestionsView;
});