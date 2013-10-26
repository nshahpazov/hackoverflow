define(function (require) {
	var Backbone = require('backbone'),
		_ = require('underscore');
	var createQuestionTemplate = require('templates/addQuestion');
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
			'submit': 'addQuestion'
		},

		addQuestion: function (e) {
			var newQuestion = {},
				form = $(e.currentTarget),
				tags = [];
			e.preventDefault();

			// get data
			this.$el.find('form').children().each(function(i, el) {
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

			// validate
			this.validate();

			this.collection.create(newQuestion);
		},
		/*
		validate: function(data) {
			if (data.title.length === 0) { return 'Insert title.'; }
			if (data.text.length === 0) { return 'Insert question.'; }
		},
		*/

		render: function() {
			var templ = this.template();
			this.$el.html(templ);
			return this;
		}
	});
	return CreateQuestionView;
});