module.exports = function(mongoose) {
    var Schema = mongoose.Schema;
 	  var ObjectId = Schema.ObjectId;
 	  var collection = 'Answer';
 	
    var schema = new Schema({
  		title: String, 
    	text: String,
    	votes_count: {type: Number, min: 0},
        views_count: {type: Number, min: 0},
        date: { type: Date, default: Date.now},
  	});

  	this.model = mongoose.model(collection, schema);
  	return this;
};