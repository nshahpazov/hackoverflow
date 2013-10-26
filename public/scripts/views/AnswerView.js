require.define(function (require) {
	var Backbone = require('backbone');
	var answerTemplate = require('templates/answerTemplate');

	var AnswerView = Backbone.View.extend({

		tagName: 'div',
		id: 'answer'

		template: answerTemplate,

		initialize: function() {
			this.model.on('AnswerModel', this.render, this);
		},

		events: {
			'click .vote-up': 'voteUp'
			'click .vote-down': 'voteDown'
		},

		voteUp: function () {
			var currentVotes = this.model.get('votes');
			this.model.set('votes', currentVotes + 1);
		},

		voteDown: function () {
			var currentVotes = this.model.get('votes');
			this.model.set('votes', currentVotes - 1);
		},

		render: function() {
			var templ = this.template();
			this.$el.html(templ);
			return this;
		}
	});
	return AnswerView;
});