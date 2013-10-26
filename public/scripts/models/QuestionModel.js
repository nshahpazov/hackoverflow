define(
function(require){
    var Backbone = require('backbone');
    var QuestionModel = Backbone.Model.extend({
        
        defaults: {
            title: 'Some Interesting Question I guess?',
   	    	author: 'Robert De Niro',
            text: 'This is the text of the question',
            tags: [],
            date: new Date(),
            views_count: 0,
            answers_count: 0,
            votes_count: 0/*,
            answers: []*/
        },

        parse: function(response) {
            response.id = response._id;
            return response;        
        }
    });
    return QuestionModel;
});