
/**
 * Module dependencies.
 */

var express = require('express')
  , controller = require('./controller/router')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();
var mongoose = require ("mongoose");
var MongoClient = require('mongodb').MongoClient;

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
/*app.set('view engine', 'jade');*/
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
//module.exports = controller;

//app.get('/', controller.index);

require('./controller/router')(app);
//require('./controller/RecipeGeneration')(app);
/*require('./repository/TestCaseDb')(app);
*/
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


