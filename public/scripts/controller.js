define( function(require ) {

	var Marionette = require('marionette');
	var QuestionModel = require('models/QuestionModel');
	var QuestionView = require('views/QuestionView');
	//var CreateQuestionView = require('views/CreateQuestionView');
	
	var renderView = function(view) {
		$("#content").html( view.render().$el );
	}

	var Controller = Marionette.Controller.extend({
		showCreateQuestion: function() {
			var createQuestionView = new CreateQuestionView();
			renderView(createQuestionView);
		},

		showTopQuestions: function() {},

		showQuestion: function() {
			var sampleModel = new QuestionModel({ title: 'Hello' });
			var questionView = new QuestionView({ model: sampleModel });
			renderView(questionView);
		}
	});
	return Controller;
});