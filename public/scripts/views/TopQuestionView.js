define(function (require) {
	var Backbone = require('backbone');
	var topQuestionTemplate = require('templates/topQuestionTemplate');

	var TopQuestionView = Backbone.View.extend({
		
		tagName: 'li',

		template: topQuestionTemplate,



		render: function() {
			var templ = this.template( this.model.toJSON() );
			this.$el.html(templ);
			return this;
		}
	});
	return TopQuestionView;
});