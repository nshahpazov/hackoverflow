define(function (require) {
	var Backbone = require('backbone'),
		_ = require('underscore');
	var questionTemplate = require('templates/questionTemplate');

	var QuestionView = Backbone.View.extend({
		
		tagName: 'div',
		id: 'question',

		template: questionTemplate,
		events: {
			'click #answer-button': 'answerQuestion'
		},

		answerQuestion: function(e) {
			e.preventDefault();
			var newAnswer = {};
			debugger;

			// get data
			this.$el.find('.input-field').each(function(i, el) {
				if ($(el).val() != "") {
					newAnswer[el.id] = $(el).val();
				}
			});
			debugger;
			var answersCollection = this.model.get('answersCollection');
			debugger;
			answersCollection.push(newAnswer);
			this.model.save('answersCollection', answersCollection);
		},		

		render: function() {
			var templ = this.template( this.model.toJSON() );
			this.$el.html(templ);
			return this;
		}
	});
	return QuestionView;
});