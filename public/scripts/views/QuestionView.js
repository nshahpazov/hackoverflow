define(function (require) {
	var Backbone = require('backbone'),
		_ = require('underscore');
	var questionTemplate = require('templates/questionTemplate');

	var QuestionView = Backbone.View.extend({
		
		tagName: 'div',
		id: 'question',

		template: questionTemplate,

		initialize: function() {
			//this.model.on('QuestionModel', this.render, this);
		},

		render: function() {
			var templ = this.template(this.model.toJSON() );
			this.$el.html(templ);
			return this;
		}
	});
	return QuestionView;
});