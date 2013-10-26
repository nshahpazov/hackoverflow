define( function(require ) {

	var Marionette = require('marionette');
	var QuestionView = require('views/QuestionView');
	var QuestionModel = require('models/QuestionModel');
	
	var renderView = function(view) {
		$("#content").html( view.render().$el );
	}

	var Controller = Marionette.Controller.extend({
		showCreateQuestion: function() {

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