define(
function(require){
    var Backbone = require('backbone');
    var QuestionModel = Backbone.Model.extend({
        defaults: {
            title: 'Some Interesting Question I guess?',
   	    	author: 'Robert De Niro',
            text: 'This is the text of the question',
            date: new Date(),
    
            views: 0,
            answers: 0,
            votes: 0
        },

        parse: function(response) {
            response.id = response._id;
            return response;        
        }
    });
    return QuestionModel;
});