define( function(require ) {

	var Marionette = require('marionette');
	// var QuestionView = require('views/QuestionView');
	
	var renderView = function(view) {
		$("#content").html( view.render().$el );
	}

	var Controller = Marionette.Controller.extend({
		showCreateQuestion: function() {

		},

		showTopQuestions: function() {},

		showQuestion: function() {
			$("#content").html("Hello World");
			// var questionView = new QuestionView();
			// renderView(questionView);
		}
	});
	return Controller;
});