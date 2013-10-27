var app_root = __dirname;
var express = require('express');
var mongoose = require('mongoose');
var less_middleware = require('less-middleware');
var less = require('less');
var app = express();

var pub_dir = app_root + '/public';
var styles_dir = pub_dir + '/stylesheets';
var views_dir = app_root + '/views';

var models = {};
models.Answer = require('./models/answer');
models.Question = require('./models/question')(mongoose, models.Answer).model;

// ========= CONFIGURATION =========

app.configure( function() {
	app.set('views', views_dir);
	app.set('view engine', 'jade');

	app.use( express.bodyParser() );
	app.use( express.cookieParser() );

	// app.use( express.session({secret: "This is a secret code" }));
	app.use( express.methodOverride());
	app.use( less_middleware({ src: pub_dir }));
	app.use( app.router );
	app.use( express.favicon() );
	app.use( express.static(app_root + "/public") );
	app.use( express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});

var port = 4711;
var host = '127.0.0.1';

app.listen( port, host, function() {
    return console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});

mongoose.connect('mongodb://localhost/hackoverflow');

//Routes
app.get('/', function(request, response) {
	response.render("index", { title: "This is the Hakckoverflow " });
});

app.get('/viewThem', function(request, response) {
	response.render("viewThem", { title: "This is the view of items " });
});

app.post('/questions', function(request, response) {
    console.log("Creating question");
    var question = new models.Question({
		title: request.body.title,
		text: request.body.text,
		votes_count: request.body.votes_count,
		answers_count: request.body.answers_count,
		views_count: request.body.views_count,
		tags: request.body.tags
	});

	//needs validation!
	question.save( function(err) {
        if (!err) {
            return console.log("Created a question");
        } else {
            return console.log(err);
        }
    });
});

app.get('/questions', function(req, res) {
	return models.Question.find( function(err, questions) {
		if (!err) {
			res.send(questions);
		} else {
			console.log(err);
		}
	});
});

app.get('/questions/:id', function(request, response) {
	return models.Question.findById(request.params.id, 
		function(err, questions) {
			if (!err) {
				res.send(questions);
			} else {
				console.log(err);
			}
		}
	);
});