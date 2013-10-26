var app_root = __dirname;
var express = require('express');
var mongoose = require('mongoose');
var less_middleware = require('less-middleware');

var app = express();

var pub_dir = app_root + '/public';
var styles_dir = pub_dir + '/styles';
var views_dir = app_root + '/views';


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






