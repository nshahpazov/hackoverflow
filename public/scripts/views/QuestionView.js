define(function (require) {
	var Backbone = require('backbone'),
		_ = require('underscore');
	var questionTemplate = require('templates/questionTemplate');

	var QuestionView = Backbone.View.extend({
		
		tagName: 'div',
		id: 'question',

		template: questionTemplate,
		events: {
			'click .answer': 'answerQuestion'
		},

		answerQuestion: function() {
			
		},		

		render: function() {
			var templ = this.template( this.model.toJSON() );
			this.$el.html(templ);
			return this;
		}
	});
	return QuestionView;
});