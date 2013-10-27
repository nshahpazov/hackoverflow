define(function (require) {
	var Backbone = require('backbone');
	var topQuestionTemplate = require('templates/topQuestionTemplate');
	var Router = require('router');
	
	var TopQuestionView = Backbone.View.extend({
		
		tagName: 'li',

		template: topQuestionTemplate,
		events: {
			"click #title": "showQuestion",
		},

		showQuestion: function(e) {
			e.preventDefault();
			var App = require('app');
			App.router.navigate('/questions/' + this.model.id, {trigger: true});
		},

		render: function() {
			var templ = this.template( this.model.toJSON() );
			this.$el.html(templ);
			return this;
		}
	});
	return TopQuestionView;
});