require.define(function (require) {
	var Backbone = require('backbone'),
		_ = require('underscore'),

	QuestionView = Backbone.View.extend({
		tagName: 'div',
		id: 'question'
		template: questionTemplate( this.model.toJSON() ),

		initialize: function() {
			this.model.on('QuestionModel', this.render, this);
		},

		events: {
			'submit': 'addQuestion'
		},

		addQuestion: function (e) {
			var newQuestion,
				form = $(e.currentTarget),
				tags = [];

			e.preventDefault();

			// split and trim tags
			tags = form.find('input#tags').val().split(',');
			_.each(tags, function (tag, index) {
				tags[index] = tag.replace(/^\s+|\s+$/g, '');
			});
			
			newQuestion = {
				title: form.find('input#title').val();,
				text: form.find('#text').val();,
				tags: tags,
				author: ''
			};

			this.model.set(newQuestion);
		}

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