define(function (require) {

	var Marionette = require('marionette'),
		QuestionModel = require('models/QuestionModel'),
		QuestionView = require('views/QuestionView'),
		CreateQuestionView = require('views/CreateQuestionView'),
		SignupView = require('views/SignupView'),
		TopQuestionsView = require('views/TopQuestionsView'),
		TopQuestionsView = require('views/Signupview'),
	
		renderView = function (view) {
			$("#content").html( view.render().$el );
		},

		Controller = Marionette.Controller.extend({
		
			showCreateQuestion: function () {

				var createQuestionView = new CreateQuestionView();
				renderView(createQuestionView);
			},

			 showTopQuestions: function () {

			 	var topQuestionView = new TopQuestionsView();
			 	renderView(topQuestionView);
			 },

			showQuestion: function (id) {

			 	// fetch the model
			 	var questionModel = new QuestionModel({id: id});

			 	questionModel.fetch({

			 		reset: true,
			 		success: function () {

			 			var questionView = new QuestionView({ model: questionModel });
			 			renderView(questionView);
			 		}
			 	});
			 },
	
			 // Signup Controller to render the SignupView
			 signup: function () {

			 	var signupView = new SignupView();
			 	renderView(signupView);
			 }
		});

	return Controller;
});