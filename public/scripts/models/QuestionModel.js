define(function (require) {
    var Backbone = require('backbone'),
        AnswersCollection = require('collections/AnswersCollection'),
        
        QuestionModel = Backbone.Model.extend({

            defaults: {
                title: 'What is the difference between me and you?',
                author: 'Robert De Niro',
                text: 'I cant find my pants',
                tags: [],
                date: new Date(),
                views_count: 0,
                answers_count: 0,
                votes_count: 0,
                answersCollection: new AnswersCollection()
            },

            urlRoot: "/questions",

            parse: function (response) {

    			response.id = response._id;
    			response.answersCollection = new AnswersCollection(response.answersCollection);
    			
                return response;        
            }
        });

	return QuestionModel;
});