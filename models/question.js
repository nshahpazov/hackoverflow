
module.exports = function(mongoose, answer) {
    
    var Answer = answer(mongoose).schema,
        Schema = mongoose.Schema,
        ObjectId = Schema.ObjectId,
        collection = 'Question',

        schema = new Schema({
            title: String, 
            text: String,
            votes_count: {type: Number, min: 0},
            answers_count: {type: Number, min: 0}, 
            views_count: {type: Number, min: 0},
            date: {type: Date, default: Date.now},
            tags: [String],
            answers: [Answer]
        });

    this.model = mongoose.model(collection, schema);

    return this;
};