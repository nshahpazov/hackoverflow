define(function (require) {
	var Backbone = require('backbone'),
		_ = require('underscore');
	var questionTemplate = require('templates/questionTemplate');

	var QuestionView = Backbone.View.extend({
		
		tagName: 'div',
		id: 'question',

		template: questionTemplate,
		events: {
			'click #answer-button': 'answerQuestion',
			'click .vote-up': 'voteUp',
			'click .vote-down': 'voteDown'
		},

		answerQuestion: function(e) {
			e.preventDefault();
			var newAnswer = {};

			// get data
			this.$el.find('.input-field').each(function(i, el) {
				if ($(el).val() != "") {
					newAnswer[el.id] = $(el).val();
				}
			});
			var answersCollection = this.model.get('answersCollection');
			answersCollection.push(newAnswer);
			this.model.save('answersCollection', answersCollection);
		},		
		voteUp: function(e) {
			this.model.set("votes_count", this.model.get("votes_count") + 1);
			this.render();
		},

		voteDown: function(e) {
			this.model.set("votes_count", this.model.get("votes_count") - 1);
			this.render();
		},

		render: function() {
			var templ = this.template( this.model.toJSON() );
			this.$el.html(templ);
			return this;
		}
	});
	return QuestionView;
});