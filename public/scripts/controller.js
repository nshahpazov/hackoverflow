define( function(require ) {

	var Marionette = require('marionette');
	var QuestionModel = require('models/QuestionModel');
	var QuestionView = require('views/QuestionView');
	var CreateQuestionView = require('views/CreateQuestionView');
	var TopQuestionsView = require('views/TopQuestionsView');
	
	var renderView = function(view) {
		$("#content").html( view.render().$el );
	}

	var Controller = Marionette.Controller.extend({
		showCreateQuestion: function() {
			var createQuestionView = new CreateQuestionView();
			renderView(createQuestionView);
		},

		showTopQuestions: function() {
			var topQuestionView = new TopQuestionsView();
			renderView(topQuestionView);
		},

		showQuestion: function(id) {
			var questionView = new QuestionView();
			renderView(questionView);
		}
	});
	return Controller;
});