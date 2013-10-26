require.define(function (require) {
	var Backbone = require('backbone'),

	AnswerView = Backbone.View.extend({
		tagName: 'div',
		id: 'answer'
		template: answerTemplate( this.model.toJSON() ),

		initialize: function() {
			this.model.on('Answer', this.render, this);
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

		//Destroys the model of the task
		destroy: function() {
			this.model.destroy();
		},

		//Removes the element from the View
		remove: function() {
			this.$el.remove();
		},

		render: function() {
			var templ = this.template();
			this.$el.html(templ);
			return this;
		}
	});
});