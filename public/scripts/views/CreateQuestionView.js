define(function (require) {

	var Backbone = require('backbone'),
		_ = require('lodash'),
		createQuestionTemplate = require('templates/createQuestion'),
		QuestionCollection = require('collections/QuestionCollection'),

		// The Backbone View
		CreateQuestionView = Backbone.View.extend({
			
			tagName: 'div',

			id: 'create-question',

			template: createQuestionTemplate,

			initialize: function (intialQuestions) {
				this.collection = new QuestionCollection(intialQuestions);
				this.collection.fetch({ reset: true });
			},

			events: {
				'submit': 'onSubmitHandler'
			},

			// Event handler for when creating a question
			onSubmitHandler: function ($event) {
				
				var newQuestion = {},
					tags = [];

				$event.preventDefault();

				// get data
				this.$el.find('.input-field').each(function (i, el) {

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

			render: function () {

				this.$el.html(this.template());
				return this;
			}
		});	// end of the view object

	return CreateQuestionView;
});