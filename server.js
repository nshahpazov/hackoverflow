
// modules required
var app_root = __dirname,
	express = require('express'),
	mongoose = require('mongoose'),
	less_middleware = require('less-middleware'),
	less = require('less'),
	app = express(),

// Directories
	pub_dir = app_root + '/public',
	styles_dir = pub_dir + '/stylesheets',
	views_dir = app_root + '/views',

	models = {},

	port = 4711,
	host = '127.0.0.1';

models.Answer = require('./models/answer');
models.Question = require('./models/question')(mongoose, models.Answer).model;

// ========= CONFIGURATION =========

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {

	app.set('views', views_dir);
	app.set('view engine', 'jade');

	app.use(express.static(app_root + "/public"));
}

app.listen(port, host, function () {
    return console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});

mongoose.connect('mongodb://localhost/hackoverflow');

//Routes
app.get('/', function (request, response) {
	response.render("index", { title: "This is the Hakckoverflow " });
});

app.get('/viewThem', function (request, response) {
	response.render("viewThem", { title: "This is the view of items " });
});

app.post('/questions', function (request, response) {

    var question = new models.Question({
			title: request.body.title,
			text: request.body.text,
			votes_count: request.body.votes_count,
			answers_count: request.body.answers_count,
			views_count: request.body.views_count,
			tags: request.body.tags
		});

	// needs validation!
	question.save( function (err) {
        if (!err) {
            return console.log("Created a question");
        } else {
            return console.log(err);
        }
    });
});

app.get('/questions', function (req, res) {

	return models.Question.find(function (err, questions) {

		if (!err) {
			res.send(questions);
		} else {
			console.log(err);
		}
	});
});

app.get('/questions/:id', function (request, response) {

	var model = models.Question.findById(request.params.id,
		function (err, question) {
			if (!err) {
				response.send(question);
			} else{
				console.log(err);
			}
		}
	);
});

app.put('/questions/:id', function (request, response) {

	var newAnswerColleciton = response.body.answerCollection,
		conditions = {answersCollection: newAnswerColleciton };

	//needs validation!
	question.update(conditions, function (err) {
		
        if (!err) {
            return console.log("Created a question");
        } else {
            return console.log(err);
        }
    });
});
