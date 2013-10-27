define(function (require) {
	var Backbone = require('backbone'),
		_ = require('underscore');
	var createQuestionTemplate = require('templates/createQuestion');
	var QuestionCollection = require('collections/QuestionCollection');
	var CreateQuestionView = Backbone.View.extend({
		
		tagName: 'div',
		id: 'create-question',

		template: createQuestionTemplate,

		initialize: function(intialQuestions) {
			this.collection = new QuestionCollection(intialQuestions);
			this.collection.fetch({ reset: true });
		},

		events: {
			'submit': 'createQuestion'
		},

		createQuestion: function (e) {
			e.preventDefault();
			var newQuestion = {},
				tags = [];

			// get data
			this.$el.find('.input-field').each(function(i, el) {
				if ($(el).val() != "") {
					newQuestion[el.id] = $(el).val();
				}

				// split and trim tags
				if (el.id === 'tags') {
					tags = $(el).val().split(',');
					_.each(tags, function (tag, index) {
						tags[index] = tag.replace(/^\s+|\s+$/g, '');
					});
					newQuestion[el.id] = tags;
				}
				$(el).val("");
			});
			this.collection.create(newQuestion);
		},

		render: function() {
			var templ = this.template();
			this.$el.html(templ);
			return this;
		}
	});
	return CreateQuestionView;
});